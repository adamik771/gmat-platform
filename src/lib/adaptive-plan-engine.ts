import type { SupabaseClient } from "@supabase/supabase-js"
import {
  buildEnhancedReport,
  type ChapterRecommendation,
  type DiagnosticAttempt,
  type EnhancedDiagnosticReport,
  type SectionResult,
  type TimingAnalysis,
  type TrapPattern,
} from "./diagnostic"
import {
  classifyMistakes,
  type MistakeAttemptInput,
} from "./mistake-classifier"
import {
  buildMistakeInsights,
  type MistakeInsights,
} from "./mistake-insights"
import {
  buildSpacedReviewQueue,
  type SpacedReviewQueue,
} from "./spaced-review"
import {
  getCurriculumOutline,
  type OutlineEntry,
} from "./curriculum-outline"
import { getQuestionsByIds, type ParsedQuestion } from "./content"
import { totalPercentile } from "./score-percentiles"
import { TOPIC_TO_CHAPTER, TOPIC_TO_SET } from "./topic-chapter-map"
import type { Difficulty, QuestionType, Section } from "@/types"

/**
 * Adaptive study-plan engine.
 *
 * Synthesises every signal the platform captures — diagnostic, latest
 * mock, question-bank performance, timing patterns, confidence log,
 * mistake log — into a personalized weekly plan.
 *
 * The output is a multi-week schedule with five activity kinds:
 *
 *   1. read-chapter    — curriculum reading (`/guides/{slug}`)
 *   2. micro-drill     — sub-chapter drill block (`/guides/{slug}#anchor`)
 *   3. question-set    — topic-filtered drill (`/practice/session/{slug}`)
 *   4. review          — spaced-review session (`/review` or `/review/all`)
 *   5. mock            — full-length mock (`/mock`) — once per ~2 weeks
 *
 * Two phases:
 *
 *   `collectAdaptiveSignals` (async) — pulls Supabase + user_metadata +
 *   filesystem content into a single AdaptiveSignals struct.
 *
 *   `computeAdaptivePlan` (pure) — takes signals + options, emits the
 *   week-by-week schedule. Pure so tests + UI previews can run without
 *   a database.
 *
 * This is the planner used across the app (study-plan, dashboard); it
 * replaced an earlier diagnostic-only engine.
 */

// ============================================================
// Types
// ============================================================

export interface AdaptiveSignals {
  // ---- Score baselines ----
  diagnosticTotalScore: number | null
  diagnosticPercentile: number | null
  latestMockTotalScore: number | null
  latestMockPercentile: number | null
  /** When the latest mock was taken (ISO) — null if no mock yet. */
  latestMockDate: string | null

  // ---- Weak areas (synthesised across all sources) ----
  topWeakSubskills: WeakSubskillSignal[]
  topTrapPatterns: TrapSignal[]

  // ---- Pacing ----
  pacingPatterns: TimingAnalysis[]

  // ---- Confidence ----
  /** # of items where most-recent self-reported confidence was 1 or 2. */
  lowConfidenceItemCount: number

  // ---- Spaced review backlog ----
  pendingReviewTotal: number
  pendingReviewByKind: { question: number; concept: number; drill: number; checkpoint: number }

  // ---- Per-section section results (from diag + mock blended) ----
  sectionResults: SectionResult[]

  // ---- Recommended chapters (deduped across all sources) ----
  recommendedChapters: ChapterRecommendation[]

  // ---- Mistake-insights-driven priority fixes ----
  priorityFixes: MistakeInsights["priorityFixes"]

  // ---- Curriculum outline (for drill scheduling) ----
  outline: OutlineEntry[]
}

export interface WeakSubskillSignal {
  subskill: string
  topic: string
  section: Section
  /** 0-100 severity composite — drives ordering. Higher = bigger fix priority. */
  severity: number
  /** Source labels — what evidenced this weakness. */
  sources: ("diagnostic" | "mock" | "practice")[]
  /** Total miss count across sources. */
  misses: number
  /** Most recent miss timestamp (ms epoch). */
  lastSeenMs: number | null
  /** Chapter slug for "read the chapter" links, when known. */
  topicSlug: string | null
  /** Question-bank set slug for drill links — the only slug family
   *  /practice/session resolves (chapter slugs 404 there). */
  setSlug: string | null
}

export interface TrapSignal {
  trap: string
  trapType?: string
  severity: number
  occurrences: number
  /** Slug of the chapter that teaches the recognition signal, if known. */
  relatedReading: string | null
  section: Section
}

// ---------- Plan output ----------

export type AdaptiveActivity =
  | ReadChapterActivity
  | MicroDrillActivity
  | QuestionSetActivity
  | ReviewActivity
  | MockActivity

export interface ReadChapterActivity {
  kind: "read-chapter"
  slug: string
  title: string
  section: Section
  rationale: string
  estimatedMinutes: number
}

export interface MicroDrillActivity {
  kind: "micro-drill"
  chapterSlug: string
  chapterTitle: string
  subchapter: string
  blockAnchor: string
  section: Section
  rationale: string
  estimatedMinutes: number
}

export interface QuestionSetActivity {
  kind: "question-set"
  /** Question-bank set slug — rendered as /practice/session/{topicSlug}. */
  topicSlug: string
  topic: string
  section: Section
  difficultyMix: "easy" | "medium" | "hard" | "mixed"
  targetCount: number
  rationale: string
  estimatedMinutes: number
}

export interface ReviewActivity {
  kind: "review"
  href: string
  /** Optional kind filter — UI may show only this kind in the queue. */
  itemKind: "any" | "question" | "concept" | "drill" | "checkpoint"
  targetCount: number
  rationale: string
  estimatedMinutes: number
}

export interface MockActivity {
  kind: "mock"
  /** Per-section mocks supported; null = full 3-section mock. */
  section: Section | null
  rationale: string
  estimatedMinutes: number
}

