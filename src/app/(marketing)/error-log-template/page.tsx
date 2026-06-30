import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Check, ListChecks } from "lucide-react"
import SectionWrapper from "@/components/shared/SectionWrapper"
import LeadCapture from "@/components/marketing/LeadCapture"
import FAQAccordion from "@/components/marketing/FAQAccordion"
import TrackView from "@/components/analytics/TrackView"

export const metadata: Metadata = {
  title: "GMAT Error Log Template — Free Download",
  alternates: { canonical: "/error-log-template" },
  description:
    "A free GMAT error log template (spreadsheet) with the six-tag system Adam used to go from 565 to 735. Log every mistake, find the patterns, and review what actually costs you points.",
}

// The six-tag taxonomy the platform's in-app error log uses. Real, stable
// labels — keep in sync with the product's error-log constants.
const TAGS = [
  {
    tag: "Conceptual",
    desc: "You did not know the underlying rule or method. The fix is learning, not speed.",
  },
  {
    tag: "Careless",
    desc: "You knew it but slipped — a sign error, a misread digit, a skipped step.",
  },
  {
    tag: "Time Pressure",
    desc: "You rushed because the clock was tight, and accuracy paid for it.",
  },
  {
    tag: "Misread",
    desc: "You answered a slightly different question than the one on the screen.",
  },
  {
    tag: "Strategy",
    desc: "The math was fine but the approach was slow or roundabout — a better path existed.",
  },
  {
    tag: "Other",
    desc: "Anything that does not fit cleanly above. Tag it, then refine as patterns emerge.",
  },
]

const STEPS = [
  "After every practice set or mock, open the template and add one row per question you got wrong or guessed.",
  "Tag each mistake with one of the six causes below. Be honest — the tag is the whole point.",
  "Write one line on what actually went wrong and what you will do differently.",
  "Once a week, sort by tag. The biggest bucket is your highest-leverage thing to fix next.",
]

const faqItems = [
  {
    question: "Is the template really free?",
    answer:
      "Yes. Enter your email and the spreadsheet downloads immediately — no account, no card. If you opt in, you will also get a short series on how to actually use the log, which you can unsubscribe from in one click.",
  },
  {
    question: "Do I need to sign up for the platform to use it?",
    answer:
      "No. The template is a standalone spreadsheet that works on its own. The full platform has the same six-tag error log built in (plus spaced review of your mistakes), and it is free to use during the private beta if you want it.",
  },
  {
    question: "Why an error log instead of just doing more questions?",
    answer:
      "Volume alone repeats the same mistakes. Logging and tagging turns each miss into a pattern you can see — and patterns are what you fix. It is the single habit that moved Adam's score the most, though no method can promise any specific result.",
  },
  {
    question: "Does it work for the GMAT Focus Edition?",
    answer:
      "Yes. The tags describe why you missed a question, which is the same across Quant, Verbal, and Data Insights on the Focus Edition.",
  },
]

