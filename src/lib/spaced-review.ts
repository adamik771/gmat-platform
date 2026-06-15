import type { SupabaseClient } from "@supabase/supabase-js"
import {
  getReviewQueue,
  type ReviewCandidate,
  SPACING_LADDER_DAYS,
} from "./review-queue"
import {
  getCurriculumOutline,
  type OutlineEntry,
} from "./curriculum-outline"
import { TOPIC_TO_SET } from "./topic-chapter-map"
import type { Section } from "@/types"

/**
 * Generalized spaced-review engine.
 *
 * Extends the question-only spacing ladder in `review-queue.ts` to four
 * primitive types:
 *
 *   - question    — a specific question that was missed (existing ladder)
 *   - concept     — a sub-skill the student keeps failing across many
 *                   questions (e.g., "Remainders", "CR Strengthen")
 *   - drill       — a curriculum micro-drill block (8 Q sub-chapter set)
 *   - checkpoint  — a curriculum active-recall block (3-5 Q recall check)
 *
 * Each kind has its own spacing ladder calibrated to how quickly the
 * underlying memory decays:
 *
 *   question    → [0, 2,  7, 21, 42]
 *   concept     → [0, 3, 10, 28, 56]   (slower — concept stability is durable)
 *   drill       → [0, 2,  7, 21, 42]
 *   checkpoint  → [0, 1,  4, 14, 30]   (fastest — recall fragments fast)
 *
 * Priority is composite — overdue-ness leads, with modifiers for:
 *
 *   - accuracy        : recent miss-rate raises priority
 *   - confidence      : low self-reported confidence (1-5 scale) raises priority
 *   - mistake-type    : concept-absent (K1) raises; execution-slip (E1) lowers
 *   - flagged         : student-marked items jump the queue
 *
 * Confidence + mistake-type are optional — when missing, the algorithm
 * falls back to overdue-ness alone (same behavior as the legacy ladder).
 *
 * Confidence is stored in `user_metadata.confidence_log` as
 *   { [itemId]: { confidence: 1-5, ts: ms-epoch } }
 * which avoids a Supabase migration. Helpers below read & write this map.
 */

// ---------- Spacing ladders per kind ----------
const LADDERS: Record<SpacedItemKind, readonly number[]> = {
  question: SPACING_LADDER_DAYS,
  concept: [0, 3, 10, 28, 56],
  drill: [0, 2, 7, 21, 42],
  checkpoint: [0, 1, 4, 14, 30],
}

const MAX_RUNG_BY_KIND: Record<SpacedItemKind, number> = {
  question: SPACING_LADDER_DAYS.length - 1,
  concept: 4,
  drill: 4,
  checkpoint: 4,
}

// ---------- Types ----------

export type SpacedItemKind = "question" | "concept" | "drill" | "checkpoint"

interface SpacedItemBase {
  /** Stable id used for confidence-log keys and React renders. */
  id: string
  kind: SpacedItemKind
  section: Section
  topic: string
  /** Days since the last review of this item. Float, rounded to .1. */
  daysSinceLastSeen: number
  /** Current rung (0..MAX_RUNG_BY_KIND[kind]). */
  rung: number
  /** Days until this rung's threshold elapses. Negative = overdue. */
  daysUntilDue: number
  /** Composite priority score (higher = surface sooner). */
  priority: number
  /** Plain-English why-it-surfaced. */
  reason: string
  /** Where to send the student to do the review. */
  href: string
}

export interface SpacedQuestion extends SpacedItemBase {
  kind: "question"
  questionId: string
  subtopic: string
  missCount: number
  attemptCount: number
  flagged: boolean
  /** Confidence (1-5) from the last review attempt; null if never reported. */
  confidence: number | null
  /** True when the student tapped "Save for review" on this question.
   *  Adds a +50 priority boost so saved items surface near the top of
   *  the queue regardless of overdue status. */
  savedForReview: boolean
}

export interface SpacedConcept extends SpacedItemBase {
  kind: "concept"
  subskill: string
  /** Rolling accuracy on this sub-skill across the trailing window. */
  accuracy: number
  totalAttempts: number
  /** Most-recent dominant mistake-type tag for items in this sub-skill, when present. */
  dominantMistakeType: string | null
}

export interface SpacedDrill extends SpacedItemBase {
  kind: "drill"
  chapterSlug: string
  chapterTitle: string
  subchapter: string
  blockAnchor: string
}