export type Weekday = "Mon" | "Tue" | "Wed" | "Thu" | "Fri" | "Sat" | "Sun"

export interface AdaptiveDay {
  day: number
  weekday: Weekday
  activities: AdaptiveActivity[]
  estimatedMinutes: number
  /** Set when this is a designated rest day. */
  isRest: boolean
}

export interface AdaptiveWeek {
  weekNumber: number
  /** Single-line theme — what's the goal of this week. */
  theme: string
  /** 2-3 sentences explaining why this week was built this way. */
  rationale: string
  /** Section emphasis — drives the daily mix. */
  primarySection: Section
  days: AdaptiveDay[]
  /** Aggregates, computed for the UI. */
  totalEstimatedMinutes: number
  totalQuestions: number
  hasMock: boolean
}

export interface AdaptivePlan {
  /** Diagnostic baseline + target headline. */
  headline: string
  startDate: string
  weeks: AdaptiveWeek[]
  /** The signal struct used to build the plan — passed back so the UI
   *  can render a "why this plan" panel without re-querying. */
  signals: AdaptiveSignals
  /** Recommended exam-day section order, derived from the strongest signals. */
  sectionOrder: Section[]
  /** Why-this-section-order copy. */
  sectionOrderRationale: string
  /** Inferred student profile — drives week count, section rotation,
   *  per-day cadence. Surfaced in the UI as a small badge with rationale. */
  profile: InferredProfile
}

// ---------- Student profile ----------

/** Skill-level axis. Mutually exclusive — one of three. */
export type SkillLevel = "beginner" | "intermediate" | "advanced"

/** Modifier axis — orthogonal to skill level. A student can carry 0-N modifiers. */
export type ProfileModifier =
  | "quant-strong-verbal-weak"
  | "verbal-strong-quant-weak"
  | "di-weak"
  | "time-constrained"
  | "long-prep"

export interface InferredProfile {
  level: SkillLevel
  modifiers: ProfileModifier[]
  /** Compact label for the badge UI (e.g. "Intermediate · DI focus · 6-week"). */
  label: string
  /** 1-2 sentence rationale shown beneath the badge. */
  rationale: string
}

// ============================================================
// Phase 1 — collect signals (async, hits Supabase)
// ============================================================

const SECTIONS: Section[] = ["Quant", "Verbal", "DI"]
const WEEKDAY_TEMPLATE: Weekday[] = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
const DEFAULT_WEEKS = 4

export interface CollectSignalsOptions {
  /** Window for question-bank stats (days). Default 84 (12 weeks). */
  practiceWindowDays?: number
  /** Optional flagged-question-id set for the spaced queue. */
  flaggedQuestionIds?: Set<string>
}

/**
 * Pull every signal source the engine needs and return a single
 * AdaptiveSignals struct. Order:
 *   1. Diagnostic attempts → enhanced report
 *   2. Latest mock attempts → enhanced report
 *   3. All practice attempts → topic accuracy + mistake classification
 *   4. Mistake-insights aggregator
 *   5. Spaced-review queue
 *   6. Confidence log
 */
