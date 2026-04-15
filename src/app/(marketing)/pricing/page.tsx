import type { Metadata } from "next"
import Link from "next/link"
import { Check, X, Shield, Calendar, Globe, ArrowRight } from "lucide-react"
import SectionWrapper from "@/components/shared/SectionWrapper"
import PricingCard from "@/components/marketing/PricingCard"
import FAQAccordion from "@/components/marketing/FAQAccordion"
import { PricingTier } from "@/types"
import { STRIPE_PRICES } from "@/lib/stripe"

export const metadata: Metadata = {
  title: "Pricing — Zakarian GMAT",
  description: "Simple, transparent pricing for GMAT prep that works.",
}

const tiers: PricingTier[] = [
  {
    id: "self_study",
    name: "Self-Study",
    price: 297,
    priceLabel: "one-time",
    description: "Full curriculum for independent learners.",
    highlighted: false,
    badge: null,
    stripePriceId: STRIPE_PRICES.selfStudy,
    cta: "Get Self-Study",
    features: [
      { text: "All 8 curriculum modules", included: true },
      { text: "Video lessons (50+ hours)", included: true },
      { text: "Practice question bank (500+)", included: true },
      { text: "Score analytics dashboard", included: true },
      { text: "Error log tool", included: false },
      { text: "Mock exams (3)", included: false },
      { text: "Community access", included: false },
      { text: "Coaching sessions", included: false },
      { text: "WhatsApp support", included: false },
      { text: "Score guarantee", included: false },
    ],
  },
  {
    id: "self_study_plus",
    name: "Self-Study Plus",
    price: 497,
    priceLabel: "one-time",
    description: "Everything in Self-Study plus mock exams and community.",
    highlighted: false,
    badge: null,
    stripePriceId: STRIPE_PRICES.selfStudyPlus,
    cta: "Get Self-Study Plus",
    features: [
      { text: "All 8 curriculum modules", included: true },
      { text: "Video lessons (50+ hours)", included: true },
      { text: "Practice question bank (500+)", included: true },
      { text: "Score analytics dashboard", included: true },
      { text: "Error log tool", included: true },
      { text: "Mock exams (3)", included: true },
      { text: "Community access", included: true },
      { text: "Coaching sessions", included: false },
      { text: "WhatsApp support", included: false },
      { text: "Score guarantee", included: false },
    ],
  },
  {
    id: "coaching",
    name: "Coaching",
    price: 2500,
    priceLabel: "package",
    description: "8 weekly 1:1 sessions + full platform access.",
    highlighted: true,
    badge: "Most Popular",
    stripePriceId: STRIPE_PRICES.coaching,
    cta: "Start Coaching",
    features: [
      { text: "All 8 curriculum modules", included: true },
      { text: "Video lessons (50+ hours)", included: true },
      { text: "Practice question bank (500+)", included: true },
      { text: "Score analytics dashboard", included: true },
      { text: "Error log tool", included: true },
      { text: "Mock exams (5)", included: true },
      { text: "Community access", included: true },
      { text: "8 weekly coaching sessions", included: true },
      { text: "WhatsApp support", included: true },
      { text: "Score guarantee", included: false },
    ],
  },
  {
    id: "intensive",
    name: "Intensive",
    price: 4200,
    priceLabel: "package",
    description: "16-week full-service program with score guarantee.",
    highlighted: false,
    badge: null,
    stripePriceId: STRIPE_PRICES.intensive,
    cta: "Start Intensive",
    features: [
      { text: "All 8 curriculum modules", included: true },
      { text: "Video lessons (50+ hours)", included: true },
      { text: "Practice question bank (500+)", included: true },
      { text: "Score analytics dashboard", included: true },
      { text: "Error log tool", included: true },
      { text: "Mock exams (unlimited)", included: true },
      { text: "Community access", included: true },
      { text: "16 weekly coaching sessions", included: true },
      { text: "WhatsApp support", included: true },
      { text: "Score guarantee", included: true },
    ],
  },
]

const faqItems = [
  {
    question: "Is this a subscription or one-time payment?",
    answer:
      "Self-Study and Self-Study Plus are one-time payments with lifetime access. Coaching and Intensive are packages — you pay once for the full program duration.",
  },
  {
    question: "What does the score guarantee mean?",
    answer:
      "The Intensive package includes a score guarantee. If you complete all 16 sessions, follow the study plan, and don't hit your target score, we'll refund the full program cost or continue coaching at no charge.",
  },
  {
    question: "Can I upgrade from Self-Study to Coaching?",
    answer:
      "Yes. If you start with Self-Study and want to add coaching, we'll credit your Self-Study payment toward the Coaching package.",
  },
  {
    question: "How are coaching sessions conducted?",
    answer:
      "Sessions are 60 minutes via Zoom. Adam reviews your error log, mock exams, and analytics before each session. You get a written action plan after every call.",
  },
  {
    question: "What if I need to pause or reschedule?",
    answer:
      "Life happens. You can reschedule sessions with 24-hour notice. Coaching packages are valid for 6 months from purchase.",
  },
]

