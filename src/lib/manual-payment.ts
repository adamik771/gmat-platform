import { SITE_CONTACT_EMAIL } from "@/lib/site"

/**
 * Temporary, owner-assisted checkout mode.
 *
 * This is deliberately separate from PAYWALL_ENABLED: the paywall controls
 * whether an expired trial is blocked, while this switch controls whether the
 * blocked user sees owner-assisted continuation instead of Stripe checkout.
 * Both switches must be enabled for post-trial continuation and expiry emails.
 * General plan enquiries do not activate payment or change access.
 */
export const MANUAL_PAYMENT_CONTACT_ENABLED =
  process.env.MANUAL_PAYMENT_CONTACT_ENABLED === "true"

export const SITE_WHATSAPP_NUMBER = "4792949728"

export function manualPaymentMailto(input?: {
  planName?: string | null
  accountEmail?: string | null
  intent?: "continue" | "enquiry"
}): string {
  const plan = input?.planName?.trim()
  const accountEmail = input?.accountEmail?.trim()
  const enquiry = input?.intent === "enquiry"
  const subject = enquiry
    ? `Zakarian GMAT payment options${plan ? `: ${plan}` : ""}`
    : plan ? `Continue Zakarian GMAT with ${plan}` : "Continue my Zakarian GMAT access"
  const body = [
    "Hello Adam,",
    "",
    enquiry
      ? "I would like to ask about Zakarian GMAT access."
      : "My Zakarian GMAT trial has ended, and I would like to continue.",
    plan ? `Plan I am interested in: ${plan}` : null,
    accountEmail ? `My account email: ${accountEmail}` : null,
    "",
    enquiry
      ? "Could you confirm whether paid access is currently available, the total price and access period, and the available payment options?"
      : "Please send me the available payment instructions.",
    "",
    "Thank you",
  ]
    .filter((line): line is string => line !== null)
    .join("\n")

  return `mailto:${SITE_CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}

export function manualPaymentWhatsAppUrl(input?: {
  planName?: string | null
  intent?: "continue" | "enquiry"
}): string {
  const plan = input?.planName?.trim()
  const enquiry = input?.intent === "enquiry"
  const message = [
    "Hi Adam,",
    "",
    enquiry
      ? "I would like to ask about Zakarian GMAT access."
      : "I enjoyed my Zakarian GMAT free trial and would like to continue.",
    plan ? `I am interested in the ${plan} plan.` : null,
    enquiry
      ? "Could you confirm whether paid access is currently available, the total price and access period, and the available payment options?"
      : "Please send me the available payment instructions.",
  ]
    .filter((line): line is string => line !== null)
    .join("\n")

  return `https://wa.me/${SITE_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}