export async function collectAdaptiveSignals(
  supabase: SupabaseClient,
  userId: string,
  userMetadata: unknown,
  options: CollectSignalsOptions = {}
): Promise<AdaptiveSignals> {
  const practiceWindowDays = options.practiceWindowDays ?? 84

  // ---- Diagnostic ----
  const diagnosticReport = await loadDiagnosticReport(supabase, userId)

  // ---- Latest mock ----
  const latestMock = await loadLatestMockReport(supabase, userId)

  // ---- All practice attempts (window-bounded) ----
  const cutoff = new Date()
  cutoff.setDate(cutoff.getDate() - practiceWindowDays)
  const { data: rawAttempts } = await supabase
    .from("practice_attempts")
    .select(
      "question_id, section, topic, subtopic, difficulty, question_type, is_correct, time_spent_ms, practice_sessions(created_at)"
    )
    .eq("user_id", userId)
    .gte("practice_sessions.created_at", cutoff.toISOString())
    .limit(5000)

  const attempts = (rawAttempts ?? []) as unknown as Array<{
    question_id: string
    section: Section
    topic: string | null
    subtopic: string | null
    difficulty: Difficulty | null
    question_type: QuestionType | null
    is_correct: boolean
    time_spent_ms: number | null
    practice_sessions: { created_at: string } | null
  }>

  // ---- Practice-bank weakness aggregation ----
  type Bucket = {
    section: Section
    topic: string
    subskill: string
    correct: number
    total: number
    lastSeenMs: number | null
  }
  const practiceBuckets = new Map<string, Bucket>()
  const missedAttempts: MistakeAttemptInput[] = []
  for (const a of attempts) {
    const section = a.section as Section
    if (!SECTIONS.includes(section)) continue
    const topic = a.topic ?? "General"
    const subskill = a.subtopic && a.subtopic !== a.topic ? a.subtopic : topic
    const key = `${section}::${subskill}`
    const ts = a.practice_sessions?.created_at
      ? Date.parse(a.practice_sessions.created_at)
      : null
    const b =
      practiceBuckets.get(key) ??
      ({
        section,
        topic,
        subskill,
        correct: 0,
        total: 0,
        lastSeenMs: null,
      } as Bucket)
    b.total += 1
    if (a.is_correct) b.correct += 1
    if (ts && (b.lastSeenMs === null || ts > b.lastSeenMs)) b.lastSeenMs = ts
    practiceBuckets.set(key, b)
    if (!a.is_correct) {
      missedAttempts.push({
        questionId: a.question_id,
        section,
        topic,
        subtopic: a.subtopic,
        difficulty: a.difficulty,
        questionType: a.question_type,
        selectedAnswer: null,
        timeSpentMs: a.time_spent_ms,
      })
    }
  }

  // ---- Mistake insights ----
  const missedQuestionIds = Array.from(new Set(missedAttempts.map((m) => m.questionId)))
  const missedQuestions = getQuestionsByIds(missedQuestionIds)
  const questionsById = new Map<string, ParsedQuestion>()
  for (const q of missedQuestions) questionsById.set(q.id, q)
  const classifications = classifyMistakes(missedAttempts, questionsById)
  const mistakeInsights = buildMistakeInsights(classifications, {
    questionsById,
    attemptTimestamps: new Map<string, number>(), // not material for the synthesis
  })

  // ---- Synthesise weak sub-skills (diag + mock + practice) ----
  const weakSkillMap = new Map<string, WeakSubskillSignal>()
  const upsertWeakSubskill = (
    section: Section,
    topic: string,
    subskill: string,
    severityDelta: number,
    source: "diagnostic" | "mock" | "practice",
    misses: number,
    lastSeenMs: number | null
  ) => {
    const key = `${section}::${subskill}`
    const ex =
      weakSkillMap.get(key) ??
      ({
        subskill,
        topic,
        section,
        severity: 0,
        sources: [] as ("diagnostic" | "mock" | "practice")[],
        misses: 0,
        lastSeenMs: null,
        topicSlug: TOPIC_TO_CHAPTER[topic] ?? null,
        setSlug: TOPIC_TO_SET[topic] ?? null,
      } as WeakSubskillSignal)
    ex.severity += severityDelta
    if (!ex.sources.includes(source)) ex.sources.push(source)
    ex.misses += misses
    if (lastSeenMs !== null && (ex.lastSeenMs === null || lastSeenMs > ex.lastSeenMs)) {
      ex.lastSeenMs = lastSeenMs
    }
    weakSkillMap.set(key, ex)
  }

  // From diagnostic: each weak sub-skill contributes severity proportional to (1 - accuracy).
  if (diagnosticReport) {
    for (const w of diagnosticReport.weakSubskills) {
      upsertWeakSubskill(
        w.section,
        w.topic,
        w.subskill,
        Math.round((1 - w.accuracy) * 30),
        "diagnostic",
        w.attempts - w.correct,
        null
      )
    }
  }
  // From latest mock: same idea, slightly lower weight (mock is fresher but
  // has more variance per question).
  if (latestMock) {
    for (const w of latestMock.weakSubskills) {
      upsertWeakSubskill(
        w.section,
        w.topic,
        w.subskill,
        Math.round((1 - w.accuracy) * 25),
        "mock",
        w.attempts - w.correct,
        latestMock.takenAt ? Date.parse(latestMock.takenAt) : null
      )
    }
  }
  // From practice: rolling accuracy window.
  for (const b of practiceBuckets.values()) {
    if (b.total < 4) continue
    const accuracy = b.correct / b.total
    if (accuracy >= 0.7) continue
    upsertWeakSubskill(
      b.section,
      b.topic,
      b.subskill,
      Math.round((1 - accuracy) * 40), // practice carries the most weight (largest sample)
      "practice",
      b.total - b.correct,
      b.lastSeenMs
    )
  }
  const topWeakSubskills = [...weakSkillMap.values()]
    .sort((a, b) => b.severity - a.severity)
    .slice(0, 8)

  // ---- Synthesise trap patterns ----
  const trapMap = new Map<string, TrapSignal>()
  const upsertTrap = (
    p: TrapPattern,
    section: Section,
    severityDelta: number,
    relatedReading: string | null
  ) => {
    const ex =
      trapMap.get(p.trap) ??
      ({
        trap: p.trap,
        trapType: p.trapType,
        severity: 0,
        occurrences: 0,
        relatedReading: relatedReading,
        section,
      } as TrapSignal)
    ex.severity += severityDelta
    ex.occurrences += p.occurrences
    if (relatedReading && !ex.relatedReading) ex.relatedReading = relatedReading
    trapMap.set(p.trap, ex)
  }

  if (diagnosticReport) {
    for (const t of diagnosticReport.trapPatterns) {
      const sampleQ = t.questionIds[0] ? getQuestionsByIds([t.questionIds[0]])[0] : undefined
      upsertTrap(t, sampleQ?.section ?? "Quant", t.occurrences * 6, sampleQ?.relatedReading ?? null)
    }
  }
  if (latestMock) {
    for (const t of latestMock.trapPatterns) {
      const sampleQ = t.questionIds[0] ? getQuestionsByIds([t.questionIds[0]])[0] : undefined
      upsertTrap(t, sampleQ?.section ?? "Quant", t.occurrences * 8, sampleQ?.relatedReading ?? null)
    }
  }
  for (const t of mistakeInsights.trapFrequency) {
    const sampleQ = t.questionIds[0] ? questionsById.get(t.questionIds[0]) : undefined
    upsertTrap(
      t as TrapPattern,
      sampleQ?.section ?? "Quant",
      t.occurrences * 5,
      sampleQ?.relatedReading ?? null
    )
  }
  const topTrapPatterns = [...trapMap.values()]
    .sort((a, b) => b.severity - a.severity)
    .slice(0, 6)

  // ---- Pacing patterns (prefer mock data when present, fall back to diag) ----
  const pacingPatterns = latestMock?.timingAnalysis ?? diagnosticReport?.timingAnalysis ?? []

  // ---- Spaced-review backlog ----
  let spacedQueue: SpacedReviewQueue | null = null
  try {
    spacedQueue = await buildSpacedReviewQueue(
      supabase,
      userId,
      userMetadata,
      { flaggedQuestionIds: options.flaggedQuestionIds, limit: 100 }
    )
  } catch {
    // Non-fatal — render plan without queue if engine throws.
  }
  const pendingReviewByKind = {
    question: spacedQueue?.byKind.question.length ?? 0,
    concept: spacedQueue?.byKind.concept.length ?? 0,
    drill: spacedQueue?.byKind.drill.length ?? 0,
    checkpoint: spacedQueue?.byKind.checkpoint.length ?? 0,
  }

  // ---- Confidence log: count items rated 1-2 ----
  let lowConfidenceItemCount = 0
  if (userMetadata && typeof userMetadata === "object") {
    const log = (userMetadata as { confidence_log?: unknown }).confidence_log
    if (log && typeof log === "object") {
      for (const v of Object.values(log as Record<string, unknown>)) {
        if (v && typeof v === "object") {
          const c = (v as { confidence?: unknown }).confidence
          if (typeof c === "number" && c <= 2) lowConfidenceItemCount += 1
        }
      }
    }
  }

  // ---- Section results (latest mock takes precedence; diag fallback) ----
  const sectionResults = latestMock?.sections ?? diagnosticReport?.sections ?? []

  // ---- Recommended chapters (deduped, priority-ordered) ----
  const recMap = new Map<string, ChapterRecommendation>()
  const upsertRec = (rec: ChapterRecommendation) => {
    const ex = recMap.get(rec.chapterSlug)
    if (!ex) {
      recMap.set(rec.chapterSlug, rec)
      return
    }
    ex.priority = Math.max(ex.priority, rec.priority)
    if (rec.priority >= ex.priority) ex.reason = rec.reason
  }
  for (const c of diagnosticReport?.recommendedChapters ?? []) upsertRec(c)
  for (const c of latestMock?.recommendedChapters ?? []) {
    upsertRec({ ...c, priority: c.priority + 5 }) // mock recency bumps priority
  }
  for (const c of mistakeInsights.recommendedChapters) {
    upsertRec({
      chapterSlug: c.chapterSlug,
      title: c.title,
      section: c.section,
      reason: c.reason,
      priority: c.priority,
      drivingQuestionIds: c.drivingMisses,
    })
  }
  const recommendedChapters = [...recMap.values()]
    .sort((a, b) => b.priority - a.priority)
    .slice(0, 8)

  // ---- Score baselines ----
  // Baseline total: the latest official mba.com practice-exam score the
  // student entered wins; the legacy in-app diagnostic total remains as a
  // fallback for accounts that predate the official-exam flow.
  const metaOfficialScores = (userMetadata as
    | { official_exam_scores?: unknown }
    | null
    | undefined)?.official_exam_scores
  const officialTotals = Array.isArray(metaOfficialScores)
    ? metaOfficialScores
        .filter(
          (e): e is { date: string; total: number } =>
            typeof (e as { date?: unknown })?.date === "string" &&
            typeof (e as { total?: unknown })?.total === "number",
        )
        .sort((a, b) => a.date.localeCompare(b.date))
    : []
  const latestOfficialTotal =
    officialTotals.length > 0
      ? officialTotals[officialTotals.length - 1].total
      : null
  const diagnosticTotalScore =
    latestOfficialTotal ?? diagnosticReport?.totalScore ?? null
  const diagnosticPercentile = diagnosticTotalScore !== null
    ? totalPercentile(diagnosticTotalScore)
    : null
  const latestMockTotalScore = latestMock?.totalScore ?? null
  const latestMockPercentile = latestMockTotalScore !== null
    ? totalPercentile(latestMockTotalScore)
    : null

  return {
    diagnosticTotalScore,
    diagnosticPercentile,
    latestMockTotalScore,
    latestMockPercentile,
    latestMockDate: latestMock?.takenAt ?? null,
    topWeakSubskills,
    topTrapPatterns,
    pacingPatterns,
    lowConfidenceItemCount,
    pendingReviewTotal: spacedQueue?.total ?? 0,
    pendingReviewByKind,
    sectionResults,
    recommendedChapters,
    priorityFixes: mistakeInsights.priorityFixes,
    outline: getCurriculumOutline(),
  }
}

