import type { SupabaseClient } from "@supabase/supabase-js"
import { getReviewQueue, type ReviewCandidate } from "./review-queue"
import type { Section } from "@/types"

/**
 * Adaptive Study Plan engine.
 *
 * Given a user's state, produces:
 *   - todaysFocus: a ranked list of 1-3 actions the student should take
 *     right now, prioritised by what will move the score fastest.
 *   - weakAreas: top topics by accuracy deficit, with chapter + practice
 *     CTAs — so the student knows *what* to fix, not just that they're
 *     weak generally.
 *   - weeklyCadence: a richer 7-day pattern that injects review days
 *     when the queue is large and weak-topic chapter days when they are.
 *
 * The engine leans on signals the platform already captures — official-exam baseline
 * completions, practice_attempts, the review queue, user_metadata target
 * + exam date — so adding it doesn't require new schema.
 */

const MIN_ATTEMPTS_FOR_WEAKNESS = 3
/** A topic needs at least this many MISSES before it can be called weak —
 *  one wrong answer out of three used to flag the topic and could headline
 *  Today's Focus off a single slip. */
const MIN_MISSES_FOR_WEAKNESS = 2
const WEAK_TOPIC_THRESHOLD = 0.7 // accuracy below this = flag as weak
const REVIEW_QUEUE_URGENT = 10 // if ≥ this many due, review-first

import { hoursBand } from "./study-hours"
import { daysUntil } from "./utils"
import { TOPIC_TO_CHAPTER, TOPIC_TO_SET } from "./topic-chapter-map"
import { ERROR_TAG_BY_ID, ROOT_CAUSE_BY_ID } from "@/app/(app)/error-log/constants"

export type FocusActionType =
  | "baseline"
  | "review"
  | "weak-topic-chapter"
  | "practice"
  | "mock"

export interface FocusAction {
  type: FocusActionType
  title: string
  subtitle: string
  href: string
  cta: string
  /** Higher = more important; used only for ordering. */
  priority: number
}

/**
 * Whether a weak topic's logged misses skew toward not knowing the
 * material vs. knowing it but slipping:
 *   - `conceptual` — gaps in understanding or strategy
 *   - `execution`  — careless slips, time pressure, misreads
 *   - `mixed`      — no majority, or too few tagged misses to call
 */
export type ErrorPattern = "conceptual" | "execution" | "mixed"

export interface WeakArea {
  topic: string
  section: Section
  accuracy: number
  attempts: number
  chapterSlug: string | null
  /** Question-bank set slug for the Drill CTA — the only slug family
   *  /practice/session resolves (chapter slugs 404 there). */
  setSlug: string | null
  /** Derived from the student's `error_tags` for this topic. */
  errorPattern: ErrorPattern
}

export type DailySuggestionType = "practice" | "review" | "chapter" | "mock"

export interface DailySuggestion {
  type: DailySuggestionType
  label: string
  href: string
}

export interface StudyPlanOutput {
  todaysFocus: FocusAction[]
  weakAreas: WeakArea[]
  reviewDueCount: number
}

/**
 * Map the platform's live error taxonomies into a conceptual-vs-execution
 * split. An `error_tags` row can carry a structured `tag` (ERROR_TAG_DEFS —
 * the WHAT / question-type family), a `root_cause` (ROOT_CAUSE_DEFS — the
 * WHY / which solve step broke), and/or a pre-framework legacy tag string.
 * We bucket all three so the classification works whichever vocabulary the
 * student tagged with.
 *
 *   conceptual = doesn't know it / wrong approach
 *   execution  = knows it but slips (careless, time pressure, misread)
 */
const CONCEPTUAL_TAG_FAMILIES = new Set<string>([
  "Knowledge",
  "Translation",
  "DI logic",
  "Reasoning",
  "Reading",
  "DI process",
])
const CONCEPTUAL_ROOT_FAMILIES = new Set<string>([
  "Knowledge",
  "Representation",
  "Strategy",
])
const LEGACY_TAG_BUCKET: Record<string, "conceptual" | "execution"> = {
  Conceptual: "conceptual",
  Strategy: "conceptual",
  Careless: "execution",
  "Time Pressure": "execution",
  Misread: "execution",
  // "Other" maps to neither — it must not tip the classification.
}

