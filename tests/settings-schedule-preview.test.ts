import { describe, expect, it } from "vitest"
import { previewScheduleChanges, scheduleMatchesPreview } from "@/app/(app)/settings/schedule-preview"

const current = { examDate: "2026-09-12", weeklyHours: 12 }

describe("settings schedule preview", () => {
  it("shows actual changed inputs without deriving a revised plan", () => {
    const { preview, error } = previewScheduleChanges(current, { examDate: "2026-09-26", weeklyHours: 35 })
    expect(error).toBeNull()
    expect(preview?.changes).toEqual([
      { field: "examDate", label: "Exam date", before: "12 Sept 2026", after: "26 Sept 2026" },
      { field: "weeklyHours", label: "Weekly availability", before: "12 hours / week", after: "35 hours / week" },
    ])
    expect(preview?.dateShift).toBe("Exam date moves 14 calendar days later.")
    expect(preview?.dailyBudget).toBe("Approximate daily capacity: 5 hr 50 min per study day. Available time, not a task quota.")
    expect(preview).not.toHaveProperty("tasks")
    expect(preview).not.toHaveProperty("completionDate")
  })

  it.each([3, 3.5, 30, 35, 40])("preserves supported weekly availability %s without a 30-hour cap", (weeklyHours) => {
    const { preview, error } = previewScheduleChanges(current, { ...current, weeklyHours })
    expect(error).toBeNull()
    expect(preview?.inputs.weeklyHours).toBe(weeklyHours)
  })

  it.each([2, 41, NaN, Infinity])("rejects unsupported hours %s without silently clamping", (weeklyHours) => {
    expect(previewScheduleChanges(current, { ...current, weeklyHours }).error)
      .toBe("Weekly availability must be between 3 and 40 hours.")
  })

  it("handles unset or cleared inputs honestly", () => {
    const cleared = previewScheduleChanges(current, { examDate: null, weeklyHours: 12 }).preview
    expect(cleared?.changes).toEqual([{ field: "examDate", label: "Exam date", before: "12 Sept 2026", after: "Not set" }])
    expect(cleared?.dateShift).toBeNull()
    expect(cleared?.dailyBudget).toBeNull()
    const added = previewScheduleChanges({ examDate: null, weeklyHours: null }, current).preview
    expect(added?.changes.map((change) => change.before)).toEqual(["Not set", "Not set"])
  })

  it("does not invent changes when the inputs stay the same", () => {
    expect(previewScheduleChanges(current, current).preview?.changes).toEqual([])
  })

  it("requires a new review if either schedule input changes", () => {
    const proposed = { examDate: "2026-10-12", weeklyHours: 40 }
    const preview = previewScheduleChanges(current, proposed).preview!
    expect(scheduleMatchesPreview(preview, proposed)).toBe(true)
    expect(scheduleMatchesPreview(preview, { ...proposed, examDate: null })).toBe(false)
    expect(scheduleMatchesPreview(preview, { ...proposed, weeklyHours: 35 })).toBe(false)
    proposed.weeklyHours = 30
    expect(preview.inputs.weeklyHours).toBe(40)
  })

  it("handles leap years and DST as calendar dates and still permits past dates", () => {
    expect(previewScheduleChanges({ ...current, examDate: "2028-02-28" }, { ...current, examDate: "2028-02-29" }).preview?.dateShift)
      .toBe("Exam date moves 1 calendar day later.")
    expect(previewScheduleChanges({ ...current, examDate: "2026-03-30" }, { ...current, examDate: "2026-03-28" }).preview?.dateShift)
      .toBe("Exam date moves 2 calendar days earlier.")
    expect(previewScheduleChanges(current, { ...current, examDate: "2025-02-29" }).error).toBeTruthy()
    expect(previewScheduleChanges(current, { ...current, examDate: "not-a-date" }).error).toBeTruthy()
  })
})
