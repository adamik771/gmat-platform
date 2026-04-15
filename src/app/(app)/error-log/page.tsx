"use client"

import { useState } from "react"
import { AlertCircle, CheckCircle, Filter } from "lucide-react"
import { cn } from "@/lib/utils"
import { ErrorType, Section } from "@/types"

interface LogEntry {
  id: string
  date: string
  section: Section
  topic: string
  questionPreview: string
  errorType: ErrorType
  reviewed: boolean
}

const errorLog: LogEntry[] = [
  { id: "1", date: "Today", section: "Quant", topic: "Data Sufficiency", questionPreview: "If x is a positive integer, is x² + 2x + 2 divisible by 4?", errorType: "Conceptual", reviewed: false },
  { id: "2", date: "Today", section: "Verbal", topic: "CR — Assumption", questionPreview: "The argument above assumes which of the following about consumer behavior...", errorType: "Misread", reviewed: false },
  { id: "3", date: "Yesterday", section: "Verbal", topic: "RC — Inference", questionPreview: "According to the passage, which of the following can be inferred about...", errorType: "Strategy", reviewed: false },
  { id: "4", date: "2 days ago", section: "Quant", topic: "Geometry", questionPreview: "In the figure above, triangle ABC has angle A = 45°. If AB = 6, what is BC?", errorType: "Careless", reviewed: true },
  { id: "5", date: "2 days ago", section: "DI", topic: "Multi-Source Reasoning", questionPreview: "Based on the three exhibits, which conclusion is best supported by the data...", errorType: "Time Pressure", reviewed: false },
  { id: "6", date: "3 days ago", section: "Verbal", topic: "SC — Parallelism", questionPreview: "The committee agreed to revise its policy, to draft new guidelines, and that...", errorType: "Conceptual", reviewed: true },
  { id: "7", date: "4 days ago", section: "Quant", topic: "Algebra", questionPreview: "If 2x + 3y = 12 and 4x - y = 8, what is the value of x + y?", errorType: "Careless", reviewed: true },
  { id: "8", date: "5 days ago", section: "DI", topic: "Table Analysis", questionPreview: "Which of the following statements about the data in the table is accurate?", errorType: "Misread", reviewed: false },
]

const errorTypeColors: Record<ErrorType, { color: string; bg: string }> = {
  Conceptual: { color: "#FF4444", bg: "rgba(255,68,68,0.1)" },
  Careless: { color: "#C9A84C", bg: "rgba(201,168,76,0.1)" },
  "Time Pressure": { color: "#888888", bg: "rgba(136,136,136,0.1)" },
  Misread: { color: "#3ECF8E", bg: "rgba(62,207,142,0.1)" },
  Strategy: { color: "#C9A84C", bg: "rgba(201,168,76,0.1)" },
  Other: { color: "#555555", bg: "rgba(85,85,85,0.1)" },
}

const errorPatterns = [
  { type: "Conceptual" as ErrorType, count: 12, pct: 35 },
  { type: "Careless" as ErrorType, count: 9, pct: 26 },
  { type: "Misread" as ErrorType, count: 8, pct: 24 },
  { type: "Time Pressure" as ErrorType, count: 5, pct: 15 },
]

