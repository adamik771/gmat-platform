import { NextResponse } from "next/server"
import { createSupabaseServer } from "@/lib/supabase/server"

/**
 * Handles the Supabase email-confirmation redirect. When a new user clicks
 * the confirmation link in their email, Supabase redirects them here with
 * an auth code. We exchange it for a session, then redirect to /dashboard.
 */
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const code = searchParams.get("code")
  const next = searchParams.get("next") ?? "/dashboard"

  if (code) {
    const supabase = await createSupabaseServer()
    await supabase.auth.exchangeCodeForSession(code)
  }

  return NextResponse.redirect(new URL(next, request.url))
}