async function loadDiagnosticReport(
  supabase: SupabaseClient,
  userId: string
): Promise<EnhancedDiagnosticReport | null> {
  const attempts: DiagnosticAttempt[] = []
  for (const section of SECTIONS) {
    const slug = `diagnostic-${section.toLowerCase()}`
    const { data: session } = await supabase
      .from("practice_sessions")
      .select("id, created_at")
      .eq("user_id", userId)
      .eq("slug", slug)
      .order("created_at", { ascending: false })
      .limit(1)
      .maybeSingle()
    if (!session) continue
    const { data: rows } = await supabase
      .from("practice_attempts")
      .select(
        "question_id, section, topic, subtopic, difficulty, is_correct, time_spent_ms"
      )
      .eq("session_id", session.id)
    for (const r of rows ?? []) {
      attempts.push({
        questionId: r.question_id as string,
        section: r.section as Section,
        topic: (r.topic as string | null) ?? "General",
        subtopic: (r.subtopic as string | null) ?? "General",
        difficulty:
          (r.difficulty as "Beginner" | "Intermediate" | "Advanced") ?? "Intermediate",
        isCorrect: !!r.is_correct,
        timeSpentMs: (r.time_spent_ms as number | null) ?? undefined,
      })
    }
  }
  if (attempts.length === 0) return null
  const ids = Array.from(new Set(attempts.map((a) => a.questionId)))
  const questions = getQuestionsByIds(ids)
  return buildEnhancedReport(attempts, questions)
}

