import type { Metadata } from "next"
import ScoreConverterClient from "./ScoreConverterClient"
import JsonLd from "@/components/seo/JsonLd"
import { softwareApplicationLd } from "@/lib/structured-data"

export const metadata: Metadata = {
  title: "GMAT Score Converter — Focus ↔ Old GMAT",
  description:
    "Look up the official GMAC concordance range between current GMAT scores (205-805) and 10th Edition scores (200-800), with current percentiles.",
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
            "Bidirectional lookup between current GMAT (205-805) and 10th Edition GMAT (200-800) total scores using GMAC's official concordance ranges.",
          path: "/score-converter",
        })}
      />
      <ScoreConverterClient />
    </>
  )
}
