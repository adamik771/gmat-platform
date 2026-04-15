import { cn } from "@/lib/utils"
import { LucideIcon, TrendingUp, TrendingDown, Minus } from "lucide-react"

interface MetricCardProps {
  label: string
  value: string | number
  unit?: string
  icon: LucideIcon
  trend?: "up" | "down" | "stable"
  trendValue?: string
  className?: string
}

export default function MetricCard({
  label,
  value,
  unit,
  icon: Icon,
  trend,
  trendValue,
  className,
}: MetricCardProps) {
  const TrendIcon =
    trend === "up" ? TrendingUp : trend === "down" ? TrendingDown : Minus

  const trendColor =
    trend === "up"
      ? "#3ECF8E"
      : trend === "down"
      ? "#FF4444"
      : "#888888"

  return (
    <div
      className={cn(
        "p-5 rounded-xl border border-white/[0.08] bg-[#111111]",
        className
      )}
    >
      <div className="flex items-start justify-between mb-4">
        <div
          className="w-9 h-9 rounded-lg flex items-center justify-center"
          style={{ backgroundColor: "rgba(201, 168, 76, 0.1)" }}
        >
          <Icon className="w-4 h-4" style={{ color: "#C9A84C" }} />
        </div>
        {trend && trendValue && (
          <div
            className="flex items-center gap-1 text-xs font-medium"
            style={{ color: trendColor }}
          >
            <TrendIcon className="w-3 h-3" />
            {trendValue}
          </div>
        )}
      </div>
      <div className="flex items-baseline gap-1">
        <span className="text-2xl font-bold text-[#F0F0F0]">{value}</span>
        {unit && <span className="text-sm text-[#888888]">{unit}</span>}
      </div>
      <p className="text-xs text-[#555555] mt-1">{label}</p>
    </div>
  )
}
