import { getSupabaseService } from "@/lib/supabase/service"
import { recordConsent } from "@/lib/outreach/consent"
import { enqueueDrip } from "@/lib/outreach/queue"

/**
 * POST /api/lead-capture — collect a prospect email from public marketing
 * surfaces (footer email-capture, free-diagnostic result CTA, etc).
 *
 * Body shape:
 *   {
 *     email: string                              // required
 *     source: "footer" | "free-diagnostic" | "blog-post" | "other"
 *     leadMagnet?: "error-log-template" | "newsletter" | "diagnostic-deeper-view"
 *     hp?: string                                // honeypot — must be empty
 *   }
 *
 * Returns:
 *   200 { ok: true, downloadUrl?: string }  // captured (downloadUrl when the magnet has a file)
 *   400 { error }                           // invalid JSON body or email
 *   503 { ok: false, error }                // persistence failed (server misconfig or DB error)
 *
 * Storage: writes to public.lead_captures via the service-role client. The
 * table is RLS-on with no policies, so only the service role can read or
 * write — the email list is never exposed to clients. Re-submissions from
 * the same surface upsert captured_at instead of erroring.
 */

const VALID_SOURCES = new Set([
  "footer",
  "homepage",
  "free-diagnostic",
  "blog-post",
  "resources",
  "score-converter",
  "study-schedule",
  "score-by-school",
  "founding-member",
  "referral",
  "other",
])
const VALID_MAGNETS = new Set([
  "error-log-template",
  "newsletter",
  "diagnostic-deeper-view",
  "founding-reservation",
])

const MAGNET_DOWNLOADS: Record<string, string> = {
  "error-log-template": "/downloads/zakarian-gmat-error-log-template.csv",
}

// RFC-5322-ish, intentionally permissive. We're not trying to block every
// invalid email — Supabase will reject malformed ones via the CHECK
// constraint, and we'd rather accept the long tail than over-validate.
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

// Per-IP capture throttle. Unauthenticated route where a truthy optIn both
// records consent and can enqueue a multi-step drip for ANY posted address —
// without a cap, a script could enrol strangers or bloat the tables (only the
// honeypot stood in the way). In-memory (per warm instance); a WAF rule is
// the durable owner-side complement.
const captureCounts = new Map<string, { count: number; windowStart: number }>()
const CAPTURE_WINDOW_MS = 60 * 60 * 1000
const CAPTURE_MAX_PER_WINDOW = 5

function overCaptureLimit(ip: string, now: number): boolean {
  const entry = captureCounts.get(ip)
  if (!entry || now - entry.windowStart >= CAPTURE_WINDOW_MS) {
    if (captureCounts.size > 2000) {
      for (const [k, v] of captureCounts) {
        if (now - v.windowStart >= CAPTURE_WINDOW_MS) captureCounts.delete(k)
      }
    }
    captureCounts.set(ip, { count: 1, windowStart: now })
    return false
  }
  entry.count += 1
  return entry.count > CAPTURE_MAX_PER_WINDOW
}

