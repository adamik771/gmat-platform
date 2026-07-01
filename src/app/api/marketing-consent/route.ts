import { createSupabaseServer } from "@/lib/supabase/server"
import { getSupabaseService } from "@/lib/supabase/service"
import { readMarketingConsent } from "@/lib/outreach/consent-flag"
import { recordConsent } from "@/lib/outreach/consent"
import { enqueueDrip } from "@/lib/outreach/queue"

/**
 * POST /api/marketing-consent — record the caller's OWN signup marketing
 * consent into the email_subscriptions ledger and enrol the signup drip,
 * immediately instead of waiting for the daily outreach cron.
 *
 * Before this route, a ticked signup checkbox lived only in
 * user_metadata.marketing_consent until the next 14:00 UTC cron run — a window
 * where the consent ledger was incomplete and the welcome drip hadn't started.
 * The cron (Phase 1a) remains the safety net for accounts that can't call this
 * (e.g. signup with email confirmation on, where no session exists yet); both
 * paths are idempotent — recordConsent upserts by email and backfills user_id,
 * enqueueDrip dedupes per (user, sequence, step).
 *
 * Consent facts come from the server-verified auth user (supabase.auth.getUser),
 * never from the request body — a caller can only ever consent themselves, and
 * only if their metadata flag says optedIn. An unticked box is a hard no-op.
 */
export async function POST() {
  const supabase = await createSupabaseServer()
  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser()

  if (authError || !user || !user.email) {
    return Response.json({ error: "Unauthorized" }, { status: 401 })
  }

  const consent = readMarketingConsent(user.user_metadata)
  if (!consent.optedIn) {
    // Never record or enrol without the explicit tick.
    return Response.json({ ok: true, subscribed: false })
  }

  let service
  try {
    service = getSupabaseService()
  } catch {
    // Service key missing — the cron (which needs the same key) will pick the
    // consent up when the environment is fixed; don't fail the signup flow.
    return Response.json({ ok: true, subscribed: false })
  }

  const row = await recordConsent(service, {
    email: user.email,
    userId: user.id,
    source: consent.source ?? "signup",
    consentAt: consent.at,
  })
  let emailScheduled = false
  if (row?.subscribed) {
    // Anchor the drip at signup only while signup is recent. This route is
    // callable any time by an authenticated user; anchoring an old account's
    // drip on created_at would schedule every step in the past and the next
    // cron run would send the whole sequence in one burst. A day-old-or-more
    // account starts the drip now instead (enqueueDrip's default).
    const createdMs = user.created_at ? new Date(user.created_at).getTime() : 0
    const recentSignup =
      createdMs > 0 && Date.now() - createdMs < 24 * 60 * 60 * 1000
    const n = await enqueueDrip(service, {
      sequence: "signup",
      email: user.email,
      userId: user.id,
      startIso: recentSignup ? user.created_at : undefined,
      payload: {
        firstName:
          typeof user.user_metadata?.full_name === "string" &&
          user.user_metadata.full_name.trim()
            ? user.user_metadata.full_name.trim().split(/\s+/)[0]
            : null,
      },
    })
    emailScheduled = n > 0
  }

  return Response.json({
    ok: true,
    subscribed: row?.subscribed === true,
    emailScheduled,
  })
}
