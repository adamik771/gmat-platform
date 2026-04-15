import { cn } from "@/lib/utils"
import { TrendingUp, TrendingDown, Minus } from "lucide-react"

interface SectionProgressProps {
  section: string
  score: number
  maxScore: number
  accuracy: number
  trend: "up" | "down" | "stable"
  trendLabel: string
  className?: string
}

export default function SectionProgress({
  section,
  score,
  maxScore,
  accuracy,
  trend,
  trendLabel,
  className,
}: SectionProgressProps) {
  const percentage = (score / maxScore) * 100

  const TrendIcon =
    trend === "up" ? TrendingUp : trend === "down" ? TrendingDown : Minus
  const trendColor =
    trend === "up" ? "#3ECF8E" : trend === "down" ? "#FF4444" : "#888888"

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
        <div
          className="flex items-center gap-1 text-xs font-medium"
          style={{ color: trendColor }}
        >
          <TrendIcon className="w-3 h-3" />
          {trendLabel}
        </div>
      </div>

      <div className="flex items-baseline gap-1 mb-3">
        <span className="text-2xl font-bold text-[#F0F0F0]">{score}</span>
        <span className="text-sm text-[#555555]">/ {maxScore}</span>
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

      <p className="text-xs text-[#555555]">{accuracy}% accuracy</p>
    </div>
  )
}
