import { createSupabaseServer } from "@/lib/supabase/server"
import { getStripe, STRIPE_PRICES } from "@/lib/stripe"

const PLAN_IDS = ["self_study", "self_study_guaranteed", "coaching", "intensive"] as const
type PlanId = (typeof PLAN_IDS)[number]

const PLAN_TO_PRICE: Record<PlanId, string> = {
  self_study: STRIPE_PRICES.selfStudy,
  self_study_guaranteed: STRIPE_PRICES.selfStudyGuaranteed,
  coaching: STRIPE_PRICES.coaching,
  intensive: STRIPE_PRICES.intensive,
}

// The fallback ids STRIPE_PRICES uses when a STRIPE_PRICE_* env is unset. If a
// real checkout resolves to any of these, the tier isn't configured — 503
// rather than letting Stripe reject a fake id with a 500.
const PLACEHOLDER_PRICE_IDS = new Set<string>([
  "price_self_study",
  "price_self_study_guaranteed",
  "price_coaching",
  "price_intensive",
])

/**
 * POST /api/checkout — creates a Stripe Checkout Session for the
 * requested plan and returns the hosted-checkout URL.
 *
 * Body: `{ planId: "self_study" | "self_study_guaranteed" | "coaching" | "intensive" }`.
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
  // Guard against an unconfigured tier (any tier still on its placeholder id) —
  // a clear 503 beats letting Stripe reject a fake id with a cryptic 500.
  if (!priceId || PLACEHOLDER_PRICE_IDS.has(priceId)) {
    return Response.json(
      {
        error:
          "Stripe prices are not configured. Set STRIPE_PRICE_SELF_STUDY / STRIPE_PRICE_SELF_STUDY_GUARANTEED / STRIPE_PRICE_COACHING / STRIPE_PRICE_INTENSIVE to real Stripe price IDs.",
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

  // Stripe Tax (automatic VAT calculation) requires Stripe Tax to be enabled
  // in the dashboard first — enabling it here without that returns an error on
  // session creation. Gate it behind STRIPE_AUTOMATIC_TAX so this code is safe
  // to deploy beforehand; flip the env once Stripe Tax is live.
  const automaticTax = process.env.STRIPE_AUTOMATIC_TAX === "true"

  // Terms-of-service acceptance at checkout. Stripe records the consent on the
  // session (a stronger legal record than a client-side checkbox we don't
  // persist), but it requires a Terms of Service URL configured in the Stripe
  // Dashboard (Settings -> Checkout and Payment Links) first — without it,
  // session creation errors. Gate behind STRIPE_TOS_CONSENT so this is safe to
  // deploy beforehand; flip the env once the ToS URL is set.
  const tosConsent = process.env.STRIPE_TOS_CONSENT === "true"

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
      // EU / consumer compliance. These three have no dashboard prerequisite:
      // collect a billing address (needed for VAT location and a valid
      // invoice), offer a VAT / business tax-id field, and generate a proper
      // Stripe invoice + receipt for the one-time payment.
      billing_address_collection: "required",
      tax_id_collection: { enabled: true },
      invoice_creation: { enabled: true },
      // VAT calculation — only when Stripe Tax is configured (see above).
      ...(automaticTax ? { automatic_tax: { enabled: true } } : {}),
      // ToS acceptance — only when a ToS URL is set in the dashboard (see above).
      ...(tosConsent
        ? { consent_collection: { terms_of_service: "required" as const } }
        : {}),
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
