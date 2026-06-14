import { createSupabaseServer } from "@/lib/supabase/server"
import { getSupabaseService } from "@/lib/supabase/service"

export const dynamic = "force-dynamic"

/**
 * POST /api/account/delete — GDPR right-to-erasure. Permanently deletes the
 * signed-in user's account and every row of their data.
 *
 * The user id is taken from the VERIFIED session (getUser), never the request
 * body, so a caller can only ever delete themselves. We explicitly clear each
 * user-scoped table via the service role before deleting the auth user — this
 * guarantees full erasure regardless of whether each table has an ON DELETE
 * CASCADE foreign key. A per-table failure is logged and skipped (the table
 * may not exist yet) so it can't block the account deletion itself.
 */

// Tables keyed by user_id that hold this account's data. Children before
// parents (error_tags references practice_attempts) so the post-delete mop-up
// can't trip an FK violation on a non-cascading constraint.
const USER_TABLES = [
  "error_tags",
  "practice_attempts",
  "practice_sessions",
  "lesson_completions",
  "purchases",
  "tutor_usage",
  "beta_feedback",
]

export async function POST() {
  const supabase = await createSupabaseServer()
  const {
    data: { user },
  } = await supabase.auth.getUser()
  if (!user) {
    return Response.json({ error: "Unauthorized" }, { status: 401 })
  }

  const uid = user.id
  const email = (user.email ?? "").toLowerCase()

  let service
  try {
    service = getSupabaseService()
  } catch {
    console.error("[account/delete] SUPABASE_SERVICE_ROLE_KEY not set — cannot delete account")
    return Response.json(
      { error: "Account deletion is temporarily unavailable. Please contact support." },
      { status: 503 }
    )
  }

  // Delete the auth user FIRST. If this fails, nothing else has been touched —
  // the account and all of its data remain intact and the user can retry. It
  // also fires the ON DELETE CASCADE on tables FK'd to auth.users. Clearing the
  // tables first would risk a "still-loginable account with erased data, incl.
  // lost paid entitlement" state if this call then failed.
  const { error: deleteError } = await service.auth.admin.deleteUser(uid)
  if (deleteError) {
    console.error("[account/delete] admin.deleteUser failed:", deleteError.message)
    return Response.json(
      { error: "Could not delete your account. Please contact support." },
      { status: 500 }
    )
  }

  // Best-effort mop-up of any table that does NOT cascade from auth.users. The
  // auth user is already gone, so a failure here can only orphan rows
  // harmlessly (no login) — it can never leave live, accessible data.
  for (const table of USER_TABLES) {
    const { error } = await service.from(table).delete().eq("user_id", uid)
    if (error) {
      console.warn(`[account/delete] post-delete cleanup of ${table} failed:`, error.message)
    }
  }
  // The marketing prospect list is keyed by email, not user_id — erase it too.
  if (email) {
    const { error } = await service.from("lead_captures").delete().eq("email", email)
    if (error) console.warn("[account/delete] could not clear lead_captures:", error.message)
  }

  return Response.json({ ok: true })
}
