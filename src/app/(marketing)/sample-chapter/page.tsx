import type { Metadata } from "next"
import SampleChapterRenderer from "@/components/marketing/SampleChapterRenderer"

export const metadata: Metadata = {
  title: "Sample chapter — Verbal Foundations",
  description:
    "Read two full sections from the Zakarian GMAT Verbal Foundations chapter — how GMAT Focus Verbal works and the active-reading method. No signup required.",
  alternates: { canonical: "/sample-chapter" },
}

export default function SampleVerbalChapterPage() {
  return (
    <SampleChapterRenderer
      chapterSlug="verbal-01-foundations"
      sectionLabel="Verbal"
      publicSectionIds={["how-verbal-works", "active-reading"]}
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
