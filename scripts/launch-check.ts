/**
 * Pre-launch readiness check — a runnable "go-live checklist".
 *
 * Verifies the environment + assets the production site needs before you promote
 * it (or flip the paywall on), so misconfiguration is caught here instead of by
 * a real user at checkout/login/email time. Context-aware: Stripe vars are
 * FAILures when PAYWALL_ENABLED is on, and warnings (needed before you
 * monetize) when it's off.
 *
 * Run against your local env:
 *   node --experimental-strip-types --no-warnings --env-file=.env.local \
 *     scripts/launch-check.ts
 *
 * Or paste your production env into a file and point --env-file at it. Exits
 * non-zero if any FAIL, so it can gate a deploy step.
 *
 * It only reads process.env + the filesystem — no network, no secrets printed.
 */
import { existsSync } from "node:fs"
import { join } from "node:path"

type Level = "FAIL" | "WARN" | "OK"
interface Result {
  level: Level
  label: string
  detail: string
}

const results: Result[] = []
const ok = (label: string, detail = "") => results.push({ level: "OK", label, detail })
const warn = (label: string, detail: string) => results.push({ level: "WARN", label, detail })
const fail = (label: string, detail: string) => results.push({ level: "FAIL", label, detail })

const env = process.env
const isSet = (k: string) => typeof env[k] === "string" && env[k]!.trim() !== ""

const paywallOn = env.PAYWALL_ENABLED === "true"
// When the paywall is off (free beta) Stripe isn't user-reachable, so missing
// payment config is a warning, not a blocker.
const stripeLevel: (label: string, detail: string) => void = paywallOn ? fail : warn

// ---- Core: the app can't serve authenticated traffic without these ----
function checkCore() {
  for (const k of [
    "NEXT_PUBLIC_SUPABASE_URL",
    "NEXT_PUBLIC_SUPABASE_ANON_KEY",
    "SUPABASE_SERVICE_ROLE_KEY",
  ]) {
    if (isSet(k)) ok(k)
    else fail(k, "required — auth / webhooks / cron break without it")
  }
  if (isSet("NEXT_PUBLIC_SITE_URL")) {
    const url = env.NEXT_PUBLIC_SITE_URL!
    if (/^https:\/\//.test(url)) ok("NEXT_PUBLIC_SITE_URL", url)
    else warn("NEXT_PUBLIC_SITE_URL", `set but not https: "${url}" — canonical URLs/sitemap will be wrong`)
  } else {
    warn("NEXT_PUBLIC_SITE_URL", "unset — falls back to the www-canonical host; set it to your prod domain")
  }
}

// ---- Stripe: required to actually charge; only a blocker when paywall is on ----
const PLACEHOLDER_PRICES = new Set([
  "price_self_study",
  "price_self_study_guaranteed",
  "price_coaching",
  "price_intensive",
])
function isRealPriceId(v: string | undefined): boolean {
  return typeof v === "string" && /^price_[A-Za-z0-9]{8,}$/.test(v) && !PLACEHOLDER_PRICES.has(v)
}
function checkStripe() {
  if (isSet("STRIPE_SECRET_KEY")) ok("STRIPE_SECRET_KEY")
  else stripeLevel("STRIPE_SECRET_KEY", "unset — checkout returns 503")
  if (isSet("STRIPE_WEBHOOK_SECRET")) ok("STRIPE_WEBHOOK_SECRET")
  else stripeLevel("STRIPE_WEBHOOK_SECRET", "unset — purchases won't be recorded (webhook can't verify)")

  // selfStudyGuaranteed accepts the legacy _PLUS alias too.
  const priceEnvs: Array<[string, string | undefined]> = [
    ["STRIPE_PRICE_SELF_STUDY", env.STRIPE_PRICE_SELF_STUDY],
    [
      "STRIPE_PRICE_SELF_STUDY_GUARANTEED",
      env.STRIPE_PRICE_SELF_STUDY_GUARANTEED ?? env.STRIPE_PRICE_SELF_STUDY_PLUS,
    ],
    ["STRIPE_PRICE_COACHING", env.STRIPE_PRICE_COACHING],
    ["STRIPE_PRICE_INTENSIVE", env.STRIPE_PRICE_INTENSIVE],
  ]
  for (const [name, value] of priceEnvs) {
    if (!value) stripeLevel(name, "unset — this tier 503s at checkout")
    else if (!isRealPriceId(value))
      stripeLevel(name, `looks like a placeholder/invalid id ("${value}") — set a real Stripe price id`)
    else ok(name)
  }

  if (!paywallOn) {
    ok("PAYWALL_ENABLED", "false — free beta; Stripe items above are warnings, not blockers")
  } else {
    ok("PAYWALL_ENABLED", "true — monetization live; Stripe config is required")
  }
}

// ---- Email: confirmations + exam reminders bounce without these ----
function checkEmail() {
  if (isSet("RESEND_API_KEY")) ok("RESEND_API_KEY")
  else warn("RESEND_API_KEY", "unset — outbound email (reminders, etc.) is disabled")
  if (isSet("EMAIL_FROM")) ok("EMAIL_FROM", env.EMAIL_FROM!)
  else warn("EMAIL_FROM", "unset — needed as the From address; ensure the domain is verified in Resend")
}

// ---- Cron: the reminders job won't run / is unprotected without the secret ----
function checkCron() {
  if (isSet("CRON_SECRET")) ok("CRON_SECRET")
  else warn("CRON_SECRET", "unset — /api/cron/reminders rejects all calls (503) until set")
}

// ---- Observability: how you'd catch the NEXT incident ----
function checkObservability() {
  const sentry = isSet("SENTRY_DSN") || isSet("NEXT_PUBLIC_SENTRY_DSN")
  if (sentry) ok("Sentry DSN")
  else warn("Sentry DSN", "unset — server/client errors aren't captured (SENTRY_DSN / NEXT_PUBLIC_SENTRY_DSN)")
}

// ---- Assets ----
function checkAssets() {
  const png = join(process.cwd(), "public", "score-report.png")
  if (existsSync(png)) {
    ok("public/score-report.png", "present — the 100th-percentile proof on /about is active")
  } else {
    warn(
      "public/score-report.png",
      "missing — the /about score-report proof stays hidden (drop a redacted PNG to activate)"
    )
  }
}

function main() {
  checkCore()
  checkStripe()
  checkEmail()
  checkCron()
  checkObservability()
  checkAssets()

  const order: Record<Level, number> = { FAIL: 0, WARN: 1, OK: 2 }
  results.sort((a, b) => order[a.level] - order[b.level])

  console.log(`\nLaunch readiness — PAYWALL_ENABLED=${paywallOn ? "true" : "false"}\n`)
  for (const r of results) {
    const tag = r.level.padEnd(4)
    console.log(`  [${tag}] ${r.label}${r.detail ? ` — ${r.detail}` : ""}`)
  }

  const fails = results.filter((r) => r.level === "FAIL").length
  const warns = results.filter((r) => r.level === "WARN").length
  console.log(`\n${fails} blocker(s), ${warns} warning(s), ${results.length - fails - warns} ok.`)
  if (fails > 0) {
    console.log("Not launch-ready: resolve the blockers above.\n")
    process.exit(1)
  }
  console.log(
    warns > 0
      ? "No blockers. Review the warnings before going fully live.\n"
      : "All checks passed.\n"
  )
}

main()
