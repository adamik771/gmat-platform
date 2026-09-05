import { createSupabaseServer } from "@/lib/supabase/server"
import { blockIfNoAccess } from "@/lib/entitlements"
import { parsePracticeResumeSnapshot } from "@/lib/practice-resume"
import { patchUserState } from "@/lib/user-state"

/** Persist the user's one bounded, in-progress practice snapshot. */
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

  let raw: unknown
  try {
    const text = await request.text()
    if (text.length > 150_000) {
      return Response.json({ error: "Practice snapshot is too large" }, { status: 413 })
    }
    raw = JSON.parse(text) as unknown
  } catch {
    return Response.json({ error: "Invalid JSON body" }, { status: 400 })
  }
  const snapshot = parsePracticeResumeSnapshot(raw)
  if (!snapshot || snapshot.userId !== user.id) {
    return Response.json({ error: "Invalid practice snapshot" }, { status: 400 })
  }

  const { error } = await patchUserState(supabase, user, {
    active_practice: snapshot,
  })
  if (error) return Response.json({ error }, { status: 500 })
  return Response.json({ ok: true })
}

/** Clear only the active snapshot; completed history remains untouched. */
export async function DELETE() {
  const supabase = await createSupabaseServer()
  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser()
  if (authError || !user) {
    return Response.json({ error: "Unauthorized" }, { status: 401 })
  }

  const { error } = await patchUserState(supabase, user, {
    active_practice: null,
  })
  if (error) return Response.json({ error }, { status: 500 })
  return Response.json({ ok: true })
}
