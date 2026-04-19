"use client"

import { useState } from "react"
import Link from "next/link"
import { CheckCircle, PlayCircle, Clock, Circle } from "lucide-react"
import { cn } from "@/lib/utils"

type FilterSection = "All" | "Quant" | "Verbal" | "DI" | "General"

export interface LessonCardData {
  slug: string
  module: number
  title: string
  description: string
  section: "Quant" | "Verbal" | "DI" | "General"
  duration: number
  status: "done" | "current" | "upcoming"
}

export default function LessonsClient({ lessons }: { lessons: LessonCardData[] }) {
  const [filter, setFilter] = useState<FilterSection>("All")

  const filters: FilterSection[] = ["All", "General", "Quant", "Verbal", "DI"]

  const filtered = filter === "All" ? lessons : lessons.filter((lesson) => lesson.section === filter)

  const doneCount = lessons.filter((lesson) => lesson.status === "done").length
  const percentComplete = lessons.length > 0 ? Math.round((doneCount / lessons.length) * 100) : 0

  return (
    <div className="max-w-5xl mx-auto space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-[#F0F0F0]">Lessons</h1>
          <p className="text-sm text-[#555555] mt-1">
            {doneCount} of {lessons.length} completed · {percentComplete}% done
          </p>
        </div>

        <div className="flex gap-2 flex-wrap">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={cn(
                "px-3 py-1.5 rounded-lg text-xs font-medium transition-colors",
                filter === f
                  ? "text-[#0A0A0A]"
                  : "border border-white/[0.08] text-[#888888] hover:text-[#F0F0F0]"
              )}
              style={filter === f ? { backgroundColor: "#C9A84C" } : {}}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="p-8 rounded-xl border border-white/[0.08] bg-[#111111] text-center">
          <p className="text-sm text-[#888888]">No lessons match this filter.</p>
        </div>
      ) : (
        <div className="grid gap-3">
          {filtered.map((lesson) => {
            const moduleLabel = `Module ${String(lesson.module).padStart(2, "0")}`
            const cardClassName = cn(
              "flex items-start gap-4 p-5 rounded-xl border transition-colors",
              lesson.status === "current"
                ? "border-[#C9A84C]/30 bg-[#C9A84C]/[0.03]"
                : "border-white/[0.08] bg-[#111111] hover:border-white/[0.14]"
            )

            const ctaLabel =
              lesson.status === "done"
                ? "Review"
                : lesson.status === "current"
                ? "Start"
                : "Preview"

            return (
              <Link
                key={lesson.slug}
                href={`/lessons/${lesson.slug}`}
                className={cardClassName}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{
                    backgroundColor:
                      lesson.status === "done"
                        ? "rgba(62,207,142,0.1)"
                        : lesson.status === "current"
                        ? "rgba(201,168,76,0.1)"
                        : "rgba(255,255,255,0.04)",
                  }}
                >
                  {lesson.status === "done" ? (
                    <CheckCircle className="w-5 h-5" style={{ color: "#3ECF8E" }} />
                  ) : lesson.status === "current" ? (
                    <PlayCircle className="w-5 h-5" style={{ color: "#C9A84C" }} />
                  ) : (
                    <Circle className="w-4 h-4 text-[#555555]" />
                  )}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span className="text-xs font-semibold uppercase tracking-widest text-[#555555]">
                      {moduleLabel}
                    </span>
                    <span
                      className="px-2 py-0.5 rounded text-[10px] uppercase tracking-wide"
                      style={{
                        backgroundColor: "rgba(201,168,76,0.08)",
                        color: "#C9A84C",
                      }}
                    >
                      {lesson.section}
                    </span>
                  </div>
                  <p
                    className={cn(
                      "text-base font-semibold truncate",
                      lesson.status === "current"
                        ? "text-[#C9A84C]"
                        : lesson.status === "done"
                        ? "text-[#A8A8A8]"
                        : "text-[#F0F0F0]"
                    )}
                  >
                    {lesson.title}
                  </p>
                  <p className="text-xs text-[#888888] mt-1 line-clamp-2">
                    {lesson.description}
                  </p>
                  <div className="flex items-center gap-1.5 mt-2">
                    <Clock className="w-3 h-3 text-[#444444]" />
                    <span className="text-xs text-[#555555]">{lesson.duration} min</span>
                  </div>
                </div>

                <span
                  className={cn(
                    "flex-shrink-0 px-3 py-1.5 rounded-lg text-xs font-medium",
                    lesson.status === "current"
                      ? "text-[#0A0A0A]"
                      : "border border-white/[0.1] text-[#888888]"
                  )}
                  style={
                    lesson.status === "current"
                      ? { backgroundColor: "#C9A84C" }
                      : {}
                  }
                >
                  {ctaLabel}
                </span>
              </Link>
            )
          })}
        </div>
      )}
    </div>
  )
}