async function loadLatestMockReport(
  supabase: SupabaseClient,
  userId: string
): Promise<EnhancedDiagnosticReport | null> {
  const { data: sessions } = await supabase
    .from("practice_sessions")
    .select("id, slug, created_at")
    .eq("user_id", userId)
    .like("slug", "mock-%")
    .order("created_at", { ascending: false })
    .limit(20)
  if (!sessions || sessions.length === 0) return null
  const latestDate = (sessions[0].slug as string).match(/^mock-(\d{4}-\d{2}-\d{2})-/)?.[1]
  if (!latestDate) return null
  const sameDate = sessions.filter((s) =>
    (s.slug as string).startsWith(`mock-${latestDate}-`)
  )
  const attempts: DiagnosticAttempt[] = []
  for (const s of sameDate) {
    const { data: rows } = await supabase
      .from("practice_attempts")
      .select(
        "question_id, section, topic, subtopic, difficulty, is_correct, time_spent_ms"
      )
      .eq("session_id", s.id)
    for (const r of rows ?? []) {
      attempts.push({
        questionId: r.question_id as string,
        section: r.section as Section,
        topic: (r.topic as string | null) ?? "General",
        subtopic: (r.subtopic as string | null) ?? "General",
        difficulty:
          (r.difficulty as "Beginner" | "Intermediate" | "Advanced") ?? "Intermediate",
        isCorrect: !!r.is_correct,
        timeSpentMs: (r.time_spent_ms as number | null) ?? undefined,
      })
    }
  }
  if (attempts.length === 0) return null
  const ids = Array.from(new Set(attempts.map((a) => a.questionId)))
  const questions = getQuestionsByIds(ids)
  return buildEnhancedReport(attempts, questions, sessions[0].created_at as string)
}

// ============================================================
// Phase 2 — compute plan (pure)
// ============================================================

export interface ComputePlanOptions {
  /** GMAT target score (205-805). Drives priority weighting. */
  targetScore?: number | null
  /** Days until exam. Compresses to 2-3 weeks if short. */
  daysAvailable?: number | null
  /** Override default 4-week span. Clamped to [1, 8]. */
  weeks?: number
  /** Plan start date (ISO). Defaults to today. */
  startDate?: string
}

export function computeAdaptivePlan(
  signals: AdaptiveSignals,
  options: ComputePlanOptions = {}
): AdaptivePlan {
  const profile = inferProfile(signals, options.daysAvailable ?? null)
  const weeks = resolveWeekCount(options, profile)
  const startDate = options.startDate ?? new Date().toISOString().slice(0, 10)
  const sectionOrder = decideSectionOrder(signals.sectionResults, profile)

  const builtWeeks: AdaptiveWeek[] = []
  for (let w = 0; w < weeks; w++) {
    const primarySection = sectionOrder[w % sectionOrder.length]
    const week = buildWeek(w, weeks, primarySection, signals, profile)
    builtWeeks.push(week)
  }

  return {
    headline: buildHeadline(signals, options.targetScore ?? null, weeks),
    startDate,
    weeks: builtWeeks,
    signals,
    sectionOrder,
    sectionOrderRationale: buildSectionOrderRationale(signals.sectionResults, sectionOrder, profile),
    profile,
  }
}

/**
 * Infer the student's profile from synthesised signals + days available.
 *
 * Two orthogonal axes:
 *   - level: beginner / intermediate / advanced (from the most recent
 *     score baseline — mock if available, diagnostic otherwise)
 *   - modifiers: section-imbalance + timing flags (compose freely)
 *
 * The profile drives week count, section rotation, per-day cadence,
 * and the rationale strings shown in the UI.
 */
export function inferProfile(
  signals: AdaptiveSignals,
  daysAvailable: number | null
): InferredProfile {
  const baseline = signals.latestMockTotalScore ?? signals.diagnosticTotalScore
  let level: SkillLevel = "beginner"
  if (baseline !== null) {
    if (baseline >= 685) level = "advanced"
    else if (baseline >= 545) level = "intermediate"
    else level = "beginner"
  }

  const modifiers: ProfileModifier[] = []

  // Section imbalance — measured against per-section accuracy from the
  // most recent score source (mock takes precedence over diagnostic).
  const byAcc = new Map<Section, number>()
  for (const s of signals.sectionResults) byAcc.set(s.section, s.accuracy)
  const q = byAcc.get("Quant") ?? null
  const v = byAcc.get("Verbal") ?? null
  const di = byAcc.get("DI") ?? null

  if (q !== null && v !== null) {
    if (q - v >= 0.15) modifiers.push("quant-strong-verbal-weak")
    else if (v - q >= 0.15) modifiers.push("verbal-strong-quant-weak")
  }
  if (di !== null && q !== null && v !== null) {
    if (di < Math.min(q, v) - 0.15) modifiers.push("di-weak")
  }

  // Timing — driven by exam date.
  if (daysAvailable !== null) {
    if (daysAvailable <= 14) modifiers.push("time-constrained")
    else if (daysAvailable >= 90) modifiers.push("long-prep")
  }

  return {
    level,
    modifiers,
    label: buildProfileLabel(level, modifiers),
    rationale: buildProfileRationale(level, modifiers, baseline, daysAvailable),
  }
}

function buildProfileLabel(level: SkillLevel, modifiers: ProfileModifier[]): string {
  const parts: string[] = [
    level.charAt(0).toUpperCase() + level.slice(1),
  ]
  if (modifiers.includes("quant-strong-verbal-weak")) parts.push("Verbal focus")
  if (modifiers.includes("verbal-strong-quant-weak")) parts.push("Quant focus")
  if (modifiers.includes("di-weak")) parts.push("DI focus")
  if (modifiers.includes("time-constrained")) parts.push("Crunch")
  else if (modifiers.includes("long-prep")) parts.push("Long prep")
  return parts.join(" · ")
}

function buildProfileRationale(
  level: SkillLevel,
  modifiers: ProfileModifier[],
  baseline: number | null,
  daysAvailable: number | null
): string {
  const parts: string[] = []
  if (baseline !== null) {
    parts.push(`Baseline ${baseline} → ${level}.`)
  } else {
    parts.push(`No baseline yet — defaulting to beginner cadence.`)
  }
  if (modifiers.includes("quant-strong-verbal-weak"))
    parts.push("Quant accuracy ≥15 pts above Verbal — Verbal-first rotation.")
  if (modifiers.includes("verbal-strong-quant-weak"))
    parts.push("Verbal accuracy ≥15 pts above Quant — Quant-first rotation.")
  if (modifiers.includes("di-weak"))
    parts.push("DI accuracy ≥15 pts below your other sections — extra DI emphasis.")
  if (modifiers.includes("time-constrained") && daysAvailable !== null)
    parts.push(`${daysAvailable} days to exam — skipping foundation week.`)
  if (modifiers.includes("long-prep") && daysAvailable !== null)
    parts.push(`${daysAvailable}+ days to exam — extended cadence with two mock cycles.`)
  return parts.join(" ")
}