const comparisonFeatures = [
  "All 8 modules",
  "Video lessons",
  "Practice questions",
  "Analytics",
  "Error log",
  "Mock exams",
  "Community",
  "Coaching sessions",
  "WhatsApp support",
  "Score guarantee",
]

const comparisonData: Record<string, (boolean | string)[]> = {
  "Self-Study": [true, true, true, true, false, false, false, false, false, false],
  "Self-Study Plus": [true, true, true, true, true, "3", true, false, false, false],
  Coaching: [true, true, true, true, true, "5", true, "8 sessions", true, false],
  Intensive: [true, true, true, true, true, "Unlimited", true, "16 sessions", true, true],
}

export default function PricingPage() {
  return (
    <div style={{ backgroundColor: "#0A0A0A" }}>
      {/* Header */}
      <SectionWrapper>
        <div className="text-center mb-16">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-4"
            style={{ color: "#C9A84C" }}
          >
            Pricing
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-[#F0F0F0] mb-4">
            Simple, transparent pricing.
          </h1>
          <p className="text-lg text-[#888888] max-w-xl mx-auto">
            Choose the plan that fits your timeline. Upgrade anytime.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {tiers.map((tier) => (
            <PricingCard key={tier.id} tier={tier} />
          ))}
        </div>
      </SectionWrapper>

      {/* Trust strip */}
      <div
        className="border-y border-white/[0.06] py-8"
        style={{ backgroundColor: "#0D0D0D" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-8">
            {[
              { icon: Shield, label: "Score Guarantee on Intensive" },
              { icon: Calendar, label: "Flexible Scheduling" },
              { icon: Globe, label: "Non-Native Speaker Support" },
            ].map((item) => {
              const Icon = item.icon
              return (
                <div key={item.label} className="flex items-center gap-2.5">
                  <Icon className="w-4 h-4" style={{ color: "#C9A84C" }} />
                  <span className="text-sm text-[#888888]">{item.label}</span>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Comparison table */}
      <SectionWrapper variant="darker">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold text-[#F0F0F0]">Feature comparison</h2>
        </div>

        <div className="overflow-x-auto rounded-xl border border-white/[0.08]">
          <table className="w-full">
            <thead>
              <tr style={{ backgroundColor: "#0F0F0F" }}>
                <th className="py-4 px-5 text-left text-xs text-[#555555] font-medium w-48">
                  Feature
                </th>
                {Object.keys(comparisonData).map((plan) => (
                  <th
                    key={plan}
                    className="py-4 px-4 text-center text-xs font-semibold text-[#F0F0F0]"
                  >
                    {plan}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {comparisonFeatures.map((feature, fi) => (
                <tr
                  key={feature}
                  className="border-t border-white/[0.05]"
                  style={{
                    backgroundColor: fi % 2 === 0 ? "#0A0A0A" : "transparent",
                  }}
                >
                  <td className="py-3 px-5 text-sm text-[#888888]">{feature}</td>
                  {Object.keys(comparisonData).map((plan) => {
                    const val = comparisonData[plan][fi]
                    return (
                      <td key={plan} className="py-3 px-4 text-center">
                        {typeof val === "boolean" ? (
                          val ? (
                            <Check
                              className="w-4 h-4 mx-auto"
                              style={{ color: "#3ECF8E" }}
                            />
                          ) : (
                            <X className="w-4 h-4 mx-auto text-[#333333]" />
                          )
                        ) : (
                          <span className="text-xs font-medium" style={{ color: "#C9A84C" }}>
                            {val}
                          </span>
                        )}
                      </td>
                    )
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </SectionWrapper>

      {/* FAQ */}
      <SectionWrapper>
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-[#F0F0F0]">Pricing questions</h2>
          </div>
          <FAQAccordion items={faqItems} />
        </div>
      </SectionWrapper>

      {/* Final CTA */}
      <SectionWrapper variant="darker">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-[#F0F0F0] mb-4">
            Not sure which plan? Let's talk.
          </h2>
          <p className="text-[#888888] mb-8">
            Book a free 20-minute call and we'll figure out the right fit together.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold transition-all hover:opacity-90"
            style={{ backgroundColor: "#C9A84C", color: "#0A0A0A" }}
          >
            Book a Free Call
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </SectionWrapper>
    </div>
  )
}
