import type { PricingTier } from "@/types"
import { STRIPE_PRICES } from "@/lib/stripe"
import { QUESTION_CLAIM } from "@/lib/site"
import { PLAN_ACCESS_MONTHS } from "@/lib/plan-access"

/**
 * The canonical 4-tier plan list. Shared by the public /pricing page and the
 * post-trial /upgrade block screen so the two never drift. `stripePriceId`
 * resolves from STRIPE_PRICES (env-backed); `id` is the plan_id the checkout
 * route + purchases table use.
 */
export const tiers: PricingTier[] = [
  {
    id: "self_study",
    name: "Self-Study",
    price: 429,
    priceLabel: "one-time",
    description:
      "The full platform for four months — everything you need to prep on your own.",
    highlighted: false,
    badge: null,
    stripePriceId: STRIPE_PRICES.selfStudy,
    cta: "Get Self-Study",
    features: [
      { text: "50+ chapters — Quant, Verbal & Data Insights", included: true },
      { text: QUESTION_CLAIM, included: true },
      { text: "Per-chapter practice tests + custom test builder", included: true },
      { text: "Official-exam study plan & score tracking", included: true },
      { text: "Full analytics — accuracy, pacing, calibration", included: true },
      { text: "Error log + spaced review queue", included: true },
      { text: `${PLAN_ACCESS_MONTHS.self_study}-month platform access`, included: true },
      { text: "WhatsApp Q&A access with Adam", included: false },
      { text: "1:1 coaching sessions", included: false },
    ],
  },
  {
    id: "self_study_guaranteed",
    name: "Self-Study + Mentorship",
    price: 599,
    priceLabel: "one-time",
    description:
      "Everything in Self-Study, plus direct WhatsApp Q&A access to Adam and six months on the platform — ask questions as they come up, no scheduled calls.",
    highlighted: true,
    badge: "Recommended",
    stripePriceId: STRIPE_PRICES.selfStudyGuaranteed,
    cta: "Get Mentorship",
    features: [
      { text: "50+ chapters — Quant, Verbal & Data Insights", included: true },
      { text: QUESTION_CLAIM, included: true },
      { text: "Per-chapter practice tests + custom test builder", included: true },
      { text: "Official-exam study plan & score tracking", included: true },
      { text: "Full analytics — accuracy, pacing, calibration", included: true },
      { text: "Error log + spaced review queue", included: true },
      { text: `${PLAN_ACCESS_MONTHS.self_study_guaranteed}-month platform access`, included: true },
      { text: "WhatsApp Q&A access with Adam", included: true },
      { text: "1:1 coaching sessions", included: false },
    ],
  },
  {
    id: "coaching",
    name: "Coaching",
    price: 2500,
    priceLabel: "package",
    description:
      "The full platform, WhatsApp access, plus eight 1:1 sessions with me.",
    highlighted: false,
    badge: null,
    stripePriceId: STRIPE_PRICES.coaching,
    cta: "Start Coaching",
    features: [
      { text: "50+ chapters — Quant, Verbal & Data Insights", included: true },
      { text: QUESTION_CLAIM, included: true },
      { text: "Per-chapter practice tests + custom test builder", included: true },
      { text: "Official-exam study plan & score tracking", included: true },
      { text: "Full analytics — accuracy, pacing, calibration", included: true },
      { text: "Error log + spaced review queue", included: true },
      { text: `${PLAN_ACCESS_MONTHS.coaching}-month platform access`, included: true },
      { text: "WhatsApp Q&A access with Adam", included: true },
      { text: "8 weekly 1:1 coaching sessions", included: true },
    ],
  },
  {
    id: "intensive",
    name: "Intensive",
    price: 4200,
    priceLabel: "package",
    description:
      "Full-service program — sixteen 1:1 sessions and the most platform runway.",
    highlighted: false,
    badge: null,
    stripePriceId: STRIPE_PRICES.intensive,
    cta: "Start Intensive",
    features: [
      { text: "50+ chapters — Quant, Verbal & Data Insights", included: true },
      { text: QUESTION_CLAIM, included: true },
      { text: "Per-chapter practice tests + custom test builder", included: true },
      { text: "Official-exam study plan & score tracking", included: true },
      { text: "Full analytics — accuracy, pacing, calibration", included: true },
      { text: "Error log + spaced review queue", included: true },
      { text: `${PLAN_ACCESS_MONTHS.intensive}-month platform access`, included: true },
      { text: "WhatsApp Q&A access with Adam", included: true },
      { text: "16 weekly 1:1 coaching sessions", included: true },
    ],
  },
]
