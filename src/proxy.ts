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
  "/diagnostic",
  "/error-log",
  "/guides",
  "/learn",
  "/mock",
  "/onboarding",
  "/practice",
  "/qa",
  "/review",
  "/settings",
  "/study-plan",
  "/test-builder",
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
