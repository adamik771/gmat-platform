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
import { withMissingWeeks } from "./presentation"

// Extracted so it can be lazy-loaded — recharts (~97KB gz) is the single
// heaviest dependency on /analytics (the app's largest route). Keeping it in
// its own chunk means the rest of the analytics page (topic tables, pacing,
// calibration) renders and hydrates before the chart library arrives.
export default function ScoreTrajectoryChart({
  data,
}: {
  data: ScoreTrendPoint[]
}) {
  return (
    <ResponsiveContainer width="100%" height={240}>
      <LineChart data={withMissingWeeks(data)} margin={{ top: 5, right: 5, bottom: 0, left: -10 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.04)" />
        <XAxis
          dataKey="weekLabel"
          tick={{ fill: "#B9B7AE", fontSize: 12 }}
          axisLine={false}
          tickLine={false}
        />
        <YAxis
          domain={[0, 100]}
          tick={{ fill: "#B9B7AE", fontSize: 12 }}
          tickFormatter={(value) => `${value}%`}
          axisLine={false}
          tickLine={false}
        />
        <Tooltip
          contentStyle={{
            backgroundColor: "#0A0A0A",
            border: "1px solid rgba(201,168,76,0.2)",
            borderRadius: 8,
            fontSize: 12,
          }}
          labelStyle={{ color: "#C0C0C0" }}
          formatter={(value, name) => {
            const label = String(name)
            if (value === null || value === undefined) return ["—", label]
            return [`${value}%`, label]
          }}
        />
        <Line
          type="monotone"
          dataKey="overallAccuracy"
          stroke="#C9A84C"
          strokeWidth={2.5}
          dot={{ fill: "#C9A84C", r: 3 }}
          name="Overall"
          connectNulls={false}
        />
        <Line
          type="monotone"
          dataKey="quant"
          stroke="#B9B7AE"
          strokeWidth={1.5}
          dot={{ r: 2 }}
          name="Quant"
          strokeDasharray="4 4"
          connectNulls={false}
        />
        <Line
          type="monotone"
          dataKey="di"
          stroke="#3ECF8E"
          strokeWidth={1.5}
          dot={{ r: 2 }}
          name="Data Insights"
          strokeDasharray="4 4"
          connectNulls={false}
        />
        <Line
          type="monotone"
          dataKey="verbal"
          stroke="#6FB5F6"
          strokeWidth={1.5}
          dot={{ r: 2 }}
          name="Verbal"
          strokeDasharray="4 4"
          connectNulls={false}
        />
      </LineChart>
    </ResponsiveContainer>
  )
}
