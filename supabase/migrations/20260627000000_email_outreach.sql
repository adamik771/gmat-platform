-- =============================================================================
-- Email outreach: opt-in consent, send queue, and an admin-safe event log.
-- =============================================================================
--
-- Powers the automated, opt-in-only outreach sequences (see
-- src/lib/outreach/* and /api/cron/outreach). All three tables are service-role
-- only: RLS is ON with NO policies, so ordinary clients can never read the
-- email list or the send log. The queue worker, consent writes, and event log
-- all run through the service-role client.
--
-- Compliance model: a row in email_subscriptions IS the consent record
-- (subscribed + consent_source + consent_at). The worker only sends to
-- subscribed=true addresses, and every marketing email carries an unsubscribe
-- link keyed by unsubscribe_token. Unsubscribing flips subscribed=false and is
-- never silently reversed.
--
-- Idempotent — safe to re-run.
-- =============================================================================

-- Consent / subscription state, one row per email address.
create table if not exists public.email_subscriptions (
  id uuid primary key default gen_random_uuid(),
  email text not null unique,
  user_id uuid references auth.users (id) on delete set null,
  subscribed boolean not null default true,
  -- Where/why we got consent, e.g. 'signup', 'founding-reservation',
  -- 'lead-capture:error-log-template'. Required — no row without a source.
  consent_source text not null,
  consent_at timestamptz not null default now(),
  unsubscribed_at timestamptz,
  -- Opaque token embedded in unsubscribe links (one-click + confirmation page).
  unsubscribe_token text not null unique,
  created_at timestamptz not null default now()
);
create index if not exists email_subscriptions_email_idx
  on public.email_subscriptions (email);

-- The outbox. The cron worker claims due 'pending' rows and sends them.
create table if not exists public.email_queue (
  id uuid primary key default gen_random_uuid(),
  email text not null,
  user_id uuid references auth.users (id) on delete set null,
  sequence text not null,
  step text not null,
  template_key text not null,
  payload jsonb not null default '{}'::jsonb,
  scheduled_for timestamptz not null default now(),
  status text not null default 'pending'
    check (status in ('pending', 'sent', 'failed', 'skipped', 'canceled', 'held')),
  attempts int not null default 0,
  last_error text,
  sent_at timestamptz,
  -- Idempotency key, e.g. '<user_or_email>:<sequence>:<step>'. Unique so a
  -- re-run of an enqueue trigger can't double-schedule the same email.
  dedupe_key text unique,
  created_at timestamptz not null default now()
);
create index if not exists email_queue_due_idx
  on public.email_queue (status, scheduled_for);
create index if not exists email_queue_email_idx
  on public.email_queue (email);

-- Admin-safe activity log: every send/skip/failure plus opens/clicks/unsubs.
create table if not exists public.email_events (
  id uuid primary key default gen_random_uuid(),
  queue_id uuid,
  email text,
  type text not null
    check (type in ('queued', 'sent', 'failed', 'skipped', 'held', 'open', 'click', 'unsubscribe')),
  meta jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);
create index if not exists email_events_queue_idx
  on public.email_events (queue_id);
create index if not exists email_events_type_idx
  on public.email_events (type, created_at desc);

alter table public.email_subscriptions enable row level security;
alter table public.email_queue enable row level security;
alter table public.email_events enable row level security;

-- No policies on purpose: only the service role (RLS-exempt) touches these.
-- They hold email addresses (PII) and the full send log; ordinary
-- anon/authenticated clients must get zero rows.
