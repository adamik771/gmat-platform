import type { Metadata } from "next"
import AcquisitionLanding, {
  type AcquisitionLandingProps,
} from "@/components/marketing/AcquisitionLanding"

export const metadata: Metadata = {
  title: "GMAT Verbal Practice (CR + RC) | Zakarian GMAT",
  description:
    "Free GMAT Focus Verbal practice for Critical Reasoning and Reading Comprehension. Practice by question type, log every miss by cause, and review on a spaced schedule.",
  alternates: { canonical: "/gmat-verbal-practice" },
}

const DATA: AcquisitionLandingProps = {
  slug: "gmat-verbal-practice",
  eyebrow: "Verbal Reasoning",
  h1: "GMAT Verbal Practice for the Focus Edition: Critical Reasoning and Reading Comprehension",
  intro:
    "GMAT Focus Verbal is shorter and narrower than the Verbal section many older study guides describe, and that changes how you should practice. The section is now Critical Reasoning and Reading Comprehension only — Sentence Correction was removed when the Focus Edition replaced the prior format. So honest GMAT verbal practice means CR and RC, not grammar drills, and any prep that still leans on Sentence Correction is preparing you for an exam that no longer exists.\n\nZakarian GMAT is an independent GMAT Focus Edition prep platform, free during a private beta with no credit card required. This page explains exactly what GMAT Focus Verbal is now, how to practice each question type with method rather than guesswork, and how the platform’s Verbal chapters, original question bank, error log, and spaced-review queue fit together. It is built by Adam Zakarian, a non-native English speaker who self-studied from 565 to 735 — his own official GMAT Focus result, not a prediction of yours.",
  sections: [
    {
      heading: "What GMAT Focus Verbal actually is now",
      body:
        "The Verbal Reasoning section of the GMAT Focus Edition is 23 questions in 45 minutes — a little under two minutes per question on average. It contains exactly two question families: Critical Reasoning and Reading Comprehension. Sentence Correction, which used to be roughly a third of the old Verbal section, was removed entirely. That means the skills the exam now rewards are argument analysis and disciplined reading, not memorized grammar rules.\n\nThis is good news if you build the right habits. With no Sentence Correction, every Verbal question asks you to reason about meaning: what an argument assumes, where it is vulnerable, what a passage actually says versus what it implies. You can also bookmark questions and edit up to three answers per section, so part of practicing is rehearsing how you flag a hard question and move on rather than burning four minutes on one prompt.\n\nPractice that mirrors this structure beats generic \"verbal\" drilling. The goal is not to read faster in the abstract — it is to handle CR and RC under a roughly two-minute clock with a repeatable method you trust."
    },
    {
      heading: "How to practice Critical Reasoning by question type",
      body:
        "Critical Reasoning rewards a habit most test-takers skip: pre-thinking the gap before you read the answer choices. Read the argument, separate the conclusion from the evidence, and ask what has to be true — or what would break it — before your eyes ever touch option A. When you pre-think the gap, the choices stop feeling like five plausible sentences and start sorting themselves into the one that matches your prediction and four that do not.\n\nThe fastest way to improve is to practice by question type, because each type asks a different question about the same kind of argument:\n\n- Assumption: find the unstated link the conclusion depends on; test it with negation — if denying the choice wrecks the argument, it is the assumption.\n- Strengthen and weaken: do not look for proof, look for the choice that makes the conclusion more or less likely by acting on that same gap.\n- Evaluate: pick the question whose answer would swing the argument either way; a good evaluate choice matters in both directions.\n- Flaw: name the reasoning error in your own words first (confusing correlation with cause, a part-to-whole jump, a missing alternative explanation), then match it.\n- Inference: choose only what must be true from the stimulus — not the most interesting idea, the most airtight one.\n\nDrill one type at a time until the move becomes automatic, then mix types so you have to identify the task under time pressure. The discipline is always the same: understand the argument and predict the gap before you read the options."
    },
    {
      heading: "How to practice Reading Comprehension",
      body:
        "Reading Comprehension is not a memory test, and treating it like one is the most common way people lose time and accuracy. The skill is mapping the passage — building a light mental outline of what each paragraph does (introduces a view, raises an objection, offers evidence, qualifies a claim) — rather than trying to absorb every detail on the first pass. A good map tells you where to go back when a question asks about a specific point.\n\nWhen you answer, answer from the text, not from outside knowledge or a general impression. The correct choice is the one the passage supports, even if a wrong choice sounds smarter or more true in the real world. For every answer, you should be able to point to the line or lines that justify it; if you cannot, you are guessing.\n\nPractice the two halves separately at first. Drill passage-mapping by reading and then summarizing each paragraph’s function in a few words before you look at any questions. Then drill question-answering by forcing yourself to locate textual support for the choice you pick and a reason each other choice fails. Over time the map and the support-hunting fuse into one fast, repeatable routine."
    },
    {
      heading: "Why method beats raw reading speed — especially for non-native speakers",
      body:
        "It is tempting to think GMAT Verbal is a reading-speed problem, so the answer must be reading faster. It usually is not. Most missed Verbal questions come from a method gap — answering before understanding the argument, or picking an RC choice that was never supported by the passage — not from reading too slowly. Speeding up a flawed process just gets you to wrong answers faster.\n\nThis matters especially if English is not your first language. A clear, repeatable method — separate conclusion from evidence, pre-think the gap, map the passage, answer from the text — does more for accuracy than trying to match a native speaker’s raw pace. Method also travels: once the routine is automatic, your timing improves as a byproduct because you stop re-reading and second-guessing.\n\nAdam Zakarian, who built this platform, is a non-native English speaker who self-studied from 565 to 735 — his own official GMAT Focus score, framed only as his personal result, never as a promise of what your score will be. The point is not the number. The point is that disciplined method, not innate reading speed, is what is actually trainable on Verbal."
    },
    {
      heading: "How the platform supports your Verbal practice",
      body:
        "Zakarian GMAT gives you the pieces that make Verbal practice stick instead of staying a pile of solved questions. The flow is designed so that every miss teaches you something specific and comes back when you are about to forget the lesson.\n\n- Verbal chapters: interactive lessons that build the CR and RC methods above before you drill, part of the platform’s 62 chapters across Quant, Verbal, and Data Insights.\n- An original question bank: a large set of practice questions written for the Focus format — original questions, not official GMAT questions — so you can drill CR by type and RC by passage.\n- A six-tag error log: tag each miss by cause — Conceptual, Careless, Time Pressure, Misread, Strategy, or Other — so you can see whether you are losing CR points to a method gap or RC points to misreading.\n- A daily spaced-review queue: missed questions and concepts resurface on a same-day, then 2-, 7-, 21-, and 42-day schedule so the fix actually lands.\n- Analytics and mocks: per-topic and per-difficulty breakdowns, plus full-length mocks (three sections, 45 minutes each) so you practice Verbal under real timing, not just untimed sets.\n\nYour study plan is adaptive and built from the baseline you enter from your real official mba.com practice exam — there is no in-app diagnostic and no fabricated score. You bring the honest starting point; the platform turns your Verbal misses into a targeted, spaced practice loop."
    }
  ],
  faq: [
    {
      q: "Is there Sentence Correction on the GMAT Focus Edition?",
      a: "No. Sentence Correction was removed when the GMAT Focus Edition replaced the prior format. Verbal Reasoning is now Critical Reasoning and Reading Comprehension only, so effective Verbal practice means CR and RC rather than grammar drills."
    },
    {
      q: "How many Verbal questions are on the GMAT Focus Edition?",
      a: "The Verbal Reasoning section has 23 questions and a 45-minute time limit, which works out to a little under two minutes per question on average. You can bookmark questions and edit up to three answers within the section before time runs out."
    },
    {
      q: "Can non-native English speakers do well on GMAT Verbal?",
      a: "Yes — the deciding factor is method, not raw reading speed. Adam Zakarian, who built this platform, is a non-native English speaker who self-studied from 565 to 735; that is his own official GMAT Focus result, shared as his personal outcome and not a prediction of your score. A repeatable CR and RC process is what is actually trainable."
    },
    {
      q: "Is the Verbal practice free?",
      a: "Yes. Zakarian GMAT is free during a private beta, with no credit card required. That includes the Verbal chapters, the original question bank, the error log, and the spaced-review queue."
    }
  ],
  lead: {
    source: "other",
    leadMagnet: "newsletter",
    headline: "Get the free GMAT Verbal review worksheet",
    description:
      "A one-page Verbal worksheet: a Critical Reasoning question-type checklist plus the Reading Comprehension passage-mapping method, ready to use on your next practice set.",
    ctaLabel: "Send it to me",
  },
  metaDescription:
    "Free GMAT Focus Verbal practice for Critical Reasoning and Reading Comprehension. Practice by question type, log every miss by cause, and review on a spaced schedule.",
}

const RELATED: AcquisitionLandingProps["relatedLinks"] = [
  {
    label: "GMAT Quant Practice",
    href: "/gmat-quant-practice",
    description: "Drill the problem-solving Quant section with the same method-first approach.",
  },
  {
    label: "GMAT Data Insights Practice",
    href: "/gmat-data-insights-practice",
    description: "Practice the third section — Data Sufficiency, Table Analysis, and more.",
  },
  {
    label: "GMAT Study Plan",
    href: "/gmat-study-plan",
    description: "Build an adaptive plan around your official practice-exam baseline.",
  },
  {
    label: "Error Log Template",
    href: "/error-log-template",
    description: "Tag every Verbal miss by cause so the right fix gets reviewed.",
  },
  {
    label: "GMAT Critical Reasoning Question Types Explained",
    href: "/blog/gmat-critical-reasoning-question-types-explained",
    description: "A deeper walkthrough of each CR type and how to attack it.",
  },
]

export default function Page() {
  return <AcquisitionLanding {...DATA} relatedLinks={RELATED} />
}
