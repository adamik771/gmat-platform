import type { Metadata } from "next"
import AcquisitionLanding, {
  type AcquisitionLandingProps,
} from "@/components/marketing/AcquisitionLanding"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { QUESTION_CLAIM } from "@/lib/site"

export const metadata: Metadata = {
  title: "Free GMAT Practice Questions",
  description:
    "Free GMAT practice questions — original Quant, Verbal, and Data Insights items built for the Focus Edition. No card, no catch.",
  alternates: { canonical: "/gmat-practice-questions-free" },
}

const DATA: AcquisitionLandingProps = {
  slug: "gmat-practice-questions-free",
  eyebrow: "Free 7-day trial",
  h1: "Free GMAT Practice Questions, Built for the Focus Edition",
  intro:
    "Zakarian GMAT starts every new account with a free 7-day full-access trial, which means the whole platform — including a large bank of free GMAT practice questions — is open with no credit card and no catch. These are original questions modeled on the GMAT Focus Edition format across Quant, Verbal, and Data Insights, not official GMAC questions.\n\nThis page is honest about what “free” actually means here, what the question bank covers, and how to turn raw practice into real progress. Volume by itself just repeats your mistakes; the point is to practice in a system that helps you catch and fix them.",
  sections: [
    {
      heading: "What’s actually free right now",
      body:
        "Every new account starts with a free 7-day full-access trial — no paywall inside it. Create a free account and get full access to the platform — the complete question bank, the error log, the daily spaced-review queue, the full-length mocks, and the per-topic and per-difficulty analytics. There is no card required and nothing to cancel.\n\nA few things need no account at all, so you can look before you sign up:\n\n- Sample chapters you can read without logging in, to see how the lessons teach a concept before you drill it\n- The six-tag error-log template you can copy and use on your own from day one\n- Free score and study tools that work in the browser with no signup\n\nWhen you want the full question bank, spaced review, and analytics tied to your progress, that lives behind a free account so your work is saved and your study plan can adapt to it.",
    },
    {
      heading: "How to get real value from free questions",
      body:
        "It’s tempting to treat free GMAT practice questions as a numbers game — grind hundreds of items and assume the score follows. It usually doesn’t. Doing more questions without changing how you study tends to bake in the same errors at a faster pace.\n\nThe lever is review, not volume. Every miss carries information: did you misread the prompt, run out of time, pick a careless answer, or simply not know the concept? Tagging that honestly is where the improvement actually comes from.\n\n- Review every question you miss, and every one you got right but weren’t sure about\n- Tag the reason using a fixed set of categories so patterns become visible over weeks\n- Re-attempt the underlying idea later, from memory, instead of re-reading the explanation and moving on\n\nA handful of questions reviewed this way beats a hundred rushed and forgotten.",
    },
    {
      heading: "What the question bank covers",
      body:
        "The bank spans all three scored sections of the GMAT Focus Edition. Quant focuses on problem-solving. Verbal is Critical Reasoning and Reading Comprehension. Data Insights covers Data Sufficiency, Multi-Source Reasoning, Table Analysis, Graphics Interpretation, and Two-Part Analysis — the same structure you’ll meet on test day.\n\nThe items range across topics and difficulty levels, so you can drill a single weak area or work across a section. Because the platform tracks your accuracy by topic and by difficulty, you can see where your practice is paying off and where it isn’t.\n\n- Quant: problem-solving across arithmetic, algebra, word problems, and more\n- Verbal: Critical Reasoning and Reading Comprehension question types\n- Data Insights: all five Data Insights formats, with a range of difficulty\n\nThe goal is breadth plus the ability to zoom in, so practice maps onto how the real exam is actually built.",
    },
    {
      heading: "Honest expectations about original questions",
      body:
        "These are original questions written to mirror the style, formats, and reasoning demands of the GMAT Focus Edition. They are not official GMAC questions, and Zakarian GMAT is independent and not affiliated with or endorsed by GMAC. That distinction matters, so we say it plainly.\n\nOriginal practice is excellent for building skills and reps. But for your true baseline and a realistic read on where you stand, take one of the official mba.com practice exams. Those are the real thing, and the platform is designed to build your study plan around that official baseline rather than guess at it.",
    },
    {
      heading: "How the platform turns free practice into progress",
      body:
        "Practice questions are the input; the system around them is what compounds. When you miss a question, it goes into your error log with one of six tags — Conceptual, Careless, Time Pressure, Misread, Strategy, or Other — so you’re not just collecting wrong answers, you’re collecting reasons.\n\nFrom there, items feed a daily spaced-review queue that resurfaces them on a same-day, then 2-, 7-, 21-, and 42-day rhythm, so the concepts you got wrong come back exactly when you’re about to forget them. Your official mba.com baseline shapes an adaptive study plan, and per-topic and per-difficulty analytics show whether the work is moving the right numbers. The questions are free on your trial; the structure is what makes them count.",
    },
  ],
  faq: [
    {
      q: "Are the practice questions really free?",
      a: "Yes. Every new account starts with a free 7-day full-access trial, so the full question bank and the tools around it are free to try. No credit card required and nothing to cancel.",
    },
    {
      q: "Do I need an account?",
      a: "Not for everything. Sample chapters, the error-log template, and the free score tools work with no account. The full question bank, spaced-review queue, and analytics need a free account so your progress is saved and your plan can adapt.",
    },
    {
      q: "Are these official GMAT questions?",
      a: "No. They are original questions modeled on the GMAT Focus Edition format, not official GMAC questions, and Zakarian GMAT is not affiliated with or endorsed by GMAC. For your true baseline, use an official practice exam from mba.com.",
    },
    {
      q: "What’s the catch?",
      a: "There isn’t one. The 7-day trial is free with full access, no card required, and we’re upfront about what comes later: a one-time plan purchase once checkout opens. We’d rather tell you exactly what you’re getting than dress it up.",
    },
  ],
  lead: {
    source: "other",
    leadMagnet: "error-log-template",
    headline: "Get the free six-tag error-log template",
    description:
      "We’ll send the six-tag error-log template now — the system Adam used to go from 565 to 735 — then a short series on turning practice into progress. Use it alongside the free question bank.",
    ctaLabel: "Email me the template",
  },
  metaDescription:
    "Free GMAT practice questions — original Quant, Verbal, and Data Insights items built for the Focus Edition. No card, no catch.",
}

