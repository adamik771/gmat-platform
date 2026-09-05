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
// 3-25, matching the study-schedule generator's own clamp. GMAC's survey
// data puts the median total prep at ~80 hours and 700+ scorers around
// ~100 over a typical 6-10-week runway — 25 h/wk already reaches that in
// a month; the old 40 ceiling (320h over 8 weeks) endorsed a pace with
// no evidence behind it and a burnout profile against it.
export const WEEKLY_HOURS_MIN = 3
export const WEEKLY_HOURS_MAX = 25

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

export function weeklyHoursAdvice(hours: number): string {
  switch (hoursBand(hours)) {
    case "low":
      return "Under ~6 hrs/week means a longer runway: GMAC's survey median is ~80 total prep hours, so plan 12+ weeks. Your plan leads with your weakest areas so every session counts."
    case "medium":
      return "6-14 hrs/week reaches the ~80-100 hours typical of 700+ scorers in about 8 weeks — the pace most working students can sustain."
    case "high":
      return "High volume: your plan reserves a lighter review/rest day each week, and long days work best as 45-60 minute blocks with real breaks — one block is one timed section, the endurance unit exam day tests."
  }
}
