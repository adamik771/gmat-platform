import { redirect } from "next/navigation"
import Link from "next/link"
import { createSupabaseServer } from "@/lib/supabase/server"
import { getSupabaseService } from "@/lib/supabase/service"
import { getStripe } from "@/lib/stripe"
import { normalizePaymentIntentId } from "@/lib/stripe-webhook"
import { recordPurchase } from "@/lib/purchases"
import { tiers } from "@/lib/plans"
import PurchaseTracker from "./PurchaseTracker"

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
  if (outcome === "not_paid" || outcome === "wrong_user") {
    redirect("/upgrade")
  }
  if (outcome === "stripe_error") {
    // The payment may well be fine and the webhook will record it; send them
    // onward rather than to a dead end. Deliberately WITHOUT any success
    // param: nothing here was verified, so no conversion event may fire —
    // a fabricated session_id must not be able to emit a Purchase.
    redirect("/dashboard")
  }

  // outcome === "recorded": the ONLY branch that emits the purchase
  // conversion. The session was verified server-side above (ownership +
  // paid status) and the purchase row is written, so PurchaseTracker's
  // client-side fire is anchored to server truth rather than to editable
  // query params. It dedupes and then forwards to the dashboard.
  const planName = tiers.find((t) => t.id === planId)?.name ?? "Your plan"
  return (
    <div
      className="min-h-screen flex items-center justify-center px-4"
      style={{ backgroundColor: "#0A0A0A" }}
    >
      <PurchaseTracker plan={planId} sessionId={sessionId} />
      <div className="max-w-md w-full text-center p-8 rounded-2xl border border-white/[0.08] bg-[#0D0D0D]">
        <p
          className="text-[10px] font-semibold uppercase tracking-[0.22em] mb-4"
          style={{ color: "#3ECF8E" }}
        >
          Payment confirmed
        </p>
        <h1 className="font-display text-2xl font-semibold text-[#F0F0F0] tracking-[-0.02em] mb-3">
          You&apos;re all set.
        </h1>
        <p className="text-[14px] text-[#888888] leading-relaxed mb-6">
          {planName} is active on your account. Taking you to your
          dashboard&hellip;
        </p>
        <Link
          href="/dashboard"
          className="inline-flex items-center justify-center px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-200 hover:opacity-90"
          style={{ backgroundColor: "#C9A84C", color: "#0A0A0A" }}
        >
          Go to dashboard
        </Link>
      </div>
    </div>
  )
}
