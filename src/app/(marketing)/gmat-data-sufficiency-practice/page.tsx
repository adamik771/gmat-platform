import type { Metadata } from "next"
import AcquisitionLanding, {
  type AcquisitionLandingProps,
} from "@/components/marketing/AcquisitionLanding"

export const metadata: Metadata = {
  title: "GMAT Data Sufficiency Practice",
  description:
    "Practice GMAT Data Sufficiency the smart way: the AD/BCE decision grid, the classic traps, and deliberate timed drills. On the Focus Edition, DS lives in Data Insights.",
  alternates: { canonical: "/gmat-data-sufficiency-practice" },
}

const DATA: AcquisitionLandingProps = {
  slug: "gmat-data-sufficiency-practice",
  eyebrow: "Data Sufficiency Drills",
  h1: "GMAT Data Sufficiency Practice That Tests Sufficiency, Not Speed",
  intro:
    "Data Sufficiency is the question type that punishes good math students the hardest. The instinct to solve everything is exactly the instinct that burns your clock and walks you into the wrong answer. The skill the format actually rewards is narrower: deciding whether the information in front of you is enough to answer — and stopping the instant you know.\n\nThis page is a dedicated Data Sufficiency drill space. It walks through what DS is, where it now lives on the GMAT Focus Edition, the AD/BCE decision framework that keeps your reasoning honest, the traps that catch nearly everyone, and how to practice it deliberately instead of grinding random sets. The goal is to make “is this sufficient?” a reflex rather than a calculation.",
  sections: [
    {
      heading: "What Data Sufficiency Is — and Where It Lives Now",
      body:
        "A Data Sufficiency question gives you a prompt and two numbered statements. Your job is not to find the answer to the prompt — it is to decide whether each statement, alone or in combination, gives you enough to answer it with a single definite value (or a definite yes/no). The five answer choices are always the same and always in the same order, which is part of what makes the format drillable.\n\nHere is the accuracy point that trips up people studying from old materials: on the GMAT Focus Edition, Data Sufficiency is no longer part of the Quantitative Reasoning section. It was moved out of Quant and now appears inside the Data Insights section, alongside Multi-Source Reasoning, Table Analysis, Graphics Interpretation, and Two-Part Analysis. Quant on the Focus Edition is problem-solving only. So when you drill DS, you are training a Data Insights skill — and an on-screen calculator is available in that section, though for most DS questions the whole point is to avoid computing.",
    },
    {
      heading: "The Decision Framework: AD / BCE",
      body:
        "Every Data Sufficiency question has the same five-choice structure, so you can pre-load a fixed elimination path. The cleanest version is the AD/BCE grid. Start by evaluating Statement 1 entirely on its own, then Statement 2 entirely on its own, before you ever consider them together.\n\nThe logic splits at the first step. Ask whether Statement 1 alone is sufficient:\n\n- If Statement 1 is sufficient, the answer is A or D — so next you only need to test whether Statement 2 alone is also sufficient (D if yes, A if no).\n- If Statement 1 is not sufficient, the answer is B, C, or E — eliminate A and D immediately, then test Statement 2 alone.\n- Only if neither statement works alone do you combine them: sufficient together means C, still not enough means E.\n\nThe discipline that makes this work is stopping the moment sufficiency is decided. Once a statement gives you a single definite answer, you are done with it — do not keep solving for the actual number. The grid is there so your hand never drifts toward arithmetic you do not need.",
    },
    {
      heading: "The Classic Traps",
      body:
        "Most Data Sufficiency mistakes are not math errors. They are process errors, and they repeat. Knowing the shape of each one lets you catch yourself before you commit to a choice.\n\n- Solving instead of testing: computing the full answer when you only needed to confirm a unique value exists. This wastes time and tempts you into the C trap, where you assume you need both statements because you did all the work.\n- Carrying information between statements: when you evaluate Statement 2, you must mentally erase everything Statement 1 told you. Each statement stands alone until the explicit “together” step. Leaking facts across them is the single most common reason people pick C over B or A.\n- Forgetting the awkward numbers: negatives, zero, and fractions. A statement that looks sufficient for positive integers often fails the moment you test a negative or a fraction. “Is x greater than 1?” behaves very differently when x might be -3 or 1/2.\n\nA fourth, quieter trap is misreading the prompt itself — answering “what is x?” when the question asked “is x even?” On a yes/no question, a statement is sufficient if it forces a consistent no, not just a consistent yes.",
    },
    {
      heading: "How to Drill Data Sufficiency Deliberately",
      body:
        "Volume alone does not build the sufficiency reflex; structured repetition does. The most effective pattern is small, timed sets rather than open-ended marathons. Eight to ten questions at roughly two minutes each keeps you honest about pacing while leaving enough mental energy to review each one properly.\n\nThe review is where the learning happens. For every miss, log why you missed it — not just that you did. Was it the C trap? Carried-over information? An untested negative? A misread prompt? Sorting your errors by cause turns a pile of wrong answers into a short list of fixable habits, and the same two or three causes will usually account for most of your misses.\n\nAs those patterns surface, bias your next sets toward the traps you keep falling into. If negatives and fractions are your weak spot, deliberately seek questions where the answer hinges on them. Deliberate practice means practicing the part you are worst at, on purpose, until it stops being the part you are worst at.",
    },
    {
      heading: "How the Platform Supports Data Sufficiency Work",
      body:
        "Zakarian GMAT is an independent GMAT Focus Edition prep platform built by Adam Zakarian, who self-studied from a 565 to a 735 (top 1% of test-takers) and built the tools he wished he had had. It treats Data Sufficiency as the Data Insights skill it now is, not a Quant afterthought.\n\nThe platform pairs structured Data Insights chapters — including dedicated Data Sufficiency instruction — with a large bank of original practice questions written in the DS format. The pieces are designed to work together rather than in isolation:\n\n- Interactive Data Insights chapters that teach the AD/BCE framework and the common traps before you drill.\n- An original question bank for timed DS sets, with per-topic and per-difficulty analytics so you can see where sufficiency breaks down.\n- A six-tag error log (Conceptual, Careless, Time Pressure, Misread, Strategy, Other) so every miss is filed by cause, not just counted.\n- A daily spaced-review queue (same-day, then 2, 7, 21, and 42 days) that resurfaces the questions you got wrong before you forget the lesson.\n\nThe questions are original and modeled on the format; they are not official GMAT questions, and Zakarian GMAT is not affiliated with or endorsed by GMAC. Every new account starts with a free 7-day full-access trial — no credit card required.",
    },
  ],
  faq: [
    {
      q: "Is Data Sufficiency still on the GMAT Focus Edition?",
      a: "Yes. Data Sufficiency is very much part of the GMAT Focus Edition, but it was moved out of the Quantitative Reasoning section. It now lives in the Data Insights section, alongside Multi-Source Reasoning, Table Analysis, Graphics Interpretation, and Two-Part Analysis. Quant on the Focus Edition is problem-solving only.",
    },
    {
      q: "How do I practice Data Sufficiency effectively?",
      a: "Test sufficiency rather than fully solving each prompt — your job is to decide whether the information is enough, then stop. Work in small timed sets and review every miss by its cause, whether that was the C trap, carried-over information, or an untested negative. Sorting errors by cause shows you the two or three habits actually costing you points.",
    },
    {
      q: "Are these official GMAT questions?",
      a: "No. The questions on the platform are independently created and modeled on the Data Sufficiency format. They are not official GMAT questions. GMAT and related marks are trademarks of GMAC; Zakarian GMAT is independent and is not affiliated with, endorsed by, or sponsored by GMAC.",
    },
    {
      q: "Is it free?",
      a: "Yes — every new account starts with a free 7-day full-access trial, no credit card required. That covers the Data Insights chapters, the original question bank, the six-tag error log, and the daily spaced-review queue.",
    },
  ],
  lead: {
    source: "other",
    leadMagnet: "error-log-template",
    headline: "Get the free six-tag error-log template",
    description:
      "Most Data Sufficiency points are lost to the same few traps, repeated. Log every miss and tag the cause with the six-tag spreadsheet Adam used going from 565 to 735 — so your drills stop repeating them.",
    ctaLabel: "Email me the template",
  },
  metaDescription:
    "Practice GMAT Data Sufficiency the smart way: the AD/BCE decision grid, the classic traps, and deliberate timed drills. On the Focus Edition, DS lives in Data Insights.",
}

const RELATED: AcquisitionLandingProps["relatedLinks"] = [
  {
    label: "GMAT Data Insights Practice",
    href: "/gmat-data-insights-practice",
    description:
      "The full Data Insights section where Data Sufficiency now lives — drill it alongside the other four question types.",
  },
  {
    label: "GMAT Quant Practice",
    href: "/gmat-quant-practice",
    description:
      "Problem-solving Quant on the Focus Edition, now separate from Data Sufficiency.",
  },
  {
    label: "GMAT Study Plan",
    href: "/gmat-study-plan",
    description:
      "Build an adaptive plan from your official mba.com practice-exam baseline.",
  },
  {
    label: "Error Log Template",
    href: "/gmat-error-log-template",
    description:
      "The six-tag error log that files every Data Sufficiency miss by its real cause.",
  },
  {
    label: "Data Sufficiency Strategy Guide",
    href: "/blog/gmat-data-sufficiency-strategy-guide",
    description:
      "A deeper walk-through of the AD/BCE framework and the traps to watch for.",
  },
]

export default function Page() {
  return <AcquisitionLanding {...DATA} relatedLinks={RELATED} />
}
