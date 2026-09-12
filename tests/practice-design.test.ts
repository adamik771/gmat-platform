import { createElement } from "react"
import { renderToStaticMarkup } from "react-dom/server"
import { describe, expect, it, vi } from "vitest"
import type { PracticeChapterGroup } from "@/lib/content"
import { filterPracticeGroups, isPracticeTestLocked, practiceTestLinks, readPracticeFilters, recommendPracticeTest } from "@/app/(app)/practice/catalogue"
import PracticeClient from "@/app/(app)/practice/PracticeClient"
import TestBuilderClient from "@/app/(app)/test-builder/TestBuilderClient"
import { filterBuilderPool, topicKey } from "@/app/(app)/test-builder/selection"
import { planCustomSet } from "@/lib/question-selection"
import { deriveExamRoadmap, getFinalWeekReview, type OfficialExamEntry } from "@/lib/official-exams"

vi.mock("next/navigation", () => ({
  useSearchParams: () => new URLSearchParams("status=completed"),
  useRouter: () => ({ push: vi.fn() }),
}))

const groups: PracticeChapterGroup[] = [
  { chapterSlug: "intro", chapterTitle: "Introduction", section: "Quant", order: 0, comingSoon: true, tests: [] },
  { chapterSlug: "algebra", chapterTitle: "Algebra", section: "Quant", order: 1, comingSoon: false, tests: [
    { id: "ch-algebra-t1", label: "Test 1", count: 2, questionIds: ["algebra-q1", "algebra-q2"], difficultyMix: { easy: 2, medium: 0, hard: 0 }, estimatedMinutes: 4 },
    { id: "ch-algebra-t2", label: "Test 2", count: 1, questionIds: ["algebra-q3"], difficultyMix: { easy: 0, medium: 0, hard: 1 }, estimatedMinutes: 2 },
  ] },
]
const attempt = { sessionId: "a8caa69c-28e0-45d3-8b60-baff91f1956d", lastCorrect: 2, lastTotal: 2, attempts: 1 }
const attempts = { "ch-algebra-t1": attempt }
const filters = (query = "") => readPracticeFilters(new URLSearchParams(query))

