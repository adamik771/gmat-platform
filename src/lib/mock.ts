import { getQuestionsBySection, type ParsedQuestion } from "./content"
import type { Difficulty, Section } from "@/types"

/**
 * Full-length mock exam — GMAT Focus Edition format.
 *
 * Sections:
 *   Quant   — 21 questions, 45 minutes
 *   Verbal  — 23 questions, 45 minutes
 *   DI      — 20 questions, 45 minutes
 *
 * Students pick section order at the start and optionally take up to
 * 10 minutes of break between sections. Scoring mirrors the other
 * surfaces (accuracy × 600 + 205, snapped to the nearest 10-point tick).
 *
 * The question-picker is deterministic per calendar date + section, so
 * a student who starts the mock, leaves, and comes back within the same
 * day resumes the same set. The `mockKey` parameter lets callers vary
 * the seed (e.g., to regenerate a fresh mock on demand).
 */

export const MOCK_SECTIONS: Section[] = ["Quant", "Verbal", "DI"]

export const MOCK_QUESTION_COUNT: Record<Section, number> = {
  Quant: 21,
  Verbal: 23,
  DI: 20,
}

export const MOCK_SECTION_MINUTES: Record<Section, number> = {
  Quant: 45,
  Verbal: 45,
  DI: 45,
}

export const MOCK_BREAK_MINUTES = 10

/** Stratification targets per section — rough GMAT difficulty mix. */
const DIFFICULTY_MIX: Record<Section, Record<Difficulty, number>> = {
  Quant: { Beginner: 6, Intermediate: 10, Advanced: 5 }, // 21
  Verbal: { Beginner: 7, Intermediate: 11, Advanced: 5 }, // 23
  DI: { Beginner: 6, Intermediate: 9, Advanced: 5 }, // 20
}

const MAX_PER_TOPIC = 4

/**
 * Deterministic pick for a section's mock set. Walks the section's
 * questions in authored order and fills the per-difficulty quotas while
 * respecting a per-topic cap, then tops up any shortfall from the
 * remaining pool. Same question order every time a caller asks for the
 * same section.
 */
export function pickMockQuestions(section: Section): ParsedQuestion[] {
  const pool = getQuestionsBySection(section).filter((q) => q.options.length > 0)
  if (pool.length === 0) return []

  const target = MOCK_QUESTION_COUNT[section]
  const mix = DIFFICULTY_MIX[section]
  const picked: ParsedQuestion[] = []
  const pickedIds = new Set<string>()
  const topicCount = new Map<string, number>()
  const perDifficulty: Record<Difficulty, number> = {
    Beginner: 0,
    Intermediate: 0,
    Advanced: 0,
  }

  const fits = (q: ParsedQuestion) => {
    if (perDifficulty[q.difficulty] >= mix[q.difficulty]) return false
    if ((topicCount.get(q.topic) ?? 0) >= MAX_PER_TOPIC) return false
    return true
  }

  for (const q of pool) {
    if (picked.length >= target) break
    if (!fits(q)) continue
    picked.push(q)
    pickedIds.add(q.id)
    perDifficulty[q.difficulty] += 1
    topicCount.set(q.topic, (topicCount.get(q.topic) ?? 0) + 1)
  }

  // Top up if the strict pass didn't fill the target (small pools for
  // one difficulty, or too many topic-capped picks).
  if (picked.length < target) {
    for (const q of pool) {
      if (picked.length >= target) break
      if (pickedIds.has(q.id)) continue
      picked.push(q)
      pickedIds.add(q.id)
    }
  }

  return picked
}

/** Accuracy → GMAT Focus total, same formula as diagnostic + Test Builder. */
export function accuracyToScore(accuracy: number): number {
  const raw = Math.round((accuracy * 600 + 205) / 10) * 10
  return Math.max(205, Math.min(805, raw))
}

/** Produce the slug we use when persisting a mock section session. */
export function mockSlugFor(section: Section, dateIso: string): string {
  const date = dateIso.slice(0, 10)
  return `mock-${date}-${section.toLowerCase()}`
}
