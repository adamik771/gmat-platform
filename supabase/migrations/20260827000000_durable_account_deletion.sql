-- Durable, service-only account erasure queue.
-- The row intentionally has no FK to auth.users: it must survive Auth deletion.
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

-- All public-schema erasure and removal of the job commit together. If any
-- statement fails, PostgreSQL rolls the transaction back and the job survives.
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

  -- Children before parents for installations with non-cascading FKs.
  delete from public.error_tags where user_id = v_user_id;
  delete from public.practice_attempts where user_id = v_user_id;
  delete from public.practice_sessions where user_id = v_user_id;
  delete from public.lesson_completions where user_id = v_user_id;
  delete from public.purchases where user_id = v_user_id;
  delete from public.tutor_usage where user_id = v_user_id;
  delete from public.beta_feedback where user_id = v_user_id;
  delete from public.user_state where user_id = v_user_id;

  -- Events precede their queue rows. The normalized email comes only from the
  -- server-created job and never appears in worker responses or logs.
  delete from public.email_events where email = v_email;
  delete from public.email_queue where email = v_email;
  delete from public.email_subscriptions where email = v_email;
  delete from public.lead_captures where email = v_email;

  delete from public.account_deletion_jobs where id = p_job_id;
end;
$$;

revoke all on function public.complete_account_deletion(uuid) from public, anon, authenticated;
grant execute on function public.complete_account_deletion(uuid) to service_role;
