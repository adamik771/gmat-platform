import { createElement } from "react"
import { renderToStaticMarkup } from "react-dom/server"
import { readFileSync } from "node:fs"
import { describe, expect, it } from "vitest"
import { getAllChapters, getAllQuestions, getPracticeChapterGroups, getQuestionsByIds, type PracticeChapterGroup } from "@/lib/content"
import { balanceDataSufficiencyOrder, planCustomSet, withContextLastSeen } from "@/lib/question-selection"
import { pickMockQuestions } from "@/lib/mock"
import PracticeClient from "@/app/(app)/practice/PracticeClient"

const bank = getAllQuestions()
const byId = new Map(bank.map((q) => [q.id, q]))
describe("teaching corrections and their delivery", () => {
  it("retains all questions and reviewed answer identities", () => {
    expect(bank).toHaveLength(2007)
    expect(new Set(bank.map((q) => q.id)).size).toBe(2007)
    for (const [id, key] of Object.entries({ "rates-work-q15": "C", "table-analysis-q40": "C", "table-analysis-q76": "A", "graphics-interpretation-q49": "B", "multi-source-reasoning-q29": "E", "critical-reasoning-q245": "A", "critical-reasoning-q246": "A", "reading-comprehension-q185": "C", "data-sufficiency-q98": "D", "algebra-q137": "A", "graphics-interpretation-q80": "C", "multi-source-reasoning-q65": "C" })) {
      expect(byId.get(id)?.correctAnswerLetter, id).toBe(key)
    }
    expect(byId.get("two-part-analysis-q94")?.twoPartCorrectAnswers).toEqual([0, 1])
    expect(byId.get("algebra-q137")?.difficulty).toBe("Advanced")
  })

  it("rechecks the numerical examples without relying on the written solution", () => {
    const studentCounts = Array.from({ length: 241 }, (_, s) => s).filter((s) => 8 * s + 12 * (240 - s) === 2480)
    expect(studentCounts).toEqual([100])
    const x = (0.5 * 5 - 0.42 * 5) / (0.42 - 0.30)
    expect(x).toBeCloseTo(10 / 3)
    expect((0.3 * x + 2.5) / (x + 5)).toBeCloseTo(0.42)
    expect((20 * 0.4 - 5 * 0.4) / 20).toBe(0.3)
    expect((24 / 2 + 24 / 3) / 2).toBe(10)
    expect([9 + 7 + 8 + 6 + 5, 5 + 9 + 7 + 8 + 9, 7 + 6 + 9 + 7 + 8]).toEqual([35, 38, 37])
    expect(0.1 * (12 - 10)).toBe(0.2)
    expect(720000 * 15).toBe(10800000)
    expect(Array.from({ length: 101 }, (_, i) => i - 50).filter((x) => Math.abs(x - 2) + Math.abs(x + 4) <= 10)).toHaveLength(11)
  })

  it("pins genuine chapter skills and retains the old lists for unfinished reader sets", () => {
    const chapters = getAllChapters()
    expect(chapters).toHaveLength(62)
    for (const [slug, difficulty, now, previous] of [
      ["quant-23-statistics", "medium", ["statistics-probability-q82", "statistics-probability-q52"], ["statistics-probability-q5", "statistics-probability-q52"]],
      ["quant-27-probability", "easy", ["statistics-probability-q59", "statistics-probability-q47"], ["statistics-probability-q58", "statistics-probability-q47"]],
      ["quant-27-probability", "medium", ["statistics-probability-q74", "statistics-probability-q5"], ["statistics-probability-q75", "statistics-probability-q82"]],
    ] as const) {
      const set = chapters.find((c) => c.slug === slug)!.problemSets.find((s) => s.difficulty === difficulty)!
      expect(set.questionIds).toEqual(now)
      expect(set.previousQuestionIds).toEqual(previous)
      expect(getQuestionsByIds(set.previousQuestionIds!)).toHaveLength(previous.length)
    }
    const guide = readFileSync("src/content/guides/quant-master-chapter.md", "utf8")
    expect(guide).toContain("(C) 10/3")
    expect(guide).not.toContain("Real GMAT problems always have clean answers")
    expect(guide).not.toContain("letter that's least represented")
  })

  it("keeps full real-bank DS decks and stable rendered order without next-letter cycles", () => {
    const pool = bank.filter((q) => q.type === "Data Sufficiency" && q.difficulty === "Advanced")
    let cyclic = 0, transitions = 0, repeats = 0
    for (let seed = 0; seed < 64; seed++) {
      const result = planCustomSet(pool, ["DI"], 20, new Map(), { seed })
      const delivered = balanceDataSufficiencyOrder(result.picked, { seed })
      expect(new Set(delivered.map((q) => q.id)).size).toBe(20)
      expect(delivered.map((q) => q.id).sort()).toEqual(result.picked.map((q) => q.id).sort())
      for (let i = 1; i < delivered.length; i++) {
        transitions++
        if (delivered[i].correctAnswerLetter === delivered[i - 1].correctAnswerLetter) repeats++
        if (("ABCDE".indexOf(delivered[i - 1].correctAnswerLetter) + 1) % 5 === "ABCDE".indexOf(delivered[i].correctAnswerLetter)) cyclic++
      }
    }
    expect(cyclic / transitions).toBeLessThan(0.35)
    expect(repeats).toBeGreaterThan(50)
    for (const test of getPracticeChapterGroups().find((g) => g.chapterSlug === "data-sufficiency")!.tests) {
      const questions = getQuestionsByIds(test.questionIds)
      const order = balanceDataSufficiencyOrder(questions, { seed: 320 })
      expect(order).toHaveLength(test.count)
      expect(order).toEqual(balanceDataSufficiencyOrder(questions, { seed: 320 }))
    }
    const mock = pickMockQuestions("DI", undefined, undefined, 2)
    expect(mock).toHaveLength(20)
    expect(new Set(mock.map((q) => q.id)).size).toBe(20)
    expect(mock).toEqual(pickMockQuestions("DI", undefined, undefined, 2))
  })

  it("propagates a chapter encounter to unseen siblings of its RC/MSR passage", () => {
    for (const type of ["Reading Comprehension", "Multi-Source Reasoning"]) {
      const q = bank.find((q) => q.type === type && q.context && bank.some((other) => other.id !== q.id && other.context === q.context))!
      const result = withContextLastSeen(bank, new Map([[q.id, 100]]))
      expect(bank.filter((other) => other.context === q.context).every((other) => result.get(other.id) === 100)).toBe(true)
    }
  })

  it("renders honest score copy, preserved results/locks and a usable empty-state destination", () => {
    const groups: PracticeChapterGroup[] = [
      { chapterSlug: "quant-04-method-selection", chapterTitle: "Method selection", section: "Quant", order: 1, comingSoon: true, tests: [] },
      { chapterSlug: "quant-27-probability", chapterTitle: "Probability", section: "Quant", order: 2, comingSoon: false, tests: [
        { id: "test1", label: "Test 1", count: 10, questionIds: [], estimatedMinutes: 20, difficultyMix: { easy: 0, medium: 10, hard: 0 } },
        { id: "test2", label: "Test 2", count: 10, questionIds: [], estimatedMinutes: 20, difficultyMix: { easy: 0, medium: 0, hard: 10 } },
      ] },
    ]
    const html = renderToStaticMarkup(createElement(PracticeClient, { chapterGroups: groups, targetScore: 735, lockTestsBeyond: 1, attemptsBySlug: { test1: { lastCorrect: 4, lastTotal: 8, attempts: 1 } } }))
    expect(html).toContain("Goal 735")
    expect(html).not.toContain("means scoring")
    expect(html).not.toContain("aim ")
    expect(html).toContain("last 50%")
    expect(html).toContain('href="/chapters/quant-04-method-selection"')
    expect(html).toContain('href="/pricing"')
    expect(html).not.toContain("Coming soon")
  })
})
