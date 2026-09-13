import type { Metadata } from "next"
import Link from "next/link"
import { Check, X, ArrowRight } from "lucide-react"
import PricingCard from "@/components/marketing/PricingCard"
import FAQAccordion from "@/components/marketing/FAQAccordion"
import FoundingOffer from "@/components/marketing/FoundingOffer"
import TrackView from "@/components/analytics/TrackView"
import { getPublicInventory } from "@/components/marketing/content-inventory"
import { PAYWALL_ENABLED, TRIAL_DAYS } from "@/lib/entitlements"
import { tiers } from "@/lib/plans"
import { PLAN_ACCESS_MONTHS } from "@/lib/plan-access"
import styles from "@/components/marketing/PublicSite.module.css"

export const metadata: Metadata = {
  title: "Pricing",
  alternates: { canonical: "/pricing" },
  description: "Compare platform access and direct support across four one-time GMAT preparation plans.",
}

const faqItems = [
  { question: "Is this a subscription?", answer: "No. Prices are in USD, paid once. Self-Study includes four months of platform access, Mentorship and Coaching six months, and Intensive twelve months. Paid access starts on the purchase date." },
  { question: "What happens after the trial?", answer: PAYWALL_ENABLED
    ? `After ${TRIAL_DAYS} days of full access, a paid plan is required to continue. Your existing account and study history remain in place.`
    : `The standard trial is ${TRIAL_DAYS} days. During early release, full access continues beyond that period while the paywall is off. Checkout has not opened; a reservation does not start a paid access period.` },
  { question: "What does Mentorship add?", answer: "Direct WhatsApp Q&A with Adam and six months on the platform instead of four. Mentorship does not include scheduled coaching calls." },
  { question: "How are coaching sessions conducted?", answer: "Sessions are 60 minutes via Zoom. Adam reviews your error log, mock exams, and analytics before each session. You receive a written action plan after the call. Sessions can be rescheduled with 24-hour notice; coaching packages are valid for six months from purchase." },
  { question: "Can I upgrade to Coaching later?", answer: "Yes. Your Self-Study payment can be credited toward the Coaching package. Contact Adam to arrange the upgrade." },
]

