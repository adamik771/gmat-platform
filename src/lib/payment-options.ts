import { PAYWALL_ENABLED, TRIAL_DAYS } from "@/lib/entitlements"
import { MANUAL_PAYMENT_CONTACT_ENABLED } from "@/lib/manual-payment"
import { tiers } from "@/lib/plans"

// Presentation only. The checkout API and entitlement gates remain authoritative.
export function isOnlineCheckoutAvailable(priceId: string): boolean {
  return PAYWALL_ENABLED && !MANUAL_PAYMENT_CONTACT_ENABLED &&
    Boolean(process.env.STRIPE_SECRET_KEY) && Boolean(priceId) &&
    !["price_self_study", "price_self_study_guaranteed", "price_coaching", "price_intensive"].includes(priceId)
}

export function paymentMethodsHelp(): string {
  return tiers.some((tier) => isOnlineCheckoutAvailable(tier.stripePriceId))
    ? "Plans with an active checkout button accept cards through Stripe. If online checkout is unavailable for your chosen plan, use its WhatsApp or email link to ask Adam about payment options. Confirm the total price, access dates and payment method before paying."
    : "Online checkout is currently unavailable. Use the WhatsApp or email link for your chosen plan on the pricing page. Adam can confirm whether paid access is available, the total price, access dates and payment options before you decide. Sending an enquiry does not start a paid plan or change your existing access."
}

export const TRIAL_END_HELP = PAYWALL_ENABLED
  ? `After ${TRIAL_DAYS} days of full access, a paid plan is required to continue. Your account and study history remain in place. See the pricing page for the available checkout or contact option for each plan.`
  : `The standard trial is ${TRIAL_DAYS} days. During early release, full access continues beyond that period while the paywall is off. You can ask Adam about payment options without changing your access. A founding reservation is optional and does not start a paid access period. Any change to free access will be communicated in advance.`
