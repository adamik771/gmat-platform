"use client"

/**
 * REQUIRES SUPABASE MIGRATION — run before the remediation-flag UI works:
 *
 *   alter table public.error_tags
 *     add column if not exists remediation_assigned_at timestamptz null,
 *     add column if not exists remediation_completed_at timestamptz null;
 *
 *   alter table public.error_tags
 *     drop constraint if exists error_tags_remediation_order;
 *   alter table public.error_tags
 *     add constraint error_tags_remediation_order
 *       check (
 *         remediation_completed_at is null
 *         or remediation_assigned_at is not null
 *       );
 *
 * Until this runs, clicks on the cycle control fail with "column does
 * not exist" (error surfaces inline, same as the wave-17 + wave-23
 * pattern). Read-side queries still work — the default-null columns are
 * absent so the UI just reads "unassigned" for every row.
 */

import { useMemo, useState, useTransition } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import {
  CheckCheck,
  ChevronDown,
  ChevronRight,
  CheckCircle2,
  Circle,
  Filter,
  Loader2,
  Repeat,
  Target,
  X,
} from "lucide-react"
import ReactMarkdown, { type Components } from "react-markdown"
import remarkGfm from "remark-gfm"
import rehypeCaretSup from "@/lib/rehype-caret-sup"
import { cn } from "@/lib/utils"
import type { Section } from "@/types"
import {
  ERROR_TAGS,
  ERROR_TAG_BY_ID,
  ERROR_TAG_DEFS,
  ERROR_FAMILIES,
  ROOT_CAUSE_BY_ID,
  ROOT_CAUSE_DEFS,
  ROOT_CAUSE_FAMILIES,
  type ErrorTag,
  type ErrorFamily,
  type RootCauseFamily,
} from "./constants"

// Re-export so existing consumers that imported from ErrorLogClient keep working.
export { ERROR_TAGS, type ErrorTag }

/**
 * Color-code tags by family instead of per-tag. With 14 new tags plus
 * legacy tags, per-tag palettes become unreadable; family colors give
 * the student a quick visual read of which *kind* of error they're
 * making (DI process vs Timing vs Behaviour) across the row.
 */
const FAMILY_PALETTE: Record<ErrorFamily, { color: string; bg: string }> = {
  Knowledge: { color: "#FF4444", bg: "rgba(255,68,68,0.12)" },
  Translation: { color: "#FF8866", bg: "rgba(255,136,102,0.12)" },
  "DI logic": { color: "#C9A84C", bg: "rgba(201,168,76,0.14)" },
  Reasoning: { color: "#E8C97A", bg: "rgba(232,201,122,0.14)" },
  Reading: { color: "#3ECF8E", bg: "rgba(62,207,142,0.12)" },
  "DI process": { color: "#5FA8FF", bg: "rgba(95,168,255,0.12)" },
  Execution: { color: "#A8A8A8", bg: "rgba(168,168,168,0.12)" },
  Timing: { color: "#FF9933", bg: "rgba(255,153,51,0.12)" },
  Behaviour: { color: "#B088FF", bg: "rgba(176,136,255,0.12)" },
}

/** Legacy-tag fallback palette — keeps old rows readable until re-tagged. */
const LEGACY_PALETTE = { color: "#888888", bg: "rgba(136,136,136,0.1)" }

/** Palette for the root-cause families (K1…F1 hierarchy). Distinct from
 *  the question-type FAMILY_PALETTE so the two taxonomies don't collide
 *  visually — the eye can read "WHAT kind of question" vs "WHY it broke"
 *  at a glance. */
const ROOT_CAUSE_FAMILY_PALETTE: Record<RootCauseFamily, { color: string; bg: string }> = {
  Knowledge: { color: "#FF4444", bg: "rgba(255,68,68,0.12)" },
  Representation: { color: "#FF8866", bg: "rgba(255,136,102,0.12)" },
  Strategy: { color: "#C9A84C", bg: "rgba(201,168,76,0.14)" },
  Execution: { color: "#A8A8A8", bg: "rgba(168,168,168,0.12)" },
  Pacing: { color: "#FF9933", bg: "rgba(255,153,51,0.12)" },
  Judgement: { color: "#B088FF", bg: "rgba(176,136,255,0.12)" },
  Fatigue: { color: "#6FB5F6", bg: "rgba(111,181,246,0.12)" },
}

function paletteForTag(tagId: string): { color: string; bg: string } {
  const def = ERROR_TAG_BY_ID[tagId]
  if (!def) return LEGACY_PALETTE
  return FAMILY_PALETTE[def.family]
}

