import { readFileSync } from "node:fs"
import { createElement } from "react"
import { renderToStaticMarkup } from "react-dom/server"
import { afterEach, describe, expect, it, vi } from "vitest"
import HomePage, { metadata } from "@/app/(marketing)/page"
import ResourcesPage, { metadata as resourcesMetadata } from "@/app/(marketing)/resources/page"
import MarketingLayout from "@/app/(marketing)/layout"
import Navbar from "@/components/shared/Navbar"
import { getPublicInventory } from "@/components/marketing/content-inventory"
import { getQuestionsByIds } from "@/lib/content"
import { tiers } from "@/lib/plans"
import { organizationLd } from "@/lib/structured-data"
import publicTheme from "@/components/marketing/PublicTheme.module.css"

const state = vi.hoisted(() => ({ paywall: false, pathname: "/" }))
vi.mock("@/lib/entitlements", async (importOriginal) => ({
  ...await importOriginal<typeof import("@/lib/entitlements")>(),
  get PAYWALL_ENABLED() { return state.paywall },
}))
vi.mock("next/navigation", () => ({ usePathname: () => state.pathname }))
vi.mock("@/components/analytics/TrackView", () => ({ default: ({ event }: { event: string }) => createElement("span", { "data-test-view": event }) }))

afterEach(() => { state.paywall = false; state.pathname = "/" })

const render = () => renderToStaticMarkup(createElement(HomePage))

describe("public teaching-first implementation", () => {
  it("does not inherit an unsupported score-improvement claim in organization data or the default description", () => {
    expect(organizationLd().description).toContain("structured chapters, original practice questions, full explanations")
    expect(organizationLd().description).not.toMatch(/565|735|took the founder/)
    expect(readFileSync("src/app/layout.tsx", "utf8")).not.toContain("took Adam from")
  })
  it("uses one literal offer heading and normal conversion destinations", () => {
    const html = render()
    expect(html.match(/<h1\b/g)).toHaveLength(1)
    expect(html).toContain("GMAT preparation.</h1>")
    for (const href of ["/signup", "/pricing", "/course", "/sample-chapter/quant", "/pricing#platform-plans", "/pricing#coaching-plans", "/about"]) {
      expect(html).toContain(`href="${href}"`)
    }
    expect(html).toContain('href="#inside"')
    expect(html).toContain("Try the teaching before")
  })

  it("keeps the initial bank answer hidden and offers all three subject tabs", () => {
    const [question] = getQuestionsByIds(["algebra-q8"])
    const html = render()
    expect(html).toContain(question.prompt.replaceAll("<", "&lt;").replaceAll(">", "&gt;"))
    expect(html.match(/type="radio"/g)).toHaveLength(5)
    expect(html.match(/role="tab"/g)).toHaveLength(3)
    expect(html).toMatch(/<button[^>]*disabled=""[^>]*>Check answer/)
    expect(html).not.toContain('role="status"')
    expect(html).toContain("This answer is not saved to your study history.")
    expect(html).toContain("not a diagnostic or a prediction of your score")
  })

  it("uses real inventory and canonical platform prices, with full coaching details linked", () => {
    const html = render()
    const inventory = getPublicInventory()
    expect(html).toContain(`${inventory.chapters} interactive chapters`)
    expect(html).toContain(inventory.questions.toLocaleString("en-US"))
    for (const tier of tiers.filter(tier => ["self_study", "self_study_guaranteed"].includes(tier.id))) {
      expect(html).toContain(`$${tier.price}`)
    }
    expect(html).toContain("Some chapter tests are still in preparation.")
    expect(html).toContain("No scheduled calls.")
    expect(html).not.toMatch(/trusted by thousands|guaranteed 7|100% success|<blockquote/i)
  })

  it.each([false, true])("keeps accurate trial and payment terms with paywall=%s", paywall => {
    state.paywall = paywall
    const html = render()
    expect(html).toContain("Start 7-day trial")
    expect(html).toContain("No credit card. No automatic charge.")
    expect(html.includes("Early-release access currently continues beyond 7 days.")).toBe(!paywall)
    expect(html.includes("A paid plan is needed after 7 days.")).toBe(paywall)
    expect(html).toContain("Sending an enquiry does not start a paid plan")
    expect(html).toContain("There is no in-app placement diagnostic")
  })

  it.each([
    ["/", HomePage, metadata],
    ["/resources", ResourcesPage, resourcesMetadata],
  ] as const)("publishes %s with one shared shell and without preview metadata or destinations", (path, Page, pageMetadata) => {
    state.pathname = path
    const html = renderToStaticMarkup(createElement(MarketingLayout, null, createElement(Page)))
    expect(html.match(/<main\b/g)).toHaveLength(1)
    expect(html.match(/<footer\b/g)).toHaveLength(1)
    expect(html.match(/aria-label="Public navigation"/g)).toHaveLength(1)
    expect(html).toContain('href="#main-content"')
    expect(html).toContain('href="/resources"')
    expect(html).not.toMatch(/landing-preview|candidate-main|Internal Resources preview|data-homepage-candidate/)
    expect(pageMetadata.alternates?.canonical).toBe(path)
    expect(pageMetadata.robots).toMatchObject({ index: true, follow: true })
    expect(pageMetadata.openGraph?.url).toBe(path)
    expect(JSON.stringify(pageMetadata)).not.toMatch(/Internal|preview|noimageindex|565|735/)
    expect(html.match(/data-test-view="landing_view"/g)?.length ?? 0).toBe(path === "/" ? 1 : 0)
  })

  it("keeps the single resource download form with optional, unchecked marketing consent", () => {
    const html = renderToStaticMarkup(createElement(ResourcesPage))
    expect(html.match(/type="email"/g)).toHaveLength(1)
    expect(html).toContain('aria-label="Email me GMAT study tips and updates"')
    expect(html).not.toMatch(/<input[^>]*type="checkbox"[^>]*checked/)
    expect(html).toContain("Download access does not require marketing consent.")
    expect(html).toContain('href="/blog"')
  })

  it.each(["/", "/pricing", "/sample-chapter/quant", "/resources"])("keeps navigation consistent on %s", pathname => {
    state.pathname = pathname
    const html = renderToStaticMarkup(createElement(Navbar))
    expect(html).toContain(publicTheme.navigation)
    expect(html).toContain('aria-label="Public navigation"')
    expect(html).toContain('aria-label="Open menu"')
  })

  it("does not import preview routes into production or alter the prep layout", () => {
    for (const file of ["src/app/(marketing)/page.tsx", "src/app/(marketing)/resources/page.tsx", "src/components/marketing/TeachingHomepage.tsx", "src/components/marketing/ResourcesLibrary.tsx"]) {
      expect(readFileSync(file, "utf8")).not.toContain("landing-preview")
    }
    expect(readFileSync("src/app/(app)/layout.tsx", "utf8")).not.toMatch(/PublicTheme|PublicLanding|PublicMotion/)
    const css = readFileSync("src/components/marketing/PublicLanding.module.css", "utf8")
    expect(css).not.toMatch(/:global\((?:body|html|\.app-workbench)/)
    expect(css).not.toMatch(/font-size:\s*[^;]*vw/)
    expect(css).toContain(".page.publicPage.publicPage { padding-top: var(--public-header-height); }")
    expect(css).toContain("prefers-reduced-motion")
    const asset = readFileSync("public/images/home/quant-lesson.jpg")
    expect(Array.from(asset.subarray(0, 3))).toEqual([255, 216, 255])
    expect(asset.byteLength).toBeLessThan(200_000)
  })
})
