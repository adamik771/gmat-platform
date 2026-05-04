import type { SupabaseClient } from "@supabase/supabase-js"

/**
 * Spaced-retrieval review queue.
 *
 * Implements the research-report spacing ladder:
 *
 *   same-day summary → 2 days → 7 days → 21 days → 42 days
 *
 * Each question carries a rung (0..4). Rung 0 is "due right now" — this is
 * where a question lands after a miss or after any brand-new attempt, so
 * the student re-sees it the same day. Each subsequent correct attempt
 * advances the rung; each wrong attempt resets to 0. The threshold gap
 * at the current rung defines when the question is next due:
 *
 *   rung 0 → 0d   (see it today — research-report "same day summary")
 *   rung 1 → 2d
 *   rung 2 → 7d
 *   rung 3 → 21d
 *   rung 4 → 42d  (stable — leaves the queue until this elapses)
 *
 * Priority = max(0, daysSinceLast - threshold) + repeat-miss bonus +
 * flagged bonus. Questions below threshold are filtered out UNLESS the
 * student flagged them during a mock — flags override the ladder so
 * student-selected items surface immediately.
 *
 * Retrieval practice on the exact questions a student has struggled with
 * is the strongest evidence-backed intervention in the learning-science
 * literature (Roediger & Karpicke 2006; Dunlosky 2013). The explicit
 * ladder replaces the prior continuous heuristic so the spacing matches
 * the report exactly and students can reason about *when* a question
 * will come back.
 */

/** Spacing ladder in days. Index = rung, value = days until next review. */
export const SPACING_LADDER_DAYS = [0, 2, 7, 21, 42] as const
export const MAX_RUNG = SPACING_LADDER_DAYS.length - 1

export interface ReviewCandidate {
  questionId: string
  section: "Quant" | "Verbal" | "DI"
  topic: string
  subtopic: string
  /** Total number of times the user has missed this question. */
  missCount: number
  /** Total attempts on this question. */
  attemptCount: number
  /** Was the most recent attempt correct? */
  lastCorrect: boolean
  /** Days since the most recent attempt (float, rounded to the nearest tenth). */
  daysSinceLastSeen: number
  /** Current rung on the spacing ladder (0..4). */
  rung: number
  /** Days until this rung's threshold elapses. Negative = overdue. */
  daysUntilDue: number
  /** Was this question flagged during a mock? Flagged questions get a
   *  priority boost so they surface sooner in the review queue. */
  flagged: boolean
  /** Computed priority score — higher = review sooner. */
  priority: number
}

interface RawAttempt {
  question_id: string
  section: "Quant" | "Verbal" | "DI" | string
  topic: string | null
  subtopic: string | null
  is_correct: boolean
  /** ISO timestamp of the parent practice session. */
  session_created_at: string | null
}

const SECTIONS = new Set<ReviewCandidate["section"]>(["Quant", "Verbal", "DI"])

/**
 * Walk an attempt history (chronological, oldest first) and return the
 * rung the question lands on. Each correct attempt advances one step
 * (capped at MAX_RUNG); each wrong attempt resets to rung 0 — the
 * research-report "difficult or unstable skills pulled back into the
 * queue sooner" rule.
 */
export function computeRung(correctnessInOrder: boolean[]): number {
  let rung = 0
  for (const correct of correctnessInOrder) {
    rung = correct ? Math.min(rung + 1, MAX_RUNG) : 0
  }
  return rung
}

function priorityFor(
  rung: number,
  daysSinceLast: number,
  missCount: number,
  flagged: boolean
): { priority: number; daysUntilDue: number } {
  const threshold = SPACING_LADDER_DAYS[rung]
  const daysUntilDue = threshold - daysSinceLast
  const overdueDays = Math.max(0, -daysUntilDue)
  // Main ranking: overdue-ness (days past the threshold). Small nudges
  // for repeat-missed items (3× per miss) and flagged items (+100) so
  // the queue still respects student signal but the ladder leads.
  const priority =
    overdueDays * 10 + missCount * 3 + (flagged ? 100 : 0)
  return { priority, daysUntilDue }
}

/**
 * Build the review queue for a user. Fetches up to the last ~12 weeks of
 * attempts (bounded so the payload stays small even for heavy studiers),
 * aggregates per-question, and returns the prioritized list.
 *
 * `flaggedQuestionIds` is an optional set of question ids the user has
 * flagged during a mock — those get an extra boost so they rise to the
 * top of the queue even if the student got them right.
 */
