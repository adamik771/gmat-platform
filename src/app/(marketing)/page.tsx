import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, BookOpen, Target, RotateCcw } from "lucide-react"
import FAQAccordion from "@/components/marketing/FAQAccordion"
import HeroDashboardCard from "@/components/marketing/HeroDashboardCard"
import LeadCapture from "@/components/marketing/LeadCapture"
import TrackView from "@/components/analytics/TrackView"
import { getPublicInventory } from "@/components/marketing/content-inventory"
import { PAYWALL_ENABLED, TRIAL_DAYS } from "@/lib/entitlements"
import { tiers } from "@/lib/plans"
import { PLAN_ACCESS_MONTHS } from "@/lib/plan-access"
import styles from "@/components/marketing/PublicSite.module.css"

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  openGraph: {
    url: "/",
    title: "Zakarian GMAT | GMAT preparation",
    description: "Structured chapters, focused practice, spaced review, and clear progress tracking.",
  },
  twitter: {
    title: "Zakarian GMAT | GMAT preparation",
    description: "Structured chapters, focused practice, spaced review, and clear progress tracking.",
  },
}

const phases = [
  ["Foundations", "Arithmetic, core reasoning, and section mechanics."],
  ["Strategy", "Backsolving, estimation, and answer-choice tactics."],
  ["Core topics", "Quant, Verbal, and Data Insights in rotation."],
  ["Advanced work", "Counting, probability, argument structure, and mixed reasoning."],
  ["Timing", "Pacing, mixed sets, and exam review."],
]

const faqItems = [
  { question: "Who is this for?", answer: "MBA and business master's applicants who want a reading-first curriculum, focused practice, and a regular review routine." },
  { question: "Do I need a strong mathematics background?", answer: "No. Quant begins with arithmetic foundations before moving to strategies and more complex topics." },
  { question: "How does the trial work?", answer: PAYWALL_ENABLED
    ? `New accounts receive ${TRIAL_DAYS} days of full platform access without a card. When the trial ends, choose a paid plan to continue on the same account.`
    : `New accounts start a ${TRIAL_DAYS}-day trial without a card. During early release, full access continues beyond those seven days while the paywall is off. Checkout is not yet open.` },
  { question: "Is a score improvement guaranteed?", answer: "No. Your outcome depends on your starting point, preparation, and test-day performance. The founder's score journey is one personal experience, not a typical student result." },
  { question: "What is the refund policy?", answer: "Self-Study and Mentorship have a 14-day money-back guarantee. Coaching and Intensive are fully refundable before the first session. See the Refund Policy for the complete terms." },
]

