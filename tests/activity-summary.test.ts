import { describe, expect, it } from "vitest"
import {
  buildActivitySummary,
  reasonableSessionMs,
} from "@/lib/activity-summary"

describe("activity summary", () => {
  const now = new Date("2026-09-11T12:00:00.000Z")

  it("uses the larger daily source instead of double-counting practice", () => {
    const summary = buildActivitySummary(
      [
        {
          created_at: "2026-09-10T10:00:00.000Z",
          total_time_ms: 3_600_000,
          total_questions: 20,
        },
        {
          created_at: "2026-09-11T10:00:00.000Z",
          total_time_ms: 1_800_000,
          total_questions: 10,
        },
      ],
      [
        {
          activity_date: "2026-09-10",
          active_seconds: 5_400,
        },
        {
          activity_date: "2026-09-11",
          active_seconds: 1_200,
        },
      ],
      now,
    )

    expect(summary.activeSeconds).toBe(7_200)
    expect(summary.activeSeconds7d).toBe(7_200)
    expect(summary.activeSeconds30d).toBe(7_200)
    expect(summary.activeDays7d).toBe(2)
    expect(summary.trackedActivityAvailable).toBe(true)
  })

  it("keeps all-time totals while excluding old days from recent windows", () => {
    const summary = buildActivitySummary(
      [
        {
          created_at: "2026-08-01T10:00:00.000Z",
          total_time_ms: 3_600_000,
          total_questions: 20,
        },
      ],
      [
        {
          activity_date: "2026-09-06",
          active_seconds: 1_800,
        },
      ],
      now,
    )

    expect(summary.activeSeconds).toBe(5_400)
    expect(summary.activeSeconds7d).toBe(1_800)
    expect(summary.activeSeconds30d).toBe(1_800)
    expect(summary.activeDays30d).toBe(1)
  })

  it("caps a suspended one-question legacy session", () => {
    expect(
      reasonableSessionMs({
        created_at: "2026-09-10T10:00:00.000Z",
        total_time_ms: 7_200_000,
        total_questions: 1,
      }),
    ).toBe(15 * 60_000)
  })

  it("ignores malformed dates, negative time, and future recent days", () => {
    const summary = buildActivitySummary(
      [
        { created_at: "broken", total_time_ms: 10_000, total_questions: 1 },
        {
          created_at: "2026-09-12T10:00:00.000Z",
          total_time_ms: 60_000,
          total_questions: 1,
        },
      ],
      [
        { activity_date: "not-a-date", active_seconds: 500 },
        { activity_date: "2026-09-11", active_seconds: -20 },
      ],
      now,
    )

    expect(summary.activeSeconds).toBe(0)
    expect(summary.activeSeconds7d).toBe(0)
    expect(summary.activeDays7d).toBe(0)
  })
})
