/**
 * Admin allowlist for surfaces like `/admin/feedback`.
 *
 * Configured via the `ADMIN_EMAILS` env var (comma-separated, case-
 * insensitive). When the env var is unset or empty, every check returns
 * false — admin surfaces fail-closed so a misconfigured deploy never
 * accidentally exposes triage tooling.
 *
 * Example:
 *   ADMIN_EMAILS=adam@example.com,ops@example.com
 *
 * The check is by email (rather than user id) so adding a new admin
 * doesn't require knowing the auth.users uuid up front.
 */
export function isAdminEmail(email: string | null | undefined): boolean {
  if (!email) return false
  const raw = process.env.ADMIN_EMAILS ?? ""
  const allowlist = raw
    .split(",")
    .map((s) => s.trim().toLowerCase())
    .filter(Boolean)
  if (allowlist.length === 0) return false
  return allowlist.includes(email.toLowerCase())
}
