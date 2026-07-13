"use client"

import { useMemo, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { localDayIso } from "@/lib/utils"

/**
 * Weekly study-hours chart. Buckets every session's duration into local-time
 * days, renders one Monday-to-Sunday week of bars with the previous week
 * ghosted behind each day for comparison, and lets the student page back
 * through their full history.
 */

const DAY_LABELS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
const MAX_WEEKS_BACK = 26

// Shared local-day key — the one boundary every activity metric uses.
const localIso = localDayIso

/** Monday 00:00 local time of the week containing `d`. */
function weekStart(d: Date): Date {
  const out = new Date(d.getFullYear(), d.getMonth(), d.getDate())
  const dow = (out.getDay() + 6) % 7 // Mon=0 .. Sun=6
  out.setDate(out.getDate() - dow)
  return out
}

function formatHours(ms: number): string {
  if (ms <= 0) return "0m"
  const minutes = Math.round(ms / 60000)
  if (minutes < 60) return `${minutes}m`
  const h = ms / 3600000
  return `${h >= 10 ? Math.round(h) : Math.round(h * 10) / 10}h`
}

function weekLabel(start: Date): string {
  const end = new Date(start)
  end.setDate(end.getDate() + 6)
  const fmt = (d: Date) =>
    d.toLocaleDateString("en-US", { month: "short", day: "numeric" })
  return `${fmt(start)} – ${fmt(end)}`
}

export default function StudyHoursChart({
  sessions,
}: {
  sessions: Array<{ t: string; ms: number }>
}) {
  // 0 = the week containing today; 1 = last week; ...
  const [weekOffset, setWeekOffset] = useState(0)

  const byDay = useMemo(() => {
    const map = new Map<string, number>()
    for (const s of sessions) {
      const key = localIso(new Date(s.t))
      map.set(key, (map.get(key) ?? 0) + s.ms)
    }
    return map
  }, [sessions])

  // How far back the arrows may go: to the earliest week with any data
  // (capped), so the student can't page into an empty void forever.
  const maxBack = useMemo(() => {
    if (byDay.size === 0) return 0
    const earliest = [...byDay.keys()].sort()[0]
    const [y, m, d] = earliest.split("-").map(Number)
    const diffMs =
      weekStart(new Date()).getTime() -
      weekStart(new Date(y, m - 1, d)).getTime()
    return Math.min(MAX_WEEKS_BACK, Math.max(0, Math.round(diffMs / 604800000)))
  }, [byDay])

  const todayIso = localIso(new Date())
  const start = weekStart(new Date())
  start.setDate(start.getDate() - weekOffset * 7)
  const prevStart = new Date(start)
  prevStart.setDate(prevStart.getDate() - 7)

  const dayMs = (base: Date, i: number) => {
    const d = new Date(base)
    d.setDate(d.getDate() + i)
    return { iso: localIso(d), ms: byDay.get(localIso(d)) ?? 0 }
  }
  const current = DAY_LABELS.map((_, i) => dayMs(start, i))
  const previous = DAY_LABELS.map((_, i) => dayMs(prevStart, i))

  const currentTotal = current.reduce((s, d) => s + d.ms, 0)
  const previousTotal = previous.reduce((s, d) => s + d.ms, 0)
  const deltaPct =
    previousTotal > 0
      ? Math.round(((currentTotal - previousTotal) / previousTotal) * 100)
      : null

  // Shared scale across both weeks so the ghost bars compare honestly.
  // Floor of 1h keeps tiny first sessions from rendering as full-height bars.
  const scaleMs = Math.max(
    3600000,
    ...current.map((d) => d.ms),
    ...previous.map((d) => d.ms)
  )
  const BAR_AREA_PX = 132

  return (
    <div
      className="rounded-2xl border p-5 sm:p-6"
      style={{ borderColor: "rgba(255,255,255,0.06)", backgroundColor: "#0D0D0D" }}
    >
      {/* Header: week label + nav */}
      <div className="flex items-center justify-between gap-3 mb-5">
        <div>
          <p className="text-[14px] font-semibold text-[#F0F0F0] tracking-tight">
            {weekOffset === 0 ? "This week" : weekLabel(start)}
          </p>
          <p className="text-[11px] mt-0.5" style={{ color: "#666666" }}>
            vs {weekOffset === 0 ? "last week" : weekLabel(prevStart)} (dimmed bars)
          </p>
        </div>
        <div className="flex items-center gap-1.5">
          <button
            onClick={() => setWeekOffset((o) => Math.min(maxBack, o + 1))}
            disabled={weekOffset >= maxBack}
            className="inline-flex items-center justify-center w-8 h-8 rounded-lg border transition-colors hover:bg-white/[0.04] disabled:opacity-30 disabled:cursor-not-allowed"
            style={{ borderColor: "rgba(255,255,255,0.10)", color: "#C0C0C0" }}
            aria-label="Previous week"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={() => setWeekOffset((o) => Math.max(0, o - 1))}
            disabled={weekOffset === 0}
            className="inline-flex items-center justify-center w-8 h-8 rounded-lg border transition-colors hover:bg-white/[0.04] disabled:opacity-30 disabled:cursor-not-allowed"
            style={{ borderColor: "rgba(255,255,255,0.10)", color: "#C0C0C0" }}
            aria-label="Next week"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Bars */}
      <div className="grid grid-cols-7 gap-2 sm:gap-3">
        {DAY_LABELS.map((label, i) => {
          const cur = current[i]
          const prev = previous[i]
          const isToday = cur.iso === todayIso
          const curPx = cur.ms > 0 ? Math.max(3, (cur.ms / scaleMs) * BAR_AREA_PX) : 0
          const prevPx = prev.ms > 0 ? Math.max(3, (prev.ms / scaleMs) * BAR_AREA_PX) : 0
          return (
            <div key={label} className="flex flex-col items-center min-w-0">
              <span
                className="text-[10px] tabular-nums mb-1.5 h-4"
                style={{ color: cur.ms > 0 ? "#C9A84C" : "#444444" }}
              >
                {cur.ms > 0 ? formatHours(cur.ms) : ""}
              </span>
              <div
                className="relative w-full flex items-end justify-center gap-1"
                style={{ height: BAR_AREA_PX }}
                title={`${label}: ${formatHours(cur.ms)} (prev week ${formatHours(prev.ms)})`}
              >
                <div
                  className="w-2.5 sm:w-3 rounded-t"
                  style={{
                    height: prevPx,
                    backgroundColor: "rgba(255,255,255,0.10)",
                  }}
                  aria-hidden
                />
                <div
                  className="w-2.5 sm:w-3 rounded-t"
                  style={{
                    height: curPx,
                    background:
                      curPx > 0
                        ? "linear-gradient(180deg, #E8C97A 0%, #C9A84C 100%)"
                        : "transparent",
                  }}
                />
              </div>
              <span
                className="text-[10px] uppercase tracking-wide mt-2"
                style={{
                  color: isToday ? "#C9A84C" : "#666666",
                  fontWeight: isToday ? 600 : 400,
                }}
              >
                {label}
              </span>
            </div>
          )
        })}
      </div>

      {/* Totals + delta */}
      <div
        className="flex flex-wrap items-center gap-x-4 gap-y-1.5 mt-5 pt-4 border-t"
        style={{ borderColor: "rgba(255,255,255,0.06)" }}
      >
        <span className="text-[13px] tabular-nums" style={{ color: "#F0F0F0" }}>
          <span style={{ color: "#888888" }}>Total </span>
          {formatHours(currentTotal)}
        </span>
        <span className="text-[13px] tabular-nums" style={{ color: "#888888" }}>
          Prev week {formatHours(previousTotal)}
        </span>
        {deltaPct !== null && currentTotal !== previousTotal && (
          <span
            className="text-[12px] font-semibold tabular-nums px-2 py-0.5 rounded-md"
            style={{
              color: deltaPct > 0 ? "#3ECF8E" : "#FF8A65",
              backgroundColor:
                deltaPct > 0 ? "rgba(62,207,142,0.10)" : "rgba(255,138,101,0.10)",
            }}
          >
            {deltaPct > 0 ? "+" : ""}
            {deltaPct}%
          </span>
        )}
        {currentTotal === 0 && previousTotal === 0 && (
          <span className="text-[12px]" style={{ color: "#555555" }}>
            No study time logged in this window yet.
          </span>
        )}
      </div>
    </div>
  )
}
