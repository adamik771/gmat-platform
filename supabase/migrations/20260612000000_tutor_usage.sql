-- =============================================================================
-- tutor_usage — per-user AI-tutor request log, drives the /api/tutor rate limit
-- =============================================================================
--
-- One row per tutor request. The API route counts a user's rows in the last
-- hour / 24 hours before calling the Anthropic API and rejects with 429 when
-- the limit is hit, capping key spend if the endpoint is abused. The route is
-- fail-open until this migration is applied: if the table is missing, the
-- limiter logs and allows, so applying this migration is what arms the limit.
--
-- Idempotent — safe to re-run.
-- =============================================================================

create table if not exists public.tutor_usage (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users (id) on delete cascade,
  created_at timestamptz not null default now()
);

create index if not exists tutor_usage_user_created_idx
  on public.tutor_usage (user_id, created_at desc);

alter table public.tutor_usage enable row level security;

-- The API route runs with the caller's JWT (createSupabaseServer), so the
-- user inserts/reads their own rows. No update/delete: the log is append-only
-- and rows older than the 24h window are simply ignored by the limiter.
drop policy if exists "tutor_usage_select_own" on public.tutor_usage;
create policy "tutor_usage_select_own"
  on public.tutor_usage for select
  to authenticated
  using (auth.uid() = user_id);

drop policy if exists "tutor_usage_insert_own" on public.tutor_usage;
create policy "tutor_usage_insert_own"
  on public.tutor_usage for insert
  to authenticated
  with check (auth.uid() = user_id);
