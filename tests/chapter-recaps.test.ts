import { describe, expect, it } from "vitest"
import { getAllChapters } from "@/lib/content"

const ORIENTATION_CHAPTERS = new Set([
  "gmat-welcome",
  "quant-section-intro",
  "verbal-section-intro",
  "di-section-intro",
])

describe("skill-chapter recaps", () => {
  const skillChapters = getAllChapters().filter(
    (chapter) => !ORIENTATION_CHAPTERS.has(chapter.slug)
  )

  it("ends every skill chapter with one nonempty summary section", () => {
    for (const chapter of skillChapters) {
      const summaries = chapter.sections.filter((section) => section.type === "summary")
      expect(summaries, chapter.slug).toHaveLength(1)
      expect(chapter.sections.at(-1)?.type, chapter.slug).toBe("summary")
      expect(summaries[0].body.trim().length, chapter.slug).toBeGreaterThan(0)
    }
  })

  it("gives every recap at least three retrieval points", () => {
    for (const chapter of skillChapters) {
      const summary = chapter.sections.find((section) => section.type === "summary")
      const bulletCount = summary?.body.match(/^- /gm)?.length ?? 0
      expect(bulletCount, chapter.slug).toBeGreaterThanOrEqual(3)
    }
  })
})
