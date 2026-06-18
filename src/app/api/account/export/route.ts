import { createSupabaseServer } from "@/lib/supabase/server"
import { getUserState } from "@/lib/user-state"

// Always fresh — this is the signed-in user's own data.
export const dynamic = "force-dynamic"

/**
 * GET /api/account/export — GDPR data-portability. Returns everything the
 * platform holds about the signed-in user as a single JSON download.
 *
 * Reads run through the user-scoped (RLS-enforced) client, so each query is
 * automatically restricted to the caller's own rows — no service role and no
 * way to read anyone else's data. A table that doesn't exist yet (e.g. a
 * migration not applied) degrades to an empty array rather than failing the
 * whole export.
 */
export async function GET() {
  const supabase = await createSupabaseServer()
  const {
    data: { user },
  } = await supabase.auth.getUser()
  if (!user) {
    return Response.json({ error: "Unauthorized" }, { status: 401 })
  }

  const uid = user.id
  const rows = async (table: string) => {
    const { data, error } = await supabase.from(table).select("*").eq("user_id", uid)
    if (error) {
      console.warn(`[account/export] could not read ${table}:`, error.message)
      return []
    }
    return data ?? []
  }

  const [
    practiceSessions,
    practiceAttempts,
    errorTags,
    purchases,
    lessonCompletions,
    tutorUsage,
    betaFeedback,
  ] = await Promise.all([
    rows("practice_sessions"),
    rows("practice_attempts"),
    rows("error_tags"),
    rows("purchases"),
    rows("lesson_completions"),
    rows("tutor_usage"),
    rows("beta_feedback"),
  ])

  // Growing state (chapter_progress, saved_for_review, mock_flags, etc.) lives
  // in the user_state table now, not user_metadata — merge it back in so the
  // export stays complete.
  const state = await getUserState(supabase, user)

  const payload = {
    exported_at: new Date().toISOString(),
    account: {
      id: user.id,
      email: user.email,
      created_at: user.created_at,
      // Small scalars (target_score, exam_date, full_name, notification_prefs,
      // persona flags) live in user_metadata; the rest comes from user_state.
      profile: { ...(user.user_metadata ?? {}), ...state },
    },
    practice_sessions: practiceSessions,
    practice_attempts: practiceAttempts,
    error_tags: errorTags,
    purchases,
    lesson_completions: lessonCompletions,
    tutor_usage: tutorUsage,
    beta_feedback: betaFeedback,
  }

  return new Response(JSON.stringify(payload, null, 2), {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Content-Disposition": 'attachment; filename="zakarian-gmat-data-export.json"',
      "Cache-Control": "no-store",
    },
  })
}
