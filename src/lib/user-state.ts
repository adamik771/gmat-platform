import "server-only"
import type { SupabaseClient, User } from "@supabase/supabase-js"
import { USER_STATE_KEYS, type UserStateKey, type UserState } from "./user-state-keys"

export { USER_STATE_KEYS, type UserStateKey, type UserState }

/**
 * Per-user app state that GROWS with usage — chapter progress, saved
 * questions, confidence logs, mock flags, etc.
 *
 * Why this module exists: Supabase embeds `user_metadata` inside the auth
 * JWT, which the SSR client stores in the `sb-…-auth-token` cookie. We used
 * to keep all of this state in `user_metadata`, so an active student's cookie
 * grew without bound and eventually blew past Vercel's request-header limit —
 * every request then failed with `494 REQUEST_HEADER_TOO_LARGE` and the user
 * was locked out of the whole site. `user_metadata` is only safe for SMALL,
 * bounded scalars (target_score, exam_date, full_name, notification_prefs,
 * onboarding flag, role). Anything that grows lives here instead, in the
 * `public.user_state` table, so it never rides in the cookie.
 *
 * Migration safety:
 *   - getUserState reads the table; if the row doesn't exist yet it falls back
 *     to the legacy copy still in user_metadata, so existing users keep their
 *     data until the one-time backfill (scripts/backfill-user-state.ts) runs.
 *   - patchUserState writes the table AND nulls the moved keys out of
 *     user_metadata, so the next token refresh shrinks the cookie.
 *
 * Small scalars stay in user_metadata (see /api/target-score, /api/profile,
 * /api/notification-prefs) — those routes are intentionally NOT touched.
 */

/** Manual bootstrap SQL mirroring the versioned user_state migration. */
export const USER_STATE_MIGRATION_SQL = `
create table if not exists public.user_state (
  user_id uuid primary key references auth.users(id) on delete cascade,
  data jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);

alter table public.user_state enable row level security;

drop policy if exists "user_state_select_own" on public.user_state;
create policy "user_state_select_own" on public.user_state
  for select to authenticated using (auth.uid() = user_id);

drop policy if exists "user_state_insert_own" on public.user_state;
create policy "user_state_insert_own" on public.user_state
  for insert to authenticated with check (auth.uid() = user_id);

drop policy if exists "user_state_update_own" on public.user_state;
create policy "user_state_update_own" on public.user_state
  for update to authenticated
  using (auth.uid() = user_id) with check (auth.uid() = user_id);

-- Atomic top-level jsonb merge for the caller's own row. Legacy metadata is
-- used only to seed a missing row; conflict updates merge only the new patch.
-- security invoker → the insert/update still run under the caller's RLS.
create or replace function public.merge_user_state_seeded(
  p_patch jsonb,
  p_legacy_seed jsonb
)
  returns void
  language sql
  security invoker
as $$
  insert into public.user_state (user_id, data, updated_at)
  values (
    auth.uid(),
    coalesce(p_legacy_seed, '{}'::jsonb) || coalesce(p_patch, '{}'::jsonb),
    now()
  )
  on conflict (user_id) do update
    set data = public.user_state.data || coalesce(p_patch, '{}'::jsonb),
        updated_at = now();
$$;

revoke all on function public.merge_user_state_seeded(jsonb, jsonb) from public;
grant execute on function public.merge_user_state_seeded(jsonb, jsonb) to authenticated;
`.trim()

/** Pull the relocated keys out of a user_metadata blob (legacy fallback). */
function pickLegacy(metadata: Record<string, unknown> | undefined | null): UserState {
  if (!metadata) return {}
  const out: UserState = {}
  for (const key of USER_STATE_KEYS) {
    const v = metadata[key]
    if (v !== undefined && v !== null) out[key] = v
  }
  return out
}

/**
 * Read the raw state row, distinguishing three cases so callers don't conflate
 * "row genuinely absent" with "read errored transiently":
 *   - { row, errored:false } when a row exists
 *   - { row:null, errored:false } when the row is genuinely absent (clean)
 *   - { row:null, errored:true } when the read failed (network/RLS/5xx, or the
 *     table doesn't exist yet)
 */
