import type { Metadata } from "next"
import StudyScheduleClient from "./StudyScheduleClient"
import JsonLd from "@/components/seo/JsonLd"
import { softwareApplicationLd } from "@/lib/structured-data"

export const metadata: Metadata = {
  title: "GMAT Study Schedule Generator",
  description:
    "Generate a personalised week-by-week GMAT study schedule from your exam date and weekly study hours. Optional: feed in section accuracies from the free diagnostic for a plan built around your weakest section.",
  alternates: { canonical: "/study-schedule" },
}

/**
 * /study-schedule — interactive scheduler. Inputs: exam date, weekly
 * hours, optional accuracy snapshot. Output: week-by-week plan.
 *
 * SEO target: high-volume queries like "GMAT study schedule," "GMAT
 * 12-week plan," "GMAT study planner." Pairs naturally with the
 * /free-diagnostic for accuracy input and with the platform's adaptive
 * plan as the upgrade path.
 *
 * Logic lives in `@/lib/study-schedule`. The page is a thin wrapper
 * around a client component because the form is fully interactive.
 */
export default function StudySchedulePage() {
  return (
    <>
      <JsonLd
        data={softwareApplicationLd({
          name: "GMAT Study Schedule Generator",
          description:
            "Personalised week-by-week GMAT study schedule generator. Inputs: exam date, weekly study hours, optional section accuracy snapshot. Output: a plan built around the weakest section.",
          path: "/study-schedule",
        })}
      />
      <StudyScheduleClient />
    </>
  )
}
