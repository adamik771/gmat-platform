import { createElement, isValidElement, type ReactElement, type ReactNode } from "react"
import { renderToStaticMarkup } from "react-dom/server"
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest"
import { track } from "@vercel/analytics"
import { flushPendingAdEvents, subscribeConsent, trackEvent, trackPlanEnquiry, type PlanEnquiryEvent } from "@/lib/analytics"
import PlanEnquiryLink from "@/components/marketing/PlanEnquiryLink"
import PricingCard from "@/components/marketing/PricingCard"
import type { PricingTier } from "@/types"

vi.mock("@vercel/analytics", () => ({ track: vi.fn() }))

const event: PlanEnquiryEvent = { plan_id: "self_study", channel: "whatsapp", surface: "pricing" }
const values = new Map<string, string>()
const gtag = vi.fn()
const fbq = vi.fn()
const storage = {
  getItem: vi.fn((key: string) => values.get(key) ?? null),
  setItem: vi.fn((key: string, value: string) => { values.set(key, value) }),
  removeItem: vi.fn((key: string) => { values.delete(key) }),
}

beforeEach(() => {
  values.clear()
  vi.resetAllMocks()
  storage.getItem.mockImplementation((key) => values.get(key) ?? null)
  vi.stubGlobal("window", { localStorage: storage, gtag, fbq })
  vi.stubEnv("NEXT_PUBLIC_GOOGLE_TAG_ID", "G-TEST")
  vi.stubEnv("NEXT_PUBLIC_META_PIXEL_ID", "test-pixel")
  flushPendingAdEvents()
})

afterEach(() => {
  values.clear()
  flushPendingAdEvents()
  vi.unstubAllGlobals()
  vi.unstubAllEnvs()
})

function expectNoEvent() {
  expect(track).not.toHaveBeenCalled()
  expect(gtag).not.toHaveBeenCalled()
  expect(fbq).not.toHaveBeenCalled()
}

