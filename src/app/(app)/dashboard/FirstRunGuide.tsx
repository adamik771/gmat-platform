"use client"

import { useState } from "react"
import Link from "next/link"
import {
  ArrowRight,
  Check,
  ChevronDown,
  ChevronRight,
  Compass,
} from "lucide-react"
import { createSupabaseBrowser } from "@/lib/supabase/browser"
import type { First48Step } from "./first48"

/**
 * First 48 hours — the ONE dashboard-anchored guide for a new account.
 * Steps arrive fully derived from real product state (see first48.ts); this
 * component only renders them, keeps a single obvious next action (the first
 * open step gets the primary CTA), and handles the two persisted scalars:
 *
 *   - guide_dismissed_at        — permanent skip (existing scalar, kept)
 *   - guide_explainer_opened_at — set when the exam-types explainer is opened
 *
 * Both are TOP-LEVEL user_metadata scalars on purpose: auth.updateUser
 * replaces nested objects wholesale, so nesting them under `onboarding`
 * would clobber completedAt.
 *
 * Collapsed state: once every step is done (or the guide was skipped) it
 * shrinks to a one-line row that can be reopened — never a second checklist.
 */
export default function FirstRunGuide({
  steps,
  dismissed,
}: {
  steps: First48Step[]
  dismissed: boolean
}) {
  const complete = steps.every((s) => s.done)
  const [expanded, setExpanded] = useState(!dismissed && !complete)
  const [skipped, setSkipped] = useState(dismissed)
  const [explainerOpen, setExplainerOpen] = useState(false)
  const [explainerDone, setExplainerDone] = useState(
    steps.find((s) => s.key === "exam-types")?.done ?? false
  )

  const effectiveSteps = steps.map((s) =>
    s.key === "exam-types" ? { ...s, done: s.done || explainerDone } : s
  )
  const doneCount = effectiveSteps.filter((s) => s.done).length
  const firstOpenIdx = effectiveSteps.findIndex((s) => !s.done)

  const persistScalar = async (key: string) => {
    try {
      const supabase = createSupabaseBrowser()
      await supabase.auth.updateUser({
        data: { [key]: new Date().toISOString() },
      })
    } catch {
      // Non-fatal: re-derived from server state next visit at worst.
    }
  }

  const handleSkip = () => {
    setSkipped(true)
    setExpanded(false)
    void persistScalar("guide_dismissed_at")
  }

  const openExplainer = () => {
    setExplainerOpen((open) => !open)
    if (!explainerDone) {
      setExplainerDone(true)
      void persistScalar("guide_explainer_opened_at")
    }
  }

  // Collapsed row — the persistent, quiet reopen affordance.
  if (!expanded) {
    return (
      <button
        type="button"
        onClick={() => setExpanded(true)}
        className="w-full flex items-center gap-3 px-5 py-3 rounded-2xl border transition-colors hover:bg-white/[0.02] text-left"
        style={{
          borderColor: "rgba(255,255,255,0.06)",
          backgroundColor: "#0D0D0D",
        }}
      >
        <Compass
          className="w-4 h-4 flex-shrink-0"
          style={{ color: complete ? "#3ECF8E" : "#C9A84C" }}
          aria-hidden
        />
        <span className="flex-1 min-w-0 text-[12px]" style={{ color: "#888888" }}>
          <span className="font-semibold" style={{ color: "#C0C0C0" }}>
            First 48 hours
          </span>{" "}
          <span className="tabular-nums">
            · {doneCount}/{effectiveSteps.length}
          </span>
          {complete && (
            <span style={{ color: "#3ECF8E" }}>
              {" "}
              — complete. Today&apos;s Mission takes it from here.
            </span>
          )}
        </span>
        <ChevronRight
          className="w-3.5 h-3.5 flex-shrink-0 text-[#888888]"
          aria-hidden
        />
      </button>
    )
  }

  return (
    <section
      className="rounded-2xl border overflow-hidden"
      style={{
        borderColor: "rgba(201,168,76,0.28)",
        backgroundColor: "rgba(201,168,76,0.05)",
      }}
    >
      <div className="flex items-start justify-between gap-4 px-5 sm:px-6 pt-5">
        <div className="min-w-0">
          <p
            className="text-[10px] font-semibold uppercase tracking-[0.22em] mb-1.5"
            style={{ color: "#C9A84C" }}
          >
            First 48 hours · {doneCount}/{effectiveSteps.length}
          </p>
          <h2 className="font-display text-xl sm:text-2xl font-semibold text-[#F0F0F0] tracking-tight">
            {complete
              ? "You're in the loop."
              : "Your first two days, mapped out"}
          </h2>
          <p className="text-[13px] text-[#888888] mt-1 leading-relaxed">
            {complete
              ? "Every step is done — from here, Today's Mission on this page is your daily next action."
              : "Each step completes itself as you do the real thing. One action at a time."}
          </p>
        </div>
        <div className="flex items-center gap-3 flex-shrink-0">
          {!skipped && !complete && (
            <button
              type="button"
              onClick={handleSkip}
              className="text-[12px] text-[#888888] hover:text-[#C0C0C0] transition-colors"
            >
              Skip
            </button>
          )}
          <button
            type="button"
            onClick={() => setExpanded(false)}
            aria-label="Collapse the guide"
            className="text-[12px] text-[#888888] hover:text-[#C0C0C0] transition-colors"
          >
            Hide
          </button>
        </div>
      </div>

      {([1, 2] as const).map((day) => (
        <div key={day}>
          <p
            className="px-5 sm:px-6 pt-4 pb-1 text-[10px] font-semibold uppercase tracking-[0.22em]"
            style={{ color: "#888888" }}
          >
            Day {day}
          </p>
          <ol className="px-3 sm:px-4 pb-1 space-y-1">
            {effectiveSteps.map((step, i) => {
              if (step.day !== day) return null
              const isNext = i === firstOpenIdx
              const isExplainer = step.key === "exam-types"
              return (
                <li
                  key={step.key}
                  className="rounded-xl px-2.5 sm:px-3 py-2.5"
                  style={
                    isNext
                      ? {
                          backgroundColor: "rgba(201,168,76,0.07)",
                          border: "1px solid rgba(201,168,76,0.2)",
                        }
                      : undefined
                  }
                >
                  <div className="flex items-start gap-3">
                    <span
                      className="flex items-center justify-center w-6 h-6 rounded-full flex-shrink-0 mt-0.5"
                      style={{
                        backgroundColor: step.done
                          ? "rgba(62,207,142,0.14)"
                          : "rgba(201,168,76,0.12)",
                      }}
                    >
                      {step.done ? (
                        <Check
                          className="w-3 h-3"
                          style={{ color: "#3ECF8E" }}
                        />
                      ) : (
                        <span
                          className="text-[11px] font-semibold tabular-nums"
                          style={{ color: "#C9A84C" }}
                        >
                          {i + 1}
                        </span>
                      )}
                    </span>
                    <div className="flex-1 min-w-0">
                      <p
                        className="text-[13px] font-semibold tracking-tight"
                        style={{
                          color: step.done ? "#888888" : "#F0F0F0",
                          textDecoration: step.done ? "line-through" : undefined,
                        }}
                      >
                        {step.title}
                      </p>
                      {isNext && (
                        <p className="text-[12px] text-[#888888] leading-relaxed mt-0.5">
                          {step.detail}
                        </p>
                      )}
                    </div>
                    {!step.done &&
                      (isExplainer ? (
                        <button
                          type="button"
                          onClick={openExplainer}
                          className={
                            isNext
                              ? "inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-[12px] font-semibold flex-shrink-0 transition-transform hover:-translate-y-0.5"
                              : "inline-flex items-center gap-1.5 text-[12px] font-semibold flex-shrink-0 mt-0.5 hover:underline"
                          }
                          style={
                            isNext
                              ? { backgroundColor: "#C9A84C", color: "#0A0A0A" }
                              : { color: "#C9A84C" }
                          }
                        >
                          {step.cta}
                          <ChevronDown className="w-3 h-3" />
                        </button>
                      ) : (
                        <Link
                          href={step.href}
                          className={
                            isNext
                              ? "inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-[12px] font-semibold flex-shrink-0 transition-transform hover:-translate-y-0.5"
                              : "inline-flex items-center gap-1.5 text-[12px] font-semibold flex-shrink-0 mt-0.5 hover:underline"
                          }
                          style={
                            isNext
                              ? { backgroundColor: "#C9A84C", color: "#0A0A0A" }
                              : { color: "#C9A84C" }
                          }
                        >
                          {step.cta}
                          <ArrowRight className="w-3 h-3" />
                        </Link>
                      ))}
                  </div>
                  {isExplainer && explainerOpen && (
                    <div
                      className="mt-2.5 ml-9 mr-1 rounded-lg border p-3.5 space-y-2"
                      style={{
                        borderColor: "rgba(255,255,255,0.08)",
                        backgroundColor: "#0D0D0D",
                      }}
                    >
                      <p className="text-[12px] leading-relaxed text-[#C0C0C0]">
                        <span className="font-semibold text-[#F0F0F0]">
                          Official practice exams
                        </span>{" "}
                        live on mba.com — six exist, made by GMAC with the real
                        adaptive engine and real scoring. Exams 1 and 2 are
                        free; 3-6 are paid. Your first attempt on each is your
                        calibrated score signal, so they&apos;re scarce: one per
                        week at most, logged on the Mock page.
                      </p>
                      <p className="text-[12px] leading-relaxed text-[#C0C0C0]">
                        <span className="font-semibold text-[#F0F0F0]">
                          In-platform mocks
                        </span>{" "}
                        run on our question bank — unlimited, great for pacing,
                        stamina, and weak-area reps between officials. Treat
                        their scores as training feedback, not predictions.
                      </p>
                      <p className="text-[12px] leading-relaxed text-[#888888]">
                        Rule of thumb: measure on officials, train on
                        in-platform mocks. Retaking an official can repeat
                        questions you&apos;ve seen and inflate the score.
                      </p>
                    </div>
                  )}
                </li>
              )
            })}
          </ol>
        </div>
      ))}
      <div className="h-4" aria-hidden />
    </section>
  )
}
