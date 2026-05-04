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

const EYEBROW = "text-[10px] font-semibold uppercase tracking-[0.22em] text-[#C9A84C]"

export default function LessonsClient({ lessons }: { lessons: LessonCardData[] }) {
  const [filter, setFilter] = useState<FilterSection>("All")

  const filters: FilterSection[] = ["All", "General", "Quant", "Verbal", "DI"]

  const filtered = filter === "All" ? lessons : lessons.filter((lesson) => lesson.section === filter)

  const doneCount = lessons.filter((lesson) => lesson.status === "done").length
  const percentComplete = lessons.length > 0 ? Math.round((doneCount / lessons.length) * 100) : 0

  return (
    <div className="max-w-5xl mx-auto space-y-10">
      <section className="relative overflow-hidden rounded-2xl border border-white/[0.06] bg-[#0A0A0A] px-6 py-10 sm:px-10 sm:py-12">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 75% 55% at 50% -10%, rgba(201,168,76,0.12) 0%, transparent 60%)",
          }}
          aria-hidden
        />
        <div
          className="absolute inset-0 pointer-events-none bg-grain opacity-[0.025] mix-blend-overlay"
          aria-hidden
        />
        <div className="relative flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className={EYEBROW + " mb-4"}>Lesson Library</p>
            <h1 className="font-display text-3xl sm:text-5xl font-semibold text-[#F0F0F0] tracking-[-0.02em] leading-[1.05]">
              The original{" "}
              <span className="font-display-italic" style={{ color: "#C9A84C" }}>
                syllabus.
              </span>
            </h1>
            <p className="mt-4 text-[15px] text-[#C0C0C0] leading-[1.75]">
              Eight progressive modules — the long-form companion to the
              chapter reader. Read linearly or jump around; everything stays
              unlocked.
            </p>
          </div>
          <div className="sm:text-right flex-shrink-0">
            <p className={EYEBROW + " mb-2"}>Progress</p>
            <p className="font-display text-4xl font-semibold text-[#F0F0F0] tabular-nums leading-none">
              {doneCount}
              <span className="text-xl font-normal text-[#555555]">
                {" "}
                / {lessons.length}
              </span>
            </p>
            <p className="text-[13px] text-[#888888] mt-2 tabular-nums">
              {percentComplete}% complete
            </p>
          </div>
        </div>
      </section>

      <div className="flex items-center gap-2 flex-wrap">
        <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#555555] mr-1">
          Filter
        </p>
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={cn(
              "px-3.5 py-1.5 rounded-xl text-xs font-medium tracking-tight transition-all",
              filter === f
                ? "text-[#0A0A0A]"
                : "border border-white/[0.08] text-[#888888] hover:text-[#F0F0F0] hover:border-white/[0.16]"
            )}
            style={filter === f ? { backgroundColor: "#C9A84C" } : {}}
          >
            {f}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <div className="p-10 rounded-2xl border border-white/[0.06] bg-[#0D0D0D] text-center">
          <p className="text-[15px] text-[#888888]">No lessons match this filter.</p>
        </div>
      ) : (
        <div className="space-y-3">
          {filtered.map((lesson) => {
            const moduleLabel = String(lesson.module).padStart(2, "0")
            const isCurrent = lesson.status === "current"
            const isDone = lesson.status === "done"

            const ctaLabel = isDone ? "Review" : isCurrent ? "Start" : "Preview"

            return (
              <Link
                key={lesson.slug}
                href={`/lessons/${lesson.slug}`}
                className={cn(
                  "group relative flex items-start gap-5 p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_40px_-12px_rgba(201,168,76,0.14)]",
                  isCurrent
                    ? "border-[#C9A84C]/30 bg-[#C9A84C]/[0.03] hover:border-[#C9A84C]/50"
                    : "border-white/[0.08] bg-[#111111] hover:border-white/[0.16] hover:bg-[#141414]"
                )}
              >
                <span
                  className="font-display text-2xl font-semibold flex-shrink-0 tabular-nums leading-none mt-1"
                  style={{
                    color: isDone
                      ? "rgba(62,207,142,0.6)"
                      : "rgba(201,168,76,0.55)",
                  }}
                  aria-hidden
                >
                  {moduleLabel}
                </span>

                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{
                    backgroundColor: isDone
                      ? "rgba(62,207,142,0.1)"
                      : isCurrent
                      ? "rgba(201,168,76,0.1)"
                      : "rgba(255,255,255,0.04)",
                  }}
                >
                  {isDone ? (
                    <CheckCircle className="w-5 h-5" style={{ color: "#3ECF8E" }} />
                  ) : isCurrent ? (
                    <PlayCircle className="w-5 h-5" style={{ color: "#C9A84C" }} />
                  ) : (
                    <Circle className="w-4 h-4 text-[#555555]" />
                  )}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2.5 mb-2">
                    <span
                      className="px-2 py-0.5 rounded text-[11px] font-semibold tracking-wide"
                      style={{
                        backgroundColor: "rgba(201,168,76,0.08)",
                        color: "#C9A84C",
                      }}
                    >
                      {lesson.section}
                    </span>
                    <span className="flex items-center gap-1.5 text-[11px] tracking-wide text-[#555555]">
                      <Clock className="w-3 h-3" />
                      {lesson.duration} min
                    </span>
                  </div>
                  <h2
                    className={cn(
                      "font-display text-lg sm:text-xl font-semibold tracking-tight leading-[1.25]",
                      isDone
                        ? "text-[#A8A8A8]"
                        : isCurrent
                        ? "text-[#C9A84C]"
                        : "text-[#F0F0F0]"
                    )}
                  >
                    {lesson.title}
                  </h2>
                  <p className="text-[14px] text-[#C0C0C0] leading-[1.7] mt-2 line-clamp-2">
                    {lesson.description}
                  </p>
                </div>

                <span
                  className={cn(
                    "flex-shrink-0 px-3.5 py-1.5 rounded-xl text-xs font-semibold tracking-tight mt-1",
                    isCurrent
                      ? "text-[#0A0A0A]"
                      : "border border-white/[0.1] text-[#C0C0C0] group-hover:border-white/[0.22] group-hover:text-[#F0F0F0]"
                  )}
                  style={isCurrent ? { backgroundColor: "#C9A84C" } : {}}
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
