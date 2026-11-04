import { readFileSync } from "node:fs"
import { createElement } from "react"
import { renderToStaticMarkup } from "react-dom/server"
import { describe, expect, it } from "vitest"
import FAQAccordion from "@/components/marketing/FAQAccordion"

const read = (path: string) => readFileSync(path, "utf8")
const items = [
  { question: "Is this a subscription?", answer: "One payment, no recurring subscription." },
  { question: "What happens after the trial?", answer: "The existing access terms still apply." },
  { question: "How do I contact Adam?", answer: "Use the existing email or WhatsApp links." },
]

describe("public transition safety", () => {
  it("keeps every FAQ answer in server HTML with only the first expanded", () => {
    const html = renderToStaticMarkup(createElement(FAQAccordion, { items }))
    for (const item of items) {
      expect(html).toContain(item.question)
      expect(html).toContain(item.answer)
    }
    expect(html.match(/aria-expanded="true"/g)).toHaveLength(1)
    expect(html.match(/aria-expanded="false"/g)).toHaveLength(2)
    expect(html.match(/hidden=""/g)).toHaveLength(2)
    for (const [, id] of html.matchAll(/aria-controls="([^"]+)"/g)) {
      expect(html).toContain(`id="${id}"`)
    }
  })

  it("uses the installed accessible accordion with measured, reversible height transitions", () => {
    const source = read("src/components/marketing/FAQAccordion.tsx")
    expect(source).toContain('@base-ui/react/accordion')
    expect(source).toContain("keepMounted")
    expect(source).toContain("defaultValue={[0]}")
    const css = read("src/components/marketing/FAQAccordion.module.css")
    expect(css).toContain("height: var(--accordion-panel-height)")
    expect(css).toContain(".panel[data-starting-style], .panel[data-ending-style] { height: 0; }")
    expect(css).not.toMatch(/max-height|transition:\s*all|setTimeout/)
    expect(css).toContain("prefers-reduced-motion: reduce")
  })

  it("enables native anchor motion only on public pages, with instant reduced-motion behavior", () => {
    const css = read("src/components/marketing/PublicTheme.module.css")
    expect(css).toContain(":global(html):has(.site), :global(html):has(.palette) { scroll-behavior: smooth; }")
    expect(css).toContain(":global(html):has(.site), :global(html):has(.palette) { scroll-behavior: auto !important; }")
    expect(read("src/app/layout.tsx")).toContain('data-scroll-behavior="smooth"')
    expect(css).toContain("transition-property: color, background-color, border-color, box-shadow")
    expect(css).toContain(":is(.site, .palette, .drawer) :disabled { transition: none; }")
    expect(css).not.toMatch(/transition:\s*all|will-change|scroll-snap/)
  })

  it("progressively enhances reading disclosures without clipping the mobile navigation", () => {
    const css = read("src/components/marketing/PublicTheme.module.css")
    expect(css).toContain("@supports (interpolate-size: allow-keywords) and selector(details::details-content)")
    expect(css).toContain("details:not([data-public-menu])::details-content")
    const header = read("src/app/landing-preview/final/CandidateHeader.tsx")
    expect(header).toContain("<details ref={menu} data-public-menu")
    expect(header).toContain('activePage === "resources" ? Link : "a"')
  })

  it("does not introduce a delayed route, sample answer, timer or form animation", () => {
    const css = read("src/components/marketing/PublicTheme.module.css")
    expect(css).toContain("h1 { animation: public-page-arrive")
    expect(css).not.toMatch(/animation-delay|transition-delay|view-transition/)
    expect(read("src/app/(marketing)/sample-chapter/SampleQuestion.tsx")).not.toMatch(/animate|setTimeout|PublicMotion/)
    expect(read("src/app/(app)/layout.tsx")).not.toMatch(/PublicTheme|PublicMotion/)
  })
})
