import type { Metadata } from "next"
import ErrorLogTemplatePage from "../error-log-template/page"

export const metadata: Metadata = {
  title: "GMAT Error Log Template — Free Download",
  alternates: { canonical: "/gmat-error-log-template" },
  description:
    "A free GMAT error log template (spreadsheet) with the six-tag system Adam used to go from 565 to 735. Log every mistake, find the patterns, and review what actually costs you points.",
}

export default function GmatErrorLogTemplatePage() {
  return <ErrorLogTemplatePage />
}
