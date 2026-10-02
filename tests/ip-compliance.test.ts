import { readFileSync } from "node:fs"
import { resolve } from "node:path"
import { describe, expect, it } from "vitest"

function read(relativePath: string) {
  return readFileSync(resolve(relativePath), "utf8")
}

const trademarkNotice =
  "GMAC™, GMAT™, Graduate Management Admission Council™, and Graduate"

describe("IP compliance guardrails", () => {
  it("uses the approved GMAC trademark and independence notice", () => {
    const footer = read("src/components/shared/Footer.tsx")
    const terms = read("src/app/(marketing)/terms/page.tsx")

    expect(footer).toContain(trademarkNotice)
    expect(footer).toMatch(
      /not\s+affiliated with, endorsed by, or sponsored by GMAC/,
    )
    expect(terms).toContain("trademarks of GMAC in the United States and other countries")
    expect(terms).not.toContain("GMAT&trade; is a registered trademark")
  })

  it("does not restore unsupported competitor score comparisons", () => {
    const diagnostic = read("src/content/lessons/02-diagnostic-deep-dive.md")
    const mocks = read("src/content/lessons/06-mock-strategy.md")
    const calculator = read("src/app/(app)/score-calculator/ScoreCalculatorClient.tsx")
    const combined = `${diagnostic}\n${mocks}\n${calculator}`

    expect(combined).not.toMatch(/Manhattan tends|TTP's scoring/i)
    expect(combined).not.toMatch(/150 to 200 point gap/i)
    expect(combined).not.toMatch(/same basis as major prep calculators/i)
    expect(combined).not.toMatch(/rival official questions/i)
  })

  it("labels the linked open resources with their actual licenses", () => {
    const resources = read("src/app/(marketing)/resources/page.tsx")

    expect(resources).toContain('badge: "CC BY 4.0"')
    expect(resources).toContain('badge: "CC BY-NC-SA 4.0"')
    expect(resources).toContain("not incorporated into this paid course")
  })

  it("requires source isolation, provenance, and honest human review", () => {
    const agentRules = read("AGENTS.md")
    const taxonomy = read("QUESTION_TAXONOMY.md")
    const provenance = read("CONTENT_PROVENANCE.md")
    const combined = `${agentRules}\n${taxonomy}\n${provenance}`

    expect(combined).toContain("source-isolation")
    expect(combined).toContain("Do not provide official GMAC questions")
    expect(combined).toContain("Future batch entry template")
    expect(combined).toContain("Quarterly audit procedure")
    expect(combined).toContain("AI generation alone is not human authorship")
  })

  it("publishes generated third-party notices", () => {
    const notices = read("public/third-party-notices.txt")

    expect(notices).toContain("ZAKARIAN GMAT THIRD-PARTY SOFTWARE NOTICES")
    expect(notices).toMatch(/next@\d/)
    expect(notices).toMatch(/react@\d/)
    expect(notices).toContain("MIT License")
    expect(notices.length).toBeGreaterThan(100_000)
  })
})
