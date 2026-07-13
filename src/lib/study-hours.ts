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
export const WEEKLY_HOURS_MIN = 1
export const WEEKLY_HOURS_MAX = 40

export type HoursBand = "low" | "medium" | "high"

export function hoursBand(hours: number): HoursBand {
  if (hours < 6) return "low"
  if (hours < 15) return "medium"
  return "high"
}

/** Rough per-day budget implied by the weekly target, rounded to 5 min. */
export function perDayMinutes(hours: number): number {
  return Math.max(10, Math.round((hours * 60) / 7 / 5) * 5)
}

export function weeklyHoursAdvice(hours: number): string {
  switch (hoursBand(hours)) {
    case "low":
      return "Under ~6 hrs/week means a longer runway to your target — your plan leads with your weakest areas so every session counts."
    case "medium":
      return "A balanced plan: steady chapter reads, fresh practice, and review — the pace most working students can sustain."
    case "high":
      return "High volume: your plan reserves a lighter review/rest day each week. Retention beats raw hours — burnout is the main risk at this pace."
  }
}
