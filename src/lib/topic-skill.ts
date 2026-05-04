/**
 * Topic skill level — a simple per-topic proficiency index that walks
 * up on correct/fast and down on wrong/slow attempts. Drives adaptive
 * question ordering on /practice/session/[slug] so students see
 * level-appropriate questions first instead of fixed file order.
 *
 * Persisted in `user_metadata.topic_skill_levels` to follow the
 * codebase convention (small user-scoped state lives in user_metadata,
 * not a new table). Keyed by topic SLUG (the practice-set slug — same
 * key the session uses), since slugs are stable and unique per file.
 *
 * The model is deliberately simple: a single scalar in [0, 1] per
 * topic. Not IRT-grade calibration. Two reasons to start here:
 *   1. Zero ML infra needed — pure function over the attempts payload.
 *   2. Reordering 12 questions only requires *relative* level signal,
 *      not absolute difficulty parameters per item.
 *
 * Refining this later (per-subtopic, time-decay, IRT theta) is a
 * straightforward replacement of `applySessionAttempts` and
 * `pickAdaptiveOrder`; the storage shape and call sites stay.
 */

import type { Difficulty, Section } from "@/types"

/** GMAT Focus per-question target time, in milliseconds. Used to
 *  classify attempts as fast / on-pace / slow when scoring an update.
 *  Same constants the analytics page uses for behaviour patterns. */
const SECTION_TARGET_MS: Record<Section, number> = {
  Quant: 2.0 * 60_000,
  Verbal: 1.75 * 60_000,
  DI: 2.5 * 60_000,
}

const FAST_RATIO = 0.7
const SLOW_RATIO = 1.3
const MIN_ATTEMPT_MS = 1000

/** Default level for a topic the student hasn't touched yet. Centered
 *  so the first session uses a balanced mix; the level converges from
 *  there based on actual attempts. */
export const DEFAULT_LEVEL = 0.5

/** Below this many cumulative attempts on a topic we don't trust the
 *  level enough to reorder — fall back to file order so behaviour
 *  stays predictable for new users. */
export const MIN_ATTEMPTS_FOR_ADAPTIVE = 3

export interface TopicSkillLevel {
  /** Proficiency in [0, 1]. 0 = beginner, 1 = advanced. */
  level: number
  /** Total observed attempts on this topic — gates whether we apply
   *  adaptive ordering yet. */
  attempts: number
  /** Last update timestamp (ms epoch). Reserved for future time-decay. */
  updatedAt: number
}

export type TopicSkillMap = Record<string, TopicSkillLevel>

/** Read the persisted skill map out of `user_metadata`. Defensive
 *  against missing / malformed shapes — this lives in user-controlled
 *  storage. */
export function getTopicSkillLevels(
  metadata: { topic_skill_levels?: unknown } | null | undefined
): TopicSkillMap {
  const raw = metadata?.topic_skill_levels
  if (!raw || typeof raw !== "object") return {}
  const out: TopicSkillMap = {}
  for (const [slug, value] of Object.entries(raw as Record<string, unknown>)) {
    if (!value || typeof value !== "object") continue
    const v = value as { level?: unknown; attempts?: unknown; updatedAt?: unknown }
    const level = typeof v.level === "number" ? v.level : NaN
    if (!Number.isFinite(level)) continue
    out[slug] = {
      level: clamp(level, 0, 1),
      attempts: typeof v.attempts === "number" ? Math.max(0, v.attempts) : 0,
      updatedAt: typeof v.updatedAt === "number" ? v.updatedAt : 0,
    }
  }
  return out
}

/** Get the level for a single topic, or `DEFAULT_LEVEL` when unknown. */
export function getLevelForSlug(map: TopicSkillMap, slug: string): TopicSkillLevel {
  return map[slug] ?? { level: DEFAULT_LEVEL, attempts: 0, updatedAt: 0 }
}

/** Difficulty weight in the update rule. Asymmetric:
 *   - When CORRECT: harder questions boost more (you're playing up).
 *   - When WRONG:   easier questions penalize more (you should know it). */
function difficultyWeight(difficulty: Difficulty, isCorrect: boolean): number {
  if (isCorrect) {
    if (difficulty === "Advanced") return 1.4
    if (difficulty === "Intermediate") return 1.0
    return 0.7 // Beginner
  }
  if (difficulty === "Advanced") return 0.7
  if (difficulty === "Intermediate") return 1.0
  return 1.4 // Beginner — missing easy is the strongest negative signal
}

interface AttemptForUpdate {
  /** Practice-set slug — the key for the level map. */
  slug: string
  section: Section
  difficulty: Difficulty
  isCorrect: boolean
  timeSpentMs: number
}

/** Apply a session's worth of attempts to the level map. Pure — returns
 *  a new map; doesn't mutate. Caller persists to user_metadata.
 *
 *  Per-attempt delta: classified by accuracy × pace × difficulty weight.
 *  Capped per-attempt at ±0.1 so a single wild attempt can't dominate. */
