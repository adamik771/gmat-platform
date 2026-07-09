import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import SectionWrapper from "@/components/shared/SectionWrapper"
import FAQAccordion from "@/components/marketing/FAQAccordion"
import JsonLd from "@/components/seo/JsonLd"
import { faqPageLd } from "@/lib/structured-data"
import { PAYWALL_ENABLED, TRIAL_DAYS } from "@/lib/entitlements"
import { CHAPTER_COUNT_CLAIM } from "@/lib/site"

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Frequently asked questions about Zakarian GMAT — the curriculum, scoring, getting started, baselining with official practice exams, billing, and the platform's specific approach for non-native speakers.",
  alternates: { canonical: "/faq" },
}

interface FAQItem {
  question: string
  answer: string
}

interface FAQCategory {
  title: string
  items: FAQItem[]
}

const categories: FAQCategory[] = [
  {
    title: "About the platform",
    items: [
      {
        question: "Who is Zakarian GMAT designed for?",
        answer:
          "This system is built for serious MBA candidates who want a structured, data-driven approach — not a content library to wade through. It's especially effective for working professionals on a 12-16 week timeline, non-native English speakers, and people without a technical background who struggle with Quant.",
      },
      {
        question: "Do I need a math background?",
        answer:
          "No. Adam (the founder) has no engineering background and scored Q88. The Quant curriculum starts from first principles. The issue is almost never knowledge — it's strategy and systematic review.",
      },
      {
        question: "How long does the full course take?",
        answer:
          "The full curriculum is designed for a 16-week timeline at ~90 minutes/day, 5 days/week. You can compress to 8-10 weeks if you have less time, or extend it if you have more. How quickly your score moves depends on your starting point and consistency — we don't promise a timeline.",
      },
      {
        question: "Can I use this alongside TTP, Manhattan, or Magoosh?",
        answer:
          "Yes. Many students use Zakarian as the review-and-analytics layer on top of content-heavy courses. The error log, mock debrief tools, and adaptive plan work well as a second pass after finishing a content course.",
      },
      {
        question: "What makes this different from other prep courses?",
        answer:
          "Most courses are content libraries. Zakarian is a system. The error log turns mistakes into data; the analytics show patterns over time; the adaptive plan re-prioritises your week from your last seven days of misses; the coaching addresses root causes rather than re-teaching content. The whole product is built around the loop, not the lectures.",
      },
      {
        question: "Is the platform built for the GMAT Focus Edition specifically?",
        answer:
          "Yes. Every section, every chapter, the scoring scale (205-805), and the section ordering all target the GMAT Focus Edition. The legacy GMAT was retired in early 2024; Focus is the only version offered now and the only one we prep for.",
      },
    ],
  },
  {
    title: "Getting started and your baseline",
    items: [
      {
        question: "What do I get with a free account?",
        answer: PAYWALL_ENABLED
          ? `Every new account starts a free ${TRIAL_DAYS}-day trial with full access to everything — all ${CHAPTER_COUNT_CLAIM} chapters, the full question bank, the error log, the adaptive study plan, the spaced review queue, mock exams, and the AI tutor. No credit card required at signup.`
          : "A free 7-day trial with full access to everything: all 50+ chapters, the full question bank, the error log, the adaptive study plan, the spaced review queue, mock exams, the AI tutor, and the offline PWA. No credit card required at signup.",
      },
      {
        question: "Do I need a credit card to sign up?",
        answer:
          "No. The signup form asks for your name, email, and a password — no payment details required.",
      },
      {
        question: "Will my free access expire after a set number of days?",
        answer: PAYWALL_ENABLED
          ? `Yes — the free trial runs ${TRIAL_DAYS} days from signup, with full access and nothing to cancel. When it ends, your study data stays exactly where you left it; a one-time plan purchase (not a subscription) unlocks the platform for your plan's access window, with a 14-day money-back guarantee on the self-study plans.`
          : "Every account starts with a free 7-day full-access trial — no credit card, nothing to cancel. We're pre-launch, so access isn't cut off the moment the trial ends; when paid plans open, a one-time purchase (not a subscription) continues your access, and any change will be made clear in advance.",
      },
      {
        question: "How does the platform know where I'm starting from?",
        answer:
          "You baseline with an official practice exam from mba.com — the same interface and scoring algorithm as the real test — and enter your section scores on the site. The platform turns that baseline into your adaptive study plan, and your mock-to-mock trend tracks progress from there.",
      },
      {
        question: "Can I try the platform without signing up?",
        answer:
          "Yes — the free sample chapter at /sample-chapter shows two full readings from the Verbal Foundations chapter, no signup required, with Quant and Data Insights samples one click away. Everything else, including the full chapters and question bank, requires a free account.",
      },
    ],
  },
  {
    title: "Score and results",
    items: [
      {
        question: "What kind of score improvement can I expect?",
        answer:
          "We don't promise a specific score or improvement — results depend on your starting point, your consistency, and how honestly you review your mistakes. What the platform gives you is the structure to improve efficiently: a baseline from an official practice exam, an adaptive plan that targets your weak areas, an error log that turns mistakes into data, and mock-to-mock tracking so you can watch your own trend.",
      },
      {
        question: "How long until I see real score movement?",
        answer:
          "That varies by starting point and consistency, so we don't put a number on it. What we can say is the method compounds: the more honestly you log and review your misses, the faster patterns surface in your analytics. The review loop is where the work pays off — not the calendar.",
      },
      {
        question: "How does the GMAT Focus 205-805 scale compare to my old GMAT score?",
        answer:
          "The two scales are not directly comparable — GMAC deliberately offset them. Roughly: Focus 705 ≈ Old 730, Focus 695 ≈ Old 720, Focus 645 ≈ Old 680. Use the score converter at /score-converter for any specific score.",
      },
    ],
  },
  {
    title: "The curriculum and study plan",
    items: [
      {
        question: "How is the curriculum structured?",
        answer:
          "50+ chapters covering every GMAT Focus topic across Quant, Verbal, and Data Insights. Each chapter has a pre-test (~2 questions), 6-9 reading sections with in-chapter recall checks, and a graded problem set across easy / medium / hard tiers.",
      },
      {
        question: "Can I skip chapters I already know?",
        answer:
          "Yes — the chapter index is non-linear. Your official practice-exam baseline identifies your weakest sections; the adaptive plan recommends those chapters first. You can read any chapter in any order.",
      },
      {
        question: "What is the adaptive study plan?",
        answer:
          "A weekly plan that re-prioritises based on your last seven days of practice data. If your error log shows your dominant tag has shifted from Conceptual to Time pressure, the next week's plan reflects that. Static schedules drift out of usefulness in two weeks; the adaptive plan adjusts.",
      },
      {
        question: "How is the error log different from a regular notes feature?",
        answer:
          "The error log uses a six-tag taxonomy (Conceptual / Careless / Time pressure / Misread / Strategy / Other). Every miss gets exactly one tag. After 60-100 entries, the dominant tags surface — and those tags, not the topics, tell you what to drill. It's the loop the platform is built around.",
      },
      {
        question: "Are mock exams included?",
        answer:
          "Yes — every plan includes the full-length, three-section mock simulator with unlimited attempts and a structured debrief, plus a study plan built around the six official mba.com practice exams (which we recommend as your real score check). Coaching and Intensive add 1:1 review of your results.",
      },
    ],
  },
  {
    title: "For non-native English speakers",
    items: [
      {
        question: "Is the curriculum specifically built for non-native speakers?",
        answer:
          "The platform was built by a non-native English speaker (Adam scored 735 from a 565 baseline). The Verbal chapters teach the structural-skim approach for RC and stem-first reading for CR — both are tactics non-native speakers benefit from disproportionately. The error log includes 'Misread' and 'Time pressure' as first-class tags, which are the two patterns non-native speakers most need to surface.",
      },
      {
        question: "Will my Verbal score realistically improve?",
        answer:
          "Yes. The biggest myth is that Verbal is 'easier for native speakers.' The actual disadvantage is comprehension speed, not comprehension itself — and speed is trainable with the structural-skim approach. That is the exact gap Adam closed as a non-native speaker on the way from 565 to 735. The platform doesn't quote average improvement figures until they're verified from real students — your own mock-to-mock trend is the number that matters.",
      },
      {
        question: "Was Sentence Correction removed from the GMAT Focus Edition?",
        answer:
          "Yes — Sentence Correction is gone from Focus. This was the section where native speakers had the biggest structural advantage, so its removal is a small but real boost for non-native speakers.",
      },
      {
        question: "Should I take the IELTS or TOEFL before the GMAT?",
        answer:
          "Different test, different skill — your IELTS or TOEFL score is not predictive of your GMAT Verbal score in either direction. If you need IELTS / TOEFL for admissions, take it; don't expect it to substitute for GMAT prep.",
      },
    ],
  },
  {
    title: "The AI tutor",
    items: [
      {
        question: "How does the AI tutor work?",
        answer:
          "On any practice question, you can open the tutor drawer and ask follow-ups about the question, the answer, the trap, or the fastest path. The tutor has access to the question, the choices, the correct answer, the authored explanation, the trap analysis, and the takeaway — so its answers are grounded in the question's actual content rather than generic advice.",
      },
      {
        question: "Is the tutor a substitute for a human coach?",
        answer:
          "No. The tutor is for clarifying questions about specific problems, on-demand. A human coach is for reviewing your error log over time, identifying patterns the tutor can't, and adjusting your overall plan. The Coaching and Intensive packages include human coaching with Adam directly.",
      },
    ],
  },
  {
    title: "Technical",
    items: [
      {
        question: "What devices does the platform work on?",
        answer:
          "The platform is fully web-based and works on any modern browser — desktop, tablet, or mobile. The dashboard, chapter reader, and question runner are responsive and tested across screen sizes.",
      },
      {
        question: "Does the platform work offline?",
        answer:
          "Yes — the spaced review queue and the offline drill runner work without internet. Visit /review online once to cache your queue + question payloads, then drill at /offline/drill on the plane / commute. Your attempts queue locally and sync when you're back online.",
      },
      {
        question: "Can I use it as a mobile app?",
        answer:
          "Yes. The platform is a PWA (Progressive Web App) — on iOS or Android, use 'Add to Home Screen' from your browser to get a standalone-app experience with offline support.",
      },
      {
        question: "What happens to my account if I cancel a paid plan?",
        answer:
          "Self-Study and Self-Study + Mentorship are one-time purchases with a fixed access window (4 and 6 months) — there's nothing to cancel. Coaching packages run for the program duration. If you cancel before completing a coaching program, refund terms apply per the refund policy.",
      },
    ],
  },
  {
    title: "Billing and refunds",
    items: [
      {
        question: "What payment methods do you accept?",
        answer:
          "All major credit and debit cards via Stripe. Bank transfer is available for Coaching and Intensive packages on request.",
      },
      {
        question: "Can I pay in installments?",
        answer:
          "Installment plans are available for the Coaching and Intensive packages. Email us to set up a 2-payment or 4-payment schedule.",
      },
      {
        question: "What is your refund policy?",
        answer:
          "Self-Study and Self-Study + Mentorship include a 14-day money-back guarantee, no questions asked. Coaching and Intensive are refundable in full any time before your first session; after that, package terms apply — see /refund for the exact conditions of each.",
      },
      {
        question: "Are prices in USD?",
        answer:
          "Yes. All prices are listed in U.S. dollars. Currency conversion happens at your card issuer's exchange rate at the time of charge.",
      },
    ],
  },
]

