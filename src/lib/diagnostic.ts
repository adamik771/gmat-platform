import {
  getQuestionsBySection,
  getQuestionsByIds,
  type ParsedQuestion,
} from "./content"
import { DIAGNOSTIC_QUESTION_IDS } from "./diagnostic-curation"
import { accuracyToScore } from "./scoring"
import { TOPIC_TO_CHAPTER } from "./topic-chapter-map"
import type { Difficulty, Section } from "@/types"

/** Re-exported for backward compatibility with existing imports. */
export { accuracyToScore }

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
 * Deterministic question pick.
 *
 * Strategy: prefer the curated list in `diagnostic-curation.ts` — it's
 * been tuned for difficulty stratification, topic coverage, and trap
 * variety. If any curated id is missing (e.g. a question was edited or
 * the file slug changed), we fall through to the legacy stratified
 * picker so the diagnostic always returns a usable set.
 */
export function pickDiagnosticQuestions(section: Section): ParsedQuestion[] {
  // First-choice path: resolve the curated list. We require ALL ids to
  // resolve before using it — partial curation would silently degrade
  // diagnostic quality.
  const curatedIds = DIAGNOSTIC_QUESTION_IDS[section] ?? []
  if (curatedIds.length === DIAGNOSTIC_PER_SECTION) {
    const curated = getQuestionsByIds(curatedIds).filter(
      (q) => q.options.length > 0 || q.twoPartColumns
    )
    if (curated.length === DIAGNOSTIC_PER_SECTION) return curated
  }

  // Fallback: stratified pick from the section pool.
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

export interface SectionOrderRecommendation {
  /** Recommended section order for mocks + test day. */
  order: Section[]
  /** Short copy explaining why — surfaces under the recommendation. */
  rationale: string
  /** Whether this recommendation is trustworthy. False when the
   *  diagnostic is partial or the spread between sections is too small
   *  to matter. */
  confident: boolean
}

/**
 * Compute a section-order recommendation from diagnostic results.
 * PDF framework p.7: the diagnostic should output a "section-order
 * hypothesis" for the student to test on their first mock.
 *
 * Default heuristic: put the *weakest* section first.
 *   - You're freshest at the start — give your hardest section your
 *     best cognitive state.
 *   - The strongest section goes last — fatigue hits less-prepared
 *     material hardest, and you can coast on mastery when tired.
 *   - The middle section is whatever's left.
 *
 * The recommendation is marked not-confident if:
 *   - fewer than 3 sections are complete (partial diagnostic)
 *   - the accuracy spread across sections is < 10 percentage points
 *     (the order probably doesn't matter much)
 */
export function computeSectionOrderRecommendation(
  sections: SectionResult[]
): SectionOrderRecommendation | null {
  if (sections.length < 3) return null

  const sorted = [...sections].sort((a, b) => a.accuracy - b.accuracy)
  const weakest = sorted[0]
  const middle = sorted[1]
  const strongest = sorted[2]
  const spread = strongest.accuracy - weakest.accuracy

  const order: Section[] = [weakest.section, middle.section, strongest.section]

  if (spread < 0.1) {
    return {
      order,
      rationale: `Your sections are within ${Math.round(spread * 100)}% of each other — any order will work. Default to ${order[0]} first out of habit so you commit to one ordering across mocks.`,
      confident: false,
    }
  }

  const weakestPct = Math.round(weakest.accuracy * 100)
  const strongestPct = Math.round(strongest.accuracy * 100)
  return {
    order,
    rationale: `${weakest.section} came in weakest (${weakestPct}%), ${strongest.section} strongest (${strongestPct}%). Start with ${weakest.section} while you're fresh — that's where the biggest point gains live. Save ${strongest.section} for last, where fatigue hurts you least.`,
    confident: true,
  }
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
    ? Math.max(
        205,
        Math.min(
          805,
          205 +
            Math.round(
              (sections.reduce((acc, s) => acc + s.score, 0) / sections.length - 205) / 10,
            ) * 10,
        ),
      )
    : 205

  return { takenAt, sections, totalScore }
}

// ============================================================
// Enhanced report — surfaces sub-skills, trap patterns, timing,
// and chapter recommendations for a personalized study path.
// ============================================================

/** A specific sub-skill (subtopic) the student is weak on, with attempt counts. */
export interface SubskillResult {
  subskill: string
  topic: string
  section: Section
  attempts: number
  correct: number
  accuracy: number
}

/** A trap pattern the student fell into one or more times. */
export interface TrapPattern {
  /** Trap text from the question's `common_trap` field, or a derived label. */
  trap: string
  /** How many times the student fell into this trap. */
  occurrences: number
  /** Source: which questions exhibited this trap. */
  questionIds: string[]
  /** The named-trap-type slug from the curriculum, when available. */
  trapType?: string
}

/** Per-section behavioural-timing analysis. Mirrors the analytics page taxonomy. */
export type TimingPattern = "efficient" | "rushed" | "labored" | "stuck" | "mixed"

export interface TimingAnalysis {
  section: Section
  /** Average time per question, in milliseconds. Undefined if no timing data. */
  avgTimeMs: number | null
  /** Median time per question. More robust than average for small samples. */
  medianTimeMs: number | null
  /** # of questions answered in < 30 seconds (likely guessing). */
  rushedCount: number
  /** # of questions taking > 180 seconds (likely stuck). */
  laboredCount: number
  /** Behavioral pattern label that drives study-plan recommendations. */
  pattern: TimingPattern
  /** Plain-English summary of the pattern. */
  summary: string
}

/** A chapter recommendation generated from the diagnostic results. */
export interface ChapterRecommendation {
  /** Chapter slug — routes to /chapters/{slug} OR /guides/{slug}. */
  chapterSlug: string
  /** Human-readable name (matches the topic the student missed on). */
  title: string
  /** Section the chapter belongs to. */
  section: Section
  /** Why this chapter was recommended (trap, weak subskill, low accuracy, ...). */
  reason: string
  /** Higher = more important. Used for ordering in the study plan. */
  priority: number
  /** When the chapter is the primary fix for a chain of missed questions, list them. */
  drivingQuestionIds: string[]
}

/** The full enhanced diagnostic report, layered on top of the basic one. */
export interface EnhancedDiagnosticReport extends DiagnosticReport {
  /** Sub-skills sorted weakest-first across all sections (capped at 8). */
  weakSubskills: SubskillResult[]
  /** Trap patterns the student fell into, sorted by occurrence count. */
  trapPatterns: TrapPattern[]
  /** Per-section timing analysis. */
  timingAnalysis: TimingAnalysis[]
  /** Chapters to read next, ordered by priority. */
  recommendedChapters: ChapterRecommendation[]
}

/**
 * Pacing thresholds (ms) by section. Used to label individual attempts
 * as rushed (likely guessing) or labored (likely stuck). Aligned with
 * the elite-scorer time budgets in QUESTION_TAXONOMY.md.
 */
const TIMING_THRESHOLDS: Record<Section, { rushedMs: number; laboredMs: number }> = {
  Quant: { rushedMs: 30_000, laboredMs: 180_000 },
  Verbal: { rushedMs: 30_000, laboredMs: 180_000 },
  DI: { rushedMs: 30_000, laboredMs: 210_000 },
}

const SUBSKILL_MIN_ATTEMPTS = 1 // diagnostic is small; even 1 miss surfaces a signal
const SUBSKILL_WEAKNESS_THRESHOLD = 0.5 // sub-skill is "weak" if <50% on it

/**
 * Compute the median of a numeric array. Returns null for empty inputs.
 */
function median(xs: number[]): number | null {
  if (xs.length === 0) return null
  const sorted = [...xs].sort((a, b) => a - b)
  const mid = Math.floor(sorted.length / 2)
  return sorted.length % 2 === 0
    ? (sorted[mid - 1] + sorted[mid]) / 2
    : sorted[mid]
}

/**
 * Label a section's behavioral timing pattern. The labels match the
 * `/analytics` page so the UI vocabulary is consistent.
 */
function classifyTimingPattern(
  rushedCount: number,
  laboredCount: number,
  totalCount: number
): TimingPattern {
  if (totalCount === 0) return "efficient"
  const rushedRate = rushedCount / totalCount
  const laboredRate = laboredCount / totalCount
  // > 30% rushed and >30% labored → mixed (chaotic pacing)
  if (rushedRate > 0.3 && laboredRate > 0.3) return "mixed"
  // > 30% rushed → rushed (skipping past hard questions)
  if (rushedRate > 0.3) return "rushed"
  // > 50% labored → stuck (severe). Checked BEFORE the 30% labored band,
  // which would otherwise shadow it and make "stuck" unreachable.
  if (laboredRate > 0.5) return "stuck"
  // > 30% labored → labored (sinking time on hard questions)
  if (laboredRate > 0.3) return "labored"
  return "efficient"
}

/**
 * Enhanced report — adds weak sub-skills, trap patterns, timing analysis,
 * and chapter recommendations on top of the basic per-section report.
 *
 * Caller passes in the parsed questions so the builder can read each
 * question's `commonTrap`, `relatedReading`, `topic`, `subtopic`, and
 * `trapType` fields. Questions that don't match any attempt are ignored.
 */
export function buildEnhancedReport(
  attempts: DiagnosticAttempt[],
  questions: ParsedQuestion[],
  takenAt: string = new Date().toISOString()
): EnhancedDiagnosticReport {
  const base = buildReport(attempts, takenAt)
  const byId = new Map<string, ParsedQuestion>()
  for (const q of questions) byId.set(q.id, q)

  // ---------- Weak sub-skills ----------
  // Group attempts by (section, subtopic) — falls back to topic when
  // subtopic equals topic. Surface the worst-performing sub-skills first.
  const subskillStats = new Map<
    string,
    { section: Section; topic: string; subskill: string; total: number; correct: number }
  >()
  for (const a of attempts) {
    const subskill = a.subtopic && a.subtopic !== a.topic ? a.subtopic : a.topic
    const key = `${a.section}::${subskill}`
    const t =
      subskillStats.get(key) ??
      { section: a.section, topic: a.topic, subskill, total: 0, correct: 0 }
    t.total += 1
    if (a.isCorrect) t.correct += 1
    subskillStats.set(key, t)
  }
  const weakSubskills: SubskillResult[] = [...subskillStats.values()]
    .filter((s) => s.total >= SUBSKILL_MIN_ATTEMPTS)
    .map((s) => ({
      subskill: s.subskill,
      topic: s.topic,
      section: s.section,
      attempts: s.total,
      correct: s.correct,
      accuracy: s.correct / s.total,
    }))
    .filter((s) => s.accuracy < SUBSKILL_WEAKNESS_THRESHOLD)
    .sort((a, b) => a.accuracy - b.accuracy || b.attempts - a.attempts)
    .slice(0, 8)

  // ---------- Trap patterns ----------
  // For each *missed* attempt, find the question's `commonTrap` (or
  // `trapType` slug) and aggregate by occurrence. Skip attempts the
  // student got right — falling into a trap requires having missed.
  const trapByLabel = new Map<string, TrapPattern>()
  for (const a of attempts) {
    if (a.isCorrect) continue
    const q = byId.get(a.questionId)
    const label = q?.commonTrap || q?.trapType
    if (!label) continue
    const existing =
      trapByLabel.get(label) ??
      { trap: label, occurrences: 0, questionIds: [], trapType: q?.trapType }
    existing.occurrences += 1
    existing.questionIds.push(a.questionId)
    trapByLabel.set(label, existing)
  }
  const trapPatterns: TrapPattern[] = [...trapByLabel.values()]
    .sort((a, b) => b.occurrences - a.occurrences)
    .slice(0, 6)

  // ---------- Timing analysis ----------
  const timingAnalysis: TimingAnalysis[] = []
  for (const section of DIAGNOSTIC_SECTIONS) {
    const sectionAttempts = attempts.filter(
      (a) => a.section === section && typeof a.timeSpentMs === "number"
    )
    if (sectionAttempts.length === 0) continue
    const times = sectionAttempts.map((a) => a.timeSpentMs as number)
    const thresholds = TIMING_THRESHOLDS[section]
    const rushedCount = times.filter((t) => t < thresholds.rushedMs).length
    const laboredCount = times.filter((t) => t > thresholds.laboredMs).length
    const avgTimeMs = times.reduce((a, b) => a + b, 0) / times.length
    const medianTimeMs = median(times)
    const pattern = classifyTimingPattern(
      rushedCount,
      laboredCount,
      sectionAttempts.length
    )
    const summary = describeTimingPattern(pattern, rushedCount, laboredCount, sectionAttempts.length)
    timingAnalysis.push({
      section,
      avgTimeMs,
      medianTimeMs,
      rushedCount,
      laboredCount,
      pattern,
      summary,
    })
  }

  // ---------- Chapter recommendations ----------
  // Three sources, in priority order:
  //   (1) Trap-pattern-driven: a recurring trap → its parent reading chapter
  //   (2) Weak-subskill-driven: a sub-skill <50% → topic chapter
  //   (3) Per-section weak-topic from the basic report (fallback)
  const recsByChapter = new Map<string, ChapterRecommendation>()
  const upsert = (rec: ChapterRecommendation) => {
    const existing = recsByChapter.get(rec.chapterSlug)
    if (!existing) {
      recsByChapter.set(rec.chapterSlug, rec)
      return
    }
    // Keep the higher priority + merge driving questions.
    existing.priority = Math.max(existing.priority, rec.priority)
    existing.drivingQuestionIds = Array.from(
      new Set([...existing.drivingQuestionIds, ...rec.drivingQuestionIds])
    )
    if (rec.priority >= existing.priority) {
      existing.reason = rec.reason
    }
  }

  // (1) Trap-driven recommendations. Walk each missed question, pull its
  // relatedReading slug, and credit it back to a chapter recommendation.
  for (const trap of trapPatterns) {
    for (const qid of trap.questionIds) {
      const q = byId.get(qid)
      if (!q?.relatedReading) continue
      const section = q.section
      upsert({
        chapterSlug: q.relatedReading,
        title: trap.trap.length > 60 ? `${trap.trap.slice(0, 57)}…` : trap.trap,
        section,
        reason: `You fell into "${trap.trap}" ${trap.occurrences > 1 ? `${trap.occurrences} times` : "once"}. This chapter teaches the recognition signal.`,
        priority: 90 + Math.min(trap.occurrences * 2, 8),
        drivingQuestionIds: [qid],
      })
    }
  }

  // (2) Weak-subskill recommendations. Use TOPIC_TO_CHAPTER as a fallback
  // map when a question doesn't carry relatedReading explicitly.
  for (const sub of weakSubskills) {
    const slug = TOPIC_TO_CHAPTER[sub.topic]
    if (!slug) continue
    upsert({
      chapterSlug: slug,
      title: sub.topic,
      section: sub.section,
      reason: `You're at ${Math.round(sub.accuracy * 100)}% on ${sub.subskill === sub.topic ? sub.topic : `${sub.subskill} (${sub.topic})`}. Read this chapter before drilling.`,
      priority: 70 + Math.round((1 - sub.accuracy) * 20),
      drivingQuestionIds: [],
    })
  }

  // (3) Section weak-topic fallback. Ensures we always recommend at least
  // one chapter per section the student took.
  for (const sec of base.sections) {
    for (const wt of sec.weakTopics.slice(0, 1)) {
      const slug = TOPIC_TO_CHAPTER[wt.topic]
      if (!slug) continue
      upsert({
        chapterSlug: slug,
        title: wt.topic,
        section: sec.section,
        reason: `Section weak point — ${Math.round(wt.accuracy * 100)}% on ${wt.attempts} ${wt.topic} questions.`,
        priority: 50,
        drivingQuestionIds: [],
      })
    }
  }

  const recommendedChapters = [...recsByChapter.values()]
    .sort((a, b) => b.priority - a.priority)
    .slice(0, 6)

  return {
    ...base,
    weakSubskills,
    trapPatterns,
    timingAnalysis,
    recommendedChapters,
  }
}

/**
 * Plain-English summary of a timing pattern, customized to the rushed/
 * labored counts. Surfaces in the report panel.
 */
function describeTimingPattern(
  pattern: TimingPattern,
  rushedCount: number,
  laboredCount: number,
  total: number
): string {
  switch (pattern) {
    case "efficient":
      return `Pacing looked solid — ${rushedCount} rushed and ${laboredCount} labored out of ${total}. Keep this rhythm on test day.`
    case "rushed":
      return `${rushedCount} of ${total} questions answered in under 30 seconds — likely guessing. Slow down on the first read; the prompt usually tells you the method.`
    case "labored":
      return `${laboredCount} of ${total} questions took over 3 minutes. You're solving — but the question budget is ~2 minutes. Practice 30-second checkpoints and decide to skip when stuck.`
    case "stuck":
      return `${laboredCount} of ${total} questions took 3+ minutes — pacing is the dominant problem. Drill timed sets at 90 seconds with hard skip-after-checkpoint rules.`
    case "mixed":
      return `Pacing is uneven — ${rushedCount} rushed and ${laboredCount} labored out of ${total}. Likely two failure modes: guessing early when uncomfortable and over-investing when committed. Stabilize first with timed sets.`
  }
}
