"use client"

import { AreaChart, Area, ResponsiveContainer, Tooltip } from "recharts"
import { Flame, TrendingUp } from "lucide-react"

const miniData = [
  { v: 590 }, { v: 610 }, { v: 625 }, { v: 638 },
  { v: 650 }, { v: 663 }, { v: 672 }, { v: 680 },
]

export default function HeroDashboardCard() {
  return (
    <div
      className="w-full max-w-sm rounded-2xl border border-white/[0.08] overflow-hidden shadow-2xl"
      style={{
        backgroundColor: "#111111",
        boxShadow: "0 0 80px rgba(201,168,76,0.08), 0 40px 80px rgba(0,0,0,0.5)",
      }}
    >
      {/* Header */}
      <div
        className="px-5 py-4 border-b border-white/[0.06]"
        style={{ backgroundColor: "#0F0F0F" }}
      >
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs text-[#555555]">Current Estimate</p>
            <p className="text-2xl font-bold text-[#F0F0F0]">
              680{" "}
              <span className="text-sm font-normal" style={{ color: "#3ECF8E" }}>
                ↑ +12
              </span>
            </p>
          </div>
          <div
            className="px-2.5 py-1 rounded-lg text-xs font-semibold"
            style={{ backgroundColor: "rgba(201,168,76,0.1)", color: "#C9A84C" }}
          >
            Target: 735
          </div>
        </div>
      </div>

      {/* Chart */}
      <div className="px-5 pt-4 pb-2">
        <p className="text-xs text-[#555555] mb-2">Score Trend (8 weeks)</p>
        <ResponsiveContainer width="100%" height={80}>
          <AreaChart data={miniData} margin={{ top: 0, right: 0, bottom: 0, left: 0 }}>
            <defs>
              <linearGradient id="heroGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#C9A84C" stopOpacity={0.25} />
                <stop offset="95%" stopColor="#C9A84C" stopOpacity={0} />
              </linearGradient>
            </defs>
            <Tooltip
              content={({ active, payload }) =>
                active && payload?.length ? (
                  <div
                    className="px-2 py-1 rounded text-xs font-semibold"
                    style={{ backgroundColor: "#1A1A1A", color: "#C9A84C" }}
                  >
                    {payload[0].value}
                  </div>
                ) : null
              }
            />
            <Area
              type="monotone"
              dataKey="v"
              stroke="#C9A84C"
              strokeWidth={2}
              fill="url(#heroGrad)"
              dot={false}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Streak */}
      <div className="px-5 py-3 border-t border-white/[0.06]">
        <div className="flex items-center gap-2">
          <Flame className="w-4 h-4" style={{ color: "#C9A84C" }} />
          <span className="text-sm font-semibold text-[#F0F0F0]">47-day streak</span>
        </div>
      </div>

      {/* Section scores */}
      <div className="px-5 pb-5 grid grid-cols-3 gap-3">
        {[
          { label: "Quant", code: "Q", score: 88 },
          { label: "Verbal", code: "V", score: 86 },
          { label: "DI", code: "DI", score: 85 },
        ].map((s) => (
          <div
            key={s.code}
            className="p-3 rounded-xl text-center"
            style={{ backgroundColor: "#0F0F0F", border: "1px solid rgba(255,255,255,0.05)" }}
          >
            <p className="text-xs text-[#555555] mb-1">{s.label}</p>
            <p className="text-base font-bold text-[#F0F0F0]">
              {s.code}
              <span style={{ color: "#C9A84C" }}>{s.score}</span>
            </p>
            <div className="mt-1.5 h-1 rounded-full bg-white/[0.06] overflow-hidden">
              <div
                className="h-full rounded-full"
                style={{
                  width: `${s.score}%`,
                  backgroundColor: "#C9A84C",
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
