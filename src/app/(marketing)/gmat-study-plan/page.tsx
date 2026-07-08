import type { Metadata } from "next"
import AcquisitionLanding, {
  type AcquisitionLandingProps,
} from "@/components/marketing/AcquisitionLanding"
import { CHAPTER_COUNT_CLAIM } from "@/lib/site"

export const metadata: Metadata = {
  title: "GMAT Study Plan: Build One That Actually Works",
  description: "A real GMAT study plan isn't a calendar of chapters — it's a feedback loop anchored to your official mba.com practice score. Here's how to build one, plus how Zakarian GMAT generates an adaptive plan from your baseline.",
  alternates: { canonical: "/gmat-study-plan" },
}

const DATA: AcquisitionLandingProps = {
  "slug": "gmat-study-plan",
  "eyebrow": "GMAT study plan",
  "h1": "How to Build a GMAT Study Plan Around Your Own Baseline",
  "intro": "Most GMAT study plans fail for the same reason: they are a list of topics on a calendar, not a system that reacts to your mistakes. A plan that says \"Week 3: Geometry, Week 4: Critical Reasoning\" assumes your weaknesses are evenly spaced and never change. They aren't. Real score movement comes from three things working together — an honest baseline, a ruthless focus on your worst-performing topics, and a review schedule that re-tests what you got wrong before you forget it.\n\nThe single most important input is a number you cannot fake: your score on a full-length official GMAT Focus practice exam from mba.com. Everything downstream — which chapters to read, which question types to drill, how aggressive your timeline can be — should be derived from that baseline and updated every time you take another full-length. This page walks through how to build that loop by hand, and how Zakarian GMAT builds an adaptive version of it for you automatically. It's useful either way.",
  "sections": [
    {
      "heading": "Start with a real baseline, not a guess",
      "body": "You cannot plan a route without knowing your starting point. Before you write a single day of your schedule, sit a full-length official GMAT Focus practice exam from mba.com under real conditions: all three sections, full timing, no pausing, no looking up answers. The two free official practice exams are the closest thing to the real scoring algorithm, so they give you a trustworthy total and three section scores (Quant, Verbal, Data Insights).\n\nWrite down four numbers: your total, and each section score. Then go deeper than the score — review every question you missed and note *why*. The reason matters more than the topic. A geometry question you missed because you forgot a formula is a different problem than one you missed because you panicked with 40 seconds left. The first needs a chapter; the second needs timing practice. This distinction — concept gaps versus execution errors — is the backbone of an effective plan.\n\nA note on honesty: a self-scored, untimed problem set is not a baseline. Neither is a third-party CAT with a different scoring curve. Use the official exam so the number you're planning against is the number that will actually appear on test day. Zakarian GMAT is built on exactly this: there is no in-app diagnostic that invents a score for you. You enter your real official-practice total and section scores, and the plan is built from those."
    },
    {
      "heading": "Rank your weak areas by score impact, not by syllabus order",
      "body": "Once you have a baseline, resist the urge to study front-to-back. The GMAT Focus total is built from three equally weighted sections, so the fastest points usually come from your *lowest* section and, within it, the topics where your accuracy is worst relative to how often they appear.\n\nBuild a simple weakness table. For each topic you've practiced, track accuracy and average time per question. Sort by the gap between your accuracy and a target (say, 80%). The topics with the biggest deficit that also show up frequently — Critical Reasoning and Data Sufficiency-style reasoning carry a lot of weight — go to the top of the queue. A topic where you're already at 85% accuracy is a poor use of a study block, even if it's 'next' in a textbook.\n\nThen attack each weak topic in order: read the concept, do a focused problem set, log the mistakes, and only move on when accuracy climbs. This is what Zakarian GMAT's adaptive study plan automates. From your baseline and ongoing practice, it computes your weakest topics by accuracy deficit, tags each as a concept gap or an execution problem, and surfaces a short 'Today's Focus' list — one to three concrete actions — plus a rolling 7-day cadence. Each weak area links straight to the relevant chapter (there are " + CHAPTER_COUNT_CLAIM + ", across Quant, Verbal, and Data Insights) and a matching drill, so 'study Data Sufficiency' becomes a specific click instead of a vague intention."
    },
    {
      "heading": "Make review spaced, not crammed — the part most plans skip",
      "body": "Here's the failure mode almost every self-made plan shares: you study a topic in Week 2, score well, and never see it again until your mock in Week 8 — by which point you've forgotten half of it. The fix is spaced retrieval. You re-test material at expanding intervals so it's reinforced right before you'd otherwise forget it.\n\nA practical spacing ladder for GMAT prep: review a missed concept the same day, then again after 2 days, then 7 days, then 21 days, then 42 days. Each time you get it right, the next review pushes further out; each time you get it wrong, it resets to the front of the line. This is far more efficient than re-reading notes, because the act of *retrieving* the answer under pressure is what builds durable memory — the same skill the test measures.\n\nDoing this by hand means maintaining a flashcard system or a dated spreadsheet of every miss, which is real work and easy to abandon. Zakarian GMAT runs this ladder for you: every question you get wrong enters a daily spaced-review queue on that exact same-day → 2 → 7 → 21 → 42-day schedule, prioritized so the most overdue and most repeatedly-missed items surface first. You just clear the queue each day."
    },
    {
      "heading": "Use an error log with categories, so patterns become visible",
      "body": "A score tells you *what* you're getting wrong. An error log tells you *why* — and the why is where the points are. The mistake most people make is logging the topic ('missed a rates problem') instead of the failure mode. Categorize every miss with a small, fixed set of tags so trends emerge over dozens of questions:\n\n- Conceptual — you didn't know the rule or method.\n- Careless — you knew it but slipped (arithmetic, transcription).\n- Time Pressure — you rushed because the clock was running out.\n- Misread — you solved the wrong question or missed a condition.\n- Strategy — you used a slow or wrong approach when a better one existed.\n- Other — anything that doesn't fit.\n\nAfter 30 to 50 logged misses, the pattern is usually undeniable. If half your errors are 'Careless,' more content review won't help — you need a slower, more deliberate checking process. If 'Time Pressure' dominates one section, your problem is pacing and triage, not knowledge. This single habit redirects your study time better than almost anything else. Zakarian GMAT ships exactly this six-tag error log built in, and pairs it with per-topic and per-difficulty analytics that classify your behavior as efficient, labored, rushed, or stuck — so the diagnosis is done for you. Prefer to do it on paper or in a spreadsheet? A free downloadable error-log template with these same categories is available on the site, no account needed."
    },
    {
      "heading": "Re-measure with full-lengths and let the plan adjust",
      "body": "A study plan is a hypothesis, and a full-length mock is the experiment that tests it. Every two to three weeks, take another full-length under realistic timing — all three sections, auto-submit on the clock — and compare it to your last one. You're looking for two things: did your total move, and did the section you targeted actually improve? If you poured three weeks into Quant and Quant didn't budge, your method was wrong, not just your effort.\n\nThis is also where stamina and pacing get trained. Many test-takers know the content but lose points in the back third of a section because they fade or panic. Only full-length practice exposes that. Watch your mock-to-mock trend, not any single score — one exam is noisy; the slope across three or four is signal.\n\nA realistic note on timelines: score gains are rarely linear. Expect flat stretches and then jumps when a fixed weakness unlocks several question types at once. Don't extrapolate from a slow month, and don't over-celebrate a peak one. Zakarian GMAT supports this loop with full-length mocks (three sections, 45 minutes each), a mock-to-mock trend view, and an adaptive plan that re-weights your weak areas every time you enter a new baseline or finish a mock — so the plan keeps pointing at whatever is currently costing you the most points, instead of staying frozen on day one."
    }
  ],
  "faq": [
    {
      "q": "How long should a GMAT study plan be?",
      "a": "It depends entirely on the gap between your baseline and your target, and how many hours per week you can commit — there is no universal number, and anyone who quotes one without seeing your baseline is guessing. As a frame of reference, the founder of Zakarian GMAT, Adam Zakarian, self-studied from a 565 (56th percentile) to a 735 (100th percentile on his official report) over about eight months as a non-native English speaker, and his gains were uneven: long flat stretches punctuated by jumps. The honest answer is to set your timeline from your own baseline, then re-check it after every full-length mock and adjust. This is the founder's own result and is not a prediction of what any other student will score."
    },
    {
      "q": "Do I need to pay for a study plan to improve?",
      "a": "No. The method on this page — baseline from an official mba.com exam, rank weak areas by score impact, drill, log mistakes by category, space your reviews, and re-measure with full-lengths — works with a notebook, a free official practice exam, and discipline. The site also offers free tools that need no account: sample chapters, a Focus-to-old-format score converter, a section-to-total score calculator, and a downloadable error-log template. Zakarian GMAT exists to automate the tedious, easy-to-abandon parts (the weak-area ranking, the spaced-review scheduling, the analytics), but this page is meant to be useful whether or not you ever sign up."
    },
    {
      "q": "What makes Zakarian GMAT's study plan 'adaptive'?",
      "a": "It's built from your real data and updates as that data changes. You enter the section and total scores from your official mba.com practice exam, and the plan computes your weakest topics by accuracy deficit, labels each as a concept gap or an execution problem, and produces a short daily focus list plus a 7-day cadence. As you practice and take full-length mocks, it re-weights — so the plan keeps targeting whatever is currently costing you the most points. There is no in-app diagnostic that fabricates a starting score; the baseline is always your own official practice result."
    },
    {
      "q": "Is Zakarian GMAT affiliated with GMAC or mba.com?",
      "a": "No. Zakarian GMAT is an independent prep platform and is not affiliated with, endorsed by, or sponsored by GMAC, mba.com, or the official GMAT and GMAT Focus Edition exams. Those are trademarks of their owner and are referenced here only to describe the exam the platform helps you prepare for. We recommend official mba.com practice exams as your baseline precisely because they are the most accurate measure of where you stand."
    }
  ],
  "lead": {
    "source": "other",
    "leadMagnet": "newsletter",
    "headline": "The Weak-Area + Spaced-Review Worksheet",
    "description": "Get the free error-log template plus a one-page worksheet for turning your official practice score into a ranked weak-area plan with a built-in spaced-review schedule (same-day → 2 → 7 → 21 → 42 days) — the exact structure the founder used on his way from 565 to 735. No card, no account, just your email.",
    "ctaLabel": "Send it to me"
  },
  "metaDescription": "A real GMAT study plan isn't a calendar of chapters — it's a feedback loop anchored to your official mba.com practice score. Here's how to build one, plus how Zakarian GMAT generates an adaptive plan from your baseline."
}

const RELATED: AcquisitionLandingProps["relatedLinks"] = [
  {
    label: "The 2-month GMAT study plan",
    href: "/gmat-study-plan-2-months",
    description: "A week-by-week, 8-week version of this method.",
  },
  {
    label: "Review your mocks the right way",
    href: "/gmat-mock-review",
    description: "Turn each full-length into your next two weeks of study.",
  },
  {
    label: "Drill Quant by weak topic",
    href: "/gmat-quant-practice",
    description: "Targeted Quant practice tied to your error log.",
  },
  {
    label: "Practice Data Insights",
    href: "/gmat-data-insights-practice",
    description: "The newest section, and the one most people under-prep.",
  },
  {
    label: "Free error-log template",
    href: "/gmat-error-log-template",
    description: "The six-tag system, as a spreadsheet — no account.",
  },
  {
    label: "How to build a GMAT study plan that works",
    href: "/blog/how-to-build-a-gmat-study-plan-that-works",
    description: "The long-form walkthrough behind this page.",
  },
]

export default function Page() {
  return <AcquisitionLanding {...DATA} relatedLinks={RELATED} />
}
