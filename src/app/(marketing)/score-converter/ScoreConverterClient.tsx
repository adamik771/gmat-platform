"use client"

import { useState } from "react"
import Link from "next/link"
import {
  ArrowLeft,
  ArrowRight,
  Calculator,
  ExternalLink,
  RotateCcw,
} from "lucide-react"
import {
  bandForPercentile,
  convertFocusToOld,
  convertOldToFocus,
  formatPercentileRange,
  formatScoreRange,
  GMAC_CONCORDANCE_PUBLISHED,
  GMAC_CONCORDANCE_SOURCE_URL,
  type ScoreScale,
} from "@/lib/score-conversion"
import LeadCapture from "@/components/marketing/LeadCapture"

const FOCUS_STEP = 10
const OLD_STEP = 10

export default function ScoreConverterClient() {
  const [direction, setDirection] = useState<ScoreScale>("focus")
  const [score, setScore] = useState<number>(direction === "focus" ? 705 : 720)

  const isFocusInput = direction === "focus"
  const inputMin = isFocusInput ? 205 : 200
  const inputMax = isFocusInput ? 805 : 800
  const tick = isFocusInput ? FOCUS_STEP : OLD_STEP

  const totalConversion = isFocusInput
    ? convertFocusToOld(score)
    : convertOldToFocus(score)

  const band = bandForPercentile(totalConversion.minPercentile)
  const equivalentLabel = formatScoreRange(
    totalConversion.minEquivalent,
    totalConversion.maxEquivalent
  )
  const percentileLabel = formatPercentileRange(
    totalConversion.minPercentile,
    totalConversion.maxPercentile
  )

  function flip() {
    const newDirection: ScoreScale = isFocusInput ? "old" : "focus"
    // The official mapping can be a range. Use a real linked score near the
    // middle of that range rather than an interpolated value.
    setScore(totalConversion.representativeEquivalent)
    setDirection(newDirection)
  }

  return (
    <div style={{ backgroundColor: "#0A0A0A" }}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 pt-28 pb-20">
        <Link
          href="/blog/gmat-focus-vs-old-gmat-whats-changed"
          className="inline-flex items-center gap-1.5 text-[12px] text-[#888888] hover:text-[#F0F0F0] transition-colors mb-8"
        >
          <ArrowLeft className="w-3 h-3" />
          Read the full Focus vs old GMAT explainer
        </Link>

        <header className="mb-10">
          <div className="inline-flex items-center gap-2 mb-5">
            <Calculator className="w-4 h-4" style={{ color: "#C9A84C" }} />
            <p className="text-[10px] uppercase tracking-[0.22em] text-[#C9A84C] font-semibold">
              Free tool
            </p>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl font-semibold text-[#F0F0F0] tracking-[-0.02em] leading-[1.05] mb-5">
            GMAT score converter:{" "}
            <span className="font-display-italic" style={{ color: "#C9A84C" }}>
              Focus ↔ old test.
            </span>
          </h1>
          <p className="text-[16px] text-[#C0C0C0] leading-relaxed max-w-2xl">
            Look up the score or score range linked by GMAC&apos;s official
            concordance. The two exams use different score bins, so one score
            can legitimately map to several scores on the other scale.
          </p>
        </header>

        {/* Direction toggle */}
        <div className="mb-6 flex items-center gap-2">
          <button
            type="button"
            onClick={() => {
              if (direction !== "focus") flip()
            }}
            className="flex-1 px-4 py-3 rounded-xl text-sm font-semibold transition-all border"
            style={{
              borderColor: isFocusInput
                ? "rgba(201,168,76,0.4)"
                : "rgba(255,255,255,0.08)",
              backgroundColor: isFocusInput
                ? "rgba(201,168,76,0.08)"
                : "#0D0D0D",
              color: isFocusInput ? "#C9A84C" : "#888888",
            }}
          >
            Focus → Old
          </button>
          <button
            type="button"
            onClick={() => {
              if (direction !== "old") flip()
            }}
            className="flex-1 px-4 py-3 rounded-xl text-sm font-semibold transition-all border"
            style={{
              borderColor: !isFocusInput
                ? "rgba(201,168,76,0.4)"
                : "rgba(255,255,255,0.08)",
              backgroundColor: !isFocusInput
                ? "rgba(201,168,76,0.08)"
                : "#0D0D0D",
              color: !isFocusInput ? "#C9A84C" : "#888888",
            }}
          >
            Old → Focus
          </button>
          <button
            type="button"
            onClick={flip}
            aria-label="Swap direction and use the converted result as the new input"
            className="px-3 py-3 rounded-xl border border-white/[0.08] bg-[#0D0D0D] text-[#888888] hover:text-[#C9A84C] hover:border-white/[0.16] transition-all"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>

        {/* Input + result panel */}
        <div
          className="p-6 sm:p-8 rounded-2xl border overflow-hidden relative"
          style={{
            borderColor: "rgba(201,168,76,0.28)",
            backgroundColor: "#111111",
            boxShadow:
              "0 0 80px rgba(201,168,76,0.1), inset 0 1px 0 rgba(255,255,255,0.04)",
          }}
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 70% 80% at 100% 0%, rgba(201,168,76,0.08) 0%, transparent 60%)",
            }}
            aria-hidden
          />

          <div className="relative grid sm:grid-cols-2 gap-8 items-start">
            {/* Input */}
            <div>
              <label
                htmlFor="score-input"
                className="block text-[10px] uppercase tracking-[0.22em] font-semibold text-[#888888] mb-3"
              >
                {isFocusInput
                  ? "Your Focus score (205-805)"
                  : "Your old GMAT score (200-800)"}
              </label>
              <input
                id="score-input"
                type="number"
                min={inputMin}
                max={inputMax}
                step={tick}
                value={score}
                onChange={(e) => {
                  const v = parseInt(e.target.value, 10)
                  if (!isNaN(v)) setScore(v)
                }}
                className="w-full px-5 py-4 rounded-xl text-3xl font-display font-semibold tabular-nums text-[#F0F0F0] border border-white/[0.08] bg-[#0A0A0A] outline-none focus:ring-2 focus:ring-[#C9A84C]/30 focus:border-[#C9A84C]/40 transition-all"
              />
              <p className="text-[11px] text-[#555555] mt-2">
                Range: {inputMin}&ndash;{inputMax}, snap to {tick}-point
                increments.
              </p>
            </div>

            {/* Result */}
            <div>
              <label className="block text-[10px] uppercase tracking-[0.22em] font-semibold text-[#888888] mb-3">
                {isFocusInput
                  ? "Linked old GMAT score(s)"
                  : "Linked current GMAT score(s)"}
              </label>
              <div
                className="px-5 py-4 rounded-xl border"
                style={{
                  borderColor: "rgba(201,168,76,0.32)",
                  backgroundColor: "rgba(201,168,76,0.06)",
                }}
              >
                <span
                  className="font-display text-3xl font-semibold tabular-nums"
                  style={{ color: "#C9A84C" }}
                >
                  {equivalentLabel}
                </span>
              </div>
              <p className="text-[11px] text-[#888888] mt-2">
                Official linked{" "}
                {totalConversion.equivalents.length === 1 ? "score" : "range"};
                no interpolation.
              </p>
            </div>
          </div>

          {/* Percentile + band */}
          <div className="relative mt-7 pt-7 border-t border-white/[0.06] grid sm:grid-cols-3 gap-4">
            <div>
              <p className="text-[10px] uppercase tracking-[0.22em] font-semibold text-[#888888] mb-2">
                Official percentile
              </p>
              <p
                className="font-display text-2xl font-semibold tabular-nums"
                style={{ color: "#F0F0F0" }}
              >
                {percentileLabel}
              </p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.22em] font-semibold text-[#888888] mb-2">
                Band
              </p>
              <p
                className="font-display text-2xl font-semibold"
                style={{ color: "#C9A84C" }}
              >
                {band}
              </p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.22em] font-semibold text-[#888888] mb-2">
                Use this as
              </p>
              <p className="text-[13px] text-[#C0C0C0] leading-snug">
                A concordance reference. Schools still receive the actual
                score and percentile shown on your report.
              </p>
            </div>
          </div>
        </div>

        {/* Exact rows used for the selected score */}
        <div className="mt-12">
          <h2 className="font-display text-xl font-semibold text-[#F0F0F0] tracking-tight mb-3">
            Official rows for this score
          </h2>
          <p className="text-[14px] text-[#C0C0C0] leading-relaxed mb-5 max-w-2xl">
            These are the exact linked rows used above. GMAC explains that
            ranges occur because the exams have different score-bin sizes and
            observed frequencies.
          </p>
          <div
            className="overflow-x-auto rounded-xl border border-white/[0.08]"
            style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.03)" }}
          >
            <table className="w-full text-sm">
              <thead>
                <tr style={{ backgroundColor: "#0F0F0F" }}>
                  <th className="py-3 px-4 text-left text-[10px] uppercase tracking-[0.18em] text-[#888888] font-semibold">
                    Focus (205-805)
                  </th>
                  <th className="py-3 px-4 text-left text-[10px] uppercase tracking-[0.18em] text-[#888888] font-semibold">
                    Old GMAT (200-800)
                  </th>
                  <th className="py-3 px-4 text-left text-[10px] uppercase tracking-[0.18em] text-[#888888] font-semibold">
                    Official percentile
                  </th>
                </tr>
              </thead>
              <tbody>
                {[...totalConversion.rows].reverse().map((row, i) => (
                  <tr
                    key={row.focus}
                    className="border-t border-white/[0.05]"
                    style={{
                      backgroundColor: i % 2 === 0 ? "#0A0A0A" : "transparent",
                    }}
                  >
                    <td
                      className="py-3 px-4 font-display tabular-nums text-[#F0F0F0]"
                    >
                      {row.focus}
                    </td>
                    <td className="py-3 px-4 font-display tabular-nums text-[#C0C0C0]">
                      {formatScoreRange(row.old[0], row.old[row.old.length - 1])}
                    </td>
                    <td className="py-3 px-4 tabular-nums text-[#888888]">
                      {row.percentile.toFixed(1)}%
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4 flex items-start gap-2 text-[12px] leading-relaxed text-[#888888]">
            <ExternalLink className="mt-0.5 h-3.5 w-3.5 flex-none" aria-hidden />
            <p>
              Source: GMAC, GMAT Score Concordance Table, published {" "}
              {GMAC_CONCORDANCE_PUBLISHED}.{" "}
              <a
                href={GMAC_CONCORDANCE_SOURCE_URL}
                target="_blank"
                rel="noreferrer"
                className="text-[#C9A84C] hover:text-[#E0C36A] transition-colors"
              >
                View the official table
              </a>
              . GMAC notes that percentile values are updated annually.
            </p>
          </div>
        </div>

        {/* CTA + lead capture */}
        <div
          className="mt-12 p-7 sm:p-9 rounded-2xl border"
          style={{
            borderColor: "rgba(201,168,76,0.28)",
            backgroundColor: "#111111",
          }}
        >
          <p className="text-[10px] uppercase tracking-[0.22em] text-[#C9A84C] font-semibold mb-2">
            What this means for your prep
          </p>
          <h2 className="font-display text-2xl font-semibold text-[#F0F0F0] tracking-tight leading-tight mb-4">
            Knowing your target translates into knowing your{" "}
            <span className="font-display-italic" style={{ color: "#C9A84C" }}>
              gap.
            </span>
          </h2>
          <p className="text-[15px] text-[#C0C0C0] leading-relaxed mb-6 max-w-xl">
            Once you know what Focus score you&apos;re aiming at, the next
            move is finding out where you actually sit. Take an official
            practice exam on mba.com as your baseline, enter your section
            scores on the platform, and it builds a per-topic study plan
            around the gap.
          </p>
          <div className="flex flex-wrap gap-3 mb-7">
            <Link
              href="/signup"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-200 hover:opacity-90 hover:scale-[1.02]"
              style={{ backgroundColor: "#C9A84C", color: "#0A0A0A" }}
            >
              Start Free
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/blog/gmat-focus-vs-old-gmat-whats-changed"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold border transition-all duration-200"
              style={{
                borderColor: "rgba(201,168,76,0.32)",
                color: "#C9A84C",
                backgroundColor: "rgba(201,168,76,0.04)",
              }}
            >
              Read the full Focus vs old explainer
            </Link>
          </div>

          <LeadCapture
            source="score-converter"
            leadMagnet="error-log-template"
            eyebrow="Free template"
            headline="Get the error-log template I used to go from 565 to 735."
            description="The same six-tag taxonomy the Zakarian platform uses, in a spreadsheet you can run yourself. Two months of honest logging surfaces the patterns."
            ctaLabel="Send me the template"
            variant="compact"
          />
        </div>
      </div>
    </div>
  )
}
