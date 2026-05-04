/**
 * GMAT Focus Edition (205-805) ↔ legacy GMAT (200-800) score conversion.
 *
 * Anchor points from GMAC's published concordance table. Between
 * anchors we interpolate linearly. The conversion is approximate by
 * GMAC's own framing — official guidance is that scores from the two
 * scales are NOT directly comparable, and the table is a guide for
 * candidates and admissions teams, not a precise mapping.
 *
 * The tool surface uses these as a "rough equivalent" for someone
 * translating an old-test target into a Focus target (or vice versa).
 * We never claim exact equivalence in the UI.
 */

export type ScoreScale = "focus" | "old"

interface Anchor {
  /** Focus score (205-805 scale, 5-point ticks) */
  focus: number
  /** Old GMAT score (200-800 scale, 10-point ticks) */
  old: number
  /** Approximate Total-Score percentile at this anchor (0-100) */
  percentile: number
}

/**
 * Anchors must be sorted by Focus score ascending. The interpolator
 * relies on this ordering.
 */
const ANCHORS: Anchor[] = [
  { focus: 205, old: 200, percentile: 0 },
  { focus: 305, old: 380, percentile: 5 },
  { focus: 405, old: 480, percentile: 14 },
  { focus: 495, old: 560, percentile: 33 },
  { focus: 545, old: 600, percentile: 49 },
  { focus: 595, old: 640, percentile: 65 },
  { focus: 645, old: 680, percentile: 80 },
  { focus: 695, old: 720, percentile: 92 },
  { focus: 725, old: 740, percentile: 96 },
  { focus: 745, old: 760, percentile: 98 },
  { focus: 765, old: 770, percentile: 99 },
  { focus: 785, old: 790, percentile: 99 },
  { focus: 805, old: 800, percentile: 100 },
]

/**
 * Round to the nearest valid score on the scale.
 *
 * Focus scores end in 5 (205, 215, …, 805) — 10-point spacing offset
 * by 5 from a multiple of 10. Old GMAT scores end in 0 (200, 210, …,
 * 800). Naïve `round(x / 10) * 10` would round Focus 645 to 650.
 */
function snapToScale(score: number, scale: ScoreScale): number {
  if (scale === "focus") {
    return Math.round((score - 5) / 10) * 10 + 5
  }
  return Math.round(score / 10) * 10
}

/** Clamp a score into the valid range for its scale. */
export function clampScore(score: number, scale: ScoreScale): number {
  if (scale === "focus") return Math.max(205, Math.min(805, score))
  return Math.max(200, Math.min(800, score))
}

/**
 * Convert a Focus score → equivalent old GMAT score (and percentile).
 * Linear interpolation between anchors.
 */
export function convertFocusToOld(focusScore: number): {
  equivalent: number
  percentile: number
} {
  const f = clampScore(focusScore, "focus")
  // Find the bracket
  for (let i = 0; i < ANCHORS.length - 1; i++) {
    const lo = ANCHORS[i]
    const hi = ANCHORS[i + 1]
    if (f >= lo.focus && f <= hi.focus) {
      const t = (f - lo.focus) / (hi.focus - lo.focus || 1)
      const oldEq = lo.old + t * (hi.old - lo.old)
      const pct = lo.percentile + t * (hi.percentile - lo.percentile)
      return {
        equivalent: snapToScale(oldEq, "old"),
        percentile: Math.round(pct),
      }
    }
  }
  // Fall through (shouldn't happen after clamp).
  return { equivalent: 800, percentile: 100 }
}

/**
 * Convert an old GMAT score → equivalent Focus score (and percentile).
 * Same interpolation logic, opposite direction.
 */
export function convertOldToFocus(oldScore: number): {
  equivalent: number
  percentile: number
} {
  const o = clampScore(oldScore, "old")
  for (let i = 0; i < ANCHORS.length - 1; i++) {
    const lo = ANCHORS[i]
    const hi = ANCHORS[i + 1]
    if (o >= lo.old && o <= hi.old) {
      const t = (o - lo.old) / (hi.old - lo.old || 1)
      const focusEq = lo.focus + t * (hi.focus - lo.focus)
      const pct = lo.percentile + t * (hi.percentile - lo.percentile)
      return {
        equivalent: snapToScale(focusEq, "focus"),
        percentile: Math.round(pct),
      }
    }
  }
  return { equivalent: 805, percentile: 100 }
}

/**
 * Per-section: convert a Focus 60-90 score to an old-test 6-51 score.
 * The two scales are roughly linear between their endpoints, so a
 * linear map is the standard approximation.
 *
 * 60 → 6, 90 → 51. (60-90 spans 30; 6-51 spans 45.)
 */
export function convertFocusSectionToOldSection(focusSection: number): number {
  const f = Math.max(60, Math.min(90, focusSection))
  const oldEq = 6 + ((f - 60) / 30) * (51 - 6)
  return Math.round(oldEq)
}

export function convertOldSectionToFocusSection(oldSection: number): number {
  const o = Math.max(6, Math.min(51, oldSection))
  const focusEq = 60 + ((o - 6) / (51 - 6)) * 30
  return Math.round(focusEq)
}

/**
 * A short qualitative band for a Total Score percentile.
 *
 * Used in the converter UI to give the user a quick read on what the
 * score means in admissions terms — not as a rigid threshold (every
 * school has its own bar), but as a rough orientation.
 */
export type PercentileBand =
  | "Top of scale"
  | "Top decile"
  | "Highly competitive"
  | "Mid-range"
  | "Below average"
  | "Foundation"

export function bandForPercentile(pct: number): PercentileBand {
  if (pct >= 99) return "Top of scale"
  if (pct >= 90) return "Top decile"
  if (pct >= 75) return "Highly competitive"
  if (pct >= 50) return "Mid-range"
  if (pct >= 25) return "Below average"
  return "Foundation"
}

/**
 * Public read-only access to the anchor table — exposed so the UI can
 * render a small reference table beside the live converter.
 */
export function getAnchors(): readonly Anchor[] {
  return ANCHORS
}
