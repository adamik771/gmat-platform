"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, ArrowRight, Calculator, RotateCcw } from "lucide-react"
import {
  bandForPercentile,
  convertFocusSectionToOldSection,
  convertFocusToOld,
  convertOldSectionToFocusSection,
  convertOldToFocus,
  getAnchors,
  type ScoreScale,
} from "@/lib/score-conversion"
import LeadCapture from "@/components/marketing/LeadCapture"

const FOCUS_STEP = 10
const OLD_STEP = 10

export default function ScoreConverterClient() {
  const [direction, setDirection] = useState<ScoreScale>("focus")
  const [score, setScore] = useState<number>(direction === "focus" ? 705 : 720)
  const [section, setSection] = useState<number | "">("")

  const isFocusInput = direction === "focus"
  const inputMin = isFocusInput ? 205 : 200
  const inputMax = isFocusInput ? 805 : 800
  const tick = isFocusInput ? FOCUS_STEP : OLD_STEP

  const totalConversion = isFocusInput
    ? convertFocusToOld(score)
    : convertOldToFocus(score)

  const sectionConversion =
    section === ""
      ? null
      : isFocusInput
        ? {
            equivalent: convertFocusSectionToOldSection(Number(section)),
            label: `Old per-section equivalent (6-51 scale)`,
          }
        : {
            equivalent: convertOldSectionToFocusSection(Number(section)),
            label: `Focus per-section equivalent (60-90 scale)`,
          }

  const band = bandForPercentile(totalConversion.percentile)
  const anchors = getAnchors()

  function flip() {
    const newDirection: ScoreScale = isFocusInput ? "old" : "focus"
    // When flipping, swap input value to the previous result so the user
    // sees a continuous bidirectional conversion rather than a reset.
    setScore(totalConversion.equivalent)
    setDirection(newDirection)
    setSection("")
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
            Translate a GMAT Focus score (205&ndash;805) into the
            equivalent legacy-test score (200&ndash;800), or vice versa.
            Based on the official GMAC concordance anchors with linear
            interpolation between them. Approximate by design &mdash; the
            two scales are not arithmetically interchangeable.
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
                  ? "Old GMAT equivalent (200-800)"
                  : "Focus equivalent (205-805)"}
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
                  ≈ {totalConversion.equivalent}
                </span>
              </div>
              <p className="text-[11px] text-[#888888] mt-2">
                Approximate &mdash; based on official GMAC concordance.
              </p>
            </div>
          </div>

          {/* Percentile + band */}
          <div className="relative mt-7 pt-7 border-t border-white/[0.06] grid sm:grid-cols-3 gap-4">
            <div>
              <p className="text-[10px] uppercase tracking-[0.22em] font-semibold text-[#888888] mb-2">
                Approx. percentile
              </p>
              <p
                className="font-display text-2xl font-semibold tabular-nums"
                style={{ color: "#F0F0F0" }}
              >
                {totalConversion.percentile}
                <span className="text-[#888888] text-base font-normal">
                  {" "}
                  / 100
                </span>
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
                A rough target translation. Admissions reviews look at
                the actual score &amp; percentile from your test report.
              </p>
            </div>
          </div>
        </div>

        {/* Per-section converter */}
        <div className="mt-10">
          <h2 className="font-display text-xl font-semibold text-[#F0F0F0] tracking-tight mb-3">
            Per-section conversion (optional)
          </h2>
          <p className="text-[14px] text-[#C0C0C0] leading-relaxed mb-5 max-w-2xl">
            Focus per-section scores run 60&ndash;90; old-test per-section
            scores ran 6&ndash;51. The mapping is roughly linear between
            endpoints, so a single section value below converts directly.
          </p>
          <div className="grid sm:grid-cols-2 gap-4 max-w-xl">
            <div>
              <label
                htmlFor="section-input"
                className="block text-[10px] uppercase tracking-[0.22em] font-semibold text-[#888888] mb-2"
              >
                {isFocusInput
                  ? "Per-section (60-90)"
                  : "Per-section (6-51)"}
              </label>
              <input
                id="section-input"
                type="number"
                min={isFocusInput ? 60 : 6}
                max={isFocusInput ? 90 : 51}
                value={section}
                onChange={(e) => {
                  const v = e.target.value
                  if (v === "") {
                    setSection("")
                    return
                  }
                  const n = parseInt(v, 10)
                  if (!isNaN(n)) setSection(n)
                }}
                placeholder="Enter a section score"
                className="w-full px-4 py-3 rounded-xl text-lg font-display font-semibold tabular-nums text-[#F0F0F0] placeholder-[#555555] border border-white/[0.08] bg-[#0A0A0A] outline-none focus:ring-2 focus:ring-[#C9A84C]/30 focus:border-[#C9A84C]/40 transition-all"
              />
            </div>
            <div>
              <p className="block text-[10px] uppercase tracking-[0.22em] font-semibold text-[#888888] mb-2">
                {sectionConversion?.label ??
                  (isFocusInput
                    ? "Old per-section equivalent (6-51)"
                    : "Focus per-section equivalent (60-90)")}
              </p>
              <div
                className="px-4 py-3 rounded-xl border"
                style={{
                  borderColor: "rgba(201,168,76,0.16)",
                  backgroundColor: "#0D0D0D",
                  minHeight: "53px",
                }}
              >
                {sectionConversion ? (
                  <span
                    className="font-display text-lg font-semibold tabular-nums"
                    style={{ color: "#C9A84C" }}
                  >
                    ≈ {sectionConversion.equivalent}
                  </span>
                ) : (
                  <span className="text-[14px] text-[#555555]">—</span>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Anchor reference table */}
        <div className="mt-12">
          <h2 className="font-display text-xl font-semibold text-[#F0F0F0] tracking-tight mb-3">
            Reference: GMAC concordance anchors
          </h2>
          <p className="text-[14px] text-[#C0C0C0] leading-relaxed mb-5 max-w-2xl">
            The converter interpolates between these anchor points.
            Direct lookup at any anchor matches the official concordance;
            scores in between are linear approximations.
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
                    Approx. percentile
                  </th>
                </tr>
              </thead>
              <tbody>
                {[...anchors].reverse().map((a, i) => (
                  <tr
                    key={a.focus}
                    className="border-t border-white/[0.05]"
                    style={{
                      backgroundColor: i % 2 === 0 ? "#0A0A0A" : "transparent",
                    }}
                  >
                    <td
                      className="py-3 px-4 font-display tabular-nums text-[#F0F0F0]"
                    >
                      {a.focus}
                    </td>
                    <td className="py-3 px-4 font-display tabular-nums text-[#C0C0C0]">
                      {a.old}
                    </td>
                    <td className="py-3 px-4 tabular-nums text-[#888888]">
                      {a.percentile}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
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
            move is finding out where you actually sit. The 30-question
            diagnostic produces a real readiness band on the Focus scale,
            plus a per-topic weakness map you can build a study plan
            around.
          </p>
          <div className="flex flex-wrap gap-3 mb-7">
            <Link
              href="/free-diagnostic"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-200 hover:opacity-90 hover:scale-[1.02]"
              style={{ backgroundColor: "#C9A84C", color: "#0A0A0A" }}
            >
              Take the Focus diagnostic
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
            source="other"
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
