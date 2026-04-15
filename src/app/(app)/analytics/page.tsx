"use client"

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts"
import { TrendingUp, TrendingDown } from "lucide-react"

const scoreTrend = [
  { date: "Apr W1", score: 565, quant: 56, verbal: 55, di: 58 },
  { date: "Apr W3", score: 590, quant: 60, verbal: 57, di: 61 },
  { date: "May W1", score: 610, quant: 63, verbal: 59, di: 63 },
  { date: "May W3", score: 628, quant: 66, verbal: 62, di: 65 },
  { date: "Jun W1", score: 645, quant: 69, verbal: 64, di: 67 },
  { date: "Jun W3", score: 660, quant: 72, verbal: 66, di: 68 },
  { date: "Jul W1", score: 672, quant: 74, verbal: 68, di: 70 },
  { date: "Jul W3", score: 680, quant: 76, verbal: 70, di: 72 },
]

const topicAccuracy = [
  { topic: "Number Props", accuracy: 82, attempts: 45 },
  { topic: "Algebra", accuracy: 78, attempts: 52 },
  { topic: "Geometry", accuracy: 71, attempts: 38 },
  { topic: "DS Strategy", accuracy: 74, attempts: 60 },
  { topic: "CR Assumption", accuracy: 65, attempts: 48 },
  { topic: "CR Strengthen", accuracy: 70, attempts: 35 },
  { topic: "RC Inference", accuracy: 68, attempts: 40 },
  { topic: "SC Grammar", accuracy: 66, attempts: 55 },
  { topic: "Table Analysis", accuracy: 74, attempts: 28 },
  { topic: "MSR", accuracy: 71, attempts: 22 },
]

const pacingData = [
  { type: "PS", avg: 1.8, target: 2.0, over: false },
  { type: "DS", avg: 2.1, target: 2.0, over: true },
  { type: "CR", avg: 1.6, target: 1.75, over: false },
  { type: "RC", avg: 3.2, target: 3.0, over: true },
  { type: "SC", avg: 1.4, target: 1.5, over: false },
  { type: "DI", avg: 2.8, target: 2.5, over: true },
]

