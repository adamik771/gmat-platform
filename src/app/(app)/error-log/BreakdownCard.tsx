"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import type { Section } from "@/types"
import type { ErrorTag } from "./constants"
import type { SectionBreakdown } from "./ErrorLogClient"

export interface TagBreakdown {
  tag: ErrorTag | "Untagged"
  count: number
  pct: number
}

const SECTION_PALETTE: Record<Section, { color: string; bg: string }> = {
  Quant: { color: "#C9A84C", bg: "rgba(201,168,76,0.12)" },
  Verbal: { color: "#3ECF8E", bg: "rgba(62,207,142,0.12)" },
  DI: { color: "#FF4444", bg: "rgba(255,68,68,0.12)" },
}

const TAG_PALETTE: Record<
  ErrorTag | "Untagged",
  { color: string; bg: string }
> = {
  Conceptual: { color: "#FF4444", bg: "rgba(255,68,68,0.12)" },
  Careless: { color: "#C9A84C", bg: "rgba(201,168,76,0.12)" },
  "Time Pressure": { color: "#A8A8A8", bg: "rgba(168,168,168,0.12)" },
  Misread: { color: "#3ECF8E", bg: "rgba(62,207,142,0.12)" },
  Strategy: { color: "#E8C97A", bg: "rgba(232,201,122,0.12)" },
  Other: { color: "#888888", bg: "rgba(136,136,136,0.12)" },
  Untagged: { color: "#555555", bg: "rgba(85,85,85,0.12)" },
}

type View = "section" | "tag"

/**
 * Top-of-page breakdown card for /error-log. Toggles between two cuts:
 *   - by section (Quant / Verbal / DI) — always available
 *   - by tag (Conceptual / Careless / ... / Untagged) — useful once the
 *     user has started tagging mistakes
 *
 * Each row is a compact card with a count, a percent-of-total progress
 * bar, and a colored label chip. The tag view includes an "Untagged"
 * bucket so users can see how much is still un-reviewed at a glance.
 */
export default function BreakdownCard({
  sectionBreakdown,
  tagBreakdown,
}: {
  sectionBreakdown: SectionBreakdown[]
  tagBreakdown: TagBreakdown[]
}) {
  const [view, setView] = useState<View>("section")

  return (
    <div className="p-5 rounded-xl border border-white/[0.08] bg-[#111111]">
      <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
        <p className="text-xs font-semibold uppercase tracking-widest text-[#888888]">
          Mistakes by {view === "section" ? "Section" : "Tag"}
        </p>
        <div className="flex gap-1.5">
          {(
            [
              { value: "section" as const, label: "Section" },
              { value: "tag" as const, label: "Tag" },
            ]
          ).map((opt) => (
            <button
              key={opt.value}
              type="button"
              onClick={() => setView(opt.value)}
              className={cn(
                "px-2.5 py-1 rounded-lg text-[11px] font-medium transition-colors",
                view === opt.value
                  ? "text-[#0A0A0A]"
                  : "border border-white/[0.08] text-[#888888] hover:text-[#F0F0F0]"
              )}
              style={view === opt.value ? { backgroundColor: "#C9A84C" } : {}}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      {view === "section" ? (
        <div className="grid sm:grid-cols-3 gap-4">
          {sectionBreakdown.map((row) => {
            const palette = SECTION_PALETTE[row.section]
            return (
              <Cell
                key={row.section}
                label={row.section}
                count={row.count}
                pct={row.pct}
                color={palette.color}
                bg={palette.bg}
              />
            )
          })}
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {tagBreakdown.map((row) => {
            const palette = TAG_PALETTE[row.tag]
            return (
              <Cell
                key={row.tag}
                label={row.tag}
                count={row.count}
                pct={row.pct}
                color={palette.color}
                bg={palette.bg}
              />
            )
          })}
        </div>
      )}

      <p className="text-xs text-[#555555] mt-4 italic">
        {view === "section"
          ? "Open a row below to tag each mistake (conceptual, careless, misread, etc.), add a note, and mark it reviewed."
          : "Tags come from the editor inside each expanded row. \"Untagged\" mistakes are the ones still waiting for your review."}
      </p>
    </div>
  )
}

function Cell({
  label,
  count,
  pct,
  color,
  bg,
}: {
  label: string
  count: number
  pct: number
  color: string
  bg: string
}) {
  return (
    <div
      className="p-4 rounded-xl border border-white/[0.06]"
      style={{ backgroundColor: "#0F0F0F" }}
    >
      <div
        className="px-2 py-0.5 rounded text-xs font-medium w-fit mb-3 truncate max-w-full"
        style={{ backgroundColor: bg, color }}
      >
        {label}
      </div>
      <p className="text-xl font-bold text-[#F0F0F0]">{count}</p>
      <div className="mt-2 h-1 rounded-full bg-white/[0.06] overflow-hidden">
        <div
          className="h-full rounded-full"
          style={{ width: `${pct}%`, backgroundColor: color }}
        />
      </div>
      <p className="text-xs text-[#555555] mt-1">{pct}% of mistakes</p>
    </div>
  )
}