export async function getReviewQueue(
  supabase: SupabaseClient,
  userId: string,
  options: {
    limit?: number
    section?: ReviewCandidate["section"]
    flaggedQuestionIds?: Set<string>
  } = {}
): Promise<ReviewCandidate[]> {
  const { limit = 30, section, flaggedQuestionIds } = options

  const cutoff = new Date()
  cutoff.setDate(cutoff.getDate() - 84) // 12 weeks

  let query = supabase
    .from("practice_attempts")
    .select(
      "question_id, section, topic, subtopic, is_correct, practice_sessions(created_at)"
    )
    .eq("user_id", userId)
    .gte("practice_sessions.created_at", cutoff.toISOString())
    .order("practice_sessions(created_at)", { ascending: false })
    .limit(5000)

  if (section) query = query.eq("section", section)

  const { data, error } = await query
  if (error || !data) return []

  // Aggregate per question_id. Rows come newest-first so the first
  // occurrence is the latest attempt. We also collect the correctness
  // timeline (unshifted to keep chronological order) so the rung walker
  // can process the attempts from oldest → newest.
  const agg = new Map<
    string,
    {
      section: ReviewCandidate["section"]
      topic: string
      subtopic: string
      missCount: number
      attemptCount: number
      lastCorrect: boolean
      lastSeenIso: string | null
      /** Correctness in chronological order (oldest first). */
      correctnessChrono: boolean[]
    }
  >()

  for (const row of data as unknown as Array<
    RawAttempt & { practice_sessions: { created_at: string } | null }
  >) {
    const sectionValue = row.section as ReviewCandidate["section"]
    if (!SECTIONS.has(sectionValue)) continue
    const existing = agg.get(row.question_id)
    const sessionCreatedAt = row.practice_sessions?.created_at ?? null
    if (!existing) {
      agg.set(row.question_id, {
        section: sectionValue,
        topic: row.topic ?? "General",
        subtopic: row.subtopic ?? row.topic ?? "General",
        missCount: row.is_correct ? 0 : 1,
        attemptCount: 1,
        lastCorrect: row.is_correct,
        lastSeenIso: sessionCreatedAt,
        correctnessChrono: [row.is_correct],
      })
    } else {
      existing.attemptCount += 1
      if (!row.is_correct) existing.missCount += 1
      // Rows are newest-first, so the first pass already captured
      // lastCorrect and lastSeenIso. Prepend older attempts to keep the
      // chronological order oldest-first.
      existing.correctnessChrono.unshift(row.is_correct)
    }
  }

  const now = Date.now()
  const candidates: ReviewCandidate[] = []
  for (const [questionId, a] of agg) {
    const lastSeenMs = a.lastSeenIso ? Date.parse(a.lastSeenIso) : now
    const daysSinceLastSeen = Math.max(0, (now - lastSeenMs) / (1000 * 60 * 60 * 24))
    const flagged = flaggedQuestionIds?.has(questionId) ?? false
    const rung = computeRung(a.correctnessChrono)
    const { priority, daysUntilDue } = priorityFor(
      rung,
      daysSinceLastSeen,
      a.missCount,
      flagged
    )
    // Below-threshold items are hidden UNLESS flagged. This is the
    // whole point of the ladder — don't surface a question that's
    // inside its spacing window, the student has already earned the
    // time away from it.
    if (priority <= 0 && !flagged) continue
    candidates.push({
      questionId,
      section: a.section,
      topic: a.topic,
      subtopic: a.subtopic,
      missCount: a.missCount,
      attemptCount: a.attemptCount,
      lastCorrect: a.lastCorrect,
      daysSinceLastSeen: Math.round(daysSinceLastSeen * 10) / 10,
      rung,
      daysUntilDue: Math.round(daysUntilDue * 10) / 10,
      flagged,
      priority: Math.round(priority * 10) / 10,
    })
  }

  candidates.sort((a, b) => b.priority - a.priority)
  return candidates.slice(0, limit)
}

/**
 * Convenience: group a flat queue into per-section buckets so the /review
 * landing page can surface three Start-Review cards with per-section counts.
 */
export function bucketBySection(
  candidates: ReviewCandidate[]
): Record<ReviewCandidate["section"], ReviewCandidate[]> {
  const out: Record<ReviewCandidate["section"], ReviewCandidate[]> = {
    Quant: [],
    Verbal: [],
    DI: [],
  }
  for (const c of candidates) out[c.section].push(c)
  return out
}
