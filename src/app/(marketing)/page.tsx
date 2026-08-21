import type { Metadata } from "next"
import Link from "next/link"
import {
  ArrowRight,
  BookOpen,
  Check,
  Clock,
  FlaskConical,
  RotateCcw,
  Target,
} from "lucide-react"
import FAQAccordion from "@/components/marketing/FAQAccordion"
import HeroDashboardCard from "@/components/marketing/HeroDashboardCardLazy"
import LeadCapture from "@/components/marketing/LeadCapture"
import TrackView from "@/components/analytics/TrackView"
import { CHAPTER_COUNT_CLAIM, QUESTION_CLAIM } from "@/lib/site"
import { PAYWALL_ENABLED, TRIAL_DAYS } from "@/lib/entitlements"

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  openGraph: {
    url: "/",
    title: "Zakarian GMAT - From 565 to 735",
    description:
      "A structured GMAT preparation system built around guided study, deliberate practice, and rigorous review.",
  },
  twitter: {
    title: "Zakarian GMAT - From 565 to 735",
    description:
      "A structured GMAT preparation system built around guided study, deliberate practice, and rigorous review.",
  },
}

const system = [
  {
    icon: BookOpen,
    title: "Learn in sequence",
    description: `${CHAPTER_COUNT_CLAIM} chapters arranged as one coherent path across Quant, Verbal, and Data Insights.`,
  },
  {
    icon: Target,
    title: "Practice with intent",
    description:
      "Build focused sets by topic and difficulty, or let recent performance determine the next set.",
  },
  {
    icon: RotateCcw,
    title: "Review what matters",
    description:
      "Every miss enters a structured error log and spaced-review queue instead of disappearing into a score.",
  },
  {
    icon: FlaskConical,
    title: "Use official exams deliberately",
    description:
      "A clear exam roadmap tells you when to establish a baseline, retest, and review each sitting.",
  },
]

const phases = [
  ["01", "Foundations", "Arithmetic, core reasoning, and section mechanics."],
  ["02", "Strategy", "Backsolving, estimation, and repeatable decision rules."],
  ["03", "Core topics", "Quant, Verbal, and DI developed in parallel."],
  ["04", "Advanced work", "Higher-complexity topics, traps, and mixed reasoning."],
  ["05", "Exam pressure", "Pacing, mixed sets, and official-exam review."],
]

const plans = [
  {
    name: "Self-Study",
    price: "$429",
    detail: "4 months",
    description: "The complete platform for independent preparation.",
    recommended: false,
  },
  {
    name: "Mentorship",
    price: "$599",
    detail: "6 months",
    description: "The platform plus direct WhatsApp Q&A with Adam.",
    recommended: true,
  },
  {
    name: "Coaching",
    price: "$2,500",
    detail: "8 sessions",
    description: "Weekly 1:1 work and a tailored preparation plan.",
    recommended: false,
  },
  {
    name: "Intensive",
    price: "$4,200",
    detail: "16 sessions",
    description: "A full preparation cycle with close, ongoing support.",
    recommended: false,
  },
]

const faqItems = [
  {
    question: "Who is Zakarian GMAT for?",
    answer:
      "It is built for ambitious MBA and business master's candidates, including MiM, Master in Finance, and Banking and Finance applicants, who want a structured, data-driven preparation system rather than a large, unsequenced video library. It is particularly attentive to the problems faced by non-native English speakers and students without technical backgrounds.",
  },
  {
    question: "Do I need a strong mathematics background?",
    answer:
      "No. The Quant curriculum starts from first principles and builds systematically. It teaches both the underlying content and the faster decision methods that the exam rewards.",
  },
  {
    question: "What happens during the free trial?",
    answer: `Every new account receives ${TRIAL_DAYS} days of full platform access without entering a card. You can read the chapters, build practice sets, use the review system, and explore the analytics before choosing a plan.`,
  },
  {
    question: "How quickly should I expect to improve?",
    answer:
      "That depends on your starting point, schedule, and consistency. Zakarian GMAT does not promise a score or timeline. The platform is designed to identify weak signals early and direct your time toward the work most likely to matter.",
  },
  {
    question: "What is the refund policy?",
    answer:
      "The self-study plans include a 14-day money-back guarantee that is not tied to an exam result. Coaching and Intensive are refundable in full before the first session. The complete terms are on the Refund Policy page.",
  },
]

