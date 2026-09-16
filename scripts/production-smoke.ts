/**
 * Read-only production smoke test.
 *
 * It sends no credentials, follows no redirects, creates no accounts, and
 * performs no writes. API POSTs intentionally stop at the authentication
 * boundary and must return 401 before their bodies are parsed.
 */

const DEFAULT_ORIGIN = "https://www.zakariangmat.com"
const TIMEOUT_MS = 15_000

interface Check {
  label: string
  path: string
  method?: "GET" | "POST"
  expectedStatus: number
  locationPrefix?: string
}

const checks: Check[] = [
  { label: "home", path: "/", expectedStatus: 200 },
  { label: "pricing", path: "/pricing", expectedStatus: 200 },
  { label: "login", path: "/login", expectedStatus: 200 },
  { label: "signup", path: "/signup", expectedStatus: 200 },
  { label: "free trial", path: "/gmat-free-trial", expectedStatus: 200 },
  { label: "study plan", path: "/gmat-study-plan", expectedStatus: 200 },
  {
    label: "practice questions",
    path: "/gmat-practice-questions-free",
    expectedStatus: 200,
  },
  { label: "blog", path: "/blog", expectedStatus: 200 },
  { label: "sitemap", path: "/sitemap.xml", expectedStatus: 200 },
  { label: "robots", path: "/robots.txt", expectedStatus: 200 },
  ...["/dashboard", "/chapters", "/practice", "/review", "/test-builder", "/settings"].map(
    (path): Check => ({
      label: `auth gate ${path}`,
      path,
      expectedStatus: 307,
      locationPrefix: `/login?next=${encodeURIComponent(path)}`,
    })
  ),
  ...[
    "/api/checkout",
    "/api/practice-sessions",
    "/api/chapter-progress",
    "/api/saved-for-review",
  ].map(
    (path): Check => ({
      label: `API auth gate ${path}`,
      path,
      method: "POST",
      expectedStatus: 401,
    })
  ),
]

function normalizeOrigin(value: string) {
  const url = new URL(value)
  if (url.protocol !== "https:" && !["localhost", "127.0.0.1"].includes(url.hostname)) {
    throw new Error("Smoke-test origin must use HTTPS")
  }
  return url.origin
}

async function runCheck(origin: string, check: Check) {
  const started = performance.now()
  const response = await fetch(new URL(check.path, origin), {
    method: check.method ?? "GET",
    redirect: "manual",
    headers: check.method === "POST" ? { "content-type": "application/json" } : undefined,
    body: check.method === "POST" ? "{}" : undefined,
    signal: AbortSignal.timeout(TIMEOUT_MS),
  })
  const elapsedMs = Math.round(performance.now() - started)
  const location = response.headers.get("location")
  const statusOk = response.status === check.expectedStatus
  const locationOk =
    !check.locationPrefix ||
    !!location?.startsWith(check.locationPrefix)
  const privateCacheOk =
    !check.path.startsWith("/api/") && check.expectedStatus === 307
      ? /(?:^|,)\s*(?:private|no-store)\b/i.test(response.headers.get("cache-control") ?? "")
      : true

  return {
    ...check,
    status: response.status,
    elapsedMs,
    location,
    pass: statusOk && locationOk && privateCacheOk,
    details: !statusOk
      ? `expected ${check.expectedStatus}`
      : !locationOk
        ? `unexpected redirect ${location ?? "(missing)"}`
        : !privateCacheOk
          ? "authenticated route response is missing private/no-store caching"
          : "",
  }
}

async function main() {
  const origin = normalizeOrigin(process.argv[2] ?? DEFAULT_ORIGIN)
  console.log(`[production-smoke] Read-only checks against ${origin}`)
  let failed = 0

  for (const check of checks) {
    try {
      const result = await runCheck(origin, check)
      if (!result.pass) failed += 1
      const redirect = result.location ? ` -> ${result.location}` : ""
      const detail = result.details ? ` (${result.details})` : ""
      console.log(
        `${result.pass ? "PASS" : "FAIL"} ${result.label}: ${result.status}${redirect} ${result.elapsedMs}ms${detail}`
      )
    } catch (error) {
      failed += 1
      const message = error instanceof Error ? error.message : "request failed"
      console.log(`FAIL ${check.label}: ${message.slice(0, 160)}`)
    }
  }

  console.log(`[production-smoke] ${checks.length - failed}/${checks.length} checks passed`)
  if (failed > 0) process.exitCode = 1
}

await main()
