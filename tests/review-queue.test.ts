import { describe, it, expect } from "vitest"
import {
  computeRung,
  bucketBySection,
  SPACING_LADDER_DAYS,
  MAX_RUNG,
  type ReviewCandidate,
} from "@/lib/review-queue"

/** Build a minimal valid ReviewCandidate, overriding only what a test needs. */
function makeCandidate(
  overrides: Partial<ReviewCandidate> = {}
): ReviewCandidate {
  return {
    questionId: "algebra-q1",
    section: "Quant",
    topic: "Algebra",
    subtopic: "Linear Equations",
    missCount: 0,
    attemptCount: 1,
    lastCorrect: true,
    daysSinceLastSeen: 0,
    rung: 0,
    daysUntilDue: 0,
    flagged: false,
    priority: 0,
    ...overrides,
  }
}

describe("SPACING_LADDER_DAYS / MAX_RUNG constants", () => {
  it("matches the research-report ladder exactly", () => {
    expect([...SPACING_LADDER_DAYS]).toEqual([0, 2, 7, 21, 42])
  })

  it("MAX_RUNG is the last index of the ladder", () => {
    expect(MAX_RUNG).toBe(4)
    expect(MAX_RUNG).toBe(SPACING_LADDER_DAYS.length - 1)
  })
})

describe("computeRung", () => {
  it("starts at rung 0 with no attempts", () => {
    expect(computeRung([])).toBe(0)
  })

  it("advances one rung per consecutive correct attempt", () => {
    expect(computeRung([true])).toBe(1)
    expect(computeRung([true, true])).toBe(2)
    expect(computeRung([true, true, true])).toBe(3)
  })

  it("caps progression at MAX_RUNG even with extra correct attempts", () => {
    // 4 corrects reach the cap; the 5th and 6th must not exceed it.
    expect(computeRung([true, true, true, true])).toBe(MAX_RUNG)
    expect(computeRung([true, true, true, true, true, true])).toBe(MAX_RUNG)
    expect(computeRung(Array(20).fill(true))).toBe(MAX_RUNG)
  })

  it("resets to rung 0 on a single wrong attempt", () => {
    expect(computeRung([false])).toBe(0)
  })

  it("resets to 0 mid-ladder on a miss, then re-climbs", () => {
    // climb to 3, miss (reset to 0), then two corrects climb back to 2.
    expect(computeRung([true, true, true, false, true, true])).toBe(2)
  })

  it("resets from the cap back to 0 on a miss", () => {
    // reach MAX_RUNG (4 corrects), miss -> 0, one correct -> 1.
    expect(computeRung([true, true, true, true, false, true])).toBe(1)
  })

  it("a trailing miss always lands the question back at rung 0 (due-now)", () => {
    expect(computeRung([true, true, true, true, false])).toBe(0)
    expect(computeRung([false, false, false])).toBe(0)
  })

  it("only the chronological order matters, not the raw count of corrects", () => {
    // Same number of trues, different placement of the reset.
    expect(computeRung([false, true, true])).toBe(2)
    expect(computeRung([true, true, false])).toBe(0)
  })
})

describe("bucketBySection", () => {
  it("returns all three section keys even when empty", () => {
    const out = bucketBySection([])
    expect(Object.keys(out).sort()).toEqual(["DI", "Quant", "Verbal"])
    expect(out.Quant).toEqual([])
    expect(out.Verbal).toEqual([])
    expect(out.DI).toEqual([])
  })

  it("routes each candidate into its own section bucket", () => {
    const q = makeCandidate({ questionId: "q1", section: "Quant" })
    const v = makeCandidate({ questionId: "v1", section: "Verbal" })
    const d = makeCandidate({ questionId: "d1", section: "DI" })
    const out = bucketBySection([q, v, d])
    expect(out.Quant).toEqual([q])
    expect(out.Verbal).toEqual([v])
    expect(out.DI).toEqual([d])
  })

  it("preserves input order within a bucket and keeps multiple per section", () => {
    const q1 = makeCandidate({ questionId: "q1", section: "Quant" })
    const q2 = makeCandidate({ questionId: "q2", section: "Quant" })
    const v1 = makeCandidate({ questionId: "v1", section: "Verbal" })
    const out = bucketBySection([q1, v1, q2])
    expect(out.Quant.map((c) => c.questionId)).toEqual(["q1", "q2"])
    expect(out.Verbal.map((c) => c.questionId)).toEqual(["v1"])
    expect(out.DI).toEqual([])
  })

  it("partitions without dropping or duplicating any candidate", () => {
    const candidates = [
      makeCandidate({ questionId: "a", section: "DI" }),
      makeCandidate({ questionId: "b", section: "Quant" }),
      makeCandidate({ questionId: "c", section: "DI" }),
      makeCandidate({ questionId: "d", section: "Verbal" }),
    ]
    const out = bucketBySection(candidates)
    const total = out.Quant.length + out.Verbal.length + out.DI.length
    expect(total).toBe(candidates.length)
    expect(out.DI.map((c) => c.questionId)).toEqual(["a", "c"])
    expect(out.Quant.map((c) => c.questionId)).toEqual(["b"])
    expect(out.Verbal.map((c) => c.questionId)).toEqual(["d"])
  })

  it("does not mutate the original candidate objects", () => {
    const q = makeCandidate({ questionId: "q1", section: "Quant" })
    const snapshot = { ...q }
    bucketBySection([q])
    expect(q).toEqual(snapshot)
  })
})
