import { describe, it, expect } from "vitest"
import { isAnswerCorrect, pickMissed } from "@/lib/practice-retry"

const q = (correctAnswer: number, id: string) => ({ id, correctAnswer })
const answered = (selected: number) => ({ submitted: true, selected })
const skipped = () => ({ submitted: false, selected: null })

describe("retry-missed flow", () => {
  it("retry set contains exactly the submitted-and-wrong questions", () => {
    const questions = [q(0, "a"), q(1, "b"), q(2, "c"), q(3, "d")]
    const states = [
      answered(0), // right
      answered(0), // wrong
      skipped(), //   never attempted — must NOT enter the retry set
      answered(1), // wrong
    ]
    expect(pickMissed(questions, states).map((x) => x.id)).toEqual(["b", "d"])
  })

  it("a clean sweep produces an empty retry set (no CTA, no fake attempt)", () => {
    const questions = [q(0, "a"), q(1, "b")]
    expect(pickMissed(questions, [answered(0), answered(1)])).toEqual([])
  })

  it("unsubmitted questions are never scored as wrong", () => {
    expect(isAnswerCorrect(q(0, "a"), skipped())).toBe(false)
    expect(pickMissed([q(0, "a")], [skipped()])).toEqual([])
  })

  it("two-part questions grade per column", () => {
    const tpa = { correctAnswer: -1, twoPartCorrectAnswers: [1, 2] }
    expect(
      isAnswerCorrect(tpa, {
        submitted: true,
        selected: null,
        twoPartSelections: [1, 2],
      })
    ).toBe(true)
    expect(
      isAnswerCorrect(tpa, {
        submitted: true,
        selected: null,
        twoPartSelections: [1, 0],
      })
    ).toBe(false)
    expect(
      pickMissed(
        [tpa],
        [{ submitted: true, selected: null, twoPartSelections: [1, 0] }]
      )
    ).toHaveLength(1)
  })
})
