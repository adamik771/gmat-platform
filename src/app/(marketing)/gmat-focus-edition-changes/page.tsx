import type { Metadata } from "next"
import AcquisitionLanding, {
  type AcquisitionLandingProps,
} from "@/components/marketing/AcquisitionLanding"

export const metadata: Metadata = {
  title: "GMAT Focus Edition Changes Explained | Zakarian GMAT",
  description:
    "A clear, factual breakdown of the GMAT Focus Edition changes — three 45-minute sections, what was removed, the new Data Insights section, and the 205-805 scale.",
  alternates: { canonical: "/gmat-focus-edition-changes" },
}

const DATA: AcquisitionLandingProps = {
  slug: "gmat-focus-edition-changes",
  eyebrow: "Format explainer",
  h1: "GMAT Focus Edition changes: what is different from the old GMAT",
  intro:
    "The GMAT Focus Edition fully replaced the prior GMAT format, and the old version was retired in early 2024. If you studied from older books, took a practice test years ago, or are simply trying to understand what the exam looks like now, the structure you remember may no longer match what you will sit for.\n\nThis page is a strictly descriptive explainer of the GMAT Focus Edition changes — what the sections are, what was removed, what is new, and how scoring works. It does not argue that the new format is easier or harder, only that it is different. Once you know the shape of the exam, the last section points you toward how to prepare for it specifically.",
  sections: [
    {
      heading: "The headline changes: three sections, 45 minutes each",
      body:
        "The GMAT Focus Edition is built around three sections of 45 minutes each, for roughly two hours and fifteen minutes of testing time plus one optional break. That is shorter than the older format, which carried an essay and a longer overall sitting.\n\nThe three sections are Quantitative Reasoning (21 questions), Verbal Reasoning (23 questions), and Data Insights (20 questions). Each section is timed independently at 45 minutes, and you can take them in different section orders. The result is a more compact exam with a clearer, more even split across the three skill areas.\n\nBecause every section is the same length and every question carries weight within an adaptive format, pacing matters across all three rather than being concentrated in one long block.",
    },
    {
      heading: "What was removed from the old GMAT",
      body:
        "Two well-known parts of the older GMAT are gone in the Focus Edition. Knowing what disappeared is often the fastest way to recalibrate if you studied before the change.\n\n- The Analytical Writing Assessment — the timed essay — was removed entirely. There is no writing task on the GMAT Focus Edition.\n- Sentence Correction was removed from the Verbal section. Verbal Reasoning is now Critical Reasoning and Reading Comprehension only.\n- Data Sufficiency was moved out of the Quant section (covered in the next section below), so the Quant you see now is problem-solving only.\n\nIf your old prep materials spent a lot of time on grammar rules for Sentence Correction or on essay templates, those topics no longer appear on this exam.",
    },
    {
      heading: "The new Data Insights section",
      body:
        "The biggest structural addition is Data Insights, a 45-minute section of 20 questions that tests how you reason with information presented across tables, graphs, text, and numbers. It reflects the kind of mixed-format analysis that shows up in real business decisions.\n\nData Insights covers five question formats: Data Sufficiency, Multi-Source Reasoning, Table Analysis, Graphics Interpretation, and Two-Part Analysis. Data Sufficiency is the notable migration here — it used to live in Quant on the old format and now sits in Data Insights. An on-screen calculator is available in Data Insights only; you will not have one in Quant.\n\nFor many test takers this section is the least familiar, simply because it did not exist as a standalone, equally weighted section in the format people remember.",
    },
    {
      heading: "New scoring scale, shifted percentiles, and answer editing",
      body:
        "The GMAT Focus Edition uses a total score scale of 205 to 805, replacing the old 200 to 800 scale. Section scores run from 60 to 90. Because the scale and the underlying population changed, percentiles shifted as well — a given total number does not map to the same percentile it would have under the old format, so comparing raw numbers across formats can be misleading.\n\nThe exam also added test-taking flexibility. You can bookmark questions as you go and edit up to three answers per section before time runs out, within that section. This lets you move forward when unsure and revisit a small number of questions at the end rather than being locked into every answer immediately.\n\nThese are mechanical facts about how the exam is scored and navigated, not claims about difficulty.",
    },
    {
      heading: "What the changes mean for how you prepare",
      body:
        "The practical takeaway is that prep built for the old GMAT can send you in the wrong direction. Time spent on the essay or on Sentence Correction grammar no longer maps to anything on test day, while Data Insights — including Data Sufficiency in its new home — deserves dedicated, format-specific practice.\n\nZakarian GMAT is built specifically for the Focus Edition. Its 62 interactive chapters span Quant, Verbal, and Data Insights as they exist now; the practice question bank holds original questions in the current formats; and an adaptive study plan is built from your own official mba.com practice-exam baseline that you enter on the mock page. A six-tag error log, a spaced-review queue, and full-length mocks (three 45-minute sections) keep your practice aligned with how the real exam is structured.\n\nThe platform is free during a private beta right now, with no credit card required, so you can map your prep to the current format without committing anything.",
    },
  ],
  faq: [
    {
      q: "Is the old GMAT still available?",
      a: "No. The GMAT Focus Edition fully replaced the prior format, and the old GMAT was retired in early 2024. You can only register for and sit the Focus Edition now, so older-format prep materials should be checked carefully against the current structure.",
    },
    {
      q: "Is the GMAT Focus easier than the old GMAT?",
      a: "It is different, not easier or harder. The Focus Edition is shorter and drops the essay and Sentence Correction, but it adds the Data Insights section and moves Data Sufficiency there. Difficulty is individual, and we make no claim that the format raises or lowers anyone’s outcome.",
    },
    {
      q: "How is the GMAT Focus scored?",
      a: "The total score runs on a 205 to 805 scale, and each of the three sections is scored from 60 to 90. Because the scale and the test population changed from the old format, percentiles shifted, so the same total number does not correspond to the old percentile.",
    },
    {
      q: "What is the Data Insights section?",
      a: "Data Insights is a 45-minute, 20-question section that measures reasoning across data and text. It includes five formats: Data Sufficiency, Multi-Source Reasoning, Table Analysis, Graphics Interpretation, and Two-Part Analysis. An on-screen calculator is available in this section only.",
    },
  ],
  lead: {
    source: "other",
    leadMagnet: "newsletter",
    headline: "Get the free GMAT Focus structure-and-scoring one-pager",
    description:
      "A single-page reference covering the three sections, question counts, the 205-805 scale, and the five Data Insights formats — everything that changed, in one place.",
    ctaLabel: "Send it to me",
  },
  metaDescription:
    "A clear, factual breakdown of the GMAT Focus Edition changes — three 45-minute sections, what was removed, the new Data Insights section, and the 205-805 scale.",
}

const RELATED: AcquisitionLandingProps["relatedLinks"] = [
  {
    label: "Read the full GMAT Focus vs old GMAT breakdown",
    href: "/blog/gmat-focus-vs-old-gmat-whats-changed",
    description: "A deeper article comparing the two formats point by point.",
  },
  {
    label: "Practice Data Insights questions",
    href: "/gmat-data-insights-practice",
    description: "Work the newest section, including Data Sufficiency in its new home.",
  },
  {
    label: "Build an adaptive study plan",
    href: "/gmat-study-plan",
    description: "Turn your official practice-exam baseline into a plan for the current format.",
  },
  {
    label: "Old-to-new score converter",
    href: "/score-converter",
    description: "See how the 205-805 scale relates to the old 200-800 numbers.",
  },
  {
    label: "Start free during the private beta",
    href: "/signup",
    description: "Create an account and study the Focus Edition with no credit card.",
  },
]

export default function Page() {
  return <AcquisitionLanding {...DATA} relatedLinks={RELATED} />
}
