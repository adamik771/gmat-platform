"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import type { Section } from "@/types"
import type { ErrorFamily, RootCauseFamily } from "./constants"
import type { SectionBreakdown } from "./ErrorLogClient"

export type FamilyBucket = ErrorFamily | "Legacy" | "Untagged"

export interface FamilyBreakdown {
  family: FamilyBucket
  count: number
  pct: number
}

export type RootCauseBucket = RootCauseFamily | "Uncoded"

export interface RootCauseBreakdown {
  family: RootCauseBucket
  count: number
  pct: number
}

const SECTION_PALETTE: Record<Section, { color: string; bg: string }> = {
  Quant: { color: "#C9A84C", bg: "rgba(201,168,76,0.12)" },
  Verbal: { color: "#3ECF8E", bg: "rgba(62,207,142,0.12)" },
  DI: { color: "#FF4444", bg: "rgba(255,68,68,0.12)" },
}

const FAMILY_PALETTE: Record<FamilyBucket, { color: string; bg: string }> = {
  Knowledge: { color: "#FF4444", bg: "rgba(255,68,68,0.12)" },
  Translation: { color: "#FF8866", bg: "rgba(255,136,102,0.12)" },
  "DI logic": { color: "#C9A84C", bg: "rgba(201,168,76,0.14)" },
  Reasoning: { color: "#E8C97A", bg: "rgba(232,201,122,0.14)" },
  Reading: { color: "#3ECF8E", bg: "rgba(62,207,142,0.12)" },
  "DI process": { color: "#5FA8FF", bg: "rgba(95,168,255,0.12)" },
  Execution: { color: "#A8A8A8", bg: "rgba(168,168,168,0.12)" },
  Timing: { color: "#FF9933", bg: "rgba(255,153,51,0.12)" },
  Behaviour: { color: "#B088FF", bg: "rgba(176,136,255,0.12)" },
  Legacy: { color: "#888888", bg: "rgba(136,136,136,0.1)" },
  Untagged: { color: "#555555", bg: "rgba(85,85,85,0.12)" },
}

// Mirrors ROOT_CAUSE_FAMILY_PALETTE in ErrorLogClient so the pills and
// breakdown cells read the same colour for a given family. Duplicated
// rather than extracted because both consumers are inside the same
// feature directory and the list is short + stable.
const ROOT_CAUSE_PALETTE: Record<RootCauseBucket, { color: string; bg: string }> = {
  Knowledge: { color: "#FF4444", bg: "rgba(255,68,68,0.12)" },
  Representation: { color: "#FF8866", bg: "rgba(255,136,102,0.12)" },
  Strategy: { color: "#C9A84C", bg: "rgba(201,168,76,0.14)" },
  Execution: { color: "#A8A8A8", bg: "rgba(168,168,168,0.12)" },
  Pacing: { color: "#FF9933", bg: "rgba(255,153,51,0.12)" },
  Judgement: { color: "#B088FF", bg: "rgba(176,136,255,0.12)" },
  Fatigue: { color: "#6FB5F6", bg: "rgba(111,181,246,0.12)" },
  Uncoded: { color: "#555555", bg: "rgba(85,85,85,0.12)" },
}

type View = "section" | "family" | "root-cause" | "contributing"

/**
 * Top-of-page breakdown card for /error-log. Toggles between three cuts:
 *   - by section (Quant / Verbal / DI) — always available
 *   - by question-type family (Knowledge / Reasoning / ...) — WHAT kind
 *     of question failed; 14-tag roll-up from ERROR_TAG_DEFS
 *   - by root-cause family (Knowledge / Representation / Strategy / ...)
 *     — WHERE the process broke; K1/…/F1 roll-up from ROOT_CAUSE_DEFS.
 *     Only useful once the student has started assigning root causes.
 *
 * Each row is a compact card with a count, a percent-of-total progress
 * bar, and a colored label chip.
 */
