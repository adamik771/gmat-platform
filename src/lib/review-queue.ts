import type { SupabaseClient } from "@supabase/supabase-js"

/**
 * Spaced-retrieval review queue.
 *
 * Given a user's past practice attempts, returns the questions they should
 * review next — prioritized by recency of error, total miss count, and time
 * since the question was last seen. Retrieval practice on the exact questions
 * a student has struggled with is the strongest evidence-backed intervention
 * in the learning-science literature (Roediger & Karpicke 2006; Dunlosky 2013).
 *
 * The priority formula intentionally stays simple so it's easy to reason
 * about and tune. A per-question score is:
 *
 *   priority = recentMissBoost + repeatMissBoost + spacingBoost
 *
 * where:
 *   recentMissBoost = 100 * max(0, 1 - daysSinceLastAttempt / 14)  if last attempt was wrong, else 0
 *   repeatMissBoost = 20 * totalMissCount
 *   spacingBoost    = 5 * min(daysSinceLastAttempt / 7, 3)
 *
 * Questions the user has never attempted are NOT in the queue — they belong
 * in fresh practice, not review. Callers can surface "new" questions through
 * the normal Practice route.
 */

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

function priorityFor(
  lastCorrect: boolean,
  daysSinceLast: number,
  missCount: number
): number {
  const recentMissBoost = lastCorrect ? 0 : 100 * Math.max(0, 1 - daysSinceLast / 14)
  const repeatMissBoost = 20 * missCount
  const spacingBoost = 5 * Math.min(daysSinceLast / 7, 3)
  return recentMissBoost + repeatMissBoost + spacingBoost
}

/**
 * Build the review queue for a user. Fetches up to the last ~12 weeks of
 * attempts (bounded so the payload stays small even for heavy studiers),
 * aggregates per-question, and returns the prioritized list.
 */
export async function getReviewQueue(
  supabase: SupabaseClient,
  userId: string,
  options: { limit?: number; section?: ReviewCandidate["section"] } = {}
): Promise<ReviewCandidate[]> {
  const { limit = 30, section } = options

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

  // Aggregate per question_id: attempts come in newest-first, so the first
  // occurrence of any question_id tells us the most recent attempt.
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
      })
    } else {
      existing.attemptCount += 1
      if (!row.is_correct) existing.missCount += 1
      // Rows are newest-first, so the first pass already captured lastCorrect
      // and lastSeenIso — nothing to update.
    }
  }

  const now = Date.now()
  const candidates: ReviewCandidate[] = []
  for (const [questionId, a] of agg) {
    const lastSeenMs = a.lastSeenIso ? Date.parse(a.lastSeenIso) : now
    const daysSinceLastSeen = Math.max(0, (now - lastSeenMs) / (1000 * 60 * 60 * 24))
    const priority = priorityFor(a.lastCorrect, daysSinceLastSeen, a.missCount)
    if (priority <= 0) continue // never missed + freshly seen = skip
    candidates.push({
      questionId,
      section: a.section,
      topic: a.topic,
      subtopic: a.subtopic,
      missCount: a.missCount,
      attemptCount: a.attemptCount,
      lastCorrect: a.lastCorrect,
      daysSinceLastSeen: Math.round(daysSinceLastSeen * 10) / 10,
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