/** Need at least this many bucketed tags before we call a pattern. */
const MIN_TAGS_FOR_PATTERN = 2

/**
 * Bucket a single error_tags row. `root_cause` is the cleanest
 * conceptual-vs-execution signal (it literally encodes which solve step
 * broke), so it wins when present; otherwise fall back to the structured
 * tag family, then the legacy tag string. Returns null when the row maps
 * to neither bucket (e.g. legacy "Other").
 */
function bucketErrorRow(
  tag: string | null,
  rootCause: string | null
): "conceptual" | "execution" | null {
  if (rootCause) {
    const fam = ROOT_CAUSE_BY_ID[rootCause]?.family
    if (fam) return CONCEPTUAL_ROOT_FAMILIES.has(fam) ? "conceptual" : "execution"
  }
  if (tag) {
    const fam = ERROR_TAG_BY_ID[tag]?.family
    if (fam) return CONCEPTUAL_TAG_FAMILIES.has(fam) ? "conceptual" : "execution"
    const legacy = LEGACY_TAG_BUCKET[tag]
    if (legacy) return legacy
  }
  return null
}

/** Majority vote → pattern. A tie or too-few tags resolves to `mixed`. */
function classifyErrorPattern(
  conceptual: number,
  execution: number
): ErrorPattern {
  if (conceptual + execution < MIN_TAGS_FOR_PATTERN) return "mixed"
  if (conceptual > execution) return "conceptual"
  if (execution > conceptual) return "execution"
  return "mixed"
}

/**
 * Fetches the inputs the engine needs. Small bounded queries: all practice_attempts for the user (capped via 12-week
 * review-queue source), and target/exam metadata that the caller can
 * pass in rather than re-querying.
 */
