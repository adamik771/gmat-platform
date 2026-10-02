import { describe, it, expect } from "vitest"
import {
  computeRung,
  priorityFor,
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
    confidentMiss: false,
    saved: false,
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

  it("re-enters one rung below the lapse point after a corrective success (relearning savings)", () => {
    // climb to 3, miss (drop to 0), first correct re-enters at 2, next climbs to 3.
    expect(computeRung([true, true, true, false, true, true])).toBe(3)
  })

  it("re-enters at MAX_RUNG - 1 after lapsing from the cap", () => {
    // reach MAX_RUNG (4 corrects), miss -> 0, one correct re-enters at 3.
    expect(computeRung([true, true, true, true, false, true])).toBe(3)
  })

  it("a trailing miss always lands the question back at rung 0 (due-now)", () => {
    expect(computeRung([true, true, true, true, false])).toBe(0)
    expect(computeRung([false, false, false])).toBe(0)
  })

  it("a lapse on a brand-new or rung-1 item re-enters at rung 1 (no shortcut to skip the ladder)", () => {
    expect(computeRung([false, true, true])).toBe(2)
    expect(computeRung([true, false, true])).toBe(1)
    expect(computeRung([true, true, false])).toBe(0)
  })

  it("repeated lapses step the re-entry rung down toward 1", () => {
    // Lapse at 3 -> re-enter 2; later lapse at 2 -> re-enter 1.
    expect(computeRung([true, true, true, false, true, false, true])).toBe(1)
  })
})

describe("priorityFor", () => {
  it("items inside their spacing window are not due, even with prior misses", () => {
    // rung 1 (2-day gap), corrected today, missed once before: the old
    // formula kept this in the queue forever via missCount * 3.
    const r = priorityFor(1, 0, 1, false)
    expect(r.due).toBe(false)
    expect(r.daysUntilDue).toBeCloseTo(2)
  })

  it("rung-0 items are always due (same-day corrective attempt)", () => {
    expect(priorityFor(0, 0, 1, false).due).toBe(true)
  })

  it("caps the overdue term so stale items cannot bury fresh misses arbitrarily", () => {
    const stale = priorityFor(1, 30, 0, false) // 28d overdue, capped at 14
    expect(stale.priority).toBe(14 * 10)
    const fresh = priorityFor(0, 1, 1, false) // fresh miss: 10 + 50 + 3
    expect(fresh.priority).toBe(63)
  })

  it("boosts high-confidence misses (+15) and saved questions (+25)", () => {
    const base = priorityFor(0, 0, 1, false).priority
    expect(priorityFor(0, 0, 1, false, { confidentMiss: true }).priority).toBe(
      base + 15
    )
    expect(priorityFor(0, 0, 1, false, { saved: true }).priority).toBe(base + 25)
  })

  it("flagged keeps its +100 override", () => {
    expect(priorityFor(1, 0, 0, true).priority).toBe(100)
  })

  it("caps the spacing gap near the exam so no review schedules past test day", () => {
    // rung 4 = 42-day gap; 10 days to exam caps the gap at 5 days.
    const nearExam = priorityFor(4, 6, 0, false, { daysUntilExam: 10 })
    expect(nearExam.due).toBe(true)
    // Without the exam cap the same item would not be due for 36 more days.
    expect(priorityFor(4, 6, 0, false).due).toBe(false)
    // The cap never drops below 3 days.
    expect(priorityFor(2, 2, 0, false, { daysUntilExam: 1 }).due).toBe(false)
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
