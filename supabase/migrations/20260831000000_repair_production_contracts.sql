-- Repair production contracts that were confirmed missing by the deploy-time
-- Supabase schema check. Every statement is safe to rerun.

-- Error-log classification and remediation fields.
alter table public.error_tags
  add column if not exists root_cause text
    check (root_cause is null or root_cause in (
      'K1','K2','R1','R2','S1','S2','E1','E2','P1','P2','J1','F1'
    )),
  add column if not exists remediation_assigned_at timestamptz null,
  add column if not exists remediation_completed_at timestamptz null;

alter table public.error_tags drop constraint if exists error_tags_remediation_order;

do $$
begin
  alter table public.error_tags add constraint error_tags_remediation_order
    check (
      remediation_completed_at is null
      or remediation_assigned_at is not null
    );
exception
  when duplicate_object then null;
end
$$;

-- Durable, service-only account erasure queue.
create table if not exists public.account_deletion_jobs (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null unique,
  email text check (email is null or email = lower(email)),
  attempts integer not null default 0 check (attempts >= 0),
  requested_at timestamptz not null default now(),
  next_attempt_at timestamptz not null default now(),
  last_error_code text check (
    last_error_code is null or last_error_code in (
      'auth_delete_failed',
      'database_cleanup_failed'
    )
  )
);

create index if not exists account_deletion_jobs_due_idx
  on public.account_deletion_jobs (next_attempt_at, requested_at);

alter table public.account_deletion_jobs enable row level security;
revoke all on table public.account_deletion_jobs from anon, authenticated;
grant select, insert, update, delete on table public.account_deletion_jobs to service_role;

create or replace function public.complete_account_deletion(p_job_id uuid)
returns void
language plpgsql
security definer
set search_path = ''
as $$
declare
  v_user_id uuid;
  v_email text;
begin
  select user_id, email
    into v_user_id, v_email
    from public.account_deletion_jobs
   where id = p_job_id
   for update;

  if not found then
    raise exception 'account deletion job not found' using errcode = 'P0002';
  end if;

  delete from public.error_tags where user_id = v_user_id;
  delete from public.practice_attempts where user_id = v_user_id;
  delete from public.practice_sessions where user_id = v_user_id;
  delete from public.lesson_completions where user_id = v_user_id;
  delete from public.purchases where user_id = v_user_id;
  delete from public.tutor_usage where user_id = v_user_id;
  delete from public.beta_feedback where user_id = v_user_id;
  delete from public.user_state where user_id = v_user_id;
  delete from public.email_events where email = v_email;
  delete from public.email_queue where email = v_email;
  delete from public.email_subscriptions where email = v_email;
  delete from public.lead_captures where email = v_email;
  delete from public.account_deletion_jobs where id = p_job_id;
end;
$$;

revoke all on function public.complete_account_deletion(uuid) from public, anon, authenticated;
grant execute on function public.complete_account_deletion(uuid) to service_role;

-- Atomic user-state writes: legacy metadata seeds only a missing row and can
-- never overwrite canonical state on later updates.
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

notify pgrst, 'reload schema';
