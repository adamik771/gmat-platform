import { redirect } from "next/navigation"
import { createSupabaseServer } from "@/lib/supabase/server"
import { getSupabaseService } from "@/lib/supabase/service"
import { getStripe } from "@/lib/stripe"
import { normalizePaymentIntentId } from "@/lib/stripe-webhook"
import { recordPurchase } from "@/lib/purchases"

// Every render talks to Stripe and redirects — never cache.
export const dynamic = "force-dynamic"

/**
 * Stripe Checkout return leg (success_url). Exists to close the race between
 * the customer's redirect and the webhook: we verify the session with Stripe
 * server-side and record the purchase HERE, synchronously, so by the time the
 * customer reaches /dashboard the paywall gate already sees them as paid —
 * even if the webhook hasn't landed yet. The webhook stays authoritative
 * (Stripe retries it); both writes upsert on stripe_session_id and converge.
 *
 * Gate-exempt in the proxy (a just-paid, still-"expired" user must reach it)
 * but auth-required like every app route.
 */
export default async function PurchaseSuccessPage({
  searchParams,
}: {
  searchParams: Promise<{ session_id?: string; plan?: string }>
}) {
  const { session_id: sessionId } = await searchParams
  const supabase = await createSupabaseServer()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  // The proxy already bounces signed-out visitors to /login; this is the
  // belt-and-braces server check.
  if (!user) redirect("/login")
  if (!sessionId) redirect("/dashboard")

  let outcome: "recorded" | "not_paid" | "wrong_user" | "stripe_error"
  let planId = ""
  try {
    const session = await getStripe().checkout.sessions.retrieve(sessionId)
    planId = session.metadata?.plan_id ?? ""
    // The session must belong to the signed-in user — a session id is not a
    // bearer token for someone else's purchase.
    if (session.metadata?.user_id !== user.id) {
      outcome = "wrong_user"
    } else if (
      // "no_payment_required" covers a 100%-off promotion code — the session
      // completes with a $0 total and still grants the plan.
      session.payment_status !== "paid" &&
      session.payment_status !== "no_payment_required"
    ) {
      outcome = "not_paid"
    } else if (!planId) {
      // Paid but unusable metadata — leave it to the webhook path, which
      // logs and alerts on exactly this case.
      outcome = "stripe_error"
    } else {
      const failed = await recordPurchase(getSupabaseService(), {
        userId: user.id,
        planId,
        sessionId: session.id,
        paymentIntent: normalizePaymentIntentId(session.payment_intent),
        amountCents: session.amount_total ?? 0,
        currency: session.currency ?? "usd",
      })
      // On a DB failure the webhook (retried by Stripe) still records the
      // purchase; the customer may just hit the gate for a few seconds.
      outcome = failed ? "stripe_error" : "recorded"
    }
  } catch (err) {
    console.error("[purchase-success] session retrieve failed", {
      sessionId,
      err,
    })
    outcome = "stripe_error"
  }

  // redirect() throws — keep it outside the try so it isn't swallowed.
  if (outcome === "recorded") {
    // Keep the ?purchase=success&plan= params: the app layout's
    // ConversionTracker fires the purchase analytics event off them.
    redirect(`/dashboard?purchase=success&plan=${encodeURIComponent(planId)}`)
  }
  if (outcome === "not_paid" || outcome === "wrong_user") {
    redirect("/upgrade")
  }
  // stripe_error: the payment may well be fine and the webhook will record
  // it; send them onward rather than to a dead end. If the gate still sees
  // them as expired they land on /upgrade, which stays truthful.
  redirect("/dashboard?purchase=success")
}
