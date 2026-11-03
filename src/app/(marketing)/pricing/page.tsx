import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Check, X, ArrowRight, Info } from "lucide-react"
import PricingCard from "@/components/marketing/PricingCard"
import FAQAccordion from "@/components/marketing/FAQAccordion"
import FoundingOffer from "@/components/marketing/FoundingOffer"
import TrackView from "@/components/analytics/TrackView"
import { getPublicInventory } from "@/components/marketing/content-inventory"
import { PAYWALL_ENABLED, TRIAL_DAYS } from "@/lib/entitlements"
import { tiers } from "@/lib/plans"
import { PLAN_ACCESS_MONTHS } from "@/lib/plan-access"
import {
  manualPaymentMailto,
  manualPaymentWhatsAppUrl,
} from "@/lib/manual-payment"
import { isOnlineCheckoutAvailable, paymentMethodsHelp, TRIAL_END_HELP } from "@/lib/payment-options"
import styles from "@/components/marketing/PublicSite.module.css"
import pricing from "./Pricing.module.css"
import quantLessonPreview from "../../../../public/images/home/quant-lesson.jpg"

export const metadata: Metadata = {
  title: "Pricing",
  alternates: { canonical: "/pricing" },
  description: "Compare platform access and direct support across four one-time GMAT preparation plans.",
}