export default function HomePage() {
  const inventory = getPublicInventory()
  return (
    <div className={styles.page}>
      <TrackView event="landing_view" />
      <div className={styles.container}>
        <header className={styles.intro}>
          <p className={styles.kicker}>Zakarian GMAT</p>
          <h1 className="font-display">GMAT preparation</h1>
          <p className={styles.lede}>
            <strong>Know what to study next.</strong> A structured course with focused
            practice, spaced review, and clear progress tracking.
          </p>
          <div className={styles.actions}>
            <Link href="/signup" className={styles.button}>Start {TRIAL_DAYS}-day trial <ArrowRight aria-hidden="true" /></Link>
            <Link href="/sample-chapter" className={styles.quietButton}>Read a sample chapter</Link>
          </div>
          <p className={styles.note}>
            {PAYWALL_ENABLED ? "Full access. No credit card required." : "No credit card. Free access continues during early release; checkout is not yet open."}
          </p>
        </header>

        <HeroDashboardCard />

        <dl className={styles.proof}>
          <div><dt>Founder&apos;s journey</dt><dd>565 to 735</dd></div>
          <div><dt>Interactive chapters</dt><dd>{inventory.chapters}</dd></div>
          <div><dt>Supporting readings</dt><dd>{inventory.readings}</dd></div>
          <div><dt>Original bank questions</dt><dd>{inventory.questions.toLocaleString("en-US")}</dd></div>
        </dl>

        <section className={styles.section}>
          <h2 className="font-display">From a lesson to your next review</h2>
          <div className={styles.steps}>
            <div><BookOpen aria-hidden="true" /><h3>Read the method</h3><p>The algebra sample explains linear equations and systems, with worked examples.</p><Link href="/sample-chapter/quant" className={styles.textLink}>Read algebra <ArrowRight aria-hidden="true" /></Link></div>
            <div><Target aria-hidden="true" /><h3>Inspect the mistake</h3><p>In the example above, choosing 30 drops the final +5. The question&apos;s explanation identifies that exact trap.</p></div>
            <div><RotateCcw aria-hidden="true" /><h3>Revisit what needs work</h3><p>In the platform, practice history feeds the review queue. Misses return for correction; correct answers can return for retention. This public example does not create a review item.</p></div>
          </div>
        </section>

        <section className={styles.section}>
          <p className={styles.kicker}>The curriculum</p>
          <h2 className="font-display">Five phases, one guided path</h2>
          <div className={styles.phases}>
            {phases.map(([title, description], index) => (
              <div className={styles.phase} key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{description}</p></div>
            ))}
          </div>
          <Link href="/course" className={styles.textLink}>Explore the curriculum <ArrowRight aria-hidden="true" /></Link>
        </section>

        <section id="results" className={`${styles.section} ${styles.founder}`}>
          <div>
            <p className={styles.kicker}>Founder&apos;s experience</p>
            <h2 className="font-display">Adam Zakarian</h2>
            <p>Adam&apos;s preparation moved from a 565 official-practice baseline in April 2025 to a 735 official GMAT Focus result in December 2025. That experience informed this platform&apos;s emphasis on structured study and mistake review.</p>
            <Link href="/about" className={styles.textLink}>Read the founder story <ArrowRight aria-hidden="true" /></Link>
            <p className={styles.note}>A personal result, not a claim about typical student improvement.</p>
          </div>
          <div>
            <ol className={styles.timeline}>
              <li><strong>565</strong><span><b>Official practice baseline</b>April 2025</span></li>
              <li><strong>675</strong><span><b>First official GMAT Focus exam</b>November 2025</span></li>
              <li><strong>735</strong><span><b>Second official GMAT Focus exam</b>December 2025</span></li>
            </ol>
            <Link href="/students" className={styles.textLink}>Results and evidence <ArrowRight aria-hidden="true" /></Link>
          </div>
        </section>

        <section id="plans" className={styles.section}>
          <h2 className="font-display">Choose your level of support</h2>
          <p className={styles.note}>All plans include the platform. Prices are in USD, paid once; access starts at purchase.{!PAYWALL_ENABLED && " Checkout is closed during early release. Founding-rate reservations do not take payment."}</p>
          <div className={styles.plans}>
            {tiers.map((tier) => (
              <div className={styles.plan} key={tier.id}>
                <h3>{tier.id === "self_study_guaranteed" ? "Mentorship" : tier.name}</h3>
                <strong>${tier.price.toLocaleString("en-US")}</strong>
                <p>{PLAN_ACCESS_MONTHS[tier.id]} months of platform access</p>
                <p>{tier.id === "self_study" ? "Independent study" : tier.id === "self_study_guaranteed" ? "Includes Self-Study + WhatsApp Q&A" : tier.id === "coaching" ? "WhatsApp Q&A + 8 coaching sessions" : "WhatsApp Q&A + 16 coaching sessions"}</p>
              </div>
            ))}
          </div>
          <Link href="/pricing" className={styles.textLink}>Compare plans and availability <ArrowRight aria-hidden="true" /></Link>
        </section>

        <section className={styles.section}>
          <h2 className="font-display">Before you begin</h2>
          <FAQAccordion items={faqItems} className={styles.faq} />
          <Link href="/faq" className={styles.textLink}>All questions <ArrowRight aria-hidden="true" /></Link>
        </section>

        <section className={`${styles.section} ${styles.resource}`}>
          <div><h2 className="font-display">The error-log template</h2><p className={styles.note}>A free spreadsheet for recording mistakes with the platform&apos;s six-tag taxonomy. Get the download link; study emails are optional.</p></div>
          <LeadCapture source="homepage" leadMagnet="error-log-template" headline="Get the template" description="Enter your email to receive the download link." ctaLabel="Get the template" footnote="The template link appears after submission. Marketing emails are optional." />
        </section>

        <section className={styles.section}>
          <h2 className="font-display">Start with your first chapter</h2>
          <div className={styles.actions}><Link href="/signup" className={styles.button}>Start {TRIAL_DAYS}-day trial <ArrowRight aria-hidden="true" /></Link></div>
          <p className={styles.note}>No credit card required.{!PAYWALL_ENABLED && " Full access continues while the platform is in early release."}</p>
        </section>
      </div>
    </div>
  )
}
