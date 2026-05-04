import type { Metadata } from "next"
import SampleChapterRenderer from "@/components/marketing/SampleChapterRenderer"

export const metadata: Metadata = {
  title: "Sample chapter — Data Sufficiency (Data Insights)",
  description:
    "Read two full sections from the Zakarian GMAT Data Sufficiency chapter — the five-answer framework and the rephrasing habit. No signup required.",
  alternates: { canonical: "/sample-chapter/data-insights" },
}

export default function SampleDataInsightsChapterPage() {
  return (
    <SampleChapterRenderer
      chapterSlug="data-sufficiency"
      sectionLabel="Data Insights"
      publicSectionIds={[
        "the-five-answer-framework",
        "rephrasing-the-question",
      ]}
      siblings={[
        {
          href: "/sample-chapter",
          sectionLabel: "Verbal",
          chapterLabel: "Critical Reasoning",
        },
        {
          href: "/sample-chapter/quant",
          sectionLabel: "Quant",
          chapterLabel: "Algebra",
        },
      ]}
    />
  )
}
