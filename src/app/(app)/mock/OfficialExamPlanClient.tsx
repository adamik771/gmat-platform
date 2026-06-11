"use client"

import { useMemo, useState, useTransition } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import {
  ArrowRight,
  CalendarClock,
  CheckCircle2,
  ChevronDown,
  ExternalLink,
  Plus,
  Trash2,
} from "lucide-react"
import {
  MS_PER_DAY,
  parseIsoDate,
  deriveScheduleSlots,
} from "@/lib/official-exams"

/**
 * OfficialExamPlanClient — the primary card on /mock.
 *
 * Derives a weekly official-exam schedule from the student's real exam
 * date: up to 6 dates on the same weekday as the exam, strictly before
 * it, ending exactly one week before test day (exam Friday 2026-08-14
 * -> Fridays 2026-07-03 .. 2026-08-07). One official mba.com practice
 * exam per week, same weekday and start time as the real slot, full
 * exam conditions. Scores are typed in here and persisted to
 * user_metadata.official_exam_scores via /api/official-exams.
 */

export interface OfficialExamEntry {
  date: string
  total: number
  quant?: number | null
  verbal?: number | null
  di?: number | null
  label?: string
}

type RowStatus = "scored" | "next-up" | "upcoming" | "missed"

interface PlanRow {
  date: string
  scheduled: boolean
  status: RowStatus
  entry: OfficialExamEntry | null
}

const EYEBROW =
  "text-[10px] font-semibold uppercase tracking-[0.22em] text-[#C9A84C]"
const INPUT_CLASS =
  "w-full px-3 py-2 rounded-lg text-[13px] text-[#F0F0F0] outline-none focus:border-[rgba(201,168,76,0.45)] transition-colors"
const INPUT_STYLE = {
  backgroundColor: "#080808",
  border: "1px solid rgba(255,255,255,0.08)",
} as const

const WEEKDAY_NAMES = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
] as const

function formatDisplayDate(iso: string): string {
  const d = parseIsoDate(iso)
  if (!d) return iso
  return d.toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    timeZone: "UTC",
  })
}

