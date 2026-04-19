"use client"

import { useMemo, useState } from "react"
import Link from "next/link"
import {
  ChevronDown,
  ChevronRight,
  Filter,
  Repeat,
  X,
} from "lucide-react"
import ReactMarkdown, { type Components } from "react-markdown"
import remarkGfm from "remark-gfm"
import { cn } from "@/lib/utils"
import type { Section } from "@/types"

// Shared markdown styling for the expanded mistake detail. Tuned compact —
// smaller than the /lessons/[slug] prose, denser than a blog post.
const mdComponents: Components = {
  p: (props) => (
    <p
      {...props}
      className="text-[14px] leading-relaxed text-[#D8D8D8] my-2 first:mt-0 last:mb-0"
    />
  ),
  ul: (props) => (
    <ul
      {...props}
      className="list-disc pl-5 my-2 space-y-1 text-[14px] text-[#D8D8D8]"
    />
  ),
  ol: (props) => (
    <ol
      {...props}
      className="list-decimal pl-5 my-2 space-y-1 text-[14px] text-[#D8D8D8]"
    />
  ),
  li: (props) => <li {...props} className="leading-relaxed marker:text-[#555555]" />,
  strong: (props) => <strong {...props} className="font-semibold text-[#F0F0F0]" />,
  em: (props) => <em {...props} className="italic text-[#E8C97A]" />,
  code: ({ className, ...props }) => {
    const isBlock = className?.startsWith("language-")
    if (isBlock) {
      return (
        <code
          {...props}
          className="font-mono text-xs text-[#F0F0F0] whitespace-pre-wrap"
        />
      )
    }
    return (
      <code
        {...props}
        className="font-mono text-[12px] bg-white/[0.04] px-1.5 py-0.5 rounded"
        style={{ color: "#C9A84C" }}
      />
    )
  },
  pre: (props) => (
    <pre
      {...props}
      className="my-3 p-3 rounded-lg bg-[#0A0A0A] border border-white/[0.06] overflow-x-auto text-xs"
    />
  ),
  table: (props) => (
    <div className="my-3 overflow-x-auto rounded-lg border border-white/[0.08]">
      <table {...props} className="w-full border-collapse text-[13px]" />
    </div>
  ),
  thead: (props) => <thead {...props} className="bg-[#0A0A0A]" />,
  th: (props) => (
    <th
      {...props}
      className="text-left py-2 px-3 text-[10px] font-semibold uppercase tracking-wide text-[#888888] border-b border-white/[0.08]"
    />
  ),
  td: (props) => (
    <td
      {...props}
      className="py-2 px-3 text-[13px] text-[#D8D8D8] border-b border-white/[0.04]"
    />
  ),
}

export interface SectionBreakdown {
  section: Section
  count: number
  pct: number
}

export interface MistakeEntry {
  id: string
  questionId: string
  section: Section
  topic: string
  subtopic: string
  difficulty: string
  questionType: string
  selectedAnswer: number | null
  sessionSlug: string | null
  createdAt: string | null
  prompt: string | null
  options: string[] | null
  correctAnswer: number | null
  correctAnswerLetter: string | null
  explanation: string | null
  context: string | null
  twoPartColumns: string[] | null
}

/**
 * Relative time label — "Today", "Yesterday", "3 days ago", "Mar 14".
 * Shown in the compact date column of the mistake list.
 */
function relativeDate(iso: string | null): string {
  if (!iso) return "—"
  const date = new Date(iso)
  if (Number.isNaN(date.getTime())) return "—"
  const now = new Date()
  const dayMs = 86400000
  const startOfDay = (d: Date) =>
    new Date(d.getFullYear(), d.getMonth(), d.getDate()).getTime()
  const diffDays = Math.round((startOfDay(now) - startOfDay(date)) / dayMs)
  if (diffDays === 0) return "Today"
  if (diffDays === 1) return "Yesterday"
  if (diffDays < 7) return `${diffDays} days ago`
  return date.toLocaleDateString("en-US", { month: "short", day: "numeric" })
}

const FILTERS: ("All" | Section)[] = ["All", "Quant", "Verbal", "DI"]

