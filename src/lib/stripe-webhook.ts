import type Stripe from "stripe"

/**
 * Pure decision logic for the Stripe webhook handler.
 *
 * The route (`app/api/stripe/webhook/route.ts`) owns the impure parts —
 * signature verification, the service-role DB writes, and timestamping. This
 * module owns the *decision*: given a verified Stripe event, what should happen?
 * Keeping it pure (type-only Stripe import, no DB / no env / no clock) makes the
 * money-moving branches exhaustively unit-testable without mocking Stripe or
 * Supabase — matching the "pure evaluator" pattern used by signup-gate and
 * tutor-rate-limit.
 */

/** Event types that move money or access. Everything else is acknowledged and ignored. */
export const HANDLED_EVENT_TYPES = new Set<string>([
  "checkout.session.completed",
  "charge.refunded",
  "charge.dispute.created",
])

/**
 * The action the route should take for an event. A discriminated union so the
 * route's switch is exhaustive and every branch is independently testable.
 */
export type WebhookAction =
  | { kind: "ignore"; eventType: string }
  | {
      // A completed checkout — upsert a purchases row granting access.
      kind: "record"
      userId: string
      planId: string
      sessionId: string
      paymentIntent: string | null
      amountCents: number
      currency: string
    }
  | {
      // A completed checkout we can't attribute (no user_id / plan_id). Accept
      // so Stripe stops retrying, but record nothing.
      kind: "skip_missing_metadata"
      sessionId: string
    }
  | {
      // A full refund or a chargeback — revoke the matching purchase. The route
      // matches by PaymentIntent; when the event carries no PI it falls back to
      // the Charge id, which refund/dispute events always include.
      kind: "revoke"
      paymentIntent: string | null
      charge: string | null
      cause: "refund" | "dispute"
    }
  | {
      // A partial refund leaves `charge.refunded` false and access intact.
      kind: "partial_refund_noop"
    }

/** Normalize a Stripe expandable PaymentIntent field to its id string (or null). */
export function normalizePaymentIntentId(
  value: string | Stripe.PaymentIntent | null | undefined
): string | null {
  if (!value) return null
  return typeof value === "string" ? value : value.id
}

/** Normalize a Stripe expandable Charge field to its id string (or null). */
export function normalizeChargeId(
  value: string | Stripe.Charge | null | undefined
): string | null {
  if (!value) return null
  return typeof value === "string" ? value : value.id
}

/**
 * Map a verified Stripe event to the action the route should perform.
 *
 * Behaviour mirrors the prior inline route logic exactly:
 *   - unhandled type            -> ignore
 *   - checkout.session.completed:
 *       user id = client_reference_id ?? metadata.user_id; plan = metadata.plan_id
 *       both present -> record; either missing -> skip_missing_metadata
 *   - charge.refunded: full refund -> revoke(refund); partial -> partial_refund_noop
 *   - charge.dispute.created -> revoke(dispute)
 */
export function resolveWebhookEvent(event: Stripe.Event): WebhookAction {
  if (!HANDLED_EVENT_TYPES.has(event.type)) {
    return { kind: "ignore", eventType: event.type }
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session
    const userId =
      (session.client_reference_id as string | null) ??
      (session.metadata?.user_id as string | undefined) ??
      null
    const planId = (session.metadata?.plan_id as string | undefined) ?? null

    if (!userId || !planId) {
      return { kind: "skip_missing_metadata", sessionId: session.id }
    }

    return {
      kind: "record",
      userId,
      planId,
      sessionId: session.id,
      paymentIntent: normalizePaymentIntentId(session.payment_intent),
      amountCents: session.amount_total ?? 0,
      currency: session.currency ?? "usd",
    }
  }

  if (event.type === "charge.refunded") {
    // `refunded` is true only on a FULL refund; partial refunds leave it false
    // (and access intact). A full refund revokes the entitlement.
    const charge = event.data.object as Stripe.Charge
    if (!charge.refunded) {
      return { kind: "partial_refund_noop" }
    }
    return {
      kind: "revoke",
      paymentIntent: normalizePaymentIntentId(charge.payment_intent),
      // The event object IS the charge — its id is the fallback match key when
      // payment_intent is absent.
      charge: charge.id ?? null,
      cause: "refund",
    }
  }

  // charge.dispute.created — chargeback opened; revoke access, funds are held.
  const dispute = event.data.object as Stripe.Dispute
  return {
    kind: "revoke",
    paymentIntent: normalizePaymentIntentId(dispute.payment_intent),
    // `dispute.charge` is always present (expandable) — the fallback match key.
    charge: normalizeChargeId(dispute.charge),
    cause: "dispute",
  }
}
