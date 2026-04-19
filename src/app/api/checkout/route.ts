import { createSupabaseServer } from "@/lib/supabase/server"
import { getStripe, STRIPE_PRICES } from "@/lib/stripe"

const PLAN_IDS = ["self_study", "self_study_plus", "coaching", "intensive"] as const
type PlanId = (typeof PLAN_IDS)[number]

const PLAN_TO_PRICE: Record<PlanId, string> = {
  self_study: STRIPE_PRICES.selfStudy,
  self_study_plus: STRIPE_PRICES.selfStudyPlus,
  coaching: STRIPE_PRICES.coaching,
  intensive: STRIPE_PRICES.intensive,
}

/**
 * POST /api/checkout — creates a Stripe Checkout Session for the
 * requested plan and returns the hosted-checkout URL.
 *
 * Body: `{ planId: "self_study" | "self_study_plus" | "coaching" | "intensive" }`.
 * We accept a plan id rather than a raw priceId so a malicious client can't
 * create sessions for arbitrary prices.
 *
 * Returns:
 *   200 `{ url: string }` on success
 *   401 when unauthenticated (so the client can redirect to /signup)
 *   400 for invalid plan id
 *   503 when Stripe keys aren't configured (still-placeholder prices)
 */
export async function POST(request: Request) {
  const supabase = await createSupabaseServer()
  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser()

  if (authError || !user) {
    return Response.json({ error: "Unauthorized" }, { status: 401 })
  }

  const body = (await request.json()) as { planId?: string }
  const planId = body.planId
  if (!planId || !PLAN_IDS.includes(planId as PlanId)) {
    return Response.json({ error: "invalid planId" }, { status: 400 })
  }

  const priceId = PLAN_TO_PRICE[planId as PlanId]
  // Guard against the placeholder prices being live — better to return a
  // clear 503 than to let Stripe reject with a cryptic message.
  if (!priceId || priceId.startsWith("price_placeholder") || priceId === "price_self_study") {
    return Response.json(
      {
        error:
          "Stripe prices are not configured. Set STRIPE_PRICE_SELF_STUDY / STRIPE_PRICE_SELF_STUDY_PLUS / STRIPE_PRICE_COACHING / STRIPE_PRICE_INTENSIVE to real Stripe price IDs.",
      },
      { status: 503 }
    )
  }

  // Derive the site origin from the incoming request so this works in dev,
  // preview, and the production Vercel URL without a hardcoded host.
  const origin = new URL(request.url).origin

  let stripe: ReturnType<typeof getStripe>
  try {
    stripe = getStripe()
  } catch (err) {
    return Response.json(
      {
        error:
          err instanceof Error
            ? err.message
            : "Stripe is not configured on the server.",
      },
      { status: 503 }
    )
  }

  try {
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: [{ price: priceId, quantity: 1 }],
      customer_email: user.email ?? undefined,
      // Tie the Stripe session to our user so the webhook can resolve it
      // back without needing a Stripe customer object.
      client_reference_id: user.id,
      metadata: {
        user_id: user.id,
        plan_id: planId,
      },
      success_url: `${origin}/dashboard?purchase=success&plan=${planId}`,
      cancel_url: `${origin}/pricing?purchase=cancelled`,
    })

    if (!session.url) {
      return Response.json(
        { error: "Stripe did not return a checkout URL" },
        { status: 500 }
      )
    }

    return Response.json({ url: session.url })
  } catch (err) {
    return Response.json(
      {
        error:
          err instanceof Error
            ? err.message
            : "Failed to create checkout session",
      },
      { status: 500 }
    )
  }
}
