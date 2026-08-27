import { describe, expect, it } from "vitest"
import { getAllChapters, getAllQuestions } from "@/lib/content"

const RELABELLED_TO_INTERMEDIATE = [
  "algebra-q49",
  "algebra-q51",
  "algebra-q64",
  "algebra-q84",
  "algebra-q94",
  "algebra-q95",
  "algebra-q107",
  "algebra-q108",
  "algebra-q109",
  "arithmetic-q11",
  "arithmetic-q66",
  "arithmetic-q67",
  "backsolving-q11",
  "exponents-roots-q46",
  "exponents-roots-q47",
  "exponents-roots-q48",
  "exponents-roots-q49",
  "exponents-roots-q86",
  "number-properties-q25",
  "number-properties-q28",
  "number-properties-q32",
  "number-properties-q88",
  "number-properties-q95",
  "q-quant-01-mindset-q7",
  "q-quant-01-mindset-q8",
  "rates-work-q22",
  "rates-work-q67",
  "ratios-percents-q25",
  "ratios-percents-q76",
  "statistics-probability-q57",
  "word-problems-q79",
  "word-problems-q81",
  "word-problems-q92",
  "plugging-in-q22",
  "plugging-in-q34",
  "graphics-interpretation-q14",
  "graphics-interpretation-q47",
  "graphics-interpretation-q85",
  "graphics-interpretation-q92",
  "table-analysis-q82",
  "table-analysis-q93",
  "two-part-analysis-q22",
  "two-part-analysis-q34",
  "two-part-analysis-q51",
] as const

const AUTHORED_ADVANCED = [
  "arithmetic-q125",
  "arithmetic-q126",
  "backsolving-q53",
] as const

describe("Advanced question calibration", () => {
  const questions = getAllQuestions()
  const byId = new Map(questions.map((question) => [question.id, question]))

  it("keeps the audited one-method questions out of the Advanced pool", () => {
    for (const id of RELABELLED_TO_INTERMEDIATE) {
      expect(byId.get(id)?.difficulty, id).toBe("Intermediate")
    }
  })

  it("keeps the new multi-constraint replacements in the Advanced pool", () => {
    for (const id of AUTHORED_ADVANCED) {
      expect(byId.get(id)?.difficulty, id).toBe("Advanced")
    }

    expect(byId.get("arithmetic-q125")?.options[2]).toBe("17/32")
    expect(byId.get("arithmetic-q126")?.options[2]).toBe("$1,050")
    expect(byId.get("backsolving-q53")?.options[2]).toBe("90")
    for (const id of AUTHORED_ADVANCED) {
      expect(byId.get(id)?.correctAnswerLetter, id).toBe("C")
    }
  })

  it("uses calibrated replacements in the affected hard chapter sets", () => {
    const chapters = new Map(
      getAllChapters().map((chapter) => [chapter.slug, chapter])
    )
    const hardIds = (slug: string) =>
      chapters
        .get(slug)
        ?.problemSets.find((set) => set.difficulty === "hard")
        ?.questionIds ?? []

    expect(hardIds("quant-06-fractions-decimals")).toEqual(
      expect.arrayContaining(["arithmetic-q125", "arithmetic-q126"])
    )
    expect(hardIds("quant-01-backsolving")).toContain("backsolving-q53")
    expect(hardIds("graphics-interpretation")).toContain(
      "graphics-interpretation-q94"
    )
    expect(hardIds("table-analysis")).toContain("table-analysis-q53")
    expect(hardIds("two-part-analysis")).toEqual(
      expect.arrayContaining(["two-part-analysis-q61", "two-part-analysis-q69"])
    )

    for (const id of RELABELLED_TO_INTERMEDIATE) {
      expect(
        [...chapters.values()].some((chapter) =>
          chapter.problemSets.some(
            (set) => set.difficulty === "hard" && set.questionIds.includes(id)
          )
        ),
        `${id} is still pinned in a hard problem set`
      ).toBe(false)
    }
  })

  it("keeps the Product F bubble-chart answer internally consistent", () => {
    const question = byId.get("graphics-interpretation-q47")
    expect(question).toBeDefined()
    expect(question?.options[question.correctAnswer]).toBe("F")
    expect(question?.explanation).toContain("option is E (Product F)")
  })

  it("retains a deep Advanced pool after removing inflated labels", () => {
    expect(
      questions.filter((question) => question.difficulty === "Advanced").length
    ).toBeGreaterThanOrEqual(575)
  })
})
