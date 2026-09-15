import { describe, expect, it } from "vitest"
import { mergeChapterExposure, UNKNOWN_EXPOSURE_AT } from "@/lib/chapter-exposure"
import { mergeProgress, progressContentSig, type MergeableProgress } from "@/lib/chapter-progress-merge"
import { selectFresh } from "@/lib/question-selection"

describe("chapter and practice exposure", () => {
  it("merges genuine interactions without calling mere reading an answered question", () => {
    const map = mergeChapterExposure(new Map(), { chapter: {
      sectionsRead: { all: true }, lastSeenAt: 999,
      questions: {
        submitted: { submitted: true }, skipped: { skipped: true },
        selected: { selected: 0 }, twoPart: { twoPartSelections: [null, 2] },
        untouched: { selected: null, submitted: false }, emptyTpa: { twoPartSelections: [null, null] },
      },
    } }, 1000)
    expect([...map.keys()].sort()).toEqual(["selected", "skipped", "submitted", "twoPart"])
    expect([...map.values()].every((at) => at === UNKNOWN_EXPOSURE_AT)).toBe(true)
  })

  it("keeps latest known exposure without promoting old interactions to today", () => {
    const attempts = new Map([["q", 300], ["practice", 400]])
    const chapters = { c: { questions: { q: { submitted: true } }, questionExposures: { q: 200, recent: 500, future: 2000, invalid: NaN } } }
    expect([...mergeChapterExposure(attempts, chapters, 1000)]).toEqual([["q", 300], ["practice", 400], ["recent", 500], ["future", 1]])
    expect(attempts.size).toBe(2)
  })

  it("uses versioned graded IDs and ignores counts whose old identities are unknowable", () => {
    const seen = mergeChapterExposure(new Map(), { c: {
      problemSetRuns: {
        easy: { idx: 1, answers: [true], questionIds: ["done", "not-yet"], at: 300 },
        medium: { idx: 1, answers: [true] },
        hard: { idx: 1, answers: ["not-boolean"], questionIds: ["bad"] },
      },
      problemSetResults: {
        easy: { total: 2, questionIds: ["new1", "new2"], at: 600, history: [{ total: 2, questionIds: ["old1", "old2"], at: 100 }] },
        hard: { total: 2, correct: 1 },
      },
    } }, 1000)
    expect([...seen]).toEqual([["done", 300], ["new1", 600], ["new2", 600], ["old1", 100], ["old2", 100]])
    expect(mergeChapterExposure(new Map(), null).size).toBe(0)
  })

  it("makes chapter-seen questions repeat fallbacks, not fresh picks", () => {
    const seen = mergeChapterExposure(new Map(), { c: { questions: { old: { submitted: true } } } })
    const pool = [{ id: "old", difficulty: "Intermediate" }, { id: "new", difficulty: "Intermediate" }]
    expect(selectFresh(pool, 1, seen, { seed: 1 }).picked.map((q) => q.id)).toEqual(["new"])
    expect(selectFresh(pool, 2, seen, { seed: 1 }).repeatCount).toBe(1)
  })

  const empty = (): MergeableProgress => ({ sectionsRead: {}, questions: {}, problemSetResults: { easy: undefined, medium: undefined, hard: undefined } })

  it("unions exposure and version identities across devices without dropping notes or reading", () => {
    const a = { ...empty(), sectionsRead: { one: true }, notes: { one: "My explanation" }, questionExposures: { q: 100 } }
    const b = { ...empty(), questionExposures: { q: 200, other: 100 }, problemSetRuns: { easy: { idx: 1, answers: [true], questionIds: ["q", "other"], at: 200 } } }
    const result = mergeProgress(a, b)
    expect(result.questionExposures).toEqual({ q: 200, other: 100 })
    expect(result.notes).toEqual(a.notes)
    expect(result.sectionsRead.one).toBe(true)
    expect(result.problemSetRuns?.easy?.questionIds).toEqual(["q", "other"])
    expect(progressContentSig(result)).not.toBe(progressContentSig(a))
  })

  it("prefers a newer short retake to an older longer checkpoint in either merge order", () => {
    const old = { ...empty(), problemSetRuns: { easy: { idx: 3, answers: [true, true, false], at: 100, questionIds: ["a", "b", "c", "d"] } } }
    const recent = { ...empty(), problemSetRuns: { easy: { idx: 1, answers: [false], at: 200, questionIds: ["new", "last"] } } }
    expect(mergeProgress(old, recent).problemSetRuns?.easy).toEqual(recent.problemSetRuns.easy)
    expect(mergeProgress(recent, old).problemSetRuns?.easy).toEqual(recent.problemSetRuns.easy)
  })
})
