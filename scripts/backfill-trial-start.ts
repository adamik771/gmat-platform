/**
 * LEGACY PATH — superseded by PAYWALL_TRIAL_EPOCH. Setting that env var to the
 * flip instant makes the gate derive every trial start server-side from
 * max(user.created_at, epoch), which needs no per-user writes and cannot be
 * tampered with via user_metadata (see entitlements.ts::trialStartFor). Prefer
 * the epoch; this script remains only for the metadata fallback path.
 *
 * Backfill `user_metadata.trial_started_at` for existing users who don't have
 * it, so that when PAYWALL_ENABLED is flipped on they get a fresh trial window
 * instead of being blocked immediately. Accounts created via signup after the
 * trial-gate deploy already get this stamped, so this only touches the older
 * accounts.
 *
 * IMPORTANT: run this RIGHT BEFORE you flip the paywall. The trial clock starts
 * at --at (default: now), so backfilling weeks early would expire everyone's
 * trial before launch.
 *
 * Dry-run (prints who WOULD be set, writes nothing):
 *   node --experimental-strip-types --no-warnings --env-file=.env.local \
 *     scripts/backfill-trial-start.ts
 *
 * Apply (start everyone's trial now):
 *   node --experimental-strip-types --no-warnings --env-file=.env.local \
 *     scripts/backfill-trial-start.ts --apply
 *
 * Custom start instant (e.g. a scheduled launch time):
 *   ... scripts/backfill-trial-start.ts --at 2026-08-01T09:00:00Z --apply
 *
 * Idempotent: users who already have trial_started_at are left untouched.
 */
import { createClient } from "@supabase/supabase-js"

function arg(name: string): string | null {
  const i = process.argv.indexOf(name)
  return i >= 0 ? (process.argv[i + 1] ?? null) : null
}

const APPLY = process.argv.includes("--apply")
const AT = arg("--at") ?? new Date().toISOString()
if (Number.isNaN(new Date(AT).getTime())) {
  console.error(`--at is not a valid date: ${AT}`)
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

console.log(
  `${APPLY ? "APPLY" : "DRY-RUN"} — set trial_started_at=${AT} for users missing it:\n`
)
let set = 0
let already = 0
for (let page = 1; page < 50; page++) {
  const { data, error } = await admin.auth.admin.listUsers({ page, perPage: 200 })
  if (error) {
    console.error("listUsers error:", error.message)
    process.exit(1)
  }
  for (const u of data.users) {
    const meta = (u.user_metadata ?? {}) as Record<string, unknown>
    if (typeof meta.trial_started_at === "string" && meta.trial_started_at) {
      already++
      continue
    }
    if (!APPLY) {
      console.log(`  WOULD SET  ${u.email}`)
      set++
      continue
    }
    const { error: upErr } = await admin.auth.admin.updateUserById(u.id, {
      user_metadata: { ...meta, trial_started_at: AT },
    })
    if (upErr) {
      console.log(`  ERROR  ${u.email}: ${upErr.message}`)
    } else {
      console.log(`  SET    ${u.email}`)
      set++
    }
  }
  if (data.users.length < 200) break
}
console.log(
  `\n${APPLY ? "Set" : "Would set"}: ${set}. Already had a trial start: ${already}.`
)
