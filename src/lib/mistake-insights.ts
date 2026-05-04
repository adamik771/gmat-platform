import type { MistakeClassification } from "./mistake-classifier"
import type { ParsedQuestion } from "./content"
import { TOPIC_TO_CHAPTER } from "./topic-chapter-map"
import type { Section } from "@/types"

/**
 * Mistake-insights aggregator.
 *
 * Takes a population of classified mistakes and produces a four-panel
 * dashboard:
 *
 *   1. recurringWeaknesses  — sub-skills failing across multiple misses
 *   2. trapFrequency        — top named-traps the student keeps falling into
 *   3. recommendedChapters  — priority-ranked chapters that fix the dominant patterns
 *   4. priorityFixes        — top-N most actionable next-step items
 *      (each fix references a sub-skill, a recommended chapter or drill,
 *       and the count of related misses)
 *
 * The output is read-only — designed to render directly into a server
 * component without further reshaping.
 */

export interface RecurringWeakness {
  subskill: string
  topic: string
  section: Section
  /** # of missed questions on this sub-skill. */
  misses: number
  /** Most-recent miss timestamp (ms epoch) — null if the caller didn't pass dates. */
  lastSeenMs: number | null
  /** Difficulty distribution of the misses (so we can say "5 Hard misses on this"). */
  byDifficulty: { Beginner: number; Intermediate: number; Advanced: number }
}

export interface TrapFrequency {
  trap: string
  /** Trap-taxonomy slug from the curriculum, when available. */
  trapType?: string
  occurrences: number
  /** Question ids where the student fell into this trap. */
  questionIds: string[]
}

export interface RecommendedChapter {
  chapterSlug: string
  title: string
  section: Section
  /** Why this chapter — combined reason from contributing misses. */
  reason: string
  /** Higher = more important; controls dashboard ordering. */
  priority: number
  /** The misses driving this recommendation. */
  drivingMisses: string[]
}

export interface RecommendedDrill {
  /** Slug routed to /practice/session/{slug} — typically the question-bank topic file. */
  slug: string
  title: string
  section: Section
  /** Plain-English reason ("3 Hard misses on Combinations — drill at this difficulty"). */
  reason: string
  /** Suggested target count for the drill (usually 8-15 questions). */
  targetCount: number
  /** Higher = more important. */
  priority: number
}

export interface PriorityFix {
  /** Stable id (subskill or trap label) — used for React keys. */
  id: string
  kind: "subskill" | "trap"
  /** Headline copy — first thing the student reads ("Fix sufficiency-check drift"). */
  title: string
  /** 1-2 sentence rationale. */
  rationale: string
  /** Where to read about it. Optional. */
  chapterSlug?: string
  /** Where to drill it. Optional. */
  drillSlug?: string
  section: Section
  /** # of missed questions feeding this fix. */
  misses: number
  /** Composite ordering priority. */
  priority: number
}

export interface MistakeInsights {
  recurringWeaknesses: RecurringWeakness[]
  trapFrequency: TrapFrequency[]
  recommendedChapters: RecommendedChapter[]
  recommendedDrills: RecommendedDrill[]
  priorityFixes: PriorityFix[]
  /** Total miss count the insights were computed from. */
  totalMisses: number
}

interface BuildInsightsOptions {
  /** Question lookup so we can read `relatedReading` per miss. */
  questionsById: Map<string, ParsedQuestion>
  /** Optional timestamp per attempt (ms epoch) to compute recency. */
  attemptTimestamps?: Map<string, number>
}

const RECENCY_DAY_MS = 86_400_000
const SUBSKILL_MIN_MISSES_FOR_FIX = 2
const TRAP_MIN_OCCURRENCES_FOR_FIX = 2

/**
 * Aggregate classifications into the dashboard view-model.
 *
 * Algorithm summary:
 *   - Walk every classification once, accumulating per-subskill and
 *     per-trap counters.
 *   - For each subskill, look up TOPIC_TO_CHAPTER for a chapter slug
 *     and the question's `relatedReading` for a curriculum chapter.
 *   - For trap recommendations, trap → originating questions →
 *     `relatedReading` (preferred) or topic-chapter map (fallback).
 *   - Priority fixes blend (1) recurrence count, (2) recency boost,
 *     and (3) difficulty weight (Hard misses count more).
 */
