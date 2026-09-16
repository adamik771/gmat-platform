-- =============================================================================
-- user_state: seed legacy auth metadata once, then merge canonical patches
--
-- The original merge_user_state(jsonb) RPC received legacy user_metadata
-- already folded into every patch. If metadata cleanup failed or a stale JWT
-- remained in circulation, later writes could replay old values over the
-- canonical row. This RPC keeps the two inputs separate so PostgreSQL can use
-- the legacy data only in the INSERT branch.
--
-- The old RPC is deliberately left in place for rolling-deploy compatibility.
-- Remove it in a later migration after all old app instances have drained.
-- =============================================================================

create table if not exists public.user_state (
  user_id uuid primary key references auth.users(id) on delete cascade,
  data jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);

alter table public.user_state enable row level security;

drop policy if exists "user_state_select_own" on public.user_state;
create policy "user_state_select_own" on public.user_state
  for select to authenticated
  using (auth.uid() = user_id);

drop policy if exists "user_state_insert_own" on public.user_state;
create policy "user_state_insert_own" on public.user_state
  for insert to authenticated
  with check (auth.uid() = user_id);

drop policy if exists "user_state_update_own" on public.user_state;
create policy "user_state_update_own" on public.user_state
  for update to authenticated
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

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

comment on function public.merge_user_state_seeded(jsonb, jsonb) is
  'Atomically seeds a missing user_state row from legacy metadata, then merges only p_patch on conflicts.';
