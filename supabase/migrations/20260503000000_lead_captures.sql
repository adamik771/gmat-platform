-- =============================================================================
-- lead_captures — newsletter / lead-magnet email collection
--
-- Captures emails submitted from public marketing surfaces (footer
-- email-capture for the error-log template, free-diagnostic result CTA,
-- etc). Distinct from auth.users — these are prospects, not customers.
--
-- Constraints:
--   - email is normalised to lower-case via a CHECK + a trigger-free
--     contract: callers must lowercase before insert.
--   - source identifies which surface captured the email (footer /
--     free-diagnostic / blog-post / etc) so we can compare conversion by
--     channel.
--   - lead_magnet labels which asset was promised in exchange (free for
--     plain newsletter signups).
--   - One row per (email, source) pair via the unique index — re-submitting
--     from the same surface upserts captured_at instead of erroring.
-- =============================================================================

create table if not exists public.lead_captures (
  id uuid primary key default gen_random_uuid(),
  email text not null check (email = lower(email) and position('@' in email) > 1),
  source text not null check (source in (
    'footer',
    'free-diagnostic',
    'blog-post',
    'other'
  )),
  lead_magnet text not null check (lead_magnet in (
    'error-log-template',
    'newsletter',
    'diagnostic-deeper-view'
  )),
  captured_at timestamptz not null default now(),
  user_agent text,
  referer text
);

-- One row per (email, source) — re-submitting from the same surface should
-- upsert captured_at (handled by API route's onConflict clause), not insert
-- a duplicate row.
create unique index if not exists lead_captures_email_source_uq
  on public.lead_captures (email, source);

-- Read access is admin-only; insert is open via the API route which uses
-- the service-role key. RLS off because no end-user ever reads this table.
alter table public.lead_captures enable row level security;

-- No policies are added on purpose: with RLS enabled and zero policies,
-- only the service-role key (which bypasses RLS) can read or write. The
-- /api/lead-capture route uses that key.
