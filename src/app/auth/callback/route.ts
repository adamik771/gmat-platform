import { NextResponse } from "next/server"
import { createSupabaseServer } from "@/lib/supabase/server"
import { getTrustedSiteOrigin } from "@/lib/site-origin"
import { safeInternalPath } from "@/lib/safe-navigation"

/**
 * Handles the Supabase email-confirmation / recovery redirect. The link
 * carries an auth `code`; we exchange it for a session, then redirect to a
 * safe in-app path.
 */
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const code = searchParams.get("code")
  const next = safeInternalPath(searchParams.get("next"))
  const redirectOrigin = getTrustedSiteOrigin(request.url)

  // No code = malformed/expired link; don't fall through as if confirmed.
  if (!code) {
    return NextResponse.redirect(
      new URL("/login?error=auth_callback", redirectOrigin),
    )
  }

  const supabase = await createSupabaseServer()
  const { error } = await supabase.auth.exchangeCodeForSession(code)
  if (error) {
    // The code is single-use. Email link-scanners and double-clicks re-hit
    // this URL after it's spent — if the user already has a session, that's a
    // benign re-fetch, so send them on rather than bouncing to /login.
    const { data } = await supabase.auth.getUser()
    if (data.user) {
      return NextResponse.redirect(new URL(next, redirectOrigin))
    }
    return NextResponse.redirect(
      new URL("/login?error=auth_callback", redirectOrigin),
    )
  }

  return NextResponse.redirect(new URL(next, redirectOrigin))
}
