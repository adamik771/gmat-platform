/**
 * Weekly study-hours semantics, shared by the onboarding slider, the
 * study-plan page, and the cadence engine so the copy and the plan can
 * never disagree about what the chosen hours mean.
 *
 * Bands:
 *   low    (< 6 hrs)  — scarce time: lead with weak areas, expect a longer runway
 *   medium (6–14 hrs) — balanced chapter/practice/review rotation
 *   high   (>= 15 hrs) — volume plan: schedule a lighter review/rest day
 */
// The upper end supports students treating preparation as a full-time block.
// It is available capacity, not a recommendation or a question-volume quota.
export const WEEKLY_HOURS_MIN = 3
export const WEEKLY_HOURS_MAX = 40

/** Read a stored onboarding target using today's supported range. Historical
 * values came from a wider slider, so clamp rather than hiding them. */
export function normalizeWeeklyHoursTarget(value: unknown): number | null {
  if (typeof value !== "number" || !Number.isFinite(value)) return null
  return Math.min(WEEKLY_HOURS_MAX, Math.max(WEEKLY_HOURS_MIN, value))
}

export type HoursBand = "low" | "medium" | "high"

export function hoursBand(hours: number): HoursBand {
  if (hours < 6) return "low"
  if (hours < 15) return "medium"
  return "high"
}

/** Rough per-day budget implied by the weekly target, rounded to 5 min.
 *  High band divides by 6: the plan reserves a rest day there, so the
 *  honest per-STUDY-day number is a seventh higher. */
export function perDayMinutes(hours: number): number {
  const studyDays = hoursBand(hours) === "high" ? 6 : 7
  return Math.max(10, Math.round((hours * 60) / studyDays / 5) * 5)
}

export function dailyStudyBudgetLabel(hours: number): string {
  const minutes = perDayMinutes(hours)
  const wholeHours = Math.floor(minutes / 60)
  const remainingMinutes = minutes % 60
  const duration =
    wholeHours === 0
      ? `${minutes} min`
      : remainingMinutes === 0
        ? `${wholeHours} hr`
        : `${wholeHours} hr ${remainingMinutes} min`
  return `${duration} per ${hoursBand(hours) === "high" ? "study day" : "day"}`
}

export function weeklyHoursAdvice(hours: number): string {
  if (hours > 25) {
    return "Intensive schedule: treat these hours as available capacity, not a quota. Split the day into focused blocks and reserve substantial time for solution review, concept repair, and breaks rather than adding question volume indefinitely."
  }
  switch (hoursBand(hours)) {
    case "low":
      return "A smaller weekly budget needs a longer runway. Your plan leads with the highest-priority gaps so consistency matters more than session length."
    case "medium":
      return "This supports a balanced rotation of chapters, timed practice, and deliberate review without requiring full study days."
    case "high":
      return "High volume: your plan reserves a lighter review/rest day each week, and long days work best as 45-60 minute blocks with real breaks — one block is one timed section, the endurance unit exam day tests."
  }
}
