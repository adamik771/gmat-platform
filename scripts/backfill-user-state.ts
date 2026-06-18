/**
 * One-time backfill: move the relocated per-user state OUT of Supabase Auth
 * `user_metadata` and INTO the `public.user_state` table, then null those keys
 * out of user_metadata so each user's auth JWT (and therefore the
 * `sb-…-auth-token` cookie) shrinks back under Vercel's request-header limit.
 *
 * This is what unblocks users who are already getting `494
 * REQUEST_HEADER_TOO_LARGE`: their cookie can't be fixed in-app (the request is
 * rejected at the edge before any route runs), so it has to be trimmed
 * server-side with the service-role key, which is what this script does.
 *
 * PREREQUISITES:
 *   1. Run USER_STATE_MIGRATION_SQL (see src/lib/user-state.ts) in Supabase so
 *      the table + RLS exist.
 *   2. Deploy the app code that reads/writes via getUserState/patchUserState.
 *
 * Run (dry-run, prints what it WOULD change, touches nothing):
 *   node --experimental-strip-types --no-warnings --env-file=.env.local \
 *     scripts/backfill-user-state.ts
 *
 * Apply for real:
 *   node --experimental-strip-types --no-warnings --env-file=.env.local \
 *     scripts/backfill-user-state.ts --apply
 *
 * Trim a single user (e.g. to unblock one locked-out person immediately):
 *   node --experimental-strip-types --no-warnings --env-file=.env.local \
 *     scripts/backfill-user-state.ts --apply --email someone@example.com
 *
 * Idempotent: safe to re-run. Table data already written by the live app
 * (patchUserState) takes precedence over the legacy metadata copy.
 */
import { createClient } from "@supabase/supabase-js"

// Keep in sync with USER_STATE_KEYS in src/lib/user-state.ts (that module is
// server-only and can't be imported into a plain node script).
const STATE_KEYS = [
  "chapter_progress",
  "saved_for_review",
  "confidence_log",
  "mock_flags",
  "mock_review_edits",
  "drill_reviews",
  "checkpoint_reviews",
  "topic_skill_levels",
  "official_exam_scores",
] as const

const APPLY = process.argv.includes("--apply")
const emailFlag = process.argv.indexOf("--email")
const ONLY_EMAIL = emailFlag >= 0 ? process.argv[emailFlag + 1]?.toLowerCase() : null

const url = process.env.NEXT_PUBLIC_SUPABASE_URL
const key = process.env.SUPABASE_SERVICE_ROLE_KEY
if (!url || !key) {
  console.error("Missing NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY")
  process.exit(1)
}

const admin = createClient(url, key, {
  auth: { autoRefreshToken: false, persistSession: false },
})

function pickLegacy(meta: Record<string, unknown> | undefined | null) {
  const out: Record<string, unknown> = {}
  if (!meta) return out
  for (const k of STATE_KEYS) {
    if (meta[k] !== undefined && meta[k] !== null) out[k] = meta[k]
  }
  return out
}

function approxBytes(obj: unknown): number {
  try {
    return Buffer.byteLength(JSON.stringify(obj) ?? "", "utf8")
  } catch {
    return 0
  }
}

async function migrateUser(user: {
  id: string
  email?: string
  user_metadata?: Record<string, unknown>
}): Promise<{ moved: boolean; bytes: number }> {
  const legacy = pickLegacy(user.user_metadata)
  const movedKeys = Object.keys(legacy)
  if (movedKeys.length === 0) return { moved: false, bytes: 0 }

  const bytes = approxBytes(legacy)

  if (!APPLY) {
    console.log(
      `  [dry-run] ${user.email ?? user.id}: would move ${movedKeys.join(", ")} (~${bytes} bytes)`,
    )
    return { moved: true, bytes }
  }

  // Existing table data (written by the live app) wins over the legacy copy.
  const { data: existing, error: readErr } = await admin
    .from("user_state")
    .select("data")
    .eq("user_id", user.id)
    .maybeSingle()
  if (readErr) {
    // Don't risk overwriting fresher app-written table data with stale metadata
    // on a transient read error — skip this user and let a re-run handle it.
    console.error(`  SKIP ${user.email ?? user.id}: state read failed (${readErr.message})`)
    return { moved: false, bytes: 0 }
  }
  const merged = { ...legacy, ...((existing?.data as Record<string, unknown>) ?? {}) }

  const { error: upsertErr } = await admin
    .from("user_state")
    .upsert(
      { user_id: user.id, data: merged, updated_at: new Date().toISOString() },
      { onConflict: "user_id" },
    )
  if (upsertErr) {
    console.error(`  ERROR upserting ${user.email ?? user.id}: ${upsertErr.message}`)
    return { moved: false, bytes: 0 }
  }

  // Strip the moved keys from user_metadata so the JWT/cookie shrinks. Setting
  // them to null collapses the large blobs to a tiny null.
  const cleared: Record<string, null> = {}
  for (const k of movedKeys) cleared[k] = null
  const { error: stripErr } = await admin.auth.admin.updateUserById(user.id, {
    user_metadata: cleared,
  })
  if (stripErr) {
    console.error(`  ERROR stripping metadata for ${user.email ?? user.id}: ${stripErr.message}`)
    return { moved: false, bytes: 0 }
  }

  console.log(`  migrated ${user.email ?? user.id}: ${movedKeys.join(", ")} (~${bytes} bytes freed)`)
  return { moved: true, bytes }
}

async function main() {
  console.log(
    `Backfill user_state — ${APPLY ? "APPLY" : "DRY RUN"}${ONLY_EMAIL ? ` (only ${ONLY_EMAIL})` : ""}\n`,
  )

  let page = 1
  let scanned = 0
  let moved = 0
  let freed = 0
  const perPage = 200

  for (;;) {
    const { data, error } = await admin.auth.admin.listUsers({ page, perPage })
    if (error) {
      console.error(`listUsers page ${page} failed: ${error.message}`)
      process.exit(1)
    }
    const users = data.users ?? []
    if (users.length === 0) break

    for (const u of users) {
      if (ONLY_EMAIL && u.email?.toLowerCase() !== ONLY_EMAIL) continue
      scanned++
      const res = await migrateUser(u as never)
      if (res.moved) {
        moved++
        freed += res.bytes
      }
    }

    if (users.length < perPage) break
    page++
  }

  console.log(
    `\nDone. Scanned ${scanned} user(s); ${moved} had relocatable state${
      APPLY ? `; ~${freed} bytes removed from auth metadata` : " (dry run — nothing changed)"
    }.`,
  )
  if (!APPLY && moved > 0) console.log("Re-run with --apply to perform the migration.")
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