export interface SpacedCheckpoint extends SpacedItemBase {
  kind: "checkpoint"
  chapterSlug: string
  chapterTitle: string
  subchapter: string
  blockAnchor: string
}

export type SpacedItem = SpacedQuestion | SpacedConcept | SpacedDrill | SpacedCheckpoint

export interface SpacedReviewQueue {
  items: SpacedItem[]
  byKind: Record<SpacedItemKind, SpacedItem[]>
  /** Total items across all kinds. */
  total: number
}

// ---------- Confidence log helpers ----------

const DEFAULT_CONFIDENCE = 3 // neutral when unreported

interface ConfidenceLogEntry {
  confidence: number // 1 = no idea, 5 = certain
  ts: number // ms epoch
}

/**
 * Read the saved-for-review list out of user_metadata. Returns an empty
 * Set for missing or malformed shapes. Used by `liftQuestions` to apply
 * the +50 priority boost.
 */
export function readSavedForReview(userMetadata: unknown): Set<string> {
  if (!userMetadata || typeof userMetadata !== "object") return new Set()
  const list = (userMetadata as { saved_for_review?: unknown }).saved_for_review
  if (!Array.isArray(list)) return new Set()
  return new Set(list.filter((x): x is string => typeof x === "string"))
}

/**
 * Read a user's confidence log out of user_metadata. Returns an empty
 * map for missing or malformed shapes — never throws, since the data is
 * user-controlled.
 */
export function readConfidenceLog(
  userMetadata: unknown
): Map<string, ConfidenceLogEntry> {
  const out = new Map<string, ConfidenceLogEntry>()
  if (!userMetadata || typeof userMetadata !== "object") return out
  const log = (userMetadata as { confidence_log?: unknown }).confidence_log
  if (!log || typeof log !== "object") return out
  for (const [k, v] of Object.entries(log)) {
    if (!v || typeof v !== "object") continue
    const c = (v as { confidence?: unknown }).confidence
    const t = (v as { ts?: unknown }).ts
    if (typeof c === "number" && typeof t === "number" && c >= 1 && c <= 5) {
      out.set(k, { confidence: c, ts: t })
    }
  }
  return out
}

/** Confidence → priority bonus. Less-confident items resurface sooner. */
function confidenceBonus(confidence: number | null): number {
  if (confidence == null) return 0
  // 1 → +20, 2 → +12, 3 → 0, 4 → −5, 5 → −10
  if (confidence <= 1) return 20
  if (confidence === 2) return 12
  if (confidence === 3) return 0
  if (confidence === 4) return -5
  return -10
}

/**
 * Mistake-type → priority modifier. Concept gaps surface faster (need
 * re-installation); execution slips slower (don't over-train fluency
 * when the underlying knowledge is sound).
 */
function mistakeTypeBonus(mistakeType: string | null | undefined): number {
  if (!mistakeType) return 0
  switch (mistakeType) {
    // Knowledge gaps — accelerate
    case "K1":
    case "Q_CONCEPT":
      return 25
    // Concept misapplied — moderate accelerator
    case "K2":
    case "Q_SETUP":
      return 12
    // Strategy / opportunity — moderate accelerator
    case "S1":
    case "S2":
      return 10
    // Execution / data extraction slips — decelerate
    case "E1":
    case "E2":
    case "CALC_SLIP":
      return -10
    // Pacing → moderate accelerator (need to retrain rhythm)
    case "P1":
    case "P2":
    case "TIME_SINK":
      return 8
    // Behaviour / judgement / fatigue → mild accelerator
    case "J1":
    case "F1":
    case "REVIEW_EDIT":
    case "FATIGUE_DROP":
    case "OVERCONF":
      return 5
    default:
      return 0
  }
}

// ---------- Item builders ----------

/**
 * Wrap legacy `getReviewQueue` output as `SpacedQuestion[]` and apply
 * the confidence + mistake-type + saved-for-review modifiers on top of
 * the existing priority. The legacy priority already encodes overdue +
 * miss-count + flagged; we add confidence, mistake-type, and saved
 * here.
 */
const SAVED_FOR_REVIEW_BONUS = 50