async function readStateRow(
  supabase: SupabaseClient,
  user: User,
): Promise<{ row: UserState | null; errored: boolean }> {
  const { data, error } = await supabase
    .from("user_state")
    .select("data")
    .eq("user_id", user.id)
    // Must stay maybeSingle(): zero rows returns {data:null,error:null}, which is
    // how patchUserState distinguishes a genuinely-absent row (safe first-write
    // base) from a transient read error (abort to avoid clobber). Swapping to
    // single() would make every first-write error out and break new users.
    .maybeSingle()
  if (error) return { row: null, errored: true }
  if (data && data.data && typeof data.data === "object") {
    return { row: data.data as UserState, errored: false }
  }
  return { row: null, errored: false }
}

/**
 * Read a user's relocated state. Call ONCE per request/page and read multiple
 * keys off the result — don't call per key. Falls back to user_metadata when
 * the table row hasn't been created yet (pre-backfill users) OR on a transient
 * read error — best-effort for READS. Writes must use patchUserState, which
 * does NOT fall back on error (see below) to avoid clobbering the row.
 */
export async function getUserState(
  supabase: SupabaseClient,
  user: User,
): Promise<UserState> {
  const { row } = await readStateRow(supabase, user)
  if (row) return row
  // Absent row OR transient read error → legacy copy still in the auth metadata.
  return pickLegacy(user.user_metadata as Record<string, unknown> | undefined)
}

/**
 * Error-aware read for READ-MODIFY-WRITE flows (e.g. /api/chapter-progress,
 * which merges one chapter into the whole chapter_progress map). Unlike
 * getUserState, a FAILED row read is surfaced instead of silently degrading
 * to the (post-strip, usually empty) legacy copy — a caller that proceeded
 * with {} would clobber every sibling key of the map it is patching. Abort
 * the write when `errored` is true.
 */
export async function getUserStateForWrite(
  supabase: SupabaseClient,
  user: User,
): Promise<{ state: UserState; errored: boolean }> {
  const { row, errored } = await readStateRow(supabase, user)
  if (errored) return { state: {}, errored: true }
  return {
    state:
      row ?? pickLegacy(user.user_metadata as Record<string, unknown> | undefined),
    errored: false,
  }
}

/**
 * Merge a patch into the user's state row, then strip the relocated keys from
 * user_metadata so the auth cookie shrinks. Pass only the keys you are changing;
 * existing keys are preserved.
 *
 * DATA SAFETY: the merge happens server-side in one atomic statement, so there
 * is NO read-modify-write window. Legacy metadata and the patch are separate RPC
 * inputs: SQL uses `legacy || patch` only when inserting a missing row, while a
 * conflict update uses `stored || patch`. Stale metadata therefore cannot
 * overwrite canonical state after the row exists, even if cookie cleanup fails.
 */
export async function patchUserState(
  supabase: SupabaseClient,
  user: User,
  patch: UserState,
): Promise<{ error: string | null }> {
  // Keep the seed separate from the patch. The RPC applies it only on insert;
  // sending it again is harmless once the canonical row exists.
  const legacySeed = pickLegacy(
    user.user_metadata as Record<string, unknown> | undefined,
  )

  const { error } = await supabase.rpc("merge_user_state_seeded", {
    p_patch: patch,
    p_legacy_seed: legacySeed,
  })
  if (error) return { error: error.message }

  // Shrink the cookie: null out any relocated keys still living in the JWT.
  // After the first strip they are null (tiny), so this no-ops thereafter.
  const meta = (user.user_metadata as Record<string, unknown> | undefined) ?? {}
  const stale = USER_STATE_KEYS.filter((k) => meta[k] !== undefined && meta[k] !== null)
  if (stale.length) {
    const cleared: Record<string, null> = {}
    for (const k of stale) cleared[k] = null
    await supabase.auth.updateUser({ data: cleared })
  }

  return { error: null }
}
