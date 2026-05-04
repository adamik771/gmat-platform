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

// Total-score percentiles. Keys = score lower-bound; values = percentile.
// Walk the table in descending key order; pick the first entry whose key
// is ≤ score. This is the "you're in at least this percentile" reading.
const TOTAL_PERCENTILES: Array<{ minScore: number; percentile: number }> = [
  { minScore: 805, percentile: 100 },
  { minScore: 765, percentile: 99 },
  { minScore: 745, percentile: 98 },
  { minScore: 725, percentile: 96 },
  { minScore: 705, percentile: 92 },
  { minScore: 685, percentile: 88 },
  { minScore: 665, percentile: 82 },
  { minScore: 645, percentile: 75 },
  { minScore: 625, percentile: 67 },
  { minScore: 605, percentile: 58 },
  { minScore: 585, percentile: 50 },
  { minScore: 565, percentile: 42 },
  { minScore: 545, percentile: 34 },
  { minScore: 525, percentile: 27 },
  { minScore: 505, percentile: 21 },
  { minScore: 485, percentile: 15 },
  { minScore: 465, percentile: 11 },
  { minScore: 445, percentile: 8 },
  { minScore: 405, percentile: 4 },
  { minScore: 365, percentile: 2 },
  { minScore: 205, percentile: 1 },
]

// Per-section percentiles (60-90 scale). The shape of the curves
// differs by section: Quant compresses at the top because so many
// students score 84+; Verbal and DI are flatter.
const SECTION_PERCENTILES: Record<Section, Array<{ minScore: number; percentile: number }>> = {
  Quant: [
    { minScore: 90, percentile: 100 },
    { minScore: 87, percentile: 96 },
    { minScore: 84, percentile: 87 },
    { minScore: 81, percentile: 71 },
    { minScore: 78, percentile: 53 },
    { minScore: 75, percentile: 35 },
    { minScore: 72, percentile: 21 },
    { minScore: 69, percentile: 11 },
    { minScore: 66, percentile: 5 },
    { minScore: 60, percentile: 1 },
  ],
  Verbal: [
    { minScore: 90, percentile: 100 },
    { minScore: 87, percentile: 99 },
    { minScore: 84, percentile: 96 },
    { minScore: 81, percentile: 86 },
    { minScore: 78, percentile: 70 },
    { minScore: 75, percentile: 51 },
    { minScore: 72, percentile: 33 },
    { minScore: 69, percentile: 19 },
    { minScore: 66, percentile: 9 },
    { minScore: 60, percentile: 1 },
  ],
  DI: [
    { minScore: 90, percentile: 100 },
    { minScore: 87, percentile: 99 },
    { minScore: 84, percentile: 95 },
    { minScore: 81, percentile: 82 },
    { minScore: 78, percentile: 64 },
    { minScore: 75, percentile: 43 },
    { minScore: 72, percentile: 26 },
    { minScore: 69, percentile: 13 },
    { minScore: 66, percentile: 5 },
    { minScore: 60, percentile: 1 },
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
