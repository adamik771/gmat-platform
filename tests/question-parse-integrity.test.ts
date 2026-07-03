import { describe, it, expect } from "vitest"
import { getAllQuestions } from "@/lib/content"

/**
 * Bank-wide parse invariants, born from a real leak: questions without
 * "- A)" option lines (Two-Part Analysis) once extended their prompt region
 * to the end of the block, shipping the full worked explanation and the
 * answer-announcing sentence to students BEFORE they answered. Runs over the
 * real bank so a parser or authoring regression can't quietly reintroduce it.
 */
describe("question parse integrity", () => {
  const questions = getAllQuestions()

  it("no prompt or context contains solution text", () => {
    const leakRe =
      /correct answers? (are|is)|\*\*Step \d|\*\*Verification|\*\*answer:\*\*|\*\*explanation:\*\*/i
    const offenders = questions
      .filter((q) => leakRe.test(q.prompt) || leakRe.test(q.context ?? ""))
      .map((q) => q.id)
    expect(offenders).toEqual([])
  })

  it("every two-part-analysis question keeps its table-derived structure", () => {
    const tpa = questions.filter((q) => q.id.startsWith("two-part-analysis-"))
    expect(tpa.length).toBeGreaterThan(0)
    for (const q of tpa) {
      expect(q.twoPartColumns?.length, q.id).toBe(2)
      expect(q.options.length, q.id).toBeGreaterThanOrEqual(2)
      expect(q.twoPartCorrectAnswers?.length, q.id).toBe(2)
      expect(q.explanation.length, q.id).toBeGreaterThan(20)
    }
  })
})
