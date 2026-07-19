import type { Metadata } from "next"
import AcquisitionLanding, {
  type AcquisitionLandingProps,
} from "@/components/marketing/AcquisitionLanding"
import { CHAPTER_COUNT_CLAIM, QUESTION_CLAIM, QUESTION_CLAIM_SHORT } from "@/lib/site"
import { PAYWALL_ENABLED, TRIAL_DAYS } from "@/lib/entitlements"

// The clean bottom-funnel landing page for commercial-intent traffic (paid
// search, branded search, partner links). ONE offer, stated plainly: a free
// 7-day full-access trial, no credit card, then a one-time paid plan. The
// founding discount is deliberately absent here — it lives down-funnel on
// /pricing. The old /gmat-private-beta URL 308-redirects to this page.

const META_DESCRIPTION = `Try the full Zakarian GMAT platform free for 7 days — no credit card: ${CHAPTER_COUNT_CLAIM} Focus Edition chapters, ${QUESTION_CLAIM_SHORT}, a 6-tag error log, spaced review, full-length mocks, and an adaptive plan built from your own official practice exam. Then choose a one-time paid plan.`

export const metadata: Metadata = {
  title: "Free 7-Day GMAT Trial — Full Access, No Credit Card",
  description: META_DESCRIPTION,
  alternates: { canonical: "/gmat-free-trial" },
}

// What happens after the trial depends on whether paid checkout is live yet;
// both branches promise only what the code actually does today.
const AFTER_TRIAL_ANSWER = PAYWALL_ENABLED
  ? `Your access pauses and your data stays exactly where you left it. A one-time plan purchase (not a subscription) unlocks the platform for your plan's access window — current prices are on the pricing page, and every self-study plan carries a 14-day money-back guarantee.`
  : `Your study data stays exactly where you left it, and because paid checkout hasn't opened yet, access isn't cut off the moment the trial ends — we're pre-launch and you keep studying. When checkout opens, a one-time plan purchase (not a subscription) continues your access, and any change will be made clear in advance. Current plan prices are already published on the pricing page.`

