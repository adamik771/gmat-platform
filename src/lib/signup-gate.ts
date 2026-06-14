import { timingSafeEqual } from "node:crypto"

/**
 * Invite / access-code gate for public signup.
 *
 * The product ships as "invite-only" in Adam's outreach, but /signup is
 * technically open: the browser calls `supabase.auth.signUp` with the public
 * anon key, so a UI-only check is meaningless (anyone with the bundle can hit
 * the anon endpoint directly). Real enforcement therefore lives on the server:
 *   - the secret code lives ONLY in SIGNUP_ACCESS_CODE (server env, never
 *     NEXT_PUBLIC), validated here, and
 *   - the gated path creates users via the service role (see /api/signup),
 *     so it stays airtight once public sign-ups are disabled in Supabase.
 *
 * OFF by default: with SIGNUP_ACCESS_CODE unset the gate is disarmed and
 * `evaluateSignupGate` allows everything ("open"), so the app behaves exactly
 * as it does today. Setting the env arms it — mirrors the PAYWALL_ENABLED /
 * tutor-rate-limit "armed by config" convention.
 */

export type SignupGateReason = "open" | "ok" | "missing" | "mismatch"

export interface SignupGateDecision {
  allowed: boolean
  reason: SignupGateReason
}

/** True when an access code is configured (the gate is armed). */
export function isSignupGateArmed(configured: string | undefined | null): boolean {
  return typeof configured === "string" && configured.trim().length > 0
}

/**
 * Decide whether a signup may proceed.
 *
 *   - disarmed (no code configured) -> allowed, "open"     (today's open signup)
 *   - armed + blank/absent code     -> blocked, "missing"
 *   - armed + wrong code            -> blocked, "mismatch" (constant-time)
 *   - armed + correct code          -> allowed, "ok"
 *
 * Pure (no env / IO) so it can be unit-tested; the route passes
 * `process.env.SIGNUP_ACCESS_CODE` as `configured`.
 */
export function evaluateSignupGate(
  provided: string | undefined | null,
  configured: string | undefined | null
): SignupGateDecision {
  if (!isSignupGateArmed(configured)) return { allowed: true, reason: "open" }

  const expected = (configured as string).trim()
  const got = typeof provided === "string" ? provided.trim() : ""

  if (got.length === 0) return { allowed: false, reason: "missing" }
  if (!constantTimeEquals(got, expected)) return { allowed: false, reason: "mismatch" }
  return { allowed: true, reason: "ok" }
}

/**
 * Constant-time string compare. The code is a shared invite secret, so its
 * length is not sensitive — an early length check (which `timingSafeEqual`
 * requires, since it throws on unequal-length buffers) is acceptable.
 */
function constantTimeEquals(a: string, b: string): boolean {
  const ab = Buffer.from(a, "utf8")
  const bb = Buffer.from(b, "utf8")
  if (ab.length !== bb.length) return false
  return timingSafeEqual(ab, bb)
}
