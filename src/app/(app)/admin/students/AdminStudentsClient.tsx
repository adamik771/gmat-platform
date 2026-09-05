"use client"

import { useMemo, useState } from "react"
import {
  ArrowDownUp,
  ChevronDown,
  Clock3,
  Mail,
  Search,
  ShieldAlert,
  UserRoundCheck,
  UsersRound,
} from "lucide-react"
import type {
  AdminStudentMetric,
  StudentAttentionStatus,
} from "@/lib/admin-student-metrics"
import { cn } from "@/lib/utils"

interface Props {
  students: AdminStudentMetric[]
  nowIso: string
}

type Filter = "all" | "attention" | "active" | "inactive" | "new" | "paid"
type Sort = "attention" | "last-active" | "course" | "accuracy" | "hours" | "questions"

const ATTENTION = new Set<StudentAttentionStatus>([
  "inactive",
  "not-started",
  "review-backlog",
  "accuracy",
  "timing",
])

const STATUS: Record<
  StudentAttentionStatus,
  { label: string; text: string; background: string; border: string }
> = {
  inactive: {
    label: "Inactive",
    text: "#FF9A9A",
    background: "rgba(255,68,68,0.07)",
    border: "rgba(255,68,68,0.18)",
  },
  "not-started": {
    label: "Not started",
    text: "#F0B67F",
    background: "rgba(242,153,74,0.08)",
    border: "rgba(242,153,74,0.2)",
  },
  "review-backlog": {
    label: "Review due",
    text: "#E7C86F",
    background: "rgba(201,168,76,0.08)",
    border: "rgba(201,168,76,0.2)",
  },
  accuracy: {
    label: "Accuracy",
    text: "#E7C86F",
    background: "rgba(201,168,76,0.08)",
    border: "rgba(201,168,76,0.2)",
  },
  timing: {
    label: "Timing",
    text: "#E7C86F",
    background: "rgba(201,168,76,0.08)",
    border: "rgba(201,168,76,0.2)",
  },
  new: {
    label: "New",
    text: "#8EC5FF",
    background: "rgba(70,150,255,0.07)",
    border: "rgba(70,150,255,0.18)",
  },
  "no-alert": {
    label: "No alert",
    text: "#79D6AA",
    background: "rgba(62,207,142,0.07)",
    border: "rgba(62,207,142,0.18)",
  },
}

const STATUS_PRIORITY: Record<StudentAttentionStatus, number> = {
  inactive: 0,
  "not-started": 1,
  "review-backlog": 2,
  accuracy: 3,
  timing: 4,
  new: 5,
  "no-alert": 6,
}

function timestamp(value: string | null): number {
  if (!value) return 0
  const parsed = Date.parse(value)
  return Number.isFinite(parsed) ? parsed : 0
}

function formatRelative(value: string | null, nowMs: number): string {
  const then = timestamp(value)
  if (!then) return "Never"
  const minutes = Math.max(0, Math.floor((nowMs - then) / 60_000))
  if (minutes < 2) return "Just now"
  if (minutes < 60) return `${minutes}m ago`
  const hours = Math.floor(minutes / 60)
  if (hours < 24) return `${hours}h ago`
  const days = Math.floor(hours / 24)
  if (days < 30) return `${days}d ago`
  return new Intl.DateTimeFormat("en", { day: "numeric", month: "short", year: "numeric" }).format(
    new Date(then),
  )
}

function formatDate(value: string | null): string {
  if (!value || !timestamp(value)) return "Not set"
  return new Intl.DateTimeFormat("en", { day: "numeric", month: "short", year: "numeric" }).format(
    new Date(value),
  )
}

function formatTime(ms: number | null): string {
  if (ms === null) return "—"
  const seconds = Math.round(ms / 1_000)
  return `${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, "0")}`
}

function accuracy(value: number | null): string {
  return value === null ? "—" : `${value}%`
}

function planName(plan: string | null): string {
  if (!plan) return "Trial / no purchase"
  return plan
    .replaceAll(/[-_]/g, " ")
    .replace(/\b\w/g, (letter) => letter.toUpperCase())
}

function ProgressBar({ value }: { value: number }) {
  return (
    <div className="h-1.5 w-full overflow-hidden bg-white/[0.06]" aria-hidden="true">
      <div
        className="h-full bg-[#C9A84C]"
        style={{ width: `${Math.min(100, Math.max(0, value))}%` }}
      />
    </div>
  )
}

