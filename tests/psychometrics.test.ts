import { describe, expect, it } from "vitest"
import { assessDifficultyFit, computeItemStats, proportionInterval, summariseBankHealth, type PsychometricsInput } from "@/lib/psychometrics"

function attempt(overrides: Partial<PsychometricsInput> = {}): PsychometricsInput {
  return { id: "a1", user_id: "u1", question_id: "q1", section: "Quant", topic: "Arithmetic", is_correct: true,
    created_at: "2026-09-01T10:00:00Z", hints_revealed: 0, eligibleSession: true, ...overrides }
}

describe("item statistics", () => {
  it("does not call one student's 20 repetitions a broken item", () => {
    const rows = Array.from({ length: 20 }, (_, i) => attempt({ id: `a${i}`, created_at: new Date(Date.UTC(2026, 8, 1, 10, i)).toISOString(), is_correct: i % 2 === 0 }))
    const [item] = computeItemStats(rows)
    expect(item).toMatchObject({ attempts: 1, recordedAttempts: 20, pValue: 1, discrimination: null, flag: "insufficient" })
    expect(computeItemStats([...rows].reverse())).toEqual([item])
  })

  it("does not promote a retry after a hinted, replay or unknown first attempt", () => {
    for (const first of [{ hints_revealed: 1 }, { eligibleSession: false }, { hints_revealed: null }, { created_at: null }]) {
      const [item] = computeItemStats([attempt(first), attempt({ id: "a2", created_at: "2026-09-02T10:00:00Z" })])
      expect(item).toMatchObject({ attempts: 0, pValue: null, interval: null, flag: "insufficient" })
    }
  })

  it("rejects unknown and ambiguous first chronology, without mutating input", () => {
    const rows = [attempt(), attempt({ id: "a2", is_correct: false })]
    const before = structuredClone(rows)
    expect(computeItemStats(rows)[0].attempts).toBe(0)
    expect(rows).toEqual(before)
    expect(computeItemStats([attempt({ created_at: "not-a-date" })])[0].attempts).toBe(0)
  })

  it("excludes all target-item repeats and other sections from the comparison", () => {
    const rows: PsychometricsInput[] = []
    for (let u = 0; u < 20; u++) {
      const user_id = `u${u}`
      const targetCorrect = u < 10
      rows.push(attempt({ id: `${u}-target`, user_id, question_id: "target", is_correct: targetCorrect }))
      for (let q = 0; q < 5; q++) rows.push(attempt({ id: `${u}-${q}`, user_id, question_id: `other${q}`, is_correct: !targetCorrect }))
      // Arbitrarily many later successful retries must have no effect.
      for (let r = 0; r < 8; r++) rows.push(attempt({ id: `${u}-retry${r}`, user_id, question_id: "target", created_at: `2026-09-02T10:0${r}:00Z` }))
      rows.push(attempt({ id: `${u}-verbal`, user_id, section: "Verbal", question_id: "verbal" }))
    }
    const target = computeItemStats(rows).find((q) => q.questionId === "target")!
    expect(target).toMatchObject({ attempts: 20, pValue: 0.5, discrimination: -1, comparisonCorrect: 10, comparisonWrong: 10, flag: "review" })
    expect(target.interval!.low).toBeCloseTo(0.2993, 3)
    expect(target.interval!.high).toBeCloseTo(0.7007, 3)
  })

  it("withholds comparison when students have fewer than five other unique items", () => {
    const rows = Array.from({ length: 25 }, (_, u) => attempt({ id: `a${u}`, user_id: `u${u}`, is_correct: u % 2 === 0 }))
    expect(computeItemStats(rows)[0].discrimination).toBeNull()
  })

  it("does not produce a health percentage from an empty or tiny sample", () => {
    expect(summariseBankHealth([]).healthPct).toBeNull()
    expect(summariseBankHealth(computeItemStats([attempt()])).healthPct).toBeNull()
    expect(proportionInterval(0, 0)).toBeNull()
  })
})

describe("authored difficulty screening", () => {
  it("flags only when the entire interval is outside a heuristic band", () => {
    expect(assessDifficultyFit("Advanced", 0.72, 40)).toBe("on-target")
    expect(assessDifficultyFit("Advanced", 0.9, 100)).toBe("too-easy")
    expect(assessDifficultyFit("Beginner", 0.2, 100)).toBe("too-hard")
    expect(assessDifficultyFit("Intermediate", 0.6, 50)).toBe("on-target")
  })
  it("does not judge small or invalid samples", () => {
    for (const rate of [null, NaN, -1, 2]) expect(assessDifficultyFit("Advanced", rate, 100)).toBe("insufficient")
    expect(assessDifficultyFit("Advanced", 1, 19)).toBe("insufficient")
  })
})
