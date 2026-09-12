import {
  dailyStudyBudgetLabel,
  WEEKLY_HOURS_MAX,
  WEEKLY_HOURS_MIN,
} from "@/lib/study-hours"

export interface ScheduleInputs {
  examDate: string | null
  weeklyHours: number | null
}

export interface SchedulePreview {
  inputs: ScheduleInputs
  changes: { field: "examDate" | "weeklyHours"; label: string; before: string; after: string }[]
  dateShift: string | null
  dailyBudget: string | null
}

function dateValue(value: string): number | null {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return null
  const timestamp = Date.parse(`${value}T00:00:00.000Z`)
  if (!Number.isFinite(timestamp)) return null
  return new Date(timestamp).toISOString().slice(0, 10) === value ? timestamp : null
}

function dateLabel(value: string | null): string {
  if (value === null) return "Not set"
  const timestamp = dateValue(value)
  if (timestamp === null) return value
  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric", month: "short", year: "numeric", timeZone: "UTC",
  }).format(timestamp)
}

function hoursLabel(value: number | null): string {
  return value === null ? "Not set" : `${value} hours / week`
}

export function previewScheduleChanges(
  current: ScheduleInputs,
  next: ScheduleInputs,
): { preview: SchedulePreview; error: null } | { preview: null; error: string } {
  if (next.examDate !== null && dateValue(next.examDate) === null) {
    return { preview: null, error: "Enter a valid exam date, or clear the date." }
  }
  if (next.weeklyHours !== null && (
    !Number.isFinite(next.weeklyHours) ||
    next.weeklyHours < WEEKLY_HOURS_MIN || next.weeklyHours > WEEKLY_HOURS_MAX
  )) {
    return { preview: null, error: `Weekly availability must be between ${WEEKLY_HOURS_MIN} and ${WEEKLY_HOURS_MAX} hours.` }
  }

  const changes: SchedulePreview["changes"] = []
  let dateShift: string | null = null
  let dailyBudget: string | null = null
  if (current.examDate !== next.examDate) {
    changes.push({ field: "examDate", label: "Exam date", before: dateLabel(current.examDate), after: dateLabel(next.examDate) })
    const before = current.examDate === null ? null : dateValue(current.examDate)
    const after = next.examDate === null ? null : dateValue(next.examDate)
    if (before !== null && after !== null) {
      // Calendar dates use UTC midnight so DST never adds or removes a day.
      const days = Math.round((after - before) / 86_400_000)
      dateShift = `Exam date moves ${Math.abs(days)} calendar ${Math.abs(days) === 1 ? "day" : "days"} ${days > 0 ? "later" : "earlier"}.`
    }
  }
  if (current.weeklyHours !== next.weeklyHours) {
    changes.push({ field: "weeklyHours", label: "Weekly availability", before: hoursLabel(current.weeklyHours), after: hoursLabel(next.weeklyHours) })
    if (next.weeklyHours !== null) {
      dailyBudget = `Approximate daily capacity: ${dailyStudyBudgetLabel(next.weeklyHours)}. Available time, not a task quota.`
    }
  }
  return { preview: { inputs: { ...next }, changes, dateShift, dailyBudget }, error: null }
}

export function scheduleMatchesPreview(preview: SchedulePreview, inputs: ScheduleInputs): boolean {
  return preview.inputs.examDate === inputs.examDate && preview.inputs.weeklyHours === inputs.weeklyHours
}
