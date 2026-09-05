export const HEARTBEAT_MS = 60_000
export const DEFAULT_ACTIVE_WINDOW_MS = 5 * 60_000
export const READING_ACTIVE_WINDOW_MS = 15 * 60_000

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

