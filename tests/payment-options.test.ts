import { createElement } from "react"
import { renderToStaticMarkup } from "react-dom/server"
import { afterEach, describe, expect, it, vi } from "vitest"

const { access } = vi.hoisted(() => ({ access: vi.fn(() => "trial_expired") }))
vi.mock("next/navigation", () => ({ useRouter: () => ({ push: vi.fn() }) }))
vi.mock("@/lib/supabase/server", () => ({
  createSupabaseServer: async () => ({ auth: { getUser: async () => ({ data: { user: {
    id: "test-user", email: "student@example.com", user_metadata: {},
  } } }) } }),
}))
vi.mock("@/components/analytics/TrackView", () => ({ default: () => null }))
vi.mock("@/components/marketing/LeadCapture", () => ({ default: () => null }))
vi.mock("@/components/marketing/content-inventory", () => ({
  getPublicInventory: () => ({ chapters: 62, readings: 29, questions: 2007 }),
}))

afterEach(() => { vi.unstubAllEnvs(); vi.resetModules(); access.mockReturnValue("trial_expired") })

async function configure(paywall: boolean, manual: boolean, configured: boolean) {
  vi.resetModules()
  vi.stubEnv("PAYWALL_ENABLED", String(paywall))
  vi.stubEnv("MANUAL_PAYMENT_CONTACT_ENABLED", String(manual))
  vi.stubEnv("STRIPE_SECRET_KEY", configured ? "sk_test_fixture" : "")
  for (const key of ["SELF_STUDY", "SELF_STUDY_GUARANTEED", "COACHING", "INTENSIVE"]) {
    vi.stubEnv(`STRIPE_PRICE_${key}`, configured ? `price_fixture_${key}` : "")
  }
  const entitlements = await import("@/lib/entitlements")
  vi.spyOn(entitlements, "getAccessForUser").mockImplementation(async () => access() as import("@/lib/entitlements").AccessState)
  return import("@/lib/payment-options")
}

