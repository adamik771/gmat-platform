import { createSupabaseServer } from "@/lib/supabase/server"
import { blockIfNoAccess } from "@/lib/entitlements"
import { getUserStateForWrite, patchUserState } from "@/lib/user-state"

/**
 * POST /api/chapter-progress — persist a single chapter's progress to the
 * `user_state` table (keyed by slug). Accepts `{ slug: string, progress: object }`.
 *
 * Chapter progress state (sectionsRead, per-question attempts, problem-set
 * results, free-text notes) syncs across devices via user_state — NOT
 * user_metadata, since it grows without bound and would bloat the auth cookie.
 * The localStorage cache on the client remains as a write-through so offline
 * edits don't get lost.
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

  // Read-modify-write of the whole chapter_progress map. A read that FAILED
  // (vs. a genuinely absent row) must abort the write — otherwise `existing`
  // is {} and the top-level merge below replaces every other chapter's server
  // progress with just this one. The client push is fire-and-forget with
  // localStorage as write-through, so a 503 here loses nothing.
  const { state, errored } = await getUserStateForWrite(supabase, user)
  if (errored) {
    return Response.json(
      { error: "state read failed; retry" },
      { status: 503 }
    )
  }
  const existing =
    (state.chapter_progress as Record<string, unknown> | undefined) ?? {}
  const next = { ...existing, [slug]: progress }

  const { error } = await patchUserState(supabase, user, { chapter_progress: next })

  if (error) {
    return Response.json({ error }, { status: 500 })
  }

  return Response.json({ ok: true })
}
