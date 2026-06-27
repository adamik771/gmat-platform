import { getSupabaseService } from "@/lib/supabase/service"
import { evaluateSignupGate, isSignupGateArmed } from "@/lib/signup-gate"
import { buildMarketingConsent } from "@/lib/outreach/consent-flag"

/**
 * POST /api/signup — the access-code-gated signup path.
 *
 * Only used when the gate is armed (NEXT_PUBLIC_SIGNUP_GATED=true shows the
 * code field client-side; SIGNUP_ACCESS_CODE enforces it here). The ungated
 * default path still runs the normal client-side `supabase.auth.signUp` in
 * the signup page — this route is purely the invite-only flow.
 *
 * Flow: validate the access code (server-authoritative, constant-time) ->
 * create the user via the SERVICE ROLE with email auto-confirmed -> the
 * client then signs in with the same credentials to establish a session.
 *
 * Why the service role + auto-confirm: it's the only creation path that stays
 * airtight once Adam disables public sign-ups in Supabase (the anon
 * `signUp` endpoint is otherwise reachable directly with the public key,
 * bypassing any gate). Auto-confirm matches how friends are onboarded
 * manually today (Supabase dashboard -> Add user -> Auto Confirm).
 *
 * Body: { name, email, password, accessCode, hp? }   (hp = honeypot)
 */

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

export async function POST(request: Request) {
  let body: {
    name?: unknown
    email?: unknown
    password?: unknown
    accessCode?: unknown
    hp?: unknown
    marketingConsent?: unknown
  }
  try {
    body = (await request.json()) as typeof body
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 })
  }

  // Honeypot — bots fill hidden fields; humans don't see them. Pretend
  // success so the bot doesn't probe further.
  if (typeof body.hp === "string" && body.hp.length > 0) {
    return Response.json({ ok: true })
  }

  const configured = process.env.SIGNUP_ACCESS_CODE

  // This route only exists to serve the gated flow. If the gate isn't armed,
  // refuse rather than fall open into a second (auto-confirming) signup path —
  // the ungated flow is the client's normal anon signUp.
  if (!isSignupGateArmed(configured)) {
    return Response.json(
      { error: "Invite-only signup is not enabled." },
      { status: 403 }
    )
  }

  const gate = evaluateSignupGate(
    typeof body.accessCode === "string" ? body.accessCode : "",
    configured
  )
  if (!gate.allowed) {
    const error =
      gate.reason === "missing"
        ? "An access code is required to create an account."
        : "That access code isn't valid."
    return Response.json({ error }, { status: 403 })
  }

  const name =
    typeof body.name === "string" ? body.name.trim().slice(0, 120) : ""
  const email =
    typeof body.email === "string" ? body.email.trim().toLowerCase() : ""
  const password = typeof body.password === "string" ? body.password : ""

  if (email.length === 0 || email.length > 254 || !EMAIL_RE.test(email)) {
    return Response.json({ error: "Enter a valid email address." }, { status: 400 })
  }
  if (password.length < 8) {
    return Response.json(
      { error: "Password must be at least 8 characters." },
      { status: 400 }
    )
  }

  let supabase
  try {
    supabase = getSupabaseService()
  } catch {
    // Service-role key not configured — the gated path can't create users.
    console.error(
      "[signup] SIGNUP_ACCESS_CODE is set but SUPABASE_SERVICE_ROLE_KEY is not — gated signup cannot create accounts."
    )
    return Response.json(
      { error: "Signup is temporarily unavailable. Please try again later." },
      { status: 503 }
    )
  }

  const { error } = await supabase.auth.admin.createUser({
    email,
    password,
    email_confirm: true,
    user_metadata: {
      full_name: name,
      marketing_consent: buildMarketingConsent(
        body.marketingConsent === true,
        new Date().toISOString()
      ),
    },
  })

  if (error) {
    // Already-registered is the common, user-actionable case.
    const already =
      error.status === 422 ||
      /already|registered|exists/i.test(error.message ?? "")
    if (already) {
      return Response.json(
        { error: "An account with this email already exists. Try signing in." },
        { status: 409 }
      )
    }
    console.error("[signup] admin.createUser failed:", error.message)
    return Response.json(
      { error: "Could not create your account. Please try again." },
      { status: 400 }
    )
  }

  // The user exists and is confirmed; the client signs in to get a session.
  return Response.json({ ok: true })
}
