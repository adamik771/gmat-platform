"use client"

import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"
import type { ScoreTrendPoint } from "./AnalyticsClient"

// Extracted so it can be lazy-loaded — recharts (~97KB gz) is the single
// heaviest dependency on /analytics (the app's largest route). Keeping it in
// its own chunk means the rest of the analytics page (topic tables, pacing,
// calibration) renders and hydrates before the chart library arrives.
export default function ScoreTrajectoryChart({
  data,
  domainMin,
  domainMax,
}: {
  data: ScoreTrendPoint[]
  domainMin: number
  domainMax: number
}) {
  return (
    <ResponsiveContainer width="100%" height={240}>
      <LineChart data={data} margin={{ top: 5, right: 5, bottom: 0, left: -10 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.04)" />
        <XAxis
          dataKey="weekLabel"
          tick={{ fill: "#888888", fontSize: 11 }}
          axisLine={false}
          tickLine={false}
        />
        <YAxis
          domain={[domainMin, domainMax]}
          tick={{ fill: "#888888", fontSize: 11 }}
          axisLine={false}
          tickLine={false}
        />
        <Tooltip
          contentStyle={{
            backgroundColor: "#0A0A0A",
            border: "1px solid rgba(201,168,76,0.2)",
            borderRadius: 12,
            fontSize: 12,
          }}
          labelStyle={{ color: "#C0C0C0" }}
          formatter={(value, name) => {
            const label = String(name)
            if (value === null || value === undefined) return ["—", label]
            if (label === "Total Score") return [String(value), label]
            return [`${value}%`, label]
          }}
        />
        <Line
          type="monotone"
          dataKey="total"
          stroke="#C9A84C"
          strokeWidth={2.5}
          dot={{ fill: "#C9A84C", r: 3 }}
          name="Total Score"
          connectNulls
        />
        <Line
          type="monotone"
          dataKey="quant"
          stroke="#888888"
          strokeWidth={1.5}
          dot={false}
          name="Quant"
          strokeDasharray="4 4"
          connectNulls
        />
        <Line
          type="monotone"
          dataKey="verbal"
          stroke="#555555"
          strokeWidth={1.5}
          dot={false}
          name="Verbal"
          strokeDasharray="4 4"
          connectNulls
        />
      </LineChart>
    </ResponsiveContainer>
  )
}
