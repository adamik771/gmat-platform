import { readFileSync } from "node:fs"
import { createElement, isValidElement, type ReactElement, type ReactNode } from "react"
import { renderToStaticMarkup } from "react-dom/server"
import { afterEach, describe, expect, it, vi } from "vitest"
import FinalHomepageCandidate, { metadata } from "@/app/landing-preview/final/page"
import TeachingHomepage from "@/components/marketing/TeachingHomepage"
import TeachingSamples, { type TeachingSample } from "@/components/marketing/TeachingSamples"
import LandingPreviewLayout from "@/app/landing-preview/layout"
import ExcludeLandingPreview from "@/components/shared/ExcludeLandingPreview"
import { getPublicInventory } from "@/components/marketing/content-inventory"
import { getQuestionsByIds } from "@/lib/content"
import { tiers } from "@/lib/plans"
import { PLAN_ACCESS_MONTHS } from "@/lib/plan-access"

const state = vi.hoisted(() => ({ paywall: false, pathname: "/landing-preview/final" }))
vi.mock("@/lib/entitlements", async (importOriginal) => ({
  ...await importOriginal<typeof import("@/lib/entitlements")>(),
  get PAYWALL_ENABLED() { return state.paywall },
}))
vi.mock("next/navigation", () => ({
  usePathname: () => state.pathname,
  notFound: () => { throw new Error("NEXT_NOT_FOUND") },
}))
afterEach(() => { state.paywall = false; state.pathname = "/landing-preview/final"; vi.unstubAllEnvs() })

const render = () => renderToStaticMarkup(createElement(FinalHomepageCandidate))
function findSamples(node: ReactNode): TeachingSample[] | undefined {
  if (Array.isArray(node)) {
    for (const child of node) { const found = findSamples(child); if (found) return found }
  }
  if (!isValidElement(node)) return
  const element = node as ReactElement<{ children?: ReactNode; samples?: TeachingSample[] }>
  return element.type === TeachingSamples ? element.props.samples : findSamples(element.props.children)
}

