import { readFileSync } from "node:fs"
import { createElement } from "react"
import { renderToStaticMarkup } from "react-dom/server"
import { afterEach, describe, expect, it, vi } from "vitest"
import ResourcesCandidate, { metadata } from "@/app/landing-preview/final/resources/page"
import ExistingResources from "@/app/(marketing)/resources/page"
import CandidateHeader from "@/app/landing-preview/final/CandidateHeader"
import Footer from "@/components/shared/Footer"
import { CHECKLISTS, EXTERNAL, POSTS, SAMPLES, TOOLS } from "@/components/marketing/resources-catalog"

const state = vi.hoisted(() => ({ paywall: false }))
vi.mock("@/lib/entitlements", async importOriginal => ({
  ...await importOriginal<typeof import("@/lib/entitlements")>(),
  get PAYWALL_ENABLED() { return state.paywall },
}))
afterEach(() => { state.paywall = false })
const render = () => renderToStaticMarkup(createElement(ResourcesCandidate))
const escaped = (value: string) => value.replace(/[&<>"']/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#x27;" })[char]!)

describe("complete resources candidate", () => {
  it("retains every existing resource category and destination in both presentations", () => {
    expect([TOOLS.length, CHECKLISTS.length, SAMPLES.length, POSTS.length, EXTERNAL.length]).toEqual([4, 1, 3, 9, 10])
    const candidate = render()
    const existing = renderToStaticMarkup(createElement(ExistingResources))
    for (const card of [...TOOLS, ...CHECKLISTS, ...SAMPLES, ...EXTERNAL]) {
      for (const html of [candidate, existing]) {
        expect(html).toContain(`href="${escaped(card.href)}"`)
        expect(html).toContain(escaped(card.title))
        expect(html).toContain(escaped(card.description))
      }
    }
    for (const post of POSTS) {
      for (const html of [candidate, existing]) {
        expect(html).toContain(`href="/blog/${post.slug}"`)
        expect(html).toContain(escaped(post.title))
        expect(html).toContain(escaped(post.description))
      }
    }
  })

  it("shares catalogue data instead of keeping a second divergent content list", () => {
    for (const path of ["src/app/(marketing)/resources/page.tsx", "src/app/landing-preview/final/resources/page.tsx"]) {
      const source = readFileSync(path, "utf8")
      expect(source).toContain("@/components/marketing/ResourcesLibrary")
      expect(source).not.toMatch(/const (TOOLS|SAMPLES|EXTERNAL|FEATURED)\s*[:=]/)
    }
  })

  it("adds Resources to desktop and mobile menus and preserves homepage anchors", () => {
    const home = renderToStaticMarkup(createElement(CandidateHeader))
    const resources = renderToStaticMarkup(createElement(CandidateHeader, { activePage: "resources" }))
    expect(home.match(/href="\/landing-preview\/final\/resources"/g)).toHaveLength(2)
    expect(resources.match(/aria-current="page"/g)).toHaveLength(2)
    for (const fragment of ["inside", "how-it-works", "plans"]) {
      expect(home).toContain(`href="#${fragment}"`)
      expect(resources).toContain(`href="/landing-preview/final#${fragment}"`)
    }
    expect(resources).toContain('href="/landing-preview/final"')
  })

  it("keeps the preview unindexed and separate from the public Resources URL", () => {
    const html = render()
    expect(metadata.robots).toMatchObject({ index: false, follow: false })
    expect(metadata.alternates?.canonical).toBe("/landing-preview/final/resources")
    expect(html).toContain("Internal Resources preview. Not live.")
    expect(html.match(/<h1\b/g)).toHaveLength(1)
    expect(html).toContain("Free GMAT resources.</h1>")
    expect(html).toContain('id="resources-main" tabindex="-1"')
    expect(readFileSync("src/app/sitemap.ts", "utf8")).not.toContain("landing-preview")
  })

  it("preserves the real download form without requiring marketing consent", () => {
    const html = render()
    expect(html.match(/<form\b/g)).toHaveLength(1)
    expect(html.match(/type="email"/g)).toHaveLength(1)
    expect(html.match(/type="checkbox"/g)).toHaveLength(1)
    expect(html).not.toMatch(/<input[^>]*type="checkbox"[^>]*checked/)
    expect(html).toContain("Download access does not require marketing consent.")
    expect(html).toContain('aria-label="Email me GMAT study tips and updates"')
    expect(html).not.toContain("the system behind his 565 to 735")
    expect(html).not.toMatch(/href="[^\"]*\.csv"/)
    const source = readFileSync("src/components/marketing/ResourcesLibrary.tsx", "utf8")
    expect(source).toContain('source="resources" leadMagnet="error-log-template"')
  })

  it("keeps all guides and external references visible rather than hiding them in disclosures", () => {
    const html = render()
    expect(html.match(/target="_blank"/g)).toHaveLength(EXTERNAL.length)
    expect(html.match(/rel="noopener noreferrer"/g)).toHaveLength(EXTERNAL.length)
    expect(html).toContain("CC BY 4.0")
    expect(html).toContain("CC BY-NC-SA 4.0")
    expect(html).toContain("not incorporated into this paid course")
    const guides = html.slice(html.indexOf('id="guides"'), html.indexOf('id="external"'))
    expect(guides).not.toContain("<details")
    for (const id of ["samples", "tools", "templates", "guides", "external", "checklists"]) {
      expect(html).toContain(`id="${id}"`)
    }
  })

  it.each([false, true])("retains canonical trial copy with paywall=%s", paywall => {
    state.paywall = paywall
    const html = render()
    expect(html).toContain("Start 7-day trial")
    expect(html).toContain("No card required.")
    expect(html.includes("Online checkout is not yet open")).toBe(!paywall)
    expect(html).not.toContain("money-back guarantee")
  })

  it("uses current reference destinations and avoids unverified rankings or duration claims", () => {
    expect(EXTERNAL.some(r => r.href === "https://www.mba.com/exams/gmat-exam/register/exam-policies")).toBe(true)
    expect(EXTERNAL.some(r => r.href === "https://www.gmatninja.com/free-gmat-course/")).toBe(true)
    expect(JSON.stringify(EXTERNAL)).not.toMatch(/2020-07-10|45 hours|largest free archive|only practice scores worth fully trusting/i)
  })

  it("keeps Footer defaults while making preview home and template links consistent", () => {
    const existing = renderToStaticMarkup(createElement(Footer))
    expect(existing).toContain('href="/resources#templates"')
    expect(existing).toContain('href="/resources"')
    const html = render()
    expect(html).toContain('href="/landing-preview/final/resources#templates"')
    expect(html).toContain('href="/landing-preview/final"')
    expect(html).toContain("Privacy settings")
  })

  it("scopes the new layout and preserves readable inputs and reduced motion", () => {
    const css = readFileSync("src/components/marketing/Resources.module.css", "utf8")
    expect(css).not.toMatch(/:global\((?:body|html|\.app-workbench)/)
    expect(css).not.toMatch(/font-size:\s*[^;]*vw|letter-spacing:\s*-/)
    expect(css).toContain("prefers-reduced-motion")
    expect(css).toContain('input[type="email"] { min-height: 48px; font-size: 16px;')
    expect(css).not.toContain("linear-gradient")
  })
})