describe("practice catalogue and saved attempts", () => {
  it("routes results and review answers to the saved attempt, not the runner", () => {
    expect(practiceTestLinks("ch-algebra-t1", attempt)).toEqual({
      start: "/practice/session/ch-algebra-t1",
      results: `/practice/history/${attempt.sessionId}`,
      answers: `/practice/history/${attempt.sessionId}#answers`,
    })
    const html = renderToStaticMarkup(createElement(PracticeClient, { chapterGroups: groups, attemptsBySlug: attempts }))
    expect(html).toContain(`href="/practice/history/${attempt.sessionId}"`)
    expect(html).toContain(`href="/practice/history/${attempt.sessionId}#answers"`)
    expect(html).toContain("Retake Test 1")
    expect(html).not.toContain("means scoring")
    expect(html).toContain("1 chapter shown · 1 test")
    expect(html).not.toContain("1 chapters")
    expect(html).not.toContain("1 tests")
    expect(html).toContain("For you")
  })

  it("reads all filters from a shareable query and ignores invalid enums", () => {
    expect(filters("q=algebra&section=Quant&topic=algebra&difficulty=hard&status=completed&unavailable=1")).toEqual({ q: "algebra", section: "Quant", topic: "algebra", difficulty: "hard", status: "completed", unavailable: true })
    expect(filters("section=invalid&difficulty=invalid&status=invalid")).toMatchObject({ section: "", difficulty: "", status: "" })
  })

  it("hides unavailable chapters and locked tests by default, restores them explicitly", () => {
    expect(filterPracticeGroups(groups, filters(), {}, null, 1).flatMap((group) => group.tests).map((test) => test.id)).toEqual(["ch-algebra-t1"])
    expect(filterPracticeGroups(groups, filters("unavailable=1"), {}, null, 1)).toHaveLength(2)
  })

  it("combines search, section, topic, difficulty and saved-result filters", () => {
    const filtered = filterPracticeGroups(groups, filters("q=ALGEBRA&section=Quant&topic=algebra&difficulty=easy&status=completed"), attempts, null, null)
    expect(filtered[0].tests.map((test) => test.id)).toEqual(["ch-algebra-t1"])
    expect(filterPracticeGroups(groups, filters("section=Verbal"), attempts, null, null)).toEqual([])
    expect(filterPracticeGroups(groups, filters("status=new"), attempts, null, null)[0].tests[0].id).toBe("ch-algebra-t2")
    expect(filterPracticeGroups(groups, filters("status=in-progress"), attempts, "ch-algebra-t2", null)[0].tests[0].id).toBe("ch-algebra-t2")
  })

  it("does not unlock the second test when filtering removes the first", () => {
    const filtered = filterPracticeGroups(groups, filters("difficulty=hard&unavailable=1"), {}, null, 1)
    expect(isPracticeTestLocked(groups[1], filtered[0].tests[0], 1)).toBe(true)
  })

  it("recommends an available set, not the first unavailable chapter or a locked test", () => {
    expect(recommendPracticeTest(groups, [], {}, 1)?.test.id).toBe("ch-algebra-t1")
    expect(recommendPracticeTest(groups, [], attempts, null)?.test.id).toBe("ch-algebra-t2")
    expect(recommendPracticeTest(groups, [{ slug: "algebra", topic: "Algebra", subskill: "Equations", section: "Quant", misses: 3 }], attempts, 1)?.test.id).toBe("ch-algebra-t1")
    expect(recommendPracticeTest(groups, [], {}, 0)).toBeNull()
  })

  it("does not present Quant questions from a shared bank as matching a DI weakness", () => {
    const diGroup: PracticeChapterGroup = {
      ...groups[1], chapterSlug: "data-sufficiency", chapterTitle: "Data Sufficiency", section: "DI",
      tests: [{ ...groups[1].tests[0], id: "ch-data-sufficiency-t1", questionIds: ["algebra-q4", "algebra-q5"] }],
    }
    const recommendation = { slug: "algebra", topic: "Algebra", subskill: "Linear equations", section: "DI" as const, misses: 3 }
    const result = recommendPracticeTest([...groups, diGroup], [recommendation], {}, null)
    expect(result?.group.section).toBe("DI")
    expect(result?.reason).toContain("An exact subskill match is not confirmed")
    expect(result?.reason).not.toContain("This set includes that topic")

    const noDi = recommendPracticeTest(groups, [recommendation], {}, null)
    expect(noDi?.reason).toBe("Your next unattempted, available set in chapter order.")
  })

  it("matches a recognized subskill's chapter rather than the first chapter in the same bank", () => {
    const linear: PracticeChapterGroup = { ...groups[1], chapterSlug: "quant-13-linear-equations-systems", chapterTitle: "Linear equations" }
    const quadratic: PracticeChapterGroup = {
      ...groups[1], chapterSlug: "quant-14-quadratics-factoring", chapterTitle: "Quadratics",
      tests: [{ ...groups[1].tests[0], id: "ch-quant-14-quadratics-factoring-t1", questionIds: ["algebra-q6", "algebra-q7"] }],
    }
    const result = recommendPracticeTest([linear, quadratic], [{ slug: "algebra", topic: "Algebra", subskill: "Quadratic equations", section: "Quant", misses: 3 }], {}, null)
    expect(result?.group.chapterSlug).toBe(quadratic.chapterSlug)
    expect(result?.reason).toBe("3 recorded misses in Quadratic equations. Practice the related Quadratics chapter.")
  })

  it("does not claim subskill coverage from the bank's catch-all chapter mapping", () => {
    const linear: PracticeChapterGroup = { ...groups[1], chapterSlug: "quant-13-linear-equations-systems", chapterTitle: "Linear equations" }
    const result = recommendPracticeTest([linear], [{ slug: "algebra", topic: "Algebra", subskill: "Unknown skill", section: "Quant", misses: 3 }], {}, null)
    expect(result?.reason).toBe("An available Quant set. An exact subskill match is not confirmed for this set.")
    expect(result?.reason).not.toContain("recorded misses")
  })
})

