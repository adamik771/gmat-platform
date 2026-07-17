import { describe, it, expect } from "vitest"
import {
  getAllQuestions,
  getQuestionsBySetSlug,
  getQuestionsByIds,
  getPracticeChapterGroups,
} from "@/lib/content"
import { pickMockQuestions } from "@/lib/mock"

/**
 * On GMAT Focus, Data Sufficiency exists only in Data Insights. The parser
 * reclassifies DS items in quant technique banks to section DI
 * (question-parse-integrity.test.ts), but two surfaces serve questions by
 * FILE or by CHAPTER rather than by section — topic drills and chapter
 * practice tests — and each leaked DS onto Quant-branded pages. These
 * invariants pin every Quant-facing surface shut while keeping DS alive on
 * its DI surfaces.
 */
describe("no Data Sufficiency on Quant surfaces", () => {
  const questions = getAllQuestions()
  const isDS = (q: { type: string }) => q.type === "Data Sufficiency"

  it("topic drills: only the DS bank's own drill serves DS", () => {
    const setSlugs = [...new Set(questions.map((q) => q.setSlug))]
    const offenders = setSlugs
      .filter((slug) => slug !== "data-sufficiency")
      .flatMap((slug) => getQuestionsBySetSlug(slug).filter(isDS))
      .map((q) => q.id)
    expect(offenders).toEqual([])
  })

  it("chapter tests: no Quant chapter test contains DS", () => {
    const offenders = getPracticeChapterGroups()
      .filter((g) => g.section === "Quant")
      .flatMap((g) => g.tests)
      .flatMap((t) => getQuestionsByIds(t.questionIds).filter(isDS))
      .map((q) => q.id)
    expect(offenders).toEqual([])
  })

  it("test-builder Quant pool contains no DS", () => {
    // The client filters getAllQuestions() on q.section === "Quant".
    const offenders = questions
      .filter((q) => q.section === "Quant")
      .filter(isDS)
      .map((q) => q.id)
    expect(offenders).toEqual([])
  })

  it("Quant mock sections draw no DS", () => {
    for (const mockIndex of [0, 1, 2, 3]) {
      const drawn = pickMockQuestions("Quant", undefined, undefined, mockIndex)
      expect(drawn.length).toBeGreaterThan(0)
      expect(drawn.filter(isDS)).toEqual([])
    }
  })

  it("DS stays fully available on DI surfaces", () => {
    // Bank-wide: every DS item still exists and is DI-sectioned (so the
    // DI test-builder pool and DI mock pool can draw all of them).
    const ds = questions.filter(isDS)
    expect(ds.length).toBeGreaterThan(200)
    expect(ds.every((q) => q.section === "DI")).toBe(true)

    // The DS bank's own drill still serves its full file.
    const drill = getQuestionsBySetSlug("data-sufficiency")
    expect(drill.length).toBeGreaterThan(0)
    expect(drill.every(isDS)).toBe(true)

    // The DI data-sufficiency chapter tests still exist and are all-DS.
    const dsGroup = getPracticeChapterGroups().find(
      (g) => g.chapterSlug === "data-sufficiency"
    )
    expect(dsGroup).toBeDefined()
    expect(dsGroup!.tests.length).toBeGreaterThan(0)
    for (const t of dsGroup!.tests) {
      const resolved = getQuestionsByIds(t.questionIds)
      expect(resolved.length).toBe(t.count)
      expect(resolved.every(isDS)).toBe(true)
    }
  })

  it("re-dealt Quant tests keep a usable size (8-15)", () => {
    const sizes = getPracticeChapterGroups()
      .filter((g) => g.section === "Quant")
      .flatMap((g) => g.tests)
      .map((t) => t.count)
    expect(sizes.length).toBeGreaterThan(0)
    expect(sizes.every((n) => n >= 8 && n <= 15)).toBe(true)
  })
})
