import type { User } from "@supabase/supabase-js"

// Dual-check admin gating: role-based (`user_metadata.role === 'admin'`) is the target state, while the `ADMIN_EMAILS` env-var list is a bootstrap fallback for when a new staff member's role hasn't been set yet (Supabase Auth dashboard → Users → Edit user → Raw user metadata, or `supabase.auth.admin.updateUserById(id, { user_metadata: { role: 'admin' } })` with the service key). Either condition grants access; both being absent = not admin.

/** Parsed ADMIN_EMAILS env var: comma-separated, case-insensitive,
 *  whitespace-trimmed. Empty entries dropped. Empty list = no email
 *  fallback (role-only gating). */
function adminEmails(): Set<string> {
  return new Set(
    (process.env.ADMIN_EMAILS ?? "")
      .split(",")
      .map((s) => s.trim().toLowerCase())
      .filter((s) => s.length > 0),
  )
}

/** Sync admin check. Operates on an already-fetched user — callers are
 *  expected to have resolved `supabase.auth.getUser()` and pass the
 *  `user` through. Returns `false` for a null user. */
export function isAdmin(user: User | null): boolean {
  if (!user) return false
  if (user.user_metadata?.role === "admin") return true
  const email = user.email?.toLowerCase() ?? ""
  if (!email) return false
  return adminEmails().has(email)
}
