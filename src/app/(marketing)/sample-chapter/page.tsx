import type { Metadata } from "next"
import SampleChapterRenderer from "@/components/marketing/SampleChapterRenderer"

export const metadata: Metadata = {
  title: "Sample chapter — CR Core Logic",
  description:
    "Read two full sections from the Zakarian GMAT CR Core Logic chapter — argument structure and the assumption + negation test. No signup required.",
  alternates: { canonical: "/sample-chapter" },
}

export default function SampleVerbalChapterPage() {
  return (
    <SampleChapterRenderer
      chapterSlug="verbal-2-cr-core-logic"
      sectionLabel="Verbal"
      publicSectionIds={["argument-structure", "assumption-and-negation-test"]}
      siblings={[
        {
          href: "/sample-chapter/quant",
          sectionLabel: "Quant",
          chapterLabel: "Algebra",
        },
        {
          href: "/sample-chapter/data-insights",
          sectionLabel: "Data Insights",
          chapterLabel: "Data Sufficiency",
        },
      ]}
    />
  )
}
