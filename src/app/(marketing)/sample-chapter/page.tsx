import type { Metadata } from "next"
import SampleChapterRenderer from "@/components/marketing/SampleChapterRenderer"

export const metadata: Metadata = {
  title: "Sample chapter — Critical Reasoning",
  description:
    "Read two full sections from the Zakarian GMAT Critical Reasoning chapter — argument structure and the strengthen / weaken templates. No signup required.",
  alternates: { canonical: "/sample-chapter" },
}

export default function SampleVerbalChapterPage() {
  return (
    <SampleChapterRenderer
      chapterSlug="critical-reasoning"
      sectionLabel="Verbal"
      publicSectionIds={["argument-structure", "strengthen-and-weaken"]}
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
