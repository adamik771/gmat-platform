import { createSupabaseServer } from "@/lib/supabase/server"
import {
  appendToUserMetadata,
  validateFeedbackInput,
  type FeedbackKind,
  type FeedbackTag,
} from "@/lib/beta-feedback"

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
 * Storage strategy:
 *   1. Try to insert into the `beta_feedback` table (fast cross-user analysis path).
 *   2. If the table doesn't exist (or RLS blocks), fall back to appending into
 *      `user_metadata.beta_feedback` with a 30-entry cap so feedback isn't lost
 *      pre-migration.
 *
 * The route always returns `{ ok: true }` on accepted input — the
 * client doesn't care which storage path was used, and we never
 * surface "the table doesn't exist" to the student.
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

  // ---- Path 1: dedicated table ----
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

  // ---- Path 2: user_metadata fallback ----
  // The table-insert failed (most likely because the migration hasn't
  // run yet, or RLS blocks). Stash into user_metadata so feedback
  // still lands somewhere Adam can read it.
  const id = crypto.randomUUID()
  const nextMeta = appendToUserMetadata(user.user_metadata, {
    id,
    kind,
    message,
    questionId,
    rating,
    tag,
    sourcePath,
    userAgent,
    createdAt: new Date().toISOString(),
  })
  const { error: metaError } = await supabase.auth.updateUser({ data: nextMeta })
  if (metaError) {
    return Response.json(
      {
        error:
          "Could not persist feedback. The beta_feedback table is missing AND user_metadata write failed.",
      },
      { status: 500 }
    )
  }

  return Response.json({ ok: true, persisted: "user_metadata" })
}