export async function POST(request: Request) {
  let body: {
    email?: unknown
    source?: unknown
    leadMagnet?: unknown
    hp?: unknown
    optIn?: unknown
  }
  try {
    body = (await request.json()) as typeof body
  } catch {
    return Response.json({ error: "Invalid JSON body" }, { status: 400 })
  }

  // Throttle by caller IP before any write or drip enrolment.
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown"
  if (overCaptureLimit(ip, Date.now())) {
    // Same generic response as success — the throttle is not observable.
    return Response.json({ ok: true })
  }

  // Honeypot — bots fill hidden fields; humans don't see them.
  if (typeof body.hp === "string" && body.hp.length > 0) {
    // Pretend success so the bot doesn't probe further.
    return Response.json({ ok: true })
  }

  if (typeof body.email !== "string") {
    return Response.json({ error: "email is required" }, { status: 400 })
  }
  const email = body.email.trim().toLowerCase()
  if (email.length === 0 || email.length > 254 || !EMAIL_RE.test(email)) {
    return Response.json({ error: "Invalid email" }, { status: 400 })
  }

  const source =
    typeof body.source === "string" && VALID_SOURCES.has(body.source)
      ? body.source
      : "other"

  const leadMagnet =
    typeof body.leadMagnet === "string" && VALID_MAGNETS.has(body.leadMagnet)
      ? body.leadMagnet
      : "newsletter"

  const userAgent = request.headers.get("user-agent")?.slice(0, 500) ?? null
  const referer = request.headers.get("referer")?.slice(0, 500) ?? null

  let supabase
  try {
    supabase = getSupabaseService()
  } catch {
    // Server misconfiguration (service-role key / Supabase URL missing or
    // invalid), not a user error. Surface it instead of pretending success,
    // so a broken prod env can't silently swallow every lead. The client
    // (LeadCapture) already renders { ok: false } as a retryable error state.
    console.error(
      "[lead-capture] Supabase service client unavailable — capture failed",
    )
    return Response.json(
      { ok: false, error: "Lead capture is temporarily unavailable." },
      { status: 503 },
    )
  }

  const { error } = await supabase.from("lead_captures").upsert(
    {
      email,
      source,
      lead_magnet: leadMagnet,
      captured_at: new Date().toISOString(),
      user_agent: userAgent,
      referer,
    },
    { onConflict: "email,source" },
  )

  if (error) {
    // Persistence failed (e.g. the CHECK-constraint migration hasn't run, or
    // a transient DB error). Surface it instead of a false ok, so lost leads
    // are visible in logs/monitoring and the client can retry.
    console.error("[lead-capture] upsert failed:", error.message)
    return Response.json(
      { ok: false, error: "Could not save that right now. Please try again." },
      { status: 503 },
    )
  }

  // Consent + sequence enrolment require EXPLICIT opt-in (the form's unticked
  // checkbox). The lead row + the requested asset (template download) are
  // delivered regardless. With opt-in we record consent for EVERY lead; only
  // the founding / error-log magnets also start an automated drip. Best-effort;
  // the worker re-checks consent on every send.
  //
  // We report the actual outcome back to the client so the success UI can be
  // truthful: `subscribed` = the address is now opted in (false if it had
  // previously unsubscribed — recordConsent never resurrects that); `emailScheduled`
  // = a drip was actually enqueued (only founding / error-log have a sequence —
  // a newsletter opt-in is recorded but sends nothing until a manual broadcast,
  // so the client must NOT promise "first email on its way" there).
  let subscribed = false
  let emailScheduled = false
  try {
    const optIn = body.optIn === true
    const isFounding = source === "founding-member"
    const isErrorLog = leadMagnet === "error-log-template"
    if (optIn) {
      // Record consent for every explicit opt-in, so the consent ledger is
      // complete and a future newsletter can reach this person with a working
      // one-click unsubscribe — not only the magnets that have a drip today.
      // (Previously a ticked box on the newsletter landing pages was captured
      // as a lead but silently dropped from email_subscriptions.)
      const consentSource = isFounding
        ? "founding-reservation"
        : isErrorLog
          ? "lead-capture:error-log-template"
          : `lead-capture:${leadMagnet}`
      const consent = await recordConsent(supabase, {
        email,
        source: consentSource,
      })
      subscribed = consent?.subscribed === true
      // Enrol in an automated drip only where a sequence exists (founding,
      // error-log). Newsletter opt-ins are recorded but not auto-sequenced.
      if (subscribed && (isFounding || isErrorLog)) {
        await enqueueDrip(supabase, {
          sequence: isFounding ? "founding" : "error-log",
          email,
          payload: { downloadUrl: MAGNET_DOWNLOADS[leadMagnet] ?? null },
        })
        emailScheduled = true
      }
    }
  } catch {
    /* outreach enrolment is best-effort */
  }

  return Response.json({
    ok: true,
    downloadUrl: MAGNET_DOWNLOADS[leadMagnet] ?? null,
    subscribed,
    emailScheduled,
  })
}
