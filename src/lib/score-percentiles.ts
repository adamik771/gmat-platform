import type { Section } from "@/types"

/**
 * GMAT Focus Edition percentile interpretation.
 *
 * Score → percentile lookups for total and per-section scaled scores.
 * Percentiles are rounded approximations based on GMAC's published
 * percentile bands; they update annually as the testing population
 * shifts. Use them for narrative interpretation ("90th percentile band"),
 * not as official GMAC reports.
 *
 * Two surfaces consume this:
 *   - Mock report: shows percentile next to the total score and per-section.
 *   - Diagnostic report: same idea, applied to the diagnostic baseline.
 */

// Total-score percentiles from the GMAT Focus population tables (2020-2025).
// Keys = score lower-bound; values = percentile. Walk in descending key order
// and pick the first entry whose key is ≤ score (totals snap to the 205-805
// grid, so the lookup is exact). 735+ is the 100th band; the score calculator
// caps the DISPLAYED value at 99 separately.
const TOTAL_PERCENTILES: Array<{ minScore: number; percentile: number }> = [
  { minScore: 735, percentile: 100 },
  { minScore: 725, percentile: 99 },
  { minScore: 715, percentile: 99 },
  { minScore: 705, percentile: 98 },
  { minScore: 695, percentile: 97 },
  { minScore: 685, percentile: 96 },
  { minScore: 675, percentile: 95 },
  { minScore: 665, percentile: 92 },
  { minScore: 655, percentile: 91 },
  { minScore: 645, percentile: 87 },
  { minScore: 635, percentile: 82 },
  { minScore: 625, percentile: 79 },
  { minScore: 615, percentile: 76 },
  { minScore: 605, percentile: 70 },
  { minScore: 595, percentile: 67 },
  { minScore: 585, percentile: 61 },
  { minScore: 575, percentile: 57 },
  { minScore: 565, percentile: 51 },
  { minScore: 555, percentile: 48 },
  { minScore: 545, percentile: 42 },
  { minScore: 535, percentile: 39 },
  { minScore: 525, percentile: 34 },
  { minScore: 515, percentile: 32 },
  { minScore: 505, percentile: 27 },
  { minScore: 495, percentile: 25 },
  { minScore: 485, percentile: 21 },
  { minScore: 475, percentile: 20 },
  { minScore: 465, percentile: 17 },
  { minScore: 455, percentile: 15 },
  { minScore: 445, percentile: 13 },
  { minScore: 435, percentile: 12 },
  { minScore: 425, percentile: 10 },
  { minScore: 415, percentile: 9 },
  { minScore: 405, percentile: 7 },
  { minScore: 395, percentile: 6 },
  { minScore: 385, percentile: 5 },
  { minScore: 375, percentile: 5 },
  { minScore: 365, percentile: 4 },
  { minScore: 355, percentile: 3 },
  { minScore: 345, percentile: 3 },
  { minScore: 335, percentile: 2 },
  { minScore: 325, percentile: 2 },
  { minScore: 315, percentile: 2 },
  { minScore: 305, percentile: 1 },
  { minScore: 295, percentile: 1 },
  { minScore: 285, percentile: 1 },
  { minScore: 275, percentile: 1 },
  { minScore: 265, percentile: 1 },
  { minScore: 255, percentile: 0 },
  { minScore: 245, percentile: 0 },
  { minScore: 235, percentile: 0 },
  { minScore: 225, percentile: 0 },
  { minScore: 215, percentile: 0 },
  { minScore: 205, percentile: 0 },
]

