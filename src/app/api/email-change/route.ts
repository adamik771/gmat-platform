import { createSupabaseServer } from "@/lib/supabase/server"

// Basic email shape check — deliberately loose. Supabase does its own
// validation when the confirmation link is clicked; this just keeps the
// common-case typos from traveling any further.
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

/**
 * POST /api/email-change — initiate an email change for the signed-in
 * user. Body: `{ email: string }`.
 *
 * Supabase's `updateUser({ email })` sends two confirmation emails:
 *   - one to the CURRENT address ("someone requested to change your email")
 *   - one to the NEW address ("click to confirm the change")
 * The change only takes effect after the new-address link is clicked,
 * which routes back through `/auth/callback?code=...`.
 *
 * We set `emailRedirectTo` so the confirmation link lands back on
 * `/settings` (with a `?email=changed` hint) instead of the default
 * dashboard redirect.
 */
export async function POST(request: Request) {
  const supabase = await createSupabaseServer()
  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser()

  if (authError || !user) {
    return Response.json({ error: "Unauthorized" }, { status: 401 })
  }

  const body = (await request.json()) as { email?: string }
  const nextEmail = (body.email ?? "").trim().toLowerCase()

  if (!nextEmail || !EMAIL_RE.test(nextEmail)) {
    return Response.json(
      { error: "Enter a valid email address." },
      { status: 400 }
    )
  }
  if (nextEmail.length > 254) {
    return Response.json({ error: "Email is too long." }, { status: 400 })
  }
  if (nextEmail === (user.email ?? "").toLowerCase()) {
    return Response.json(
      { error: "That's already your current email." },
      { status: 400 }
    )
  }

  // Derive the callback origin from the incoming request so this works in
  // dev, preview, and prod without a hardcoded host.
  const origin = new URL(request.url).origin

  const { error } = await supabase.auth.updateUser(
    { email: nextEmail },
    {
      emailRedirectTo: `${origin}/auth/callback?next=/settings?email=changed`,
    }
  )

  if (error) {
    return Response.json({ error: error.message }, { status: 500 })
  }

  return Response.json({ ok: true })
}
