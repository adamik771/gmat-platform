import type { Section } from "@/types"

/**
 * Classical item analysis for the question bank — research-report prescription:
 * "Track a mastery probability by skill node, then update it with correctness,
 *  time, hint usage, confidence..." (PDF v2 p.9) AND "every item needs
 *  item-analysis-level feedback to the author."
 *
 * Two signals per question:
 *
 *  1. **p-value** — fraction of attempts that were correct. Classic
 *     "item difficulty." 0.1 = very hard (only 10% get it right),
 *     0.9 = very easy. Outside the 0.2–0.85 window a question usually
 *     isn't doing useful measurement work.
 *
 *  2. **Discrimination** — simplified point-biserial. Splits attempts
 *     into correct-group and wrong-group, computes each group's mean
 *     section-level accuracy (i.e. how those students did on OTHER
 *     questions in the same section), and takes the difference. A
 *     discriminating item has higher-ability students getting it right
 *     more than lower-ability ones. Negative discrimination = the
 *     question is likely broken, mis-keyed, or tagged to the wrong
 *     section.
 *
 * Interpretation:
 *   `flag = "ok"`           — pValue in 0.2..0.85, discrimination ≥ 0.1
 *   `flag = "easy"`         — pValue > 0.85 (too easy to discriminate)
 *   `flag = "hard"`         — pValue < 0.2 (too hard — guessing floor)
 *   `flag = "broken"`       — discrimination ≤ 0 AND ≥20 attempts
 *                             (strong students miss it more than weak ones)
 *   `flag = "insufficient"` — fewer than MIN_ATTEMPTS_FOR_STATS attempts
 */

export type ItemStatFlag =
  | "ok"
  | "easy"
  | "hard"
  | "broken"
  | "insufficient"

export interface ItemStat {
  questionId: string
  section: Section
  topic: string
  attempts: number
  correct: number
  /** 0..1 — fraction of attempts that were correct. */
  pValue: number
  /** -1..1 — correct-group section accuracy minus wrong-group section
   *  accuracy. Null when either group is empty (can't compute). */
  discrimination: number | null
  flag: ItemStatFlag
}

export interface PsychometricsInput {
  user_id: string
  question_id: string
  section: Section
  topic: string
  is_correct: boolean
}

/** Minimum attempts before p-value / discrimination mean anything. 20 is
 *  a common floor in classical item analysis for pilot banks. */
export const MIN_ATTEMPTS_FOR_STATS = 20
/** "Broken" flag trips only with enough attempts — we don't want to call
 *  a question broken from 3 attempts where ordering is noise. */
const MIN_ATTEMPTS_FOR_BROKEN = 20
const P_VALUE_EASY = 0.85
const P_VALUE_HARD = 0.2

/**
 * Compute per-item statistics across all attempts. Pass ≥1 section's
 * worth of rows for section-level accuracy to make sense.
 *
 * Guards against distortion:
 *   - A user's own attempts on this question are EXCLUDED from their
 *     section-average (otherwise an item they always miss looks like
 *     it discriminates more than it does).
 *   - Section-average for a user needs ≥5 other attempts; otherwise
 *     their contribution is dropped from the discrimination sums.
 */
