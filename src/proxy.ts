import { NextResponse, type NextRequest } from "next/server"
import { createSupabaseProxy } from "@/lib/supabase/proxy"

// Routes under the (app) group that require authentication. Keep in
// sync with `src/app/(app)/` directory entries — any new top-level
// route added there should be added here so the proxy redirects
// unauthenticated users to /login before the page renders.
const APP_ROUTES = [
  "/admin",
  "/analytics",
  "/chapters",
  "/dashboard",
  "/error-log",
  "/guides",
  "/learn",
  "/mock",
  "/onboarding",
  "/practice",
  "/qa",
  "/review",
  "/score-calculator",
  "/settings",
  "/study-plan",
  "/test-builder",
]

// Routes under the (auth) group — authenticated users get redirected away.
const AUTH_ROUTES = ["/login", "/signup"]

/** Warn (in logs) when the request's cookies get large. A cookie past the
 *  platform's total-header limit (~16KB) is rejected at the edge with 494
 *  REQUEST_HEADER_TOO_LARGE BEFORE this code runs — so by the time a user is
 *  locked out we can't see it here. This fires in the still-large-but-allowed
 *  window (~6KB+) so the creep shows up as a leading indicator. Point a Vercel
 *  log-drain alert at "[proxy] large cookie" to get paged before a lockout. */
const COOKIE_WARN_BYTES = 6 * 1024
function warnIfCookieLarge(request: NextRequest) {
  const bytes = (request.headers.get("cookie") ?? "").length
  if (bytes > COOKIE_WARN_BYTES) {
    console.warn(
      `[proxy] large cookie: ${bytes} bytes on ${request.nextUrl.pathname} — approaching the request-header limit (494). Keep growing per-user state in user_state, not user_metadata.`
    )
  }
}

export async function proxy(request: NextRequest) {
  warnIfCookieLarge(request)

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

  const { pathname } = request.nextUrl
  const isAppRoute = APP_ROUTES.some(
    (route) => pathname === route || pathname.startsWith(route + "/")
  )
  const isAuthRoute = AUTH_ROUTES.some(
    (route) => pathname === route || pathname.startsWith(route + "/")
  )

  // Public / marketing routes need no auth decision. Skip the Supabase
  // getUser() network round-trip entirely so navigating to them isn't gated on
  // an auth call. Marketing/public pages are also safe to CDN-cache, so they
  // get no no-store. The one exception: auth-flow endpoints under /auth/* (e.g.
  // the /auth/callback code-exchange route handler) must never be cached even
  // though they aren't redirect-gated — preserve no-store there.
  if (!isAppRoute && !isAuthRoute) {
    const res = NextResponse.next()
    if (pathname.startsWith("/auth/")) {
      res.headers.set("Cache-Control", "private, no-store")
    }
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

    // Unauthenticated users trying to access app routes → redirect to login
    if (isAppRoute && !user) {
      const url = request.nextUrl.clone()
      url.pathname = "/login"
      // Preserve the original target so login can bounce back after auth.
      url.searchParams.set("next", pathname + request.nextUrl.search)
      return NextResponse.redirect(url)
    }

    // Authenticated users on auth routes → redirect to dashboard
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
    // The proxy itself early-returns for non-(app)/(auth) routes (above), so
    // marketing/public pages do no auth work and stay cacheable.
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
  ],
}
