/**
 * GMAT Focus scoring formula. Single source of truth for converting an
 * accuracy fraction (0–1) to the 205–805 total scale.
 *
 * Formula: round(accuracy × 600 + 205, nearest 10), clamped to [205, 805].
 *
 * Re-exported from diagnostic.ts and mock.ts for backward compatibility
 * with existing imports.
 */
export function accuracyToScore(accuracy: number): number {
  const raw = Math.round((accuracy * 600 + 205) / 10) * 10
  return Math.max(205, Math.min(805, raw))
}