export async function computeStudyPlan(
  supabase: SupabaseClient,
  userId: string,
  opts: {
    targetScore: number | null
    examDate: string | null
    flaggedQuestionIds?: Set<string>
    /** Entries in user_metadata.official_exam_scores — the official mba.com
     *  practice-exam scores the student has entered. 0 means no baseline yet. */
    officialExamCount?: number
    /** An already-fetched review queue (same params this engine would use).
     *  Lets a caller that also needs the queue — e.g. the dashboard, which
     *  renders the review widget — share a single fetch instead of paying for
     *  a second identical 12-week practice_attempts scan. */
    reviewQueue?: ReviewCandidate[]
  }
): Promise<StudyPlanOutput> {

  // Review queue — the spaced-retrieval queue's length drives one arm of
  // the "what to do today" decision. Reuse a caller-provided queue when given
  // (the params match), otherwise fetch it here. A failed read degrades to
  // an empty queue: the plan still renders, and the review surfaces carry
  // the honest error state.
  const queuePromise =
    opts.reviewQueue !== undefined
      ? Promise.resolve(opts.reviewQueue)
      : getReviewQueue(supabase, userId, {
          limit: 60,
          flaggedQuestionIds: opts.flaggedQuestionIds,
        }).then((queue) => queue ?? [])
  const attemptsPromise = supabase
    .from("practice_attempts")
    .select("id, section, topic, is_correct")
    .eq("user_id", userId)
    .limit(5000)
  const [queue, { data: attemptRows }] = await Promise.all([
    queuePromise,
    attemptsPromise,
  ])
  const reviewDueCount = queue.length

  // Topic-level accuracy from all attempts. Bounded to 5k rows via the
  // review-queue helper would be ideal; here we take a broader view since
  // weak-area signals benefit from more history.

  const topicStats = new Map<
    string,
    { section: Section; total: number; correct: number }
  >()
  for (const r of attemptRows ?? []) {
    const section = r.section as Section
    const topic = (r.topic as string | null) ?? "General"
    if (!topic) continue
    const key = topic
    const t = topicStats.get(key) ?? { section, total: 0, correct: 0 }
    t.total += 1
    if (r.is_correct) t.correct += 1
    topicStats.set(key, t)
  }

  const weakAreas: WeakArea[] = [...topicStats.entries()]
    .filter(
      ([, v]) =>
        v.total >= MIN_ATTEMPTS_FOR_WEAKNESS &&
        v.total - v.correct >= MIN_MISSES_FOR_WEAKNESS
    )
    .map(([topic, v]) => ({
      topic,
      section: v.section,
      accuracy: v.correct / v.total,
      attempts: v.total,
      chapterSlug: TOPIC_TO_CHAPTER[topic] ?? null,
      setSlug: TOPIC_TO_SET[topic] ?? null,
      errorPattern: "mixed" as ErrorPattern, // refined below from error_tags
    }))
    .filter((w) => w.accuracy < WEAK_TOPIC_THRESHOLD)
    .sort((a, b) => a.accuracy - b.accuracy)
    .slice(0, 3)

  // Differentiate conceptual gaps from execution errors per weak area,
  // using tags the student has already logged. Minimal IO: we reuse the
  // attempt rows already in memory to find wrong attempts in the (≤3)
  // weak topics, then pull only those rows' error_tags in one bounded
  // query. No new tables, no schema changes.
  if (weakAreas.length > 0) {
    const weakTopics = new Set(weakAreas.map((w) => w.topic))
    const attemptTopic = new Map<string, string>() // wrong attemptId → topic
    for (const r of attemptRows ?? []) {
      if (r.is_correct) continue
      const topic = (r.topic as string | null) ?? "General"
      if (!weakTopics.has(topic)) continue
      attemptTopic.set(r.id as string, topic)
    }
    const incorrectIds = [...attemptTopic.keys()]
    if (incorrectIds.length > 0) {
      const { data: tagRows } = await supabase
        .from("error_tags")
        .select("attempt_id, tag, root_cause")
        .eq("user_id", userId)
        .in("attempt_id", incorrectIds)

      const counts = new Map<
        string,
        { conceptual: number; execution: number }
      >()
      for (const t of tagRows ?? []) {
        const topic = attemptTopic.get(t.attempt_id as string)
        if (!topic) continue
        const bucket = bucketErrorRow(
          (t.tag as string | null) ?? null,
          (t.root_cause as string | null) ?? null
        )
        if (!bucket) continue
        const c = counts.get(topic) ?? { conceptual: 0, execution: 0 }
        c[bucket] += 1
        counts.set(topic, c)
      }
      for (const w of weakAreas) {
        const c = counts.get(w.topic)
        if (c) w.errorPattern = classifyErrorPattern(c.conceptual, c.execution)
      }
    }
  }

  // Today's focus — a ranked list, highest-impact first.
  const todaysFocus: FocusAction[] = []

  // Local-midnight parse — the shared helper exists because the naive
  // `new Date("YYYY-MM-DD")` (UTC midnight) countdown was off by one in
  // positive-offset timezones. Every exam countdown must use this.
  const daysUntilExam = daysUntil(opts.examDate)

  // 1. Official baseline if none entered — the highest-priority first action.
  // The baseline is a real mba.com practice exam taken under exam conditions;
  // the student enters the score on the Mock page.
  if ((opts.officialExamCount ?? 0) === 0) {
    todaysFocus.push({
      type: "baseline",
      title: "Set your baseline — Official Practice Exam 1",
      subtitle:
        "Take it on mba.com under full exam conditions, then enter your score here. It anchors your plan and your trend.",
      href: "/mock",
      cta: "Open exam plan",
      priority: 100,
    })
  }

  // 2. Review queue — retrieval practice is the single highest-leverage
  // intervention in the learning-science literature. Big queues outrank
  // everything except the missing-baseline nudge.
  if (reviewDueCount >= REVIEW_QUEUE_URGENT) {
    todaysFocus.push({
      type: "review",
      title: `Review ${reviewDueCount} questions in your queue`,
      subtitle:
        "Spaced retrieval on items you've missed before — strongest memory gains.",
      href: "/review",
      cta: "Start review",
      priority: 90,
    })
  } else if (reviewDueCount >= 3) {
    todaysFocus.push({
      type: "review",
      title: `Quick review — ${reviewDueCount} due`,
      subtitle: "Short retrieval warm-up before today's main work.",
      href: "/review",
      cta: "Review",
      priority: 60,
    })
  }

  // 3. Weak-topic chapter — send the student to the chapter most likely
  // to move their score, if we have one.
  const topWeak = weakAreas[0]
  if (topWeak && topWeak.chapterSlug) {
    todaysFocus.push({
      type: "weak-topic-chapter",
      title: `Read the ${topWeak.topic} chapter`,
      subtitle: `You're at ${Math.round(topWeak.accuracy * 100)}% on ${topWeak.attempts} ${topWeak.topic} questions — the chapter drills the exact patterns you're missing.`,
      href: `/chapters/${topWeak.chapterSlug}`,
      cta: "Open chapter",
      priority: 75,
    })
  }

  // 4. Late-stage emphasis on mocks — but only until the final week.
  // Inside 7 days the advice flips to taper: GMAC's own guidance and the
  // product's exam roadmap both say no full-length mocks in the final
  // week (this card used to contradict the roadmap one click away).
  if (daysUntilExam !== null && daysUntilExam > 0 && daysUntilExam <= 7) {
    todaysFocus.push({
      type: "review",
      title: "Final week — taper",
      subtitle:
        "No more full-length mocks (matches your exam plan). Short timed sections and your review queue only.",
      href: "/review",
      cta: "Open review",
      priority: 55,
    })
  } else if (daysUntilExam !== null && daysUntilExam > 7 && daysUntilExam <= 21) {
    todaysFocus.push({
      type: "mock",
      title: `Run a timed mock`,
      subtitle: `${daysUntilExam} days to go. Mix timed mocks into your rotation.`,
      href: "/mock",
      cta: "Go to mocks",
      priority: 55,
    })
  }

  // 5. Fallback: plain practice, if nothing else landed or we want to
  // fill out the "Today's focus" list.
  if (todaysFocus.length === 0) {
    todaysFocus.push({
      type: "practice",
      title: "Run a practice set",
      subtitle:
        "Pick a topic and drill 10-15 questions. Misses will feed tomorrow's review queue.",
      href: "/practice",
      cta: "Practice",
      priority: 30,
    })
  }

  todaysFocus.sort((a, b) => b.priority - a.priority)

  return {
    todaysFocus: todaysFocus.slice(0, 3),
    weakAreas,
    reviewDueCount,
  }
}

