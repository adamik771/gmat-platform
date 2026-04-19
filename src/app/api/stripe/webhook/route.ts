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

    try {
      const service = getSupabaseService()
      const { error } = await service.from("purchases").upsert(
        {
          user_id: userId,
          plan_id: planId,
          stripe_session_id: session.id,
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
    } catch (err) {
      console.error("[stripe/webhook] service-role client error", err)
      return Response.json(
        {
          error:
            err instanceof Error
              ? err.message
              : "Service client unavailable",
        },
        { status: 500 }
      )
    }
  }

  return Response.json({ ok: true, received: event.type })
}