function liftQuestions(
  candidates: ReviewCandidate[],
  confidenceMap: Map<string, ConfidenceLogEntry>,
  mistakeTypeByQuestion: Map<string, string>,
  savedSet: Set<string>
): SpacedQuestion[] {
  return candidates.map((c) => {
    const conf = confidenceMap.get(`question:${c.questionId}`)?.confidence ?? null
    const mistakeType = mistakeTypeByQuestion.get(c.questionId) ?? null
    const isSaved = savedSet.has(c.questionId)
    const bonus =
      confidenceBonus(conf) +
      mistakeTypeBonus(mistakeType) +
      (isSaved ? SAVED_FOR_REVIEW_BONUS : 0)
    return {
      kind: "question",
      id: `question:${c.questionId}`,
      questionId: c.questionId,
      section: c.section,
      topic: c.topic,
      subtopic: c.subtopic,
      daysSinceLastSeen: c.daysSinceLastSeen,
      rung: c.rung,
      daysUntilDue: c.daysUntilDue,
      missCount: c.missCount,
      attemptCount: c.attemptCount,
      flagged: c.flagged,
      confidence: conf,
      savedForReview: isSaved,
      priority: c.priority + bonus,
      reason: isSaved
        ? `You saved this for review.`
        : buildQuestionReason(c, conf, mistakeType),
      // Question ids are `${fileSlug}-q${n}` — stripping the -qN suffix
      // recovers the exact bank set slug /practice/session resolves.
      href: `/practice/session/${c.questionId.replace(/-q\d+$/, "")}`,
    }
  })
}

function buildQuestionReason(
  c: ReviewCandidate,
  confidence: number | null,
  mistakeType: string | null
): string {
  if (c.flagged) return `Flagged during a mock — surfacing immediately.`
  if (c.missCount > 1) return `Missed ${c.missCount} times — needs re-installation.`
  if (mistakeType === "K1" || mistakeType === "Q_CONCEPT") {
    return `Concept-gap miss — accelerating the resurface schedule.`
  }
  if (confidence !== null && confidence <= 2) {
    return `Low confidence on the last review — bringing it back sooner.`
  }
  if (c.daysSinceLastSeen > SPACING_LADDER_DAYS[c.rung]) {
    return `${Math.round(-c.daysUntilDue)} days overdue at rung ${c.rung}.`
  }
  return `Spaced retrieval per ladder rung ${c.rung}.`
}

/**
 * Aggregate per-subskill from raw attempts and emit `SpacedConcept[]`.
 * Concepts surface when:
 *   - rolling accuracy < 70% on ≥ 4 attempts, OR
 *   - dominant mistake-type signals a concept gap (K1/Q_CONCEPT)
 */
