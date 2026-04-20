import {
  getQuestionsBySection,
  type ParsedQuestion,
} from "./content"
import type { Difficulty, Section } from "@/types"

/**
 * Diagnostic placement — a short, stratified placement test that produces
 * per-section score estimates and weak-topic breakdowns. The "first move"
 * of the course product per the framework: diagnose before teaching.
 *
 * The diagnostic is fixed-length (10 Qs per section × 3 sections = 30 Qs)
 * and deterministic — every user sees the same questions so results are
 * comparable over re-takes and across cohorts. Stratification:
 *   - 3 Beginner + 4 Intermediate + 3 Advanced per section
 *   - At most 2 questions from any single topic, to spread coverage
 *
 * Scoring mirrors Test Builder: `score = accuracy × 600 + 205`, clamped
 * to [205, 805] and rounded to the nearest 10-point GMAT tick. Per-section
 * scores feed a total-score estimate and a ranked list of weak topics.
 */

export const DIAGNOSTIC_SECTIONS: Section[] = ["Quant", "Verbal", "DI"]
export const DIAGNOSTIC_PER_SECTION = 10

const DIFFICULTY_QUOTA: Record<Difficulty, number> = {
  Beginner: 3,
  Intermediate: 4,
  Advanced: 3,
}

const MAX_PER_TOPIC = 2

/**
 * Deterministic stratified pick. Walks the section's questions in their
 * authored order (which is already mixed by file + number), fills each
 * difficulty quota, and enforces the per-topic cap. Falls back to filling
 * any gaps with whatever questions remain so we always return exactly
 * DIAGNOSTIC_PER_SECTION items if the pool is large enough.
 */
export function pickDiagnosticQuestions(section: Section): ParsedQuestion[] {
  const pool = getQuestionsBySection(section).filter((q) => q.options.length > 0)
  if (pool.length === 0) return []

  const picked: ParsedQuestion[] = []
  const topicCount = new Map<string, number>()
  const perDifficulty: Record<Difficulty, number> = {
    Beginner: 0,
    Intermediate: 0,
    Advanced: 0,
  }

  const fits = (q: ParsedQuestion) => {
    if (perDifficulty[q.difficulty] >= DIFFICULTY_QUOTA[q.difficulty]) return false
    if ((topicCount.get(q.topic) ?? 0) >= MAX_PER_TOPIC) return false
    return true
  }

  // First pass: honour the stratification + topic cap.
  for (const q of pool) {
    if (picked.length >= DIAGNOSTIC_PER_SECTION) break
    if (!fits(q)) continue
    picked.push(q)
    perDifficulty[q.difficulty] += 1
    topicCount.set(q.topic, (topicCount.get(q.topic) ?? 0) + 1)
  }

  // Second pass: if quotas weren't hittable (small pool for a difficulty),
  // top up from anything that's not already picked.
  if (picked.length < DIAGNOSTIC_PER_SECTION) {
    const pickedIds = new Set(picked.map((q) => q.id))
    for (const q of pool) {
      if (picked.length >= DIAGNOSTIC_PER_SECTION) break
      if (pickedIds.has(q.id)) continue
      picked.push(q)
    }
  }

  return picked
}

/** Score formula shared with Test Builder. */
export function accuracyToScore(accuracy: number): number {
  const raw = Math.round((accuracy * 600 + 205) / 10) * 10
  return Math.max(205, Math.min(805, raw))
}

export interface SectionResult {
  section: Section
  total: number
  correct: number
  accuracy: number
  score: number
  /** Topics sorted worst-first, capped at 3, from this section only. */
  weakTopics: Array<{ topic: string; accuracy: number; attempts: number }>
}

export interface DiagnosticReport {
  takenAt: string
  sections: SectionResult[]
  /** Average of the three section scores, rounded to the nearest 10 — the
   * simplest unbiased estimate when all three sections weigh equally. */
  totalScore: number
}

export interface DiagnosticAttempt {
  questionId: string
  section: Section
  topic: string
  subtopic: string
  difficulty: Difficulty
  isCorrect: boolean
  /** Optional — present if the attempt came from a practice_session row. */
  timeSpentMs?: number
}

/**
 * Aggregate a set of attempts (one diagnostic's worth) into a report.
 * `attempts` can span 1, 2, or 3 sections — the report only includes
 * sections that have at least 1 attempt, so a partially-completed
 * diagnostic still yields a useful partial report.
 */
export function buildReport(
  attempts: DiagnosticAttempt[],
  takenAt: string = new Date().toISOString()
): DiagnosticReport {
  const bySection = new Map<Section, DiagnosticAttempt[]>()
  for (const a of attempts) {
    const arr = bySection.get(a.section) ?? []
    arr.push(a)
    bySection.set(a.section, arr)
  }

  const sections: SectionResult[] = []
  for (const section of DIAGNOSTIC_SECTIONS) {
    const rows = bySection.get(section)
    if (!rows || rows.length === 0) continue
    const correct = rows.filter((r) => r.isCorrect).length
    const total = rows.length
    const accuracy = correct / total
    const byTopic = new Map<string, { correct: number; total: number }>()
    for (const r of rows) {
      const k = r.topic
      const t = byTopic.get(k) ?? { correct: 0, total: 0 }
      t.total += 1
      if (r.isCorrect) t.correct += 1
      byTopic.set(k, t)
    }
    const weakTopics = [...byTopic.entries()]
      .map(([topic, v]) => ({
        topic,
        accuracy: v.correct / v.total,
        attempts: v.total,
      }))
      .sort((a, b) => a.accuracy - b.accuracy)
      .slice(0, 3)
    sections.push({
      section,
      total,
      correct,
      accuracy,
      score: accuracyToScore(accuracy),
      weakTopics,
    })
  }

  const totalScore = sections.length
    ? Math.round(sections.reduce((acc, s) => acc + s.score, 0) / sections.length / 10) * 10
    : 205

  return { takenAt, sections, totalScore }
}
