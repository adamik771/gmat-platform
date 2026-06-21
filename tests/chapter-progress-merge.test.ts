import { describe, it, expect } from "vitest"
import {
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

  it("progressContentSig ignores timestamps (so we don't push on every open)", () => {
    const a = { ...empty(), lastSeenAt: 1, firstSeenAt: 1 }
    const b = { ...empty(), lastSeenAt: 999, firstSeenAt: 0 }
    expect(progressContentSig(a)).toBe(progressContentSig(b))
  })
})
