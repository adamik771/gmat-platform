import type { Metadata } from "next"
import ScoreBySchoolClient from "./ScoreBySchoolClient"
import JsonLd from "@/components/seo/JsonLd"
import { softwareApplicationLd } from "@/lib/structured-data"

export const metadata: Metadata = {
  title: "GMAT Score by MBA School",
  description:
    "Median GMAT scores for 20+ top MBA programs (HBS, Stanford, Wharton, INSEAD, LBS, ISB, and more), on both the legacy 200-800 and new Focus 205-805 scales, with a competitive 80th-percentile target.",
  alternates: { canonical: "/score-by-school" },
}

/**
 * /score-by-school — public utility that lets a prospect pick an MBA
 * program and immediately see the approximate GMAT median + the
 * "competitive" band, on both scales.
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
          name: "GMAT Score by MBA School",
          description:
            "Median GMAT scores for 20+ top MBA programs (M7, T15, top European, top Asian) on both Focus and legacy scoring scales.",
          path: "/score-by-school",
        })}
      />
      <ScoreBySchoolClient />
    </>
  )
}