describe("teaching-first homepage decision", () => {
  it("is noindex and self-canonical with one literal H1 and no public navigation exposure", () => {
    const html = render()
    expect(metadata.alternates?.canonical).toBe("/landing-preview/final")
    expect(metadata.robots).toMatchObject({ index: false, follow: false })
    expect(html.match(/<h1\b/g)).toHaveLength(1)
    expect(html).toContain("GMAT preparation.</h1>")
    expect(html).toContain("Try the teaching before")
    expect(html).toContain('href="#candidate-main"')
    expect(html).not.toContain("Internal homepage candidate. Not live.")
    expect(readFileSync("src/app/sitemap.ts", "utf8")).not.toContain("landing-preview")
    expect(readFileSync("src/app/(marketing)/page.tsx", "utf8")).not.toContain("landing-preview")
  })

  it("delivers the sample before selling the account and exposes all three subjects", () => {
    const html = render()
    expect(html).toMatch(/href="#inside"[^>]*>Try a real question/)
    for (const label of ["Quant", "Verbal", "Data Insights"]) expect(html).toContain(label)
    expect(html).toContain('aria-label="Choose a sample section"')
    expect(html).toContain("not a diagnostic or a prediction of your score")
    expect(html).toContain("Make room for this in your preparation.")
    expect(html).toContain("do not have to restart your whole preparation")
    expect(html).toContain("The account adds the full course, saved practice results and review.")
  })

  it.each(["algebra-q8", "reading-comprehension-q2", "data-sufficiency-q3"])("preserves %s context, choices, key and entire explanation without revealing it first", id => {
    const [question] = getQuestionsByIds([id])
    const samples = findSamples(TeachingHomepage())!
    const sample = samples.find(item => (item as TeachingSample & { questionId: string }).questionId === id)!
    expect(sample.level).toBe(question.difficulty)
    const rendered = renderToStaticMarkup(sample.question)
    expect(rendered.match(/type="radio"/g)).toHaveLength(5)
    expect(rendered).toMatch(/<button[^>]*disabled=""[^>]*>Check answer/)
    expect(rendered).not.toContain('role="status"')
    expect(rendered).toContain("This answer is not saved to your study history.")
    const props = (sample.question as ReactElement<{correctAnswer: number; explanation: ReactNode}>).props
    expect(props.correctAnswer).toBe(question.correctAnswer)
    const explanation = renderToStaticMarkup(props.explanation)
    expect(explanation).toContain(question.explanation.split("\n\n").at(-1)!.replaceAll('"', "&quot;"))
    if (question.context) expect(rendered).toContain("The subscription economy")
    if (question.commonTrap) expect(explanation).toContain("A mistake to watch for")
    // The server supplies the original full strings, never shortened marketing summaries.
    const source = readFileSync("src/components/marketing/TeachingHomepage.tsx", "utf8")
    expect(source).toContain("markdown(question.explanation)")
    expect(source).toContain("markdown(question.context)")
    expect(source).toContain("question.options.map")
  })

  it("uses live non-additive inventory and flags incomplete chapter tests", () => {
    const inventory = getPublicInventory()
    const html = render()
    expect(html).toContain(`${inventory.chapters} interactive chapters`)
    expect(html).toContain(`${inventory.questions.toLocaleString("en-US")} original bank questions`)
    expect(html).toContain("Chapter problem sets draw from this bank.")
    expect(html).toContain("Some chapter tests are still in preparation.")
  })

  it("qualifies the paid offer before free sampling, using canonical prices and terms", () => {
    const html = render()
    for (const id of ["self_study", "self_study_guaranteed"] as const) {
      expect(html).toContain(`$${tiers.find(t => t.id === id)!.price}`)
      expect(html).toContain(`${PLAN_ACCESS_MONTHS[id]} months`)
    }
    expect(html).toContain("No scheduled calls.")
    expect(html).toContain("USD, paid once")
    expect(html).toContain('href="/pricing#platform-plans"')
    expect(html).toContain('href="/pricing#coaching-plans"')
    expect(html).toContain("Sending an enquiry does not start a paid plan")
  })

  it.each([false, true])("keeps the trial bridge truthful with paywall=%s", paywall => {
    state.paywall = paywall
    const html = render()
    expect(html).toContain("Start 7-day trial")
    expect(html).toContain("No credit card. No automatic charge.")
    expect(html.includes("Early-release access currently continues beyond 7 days.")).toBe(!paywall)
    expect(html.includes("A paid plan is needed after 7 days.")).toBe(paywall)
    expect(html).toContain("Confirm your email if prompted")
    expect(html).toContain("There is no in-app placement diagnostic")
  })

  it("does not use an unverified founder score, testimonials, diagnostic or a booking promise", () => {
    const html = render()
    expect(html).not.toMatch(/735|565|percentile|<blockquote|<form|Book a call|guaranteed score|trusted by thousands/)
    expect(html).toContain('href="/about"')
  })

  it("retains Resources and native destinations, without new trackers or calls", () => {
    const html = render()
    for (const href of ["/signup", "/login", "/pricing", "/sample-chapter/quant", "/course", "/refund", "#inside", "#how-it-works", "#plans", "/landing-preview/final/resources"]) {
      expect(html).toContain(`href="${href}"`)
    }
    expect(readFileSync("src/app/landing-preview/final/CandidateHeader.tsx", "utf8")).toContain('event.key === "Escape"')
    for (const file of ["src/app/landing-preview/final/page.tsx", "src/components/marketing/TeachingSamples.tsx", "src/components/marketing/TeachingHomepage.tsx"]) {
      expect(readFileSync(file, "utf8")).not.toMatch(/trackEvent|TrackView|fetch\(|dangerouslySetInnerHTML/)
    }
    expect(readFileSync("src/components/marketing/TeachingSamples.tsx", "utf8")).toContain("keepMounted={false}")
  })

  it("scopes design, keeps real media and readable controls without viewport font scaling", () => {
    const css = readFileSync("src/components/marketing/TeachingFirst.module.css", "utf8")
    expect(css).not.toMatch(/:global\((?:body|html|\.app-workbench)/)
    expect(css).not.toMatch(/font-size:\s*[^;]*vw|letter-spacing:\s*-/)
    expect(css).toContain("min-height: 50px")
    expect(readFileSync("src/components/marketing/PublicLanding.module.css", "utf8")).toContain("prefers-reduced-motion")
    expect(readFileSync("public/images/home/quant-lesson.jpg").byteLength).toBeLessThan(200_000)
  })

  it("inherits the shared dark brand while retaining the teaching-first header layout", () => {
    const css = readFileSync("src/components/marketing/TeachingFirst.module.css", "utf8")
    const palette = readFileSync("src/components/marketing/PublicTheme.module.css", "utf8")
    expect(palette).toContain("--public-bg: #0a0a0a")
    expect(palette).toContain("--public-accent: #c9a84c")
    expect(palette).toContain("color-scheme: dark")
    expect(css).toContain(".page .header")
    const source = readFileSync("src/app/landing-preview/final/page.tsx", "utf8")
    expect(source).toContain("<CandidateHeader className={styles.header}")
    expect(readFileSync("src/app/landing-preview/final/CandidateHeader.tsx", "utf8")).toContain('className = ""')
    expect(readFileSync("src/app/landing-preview/final/resources/page.tsx", "utf8")).not.toContain("TeachingFirst.module.css")
  })

  it("presents one working sample workspace and one account bridge, with no motion on questions", () => {
    const html = render()
    expect(html.match(/id="sample-question"/g)).toHaveLength(1)
    expect(html.match(/Make room for this in your preparation\./g)).toHaveLength(1)
    expect(html).toContain('aria-label="Quant sample lesson"')
    expect(html).toContain("Read the lesson")
    const source = readFileSync("src/app/landing-preview/final/page.tsx", "utf8")
    expect(source).toContain("<PublicMotion>")
    expect(readFileSync("src/components/marketing/TeachingSamples.tsx", "utf8")).not.toContain("data-motion")
  })
})

describe("preview access and inherited services", () => {
  it.each([
    ["production", "", "", false],
    ["production", "1", "", true],
    ["development", "", "", true],
    ["development", "1", "1", false],
    ["production", "1", "1", false],
  ])("NODE_ENV=%s local=%s VERCEL=%s allowed=%s", (mode, local, vercel, allowed) => {
    vi.stubEnv("NODE_ENV", mode); vi.stubEnv("LOCAL_LANDING_PREVIEW", local); vi.stubEnv("VERCEL", vercel)
    const run = () => LandingPreviewLayout({ children: "safe local content" })
    if (allowed) expect(run()).toBe("safe local content")
    else expect(run).toThrow("NEXT_NOT_FOUND")
    expect(readFileSync("src/app/landing-preview/layout.tsx", "utf8")).toContain('dynamic = "force-dynamic"')
  })

  it.each(["/landing-preview", "/landing-preview/final", "/landing-preview/final/resources"])("excludes inherited marketing measurement and claims from %s", path => {
    state.pathname = path
    expect(renderToStaticMarkup(createElement(ExcludeLandingPreview, null, "tracking sentinel"))).toBe("")
  })

  it.each(["/", "/course", "/pricing", "/dashboard", "/landing-preview-other"])("preserves services outside the preview: %s", path => {
    state.pathname = path
    expect(renderToStaticMarkup(createElement(ExcludeLandingPreview, null, "original children"))).toBe("original children")
  })

  it("wraps all inherited marketing services and JSON-LD, not auth or payments", () => {
    const root = readFileSync("src/app/layout.tsx", "utf8")
    for (const component of ["Analytics", "AdPixels", "AttributionCapture"]) {
      expect(root).toContain(`<ExcludeLandingPreview><${component} /></ExcludeLandingPreview>`)
    }
    expect(root).toContain("<ExcludeLandingPreview><JsonLd")
    expect(root).toContain("<ConsentBanner />")
  })
})