// Per-section percentiles (60-90 scale) from the GMAT Focus population
// tables (2020-2025). Exact per-point values; sections snap to the 60-90
// integer grid, so the descending-walk lookup is exact.
const SECTION_PERCENTILES: Record<Section, Array<{ minScore: number; percentile: number }>> = {
  Quant: [
    { minScore: 90, percentile: 100 },
    { minScore: 89, percentile: 97 },
    { minScore: 88, percentile: 96 },
    { minScore: 87, percentile: 94 },
    { minScore: 86, percentile: 91 },
    { minScore: 85, percentile: 88 },
    { minScore: 84, percentile: 85 },
    { minScore: 83, percentile: 80 },
    { minScore: 82, percentile: 75 },
    { minScore: 81, percentile: 70 },
    { minScore: 80, percentile: 64 },
    { minScore: 79, percentile: 57 },
    { minScore: 78, percentile: 50 },
    { minScore: 77, percentile: 43 },
    { minScore: 76, percentile: 37 },
    { minScore: 75, percentile: 32 },
    { minScore: 74, percentile: 26 },
    { minScore: 73, percentile: 22 },
    { minScore: 72, percentile: 19 },
    { minScore: 71, percentile: 15 },
    { minScore: 70, percentile: 13 },
    { minScore: 69, percentile: 10 },
    { minScore: 68, percentile: 8 },
    { minScore: 67, percentile: 6 },
    { minScore: 66, percentile: 5 },
    { minScore: 65, percentile: 4 },
    { minScore: 64, percentile: 3 },
    { minScore: 63, percentile: 2 },
    { minScore: 62, percentile: 2 },
    { minScore: 61, percentile: 1 },
    { minScore: 60, percentile: 1 },
  ],
  Verbal: [
    { minScore: 90, percentile: 100 },
    { minScore: 89, percentile: 99 },
    { minScore: 88, percentile: 99 },
    { minScore: 87, percentile: 98 },
    { minScore: 86, percentile: 96 },
    { minScore: 85, percentile: 94 },
    { minScore: 84, percentile: 89 },
    { minScore: 83, percentile: 83 },
    { minScore: 82, percentile: 74 },
    { minScore: 81, percentile: 66 },
    { minScore: 80, percentile: 56 },
    { minScore: 79, percentile: 47 },
    { minScore: 78, percentile: 38 },
    { minScore: 77, percentile: 30 },
    { minScore: 76, percentile: 23 },
    { minScore: 75, percentile: 18 },
    { minScore: 74, percentile: 14 },
    { minScore: 73, percentile: 10 },
    { minScore: 72, percentile: 8 },
    { minScore: 71, percentile: 6 },
    { minScore: 70, percentile: 4 },
    { minScore: 69, percentile: 3 },
    { minScore: 68, percentile: 3 },
    { minScore: 67, percentile: 2 },
    { minScore: 66, percentile: 2 },
    { minScore: 65, percentile: 1 },
    { minScore: 64, percentile: 1 },
    { minScore: 63, percentile: 1 },
    { minScore: 62, percentile: 1 },
    { minScore: 61, percentile: 1 },
    { minScore: 60, percentile: 1 },
  ],
  DI: [
    { minScore: 90, percentile: 100 },
    { minScore: 89, percentile: 100 },
    { minScore: 88, percentile: 99 },
    { minScore: 87, percentile: 99 },
    { minScore: 86, percentile: 99 },
    { minScore: 85, percentile: 98 },
    { minScore: 84, percentile: 97 },
    { minScore: 83, percentile: 95 },
    { minScore: 82, percentile: 93 },
    { minScore: 81, percentile: 89 },
    { minScore: 80, percentile: 83 },
    { minScore: 79, percentile: 76 },
    { minScore: 78, percentile: 69 },
    { minScore: 77, percentile: 62 },
    { minScore: 76, percentile: 53 },
    { minScore: 75, percentile: 47 },
    { minScore: 74, percentile: 41 },
    { minScore: 73, percentile: 35 },
    { minScore: 72, percentile: 29 },
    { minScore: 71, percentile: 25 },
    { minScore: 70, percentile: 21 },
    { minScore: 69, percentile: 17 },
    { minScore: 68, percentile: 14 },
    { minScore: 67, percentile: 12 },
    { minScore: 66, percentile: 10 },
    { minScore: 65, percentile: 8 },
    { minScore: 64, percentile: 7 },
    { minScore: 63, percentile: 6 },
    { minScore: 62, percentile: 5 },
    { minScore: 61, percentile: 4 },
    { minScore: 60, percentile: 4 },
  ],
}

/**
 * Total-score percentile (1-100).
 * `score` is the total GMAT Focus score (205-805).
 */
export function totalPercentile(score: number): number {
  for (const row of TOTAL_PERCENTILES) {
    if (score >= row.minScore) return row.percentile
  }
  return 1
}

/**
 * Per-section percentile (1-100). `sectionScore` is the 60-90 scaled
 * value. Out-of-range inputs clamp to the closest band.
 */
export function sectionPercentile(section: Section, sectionScore: number): number {
  const rows = SECTION_PERCENTILES[section]
  for (const row of rows) {
    if (sectionScore >= row.minScore) return row.percentile
  }
  return 1
}

/**
 * Plain-English score band — surfaces in headlines like "90th percentile band."
 * Used as a fallback when the exact percentile would over-promise precision.
 */
export function percentileBand(percentile: number): string {
  if (percentile >= 100) return "100th percentile (top 1%)"
  if (percentile >= 99) return "99th percentile (top 1%)"
  if (percentile >= 95) return `${percentile}th percentile (top 5%)`
  if (percentile >= 90) return `${percentile}th percentile (top 10%)`
  if (percentile >= 75) return `${percentile}th percentile`
  if (percentile >= 50) return `${percentile}th percentile (above median)`
  if (percentile >= 25) return `${percentile}th percentile (below median)`
  if (percentile >= 10) return `${percentile}th percentile`
  return `<10th percentile`
}

/**
 * Convert a section's accuracy → 60-90 scaled score, mirroring the
 * dashboard formula. Centralised so mock + diagnostic surfaces stay in
 * sync if the formula ever changes.
 */
export function accuracyToSectionScore(accuracy: number): number {
  return Math.round(60 + accuracy * 30)
}

/**
 * One-line narrative score interpretation.
 *
 *   - Frames the score as a band (top X%, above/below median)
 *   - Calls out the headline band crossing if the previous score is
 *     known (e.g., crossing from 75th → 90th band is significant)
 */
export function interpretTotalScore(
  score: number,
  previousScore?: number | null
): string {
  const pct = totalPercentile(score)
  const band = percentileBand(pct)
  if (previousScore == null) {
    return `${score} — ${band}.`
  }
  const prevPct = totalPercentile(previousScore)
  const delta = score - previousScore
  if (delta > 0) {
    if (pct >= 90 && prevPct < 90) {
      return `${score} (${band}) — crossed into the top-decile band from ${previousScore}.`
    }
    if (pct >= 75 && prevPct < 75) {
      return `${score} (${band}) — crossed the 75th-percentile line from ${previousScore}.`
    }
    return `${score} — ${band}. Up ${delta} points from ${previousScore}.`
  }
  if (delta < 0) {
    return `${score} — ${band}. Down ${Math.abs(delta)} points from ${previousScore}; expected variance is ±20.`
  }
  return `${score} — ${band}. Flat against the previous mock.`
}
