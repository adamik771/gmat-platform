import { createSupabaseServer } from "@/lib/supabase/server"

/** Canonical keys — keep in sync with the Notifications tab in SettingsClient. */
const VALID_KEYS = ["streak", "weekly", "tips", "coaching"] as const
type PrefKey = (typeof VALID_KEYS)[number]

/**
 * POST /api/notification-prefs — persist a partial notification-preferences
 * patch to `user_metadata.notification_prefs`. Accepts a body like
 * `{ streak: true, weekly: false }`. Unknown keys are rejected to avoid
 * schema drift.
 *
 * Preferences are stored but no emails are sent yet — the scheduler is not
 * built. The toggles nonetheless stick across sessions, which is the
 * difference between "I can't remember what I clicked" and honest UX.
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

  const body = (await request.json()) as Record<string, unknown>

  // Start from the user's existing prefs so a single-toggle patch doesn't
  // clobber everything else.
  const existing =
    (user.user_metadata?.notification_prefs as Record<string, boolean> | null) ??
    {}
  const next: Record<string, boolean> = { ...existing }

  for (const [key, value] of Object.entries(body)) {
    if (!VALID_KEYS.includes(key as PrefKey)) {
      return Response.json(
        { error: `Unknown preference key: ${key}` },
        { status: 400 }
      )
    }
    if (typeof value !== "boolean") {
      return Response.json(
        { error: `Preference ${key} must be a boolean.` },
        { status: 400 }
      )
    }
    next[key] = value
  }

  const { error } = await supabase.auth.updateUser({
    data: { notification_prefs: next },
  })
  if (error) {
    return Response.json({ error: error.message }, { status: 500 })
  }

  return Response.json({ ok: true, prefs: next })
}