function labelForTag(tagId: string): string {
  return ERROR_TAG_BY_ID[tagId]?.label ?? tagId
}

// Shared markdown styling for the expanded mistake detail. Tuned compact —
// smaller than the /chapters reader prose, denser than a blog post.
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

export interface MistakeEntry {
  id: string
  questionId: string
  section: Section
  topic: string
  subtopic: string
  difficulty: string
  questionType: string
  selectedAnswer: number | null
  /** Time the student spent on this attempt, in milliseconds. May be
   *  null for legacy rows. Drives the auto-classifier's pacing bucket. */
  timeSpentMs: number | null
  sessionSlug: string | null
  createdAt: string | null
  prompt: string | null
  options: string[] | null
  correctAnswer: number | null
  correctAnswerLetter: string | null
  explanation: string | null
  context: string | null
  twoPartColumns: string[] | null
  tag: ErrorTag | null
  /** Process-failure root cause (K1/…/F1). Layers on top of `tag` —
   *  `tag` describes WHAT kind of question, `rootCause` describes WHERE
   *  the solve process broke. See `ROOT_CAUSE_DEFS` in constants.ts. */
  rootCause: string | null
  /** Up to 2 secondary causes that contributed alongside the primary
   *  root cause. Research-report spec: "one root cause and up to two
   *  contributing causes." Never includes the primary. */
  contributingCauses: string[]
  notes: string | null
  reviewed: boolean
  /** Remediation workflow state — PDF v2 p.9 telemetry. Null/null =
   *  unassigned; assigned non-null + completed null = in-progress;
   *  both non-null = completed. Completed-without-assigned is invalid
   *  and rejected server-side. */
  remediationAssignedAt: string | null
  remediationCompletedAt: string | null
  /** G9 — provenance of the tag/root_cause: "auto" rows came from the
   *  classifier's persist hook, "manual" rows came from a student edit.
   *  Null on legacy rows where the column hasn't been populated yet. */
  confidence: "auto" | "manual" | null
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

/**
 * Derived 3-state for the remediation cycle control.
 *   unassigned  — both timestamps null (nothing started)
 *   in-progress — assigned non-null, completed null
 *   completed   — both non-null (assigned_at must precede completed_at)
 * A completed_at with a null assigned_at is invalid state and folds back
 * to "unassigned" defensively; the API + DB constraint both reject it
 * on write.
 */
type RemediationState = "unassigned" | "in-progress" | "completed"

function remediationStateFor(entry: {
  remediationAssignedAt: string | null
  remediationCompletedAt: string | null
}): RemediationState {
  if (entry.remediationAssignedAt && entry.remediationCompletedAt)
    return "completed"
  if (entry.remediationAssignedAt) return "in-progress"
  return "unassigned"
}

/** Short relative-time string for the cycle-control label
 *  ("3d ago" / "yesterday" / "today"). Distinct from `relativeDate`
 *  which renders day-grain for the list column. */
function shortRelative(iso: string): string {
  const t = new Date(iso).getTime()
  if (Number.isNaN(t)) return ""
  const diffMs = Date.now() - t
  if (diffMs < 60_000) return "just now"
  const diffDays = Math.floor(diffMs / 86400000)
  if (diffDays === 0) return "today"
  if (diffDays === 1) return "yesterday"
  if (diffDays < 7) return `${diffDays}d ago`
  if (diffDays < 30) return `${Math.floor(diffDays / 7)}w ago`
  return new Date(iso).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  })
}

const SECTION_FILTERS: ("All" | Section)[] = ["All", "Quant", "Verbal", "DI"]
const STATUS_FILTERS = ["All", "Pending", "Reviewed"] as const
type StatusFilter = (typeof STATUS_FILTERS)[number]

