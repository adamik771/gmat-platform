"use client"

import Link from "next/link"
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from "recharts"
import { Target, TrendingUp, Clock, Plus } from "lucide-react"

// Fake user-progress data — kept in place until real progress tracking lands.
const accuracyTrend = [
  { week: "Wk1", quant: 58, verbal: 55, di: 60 },
  { week: "Wk2", quant: 62, verbal: 57, di: 63 },
  { week: "Wk3", quant: 66, verbal: 60, di: 65 },
  { week: "Wk4", quant: 69, verbal: 63, di: 66 },
  { week: "Wk5", quant: 72, verbal: 65, di: 68 },
  { week: "Wk6", quant: 74, verbal: 67, di: 70 },
  { week: "Wk7", quant: 76, verbal: 69, di: 71 },
  { week: "Wk8", quant: 76, verbal: 70, di: 72 },
]

const byType = [
  { type: "PS", accuracy: 78 },
  { type: "DS", accuracy: 74 },
  { type: "CR", accuracy: 68 },
  { type: "RC", accuracy: 72 },
  { type: "SC", accuracy: 66 },
  { type: "DI", accuracy: 72 },
]

export interface PracticeSetData {
  slug: string
  topic: string
  section: "Quant" | "Verbal" | "DI"
  questions: number
}

export default function PracticeClient({ sets }: { sets: PracticeSetData[] }) {
  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-[#F0F0F0]">Practice</h1>
          <p className="text-sm text-[#555555] mt-1">142 questions this week</p>
        </div>
        <button
          className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all hover:opacity-90"
          style={{ backgroundColor: "#C9A84C", color: "#0A0A0A" }}
        >
          <Plus className="w-4 h-4" />
          New Practice Set
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4">
        {[
          { label: "Total questions", value: "1,247", icon: Target, color: "#C9A84C" },
          { label: "Overall accuracy", value: "73%", icon: TrendingUp, color: "#3ECF8E" },
          { label: "Avg time / question", value: "1m 52s", icon: Clock, color: "#C9A84C" },
        ].map((stat) => {
          const Icon = stat.icon
          return (
            <div
              key={stat.label}
              className="p-5 rounded-xl border border-white/[0.08] bg-[#111111] flex items-center gap-3"
            >
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: `${stat.color}15` }}
              >
                <Icon className="w-4 h-4" style={{ color: stat.color }} />
              </div>
              <div>
                <p className="text-xl font-bold text-[#F0F0F0]">{stat.value}</p>
                <p className="text-xs text-[#555555]">{stat.label}</p>
              </div>
            </div>
          )
        })}
      </div>

      {/* Charts */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Accuracy trend */}
        <div className="p-5 rounded-xl border border-white/[0.08] bg-[#111111]">
          <h2 className="text-sm font-semibold text-[#888888] mb-4">
            Accuracy by Section (8 weeks)
          </h2>
          <ResponsiveContainer width="100%" height={200}>
            <AreaChart data={accuracyTrend} margin={{ top: 5, right: 5, bottom: 0, left: -20 }}>
              <defs>
                <linearGradient id="quantGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#C9A84C" stopOpacity={0.15} />
                  <stop offset="95%" stopColor="#C9A84C" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="verbalGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3ECF8E" stopOpacity={0.15} />
                  <stop offset="95%" stopColor="#3ECF8E" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.04)" />
              <XAxis dataKey="week" tick={{ fill: "#555555", fontSize: 11 }} axisLine={false} tickLine={false} />
              <YAxis domain={[50, 85]} tick={{ fill: "#555555", fontSize: 11 }} axisLine={false} tickLine={false} />
              <Tooltip
                contentStyle={{ backgroundColor: "#1A1A1A", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 8, fontSize: 12 }}
                labelStyle={{ color: "#888888" }}
              />
              <Area type="monotone" dataKey="quant" stroke="#C9A84C" strokeWidth={2} fill="url(#quantGrad)" name="Quant" dot={false} />
              <Area type="monotone" dataKey="verbal" stroke="#3ECF8E" strokeWidth={2} fill="url(#verbalGrad)" name="Verbal" dot={false} />
              <Area type="monotone" dataKey="di" stroke="#888888" strokeWidth={1.5} fill="none" name="DI" dot={false} />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* By question type */}
        <div className="p-5 rounded-xl border border-white/[0.08] bg-[#111111]">
          <h2 className="text-sm font-semibold text-[#888888] mb-4">Accuracy by Question Type</h2>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={byType} margin={{ top: 5, right: 5, bottom: 0, left: -20 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.04)" />
              <XAxis dataKey="type" tick={{ fill: "#555555", fontSize: 11 }} axisLine={false} tickLine={false} />
              <YAxis domain={[50, 90]} tick={{ fill: "#555555", fontSize: 11 }} axisLine={false} tickLine={false} />
              <Tooltip
                contentStyle={{ backgroundColor: "#1A1A1A", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 8, fontSize: 12 }}
                labelStyle={{ color: "#888888" }}
              />
              <Bar dataKey="accuracy" fill="#C9A84C" radius={[4, 4, 0, 0]} name="Accuracy %" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Available practice sets */}
      <div>
        <h2 className="text-sm font-semibold uppercase tracking-widest text-[#888888] mb-4">
          Practice Sets
        </h2>
        <div className="rounded-xl border border-white/[0.08] bg-[#111111] overflow-hidden">
          {sets.map((set, i) => (
            <div
              key={set.slug}
              className={`flex items-center justify-between p-4 hover:bg-white/[0.02] transition-colors ${
                i < sets.length - 1 ? "border-b border-white/[0.05]" : ""
              }`}
            >
              <div className="flex items-center gap-3">
                <div
                  className="px-2 py-0.5 rounded text-xs font-medium"
                  style={{ backgroundColor: "rgba(201,168,76,0.1)", color: "#C9A84C" }}
                >
                  {set.section}
                </div>
                <div>
                  <p className="text-sm font-medium text-[#F0F0F0]">{set.topic}</p>
                  <p className="text-xs text-[#555555]">{set.questions} questions</p>
                </div>
              </div>
              <Link
                href={`/practice/session/${set.slug}`}
                className="text-xs px-3 py-1.5 rounded-lg font-medium transition-all hover:opacity-90"
                style={{ backgroundColor: "#C9A84C", color: "#0A0A0A" }}
              >
                Start
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
