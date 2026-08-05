import { beforeEach, describe, expect, it, vi } from "vitest"

import { pickMockQuestions, MOCK_QUESTION_COUNT } from "@/lib/mock"
import { fullSetAccuracy, accuracyToScore } from "@/lib/scoring"
import { shouldGuardUnload } from "@/lib/practice-save"
import {
  computeTopicMastery,
  type MasteryAttempt,
  type MasterySession,
} from "@/lib/mastery"
import { getAllQuestions } from "@/lib/content"
import type { ParsedQuestion } from "@/lib/content"

// ---------------------------------------------------------------------------
// F001 — repeat mocks must not re-serve prior questions while the pool allows
// ---------------------------------------------------------------------------
describe("pickMockQuestions excludeIds", () => {
  it("second mock shares no questions with the first when ids are excluded", () => {
    for (const section of ["Quant", "Verbal", "DI"] as const) {
      const first = pickMockQuestions(section, undefined, undefined, 0)
      const served = new Set(first.map((q) => q.id))
      const second = pickMockQuestions(section, undefined, undefined, 1, served)
      expect(second).toHaveLength(MOCK_QUESTION_COUNT[section])
      const overlap = second.filter((q) => served.has(q.id))
      expect(overlap).toEqual([])
    }
  })

  it("falls back to the full pool when exclusion would starve the section", () => {
    const everything = new Set(getAllQuestions().map((q) => q.id))
    const picks = pickMockQuestions("Quant", undefined, undefined, 2, everything)
    // Excluding the entire pool must not produce an empty (or short) mock.
    expect(picks).toHaveLength(MOCK_QUESTION_COUNT.Quant)
  })

  it("without excludeIds keeps the historical rotation behavior", () => {
    const a = pickMockQuestions("Quant", undefined, undefined, 0)
    const b = pickMockQuestions("Quant", undefined, undefined, 0)
    expect(a.map((q) => q.id)).toEqual(b.map((q) => q.id))
  })
})

// ---------------------------------------------------------------------------
// F004 — analytics mock totals derive from full-set accuracy
// ---------------------------------------------------------------------------
describe("fullSetAccuracy", () => {
  it("uses correct/total when counts exist (timed-out mock is not inflated)", () => {
    // 21 questions, 14 answered, 12 correct: stored answered-only pct = 86.
    expect(fullSetAccuracy(12, 21, 86)).toBeCloseTo(12 / 21)
    // The score the analytics page derives must match the mock report's.
    expect(accuracyToScore(fullSetAccuracy(12, 21, 86))).toBe(
      accuracyToScore(12 / 21)
    )
    expect(accuracyToScore(fullSetAccuracy(12, 21, 86))).not.toBe(
      accuracyToScore(0.86)
    )
  })

  it("falls back to the stored percentage for legacy rows without counts", () => {
    expect(fullSetAccuracy(null, null, 57)).toBeCloseTo(0.57)
    expect(fullSetAccuracy(0, 0, 40)).toBeCloseTo(0.4)
    expect(fullSetAccuracy(null, null, null)).toBe(0)
  })
})

// ---------------------------------------------------------------------------
// F022 — beforeunload guard stays armed until the save actually lands
// ---------------------------------------------------------------------------
describe("shouldGuardUnload", () => {
  it("guards mid-session with submitted answers", () => {
    expect(shouldGuardUnload(true, false, "idle")).toBe(true)
  })
  it("guards the results screen while the save failed or is in flight", () => {
    expect(shouldGuardUnload(true, true, "error")).toBe(true)
    expect(shouldGuardUnload(true, true, "unauthorized")).toBe(true)
    expect(shouldGuardUnload(true, true, "saving")).toBe(true)
  })
  it("releases after a successful save and on untouched sessions", () => {
    expect(shouldGuardUnload(true, true, "saved")).toBe(false)
    expect(shouldGuardUnload(true, true, "idle")).toBe(false)
    expect(shouldGuardUnload(false, false, "idle")).toBe(false)
    expect(shouldGuardUnload(false, true, "error")).toBe(false)
  })
})

