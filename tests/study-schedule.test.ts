import { describe, expect, it } from "vitest"
import { buildSchedule } from "@/lib/study-schedule"

const base = {
  examDateIso: "2026-12-01",
  todayIso: "2026-09-01",
}

describe("public study schedule weekly capacity", () => {
  it("supports a forty-hour intensive preparation week", () => {
    const schedule = buildSchedule({ ...base, weeklyHours: 40 })

    expect(schedule.weeklyHours).toBe(40)
    expect(schedule.weeks.some((week) =>
      week.bullets.some((bullet) => bullet.includes("solution review")),
    )).toBe(true)
  })

  it("clamps only values above the forty-hour product ceiling", () => {
    expect(buildSchedule({ ...base, weeklyHours: 60 }).weeklyHours).toBe(40)
  })
})
