/**
 * Grant platform access to specific users by inserting a `purchases` row — marks
 * them "paid" so they keep full access once PAYWALL_ENABLED is on. Use for
 * people who paid off-platform or are comped.
 *
 * Dry-run (verifies each account exists, prints what it WOULD insert, writes
 * nothing):
 *   node --experimental-strip-types --no-warnings --env-file=.env.local \
 *     scripts/grant-access.ts --plan self_study_guaranteed \
 *     --emails a@x.com,b@y.com
 *
 * Apply for real:
 *   node --experimental-strip-types --no-warnings --env-file=.env.local \
 *     scripts/grant-access.ts --plan self_study_guaranteed \
 *     --emails a@x.com,b@y.com --apply
 *
 * Optional: --amount <cents> (recorded on the row, does not affect access).
 * Idempotent: skips any user who already has an active (non-revoked) purchase.
 * plan_id must match PAID_PLAN_IDS in src/lib/entitlements.ts + the table CHECK.
 */
import { createClient } from "@supabase/supabase-js"

const PLAN_IDS = new Set([
  "self_study",
  "self_study_guaranteed",
  "coaching",
  "intensive",
])

function arg(name: string): string | null {
  const i = process.argv.indexOf(name)
  return i >= 0 ? (process.argv[i + 1] ?? null) : null
}

const APPLY = process.argv.includes("--apply")
const plan = arg("--plan")
const emails = (arg("--emails") ?? "")
  .split(",")
  .map((e) => e.trim().toLowerCase())
  .filter(Boolean)
const amountCents = Number(arg("--amount") ?? "0")

if (!plan || !PLAN_IDS.has(plan)) {
  console.error(`--plan must be one of: ${[...PLAN_IDS].join(", ")}`)
  process.exit(1)
}
if (emails.length === 0) {
  console.error("--emails a@x.com,b@y.com is required")
  process.exit(1)
}

const url = process.env.NEXT_PUBLIC_SUPABASE_URL
const key = process.env.SUPABASE_SERVICE_ROLE_KEY
if (!url || !key) {
  console.error("Missing NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY")
  process.exit(1)
}
const admin = createClient(url, key, {
  auth: { autoRefreshToken: false, persistSession: false },
})

// Load all users into an email -> user map (small user base; one pass).
const byEmail = new Map<string, { id: string; email?: string }>()
for (let page = 1; page < 50; page++) {
  const { data, error } = await admin.auth.admin.listUsers({ page, perPage: 200 })
  if (error) {
    console.error("listUsers error:", error.message)
    process.exit(1)
  }
  for (const u of data.users) if (u.email) byEmail.set(u.email.toLowerCase(), u)
  if (data.users.length < 200) break
}

console.log(
  `${APPLY ? "APPLY" : "DRY-RUN"} — grant plan="${plan}" (amount ${amountCents}c) to ${emails.length} email(s):\n`
)
let granted = 0
let skipped = 0
for (const email of emails) {
  const user = byEmail.get(email)
  if (!user) {
    console.log(`  SKIP    ${email} — no account (they must sign up first)`)
    skipped++
    continue
  }
  const { data: existing } = await admin
    .from("purchases")
    .select("plan_id")
    .eq("user_id", user.id)
    .is("revoked_at", null)
  if (existing && existing.length > 0) {
    console.log(
      `  SKIP    ${email} — already active: ${existing.map((e) => e.plan_id).join(", ")}`
    )
    skipped++
    continue
  }
  if (!APPLY) {
    console.log(`  WOULD GRANT  ${email} (${user.id}) -> ${plan}`)
    granted++
    continue
  }
  const { error } = await admin.from("purchases").insert({
    user_id: user.id,
    plan_id: plan,
    // Timestamped so a revoke-then-regrant never collides with the unique
    // index on stripe_session_id (a bare `manual-<id>` would).
    stripe_session_id: `manual-${user.id}-${Date.now()}`,
    amount_cents: amountCents,
    currency: "usd",
    paid_at: new Date().toISOString(),
  })
  if (error) {
    console.log(`  ERROR   ${email}: ${error.message}`)
  } else {
    console.log(`  GRANTED ${email} -> ${plan}`)
    granted++
  }
}
console.log(
  `\n${APPLY ? "Granted" : "Would grant"}: ${granted}. Skipped: ${skipped}.`
)
