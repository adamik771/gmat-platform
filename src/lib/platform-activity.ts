export const HEARTBEAT_MS = 60_000
export const DEFAULT_ACTIVE_WINDOW_MS = 5 * 60_000
export const READING_ACTIVE_WINDOW_MS = 30 * 60_000
export const STUDY_TIMER_STORAGE_KEY = "study-timer-state"

const READING_SURFACES = [
  "/chapters/",
  "/guides/",
  "/learn/",
  "/practice/history/",
  "/practice/session/",
  "/review",
  "/error-log",
  "/mock/report",
] as const

/**
 * Long-form study pages need a wider quiet-reading allowance than navigation
 * and account pages. The cap still prevents an abandoned visible tab from
 * accumulating activity indefinitely.
 */
export function activeWindowForPath(pathname: string): number {
  return READING_SURFACES.some((surface) =>
    surface.endsWith("/")
      ? pathname.startsWith(surface)
      : pathname === surface || pathname.startsWith(`${surface}/`),
  )
    ? READING_ACTIVE_WINDOW_MS
    : DEFAULT_ACTIVE_WINDOW_MS
}

/**
 * A student who explicitly starts a Focus work block is active even when
 * reading without generating browser input. Paused, expired, break, and
 * malformed timer states never bypass the normal inactivity window.
 */
export function hasRunningFocusBlock(
  storedValue: string | null,
  nowMs: number,
): boolean {
  if (!storedValue) return false
  try {
    const state = JSON.parse(storedValue) as {
      phase?: unknown
      endsAt?: unknown
      pausedRemainingMs?: unknown
    }
    return (
      state.phase === "work" &&
      typeof state.endsAt === "number" &&
      Number.isFinite(state.endsAt) &&
      state.endsAt > nowMs &&
      state.pausedRemainingMs === null
    )
  } catch {
    return false
  }
}
