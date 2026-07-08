import type { Metadata } from "next"
import AcquisitionLanding, {
  type AcquisitionLandingProps,
} from "@/components/marketing/AcquisitionLanding"
import { CHAPTER_COUNT_CLAIM, QUESTION_CLAIM, QUESTION_CLAIM_SHORT } from "@/lib/site"

export const metadata: Metadata = {
  title: "GMAT Private Beta: Free Founding Access",
  description: `Zakarian GMAT's private beta is free with no card: ${CHAPTER_COUNT_CLAIM} Focus Edition chapters, 1,900+ questions, a 6-tag error log, spaced review, and an adaptive plan built from your own official practice exam. Founding members lock in early pricing.`,
  alternates: { canonical: "/gmat-private-beta" },
}

const DATA: AcquisitionLandingProps = {
  "slug": "gmat-private-beta",
  "eyebrow": "Private beta",
  "h1": "The GMAT private beta where your study plan is built from your real score, not a guess",
  "intro": "Most \"free GMAT diagnostics\" give you a short quiz and a number that has almost no relationship to how you'll perform on a 2-hour, three-section adaptive exam. Zakarian GMAT does the opposite. There is no in-app diagnostic to fake your baseline. You take an official mba.com practice exam — the closest thing to the real test that exists — enter your section and total scores, and the platform builds everything downstream from that one honest number: your weak areas, your daily queue, your study plan, your mock targets. The whole product is in a free private beta right now: full access, no credit card, no trial countdown.\n\nThis page is worth reading even if you never sign up, because the structure underneath the platform is just good GMAT methodology you can copy by hand: baseline from a real exam, fix weak areas with research-backed chapters, log every mistake by *why* you missed it, space your review, and re-measure with full-length mocks. Below is exactly how each piece works, how founding pricing is set up (you reserve a locked-in discount, you don't pay today), and an honest FAQ about what the beta is and isn't.",
  "sections": [
    {
      "heading": "Your baseline comes from an official practice exam — that's why the plan is trustworthy",
      "body": "Here is the single most important GMAT prep decision, and most platforms get it wrong: where your baseline comes from. A short in-app quiz cannot reproduce the fatigue, pacing pressure, and adaptive difficulty of the real exam, so any plan built on it is calibrated to a fiction.\n\nZakarian GMAT deliberately ships with no in-app diagnostic. Your baseline is an official mba.com practice exam — free from the test maker, full-length, on the real scoring scale (205–805). You take it, then enter your Quant, Verbal, Data Insights, and total scores on the platform. That data is what unlocks your dashboard, your adaptive study plan, and your analytics.\n\nDo this even if you never use the platform: before you buy any course or build any schedule, sit one official practice exam under real conditions. Without a real baseline you cannot tell whether you're a content problem (you don't know the material) or a test-taking problem (you know it but lose points to timing and careless errors) — and those two problems have completely different fixes."
    },
    {
      "heading": `${CHAPTER_COUNT_CLAIM} chapters across Quant, Verbal, and Data Insights — built for Focus Edition, not retrofitted`,
      "body": `The GMAT Focus Edition is not the old GMAT with the essay removed. Data Insights is now a full scored section equal in weight to Quant and Verbal, Sentence Correction is gone from Verbal, and the scoring scale changed to 205–805. A lot of prep material on the market still treats DI as an afterthought.\n\nThe platform's ${CHAPTER_COUNT_CLAIM} chapters are organized by these three real sections and built around how people actually learn: each chapter runs pretest, then readings that interleave Recall checks and self-explanation prompts, then graded problem sets — so you retrieve and apply, not just highlight. Behind the chapters sits a bank of ${QUESTION_CLAIM} tagged by topic and difficulty, so practice maps directly onto the chapter you just studied.\n\nIf you're studying elsewhere, the principle still applies: spend real time on Data Insights (Data Sufficiency, Multi-Source Reasoning, Table/Graph, Two-Part). It is the section most people under-prepare and the one most likely to drag a total score down on test day.`
    },
    {
      "heading": "A 6-tag error log — because *why* you missed a question matters more than that you missed it",
      "body": "This is the highest-leverage habit in the whole method, and you can start it today in a spreadsheet. Every question you get wrong gets tagged by the reason you missed it. The platform uses six tags: Conceptual (you didn't know the rule), Careless (you knew it, slipped), Time Pressure (rushed at the end), Misread (misread the prompt or a constraint), Strategy (wrong approach), and Other.\n\nWhy this works: a pile of wrong answers tells you nothing actionable, but a pile of *tagged* wrong answers tells you exactly what to fix. Twenty Conceptual misses in Number Properties means go back to the chapter. Twenty Careless and Time Pressure misses means your content is fine and your problem is pacing and process — a totally different intervention. Most plateaus are misdiagnosed because students re-study content when their real leak is process.\n\nOn the platform, tagged mistakes feed your analytics and your daily spaced-review queue automatically, so the questions you got wrong come back at spaced intervals instead of being forgotten. The downloadable error-log template is free even without an account if you'd rather run it by hand."
    },
    {
      "heading": "Spaced review, full-length mocks, and per-difficulty analytics — the measurement layer",
      "body": "Studying without re-measuring is how people grind for months and stay flat. The platform closes the loop three ways. A daily spaced-review queue resurfaces your missed and weak questions on a retrieval schedule, so review compounds instead of decaying. Full-length mocks run the realistic three-section, timed, auto-submitting format, and the platform tracks mock-to-mock trend so you can see whether your score is actually moving. Analytics break down accuracy and timing per topic and per difficulty level, and flag behavior patterns — where you're efficient, labored, rushed, or stuck.\n\nThe per-difficulty view is the underrated one. Plenty of test-takers are solid on medium questions and quietly losing points on easy ones to carelessness — which costs more than missing the hard ones, because on an adaptive test, missing questions you should get right pulls your scaled score down fast. You can't see that leak from a raw percentage; you need the per-difficulty cut.\n\nThe free Focus↔old-GMAT score converter and section-to-total calculator on the site let you sanity-check targets — for example, translating an old-scale goal a school still quotes into a Focus-scale target — without an account."
    },
    {
      "heading": "How founding pricing works during the beta — you reserve a rate, you don't pay today",
      "body": "Plain terms, because honesty is the entire pitch. The platform is free to use right now during a private beta — full access, no credit card. When paid plans eventually turn on, founding members get a discount of roughly 30–40% locked in, honored at the founding rate. Nothing is charged today and there is no obligation; you're holding your place and your price.\n\nFor reference, the planned Self-Study + Mentorship tier is anchored at $599, and the founding rate on it is around $399. There's also a referral: a friend you bring in gets the founding price, and you get $50 when they join. You reserve by dropping your email — you get your founding code before paid plans open, and you decide later whether to upgrade.\n\nWhat you should not expect: a promised score, a magic number, or a guarantee about how much you'll improve. The only performance claim here is the founder's own — Adam Zakarian self-studied from 565 to 735 (100th percentile on his official score report) and built this platform solo to be the system he wished he'd had. Your results are your own."
    }
  ],
  "faq": [
    {
      "q": "Is this a free GMAT diagnostic?",
      "a": "No, and that's deliberate. There is no in-app diagnostic that invents a number for you — a short quiz can't reproduce a real adaptive exam, so any plan built on it would be calibrated to a guess. Your baseline comes from an official mba.com practice exam (free from the test maker). You enter those scores, and the platform builds your plan from real data. The platform itself is free to use during the private beta, no card required."
    },
    {
      "q": "What does \"private beta\" actually mean — is it unfinished or limited?",
      "a": `It means full access to the real product — ${CHAPTER_COUNT_CLAIM} chapters, ${QUESTION_CLAIM_SHORT}, the error log, spaced review, adaptive study plan, mocks, and analytics — at no cost while paid plans aren't switched on yet. "Beta" reflects that it's pre-paid-launch and actively improving with user feedback, not that features are locked behind a paywall. There's no trial countdown and no credit card.`
    },
    {
      "q": "If it's free now, what's the catch with founding pricing?",
      "a": "There's no charge today and no obligation. Founding members simply reserve a locked-in discount (roughly 30–40% off) that's honored when paid plans launch — you get your founding code first and decide later whether to upgrade. The referral is equally plain: a friend you refer gets the founding price and you get $50 when they join. Reserving is just giving your email; you can unsubscribe in one click."
    },
    {
      "q": "Will this guarantee me a specific score increase?",
      "a": "No. No honest GMAT product can promise a number, and this one won't. The only performance claim made anywhere is the founder's own: Adam Zakarian went from 565 to 735 (100th percentile on his official report) through self-study and built the platform around that method. Your outcome depends on your starting point, your weak areas, and the work you put in."
    }
  ],
  "lead": {
    "source": "founding-member",
    "leadMagnet": "founding-reservation",
    "headline": "The error-log template I used to go from 565 to 735",
    "description": "Get the exact 6-tag error log Adam used to find and kill his score leaks — the same Conceptual / Careless / Time Pressure / Misread / Strategy / Other system built into the platform, as a downloadable template you can start today. Drop your email and I'll send it, plus your founding access to the private beta. No card, no charge — you reserve your founding rate and decide later.",
    "ctaLabel": "Reserve my spot"
  },
  "metaDescription": `Zakarian GMAT's private beta is free with no card: ${CHAPTER_COUNT_CLAIM} Focus Edition chapters, 1,900+ questions, a 6-tag error log, spaced review, and an adaptive plan built from your own official practice exam. Founding members lock in early pricing.`
}

const RELATED: AcquisitionLandingProps["relatedLinks"] = [
  {
    label: "Build a study plan from your baseline",
    href: "/gmat-study-plan",
    description: "See how the adaptive plan works.",
  },
  {
    label: "Review your mocks the right way",
    href: "/gmat-mock-review",
    description: "The mock-to-mock trend, explained.",
  },
  {
    label: "Free error-log template",
    href: "/gmat-error-log-template",
    description: "Try the six-tag system without an account.",
  },
  {
    label: "Refer a friend",
    href: "/refer",
    description: "Bring someone in; you both get founding pricing.",
  },
]

export default function Page() {
  return <AcquisitionLanding {...DATA} relatedLinks={RELATED} />
}