export default function ErrorLogClient({
  mistakes: initialMistakes,
  remediationInProgress,
  remediationCompletedThisWeek,
}: {
  mistakes: MistakeEntry[]
  remediationInProgress: number
  remediationCompletedThisWeek: number
}) {
  const [sectionFilter, setSectionFilter] = useState<(typeof SECTION_FILTERS)[number]>("All")
  const [statusFilter, setStatusFilter] = useState<StatusFilter>("All")
  const [expandedId, setExpandedId] = useState<string | null>(null)
  // Local mistake list — starts from server data, then mutates optimistically
  // as the user tags / toggles. Server also gets the update so a refresh
  // won't lose it.
  const [mistakes, setMistakes] = useState(initialMistakes)

  const filtered = useMemo(() => {
    let list = mistakes
    if (sectionFilter !== "All")
      list = list.filter((m) => m.section === sectionFilter)
    if (statusFilter === "Pending") list = list.filter((m) => !m.reviewed)
    else if (statusFilter === "Reviewed") list = list.filter((m) => m.reviewed)
    return list
  }, [mistakes, sectionFilter, statusFilter])

  // Live remediation counts. The server passes snapshot counts so SSR
  // renders the chip instantly; once the user cycles a row we re-derive
  // from local `mistakes` so the chip tracks the optimistic update.
  // Initial render uses the server-supplied values (hydration-stable);
  // post-mount we let the memo take over (`initialMistakes === mistakes`
  // no-op on first render means the SSR counts stay authoritative until
  // the user interacts).
  const { inProgressCount, completedWeekCount } = useMemo(() => {
    if (mistakes === initialMistakes) {
      return {
        inProgressCount: remediationInProgress,
        completedWeekCount: remediationCompletedThisWeek,
      }
    }
    const weekAgo = Date.now() - 7 * 86400000
    let inProgress = 0
    let completedWeek = 0
    for (const m of mistakes) {
      if (m.remediationAssignedAt && !m.remediationCompletedAt) inProgress += 1
      if (m.remediationCompletedAt) {
        const t = new Date(m.remediationCompletedAt).getTime()
        if (Number.isFinite(t) && t >= weekAgo) completedWeek += 1
      }
    }
    return { inProgressCount: inProgress, completedWeekCount: completedWeek }
  }, [mistakes, initialMistakes, remediationInProgress, remediationCompletedThisWeek])

  function updateMistake(id: string, patch: Partial<MistakeEntry>) {
    setMistakes((prev) =>
      prev.map((m) => (m.id === id ? { ...m, ...patch } : m))
    )
  }

  // Row-level cycle: unassigned → in-progress → completed → unassigned.
  // Writes timestamps through `/api/error-tags` (same endpoint the
  // reviewed toggle uses). Optimistic — row + chip update immediately;
  // on API failure we snap back.
  async function cycleRemediation(entry: MistakeEntry) {
    const state = remediationStateFor(entry)
    const nowIso = new Date().toISOString()
    let next: {
      remediationAssignedAt: string | null
      remediationCompletedAt: string | null
    }
    if (state === "unassigned") {
      next = { remediationAssignedAt: nowIso, remediationCompletedAt: null }
    } else if (state === "in-progress") {
      next = {
        remediationAssignedAt: entry.remediationAssignedAt,
        remediationCompletedAt: nowIso,
      }
    } else {
      next = { remediationAssignedAt: null, remediationCompletedAt: null }
    }

    const snapshot = {
      remediationAssignedAt: entry.remediationAssignedAt,
      remediationCompletedAt: entry.remediationCompletedAt,
    }
    updateMistake(entry.id, next)

    try {
      const res = await fetch("/api/error-tags", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ attemptId: entry.id, ...next }),
      })
      if (!res.ok) {
        const body = (await res.json().catch(() => ({}))) as { error?: string }
        throw new Error(body.error || `Request failed (${res.status})`)
      }
    } catch {
      // Roll back on failure — the SQL migration may not have landed yet,
      // in which case the cycle control is effectively read-only until
      // Adam runs the ALTER TABLE. No toast here to keep the row quiet;
      // the expanded editor surfaces API errors properly.
      updateMistake(entry.id, snapshot)
    }
  }

  return (
    <div className="space-y-4">
      {/* Remediation summary chip — "N in progress · M completed this week".
          Zero-zero case is hidden so a brand-new student doesn't see
          an empty stat; any non-zero state surfaces the chip. */}
      {(inProgressCount > 0 || completedWeekCount > 0) && (
        <div className="flex flex-wrap items-center gap-2 text-xs">
          {inProgressCount > 0 && (
            <span
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-[11px] font-semibold uppercase tracking-[0.18em] tabular-nums"
              style={{
                borderColor: "rgba(201,168,76,0.3)",
                backgroundColor: "rgba(201,168,76,0.08)",
                color: "#C9A84C",
              }}
            >
              <Target className="w-3 h-3" />
              {inProgressCount} in progress
            </span>
          )}
          {completedWeekCount > 0 && (
            <span
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-[11px] font-semibold uppercase tracking-[0.18em] tabular-nums"
              style={{
                borderColor: "rgba(62,207,142,0.3)",
                backgroundColor: "rgba(62,207,142,0.08)",
                color: "#3ECF8E",
              }}
            >
              <CheckCheck className="w-3 h-3" />
              {completedWeekCount} completed this week
            </span>
          )}
        </div>
      )}

      {/* Filters */}
      <div className="flex flex-wrap items-center gap-3">
        <div className="flex items-center gap-1.5 text-[10px] text-[#888888] uppercase tracking-[0.22em] font-semibold">
          <Filter className="w-3.5 h-3.5" />
          Filter
        </div>
        <div className="flex gap-2">
          {SECTION_FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setSectionFilter(f)}
              className={cn(
                "px-3.5 py-1.5 rounded-xl text-xs font-semibold tracking-tight transition-all duration-200",
                sectionFilter === f
                  ? "text-[#0A0A0A] scale-[1.02]"
                  : "border border-white/[0.08] text-[#888888] hover:text-[#F0F0F0] hover:border-white/[0.18]"
              )}
              style={sectionFilter === f ? { backgroundColor: "#C9A84C" } : {}}
            >
              {f}
            </button>
          ))}
        </div>
        <div className="flex gap-2">
          {STATUS_FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setStatusFilter(f)}
              className={cn(
                "px-3.5 py-1.5 rounded-xl text-xs font-semibold tracking-tight transition-colors",
                statusFilter === f
                  ? "border border-[#C9A84C]/40 text-[#C9A84C] bg-[#C9A84C]/10"
                  : "border border-white/[0.08] text-[#888888] hover:text-[#F0F0F0] hover:border-white/[0.18]"
              )}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* List */}
      {filtered.length === 0 ? (
        <div className="p-8 rounded-2xl border border-white/[0.06] bg-[#0F0F0F] text-center">
          <p className="text-[14px] text-[#C0C0C0] tracking-tight">
            No mistakes in this section yet.
          </p>
        </div>
      ) : (
        <div className="rounded-2xl border border-white/[0.06] bg-[#0F0F0F] overflow-hidden">
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
                  className="w-full text-left grid grid-cols-12 px-5 py-4 items-center gap-2 hover:bg-white/[0.02] transition-colors"
                >
                  <div className="col-span-1 flex items-center gap-1.5 text-[11px] text-[#888888] tabular-nums">
                    {isOpen ? (
                      <ChevronDown className="w-3 h-3" />
                    ) : (
                      <ChevronRight className="w-3 h-3" />
                    )}
                    {relativeDate(entry.createdAt)}
                  </div>
                  <div className="col-span-2">
                    <p className="text-[12px] font-semibold tracking-tight text-[#F0F0F0]">
                      {entry.section}
                    </p>
                    <p className="text-[11px] text-[#888888] truncate">
                      {entry.topic}
                    </p>
                  </div>
                  <div className="col-span-5">
                    <p className="text-[12px] text-[#C0C0C0] leading-relaxed line-clamp-2">
                      {entry.prompt ?? (
                        <span className="italic text-[#555555]">
                          Question source not found
                        </span>
                      )}
                    </p>
                  </div>
                  <div className="col-span-2 flex items-center gap-2 text-[11px]">
                    <span className="text-[#555555] uppercase tracking-[0.14em]">
                      You
                    </span>
                    <span
                      className="font-display font-semibold text-[13px] tabular-nums"
                      style={{ color: "#FF4444" }}
                    >
                      {userLetter}
                    </span>
                    <span className="text-[#333333]">·</span>
                    <span
                      className="font-display font-semibold text-[13px] tabular-nums"
                      style={{ color: "#3ECF8E" }}
                    >
                      {entry.correctAnswerLetter ?? "—"}
                    </span>
                  </div>
                  <div className="col-span-1 flex items-center justify-center gap-1 flex-wrap">
                    {entry.tag ? (
                      (() => {
                        const p = paletteForTag(entry.tag)
                        const isAuto = entry.confidence === "auto"
                        return (
                          <span
                            className="px-2 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-[0.14em] truncate max-w-full inline-flex items-center gap-1"
                            style={{
                              backgroundColor: p.bg,
                              color: p.color,
                              opacity: isAuto ? 0.85 : 1,
                              border: isAuto ? `1px dashed ${p.color}` : undefined,
                            }}
                            title={
                              (ERROR_TAG_BY_ID[entry.tag]?.description ??
                                "Legacy tag") +
                              (isAuto
                                ? " · Auto-classified — confirm by tagging it yourself"
                                : "")
                            }
                          >
                            {labelForTag(entry.tag)}
                            {isAuto ? (
                              <span className="font-mono normal-case opacity-80 text-[9px]">
                                ·auto
                              </span>
                            ) : null}
                          </span>
                        )
                      })()
                    ) : (
                      <span className="text-[10px] text-[#444444]">—</span>
                    )}
                    {entry.rootCause && ROOT_CAUSE_BY_ID[entry.rootCause] && (
                      <span
                        className="px-1.5 py-0.5 rounded text-[9px] font-mono font-semibold"
                        style={{
                          backgroundColor:
                            ROOT_CAUSE_FAMILY_PALETTE[
                              ROOT_CAUSE_BY_ID[entry.rootCause]!.family
                            ].bg,
                          color:
                            ROOT_CAUSE_FAMILY_PALETTE[
                              ROOT_CAUSE_BY_ID[entry.rootCause]!.family
                            ].color,
                        }}
                        title={ROOT_CAUSE_BY_ID[entry.rootCause]!.description}
                      >
                        {entry.rootCause}
                      </span>
                    )}
                    {entry.contributingCauses.length > 0 && (
                      <span
                        className="text-[9px] font-mono text-[#555555] tabular-nums"
                        title={`Contributing: ${entry.contributingCauses.join(", ")}`}
                      >
                        +{entry.contributingCauses.length}
                      </span>
                    )}
                  </div>
                  <div className="col-span-1 flex items-center justify-end gap-1.5">
                    <RemediationCycle
                      entry={entry}
                      onCycle={() => cycleRemediation(entry)}
                    />
                    {entry.reviewed ? (
                      <CheckCircle2
                        className="w-4 h-4 flex-shrink-0"
                        style={{ color: "#3ECF8E" }}
                        aria-label="Reviewed"
                      />
                    ) : (
                      <Circle
                        className="w-4 h-4 flex-shrink-0 text-[#444444]"
                        aria-label="Not reviewed"
                      />
                    )}
                    <Link
                      href={`/review/question/${entry.questionId}`}
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1 text-xs px-2 py-1 rounded-lg border transition-colors"
                      style={{
                        borderColor: "rgba(201,168,76,0.25)",
                        color: "#C9A84C",
                      }}
                      aria-label="Open deep review for this question"
                    >
                      <Target className="w-3 h-3" />
                      Deep review
                    </Link>
                    {entry.sessionSlug && (
                      <Link
                        href={`/practice/session/${entry.sessionSlug}`}
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-1 text-xs px-2 py-1 rounded-lg border border-white/[0.08] text-[#888888] hover:text-[#F0F0F0] hover:border-white/[0.2] transition-colors"
                        aria-label="Retake this practice set"
                      >
                        <Repeat className="w-3 h-3" />
                      </Link>
                    )}
                  </div>
                </button>

                {/* Expanded detail */}
                {isOpen && (
                  <ExpandedMistake
                    entry={entry}
                    onClose={() => setExpandedId(null)}
                    onUpdate={(patch) => updateMistake(entry.id, patch)}
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
 * Per-row 3-state cycle control: unassigned → in-progress → completed →
 * unassigned. Rendered as a `<span role="button">` because the row
 * wrapper is already a `<button>` — nested native buttons are invalid
 * HTML. Matches the affordance pattern the existing session-retry Link
 * uses inside the same row.
 *
 * Colour cues (matches design tokens):
 *   unassigned  — muted `#555555`, outline border
 *   in-progress — gold `#C9A84C` with gold-tinted bg
 *   completed   — green `#3ECF8E` with green-tinted bg
 */
function RemediationCycle({
  entry,
  onCycle,
}: {
  entry: MistakeEntry
  onCycle: () => void
}) {
  const state = remediationStateFor(entry)
  const label =
    state === "unassigned"
      ? "Start remediation"
      : state === "in-progress"
      ? `In progress · ${
          entry.remediationAssignedAt
            ? shortRelative(entry.remediationAssignedAt)
            : ""
        }`
      : `Completed · ${
          entry.remediationCompletedAt
            ? shortRelative(entry.remediationCompletedAt)
            : ""
        }`

  const styles =
    state === "unassigned"
      ? {
          borderColor: "rgba(255,255,255,0.08)",
          color: "#555555",
          backgroundColor: "transparent",
        }
      : state === "in-progress"
      ? {
          borderColor: "rgba(201,168,76,0.4)",
          color: "#C9A84C",
          backgroundColor: "rgba(201,168,76,0.08)",
        }
      : {
          borderColor: "rgba(62,207,142,0.4)",
          color: "#3ECF8E",
          backgroundColor: "rgba(62,207,142,0.08)",
        }

  const Icon = state === "completed" ? CheckCheck : Target
  const nextLabel =
    state === "unassigned"
      ? "Mark remediation as in-progress"
      : state === "in-progress"
      ? "Mark remediation as completed"
      : "Clear remediation state"

  // Compact text label — "3d ago" / "yesterday". Hidden on the
  // unassigned state so empty rows stay quiet. On active states the row
  // reads e.g. `Target 3d ago` / `CheckCheck yesterday`.
  const textLabel =
    state === "in-progress" && entry.remediationAssignedAt
      ? shortRelative(entry.remediationAssignedAt)
      : state === "completed" && entry.remediationCompletedAt
      ? shortRelative(entry.remediationCompletedAt)
      : null

  return (
    <span
      role="button"
      tabIndex={0}
      title={label}
      aria-label={nextLabel}
      onClick={(e) => {
        e.stopPropagation()
        onCycle()
      }}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault()
          e.stopPropagation()
          onCycle()
        }
      }}
      className="inline-flex items-center gap-1 text-[10px] font-semibold tracking-tight px-2 py-1 rounded-full border cursor-pointer transition-colors hover:opacity-80 select-none"
      style={styles}
    >
      <Icon className="w-3 h-3 flex-shrink-0" />
      {textLabel && <span className="whitespace-nowrap">{textLabel}</span>}
    </span>
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
  onUpdate,
}: {
  entry: MistakeEntry
  onClose: () => void
  onUpdate: (patch: Partial<MistakeEntry>) => void
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
          <p className="text-[10px] uppercase tracking-[0.22em] font-semibold text-[#C9A84C] mb-2">
            Reference
          </p>
          <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeCaretSup]} components={mdComponents}>
            {entry.context}
          </ReactMarkdown>
        </div>
      )}

      <div>
        <p className="text-[10px] uppercase tracking-[0.22em] font-semibold text-[#888888] mb-2">
          Question
        </p>
        <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeCaretSup]} components={mdComponents}>
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
                  <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeCaretSup]} components={mdComponents}>
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
          <p className="text-[10px] uppercase tracking-[0.22em] font-semibold text-[#C9A84C] mb-2">
            Explanation
          </p>
          <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeCaretSup]} components={mdComponents}>
            {entry.explanation}
          </ReactMarkdown>
        </div>
      )}

      <TagEditor entry={entry} onUpdate={onUpdate} />
    </div>
  )
}

