import type { Metadata } from "next"
import SampleChapterRenderer from "@/components/marketing/SampleChapterRenderer"

export const metadata: Metadata = {
  title: "Sample chapter — Algebra (Quant)",
  description:
    "Read two full sections from the Zakarian GMAT Algebra chapter — linear equations and systems of equations. No signup required.",
  alternates: { canonical: "/sample-chapter/quant" },
}

export default function SampleQuantChapterPage() {
  return (
    <SampleChapterRenderer
      chapterSlug="algebra"
      sectionLabel="Quant"
      publicSectionIds={[
        "linear-equations-one-unknown",
        "systems-of-equations",
      ]}
      siblings={[
        {
          href: "/sample-chapter",
          sectionLabel: "Verbal",
          chapterLabel: "Critical Reasoning",
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
