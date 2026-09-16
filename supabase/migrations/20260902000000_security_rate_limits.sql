-- Atomic, privacy-preserving rate limits for public recovery and paid AI use.
-- Callers store only HMAC digests; raw emails, IPs, and user ids never land in
-- this table. No browser role can read or mutate it.

create table if not exists public.security_rate_limits (
  action text not null,
  key_hash text not null,
  window_started_at timestamptz not null default now(),
  request_count integer not null default 1 check (request_count >= 0),
  updated_at timestamptz not null default now(),
  primary key (action, key_hash)
);

create index if not exists security_rate_limits_updated_at_idx
  on public.security_rate_limits (updated_at);

alter table public.security_rate_limits enable row level security;
revoke all on table public.security_rate_limits from public, anon, authenticated;
grant select, insert, update, delete on table public.security_rate_limits to service_role;

create or replace function public.consume_security_rate_limit(
  p_action text,
  p_key_hash text,
  p_limit integer,
  p_window_seconds integer
)
returns table (allowed boolean, retry_after_seconds integer)
language plpgsql
security invoker
set search_path = ''
as $$
declare
  v_now timestamptz := clock_timestamp();
  v_window interval;
  v_count integer;
  v_started timestamptz;
begin
  if p_action is null or length(p_action) < 1 or length(p_action) > 80 then
    raise exception 'invalid rate-limit action';
  end if;
  if p_key_hash is null or p_key_hash !~ '^[0-9a-f]{64}$' then
    raise exception 'invalid rate-limit key';
  end if;
  if p_limit < 1 or p_limit > 10000 then
    raise exception 'invalid rate-limit ceiling';
  end if;
  if p_window_seconds < 1 or p_window_seconds > 604800 then
    raise exception 'invalid rate-limit window';
  end if;

  v_window := make_interval(secs => p_window_seconds);

  insert into public.security_rate_limits as current_limit (
    action,
    key_hash,
    window_started_at,
    request_count,
    updated_at
  )
  values (p_action, p_key_hash, v_now, 1, v_now)
  on conflict (action, key_hash) do update
  set
    request_count = case
      when current_limit.window_started_at <= v_now - v_window then 1
      else least(current_limit.request_count + 1, p_limit + 1)
    end,
    window_started_at = case
      when current_limit.window_started_at <= v_now - v_window then v_now
      else current_limit.window_started_at
    end,
    updated_at = v_now
  returning current_limit.request_count, current_limit.window_started_at
    into v_count, v_started;

  allowed := v_count <= p_limit;
  retry_after_seconds := case
    when allowed then 0
    else greatest(
      1,
      ceil(extract(epoch from (v_started + v_window - v_now)))::integer
    )
  end;

  -- Opportunistic retention keeps one-off attack keys from accumulating.
  if random() < 0.01 then
    delete from public.security_rate_limits
    where updated_at < v_now - interval '7 days';
  end if;

  return next;
end;
$$;

revoke execute on function public.consume_security_rate_limit(text, text, integer, integer)
  from public, anon, authenticated;
grant execute on function public.consume_security_rate_limit(text, text, integer, integer)
  to service_role;
