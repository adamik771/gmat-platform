import Stripe from "stripe"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const stripe = new (Stripe as any)(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2023-10-16",
}) as Stripe

export const STRIPE_PRICES = {
  selfStudy: process.env.STRIPE_PRICE_SELF_STUDY ?? "price_self_study",
  selfStudyPlus: process.env.STRIPE_PRICE_SELF_STUDY_PLUS ?? "price_self_study_plus",
  coaching: process.env.STRIPE_PRICE_COACHING ?? "price_coaching",
  intensive: process.env.STRIPE_PRICE_INTENSIVE ?? "price_intensive",
}
