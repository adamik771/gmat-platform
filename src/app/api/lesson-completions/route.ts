import { createSupabaseServer } from "@/lib/supabase/server"

/**
 * POST /api/lesson-completions — mark a lesson complete for the current user.
 * Body: { slug: string }
 * Upsert on (user_id, lesson_slug) so re-hitting POST is idempotent.
 *
 * DELETE /api/lesson-completions — un-mark a lesson.
 * Body: { slug: string }
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

  const { slug } = (await request.json()) as { slug?: string }
  if (!slug || typeof slug !== "string") {
    return Response.json({ error: "slug required" }, { status: 400 })
  }

  const { error } = await supabase
    .from("lesson_completions")
    .upsert(
      { user_id: user.id, lesson_slug: slug },
      { onConflict: "user_id,lesson_slug" }
    )

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

  const { slug } = (await request.json()) as { slug?: string }
  if (!slug || typeof slug !== "string") {
    return Response.json({ error: "slug required" }, { status: 400 })
  }

  const { error } = await supabase
    .from("lesson_completions")
    .delete()
    .eq("user_id", user.id)
    .eq("lesson_slug", slug)

  if (error) {
    return Response.json({ error: error.message }, { status: 500 })
  }

  return Response.json({ ok: true })
}