function resolveWeekCount(
  options: ComputePlanOptions,
  profile: InferredProfile
): number {
  const requested = options.weeks ?? DEFAULT_WEEKS
  const days = options.daysAvailable
  let n = requested
  // Time-based compression takes precedence over profile-based suggestions.
  if (days != null) {
    if (days <= 14) return Math.max(1, Math.min(2, requested))
    if (days <= 21) return Math.max(2, Math.min(3, requested))
  }
  // Profile-based suggested cadence (only when days don't already cap us):
  //   beginner    → 4 weeks (heavy install phase)
  //   intermediate→ 4 weeks (default)
  //   advanced    → 3 weeks (compressed; advanced students don't need a long install phase)
  //   long-prep modifier → bump to 6 weeks
  if (profile.modifiers.includes("long-prep")) n = 6
  else if (profile.level === "advanced") n = Math.min(3, n)
  return Math.max(1, Math.min(8, n))
}

function decideSectionOrder(
  sectionResults: SectionResult[],
  profile: InferredProfile
): Section[] {
  // Profile-based section overrides take precedence — they encode an
  // explicit signal that the student is imbalanced and should rotate
  // toward their weak section first.
  if (profile.modifiers.includes("verbal-strong-quant-weak")) {
    return ["Quant", "DI", "Verbal"]
  }
  if (profile.modifiers.includes("quant-strong-verbal-weak")) {
    return ["Verbal", "DI", "Quant"]
  }
  if (profile.modifiers.includes("di-weak")) {
    return ["DI", "Quant", "Verbal"]
  }
  // No profile override: fall back to the accuracy-based weakest-first heuristic.
  if (sectionResults.length < 2) return ["Quant", "Verbal", "DI"]
  const sorted = [...sectionResults].sort((a, b) => a.accuracy - b.accuracy)
  const order: Section[] = sorted.map((s) => s.section)
  for (const s of SECTIONS) {
    if (!order.includes(s)) order.push(s)
  }
  return order
}

function buildSectionOrderRationale(
  sectionResults: SectionResult[],
  order: Section[],
  profile: InferredProfile
): string {
  // Profile-driven section order (imbalance modifiers) take precedence
  // in the rationale text — explicit signal beats the accuracy-based
  // heuristic.
  if (profile.modifiers.includes("verbal-strong-quant-weak")) {
    return `Verbal accuracy is well above Quant — leading with ${order[0]} so your strongest cognitive window goes to your weak section.`
  }
  if (profile.modifiers.includes("quant-strong-verbal-weak")) {
    return `Quant accuracy is well above Verbal — leading with ${order[0]} so your strongest cognitive window goes to your weak section.`
  }
  if (profile.modifiers.includes("di-weak")) {
    return `DI accuracy lags both Quant and Verbal — leading with ${order[0]} for fresh-brain emphasis on the dragging section.`
  }
  if (sectionResults.length < 2) {
    return `Default Q → V → DI ordering — not enough section data yet to personalise.`
  }
  const byAcc = new Map<Section, number>()
  for (const r of sectionResults) byAcc.set(r.section, r.accuracy)
  const weakest = order[0]
  const strongest = order[order.length - 1]
  const weakPct = byAcc.has(weakest) ? Math.round((byAcc.get(weakest) ?? 0) * 100) : null
  const strongPct = byAcc.has(strongest) ? Math.round((byAcc.get(strongest) ?? 0) * 100) : null
  if (weakPct === null || strongPct === null || weakPct === strongPct) {
    return `Sections within a percentage point — any order works. Default Q → V → DI.`
  }
  return `Open with ${weakest} (${weakPct}%) — the weakest section gets your fresh-brain attention. Save ${strongest} (${strongPct}%) for last; fatigue hits mastery the least.`
}

function buildHeadline(
  signals: AdaptiveSignals,
  targetScore: number | null,
  weeks: number
): string {
  const baseline = signals.latestMockTotalScore ?? signals.diagnosticTotalScore
  const baselineSource = signals.latestMockTotalScore !== null ? "mock" : "diagnostic"
  if (baseline === null) {
    return `Adaptive ${weeks}-week plan — enter an official practice-exam score to set the baseline.`
  }
  if (targetScore !== null) {
    const gap = Math.max(0, targetScore - baseline)
    if (gap === 0) {
      return `${baseline} (${baselineSource}) ≥ target ${targetScore}. ${weeks}-week plan focuses on hardening trap defense + pacing.`
    }
    return `${baseline} (${baselineSource}) → target ${targetScore} (${gap}-pt gap). ${weeks}-week plan attacks the weakest sub-skills first.`
  }
  return `${baseline} ${baselineSource}. ${weeks}-week plan tailored to your weakest sub-skills + trap patterns.`
}

