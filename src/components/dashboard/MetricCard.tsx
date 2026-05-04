import { cn } from "@/lib/utils"
import { LucideIcon, TrendingUp, TrendingDown, Minus } from "lucide-react"
import PulseNumber from "./PulseNumber"

interface MetricCardProps {
  label: string
  /** Pass `null` to render an empty placeholder ("—") with no trend indicator. */
  value: string | number | null
  unit?: string
  icon: LucideIcon
  trend?: "up" | "down" | "stable"
  trendValue?: string
  className?: string
  /** When true, the number does a single subtle pulse on mount (fires once,
   *  not a loop). Gated by prefers-reduced-motion. Intended for streak-style
   *  gamification cues where the value itself earns a small celebration. */
  pulseOnMount?: boolean
}

export default function MetricCard({
  label,
  value,
  unit,
  icon: Icon,
  trend,
  trendValue,
  className,
  pulseOnMount,
}: MetricCardProps) {
  const TrendIcon =
    trend === "up" ? TrendingUp : trend === "down" ? TrendingDown : Minus

  const trendColor =
    trend === "up"
      ? "#3ECF8E"
      : trend === "down"
      ? "#FF4444"
      : "#888888"

  const isEmpty = value === null

  return (
    <div
      className={cn(
        "group p-5 rounded-2xl border border-white/[0.06] bg-[#0F0F0F] transition-all duration-300 hover:-translate-y-0.5 hover:border-white/[0.12] hover:shadow-[0_20px_40px_-20px_rgba(201,168,76,0.15)]",
        className
      )}
    >
      <div className="flex items-start justify-between mb-5">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center"
          style={{ backgroundColor: "rgba(201, 168, 76, 0.1)" }}
        >
          <Icon className="w-4 h-4" style={{ color: "#C9A84C" }} />
        </div>
        {!isEmpty && trend && trendValue && (
          <div
            className="flex items-center gap-1 text-[11px] font-medium tracking-tight"
            style={{ color: trendColor }}
          >
            <TrendIcon className="w-3 h-3" />
            {trendValue}
          </div>
        )}
      </div>
      <div className="flex items-baseline gap-1.5">
        {isEmpty ? (
          <span className="font-display text-3xl font-semibold text-[#555555] tracking-[-0.02em] leading-none tabular-nums">
            —
          </span>
        ) : (
          <>
            {pulseOnMount ? (
              <PulseNumber value={value} />
            ) : (
              <span className="font-display text-3xl sm:text-[2rem] font-semibold text-[#F0F0F0] tracking-[-0.02em] leading-none tabular-nums">
                {value}
              </span>
            )}
            {unit && (
              <span className="text-[13px] text-[#888888] font-medium">
                {unit}
              </span>
            )}
          </>
        )}
      </div>
      <p className="text-[11px] uppercase tracking-[0.18em] font-semibold text-[#888888] mt-3">
        {label}
      </p>
    </div>
  )
}
