import { describe, it, expect } from "vitest"
import { TOPIC_TO_CHAPTER } from "@/lib/topic-chapter-map"
import { getAllChapters } from "@/lib/content"

const chapterSlugs = new Set(getAllChapters().map((c) => c.slug))
const topics = Object.keys(TOPIC_TO_CHAPTER)

describe("TOPIC_TO_CHAPTER", () => {
  it("maps every topic to a slug that is a real, loadable chapter", () => {
    // The map's whole purpose is to route a weak topic to a chapter that
    // actually exists on disk. A typo'd or renamed target slug would silently
    // route the student nowhere, so assert each target resolves.
    for (const [topic, slug] of Object.entries(TOPIC_TO_CHAPTER)) {
      expect(chapterSlugs, `topic "${topic}" -> "${slug}"`).toContain(slug)
    }
  })

  it("has unique topic keys and the expected key count", () => {
    // Object literals collapse duplicate keys, so the live key count must equal
    // the number of distinct labels we expect. Guards against an accidental
    // duplicate label that would shadow an earlier mapping.
    expect(new Set(topics).size).toBe(topics.length)
    expect(topics.length).toBe(16)
  })

  it("spot-checks known Quant and Verbal mappings", () => {
    expect(TOPIC_TO_CHAPTER["Arithmetic"]).toBe(
      "quant-05-order-and-signed-numbers",
    )
    expect(TOPIC_TO_CHAPTER["Algebra"]).toBe(
      "quant-13-linear-equations-systems",
    )
    expect(TOPIC_TO_CHAPTER["Rates and Work"]).toBe(
      "quant-21-rate-time-distance",
    )
    expect(TOPIC_TO_CHAPTER["Critical Reasoning"]).toBe(
      "verbal-02-cr-argument-structure",
    )
    expect(TOPIC_TO_CHAPTER["Reading Comprehension"]).toBe(
      "verbal-13-rc-reading-process",
    )
  })

  it("spot-checks the DI mappings, whose target slug equals the topic-derived slug", () => {
    // The five Data Insights labels map to slugs that look identical to a
    // kebab-cased label but are still real chapter slugs (e.g. di-2 parses to
    // `data-sufficiency`, not `di-2-data-sufficiency`).
    expect(TOPIC_TO_CHAPTER["Data Sufficiency"]).toBe("data-sufficiency")
    expect(TOPIC_TO_CHAPTER["Graphics Interpretation"]).toBe(
      "graphics-interpretation",
    )
    expect(TOPIC_TO_CHAPTER["Table Analysis"]).toBe("table-analysis")
    expect(TOPIC_TO_CHAPTER["Multi-Source Reasoning"]).toBe(
      "multi-source-reasoning",
    )
    expect(TOPIC_TO_CHAPTER["Two-Part Analysis"]).toBe("two-part-analysis")
  })

  it("returns undefined for an unmapped topic (no implicit fallback)", () => {
    // Edge case: consumers must handle a missing topic themselves; the map
    // does not invent a chapter for an unknown label.
    expect(TOPIC_TO_CHAPTER["Geometry"]).toBeUndefined()
    expect(TOPIC_TO_CHAPTER[""]).toBeUndefined()
  })

  it("only maps to Quant/Verbal/DI section chapters, never a strategy/foundations chapter", () => {
    // Every mapped slug should be a concrete topic chapter; none of the
    // method/foundations/timing slugs (e.g. *-foundations, *-timing) belong in
    // this map, since you can't be "weak" at them in the diagnostic sense.
    for (const slug of Object.values(TOPIC_TO_CHAPTER)) {
      expect(slug).not.toMatch(/foundations|timing/)
    }
  })
})
