import type { ParsedQuestion } from "./content"

/**
 * Calibration analytics — compares the student's self-rated confidence
 * to their actual correctness on chapter check-questions + problem sets.
 *
 * Why it matters: metacognition (knowing what you know) is a
 * well-documented driver of test performance. A student who says
 * "High confidence" and is 90% accurate is well-calibrated; a student
 * who says "High" and is 55% accurate is overconfident and needs to
 * slow down on those patterns; a student who says "Low" and is 80%
 * accurate is underconfident and should stop second-guessing.
 *
 * Data source: the ChapterReader persists per-question confidence +
 * selected-answer to `user_metadata.chapter_progress[slug].questions`.
 * This module walks that structure and cross-references the selected
 * answer against the question's correctAnswer (from ParsedQuestion) to
 * classify each rated attempt.
 */

export type ConfidenceLevel = "low" | "med" | "high"

export interface CalibrationTier {
  level: ConfidenceLevel
  label: string
  total: number
  correct: number
  accuracy: number // 0..1
}

export type CalibrationVerdict =
  | "well-calibrated"
  | "overconfident"
  | "underconfident"
  | "insufficient-data"

export interface CalibrationReport {
  tiers: CalibrationTier[]
  totalRated: number
  verdict: CalibrationVerdict
  /** Human-readable one-line summary tailored to the verdict. */
  headline: string
}

const MIN_RATED_FOR_VERDICT = 8
/** "High" confidence should correlate with ≥80% accuracy on GMAT-grade
 * items — anything lower is a real overconfidence signal. */
const HIGH_ACCURACY_FLOOR = 0.8
/** "Low" confidence with ≥65% accuracy suggests the student is
 * second-guessing themselves. */
const LOW_ACCURACY_CEILING_FOR_UNDER = 0.65

/** The shape of `user_metadata.chapter_progress[slug]` — see ChapterReader. */
interface StoredQuestionProgress {
  selected?: number | null
  submitted?: boolean
  confidence?: ConfidenceLevel | null
}
interface StoredChapterProgress {
  questions?: Record<string, StoredQuestionProgress>
}
export type ChapterProgressMap = Record<string, StoredChapterProgress>

export function computeCalibration(
  chapterProgress: ChapterProgressMap | null | undefined,
  questions: ParsedQuestion[]
): CalibrationReport {
  const byId = new Map(questions.map((q) => [q.id, q]))
  const tiers: Record<ConfidenceLevel, { total: number; correct: number }> = {
    low: { total: 0, correct: 0 },
    med: { total: 0, correct: 0 },
    high: { total: 0, correct: 0 },
  }

  if (chapterProgress && typeof chapterProgress === "object") {
    for (const slugBlock of Object.values(chapterProgress)) {
      const qs = slugBlock?.questions
      if (!qs || typeof qs !== "object") continue
      for (const [questionId, prog] of Object.entries(qs)) {
        if (!prog || !prog.submitted) continue
        const confidence = prog.confidence
        if (confidence !== "low" && confidence !== "med" && confidence !== "high") continue
        const q = byId.get(questionId)
        if (!q) continue // question removed/renamed since the attempt
        const selected = prog.selected
        if (typeof selected !== "number") continue
        tiers[confidence].total += 1
        if (selected === q.correctAnswer) tiers[confidence].correct += 1
      }
    }
  }

  const totalRated = tiers.low.total + tiers.med.total + tiers.high.total
  const formatted: CalibrationTier[] = (["high", "med", "low"] as const).map((level) => {
    const t = tiers[level]
    const label = level === "high" ? "High" : level === "med" ? "Medium" : "Low"
    return {
      level,
      label,
      total: t.total,
      correct: t.correct,
      accuracy: t.total === 0 ? 0 : t.correct / t.total,
    }
  })

  const verdict = inferVerdict(tiers, totalRated)
  const headline = buildHeadline(verdict, tiers)

  return { tiers: formatted, totalRated, verdict, headline }
}

function inferVerdict(
  tiers: Record<ConfidenceLevel, { total: number; correct: number }>,
  totalRated: number
): CalibrationVerdict {
  if (totalRated < MIN_RATED_FOR_VERDICT) return "insufficient-data"

  const highAcc = tiers.high.total === 0 ? null : tiers.high.correct / tiers.high.total
  const lowAcc = tiers.low.total === 0 ? null : tiers.low.correct / tiers.low.total

  // Overconfidence wins over underconfidence when both signals fire — the
  // cost of overconfidence (missing questions you thought you had) is higher
  // than the cost of underconfidence (correctly-answered questions you
  // second-guessed).
  if (
    highAcc !== null &&
    tiers.high.total >= 4 &&
    highAcc < HIGH_ACCURACY_FLOOR
  ) {
    return "overconfident"
  }

  if (
    lowAcc !== null &&
    tiers.low.total >= 4 &&
    lowAcc >= LOW_ACCURACY_CEILING_FOR_UNDER
  ) {
    return "underconfident"
  }

  return "well-calibrated"
}

function buildHeadline(
  verdict: CalibrationVerdict,
  tiers: Record<ConfidenceLevel, { total: number; correct: number }>
): string {
  switch (verdict) {
    case "insufficient-data":
      return "Rate your confidence on more chapter questions to unlock a calibration read."
    case "overconfident": {
      const pct =
        tiers.high.total === 0
          ? 0
          : Math.round((tiers.high.correct / tiers.high.total) * 100)
      return `You're overconfident — "High" confidence questions land at ${pct}%. Slow down on those patterns.`
    }
    case "underconfident": {
      const pct =
        tiers.low.total === 0
          ? 0
          : Math.round((tiers.low.correct / tiers.low.total) * 100)
      return `You're underconfident — "Low" confidence questions still land at ${pct}%. Trust your instinct more.`
    }
    case "well-calibrated":
    default:
      return "You're well-calibrated — confidence tracks accuracy. That's the ideal state."
  }
}