export default function ErrorLogPage() {
  const [sectionFilter, setSectionFilter] = useState<Section | "All">("All")
  const [reviewedFilter, setReviewedFilter] = useState<"all" | "pending" | "reviewed">("all")

  const filtered = errorLog.filter((e) => {
    if (sectionFilter !== "All" && e.section !== sectionFilter) return false
    if (reviewedFilter === "pending" && e.reviewed) return false
    if (reviewedFilter === "reviewed" && !e.reviewed) return false
    return true
  })

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-[#F0F0F0]">Error Log</h1>
        <p className="text-sm text-[#555555] mt-1">34 total mistakes · 18 pending review</p>
      </div>

      {/* Error pattern analysis */}
      <div className="p-5 rounded-xl border border-white/[0.08] bg-[#111111]">
        <p className="text-xs font-semibold uppercase tracking-widest text-[#888888] mb-4">
          Error Pattern Analysis
        </p>
        <div className="grid sm:grid-cols-4 gap-4">
          {errorPatterns.map((pattern) => {
            const config = errorTypeColors[pattern.type]
            return (
              <div
                key={pattern.type}
                className="p-4 rounded-xl border border-white/[0.06]"
                style={{ backgroundColor: "#0F0F0F" }}
              >
                <div
                  className="px-2 py-0.5 rounded text-xs font-medium w-fit mb-3"
                  style={{ backgroundColor: config.bg, color: config.color }}
                >
                  {pattern.type}
                </div>
                <p className="text-xl font-bold text-[#F0F0F0]">{pattern.count}</p>
                <div className="mt-2 h-1 rounded-full bg-white/[0.06] overflow-hidden">
                  <div
                    className="h-full rounded-full"
                    style={{ width: `${pattern.pct}%`, backgroundColor: config.color }}
                  />
                </div>
                <p className="text-xs text-[#555555] mt-1">{pattern.pct}% of errors</p>
              </div>
            )
          })}
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap items-center gap-3">
        <div className="flex items-center gap-1.5 text-xs text-[#555555]">
          <Filter className="w-3.5 h-3.5" />
          Filter by:
        </div>
        <div className="flex gap-2">
          {(["All", "Quant", "Verbal", "DI"] as const).map((s) => (
            <button
              key={s}
              onClick={() => setSectionFilter(s)}
              className={cn(
                "px-3 py-1.5 rounded-lg text-xs font-medium transition-colors",
                sectionFilter === s
                  ? "text-[#0A0A0A]"
                  : "border border-white/[0.08] text-[#888888] hover:text-[#F0F0F0]"
              )}
              style={sectionFilter === s ? { backgroundColor: "#C9A84C" } : {}}
            >
              {s}
            </button>
          ))}
        </div>
        <div className="flex gap-2">
          {(["all", "pending", "reviewed"] as const).map((r) => (
            <button
              key={r}
              onClick={() => setReviewedFilter(r)}
              className={cn(
                "px-3 py-1.5 rounded-lg text-xs font-medium capitalize transition-colors",
                reviewedFilter === r
                  ? "border border-[#C9A84C]/40 text-[#C9A84C]"
                  : "border border-white/[0.08] text-[#888888] hover:text-[#F0F0F0]"
              )}
            >
              {r}
            </button>
          ))}
        </div>
      </div>

      {/* Table */}
      <div className="rounded-xl border border-white/[0.08] bg-[#111111] overflow-hidden">
        {/* Table header */}
        <div
          className="grid grid-cols-12 px-4 py-3 border-b border-white/[0.06] text-xs font-semibold uppercase tracking-widest text-[#555555]"
          style={{ backgroundColor: "#0F0F0F" }}
        >
          <div className="col-span-1">Date</div>
          <div className="col-span-2">Section / Topic</div>
          <div className="col-span-5">Question</div>
          <div className="col-span-2">Error Type</div>
          <div className="col-span-1">Status</div>
          <div className="col-span-1" />
        </div>

        {filtered.map((entry, i) => {
          const config = errorTypeColors[entry.errorType]
          return (
            <div
              key={entry.id}
              className={cn(
                "grid grid-cols-12 px-4 py-3.5 items-center gap-2 hover:bg-white/[0.02] transition-colors",
                i < filtered.length - 1 ? "border-b border-white/[0.04]" : ""
              )}
            >
              <div className="col-span-1 text-xs text-[#555555]">{entry.date}</div>
              <div className="col-span-2">
                <p className="text-xs font-medium text-[#F0F0F0]">{entry.section}</p>
                <p className="text-xs text-[#555555] truncate">{entry.topic}</p>
              </div>
              <div className="col-span-5">
                <p className="text-xs text-[#888888] line-clamp-2">{entry.questionPreview}</p>
              </div>
              <div className="col-span-2">
                <span
                  className="px-2 py-0.5 rounded text-xs font-medium"
                  style={{ backgroundColor: config.bg, color: config.color }}
                >
                  {entry.errorType}
                </span>
              </div>
              <div className="col-span-1">
                {entry.reviewed ? (
                  <CheckCircle className="w-4 h-4" style={{ color: "#3ECF8E" }} />
                ) : (
                  <AlertCircle className="w-4 h-4 text-[#555555]" />
                )}
              </div>
              <div className="col-span-1 flex justify-end">
                <button className="text-xs px-2.5 py-1 rounded border border-white/[0.08] text-[#888888] hover:text-[#F0F0F0] transition-colors">
                  Review
                </button>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
