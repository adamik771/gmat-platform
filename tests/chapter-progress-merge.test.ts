import { describe, it, expect } from "vitest"
import {
  isChapterRead,
  mergeProgress,
  progressContentSig,
  type MergeableProgress,
} from "@/lib/chapter-progress-merge"

const empty = (): MergeableProgress => ({
  sectionsRead: {},
  questions: {},
  problemSetResults: { easy: undefined, medium: undefined, hard: undefined },
})

describe("mergeProgress (chapter progress union — fixes lost graded tests)", () => {
  it("keeps a problem-set result that only the LOCAL side has", () => {
    // The reported bug: 2nd graded test finished locally but not yet synced to
    // the server; the old heuristic tied on size and discarded local.
    const local = empty()
    local.problemSetResults.medium = { correct: 8, total: 10 }
    local.problemSetResults.hard = { correct: 6, total: 10 }
    const server = empty()
    server.problemSetResults.medium = { correct: 8, total: 10 } // server only has test 1

    const merged = mergeProgress(local, server)
    expect(merged.problemSetResults.hard).toEqual({ correct: 6, total: 10 })
    expect(merged.problemSetResults.medium).toEqual({ correct: 8, total: 10 })
  })

  it("keeps a problem-set result that only the SERVER side has", () => {
    const local = empty()
    const server = empty()
    server.problemSetResults.easy = { correct: 9, total: 10 }
    const merged = mergeProgress(local, server)
    expect(merged.problemSetResults.easy).toEqual({ correct: 9, total: 10 })
  })

  it("for a difficulty present on both, keeps the one with more attempts", () => {
    const local = empty()
    local.problemSetResults.medium = { correct: 5, total: 5 } // partial
    const server = empty()
    server.problemSetResults.medium = { correct: 7, total: 10 } // fuller attempt
    expect(mergeProgress(local, server).problemSetResults.medium).toEqual({
      correct: 7,
      total: 10,
    })
  })

  it("unions sectionsRead (read on either side wins)", () => {
    const local = empty()
    local.sectionsRead = { a: true, b: false }
    const server = empty()
    server.sectionsRead = { b: true, c: true }
    const merged = mergeProgress(local, server)
    expect(merged.sectionsRead).toEqual({ a: true, b: true, c: true })
  })

  it("keeps the more-complete question when an id is on both sides", () => {
    const local = empty()
    local.questions = { q1: { selected: 2, submitted: true, selfExplanation: "because" } }
    const server = empty()
    server.questions = { q1: { selected: null, submitted: false }, q2: { selected: 1, submitted: true } }
    const merged = mergeProgress(local, server)
    expect(merged.questions.q1.submitted).toBe(true) // local (submitted) wins over server (not)
    expect(merged.questions.q2.submitted).toBe(true) // server-only id preserved
  })

  it("carries Two-Part Analysis selections through the merge and ranks them like a single-select pick", () => {
    // TPA questions keep `selected: null` and store per-column picks in
    // twoPartSelections. The side with selections must beat an untouched
    // entry, and the array must survive the merge intact.
    const local = empty()
    local.questions = {
      tpa1: { selected: null, submitted: true, twoPartSelections: [2, 4] },
    }
    const server = empty()
    server.questions = { tpa1: { selected: null, submitted: false } }

    const ab = mergeProgress(local, server)
    const ba = mergeProgress(server, local)
    expect(ab.questions.tpa1.twoPartSelections).toEqual([2, 4])
    expect(ba.questions.tpa1.twoPartSelections).toEqual([2, 4])

    // In-progress TPA (selections, not yet submitted) still outranks an
    // empty entry — same weighting a single-select `selected` gets.
    const partial = empty()
    partial.questions = { tpa2: { selected: null, twoPartSelections: [1, null] } }
    const untouched = empty()
    untouched.questions = { tpa2: { selected: null } }
    expect(
      mergeProgress(untouched, partial).questions.tpa2.twoPartSelections
    ).toEqual([1, null])
  })

  it("never loses progress regardless of merge order", () => {
    const local = empty()
    local.problemSetResults.hard = { correct: 6, total: 10 }
    local.sectionsRead = { intro: true }
    const server = empty()
    server.problemSetResults.easy = { correct: 9, total: 10 }
    server.sectionsRead = { outro: true }
    const ab = mergeProgress(local, server)
    const ba = mergeProgress(server, local)
    expect(ab.problemSetResults).toEqual(ba.problemSetResults)
    expect(ab.sectionsRead).toEqual(ba.sectionsRead)
    expect(ab.problemSetResults.easy).toBeDefined()
    expect(ab.problemSetResults.hard).toBeDefined()
  })

  it("keeps the mid-set graded run with the most progress (resume survives reload)", () => {
    const local = empty()
    local.problemSetRuns = { medium: { idx: 4, answers: [true, false, true, true] } }
    const server = empty()
    server.problemSetRuns = { medium: { idx: 2, answers: [true, false] } }
    const ab = mergeProgress(local, server)
    const ba = mergeProgress(server, local)
    expect(ab.problemSetRuns?.medium?.idx).toBe(4)
    expect(ba.problemSetRuns?.medium?.idx).toBe(4)
  })

  it("isChapterRead: reading sections gate completion; pretest/summary do not", () => {
    const sections = [
      { id: "pretest", type: "pretest" },
      { id: "r1", type: "reading" },
      { id: "r2", type: "reading" },
      { id: "summary", type: "summary" },
    ]
    // All readings read, pretest/summary untouched -> complete. (The old
    // every-section rule kept dashboard/study-plan at 0% here.)
    expect(isChapterRead(sections, { r1: true, r2: true })).toBe(true)
    // A reading missing -> incomplete, even with pretest/summary clicked.
    expect(
      isChapterRead(sections, { pretest: true, r1: true, summary: true })
    ).toBe(false)
    // No progress at all / no reading sections -> never complete.
    expect(isChapterRead(sections, undefined)).toBe(false)
    expect(isChapterRead([{ id: "pretest", type: "pretest" }], {})).toBe(false)
  })

  it("progressContentSig ignores timestamps (so we don't push on every open)", () => {
    const a = { ...empty(), lastSeenAt: 1, firstSeenAt: 1 }
    const b = { ...empty(), lastSeenAt: 999, firstSeenAt: 0 }
    expect(progressContentSig(a)).toBe(progressContentSig(b))
  })

  it("a NEWER retake result wins the merge in both directions (no flip-flop)", () => {
    // Old rule: equal totals kept the local side, so the recorded score
    // depended on which device merged last — forever.
    const stale = empty()
    stale.problemSetResults.medium = { correct: 8, total: 10, at: 1000 }
    const fresh = empty()
    fresh.problemSetResults.medium = { correct: 3, total: 10, at: 2000 }

    expect(mergeProgress(stale, fresh).problemSetResults.medium?.correct).toBe(3)
    expect(mergeProgress(fresh, stale).problemSetResults.medium?.correct).toBe(3)
  })

  it("legacy results without timestamps keep the more-attempts rule", () => {
    const a = empty()
    a.problemSetResults.medium = { correct: 5, total: 6 }
    const b = empty()
    b.problemSetResults.medium = { correct: 7, total: 10 }
    expect(mergeProgress(a, b).problemSetResults.medium?.total).toBe(10)
  })

  it("a checkpoint older than the set's recorded finish does not resurrect (zombie resume)", () => {
    // Device A finished the set (result at t=2000, checkpoint cleared);
    // device B still holds the mid-run checkpoint from t=1000. The merge
    // must not bring the finished set back to a "Resume · Qn" state.
    const finished = empty()
    finished.problemSetResults.medium = { correct: 9, total: 10, at: 2000 }
    const staleDevice = empty()
    staleDevice.problemSetResults.medium = { correct: 9, total: 10, at: 2000 }
    staleDevice.problemSetRuns = { medium: { idx: 4, answers: [true, false, true, true], at: 1000 } }

    expect(mergeProgress(finished, staleDevice).problemSetRuns?.medium).toBeUndefined()
    expect(mergeProgress(staleDevice, finished).problemSetRuns?.medium).toBeUndefined()
  })

  it("a checkpoint NEWER than the recorded finish survives (genuine retake in progress)", () => {
    const p = empty()
    p.problemSetResults.medium = { correct: 9, total: 10, at: 1000 }
    p.problemSetRuns = { medium: { idx: 2, answers: [true, true], at: 5000 } }
    expect(mergeProgress(p, empty()).problemSetRuns?.medium?.idx).toBe(2)
  })

  it("legacy (unstamped) runs are never deleted by the zombie rule", () => {
    const p = empty()
    p.problemSetResults.medium = { correct: 9, total: 10, at: 2000 }
    p.problemSetRuns = { medium: { idx: 3, answers: [true, true, false] } }
    expect(mergeProgress(p, empty()).problemSetRuns?.medium?.idx).toBe(3)
  })
})