const faqItems = [
  { question: "Is this a subscription?", answer: "No. Prices are in USD, paid once. Self-Study includes four months of platform access, Mentorship and Coaching six months, and Intensive twelve months. Paid access starts on the purchase date." },
  { question: "What happens after the trial?", answer: TRIAL_END_HELP },
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
  const checkoutAvailable = tiers.some((tier) => isOnlineCheckoutAvailable(tier.stripePriceId))
  const platformPlans = tiers.filter((tier) => tier.id === "self_study" || tier.id === "self_study_guaranteed")
  const coachingPlans = tiers.filter((tier) => tier.id === "coaching" || tier.id === "intensive")
  const renderPlan = (tier: (typeof tiers)[number]) => (
    <PricingCard
      key={tier.id}
      className={pricing.card}
      accessMonths={PLAN_ACCESS_MONTHS[tier.id]}
      tier={{
        ...tier,
        highlighted: false,
        badge: null,
        description: tier.id === "self_study" ? "The complete platform for independent preparation." : tier.id === "coaching" ? "The platform and eight 1:1 sessions with Adam." : tier.id === "intensive" ? "The platform and sixteen 1:1 sessions with Adam." : tier.description,
        features: tier.features.slice(-2),
      }}
      purchasable={isOnlineCheckoutAvailable(tier.stripePriceId)}
      reservationAvailable={!PAYWALL_ENABLED}
      manualContactHref={manualPaymentWhatsAppUrl({ planName: tier.name, intent: "enquiry" })}
      manualEmailHref={manualPaymentMailto({ planName: tier.name, intent: "enquiry" })}
      contactLabel={`Ask about ${tier.id === "self_study_guaranteed" ? "Mentorship" : tier.name}`}
    />
  )

  return (
    <div className={`${styles.page} ${pricing.page}`}>
      <TrackView event="pricing_view" />
      <div className={pricing.container}>
        <header className={pricing.intro}>
          <div>
            <p className={pricing.eyebrow}>Zakarian GMAT</p>
            <h1>Plans and pricing</h1>
            <p className={pricing.lede}>The full course in every plan. The choice is how much time and personal support you want.</p>
          </div>
          <div className={pricing.trial}>
            <Link href="/signup" className={`${styles.button} ${pricing.trialButton}`}>Start {TRIAL_DAYS}-day trial <ArrowRight aria-hidden="true" /></Link>
            <p className={styles.note}>No credit card required.</p>
          </div>
        </header>

        <nav className={pricing.pageNav} aria-label="Pricing sections">
          <Link href="#platform-plans">Platform plans</Link>
          <Link href="#coaching-plans">1:1 coaching</Link>
          <Link href="#comparison">Full comparison</Link>
          <span>USD. One-time payments.</span>
        </nav>

        <div className={pricing.paymentNote}>
          <Info aria-hidden="true" />
          <p>
            {!PAYWALL_ENABLED
              ? "Online checkout is not available. Ask Adam about payment options for your chosen plan by WhatsApp or email. Full access currently continues beyond the seven-day trial while the paywall is off."
              : !checkoutAvailable
                ? "Online checkout is temporarily unavailable. Ask Adam about payment options for your chosen plan by WhatsApp or email. He will confirm the details before you decide."
              : "Start with a full-access trial. Paid plans are one-time purchases; the access period begins on your purchase date. Checkout availability is shown for each plan."}
          </p>
        </div>
        <section id="platform-plans" className={pricing.planSection} aria-labelledby="platform-plans-title">
          <div className={pricing.sectionAside}>
            <p className={pricing.eyebrow}>The platform</p>
            <h2 id="platform-plans-title">Study independently.</h2>
            <p>Work through the course on your own, or add WhatsApp Q&amp;A when you want help with a question.</p>
            <Link href="#included" className={styles.textLink}>Included in both <ArrowRight aria-hidden="true" /></Link>
          </div>
          <div className={pricing.plans}>{platformPlans.map(renderPlan)}</div>
        </section>
      </div>

      <div className={pricing.coachingBand}>
        <div className={pricing.container}>
          <section id="coaching-plans" className={pricing.planSection} aria-labelledby="coaching-plans-title">
            <div className={pricing.sectionAside}>
              <p className={pricing.eyebrow}>Working together</p>
              <h2 id="coaching-plans-title">1:1 with Adam.</h2>
              <p>Time to work through your reasoning, review your mocks and decide what to change in your preparation.</p>
              <p className={pricing.sessionNote}>60-minute Zoom sessions. A written action plan after each call.</p>
              <Link href="/about" className={styles.textLink}>About Adam <ArrowRight aria-hidden="true" /></Link>
            </div>
            <div className={pricing.plans}>{coachingPlans.map(renderPlan)}</div>
          </section>
        </div>
      </div>

      <div className={pricing.container}>
        <div className={pricing.underPlans}>
          <p>All prices in USD. One payment, no recurring subscription.</p>
          <div>
            <Link href="/sample-chapter" className={styles.textLink}>Read a sample chapter <ArrowRight aria-hidden="true" /></Link>
            <Link href="/refund" className={styles.textLink}>Refund terms <ArrowRight aria-hidden="true" /></Link>
          </div>
        </div>

        <section id="included" className={pricing.included} aria-labelledby="included-title">
          <figure>
            <Link href="/sample-chapter/quant" aria-label="Read the Quant sample shown here">
              <Image src={quantLessonPreview} width={760} height={570} alt="The Zakarian GMAT lesson on linear equations and systems." sizes="(max-width: 700px) calc(100vw - 40px), 440px" />
            </Link>
            <figcaption>From the Quant course. <Link href="/sample-chapter/quant">Read the sample <ArrowRight size={14} aria-hidden="true" /></Link></figcaption>
          </figure>
          <div>
            <p className={pricing.eyebrow}>In every plan</p>
            <h2 id="included-title">The same complete course.</h2>
            <p className={pricing.includedIntro}>Choosing Self-Study doesn&apos;t mean getting a smaller question bank or missing chapters.</p>
            <dl className={pricing.inclusions}>
              <div><dt>Lessons</dt><dd>{inventory.chapters} interactive chapters and {inventory.readings} supporting readings across Quant, Verbal and Data Insights.</dd></div>
              <div><dt>Practice</dt><dd>{inventory.questions.toLocaleString("en-US")} original bank questions, chapter sets and a custom test builder.</dd></div>
              <div><dt>Review</dt><dd>An error log and spaced review queue for returning to your mistakes.</dd></div>
              <div><dt>Direction</dt><dd>Your study plan, practice history and analytics in one place.</dd></div>
            </dl>
          </div>
        </section>
      </div>

      <div className={pricing.container}>
        <section id="comparison" className={`${styles.section} ${pricing.detailSection}`}>
          <h2>Compare the details</h2>
          {/* Contain absolutely positioned screen-reader labels within the scroll area. */}
          <div className={`relative overflow-x-auto ${pricing.comparison}`} tabIndex={0} role="region" aria-label="Plan comparison">
            <table className="w-full min-w-[680px] text-sm">
              <caption className="sr-only">Platform access and support included in each plan</caption>
              <thead><tr>
                <th scope="col" className="p-4 text-left">Included</th>
                {Object.keys(comparisonData).map((plan) => <th key={plan} scope="col" className="p-4 text-center">{plan}</th>)}
              </tr></thead>
              <tbody>
                {comparisonFeatures.map((feature, index) => (
                  <tr key={feature} className="border-t border-[var(--public-line,rgba(255,255,255,0.1))]">
                    <th scope="row" className="p-4 text-left font-normal text-[color:var(--public-body,#C0C0C0)]">{feature}</th>
                    {Object.entries(comparisonData).map(([plan, values]) => {
                      const value = values[index]
                      return <td key={plan} className="p-4 text-center text-[color:var(--public-body,#C0C0C0)]">
                        {typeof value === "boolean" ? <>
                          {value ? <Check aria-hidden="true" className="mx-auto h-4 w-4 text-[color:var(--public-success,#3ECF8E)]" /> : <X aria-hidden="true" className="mx-auto h-4 w-4 text-[color:var(--public-muted,#B9B7AE)]" />}
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
      </div>

      {!PAYWALL_ENABLED && <FoundingOffer className={pricing.founding} />}

      <div className={pricing.container}>
        <section className={pricing.questions}><div><p className={pricing.eyebrow}>Before you decide</p><h2>Good questions.</h2><p>Access, support and the practical details.</p></div><FAQAccordion items={[...faqItems, { question: "What payment options are available?", answer: paymentMethodsHelp() }]} className={pricing.faq} /></section>
        <section className={pricing.contact}>
          <div><h2>Not sure which plan fits?</h2>
          <p>Tell Adam where you are in your preparation and what you need help with. No call required.</p></div>
          <div className={styles.actions}>
            <a href={manualPaymentWhatsAppUrl({ intent: "enquiry" })} target="_blank" rel="noreferrer" className={styles.textLink}>Ask Adam on WhatsApp <ArrowRight aria-hidden="true" /></a>
            <a href={manualPaymentMailto({ intent: "enquiry" })} className={styles.textLink}>Email Adam <ArrowRight aria-hidden="true" /></a>
          </div>
        </section>
      </div>
    </div>
  )
}
