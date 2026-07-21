import { createSupabaseServer } from "@/lib/supabase/server"
import { blockIfNoAccess } from "@/lib/entitlements"
import { dropBlankAttempts } from "@/lib/practice-save"
import { getUserStateForWrite, patchUserState } from "@/lib/user-state"
import {
  applySessionAttempts,
  getTopicSkillLevels,
} from "@/lib/topic-skill"
import type { Difficulty, Section } from "@/types"

interface AttemptPayload {
  questionId: string
  section: string
  topic: string
  subtopic: string
  difficulty: string
  questionType: string
  selectedAnswer: number | null
  isCorrect: boolean
  timeSpentMs: number
  /** Practice-only. Null for mock attempts (MockRunner doesn't collect it). */
  confidence?: "low" | "medium" | "high" | null
  /** Practice-only. 0 when not tracked (mock flow / no hints revealed). */
  hintsRevealed?: number
  /** Practice-only. Ms from question display to first interaction (click
   *  on option, hint reveal, or confidence pick). Null if the student
   *  submitted without touching anything (rare — timeout-like case). */
  firstInteractionMs?: number | null
  /** Practice-only. "desktop" / "tablet" / "mobile" derived from viewport
   *  at session-end. Same value for every attempt in a session; sent
   *  per-row so the column can be used without joining. */
  deviceType?: "desktop" | "tablet" | "mobile" | null
}

interface SessionPayload {
  slug: string
  topic: string
  section: string
  totalQuestions: number
  correctCount: number
  accuracy: number
  totalTimeMs: number
  attempts: AttemptPayload[]
}

/**
 * POST /api/practice-sessions — saves a completed practice session and its
 * per-question attempts to the database. Called by SessionClient when the
 * results screen is shown.
 */
