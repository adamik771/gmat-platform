import { getSupabaseService } from "@/lib/supabase/service"
import { sendEmail } from "@/lib/email"
import { passwordResetEmail } from "@/lib/auth-emails"

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
 * NOTE: minting our own link bypasses Supabase's built-in reset rate limit, so
 * a durable per-email/IP throttle should be added before scaling (Resend's
 * account send limits are the only backstop today). Not added here because a
 * naive cooldown after generateLink can invalidate a just-emailed token.
 */
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

  let service: ReturnType<typeof getSupabaseService>
  try {
    service = getSupabaseService()
  } catch (err) {
    // Service role not configured — fail soft rather than leaking config state.
    console.error("[reset-request] service unavailable:", err)
    return ok()
  }

  const redirectTo = `${new URL(request.url).origin}/reset-password/update`

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
