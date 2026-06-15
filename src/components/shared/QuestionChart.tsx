"use client"

import dynamic from "next/dynamic"
import type { ChartSpec } from "@/lib/chart-spec"

/**
 * Lazy boundary for the recharts-backed chart renderer (~97KB gzipped).
 *
 * QuestionChart is statically imported by every question runner
 * (practice/mock/error-log/offline-drill), but only Graphics-Interpretation
 * questions actually carry a `chartSpec`. Loading the renderer via next/dynamic
 * keeps the recharts payload out of those routes' hydration bundle until a
 * chart is genuinely rendered. The real implementation lives in
 * QuestionChartInner.tsx (unchanged); this wrapper just defers it.
 */
const QuestionChartInner = dynamic(() => import("./QuestionChartInner"), {
  ssr: false,
  loading: () => (
    <div
      className="my-4 rounded-xl border"
      style={{
        borderColor: "rgba(255,255,255,0.08)",
        backgroundColor: "#0D0D0D",
        height: 300,
      }}
      aria-hidden
    />
  ),
})

export default function QuestionChart({ spec }: { spec: ChartSpec }) {
  return <QuestionChartInner spec={spec} />
}
