import type { Metadata } from "next"
import AcquisitionLanding, {
  type AcquisitionLandingProps,
} from "@/components/marketing/AcquisitionLanding"

export const metadata: Metadata = {
  title: "2 Month GMAT Study Plan (8 Weeks)",
  description:
    "A concrete week-by-week 2 month GMAT study plan for the Focus Edition, anchored to an official mba.com practice baseline and a spaced-review ladder.",
  alternates: { canonical: "/gmat-study-plan-2-months" },
}

const DATA: AcquisitionLandingProps = {
  slug: "gmat-study-plan-2-months",
  eyebrow: "8-Week Framework",
  h1: "A 2 Month GMAT Study Plan, Built Week by Week",
  intro:
    "If you have roughly eight weeks before test day, you can run a focused, structured GMAT Focus Edition prep cycle — but only if the plan is honest about the math. A 2 month GMAT study plan is a framework for organizing your time, not a promise about your result. Whether two months is enough depends entirely on three things: where you’re starting from, where you need to land, and how many hours a week you can actually protect.\n\nThis page lays out a specific 8 week GMAT study plan you can paste into your calendar today. It anchors everything to one real number — your official mba.com practice-exam baseline — and uses a spaced-review schedule so the topics you learn in week 2 are still sharp when you walk in during week 8. Read the caveat first, then take the week-by-week structure and adapt it to your own gap.",
  sections: [
    {
      heading: "Who a 2-month plan fits — and the honest caveat",
      body:
        "A two-month timeline works best when your starting point and your target are reasonably close, and when you can commit consistent weekly hours. Someone who has already seen the Focus Edition format and is a handful of points from their goal has a very different eight weeks ahead than someone opening the test for the first time. The plan below is the same shape for both — what changes is the depth of week 1–2 fundamentals and how aggressively you load the weak-topic phase.\n\nHere is the caveat stated plainly, because no honest plan can skip it: two months may or may not be enough for you, and nothing here changes that. The size of your baseline-to-target gap and your real hours per week determine the outcome — not a schedule. Use this as a framework to allocate effort, not as a guarantee of where you’ll finish.\n\nThe single most important thing you can do before week 1 is replace guesswork with data. That means sitting a real official mba.com practice exam under timed conditions so you know your true baseline by section — Quant, Verbal, and Data Insights — rather than estimating it.",
    },
    {
      heading: "The week-by-week structure",
      body:
        "The eight weeks break into four phases. Each phase has one job, and you don’t move on until that job is done. The Focus Edition has three sections — Quantitative Reasoning, Verbal Reasoning, and Data Insights — and this structure routes your time toward whichever of them your baseline says is weakest.\n\n- Weeks 1–2 — Baseline and fundamentals: Sit a full official mba.com practice exam, then spend these two weeks shoring up the core concepts in your single weakest section. No timed pressure yet; the goal is clean fundamentals.\n- Weeks 3–5 — Attack weak topics in priority order: Work your ranked list of weak topics from most-costly to least. Drill each topic, then log every miss with a reason so patterns surface instead of hiding.\n- Weeks 6–7 — Mixed timed sets and mocks: Shift to mixed, timed problem sets and add full-length mocks (three sections, 45 minutes each) to build stamina and pacing under realistic conditions.\n- Week 8 — Targeted review and light taper: Review the clusters in your error log — the repeated reasons behind your misses — and taper volume so you arrive rested rather than depleted.\n\nThe phases are deliberately front-loaded on learning and back-loaded on timed practice. You build the knowledge first, then prove it can hold up against the clock — not the other way around.",
    },
    {
      heading: "The spaced-review ladder",
      body:
        "The risk in any 8 week GMAT study plan is forgetting. A topic you nailed in week 2 can quietly decay by week 8 if you never see it again. Spaced review is the fix: you revisit each item on widening intervals so it stays in memory with minimal extra time.\n\nThe ladder used here is same-day, then 2 days, then 7, then 21, then 42 days. A concept you first study early in the plan resurfaces on that schedule across the whole eight weeks, so your week-2 fundamentals are still live when you sit your final mocks. The intervals stretch as the memory strengthens, which means a small daily review queue carries a surprisingly large amount of material.\n\nPractically, this turns review from a separate chore into a few minutes layered on top of new work each day. You’re never relearning from scratch — you’re reinforcing just before you would have forgotten.",
    },
    {
      heading: "How to adapt when a mock says a section didn’t move",
      body:
        "Mocks are diagnostic instruments, not just stamina drills. When a full-length result comes back flat in a section you’ve been working — say Data Insights hasn’t budged — the schedule is telling you something, and the right response is to change the plan, not to grind harder on the same drills.\n\nFirst, go to your error log for that section and read the reasons, not just the scores. A wall of “Conceptual” misses means you’re short on understanding and should drop back to fundamentals for that topic. A pile of “Time Pressure” or “Careless” tags means the concept is fine but execution and pacing are the leak — that’s a timed-sets problem, not a content problem. A run of “Misread” points to how you’re reading the prompt under stress. The fix follows the dominant tag.\n\nThen re-rank. If a section refuses to move, promote it up your priority order for the next phase and pull hours from a section that’s already solid. The plan is a starting allocation; each mock is a checkpoint where you’re allowed — expected — to rebalance.",
    },
    {
      heading: "How the platform automates the moving parts",
      body:
        "Running this by hand means maintaining a ranked weak-topic list, a spaced-review queue, and a mock trend line all at once. Zakarian GMAT handles those three jobs so you can spend your hours studying instead of bookkeeping.\n\nThe study plan is built from the official mba.com practice-exam baseline you enter on the mock page — there is no in-app diagnostic; it uses your real official practice result. From there, per-topic and per-difficulty analytics rank your weak areas automatically, the daily queue schedules each item on the same-day to 42-day ladder for you, and the full-length mocks plot a trend so you can see whether a section is actually moving. The six-tag error log — Conceptual, Careless, Time Pressure, Misread, Strategy, Other — is what makes the “adapt when a section stalls” step concrete rather than a guess.\n\nIt’s free during the current private beta — no credit card — so you can run the full 8 week GMAT study plan, baseline to taper, without paying anything while the beta is open.",
    },
  ],
  faq: [
    {
      q: "Is 2 months enough to prepare for the GMAT?",
      a: "It depends entirely on your starting baseline, your target, and how many hours a week you can protect — there’s no honest one-size answer and certainly no guarantee. The closer your baseline is to your goal and the more consistent your weekly hours, the more workable eight weeks becomes. Sit an official mba.com practice exam first so you’re measuring a real gap instead of guessing at one.",
    },
    {
      q: "How many hours per week does a 2-month plan need?",
      a: "Roughly 10 to 20 hours a week is a common working range, but it scales directly with the size of your baseline-to-target gap. A small gap can sit at the lower end; a larger gap needs more, and at some point a larger gap simply needs more than eight weeks. Be honest about the hours you can actually defend each week rather than the hours you wish you had.",
    },
    {
      q: "Should I take a mock every week?",
      a: "No — every two to three weeks is plenty for most people. Full-length mocks are costly in time and energy, and taking them too often leaves no room to act on what they reveal. Space them so each mock lands after a real block of work, then use the result to re-rank your weak areas before the next one.",
    },
    {
      q: "Is the plan free?",
      a: "Yes. Zakarian GMAT is free during the current private beta, with no credit card required. You can run the full eight-week structure — baseline, ranked weak areas, spaced review, and mocks — without paying anything while the beta is open.",
    },
  ],
  lead: {
    source: "other",
    leadMagnet: "error-log-template",
    headline: "Get the free six-tag error-log template",
    description:
      "The log that makes an 8-week plan work: record every miss, tag the cause, and let two weeks of entries rank your weak areas for you. The same spreadsheet Adam used going from 565 to 735.",
    ctaLabel: "Email me the template",
  },
  metaDescription:
    "A concrete week-by-week 2 month GMAT study plan for the Focus Edition, anchored to an official mba.com practice baseline and a spaced-review ladder.",
}

const RELATED: AcquisitionLandingProps["relatedLinks"] = [
  {
    label: "GMAT Study Plan",
    href: "/gmat-study-plan",
    description: "The general framework for building a plan around your baseline.",
  },
  {
    label: "GMAT Mock Review",
    href: "/gmat-mock-review",
    description: "How to read a full-length result and turn it into next steps.",
  },
  {
    label: "Error Log Template",
    href: "/gmat-error-log-template",
    description: "The six-tag log that powers the adapt-when-stalled step.",
  },
  {
    label: "3-Month Study Schedule",
    href: "/blog/gmat-3-month-study-schedule",
    description: "More runway? The 12-week version of this framework.",
  },
  {
    label: "Create a free account",
    href: "/signup",
    description: "Run the whole plan free during the private beta.",
  },
]

export default function Page() {
  return <AcquisitionLanding {...DATA} relatedLinks={RELATED} />
}
