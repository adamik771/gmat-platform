import { describe, expect, it } from "vitest"
import { getQuestionsByIds } from "@/lib/content"

const CLARITY_BATCH_IDS = [
  ...Array.from({ length: 17 }, (_, index) => `number-properties-q${index + 1}`),
  "graphics-interpretation-q1",
  "graphics-interpretation-q11",
  "graphics-interpretation-q16",
  "graphics-interpretation-q30",
  "table-analysis-q62",
] as const

describe("explanation clarity batch", () => {
  const questions = getQuestionsByIds(CLARITY_BATCH_IDS)

  it("keeps every reviewed question addressable", () => {
    expect(questions).toHaveLength(CLARITY_BATCH_IDS.length)
  })

  it("leads with a concise test-day method and ends with a transferable lesson", () => {
    for (const question of questions) {
      expect(question.fastestPath, question.id).toBeTruthy()
      expect(question.takeaway, question.id).toBeTruthy()
      expect(question.fastestPath!.length, question.id).toBeLessThanOrEqual(220)
      expect(question.takeaway!.length, question.id).toBeLessThanOrEqual(160)
    }
  })

  it("keeps the supporting explanation compact and free of abstract boilerplate", () => {
    const abstractOpening = /^(?:the governing principle|this problem is governed)/i

    for (const question of questions) {
      expect(question.explanation.length, question.id).toBeLessThanOrEqual(650)
      expect(question.explanation.trim(), question.id).not.toMatch(abstractOpening)
    }
  })

  it("preserves the reviewed answer keys", () => {
    const expectedAnswers: Record<(typeof CLARITY_BATCH_IDS)[number], string> = {
      "number-properties-q1": "B",
      "number-properties-q2": "C",
      "number-properties-q3": "D",
      "number-properties-q4": "C",
      "number-properties-q5": "D",
      "number-properties-q6": "E",
      "number-properties-q7": "D",
      "number-properties-q8": "B",
      "number-properties-q9": "A",
      "number-properties-q10": "C",
      "number-properties-q11": "B",
      "number-properties-q12": "E",
      "number-properties-q13": "C",
      "number-properties-q14": "C",
      "number-properties-q15": "C",
      "number-properties-q16": "C",
      "number-properties-q17": "B",
      "graphics-interpretation-q1": "C",
      "graphics-interpretation-q11": "C",
      "graphics-interpretation-q16": "E",
      "graphics-interpretation-q30": "B",
      "table-analysis-q62": "C",
    }

    for (const question of questions) {
      expect(question.correctAnswerLetter, question.id).toBe(expectedAnswers[question.id])
    }
  })
})
