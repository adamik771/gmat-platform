import { getQuestionsBySection, type ParsedQuestion } from "./content"
import { groupByContext } from "./topic-skill"
import type { Difficulty, Section } from "@/types"

const DIFFICULTY_RANK: Record<Difficulty, number> = {
  Beginner: 0,
  Intermediate: 1,
  Advanced: 2,
}

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

/**
 * Score tier — drives the difficulty mix the picker emits when no
 * mode-specific override is supplied. Inferred from the student's
 * `target_score` (in `user_metadata`), so a 705-target student sees a
 * tougher baseline mock than a 565-target student even on the same mode.
 *
 *   foundation (target ≤ 545) — diagnostic-floor students
 *   default    (545 < target ≤ 685, or no target) — population median
 *   stretch    (target > 685) — 700+ aspirants
 *
 * Per-section totals (Q 21 / V 23 / DI 20) stay constant; only the
 * Beginner/Intermediate/Advanced split shifts.
 */
export type ScoreTier = "foundation" | "default" | "stretch"

export const DIFFICULTY_MIX_BY_TIER: Record<
  ScoreTier,
  Record<Section, Record<Difficulty, number>>
> = {
  foundation: {
    Quant: { Beginner: 9, Intermediate: 9, Advanced: 3 }, // 21
    Verbal: { Beginner: 11, Intermediate: 9, Advanced: 3 }, // 23
    DI: { Beginner: 9, Intermediate: 8, Advanced: 3 }, // 20
  },
  default: {
    Quant: { Beginner: 6, Intermediate: 10, Advanced: 5 }, // 21
    Verbal: { Beginner: 7, Intermediate: 11, Advanced: 5 }, // 23
    DI: { Beginner: 6, Intermediate: 9, Advanced: 5 }, // 20
  },
  stretch: {
    Quant: { Beginner: 3, Intermediate: 9, Advanced: 9 }, // 21
    Verbal: { Beginner: 4, Intermediate: 10, Advanced: 9 }, // 23
    DI: { Beginner: 3, Intermediate: 8, Advanced: 9 }, // 20
  },
}

/** Default-tier mix — used when no target is set or target is mid-range. */
const DIFFICULTY_MIX = DIFFICULTY_MIX_BY_TIER.default

/**
 * Map a `target_score` to a tier. Defensive against unexpected types
 * (older user_metadata rows may have strings or nulls). Anything that
 * isn't a usable number falls back to the default tier so existing
 * flows are unchanged.
 */
export function inferScoreTier(targetScore: number | null | undefined): ScoreTier {
  if (typeof targetScore !== "number" || !Number.isFinite(targetScore)) return "default"
  if (targetScore <= 545) return "foundation"
  if (targetScore > 685) return "stretch"
  return "default"
}

/** Resolve the section's difficulty mix for the student's target. */
export function getDifficultyMixForTarget(
  section: Section,
  targetScore: number | null | undefined
): Record<Difficulty, number> {
  const tier = inferScoreTier(targetScore)
  return DIFFICULTY_MIX_BY_TIER[tier][section]
}

const MAX_PER_TOPIC = 4

/**
 * Deterministic pick for a section's mock set. Walks the section's
 * questions in authored order and fills the per-difficulty quotas while
 * respecting a per-topic cap, then tops up any shortfall from the
 * remaining pool. Same question order every time a caller asks for the
 * same section.
 *
 * Optional overrides (used by `mock-modes.ts` for non-default mock modes
 * like "hard" or single-section variants):
 *   - `mixOverride`: per-difficulty quota override (e.g. `{B:0, I:5, A:15}`
 *     for the hard-question mock)
 *   - `countOverride`: target total — when omitted, defaults to the
 *     standard MOCK_QUESTION_COUNT for the section
 *   - `mockIndex`: rotation offset (0-based). Successive mocks pass an
 *     incrementing index so the picker walks the pool from a different
 *     starting slice each time, drawing fresh questions across mocks.
 *     Caller-supplied: typically the count of prior mock sessions.
 */
export function pickMockQuestions(
  section: Section,
  mixOverride?: Record<Difficulty, number>,
  countOverride?: number,
  mockIndex: number = 0
): ParsedQuestion[] {
  const pool = getQuestionsBySection(section).filter((q) => q.options.length > 0)
  if (pool.length === 0) return []

  // Rotate the pool by mockIndex so successive mocks start the walk
  // from a different slice. Modulo guards against indices larger than
  // the pool. mockIndex=0 leaves the pool untouched (back-compat).
  const offset = ((mockIndex % pool.length) + pool.length) % pool.length
  const rotated =
    offset === 0
      ? pool
      : [...pool.slice(offset), ...pool.slice(0, offset)]

  const target = countOverride ?? MOCK_QUESTION_COUNT[section]
  const mix = mixOverride ?? DIFFICULTY_MIX[section]
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

  for (const q of rotated) {
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
    for (const q of rotated) {
      if (picked.length >= target) break
      if (pickedIds.has(q.id)) continue
      picked.push(q)
      pickedIds.add(q.id)
    }
  }

  return orderForMock(picked)
}