async function buildConceptItems(
  supabase: SupabaseClient,
  userId: string,
  confidenceMap: Map<string, ConfidenceLogEntry>,
  mistakeTypeByQuestion: Map<string, string>
): Promise<SpacedConcept[]> {
  const cutoff = new Date()
  cutoff.setDate(cutoff.getDate() - 84) // 12 weeks
  const { data: attempts } = await supabase
    .from("practice_attempts")
    .select(
      "question_id, section, topic, subtopic, is_correct, practice_sessions!inner(created_at)"
    )
    .eq("user_id", userId)
    .gte("practice_sessions.created_at", cutoff.toISOString())
    .order("practice_sessions(created_at)", { ascending: false })
    .limit(5000)

  if (!attempts) return []

  // Group by (section, subskill).
  type Bucket = {
    section: Section
    topic: string
    subskill: string
    correct: number
    total: number
    lastSeenMs: number | null
    mistakeCounts: Map<string, number>
  }
  const buckets = new Map<string, Bucket>()
  for (const row of attempts as unknown as Array<{
    question_id: string
    section: string
    topic: string | null
    subtopic: string | null
    is_correct: boolean
    practice_sessions: { created_at: string } | null
  }>) {
    const section = row.section as Section
    if (section !== "Quant" && section !== "Verbal" && section !== "DI") continue
    const topic = row.topic ?? "General"
    const subskill =
      row.subtopic && row.subtopic !== row.topic ? row.subtopic : topic
    const key = `${section}::${subskill}`
    const ts = row.practice_sessions?.created_at
      ? Date.parse(row.practice_sessions.created_at)
      : null
    const b =
      buckets.get(key) ??
      ({
        section,
        topic,
        subskill,
        correct: 0,
        total: 0,
        lastSeenMs: null,
        mistakeCounts: new Map<string, number>(),
      } as Bucket)
    b.total += 1
    if (row.is_correct) b.correct += 1
    if (ts !== null && (b.lastSeenMs === null || ts > b.lastSeenMs)) {
      b.lastSeenMs = ts
    }
    if (!row.is_correct) {
      const mistake = mistakeTypeByQuestion.get(row.question_id)
      if (mistake) {
        b.mistakeCounts.set(mistake, (b.mistakeCounts.get(mistake) ?? 0) + 1)
      }
    }
    buckets.set(key, b)
  }

  const now = Date.now()
  const items: SpacedConcept[] = []
  for (const [key, b] of buckets) {
    if (b.total < 4) continue // need a stable read on the sub-skill
    const accuracy = b.correct / b.total
    // Surface concept when accuracy below 70% OR concept-gap mistake dominates.
    const dominantMistakeType = topMistakeType(b.mistakeCounts)
    const conceptGapDominant =
      dominantMistakeType === "K1" ||
      dominantMistakeType === "Q_CONCEPT" ||
      dominantMistakeType === "K2"
    if (accuracy >= 0.7 && !conceptGapDominant) continue

    const lastSeenMs = b.lastSeenMs ?? now
    const daysSinceLastSeen = Math.max(0, (now - lastSeenMs) / 86_400_000)
    const rung = rungFromAccuracy(accuracy, "concept")
    const threshold = LADDERS.concept[rung]
    const daysUntilDue = threshold - daysSinceLastSeen
    const overdueDays = Math.max(0, -daysUntilDue)
    const conf = confidenceMap.get(`concept:${key}`)?.confidence ?? null
    const priority =
      overdueDays * 8 +
      (1 - accuracy) * 30 +
      mistakeTypeBonus(dominantMistakeType) +
      confidenceBonus(conf)

    if (priority <= 0) continue

    items.push({
      kind: "concept",
      id: `concept:${key}`,
      subskill: b.subskill,
      section: b.section,
      topic: b.topic,
      accuracy: Math.round(accuracy * 100) / 100,
      totalAttempts: b.total,
      dominantMistakeType,
      daysSinceLastSeen: Math.round(daysSinceLastSeen * 10) / 10,
      rung,
      daysUntilDue: Math.round(daysUntilDue * 10) / 10,
      priority: Math.round(priority * 10) / 10,
      reason: buildConceptReason(accuracy, b.total, dominantMistakeType),
      // Set slug, not chapter slug — chapter slugs 404 on /practice/session.
      href: `/practice/session/${TOPIC_TO_SET[b.topic] ?? b.topic.toLowerCase()}`,
    })
  }
  return items
}

function topMistakeType(counts: Map<string, number>): string | null {
  let topKey: string | null = null
  let topCount = 0
  for (const [k, v] of counts) {
    if (v > topCount) {
      topKey = k
      topCount = v
    }
  }
  return topKey
}

/**
 * Map accuracy to a rung. The lower the accuracy, the lower the rung
 * (more frequent resurfacing). Mirrors the question ladder's "wrong
 * resets to 0" but for concept-level evidence.
 */
function rungFromAccuracy(accuracy: number, kind: SpacedItemKind): number {
  if (kind === "concept") {
    if (accuracy >= 0.9) return 4
    if (accuracy >= 0.8) return 3
    if (accuracy >= 0.7) return 2
    if (accuracy >= 0.5) return 1
    return 0
  }
  return Math.min(MAX_RUNG_BY_KIND[kind], Math.floor(accuracy * 5))
}

function buildConceptReason(
  accuracy: number,
  total: number,
  dominantMistakeType: string | null
): string {
  const pct = Math.round(accuracy * 100)
  if (
    dominantMistakeType === "K1" ||
    dominantMistakeType === "K2" ||
    dominantMistakeType === "Q_CONCEPT"
  ) {
    return `${pct}% on ${total} attempts — recurring concept-gap pattern.`
  }
  if (accuracy < 0.5) {
    return `Below 50% (${pct}%) on ${total} attempts — re-install the concept.`
  }
  return `${pct}% on ${total} attempts — concept needs reinforcement.`
}

