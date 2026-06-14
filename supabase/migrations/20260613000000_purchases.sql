-- =============================================================================
-- purchases — Stripe checkout records + paid-plan entitlement source of truth
--
-- This table was previously created by hand in the Supabase dashboard and its
-- DDL lived only in HANDOFF.md, so a fresh/rebuilt DB (or a Supabase branch)
-- silently had no billing table — the webhook write 500s and every entitlement
-- read falls back to "free". This migration puts the schema in version control.
--
-- Idempotent and safe to run against the EXISTING hand-applied table:
--   - create table if not exists  -> fresh DBs get the full shape
--   - add column if not exists     -> existing tables gain the refund columns
--   - named plan_id CHECK          -> converges fresh + existing on one rule
--
-- Reads (RLS-enforced, own rows only): entitlements.getPlanTierForUser is the
-- ACCESS GATE and ignores revoked rows (revoked_at is null). The dashboard /
-- settings plan chips read the same table but are cosmetic and intentionally
-- not revoked-filtered (a refunded user may briefly still see the old chip;
-- they have no access). Writes happen ONLY from the Stripe webhook via the
-- service-role key (bypasses RLS), so no user insert/update policy.
-- =============================================================================

create table if not exists public.purchases (
  id                    uuid primary key default gen_random_uuid(),
  user_id               uuid not null references auth.users(id) on delete cascade,
  plan_id               text not null,
  stripe_session_id     text not null unique,
  -- Stripe PaymentIntent id — lets the webhook map a later refund/dispute
  -- event (which carries the PI, not the checkout session) back to this row.
  stripe_payment_intent text,
  amount_cents          integer not null default 0,
  currency              text not null default 'usd',
  paid_at               timestamptz not null default now(),
  -- Set when the purchase is refunded or charged back. NULL = active access.
  -- Entitlement reads ignore rows where this is non-null.
  revoked_at            timestamptz
);

-- Columns for the already-exists case (hand-applied table predates refunds).
alter table public.purchases add column if not exists stripe_payment_intent text;
alter table public.purchases add column if not exists revoked_at timestamptz;

-- Canonical plan_id allow-list. Matches PAID_PLAN_IDS in src/lib/entitlements.ts
-- and the ids written by checkout/webhook (note: self_study_guaranteed, NOT the
-- stale "self_study_plus" that appeared in older HANDOFF snapshots). Drop any
-- legacy/auto-named CHECK first so fresh and existing tables converge.
-- NOTE for Adam: if the live table carries a differently-named CHECK that only
-- admits self_study_plus, a self_study_guaranteed insert will still fail — verify
-- the live constraint in the Supabase SQL editor before enabling the paywall.
alter table public.purchases drop constraint if exists purchases_plan_id_check;
alter table public.purchases drop constraint if exists purchases_plan_id_allowed;
-- `not valid`: enforce the allow-list on all NEW writes (the only ones that
-- matter) without retroactively validating existing rows, so the migration
-- can't ABORT if the hand-applied table happens to hold a stray legacy/test
-- plan_id. Run `alter table ... validate constraint purchases_plan_id_allowed`
-- later once the live rows are known clean if you want full validation.
alter table public.purchases add constraint purchases_plan_id_allowed
  check (plan_id in ('self_study', 'self_study_guaranteed', 'coaching', 'intensive')) not valid;

create index if not exists purchases_user_id_idx
  on public.purchases (user_id);
create index if not exists purchases_payment_intent_idx
  on public.purchases (stripe_payment_intent);

alter table public.purchases enable row level security;

drop policy if exists "users read their own purchases" on public.purchases;
create policy "users read their own purchases"
  on public.purchases for select
  using (auth.uid() = user_id);
