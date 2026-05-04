import { createSupabaseServer } from "@/lib/supabase/server"
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

  const body: SessionPayload = await request.json()

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
    !body.slug.startsWith("diagnostic-")
  ) {
    try {
      const currentLevels = getTopicSkillLevels(user.user_metadata)
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
        await supabase.auth.updateUser({
          data: { topic_skill_levels: nextLevels },
        })
      }
    } catch {
      // Non-fatal — adaptivity simply doesn't update for this session.
    }
  }

  return Response.json({ sessionId: session.id })
}