/**
 * Difficulty-progression ordering for a mock section.
 *
 * Real GMAT questions don't ramp linearly easy→hard — the adaptive
 * algorithm interleaves. We approximate that with a "wave": the
 * front loads with a couple of easy items so the student warms up
 * without burning time, the middle stretches with mostly intermediate
 * + an early advanced, and the tail is denser with advanced items
 * to test pacing-under-pressure. Within each band we preserve the
 * authored sub-order so a deterministic re-pick produces the same
 * order.
 *
 * The exact partition is roughly: 25% easy front-loaded, 50%
 * intermediate body, 25% advanced tail — slightly skewed by the
 * difficulty mix the picker actually returned.
 */
export function orderForMock(questions: ParsedQuestion[]): ParsedQuestion[] {
  if (questions.length <= 3) return questions
  // Order GROUPS, not individual questions, so a passage/set (RC, MSR) is never
  // split apart by the difficulty curve. Standalone questions are singleton
  // groups, so an all-standalone section (e.g. Quant) orders exactly as before.
  // Each group's tier = its first question's difficulty.
  const groups = groupByContext(questions)
  const rep = (g: ParsedQuestion[]) => g[0].difficulty
  const easy = groups.filter((g) => rep(g) === "Beginner")
  const med = groups.filter((g) => rep(g) === "Intermediate")
  const hard = groups.filter((g) => rep(g) === "Advanced")

  const total = groups.length
  const frontEasySlots = Math.min(easy.length, Math.max(2, Math.round(total * 0.20)))
  const tailHardSlots = Math.min(hard.length, Math.max(2, Math.round(total * 0.20)))

  const front = easy.slice(0, frontEasySlots)
  const tail = hard.slice(hard.length - tailHardSlots)

  // Body: remaining easy groups + all medium + remaining hard, sorted by tier
  // ascending so difficulty climbs into the tail.
  const bodyEasy = easy.slice(frontEasySlots)
  const bodyHard = hard.slice(0, hard.length - tailHardSlots)
  const body = [...bodyEasy, ...med, ...bodyHard].sort(
    (a, b) => DIFFICULTY_RANK[rep(a)] - DIFFICULTY_RANK[rep(b)]
  )

  return [...front, ...body, ...tail].flat()
}

/** Accuracy → GMAT Focus total. Canonical source: `@/lib/scoring`. */
export { accuracyToScore } from "./scoring"

/** Produce the slug we use when persisting a mock section session. */
export function mockSlugFor(section: Section, dateIso: string): string {
  const date = dateIso.slice(0, 10)
  return `mock-${date}-${section.toLowerCase()}`
}

/**
 * Difficulty bucket counts for a mock section's set, useful for the
 * report ("Your mock had 6 easy / 10 medium / 5 hard"). Mirrors what
 * `pickMockQuestions` actually emits.
 */
export function difficultyMixOf(
  questions: ParsedQuestion[]
): Record<Difficulty, number> {
  const out: Record<Difficulty, number> = {
    Beginner: 0,
    Intermediate: 0,
    Advanced: 0,
  }
  for (const q of questions) out[q.difficulty] += 1
  return out
}

/**
 * Mock pacing thresholds — slightly more permissive than the diagnostic
 * because mock sections are 45 min long (more time = different rushed/
 * labored cutoffs make sense). Used by the enhanced report when called
 * with mock attempts.
 */
export const MOCK_TIMING_THRESHOLDS: Record<Section, { rushedMs: number; laboredMs: number }> = {
  Quant: { rushedMs: 45_000, laboredMs: 200_000 },
  Verbal: { rushedMs: 45_000, laboredMs: 200_000 },
  DI: { rushedMs: 45_000, laboredMs: 220_000 },
}

/**
 * Flatten the `user_metadata.mock_flags` tree into a single Set of
 * question ids. Callers pass this to `getReviewQueue` so flagged
 * questions get a priority boost in the daily review.
 *
 * Shape expected:
 *   { [date]: { Quant?: string[], Verbal?: string[], DI?: string[] } }
 *
 * Unknown shapes are ignored silently — we never throw from the reader
 * because the data is user-metadata and historical values might not
 * match the current schema.
 */
export function gatherFlaggedQuestionIds(userMetadata: unknown): Set<string> {
  const ids = new Set<string>()
  if (!userMetadata || typeof userMetadata !== "object") return ids
  const mockFlags = (userMetadata as { mock_flags?: unknown }).mock_flags
  if (!mockFlags || typeof mockFlags !== "object") return ids
  for (const perDate of Object.values(mockFlags as Record<string, unknown>)) {
    if (!perDate || typeof perDate !== "object") continue
    for (const arr of Object.values(perDate as Record<string, unknown>)) {
      if (!Array.isArray(arr)) continue
      for (const v of arr) if (typeof v === "string") ids.add(v)
    }
  }
  return ids
}
