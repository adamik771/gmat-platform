import { NextResponse, type NextRequest } from "next/server"
import { createSupabaseProxy } from "@/lib/supabase/proxy"

// Routes under the (app) group that require authentication.
const APP_ROUTES = [
  "/dashboard",
  "/practice",
  "/lessons",
  "/analytics",
  "/error-log",
  "/study-plan",
  "/test-builder",
  "/settings",
]

// Routes under the (auth) group — authenticated users get redirected away.
const AUTH_ROUTES = ["/login", "/signup"]

export async function proxy(request: NextRequest) {
  // Guard: if Supabase env vars are missing, skip auth entirely so the
  // site doesn't crash with a 500 on every route.
  if (
    !process.env.NEXT_PUBLIC_SUPABASE_URL ||
    !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  ) {
    const res = NextResponse.next()
    // Don't let the CDN cache this — the env vars may be set on the
    // next deploy, and we want fresh behavior immediately.
    res.headers.set("Cache-Control", "private, no-store")
    return res
  }

  try {
    const { supabase, response } = createSupabaseProxy(request)

    // Refresh the session (triggers setAll if tokens are refreshed).
    // Use getUser() not getSession() — getUser() contacts the Auth server
    // to verify the token, while getSession() only reads the cookie.
    const {
      data: { user },
    } = await supabase.auth.getUser()

    const { pathname } = request.nextUrl

    // Unauthenticated users trying to access app routes → redirect to login
    const isAppRoute = APP_ROUTES.some(
      (route) => pathname === route || pathname.startsWith(route + "/")
    )
    if (isAppRoute && !user) {
      const url = request.nextUrl.clone()
      url.pathname = "/login"
      return NextResponse.redirect(url)
    }

    // Authenticated users on auth routes → redirect to dashboard
    const isAuthRoute = AUTH_ROUTES.some(
      (route) => pathname === route || pathname.startsWith(route + "/")
    )
    if (isAuthRoute && user) {
      const url = request.nextUrl.clone()
      url.pathname = "/dashboard"
      return NextResponse.redirect(url)
    }

    const finalResponse = response()
    // Prevent CDN caching of auth-aware responses — otherwise a stale
    // "unauthenticated" response could leak to a logged-in user, or a
    // cached redirect could keep firing after they log in.
    finalResponse.headers.set("Cache-Control", "private, no-store")
    return finalResponse
  } catch {
    // If Supabase is unreachable or misconfigured, fall through rather
    // than crashing every route with a 500.
    const res = NextResponse.next()
    res.headers.set("Cache-Control", "private, no-store")
    return res
  }
}

export const config = {
  matcher: [
    // Match all routes except static assets, API routes, and metadata files.
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
  ],
}
