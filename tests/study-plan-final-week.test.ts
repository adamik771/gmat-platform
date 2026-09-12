import type { SupabaseClient } from "@supabase/supabase-js"
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest"
import { getFinalWeekReview } from "@/lib/official-exams"
import type { ReviewCandidate } from "@/lib/review-queue"
import { computeStudyPlan, type StudyPlanOutput } from "@/lib/study-plan-engine"

const EXAM_DATE = "2026-09-20"
const USER_ID = "study-plan-test-user"

type Attempt = { id: string; section: string; topic: string; is_correct: boolean }

function mockSupabase(attempts: Attempt[] = []) {
  const queries: Array<{ table: string; query: ReturnType<typeof makeQuery> }> = []
  function makeQuery(data: unknown[]) {
    return {
      select: vi.fn().mockReturnThis(),
      eq: vi.fn().mockReturnThis(),
      limit: vi.fn().mockResolvedValue({ data, error: null }),
      in: vi.fn().mockResolvedValue({ data, error: null }),
    }
  }
  const from = vi.fn((table: string) => {
    if (table !== "practice_attempts" && table !== "error_tags") {
      throw new Error(`Unexpected table: ${table}`)
    }
    const query = makeQuery(table === "practice_attempts" ? attempts : [])
    queries.push({ table, query })
    return query
  })
  return { client: { from } as unknown as SupabaseClient, from, queries }
}

function reviewCandidate(index: number): ReviewCandidate {
  return {
    questionId: `algebra-q${index + 1}`,
    section: "Quant",
    topic: "Algebra",
    subtopic: "Linear Equations",
    missCount: 0,
    attemptCount: 1,
    lastCorrect: true,
    daysSinceLastSeen: 7,
    rung: 2,
    daysUntilDue: 0,
    flagged: false,
    confidentMiss: false,
    saved: false,
    priority: 1,
  }
}

function expectSharedTaper(plan: StudyPlanOutput, todayIso: string) {
  const shared = getFinalWeekReview(EXAM_DATE, todayIso)
  expect(shared).not.toBeNull()
  expect(plan.todaysFocus).toEqual([{
    type: "review",
    title: shared!.title,
    subtitle: shared!.reason,
    href: shared!.href,
    cta: shared!.actionLabel,
    priority: 100,
  }])
  expect(plan.todaysFocus[0].href).toBe("/review")
  expect(plan.todaysFocus[0].title).toMatch(/short review/i)
}

describe("computeStudyPlan final-week priority and local dates", () => {
  beforeEach(() => {
    vi.useFakeTimers()
    vi.setSystemTime(new Date("2026-09-13T12:00:00Z"))
  })
  afterEach(() => vi.useRealTimers())

  it("replaces the missing-baseline action with shared review at exactly seven days", async () => {
    const db = mockSupabase()
    const result = await computeStudyPlan(db.client, USER_ID, {
      targetScore: 705,
      examDate: EXAM_DATE,
      tz: "UTC",
      officialExamCount: 0,
      reviewQueue: [],
    })
    expectSharedTaper(result, "2026-09-13")
    expect(result.reviewDueCount).toBe(0)
    expect(result.weakAreas).toEqual([])
    expect(db.from).toHaveBeenCalledExactlyOnceWith("practice_attempts")
    expect(db.queries[0].query.eq).toHaveBeenCalledWith("user_id", USER_ID)
    expect(db.queries[0].query.limit).toHaveBeenCalledWith(5000)
  })

  it("keeps the same short-review action on exam day with no baseline", async () => {
    vi.setSystemTime(new Date("2026-09-20T12:00:00Z"))
    const db = mockSupabase()
    const result = await computeStudyPlan(db.client, USER_ID, {
      targetScore: null,
      examDate: EXAM_DATE,
      tz: "UTC",
      officialExamCount: 0,
      reviewQueue: [],
    })
    expectSharedTaper(result, "2026-09-20")
  })

  it("does not let an urgent queue or weak topic replace taper, while preserving their evidence", async () => {
    const db = mockSupabase([
      { id: "attempt-1", section: "Quant", topic: "Algebra", is_correct: false },
      { id: "attempt-2", section: "Quant", topic: "Algebra", is_correct: false },
      { id: "attempt-3", section: "Quant", topic: "Algebra", is_correct: true },
    ])
    const reviewQueue = Array.from({ length: 60 }, (_, index) => reviewCandidate(index))
    const result = await computeStudyPlan(db.client, USER_ID, {
      targetScore: 705,
      examDate: EXAM_DATE,
      tz: "UTC",
      officialExamCount: 2,
      reviewQueue,
    })
    expectSharedTaper(result, "2026-09-13")
    expect(result.reviewDueCount).toBe(60)
    expect(result.weakAreas).toMatchObject([{ topic: "Algebra", attempts: 3, accuracy: 1 / 3 }])
    expect(result.todaysFocus[0].title).not.toContain("60")
    expect(db.from.mock.calls.map(([table]) => table)).toEqual(["practice_attempts", "error_tags"])
    expect(reviewQueue.every((item) => item.lastCorrect && item.missCount === 0)).toBe(true)
  })

  it.each([
    { instant: "2026-09-12T22:30:00Z", tz: "Europe/Oslo", localDate: "2026-09-13" },
    { instant: "2026-09-21T02:00:00Z", tz: "America/Los_Angeles", localDate: "2026-09-20" },
  ])("uses $tz local day $localDate at $instant", async ({ instant, tz, localDate }) => {
    vi.setSystemTime(new Date(instant))
    const db = mockSupabase()
    const result = await computeStudyPlan(db.client, USER_ID, {
      targetScore: null,
      examDate: EXAM_DATE,
      tz,
      officialExamCount: 0,
      reviewQueue: [],
    })
    expectSharedTaper(result, localDate)
  })

  it("does not taper early when UTC is inside the window but the user's local date is eight days out", async () => {
    vi.setSystemTime(new Date("2026-09-13T01:00:00Z"))
    const db = mockSupabase()
    const result = await computeStudyPlan(db.client, USER_ID, {
      targetScore: null,
      examDate: EXAM_DATE,
      tz: "America/Los_Angeles",
      officialExamCount: 0,
      reviewQueue: [],
    })
    expect(result.todaysFocus[0]).toMatchObject({ type: "baseline", href: "/mock" })
    expect(result.todaysFocus.some((action) => action.type === "mock")).toBe(true)
    expect(result.todaysFocus.some((action) => action.title === getFinalWeekReview(EXAM_DATE, "2026-09-13")!.title)).toBe(false)
  })
})
