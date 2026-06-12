import { describe, it, expect } from "vitest"
import { getAllChapters } from "@/lib/content"

const chapters = getAllChapters()
const slugs = chapters.map((c) => c.slug)
const idx = (slug: string) => slugs.indexOf(slug)

describe("chapter guided-path order (CHAPTER_PATH_ORDER)", () => {
  it("returns exactly the 58 chapters, all unique", () => {
    expect(chapters.length).toBe(58)
    expect(new Set(slugs).size).toBe(58)
  })

  it("every chapter is in a known section", () => {
    for (const c of chapters) {
      expect(["Quant", "Verbal", "DI"]).toContain(c.section)
    }
  })

  it("opens on the gentlest math foundation, not a strategy/advanced chapter", () => {
    expect(slugs[0]).toBe("quant-05-order-and-signed-numbers")
  })

  it("puts the three timing chapters last", () => {
    expect(slugs.slice(-3).sort()).toEqual(
      ["di-timing-mixed", "quant-30-timing", "verbal-21-mixed-timing"].sort(),
    )
  })

  it("interleaves sections rather than all-Quant -> all-Verbal -> all-DI", () => {
    // DI is reached early (foundations near the top), and Verbal opens before
    // Quant finishes — both impossible under a section-grouped ordering.
    expect(idx("di-foundations")).toBeLessThan(15)
    expect(idx("verbal-01-foundations")).toBeLessThan(idx("quant-30-timing"))
    expect(idx("data-sufficiency")).toBeLessThan(idx("quant-30-timing"))
    // DI chapters are spread across the list, not clustered at the end.
    const diIdx = chapters
      .filter((c) => c.section === "DI")
      .map((c) => idx(c.slug))
    expect(Math.min(...diIdx)).toBeLessThan(15)
    expect(Math.max(...diIdx) - Math.min(...diIdx)).toBeGreaterThan(30)
  })

  it("uses real parsed slugs, incl. DI whose slug differs from its filename", () => {
    // Regression guard: di-1-foundations.md parses to slug `di-foundations`.
    // If CHAPTER_PATH_ORDER used filenames, DI would fall to the end.
    for (const s of [
      "di-foundations",
      "data-sufficiency",
      "table-analysis",
      "two-part-analysis",
      "multi-source-reasoning",
    ]) {
      expect(slugs).toContain(s)
    }
  })
})
