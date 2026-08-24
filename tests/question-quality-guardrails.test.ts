import { describe, expect, it } from "vitest"
import { getAllQuestions } from "@/lib/content"

function optionLength(option: string): number {
  return option.replace(/\s+/g, " ").trim().length
}

describe("question-bank quality guardrails", () => {
  it("does not make the longest option a reliable shortcut on Advanced Verbal", () => {
    const questions = getAllQuestions().filter(
      (q) =>
        q.section === "Verbal" &&
        q.difficulty === "Advanced" &&
        q.options.length === 5
    )
    const uniqueLongestCorrect = questions.filter((q) => {
      const lengths = q.options.map(optionLength)
      const longest = Math.max(...lengths)
      return (
        lengths[q.correctAnswer] === longest &&
        lengths.filter((length) => length === longest).length === 1
      )
    })
    const materialCue = uniqueLongestCorrect.filter((q) => {
      const lengths = q.options.map(optionLength).sort((a, b) => b - a)
      return lengths[0] - lengths[1] >= 12 && lengths[0] / lengths[1] >= 1.08
    })

    // Random chance is 20%. A little natural variation is healthy, but once
    // this clears 25% students can profitably guess from answer length across
    // either Verbal format.
    expect(uniqueLongestCorrect.length / questions.length).toBeLessThanOrEqual(
      0.25
    )
    // Large, visible gaps should be rare even when the correct answer happens
    // to be longest.
    expect(materialCue.length / questions.length).toBeLessThanOrEqual(0.1)
  })

  it("keeps Advanced answer positions non-predictive within every section", () => {
    const questions = getAllQuestions().filter(
      (q) =>
        q.difficulty === "Advanced" &&
        q.options.length === 5 &&
        q.correctAnswer >= 0
    )

    for (const section of ["Quant", "Verbal", "DI"] as const) {
      const sectionQuestions = questions.filter((q) => q.section === section)
      const shares = ["A", "B", "C", "D", "E"].map(
        (letter) =>
          sectionQuestions.filter((q) => q.correctAnswerLetter === letter)
            .length / sectionQuestions.length
      )
      // 20% is ideal. These wider rails allow natural bank variation while
      // blocking a stable guessing rule such as "Advanced Quant is usually C."
      expect(Math.max(...shares), section).toBeLessThanOrEqual(0.4)
      expect(Math.min(...shares), section).toBeGreaterThanOrEqual(0.08)
    }
  })

  it("keeps every Advanced option set internally distinct", () => {
    const advanced = getAllQuestions().filter(
      (q) => q.difficulty === "Advanced" && q.options.length > 1
    )
    for (const question of advanced) {
      const normalized = question.options.map((option) =>
        option.replace(/\s+/g, " ").trim().toLowerCase()
      )
      expect(new Set(normalized).size, question.id).toBe(normalized.length)
    }
  })

  it("prevents the raw DS bank's answer-pattern skew from getting worse", () => {
    const questions = getAllQuestions().filter(
      (q) => q.type === "Data Sufficiency" && /^[A-E]$/.test(q.correctAnswerLetter)
    )
    const counts = new Map(
      ["A", "B", "C", "D", "E"].map((letter) => [
        letter,
        questions.filter((q) => q.correctAnswerLetter === letter).length,
      ])
    )
    const shares = [...counts.values()].map((count) => count / questions.length)

    // The delivery layer now balances short sets, but this source-bank limit
    // makes the historical C-heavy distribution a ceiling rather than a new
    // convention. New content must improve or preserve it, never worsen it.
    expect(Math.max(...shares)).toBeLessThanOrEqual(0.4)
    expect(Math.min(...shares)).toBeGreaterThanOrEqual(0.08)
  })
})
