/**
 * Official GMAT Exam (Focus Edition) <-> GMAT Exam (10th Edition)
 * total-score concordance.
 *
 * Source: GMAC, "GMAT Score Concordance Table", published July 2025.
 * The table is many-to-many because the two exams use different score-bin
 * sizes and observed score frequencies. We therefore return the complete
 * official range for a score instead of inventing a single value through
 * interpolation.
 */

export type ScoreScale = "focus" | "old"

export interface ConcordanceRow {
  /** Current GMAT total score (205-805). */
  focus: number
  /** All linked 10th Edition totals in the official table. */
  old: readonly number[]
  /** Current GMAT percentile, rounded by GMAC to one decimal place. */
  percentile: number
}

export interface ScoreConversionResult {
  /** Input after clamping and snapping to a valid score tick. */
  sourceScore: number
  /** Every officially linked score on the destination scale. */
  equivalents: readonly number[]
  minEquivalent: number
  maxEquivalent: number
  /** Percentile span across the matched official rows. */
  minPercentile: number
  maxPercentile: number
  /** Exact official rows used for this result. */
  rows: readonly ConcordanceRow[]
  /** A real linked value used only when the UI swaps direction. */
  representativeEquivalent: number
}

export const GMAC_CONCORDANCE_SOURCE_URL =
  "https://www.gmac.com/-/media/mbasite/gmat-focus-edition/assets-or-collateral/score-concordance-tables.pdf"

export const GMAC_CONCORDANCE_PUBLISHED = "July 2025"

/**
 * Grouped form of GMAC's table, sorted by current GMAT score ascending.
 * Old scores are sorted ascending inside each row for stable range display.
 */
const CONCORDANCE_ROWS: readonly ConcordanceRow[] = [
  { focus: 205, old: [200], percentile: 0.1 },
  { focus: 215, old: [200], percentile: 0.2 },
  { focus: 225, old: [200], percentile: 0.2 },
  { focus: 235, old: [200], percentile: 0.3 },
  { focus: 245, old: [200], percentile: 0.3 },
  { focus: 255, old: [200, 210], percentile: 0.4 },
  { focus: 265, old: [210], percentile: 0.5 },
  { focus: 275, old: [210], percentile: 0.7 },
  { focus: 285, old: [210, 220], percentile: 0.8 },
  { focus: 295, old: [220, 230], percentile: 1.1 },
  { focus: 305, old: [230, 240], percentile: 1.3 },
  { focus: 315, old: [240, 250], percentile: 1.7 },
  { focus: 325, old: [250], percentile: 1.9 },
  { focus: 335, old: [250, 260, 270, 280], percentile: 2.4 },
  { focus: 345, old: [280, 290, 300], percentile: 2.7 },
  { focus: 355, old: [300, 310], percentile: 3.4 },
  { focus: 365, old: [310, 320], percentile: 3.8 },
  { focus: 375, old: [320, 330, 340, 350], percentile: 4.7 },
  { focus: 385, old: [350], percentile: 5.2 },
  { focus: 395, old: [350, 360, 370], percentile: 6.4 },
  { focus: 405, old: [370, 380], percentile: 7.1 },
  { focus: 415, old: [380, 390, 400], percentile: 8.7 },
  { focus: 425, old: [400, 410], percentile: 9.6 },
  { focus: 435, old: [410, 420, 430, 440], percentile: 11.6 },
  { focus: 445, old: [440, 450], percentile: 12.7 },
  { focus: 455, old: [450, 460], percentile: 15.2 },
  { focus: 465, old: [460, 470], percentile: 16.6 },
  { focus: 475, old: [470, 480, 490], percentile: 19.7 },
  { focus: 485, old: [490, 500], percentile: 21.3 },
  { focus: 495, old: [500, 510, 520, 530], percentile: 25.1 },
  { focus: 505, old: [530], percentile: 27.1 },
  { focus: 515, old: [530, 540, 550], percentile: 31.5 },
  { focus: 525, old: [550, 560], percentile: 34.0 },
  { focus: 535, old: [560, 570], percentile: 39.2 },
  { focus: 545, old: [570, 580], percentile: 41.9 },
  { focus: 555, old: [580, 590, 600], percentile: 47.8 },
  { focus: 565, old: [600, 610], percentile: 50.9 },
  { focus: 575, old: [610, 620], percentile: 57.4 },
  { focus: 585, old: [620, 630, 640], percentile: 60.6 },
  { focus: 595, old: [640, 650], percentile: 67.1 },
  { focus: 605, old: [650], percentile: 70.3 },
  { focus: 615, old: [650, 660, 670, 680], percentile: 76.4 },
  { focus: 625, old: [680], percentile: 79.2 },
  { focus: 635, old: [680, 690], percentile: 81.9 },
  { focus: 645, old: [690, 700], percentile: 86.7 },
  { focus: 655, old: [700, 710], percentile: 90.5 },
  { focus: 665, old: [710, 720], percentile: 92.1 },
  { focus: 675, old: [720, 730], percentile: 94.8 },
  { focus: 685, old: [730, 740], percentile: 95.8 },
  { focus: 695, old: [740, 750], percentile: 97.4 },
  { focus: 705, old: [750], percentile: 98.0 },
  { focus: 715, old: [750, 760], percentile: 98.8 },
  { focus: 725, old: [760], percentile: 99.1 },
  { focus: 735, old: [760, 770], percentile: 99.5 },
  { focus: 745, old: [770], percentile: 99.7 },
  { focus: 755, old: [770, 780], percentile: 99.9 },
  { focus: 765, old: [780], percentile: 99.9 },
  { focus: 775, old: [780], percentile: 100.0 },
  { focus: 785, old: [780, 790], percentile: 100.0 },
  { focus: 795, old: [790], percentile: 100.0 },
  { focus: 805, old: [790, 800], percentile: 100.0 },
]