/**
 * Schedule curriculum micro-drills as spaced-review items.
 *
 * Drill availability: every micro-drill block in the curriculum (parsed
 * via `getCurriculumOutline`). A drill enters the queue once the
 * student has read its parent chapter at least once (drives recency).
 * `chapter_progress.lastSeen` is the per-chapter timestamp we already
 * persist in `user_metadata.chapter_progress`.
 *
 * If the student hasn't reviewed the drill recently, it surfaces with
 * priority proportional to elapsed days × (1 + chapter recency boost).
 */
function buildDrillItems(
  outline: OutlineEntry[],
  chapterProgress: Record<string, ChapterProgressLite>,
  confidenceMap: Map<string, ConfidenceLogEntry>,
  drillReviewLog: Map<string, number>
): SpacedDrill[] {
  const now = Date.now()
  const items: SpacedDrill[] = []
  for (const e of outline) {
    if (e.kind !== "drill") continue
    if (e.section === "General") continue
    const chapterStarted = chapterProgress[e.chapterSlug]
    if (!chapterStarted) continue // student hasn't even started the chapter

    const id = `drill:${e.chapterSlug}::${e.blockAnchor}`
    const lastReview = drillReviewLog.get(id) ?? null
    const baseTs = lastReview ?? chapterStarted.firstSeenMs ?? now
    const daysSinceLastSeen = Math.max(0, (now - baseTs) / 86_400_000)

    // Without explicit attempt history, we treat the rung as "rung 0
    // until reviewed once, then climb based on review count."
    const reviewCount = drillReviewLog.has(id) ? 1 : 0
    const rung = Math.min(MAX_RUNG_BY_KIND.drill, reviewCount)
    const threshold = LADDERS.drill[rung]
    const daysUntilDue = threshold - daysSinceLastSeen
    const overdueDays = Math.max(0, -daysUntilDue)

    const conf = confidenceMap.get(id)?.confidence ?? null
    const priority = overdueDays * 5 + confidenceBonus(conf)
    if (priority <= 0) continue

    items.push({
      kind: "drill",
      id,
      chapterSlug: e.chapterSlug,
      chapterTitle: e.chapterTitle,
      section: e.section as Section,
      topic: e.subchapter,
      subchapter: e.subchapter,
      blockAnchor: e.blockAnchor,
      daysSinceLastSeen: Math.round(daysSinceLastSeen * 10) / 10,
      rung,
      daysUntilDue: Math.round(daysUntilDue * 10) / 10,
      priority: Math.round(priority * 10) / 10,
      reason: lastReview
        ? `Last reviewed ${Math.round(daysSinceLastSeen)} days ago.`
        : `Drill from a chapter you've started but haven't drilled.`,
      href: `/guides/${e.chapterSlug}#${e.subchapterAnchor}`,
    })
  }
  return items.sort((a, b) => b.priority - a.priority).slice(0, 8)
}

/** Same idea as drills, but with the faster recall ladder. */
function buildCheckpointItems(
  outline: OutlineEntry[],
  chapterProgress: Record<string, ChapterProgressLite>,
  confidenceMap: Map<string, ConfidenceLogEntry>,
  checkpointReviewLog: Map<string, number>
): SpacedCheckpoint[] {
  const now = Date.now()
  const items: SpacedCheckpoint[] = []
  for (const e of outline) {
    if (e.kind !== "recall") continue
    if (e.section === "General") continue
    const chapterStarted = chapterProgress[e.chapterSlug]
    if (!chapterStarted) continue

    const id = `checkpoint:${e.chapterSlug}::${e.blockAnchor}`
    const lastReview = checkpointReviewLog.get(id) ?? null
    const baseTs = lastReview ?? chapterStarted.firstSeenMs ?? now
    const daysSinceLastSeen = Math.max(0, (now - baseTs) / 86_400_000)

    const reviewCount = checkpointReviewLog.has(id) ? 1 : 0
    const rung = Math.min(MAX_RUNG_BY_KIND.checkpoint, reviewCount)
    const threshold = LADDERS.checkpoint[rung]
    const daysUntilDue = threshold - daysSinceLastSeen
    const overdueDays = Math.max(0, -daysUntilDue)

    const conf = confidenceMap.get(id)?.confidence ?? null
    const priority = overdueDays * 6 + confidenceBonus(conf)
    if (priority <= 0) continue

    items.push({
      kind: "checkpoint",
      id,
      chapterSlug: e.chapterSlug,
      chapterTitle: e.chapterTitle,
      section: e.section as Section,
      topic: e.subchapter,
      subchapter: e.subchapter,
      blockAnchor: e.blockAnchor,
      daysSinceLastSeen: Math.round(daysSinceLastSeen * 10) / 10,
      rung,
      daysUntilDue: Math.round(daysUntilDue * 10) / 10,
      priority: Math.round(priority * 10) / 10,
      reason: `Active-recall checkpoint — recall fragments fast.`,
      href: `/guides/${e.chapterSlug}#${e.subchapterAnchor}`,
    })
  }
  return items.sort((a, b) => b.priority - a.priority).slice(0, 8)
}

