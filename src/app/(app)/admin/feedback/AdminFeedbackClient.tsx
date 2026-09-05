"use client"

import { useMemo, useState, useTransition } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import {
  AlertTriangle,
  Bug,
  HelpCircle,
  MessageSquare,
  Star,
  ExternalLink,
  Loader2,
  Filter,
} from "lucide-react"

export interface AdminFeedbackRow {
  id: string
  user_id: string | null
  user_email: string | null
  kind: "general" | "question" | "bug" | "rating"
  message: string
  question_id: string | null
  rating: number | null
  tag: string | null
  source_path: string | null
  user_agent: string | null
  created_at: string
  status: "open" | "reviewed" | "fixed" | "wontfix" | "duplicate"
  /** "table" rows can be triaged via PATCH; "user_metadata" rows are read-only until the migration runs. */
  source: "table" | "user_metadata"
}

interface Props {
  rows: AdminFeedbackRow[]
  tableMissing: boolean
  tableRowCount: number
  metadataRowCount: number
  topQuestions: Array<{ questionId: string; count: number; tags: string[] }>
  topBugSources: Array<{ sourcePath: string; count: number }>
  avgRating: number | null
  ratingCount: number
}

const KIND_LABEL: Record<AdminFeedbackRow["kind"], string> = {
  general: "General",
  question: "Question",
  bug: "Bug",
  rating: "Rating",
}

const KIND_ICON: Record<
  AdminFeedbackRow["kind"],
  React.ComponentType<{ className?: string; style?: React.CSSProperties }>
> = {
  general: MessageSquare,
  question: HelpCircle,
  bug: Bug,
  rating: Star,
}

const STATUS_OPTIONS: AdminFeedbackRow["status"][] = [
  "open",
  "reviewed",
  "fixed",
  "wontfix",
  "duplicate",
]

const STATUS_LABEL: Record<AdminFeedbackRow["status"], string> = {
  open: "Open",
  reviewed: "Reviewed",
  fixed: "Fixed",
  wontfix: "Won't fix",
  duplicate: "Duplicate",
}

const STATUS_COLOR: Record<AdminFeedbackRow["status"], string> = {
  open: "#C9A84C",
  reviewed: "#888888",
  fixed: "#3ECF8E",
  wontfix: "#555555",
  duplicate: "#555555",
}

