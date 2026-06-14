-- =============================================================================
-- purchases.stripe_charge_id — fallback key for revoking on refund/dispute
--
-- The webhook revokes access by matching purchases.stripe_payment_intent. But a
-- refund (charge.refunded) or chargeback (charge.dispute.created) event can
-- arrive with a NULL payment_intent while still carrying the Charge id, so a
-- null-PI refund matched no row and left paid access intact (entitlements.
-- getPlanTierForUser grants any purchases row with revoked_at IS NULL). Storing
-- the Charge id alongside the PaymentIntent (resolved from the PI's latest_charge
-- when the purchase is recorded) gives the webhook a second match key for
-- exactly that case — see src/app/api/stripe/webhook/route.ts::revokePurchase.
--
-- Idempotent and safe to run against the existing live table:
--   - add column if not exists  -> existing tables gain the column
--   - create index if not exists -> the charge-id lookup is indexed
-- =============================================================================

alter table public.purchases add column if not exists stripe_charge_id text;

create index if not exists purchases_charge_id_idx
  on public.purchases (stripe_charge_id);
