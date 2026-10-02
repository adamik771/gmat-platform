import type { User } from "@supabase/supabase-js"

// Dual-check admin gating: the role lives in app_metadata, which only a
// trusted server/admin can change. Never trust user_metadata for privileges:
// authenticated users can edit their own user_metadata through Supabase Auth.
// ADMIN_EMAILS remains a bootstrap fallback. Either trusted condition grants
// access; both being absent = not admin.

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
  if (user.app_metadata?.role === "admin") return true
  const email = user.email?.toLowerCase() ?? ""
  if (!email) return false
  return adminEmails().has(email)
}