/**
 * Turn the engine's signals into a 7-day calendar-cell suggestion set.
 * Replaces the prior fixed lesson→practice→practice→review rotation with
 * logic that:
 *   - injects review days whenever the queue is large
 *   - injects weak-topic chapter days when weak areas exist
 *   - falls back to practice when nothing else applies
 *
 * `weeklyHours` (the onboarding target) shapes the week when provided:
 *   - low band: weak-area work leads the rotation — scarce hours go to the
 *     highest-leverage gap first
 *   - high band: the last day becomes a light review/rest day so a
 *     high-volume week has a scheduled recovery point
 */
export function buildWeeklyCadence(
  plan: StudyPlanOutput,
  nextReadings: Array<{ slug: string; title: string }>,
  weeklyHours?: number | null
): DailySuggestion[] {
  const days: DailySuggestion[] = []
  // Next chapters on the guided path (the lessons library is deprecated —
  // chapter reads are the reading unit of the curriculum).
  const readingQueue = [...nextReadings]
  const weakQueue = plan.weakAreas.filter((w) => w.chapterSlug !== null)

  // Pattern: review first (if any), then weak-topic chapter, then the next
  // guided-path chapter read, then fresh practice, cycling.
  const hasReview = plan.reviewDueCount > 0
  const hasWeakTopic = weakQueue.length > 0
  const band = typeof weeklyHours === "number" ? hoursBand(weeklyHours) : null

  const pool: Array<DailySuggestionType | "reading"> = []
  if (hasReview) pool.push("review")
  if (hasWeakTopic) pool.push("chapter")
  pool.push("reading", "practice")
  // An urgent queue earns a second weekly review slot — one slot in a
  // 4-item rotation means ~2 review days/week, which can't drain a
  // backlog that regrows on the ladder's 2-day rung.
  if (hasReview && plan.reviewDueCount >= REVIEW_QUEUE_URGENT) {
    pool.push("review")
  }
  if (band === "low" && hasWeakTopic) {
    pool.splice(pool.indexOf("chapter"), 1)
    pool.unshift("chapter")
  }

  for (let i = 0; i < 7; i++) {
    const choice = pool[i % pool.length]
    if (choice === "review") {
      days.push({
        type: "review",
        label: `Review ${plan.reviewDueCount} due`,
        href: "/review",
      })
    } else if (choice === "chapter" && weakQueue.length > 0) {
      const w = weakQueue.shift()!
      days.push({
        type: "chapter",
        label: w.topic,
        href: `/chapters/${w.chapterSlug}`,
      })
    } else if (choice === "reading" && readingQueue.length > 0) {
      const r = readingQueue.shift()!
      days.push({
        type: "chapter",
        label: r.title,
        href: `/chapters/${r.slug}`,
      })
    } else {
      days.push({
        type: "practice",
        label: "Practice set",
        href: "/practice",
      })
    }
  }

  if (band === "high") {
    // Scheduled recovery: at 15+ hrs/week the marginal day of fresh material
    // costs more (burnout) than it earns — close the week light.
    days[6] = {
      type: "review",
      label: "Light review + rest",
      href: "/review",
    }
  }

  return days
}

