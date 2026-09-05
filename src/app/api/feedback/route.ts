import { createSupabaseServer } from "@/lib/supabase/server"
import {
  validateFeedbackInput,
  type FeedbackKind,
  type FeedbackTag,
} from "@/lib/beta-feedback"
import { reportDataFailure } from "@/lib/server-data-observability"

/**
 * POST /api/feedback — single endpoint for all four feedback kinds.
 *
 * Body shape:
 *   {
 *     kind: "general" | "question" | "bug" | "rating"
 *     message: string                  // 0-2000 chars (rating-only rows allowed empty)
 *     questionId?: string | null       // required when kind === "question"
 *     rating?: 1|2|3|4|5 | null        // required when kind === "rating"
 *     tag?: string | null              // optional categorical tag
 *   }
 *
 * Feedback is stored only in the dedicated table. Auth user_metadata rides in
 * the session JWT/cookie, so it must never be used as an overflow datastore.
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

  let body: {
    kind?: unknown
    message?: unknown
    questionId?: unknown
    rating?: unknown
    tag?: unknown
    sourcePath?: unknown
  }
  try {
    body = (await request.json()) as typeof body
  } catch {
    return Response.json({ error: "Invalid JSON body" }, { status: 400 })
  }

  const validationError = validateFeedbackInput(body)
  if (validationError) {
    return Response.json({ error: validationError }, { status: 400 })
  }

  const kind = body.kind as FeedbackKind
  const message = (body.message as string).trim()
  const questionId = (body.questionId as string | null | undefined) ?? null
  const rating = (body.rating as number | null | undefined) ?? null
  const tag = ((body.tag as string | null | undefined) ?? null) as FeedbackTag | null
  const sourcePath =
    typeof body.sourcePath === "string" ? body.sourcePath.slice(0, 500) : null
  const userAgent = request.headers.get("user-agent")?.slice(0, 500) ?? null

  const { error: insertError } = await supabase
    .from("beta_feedback")
    .insert({
      user_id: user.id,
      kind,
      message,
      question_id: questionId,
      rating,
      tag,
      source_path: sourcePath,
      user_agent: userAgent,
    })

  if (!insertError) {
    return Response.json({ ok: true, persisted: "table" })
  }

  reportDataFailure(insertError, {
    surface: "feedback",
    operation: "insert",
    table: "beta_feedback",
  })
  return Response.json(
    { error: "Feedback could not be saved. Please try again." },
    { status: 503 },
  )
}