describe("plan enquiry measurement", () => {
  it.each([null, "denied", "invalid"])("sends nothing to any sink with consent %s", (consent) => {
    if (consent) values.set("zg_consent", consent)
    trackPlanEnquiry(event)
    values.set("zg_consent", "granted")
    flushPendingAdEvents()
    expectNoEvent()
  })

  it("is a no-op on the server or when consent storage is blocked", () => {
    vi.stubGlobal("window", undefined)
    expect(() => trackPlanEnquiry(event)).not.toThrow()
    vi.stubGlobal("window", { localStorage: storage, gtag, fbq })
    storage.getItem.mockImplementation(() => { throw new Error("Storage blocked") })
    expect(() => trackPlanEnquiry(event)).not.toThrow()
    expectNoEvent()
  })

  it.each(["self_study", "self_study_guaranteed", "coaching", "intensive"] as const)("records only allowlisted fields for %s", (plan_id) => {
    values.set("zg_consent", "granted")
    values.set("zg_attribution", JSON.stringify({ email: "private@example.com", ref: "private-message", utm_source: "personal-value" }))
    for (const channel of ["whatsapp", "email"] as const) {
      for (const surface of ["pricing", "upgrade"] as const) {
        const props = { plan_id, channel, surface }
        trackPlanEnquiry({ ...props, href: "mailto:private@example.com", accountEmail: "private@example.com" } as PlanEnquiryEvent)
        expect(track).toHaveBeenLastCalledWith("plan_enquiry_clicked", props)
        expect(gtag).toHaveBeenLastCalledWith("event", "plan_enquiry_clicked", props)
        expect(fbq).toHaveBeenLastCalledWith("trackCustom", "plan_enquiry_clicked", props)
      }
    }
    expect(track).toHaveBeenCalledTimes(4)
    expect(storage.getItem).not.toHaveBeenCalledWith("zg_attribution")
    expect(storage.setItem).not.toHaveBeenCalled()
  })

  it.each([
    { ...event, plan_id: "private@example.com" },
    { ...event, channel: "https://wa.me/private" },
    { ...event, surface: "/upgrade?email=private@example.com" },
  ])("rejects invalid enum fields instead of transmitting them", (props) => {
    values.set("zg_consent", "granted")
    trackPlanEnquiry(props as PlanEnquiryEvent)
    expectNoEvent()
  })

  it("does not fire again on mount or queue flush, but records separate clicks", () => {
    values.set("zg_consent", "granted")
    renderToStaticMarkup(createElement(PlanEnquiryLink, { href: "mailto:test@example.com", planId: event.plan_id, channel: event.channel, surface: event.surface }, "Ask"))
    expectNoEvent()
    trackPlanEnquiry(event)
    flushPendingAdEvents()
    expect(track).toHaveBeenCalledTimes(1)
    expect(gtag).toHaveBeenCalledTimes(1)
    trackPlanEnquiry(event)
    expect(gtag).toHaveBeenCalledTimes(2)
  })

  it("queues a consented click for delayed tags without duplicating delivery", () => {
    values.set("zg_consent", "granted")
    vi.stubGlobal("window", { localStorage: storage })
    trackPlanEnquiry(event)
    expect(track).toHaveBeenCalledTimes(1)
    vi.stubGlobal("window", { localStorage: storage, gtag, fbq })
    flushPendingAdEvents()
    flushPendingAdEvents()
    expect(gtag).toHaveBeenCalledExactlyOnceWith("event", "plan_enquiry_clicked", event)
    expect(fbq).toHaveBeenCalledExactlyOnceWith("trackCustom", "plan_enquiry_clicked", event)
  })

  it("drops queued events and future clicks after consent withdrawal", () => {
    values.set("zg_consent", "granted")
    vi.stubGlobal("window", { localStorage: storage })
    trackPlanEnquiry(event)
    values.set("zg_consent", "denied")
    vi.mocked(track).mockClear()
    vi.stubGlobal("window", { localStorage: storage, gtag, fbq })
    flushPendingAdEvents()
    trackPlanEnquiry(event)
    expectNoEvent()
  })

  it.each(["zg_consent", null])("discards queued clicks after cross-tab withdrawal (%s), even if later regranted", (key) => {
    const listeners = new Map<string, (event: unknown) => void>()
    const addEventListener = vi.fn((name: string, listener: (event: unknown) => void) => { listeners.set(name, listener) })
    const removeEventListener = vi.fn((name: string) => { listeners.delete(name) })
    vi.stubGlobal("window", { localStorage: storage, addEventListener, removeEventListener })
    const notify = vi.fn()
    const unsubscribe = subscribeConsent(notify)
    values.set("zg_consent", "granted")
    trackPlanEnquiry(event)
    values.delete("zg_consent")
    listeners.get("storage")!({ key, newValue: null })
    expect(notify).toHaveBeenCalledTimes(1)
    values.set("zg_consent", "granted")
    vi.stubGlobal("window", { localStorage: storage, gtag, fbq, removeEventListener })
    flushPendingAdEvents()
    expect(gtag).not.toHaveBeenCalled()
    expect(fbq).not.toHaveBeenCalled()
    expect(track).toHaveBeenCalledTimes(1)
    unsubscribe()
    expect(listeners.size).toBe(0)
  })

  it("does not throw if any analytics sink fails", () => {
    values.set("zg_consent", "granted")
    const fail = () => { throw new Error("Analytics blocked") }
    vi.mocked(track).mockImplementation(fail)
    gtag.mockImplementation(fail)
    fbq.mockImplementation(fail)
    expect(() => trackPlanEnquiry(event)).not.toThrow()
    expect(track).toHaveBeenCalledTimes(1)
    expect(gtag).toHaveBeenCalledTimes(1)
    expect(fbq).toHaveBeenCalledTimes(1)
  })

  it("preserves existing generic event consent and attribution behavior", () => {
    trackEvent("pricing_view")
    expect(track).toHaveBeenLastCalledWith("pricing_view", {})
    expect(gtag).not.toHaveBeenCalled()
    values.set("zg_consent", "granted")
    values.set("zg_attribution", JSON.stringify({ utm_source: "newsletter" }))
    trackEvent("signup", { gated: false })
    expect(gtag).toHaveBeenLastCalledWith("event", "signup", { utm_source: "newsletter", gated: false })
    expect(fbq).toHaveBeenLastCalledWith("track", "CompleteRegistration", { utm_source: "newsletter", gated: false })
  })
})

