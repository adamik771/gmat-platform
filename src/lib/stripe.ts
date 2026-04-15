import Stripe from "stripe"

// Lazy singleton — the Stripe constructor throws when STRIPE_SECRET_KEY is
// unset, which breaks `next build` for any page that imports this module
// (e.g. the pricing page, which only needs STRIPE_PRICES). Instantiating on
// first call means the module can be safely imported at build time.
let cached: Stripe | null = null

export function getStripe(): Stripe {
  if (cached) return cached
  const key = process.env.STRIPE_SECRET_KEY
  if (!key) {
    throw new Error(
      "STRIPE_SECRET_KEY is not set — add it to the environment before calling getStripe()."
    )
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  cached = new (Stripe as any)(key, { apiVersion: "2023-10-16" }) as Stripe
  return cached
}

export const STRIPE_PRICES = {
  selfStudy: process.env.STRIPE_PRICE_SELF_STUDY ?? "price_self_study",
  selfStudyPlus: process.env.STRIPE_PRICE_SELF_STUDY_PLUS ?? "price_self_study_plus",
  coaching: process.env.STRIPE_PRICE_COACHING ?? "price_coaching",
  intensive: process.env.STRIPE_PRICE_INTENSIVE ?? "price_intensive",
}
