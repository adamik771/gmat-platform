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

// User-facing "Easy" / "Medium" / "Hard" map to the content loader's
// Beginner / Intermediate / Advanced.
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

  // Matches the builder's filters against the pool — same logic the Generate
  // button uses, but memoized so the summary card can show "X available".
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
    // Stratified shuffle — grab `effectiveCount` ids balanced across the
    // selected sections. Uses Fisher-Yates on each section's subset so we
    // don't double-count, then round-robin picks until we've got enough.
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

    // Label the new session so it shows up nicely in the header + the error
    // log and activity feed. "Custom · Quant" / "Custom · Mixed" etc.
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
    <div className="max-w-4xl mx-auto space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-[#F0F0F0]">Test Builder</h1>
        <p className="text-sm text-[#555555] mt-1">
          Build a custom practice set from {pool.length} original questions.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Builder form */}
        <div className="lg:col-span-2">
          <div className="p-6 rounded-xl border border-white/[0.08] bg-[#111111] space-y-6">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-widest text-[#888888] mb-3">
                Sections
              </label>
              <div className="flex gap-2 flex-wrap">
                {SECTIONS.map((s) => {
                  const active = sections.includes(s)
                  return (
                    <button
                      key={s}
                      onClick={() => toggleSection(s)}
                      className={cn(
                        "px-4 py-2 rounded-lg text-sm font-medium border transition-colors",
                        active
                          ? "border-[#C9A84C]/50 text-[#C9A84C]"
                          : "border-white/[0.08] text-[#888888] hover:border-white/[0.16]"
                      )}
                      style={
                        active ? { backgroundColor: "rgba(201,168,76,0.08)" } : {}
                      }
                    >
                      {s}
                    </button>
                  )
                })}
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-widest text-[#888888] mb-3">
                Number of Questions
              </label>
              <div className="flex gap-2 flex-wrap">
                {QUESTION_COUNTS.map((n) => (
                  <button
                    key={n}
                    onClick={() => setNumQuestions(n)}
                    className={cn(
                      "px-4 py-2 rounded-lg text-sm font-medium border transition-colors",
                      numQuestions === n
                        ? "border-[#C9A84C]/50 text-[#C9A84C]"
                        : "border-white/[0.08] text-[#888888] hover:border-white/[0.16]"
                    )}
                    style={
                      numQuestions === n
                        ? { backgroundColor: "rgba(201,168,76,0.08)" }
                        : {}
                    }
                  >
                    {n}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-widest text-[#888888] mb-3">
                Difficulty
              </label>
              <div className="flex gap-2 flex-wrap">
                {DIFFICULTIES.map((d) => (
                  <button
                    key={d}
                    onClick={() => setDifficulty(d)}
                    className={cn(
                      "px-4 py-2 rounded-lg text-sm font-medium border transition-colors",
                      difficulty === d
                        ? "border-[#C9A84C]/50 text-[#C9A84C]"
                        : "border-white/[0.08] text-[#888888] hover:border-white/[0.16]"
                    )}
                    style={
                      difficulty === d
                        ? { backgroundColor: "rgba(201,168,76,0.08)" }
                        : {}
                    }
                  >
                    {d}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-widest text-[#888888] mb-3">
                Time Limit
              </label>
              <div className="flex gap-2">
                <button
                  onClick={() => setTimed(true)}
                  className={cn(
                    "px-4 py-2 rounded-lg text-sm font-medium border transition-colors",
                    timed
                      ? "border-[#C9A84C]/50 text-[#C9A84C]"
                      : "border-white/[0.08] text-[#888888]"
                  )}
                  style={timed ? { backgroundColor: "rgba(201,168,76,0.08)" } : {}}
                >
                  Timed ({timeLimit ?? 0} min)
                </button>
                <button
                  onClick={() => setTimed(false)}
                  className={cn(
                    "px-4 py-2 rounded-lg text-sm font-medium border transition-colors",
                    !timed
                      ? "border-[#C9A84C]/50 text-[#C9A84C]"
                      : "border-white/[0.08] text-[#888888]"
                  )}
                  style={!timed ? { backgroundColor: "rgba(201,168,76,0.08)" } : {}}
                >
                  Untimed
                </button>
              </div>
            </div>

            <button
              onClick={build}
              disabled={
                building ||
                sections.length === 0 ||
                effectiveCount === 0
              }
              className="w-full py-3.5 rounded-xl text-sm font-semibold transition-all hover:opacity-90 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              style={{ backgroundColor: "#C9A84C", color: "#0A0A0A" }}
            >
              {building ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                <Wrench className="w-4 h-4" />
              )}
              {building ? "Building…" : "Build Practice Set"}
              {!building && <ArrowRight className="w-4 h-4" />}
            </button>

            {sections.length === 0 && (
              <p className="text-xs" style={{ color: "#FF4444" }}>
                Pick at least one section.
              </p>
            )}
            {sections.length > 0 && available === 0 && (
              <p
                className="text-xs flex items-start gap-1.5"
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
          <div className="p-5 rounded-xl border border-white/[0.08] bg-[#111111]">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#888888] mb-4">
              Set Summary
            </p>
            <div className="space-y-3">
              {[
                {
                  label: "Sections",
                  value: sections.join(", ") || "None selected",
                },
                {
                  label: "Questions",
                  value:
                    effectiveCount < numQuestions
                      ? `${effectiveCount} (of ${numQuestions} requested)`
                      : effectiveCount.toString(),
                },
                { label: "Difficulty", value: difficulty },
                {
                  label: "Time limit",
                  value: timeLimit !== null ? `${timeLimit} min` : "Untimed",
                },
                {
                  label: "Available pool",
                  value: `${available} ${available === 1 ? "question" : "questions"}`,
                },
              ].map((row) => (
                <div key={row.label} className="flex justify-between gap-3">
                  <span className="text-xs text-[#555555] flex-shrink-0">
                    {row.label}
                  </span>
                  <span className="text-xs font-medium text-[#F0F0F0] text-right">
                    {row.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {timed && (
            <div
              className="flex items-start gap-2.5 p-4 rounded-xl"
              style={{
                backgroundColor: "rgba(201,168,76,0.05)",
                border: "1px solid rgba(201,168,76,0.15)",
              }}
            >
              <Clock
                className="w-4 h-4 mt-0.5 flex-shrink-0"
                style={{ color: "#C9A84C" }}
              />
              <p className="text-xs text-[#888888]">
                Timed mode mirrors real exam conditions. Approximately 1:45
                per question.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Recent tests */}
      <div>
        <h2 className="text-sm font-semibold uppercase tracking-widest text-[#888888] mb-4">
          Recent Custom Tests
        </h2>
        {recent.length === 0 ? (
          <div className="p-5 rounded-xl border border-dashed border-white/[0.08] bg-[#0F0F0F]">
            <p className="text-xs text-[#888888]">
              Custom tests you generate will show up here. Your results are
              tracked just like any other practice set.
            </p>
          </div>
        ) : (
          <div className="space-y-3">
            {recent.map((test) => (
              <div
                key={test.id}
                className="flex items-center justify-between p-4 rounded-xl border border-white/[0.08] bg-[#111111] hover:border-white/[0.14] transition-colors gap-4"
              >
                <div className="min-w-0">
                  <p className="text-sm font-medium text-[#F0F0F0] truncate">
                    {test.topic}
                  </p>
                  <p className="text-xs text-[#555555] mt-0.5">
                    {test.section} · {test.totalQuestions}Q ·{" "}
                    {relativeDate(test.createdAt)}
                  </p>
                </div>
                <div className="flex items-center gap-3 flex-shrink-0">
                  <span className="text-xs text-[#555555]">
                    {test.correctCount}/{test.totalQuestions}
                  </span>
                  <span
                    className="text-sm font-semibold"
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