export default function AnalyticsPage() {
  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-[#F0F0F0]">Analytics</h1>
        <p className="text-sm text-[#555555] mt-1">Your complete performance data</p>
      </div>

      {/* Score trajectory */}
      <div className="p-6 rounded-xl border border-white/[0.08] bg-[#111111]">
        <h2 className="text-sm font-semibold text-[#888888] mb-1">Score Trajectory</h2>
        <p className="text-xs text-[#555555] mb-5">565 → 680 over 8 weeks</p>
        <ResponsiveContainer width="100%" height={220}>
          <LineChart data={scoreTrend} margin={{ top: 5, right: 5, bottom: 0, left: -10 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.04)" />
            <XAxis dataKey="date" tick={{ fill: "#555555", fontSize: 11 }} axisLine={false} tickLine={false} />
            <YAxis domain={[540, 700]} tick={{ fill: "#555555", fontSize: 11 }} axisLine={false} tickLine={false} />
            <Tooltip
              contentStyle={{ backgroundColor: "#1A1A1A", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 8, fontSize: 12 }}
              labelStyle={{ color: "#888888" }}
            />
            <Line type="monotone" dataKey="score" stroke="#C9A84C" strokeWidth={2.5} dot={{ fill: "#C9A84C", r: 3 }} name="Total Score" />
            <Line type="monotone" dataKey="quant" stroke="#888888" strokeWidth={1.5} dot={false} name="Quant" strokeDasharray="4 4" />
            <Line type="monotone" dataKey="verbal" stroke="#555555" strokeWidth={1.5} dot={false} name="Verbal" strokeDasharray="4 4" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Topic accuracy heatmap */}
      <div className="p-6 rounded-xl border border-white/[0.08] bg-[#111111]">
        <h2 className="text-sm font-semibold text-[#888888] mb-5">Accuracy by Topic</h2>
        <div className="space-y-2">
          {topicAccuracy.map((t) => (
            <div key={t.topic} className="flex items-center gap-4">
              <p className="text-xs text-[#888888] w-36 flex-shrink-0">{t.topic}</p>
              <div className="flex-1 h-2 rounded-full bg-white/[0.06] overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-700"
                  style={{
                    width: `${t.accuracy}%`,
                    backgroundColor:
                      t.accuracy >= 75 ? "#3ECF8E" : t.accuracy >= 65 ? "#C9A84C" : "#FF4444",
                  }}
                />
              </div>
              <div className="flex items-center gap-2 w-20 flex-shrink-0 justify-end">
                <span
                  className="text-sm font-semibold"
                  style={{
                    color: t.accuracy >= 75 ? "#3ECF8E" : t.accuracy >= 65 ? "#C9A84C" : "#FF4444",
                  }}
                >
                  {t.accuracy}%
                </span>
                <span className="text-xs text-[#444444]">({t.attempts})</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pacing + Strengths/Weaknesses */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Pacing */}
        <div className="p-6 rounded-xl border border-white/[0.08] bg-[#111111]">
          <h2 className="text-sm font-semibold text-[#888888] mb-1">Time per Question (min)</h2>
          <p className="text-xs text-[#555555] mb-5">Avg vs. target</p>
          <div className="space-y-3">
            {pacingData.map((p) => (
              <div key={p.type} className="flex items-center justify-between">
                <span className="text-xs text-[#888888] w-10">{p.type}</span>
                <div className="flex-1 mx-4 h-1.5 rounded-full bg-white/[0.06] overflow-hidden">
                  <div
                    className="h-full rounded-full"
                    style={{
                      width: `${(p.avg / 3.5) * 100}%`,
                      backgroundColor: p.over ? "#FF4444" : "#3ECF8E",
                    }}
                  />
                </div>
                <div className="flex items-center gap-2">
                  <span
                    className="text-xs font-medium"
                    style={{ color: p.over ? "#FF4444" : "#3ECF8E" }}
                  >
                    {p.avg}m
                  </span>
                  {p.over ? (
                    <TrendingUp className="w-3 h-3" style={{ color: "#FF4444" }} />
                  ) : (
                    <TrendingDown className="w-3 h-3" style={{ color: "#3ECF8E" }} />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Strengths / Weaknesses */}
        <div className="p-6 rounded-xl border border-white/[0.08] bg-[#111111]">
          <h2 className="text-sm font-semibold text-[#888888] mb-5">
            Strengths & Weaknesses
          </h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p
                className="text-xs font-semibold uppercase tracking-widest mb-3"
                style={{ color: "#3ECF8E" }}
              >
                Strengths
              </p>
              {[
                { topic: "Number Props", pct: 82 },
                { topic: "Algebra", pct: 78 },
                { topic: "DS Strategy", pct: 74 },
              ].map((s) => (
                <div key={s.topic} className="flex items-center justify-between mb-2">
                  <span className="text-xs text-[#888888]">{s.topic}</span>
                  <span className="text-xs font-semibold" style={{ color: "#3ECF8E" }}>
                    {s.pct}%
                  </span>
                </div>
              ))}
            </div>
            <div>
              <p
                className="text-xs font-semibold uppercase tracking-widest mb-3"
                style={{ color: "#FF4444" }}
              >
                Weaknesses
              </p>
              {[
                { topic: "CR Assumption", pct: 65 },
                { topic: "SC Grammar", pct: 66 },
                { topic: "RC Inference", pct: 68 },
              ].map((w) => (
                <div key={w.topic} className="flex items-center justify-between mb-2">
                  <span className="text-xs text-[#888888]">{w.topic}</span>
                  <span className="text-xs font-semibold" style={{ color: "#FF4444" }}>
                    {w.pct}%
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