export default function AdminFeedbackClient({
  rows,
  tableMissing,
  tableRowCount,
  metadataRowCount,
  topQuestions,
  topBugSources,
  avgRating,
  ratingCount,
}: Props) {
  const [statusFilter, setStatusFilter] = useState<"all" | AdminFeedbackRow["status"]>("open")
  const [kindFilter, setKindFilter] = useState<"all" | AdminFeedbackRow["kind"]>("all")
  const [search, setSearch] = useState("")

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase()
    return rows.filter((r) => {
      if (statusFilter !== "all" && r.status !== statusFilter) return false
      if (kindFilter !== "all" && r.kind !== kindFilter) return false
      if (q.length > 0) {
        const hay = [r.message, r.question_id, r.source_path, r.tag, r.user_email]
          .filter(Boolean)
          .join(" ")
          .toLowerCase()
        if (!hay.includes(q)) return false
      }
      return true
    })
  }, [rows, statusFilter, kindFilter, search])

  const counts = useMemo(() => {
    const by: Record<string, number> = { all: rows.length }
    for (const s of STATUS_OPTIONS) by[s] = 0
    for (const r of rows) by[r.status] = (by[r.status] ?? 0) + 1
    return by
  }, [rows])

  return (
    <div className="space-y-5 max-w-6xl">
      <header className="space-y-1.5">
        <p className="text-[11px] uppercase tracking-[0.22em] text-[#C9A84C] font-semibold">
          Admin
        </p>
        <h1 className="text-xl text-[#F0F0F0] font-semibold">Feedback triage</h1>
        <p className="text-sm text-[#888888]">
          {rows.length} total entries — {tableRowCount} from the dedicated table,{" "}
          {metadataRowCount} from user_metadata fallback.
        </p>
      </header>

      {tableMissing ? (
        <div
          className="rounded-xl border p-4 flex gap-3 items-start"
          style={{
            borderColor: "rgba(201,168,76,0.25)",
            backgroundColor: "rgba(201,168,76,0.06)",
          }}
        >
          <AlertTriangle className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: "#C9A84C" }} />
          <div className="text-sm text-[#C0C0C0] space-y-1">
            <p className="font-medium text-[#F0F0F0]">
              The <code className="text-[#C9A84C]">beta_feedback</code> table doesn&apos;t exist
              yet.
            </p>
            <p className="text-[13px] text-[#888888]">
              All entries below are reading from{" "}
              <code className="text-[#C0C0C0]">user_metadata.beta_feedback</code>. Status updates
              from this UI won&apos;t persist until the migration runs. Paste the SQL from{" "}
              <code className="text-[#C0C0C0]">src/lib/beta-feedback.ts::__schema_migration</code>{" "}
              into the Supabase SQL editor to enable the table path.
            </p>
          </div>
        </div>
      ) : null}

      {/* Aggregates panel */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        <Card title="Top flagged questions (last 7 days)">
          {topQuestions.length === 0 ? (
            <p className="text-xs text-[#888888]">No question flags yet.</p>
          ) : (
            <ul className="space-y-1.5">
              {topQuestions.map((q) => (
                <li
                  key={q.questionId}
                  className="flex items-center justify-between gap-2 text-xs"
                >
                  <Link
                    href={`/review/question/${q.questionId}`}
                    className="text-[#C0C0C0] hover:text-[#F0F0F0] truncate"
                    title={q.questionId}
                  >
                    {q.questionId}
                  </Link>
                  <span
                    className="text-[10px] px-1.5 py-0.5 rounded font-semibold"
                    style={{
                      backgroundColor: "rgba(201,168,76,0.12)",
                      color: "#C9A84C",
                    }}
                  >
                    {q.count}×
                  </span>
                </li>
              ))}
            </ul>
          )}
        </Card>
        <Card title="Top bug source-paths (last 7 days)">
          {topBugSources.length === 0 ? (
            <p className="text-xs text-[#888888]">No bug reports yet.</p>
          ) : (
            <ul className="space-y-1.5">
              {topBugSources.map((s) => (
                <li
                  key={s.sourcePath}
                  className="flex items-center justify-between gap-2 text-xs"
                >
                  <span className="text-[#C0C0C0] truncate" title={s.sourcePath}>
                    {s.sourcePath}
                  </span>
                  <span
                    className="text-[10px] px-1.5 py-0.5 rounded font-semibold"
                    style={{
                      backgroundColor: "rgba(255,68,68,0.12)",
                      color: "#FF7777",
                    }}
                  >
                    {s.count}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </Card>
        <Card title="Ratings">
          {avgRating === null ? (
            <p className="text-xs text-[#888888]">No ratings yet.</p>
          ) : (
            <div className="space-y-2">
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-semibold text-[#F0F0F0]">
                  {avgRating.toFixed(2)}
                </span>
                <span className="text-xs text-[#888888]">/ 5.00</span>
              </div>
              <p className="text-xs text-[#888888]">
                Average across {ratingCount} rating{ratingCount === 1 ? "" : "s"}.
              </p>
            </div>
          )}
        </Card>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap items-center gap-2 text-xs">
        <Filter className="w-3.5 h-3.5 text-[#888888]" />
        <FilterPill
          active={statusFilter === "all"}
          onClick={() => setStatusFilter("all")}
          label={`All (${counts.all})`}
        />
        {STATUS_OPTIONS.map((s) => (
          <FilterPill
            key={s}
            active={statusFilter === s}
            onClick={() => setStatusFilter(s)}
            label={`${STATUS_LABEL[s]} (${counts[s] ?? 0})`}
            color={STATUS_COLOR[s]}
          />
        ))}
        <span className="mx-1 text-[#333333]">·</span>
        <FilterPill
          active={kindFilter === "all"}
          onClick={() => setKindFilter("all")}
          label="All kinds"
        />
        {(["question", "bug", "general", "rating"] as const).map((k) => (
          <FilterPill
            key={k}
            active={kindFilter === k}
            onClick={() => setKindFilter(k)}
            label={KIND_LABEL[k]}
          />
        ))}
        <input
          type="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search message / question / path…"
          className="ml-auto w-72 max-w-full px-3 py-1.5 text-xs rounded-lg border border-white/[0.08] bg-[#0D0D0D] text-[#F0F0F0] placeholder:text-[#888888] focus:outline-none focus:border-[#C9A84C]/40"
        />
      </div>

      {/* Queue */}
      {filtered.length === 0 ? (
        <div className="rounded-xl border border-white/[0.06] bg-[#111111] p-8 text-center">
          <p className="text-sm text-[#888888]">No feedback rows match the current filters.</p>
        </div>
      ) : (
        <ul className="space-y-2">
          {filtered.map((r) => (
            <FeedbackRowItem key={`${r.source}-${r.id}`} row={r} />
          ))}
        </ul>
      )}
    </div>
  )
}

function Card({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-xl border border-white/[0.06] bg-[#111111] p-4 space-y-3">
      <p className="text-[11px] uppercase tracking-[0.18em] text-[#888888] font-semibold">
        {title}
      </p>
      {children}
    </div>
  )
}

function FilterPill({
  active,
  onClick,
  label,
  color,
}: {
  active: boolean
  onClick: () => void
  label: string
  color?: string
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="px-2.5 py-1 rounded-full border transition-colors"
      style={{
        borderColor: active ? color ?? "#C9A84C" : "rgba(255,255,255,0.08)",
        backgroundColor: active
          ? color
            ? `${color}1F`
            : "rgba(201,168,76,0.12)"
          : "transparent",
        color: active ? color ?? "#C9A84C" : "#888888",
      }}
    >
      {label}
    </button>
  )
}

function FeedbackRowItem({ row }: { row: AdminFeedbackRow }) {
  const router = useRouter()
  const [pending, startTransition] = useTransition()
  const [error, setError] = useState<string | null>(null)
  const [localStatus, setLocalStatus] = useState(row.status)
  const Icon = KIND_ICON[row.kind]

  const tableEditable = row.source === "table"

  function changeStatus(next: AdminFeedbackRow["status"]) {
    if (!tableEditable) return
    if (next === localStatus) return
    setError(null)
    setLocalStatus(next)
    startTransition(async () => {
      try {
        const res = await fetch(`/api/admin/feedback/${row.id}`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ status: next }),
        })
        if (!res.ok) {
          const body = (await res.json().catch(() => null)) as { error?: string } | null
          throw new Error(body?.error ?? `Status update failed (${res.status})`)
        }
        // Refresh server data so aggregates / counts reflect the change.
        router.refresh()
      } catch (e) {
        setLocalStatus(row.status)
        setError(e instanceof Error ? e.message : "Status update failed")
      }
    })
  }

  return (
    <li className="rounded-xl border border-white/[0.06] bg-[#111111] p-4 space-y-3">
      <div className="flex flex-wrap items-start gap-3">
        <div
          className="flex items-center justify-center w-8 h-8 rounded-lg flex-shrink-0"
          style={{ backgroundColor: "rgba(201,168,76,0.10)" }}
        >
          <Icon className="w-4 h-4" style={{ color: "#C9A84C" }} />
        </div>
        <div className="min-w-0 flex-1 space-y-1.5">
          <div className="flex flex-wrap items-center gap-2 text-[11px]">
            <span
              className="px-1.5 py-0.5 rounded font-semibold uppercase tracking-wide"
              style={{
                backgroundColor: "rgba(201,168,76,0.12)",
                color: "#C9A84C",
              }}
            >
              {KIND_LABEL[row.kind]}
            </span>
            {row.tag ? (
              <span className="px-1.5 py-0.5 rounded text-[#C0C0C0] border border-white/[0.08]">
                {row.tag}
              </span>
            ) : null}
            {row.rating != null ? (
              <span className="text-[#C9A84C]">{"★".repeat(row.rating)}</span>
            ) : null}
            <span className="text-[#888888]">·</span>
            <span className="text-[#888888]">
              {new Date(row.created_at).toLocaleString(undefined, {
                month: "short",
                day: "numeric",
                hour: "2-digit",
                minute: "2-digit",
              })}
            </span>
            {row.user_email ? (
              <>
                <span className="text-[#888888]">·</span>
                <span className="text-[#888888] truncate max-w-[16rem]">{row.user_email}</span>
              </>
            ) : null}
            {row.source === "user_metadata" ? (
              <span
                className="ml-auto px-1.5 py-0.5 rounded font-semibold uppercase tracking-wide text-[10px]"
                style={{ backgroundColor: "rgba(85,85,85,0.20)", color: "#888888" }}
                title="This row lives in user_metadata.beta_feedback. Status updates apply only after the table migration runs."
              >
                read-only
              </span>
            ) : null}
          </div>

          {row.message ? (
            <p className="text-sm text-[#F0F0F0] whitespace-pre-wrap leading-relaxed">
              {row.message}
            </p>
          ) : (
            <p className="text-sm text-[#888888] italic">(no message)</p>
          )}

          <div className="flex flex-wrap items-center gap-3 text-xs text-[#888888]">
            {row.question_id ? (
              <Link
                href={`/review/question/${row.question_id}`}
                className="inline-flex items-center gap-1 text-[#C9A84C] hover:text-[#F0F0F0]"
              >
                <ExternalLink className="w-3 h-3" />
                {row.question_id}
              </Link>
            ) : null}
            {row.source_path ? (
              <span className="truncate max-w-[28rem]" title={row.source_path}>
                from <span className="text-[#C0C0C0]">{row.source_path}</span>
              </span>
            ) : null}
          </div>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-white/[0.04]">
        <span className="text-[11px] text-[#888888] uppercase tracking-wide">Status</span>
        {STATUS_OPTIONS.map((s) => {
          const active = localStatus === s
          return (
            <button
              key={s}
              type="button"
              disabled={!tableEditable || pending}
              onClick={() => changeStatus(s)}
              className="px-2 py-0.5 rounded-full border text-[11px] transition-colors disabled:cursor-not-allowed"
              style={{
                borderColor: active ? STATUS_COLOR[s] : "rgba(255,255,255,0.06)",
                backgroundColor: active ? `${STATUS_COLOR[s]}1F` : "transparent",
                color: active ? STATUS_COLOR[s] : tableEditable ? "#888888" : "#555555",
                opacity: !tableEditable ? 0.5 : 1,
              }}
            >
              {STATUS_LABEL[s]}
            </button>
          )
        })}
        {pending ? (
          <Loader2 className="w-3.5 h-3.5 animate-spin text-[#888888]" />
        ) : null}
        {error ? (
          <span className="text-[11px] text-[#FF7777] ml-2">{error}</span>
        ) : null}
      </div>
    </li>
  )
}