const RELATED: AcquisitionLandingProps["relatedLinks"] = [
  {
    label: "GMAT Quant practice",
    href: "/gmat-quant-practice",
    description: "Drill problem-solving across the Quant section.",
  },
  {
    label: "GMAT Verbal practice",
    href: "/gmat-verbal-practice",
    description: "Critical Reasoning and Reading Comprehension reps.",
  },
  {
    label: "GMAT Data Insights practice",
    href: "/gmat-data-insights-practice",
    description: "All five Data Insights formats in one place.",
  },
  {
    label: "Error-log template",
    href: "/gmat-error-log-template",
    description: "The six-tag system that turns misses into progress.",
  },
  {
    label: "Free sample chapter",
    href: "/sample-chapter",
    description: "Read a full lesson with no account needed.",
  },
]

// Three real items from the question bank, shown with a native answer
// reveal (<details> — zero JS) so a paid click sees actual questions above
// the "sign up" ask. Copy verbatim from src/content/questions; keep answers
// and explanations in sync with the bank if those items ever change.
const SAMPLES: {
  section: string
  difficulty: string
  prompt: string
  statements?: string[]
  options: string[]
  answer: string
  explanation: string
}[] = [
  {
    section: "Quant",
    difficulty: "Easy",
    prompt:
      "A shirt originally priced at $80 is discounted by 15%. What is the sale price of the shirt?",
    options: ["$12", "$65", "$68", "$72", "$76"],
    answer: "C",
    explanation:
      "A 15% discount means you pay 85% of the price: 0.85 × $80 = $68. The trap is A — $12 is the discount itself, not the sale price. On the real exam that trap costs more than the hard questions do.",
  },
  {
    section: "Verbal",
    difficulty: "Easy",
    prompt:
      "A regional grocery chain recently introduced a loyalty program that offers customers a 5% discount on every purchase after their tenth visit. Since the program launched three months ago, the chain's overall revenue has increased by 8%. The chain's management concludes that the loyalty program is responsible for the revenue increase. Which of the following, if true, most strengthens the argument above?",
    options: [
      "The grocery chain spent a significant amount on advertising the loyalty program during the three-month period.",
      "A competing grocery chain in the same region that did not introduce a loyalty program experienced a 2% decline in revenue over the same period.",
      "Most of the chain's customers were already shopping there more than ten times per quarter before the program was introduced.",
      "The average transaction size at the chain has remained the same since the loyalty program began.",
      "The chain also expanded its organic produce section at the same time as launching the loyalty program.",
    ],
    answer: "B",
    explanation:
      "The conclusion is causal, so the strengthener must rule out the biggest alternative explanation — that the whole market simply grew. B does exactly that: a comparable competitor without the program lost revenue over the same period. A and E introduce competing causes; C actively weakens.",
  },
  {
    section: "Data Insights",
    difficulty: "Easy",
    prompt: "What is the value of x?",
    statements: ["(1) 3x + 7 = 22", "(2) x is a positive integer less than 10."],
    options: [
      "Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.",
      "Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.",
      "BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.",
      "EACH statement ALONE is sufficient.",
      "Statements (1) and (2) TOGETHER are NOT sufficient.",
    ],
    answer: "A",
    explanation:
      "Sufficient means it pins x to exactly one value. Statement (1) is one linear equation in one unknown: x = 5 — sufficient alone. Statement (2) allows any of 1 through 9 — not sufficient. You never need to solve further once (1) is settled.",
  },
]

