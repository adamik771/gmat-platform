import { createSupabaseServer } from "@/lib/supabase/server"

/**
 * POST /api/chapter-progress — persist a single chapter's progress to
 * `auth.users.raw_user_meta_data.chapter_progress[slug]` via Supabase Auth's
 * updateUser. Accepts `{ slug: string, progress: object }`.
 *
 * Chapter progress state (sectionsRead, per-question attempts, problem-set
 * results) lives in user metadata so it syncs across devices without a new
 * table. The localStorage cache on the client remains as a write-through so
 * offline edits don't get lost.
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

  const body = (await request.json()) as { slug?: string; progress?: unknown }
  const slug = body.slug
  const progress = body.progress

  if (typeof slug !== "string" || !/^[a-z0-9-]+$/.test(slug)) {
    return Response.json(
      { error: "slug must be a lowercase kebab-case string" },
      { status: 400 }
    )
  }
  if (!progress || typeof progress !== "object" || Array.isArray(progress)) {
    return Response.json(
      { error: "progress must be a plain object" },
      { status: 400 }
    )
  }

  const existing =
    (user.user_metadata?.chapter_progress as Record<string, unknown> | undefined) ?? {}
  const next = { ...existing, [slug]: progress }

  const { error } = await supabase.auth.updateUser({
    data: { chapter_progress: next },
  })

  if (error) {
    return Response.json({ error: error.message }, { status: 500 })
  }

  return Response.json({ ok: true })
}