function StatusBadge({ status }: { status: StudentAttentionStatus }) {
  const style = STATUS[status]
  return (
    <span
      className="inline-flex h-6 items-center border px-2 text-[10px] font-semibold uppercase tracking-[0.08em]"
      style={{ color: style.text, backgroundColor: style.background, borderColor: style.border }}
    >
      {style.label}
    </span>
  )
}

export default function AdminStudentsClient({ students: rawStudents, nowIso }: Props) {
  const [search, setSearch] = useState("")
  const [filter, setFilter] = useState<Filter>("all")
  const [sort, setSort] = useState<Sort>("attention")
  const [expanded, setExpanded] = useState<Set<string>>(new Set())
  const nowMs = Date.parse(nowIso)
  const students = useMemo(() => rawStudents.filter((student) => !student.isAdmin), [rawStudents])

  const activeSevenDays = students.filter(
    (student) => nowMs - timestamp(student.lastActiveAt) <= 7 * 86_400_000,
  ).length
  const needsAttention = students.filter((student) => ATTENTION.has(student.status)).length
  const hours30d = Math.round(students.reduce((sum, student) => sum + student.activeHours30d, 0) * 10) / 10

  const visible = useMemo(() => {
    const query = search.trim().toLowerCase()
    return students
      .filter((student) => {
        if (query && !`${student.name} ${student.email}`.toLowerCase().includes(query)) return false
        if (filter === "attention" && !ATTENTION.has(student.status)) return false
        if (filter === "active" && nowMs - timestamp(student.lastActiveAt) > 7 * 86_400_000) return false
        if (filter === "inactive" && student.status !== "inactive") return false
        if (filter === "new" && student.status !== "new") return false
        if (filter === "paid" && !student.planActive) return false
        return true
      })
      .sort((a, b) => {
        if (sort === "attention") {
          return STATUS_PRIORITY[a.status] - STATUS_PRIORITY[b.status] || timestamp(b.lastActiveAt) - timestamp(a.lastActiveAt)
        }
        if (sort === "last-active") return timestamp(b.lastActiveAt) - timestamp(a.lastActiveAt)
        if (sort === "course") return b.courseCompletionPct - a.courseCompletionPct
        if (sort === "accuracy") return (b.accuracy ?? -1) - (a.accuracy ?? -1)
        if (sort === "hours") return b.activeHours - a.activeHours
        return b.totalQuestions - a.totalQuestions
      })
  }, [filter, nowMs, search, sort, students])

  const toggle = (id: string) => {
    setExpanded((current) => {
      const next = new Set(current)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }

  return (
    <div className="space-y-5">
      <header className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
        <div className="space-y-1">
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#C9A84C]">Admin</p>
          <h1 className="text-xl font-semibold text-[#F0F0F0]">Student activity</h1>
          <p className="max-w-3xl text-xs leading-5 text-[#888888]">
            Original attempts drive accuracy. Active time estimates focused use, including quiet
            reading and visible Focus blocks; activity before this tracker includes timed practice
            only.
          </p>
        </div>
        <p className="text-[11px] text-[#555555]">Updated {formatDate(nowIso)}</p>
      </header>

      <section className="grid grid-cols-2 border border-white/[0.07] lg:grid-cols-4" aria-label="Cohort summary">
        <SummaryMetric icon={UsersRound} label="Students" value={String(students.length)} />
        <SummaryMetric icon={UserRoundCheck} label="Active · 7 days" value={String(activeSevenDays)} />
        <SummaryMetric icon={ShieldAlert} label="Need attention" value={String(needsAttention)} />
        <SummaryMetric icon={Clock3} label="Hours · 30 days" value={String(hours30d)} />
      </section>

      <div className="flex flex-col gap-2 border-y border-white/[0.07] py-3 lg:flex-row lg:items-center">
        <label className="relative block min-w-0 flex-1 lg:max-w-sm">
          <span className="sr-only">Search students</span>
          <Search className="pointer-events-none absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-[#555555]" />
          <input
            type="search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search name or email"
            className="h-9 w-full border border-white/[0.08] bg-[#0D0D0D] pl-9 pr-3 text-xs text-[#F0F0F0] placeholder:text-[#555555] focus:border-[#C9A84C]/50"
          />
        </label>
        <div className="flex max-w-full gap-1 overflow-x-auto" aria-label="Student filters">
          {(["all", "attention", "active", "inactive", "new", "paid"] as const).map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setFilter(item)}
              className={cn(
                "h-9 shrink-0 border px-3 text-[11px] font-medium capitalize transition-colors",
                filter === item
                  ? "border-[#C9A84C]/40 bg-[#C9A84C]/[0.08] text-[#E2C66F]"
                  : "border-white/[0.07] text-[#77746C] hover:text-[#C0C0C0]",
              )}
            >
              {item === "attention" ? "Needs attention" : item}
            </button>
          ))}
        </div>
        <label className="relative ml-auto block w-full lg:w-48">
          <span className="sr-only">Sort students</span>
          <ArrowDownUp className="pointer-events-none absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-[#555555]" />
          <select
            value={sort}
            onChange={(event) => setSort(event.target.value as Sort)}
            className="h-9 w-full appearance-none border border-white/[0.08] bg-[#0D0D0D] pl-9 pr-3 text-xs text-[#C0C0C0]"
          >
            <option value="attention">Priority</option>
            <option value="last-active">Last active</option>
            <option value="course">Reading progress</option>
            <option value="accuracy">Accuracy</option>
            <option value="hours">Active hours</option>
            <option value="questions">All questions answered</option>
          </select>
        </label>
      </div>

      <p className="text-[11px] text-[#555555]">Showing {visible.length} of {students.length} students</p>

      {visible.length === 0 ? (
        <div className="border border-white/[0.07] py-16 text-center text-sm text-[#77746C]">
          No students match these filters.
        </div>
      ) : (
        <>
          <div className="hidden overflow-x-auto border border-white/[0.07] lg:block">
            <table className="w-full min-w-[1180px] table-fixed text-left">
              <thead className="bg-white/[0.018] text-[10px] uppercase tracking-[0.12em] text-[#66635D]">
                <tr>
                  <th className="w-[22%] px-4 py-3 font-semibold">Student</th>
                  <th className="w-[13%] px-3 py-3 font-semibold">Reading</th>
                  <th className="w-[10%] px-3 py-3 font-semibold">Questions</th>
                  <th className="w-[10%] px-3 py-3 font-semibold">Timed accuracy</th>
                  <th className="w-[10%] px-3 py-3 font-semibold">Timed avg</th>
                  <th className="w-[11%] px-3 py-3 font-semibold">Active time</th>
                  <th className="w-[11%] px-3 py-3 font-semibold">Last active</th>
                  <th className="w-[13%] px-3 py-3 font-semibold">Guidance</th>
                </tr>
              </thead>
              <tbody>
                {visible.map((student) => (
                  <DesktopStudentRows
                    key={student.id}
                    student={student}
                    expanded={expanded.has(student.id)}
                    nowMs={nowMs}
                    onToggle={() => toggle(student.id)}
                  />
                ))}
              </tbody>
            </table>
          </div>

          <div className="space-y-2 lg:hidden">
            {visible.map((student) => (
              <MobileStudent
                key={student.id}
                student={student}
                expanded={expanded.has(student.id)}
                nowMs={nowMs}
                onToggle={() => toggle(student.id)}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}

function SummaryMetric({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ComponentType<{ className?: string }>
  label: string
  value: string
}) {
  return (
    <div className="min-w-0 border-b border-r border-white/[0.07] p-4 last:border-r-0 lg:border-b-0">
      <div className="mb-3 flex items-center gap-2 text-[#66635D]">
        <Icon className="h-3.5 w-3.5" />
        <p className="truncate text-[10px] font-semibold uppercase tracking-[0.11em]">{label}</p>
      </div>
      <p className="text-2xl font-semibold tabular-nums text-[#F0F0F0]">{value}</p>
    </div>
  )
}

function DesktopStudentRows({
  student,
  expanded,
  nowMs,
  onToggle,
}: {
  student: AdminStudentMetric
  expanded: boolean
  nowMs: number
  onToggle: () => void
}) {
  return (
    <>
      <tr className="border-t border-white/[0.055] align-middle hover:bg-white/[0.012]">
        <td className="px-4 py-3">
          <button type="button" onClick={onToggle} className="flex w-full min-w-0 items-center gap-3 text-left">
            <ChevronDown className={cn("h-3.5 w-3.5 shrink-0 text-[#555555] transition-transform", expanded && "rotate-180")} />
            <span className="min-w-0">
              <span className="block truncate text-xs font-semibold text-[#E6E6E6]">{student.name}</span>
              <span className="block truncate text-[10px] text-[#66635D]">{student.email}</span>
            </span>
          </button>
        </td>
        <td className="px-3 py-3">
          <div className="space-y-1.5">
            <div className="flex justify-between text-[11px] tabular-nums text-[#C0C0C0]">
              <span>{student.courseCompletionPct}%</span>
              <span className="text-[#555555]">{student.completedChapters}/{student.totalChapters}</span>
            </div>
            <ProgressBar value={student.courseCompletionPct} />
          </div>
        </td>
        <td className="px-3 py-3 tabular-nums">
          <p className="text-xs text-[#D0D0D0]">{student.totalQuestions}</p>
          <p className="text-[10px] text-[#555555]">
            {student.practiceQuestions} timed · {student.learningQuestions} chapter
          </p>
        </td>
        <td className="px-3 py-3 tabular-nums">
          <p className="text-xs text-[#D0D0D0]">{accuracy(student.accuracy)}</p>
          <p className="text-[10px] text-[#555555]">
            {accuracy(student.learningAccuracy)} chapter
          </p>
        </td>
        <td className="px-3 py-3 tabular-nums">
          <p className="text-xs text-[#D0D0D0]">{formatTime(student.averageTimeMs)}</p>
          <p className="text-[10px] text-[#555555]">{formatTime(student.averageTime30dMs)} in 30d</p>
        </td>
        <td className="px-3 py-3 tabular-nums">
          <p className="text-xs text-[#D0D0D0]">{student.activeHours}h</p>
          <p className="text-[10px] text-[#555555]">{student.activeHours30d}h in 30d</p>
        </td>
        <td className="px-3 py-3">
          <p className="text-xs text-[#C0C0C0]">{formatRelative(student.lastActiveAt, nowMs)}</p>
          <p className="text-[10px] text-[#555555]">{student.activeDays30d} active days</p>
        </td>
        <td className="px-3 py-3"><StatusBadge status={student.status} /></td>
      </tr>
      {expanded && (
        <tr className="border-t border-white/[0.04] bg-white/[0.012]">
          <td colSpan={8} className="px-10 py-5">
            <StudentDetail student={student} />
          </td>
        </tr>
      )}
    </>
  )
}

function MobileStudent({
  student,
  expanded,
  nowMs,
  onToggle,
}: {
  student: AdminStudentMetric
  expanded: boolean
  nowMs: number
  onToggle: () => void
}) {
  return (
    <article className="border border-white/[0.07] bg-[#0D0D0D]">
      <button type="button" onClick={onToggle} className="flex w-full items-start justify-between gap-3 p-4 text-left">
        <span className="min-w-0">
          <span className="block truncate text-sm font-semibold text-[#E6E6E6]">{student.name}</span>
          <span className="block truncate text-[11px] text-[#66635D]">{student.email}</span>
        </span>
        <span className="flex shrink-0 items-center gap-2">
          <StatusBadge status={student.status} />
          <ChevronDown className={cn("h-4 w-4 text-[#555555] transition-transform", expanded && "rotate-180")} />
        </span>
      </button>
      <div className="grid grid-cols-2 border-t border-white/[0.06]">
        <MobileMetric label="Reading" value={`${student.courseCompletionPct}%`} detail={`${student.completedChapters}/${student.totalChapters} chapters`} />
        <MobileMetric label="Timed accuracy" value={accuracy(student.accuracy)} detail={`${student.practiceQuestions} timed · ${student.learningQuestions} chapter`} />
        <MobileMetric label="Active" value={`${student.activeHours}h`} detail={`${student.activeHours30d}h in 30d`} />
        <MobileMetric label="Last active" value={formatRelative(student.lastActiveAt, nowMs)} detail={`${student.activeDays30d} days in 30d`} />
      </div>
      {expanded && <div className="border-t border-white/[0.06] p-4"><StudentDetail student={student} /></div>}
    </article>
  )
}

function MobileMetric({ label, value, detail }: { label: string; value: string; detail: string }) {
  return (
    <div className="border-b border-r border-white/[0.05] p-3">
      <p className="text-[9px] font-semibold uppercase tracking-[0.12em] text-[#555555]">{label}</p>
      <p className="mt-1 text-sm tabular-nums text-[#D0D0D0]">{value}</p>
      <p className="text-[10px] text-[#555555]">{detail}</p>
    </div>
  )
}

function StudentDetail({ student }: { student: AdminStudentMetric }) {
  return (
    <div className="space-y-4">
      <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-start">
        <div>
          <p className="text-xs font-medium text-[#D0D0D0]">{student.guidance}</p>
          <p className="mt-1 text-[10px] text-[#555555]">
            {student.trackedActivityAvailable
              ? "Full-site tracking is available from 2 Sep 2026; earlier time reflects recorded practice only."
              : "No full-site heartbeat yet; historical active time reflects recorded practice only."}
          </p>
        </div>
        {student.email && (
          <a
            href={`mailto:${student.email}?subject=Your%20GMAT%20progress`}
            className="inline-flex h-8 shrink-0 items-center justify-center gap-2 border border-[#C9A84C]/30 px-3 text-[11px] font-semibold text-[#E2C66F] hover:bg-[#C9A84C]/[0.07]"
          >
            <Mail className="h-3.5 w-3.5" />
            Email student
          </a>
        )}
      </div>

      <div className="grid grid-cols-2 gap-x-6 gap-y-3 sm:grid-cols-3 xl:grid-cols-6">
        <DetailValue
          label="Plan"
          value={
            student.plan
              ? `${planName(student.plan)}${student.planActive ? "" : " · expired"}`
              : "Trial / no purchase"
          }
        />
        <DetailValue label="Target score" value={student.targetScore ? String(student.targetScore) : "Not set"} />
        <DetailValue label="Exam date" value={formatDate(student.examDate)} />
        <DetailValue label="Joined" value={formatDate(student.joinedAt)} />
        <DetailValue label="Official exams" value={String(student.officialExamCount)} />
        <DetailValue label="Due review" value={String(student.reviewBacklog)} />
      </div>
      {student.planExpiresAt ? (
        <p className="text-[10px] text-[#555555]">
          {student.planActive ? "Plan access ends" : "Plan access ended"}{" "}
          {formatDate(student.planExpiresAt)}.
        </p>
      ) : null}

      <div className="grid gap-px bg-white/[0.06] sm:grid-cols-3">
        {student.sectionMetrics.map((metric) => (
          <div key={metric.section} className="bg-[#0D0D0D] px-4 py-3">
            <div className="flex items-center justify-between gap-3">
              <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#77746C]">{metric.section}</p>
              {student.weakestSection === metric.section ? (
                <span className="text-[9px] font-semibold uppercase tracking-[0.1em] text-[#E2C66F]">Focus</span>
              ) : null}
            </div>
            <div className="mt-2 space-y-1 tabular-nums">
              <p className="text-base font-semibold text-[#E6E6E6]">
                {accuracy(metric.accuracy)}
                <span className="ml-2 text-[10px] font-normal text-[#555555]">
                  timed · {metric.questions} q · {formatTime(metric.averageTimeMs)} avg
                </span>
              </p>
              <p className="text-[10px] text-[#66635D]">
                {accuracy(metric.learningAccuracy)} chapter learning · {metric.learningQuestions} q
              </p>
            </div>
          </div>
        ))}
      </div>

      <p className="text-[10px] text-[#555555]">
        Last 30 days: {student.questions30d} timed original questions, {student.questions7d} in the last 7 days,
        {" "}{student.tutorRequests30d} tutor requests, {student.activeDays30d} active days. Chapter totals are lifetime snapshots;
        {" "}{student.chapterSetsCompleted} graded chapter-set runs are retained.
      </p>
    </div>
  )
}

function DetailValue({ label, value }: { label: string; value: string }) {
  return (
    <div className="min-w-0">
      <p className="text-[9px] font-semibold uppercase tracking-[0.11em] text-[#555555]">{label}</p>
      <p className="mt-1 truncate text-xs text-[#C0C0C0]" title={value}>{value}</p>
    </div>
  )
}
