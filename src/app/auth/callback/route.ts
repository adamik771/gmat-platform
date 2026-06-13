import { NextResponse } from "next/server"
import { createSupabaseServer } from "@/lib/supabase/server"

/**
 * Handles the Supabase email-confirmation / recovery redirect. The link
 * carries an auth `code`; we exchange it for a session, then redirect to a
 * safe in-app path.
 */
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const code = searchParams.get("code")
  const next = safeNext(searchParams.get("next"), request.url)

  // No code = malformed/expired link; don't fall through as if confirmed.
  if (!code) {
    return NextResponse.redirect(new URL("/login?error=auth_callback", request.url))
  }

  const supabase = await createSupabaseServer()
  const { error } = await supabase.auth.exchangeCodeForSession(code)
  if (error) {
    // The code is single-use. Email link-scanners and double-clicks re-hit
    // this URL after it's spent — if the user already has a session, that's a
    // benign re-fetch, so send them on rather than bouncing to /login.
    const { data } = await supabase.auth.getUser()
    if (data.user) {
      return NextResponse.redirect(new URL(next, request.url))
    }
    return NextResponse.redirect(new URL("/login?error=auth_callback", request.url))
  }

  return NextResponse.redirect(new URL(next, request.url))
}

/**
 * Resolve the post-confirmation destination to a SAME-ORIGIN path only.
 * Resolving against the request origin and comparing origins defeats every
 * open-redirect vector — protocol-relative ("//evil"), backslash ("/\\evil"),
 * absolute URLs, AND control-char tricks ("/\t//evil", which the WHATWG URL
 * parser silently strips) — because we keep ONLY the resolved
 * pathname+search+hash and bail to /dashboard on any cross-origin or parse
 * failure. A regex on the raw string can't do this (the parser mutates it).
 */
function safeNext(raw: string | null, requestUrl: string): string {
  if (!raw || !raw.startsWith("/")) return "/dashboard"
  try {
    const base = new URL(requestUrl)
    const resolved = new URL(raw, base)
    if (resolved.origin !== base.origin) return "/dashboard"
    return resolved.pathname + resolved.search + resolved.hash
  } catch {
    return "/dashboard"
  }
}
