import type { Metadata } from "next"
import ScoreConverterClient from "./ScoreConverterClient"
import JsonLd from "@/components/seo/JsonLd"
import { softwareApplicationLd } from "@/lib/structured-data"

export const metadata: Metadata = {
  title: "GMAT Score Converter — Focus ↔ Old GMAT",
  description:
    "Convert a GMAT Focus score (205-805) into the equivalent legacy GMAT score (200-800), and vice versa. Built from the official GMAC concordance with per-section conversion and percentile bands.",
  alternates: { canonical: "/score-converter" },
}

/**
 * /score-converter — public utility page that converts between the
 * Focus Edition and legacy GMAT scoring scales. SEO target ("GMAT
 * score converter" / "GMAT Focus score conversion") and a permanent
 * lead-capture surface for prospects who arrive from search.
 *
 * The conversion math lives in `@/lib/score-conversion`. The page
 * itself is a thin client component because the converter is fully
 * interactive — anchor table is rendered server-side via the helper.
 */
export default function ScoreConverterPage() {
  return (
    <>
      <JsonLd
        data={softwareApplicationLd({
          name: "GMAT Score Converter",
          description:
            "Bidirectional converter between GMAT Focus (205-805) and legacy GMAT (200-800) scoring scales, with per-section conversion and percentile bands.",
          path: "/score-converter",
        })}
      />
      <ScoreConverterClient />
    </>
  )
}
