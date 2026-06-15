import { describe, it, expect } from "vitest"
import { getAllChapters, getPracticeChapterGroups } from "@/lib/content"

const chapters = getAllChapters()
const slugs = chapters.map((c) => c.slug)
const idx = (slug: string) => slugs.indexOf(slug)

describe("chapter guided-path order (CHAPTER_PATH_ORDER)", () => {
  it("returns exactly the 62 chapters, all unique", () => {
    expect(chapters.length).toBe(62)
    expect(new Set(slugs).size).toBe(62)
  })

  it("every chapter is in a known section; only the welcome chapter is General", () => {
    for (const c of chapters) {
      expect(["Quant", "Verbal", "DI", "General"]).toContain(c.section)
    }
    const general = chapters.filter((c) => c.section === "General")
    expect(general.map((c) => c.slug)).toEqual(["gmat-welcome"])
  })

  it("opens with the welcome chapter, then the Quant section intro", () => {
    expect(slugs[0]).toBe("gmat-welcome")
    expect(slugs[1]).toBe("quant-section-intro")
    expect(slugs[2]).toBe("quant-05-order-and-signed-numbers")
  })

  it("places each section intro immediately before that section's first chapter", () => {
    expect(idx("quant-section-intro")).toBe(idx("quant-05-order-and-signed-numbers") - 1)
    expect(idx("verbal-section-intro")).toBe(idx("verbal-01-foundations") - 1)
    expect(idx("di-section-intro")).toBe(idx("di-foundations") - 1)
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

describe("practice chapter groups follow the guided-path chapter order", () => {
  const groups = getPracticeChapterGroups()
  const chapterRank = new Map(
    getAllChapters().map((c, i) => [c.slug, i] as const)
  )

  it("emits at least one practice group", () => {
    expect(groups.length).toBeGreaterThan(0)
  })

  it("every practice group maps to a real chapter", () => {
    for (const g of groups) {
      expect(chapterRank.has(g.chapterSlug)).toBe(true)
    }
  })

  it("renders practice groups in the same order as /chapters (CHAPTER_PATH_ORDER)", () => {
    // The Practice page maps getPracticeChapterGroups() flat, so the array
    // order IS the on-screen order. It must match the guided-path chapter
    // order: both each group's chapter rank and its `order` field strictly
    // increasing. Guards the practice list against drifting from /chapters.
    const ranks = groups.map((g) => chapterRank.get(g.chapterSlug)!)
    expect(ranks).toEqual([...ranks].sort((a, b) => a - b))
    for (let i = 1; i < groups.length; i++) {
      expect(groups[i].order).toBeGreaterThan(groups[i - 1].order)
    }
  })
})
