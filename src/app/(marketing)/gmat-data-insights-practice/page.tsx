import type { Metadata } from "next"
import AcquisitionLanding, {
  type AcquisitionLandingProps,
} from "@/components/marketing/AcquisitionLanding"

export const metadata: Metadata = {
  title: "GMAT Data Insights Practice: The 5 DI Formats and How to Drill Them",
  description: "A specific guide to GMAT Focus Data Insights practice: the five DI question formats, why DI is the most under-trained section, and a concrete drilling method that builds the skills it actually tests.",
  alternates: { canonical: "/gmat-data-insights-practice" },
}

const DATA: AcquisitionLandingProps = {
  "slug": "gmat-data-insights-practice",
  "eyebrow": "Data Insights",
  "h1": "GMAT Data Insights practice: master the five formats most students under-train",
  "intro": "Data Insights is one-third of your GMAT Focus total score, weighted exactly the same as Quant and Verbal. Yet most study plans treat it as an afterthought, because it is the newest section and there is less practice material floating around for it. That gap is the opportunity. DI is not a \"third subject\" to learn from zero; it recycles skills you are already building in Quant (arithmetic, sufficiency logic) and Verbal (critical reasoning, careful reading) and forces you to apply them under a five-format rotation that punishes sloppy reading and weak pacing.\n\nThe single most useful thing to understand before you practice: DI rewards deciding what you do not need to compute. Across Data Sufficiency, Two-Part Analysis, Multi-Source Reasoning, Table Analysis, and Graphics Interpretation, the high scorers are not faster calculators. They are faster at recognizing which numbers are irrelevant, which statements are sufficient without solving, and which tabs or rows they can ignore. This page breaks down each of the five formats, names the specific trap each one sets, and gives you a drilling method that builds that recognition skill instead of just exposing you to more questions.",
  "sections": [
    {
      "heading": "The five DI formats, and the one skill each actually tests",
      "body": "Data Insights rotates through five question types in a single 45-minute, 20-question section. A calculator is provided (it is not provided on Quant), which is a signal in itself: DI questions rarely hinge on arithmetic difficulty. They hinge on reading, structure, and sufficiency. Here is what each format is really testing.\n\nData Sufficiency: not 'solve the problem,' but 'do these statements pin down a single answer?' DS gives you a question and two statements, and the five answer choices are always identical. The skill is constraint-checking, not computing. A statement is sufficient only if exactly one answer survives every consistent interpretation of it; if you can find one edge case (a negative, a fraction, a zero) that produces a second answer, it is insufficient. The classic tax on DS scores is fully solving when a 30-second sufficiency check would have done.\n\nTwo-Part Analysis: fill two cells of a small table from a shared list of options, where the two answers are linked by a joint constraint. The mistake is treating the cells as two separate problems. Think of it as a tiny system of two equations: pick a value for the first cell and it often rules out values for the second. Once you name the linking constraint, the answer frequently falls out from logic with no computation.\n\nMulti-Source Reasoning: two or three tabs of mixed text, tables, and charts, with several questions drawing on them. The skill is locating the one relevant fact across sources and ignoring the rest. The trap is over-reading every tab before answering. You read for structure first (what lives in which tab), then pull only what each sub-question needs.\n\nTable Analysis: a sortable table plus usually three true/false-style statements. The leverage move is sorting the table to answer the actual question instead of scanning rows. Most errors here are misread column headers or units, not analytical failures.\n\nGraphics Interpretation: a chart or graph with fill-in-the-blank dropdown statements. The skill is reading axes, scales, and trends precisely. The trap is the same as Table Analysis: a unit or axis you skimmed."
    },
    {
      "heading": "Why DI is the most under-trained section (and why that is good news)",
      "body": "Three structural reasons explain why DI is where most candidates leave points on the table.\n\nFirst, it is the newest section, so there is simply less practice material in circulation than for Quant and Verbal, and a lot of older 'Integrated Reasoning' advice does not map cleanly onto the current Focus formats. Many study plans front-load the two sections people feel they understand and run out of runway before DI.\n\nSecond, DI feels like five small subjects, so it is easy to never build real fluency in any one of them. A student might see a handful of each format and conclude they 'get it,' without ever drilling a format until the recognition is automatic.\n\nThird, DI has its own pacing math that rewards or destroys you fast: roughly 45 minutes for 20 questions is about 2 minutes 15 seconds each, but Multi-Source sets and dense tables eat far more than the average, which means you must bank time on the formats that should be quick. A Data Sufficiency item you can settle in 45 seconds with a clean sufficiency check funds the three minutes a multi-tab MSR set legitimately needs.\n\nThe good news: under-trained means high-leverage. Because most people neglect DI, focused practice moves your DI subscore faster than the same hours spent on an already-strong Quant or Verbal score. And because DI reuses sufficiency logic from Quant and critical-reasoning reading from Verbal, the work compounds across sections rather than competing with them."
    },
    {
      "heading": "How to actually practice DI: a method, not just a question count",
      "body": "Doing 200 random DI questions teaches you very little if you do not change what you do between questions. Use this loop.\n\nDrill one format at a time, to fluency, before mixing. Spend a session only on Two-Part Analysis until the 'find the linking constraint first' move is automatic; then a session only on Data Sufficiency decision-tree discipline; and so on. Mixed practice tests recognition, but you cannot recognize a pattern you have not yet built. Build per-format, then mix.\n\nLog every miss by cause, not just by topic. After each wrong answer, label why you missed it: a conceptual gap, a careless slip, time pressure, a misread, a strategy error, or other. DI errors cluster heavily in 'misread' (wrong column, wrong unit, wrong tab) and 'time pressure,' and those are fixed with completely different habits than a conceptual gap. If you do not separate them, you will drill content when your real problem was reading the axis.\n\nReview with a stopwatch in mind. For every DS miss, ask: did I solve when a sufficiency check would have sufficed? For every Table or Graphics miss, ask: did I sort/read the axis, or scan? Write the recurring failure as a one-line rule you carry into the next session.\n\nSpace your review. Re-attempt the questions you missed a few days later, from your error log, not the day-of. The recognition you are building only sticks if you retrieve it after a gap. On the Zakarian GMAT platform this is automated: the six-tag error log (Conceptual, Careless, Time Pressure, Misread, Strategy, Other) feeds a daily spaced-review queue, and per-format and per-difficulty analytics show you exactly which of the five DI types is bleeding points. But the method works in a spreadsheet too. The discipline matters more than the tool."
    },
    {
      "heading": "A one-week DI practice block you can run yourself",
      "body": "If you have a week to make DI less scary, here is a concrete schedule that uses the loop above. Adjust the volume to your timeline; the sequence is the point.\n\nDays 1-2, sufficiency and structure: Data Sufficiency only. Drill the five-choice decision tree until selecting A/B/C/D/E is mechanical. Force yourself to test each statement alone first, then combined only if both alone fail. Test edge cases (negatives, fractions, zero) on every problem that involves variables. Goal: stop solving when sufficiency is already determined.\n\nDay 3, the GMAT-only format: Two-Part Analysis only. For each problem, write the linking constraint in words before touching the options. Eliminate from the pair, not from each cell separately.\n\nDay 4, reading under load: Multi-Source Reasoning only. Practice mapping the tabs first (one sentence per tab: what is here), then answering each sub-question by pulling only what it needs. Resist reading everything.\n\nDay 5, the quick-but-trappy pair: Table Analysis and Graphics Interpretation. Drill the habit of sorting the table to the question and reading every axis label and unit out loud before answering. Most misses here are reading, not math.\n\nDays 6-7, mixed and timed: a full mixed DI set under the real clock (about 2:15 average per question, but deliberately bank time on DS and Graphics to fund MSR). Then review every miss by error cause and re-attempt your earlier-week misses from memory. That spaced re-attempt is where the gains lock in."
    },
    {
      "heading": "Where this fits in a full GMAT Focus plan",
      "body": "DI is one of three equally weighted sections, so the planning question is never 'DI or Quant?' but 'how much DI, and when?' Because DI is under-trained for most people, a disproportionate early push usually pays off: a few focused weeks on the five formats often moves the DI subscore more than the same hours added to a Quant score that is already in good shape.\n\nThe cleanest way to know where DI sits for you is to take an official mba.com practice exam and read the section breakdown. That official result is your real baseline, not any third-party estimate. From there, you weight your weeks toward whichever section the official report says is costing you the most.\n\nThat baseline-driven approach is exactly how the Zakarian GMAT study plan is built: you enter your official-practice-exam result, and the plan sequences chapters and drills around your actual weak sections rather than a generic order. The platform's Data Insights material covers all five formats as dedicated chapters with practice sets, plus full-length mocks with a mock-to-mock trend so you can watch the DI subscore move. It is free to use during the private beta, with no card required. None of that changes the core idea on this page: DI is winnable because it is neglected, and it gets winnable the moment you drill each format to recognition instead of collecting question counts."
    }
  ],
  "faq": [
    {
      "q": "How many questions is the GMAT Focus Data Insights section, and how is it scored?",
      "a": "Data Insights is a 45-minute section with 20 questions, drawn from five formats: Data Sufficiency, Two-Part Analysis, Multi-Source Reasoning, Table Analysis, and Graphics Interpretation. It is one of three sections on the GMAT Focus Edition and is weighted equally with Quant and Verbal in your total score, which is why neglecting it is so costly. (Zakarian GMAT is an independent prep platform and is not affiliated with, endorsed by, or sponsored by GMAC or mba.com; confirm current section specs on the official site.)"
    },
    {
      "q": "Is Data Insights the same as the old Integrated Reasoning section?",
      "a": "They overlap but are not identical. DI carries forward Integrated-Reasoning-style formats like Multi-Source Reasoning, Table Analysis, Graphics Interpretation, and Two-Part Analysis, and it also folds in Data Sufficiency, which used to live in the Quant section. The bigger difference is weighting: where Integrated Reasoning was scored separately and often downplayed, DI is a full one-third of the GMAT Focus total. That is the main reason older 'IR is low-stakes' advice no longer applies."
    },
    {
      "q": "Why do I keep missing DI questions even though the math is easy?",
      "a": "Because DI rarely fails you on arithmetic. The most common DI error is a misread: the wrong column, the wrong unit, the wrong tab, or a sufficiency check you skipped in favor of fully solving. That is why logging your misses by cause matters more than your raw accuracy. If you tag each miss as conceptual, careless, time-pressure, misread, strategy, or other, you will usually find your DI problem is reading and pacing, not content, and those are fixed with different habits than a knowledge gap."
    },
    {
      "q": "Do I need a paid course to practice Data Insights well?",
      "a": "No. The method on this page, drill one format to fluency, log every miss by cause, review with pacing in mind, and re-attempt misses after a gap, works in a notebook or spreadsheet. A platform helps mainly by automating the error log, spaced review, and per-format analytics so you spend time practicing instead of bookkeeping. Zakarian GMAT does that and is free during its private beta with no card, but the discipline is what moves your score, not the tool."
    }
  ],
  "lead": {
    "source": "other",
    "leadMagnet": "newsletter",
    "headline": "Get the DI Error-Log Template and the five-format drill checklist",
    "description": "Enter your email and we will send the downloadable error-log template (with the six cause tags) plus the one-week Data Insights drill plan from this page, so you can run the full method yourself. No card, no spam, just the tools.",
    "ctaLabel": "Send it to me"
  },
  "metaDescription": "A specific guide to GMAT Focus Data Insights practice: the five DI question formats, why DI is the most under-trained section, and a concrete drilling method that builds the skills it actually tests."
}

const RELATED: AcquisitionLandingProps["relatedLinks"] = [
  {
    label: "Drill Quant by weak topic",
    href: "/gmat-quant-practice",
    description: "The other half of your section scores.",
  },
  {
    label: "Build a study plan from your baseline",
    href: "/gmat-study-plan",
    description: "Rank DI against your other weak areas.",
  },
  {
    label: "Data Insights: the complete guide",
    href: "/blog/gmat-data-insights-complete-guide",
    description: "All five DI question formats, explained.",
  },
  {
    label: "Free error-log template",
    href: "/gmat-error-log-template",
    description: "Tag DI misses by cause, not just by topic.",
  },
]

export default function Page() {
  return <AcquisitionLanding {...DATA} relatedLinks={RELATED} />
}
