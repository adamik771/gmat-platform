import type { Metadata } from "next"
import Link from "next/link"
import { Check, MessageCircle } from "lucide-react"
import { createSupabaseServer } from "@/lib/supabase/server"
import PricingCard from "@/components/marketing/PricingCard"
import { tiers } from "@/lib/plans"
import {
  PAYWALL_ENABLED,
  getAccessForUser,
  trialDaysLeft,
  trialStartFor,
} from "@/lib/entitlements"
import {
  MANUAL_PAYMENT_CONTACT_ENABLED,
  manualPaymentMailto,
  manualPaymentWhatsAppUrl,
} from "@/lib/manual-payment"
import { isOnlineCheckoutAvailable, TRIAL_END_HELP } from "@/lib/payment-options"

export const metadata: Metadata = {
  title: "Choose your plan",
  // The gate screen — never index it.
  robots: { index: false, follow: false },
}

/**
 * Post-trial paywall. The proxy redirects a signed-in user here once their
 * free trial has ended with no active plan. It ONLY gates access — the
 * account and all its data are untouched; buying a plan restores full access
 * on the same account. Trialing users can reach this early to lock in a plan.
 */
export default async function UpgradePage() {
  const supabase = await createSupabaseServer()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  const now = new Date()
  const access = user ? await getAccessForUser(supabase, user, now) : "none"
  const daysLeft = user ? trialDaysLeft(trialStartFor(user), now) : 0
  const stillTrialing = access === "trialing"
  const manualPaymentMode =
    PAYWALL_ENABLED && MANUAL_PAYMENT_CONTACT_ENABLED
  const checkoutAvailable = tiers.some((tier) => isOnlineCheckoutAvailable(tier.stripePriceId))
  const accessPaused = PAYWALL_ENABLED && access === "trial_expired"
  const contactIntent = manualPaymentMode && access === "trial_expired" ? "continue" : "enquiry"

  // "none" = no trial ever started (rare — pre-backfill/pre-epoch accounts);
  // don't tell that user a trial "ended" that never began.
  let heading: string
  let sub: string
  if (access === "paid") {
    heading = "Your paid access is active"
    sub = "You can keep studying on your current plan. Contact Adam if you would like to discuss a change."
  } else if (!PAYWALL_ENABLED) {
    heading = "Explore your plan options"
    sub = TRIAL_END_HELP
  } else if (stillTrialing) {
    heading = `You're on your free trial — ${daysLeft} day${daysLeft === 1 ? "" : "s"} left`
    sub = "Lock in full access whenever you're ready — or keep going until your trial runs out."
  } else {
    heading = access === "none" ? "Choose a plan to unlock the full platform" : "Your free trial has ended"
    sub = checkoutAvailable
      ? "Choose a plan to pick up right where you left off. Everything you've done is saved."
      : "Online checkout is temporarily unavailable. Ask Adam about payment options and access on this same account. He will confirm the details before you decide."
  }

  return (
    <div style={{ backgroundColor: "#0A0A0A" }} className="min-h-screen">
      <section className="relative pt-28 pb-16 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 90% 50% at 50% -5%, rgba(201,168,76,0.15) 0%, transparent 60%)",
          }}
          aria-hidden
        />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p
            className="text-[10px] font-semibold uppercase tracking-[0.22em] mb-4"
            style={{ color: "#C9A84C" }}
          >
            {PAYWALL_ENABLED && stillTrialing ? "Free trial" : "Your plan"}
          </p>
          <h1 className="font-display text-3xl sm:text-5xl font-semibold text-[#F0F0F0] tracking-[-0.02em] leading-[1.05] mb-5">
            {heading}
          </h1>
          <p className="text-[15px] sm:text-[17px] text-[#888888] leading-relaxed max-w-xl mx-auto">
            {sub}
          </p>
          <p className="inline-flex items-center gap-2 text-[13px] text-[#C0C0C0] mt-6 px-4 py-2 rounded-full border border-white/[0.08] bg-[#0D0D0D]">
            <Check className="w-4 h-4 flex-shrink-0" style={{ color: "#3ECF8E" }} />
            Same account, same progress — your chapters, error log, and mocks are
            all still here.
          </p>
        </div>
      </section>

      <section className="pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {!checkoutAvailable && (
            <div className="mx-auto mb-8 flex max-w-3xl items-start gap-4 rounded-lg border border-[#C9A84C]/30 bg-[#14120D] p-5 text-left">
              <MessageCircle
                aria-hidden="true"
                className="mt-0.5 h-5 w-5 shrink-0 text-[#C9A84C]"
              />
              <div>
                <h2 className="text-base font-semibold text-[#F0F0F0]">
                  Questions about payment?
                </h2>
                <p className="mt-1 text-sm leading-relaxed text-[#B9B7AE]">
                  Ask about your chosen plan by WhatsApp or email. Adam can
                  confirm availability, the total price and access dates before
                  you decide. {accessPaused
                    ? "Your study history remains in place while access is paused."
                    : "Sending an enquiry does not change your current access."}
                </p>
              </div>
            </div>
          )}
          <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6">
            {tiers.map((tier) => (
              <PricingCard
                key={tier.id}
                tier={tier}
                checkoutCancelPath="/upgrade"
                purchasable={isOnlineCheckoutAvailable(tier.stripePriceId)}
                reservationAvailable={false}
                manualContactHref={manualPaymentWhatsAppUrl({ planName: tier.name, intent: contactIntent })}
                manualEmailHref={manualPaymentMailto({ planName: tier.name, accountEmail: user?.email, intent: contactIntent })}
                contactLabel={contactIntent === "continue" ? "Continue on WhatsApp" : `Ask about ${tier.id === "self_study_guaranteed" ? "Mentorship" : tier.name}`}
              />
            ))}
          </div>
          <p className="text-center text-[12px] text-[#555555] mt-10">
            {!checkoutAvailable
              ? "No payment details are entered on this website while online checkout is unavailable."
              : "Available online checkouts use Stripe. Contact Adam for any plan without an active checkout."}{" "}
            <Link href="/contact" className="underline hover:text-[#888888]">
              Get in touch
            </Link>
            .
          </p>
        </div>
      </section>
    </div>
  )
}
