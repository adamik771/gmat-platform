import { describe, expect, it } from "vitest"
import { getQuestionsByIds } from "@/lib/content"

const CLARITY_BATCH_IDS = [
  ...Array.from({ length: 51 }, (_, index) => `number-properties-q${index + 1}`),
  ...Array.from({ length: 32 }, (_, index) => `statistics-probability-q${index + 21}`),
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
      "number-properties-q18": "A",
      "number-properties-q19": "C",
      "number-properties-q20": "D",
      "number-properties-q21": "D",
      "number-properties-q22": "C",
      "number-properties-q23": "C",
      "number-properties-q24": "C",
      "number-properties-q25": "C",
      "number-properties-q26": "B",
      "number-properties-q27": "B",
      "number-properties-q28": "D",
      "number-properties-q29": "B",
      "number-properties-q30": "B",
      "number-properties-q31": "B",
      "number-properties-q32": "D",
      "number-properties-q33": "C",
      "number-properties-q34": "D",
      "number-properties-q35": "D",
      "number-properties-q36": "E",
      "number-properties-q37": "C",
      "number-properties-q38": "C",
      "number-properties-q39": "C",
      "number-properties-q40": "B",
      "number-properties-q41": "D",
      "number-properties-q42": "C",
      "number-properties-q43": "C",
      "number-properties-q44": "C",
      "number-properties-q45": "C",
      "number-properties-q46": "A",
      "number-properties-q47": "C",
      "number-properties-q48": "B",
      "number-properties-q49": "D",
      "number-properties-q50": "B",
      "number-properties-q51": "C",
      "statistics-probability-q21": "B",
      "statistics-probability-q22": "C",
      "statistics-probability-q23": "C",
      "statistics-probability-q24": "B",
      "statistics-probability-q25": "C",
      "statistics-probability-q26": "B",
      "statistics-probability-q27": "E",
      "statistics-probability-q28": "C",
      "statistics-probability-q29": "B",
      "statistics-probability-q30": "B",
      "statistics-probability-q31": "C",
      "statistics-probability-q32": "D",
      "statistics-probability-q33": "A",
      "statistics-probability-q34": "D",
      "statistics-probability-q35": "C",
      "statistics-probability-q36": "D",
      "statistics-probability-q37": "D",
      "statistics-probability-q38": "D",
      "statistics-probability-q39": "D",
      "statistics-probability-q40": "C",
      "statistics-probability-q41": "B",
      "statistics-probability-q42": "E",
      "statistics-probability-q43": "B",
      "statistics-probability-q44": "C",
      "statistics-probability-q45": "D",
      "statistics-probability-q46": "C",
      "statistics-probability-q47": "D",
      "statistics-probability-q48": "A",
      "statistics-probability-q49": "B",
      "statistics-probability-q50": "E",
      "statistics-probability-q51": "B",
      "statistics-probability-q52": "C",
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
