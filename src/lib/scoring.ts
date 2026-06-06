/**
 * GMAT Focus scoring formula. Single source of truth for converting an
 * accuracy fraction (0–1) to the 205–805 total scale.
 *
 * Formula: 205 + round(accuracy × 600 / 10) × 10, clamped to [205, 805].
 * GMAT Focus totals sit on a 205-anchored, 10-point grid (205, 215, …, 805),
 * so valid scores end in 5 — never a multiple of 10. Snapping to the nearest
 * 10 (the old approach) produced impossible scores like 750 and 810.
 *
 * Re-exported from diagnostic.ts and mock.ts for backward compatibility
 * with existing imports.
 */
export function accuracyToScore(accuracy: number): number {
  const clamped = Math.max(0, Math.min(1, accuracy))
  const snapped = 205 + Math.round((clamped * 600) / 10) * 10
  return Math.max(205, Math.min(805, snapped))
}