/**
 * Pick the guided-path chapters to recommend, **respecting where the student
 * actually is** rather than the first gap in fixed order.
 *
 * The old logic was `incompleteChapters[0]`, which pinned the FIRST incomplete
 * chapter as "Up next" forever — so a single section left unread in chapter 1
 * kept "Welcome to the GMAT" as the recommendation even after the student had
 * finished a dozen later chapters (it felt like the plan wasn't tracking them).
 *
 * Instead: find the furthest chapter the student has engaged with (any section
 * read), and recommend forward from there — continue that chapter if it's
 * incomplete, else the next incomplete chapter after it. Chapters they skipped
 * *before* their furthest point aren't lost — they fall to the end of the
 * reading queue and only become "Up next" once everything forward is done.
 *
 * Pure and generic over the chapter type so it's unit-testable; preserves the
 * original objects so the page keeps full chapter fields (section, summary…).
 */
export function pickNextChapters<T>(
  chapters: T[],
  isRead: (c: T) => boolean,
  isEngaged: (c: T) => boolean
): { nextUp: T | null; upcoming: T[]; readingQueue: T[]; skippedEarlier: T[] } {
  // Highest index the student has touched. -1 (untouched) -> start at 0, so a
  // brand-new student still gets chapter 1 as "Up next".
  let furthest = -1
  chapters.forEach((c, i) => {
    if (isEngaged(c)) furthest = i
  })
  const start = Math.max(0, furthest)
  const forward = chapters.slice(start).filter((c) => !isRead(c))
  const skippedEarlier = chapters.slice(0, start).filter((c) => !isRead(c))
  return {
    nextUp: forward[0] ?? skippedEarlier[0] ?? null,
    upcoming: forward.slice(0, 3),
    // Forward work first; skipped-earlier chapters appended so they're covered
    // by the weekly cadence eventually but never hijack the headline.
    readingQueue: [...forward, ...skippedEarlier],
    skippedEarlier,
  }
}