export default function PricingPage() {
  const inventory = getPublicInventory()
  const comparisonFeatures = [
    `${inventory.chapters} interactive chapters`,
    `${inventory.readings} supporting readings`,
    `${inventory.questions.toLocaleString("en-US")} original bank questions`,
    "Practice, test builder, review, and analytics",
    "Platform access",
    "WhatsApp Q&A with Adam",
    "1:1 coaching sessions",
  ]
  const comparisonData: Record<string, (boolean | string)[]> = {
    "Self-Study": [true, true, true, true, `${PLAN_ACCESS_MONTHS.self_study} months`, false, false],
    Mentorship: [true, true, true, true, `${PLAN_ACCESS_MONTHS.self_study_guaranteed} months`, true, false],
    Coaching: [true, true, true, true, `${PLAN_ACCESS_MONTHS.coaching} months`, true, "8 sessions"],
    Intensive: [true, true, true, true, `${PLAN_ACCESS_MONTHS.intensive} months`, true, "16 sessions"],
  }
  const checkoutConfigured = (priceId: string) =>
    Boolean(process.env.STRIPE_SECRET_KEY) &&
    Boolean(priceId) &&
    !["price_self_study", "price_self_study_guaranteed", "price_coaching", "price_intensive"].includes(priceId)

  return (
    <div className={styles.page}>
      <TrackView event="pricing_view" />
      <div className={styles.container}>
        <header className={styles.intro}>
          <p className={styles.kicker}>Zakarian GMAT</p>
          <h1 className="font-display">Plans and pricing</h1>
          <p className={styles.lede}>The same platform, with different access lengths and levels of direct support.</p>
          <p className="mt-5 max-w-3xl border-l-2 border-[#C9A84C] pl-4 text-sm leading-relaxed text-[#C0C0C0]">
            {!PAYWALL_ENABLED
              ? "Early release: checkout is not yet open. Full access continues beyond the seven-day trial while the paywall is off. Reserve a founding rate without paying; choose your plan when checkout opens."
              : "Start with a full-access trial. Paid plans are one-time purchases; the access period begins on your purchase date. Checkout availability is shown for each plan."}
          </p>
          <div className={styles.actions}><Link href="/signup" className={styles.button}>Start {TRIAL_DAYS}-day trial <ArrowRight aria-hidden="true" /></Link></div>
          <p className={styles.note}>No credit card required for the trial. Listed prices are in USD.</p>
        </header>

        <p className="mb-8 text-sm leading-relaxed text-[#B9B7AE]">
          Every plan includes {inventory.chapters} interactive chapters, {inventory.readings} supporting readings, {inventory.questions.toLocaleString("en-US")} original bank questions, practice, review, and analytics.
        </p>
        <div className="grid items-stretch gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {tiers.map((tier) => (
            <PricingCard
              key={tier.id}
              tier={{
                ...tier,
                description: tier.id === "self_study" ? "The complete platform for independent preparation." : tier.id === "coaching" ? "The platform and eight 1:1 sessions with Adam." : tier.id === "intensive" ? "The platform and sixteen 1:1 sessions with Adam." : tier.description,
                features: tier.features.slice(-3),
              }}
              purchasable={PAYWALL_ENABLED && checkoutConfigured(tier.stripePriceId)}
              reservationAvailable={!PAYWALL_ENABLED}
            />
          ))}
        </div>
        <div className="my-6 flex flex-wrap gap-x-8">
          <Link href="/sample-chapter" className={styles.textLink}>Read a sample chapter <ArrowRight aria-hidden="true" /></Link>
          <Link href="/refund" className={styles.textLink}>Refund terms <ArrowRight aria-hidden="true" /></Link>
        </div>
      </div>

      {!PAYWALL_ENABLED && <FoundingOffer />}

      <div className={styles.container}>
        <section className={styles.section}>
          <h2 className="font-display">Compare the details</h2>
          {/* Contain absolutely positioned screen-reader labels within the scroll area. */}
          <div className="relative overflow-x-auto" tabIndex={0} role="region" aria-label="Plan comparison">
            <table className="w-full min-w-[680px] text-sm">
              <caption className="sr-only">Platform access and support included in each plan</caption>
              <thead><tr>
                <th scope="col" className="p-4 text-left">Included</th>
                {Object.keys(comparisonData).map((plan) => <th key={plan} scope="col" className="p-4 text-center">{plan}</th>)}
              </tr></thead>
              <tbody>
                {comparisonFeatures.map((feature, index) => (
                  <tr key={feature} className="border-t border-white/10">
                    <th scope="row" className="p-4 text-left font-normal text-[#C0C0C0]">{feature}</th>
                    {Object.entries(comparisonData).map(([plan, values]) => {
                      const value = values[index]
                      return <td key={plan} className="p-4 text-center text-[#C0C0C0]">
                        {typeof value === "boolean" ? <>
                          {value ? <Check aria-hidden="true" className="mx-auto h-4 w-4 text-[#3ECF8E]" /> : <X aria-hidden="true" className="mx-auto h-4 w-4 text-[#B9B7AE]" />}
                          <span className="sr-only">{value ? "Included" : "Not included"}</span>
                        </> : value}
                      </td>
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
        <section className={styles.section}><h2 className="font-display">Pricing questions</h2><FAQAccordion items={faqItems} className={styles.faq} /></section>
        <section className={styles.section}>
          <h2 className="font-display">Talk through your options</h2>
          <p className={styles.note}>Request a free 20-minute call. Adam will reply by email to arrange a time.</p>
          <Link href="/contact" className={styles.textLink}>Request a free call <ArrowRight aria-hidden="true" /></Link>
        </section>
      </div>
    </div>
  )
}
