import { createSupabaseServer } from "@/lib/supabase/server"

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
  }))

  const { error: attemptError } = await supabase
    .from("practice_attempts")
    .insert(attempts)

  if (attemptError) {
    return Response.json({ error: attemptError.message }, { status: 500 })
  }

  return Response.json({ sessionId: session.id })
}
