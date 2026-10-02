const MAX_REASONABLE_SESSION_MS = 4 * 60 * 60_000

export interface ActivitySession {
  created_at: string
  total_time_ms: number | null
  total_questions?: number | null
}

export interface TrackedActivityDay {
  activity_date: string
  active_seconds: number | null
}

export interface ActivitySummary {
  activeSeconds: number
  activeSeconds7d: number
  activeSeconds30d: number
  activeDays7d: number
  activeDays30d: number
  trackedActivityAvailable: boolean
}

function finitePositive(value: number | null | undefined): number {
  return typeof value === "number" && Number.isFinite(value) && value > 0
    ? value
    : 0
}

function utcDay(value: string): string | null {
  const parsed = Date.parse(value)
  return Number.isFinite(parsed) ? new Date(parsed).toISOString().slice(0, 10) : null
}

function firstDayInWindow(now: Date, days: number): string {
  const first = new Date(
    Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate()),
  )
  first.setUTCDate(first.getUTCDate() - (days - 1))
  return first.toISOString().slice(0, 10)
}

/**
 * Caps legacy practice-session durations that may include time spent in a
 * suspended or abandoned tab. The allowance is intentionally generous: ten
 * minutes of setup/review plus five minutes per question, with a four-hour
 * ceiling that still covers a full mock and review.
 */
export function reasonableSessionMs(session: ActivitySession): number {
  const reported = finitePositive(session.total_time_ms)
  const questionCount = Math.max(1, finitePositive(session.total_questions))
  const contextualCap = 10 * 60_000 + questionCount * 5 * 60_000
  return Math.min(reported, contextualCap, MAX_REASONABLE_SESSION_MS)
}

/**
 * Combines the full-site heartbeat with practice-session fallback data.
 * Heartbeats already include time spent in practice, so each UTC day uses the
 * larger source instead of adding both and double-counting the same work.
 */
export function buildActivitySummary(
  sessions: readonly ActivitySession[],
  trackedDays: readonly TrackedActivityDay[],
  now: Date,
): ActivitySummary {
  const practiceSecondsByDay = new Map<string, number>()
  for (const session of sessions) {
    const day = utcDay(session.created_at)
    if (!day) continue
    const seconds = reasonableSessionMs(session) / 1_000
    practiceSecondsByDay.set(day, (practiceSecondsByDay.get(day) ?? 0) + seconds)
  }

  const trackedSecondsByDay = new Map<string, number>()
  for (const row of trackedDays) {
    if (!/^\d{4}-\d{2}-\d{2}$/.test(row.activity_date)) continue
    const seconds = Math.min(finitePositive(row.active_seconds), 86_400)
    trackedSecondsByDay.set(
      row.activity_date,
      Math.max(trackedSecondsByDay.get(row.activity_date) ?? 0, seconds),
    )
  }

  const sevenDayStart = firstDayInWindow(now, 7)
  const thirtyDayStart = firstDayInWindow(now, 30)
  const today = now.toISOString().slice(0, 10)
  const allDays = new Set([
    ...practiceSecondsByDay.keys(),
    ...trackedSecondsByDay.keys(),
  ])

  let activeSeconds = 0
  let activeSeconds7d = 0
  let activeSeconds30d = 0
  let activeDays7d = 0
  let activeDays30d = 0
  for (const day of allDays) {
    const seconds = Math.max(
      practiceSecondsByDay.get(day) ?? 0,
      trackedSecondsByDay.get(day) ?? 0,
    )
    if (seconds <= 0 || day > today) continue
    activeSeconds += seconds
    if (day >= thirtyDayStart) {
      activeSeconds30d += seconds
      activeDays30d += 1
    }
    if (day >= sevenDayStart) {
      activeSeconds7d += seconds
      activeDays7d += 1
    }
  }

  return {
    activeSeconds,
    activeSeconds7d,
    activeSeconds30d,
    activeDays7d,
    activeDays30d,
    trackedActivityAvailable: trackedDays.length > 0,
  }
}