export default function HomePage() {
  return (
    <div className="marketing-editorial">
      <TrackView event="landing_view" />

      <section className="editorial-hero">
        <div className="editorial-hero__copy">
          <p className="editorial-kicker">
            GMAT preparation for MBA and business master&apos;s candidates
          </p>
          <h1>Zakarian GMAT</h1>
          <p className="editorial-hero__lede">
            A serious study environment for candidates who want clear direction,
            rigorous practice, and an honest view of their progress.
          </p>
          <div className="editorial-actions">
            <Link href="/signup" className="editorial-button editorial-button--primary">
              Start {TRIAL_DAYS}-day trial
              <ArrowRight aria-hidden="true" />
            </Link>
            <Link href="/sample-chapter" className="editorial-button editorial-button--quiet">
              Read a sample chapter
            </Link>
          </div>
          <p className="editorial-hero__terms">
            Full access. No credit card. One-time plans after the trial.
          </p>
          <dl className="editorial-proofline">
            <div>
              <dt>Founder score</dt>
              <dd>735</dd>
            </div>
            <div>
              <dt>Starting score</dt>
              <dd>565</dd>
            </div>
            <div>
              <dt>Question bank</dt>
              <dd>{QUESTION_CLAIM}</dd>
            </div>
            <div>
              <dt>Access model</dt>
              <dd>One-time</dd>
            </div>
          </dl>
        </div>

        <div className="editorial-hero__product">
          <HeroDashboardCard />
        </div>
      </section>

      <section className="editorial-statement">
        <div>
          <p className="editorial-kicker">The operating principle</p>
          <h2>Every session should begin with one clear question.</h2>
        </div>
        <blockquote>
          What is the highest-value work I can do next?
        </blockquote>
        <p>
          The platform connects curriculum progress, recent mistakes, review timing,
          and exam milestones so that the answer is visible when you open it.
        </p>
      </section>

      <section className="editorial-section">
        <div className="editorial-section__heading">
          <p className="editorial-kicker">How the system works</p>
          <h2>One loop, repeated well.</h2>
          <p>
            Learning, practice, review, and official exams are not separate products.
            They are four parts of the same preparation cycle.
          </p>
        </div>
        <div className="editorial-system-grid">
          {system.map(({ icon: Icon, title, description }, index) => (
            <article key={title}>
              <div className="editorial-system-grid__number">0{index + 1}</div>
              <Icon aria-hidden="true" />
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="editorial-section editorial-section--ruled">
        <div className="editorial-section__heading editorial-section__heading--wide">
          <p className="editorial-kicker">The guided course</p>
          <h2>A syllabus, not a content library.</h2>
          <p>
            The curriculum progresses from fundamentals to mixed pressure while keeping
            all three sections active. You always know what precedes what.
          </p>
        </div>
        <div className="editorial-phase-list">
          {phases.map(([number, title, description]) => (
            <div key={number}>
              <span>{number}</span>
              <strong>{title}</strong>
              <p>{description}</p>
            </div>
          ))}
        </div>
        <Link href="/course" className="editorial-text-link">
          Explore the complete curriculum
          <ArrowRight aria-hidden="true" />
        </Link>
      </section>

      <section id="results" className="editorial-founder">
        <div className="editorial-founder__score">
          <span>565</span>
          <ArrowRight aria-hidden="true" />
          <strong>735</strong>
        </div>
        <div className="editorial-founder__copy">
          <p className="editorial-kicker">Built from first-hand experience</p>
          <h2>The product came before the company.</h2>
          <p>
            Adam Zakarian built the original system to solve his own preparation:
            too much material, too little sequencing, and weak feedback after a mistake.
            Over eight months, his score moved from 565 to 735. He now studies in the
            Master in Banking and Finance programme at the University of St.Gallen (HSG).
          </p>
          <p>
            Zakarian GMAT turns that working system into a platform: the curriculum,
            practice logic, error analysis, exam roadmap, and daily decision-making in
            one place. The goal is not to become another video course. It is to build the
            best environment in which to prepare.
          </p>
          <Link href="/about" className="editorial-text-link">
            Read the founder story
            <ArrowRight aria-hidden="true" />
          </Link>
        </div>
      </section>

      <section id="plans" className="editorial-section editorial-section--plans">
        <div className="editorial-plans-header">
          <div className="editorial-section__heading editorial-section__heading--wide">
            <p className="editorial-kicker">Plans</p>
            <h2>Begin with the product. Choose support later.</h2>
            <p>
              Every account starts with the same {TRIAL_DAYS}-day full-access trial.
              Plans differ by access length and the amount of direct support.
            </p>
          </div>
          <div className="editorial-plans-trial">
            <span>Start here</span>
            <strong>{TRIAL_DAYS} days</strong>
            <p>Complete platform access. No credit card.</p>
            <Link href="/signup">
              Begin the trial
              <ArrowRight aria-hidden="true" />
            </Link>
          </div>
        </div>
        <div className="editorial-plan-list">
          {plans.map((plan, index) => (
            <Link
              href="/pricing"
              key={plan.name}
              className={`editorial-plan-row${plan.recommended ? " editorial-plan-row--recommended" : ""}`}
            >
              <span className="editorial-plan-row__index">0{index + 1}</span>
              <div>
                <div className="editorial-plan-row__title">
                  <h3>{plan.name}</h3>
                  {plan.recommended && <span>Recommended</span>}
                </div>
                <p>{plan.description}</p>
              </div>
              <span className="editorial-plan-row__detail">{plan.detail}</span>
              <strong>{plan.price}</strong>
              <ArrowRight aria-hidden="true" />
            </Link>
          ))}
        </div>
        <div className="editorial-inclusions">
          {["Full curriculum", QUESTION_CLAIM, "Practice and review", "Performance analytics"].map((item) => (
            <span key={item}><Check aria-hidden="true" />{item}</span>
          ))}
        </div>
      </section>

      <section className="editorial-section editorial-section--split">
        <div className="editorial-section__heading">
          <p className="editorial-kicker">Common questions</p>
          <h2>Clear terms before you begin.</h2>
          <p>
            No score guarantees, no hidden subscription, and no card required for the trial.
          </p>
          <Link href="/faq" className="editorial-text-link">
            View all questions
            <ArrowRight aria-hidden="true" />
          </Link>
        </div>
        <FAQAccordion items={faqItems} />
      </section>

      <section className="editorial-resource">
        <div>
          <p className="editorial-kicker">Free working resource</p>
          <h2>The error-log template behind the review system.</h2>
          <p>
            Download the six-tag taxonomy and spreadsheet structure Adam used to
            identify recurring mistakes during his own preparation.
          </p>
        </div>
        <LeadCapture
          source="homepage"
          leadMagnet="error-log-template"
          eyebrow="Error-log template"
          headline="Build a review process before you build another study plan."
          description="The exact six-tag taxonomy and spreadsheet structure. No account required."
          ctaLabel="Send me the template"
        />
      </section>

      <section className="editorial-final">
        <div>
          <Clock aria-hidden="true" />
          <p>Seven days of complete access</p>
        </div>
        <h2>See whether the system improves the way you study.</h2>
        <div className="editorial-actions">
          <Link href="/signup" className="editorial-button editorial-button--primary">
            Start {TRIAL_DAYS}-day trial
            <ArrowRight aria-hidden="true" />
          </Link>
          <Link href="/pricing" className="editorial-button editorial-button--quiet">
            Review plans
          </Link>
        </div>
        {!PAYWALL_ENABLED && (
          <p className="editorial-final__note">
            Checkout is not yet open. Trial access continues while the platform is in early release.
          </p>
        )}
      </section>
    </div>
  )
}
