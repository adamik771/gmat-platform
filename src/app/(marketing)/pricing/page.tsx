import type { Metadata } from "next"
import Link from "next/link"
import { Check, X, Shield, Calendar, Globe, ArrowRight } from "lucide-react"
import SectionWrapper from "@/components/shared/SectionWrapper"
import PricingCard from "@/components/marketing/PricingCard"
import FAQAccordion from "@/components/marketing/FAQAccordion"
import { PricingTier } from "@/types"
import { STRIPE_PRICES } from "@/lib/stripe"

export const metadata: Metadata = {
  title: "Pricing",
  description: "Simple, transparent pricing for GMAT prep that works.",
}

const tiers: PricingTier[] = [
  {
    id: "self_study",
    name: "Self-Study",
    price: 429,
    priceLabel: "one-time",
    description: "The full platform for four months — everything you need to prep on your own.",
    highlighted: false,
    badge: null,
    stripePriceId: STRIPE_PRICES.selfStudy,
    cta: "Get Self-Study",
    features: [
      { text: "50+ chapters — Quant, Verbal & Data Insights", included: true },
      { text: "1,150+ original practice questions", included: true },
      { text: "Per-chapter practice tests + custom test builder", included: true },
      { text: "Official-exam study plan & score tracking", included: true },
      { text: "Full analytics — accuracy, pacing, calibration", included: true },
      { text: "Error log + spaced review queue", included: true },
      { text: "4-month platform access", included: true },
      { text: "WhatsApp Q&A access with Adam", included: false },
      { text: "1:1 coaching sessions", included: false },
    ],
  },
  {
    id: "self_study_guaranteed",
    name: "Self-Study + Mentorship",
    price: 599,
    priceLabel: "one-time",
    description: "Everything in Self-Study, plus direct WhatsApp Q&A access to Adam and six months on the platform — ask questions as they come up, no scheduled calls.",
    highlighted: true,
    badge: "Recommended",
    stripePriceId: STRIPE_PRICES.selfStudyGuaranteed,
    cta: "Get Mentorship",
    features: [
      { text: "50+ chapters — Quant, Verbal & Data Insights", included: true },
      { text: "1,150+ original practice questions", included: true },
      { text: "Per-chapter practice tests + custom test builder", included: true },
      { text: "Official-exam study plan & score tracking", included: true },
      { text: "Full analytics — accuracy, pacing, calibration", included: true },
      { text: "Error log + spaced review queue", included: true },
      { text: "6-month platform access", included: true },
      { text: "WhatsApp Q&A access with Adam", included: true },
      { text: "1:1 coaching sessions", included: false },
    ],
  },
  {
    id: "coaching",
    name: "Coaching",
    price: 2500,
    priceLabel: "package",
    description: "The full platform, WhatsApp access, plus eight 1:1 sessions with me.",
    highlighted: false,
    badge: null,
    stripePriceId: STRIPE_PRICES.coaching,
    cta: "Start Coaching",
    features: [
      { text: "50+ chapters — Quant, Verbal & Data Insights", included: true },
      { text: "1,150+ original practice questions", included: true },
      { text: "Per-chapter practice tests + custom test builder", included: true },
      { text: "Official-exam study plan & score tracking", included: true },
      { text: "Full analytics — accuracy, pacing, calibration", included: true },
      { text: "Error log + spaced review queue", included: true },
      { text: "6-month platform access", included: true },
      { text: "WhatsApp Q&A access with Adam", included: true },
      { text: "8 weekly 1:1 coaching sessions", included: true },
    ],
  },
  {
    id: "intensive",
    name: "Intensive",
    price: 4200,
    priceLabel: "package",
    description: "Full-service program — sixteen 1:1 sessions and the most platform runway.",
    highlighted: false,
    badge: null,
    stripePriceId: STRIPE_PRICES.intensive,
    cta: "Start Intensive",
    features: [
      { text: "50+ chapters — Quant, Verbal & Data Insights", included: true },
      { text: "1,150+ original practice questions", included: true },
      { text: "Per-chapter practice tests + custom test builder", included: true },
      { text: "Official-exam study plan & score tracking", included: true },
      { text: "Full analytics — accuracy, pacing, calibration", included: true },
      { text: "Error log + spaced review queue", included: true },
      { text: "12-month platform access", included: true },
      { text: "WhatsApp Q&A access with Adam", included: true },
      { text: "16 weekly 1:1 coaching sessions", included: true },
    ],
  },
]

