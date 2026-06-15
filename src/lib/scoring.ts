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

/** GMAT Focus per-section scaled-score range (Quant / Verbal / Data Insights). */
export const SECTION_SCORE_MIN = 60
export const SECTION_SCORE_MAX = 90
/**
 * Honest uncertainty band for the section→total estimate. Reputable prep
 * calculators (TTP, Magoosh) note a ~±10-point swing because identical section
 * scores can yield different totals under the real (proprietary) algorithm.
 */
export const SECTION_TOTAL_ESTIMATE_SWING = 10

/**
 * Estimate the GMAT Focus total (205–805) from the three section scores
 * (each 60–90).
 *
 * GMAC does NOT publish the official section→total mapping — the scoring
 * algorithm is proprietary (mba.com "Understanding Your Score" states only
 * that the three sections are "equally weighted"). This is the standard
 * equal-weight LINEAR APPROXIMATION used by the major prep calculators
 * (Target Test Prep, Magoosh, e-GMAT, GMAT Club):
 *
 *   total = (Q + V + DI − 180) × 20/3 + 205, snapped to the 205-anchored
 *   10-point grid (valid scores end in 5).
 *
 * It is exact at the endpoints (3×60 → 205, 3×90 → 805) and matches GMAC's
 * "≈6⅔ total points per section-point" guidance. It is an ESTIMATE, not an
 * official conversion — surface the ±SECTION_TOTAL_ESTIMATE_SWING band in any
 * UI and never present the output as authoritative.
 */
export function sectionScoresToTotal(
  quant: number,
  verbal: number,
  dataInsights: number
): number {
  const clamp = (n: number) =>
    Math.max(SECTION_SCORE_MIN, Math.min(SECTION_SCORE_MAX, Math.round(n)))
  const sum = clamp(quant) + clamp(verbal) + clamp(dataInsights)
  const raw = (sum - 180) * (20 / 3) + 205
  const snapped = 205 + Math.round((raw - 205) / 10) * 10
  return Math.max(205, Math.min(805, snapped))
}