describe("custom builder configuration", () => {
  const pool = [
    { id: "a", section: "Quant" as const, topic: "Algebra", difficulty: "Beginner" as const },
    { id: "b", section: "Quant" as const, topic: "Algebra", difficulty: "Advanced" as const },
    { id: "c", section: "Quant" as const, topic: "Arithmetic", difficulty: "Beginner" as const },
    { id: "d", section: "Verbal" as const, topic: "Algebra", difficulty: "Beginner" as const },
  ]
  it("starts unconfigured with a section prompt and no invented zero-minute time limit", () => {
    const html = renderToStaticMarkup(createElement(TestBuilderClient, { pool: [], recent: [] }))
    expect(html).toContain("Choose a section to see available questions.")
    expect(html).toContain("disabled")
    expect(html).not.toContain("0 min")
    expect(html).not.toContain("mirrors real exam conditions")
  })
  it("filters topics within sections, preserving the original pool and difficulty mapping", () => {
    expect(filterBuilderPool(pool, [], [], "Mixed")).toEqual([])
    expect(filterBuilderPool(pool, ["Quant"], [topicKey(pool[0])], "Easy").map((question) => question.id)).toEqual(["a"])
    expect(filterBuilderPool(pool, ["Quant", "Verbal"], [topicKey(pool[0])], "Mixed").map((question) => question.id)).toEqual(["a", "b"])
    expect(pool).toHaveLength(4)
  })
  it("feeds the filtered pool through the existing sampler, caps supply, and keeps fresh-first ordering", () => {
    const matching = filterBuilderPool(pool, ["Quant"], [topicKey(pool[0])], "Mixed")
    const plan = planCustomSet(matching, ["Quant"], 20, new Map([["a", 1]]), { seed: 1 })
    expect(plan.picked.map((question) => question.id)).toEqual(["b", "a"])
    expect(plan.repeatCount).toBe(1)
  })
})

describe("shared final-week task", () => {
  const examDate = "2026-09-20"
  it.each(["2026-09-13", "2026-09-19", "2026-09-20"])("returns review within the inclusive taper window on %s", (todayIso) => {
    expect(getFinalWeekReview(examDate, todayIso)).toMatchObject({ href: "/review", actionLabel: "Open review queue", estimatedMinutes: 15 })
  })
  it.each(["2026-09-12", "2026-09-21"])("does not taper outside the window on %s", (todayIso) => {
    expect(getFinalWeekReview(examDate, todayIso)).toBeNull()
  })
  it("has no task without a valid exam date", () => {
    expect(getFinalWeekReview(null, "2026-09-13")).toBeNull()
    expect(getFinalWeekReview("invalid", "2026-09-13")).toBeNull()
  })
  it("keeps title, reason, duration and destination identical for every final-week history state", () => {
    const histories: OfficialExamEntry[][] = [[], [{ date: "2026-08-01", total: 605 }], [{ date: "2026-08-01", total: 605, examNumber: 1 }], [1, 2, 3, 4, 5, 6].map((examNumber) => ({ date: `2026-08-0${examNumber}`, total: 605, examNumber }))]
    for (const entries of histories) {
      const result = deriveExamRoadmap({ todayIso: "2026-09-19", examDate, entries, siteMockCount: 3 })
      expect(result.kind).toBe("review")
      expect(result).toMatchObject(getFinalWeekReview(examDate, "2026-09-19")!)
      expect(result.title).not.toMatch(/mock/i)
      expect(result.reason).not.toMatch(/then stop/i)
    }
  })
  it("returns usable setup, classification, official, and simulator destinations", () => {
    const entry = { date: "2026-08-01", total: 605, examNumber: 1 }
    const derive = (entries: OfficialExamEntry[], date: string | null, todayIso = "2026-08-01") => deriveExamRoadmap({ todayIso, examDate: date, entries, siteMockCount: 0 })
    expect(derive([], null).href).toContain("https://www.mba.com/")
    expect(derive([entry], null).href).toBe("/mock/run?mode=full")
    expect(derive([{ date: entry.date, total: 605 }], null).href).toBe("/mock#official-score-history")
    expect(derive([entry], examDate, "2026-09-21").href).toBe("/settings")
  })
})
