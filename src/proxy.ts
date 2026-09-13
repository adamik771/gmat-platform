import { NextResponse, type NextRequest } from "next/server"
import { createSupabaseProxy } from "@/lib/supabase/proxy"
import {
  PAYWALL_ENABLED,
  trialStartFor,
  isWithinTrial,
  resolveAccess,
  accessGrants,
  getPlanTierForUser,
} from "@/lib/entitlements"

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
  "/purchase-success",
  "/qa",
  "/review",
  "/score-calculator",
  "/settings",
  "/study-plan",
  "/test-builder",
  "/upgrade",
]

// App routes a signed-in user can reach even when their trial has ended with
// no plan: the block screen itself, the verified checkout return (which
// records the purchase that unblocks them), and account management — a
// blocked user must keep settings / email / deletion (GDPR hygiene). Study
// surfaces stay all-or-nothing.
const GATE_EXEMPT_ROUTES = ["/upgrade", "/purchase-success", "/settings"]

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

  const { pathname } = request.nextUrl
  const isAppRoute = APP_ROUTES.some(
    (route) => pathname === route || pathname.startsWith(route + "/")
  )
  const isAuthRoute = AUTH_ROUTES.some(
    (route) => pathname === route || pathname.startsWith(route + "/")
  )

  // Public pages do not depend on authentication and should remain available
  // during an auth-provider outage. Auth and app pages must never render unless
  // the user's identity can be verified.
  if (!isAppRoute && !isAuthRoute) {
    const res = NextResponse.next()
    if (pathname.startsWith("/auth/")) {
      res.headers.set("Cache-Control", "private, no-store")
    }
    return res
  }

  // Missing auth configuration is a deployment failure, not permission to
  // bypass authentication. Fail closed for every auth-dependent route.
  if (
    !process.env.NEXT_PUBLIC_SUPABASE_URL ||
    !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  ) {
    return authUnavailableResponse()
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

    // Paywall / trial gate (a no-op while PAYWALL_ENABLED is off). A signed-in
    // user whose in-app free trial has ended with no active plan is redirected
    // to /upgrade — the app is all-or-nothing: trial = full access, expired =
    // blocked, paid = full access. GATE_EXEMPT_ROUTES stay reachable so they
    // can buy and manage their account, and the block only ever gates ACCESS —
    // their account + data are untouched. The purchases read happens only once
    // the trial window has closed (trialing users skip it).
    if (
      PAYWALL_ENABLED &&
      isAppRoute &&
      user &&
      !GATE_EXEMPT_ROUTES.some(
        (route) => pathname === route || pathname.startsWith(route + "/")
      )
    ) {
      const now = new Date()
      const trialStartedAt = trialStartFor(user)
      if (!isWithinTrial(trialStartedAt, now)) {
        const tier = await getPlanTierForUser(supabase, user.id)
        if (!accessGrants(resolveAccess({ tier, trialStartedAt, now }))) {
          const url = request.nextUrl.clone()
          url.pathname = "/upgrade"
          return NextResponse.redirect(url)
        }
      }
    }

    const finalResponse = response()
    // Prevent CDN caching of auth-aware responses — otherwise a stale
    // "unauthenticated" response could leak to a logged-in user, or a
    // cached redirect could keep firing after they log in.
    finalResponse.headers.set("Cache-Control", "private, no-store")
    return finalResponse
  } catch (error) {
    console.error("[proxy] authentication unavailable", error)
    return authUnavailableResponse()
  }
}

function authUnavailableResponse() {
  return new NextResponse("Authentication is temporarily unavailable. Please try again.", {
    status: 503,
    headers: {
      "Cache-Control": "private, no-store",
      "Content-Type": "text/plain; charset=utf-8",
      "Retry-After": "30",
    },
  })
}

export const config = {
  matcher: [
    // Match all routes except static assets, API routes, and metadata files.
    // The proxy itself early-returns for non-(app)/(auth) routes (above), so
    // marketing/public pages do no auth work and stay cacheable.
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
  ],
}