export default function OfficialExamPlanClient({
  examDate,
  entries: initialEntries,
  targetScore,
}: {
  examDate: string | null
  entries: OfficialExamEntry[]
  targetScore: number | null
}) {
  const router = useRouter()
  const [, startTransition] = useTransition()
  const [entries, setEntries] = useState<OfficialExamEntry[]>(
    [...initialEntries].sort((a, b) => a.date.localeCompare(b.date))
  )
  const [formOpen, setFormOpen] = useState(false)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState<string | null>(null)

  // Today is derived client-side — the student's local calendar date is
  // what "this week's slot" should mean, not the server's timezone.
  const todayIso = useMemo(() => {
    const now = new Date()
    const y = now.getFullYear()
    const m = String(now.getMonth() + 1).padStart(2, "0")
    const d = String(now.getDate()).padStart(2, "0")
    return `${y}-${m}-${d}`
  }, [])

  const entryByDate = useMemo(() => {
    const map = new Map<string, OfficialExamEntry>()
    for (const e of entries) map.set(e.date, e)
    return map
  }, [entries])

  const slots = useMemo(
    () => (examDate ? deriveScheduleSlots(examDate) : []),
    [examDate]
  )

  const examInFuture = examDate !== null && examDate > todayIso
  const daysToExam = useMemo(() => {
    if (!examDate) return null
    const exam = parseIsoDate(examDate)
    const today = parseIsoDate(todayIso)
    if (!exam || !today) return null
    return Math.round((exam.getTime() - today.getTime()) / MS_PER_DAY)
  }, [examDate, todayIso])
  const moreThanEightWeeksOut = daysToExam !== null && daysToExam > 56

  // Build the visible timeline: schedule slots merged with any
  // off-schedule entries, sorted ascending by date.
  const rows = useMemo<PlanRow[]>(() => {
    const hasAnyEntry = entries.length > 0
    const out: PlanRow[] = []
    const slotSet = new Set(slots)

    for (const slot of slots) {
      const entry = entryByDate.get(slot) ?? null
      if (entry) {
        out.push({ date: slot, scheduled: true, status: "scored", entry })
        continue
      }
      if (slot < todayIso) {
        // Past, unscored. Show as Missed only when the plan is in use;
        // hide stale pre-plan weeks for students starting late.
        if (hasAnyEntry) {
          out.push({ date: slot, scheduled: true, status: "missed", entry: null })
        }
        continue
      }
      // Today or future, unscored — provisional "upcoming"; first one
      // gets promoted to "next-up" below. Today's row counts as next
      // up, never missed.
      out.push({ date: slot, scheduled: true, status: "upcoming", entry: null })
    }

    // Off-schedule officials still count — merge them into the timeline.
    for (const e of entries) {
      if (slotSet.has(e.date)) continue
      out.push({ date: e.date, scheduled: false, status: "scored", entry: e })
    }

    out.sort((a, b) => a.date.localeCompare(b.date))

    const firstUpcoming = out.find((r) => r.status === "upcoming")
    if (firstUpcoming) firstUpcoming.status = "next-up"
    return out
  }, [slots, entries, entryByDate, todayIso])

  const nextUnscoredSlot =
    rows.find((r) => r.status === "next-up")?.date ?? todayIso

  const sortedEntries = entries // kept sorted ascending on every update
  const latestEntry =
    sortedEntries.length > 0 ? sortedEntries[sortedEntries.length - 1] : null

  async function submitEntry(entry: OfficialExamEntry) {
    setSaving(true)
    setError(null)
    try {
      const res = await fetch("/api/official-exams", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "add", entry }),
      })
      const body = (await res.json().catch(() => ({}))) as {
        error?: string
        official_exam_scores?: OfficialExamEntry[]
      }
      if (!res.ok) throw new Error(body.error || `Request failed (${res.status})`)
      if (Array.isArray(body.official_exam_scores)) {
        setEntries(body.official_exam_scores)
      }
      setFormOpen(false)
      startTransition(() => router.refresh())
      return true
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong")
      return false
    } finally {
      setSaving(false)
    }
  }

  async function removeEntry(date: string) {
    setError(null)
    const previous = entries
    setEntries((current) => current.filter((e) => e.date !== date))
    try {
      const res = await fetch("/api/official-exams", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "remove", date }),
      })
      const body = (await res.json().catch(() => ({}))) as {
        error?: string
        official_exam_scores?: OfficialExamEntry[]
      }
      if (!res.ok) throw new Error(body.error || `Request failed (${res.status})`)
      if (Array.isArray(body.official_exam_scores)) {
        setEntries(body.official_exam_scores)
      }
      startTransition(() => router.refresh())
    } catch (err) {
      setEntries(previous)
      setError(err instanceof Error ? err.message : "Could not delete entry")
    }
  }

  return (
    <section
      className="relative overflow-hidden rounded-2xl border"
      style={{
        borderColor: "rgba(201,168,76,0.28)",
        backgroundColor: "rgba(201,168,76,0.05)",
      }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 80% at 100% 0%, rgba(201,168,76,0.12) 0%, transparent 60%)",
        }}
        aria-hidden
      />
      <div className="relative p-6 sm:p-8 space-y-6">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="min-w-0">
            <p className={EYEBROW + " mb-2"}>Official exam plan</p>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#F0F0F0] tracking-[-0.01em] leading-[1.1]">
              One official exam every week.
            </h2>
            <p className="text-[13px] text-[#C0C0C0] leading-relaxed mt-2 max-w-xl">
              Same weekday and start time as test day (if your slot is
              9:00, start at 9:00), full exam conditions, one sitting.
              Type each score in here — these six results are your real
              score trajectory.
            </p>
          </div>
          <div className="flex-shrink-0 text-right">
            <p className="font-display text-3xl font-semibold tabular-nums text-[#F0F0F0] leading-none">
              {Math.min(entries.length, 6)}
              <span className="text-[#555555] text-xl"> / 6</span>
            </p>
            <p className="text-[10px] uppercase tracking-[0.22em] text-[#888888] font-semibold mt-1.5">
              Officials entered
            </p>
          </div>
        </div>

        {!examDate || !examInFuture ? (
          <div
            className="rounded-xl border p-5"
            style={{
              borderColor: "rgba(255,255,255,0.06)",
              backgroundColor: "rgba(255,255,255,0.012)",
            }}
          >
            <p className="text-[13px] text-[#C0C0C0] leading-relaxed">
              {examDate && !examInFuture
                ? "Your saved exam date is in the past. Update it to rebuild your weekly official-exam schedule."
                : "Set your exam date to generate the weekly schedule — six officials, same weekday as test day, the last one a week before the real thing."}
            </p>
            <Link
              href="/settings"
              className="inline-flex items-center gap-2 mt-3 px-4 py-2 rounded-lg text-[12px] font-semibold transition-transform hover:-translate-y-0.5"
              style={{ backgroundColor: "#C9A84C", color: "#0A0A0A" }}
            >
              Set exam date in Settings
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        ) : (
          <>
            <div className="flex items-center gap-2 text-[12px] text-[#888888]">
              <CalendarClock
                className="w-3.5 h-3.5 flex-shrink-0"
                style={{ color: "#C9A84C" }}
              />
              <span>
                Exam{" "}
                <span className="text-[#F0F0F0] font-medium tabular-nums">
                  {formatDisplayDate(examDate)}
                </span>{" "}
                ({WEEKDAY_NAMES[parseIsoDate(examDate)?.getUTCDay() ?? 0]}
                {daysToExam !== null && (
                  <>
                    {" "}
                    <span className="text-[#555555]">·</span>{" "}
                    <span className="tabular-nums">{daysToExam}</span> days out
                  </>
                )}
                )
              </span>
            </div>

            {moreThanEightWeeksOut && (
              <div
                className="rounded-lg border px-4 py-3 text-[12px] leading-relaxed"
                style={{
                  borderColor: "rgba(201,168,76,0.22)",
                  backgroundColor: "rgba(201,168,76,0.06)",
                  color: "#C0C0C0",
                }}
              >
                You are more than 8 weeks out. Take your first official{" "}
                <span className="font-semibold text-[#F0F0F0]">now</span> as a
                baseline (log it below on the date you sit it) and save the
                remaining officials for the final 6 weeks listed here.
              </div>
            )}

            {/* Schedule rows */}
            <div className="space-y-2">
              {rows.map((row) => (
                <ScheduleRow
                  key={row.date}
                  row={row}
                  onDelete={() => removeEntry(row.date)}
                />
              ))}
              {rows.length === 0 && (
                <p className="text-[12px] text-[#888888] leading-relaxed">
                  No weekly slots fit before your exam. Log any official you
                  take with the form below — off-schedule exams count too.
                </p>
              )}
            </div>
          </>
        )}

        {/* Trend strip — official-to-official deltas. */}
        {sortedEntries.length >= 2 && (
          <div
            className="rounded-xl border p-4"
            style={{
              borderColor: "rgba(255,255,255,0.06)",
              backgroundColor: "rgba(255,255,255,0.012)",
            }}
          >
            <p className="text-[10px] uppercase tracking-[0.22em] text-[#888888] font-semibold mb-3">
              Official score trend
            </p>
            <div className="flex flex-wrap items-end gap-x-5 gap-y-3">
              {sortedEntries.map((e, i) => {
                const prev = i > 0 ? sortedEntries[i - 1] : null
                const delta = prev ? e.total - prev.total : null
                return (
                  <div key={e.date} className="flex flex-col">
                    <span className="font-display text-lg font-semibold tabular-nums text-[#F0F0F0] leading-none">
                      {e.total}
                    </span>
                    <span className="text-[10px] text-[#555555] tabular-nums mt-1">
                      {e.date.slice(5)}
                    </span>
                    {delta !== null && (
                      <span
                        className="text-[10px] font-semibold tabular-nums mt-0.5"
                        style={{
                          color:
                            delta > 0
                              ? "#3ECF8E"
                              : delta < 0
                                ? "#FF4444"
                                : "#888888",
                        }}
                      >
                        {delta > 0 ? `+${delta}` : delta === 0 ? "±0" : delta}
                      </span>
                    )}
                  </div>
                )
              })}
              {targetScore !== null && latestEntry !== null && (
                <div
                  className="flex flex-col pl-5 border-l"
                  style={{ borderColor: "rgba(255,255,255,0.08)" }}
                >
                  <span className="font-display text-lg font-semibold tabular-nums leading-none text-[#C9A84C]">
                    {targetScore}
                  </span>
                  <span className="text-[10px] text-[#555555] mt-1">target</span>
                  <span
                    className="text-[10px] font-semibold tabular-nums mt-0.5"
                    style={{
                      color:
                        latestEntry.total >= targetScore
                          ? "#3ECF8E"
                          : "#C9A84C",
                    }}
                  >
                    {latestEntry.total >= targetScore
                      ? "on target"
                      : `${targetScore - latestEntry.total} to go`}
                  </span>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Entry form */}
        <div>
          <button
            type="button"
            onClick={() => {
              setFormOpen((open) => !open)
              setError(null)
            }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-[12px] font-semibold transition-transform hover:-translate-y-0.5"
            style={{ backgroundColor: "#C9A84C", color: "#0A0A0A" }}
          >
            {formOpen ? (
              <ChevronDown className="w-3.5 h-3.5" />
            ) : (
              <Plus className="w-3.5 h-3.5" />
            )}
            {formOpen ? "Close form" : "Enter an official score"}
          </button>
          {formOpen && (
            <EntryForm
              defaultDate={nextUnscoredSlot}
              saving={saving}
              onSubmit={submitEntry}
            />
          )}
          {error && (
            <p className="text-[12px] mt-2" style={{ color: "#FF4444" }}>
              {error}
            </p>
          )}
        </div>

        <p className="text-[12px] text-[#888888]">
          Need exams?{" "}
          <a
            href="https://www.mba.com/exam-prep/gmat-official-practice-exams"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-semibold transition-colors hover:opacity-80"
            style={{ color: "#C9A84C" }}
          >
            Buy official practice exams
            <ExternalLink className="w-3 h-3" />
          </a>{" "}
          <span className="text-[#555555]">
            — official exams 1-6 on mba.com.
          </span>
        </p>
      </div>
    </section>
  )
}

const STATUS_META: Record<
  RowStatus,
  { label: string; color: string; bg: string; border: string }
> = {
  scored: {
    label: "Scored",
    color: "#3ECF8E",
    bg: "rgba(62,207,142,0.10)",
    border: "rgba(62,207,142,0.28)",
  },
  "next-up": {
    label: "Next up",
    color: "#C9A84C",
    bg: "rgba(201,168,76,0.10)",
    border: "rgba(201,168,76,0.32)",
  },
  upcoming: {
    label: "Upcoming",
    color: "#888888",
    bg: "rgba(255,255,255,0.03)",
    border: "rgba(255,255,255,0.10)",
  },
  missed: {
    label: "Missed",
    color: "#FF4444",
    bg: "rgba(255,68,68,0.08)",
    border: "rgba(255,68,68,0.28)",
  },
}

function ScheduleRow({
  row,
  onDelete,
}: {
  row: PlanRow
  onDelete: () => void
}) {
  const meta = STATUS_META[row.status]
  return (
    <div
      className="flex items-center gap-3 px-4 py-3 rounded-xl border"
      style={{
        borderColor:
          row.status === "next-up"
            ? "rgba(201,168,76,0.25)"
            : "rgba(255,255,255,0.06)",
        backgroundColor:
          row.status === "next-up" ? "rgba(201,168,76,0.05)" : "#0D0D0D",
      }}
    >
      <span className="text-[13px] text-[#F0F0F0] font-medium tabular-nums w-[110px] flex-shrink-0">
        {formatDisplayDate(row.date)}
      </span>
      <span
        className="px-2 py-0.5 rounded-full text-[10px] uppercase tracking-[0.14em] font-semibold flex-shrink-0"
        style={{
          color: meta.color,
          backgroundColor: meta.bg,
          border: `1px solid ${meta.border}`,
        }}
      >
        {meta.label}
      </span>
      {!row.scheduled && (
        <span className="text-[10px] uppercase tracking-[0.14em] text-[#555555] font-semibold flex-shrink-0">
          Off-schedule
        </span>
      )}
      <span className="flex-1 min-w-0 text-right">
        {row.entry ? (
          <span className="inline-flex items-baseline gap-3">
            <span className="font-display text-lg font-semibold tabular-nums text-[#F0F0F0]">
              {row.entry.total}
            </span>
            {(row.entry.quant != null ||
              row.entry.verbal != null ||
              row.entry.di != null) && (
              <span className="text-[11px] text-[#888888] tabular-nums hidden sm:inline">
                Q {row.entry.quant ?? "—"} · V {row.entry.verbal ?? "—"} · DI{" "}
                {row.entry.di ?? "—"}
              </span>
            )}
          </span>
        ) : (
          <span className="text-[12px] text-[#555555]">—</span>
        )}
      </span>
      {row.entry && (
        <button
          type="button"
          onClick={onDelete}
          aria-label={`Delete official exam entry for ${row.date}`}
          className="flex-shrink-0 p-1.5 rounded-md transition-colors text-[#555555] hover:text-[#FF4444]"
        >
          <Trash2 className="w-3.5 h-3.5" />
        </button>
      )}
    </div>
  )
}

function EntryForm({
  defaultDate,
  saving,
  onSubmit,
}: {
  defaultDate: string
  saving: boolean
  onSubmit: (entry: OfficialExamEntry) => Promise<boolean>
}) {
  const [date, setDate] = useState(defaultDate)
  const [total, setTotal] = useState("")
  const [quant, setQuant] = useState("")
  const [verbal, setVerbal] = useState("")
  const [di, setDi] = useState("")
  const [localError, setLocalError] = useState<string | null>(null)

  function parseSection(
    value: string,
    name: string
  ): number | null | undefined {
    if (value.trim() === "") return null
    const n = Number(value)
    if (!Number.isInteger(n) || n < 60 || n > 90) {
      setLocalError(`${name} must be an integer between 60 and 90`)
      return undefined
    }
    return n
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLocalError(null)
    if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) {
      setLocalError("Pick a date")
      return
    }
    const totalNum = Number(total)
    if (!Number.isInteger(totalNum) || totalNum < 205 || totalNum > 805) {
      setLocalError("Total must be an integer between 205 and 805")
      return
    }
    const q = parseSection(quant, "Quant")
    if (q === undefined) return
    const v = parseSection(verbal, "Verbal")
    if (v === undefined) return
    const d = parseSection(di, "DI")
    if (d === undefined) return

    const ok = await onSubmit({
      date,
      total: totalNum,
      quant: q,
      verbal: v,
      di: d,
    })
    if (ok) {
      setTotal("")
      setQuant("")
      setVerbal("")
      setDi("")
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-3 rounded-xl border p-4 space-y-3"
      style={{
        borderColor: "rgba(255,255,255,0.08)",
        backgroundColor: "#0D0D0D",
      }}
    >
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
        <div className="col-span-2 sm:col-span-1">
          <label
            htmlFor="official-exam-date"
            className="block text-[10px] uppercase tracking-[0.18em] text-[#888888] font-semibold mb-1.5"
          >
            Date
          </label>
          <input
            id="official-exam-date"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
            className={INPUT_CLASS}
            style={INPUT_STYLE}
          />
        </div>
        <div>
          <label
            htmlFor="official-exam-total"
            className="block text-[10px] uppercase tracking-[0.18em] text-[#888888] font-semibold mb-1.5"
          >
            Total
          </label>
          <input
            id="official-exam-total"
            type="number"
            inputMode="numeric"
            min={205}
            max={805}
            step={10}
            placeholder="645"
            value={total}
            onChange={(e) => setTotal(e.target.value)}
            required
            className={INPUT_CLASS}
            style={INPUT_STYLE}
          />
        </div>
        {(
          [
            ["official-exam-quant", "Quant", quant, setQuant],
            ["official-exam-verbal", "Verbal", verbal, setVerbal],
            ["official-exam-di", "DI", di, setDi],
          ] as const
        ).map(([id, label, value, setter]) => (
          <div key={id}>
            <label
              htmlFor={id}
              className="block text-[10px] uppercase tracking-[0.18em] text-[#888888] font-semibold mb-1.5"
            >
              {label}{" "}
              <span className="normal-case tracking-normal text-[#555555]">
                (opt.)
              </span>
            </label>
            <input
              id={id}
              type="number"
              inputMode="numeric"
              min={60}
              max={90}
              placeholder="60-90"
              value={value}
              onChange={(e) => setter(e.target.value)}
              className={INPUT_CLASS}
              style={INPUT_STYLE}
            />
          </div>
        ))}
      </div>
      <p className="text-[11px] text-[#555555] leading-relaxed">
        Off-schedule date? Fine — any official you sit counts. Saving the
        same date again overwrites that entry.
      </p>
      {localError && (
        <p className="text-[12px]" style={{ color: "#FF4444" }}>
          {localError}
        </p>
      )}
      <button
        type="submit"
        disabled={saving}
        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-[12px] font-semibold transition-transform hover:-translate-y-0.5 disabled:opacity-60 disabled:hover:translate-y-0"
        style={{ backgroundColor: "#C9A84C", color: "#0A0A0A" }}
      >
        <CheckCircle2 className="w-3.5 h-3.5" />
        {saving ? "Saving..." : "Save score"}
      </button>
    </form>
  )
}