const allItems: FAQItem[] = categories.flatMap((c) => c.items)

export default function FAQPage() {
  return (
    <div style={{ backgroundColor: "#0A0A0A" }}>
      <JsonLd data={faqPageLd({ questions: allItems })} />
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 90% 55% at 50% -5%, rgba(201,168,76,0.16) 0%, transparent 60%)",
          }}
          aria-hidden
        />
        <div
          className="absolute inset-0 pointer-events-none bg-grain opacity-[0.035] mix-blend-overlay"
          aria-hidden
        />
        <div className="relative max-w-3xl mx-auto text-center px-4">
          <div className="inline-flex items-center gap-3 mb-5">
            <p
              className="text-[10px] font-semibold uppercase tracking-[0.22em]"
              style={{ color: "#C9A84C" }}
            >
              FAQ
            </p>
            <div
              className="h-px w-12"
              style={{
                background:
                  "linear-gradient(to right, rgba(201,168,76,0.3), transparent)",
              }}
              aria-hidden
            />
          </div>
          <h1 className="font-display text-4xl sm:text-6xl font-semibold text-[#F0F0F0] tracking-[-0.02em] leading-[1.02] mb-6">
            Questions,{" "}
            <span className="font-display-italic" style={{ color: "#C9A84C" }}>
              answered.
            </span>
          </h1>
          <p className="text-[16px] sm:text-[17px] text-[#C0C0C0] leading-relaxed max-w-xl mx-auto">
            {allItems.length} of the questions we hear most often — about the
            curriculum, getting started, your baseline, billing,
            non-native speakers, and the AI tutor. If you don&apos;t find it
            here, book a free 20-minute call.
          </p>
        </div>
      </section>

      {/* FAQ categories */}
      <SectionWrapper>
        <div className="max-w-2xl mx-auto space-y-16">
          {categories.map((category, i) => (
            <div key={category.title}>
              <div className="flex items-center gap-3 mb-5">
                <span
                  className="font-display text-[11px] font-semibold tabular-nums"
                  style={{ color: "rgba(201,168,76,0.55)" }}
                  aria-hidden
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p
                  className="text-[10px] font-semibold uppercase tracking-[0.22em]"
                  style={{ color: "#C9A84C" }}
                >
                  {category.title}
                </p>
                <div
                  className="h-px flex-1"
                  style={{
                    background:
                      "linear-gradient(to right, rgba(201,168,76,0.3), transparent)",
                  }}
                  aria-hidden
                />
              </div>
              <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#F0F0F0] tracking-[-0.02em] leading-[1.05] mb-6">
                {category.title}
              </h2>
              <FAQAccordion items={category.items} />
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Final CTA */}
      <section
        className="relative py-28 overflow-hidden"
        style={{ backgroundColor: "#050505" }}
      >
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
            Still have{" "}
            <span className="font-display-italic" style={{ color: "#C9A84C" }}>
              questions?
            </span>
          </h2>
          <p className="text-[15px] sm:text-[17px] text-[#888888] leading-relaxed mb-10">
            Book a free 20-minute call and we&apos;ll answer anything the FAQ didn&apos;t
            cover.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold transition-all duration-200 hover:opacity-90 hover:scale-[1.02]"
            style={{ backgroundColor: "#C9A84C", color: "#0A0A0A" }}
          >
            Contact us
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}
