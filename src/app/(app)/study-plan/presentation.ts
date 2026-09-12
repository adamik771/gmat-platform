import type { DailySuggestion } from "@/lib/study-plan-engine"

const DAY_MS = 86400000
const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

export function nextSevenPlanDays(todayIso: string, cadence: DailySuggestion[], activityDays: Set<string>) {
  const todayMs = Date.parse(todayIso)
  return Array.from({ length: 7 }, (_, index) => {
    const date = new Date(todayMs + index * DAY_MS)
    const key = date.toISOString().slice(0, 10)
    const weekday = date.getUTCDay()
    return {
      key,
      date,
      weekdayLabel: WEEKDAYS[weekday],
      isToday: index === 0,
      hasActivity: activityDays.has(key),
      // Weekday anchoring keeps the existing cadence's rest-day position.
      suggestion: index === 0 ? null : cadence[weekday] ?? null,
    }
  })
}

export function recentActivityDays(todayIso: string, activityDays: Set<string>): number {
  const start = new Date(Date.parse(todayIso) - 6 * DAY_MS).toISOString().slice(0, 10)
  return [...activityDays].filter((day) => day >= start && day <= todayIso).length
}
