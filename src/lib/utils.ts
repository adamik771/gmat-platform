import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * YYYY-MM-DD key for the LOCAL calendar day of `d`. The one day-boundary
 * for every activity metric (streaks, calendar dots, hours chart, "today"
 * counts). `toISOString().slice(0,10)` is the UTC day — in a positive-offset
 * timezone (Oslo, UTC+1/2) any session after 22:00-23:00 local landed on the
 * NEXT day's dot and could break or extend streaks incorrectly.
 */
export function localDayIso(d: Date, tz?: string | null): string {
  // With a tz (IANA name from the client's tz cookie): format in THAT
  // zone. Server components run in the server's timezone (UTC on
  // Vercel), so without this every "local day" boundary was a UTC
  // boundary in production and late-evening sessions landed on the
  // wrong day — the exact bug the process-local version was meant to
  // fix but only fixed in dev, where server TZ = developer TZ.
  if (tz) {
    try {
      // en-CA renders as YYYY-MM-DD.
      return new Intl.DateTimeFormat("en-CA", { timeZone: tz }).format(d)
    } catch {
      // Invalid tz string — fall through to process-local.
    }
  }
  const y = d.getFullYear()
  const m = String(d.getMonth() + 1).padStart(2, "0")
  const day = String(d.getDate()).padStart(2, "0")
  return `${y}-${m}-${day}`
}

/**
 * Whole days from local-today until a YYYY-MM-DD date, parsed as LOCAL
 * midnight. `new Date("YYYY-MM-DD")` is UTC midnight, which in a
 * positive-offset timezone reads as the previous local day and threw exam
 * countdowns off by one. Null for a missing/malformed date.
 */
export function daysUntil(
  isoDate: string | null | undefined,
  tz?: string | null
): number | null {
  if (!isoDate || !/^\d{4}-\d{2}-\d{2}$/.test(isoDate)) return null
  if (tz) {
    // Whole-day diff between two calendar dates in the user's zone —
    // parse both as UTC midnights so the subtraction is exact.
    const todayIso = localDayIso(new Date(), tz)
    return Math.round((Date.parse(isoDate) - Date.parse(todayIso)) / 86400000)
  }
  const [y, m, d] = isoDate.split("-").map(Number)
  const targetLocal = new Date(y, (m ?? 1) - 1, d ?? 1).getTime()
  const todayLocal = new Date(new Date().toDateString()).getTime()
  return Math.ceil((targetLocal - todayLocal) / 86400000)
}

/**
 * Sessions that replay previously-seen questions — spaced-review runs
 * (`review-*`), redo-missed restarts (`redo-*`), and mixed-review sets
 * (slug `custom`, topic "Mixed Review…"). Excluded from accuracy metrics
 * so doing the right thing (reviewing your misses) never drags down the
 * numbers it exists to improve.
 */
export function isReplaySession(
  slug: string | null | undefined,
  topic?: string | null
): boolean {
  const s = String(slug ?? "")
  if (s.startsWith("review-") || s.startsWith("redo-")) return true
  return String(topic ?? "").toLowerCase().startsWith("mixed review")
}