export function applySessionAttempts(
  current: TopicSkillMap,
  attempts: AttemptForUpdate[]
): TopicSkillMap {
  const next: TopicSkillMap = { ...current }
  const now = Date.now()

  for (const a of attempts) {
    if (a.timeSpentMs <= MIN_ATTEMPT_MS) continue
    if (!a.slug || !a.difficulty) continue
    const target = SECTION_TARGET_MS[a.section]
    if (!target) continue

    const ratio = a.timeSpentMs / target
    let baseDelta: number
    if (a.isCorrect) {
      if (ratio < FAST_RATIO) baseDelta = 0.06 // efficient
      else if (ratio < SLOW_RATIO) baseDelta = 0.04 // on-pace
      else baseDelta = 0.02 // labored
    } else {
      if (ratio < FAST_RATIO) baseDelta = -0.05 // rushed
      else if (ratio < SLOW_RATIO) baseDelta = -0.04 // missed at pace
      else baseDelta = -0.06 // stuck
    }

    const delta = clamp(
      baseDelta * difficultyWeight(a.difficulty, a.isCorrect),
      -0.1,
      0.1
    )

    const prior = next[a.slug] ?? {
      level: DEFAULT_LEVEL,
      attempts: 0,
      updatedAt: 0,
    }
    next[a.slug] = {
      level: clamp(prior.level + delta, 0, 1),
      attempts: prior.attempts + 1,
      updatedAt: now,
    }
  }

  return next
}

/** Target difficulty mix as a function of level. Returned as weights
 *  per tier — `pickAdaptiveOrder` uses these to score how desirable
 *  each tier is for the student's current level. */
function targetMix(level: number): Record<Difficulty, number> {
  if (level < 0.35) {
    return { Beginner: 0.6, Intermediate: 0.3, Advanced: 0.1 }
  }
  if (level < 0.65) {
    return { Beginner: 0.3, Intermediate: 0.5, Advanced: 0.2 }
  }
  if (level < 0.85) {
    return { Beginner: 0.15, Intermediate: 0.5, Advanced: 0.35 }
  }
  return { Beginner: 0.05, Intermediate: 0.35, Advanced: 0.6 }
}

/** Reorder questions so level-appropriate ones come first. Doesn't
 *  filter — every question is still in the returned array, just
 *  re-shuffled within its difficulty bucket and reordered between
 *  buckets so the student's target tier leads.
 *
 *  Falls back to the input order when `attempts < MIN_ATTEMPTS_FOR_ADAPTIVE`
 *  — new users get predictable file-order behaviour. */
export function pickAdaptiveOrder<
  Q extends { difficulty: Difficulty; id: string }
>(
  questions: Q[],
  skill: TopicSkillLevel,
  options: { seed?: number } = {}
): Q[] {
  if (skill.attempts < MIN_ATTEMPTS_FOR_ADAPTIVE) return questions
  if (questions.length <= 1) return questions

  const mix = targetMix(skill.level)

  // Bucket by difficulty preserving original within-bucket order.
  const buckets: Record<Difficulty, Q[]> = {
    Beginner: [],
    Intermediate: [],
    Advanced: [],
  }
  for (const q of questions) {
    buckets[q.difficulty]?.push(q)
  }

  // Order tiers by target weight desc — the student's most-wanted
  // tier comes first.
  const tierOrder: Difficulty[] = (
    Object.entries(mix) as Array<[Difficulty, number]>
  )
    .sort(([, a], [, b]) => b - a)
    .map(([tier]) => tier)

  // Lightweight deterministic shuffle inside each bucket so two
  // sessions on the same slug + level don't see identical orderings.
  // Seedable for tests; defaults to time-derived.
  const seed = options.seed ?? (Date.now() % 1_000_000)
  for (const tier of tierOrder) {
    buckets[tier] = mulberrySort(buckets[tier], seed + tier.length)
  }

  return [...buckets[tierOrder[0]], ...buckets[tierOrder[1]], ...buckets[tierOrder[2]]]
}

// ---------- internals ----------

function clamp(n: number, lo: number, hi: number): number {
  return Math.max(lo, Math.min(hi, n))
}

/** Tiny seeded shuffle (mulberry32-ish). Not for crypto; just for
 *  stable-but-varying question order across sessions. */
function mulberrySort<T>(items: T[], seed: number): T[] {
  if (items.length <= 1) return items
  let s = seed >>> 0
  const next = () => {
    s = (s + 0x6d2b79f5) >>> 0
    let t = s
    t = Math.imul(t ^ (t >>> 15), t | 1)
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61)
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
  // Fisher-Yates with the seeded RNG.
  const out = items.slice()
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(next() * (i + 1))
    ;[out[i], out[j]] = [out[j], out[i]]
  }
  return out
}

/** Pretty label for the level — used for the small affordance in the
 *  practice header so the student sees what tier they're being served. */
export function levelLabel(level: number): string {
  if (level < 0.35) return "Foundation"
  if (level < 0.65) return "Building"
  if (level < 0.85) return "Proficient"
  return "Advanced"
}
