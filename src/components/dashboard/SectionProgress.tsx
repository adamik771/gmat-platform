import { cn } from "@/lib/utils"
import { TrendingUp, TrendingDown, Minus } from "lucide-react"

interface SectionProgressProps {
  section: string
  /** Pass `null` (or set `empty`) to render an empty placeholder. */
  score?: number | null
  maxScore?: number
  accuracy?: number | null
  trend?: "up" | "down" | "stable"
  trendLabel?: string
  empty?: boolean
  className?: string
}

export default function SectionProgress({
  section,
  score = null,
  maxScore = 90,
  accuracy = null,
  trend,
  trendLabel,
  empty = false,
  className,
}: SectionProgressProps) {
  const isEmpty = empty || score === null || accuracy === null

  const TrendIcon =
    trend === "up" ? TrendingUp : trend === "down" ? TrendingDown : Minus
  const trendColor =
    trend === "up" ? "#3ECF8E" : trend === "down" ? "#FF4444" : "#888888"
  const percentage = isEmpty ? 0 : ((score ?? 0) / maxScore) * 100

  return (
    <div
      className={cn(
        "p-5 rounded-xl border border-white/[0.08] bg-[#111111]",
        className
      )}
    >
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs font-semibold uppercase tracking-widest text-[#888888]">
          {section}
        </span>
        {!isEmpty && trend && trendLabel && (
          <div
            className="flex items-center gap-1 text-xs font-medium"
            style={{ color: trendColor }}
          >
            <TrendIcon className="w-3 h-3" />
            {trendLabel}
          </div>
        )}
      </div>

      <div className="flex items-baseline gap-1 mb-3">
        {isEmpty ? (
          <>
            <span className="text-2xl font-bold text-[#555555]">—</span>
            <span className="text-sm text-[#444444]">/ {maxScore}</span>
          </>
        ) : (
          <>
            <span className="text-2xl font-bold text-[#F0F0F0]">{score}</span>
            <span className="text-sm text-[#555555]">/ {maxScore}</span>
          </>
        )}
      </div>

      {/* Progress bar */}
      <div className="h-1.5 rounded-full bg-white/[0.06] overflow-hidden mb-3">
        <div
          className="h-full rounded-full transition-all duration-700"
          style={{
            width: `${percentage}%`,
            backgroundColor: "#C9A84C",
          }}
        />
      </div>

      <p className="text-xs text-[#555555]">
        {isEmpty ? "No data yet" : `${accuracy}% accuracy`}
      </p>
    </div>
  )
}