function SampleQuestions() {
  return (
    <section className="max-w-3xl mx-auto px-4 pt-2 pb-6">
      <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#F0F0F0] tracking-[-0.02em] leading-[1.15] mb-2">
        Try three, right now
      </h2>
      <p className="text-[15px] text-[#888888] leading-relaxed mb-6">
        One from each scored section, straight from the bank. No account needed
        for these three.
      </p>
      <div className="space-y-5">
        {SAMPLES.map((q) => (
          <div
            key={q.section}
            className="rounded-2xl border border-white/[0.08] p-5 sm:p-6"
            style={{ backgroundColor: "#0D0D0D" }}
          >
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span
                className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-semibold uppercase tracking-[0.18em]"
                style={{ backgroundColor: "rgba(201,168,76,0.1)", color: "#C9A84C" }}
              >
                {q.section}
              </span>
              <span className="text-[11px] text-[#555555] uppercase tracking-[0.18em] font-semibold">
                {q.difficulty}
              </span>
            </div>
            <p className="text-[15px] text-[#F0F0F0] leading-relaxed mb-3">{q.prompt}</p>
            {q.statements && (
              <div className="mb-3 space-y-1">
                {q.statements.map((st) => (
                  <p key={st} className="text-[15px] text-[#F0F0F0] leading-relaxed">{st}</p>
                ))}
              </div>
            )}
            <ol className="space-y-1.5 mb-4">
              {q.options.map((opt, i) => (
                <li key={opt} className="text-[14px] text-[#C0C0C0] leading-relaxed flex gap-2">
                  <span className="text-[#888888] font-semibold shrink-0">
                    {String.fromCharCode(65 + i)})
                  </span>
                  <span>{opt}</span>
                </li>
              ))}
            </ol>
            <details className="group">
              <summary
                className="cursor-pointer text-[13px] font-semibold select-none inline-flex items-center gap-1.5"
                style={{ color: "#C9A84C" }}
              >
                Show the answer
              </summary>
              <div className="mt-3 pt-3 border-t border-white/[0.06]">
                <p className="text-[14px] font-semibold mb-1.5" style={{ color: "#3ECF8E" }}>
                  Answer: {q.answer}
                </p>
                <p className="text-[14px] text-[#C0C0C0] leading-relaxed">{q.explanation}</p>
              </div>
            </details>
          </div>
        ))}
      </div>
      <div className="mt-6 flex flex-wrap items-center gap-4">
        <Link
          href="/signup"
          className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-all hover:opacity-90 hover:scale-[1.02]"
          style={{ backgroundColor: "#C9A84C", color: "#0A0A0A" }}
        >
          Unlock the full bank free
          <ArrowRight className="w-4 h-4" />
        </Link>
        <p className="text-[13px] text-[#888888]">
          {QUESTION_CLAIM} on the platform — free 7-day trial, no card.
        </p>
      </div>
    </section>
  )
}

export default function Page() {
  return (
    <AcquisitionLanding
      {...DATA}
      relatedLinks={RELATED}
      primaryCta={{ label: "Start your free trial", href: "/signup" }}
      heroChips={[
        "Built by a 565 → 735 self-studier",
        QUESTION_CLAIM,
        "Free 7-day trial — no card",
      ]}
      afterHero={<SampleQuestions />}
    />
  )
}