/**
 * Tag / notes / reviewed editor rendered at the bottom of the expanded panel.
 * Writes through to /api/error-tags. Applies optimistic updates via
 * `onUpdate` so the row pill and header chip update immediately, then
 * rolls back on API error.
 */
function TagEditor({
  entry,
  onUpdate,
}: {
  entry: MistakeEntry
  onUpdate: (patch: Partial<MistakeEntry>) => void
}) {
  const [notesDraft, setNotesDraft] = useState(entry.notes ?? "")
  const [notesDirty, setNotesDirty] = useState(false)
  const [savingNotes, setSavingNotes] = useState(false)
  const [saving, startTransition] = useTransition()
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()

  async function save(patch: {
    tag?: ErrorTag | null
    rootCause?: string | null
    contributingCauses?: string[]
    notes?: string
    reviewed?: boolean
  }) {
    setError(null)
    // Optimistic update in the parent's local list. Any user-driven
    // edit promotes the row to manual provenance, matching what the
    // server does on the upsert.
    onUpdate({ ...patch, confidence: "manual" } as Partial<MistakeEntry>)

    try {
      const res = await fetch("/api/error-tags", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ attemptId: entry.id, ...patch }),
      })
      if (!res.ok) {
        const body = (await res.json().catch(() => ({}))) as { error?: string }
        throw new Error(body.error || `Request failed (${res.status})`)
      }
      startTransition(() => router.refresh())
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong")
      // Revert — reset to the snapshot we started from.
      onUpdate({
        tag: entry.tag,
        rootCause: entry.rootCause,
        contributingCauses: entry.contributingCauses,
        notes: entry.notes,
        reviewed: entry.reviewed,
        confidence: entry.confidence,
      })
    }
  }

  async function setTag(tag: ErrorTag | null) {
    await save({ tag })
  }

  async function setRootCause(rootCause: string | null) {
    // Changing the primary root cause implicitly removes it from any
    // existing contributing list — the API would reject the combo
    // otherwise, but filtering here avoids a round-trip failure.
    const filteredContrib =
      rootCause !== null
        ? entry.contributingCauses.filter((c) => c !== rootCause)
        : entry.contributingCauses
    if (filteredContrib.length !== entry.contributingCauses.length) {
      await save({ rootCause, contributingCauses: filteredContrib })
    } else {
      await save({ rootCause })
    }
  }

  async function toggleContributingCause(causeId: string) {
    const current = entry.contributingCauses
    const already = current.includes(causeId)
    let next: string[]
    if (already) {
      next = current.filter((c) => c !== causeId)
    } else {
      if (current.length >= 2) return // cap silently — button is also disabled in UI
      next = [...current, causeId]
    }
    await save({ contributingCauses: next })
  }

  async function commitNotes() {
    if (!notesDirty) return
    setSavingNotes(true)
    const nextNotes = notesDraft.trim() === "" ? null : notesDraft
    await save({ notes: nextNotes ?? "" })
    setNotesDirty(false)
    setSavingNotes(false)
  }

  async function toggleReviewed() {
    await save({ reviewed: !entry.reviewed })
  }

  return (
    <div className="mt-2 pt-5 border-t border-white/[0.06] space-y-4">
      {entry.tag && ERROR_TAG_BY_ID[entry.tag]?.remediation && (
        <div
          className="rounded-lg p-3 border"
          style={{
            borderColor: "rgba(201,168,76,0.2)",
            backgroundColor: "rgba(201,168,76,0.05)",
          }}
        >
          <p
            className="text-[10px] uppercase tracking-widest mb-1"
            style={{ color: "#C9A84C" }}
          >
            Suggested next step
          </p>
          <p className="text-[13px] leading-relaxed text-[#F0F0F0]">
            {ERROR_TAG_BY_ID[entry.tag]!.remediation}
          </p>
        </div>
      )}
      {entry.rootCause && ROOT_CAUSE_BY_ID[entry.rootCause] && (
        <div
          className="rounded-lg p-3 border"
          style={{
            borderColor: "rgba(176,136,255,0.2)",
            backgroundColor: "rgba(176,136,255,0.05)",
          }}
        >
          <p
            className="text-[10px] uppercase tracking-widest mb-1"
            style={{ color: "#B088FF" }}
          >
            Root-cause fix · {ROOT_CAUSE_BY_ID[entry.rootCause]!.label}
          </p>
          <p className="text-[13px] leading-relaxed text-[#F0F0F0]">
            {ROOT_CAUSE_BY_ID[entry.rootCause]!.remediation}
          </p>
        </div>
      )}

      <div>
        <p className="text-[10px] uppercase tracking-[0.22em] font-semibold text-[#888888] mb-2">
          Tag this mistake
        </p>
        <div className="space-y-3">
          {ERROR_FAMILIES.map((family) => {
            const tagsInFamily = ERROR_TAG_DEFS.filter(
              (t) =>
                t.family === family &&
                // Only show tags that apply to this attempt's section (or "All").
                (t.appliesTo.includes("All") ||
                  t.appliesTo.includes(entry.section))
            )
            if (tagsInFamily.length === 0) return null
            return (
              <div key={family}>
                <p className="text-[9px] uppercase tracking-widest text-[#444444] mb-1.5">
                  {family}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {tagsInFamily.map((t) => {
                    const active = entry.tag === t.id
                    const p = FAMILY_PALETTE[t.family]
                    return (
                      <button
                        key={t.id}
                        type="button"
                        onClick={() => setTag(active ? null : (t.id as ErrorTag))}
                        disabled={saving}
                        title={t.description}
                        className={cn(
                          "px-2.5 py-1 rounded text-[11px] font-medium border transition-colors disabled:opacity-60",
                          active
                            ? ""
                            : "border-white/[0.08] text-[#888888] hover:text-[#F0F0F0]"
                        )}
                        style={
                          active
                            ? {
                                backgroundColor: p.bg,
                                color: p.color,
                                borderColor: p.color + "66",
                              }
                            : {}
                        }
                      >
                        {t.label}
                      </button>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>
        {entry.tag && !ERROR_TAG_BY_ID[entry.tag] && (
          <p className="text-[10px] text-[#888888] mt-2">
            This mistake is tagged with a legacy label — pick one above to upgrade
            it and unlock the suggested fix.
          </p>
        )}
      </div>

      <div>
        <p className="text-[10px] uppercase tracking-[0.22em] font-semibold text-[#888888] mb-1">
          Root cause
        </p>
        <p className="text-[11px] text-[#444444] italic mb-2">
          Where did the solve process break? The tag above says
          <em> what</em> kind of question; this says <em>why</em> the answer
          was wrong. One per mistake.
        </p>
        <div className="space-y-3">
          {ROOT_CAUSE_FAMILIES.map((family) => {
            const causes = ROOT_CAUSE_DEFS.filter((c) => c.family === family)
            if (causes.length === 0) return null
            return (
              <div key={family}>
                <p className="text-[9px] uppercase tracking-widest text-[#444444] mb-1.5">
                  {family}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {causes.map((c) => {
                    const active = entry.rootCause === c.id
                    const palette = ROOT_CAUSE_FAMILY_PALETTE[c.family]
                    return (
                      <button
                        key={c.id}
                        type="button"
                        onClick={() =>
                          setRootCause(active ? null : c.id)
                        }
                        disabled={saving}
                        title={c.description}
                        className={cn(
                          "px-2.5 py-1 rounded text-[11px] font-medium border transition-colors disabled:opacity-60",
                          active
                            ? ""
                            : "border-white/[0.08] text-[#888888] hover:text-[#F0F0F0]"
                        )}
                        style={
                          active
                            ? {
                                backgroundColor: palette.bg,
                                color: palette.color,
                                borderColor: palette.color + "66",
                              }
                            : {}
                        }
                      >
                        <span className="font-mono mr-1 opacity-70">{c.id}</span>
                        {c.label}
                      </button>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {entry.rootCause && (
        <div>
          <p className="text-[10px] uppercase tracking-[0.22em] font-semibold text-[#888888] mb-1">
            Contributing causes{" "}
            <span className="text-[#444444] normal-case tracking-normal">
              ({entry.contributingCauses.length}/2)
            </span>
          </p>
          <p className="text-[11px] text-[#444444] italic mb-2">
            Optional — up to two secondary failure modes that amplified the
            primary cause. Leave blank if the miss was clean-single-cause.
          </p>
          <div className="flex flex-wrap gap-1.5">
            {ROOT_CAUSE_DEFS.filter((c) => c.id !== entry.rootCause).map((c) => {
              const active = entry.contributingCauses.includes(c.id)
              const atCap = !active && entry.contributingCauses.length >= 2
              const palette = ROOT_CAUSE_FAMILY_PALETTE[c.family]
              return (
                <button
                  key={c.id}
                  type="button"
                  onClick={() => toggleContributingCause(c.id)}
                  disabled={saving || atCap}
                  title={
                    atCap
                      ? "Already at the 2-cause cap — deselect one first"
                      : c.description
                  }
                  className={cn(
                    "px-2.5 py-1 rounded text-[11px] font-medium border transition-colors disabled:opacity-40 disabled:cursor-not-allowed",
                    active
                      ? ""
                      : "border-white/[0.08] text-[#888888] hover:text-[#F0F0F0]"
                  )}
                  style={
                    active
                      ? {
                          backgroundColor: palette.bg,
                          color: palette.color,
                          borderColor: palette.color + "66",
                        }
                      : {}
                  }
                >
                  <span className="font-mono mr-1 opacity-70">{c.id}</span>
                  {c.label}
                </button>
              )
            })}
          </div>
        </div>
      )}

      <div>
        <p className="text-[10px] uppercase tracking-[0.22em] font-semibold text-[#888888] mb-2">
          Notes{" "}
          <span className="text-[#444444] normal-case tracking-normal italic">
            — why did this go wrong? What will you remember next time?
          </span>
        </p>
        <textarea
          value={notesDraft}
          onChange={(e) => {
            setNotesDraft(e.target.value)
            setNotesDirty(e.target.value !== (entry.notes ?? ""))
          }}
          onBlur={commitNotes}
          rows={3}
          placeholder="e.g. I misread ≥ as >; always double-check inequality direction"
          className="w-full bg-[#0A0A0A] border border-white/[0.08] rounded-lg p-3 text-[14px] text-[#D8D8D8] placeholder:text-[#444444] focus:outline-none focus:border-[#C9A84C]/40 resize-none"
        />
        {(notesDirty || savingNotes) && (
          <p className="text-[10px] text-[#555555] mt-1">
            {savingNotes ? "Saving…" : "Blur or tab out to save"}
          </p>
        )}
      </div>

      <div className="flex items-center justify-between gap-3">
        <button
          type="button"
          onClick={toggleReviewed}
          disabled={saving}
          className={cn(
            "inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors disabled:opacity-60",
            entry.reviewed
              ? "text-[#0A0A0A]"
              : "border border-white/[0.1] text-[#888888] hover:text-[#F0F0F0] hover:border-white/[0.2]"
          )}
          style={entry.reviewed ? { backgroundColor: "#3ECF8E" } : {}}
        >
          {saving ? (
            <Loader2 className="w-3 h-3 animate-spin" />
          ) : entry.reviewed ? (
            <CheckCircle2 className="w-3 h-3" />
          ) : (
            <Circle className="w-3 h-3" />
          )}
          {entry.reviewed ? "Reviewed" : "Mark reviewed"}
        </button>
        {error && (
          <p className="text-xs" style={{ color: "#FF4444" }}>
            {error}
          </p>
        )}
      </div>
    </div>
  )
}
