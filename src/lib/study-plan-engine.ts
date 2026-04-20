import type { SupabaseClient } from "@supabase/supabase-js"
import { getReviewQueue } from "./review-queue"
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
 * The engine leans on signals the platform already captures — diagnostic
 * completions, practice_attempts, the review queue, user_metadata target
 * + exam date — so adding it doesn't require new schema.
 */

const MIN_ATTEMPTS_FOR_WEAKNESS = 3
const WEAK_TOPIC_THRESHOLD = 0.7 // accuracy below this = flag as weak
const REVIEW_QUEUE_URGENT = 10 // if ≥ this many due, review-first

import { TOPIC_TO_CHAPTER } from "./topic-chapter-map"

export type FocusActionType =
  | "diagnostic"
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

export interface WeakArea {
  topic: string
  section: Section
  accuracy: number
  attempts: number
  chapterSlug: string | null
}

export type DailySuggestionType = "lesson" | "practice" | "review" | "chapter" | "mock"

export interface DailySuggestion {
  type: DailySuggestionType
  label: string
  href: string
}

export interface StudyPlanOutput {
  todaysFocus: FocusAction[]
  weakAreas: WeakArea[]
  diagnosticSectionsDone: number
  reviewDueCount: number
}

/**
 * Fetches the inputs the engine needs. Small bounded queries: diagnostic
 * completions, all practice_attempts for the user (capped via 12-week
 * review-queue source), and target/exam metadata that the caller can
 * pass in rather than re-querying.
 */
export async function computeStudyPlan(
  supabase: SupabaseClient,
  userId: string,
  opts: {
    targetScore: number | null
    examDate: string | null
  }
): Promise<StudyPlanOutput> {
  // Diagnostic completion state
  const { data: diagRows } = await supabase
    .from("practice_sessions")
    .select("slug")
    .eq("user_id", userId)
    .in("slug", ["diagnostic-quant", "diagnostic-verbal", "diagnostic-di"])
  const diagnosticSectionsDone = new Set(
    (diagRows ?? []).map((r) => r.slug as string)
  ).size

  // Review queue — the spaced-retrieval queue's length drives one arm of
  // the "what to do today" decision.
  const queue = await getReviewQueue(supabase, userId, { limit: 60 })
  const reviewDueCount = queue.length

  // Topic-level accuracy from all attempts. Bounded to 5k rows via the
  // review-queue helper would be ideal; here we take a broader view since
  // weak-area signals benefit from more history.
  const { data: attemptRows } = await supabase
    .from("practice_attempts")
    .select("section, topic, is_correct")
    .eq("user_id", userId)
    .limit(5000)

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
    .filter(([, v]) => v.total >= MIN_ATTEMPTS_FOR_WEAKNESS)
    .map(([topic, v]) => ({
      topic,
      section: v.section,
      accuracy: v.correct / v.total,
      attempts: v.total,
      chapterSlug: TOPIC_TO_CHAPTER[topic] ?? null,
    }))
    .filter((w) => w.accuracy < WEAK_TOPIC_THRESHOLD)
    .sort((a, b) => a.accuracy - b.accuracy)
    .slice(0, 3)

  // Today's focus — a ranked list, highest-impact first.
  const todaysFocus: FocusAction[] = []

  const daysUntilExam = opts.examDate
    ? Math.ceil(
        (new Date(opts.examDate).getTime() -
          new Date(new Date().toDateString()).getTime()) /
          86400000
      )
    : null

  // 1. Diagnostic if not complete — the highest-priority first action
  // since it seeds every downstream signal.
  if (diagnosticSectionsDone < 3) {
    todaysFocus.push({
      type: "diagnostic",
      title:
        diagnosticSectionsDone === 0
          ? "Take your diagnostic"
          : `Finish diagnostic (${diagnosticSectionsDone}/3 done)`,
      subtitle:
        "Sets a baseline score and tells the rest of your plan where to focus.",
      href: "/diagnostic",
      cta: diagnosticSectionsDone === 0 ? "Start" : "Continue",
      priority: 100,
    })
  }

  // 2. Review queue — retrieval practice is the single highest-leverage
  // intervention in the learning-science literature. Big queues outrank
  // everything except the diagnostic.
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

  // 4. Late-stage emphasis on mocks — if exam is close, nudge toward
  // full-length timed practice.
  if (daysUntilExam !== null && daysUntilExam > 0 && daysUntilExam <= 21) {
    todaysFocus.push({
      type: "mock",
      title: `Build a timed mock`,
      subtitle:
        daysUntilExam <= 7
          ? "Under a week out — simulate exam conditions every few days."
          : `${daysUntilExam} days to go. Mix timed mocks into your rotation.`,
      href: "/test-builder",
      cta: "Build test",
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
    diagnosticSectionsDone,
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
 */
export function buildWeeklyCadence(
  plan: StudyPlanOutput,
  nextLessons: Array<{ slug: string; title: string; module: number }>
): DailySuggestion[] {
  const days: DailySuggestion[] = []
  const lessonQueue = [...nextLessons]
  const weakQueue = plan.weakAreas.filter((w) => w.chapterSlug !== null)

  // Pattern: review first (if any), then weak-topic chapter, then lesson,
  // then fresh practice, cycling.
  const hasReview = plan.reviewDueCount > 0
  const hasWeakTopic = weakQueue.length > 0

  const pool: DailySuggestionType[] = []
  if (hasReview) pool.push("review")
  if (hasWeakTopic) pool.push("chapter")
  pool.push("lesson", "practice")

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
    } else if (choice === "lesson" && lessonQueue.length > 0) {
      const l = lessonQueue.shift()!
      days.push({
        type: "lesson",
        label: l.title,
        href: `/lessons/${l.slug}`,
      })
    } else {
      days.push({
        type: "practice",
        label: "Practice set",
        href: "/practice",
      })
    }
  }

  return days
}
