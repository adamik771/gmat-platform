import type { Difficulty, Section } from "@/types"
import { databaseTimestampMicros } from "./database-timestamp.ts"

// These are editorial screening rules, not GMAT-equated difficulty estimates.
export const MIN_ATTEMPTS_FOR_STATS = 20
const MIN_OTHER_ITEMS = 5
const MIN_COMPARISON_GROUP = 5

export type ItemStatFlag = "ok" | "easy" | "hard" | "review" | "insufficient"
export type DifficultyFit = "on-target" | "too-easy" | "too-hard" | "insufficient"

export interface ItemStat {
  questionId: string
  section: Section
  topic: string
  /** One eligible first recorded attempt per student, never repeat attempts. */
  attempts: number
  recordedAttempts: number
  correct: number
  pValue: number | null
  /** Wilson 95% interval for the observed correct proportion. */
  interval: { low: number; high: number } | null
  /** Difference of group means, NOT a point-biserial correlation. */
  discrimination: number | null
  comparisonCorrect: number
  comparisonWrong: number
  flag: ItemStatFlag
}

export interface PsychometricsInput {
  id: string
  user_id: string
  question_id: string
  section: Section
  topic: string
  is_correct: boolean
  created_at: string | null
  hints_revealed: number | null
  /** False for review, redo, mixed-review, or an unresolvable session. */
  eligibleSession: boolean
}

export const DIFFICULTY_P_VALUE_BANDS: Record<Difficulty, { min: number; max: number }> = {
  Beginner: { min: 0.5, max: 0.95 },
  Intermediate: { min: 0.3, max: 0.82 },
  Advanced: { min: 0.12, max: 0.65 },
}

export function proportionInterval(correct: number, total: number) {
  if (!Number.isFinite(total) || !Number.isFinite(correct) || total <= 0 || correct < 0 || correct > total) return null
  const p = correct / total
  const z2 = 1.96 ** 2
  const denominator = 1 + z2 / total
  const center = (p + z2 / (2 * total)) / denominator
  const margin = (1.96 * Math.sqrt(p * (1 - p) / total + z2 / (4 * total ** 2))) / denominator
  return { low: Math.max(0, center - margin), high: Math.min(1, center + margin) }
}

export function assessDifficultyFit(
  difficulty: Difficulty | null | undefined,
  pValue: number | null,
  attempts: number,
): DifficultyFit {
  if (!difficulty || pValue === null || !Number.isFinite(pValue) || pValue < 0 || pValue > 1 || !Number.isInteger(attempts) || attempts < MIN_ATTEMPTS_FOR_STATS) return "insufficient"
  const interval = proportionInterval(pValue * attempts, attempts)!
  const band = DIFFICULTY_P_VALUE_BANDS[difficulty]
  if (interval.low > band.max) return "too-easy"
  if (interval.high < band.min) return "too-hard"
  return "on-target"
}

/**
 * Select FIRST recorded exposures before filtering. A later unhinted retry
 * must never replace an assisted/review first encounter. Unknown chronology
 * or conflicting simultaneous first rows cannot provide a defensible sample.
 */
function firstEligibleAttempts(rows: readonly PsychometricsInput[]): PsychometricsInput[] {
  const groups = new Map<string, PsychometricsInput[]>()
  for (const row of rows) {
    const key = JSON.stringify([row.user_id, row.question_id])
    const group = groups.get(key) ?? []
    group.push(row)
    groups.set(key, group)
  }
  const eligible: PsychometricsInput[] = []
  for (const group of groups.values()) {
    if (group.some((a) => databaseTimestampMicros(a.created_at) === null)) continue
    group.sort((a, b) => databaseTimestampMicros(a.created_at)! - databaseTimestampMicros(b.created_at)! || a.id.localeCompare(b.id))
    const first = group[0]
    if (group.some((a) => a.id !== first.id && databaseTimestampMicros(a.created_at) === databaseTimestampMicros(first.created_at))) continue
    if (first.eligibleSession && first.hints_revealed === 0) eligible.push(first)
  }
  return eligible
}

export function computeItemStats(rows: readonly PsychometricsInput[]): ItemStat[] {
  const items = new Map<string, ItemStat>()
  for (const row of rows) {
    const item = items.get(row.question_id) ?? {
      questionId: row.question_id, section: row.section, topic: row.topic,
      attempts: 0, recordedAttempts: 0, correct: 0, pValue: null, interval: null,
      discrimination: null, comparisonCorrect: 0, comparisonWrong: 0,
      flag: "insufficient" as const,
    }
    item.recordedAttempts++
    items.set(row.question_id, item)
  }
  const firsts = firstEligibleAttempts(rows)
  const userSections = new Map<string, { total: number; correct: number }>()
  for (const row of firsts) {
    const key = JSON.stringify([row.user_id, row.section])
    const total = userSections.get(key) ?? { total: 0, correct: 0 }
    total.total++
    total.correct += Number(row.is_correct)
    userSections.set(key, total)
  }
  const comparisonSums = new Map<string, { correct: number; wrong: number }>()
  for (const row of firsts) {
    const item = items.get(row.question_id)!
    item.attempts++
    item.correct += Number(row.is_correct)
    const userSection = userSections.get(JSON.stringify([row.user_id, row.section]))!
    // Each item occurs once per student, so subtracting one excludes ALL of
    // this student's evidence on the target item, including every retry.
    if (userSection.total - 1 < MIN_OTHER_ITEMS) continue
    const otherAccuracy = (userSection.correct - Number(row.is_correct)) / (userSection.total - 1)
    const sum = comparisonSums.get(row.question_id) ?? { correct: 0, wrong: 0 }
    if (row.is_correct) {
      item.comparisonCorrect++
      sum.correct += otherAccuracy
    } else {
      item.comparisonWrong++
      sum.wrong += otherAccuracy
    }
    comparisonSums.set(row.question_id, sum)
  }
  for (const item of items.values()) {
    item.pValue = item.attempts > 0 ? item.correct / item.attempts : null
    item.interval = proportionInterval(item.correct, item.attempts)
    const sums = comparisonSums.get(item.questionId)
    if (sums && item.attempts >= MIN_ATTEMPTS_FOR_STATS && item.comparisonCorrect >= MIN_COMPARISON_GROUP && item.comparisonWrong >= MIN_COMPARISON_GROUP) {
      item.discrimination = sums.correct / item.comparisonCorrect - sums.wrong / item.comparisonWrong
    }
    if (item.attempts < MIN_ATTEMPTS_FOR_STATS || !item.interval) continue
    if (item.interval.low > 0.85) item.flag = "easy"
    else if (item.interval.high < 0.2) item.flag = "hard"
    else if (item.discrimination !== null && item.discrimination <= 0) item.flag = "review"
    else item.flag = "ok"
  }
  return [...items.values()]
}

export function summariseBankHealth(stats: readonly ItemStat[]) {
  const count = (flag: ItemStatFlag) => stats.filter((item) => item.flag === flag).length
  const insufficientCount = count("insufficient")
  const withEnoughData = stats.length - insufficientCount
  const okCount = count("ok")
  return {
    totalItems: stats.length, withEnoughData, okCount,
    easyCount: count("easy"), hardCount: count("hard"), reviewCount: count("review"),
    insufficientCount,
    healthPct: withEnoughData > 0 ? Math.round(100 * okCount / withEnoughData) : null,
  }
}