export default function ErrorLogClient({
  mistakes,
}: {
  mistakes: MistakeEntry[]
}) {
  const [sectionFilter, setSectionFilter] = useState<(typeof FILTERS)[number]>("All")
  const [expandedId, setExpandedId] = useState<string | null>(null)

  const filtered = useMemo(
    () =>
      sectionFilter === "All"
        ? mistakes
        : mistakes.filter((m) => m.section === sectionFilter),
    [mistakes, sectionFilter]
  )

  return (
    <div className="space-y-4">
      {/* Filters */}
      <div className="flex flex-wrap items-center gap-3">
        <div className="flex items-center gap-1.5 text-xs text-[#555555]">
          <Filter className="w-3.5 h-3.5" />
          Filter by:
        </div>
        <div className="flex gap-2">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setSectionFilter(f)}
              className={cn(
                "px-3 py-1.5 rounded-lg text-xs font-medium transition-colors",
                sectionFilter === f
                  ? "text-[#0A0A0A]"
                  : "border border-white/[0.08] text-[#888888] hover:text-[#F0F0F0]"
              )}
              style={sectionFilter === f ? { backgroundColor: "#C9A84C" } : {}}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* List */}
      {filtered.length === 0 ? (
        <div className="p-8 rounded-xl border border-white/[0.08] bg-[#111111] text-center">
          <p className="text-sm text-[#888888]">No mistakes in this section yet.</p>
        </div>
      ) : (
        <div className="rounded-xl border border-white/[0.08] bg-[#111111] overflow-hidden">
          {filtered.map((entry, i) => {
            const isOpen = expandedId === entry.id
            const isLast = i === filtered.length - 1
            const userLetter =
              entry.selectedAnswer !== null
                ? String.fromCharCode(65 + entry.selectedAnswer)
                : "—"

            return (
              <div
                key={entry.id}
                className={cn(!isLast && "border-b border-white/[0.04]")}
              >
                {/* Row (clickable to expand) */}
                <button
                  type="button"
                  onClick={() => setExpandedId(isOpen ? null : entry.id)}
                  className="w-full text-left grid grid-cols-12 px-4 py-3.5 items-center gap-2 hover:bg-white/[0.02] transition-colors"
                >
                  <div className="col-span-1 flex items-center gap-1 text-xs text-[#555555]">
                    {isOpen ? (
                      <ChevronDown className="w-3 h-3" />
                    ) : (
                      <ChevronRight className="w-3 h-3" />
                    )}
                    {relativeDate(entry.createdAt)}
                  </div>
                  <div className="col-span-2">
                    <p className="text-xs font-medium text-[#F0F0F0]">
                      {entry.section}
                    </p>
                    <p className="text-xs text-[#555555] truncate">
                      {entry.topic}
                    </p>
                  </div>
                  <div className="col-span-6">
                    <p className="text-xs text-[#888888] line-clamp-2">
                      {entry.prompt ?? (
                        <span className="italic text-[#555555]">
                          Question source not found
                        </span>
                      )}
                    </p>
                  </div>
                  <div className="col-span-2 flex items-center gap-2 text-xs">
                    <span className="text-[#555555]">You:</span>
                    <span
                      className="font-semibold"
                      style={{ color: "#FF4444" }}
                    >
                      {userLetter}
                    </span>
                    <span className="text-[#555555]">·</span>
                    <span className="text-[#555555]">Correct:</span>
                    <span
                      className="font-semibold"
                      style={{ color: "#3ECF8E" }}
                    >
                      {entry.correctAnswerLetter ?? "—"}
                    </span>
                  </div>
                  <div className="col-span-1 flex justify-end">
                    {entry.sessionSlug && (
                      <Link
                        href={`/practice/session/${entry.sessionSlug}`}
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded border border-white/[0.08] text-[#888888] hover:text-[#F0F0F0] hover:border-white/[0.2] transition-colors"
                      >
                        <Repeat className="w-3 h-3" />
                        Retake
                      </Link>
                    )}
                  </div>
                </button>

                {/* Expanded detail */}
                {isOpen && (
                  <ExpandedMistake
                    entry={entry}
                    onClose={() => setExpandedId(null)}
                  />
                )}
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}

/**
 * Expanded panel rendered inline beneath a mistake row.
 * Shows the full prompt, every option with your-answer/correct-answer
 * highlighting, and the explanation below.
 */
function ExpandedMistake({
  entry,
  onClose,
}: {
  entry: MistakeEntry
  onClose: () => void
}) {
  if (!entry.prompt) {
    return (
      <div className="px-6 py-5 border-t border-white/[0.06] bg-[#0F0F0F]">
        <p className="text-xs text-[#888888] italic">
          The source for question{" "}
          <code className="px-1 rounded bg-white/[0.05]">{entry.questionId}</code>{" "}
          couldn&apos;t be loaded — it may have been renamed since this attempt
          was saved.
        </p>
      </div>
    )
  }

  return (
    <div className="px-6 py-6 border-t border-white/[0.06] bg-[#0F0F0F] space-y-5 relative">
      <button
        onClick={onClose}
        aria-label="Close"
        className="absolute top-4 right-4 p-1 rounded text-[#555555] hover:text-[#F0F0F0] hover:bg-white/[0.04] transition-colors"
      >
        <X className="w-4 h-4" />
      </button>

      {entry.context && (
        <div className="p-4 rounded-lg border border-white/[0.06] bg-[#0A0A0A]">
          <p className="text-[10px] uppercase tracking-widest text-[#555555] mb-2">
            Reference
          </p>
          <ReactMarkdown remarkPlugins={[remarkGfm]} components={mdComponents}>
            {entry.context}
          </ReactMarkdown>
        </div>
      )}

      <div>
        <p className="text-[10px] uppercase tracking-widest text-[#555555] mb-2">
          Question
        </p>
        <ReactMarkdown remarkPlugins={[remarkGfm]} components={mdComponents}>
          {entry.prompt}
        </ReactMarkdown>
      </div>

      {entry.options && entry.options.length > 0 && !entry.twoPartColumns && (
        <div className="space-y-2">
          {entry.options.map((opt, idx) => {
            const isCorrect = entry.correctAnswer === idx
            const isUser = entry.selectedAnswer === idx
            const letter = String.fromCharCode(65 + idx)
            const border =
              isCorrect
                ? "rgba(62,207,142,0.4)"
                : isUser
                ? "rgba(255,68,68,0.4)"
                : "rgba(255,255,255,0.06)"
            const bg =
              isCorrect
                ? "rgba(62,207,142,0.05)"
                : isUser
                ? "rgba(255,68,68,0.05)"
                : "#111111"
            return (
              <div
                key={idx}
                className="flex items-start gap-3 p-3 rounded-lg border"
                style={{ borderColor: border, backgroundColor: bg }}
              >
                <span
                  className="inline-flex items-center justify-center w-6 h-6 rounded text-xs font-semibold flex-shrink-0"
                  style={{
                    backgroundColor: isCorrect
                      ? "#3ECF8E"
                      : isUser
                      ? "#FF4444"
                      : "rgba(255,255,255,0.04)",
                    color: isCorrect || isUser ? "#0A0A0A" : "#888888",
                  }}
                >
                  {letter}
                </span>
                <div className="flex-1">
                  <ReactMarkdown remarkPlugins={[remarkGfm]} components={mdComponents}>
                    {opt}
                  </ReactMarkdown>
                </div>
                <div className="flex flex-col items-end gap-0.5 text-[10px] uppercase tracking-wider flex-shrink-0">
                  {isCorrect && (
                    <span style={{ color: "#3ECF8E" }}>Correct</span>
                  )}
                  {isUser && !isCorrect && (
                    <span style={{ color: "#FF4444" }}>Your answer</span>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      )}

      {entry.twoPartColumns && (
        <div className="p-3 rounded-lg border border-white/[0.06] bg-[#111111]">
          <p className="text-xs text-[#888888]">
            Two-Part Analysis question — open the set to see the grid and
            retry.
          </p>
        </div>
      )}

      {entry.explanation && (
        <div>
          <p className="text-[10px] uppercase tracking-widest text-[#555555] mb-2">
            Explanation
          </p>
          <ReactMarkdown remarkPlugins={[remarkGfm]} components={mdComponents}>
            {entry.explanation}
          </ReactMarkdown>
        </div>
      )}
    </div>
  )
}
