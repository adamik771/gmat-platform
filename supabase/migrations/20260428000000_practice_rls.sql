-- =============================================================================
-- Wave: practice_sessions + practice_attempts — Row-Level Security
-- =============================================================================
--
-- Background: an audit on 2026-04-28 could not locate documented RLS policies
-- for these two tables, even though all four other public tables (error_tags,
-- lesson_completions, purchases, beta_feedback) have proper RLS. Without RLS,
-- any authenticated user can read/write every other user's session + attempt
-- rows by bypassing the .eq("user_id", user.id) filter that lives in code.
--
-- This migration is idempotent — safe to re-run. `if not exists` clauses on
-- every policy and `enable row level security` is benign if already enabled.
-- =============================================================================

-- -----------------------------------------------------------------------------
-- practice_sessions — one row per drill / diagnostic / mock session
-- -----------------------------------------------------------------------------
alter table public.practice_sessions enable row level security;

drop policy if exists "practice_sessions_select_own" on public.practice_sessions;
create policy "practice_sessions_select_own"
  on public.practice_sessions for select
  to authenticated
  using (auth.uid() = user_id);

drop policy if exists "practice_sessions_insert_own" on public.practice_sessions;
create policy "practice_sessions_insert_own"
  on public.practice_sessions for insert
  to authenticated
  with check (auth.uid() = user_id);

drop policy if exists "practice_sessions_update_own" on public.practice_sessions;
create policy "practice_sessions_update_own"
  on public.practice_sessions for update
  to authenticated
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

drop policy if exists "practice_sessions_delete_own" on public.practice_sessions;
create policy "practice_sessions_delete_own"
  on public.practice_sessions for delete
  to authenticated
  using (auth.uid() = user_id);


-- -----------------------------------------------------------------------------
-- practice_attempts — one row per question attempt within a session
-- -----------------------------------------------------------------------------
alter table public.practice_attempts enable row level security;

drop policy if exists "practice_attempts_select_own" on public.practice_attempts;
create policy "practice_attempts_select_own"
  on public.practice_attempts for select
  to authenticated
  using (auth.uid() = user_id);

drop policy if exists "practice_attempts_insert_own" on public.practice_attempts;
create policy "practice_attempts_insert_own"
  on public.practice_attempts for insert
  to authenticated
  with check (auth.uid() = user_id);

drop policy if exists "practice_attempts_update_own" on public.practice_attempts;
create policy "practice_attempts_update_own"
  on public.practice_attempts for update
  to authenticated
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

drop policy if exists "practice_attempts_delete_own" on public.practice_attempts;
create policy "practice_attempts_delete_own"
  on public.practice_attempts for delete
  to authenticated
  using (auth.uid() = user_id);
