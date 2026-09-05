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
        "group p-5 rounded-2xl border border-white/[0.06] bg-[#0F0F0F] transition-all duration-300 hover:-translate-y-0.5 hover:border-white/[0.12] hover:shadow-[0_20px_40px_-20px_rgba(201,168,76,0.15)]",
        className
      )}
    >
      <div className="flex items-center justify-between mb-4">
        <span
          className="text-[10px] font-semibold uppercase tracking-[0.22em]"
          style={{ color: "#C9A84C" }}
        >
          {section}
        </span>
        {!isEmpty && trend && trendLabel && (
          <div
            className="flex items-center gap-1 text-[11px] font-medium tracking-tight"
            style={{ color: trendColor }}
          >
            <TrendIcon className="w-3 h-3" />
            {trendLabel}
          </div>
        )}
      </div>

      <div className="flex items-baseline gap-1.5 mb-4">
        {isEmpty ? (
          <>
            <span className="font-display text-3xl font-semibold text-[#888888] tracking-[-0.02em] leading-none tabular-nums">
              —
            </span>
            <span className="text-[13px] text-[#888888] tabular-nums">
              / {maxScore}
            </span>
          </>
        ) : (
          <>
            <span className="font-display text-3xl sm:text-[2rem] font-semibold text-[#F0F0F0] tracking-[-0.02em] leading-none tabular-nums">
              {score}
            </span>
            <span className="text-[13px] text-[#888888] tabular-nums">
              / {maxScore}
            </span>
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

      <p className="text-[12px] text-[#888888] tabular-nums">
        {isEmpty ? "No data yet" : `${accuracy}% accuracy`}
      </p>
    </div>
  )
}