// ---------------------------------------------------------------------------
// F005 — concept gate caps its requirement at the chapter's inline supply
// ---------------------------------------------------------------------------
describe("computeTopicMastery inline-supply cap", () => {
  const sessionsById = new Map<string, MasterySession>()
  const attempts: MasteryAttempt[] = []
  // Critical Reasoning maps to verbal-02 (3 countable inline questions).
  const topic = "Critical Reasoning"
  const chapterSlug = "verbal-02-cr-argument-structure"

  function questionIndexFor(ids: string[], correct = 0): Map<string, ParsedQuestion> {
    const map = new Map<string, ParsedQuestion>()
    for (const id of ids) {
      map.set(id, { id, correctAnswer: correct, section: "Verbal" } as unknown as ParsedQuestion)
    }
    return map
  }

  it("satisfies the gate at full supply even when supply < MIN_UNTIMED", () => {
    const ids = ["cr-a", "cr-b", "cr-c"]
    const progress = {
      [chapterSlug]: {
        questions: Object.fromEntries(
          ids.map((id) => [id, { selected: 0, submitted: true }])
        ),
      },
    }
    const supply = new Map([[chapterSlug, 3]])
    const m = computeTopicMastery(
      topic,
      "Verbal",
      attempts,
      sessionsById,
      progress,
      questionIndexFor(ids),
      {},
      supply
    )
    const concept = m.gates.find((g) => g.id === "concept")!
    expect(concept.satisfied).toBe(true)
  })

  it("still reports remaining attempts against the capped requirement", () => {
    const ids = ["cr-a"]
    const progress = {
      [chapterSlug]: {
        questions: { "cr-a": { selected: 0, submitted: true } },
      },
    }
    const supply = new Map([[chapterSlug, 3]])
    const m = computeTopicMastery(
      topic,
      "Verbal",
      attempts,
      sessionsById,
      progress,
      questionIndexFor(ids),
      {},
      supply
    )
    const concept = m.gates.find((g) => g.id === "concept")!
    expect(concept.satisfied).toBe(false)
    expect(concept.evidence).toContain("need 2 more")
  })

  it("auto-satisfies with an explanatory message when supply is zero (TPA-only chapter)", () => {
    const supply = new Map([[chapterSlug, 0]])
    const m = computeTopicMastery(
      topic,
      "Verbal",
      attempts,
      sessionsById,
      {},
      new Map(),
      {},
      supply
    )
    const concept = m.gates.find((g) => g.id === "concept")!
    expect(concept.satisfied).toBe(true)
    expect(concept.evidence).toContain("timed gate")
  })

  it("without a supply map keeps the historical MIN_UNTIMED requirement", () => {
    const m = computeTopicMastery(
      topic,
      "Verbal",
      attempts,
      sessionsById,
      {},
      new Map()
    )
    const concept = m.gates.find((g) => g.id === "concept")!
    expect(concept.satisfied).toBe(false)
  })
})

// ---------------------------------------------------------------------------
// F003 — offline drain slices the queue under the API's 100-attempt cap
// ---------------------------------------------------------------------------
const queueState: { attempts: Array<Record<string, unknown>> } = { attempts: [] }
vi.mock("@/lib/offline/pending-attempts", () => ({
  loadPendingAttempts: vi.fn(async () => queueState.attempts),
  removePendingAttempts: vi.fn(async (_userId: string, ids: string[]) => {
    const drop = new Set(ids)
    queueState.attempts = queueState.attempts.filter(
      (a) => !drop.has(a.id as string)
    )
  }),
}))

describe("drainPendingAttempts chunking", () => {
  function makeQueue(n: number) {
    queueState.attempts = Array.from({ length: n }, (_, i) => ({
      id: `a${i}`,
      questionId: `q${i}`,
      section: "Quant",
      topic: "Algebra",
      subtopic: null,
      difficulty: "Medium",
      questionType: "Problem Solving",
      selectedAnswer: 0,
      isCorrect: i % 2 === 0,
      timeSpentMs: 1000,
      submittedAt: 0,
      v: 1,
    }))
  }

  beforeEach(() => {
    vi.stubGlobal("window", { localStorage: undefined } as unknown as Window)
    vi.stubGlobal("navigator", { onLine: true } as unknown as Navigator)
    vi.resetModules()
  })

  it("drains a 250-item queue as three POSTs of at most 100 and clears it", async () => {
    makeQueue(250)
    const bodies: Array<{ totalQuestions: number }> = []
    vi.stubGlobal(
      "fetch",
      vi.fn(async (_url: string, init: RequestInit) => {
        bodies.push(JSON.parse(init.body as string))
        return { ok: true, status: 200 } as Response
      })
    )
    const { drainPendingAttempts } = await import("@/lib/offline/sync")
    const result = await drainPendingAttempts("user-1")
    expect(result.drained).toBe(true)
    expect(result.attemptsSent).toBe(250)
    expect(bodies.map((b) => b.totalQuestions)).toEqual([100, 100, 50])
    expect(bodies.every((b) => b.totalQuestions <= 100)).toBe(true)
    expect(queueState.attempts).toHaveLength(0)
  })

  it("keeps unsent slices queued when a later slice fails, without re-sending sent ones", async () => {
    makeQueue(150)
    let call = 0
    vi.stubGlobal(
      "fetch",
      vi.fn(async () => {
        call += 1
        return call === 1
          ? ({ ok: true, status: 200 } as Response)
          : ({ ok: false, status: 503 } as Response)
      })
    )
    const { drainPendingAttempts } = await import("@/lib/offline/sync")
    const result = await drainPendingAttempts("user-1")
    expect(result.drained).toBe(false)
    expect(result.attemptsSent).toBe(100)
    // The failed slice's 50 attempts remain queued; the sent 100 are gone.
    expect(queueState.attempts).toHaveLength(50)
    expect(queueState.attempts[0].id).toBe("a100")
  })
})