// ---------- Auxiliary helpers ----------

interface ChapterProgressLite {
  firstSeenMs?: number
}

/**
 * Read minimal chapter-progress metadata. We extract just the
 * timestamps the spacing engine needs — first time the student
 * touched the chapter, which serves as the "concept install date."
 */
export function readChapterProgressLite(
  userMetadata: unknown
): Record<string, ChapterProgressLite> {
  const out: Record<string, ChapterProgressLite> = {}
  if (!userMetadata || typeof userMetadata !== "object") return out
  const cp = (userMetadata as { chapter_progress?: unknown }).chapter_progress
  if (!cp || typeof cp !== "object") return out
  for (const [slug, raw] of Object.entries(cp)) {
    if (!raw || typeof raw !== "object") continue
    const firstSeenAt = (raw as { firstSeenAt?: unknown }).firstSeenAt
    const firstSeenMs =
      typeof firstSeenAt === "string" ? Date.parse(firstSeenAt) : undefined
    out[slug] = {
      firstSeenMs: Number.isFinite(firstSeenMs) ? firstSeenMs : undefined,
    }
  }
  return out
}

/** Read a "review log" map keyed by id (drills/checkpoints). */
export function readReviewLog(
  userMetadata: unknown,
  key: "drill_reviews" | "checkpoint_reviews"
): Map<string, number> {
  const out = new Map<string, number>()
  if (!userMetadata || typeof userMetadata !== "object") return out
  const log = (userMetadata as Record<string, unknown>)[key]
  if (!log || typeof log !== "object") return out
  for (const [k, v] of Object.entries(log)) {
    if (typeof v === "number") out.set(k, v)
  }
  return out
}

// ---------- Public entrypoint ----------

interface BuildOptions {
  /** Optional flagged-question id set (e.g., from mock flags). */
  flaggedQuestionIds?: Set<string>
  /** Cap per kind to keep the queue rendering fast. */
  limit?: number
}

/**
 * Compose the full spaced-review queue across all four item kinds.
 *
 * Reads:
 *   - practice_attempts (questions + concepts)
 *   - error_tags (mistake-type modifier per question)
 *   - user_metadata.confidence_log (confidence inputs)
 *   - user_metadata.chapter_progress (concept-install dates)
 *   - user_metadata.drill_reviews / checkpoint_reviews (last-review timestamps)
 *
 * Returns an interleaved-by-priority queue + per-kind buckets so the
 * UI can render either flow.
 */