export async function POST(request: Request) {
  const supabase = await createSupabaseServer()
  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser()

  if (authError || !user) {
    return Response.json({ error: "Unauthorized" }, { status: 401 })
  }

  const blocked = await blockIfNoAccess(supabase, user)
  if (blocked) return blocked

  let body: SessionPayload
  try {
    body = (await request.json()) as SessionPayload
  } catch {
    return Response.json({ error: "Invalid JSON body" }, { status: 400 })
  }

  // The payload is fully client-controlled — validate it. Reject clearly-bad
  // shapes and bound the numeric fields + attempts array so a tampered client
  // can't write fabricated or unbounded rows into the user's own history.
  const isStr = (v: unknown, max = 200): v is string =>
    typeof v === "string" && v.length > 0 && v.length <= max
  const intIn = (v: unknown, lo: number, hi: number): boolean =>
    typeof v === "number" && Number.isInteger(v) && v >= lo && v <= hi
  if (
    !isStr(body?.slug, 120) ||
    !isStr(body?.topic) ||
    !isStr(body?.section, 40) ||
    !intIn(body.totalQuestions, 0, 100) ||
    !intIn(body.correctCount, 0, body.totalQuestions) ||
    typeof body.accuracy !== "number" ||
    body.accuracy < 0 ||
    body.accuracy > 100 ||
    typeof body.totalTimeMs !== "number" ||
    !Number.isFinite(body.totalTimeMs) ||
    !Array.isArray(body.attempts) ||
    body.attempts.length > 100
  ) {
    return Response.json({ error: "Invalid session payload" }, { status: 400 })
  }

  // Time bounds are CLAMPED, not rejected: a suspended tab can bank hours
  // into one question and a clock step can go negative — rejecting would
  // fail the same payload on every retry and lose the student's session.
  const MAX_ATTEMPT_MS = 2 * 60 * 60_000
  const MAX_SESSION_MS = 12 * 60 * 60_000
  body = {
    ...body,
    totalTimeMs: Math.min(Math.max(body.totalTimeMs, 0), MAX_SESSION_MS),
    attempts: body.attempts.map((a) => ({
      ...a,
      timeSpentMs:
        typeof a.timeSpentMs === "number" && Number.isFinite(a.timeSpentMs)
          ? Math.min(Math.max(a.timeSpentMs, 0), MAX_ATTEMPT_MS)
          : 0,
    })),
  }

  // Stale-client guard: SessionClient now persists only submitted questions,
  // but a practice tab opened before that fix deployed still runs the old JS
  // and POSTs the untouched remainder of an abandoned session as blank
  // attempts (no answer, no time, scored wrong) — the rows that poison
  // per-topic accuracy and the review queue. Drop them here and recompute the
  // stored totals from what remains so total/correct/accuracy always agree.
  // Mock payloads are exempt on purpose: a timed-out mock records unanswered
  // as wrong for exam realism.
  if (!body.slug.startsWith("mock-")) {
    const summary = dropBlankAttempts(body.attempts)
    // Nothing answered — not worth a row (mirrors the client behaviour).
    if (!summary) return Response.json({ sessionId: null })
    body = {
      ...body,
      totalQuestions: summary.totalQuestions,
      correctCount: summary.correctCount,
      accuracy: summary.accuracy,
      attempts: summary.attempts,
    }
  }

  // Idempotency: a committed save whose RESPONSE was lost (network drop)
  // leads the client to retry the identical payload — without this check
  // every retry duplicated the session AND its attempts, inflating each
  // downstream metric. Identical (slug, totals, time) within 60s is that
  // retry, not a new session: total_time_ms is a ms-precision sum, so a
  // genuine collision is negligible.
  const dupeCutoff = new Date(Date.now() - 60_000).toISOString()
  const { data: recentDupe } = await supabase
    .from("practice_sessions")
    .select("id")
    .eq("user_id", user.id)
    .eq("slug", body.slug)
    .eq("total_questions", body.totalQuestions)
    .eq("correct_count", body.correctCount)
    .eq("total_time_ms", body.totalTimeMs)
    .gte("created_at", dupeCutoff)
    .limit(1)
    .maybeSingle()
  if (recentDupe) {
    // Guard against matching an attemptless orphan (a prior save whose
    // attempts insert failed after the session row landed): treating THAT
    // as the duplicate would silently discard this retry's attempts.
    const { count: dupeAttempts } = await supabase
      .from("practice_attempts")
      .select("id", { count: "exact", head: true })
      .eq("session_id", recentDupe.id)
    if ((dupeAttempts ?? 0) > 0) {
      return Response.json({ sessionId: recentDupe.id })
    }
    await supabase
      .from("practice_sessions")
      .delete()
      .eq("id", recentDupe.id)
      .eq("user_id", user.id)
  }

  // Insert the session-level record.
  const { data: session, error: sessionError } = await supabase
    .from("practice_sessions")
    .insert({
      user_id: user.id,
      slug: body.slug,
      topic: body.topic,
      section: body.section,
      total_questions: body.totalQuestions,
      correct_count: body.correctCount,
      accuracy: body.accuracy,
      total_time_ms: body.totalTimeMs,
    })
    .select("id")
    .single()

  if (sessionError) {
    return Response.json({ error: sessionError.message }, { status: 500 })
  }

  // Insert per-question attempts.
  const attempts = body.attempts.map((a) => ({
    session_id: session.id,
    user_id: user.id,
    question_id: a.questionId,
    section: a.section,
    topic: a.topic,
    subtopic: a.subtopic,
    difficulty: a.difficulty,
    question_type: a.questionType,
    selected_answer: a.selectedAnswer,
    is_correct: a.isCorrect,
    time_spent_ms: a.timeSpentMs,
    confidence: a.confidence ?? null,
    hints_revealed: a.hintsRevealed ?? 0,
    first_interaction_ms: a.firstInteractionMs ?? null,
    device_type: a.deviceType ?? null,
  }))

  const { error: attemptError } = await supabase
    .from("practice_attempts")
    .insert(attempts)

  if (attemptError) {
    // The session row already persisted above. Without cleanup, a failed
    // attempts insert leaves an orphaned session — the hub counts it as
    // "done" while the report has no attempts to show (the bug Adam hit live
    // when prod was missing the newer attempt columns). PostgREST gives no
    // multi-statement transaction here, so compensate by deleting the
    // just-created session. Best-effort: log (don't mask the original error)
    // if the cleanup is itself blocked (e.g. a missing owner-delete policy).
    const { error: cleanupError } = await supabase
      .from("practice_sessions")
      .delete()
      .eq("id", session.id)
      .eq("user_id", user.id)
    if (cleanupError) {
      console.error(
        `practice-sessions: failed to roll back orphaned session ${session.id} after attempts insert error:`,
        cleanupError.message
      )
    }
    return Response.json({ error: attemptError.message }, { status: 500 })
  }

  // Update the per-topic skill level so the next session orders
  // questions adaptively. This is best-effort — a failure here doesn't
  // fail the session save (the attempts are already persisted, which
  // is the important durability guarantee). Skips mock and diagnostic
  // slugs since those have their own selection logic and shouldn't
  // feed into the practice-set adaptivity loop.
  if (
    !body.slug.startsWith("mock-") &&
    !body.slug.startsWith("diagnostic-") &&
    !body.slug.startsWith("review-") &&
    !body.slug.startsWith("redo-") &&
    body.slug !== "custom"
  ) {
    try {
      // Error-aware read: skill levels are read-modify-written as one key.
      // On a failed read, skip the update (adaptivity just doesn't move this
      // session) rather than rebuilding the whole skill map from empty.
      const { state, errored } = await getUserStateForWrite(supabase, user)
      if (errored) throw new Error("state read failed")
      const currentLevels = getTopicSkillLevels(state)
      const updateAttempts = body.attempts
        .filter(
          (a) =>
            (a.section === "Quant" ||
              a.section === "Verbal" ||
              a.section === "DI") &&
            (a.difficulty === "Beginner" ||
              a.difficulty === "Intermediate" ||
              a.difficulty === "Advanced")
        )
        .map((a) => ({
          slug: body.slug,
          section: a.section as Section,
          difficulty: a.difficulty as Difficulty,
          isCorrect: a.isCorrect,
          timeSpentMs: a.timeSpentMs,
        }))
      if (updateAttempts.length > 0) {
        const nextLevels = applySessionAttempts(currentLevels, updateAttempts)
        await patchUserState(supabase, user, { topic_skill_levels: nextLevels })
      }
    } catch {
      // Non-fatal — adaptivity simply doesn't update for this session.
    }
  }

  // Milestone outreach (sequence E): on a practice set, enrol the signed-up
  // user and enqueue the "first practice" email. Deduped, so it fires exactly
  // once. Best-effort and isolated — never fails the save. The user id/email
  // come from the verified session (not the request body), so the service-role
  // write is safe.
  if (
    user.email &&
    !body.slug.startsWith("mock-") &&
    !body.slug.startsWith("diagnostic-") &&
    !body.slug.startsWith("review-") &&
    body.slug !== "custom"
  ) {
    try {
      const [{ getSupabaseService }, { isSubscribed }, { enqueueStep }] =
        await Promise.all([
          import("@/lib/supabase/service"),
          import("@/lib/outreach/consent"),
          import("@/lib/outreach/queue"),
        ])
      const service = getSupabaseService()
      // Milestone emails go ONLY to users who explicitly opted in (an existing
      // subscription). A practice session never creates consent on its own.
      if (await isSubscribed(service, user.email)) {
        const meta = (user.user_metadata ?? {}) as Record<string, unknown>
        const firstName =
          typeof meta.full_name === "string" && meta.full_name.trim()
            ? meta.full_name.trim().split(/\s+/)[0]
            : null
        await enqueueStep(service, {
          sequence: "milestone",
          step: "first-practice",
          email: user.email,
          userId: user.id,
          payload: { firstName },
        })
      }
    } catch {
      // milestone outreach is best-effort
    }
  }

  return Response.json({ sessionId: session.id })
}