function buildWeek(
  weekIndex: number,
  totalWeeks: number,
  primarySection: Section,
  signals: AdaptiveSignals,
  profile: InferredProfile
): AdaptiveWeek {
  const isLastWeek = weekIndex === totalWeeks - 1
  // Mock cadence depends on profile:
  //   - advanced + long-prep → mocks at week 2 AND week N-1 (multiple mocks)
  //   - default → mock at midweek + final week
  const baseMockWeek =
    totalWeeks >= 3 ? weekIndex === Math.floor(totalWeeks / 2) || isLastWeek : isLastWeek
  const advancedMockWeek =
    (profile.level === "advanced" || profile.modifiers.includes("long-prep")) &&
    totalWeeks >= 4 &&
    (weekIndex === 1 || weekIndex === totalWeeks - 2 || isLastWeek)
  const isMockWeek = baseMockWeek || advancedMockWeek

  const theme = themeFor(weekIndex, totalWeeks, profile)
  const rationale = rationaleFor(weekIndex, totalWeeks, primarySection, signals, profile)

  const days: AdaptiveDay[] = []
  for (let d = 0; d < 7; d++) {
    const weekday = WEEKDAY_TEMPLATE[d]
    const activities = activitiesForDay({
      weekIndex,
      totalWeeks,
      day: d,
      weekday,
      primarySection,
      signals,
      isMockWeek,
      profile,
    })
    const minutes = activities.reduce((acc, a) => acc + a.estimatedMinutes, 0)
    const isRest = activities.length === 0
    days.push({ day: d + 1, weekday, activities, estimatedMinutes: minutes, isRest })
  }

  const totalEstimatedMinutes = days.reduce((acc, d) => acc + d.estimatedMinutes, 0)
  const totalQuestions = days.reduce(
    (acc, d) =>
      acc +
      d.activities.reduce(
        (a2, act) =>
          a2 +
          (act.kind === "question-set"
            ? act.targetCount
            : act.kind === "review"
              ? act.targetCount
              : act.kind === "micro-drill"
                ? 8
                : 0),
        0
      ),
    0
  )
  const hasMock = days.some((d) => d.activities.some((a) => a.kind === "mock"))

  return {
    weekNumber: weekIndex + 1,
    theme,
    rationale,
    primarySection,
    days,
    totalEstimatedMinutes,
    totalQuestions,
    hasMock,
  }
}

function themeFor(
  weekIndex: number,
  totalWeeks: number,
  profile: InferredProfile
): string {
  // Time-constrained or 1-2 week plans skip the "foundation" framing
  // — these students don't have time for a slow install phase.
  if (totalWeeks <= 2 || profile.modifiers.includes("time-constrained")) {
    return weekIndex === 0
      ? "Crunch — concentrated drilling on top weaknesses + traps"
      : "Final mock + integration"
  }
  // Advanced students compress the install phase: week 1 is already drilling.
  if (profile.level === "advanced") {
    if (weekIndex === 0) return "Trap drilling — recognition into reflex"
    if (weekIndex === 1) return "Timed sets + mid-cycle mock"
    if (weekIndex === totalWeeks - 1) return "Final mock + final-trap pass"
    return "Continued timed drilling"
  }
  // Beginner / intermediate default cadence — chapter-heavy first week.
  if (weekIndex === 0) {
    return profile.level === "beginner"
      ? "Foundation — install chapters + early recall checkpoints"
      : "Foundation — install the chapters that fix your top weak spots"
  }
  if (weekIndex === 1) return "Drill the traps — recognition into reflex"
  if (weekIndex === Math.floor(totalWeeks / 2)) return "Pacing + mid-cycle mock"
  if (weekIndex === totalWeeks - 1) return "Final mock + integration review"
  return "Continued drilling + review"
}

function rationaleFor(
  weekIndex: number,
  totalWeeks: number,
  primarySection: Section,
  signals: AdaptiveSignals,
  profile: InferredProfile
): string {
  const top = signals.topWeakSubskills[0]
  const trap = signals.topTrapPatterns[0]
  const pacing = signals.pacingPatterns.find((p) => p.section === primarySection)

  if (weekIndex === 0) {
    if (profile.modifiers.includes("time-constrained")) {
      return `Crunch mode — ${signals.topWeakSubskills.length > 0 ? `straight to drilling ${top?.subskill ?? "your top weakness"}` : "high-yield drilling"}. No foundation week; we don't have the time.`
    }
    if (profile.level === "advanced") {
      return `Advanced cadence: skip the install phase. Open with trap drilling on ${top?.subskill ?? "your highest-severity sub-skill"} — at this score band, the gap is recognition speed, not concept install.`
    }
    if (top) {
      return `Focus on ${top.subskill} (${top.section}) — ${top.misses} miss${
        top.misses === 1 ? "" : "es"
      } across ${top.sources.join(" + ")}. The chapter teaches the recognition signal you're missing; light practice afterwards locks it in.`
    }
    return `Begin with the chapters most likely to move your score. Light practice afterwards.`
  }
  if (weekIndex === 1) {
    if (trap) {
      return `Trap-pattern week. You hit "${trap.trap}" ${trap.occurrences} time${
        trap.occurrences === 1 ? "" : "s"
      } across diagnostic + mock + practice. Mix one more chapter with intentional drilling on the trap until you can spot it cold.`
    }
    return `Move from concept-install to retrieval. Practice sets target the same sub-skills you read about last week.`
  }
  if (weekIndex === Math.floor(totalWeeks / 2)) {
    if (pacing && pacing.pattern !== "efficient") {
      return `Your ${primarySection} pacing was ${pacing.pattern} on the latest mock. ${pacing.summary} This week introduces strict per-question caps and a mid-cycle mock to test pacing under pressure.`
    }
    return `Pacing held up — keep it that way. Timed sets prevent regression as difficulty rises; mid-cycle mock validates the trajectory.`
  }
  if (weekIndex === totalWeeks - 1) {
    return `Final week. Full mock midweek + error-tagging on every miss + a final pass through your top trap. Integrate everything; rest the day before exam.`
  }
  return `Steady-state practice. No new content; consolidate the patterns you've installed.`
}

// ---------- Day-level cadence ----------

interface DayCtx {
  weekIndex: number
  totalWeeks: number
  day: number // 0-6
  weekday: Weekday
  primarySection: Section
  signals: AdaptiveSignals
  isMockWeek: boolean
  profile: InferredProfile
}

