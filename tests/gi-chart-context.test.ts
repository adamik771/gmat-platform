import { describe, it, expect } from "vitest"
import { getAllQuestions } from "@/lib/content"

/**
 * Locking test for the continued-GI chart extraction: every Graphics
 * Interpretation question must carry a parsed chartSpec (or, for the one
 * deliberately table-based item, a markdown table), and no question's
 * shared context may leak a raw ```chart fence — 28 "continued" GI
 * questions used to render their set's chart as a ~3,900px raw-JSON
 * strip because the fence was stripped from prompts but not context.
 */
describe("Graphics Interpretation chart extraction", () => {
  const gi = getAllQuestions().filter(
    (q) => q.type === "Graphics Interpretation"
  )

  it("has a healthy sample size", () => {
    expect(gi.length).toBeGreaterThan(50)
  })

  it("every GI question has a chartSpec or a markdown table", () => {
    const bare = gi.filter((q) => !q.chartSpec && !/\|/.test(q.prompt))
    expect(
      bare.map((q) => q.id),
      "GI questions with neither a chart spec nor a table"
    ).toEqual([])
  })

  it("no question context leaks a raw ```chart fence", () => {
    const leaks = getAllQuestions().filter((q) =>
      (q.context ?? "").includes("```chart")
    )
    expect(leaks.map((q) => q.id)).toEqual([])
  })

  it("every bubble-chart point has a visible identity label", () => {
    const bubbles = gi.filter((q) => q.chartSpec?.type === "bubble")
    expect(bubbles.length).toBeGreaterThan(0)
    const unlabeled = bubbles.flatMap((q) =>
      (q.chartSpec?.data ?? [])
        .map((row, index) => ({ questionId: q.id, index, name: row.name }))
        .filter((row) => typeof row.name !== "string" || row.name.trim() === "")
    )
    expect(unlabeled).toEqual([])
  })
})
