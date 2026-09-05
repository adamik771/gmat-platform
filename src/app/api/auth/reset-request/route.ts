import { getSupabaseService } from "@/lib/supabase/service"
import { sendEmail } from "@/lib/email"
import { passwordResetEmail } from "@/lib/auth-emails"
import { getTrustedSiteOrigin } from "@/lib/site-origin"
import {
  consumeSecurityRateLimit,
  getClientAddress,
} from "@/lib/security-rate-limit"
import { reportDataFailure } from "@/lib/server-data-observability"

/**
 * POST /api/auth/reset-request  body: { email }
 *
 * Sends a BRANDED password-reset email through Resend instead of Supabase's
 * default mailer. We mint the recovery link with the service role
 * (admin.generateLink, type "recovery") — which returns the same verify link
 * Supabase would have emailed, so the existing /reset-password/update flow is
 * unchanged — then deliver it ourselves via sendEmail().
 *
 * Enumeration-safe: returns the same generic { ok: true } whether or not the
 * address maps to an account (and on send/config failures), so the response
 * can't be used to probe who has an account. The only non-200 is a 400 for a
 * structurally invalid request body.
 *
 * Minting our own link bypasses Supabase's built-in reset rate limit. The
 * in-memory cooldown is a cheap first layer; the atomic database limiter below
 * enforces the real per-email and per-IP ceilings across serverless instances.
 */

// email -> last-send ms. Per-instance, pruned to keep the map bounded.
const recentResetSends = new Map<string, number>()
const RESET_COOLDOWN_MS = 5 * 60 * 1000

function underCooldown(email: string, now: number): boolean {
  const last = recentResetSends.get(email)
  if (last !== undefined && now - last < RESET_COOLDOWN_MS) return true
  if (recentResetSends.size > 1000) {
    for (const [k, v] of recentResetSends) {
      if (now - v >= RESET_COOLDOWN_MS) recentResetSends.delete(k)
    }
  }
  recentResetSends.set(email, now)
  return false
}
export async function POST(request: Request) {
  let email: string | undefined
  try {
    const body = (await request.json()) as { email?: string }
    email =
      typeof body.email === "string"
        ? body.email.trim().toLowerCase()
        : undefined
  } catch {
    return Response.json({ error: "Invalid JSON body" }, { status: 400 })
  }
  if (!email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
    return Response.json({ error: "A valid email is required" }, { status: 400 })
  }

  // One generic response for every outcome below — never reveals account state.
  const ok = () => Response.json({ ok: true })

  // Cooldown BEFORE the link is minted: repeated posts for the same address
  // within the window silently no-op (same generic response, so the throttle
  // is not observable either). A loop-POST attack now sends at most one email
  // per address per 5 minutes per warm instance instead of one per request.
  if (underCooldown(email, Date.now())) {
    return ok()
  }

  let service: ReturnType<typeof getSupabaseService>
  try {
    service = getSupabaseService()
  } catch (err) {
    // Service role not configured — fail soft rather than leaking config state.
    console.error("[reset-request] service unavailable:", err)
    return ok()
  }

  try {
    const limits = [
      consumeSecurityRateLimit(service, {
        action: "password_reset_email",
        subject: email,
        limit: 3,
        windowSeconds: 60 * 60,
      }),
    ]
    const address = getClientAddress(request.headers)
    if (address) {
      limits.push(
        consumeSecurityRateLimit(service, {
          action: "password_reset_ip",
          subject: address,
          limit: 20,
          windowSeconds: 60 * 60,
        }),
      )
    }
    const decisions = await Promise.all(limits)
    if (decisions.some((decision) => !decision.allowed)) return ok()
  } catch (err) {
    // Fail closed without changing the enumeration-safe response.
    reportDataFailure(err, {
      surface: "password-reset",
      operation: "rate-limit",
      rpc: "consume_security_rate_limit",
    })
    return ok()
  }

  const redirectTo = `${getTrustedSiteOrigin(request.url)}/reset-password/update`

  const { data, error } = await service.auth.admin.generateLink({
    type: "recovery",
    email,
    options: { redirectTo },
  })

  // Unknown email, or any generateLink error: say nothing, return generic ok.
  if (error || !data?.properties?.action_link) {
    return ok()
  }

  const sent = await sendEmail({
    to: email,
    ...passwordResetEmail({ resetUrl: data.properties.action_link }),
  })
  if (!sent.ok) {
    // Don't surface delivery state to the caller; log for ops.
    console.error("[reset-request] sendEmail failed:", sent.reason)
  }

  return ok()
}
