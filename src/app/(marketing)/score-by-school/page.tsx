import type { Metadata } from "next"
import ScoreBySchoolClient from "./ScoreBySchoolClient"
import JsonLd from "@/components/seo/JsonLd"
import { softwareApplicationLd } from "@/lib/structured-data"

export const metadata: Metadata = {
  title: "GMAT Score by Graduate Business Programme",
  description:
    "Published GMAT averages, medians, and admissions signals for leading MBA, MiM, Master in Finance, and Banking and Finance programmes.",
  alternates: { canonical: "/score-by-school" },
}

/**
 * /score-by-school — public utility for comparing programme-published GMAT
 * benchmarks and admissions policies across MBA and business master's study.
 *
 * SEO target: high-volume school-specific queries like "GMAT score
 * for Wharton" / "what GMAT do I need for HBS" — and the long-tail
 * variants that aggregate up to substantial traffic.
 *
 * Data lives in `@/lib/mba-schools`. Adding a school is a single
 * row change.
 */
export default function ScoreBySchoolPage() {
  return (
    <>
      <JsonLd
        data={softwareApplicationLd({
          name: "GMAT Score by Graduate Business Programme",
          description:
            "Published GMAT benchmarks and admissions signals for leading MBA, MiM, and finance master's programmes.",
          path: "/score-by-school",
        })}
      />
      <ScoreBySchoolClient />
    </>
  )
}
