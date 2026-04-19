import { createSupabaseServer } from "@/lib/supabase/server"

const VALID_TAGS = [
  "Conceptual",
  "Careless",
  "Time Pressure",
  "Misread",
  "Strategy",
  "Other",
] as const
type ErrorTag = (typeof VALID_TAGS)[number]

/**
 * POST /api/error-tags — upsert a tag / notes / reviewed flag for a single
 * `practice_attempts` row. Body: { attemptId, tag?, notes?, reviewed? }.
 * Any field omitted from the body is left unchanged on an existing row (or
 * defaulted on insert). A null `tag` clears the tag. An empty-string notes
 * clears notes.
 *
 * DELETE /api/error-tags — remove all tag metadata for an attempt.
 * Body: { attemptId }.
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

  const body = (await request.json()) as {
    attemptId?: string
    tag?: ErrorTag | null
    notes?: string | null
    reviewed?: boolean
  }

  if (!body.attemptId || typeof body.attemptId !== "string") {
    return Response.json({ error: "attemptId required" }, { status: 400 })
  }

  if (
    body.tag !== undefined &&
    body.tag !== null &&
    !VALID_TAGS.includes(body.tag as ErrorTag)
  ) {
    return Response.json({ error: "invalid tag" }, { status: 400 })
  }

  // Verify the attempt belongs to the user before writing — RLS will also
  // catch this, but this gives us a cleaner 404 and a safer upsert.
  const { data: attempt, error: lookupError } = await supabase
    .from("practice_attempts")
    .select("id, user_id")
    .eq("id", body.attemptId)
    .single()
  if (lookupError || !attempt || attempt.user_id !== user.id) {
    return Response.json({ error: "Attempt not found" }, { status: 404 })
  }

  // Build a partial row — only fields present in the body override.
  const patch: Record<string, unknown> = {
    attempt_id: body.attemptId,
    user_id: user.id,
    updated_at: new Date().toISOString(),
  }
  if (body.tag !== undefined) patch.tag = body.tag
  if (body.notes !== undefined) patch.notes = body.notes
  if (body.reviewed !== undefined) patch.reviewed = body.reviewed

  const { error } = await supabase
    .from("error_tags")
    .upsert(patch, { onConflict: "attempt_id" })

  if (error) {
    return Response.json({ error: error.message }, { status: 500 })
  }

  return Response.json({ ok: true })
}

export async function DELETE(request: Request) {
  const supabase = await createSupabaseServer()
  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser()

  if (authError || !user) {
    return Response.json({ error: "Unauthorized" }, { status: 401 })
  }

  const { attemptId } = (await request.json()) as { attemptId?: string }
  if (!attemptId || typeof attemptId !== "string") {
    return Response.json({ error: "attemptId required" }, { status: 400 })
  }

  const { error } = await supabase
    .from("error_tags")
    .delete()
    .eq("attempt_id", attemptId)
    .eq("user_id", user.id)

  if (error) {
    return Response.json({ error: error.message }, { status: 500 })
  }

  return Response.json({ ok: true })
}
