"use client"

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts"
import { LineChart } from "lucide-react"
import EmptyState from "@/components/shared/EmptyState"

export interface ScoreDataPoint {
  week: string
  score: number
}

interface CustomTooltipProps {
  active?: boolean
  payload?: Array<{ value: number }>
  label?: string
}

function CustomTooltip({ active, payload, label }: CustomTooltipProps) {
  if (active && payload && payload.length) {
    return (
      <div className="bg-[#1A1A1A] border border-white/[0.08] rounded-lg px-3 py-2 text-xs">
        <p className="text-[#888888] mb-1">{label}</p>
        <p className="font-semibold" style={{ color: "#C9A84C" }}>
          {payload[0].value}
        </p>
      </div>
    )
  }
  return null
}

interface ScoreChartProps {
  height?: number
  /** Defaults to an empty array, which renders an inline empty-state card. */
  data?: ScoreDataPoint[]
}

export default function ScoreChart({ height = 160, data = [] }: ScoreChartProps) {
  if (data.length === 0) {
    return (
      <div style={{ height }}>
        <EmptyState
          icon={LineChart}
          title="No score data yet"
          description="Your score trend will appear once you log a few practice sessions."
          size="sm"
          className="h-full"
        />
      </div>
    )
  }

  return (
    <ResponsiveContainer width="100%" height={height}>
      <AreaChart data={data} margin={{ top: 5, right: 5, bottom: 0, left: -20 }}>
        <defs>
          <linearGradient id="scoreGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#C9A84C" stopOpacity={0.2} />
            <stop offset="95%" stopColor="#C9A84C" stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.04)" />
        <XAxis
          dataKey="week"
          tick={{ fill: "#555555", fontSize: 11 }}
          axisLine={false}
          tickLine={false}
        />
        <YAxis
          domain={[560, 720]}
          tick={{ fill: "#555555", fontSize: 11 }}
          axisLine={false}
          tickLine={false}
        />
        <Tooltip content={<CustomTooltip />} />
        <Area
          type="monotone"
          dataKey="score"
          stroke="#C9A84C"
          strokeWidth={2}
          fill="url(#scoreGradient)"
          dot={false}
          activeDot={{ r: 4, fill: "#C9A84C", stroke: "#0A0A0A", strokeWidth: 2 }}
        />
      </AreaChart>
    </ResponsiveContainer>
  )
}