function activitiesForDay(ctx: DayCtx): AdaptiveActivity[] {
  const {
    weekIndex,
    totalWeeks,
    day,
    weekday,
    primarySection,
    signals,
    isMockWeek,
    profile,
  } = ctx
  const activities: AdaptiveActivity[] = []
  const isFirstWeek = weekIndex === 0
  const isLastWeek = weekIndex === totalWeeks - 1
  // Profile-driven activity-mix knobs:
  //   - Advanced students get more timed-set framing (question-set with
  //     "hard" difficulty mix and a tighter target count)
  //   - Beginner students get more chapter days in week 1
  //   - Time-constrained students skip chapter days entirely after
  //     week 1 (drill-heavy cadence)
  const isAdvanced = profile.level === "advanced"
  const isBeginner = profile.level === "beginner"
  const isCrunch = profile.modifiers.includes("time-constrained")
  const isDIWeak = profile.modifiers.includes("di-weak")

  // Sunday before the exam = rest day (only on the final week).
  if (isLastWeek && weekday === "Sun") {
    return []
  }

  // Mock days — placed midweek (Wed) of mock weeks. Once per ~2 weeks
  // when totalWeeks ≥ 3; or in the final week's Tuesday otherwise.
  if (isMockWeek && weekday === "Wed") {
    activities.push({
      kind: "mock",
      section: null,
      rationale: "Full-length mock under exam conditions. Builds endurance + measures progress.",
      estimatedMinutes: 165, // 3 sections × 45 + 2 break minutes × 10
    })
    // Mock days are dominant — no other heavy activity
    return activities
  }

  // Profile-aware cadence:
  //   - Crunch / advanced: skip chapter-heavy days; drill from day 1
  //   - Beginner: extra chapter days through week 2
  //   - Default: foundation week 1 → chapters, weeks 2+ → practice
  const wantChapter =
    isCrunch
      ? false
      : isAdvanced
        ? weekIndex === 0 && (day === 0 || day === 3)
        : isBeginner
          ? weekIndex <= 1 && day !== 6
          : isFirstWeek || (weekIndex === 1 && (day === 0 || day === 3))

  const wantDrill = !isFirstWeek && (day === 1 || day === 4)
  // Advanced + crunch students get an extra timed-practice slot on Tue/Fri.
  const wantPractice =
    (day === 2 || day === 5) ||
    (!isFirstWeek && day === 0) ||
    (isAdvanced && day === 1) ||
    (isCrunch && day === 1)
  const wantReview = day === 6 || (signals.pendingReviewTotal >= 8 && day % 2 === 1)

  // Read-chapter activity
  if (wantChapter && signals.recommendedChapters.length > 0) {
    const idx = (weekIndex * 2 + Math.floor(day / 3)) % signals.recommendedChapters.length
    const ch = signals.recommendedChapters[idx]
    activities.push({
      kind: "read-chapter",
      slug: ch.chapterSlug,
      title: ch.title,
      section: ch.section,
      rationale: ch.reason,
      estimatedMinutes: 25,
    })
  }

  // Micro-drill — pull a drill from the chapter just read (or generic)
  if (wantDrill) {
    const drillEntry = pickDrillForSection(primarySection, signals.outline, weekIndex, day)
    if (drillEntry) {
      activities.push({
        kind: "micro-drill",
        chapterSlug: drillEntry.chapterSlug,
        chapterTitle: drillEntry.chapterTitle,
        subchapter: drillEntry.subchapter,
        blockAnchor: drillEntry.blockAnchor,
        section: drillEntry.section as Section,
        rationale: `Sub-chapter drill on ${drillEntry.subchapter} — 8 questions with inline lesson notes.`,
        estimatedMinutes: 10,
      })
    }
  }

  // Question-set activity — drill the top weakness. DI-weak students
  // get an extra DI question set every Tuesday on top of the regular
  // practice rotation; advanced students lean toward "hard" difficulty
  // by default to train top-end pacing.
  if (wantPractice) {
    // For DI-weak profile, prefer the top DI weakness when one exists.
    const diWeakness = isDIWeak
      ? signals.topWeakSubskills.find((s) => s.section === "DI" && s.setSlug)
      : null
    const w =
      diWeakness ??
      signals.topWeakSubskills[(weekIndex + day) % Math.max(1, signals.topWeakSubskills.length)]
    if (w && w.setSlug) {
      const hardLeaning = isAdvanced || w.misses >= 5
      activities.push({
        kind: "question-set",
        topicSlug: w.setSlug,
        topic: w.topic,
        section: w.section,
        difficultyMix: hardLeaning ? "hard" : "mixed",
        targetCount: hardLeaning ? 12 : 10,
        rationale: isAdvanced
          ? `Timed set on ${w.subskill} — Hard mix, train top-end pacing.`
          : `Drill ${w.subskill} — ${w.misses} miss${
              w.misses === 1 ? "" : "es"
            } across ${w.sources.join(" + ")}.`,
        estimatedMinutes: hardLeaning ? 30 : 22,
      })
    }
  }

  // Review activity — surface the spaced queue
  if (wantReview) {
    const total = signals.pendingReviewTotal
    if (total > 0) {
      activities.push({
        kind: "review",
        href: "/review/all",
        itemKind: "any",
        targetCount: Math.min(15, Math.max(5, Math.round(total / 2))),
        rationale: `${total} item${total === 1 ? "" : "s"} due across the spaced queue.`,
        estimatedMinutes: Math.min(30, Math.max(10, total * 2)),
      })
    }
  }

  return activities
}

/**
 * Pick a drill for a given section from the curriculum outline. Walks
 * the outline in order (so different days surface different drills)
 * and rotates by week + day index.
 */
function pickDrillForSection(
  section: Section,
  outline: OutlineEntry[],
  weekIndex: number,
  day: number
): OutlineEntry | null {
  const drills = outline.filter((e) => e.kind === "drill" && e.section === section)
  if (drills.length === 0) return null
  const idx = (weekIndex * 7 + day) % drills.length
  return drills[idx]
}