export default function BreakdownCard({
  sectionBreakdown,
  familyBreakdown,
  rootCauseBreakdown,
  contributingBreakdown,
}: {
  sectionBreakdown: SectionBreakdown[]
  familyBreakdown: FamilyBreakdown[]
  rootCauseBreakdown: RootCauseBreakdown[]
  contributingBreakdown: RootCauseBreakdown[]
}) {
  const [view, setView] = useState<View>("section")
  const hasRootCauseData =
    rootCauseBreakdown.some((r) => r.family !== "Uncoded" && r.count > 0)
  const hasContributingData = contributingBreakdown.length > 0

  const headerLabel =
    view === "section"
      ? "Section"
      : view === "family"
        ? "Error family"
        : view === "root-cause"
          ? "Root cause"
          : "Contributing cause"

  return (
    <div className="p-6 sm:p-7 rounded-2xl border border-white/[0.06] bg-[#0F0F0F] transition-all duration-300 hover:border-white/[0.12] hover:shadow-[0_14px_36px_-20px_rgba(201,168,76,0.15)]">
      <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
        <div className="flex items-center gap-3">
          <p
            className="text-[10px] font-semibold uppercase tracking-[0.22em]"
            style={{ color: "#C9A84C" }}
          >
            Mistakes by {headerLabel.toLowerCase()}
          </p>
          <div
            className="h-px w-10"
            style={{
              background:
                "linear-gradient(to right, rgba(201,168,76,0.4), transparent)",
            }}
            aria-hidden
          />
        </div>
        <div className="flex flex-wrap gap-1.5">
          {(
            [
              {
                value: "section" as const,
                label: "Section",
                hint: "Quant / Verbal / DI — which section your mistakes cluster in.",
              },
              {
                value: "family" as const,
                label: "Family",
                hint: "What kind of question failed — the 14 error tags rolled up into families (Knowledge / Reasoning / Reading / ...).",
              },
              {
                value: "root-cause" as const,
                label: "Root cause",
                hint: "Where the solve process broke — the K1/.../F1 taxonomy (Knowledge / Representation / Strategy / Execution / Pacing / Judgement / Fatigue).",
              },
              {
                value: "contributing" as const,
                label: "Contributing",
                hint: "Secondary failure modes that amplified the primary root cause — up to two per mistake.",
              },
            ]
          ).map((opt) => (
            <button
              key={opt.value}
              type="button"
              onClick={() => setView(opt.value)}
              title={opt.hint}
              aria-label={`${opt.label} view — ${opt.hint}`}
              className={cn(
                "px-3 py-1.5 rounded-xl text-[11px] font-semibold tracking-tight transition-all duration-200",
                view === opt.value
                  ? "text-[#0A0A0A] scale-[1.02]"
                  : "border border-white/[0.08] text-[#888888] hover:text-[#F0F0F0] hover:border-white/[0.18]"
              )}
              style={view === opt.value ? { backgroundColor: "#C9A84C" } : {}}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      {view === "section" && (
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
      )}

      {view === "family" && (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {familyBreakdown.map((row) => {
            const palette = FAMILY_PALETTE[row.family]
            return (
              <Cell
                key={row.family}
                label={row.family}
                count={row.count}
                pct={row.pct}
                color={palette.color}
                bg={palette.bg}
              />
            )
          })}
        </div>
      )}

      {view === "root-cause" && (
        <>
          {hasRootCauseData ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {rootCauseBreakdown.map((row) => {
                const palette = ROOT_CAUSE_PALETTE[row.family]
                return (
                  <Cell
                    key={row.family}
                    label={row.family}
                    count={row.count}
                    pct={row.pct}
                    color={palette.color}
                    bg={palette.bg}
                  />
                )
              })}
            </div>
          ) : (
            <div className="p-6 rounded-2xl border border-white/[0.06] bg-[#0A0A0A] text-center">
              <p className="text-[14px] text-[#C0C0C0] tracking-tight">
                No root causes assigned yet.
              </p>
              <p className="text-[12px] text-[#888888] mt-2 leading-[1.65]">
                Open a mistake row below and pick a K1/…/F1 code to say
                <em> where</em> the solve process broke. A pattern becomes
                visible after 5–10 assignments.
              </p>
            </div>
          )}
        </>
      )}

      {view === "contributing" && (
        <>
          {hasContributingData ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {contributingBreakdown.map((row) => {
                const palette = ROOT_CAUSE_PALETTE[row.family]
                return (
                  <Cell
                    key={row.family}
                    label={row.family}
                    count={row.count}
                    pct={row.pct}
                    color={palette.color}
                    bg={palette.bg}
                  />
                )
              })}
            </div>
          ) : (
            <div className="p-6 rounded-2xl border border-white/[0.06] bg-[#0A0A0A] text-center">
              <p className="text-[14px] text-[#C0C0C0] tracking-tight">
                No contributing causes assigned yet.
              </p>
              <p className="text-[12px] text-[#888888] mt-2 leading-[1.65]">
                Assign a primary root cause first, then pick up to two
                secondary causes on the same row. Once you have a handful
                of mistakes coded, repeating pairings (e.g. R2 showing up
                beside CR_SCOPE) tell you which failure modes cluster.
              </p>
            </div>
          )}
        </>
      )}

      <p className="text-[12px] text-[#888888] mt-5 italic leading-[1.65]">
        {view === "section"
          ? "Open a row below to tag each mistake with the specific failure mode, add a note, and mark it reviewed."
          : view === "family"
            ? "Families group the 14 error tags into the categories the framework uses to prescribe fixes. \"Untagged\" = still waiting for your review. \"Legacy\" = tagged with the old 6-category system — re-tag to unlock the suggested fix."
            : view === "root-cause"
              ? "Root-cause families (Knowledge / Representation / Strategy / Execution / Pacing / Judgement / Fatigue) describe where the solve process broke. Complementary to the error-family cut above — a single mistake can show up in both."
              : "Contributing causes are secondary failure modes — the 0-2 codes you pick alongside the primary root cause. Counts here are code-instances (a mistake with two contributing codes shows up twice), so the denominator is total contributing assignments, not mistakes."}
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
      className="p-4 rounded-2xl border border-white/[0.06] transition-all duration-300 hover:-translate-y-0.5 hover:border-white/[0.12]"
      style={{ backgroundColor: "#0A0A0A" }}
    >
      <div
        className="px-2 py-0.5 rounded-full text-[10px] uppercase tracking-[0.18em] font-semibold w-fit mb-3 truncate max-w-full"
        style={{ backgroundColor: bg, color }}
      >
        {label}
      </div>
      <p className="font-display text-2xl font-semibold text-[#F0F0F0] tracking-[-0.02em] tabular-nums leading-none">
        {count}
      </p>
      <div className="mt-3 h-1 rounded-full bg-white/[0.06] overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-700"
          style={{ width: `${pct}%`, backgroundColor: color }}
        />
      </div>
      <p className="text-[11px] text-[#888888] mt-1.5 tabular-nums">
        {pct}% of mistakes
      </p>
    </div>
  )
}