function snapToScale(score: number, scale: ScoreScale): number {
  const fallback = scale === "focus" ? 205 : 200
  const finiteScore = Number.isFinite(score) ? score : fallback
  const clamped = clampScore(finiteScore, scale)
  if (scale === "focus") {
    return Math.round((clamped - 5) / 10) * 10 + 5
  }
  return Math.round(clamped / 10) * 10
}

export function clampScore(score: number, scale: ScoreScale): number {
  if (scale === "focus") return Math.max(205, Math.min(805, score))
  return Math.max(200, Math.min(800, score))
}

function uniqueSorted(values: readonly number[]): number[] {
  return [...new Set(values)].sort((a, b) => a - b)
}

function buildResult(
  sourceScore: number,
  equivalents: readonly number[],
  rows: readonly ConcordanceRow[]
): ScoreConversionResult {
  const sortedEquivalents = uniqueSorted(equivalents)
  const percentiles = rows.map((row) => row.percentile)
  const representativeIndex = Math.floor((sortedEquivalents.length - 1) / 2)

  return {
    sourceScore,
    equivalents: sortedEquivalents,
    minEquivalent: sortedEquivalents[0],
    maxEquivalent: sortedEquivalents[sortedEquivalents.length - 1],
    minPercentile: Math.min(...percentiles),
    maxPercentile: Math.max(...percentiles),
    rows,
    representativeEquivalent: sortedEquivalents[representativeIndex],
  }
}

/** Look up a current GMAT total and return every linked 10th Edition total. */
export function convertFocusToOld(focusScore: number): ScoreConversionResult {
  const sourceScore = snapToScale(focusScore, "focus")
  const row = CONCORDANCE_ROWS.find((candidate) => candidate.focus === sourceScore)

  if (!row) {
    throw new Error(`Missing GMAC concordance row for Focus score ${sourceScore}`)
  }

  return buildResult(sourceScore, row.old, [row])
}

/** Look up a 10th Edition total and return every linked current GMAT total. */
export function convertOldToFocus(oldScore: number): ScoreConversionResult {
  const sourceScore = snapToScale(oldScore, "old")
  const rows = CONCORDANCE_ROWS.filter((row) => row.old.includes(sourceScore))

  if (rows.length === 0) {
    throw new Error(`Missing GMAC concordance row for old score ${sourceScore}`)
  }

  return buildResult(
    sourceScore,
    rows.map((row) => row.focus),
    rows
  )
}

/** Official total-score percentile for a current GMAT total. */
export function focusPercentile(focusScore: number): number {
  return convertFocusToOld(focusScore).minPercentile
}

export function formatScoreRange(min: number, max: number): string {
  return min === max ? String(min) : `${min}-${max}`
}

export function formatPercentileRange(min: number, max: number): string {
  const format = (value: number) => value.toFixed(1)
  return min === max ? `${format(min)}%` : `${format(min)}-${format(max)}%`
}

export type PercentileBand =
  | "Top of scale"
  | "Top decile"
  | "Highly competitive"
  | "Mid-range"
  | "Below average"
  | "Foundation"

export function bandForPercentile(percentile: number): PercentileBand {
  if (percentile >= 99) return "Top of scale"
  if (percentile >= 90) return "Top decile"
  if (percentile >= 75) return "Highly competitive"
  if (percentile >= 50) return "Mid-range"
  if (percentile >= 25) return "Below average"
  return "Foundation"
}

export function getConcordanceRows(): readonly ConcordanceRow[] {
  return CONCORDANCE_ROWS
}
