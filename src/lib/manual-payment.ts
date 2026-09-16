import { SITE_CONTACT_EMAIL } from "@/lib/site"

/**
 * Temporary, owner-assisted checkout mode.
 *
 * This is deliberately separate from PAYWALL_ENABLED: the paywall controls
 * whether an expired trial is blocked, while this switch controls whether the
 * blocked user sees Stripe checkout or a direct contact path. Both switches
 * must be enabled before the manual-payment experience becomes reachable.
 */
export const MANUAL_PAYMENT_CONTACT_ENABLED =
  process.env.MANUAL_PAYMENT_CONTACT_ENABLED === "true"

export const SITE_WHATSAPP_NUMBER = "4792949728"

export function manualPaymentMailto(input?: {
  planName?: string | null
  accountEmail?: string | null
}): string {
  const plan = input?.planName?.trim()
  const accountEmail = input?.accountEmail?.trim()
  const subject = plan
    ? `Continue Zakarian GMAT with ${plan}`
    : "Continue my Zakarian GMAT access"
  const body = [
    "Hello Adam,",
    "",
    "My Zakarian GMAT trial has ended, and I would like to continue.",
    plan ? `Plan I am interested in: ${plan}` : null,
    accountEmail ? `My account email: ${accountEmail}` : null,
    "",
    "Please send me the available payment instructions.",
    "",
    "Thank you",
  ]
    .filter((line): line is string => line !== null)
    .join("\n")

  return `mailto:${SITE_CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}

export function manualPaymentWhatsAppUrl(input?: {
  planName?: string | null
}): string {
  const plan = input?.planName?.trim()
  const message = [
    "Hi Adam,",
    "",
    "I enjoyed my Zakarian GMAT free trial and would like to continue.",
    plan ? `I am interested in the ${plan} plan.` : null,
    "Please send me the available payment instructions.",
  ]
    .filter((line): line is string => line !== null)
    .join("\n")

  return `https://wa.me/${SITE_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}
