import type { SupabaseClient } from "@supabase/supabase-js"
import { getStripe } from "@/lib/stripe"
import { normalizeChargeId } from "@/lib/stripe-webhook"

/**
 * Record a completed Stripe Checkout purchase in `purchases` — the paid-plan
 * entitlement source of truth. Called from BOTH landing points of the same
 * payment: the webhook (authoritative, retried by Stripe) and the
 * /purchase-success return page (synchronous, so the customer is unblocked
 * before the webhook lands). The upsert conflicts on stripe_session_id, so
 * whichever runs first wins and the other converges to the same row.
 */
export interface CompletedCheckout {
  userId: string
  planId: string
  sessionId: string
  paymentIntent: string | null
  amountCents: number
  currency: string
}

export async function recordPurchase(
  service: SupabaseClient,
  checkout: CompletedCheckout
): Promise<{ error: string } | null> {
  // Resolve the Charge id from the PaymentIntent. The checkout session payload
  // carries no charge, but a later refund/dispute can arrive with a null
  // payment_intent while still carrying the Charge id — storing it here gives
  // revokePurchase a fallback match key for that case. Best-effort: a paid
  // purchase must still be recorded even if this lookup fails.
  let chargeId: string | null = null
  if (checkout.paymentIntent) {
    try {
      const pi = await getStripe().paymentIntents.retrieve(checkout.paymentIntent)
      chargeId = normalizeChargeId(pi.latest_charge)
    } catch (err) {
      console.error(
        "[purchases] could not resolve charge id — refund-by-charge fallback won't apply",
        { sessionId: checkout.sessionId, paymentIntent: checkout.paymentIntent, err }
      )
    }
  }
  const { error } = await service.from("purchases").upsert(
    {
      user_id: checkout.userId,
      plan_id: checkout.planId,
      stripe_session_id: checkout.sessionId,
      // Stored so a later refund/dispute (which carries the PI, not the
      // session) can be mapped back to this row to revoke access.
      stripe_payment_intent: checkout.paymentIntent,
      // Second match key — used when the refund/dispute event has no PI.
      stripe_charge_id: chargeId,
      amount_cents: checkout.amountCents,
      currency: checkout.currency,
      paid_at: new Date().toISOString(),
    },
    { onConflict: "stripe_session_id" }
  )
  if (error) {
    console.error("[purchases] upsert failed", error)
    return { error: error.message }
  }
  return null
}