export default function ErrorLogTemplatePage() {
  return (
    <div style={{ backgroundColor: "#0A0A0A" }}>
      <TrackView event="landing_view" props={{ page: "error-log-template" }} />
      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 90% 50% at 50% -5%, rgba(201,168,76,0.15) 0%, transparent 60%)",
          }}
          aria-hidden
        />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p
            className="text-[10px] font-semibold uppercase tracking-[0.22em] mb-4"
            style={{ color: "#C9A84C" }}
          >
            Free template
          </p>
          <h1 className="font-display text-4xl sm:text-6xl font-semibold text-[#F0F0F0] tracking-[-0.02em] leading-[1.02] mb-5">
            The GMAT error log{" "}
            <span className="font-display-italic" style={{ color: "#C9A84C" }}>
              template.
            </span>
          </h1>
          <p className="text-[15px] sm:text-[17px] text-[#888888] leading-relaxed">
            The exact six-tag system Adam used to go from 565 to 735. Log every
            mistake, tag why it happened, and let the patterns tell you what to
            fix next. Free spreadsheet — no account needed.
          </p>
        </div>
      </section>

      {/* Download */}
      <SectionWrapper variant="darker">
        <div className="max-w-xl mx-auto">
          <LeadCapture
            source="resources"
            leadMagnet="error-log-template"
            eyebrow="Get the template"
            headline="Send me the GMAT error-log template."
            description="The six-tag taxonomy and the spreadsheet structure, ready to use. Two months of honest logging surfaces the patterns that cost you points."
            ctaLabel="Email me the template"
            successHeadline="Check your download — and good luck."
            optInLabel="Also send the 4-part walkthrough — how to actually use this log and put it on autopilot, from the system behind Adam's 565 to 735. Optional; unsubscribe in one click."
            secondChancePitch="Want the walkthrough? I'll send four short emails on getting real signal out of this log — and the rest of the system behind 565 to 735. Unsubscribe in one click."
            optInCtaLabel="Email me the walkthrough"
          />
          <p className="text-[11px] text-[#555555] leading-relaxed mt-4">
            GMAT is a registered trademark of the Graduate Management Admission
            Council (GMAC), which does not endorse and is not affiliated with
            Zakarian GMAT.
          </p>
        </div>
      </SectionWrapper>

      {/* The six tags */}
      <SectionWrapper>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-[#F0F0F0] tracking-[-0.02em] leading-[1.05] mb-3">
              The six causes behind every wrong answer
            </h2>
            <p className="text-[14px] text-[#888888] leading-relaxed max-w-2xl mx-auto">
              Every miss has a cause. Tag it with one of these, and your review
              stops being a pile of questions and starts being a short list of
              fixable habits.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {TAGS.map((t) => (
              <div
                key={t.tag}
                className="p-5 rounded-2xl border border-white/[0.08] bg-[#0D0D0D]"
              >
                <p
                  className="text-[10px] font-semibold uppercase tracking-[0.18em] mb-2"
                  style={{ color: "#C9A84C" }}
                >
                  {t.tag}
                </p>
                <p className="text-[14px] text-[#C0C0C0] leading-relaxed">
                  {t.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* How to use */}
      <SectionWrapper variant="darker">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center gap-2.5 mb-6">
            <ListChecks className="w-5 h-5" style={{ color: "#C9A84C" }} />
            <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#F0F0F0] tracking-[-0.02em]">
              How to use it
            </h2>
          </div>
          <ul className="space-y-3.5">
            {STEPS.map((step, i) => (
              <li key={i} className="flex items-start gap-3">
                <span
                  className="flex items-center justify-center w-6 h-6 rounded-full flex-shrink-0 text-[12px] font-semibold"
                  style={{
                    backgroundColor: "rgba(201,168,76,0.1)",
                    color: "#C9A84C",
                  }}
                >
                  {i + 1}
                </span>
                <span className="text-[14px] text-[#C0C0C0] leading-relaxed pt-0.5">
                  {step}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </SectionWrapper>

      {/* Soft CTA to the platform */}
      <SectionWrapper>
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#F0F0F0] tracking-[-0.02em] leading-[1.1] mb-4">
            Want the error log built in?
          </h2>
          <p className="text-[14px] text-[#888888] leading-relaxed mb-7">
            The full platform has this same six-tag log inside it, then feeds your
            tagged mistakes into a spaced review queue so you actually re-test the
            ones that hurt. It is free to use while it is in private beta.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/signup"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold transition-all hover:opacity-90 hover:scale-[1.02]"
              style={{ backgroundColor: "#C9A84C", color: "#0A0A0A" }}
            >
              Start free in beta
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/resources"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold border border-white/[0.12] text-[#F0F0F0] hover:bg-white/5 transition-all"
            >
              Browse free resources
            </Link>
          </div>
          <p className="text-[12px] text-[#555555] mt-6">
            <Check className="w-3.5 h-3.5 inline mr-1.5" style={{ color: "#3ECF8E" }} />
            No credit card. No score promises — just a system that makes your
            review honest.
          </p>
        </div>
      </SectionWrapper>

      {/* FAQ */}
      <SectionWrapper variant="darker">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-[#F0F0F0] tracking-[-0.02em] leading-[1.05]">
              Common questions
            </h2>
          </div>
          <FAQAccordion items={faqItems} />
        </div>
      </SectionWrapper>
    </div>
  )
}
