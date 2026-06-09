"use client"

import { useState } from "react"
import Link from "next/link"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import {
  ArrowRight,
  Check,
  Copy,
  FlaskConical,
  Link2,
  X,
} from "lucide-react"
import type { Section } from "@/types"
import LeadCapture from "@/components/marketing/LeadCapture"
import {
  buildDiagnosticShareUrl,
  summarizeDiagnostic,
  type DiagnosticResult,
} from "@/lib/free-diagnostic-share"

export interface SampleQuestion {
  id: string
  section: Section
  topic: string
  prompt: string
  /** Shared exhibit (table/chart) for "continued" TA/GI questions. */
  context?: string
  options: string[]
  correctAnswer: number
  correctAnswerLetter: string
  explanation: string
}

const SECTION_PALETTE: Record<Section, { color: string; bg: string }> = {
  Quant: { color: "#C9A84C", bg: "rgba(201,168,76,0.12)" },
  Verbal: { color: "#3ECF8E", bg: "rgba(62,207,142,0.12)" },
  DI: { color: "#6FB5F6", bg: "rgba(111,181,246,0.12)" },
}

function letterFor(i: number): string {
  return String.fromCharCode(65 + i)
}

export default function FreeDiagnosticClient({
  samples,
}: {
  samples: SampleQuestion[]
}) {
  const [selections, setSelections] = useState<(number | null)[]>(
    samples.map(() => null),
  )
  const [submitted, setSubmitted] = useState(false)
  const [copyState, setCopyState] = useState<"idle" | "copied">("idle")

  const answered = selections.filter((s) => s !== null).length
  const correctCount = submitted
    ? samples.reduce(
        (acc, q, i) => (selections[i] === q.correctAnswer ? acc + 1 : acc),
        0,
      )
    : 0

  // Pull correctness arrays per section in the original sample order.
  // We assume `samples` is grouped Quant → Verbal → DI as the page
  // builder lays it out, but compute defensively from `q.section`.
  const result: DiagnosticResult = (() => {
    const correctPerSection: Record<Section, boolean[]> = {
      Quant: [],
      Verbal: [],
      DI: [],
    }
    samples.forEach((q, i) => {
      correctPerSection[q.section].push(selections[i] === q.correctAnswer)
    })
    return {
      quant: correctPerSection.Quant,
      verbal: correctPerSection.Verbal,
      di: correctPerSection.DI,
    }
  })()
  const summary = summarizeDiagnostic(result)

  async function handleCopyShare() {
    const origin =
      typeof window !== "undefined" ? window.location.origin : ""
    const shareUrl = buildDiagnosticShareUrl(origin, result)
    try {
      await navigator.clipboard.writeText(shareUrl)
      setCopyState("copied")
      setTimeout(() => setCopyState("idle"), 2000)
    } catch {
      // Clipboard API can fail in older browsers / non-secure contexts.
      // Fall back: open the share URL in a new tab so the user can copy
      // from the address bar.
      if (typeof window !== "undefined") window.open(shareUrl, "_blank")
    }
  }

  return (
    <div className="relative max-w-3xl mx-auto px-4 py-16 sm:py-20 space-y-10">
      {/* Atmospheric glow behind the intro */}
      <div
        className="absolute inset-x-0 top-0 h-[32rem] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(201,168,76,0.12) 0%, transparent 65%)",
        }}
        aria-hidden
      />
      <div className="relative">
        <div className="flex items-center gap-2 mb-3">
          <FlaskConical className="w-4 h-4" style={{ color: "#C9A84C" }} />
          <p className="text-[10px] uppercase tracking-[0.2em] text-[#C9A84C] font-semibold">
            Free sampler
          </p>
          <div
            className="flex-1 h-px ml-2"
            style={{
              background:
                "linear-gradient(to right, rgba(201,168,76,0.3), transparent)",
            }}
          />
        </div>
        <h1 className="font-display text-4xl sm:text-5xl font-semibold text-[#F0F0F0] tracking-[-0.02em] leading-[1.05]">
          Try{" "}
          <span className="font-display-italic" style={{ color: "#C9A84C" }}>
            ten
          </span>{" "}
          questions — three per section, plus a Verbal extra
        </h1>
        <p className="text-[15px] text-[#888888] leading-relaxed mt-4 max-w-2xl">
          Three Quant, four Verbal, three Data Insights — all
          Beginner-leaning so the sampler stays approachable. You&apos;ll
          see per-section signals and a shareable result at the end. The
          full diagnostic on signup is 30 questions and produces a real
          readiness band; this is the honest preview.
        </p>

        {/* Progress dots */}
        <div className="flex items-center gap-2.5 mt-6">
          {samples.map((q, i) => {
            const isAnswered = selections[i] !== null
            const isCorrect = submitted && selections[i] === q.correctAnswer
            const isWrong =
              submitted && isAnswered && selections[i] !== q.correctAnswer
            return (
              <div
                key={q.id}
                className="h-1.5 flex-1 rounded-full transition-colors duration-300"
                style={{
                  backgroundColor: isCorrect
                    ? "#3ECF8E"
                    : isWrong
                      ? "#FF4444"
                      : isAnswered
                        ? "#C9A84C"
                        : "rgba(255,255,255,0.06)",
                }}
                aria-hidden
              />
            )
          })}
          <p className="text-[10px] uppercase tracking-[0.18em] text-[#555555] ml-1 tabular-nums">
            {submitted
              ? `${correctCount} / ${samples.length} correct`
              : `${answered} / ${samples.length}`}
          </p>
        </div>
      </div>

      <div className="space-y-6">
        {samples.map((q, i) => {
          const selected = selections[i]
          const palette = SECTION_PALETTE[q.section]
          return (
            <div
              key={q.id}
              className="relative p-6 rounded-2xl border border-white/[0.08] bg-[#111111] transition-all duration-300 hover:border-white/[0.12]"
            >
              <div className="flex items-center gap-2 mb-4 flex-wrap">
                <span
                  className="font-display text-[10px] uppercase tracking-[0.2em] text-[#555555] tabular-nums"
                  aria-hidden
                >
                  Q{i + 1} / {samples.length}
                </span>
                <div className="h-3 w-px bg-white/[0.08]" aria-hidden />
                <span
                  className="px-2 py-0.5 rounded text-[10px] uppercase tracking-[0.15em] font-medium"
                  style={{
                    backgroundColor: palette.bg,
                    color: palette.color,
                  }}
                >
                  {q.section}
                </span>
                <span className="text-[11px] text-[#888888]">{q.topic}</span>
              </div>
              {q.context && (
                <div className="mb-4 p-4 rounded-xl border border-white/[0.06] bg-[#0D0D0D] text-[13px] text-[#C0C0C0] leading-relaxed overflow-x-auto [&_table]:w-full [&_table]:border-collapse [&_td]:border [&_td]:border-white/[0.08] [&_td]:px-2 [&_td]:py-1 [&_th]:border [&_th]:border-white/[0.08] [&_th]:px-2 [&_th]:py-1 [&_th]:text-left">
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {q.context}
                  </ReactMarkdown>
                </div>
              )}
              <div className="text-[15px] text-[#F0F0F0] leading-relaxed mb-4">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {q.prompt}
                </ReactMarkdown>
              </div>
              <div className="space-y-2">
                {q.options.map((option, idx) => {
                  const isSelected = selected === idx
                  const isCorrectChoice = submitted && idx === q.correctAnswer
                  const isWrongChoice =
                    submitted && isSelected && idx !== q.correctAnswer
                  const borderColour = isCorrectChoice
                    ? "rgba(62,207,142,0.5)"
                    : isWrongChoice
                      ? "rgba(255,68,68,0.5)"
                      : isSelected
                        ? "rgba(201,168,76,0.35)"
                        : "rgba(255,255,255,0.08)"
                  const bgColour = isCorrectChoice
                    ? "rgba(62,207,142,0.06)"
                    : isWrongChoice
                      ? "rgba(255,68,68,0.06)"
                      : isSelected
                        ? "rgba(201,168,76,0.08)"
                        : "#0D0D0D"
                  return (
                    <button
                      key={idx}
                      onClick={() => {
                        if (submitted) return
                        setSelections((prev) => {
                          const next = prev.slice()
                          next[i] = idx
                          return next
                        })
                      }}
                      disabled={submitted}
                      className="group/option w-full text-left p-3.5 rounded-xl border transition-all duration-200 disabled:cursor-not-allowed hover:enabled:border-white/[0.2] hover:enabled:bg-[#161616]"
                      style={{
                        borderColor: borderColour,
                        backgroundColor: bgColour,
                      }}
                    >
                      <div className="flex items-start gap-3">
                        <span
                          className="flex items-center justify-center w-6 h-6 rounded-full flex-shrink-0 text-[11px] font-bold tabular-nums transition-colors"
                          style={{
                            backgroundColor: isCorrectChoice
                              ? "rgba(62,207,142,0.18)"
                              : isWrongChoice
                                ? "rgba(255,68,68,0.18)"
                                : isSelected
                                  ? "rgba(201,168,76,0.22)"
                                  : "rgba(255,255,255,0.04)",
                            color: isCorrectChoice
                              ? "#3ECF8E"
                              : isWrongChoice
                                ? "#FF4444"
                                : isSelected
                                  ? "#C9A84C"
                                  : "#888888",
                          }}
                        >
                          {letterFor(idx)}
                        </span>
                        <div className="flex-1 text-sm text-[#F0F0F0] leading-relaxed">
                          <ReactMarkdown remarkPlugins={[remarkGfm]}>
                            {option}
                          </ReactMarkdown>
                        </div>
                        {isCorrectChoice && (
                          <Check
                            className="w-4 h-4 mt-0.5 flex-shrink-0"
                            style={{ color: "#3ECF8E" }}
                          />
                        )}
                        {isWrongChoice && (
                          <X
                            className="w-4 h-4 mt-0.5 flex-shrink-0"
                            style={{ color: "#FF4444" }}
                          />
                        )}
                      </div>
                    </button>
                  )
                })}
              </div>
              {submitted && (
                <div
                  className="mt-4 p-3 rounded-lg border"
                  style={{
                    borderColor: "rgba(201,168,76,0.18)",
                    backgroundColor: "rgba(201,168,76,0.04)",
                  }}
                >
                  <p className="text-[10px] uppercase tracking-widest font-semibold mb-1"
                    style={{ color: "#C9A84C" }}
                  >
                    Explanation · answer {q.correctAnswerLetter}
                  </p>
                  <div className="text-[13px] leading-relaxed text-[#D8D8D8]">
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>
                      {q.explanation}
                    </ReactMarkdown>
                  </div>
                </div>
              )}
            </div>
          )
        })}
      </div>

      {!submitted ? (
        <div className="flex items-center justify-between gap-4 flex-wrap pt-2">
          <p className="text-[11px] uppercase tracking-[0.18em] text-[#555555] tabular-nums">
            {answered} of {samples.length} answered
          </p>
          <button
            onClick={() => setSubmitted(true)}
            disabled={answered < samples.length}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-200 hover:enabled:opacity-90 hover:enabled:scale-[1.02] disabled:opacity-40 disabled:cursor-not-allowed"
            style={{ backgroundColor: "#C9A84C", color: "#0A0A0A" }}
          >
            Submit & see explanations
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      ) : (
        <div
          className="relative p-8 sm:p-10 rounded-2xl border overflow-hidden"
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

          <div className="relative flex items-start justify-between gap-6 flex-wrap mb-6">
            <div>
              <p className="text-[10px] uppercase tracking-[0.22em] text-[#C9A84C] font-semibold mb-2">
                Sampler complete
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-semibold text-[#F0F0F0] tracking-[-0.02em] leading-[1.1]">
                The full diagnostic does{" "}
                <span
                  className="font-display-italic"
                  style={{ color: "#C9A84C" }}
                >
                  a lot
                </span>{" "}
                more.
              </h2>
            </div>
            <div className="flex items-baseline gap-1.5 flex-shrink-0">
              <span
                className="font-display text-5xl sm:text-6xl font-semibold tabular-nums tracking-[-0.03em] leading-none"
                style={{ color: "#C9A84C" }}
              >
                {correctCount}
              </span>
              <span className="font-display text-2xl font-semibold text-[#555555] tracking-tight">
                / {samples.length}
              </span>
            </div>
          </div>

          {/* Per-section breakdown. We show correct/total + a banded
              label (Strong / Mixed / Needs work). Deliberately no "score
              estimate" — at 3-4 questions per section the percentage
              would be noise, and the audit's "predicted score range"
              would be fake precision. Strong/Mixed/Needs work tells the
              user what they need to know without dressing up small-N
              data. */}
          <div className="relative mb-6 grid grid-cols-1 sm:grid-cols-3 gap-2.5">
            {summary.perSection.map((row) => {
              const palette = SECTION_PALETTE[row.section]
              const bandColour =
                row.band === "Strong"
                  ? "#3ECF8E"
                  : row.band === "Mixed"
                    ? "#C9A84C"
                    : "#FF4444"
              const bandBg =
                row.band === "Strong"
                  ? "rgba(62,207,142,0.04)"
                  : row.band === "Mixed"
                    ? "rgba(201,168,76,0.04)"
                    : "rgba(255,68,68,0.04)"
              const bandBorder =
                row.band === "Strong"
                  ? "rgba(62,207,142,0.28)"
                  : row.band === "Mixed"
                    ? "rgba(201,168,76,0.28)"
                    : "rgba(255,68,68,0.28)"
              return (
                <div
                  key={row.section}
                  className="p-3.5 rounded-xl border"
                  style={{
                    borderColor: bandBorder,
                    backgroundColor: bandBg,
                  }}
                >
                  <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                    <span
                      className="px-1.5 py-0.5 rounded text-[10px] uppercase tracking-[0.15em] font-medium"
                      style={{
                        backgroundColor: palette.bg,
                        color: palette.color,
                      }}
                    >
                      {row.section}
                    </span>
                    <span className="text-[11px] text-[#888888] tabular-nums">
                      {row.correct} / {row.total}
                    </span>
                    <span
                      className="text-[11px] font-semibold ml-auto"
                      style={{ color: bandColour }}
                    >
                      {row.band}
                    </span>
                  </div>
                  <p className="text-[12px] text-[#888888] leading-snug">
                    {row.band === "Strong"
                      ? "Sampler clean — the full diagnostic surfaces the harder edges of this section."
                      : row.band === "Mixed"
                        ? "One miss in the sampler. Real patterns surface at 10 questions per section."
                        : "Worth focused practice — your patterns here will be visible fast in the full diagnostic."}
                  </p>
                </div>
              )
            })}
          </div>

          {summary.weakestSection && (
            <p className="relative text-[13px] text-[#888888] mb-6">
              <span className="text-[#F0F0F0] font-semibold">
                Weakest section in the sampler:{" "}
              </span>
              {summary.weakestSection}. The full 30-question diagnostic
              identifies the specific topics inside that section that are
              hurting your score.
            </p>
          )}

          <p className="relative text-[15px] text-[#C0C0C0] leading-relaxed mb-7 max-w-xl">
            30 stratified questions across the three sections produce a
            readiness band, weak-topic list, recommended chapters, and a
            section-order hypothesis. That whole analysis runs automatically
            after signup — no card required.
          </p>

          <div className="relative flex flex-wrap gap-3 mb-4">
            <Link
              href="/signup"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-200 hover:opacity-90 hover:scale-[1.02]"
              style={{ backgroundColor: "#C9A84C", color: "#0A0A0A" }}
            >
              Sign up to take the full diagnostic
              <ArrowRight className="w-4 h-4" />
            </Link>
            <button
              type="button"
              onClick={handleCopyShare}
              aria-label="Copy a shareable link to your sampler result"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold border transition-all duration-200"
              style={{
                borderColor: "rgba(201,168,76,0.32)",
                color: "#C9A84C",
                backgroundColor: "rgba(201,168,76,0.04)",
              }}
            >
              {copyState === "copied" ? (
                <>
                  <Check className="w-4 h-4" />
                  Link copied
                </>
              ) : (
                <>
                  <Link2 className="w-4 h-4" />
                  Share my result
                </>
              )}
            </button>
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold border border-white/[0.1] text-[#C0C0C0] hover:border-white/[0.18] hover:text-[#F0F0F0] transition-all duration-200"
            >
              Back to home
            </Link>
          </div>
          <p className="relative text-[11px] text-[#555555] mb-2 flex items-center gap-1.5">
            <Copy className="w-3 h-3" />
            Sharing copies a public link to your section signals — no
            account needed.
          </p>

          {/* Email capture for prospects who aren't ready to sign up. The
              error-log template is a tangible deliverable; the social
              drafts (LinkedIn / X / Reddit) all promise the same asset,
              so this surface and those funnels share a delivery path. */}
          <div className="relative mt-8">
            <LeadCapture
              source="free-diagnostic"
              leadMagnet="error-log-template"
              eyebrow="Not ready to sign up?"
              headline="Get the error-log template instead."
              description="The same six-tag taxonomy the full diagnostic uses, in a spreadsheet you can run yourself. Two months of honest logging surfaces the patterns."
              ctaLabel="Send me the template"
              variant="compact"
            />
          </div>
        </div>
      )}
    </div>
  )
}