describe("payment option consistency", () => {
  it("passes the correct plan, channel and surface from both actual pages", async () => {
    await configure(false, false, false)
    const linkModule = await import("@/components/marketing/PlanEnquiryLink")
    const links = vi.spyOn(linkModule, "default")
    try {
      const Pricing = (await import("@/app/(marketing)/pricing/page")).default
      const Upgrade = (await import("@/app/upgrade/page")).default
      const expected = (surface: "pricing" | "upgrade") =>
        ["self_study", "self_study_guaranteed", "coaching", "intensive"].flatMap((planId) =>
          ["whatsapp", "email"].map((channel) => ({ planId, channel, surface })))
      const observed = () => links.mock.calls.map(([{ planId, channel, surface }]) => ({ planId, channel, surface }))
      renderToStaticMarkup(createElement(Pricing))
      expect(observed()).toEqual(expected("pricing"))
      links.mockClear()
      renderToStaticMarkup(await Upgrade())
      expect(observed()).toEqual(expected("upgrade"))
    } finally {
      links.mockRestore()
    }
  })

  it.each([
    [false, false, false], [false, false, true],
    [false, true, true], [false, true, false], [true, true, true],
    [true, true, false], [true, false, false], [true, false, true],
  ])("keeps page copy and actions aligned (paywall=%s, manual=%s, configured=%s)", async (paywall, manual, configured) => {
    const options = await configure(paywall, manual, configured)
    const online = paywall && !manual && configured
    expect(options.isOnlineCheckoutAvailable("price_fixture")).toBe(online)
    const Pricing = (await import("@/app/(marketing)/pricing/page")).default
    const Faq = (await import("@/app/(marketing)/faq/page")).default
    const Trial = (await import("@/app/(marketing)/gmat-free-trial/page")).default
    const html = renderToStaticMarkup(createElement(Pricing))
    const faq = renderToStaticMarkup(createElement(Faq))
    expect(html).toContain(options.paymentMethodsHelp())
    expect(faq).toContain(options.paymentMethodsHelp())
    expect(html).toContain(options.TRIAL_END_HELP)
    expect(faq).toContain(options.TRIAL_END_HELP)
    expect(renderToStaticMarkup(createElement(Trial))).toContain(options.TRIAL_END_HELP)
    if (online) {
      expect(html).toContain("Get Self-Study")
      expect(html).not.toContain("Ask about Self-Study")
      expect(faq).toContain("accept cards through Stripe")
    } else {
      for (const plan of ["Self-Study", "Mentorship", "Coaching", "Intensive"]) {
        expect(html).toContain(`Ask about ${plan}`)
      }
      expect(html).toContain("https://wa.me/4792949728?text=")
      expect(html).toContain("mailto:hello@zakariangmat.com?")
      expect(html).not.toContain(encodeURIComponent("My Zakarian GMAT trial has ended"))
      expect(faq).not.toContain("All major credit and debit cards via Stripe")
    }
    expect(html.includes('id="founding"')).toBe(!paywall)
    if (!paywall) {
      expect(html).toContain("Prefer to wait? Reserve a founding rate")
      expect(html).toContain("full access continues beyond")
    }
  })

  it("rejects missing and placeholder price IDs even with Stripe configured", async () => {
    const { isOnlineCheckoutAvailable } = await configure(true, false, true)
    for (const id of ["", "price_self_study", "price_self_study_guaranteed", "price_coaching", "price_intensive"]) {
      expect(isOnlineCheckoutAvailable(id)).toBe(false)
    }
  })

  it("does not claim expired or paused access while the paywall is off", async () => {
    await configure(false, false, false)
    const Upgrade = (await import("@/app/upgrade/page")).default
    const html = renderToStaticMarkup(await Upgrade())
    expect(html).toContain("Explore your plan options")
    expect(html).toContain("Ask about Self-Study")
    expect(html).not.toContain("Your free trial has ended")
    expect(html).not.toContain("while access is paused")
    expect(html).not.toContain("Payments are handled securely by Stripe")
  })

  it("keeps continuation links for a genuinely expired trial in active manual mode", async () => {
    await configure(true, true, false)
    const Upgrade = (await import("@/app/upgrade/page")).default
    const html = renderToStaticMarkup(await Upgrade())
    expect(html).toContain("Your free trial has ended")
    expect(html).toContain("Continue on WhatsApp")
    expect(html).toContain("while access is paused")
    expect(html).toContain(encodeURIComponent("My Zakarian GMAT trial has ended"))
  })

  it("does not tell an active paid user their trial ended or access is paused", async () => {
    await configure(true, true, false)
    access.mockReturnValue("paid")
    const Upgrade = (await import("@/app/upgrade/page")).default
    const html = renderToStaticMarkup(await Upgrade())
    expect(html).toContain("Your paid access is active")
    expect(html).not.toContain("Your free trial has ended")
    expect(html).not.toContain("while access is paused")
    expect(html).not.toContain(encodeURIComponent("My Zakarian GMAT trial has ended"))
  })

  it.each(["trialing", "none"])("does not prefill an ended-trial claim for %s access", async (state) => {
    await configure(true, true, false)
    access.mockReturnValue(state)
    const Upgrade = (await import("@/app/upgrade/page")).default
    const html = renderToStaticMarkup(await Upgrade())
    expect(html).toContain("Ask about Self-Study")
    expect(html).not.toContain("Your free trial has ended")
    expect(html).not.toContain("while access is paused")
    expect(html).not.toContain(encodeURIComponent("My Zakarian GMAT trial has ended"))
  })

  it("retains working checkouts when only some plans are configured", async () => {
    const options = await configure(true, false, true)
    const { tiers } = await import("@/lib/plans")
    const mentorship = tiers.find((tier) => tier.id === "self_study_guaranteed")!
    const original = mentorship.stripePriceId
    try {
      mentorship.stripePriceId = "price_self_study_guaranteed"
      const Pricing = (await import("@/app/(marketing)/pricing/page")).default
      const html = renderToStaticMarkup(createElement(Pricing))
      expect(html).toContain("Get Self-Study")
      expect(html).toContain("Ask about Mentorship")
      expect(options.paymentMethodsHelp()).toContain("If online checkout is unavailable for your chosen plan")
    } finally {
      mentorship.stripePriceId = original
    }
  })
})