describe("plan enquiry links", () => {
  it("retains native navigation without waiting, preventing default or exposing tracking props", () => {
    const href = "https://wa.me/4792949728?text=fixture"
    const element = PlanEnquiryLink({ href, target: "_blank", rel: "noreferrer", className: "same-style", planId: event.plan_id, channel: event.channel, surface: event.surface, children: "Ask" })
    const html = renderToStaticMarkup(element)
    expect(html).toContain(`href="${href}"`)
    expect(html).toContain('target="_blank"')
    expect(html).toContain('rel="noreferrer"')
    expect(html).toContain('class="same-style"')
    expect(html).not.toMatch(/planId=|channel=|surface=/)
    const click = { preventDefault: vi.fn() }
    expect(element.props.onClick(click)).toBeUndefined()
    expect(click.preventDefault).not.toHaveBeenCalled()
    expectNoEvent()
    values.set("zg_consent", "granted")
    element.props.onClick(click)
    expect(track).toHaveBeenCalledExactlyOnceWith("plan_enquiry_clicked", event)
    element.props.onAuxClick({ button: 2 })
    expect(track).toHaveBeenCalledTimes(1)
    element.props.onAuxClick({ button: 1 })
    expect(track).toHaveBeenCalledTimes(2)
    vi.mocked(track).mockImplementation(() => { throw new Error("Blocked") })
    gtag.mockImplementation(() => { throw new Error("Blocked") })
    fbq.mockImplementation(() => { throw new Error("Blocked") })
    expect(() => element.props.onClick(click)).not.toThrow()
    expect(click.preventDefault).not.toHaveBeenCalled()
  })

  it.each([undefined, "/pricing", "/upgrade"] as const)("wires both plan channels to the correct surface for %s", (checkoutCancelPath) => {
    const tier: PricingTier = { id: "self_study", name: "Self-Study", price: 429, priceLabel: "payment", description: "Fixture", features: [], highlighted: false, badge: null, stripePriceId: "", cta: "Get Self-Study" }
    const nodes: ReactElement<Record<string, unknown>>[] = []
    const walk = (node: ReactNode): void => {
      if (Array.isArray(node)) { node.forEach(walk); return }
      if (!isValidElement<Record<string, unknown>>(node)) return
      if (node.type === PlanEnquiryLink) nodes.push(node)
      walk(node.props.children as ReactNode)
    }
    walk(PricingCard({ tier, checkoutCancelPath, purchasable: false, manualContactHref: "https://wa.me/4792949728?text=fixture", manualEmailHref: "mailto:test@example.com?body=fixture" }))
    expect(nodes.map(({ props }) => ({ planId: props.planId, channel: props.channel, surface: props.surface }))).toEqual([
      { planId: "self_study", channel: "whatsapp", surface: checkoutCancelPath === "/upgrade" ? "upgrade" : "pricing" },
      { planId: "self_study", channel: "email", surface: checkoutCancelPath === "/upgrade" ? "upgrade" : "pricing" },
    ])
    expect(nodes[0].props).toMatchObject({ href: "https://wa.me/4792949728?text=fixture", target: "_blank", rel: "noreferrer" })
    expect(nodes[1].props).toMatchObject({ href: "mailto:test@example.com?body=fixture", children: "Or contact Adam by email" })
    expect(nodes[1].props.target).toBeUndefined()
    expect(nodes[1].props.rel).toBeUndefined()
  })

  it("retains the stable mentorship ID rather than its public label", () => {
    values.set("zg_consent", "granted")
    const element = PlanEnquiryLink({ href: "mailto:test@example.com", planId: "self_study_guaranteed", channel: "email", surface: "upgrade", children: "Ask about Mentorship" })
    element.props.onClick()
    expect(track).toHaveBeenCalledExactlyOnceWith("plan_enquiry_clicked", { plan_id: "self_study_guaranteed", channel: "email", surface: "upgrade" })
    expect(renderToStaticMarkup(element)).toContain("Ask about Mentorship")
  })
})