const faqItems = [
  {
    question: "Is this a subscription or one-time payment?",
    answer:
      "Self-Study is a one-time payment for four months of platform access; Self-Study + Mentorship is one payment for six months. Coaching and Intensive are packages — you pay once for the full program.",
  },
  {
    question: "What does the Mentorship tier add?",
    answer:
      "Direct WhatsApp Q&A access to Adam, plus six months on the platform instead of four. Ask questions as they come up while you study — no scheduled calls, just answers when you need them.",
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
  "50+ chapters (Q / V / DI)",
  "1,150+ practice questions",
  "Practice tests + test builder",
  "Official-exam study plan",
  "Full analytics",
  "Error log + spaced review",
  "Platform access",
  "WhatsApp Q&A access",
  "1:1 coaching sessions",
]

const comparisonData: Record<string, (boolean | string)[]> = {
  "Self-Study": [true, true, true, true, true, true, "4 months", false, false],
  Mentorship: [true, true, true, true, true, true, "6 months", true, false],
  Coaching: [true, true, true, true, true, true, "6 months", true, "8 sessions"],
  Intensive: [true, true, true, true, true, true, "12 months", true, "16 sessions"],
}

export default function PricingPage() {
  return (
    <div style={{ backgroundColor: "#0A0A0A" }}>
      {/* Header */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 90% 50% at 50% -5%, rgba(201,168,76,0.15) 0%, transparent 60%)",
          }}
          aria-hidden
        />
        <div
          className="absolute inset-0 pointer-events-none bg-grain opacity-[0.03] mix-blend-overlay"
          aria-hidden
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <p
              className="text-[10px] font-semibold uppercase tracking-[0.22em] mb-4"
              style={{ color: "#C9A84C" }}
            >
              Pricing
            </p>
            <h1 className="font-display text-4xl sm:text-6xl font-semibold text-[#F0F0F0] tracking-[-0.02em] leading-[1.02] mb-5">
              Simple, transparent{" "}
              <span className="font-display-italic" style={{ color: "#C9A84C" }}>
                pricing.
              </span>
            </h1>
            <p className="text-[15px] sm:text-[17px] text-[#888888] leading-relaxed">
              Four paths from self-study to full-service coaching. Choose the plan that
              fits your timeline. Upgrade anytime.
            </p>
          </div>

          {/* Pricing cards */}
          <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6">
            {tiers.map((tier) => (
              <PricingCard key={tier.id} tier={tier} />
            ))}
          </div>

          {/* Hesitation reducer — sample chapter link below the tiers */}
          <div className="mt-10 text-center">
            <Link
              href="/sample-chapter"
              className="inline-flex items-center gap-2 text-[14px] hover:underline transition-opacity hover:opacity-80"
              style={{ color: "#C9A84C" }}
            >
              Want to see what one chapter looks like first?
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <div
        className="border-y border-white/[0.06] py-8"
        style={{ backgroundColor: "#0D0D0D" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-4">
            {[
              { icon: Shield, label: "14-Day Money-Back" },
              { icon: Calendar, label: "Flexible Scheduling" },
              { icon: Globe, label: "Non-Native Speaker Support" },
            ].map((item, i) => {
              const Icon = item.icon
              return (
                <div key={item.label} className="flex items-center gap-3">
                  {i > 0 && (
                    <div className="hidden sm:block h-4 w-px bg-white/[0.08]" aria-hidden />
                  )}
                  <div className="flex items-center gap-2.5">
                    <Icon className="w-4 h-4" style={{ color: "#C9A84C" }} />
                    <span className="text-sm text-[#C0C0C0] tracking-tight">{item.label}</span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Comparison table */}
      <SectionWrapper variant="darker">
        <div className="text-center mb-12">
          <p className="text-[10px] font-semibold uppercase tracking-[0.22em] mb-3" style={{ color: "#C9A84C" }}>
            Compare
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-[#F0F0F0] tracking-[-0.02em] leading-[1.05]">
            What each tier includes
          </h2>
        </div>

        <div
          className="overflow-x-auto rounded-2xl border border-white/[0.08]"
          style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.03)" }}
        >
          <table className="w-full">
            <thead>
              <tr style={{ backgroundColor: "#0F0F0F" }}>
                <th className="py-5 px-6 text-left text-[10px] uppercase tracking-[0.18em] text-[#555555] font-semibold w-48">
                  Feature
                </th>
                {Object.keys(comparisonData).map((plan) => (
                  <th
                    key={plan}
                    className="py-5 px-4 text-center font-display text-sm font-semibold text-[#F0F0F0] tracking-tight"
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
                  className="border-t border-white/[0.05] transition-colors hover:bg-white/[0.02]"
                  style={{
                    backgroundColor: fi % 2 === 0 ? "#0A0A0A" : "transparent",
                  }}
                >
                  <td className="py-3.5 px-6 text-sm text-[#C0C0C0]">{feature}</td>
                  {Object.keys(comparisonData).map((plan) => {
                    const val = comparisonData[plan][fi]
                    return (
                      <td key={plan} className="py-3.5 px-4 text-center">
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
                          <span className="text-xs font-semibold tabular-nums" style={{ color: "#C9A84C" }}>
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
          <div className="text-center mb-12">
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] mb-3" style={{ color: "#C9A84C" }}>
              FAQ
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-[#F0F0F0] tracking-[-0.02em] leading-[1.05]">
              Pricing questions
            </h2>
          </div>
          <FAQAccordion items={faqItems} />
        </div>
      </SectionWrapper>

      {/* Final CTA */}
      <section className="relative py-28 overflow-hidden" style={{ backgroundColor: "#050505" }}>
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 70% at 50% 100%, rgba(201,168,76,0.14) 0%, transparent 65%)",
          }}
          aria-hidden
        />
        <div
          className="absolute inset-0 pointer-events-none bg-grain opacity-[0.03] mix-blend-overlay"
          aria-hidden
        />
        <div className="relative max-w-3xl mx-auto text-center px-4">
          <h2 className="font-display text-3xl sm:text-5xl font-semibold text-[#F0F0F0] tracking-[-0.02em] leading-[1.05] mb-5">
            Not sure which plan?{" "}
            <span className="font-display-italic" style={{ color: "#C9A84C" }}>
              Let&apos;s talk.
            </span>
          </h2>
          <p className="text-[15px] sm:text-[17px] text-[#888888] leading-relaxed mb-10">
            Book a free 20-minute call and we&apos;ll figure out the right fit together.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold transition-all duration-200 hover:opacity-90 hover:scale-[1.02] active:scale-[0.98]"
            style={{ backgroundColor: "#C9A84C", color: "#0A0A0A" }}
          >
            Book a Free Call
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}