export function buildMistakeInsights(
  mistakes: MistakeClassification[],
  options: BuildInsightsOptions
): MistakeInsights {
  const { questionsById, attemptTimestamps } = options

  // ---------- 1. Sub-skill aggregation ----------
  const subskillMap = new Map<
    string,
    {
      key: string
      subskill: string
      topic: string
      section: Section
      misses: number
      lastSeenMs: number | null
      byDifficulty: { Beginner: number; Intermediate: number; Advanced: number }
      questionIds: string[]
    }
  >()
  for (const m of mistakes) {
    const q = questionsById.get(m.questionId)
    const topic = q?.topic ?? m.subskill
    const key = `${m.section}::${m.subskill}`
    const ts = attemptTimestamps?.get(m.questionId) ?? null
    const entry =
      subskillMap.get(key) ??
      {
        key,
        subskill: m.subskill,
        topic,
        section: m.section,
        misses: 0,
        lastSeenMs: null,
        byDifficulty: { Beginner: 0, Intermediate: 0, Advanced: 0 },
        questionIds: [],
      }
    entry.misses += 1
    entry.byDifficulty[m.difficulty] += 1
    entry.questionIds.push(m.questionId)
    if (ts !== null && (entry.lastSeenMs === null || ts > entry.lastSeenMs)) {
      entry.lastSeenMs = ts
    }
    subskillMap.set(key, entry)
  }

  const recurringWeaknesses: RecurringWeakness[] = [...subskillMap.values()]
    .map((s) => ({
      subskill: s.subskill,
      topic: s.topic,
      section: s.section,
      misses: s.misses,
      lastSeenMs: s.lastSeenMs,
      byDifficulty: s.byDifficulty,
    }))
    .sort((a, b) => b.misses - a.misses)
    .slice(0, 8)

  // ---------- 2. Trap frequency ----------
  const trapMap = new Map<string, TrapFrequency>()
  for (const m of mistakes) {
    const trap = m.trapType.value
    if (!trap) continue
    const label = trap.label
    const existing =
      trapMap.get(label) ??
      { trap: label, trapType: trap.slug, occurrences: 0, questionIds: [] }
    existing.occurrences += 1
    existing.questionIds.push(m.questionId)
    trapMap.set(label, existing)
  }
  const trapFrequency: TrapFrequency[] = [...trapMap.values()]
    .sort((a, b) => b.occurrences - a.occurrences)
    .slice(0, 6)

  // ---------- 3. Chapter recommendations ----------
  const chapterMap = new Map<string, RecommendedChapter>()
  const upsertChapter = (rec: RecommendedChapter) => {
    const ex = chapterMap.get(rec.chapterSlug)
    if (!ex) {
      chapterMap.set(rec.chapterSlug, rec)
      return
    }
    ex.priority = Math.max(ex.priority, rec.priority)
    ex.drivingMisses = Array.from(new Set([...ex.drivingMisses, ...rec.drivingMisses]))
    if (rec.priority >= ex.priority) ex.reason = rec.reason
  }

  // Trap-driven (highest priority) — each trap pushes its question's
  // related-reading into the recommendation pool.
  for (const t of trapFrequency) {
    for (const qid of t.questionIds) {
      const q = questionsById.get(qid)
      if (!q?.relatedReading) continue
      upsertChapter({
        chapterSlug: q.relatedReading,
        title: t.trap.length > 60 ? `${t.trap.slice(0, 57)}…` : t.trap,
        section: q.section,
        reason: `You fell into "${t.trap}" ${t.occurrences > 1 ? `${t.occurrences} times` : "once"}. This chapter teaches the recognition signal.`,
        priority: 90 + Math.min(t.occurrences * 2, 8),
        drivingMisses: [qid],
      })
    }
  }

  // Subskill-driven — use TOPIC_TO_CHAPTER to route to the right chapter.
  // Pull driving question ids from the same subskill bucket we built above.
  for (const s of recurringWeaknesses) {
    const slug = TOPIC_TO_CHAPTER[s.topic]
    if (!slug) continue
    const bucket = subskillMap.get(`${s.section}::${s.subskill}`)
    upsertChapter({
      chapterSlug: slug,
      title: s.topic,
      section: s.section,
      reason: `${s.misses} miss${s.misses === 1 ? "" : "es"} on ${s.subskill === s.topic ? s.topic : `${s.subskill} (${s.topic})`} — drill the chapter to install the pattern.`,
      priority: 70 + Math.min(s.misses * 3, 18) + s.byDifficulty.Advanced * 2,
      drivingMisses: bucket ? [...bucket.questionIds] : [],
    })
  }

  const recommendedChapters: RecommendedChapter[] = [...chapterMap.values()]
    .sort((a, b) => b.priority - a.priority)
    .slice(0, 6)

  // ---------- 4. Drill recommendations ----------
  // Drills go through /practice/session/{slug} where slug = topic file
  // slug. We map each top weakness to its topic file via TOPIC_TO_CHAPTER
  // (since chapter slugs and topic file slugs share the same names).
  const drillMap = new Map<string, RecommendedDrill>()
  for (const s of recurringWeaknesses) {
    const slug = TOPIC_TO_CHAPTER[s.topic]
    if (!slug) continue
    const hardMisses = s.byDifficulty.Advanced
    const targetCount = hardMisses >= 2 ? 15 : s.misses >= 4 ? 12 : 8
    const reason =
      hardMisses >= 2
        ? `${hardMisses} Hard miss${hardMisses === 1 ? "" : "es"} on ${s.subskill}. Drill at full difficulty.`
        : `${s.misses} miss${s.misses === 1 ? "" : "es"} on ${s.subskill}. Mixed-difficulty set.`
    drillMap.set(slug, {
      slug,
      title: s.topic,
      section: s.section,
      reason,
      targetCount,
      priority:
        70 +
        Math.min(s.misses * 3, 18) +
        hardMisses * 2 +
        (s.lastSeenMs !== null ? 5 : 0), // small recency boost when we have it
    })
  }
  const recommendedDrills: RecommendedDrill[] = [...drillMap.values()]
    .sort((a, b) => b.priority - a.priority)
    .slice(0, 6)

  // ---------- 5. Priority fixes ----------
  // Composite ranking blends frequency, recency, and Hard-miss density.
  // Each fix points the student at a chapter and a drill, so it's
  // actionable in two clicks.
  const fixes: PriorityFix[] = []
  const now = Date.now()

  for (const s of recurringWeaknesses) {
    if (s.misses < SUBSKILL_MIN_MISSES_FOR_FIX) continue
    const recencyBoost =
      s.lastSeenMs !== null
        ? Math.max(0, 14 - Math.floor((now - s.lastSeenMs) / RECENCY_DAY_MS))
        : 0
    const hardWeight = s.byDifficulty.Advanced * 4
    const priority = s.misses * 6 + hardWeight + recencyBoost
    const chapterSlug = TOPIC_TO_CHAPTER[s.topic]
    fixes.push({
      id: `subskill::${s.section}::${s.subskill}`,
      kind: "subskill",
      title: `Fix recurring miss: ${s.subskill}`,
      rationale: `${s.misses} miss${s.misses === 1 ? "" : "es"} on this sub-skill${
        s.byDifficulty.Advanced > 0
          ? `, including ${s.byDifficulty.Advanced} Hard`
          : ""
      }. Read the chapter, then drill at the difficulty that's failing.`,
      chapterSlug,
      drillSlug: chapterSlug,
      section: s.section,
      misses: s.misses,
      priority,
    })
  }

  for (const t of trapFrequency) {
    if (t.occurrences < TRAP_MIN_OCCURRENCES_FOR_FIX) continue
    const sampleQuestion = questionsById.get(t.questionIds[0] ?? "")
    const chapterSlug = sampleQuestion?.relatedReading
    fixes.push({
      id: `trap::${t.trap}`,
      kind: "trap",
      title: `Defuse trap: ${t.trap.length > 60 ? `${t.trap.slice(0, 57)}…` : t.trap}`,
      rationale: `Fell into this trap ${t.occurrences} times. The chapter teaches the recognition signal so you spot it before computing.`,
      chapterSlug,
      drillSlug: undefined,
      section: sampleQuestion?.section ?? "Quant",
      misses: t.occurrences,
      priority: t.occurrences * 8 + (chapterSlug ? 5 : 0),
    })
  }

  const priorityFixes = fixes
    .sort((a, b) => b.priority - a.priority)
    .slice(0, 6)

  return {
    recurringWeaknesses,
    trapFrequency,
    recommendedChapters,
    recommendedDrills,
    priorityFixes,
    totalMisses: mistakes.length,
  }
}
