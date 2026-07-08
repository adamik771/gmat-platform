import type { Metadata } from "next"
import AcquisitionLanding, {
  type AcquisitionLandingProps,
} from "@/components/marketing/AcquisitionLanding"

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

export default function Page() {
  return <AcquisitionLanding {...DATA} relatedLinks={RELATED} />
}
