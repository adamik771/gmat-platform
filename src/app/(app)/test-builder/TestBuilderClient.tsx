"use client"

import { useMemo, useState } from "react"
import { useRouter } from "next/navigation"
import {
  ArrowRight,
  Clock,
  Loader2,
  TriangleAlert,
  Wrench,
} from "lucide-react"
import { cn } from "@/lib/utils"
import type { Difficulty, Section } from "@/types"

export interface QuestionPoolEntry {
  id: string
  section: Section
  topic: string
  difficulty: Difficulty
}

export interface RecentCustomTest {
  id: string
  topic: string
  section: string
  totalQuestions: number
  correctCount: number
  accuracy: number
  createdAt: string
}

const SECTIONS: Section[] = ["Quant", "Verbal", "DI"]
const DIFFICULTIES = ["Easy", "Medium", "Hard", "Mixed"] as const
type DifficultyPick = (typeof DIFFICULTIES)[number]

const DIFFICULTY_MAP: Record<Exclude<DifficultyPick, "Mixed">, Difficulty> = {
  Easy: "Beginner",
  Medium: "Intermediate",
  Hard: "Advanced",
}

const QUESTION_COUNTS = [10, 15, 20, 30, 45] as const

export default function TestBuilderClient({
  pool,
  recent,
}: {
  pool: QuestionPoolEntry[]
  recent: RecentCustomTest[]
}) {
  const [sections, setSections] = useState<Section[]>(["Quant"])
  const [difficulty, setDifficulty] = useState<DifficultyPick>("Mixed")
  const [numQuestions, setNumQuestions] =
    useState<(typeof QUESTION_COUNTS)[number]>(20)
  const [timed, setTimed] = useState(true)
  const [building, setBuilding] = useState(false)
  const router = useRouter()

  function toggleSection(s: Section) {
    setSections((prev) =>
      prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]
    )
  }

  const matchingPool = useMemo(() => {
    if (sections.length === 0) return []
    return pool.filter((q) => {
      if (!sections.includes(q.section)) return false
      if (difficulty !== "Mixed") {
        const mapped = DIFFICULTY_MAP[difficulty]
        if (q.difficulty !== mapped) return false
      }
      return true
    })
  }, [pool, sections, difficulty])

  const available = matchingPool.length
  const effectiveCount = Math.min(numQuestions, available)
  const timeLimit = timed ? Math.round(effectiveCount * 1.75) : null

  async function build() {
    if (building) return
    if (sections.length === 0 || effectiveCount === 0) return

    setBuilding(true)
    const bySection: Record<Section, QuestionPoolEntry[]> = {
      Quant: [],
      Verbal: [],
      DI: [],
    }
    for (const q of matchingPool) bySection[q.section].push(q)
    for (const sec of sections) shuffleInPlace(bySection[sec])

    const picked: string[] = []
    let exhausted = false
    while (picked.length < effectiveCount && !exhausted) {
      let progress = false
      for (const sec of sections) {
        if (picked.length >= effectiveCount) break
        const bucket = bySection[sec]
        if (bucket.length > 0) {
          picked.push(bucket.pop()!.id)
          progress = true
        }
      }
      if (!progress) exhausted = true
    }

    const topicLabel =
      sections.length === 1 ? `Custom ${sections[0]}` : "Custom Mixed"
    const sectionLabel = sections.length === 1 ? sections[0] : "Mixed"

    const qs = new URLSearchParams({
      ids: picked.join(","),
      topic: topicLabel,
      section: sectionLabel,
    })

    router.push(`/practice/session/custom?${qs.toString()}`)
  }

  return (
    <div className="relative">
      <div
        className="absolute inset-x-0 top-0 h-[480px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(201,168,76,0.08) 0%, transparent 60%)",
        }}
        aria-hidden
      />
      <div
        className="absolute inset-0 pointer-events-none bg-grain opacity-[0.03] mix-blend-overlay"
        aria-hidden
      />

      <div className="relative max-w-4xl mx-auto space-y-10">
        <div>
          <div className="flex items-center gap-3 mb-5">
            <span
              className="h-px w-8"
              style={{
                background:
                  "linear-gradient(to right, transparent, rgba(201,168,76,0.6))",
              }}
            />
            <p
              className="text-[10px] uppercase tracking-[0.22em] font-semibold"
              style={{ color: "#C9A84C" }}
            >
              Custom Practice
            </p>
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-semibold tracking-tight text-[#F0F0F0] leading-[1.05] mb-3">
            Build your own{" "}
            <span className="font-display-italic" style={{ color: "#C9A84C" }}>
              set.
            </span>
          </h1>
          <p className="text-[15px] leading-[1.75] text-[#C0C0C0] max-w-xl">
            Pull from {pool.length} original questions. Pick sections, scale,
            and difficulty — the mix shuffles fresh each time.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Builder */}
          <div className="lg:col-span-2 space-y-5">
            <FilterGroup eyebrow="01" label="Sections">
              <div className="flex gap-2 flex-wrap">
                {SECTIONS.map((s) => {
                  const active = sections.includes(s)
                  return (
                    <button
                      key={s}
                      onClick={() => toggleSection(s)}
                      className={cn(
                        "px-4 py-2.5 rounded-xl text-[13px] font-semibold tracking-tight border transition-all",
                        active
                          ? "text-[#C9A84C] hover:scale-[1.02]"
                          : "border-white/[0.08] text-[#888888] hover:text-[#F0F0F0] hover:border-white/[0.16]"
                      )}
                      style={
                        active
                          ? {
                              borderColor: "rgba(201,168,76,0.45)",
                              backgroundColor: "rgba(201,168,76,0.08)",
                            }
                          : {}
                      }
                    >
                      {s}
                    </button>
                  )
                })}
              </div>
            </FilterGroup>

            <FilterGroup eyebrow="02" label="Number of questions">
              <div className="flex gap-2 flex-wrap">
                {QUESTION_COUNTS.map((n) => {
                  const active = numQuestions === n
                  return (
                    <button
                      key={n}
                      onClick={() => setNumQuestions(n)}
                      className={cn(
                        "px-4 py-2.5 rounded-xl text-[13px] font-semibold tracking-tight border transition-all tabular-nums",
                        active
                          ? "text-[#C9A84C] hover:scale-[1.02]"
                          : "border-white/[0.08] text-[#888888] hover:text-[#F0F0F0] hover:border-white/[0.16]"
                      )}
                      style={
                        active
                          ? {
                              borderColor: "rgba(201,168,76,0.45)",
                              backgroundColor: "rgba(201,168,76,0.08)",
                            }
                          : {}
                      }
                    >
                      {n}
                    </button>
                  )
                })}
              </div>
            </FilterGroup>

            <FilterGroup eyebrow="03" label="Difficulty">
              <div className="flex gap-2 flex-wrap">
                {DIFFICULTIES.map((d) => {
                  const active = difficulty === d
                  return (
                    <button
                      key={d}
                      onClick={() => setDifficulty(d)}
                      className={cn(
                        "px-4 py-2.5 rounded-xl text-[13px] font-semibold tracking-tight border transition-all",
                        active
                          ? "text-[#C9A84C] hover:scale-[1.02]"
                          : "border-white/[0.08] text-[#888888] hover:text-[#F0F0F0] hover:border-white/[0.16]"
                      )}
                      style={
                        active
                          ? {
                              borderColor: "rgba(201,168,76,0.45)",
                              backgroundColor: "rgba(201,168,76,0.08)",
                            }
                          : {}
                      }
                    >
                      {d}
                    </button>
                  )
                })}
              </div>
            </FilterGroup>

            <FilterGroup eyebrow="04" label="Time limit">
              <div className="flex gap-2 flex-wrap">
                <button
                  onClick={() => setTimed(true)}
                  className={cn(
                    "px-4 py-2.5 rounded-xl text-[13px] font-semibold tracking-tight border transition-all",
                    timed
                      ? "text-[#C9A84C] hover:scale-[1.02]"
                      : "border-white/[0.08] text-[#888888] hover:text-[#F0F0F0] hover:border-white/[0.16]"
                  )}
                  style={
                    timed
                      ? {
                          borderColor: "rgba(201,168,76,0.45)",
                          backgroundColor: "rgba(201,168,76,0.08)",
                        }
                      : {}
                  }
                >
                  Timed
                  <span className="text-[11px] ml-1.5 opacity-80 tabular-nums">
                    ({timeLimit ?? 0} min)
                  </span>
                </button>
                <button
                  onClick={() => setTimed(false)}
                  className={cn(
                    "px-4 py-2.5 rounded-xl text-[13px] font-semibold tracking-tight border transition-all",
                    !timed
                      ? "text-[#C9A84C] hover:scale-[1.02]"
                      : "border-white/[0.08] text-[#888888] hover:text-[#F0F0F0] hover:border-white/[0.16]"
                  )}
                  style={
                    !timed
                      ? {
                          borderColor: "rgba(201,168,76,0.45)",
                          backgroundColor: "rgba(201,168,76,0.08)",
                        }
                      : {}
                  }
                >
                  Untimed
                </button>
              </div>
            </FilterGroup>

            <div
              className="relative overflow-hidden p-6 rounded-2xl border border-white/[0.08] bg-[#0D0D0D]"
              style={{
                boxShadow:
                  "0 0 60px rgba(201,168,76,0.04), inset 0 1px 0 rgba(255,255,255,0.03)",
              }}
            >
              <div
                className="absolute top-0 right-0 w-56 h-56 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(circle at 100% 0%, rgba(201,168,76,0.08) 0%, transparent 60%)",
                }}
                aria-hidden
              />
              <button
                onClick={build}
                disabled={
                  building ||
                  sections.length === 0 ||
                  effectiveCount === 0
                }
                className="relative w-full py-4 rounded-xl text-[14px] font-semibold tracking-tight transition-all hover:scale-[1.01] active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2"
                style={{ backgroundColor: "#C9A84C", color: "#0A0A0A" }}
              >
                {building ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  <Wrench className="w-4 h-4" />
                )}
                {building ? "Building…" : "Build practice set"}
                {!building && <ArrowRight className="w-4 h-4" />}
              </button>

              {sections.length === 0 && (
                <p
                  className="relative text-[12px] mt-3 flex items-start gap-1.5"
                  style={{ color: "#FF4444" }}
                >
                  <TriangleAlert className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" />
                  Pick at least one section.
                </p>
              )}
              {sections.length > 0 && available === 0 && (
                <p
                  className="relative text-[12px] mt-3 flex items-start gap-1.5"
                  style={{ color: "#FF4444" }}
                >
                  <TriangleAlert className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" />
                  No questions match this difficulty in the selected sections.
                </p>
              )}
            </div>
          </div>

          {/* Summary */}
          <div className="space-y-4">
            <div
              className="p-6 rounded-2xl border border-white/[0.08] bg-[#0D0D0D]"
              style={{
                boxShadow: "inset 0 1px 0 rgba(255,255,255,0.03)",
              }}
            >
              <p
                className="text-[10px] uppercase tracking-[0.22em] font-semibold mb-5"
                style={{ color: "#C9A84C" }}
              >
                Set Summary
              </p>
              <div className="space-y-3.5">
                {[
                  {
                    label: "Sections",
                    value: sections.join(", ") || "None selected",
                  },
                  {
                    label: "Questions",
                    value:
                      effectiveCount < numQuestions
                        ? `${effectiveCount} of ${numQuestions}`
                        : effectiveCount.toString(),
                  },
                  { label: "Difficulty", value: difficulty },
                  {
                    label: "Time",
                    value:
                      timeLimit !== null ? `${timeLimit} min` : "Untimed",
                  },
                  {
                    label: "Pool",
                    value: `${available} ${available === 1 ? "question" : "questions"}`,
                  },
                ].map((row) => (
                  <div
                    key={row.label}
                    className="flex justify-between gap-3 items-baseline"
                  >
                    <span className="text-[11px] uppercase tracking-[0.14em] text-[#888888] flex-shrink-0">
                      {row.label}
                    </span>
                    <span className="text-[13px] font-medium text-[#F0F0F0] text-right tracking-tight">
                      {row.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {timed && (
              <div
                className="flex items-start gap-3 p-5 rounded-2xl"
                style={{
                  backgroundColor: "rgba(201,168,76,0.04)",
                  border: "1px solid rgba(201,168,76,0.18)",
                }}
              >
                <Clock
                  className="w-4 h-4 mt-0.5 flex-shrink-0"
                  style={{ color: "#C9A84C" }}
                />
                <p className="text-[12px] text-[#C0C0C0] leading-[1.6]">
                  Timed mode mirrors real exam conditions — about 1:45 per
                  question.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Recent */}
        <div>
          <div className="flex items-center gap-3 mb-5">
            <span
              className="h-px w-8"
              style={{
                background:
                  "linear-gradient(to right, transparent, rgba(201,168,76,0.6))",
              }}
            />
            <p
              className="text-[10px] uppercase tracking-[0.22em] font-semibold"
              style={{ color: "#C9A84C" }}
            >
              Recent
            </p>
          </div>
          <h2 className="font-display text-2xl md:text-3xl font-semibold tracking-tight text-[#F0F0F0] mb-6 leading-[1.1]">
            Previous{" "}
            <span className="font-display-italic" style={{ color: "#C9A84C" }}>
              builds.
            </span>
          </h2>

          {recent.length === 0 ? (
            <div
              className="p-6 rounded-2xl border border-dashed border-white/[0.1]"
              style={{ backgroundColor: "#0A0A0A" }}
            >
              <p className="text-[13px] text-[#C0C0C0] leading-[1.6]">
                Custom tests you generate will show up here. Your results are
                tracked just like any other practice set.
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              {recent.map((test) => (
                <div
                  key={test.id}
                  className="flex items-center justify-between p-5 rounded-2xl border border-white/[0.08] bg-[#0D0D0D] transition-all duration-300 hover:-translate-y-0.5 hover:border-white/[0.12] gap-4"
                  style={{
                    boxShadow: "inset 0 1px 0 rgba(255,255,255,0.03)",
                  }}
                >
                  <div className="min-w-0">
                    <p className="text-[15px] font-semibold text-[#F0F0F0] tracking-tight truncate">
                      {test.topic}
                    </p>
                    <p className="text-[12px] text-[#888888] mt-1 tracking-tight">
                      <span className="text-[#C0C0C0]">{test.section}</span>
                      <span className="mx-1.5 text-[#333333]">·</span>
                      {test.totalQuestions}Q
                      <span className="mx-1.5 text-[#333333]">·</span>
                      {relativeDate(test.createdAt)}
                    </p>
                  </div>
                  <div className="flex items-center gap-3 flex-shrink-0">
                    <span className="text-[12px] text-[#888888] tabular-nums tracking-tight">
                      {test.correctCount}/{test.totalQuestions}
                    </span>
                    <span
                      className="font-display text-[1.75rem] font-semibold tracking-[-0.02em] leading-none tabular-nums"
                      style={{
                        color: test.accuracy >= 70 ? "#3ECF8E" : "#FF4444",
                      }}
                    >
                      {test.accuracy}%
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

function FilterGroup({
  eyebrow,
  label,
  children,
}: {
  eyebrow: string
  label: string
  children: React.ReactNode
}) {
  return (
    <div
      className="p-6 rounded-2xl border border-white/[0.08] bg-[#0D0D0D]"
      style={{
        boxShadow: "inset 0 1px 0 rgba(255,255,255,0.03)",
      }}
    >
      <div className="flex items-baseline gap-3 mb-4">
        <span
          className="font-display font-display-italic text-[1.5rem] leading-none"
          style={{ color: "#C9A84C" }}
        >
          {eyebrow}
        </span>
        <span
          className="h-px flex-1"
          style={{
            background:
              "linear-gradient(to right, rgba(201,168,76,0.3), transparent)",
          }}
        />
        <p
          className="text-[10px] uppercase tracking-[0.22em] font-semibold"
          style={{ color: "#C9A84C" }}
        >
          {label}
        </p>
      </div>
      {children}
    </div>
  )
}

function shuffleInPlace<T>(arr: T[]): void {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[arr[i], arr[j]] = [arr[j], arr[i]]
  }
}

function relativeDate(iso: string): string {
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