export function computeItemStats(attempts: PsychometricsInput[]): ItemStat[] {
  // First pass: per-user-per-section totals so we can compute a user's
  // section-level ability (their accuracy EXCLUDING this question) when
  // we see each attempt.
  const userSecTotal = new Map<string, number>()
  const userSecCorrect = new Map<string, number>()
  for (const a of attempts) {
    const key = `${a.user_id}|${a.section}`
    userSecTotal.set(key, (userSecTotal.get(key) ?? 0) + 1)
    if (a.is_correct) userSecCorrect.set(key, (userSecCorrect.get(key) ?? 0) + 1)
  }

  interface Agg {
    section: Section
    topic: string
    attempts: number
    correct: number
    correctAbilitySum: number
    correctAbilityCount: number
    wrongAbilitySum: number
    wrongAbilityCount: number
  }
  const byQ = new Map<string, Agg>()

  for (const a of attempts) {
    const qAgg = byQ.get(a.question_id) ?? {
      section: a.section,
      topic: a.topic,
      attempts: 0,
      correct: 0,
      correctAbilitySum: 0,
      correctAbilityCount: 0,
      wrongAbilitySum: 0,
      wrongAbilityCount: 0,
    }
    qAgg.attempts += 1
    if (a.is_correct) qAgg.correct += 1

    // Ability = user's section accuracy EXCLUDING this attempt.
    const key = `${a.user_id}|${a.section}`
    const userTotal = userSecTotal.get(key) ?? 0
    const userCorrect = userSecCorrect.get(key) ?? 0
    const otherTotal = userTotal - 1
    const otherCorrect = userCorrect - (a.is_correct ? 1 : 0)
    if (otherTotal >= 5) {
      const ability = otherCorrect / otherTotal
      if (a.is_correct) {
        qAgg.correctAbilitySum += ability
        qAgg.correctAbilityCount += 1
      } else {
        qAgg.wrongAbilitySum += ability
        qAgg.wrongAbilityCount += 1
      }
    }

    byQ.set(a.question_id, qAgg)
  }

  const out: ItemStat[] = []
  for (const [qid, agg] of byQ) {
    const pValue = agg.attempts > 0 ? agg.correct / agg.attempts : 0
    const hasBothGroups =
      agg.correctAbilityCount > 0 && agg.wrongAbilityCount > 0
    const discrimination = hasBothGroups
      ? agg.correctAbilitySum / agg.correctAbilityCount -
        agg.wrongAbilitySum / agg.wrongAbilityCount
      : null
    const flag = classify(agg.attempts, pValue, discrimination)
    out.push({
      questionId: qid,
      section: agg.section,
      topic: agg.topic,
      attempts: agg.attempts,
      correct: agg.correct,
      pValue,
      discrimination,
      flag,
    })
  }

  return out
}

function classify(
  attempts: number,
  pValue: number,
  discrimination: number | null,
): ItemStatFlag {
  if (attempts < MIN_ATTEMPTS_FOR_STATS) return "insufficient"
  // Check difficulty windows FIRST — an item with p=0.95 has near-zero
  // discrimination mathematically (ceiling effect), so we don't want to
  // call it broken on top of the easy flag. Same for p=0.05 floor.
  if (pValue > P_VALUE_EASY) return "easy"
  if (pValue < P_VALUE_HARD) return "hard"
  if (
    discrimination !== null &&
    discrimination <= 0 &&
    attempts >= MIN_ATTEMPTS_FOR_BROKEN
  ) {
    return "broken"
  }
  // discrimination < DISCRIMINATION_FLOOR but > 0: weakly discriminating
  // but not actively broken. Surfaces as "ok" for now; caller can layer
  // a secondary "weak" flag if needed.
  return "ok"
}

/**
 * Roll up item stats into bank-level summary. Useful for a dashboard
 * metric that doesn't require scanning the full item list.
 */
export interface BankHealth {
  totalItems: number
  withEnoughData: number
  okCount: number
  easyCount: number
  hardCount: number
  brokenCount: number
  insufficientCount: number
  /** Proportion of items with enough data that are flagged "ok". */
  healthPct: number
}

export function summariseBankHealth(stats: ItemStat[]): BankHealth {
  const totalItems = stats.length
  let ok = 0
  let easy = 0
  let hard = 0
  let broken = 0
  let insufficient = 0
  for (const s of stats) {
    switch (s.flag) {
      case "ok":
        ok++
        break
      case "easy":
        easy++
        break
      case "hard":
        hard++
        break
      case "broken":
        broken++
        break
      case "insufficient":
        insufficient++
        break
    }
  }
  const withEnoughData = totalItems - insufficient
  const healthPct =
    withEnoughData > 0 ? Math.round((ok / withEnoughData) * 100) : 0
  return {
    totalItems,
    withEnoughData,
    okCount: ok,
    easyCount: easy,
    hardCount: hard,
    brokenCount: broken,
    insufficientCount: insufficient,
    healthPct,
  }
}
