-- One transactional trial-expiry email per user and trial window.
-- Service-role only: ordinary clients must not be able to inspect delivery
-- status or infer another user's account lifecycle.

create table if not exists public.trial_expiry_email_deliveries (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users (id) on delete cascade,
  trial_started_at timestamptz not null,
  status text not null default 'pending'
    check (status in ('pending', 'sending', 'sent', 'failed')),
  attempts integer not null default 0 check (attempts >= 0),
  last_error text,
  sent_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (user_id, trial_started_at)
);

create index if not exists trial_expiry_email_deliveries_status_idx
  on public.trial_expiry_email_deliveries (status, updated_at);

alter table public.trial_expiry_email_deliveries enable row level security;

-- No client policies by design. Reads and writes happen only through the
-- service-role cron worker.
