import { getStripe } from "@/lib/stripe"
import { getSupabaseService } from "@/lib/supabase/service"
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

  // Only these three move money/access. Everything else is acknowledged so
  // Stripe stops retrying.
  const HANDLED = new Set([
    "checkout.session.completed",
    "charge.refunded",
    "charge.dispute.created",
  ])
  if (!HANDLED.has(event.type)) {
    return Response.json({ ok: true, ignored: event.type })
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
    if (event.type === "checkout.session.completed") {
      const session = event.data.object as Stripe.Checkout.Session
      const userId =
        (session.client_reference_id as string | null) ??
        (session.metadata?.user_id as string | undefined) ??
        null
      const planId = (session.metadata?.plan_id as string | undefined) ?? null

      if (!userId || !planId) {
        // Nothing we can do without the user — log and accept so Stripe
        // doesn't retry forever.
        console.warn(
          "[stripe/webhook] checkout.session.completed missing user_id or plan_id",
          { sessionId: session.id }
        )
        return Response.json({ ok: true, skipped: "missing_metadata" })
      }

      const { error } = await service.from("purchases").upsert(
        {
          user_id: userId,
          plan_id: planId,
          stripe_session_id: session.id,
          // Stored so a later refund/dispute (which carries the PI, not the
          // session) can be mapped back to this row to revoke access.
          stripe_payment_intent: piId(session.payment_intent),
          amount_cents: session.amount_total ?? 0,
          currency: session.currency ?? "usd",
          paid_at: new Date().toISOString(),
        },
        { onConflict: "stripe_session_id" }
      )
      if (error) {
        console.error("[stripe/webhook] purchases insert failed", error)
        return Response.json({ error: error.message }, { status: 500 })
      }
    } else if (event.type === "charge.refunded") {
      // `refunded` is true only on a FULL refund; partial refunds leave it
      // false (and access intact). A full refund revokes the entitlement.
      const charge = event.data.object as Stripe.Charge
      if (!charge.refunded) {
        return Response.json({ ok: true, note: "partial_refund_no_revoke" })
      }
      const revoked = await revokeByPaymentIntent(service, piId(charge.payment_intent))
      if (revoked && "error" in revoked) {
        return Response.json({ error: revoked.error }, { status: 500 })
      }
    } else if (event.type === "charge.dispute.created") {
      // Chargeback opened — revoke access immediately; the funds are held.
      const dispute = event.data.object as Stripe.Dispute
      const revoked = await revokeByPaymentIntent(service, piId(dispute.payment_intent))
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

/** Normalize a Stripe expandable PaymentIntent field to its id string. */
function piId(
  value: string | Stripe.PaymentIntent | null | undefined
): string | null {
  if (!value) return null
  return typeof value === "string" ? value : value.id
}

/**
 * Stamp revoked_at on the purchase matching this PaymentIntent (idempotent —
 * the `revoked_at is null` guard makes a re-delivered event a no-op). Returns
 * { error } on a DB failure so the caller can 500 and let Stripe retry.
 */
async function revokeByPaymentIntent(
  service: ReturnType<typeof getSupabaseService>,
  paymentIntent: string | null
): Promise<{ error: string } | null> {
  if (!paymentIntent) {
    // The original session stored a null PaymentIntent (e.g. $0/promotional),
    // so a refund/dispute can't be mapped by PI. Surface it — a real refund
    // that revokes nothing should never be silent.
    console.warn(
      "[stripe/webhook] refund/dispute has no payment_intent — cannot map to a purchase to revoke"
    )
    return null
  }
  const { data, error } = await service
    .from("purchases")
    .update({ revoked_at: new Date().toISOString() })
    .eq("stripe_payment_intent", paymentIntent)
    .is("revoked_at", null)
    .select("id")
  if (error) {
    console.error("[stripe/webhook] revoke failed", error)
    return { error: error.message }
  }
  if (!data || data.length === 0) {
    // No active purchase matched: PI never stored, the completion event hasn't
    // landed yet (out-of-order delivery), or it's already revoked. Not fatal,
    // but a refund/dispute that touches no row is worth seeing in the logs.
    console.warn("[stripe/webhook] refund/dispute matched no active purchase", {
      paymentIntent,
    })
  }
  return null
}
