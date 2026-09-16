import { describe, it, expect } from "vitest"
import { getAllQuestions } from "@/lib/content"

/**
 * Guardrail for the flat-set exhibit dedupe (Table Analysis / Graphics
 * Interpretation "continued" questions). Two delivery mechanisms exist for a
 * set's shared table/chart: the parser inherits the lead's exhibit as
 * `context`, and post-2026-06 content also inlines the exhibit in each
 * continued question's body. A question must use exactly ONE of them — both
 * at once rendered the same table twice in a single view (the bug students
 * reported); neither would render a statement with no data at all.
 */

const norm = (s: string) => s.replace(/\s+/g, " ").trim()

/** First markdown pipe-table (or fenced block) in a text, normalized. */
function firstExhibit(text: string): string | null {
  const table = text.match(/^\|[^\n]*\n\|[ :\-|]+\n(?:\|[^\n]*\n?)+/m)
  if (table) return norm(table[0])
  const fence = text.match(/```[\s\S]*?```/)
  return fence ? norm(fence[0]) : null
}

describe("flat-set exhibit delivery", () => {
  const flatSets = getAllQuestions().filter(
    (q) => q.id.startsWith("table-analysis-") || q.id.startsWith("graphics-interpretation-")
  )

  it("covers the flat-set banks", () => {
    expect(flatSets.length).toBeGreaterThan(50)
  })

  it("no question carries the same exhibit in both context and prompt", () => {
    const doubled = flatSets.filter((q) => {
      if (!q.context) return false
      const ctx = firstExhibit(q.context) ?? norm(q.context)
      return ctx.length > 0 && norm(q.prompt).includes(ctx)
    })
    expect(
      doubled.map((q) => q.id),
      "these questions would render their table/chart twice"
    ).toEqual([])
  })

  it("every question still has its exhibit exactly once (context, inline, or chartSpec)", () => {
    const missing = flatSets.filter((q) => {
      const inPrompt = firstExhibit(q.prompt) !== null
      const inContext = q.context ? firstExhibit(q.context) !== null : false
      // GI questions carry the chart as a parsed chartSpec (the ```chart
      // fence is extracted from the prompt at parse time) — that counts as
      // the exhibit.
      return !inPrompt && !inContext && !q.chartSpec
    })
    expect(
      missing.map((q) => q.id),
      "these questions would render a statement with no data"
    ).toEqual([])
  })
})
