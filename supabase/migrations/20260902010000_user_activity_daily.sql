-- Privacy-minimal active-use totals for the private student-support dashboard.
-- No URLs, clicks, content, device details, or event histories are stored.

create table if not exists public.user_activity_daily (
  user_id uuid not null references auth.users(id) on delete cascade,
  activity_date date not null default (timezone('utc', now()))::date,
  active_seconds integer not null default 0
    check (active_seconds >= 0 and active_seconds <= 86400),
  last_seen_at timestamptz not null default now(),
  primary key (user_id, activity_date)
);

create index if not exists user_activity_daily_last_seen_idx
  on public.user_activity_daily (last_seen_at desc);

alter table public.user_activity_daily enable row level security;

drop policy if exists "user_activity_daily_select_own" on public.user_activity_daily;
create policy "user_activity_daily_select_own" on public.user_activity_daily
  for select to authenticated
  using (auth.uid() = user_id);

drop policy if exists "user_activity_daily_insert_own" on public.user_activity_daily;
drop policy if exists "user_activity_daily_update_own" on public.user_activity_daily;

revoke all on table public.user_activity_daily from public, anon, authenticated;
grant select on table public.user_activity_daily to authenticated;
grant select, insert, update, delete on table public.user_activity_daily to service_role;

create or replace function public.record_user_activity(p_active_seconds integer)
returns void
language plpgsql
security definer
set search_path = ''
as $$
declare
  v_user_id uuid := auth.uid();
  v_now timestamptz := clock_timestamp();
  v_today date := (timezone('utc', v_now))::date;
begin
  if v_user_id is null then
    raise exception 'authentication required' using errcode = '42501';
  end if;
  if p_active_seconds is null or p_active_seconds < 1 or p_active_seconds > 120 then
    raise exception 'active seconds must be between 1 and 120';
  end if;

  insert into public.user_activity_daily as current_day (
    user_id,
    activity_date,
    active_seconds,
    last_seen_at
  )
  values (v_user_id, v_today, p_active_seconds, v_now)
  on conflict (user_id, activity_date) do update
  set
    active_seconds = least(
      86400,
      current_day.active_seconds + least(
        p_active_seconds,
        greatest(
          0,
          floor(extract(epoch from (v_now - current_day.last_seen_at)))::integer
        )
      )
    ),
    last_seen_at = greatest(current_day.last_seen_at, v_now);
end;
$$;

revoke all on function public.record_user_activity(integer) from public, anon;
grant execute on function public.record_user_activity(integer) to authenticated;

comment on table public.user_activity_daily is
  'Per-user UTC daily active seconds. Stores aggregate duration only; no browsing history.';
comment on function public.record_user_activity(integer) is
  'Atomically records a bounded active-time heartbeat and deduplicates overlapping tabs by server elapsed time.';

notify pgrst, 'reload schema';