export async function buildSpacedReviewQueue(
  supabase: SupabaseClient,
  userId: string,
  userMetadata: unknown,
  options: BuildOptions = {}
): Promise<SpacedReviewQueue> {
  const limit = options.limit ?? 30
  const confidenceMap = readConfidenceLog(userMetadata)
  const chapterProgress = readChapterProgressLite(userMetadata)
  const drillReviewLog = readReviewLog(userMetadata, "drill_reviews")
  const checkpointReviewLog = readReviewLog(userMetadata, "checkpoint_reviews")
  const savedSet = readSavedForReview(userMetadata)

  // Mistake-type lookup: question_id → most recent error tag.
  const { data: errorRows } = await supabase
    .from("error_tags")
    .select("attempt_id, tag, root_cause, practice_attempts(question_id)")
    .eq("user_id", userId)
  const mistakeTypeByQuestion = new Map<string, string>()
  for (const row of (errorRows ?? []) as unknown as Array<{
    tag: string | null
    root_cause: string | null
    practice_attempts: { question_id: string } | null
  }>) {
    const qid = row.practice_attempts?.question_id
    if (!qid) continue
    // Prefer root_cause when present (it tells us WHY); fall back to tag.
    const code = row.root_cause ?? row.tag
    if (code) mistakeTypeByQuestion.set(qid, code)
  }

  // Build per kind.
  const rawQuestions = await getReviewQueue(supabase, userId, {
    limit: 60,
    flaggedQuestionIds: options.flaggedQuestionIds,
  })
  const questions = liftQuestions(
    rawQuestions,
    confidenceMap,
    mistakeTypeByQuestion,
    savedSet
  )

  // Saved questions the student has never attempted won't be in
  // `rawQuestions` (no attempt history). Synthesise minimal entries
  // for those so they still surface in the queue.
  const liftedIds = new Set(questions.map((q) => q.questionId))
  const orphanSavedIds = [...savedSet].filter((id) => !liftedIds.has(id))
  if (orphanSavedIds.length > 0) {
    const { getQuestionsByIds } = await import("./content")
    const orphanQuestions = getQuestionsByIds(orphanSavedIds)
    for (const q of orphanQuestions) {
      questions.push({
        kind: "question",
        id: `question:${q.id}`,
        questionId: q.id,
        section: q.section,
        topic: q.topic,
        subtopic: q.subtopic,
        daysSinceLastSeen: 0,
        rung: 0,
        daysUntilDue: 0,
        missCount: 0,
        attemptCount: 0,
        flagged: false,
        confidence: confidenceMap.get(`question:${q.id}`)?.confidence ?? null,
        savedForReview: true,
        priority: SAVED_FOR_REVIEW_BONUS,
        reason: `You saved this for review.`,
        // q.id is `${fileSlug}-q${n}` — the prefix IS the resolvable set slug.
        href: `/practice/session/${q.id.replace(/-q\d+$/, "")}`,
      })
    }
  }
  const concepts = await buildConceptItems(
    supabase,
    userId,
    confidenceMap,
    mistakeTypeByQuestion
  )
  const outline = getCurriculumOutline()
  const drills = buildDrillItems(
    outline,
    chapterProgress,
    confidenceMap,
    drillReviewLog
  )
  const checkpoints = buildCheckpointItems(
    outline,
    chapterProgress,
    confidenceMap,
    checkpointReviewLog
  )

  const all = [...questions, ...concepts, ...drills, ...checkpoints]
    .sort((a, b) => b.priority - a.priority)
    .slice(0, limit)

  const byKind: Record<SpacedItemKind, SpacedItem[]> = {
    question: questions.filter((q) => all.includes(q)),
    concept: concepts.filter((c) => all.includes(c)),
    drill: drills.filter((d) => all.includes(d)),
    checkpoint: checkpoints.filter((c) => all.includes(c)),
  }

  return {
    items: all,
    byKind,
    total: all.length,
  }
}

/**
 * Record the result of a spaced-review attempt — writes back into
 * `user_metadata` so subsequent calls advance the rung.
 *
 * Usage: from an API route that handles "I just reviewed item X with
 * confidence Y". The caller passes the new metadata to
 * `supabase.auth.updateUser({ data: nextMeta })`.
 */
export function recordReviewAttempt(
  userMetadata: unknown,
  item: { id: string; kind: SpacedItemKind },
  confidence: number,
  nowMs: number = Date.now()
): Record<string, unknown> {
  const meta = (userMetadata && typeof userMetadata === "object"
    ? { ...(userMetadata as Record<string, unknown>) }
    : {}) as Record<string, unknown>

  // Update confidence log for any kind.
  const confLog = (meta.confidence_log as Record<string, unknown> | undefined) ?? {}
  meta.confidence_log = {
    ...confLog,
    [item.id]: { confidence, ts: nowMs },
  }

  // For drill/checkpoint, also update the kind-specific review log so
  // the rung advances on subsequent calls.
  if (item.kind === "drill") {
    const log = (meta.drill_reviews as Record<string, unknown> | undefined) ?? {}
    meta.drill_reviews = { ...log, [item.id]: nowMs }
  } else if (item.kind === "checkpoint") {
    const log = (meta.checkpoint_reviews as Record<string, unknown> | undefined) ?? {}
    meta.checkpoint_reviews = { ...log, [item.id]: nowMs }
  }

  return meta
}

const _DEFAULT_CONFIDENCE = DEFAULT_CONFIDENCE
export { _DEFAULT_CONFIDENCE as DEFAULT_CONFIDENCE_VALUE }
