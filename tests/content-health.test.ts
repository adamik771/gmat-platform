import { describe, expect, it } from "vitest"
import { getAllChapters } from "@/lib/content"

const ORIENTATION_CHAPTERS = new Set([
  "gmat-welcome",
  "quant-section-intro",
  "verbal-section-intro",
  "di-section-intro",
])

function calloutLabels(body: string): string[] {
  return body.split("\n").flatMap((raw) => {
    const line = raw.trim().replace(/^>\s*/, "")
    const match = line.match(/^\*\*([^*]+?)\*\*/)
    if (!match) return []
    return [match[1].trim().replace(/[.:]+$/, "").trim().toLowerCase()]
  })
}

describe("skill-chapter content health", () => {
  const chapters = getAllChapters().filter(
    (chapter) => !ORIENTATION_CHAPTERS.has(chapter.slug)
  )

  it("provides at least five worked examples and one trap callout per skill chapter", () => {
    for (const chapter of chapters) {
      const labels = chapter.sections.flatMap((section) => calloutLabels(section.body))
      const examples = labels.filter(
        (label) =>
          label === "example" ||
          label.startsWith("example ") ||
          label === "worked example" ||
          label.startsWith("worked example ") ||
          label === "illustrated example"
      ).length
      const traps = labels.filter((label) =>
        /^(trap to watch|common trap|trap pattern|trap)(?:\s|$)/.test(label)
      ).length

      expect(examples, `${chapter.slug} examples`).toBeGreaterThanOrEqual(5)
      expect(traps, `${chapter.slug} traps`).toBeGreaterThanOrEqual(1)
    }
  })

  it("anchors chapters with four or more reading sections in a mental model", () => {
    for (const chapter of chapters) {
      const readingSections = chapter.sections.filter((section) => section.type === "reading")
      if (readingSections.length < 4) continue
      const labels = readingSections.flatMap((section) => calloutLabels(section.body))
      const mentalModels = labels.filter((label) =>
        /^(mental model|the mental model|core idea)$/.test(label)
      ).length
      expect(mentalModels, chapter.slug).toBeGreaterThanOrEqual(1)
    }
  })
})