const DATA: AcquisitionLandingProps = {
  slug: "gmat-free-trial",
  eyebrow: "Free 7-day trial",
  h1: "Try the whole GMAT platform free for 7 days — no credit card",
  heroChips: [
    `${TRIAL_DAYS}-day full-access trial`,
    "No credit card",
    `${CHAPTER_COUNT_CLAIM} chapters`,
    QUESTION_CLAIM_SHORT,
    "Built by a 565 → 735 founder",
  ],
  intro:
    "The offer is simple: create a free account and you get the entire platform for 7 days — every chapter, the full question bank, full-length mocks, the six-tag error log, spaced review, analytics, and the adaptive study plan. No credit card, nothing to cancel. After the trial, access continues with a one-time paid plan; the prices are public on the pricing page.\n\nThis page is worth reading even if you never sign up, because the structure underneath the platform is just good GMAT methodology you can copy by hand: baseline from a real official exam, fix weak areas with research-backed chapters, log every mistake by why you missed it, space your review, and re-measure with full-length mocks. Below is exactly how each piece works and an honest FAQ about what the trial is and isn't.",
  sections: [
    {
      heading:
        "Your baseline comes from an official practice exam — that's why the plan is trustworthy",
      body: "Here is the single most important GMAT prep decision, and most platforms get it wrong: where your baseline comes from. A short in-app quiz cannot reproduce the fatigue, pacing pressure, and adaptive difficulty of the real exam, so any plan built on it is calibrated to a fiction.\n\nZakarian GMAT deliberately ships with no in-app diagnostic. Your baseline is an official mba.com practice exam — free from the test maker, full-length, on the real scoring scale (205–805). You take it, then enter your Quant, Verbal, Data Insights, and total scores on the platform. That data is what unlocks your dashboard, your adaptive study plan, and your analytics.\n\nDo this even if you never use the platform: before you buy any course or build any schedule, sit one official practice exam under real conditions. Without a real baseline you cannot tell whether you're a content problem (you don't know the material) or a test-taking problem (you know it but lose points to timing and careless errors) — and those two problems have completely different fixes.",
    },
    {
      heading: `${CHAPTER_COUNT_CLAIM} chapters across Quant, Verbal, and Data Insights — built for Focus Edition, not retrofitted`,
      body: `The GMAT Focus Edition is not the old GMAT with the essay removed. Data Insights is now a full scored section equal in weight to Quant and Verbal, Sentence Correction is gone from Verbal, and the scoring scale changed to 205–805. A lot of prep material on the market still treats DI as an afterthought.\n\nThe platform's ${CHAPTER_COUNT_CLAIM} chapters are organized by these three real sections and built around how people actually learn: each chapter runs pretest, then readings that interleave Recall checks and self-explanation prompts, then graded problem sets — so you retrieve and apply, not just highlight. Behind the chapters sits a bank of ${QUESTION_CLAIM} tagged by topic and difficulty, so practice maps directly onto the chapter you just studied.\n\nIf you're studying elsewhere, the principle still applies: spend real time on Data Insights (Data Sufficiency, Multi-Source Reasoning, Table/Graph, Two-Part). It is the section most people under-prepare and the one most likely to drag a total score down on test day.`,
    },
    {
      heading:
        "A 6-tag error log — because why you missed a question matters more than that you missed it",
      body: "This is the highest-leverage habit in the whole method, and you can start it today in a spreadsheet. Every question you get wrong gets tagged by the reason you missed it. The platform uses six tags: Conceptual (you didn't know the rule), Careless (you knew it, slipped), Time Pressure (rushed at the end), Misread (misread the prompt or a constraint), Strategy (wrong approach), and Other.\n\nWhy this works: a pile of wrong answers tells you nothing actionable, but a pile of tagged wrong answers tells you exactly what to fix. Twenty Conceptual misses in Number Properties means go back to the chapter. Twenty Careless and Time Pressure misses means your content is fine and your problem is pacing and process — a totally different intervention. Most plateaus are misdiagnosed because students re-study content when their real leak is process.\n\nOn the platform, tagged mistakes feed your analytics and your daily spaced-review queue automatically, so the questions you got wrong come back at spaced intervals instead of being forgotten. The downloadable error-log template is free even without an account if you'd rather run it by hand.",
    },
    {
      heading:
        "Spaced review, full-length mocks, and per-difficulty analytics — the measurement layer",
      body: "Studying without re-measuring is how people grind for months and stay flat. The platform closes the loop three ways. A daily spaced-review queue resurfaces your missed and weak questions on a retrieval schedule, so review compounds instead of decaying. Full-length mocks run the realistic three-section, timed, auto-submitting format, and the platform tracks mock-to-mock trend so you can see whether your score is actually moving. Analytics break down accuracy and timing per topic and per difficulty level, and flag behavior patterns — where you're efficient, labored, rushed, or stuck.\n\nThe per-difficulty view is the underrated one. Plenty of test-takers are solid on medium questions and quietly losing points on easy ones to carelessness — which costs more than missing the hard ones, because on an adaptive test, missing questions you should get right pulls your scaled score down fast. You can't see that leak from a raw percentage; you need the per-difficulty cut.\n\nThe free Focus↔old-GMAT score converter and section-to-total calculator on the site let you sanity-check targets — for example, translating an old-scale goal a school still quotes into a Focus-scale target — without an account.",
    },
    {
      heading: "How the trial works — and what happens when it ends",
      body: `Create an account with your name, email, and a password — no payment details, no card on file, so there is nothing that silently converts into a charge. For ${TRIAL_DAYS} days you get the complete product, not a limited tier: there is no locked content inside the trial.\n\nAfter the trial, access continues through a one-time plan purchase, not a subscription. The plans and prices are public on the pricing page — Self-Study and Self-Study + Mentorship for self-paced prep, plus coaching packages — and every self-study plan carries a 14-day money-back guarantee.\n\nWhat you should not expect: a promised score, a magic number, or a guarantee about how much you'll improve. The only performance claim here is the founder's own — Adam Zakarian self-studied from 565 to 735 (top 1% of test-takers) and built this platform solo to be the system he wished he'd had. Results vary with your baseline, your hours, and your consistency; your results are your own.`,
    },
  ],
  faq: [
    {
      q: "Is the trial really full access?",
      a: `Yes. The ${TRIAL_DAYS}-day trial is the whole product — ${CHAPTER_COUNT_CLAIM} chapters, ${QUESTION_CLAIM_SHORT}, the error log, spaced review, the adaptive study plan, full-length mocks, and analytics. There is no limited "trial tier" and no credit card required to start.`,
    },
    {
      q: "What happens after the 7 days?",
      a: AFTER_TRIAL_ANSWER,
    },
    {
      q: "Is this a free GMAT diagnostic?",
      a: "No, and that's deliberate. There is no in-app diagnostic that invents a number for you — a short quiz can't reproduce a real adaptive exam, so any plan built on it would be calibrated to a guess. Your baseline comes from an official mba.com practice exam (free from the test maker). You enter those scores, and the platform builds your plan from real data.",
    },
    {
      q: "Will this guarantee me a specific score increase?",
      a: "No. No honest GMAT product can promise a number, and this one won't. The only performance claim made anywhere is the founder's own: Adam Zakarian went from 565 to 735 (top 1% of test-takers) through self-study and built the platform around that method. Your outcome depends on your starting point, your weak areas, and the work you put in.",
    },
  ],
  lead: {
    source: "other",
    leadMagnet: "error-log-template",
    headline: "Not ready to start the trial? Take the error-log template",
    description:
      "The exact 6-tag error log Adam used to find and kill his score leaks — the same Conceptual / Careless / Time Pressure / Misread / Strategy / Other system built into the platform, as a downloadable spreadsheet you can start today. No card, no account, just your email.",
    ctaLabel: "Send me the template",
  },
  primaryCta: { label: "Start your free 7-day trial", href: "/signup" },
  metaDescription: META_DESCRIPTION,
}

const RELATED: AcquisitionLandingProps["relatedLinks"] = [
  {
    label: "See plans and pricing",
    href: "/pricing",
    description: "One-time payments, no subscription.",
  },
  {
    label: "Build a study plan from your baseline",
    href: "/gmat-study-plan",
    description: "See how the adaptive plan works.",
  },
  {
    label: "Try real practice questions",
    href: "/gmat-practice-questions-free",
    description: "One from each scored section, no account.",
  },
  {
    label: "Free error-log template",
    href: "/gmat-error-log-template",
    description: "Try the six-tag system without an account.",
  },
]

export default function Page() {
  return <AcquisitionLanding {...DATA} relatedLinks={RELATED} />
}
