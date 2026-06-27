import { getSupabaseService } from "@/lib/supabase/service"

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

export async function POST(request: Request) {
  let body: {
    email?: unknown
    source?: unknown
    leadMagnet?: unknown
    hp?: unknown
  }
  try {
    body = (await request.json()) as typeof body
  } catch {
    return Response.json({ error: "Invalid JSON body" }, { status: 400 })
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

  return Response.json({
    ok: true,
    downloadUrl: MAGNET_DOWNLOADS[leadMagnet] ?? null,
  })
}
