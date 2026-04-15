"use client"

import Link from "next/link"
import { Target, TrendingUp, Clock, Plus, LineChart, BarChart3 } from "lucide-react"
import EmptyState from "@/components/shared/EmptyState"

export interface PracticeSetData {
  slug: string
  topic: string
  section: "Quant" | "Verbal" | "DI"
  questions: number
}

interface EmptyStatDef {
  label: string
  icon: typeof Target
  color: string
}

const emptyStats: EmptyStatDef[] = [
  { label: "Total questions", icon: Target, color: "#C9A84C" },
  { label: "Overall accuracy", icon: TrendingUp, color: "#3ECF8E" },
  { label: "Avg time / question", icon: Clock, color: "#C9A84C" },
]

export default function PracticeClient({ sets }: { sets: PracticeSetData[] }) {
  const totalQuestions = sets.reduce((acc, set) => acc + set.questions, 0)

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-[#F0F0F0]">Practice</h1>
          <p className="text-sm text-[#555555] mt-1">
            {totalQuestions} questions across {sets.length} sets
          </p>
        </div>
        <button
          className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all hover:opacity-90"
          style={{ backgroundColor: "#C9A84C", color: "#0A0A0A" }}
        >
          <Plus className="w-4 h-4" />
          New Practice Set
        </button>
      </div>

      {/* Stats — blank until progress tracking lands */}
      <div className="grid grid-cols-3 gap-4">
        {emptyStats.map((stat) => {
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
                <p className="text-xl font-bold text-[#555555]">—</p>
                <p className="text-xs text-[#555555]">{stat.label}</p>
              </div>
            </div>
          )
        })}
      </div>

      {/* Charts — empty states until we have session history */}
      <div className="grid lg:grid-cols-2 gap-6">
        <div className="p-5 rounded-xl border border-white/[0.08] bg-[#111111]">
          <h2 className="text-sm font-semibold text-[#888888] mb-4">
            Accuracy by Section
          </h2>
          <EmptyState
            icon={LineChart}
            title="Not enough data yet"
            description="Complete a few practice sets and your weekly accuracy trend will show up here."
            size="sm"
            className="h-[200px]"
          />
        </div>

        <div className="p-5 rounded-xl border border-white/[0.08] bg-[#111111]">
          <h2 className="text-sm font-semibold text-[#888888] mb-4">
            Accuracy by Question Type
          </h2>
          <EmptyState
            icon={BarChart3}
            title="Not enough data yet"
            description="Accuracy by question type will appear here once you've answered a mix of formats."
            size="sm"
            className="h-[200px]"
          />
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
