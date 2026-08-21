"use client"

import { useState } from "react"
import { Minus, Plus, Info } from "lucide-react"
import {
  sectionScoresToTotal,
  SECTION_SCORE_MIN,
  SECTION_SCORE_MAX,
  SECTION_TOTAL_ESTIMATE_SWING,
} from "@/lib/scoring"
import { totalPercentile } from "@/lib/score-percentiles"

const EYEBROW = "text-[10px] font-semibold uppercase tracking-[0.22em] text-[#C9A84C]"

type SectionKey = "quant" | "verbal" | "di"
const SECTIONS: { key: SectionKey; label: string; color: string }[] = [
  { key: "quant", label: "Quant", color: "#5FA8FF" },
  { key: "verbal", label: "Verbal", color: "#B088FF" },
  { key: "di", label: "Data Insights", color: "#3ECF8E" },
]

const clampSection = (n: number) => {
  const r = Math.round(n)
  // Guard non-finite input so the field can never commit (or render) NaN.
  return Number.isFinite(r)
    ? Math.max(SECTION_SCORE_MIN, Math.min(SECTION_SCORE_MAX, r))
    : 75
}

/** Format integer or one-decimal percentile values for display. */
function ordinal(n: number): string {
  if (!Number.isInteger(n)) return `${n.toFixed(1)}th`
  const v = n % 100
  if (v >= 11 && v <= 13) return `${n}th`
  switch (n % 10) {
    case 1:
      return `${n}st`
    case 2:
      return `${n}nd`
    case 3:
      return `${n}rd`
    default:
      return `${n}th`
  }
}

export default function ScoreCalculatorClient() {
  const [scores, setScores] = useState<Record<SectionKey, number>>({
    quant: 75,
    verbal: 75,
    di: 75,
  })
  // Editing buffer per field: lets the user freely type (including clearing the
  // field or a partial single digit) without the value snapping mid-keystroke.
  // The number is clamped + committed to `scores` only on blur / Enter / stepper.
  const [drafts, setDrafts] = useState<Record<SectionKey, string>>({
    quant: "75",
    verbal: "75",
    di: "75",
  })

  const commit = (key: SectionKey, raw: string) => {
    const n = clampSection(Number(raw))
    setScores((s) => ({ ...s, [key]: n }))
    setDrafts((d) => ({ ...d, [key]: String(n) }))
  }
  const step = (key: SectionKey, delta: number) => {
    const n = clampSection(scores[key] + delta)
    setScores((s) => ({ ...s, [key]: n }))
    setDrafts((d) => ({ ...d, [key]: String(n) }))
  }

  const total = sectionScoresToTotal(scores.quant, scores.verbal, scores.di)
  // Use the current official GMAC total-score percentile table.
  const pct = totalPercentile(total)

  return (
    <div className="max-w-3xl mx-auto space-y-10">
      {/* Header */}
      <div className="px-1">
        <p className={EYEBROW + " mb-2"}>Tools</p>
        <h1 className="font-display text-3xl sm:text-4xl font-semibold text-[#F0F0F0] tracking-[-0.02em]">
          Score calculator
        </h1>
        <p className="mt-3 text-[14px] text-[#C0C0C0] leading-relaxed max-w-xl">
          Enter your three GMAT Focus section scores (each {SECTION_SCORE_MIN}–
          {SECTION_SCORE_MAX}) to estimate the total. Useful for converting an
          official practice-exam section breakdown into a total on the 205–805
          scale.
        </p>
      </div>

      {/* Section inputs */}
      <div className="grid gap-4 sm:grid-cols-3">
        {SECTIONS.map(({ key, label, color }) => (
          <div
            key={key}
            className="rounded-xl border border-white/[0.06] bg-[#111111] p-5"
          >
            <p
              className="text-[11px] font-semibold uppercase tracking-[0.14em] mb-3"
              style={{ color }}
            >
              {label}
            </p>
            <div className="flex items-center justify-between gap-2">
              <button
                type="button"
                onClick={() => step(key, -1)}
                disabled={scores[key] <= SECTION_SCORE_MIN}
                aria-label={`Decrease ${label} score`}
                className="flex items-center justify-center w-9 h-9 rounded-lg border border-white/[0.08] text-[#C0C0C0] hover:bg-white/[0.04] disabled:opacity-30 disabled:hover:bg-transparent transition-colors"
              >
                <Minus className="w-4 h-4" />
              </button>
              <input
                type="number"
                inputMode="numeric"
                min={SECTION_SCORE_MIN}
                max={SECTION_SCORE_MAX}
                value={drafts[key]}
                onChange={(e) =>
                  setDrafts((d) => ({ ...d, [key]: e.target.value }))
                }
                onBlur={(e) => commit(key, e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") (e.target as HTMLInputElement).blur()
                }}
                aria-label={`${label} section score`}
                className="w-16 bg-transparent text-center font-display text-3xl font-semibold text-[#F0F0F0] tabular-nums focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              />
              <button
                type="button"
                onClick={() => step(key, 1)}
                disabled={scores[key] >= SECTION_SCORE_MAX}
                aria-label={`Increase ${label} score`}
                className="flex items-center justify-center w-9 h-9 rounded-lg border border-white/[0.08] text-[#C0C0C0] hover:bg-white/[0.04] disabled:opacity-30 disabled:hover:bg-transparent transition-colors"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Result */}
      <div
        data-testid="score-calculator-result"
        className="rounded-2xl border p-6 sm:p-8 text-center"
        style={{
          borderColor: "rgba(201,168,76,0.25)",
          backgroundColor: "#0D0D0D",
        }}
      >
        <p className={EYEBROW + " mb-3"}>Estimated total</p>
        <div aria-live="polite">
          <p
            className="font-display text-6xl sm:text-7xl font-semibold tabular-nums leading-none"
            style={{ color: "#C9A84C" }}
          >
            {total}
          </p>
          <p className="mt-4 text-[13px] text-[#888888] tabular-nums">
            ≈ {ordinal(pct)} percentile
          </p>
        </div>
      </div>

      {/* Honesty / source note */}
      <div className="flex gap-3 rounded-xl border border-white/[0.06] bg-[#0D0D0D] p-4">
        <Info className="w-4 h-4 flex-shrink-0 mt-0.5 text-[#888888]" aria-hidden />
        <p className="text-[12px] text-[#888888] leading-relaxed">
          <span className="text-[#C0C0C0] font-medium">This is an estimate.</span>{" "}
          GMAC does not publish the official section→total formula. This
          calculator applies the transparent equal-weight approximation{" "}
          <span className="text-[#C0C0C0]">
            (Q + V + DI − 180) × 20⁄3 + 205
          </span>
          {". "}Identical section scores can map to different official totals,
          so treat the result as a ±
          {SECTION_TOTAL_ESTIMATE_SWING}-point ballpark — not an official
          conversion.
        </p>
      </div>
    </div>
  )
}
