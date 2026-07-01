import { getStripe } from "@/lib/stripe"
import { getSupabaseService } from "@/lib/supabase/service"
import { resolveWebhookEvent } from "@/lib/stripe-webhook"
import { recordPurchase } from "@/lib/purchases"
import type Stripe from "stripe"

// Opt-out of Next.js's Edge runtime — Stripe's signature verification
// needs the Node crypto module.
export const runtime = "nodejs"
// Don't cache — every webhook delivery is a fresh event.
export const dynamic = "force-dynamic"

/**
 * POST /api/stripe/webhook — Stripe event receiver.
 *
 * This endpoint verifies the `stripe-signature` header against the raw
 * request body using STRIPE_WEBHOOK_SECRET. On `checkout.session.completed`
 * it inserts a row into `purchases` so the user's plan is recorded.
 *
 * Stripe requires the raw (un-parsed) body for signature verification,
 * hence the `request.text()` read before JSON parsing.
 */
export async function POST(request: Request) {
  const sig = request.headers.get("stripe-signature")
  const secret = process.env.STRIPE_WEBHOOK_SECRET

  if (!sig || !secret) {
    return Response.json(
      { error: "Missing stripe-signature or STRIPE_WEBHOOK_SECRET" },
      { status: 400 }
    )
  }

  const rawBody = await request.text()

  let event: Stripe.Event
  try {
    const stripe = getStripe()
    event = stripe.webhooks.constructEvent(rawBody, sig, secret)
  } catch (err) {
    return Response.json(
      {
        error: `Webhook signature verification failed: ${
          err instanceof Error ? err.message : "unknown"
        }`,
      },
      { status: 400 }
    )
  }

  // Decide what to do (pure, exhaustively tested in tests/stripe-webhook.test.ts).
  // Unhandled types are acknowledged and ignored so Stripe stops retrying.
  const action = resolveWebhookEvent(event)
  if (action.kind === "ignore") {
    return Response.json({ ok: true, ignored: action.eventType })
  }

  let service
  try {
    service = getSupabaseService()
  } catch (err) {
    console.error("[stripe/webhook] service-role client error", err)
    return Response.json(
      { error: err instanceof Error ? err.message : "Service client unavailable" },
      { status: 500 }
    )
  }

  try {
    if (action.kind === "skip_missing_metadata") {
      // Nothing we can do without the user — log and accept so Stripe
      // doesn't retry forever.
      console.warn(
        "[stripe/webhook] checkout.session.completed missing user_id or plan_id",
        { sessionId: action.sessionId }
      )
      return Response.json({ ok: true, skipped: "missing_metadata" })
    } else if (action.kind === "record") {
      // Shared with the /purchase-success return page — upserts on
      // stripe_session_id, so double-recording the same payment converges.
      const failed = await recordPurchase(service, {
        userId: action.userId,
        planId: action.planId,
        sessionId: action.sessionId,
        paymentIntent: action.paymentIntent,
        amountCents: action.amountCents,
        currency: action.currency,
      })
      if (failed) {
        return Response.json({ error: failed.error }, { status: 500 })
      }
    } else if (action.kind === "partial_refund_noop") {
      // Partial refund — `charge.refunded` was false; access stays intact.
      return Response.json({ ok: true, note: "partial_refund_no_revoke" })
    } else if (action.kind === "revoke") {
      // Full refund or chargeback — revoke the matching purchase immediately.
      const revoked = await revokePurchase(service, action.paymentIntent, action.charge)
      if (revoked && "error" in revoked) {
        return Response.json({ error: revoked.error }, { status: 500 })
      }
    }
  } catch (err) {
    console.error("[stripe/webhook] handler error", err)
    return Response.json(
      { error: err instanceof Error ? err.message : "Handler error" },
      { status: 500 }
    )
  }

  return Response.json({ ok: true, received: event.type })
}

/**
 * Stamp revoked_at on the purchase matching this refund/dispute (idempotent —
 * the `revoked_at is null` guard makes a re-delivered event a no-op). Matches by
 * PaymentIntent on the normal path; falls back to the Charge id when the event
 * carries no PI (so a null-PI refund/dispute still revokes access). Returns
 * { error } on a DB failure so the caller can 500 and let Stripe retry.
 */
async function revokePurchase(
  service: ReturnType<typeof getSupabaseService>,
  paymentIntent: string | null,
  charge: string | null
): Promise<{ error: string } | null> {
  // Prefer the PaymentIntent (the normal path, unchanged). Only when the event
  // has no PI do we fall back to the Charge id — refund/dispute events always
  // carry the charge even when payment_intent is null.
  const matchedBy = paymentIntent
    ? { column: "stripe_payment_intent" as const, value: paymentIntent }
    : charge
      ? { column: "stripe_charge_id" as const, value: charge }
      : null

  if (!matchedBy) {
    // Neither key present: a real refund/dispute we cannot map to any purchase,
    // so access is NOT revoked. Escalate to error — an unrevokable refund must
    // be alertable in monitoring, never silent.
    console.error(
      "[stripe/webhook] refund/dispute has no payment_intent or charge — cannot map to a purchase to revoke"
    )
    return null
  }

  const { data, error } = await service
    .from("purchases")
    .update({ revoked_at: new Date().toISOString() })
    .eq(matchedBy.column, matchedBy.value)
    .is("revoked_at", null)
    .select("id")
  if (error) {
    console.error("[stripe/webhook] revoke failed", error)
    return { error: error.message }
  }
  if (!data || data.length === 0) {
    // No active purchase matched: keys never stored, the completion event hasn't
    // landed yet (out-of-order delivery), or it's already revoked. A refund or
    // dispute that revokes nothing is a money/access discrepancy — escalate to
    // error so monitoring can alert on it, not bury it as a warning.
    console.error("[stripe/webhook] refund/dispute matched no active purchase", {
      matchedBy: matchedBy.column,
      value: matchedBy.value,
    })
  }
  return null
}
