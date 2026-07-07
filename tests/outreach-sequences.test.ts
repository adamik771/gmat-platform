import { describe, it, expect } from "vitest"
import {
  SEQUENCES,
  plannedSteps,
  findStep,
  dedupeKey,
  INACTIVE_THRESHOLDS,
} from "@/lib/outreach/sequences"

const START = "2026-06-27T12:00:00.000Z"

describe("outreach sequences", () => {
  it("defines all five sequences with the specified steps", () => {
    expect(SEQUENCES.signup.map((s) => s.step)).toEqual([
      "welcome",
      "start",
      "consult",
      "invite",
      "founding",
      "feedback",
    ])
    expect(SEQUENCES.founding.map((s) => s.step)).toEqual([
      "confirm",
      "includes",
      "referral",
      "next",
    ])
    expect(SEQUENCES["error-log"].map((s) => s.step)).toEqual([
      "deliver",
      "howto",
      "beta",
      "founding",
    ])
    expect(SEQUENCES.inactive.map((s) => s.offsetDays)).toEqual([3, 7, 14])
    expect(SEQUENCES.milestone.map((s) => s.step)).toEqual([
      "first-practice",
      "mock-review",
      "progress",
    ])
  })

  it("every step maps to a unique template key", () => {
    const keys = Object.values(SEQUENCES)
      .flat()
      .map((s) => s.templateKey)
    expect(new Set(keys).size).toBe(keys.length)
  })

  it("plannedSteps schedules drip steps at the right offsets", () => {
    const plan = plannedSteps("signup", START)
    expect(plan.map((p) => p.step)).toEqual([
      "welcome",
      "start",
      "consult",
      "invite",
      "founding",
      "feedback",
    ])
    // welcome is immediate; day-N steps are exactly N*24h later.
    expect(plan[0].scheduledFor).toBe("2026-06-27T12:00:00.000Z")
    expect(plan[1].scheduledFor).toBe("2026-06-28T12:00:00.000Z")
    expect(plan[2].scheduledFor).toBe("2026-06-29T12:00:00.000Z")
    expect(plan[4].scheduledFor).toBe("2026-07-02T12:00:00.000Z")
    expect(plan[5].scheduledFor).toBe("2026-07-07T12:00:00.000Z")
  })

  it("plannedSteps is deterministic for the same start", () => {
    expect(plannedSteps("founding", START)).toEqual(plannedSteps("founding", START))
  })

  it("plannedSteps rejects an invalid start", () => {
    expect(() => plannedSteps("signup", "not-a-date")).toThrow()
  })

  it("findStep resolves known steps and returns undefined otherwise", () => {
    expect(findStep("inactive", "plan")?.templateKey).toBe("inactive-plan")
    expect(findStep("inactive", "nope")).toBeUndefined()
  })

  it("dedupeKey is stable and namespaced by recipient + sequence + step", () => {
    expect(dedupeKey("user-1", "signup", "welcome")).toBe("user-1:signup:welcome")
    expect(dedupeKey("user-1", "signup", "welcome")).not.toBe(
      dedupeKey("user-2", "signup", "welcome")
    )
  })

  it("inactivity thresholds are ascending", () => {
    const days = INACTIVE_THRESHOLDS.map((t) => t.days)
    expect(days).toEqual([...days].sort((a, b) => a - b))
  })
})
