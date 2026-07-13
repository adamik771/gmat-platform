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
export function localDayIso(d: Date): string {
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
export function daysUntil(isoDate: string | null | undefined): number | null {
  if (!isoDate || !/^\d{4}-\d{2}-\d{2}$/.test(isoDate)) return null
  const [y, m, d] = isoDate.split("-").map(Number)
  const targetLocal = new Date(y, (m ?? 1) - 1, d ?? 1).getTime()
  const todayLocal = new Date(new Date().toDateString()).getTime()
  return Math.ceil((targetLocal - todayLocal) / 86400000)
}
