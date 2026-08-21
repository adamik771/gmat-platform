import { readFileSync } from "node:fs"
import { resolve } from "node:path"
import { describe, expect, it } from "vitest"

function read(relativePath: string) {
  return readFileSync(resolve(relativePath), "utf8")
}

describe("graduate business audience positioning", () => {
  it("includes finance master's candidates on core marketing surfaces", () => {
    const homepage = read("src/app/(marketing)/page.tsx")
    const faq = read("src/app/(marketing)/faq/page.tsx")
    const metadata = read("src/app/layout.tsx")
    const combined = `${homepage}\n${faq}\n${metadata}`

    expect(combined).toContain("MBA and business master's candidates")
    expect(combined).toContain("Master in Finance")
    expect(combined).toContain("Banking and Finance")
    expect(combined).toContain("MiM")
  })

  it("keeps the founder's HSG connection precise", () => {
    const homepage = read("src/app/(marketing)/page.tsx")
    const about = read("src/app/(marketing)/about/page.tsx")
    const combined = `${homepage}\n${about}`

    expect(combined).toContain("Master in Banking and Finance programme")
    expect(combined).toContain("University of St.Gallen (HSG)")
    expect(combined).not.toMatch(/best (?:in|of) (?:Europe|the world)/i)
  })

  it("does not claim the GMAT is limited to MBA contexts", () => {
    const article = read(
      "src/app/(marketing)/blog/gmat-vs-gre-for-mba-admissions/page.tsx",
    )

    expect(article).not.toContain("GMAT outside MBA contexts is rarely accepted")
    expect(article).toContain("graduate business programmes beyond the MBA")
  })
})
