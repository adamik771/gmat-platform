"use client"

import { useState, useTransition } from "react"
import { useRouter } from "next/navigation"
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  Check,
  Clock,
  Loader2,
  Repeat,
  Sparkles,
  Target,
  TrendingUp,
} from "lucide-react"

const EYEBROW = "text-[10px] font-semibold uppercase tracking-[0.22em]"
const STEPS = ["target", "exam-date", "current-score", "weekly-hours", "weak-areas", "prep-history", "review"] as const
type StepId = (typeof STEPS)[number]

interface OnboardingState {
  targetScore: number
  examDate: string | null
  currentScore: number | null
  weeklyHours: number
  weakAreas: string[]
  prepHistory: string
}

const TARGET_SCORE_PRESETS = [605, 645, 685, 705, 725, 745, 765, 785]

const WEAK_AREA_OPTIONS = [
  // Quant
  { id: "Algebra", section: "Quant" },
  { id: "Number Properties", section: "Quant" },
  { id: "Word Problems", section: "Quant" },
  { id: "Combinatorics", section: "Quant" },
  { id: "Statistics", section: "Quant" },
  { id: "Rates and Work", section: "Quant" },
  // Verbal
  { id: "Critical Reasoning", section: "Verbal" },
  { id: "Reading Comprehension", section: "Verbal" },
  // DI
  { id: "Data Sufficiency", section: "DI" },
  { id: "Table Analysis", section: "DI" },
  { id: "Graphics Interpretation", section: "DI" },
  { id: "Multi-Source Reasoning", section: "DI" },
  { id: "Two-Part Analysis", section: "DI" },
  // Cross-cutting
  { id: "Pacing", section: "Cross-cutting" },
  { id: "Trap recognition", section: "Cross-cutting" },
] as const

const PREP_HISTORY_OPTIONS = [
  {
    id: "first-time",
    label: "First time prepping",
    description:
      "Brand new to GMAT prep. Your first official practice exam seeds the baseline, then we'll build a plan around it.",
  },
  {
    id: "in-progress",
    label: "Already in prep",
    description:
      "Some prep under your belt but no test yet. A fresh official practice exam shows the gaps prior prep didn't close.",
  },
  {
    id: "retake",
    label: "Preparing to retake",
    description:
      "You've taken the test before and have a real score. We can start from your current baseline.",
  },
]

export default function OnboardingClient({
  initial,
  firstName,
}: {
  initial: OnboardingState
  firstName: string | null
}) {
  const router = useRouter()
  const [stepIdx, setStepIdx] = useState(0)
  const [state, setState] = useState<OnboardingState>(initial)
  const [error, setError] = useState<string | null>(null)
  const [submitting, startSubmit] = useTransition()

  const step = STEPS[stepIdx]
  const isLastStep = stepIdx === STEPS.length - 1
  const isFirstStep = stepIdx === 0

  const goNext = () => {
    setError(null)
    if (stepIdx < STEPS.length - 1) setStepIdx(stepIdx + 1)
  }
  const goBack = () => {
    setError(null)
    if (stepIdx > 0) setStepIdx(stepIdx - 1)
  }

  const update = <K extends keyof OnboardingState>(
    key: K,
    value: OnboardingState[K]
  ) => setState((s) => ({ ...s, [key]: value }))

  const submit = () => {
    setError(null)
    startSubmit(async () => {
      const res = await fetch("/api/onboarding", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(state),
      })
      const data = (await res.json()) as { ok?: boolean; error?: string; nextHref?: string }
      if (!res.ok || !data.ok) {
        setError(data.error ?? "Something went wrong saving your answers.")
        return
      }
      router.push(data.nextHref ?? "/mock")
    })
  }

  return (
    <div className="relative min-h-[80vh]">
      <div
        className="absolute inset-x-0 top-0 h-[400px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 55% at 50% 0%, rgba(201,168,76,0.10) 0%, transparent 60%)",
        }}
        aria-hidden
      />
      <div className="relative max-w-2xl mx-auto py-2">
        {/* Stepper */}
        <div className="flex items-center gap-1 mb-10">
          {STEPS.map((_, i) => (
            <div
              key={i}
              className="h-1 flex-1 rounded-full transition-colors"
              style={{
                backgroundColor:
                  i <= stepIdx ? "#C9A84C" : "rgba(201,168,76,0.12)",
              }}
              aria-hidden
            />
          ))}
        </div>

        {/* Header */}
        <div className="mb-8">
          <p className={EYEBROW + " mb-2"} style={{ color: "#C9A84C" }}>
            {`Step ${stepIdx + 1} of ${STEPS.length}`}
          </p>
          <h1 className="font-display text-3xl md:text-4xl font-semibold tracking-[-0.02em] text-[#F0F0F0] leading-[1.1]">
            {stepHeading(step, firstName)}
          </h1>
          <p className="text-[14px] text-[#C0C0C0] mt-3 leading-relaxed">
            {stepDescription(step)}
          </p>
        </div>

        {/* Step body */}
        <div className="mb-8">
          {step === "target" && (
            <TargetScoreStep
              value={state.targetScore}
              onChange={(v) => update("targetScore", v)}
            />
          )}
          {step === "exam-date" && (
            <ExamDateStep
              value={state.examDate}
              onChange={(v) => update("examDate", v)}
            />
          )}
          {step === "current-score" && (
            <CurrentScoreStep
              value={state.currentScore}
              onChange={(v) => update("currentScore", v)}
            />
          )}
          {step === "weekly-hours" && (
            <WeeklyHoursStep
              value={state.weeklyHours}
              onChange={(v) => update("weeklyHours", v)}
            />
          )}
          {step === "weak-areas" && (
            <WeakAreasStep
              value={state.weakAreas}
              onChange={(v) => update("weakAreas", v)}
            />
          )}
          {step === "prep-history" && (
            <PrepHistoryStep
              value={state.prepHistory}
              onChange={(v) => update("prepHistory", v)}
            />
          )}
          {step === "review" && <ReviewStep state={state} />}
        </div>

        {/* Error banner */}
        {error && (
          <div
            className="mb-6 p-4 rounded-xl border text-[13px]"
            style={{
              borderColor: "rgba(255,68,68,0.3)",
              backgroundColor: "rgba(255,68,68,0.08)",
              color: "#FF8888",
            }}
          >
            {error}
          </div>
        )}

        {/* Footer nav */}
        <div className="flex items-center justify-between gap-4">
          <button
            type="button"
            onClick={goBack}
            disabled={isFirstStep || submitting}
            className="inline-flex items-center gap-2 text-[13px] text-[#888888] hover:text-[#F0F0F0] transition-colors disabled:opacity-30"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </button>
          {isLastStep ? (
            <button
              type="button"
              onClick={submit}
              disabled={submitting}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-[14px] font-semibold tracking-tight transition-all hover:scale-[1.02] disabled:opacity-60"
              style={{ backgroundColor: "#C9A84C", color: "#0A0A0A" }}
            >
              {submitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Saving…
                </>
              ) : (
                <>
                  Confirm and start
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          ) : (
            <button
              type="button"
              onClick={goNext}
              disabled={!isStepValid(step, state)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-[14px] font-semibold tracking-tight transition-all hover:scale-[1.02] disabled:opacity-40"
              style={{ backgroundColor: "#C9A84C", color: "#0A0A0A" }}
            >
              Next
              <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

// ============================================================
// Step content
// ============================================================

function stepHeading(step: StepId, firstName: string | null): string {
  switch (step) {
    case "target":
      return firstName ? `${firstName}, what's your target score?` : `What's your target score?`
    case "exam-date":
      return "When's your exam?"
    case "current-score":
      return "Have you taken the GMAT before?"
    case "weekly-hours":
      return "How many hours per week can you study?"
    case "weak-areas":
      return "Where do you think you're weakest?"
    case "prep-history":
      return "Where are you in your prep?"
    case "review":
      return "Ready to start"
  }
}

function stepDescription(step: StepId): string {
  switch (step) {
    case "target":
      return "Pick a realistic GMAT Focus score. We'll calibrate the plan to close the gap from your baseline to this number."
    case "exam-date":
      return "Even an approximate date helps the engine compress weeks of prep into the time you have."
    case "current-score":
      return "If you've taken the test or a recent mock, paste the score in. Skip if not."
    case "weekly-hours":
      return "Honest answer here. The plan only works if it fits your real schedule, not your aspirational one."
    case "weak-areas":
      return "What you say here only seeds the first week. Your baseline exam + ongoing data refine it from there."
    case "prep-history":
      return "Different starting points need different first weeks. The baseline exam anchors it either way."
    case "review":
      return "Confirm your answers — you can change them anytime in Settings."
  }
}

function isStepValid(step: StepId, state: OnboardingState): boolean {
  switch (step) {
    case "target":
      return state.targetScore >= 205 && state.targetScore <= 805
    case "exam-date":
      return true // null OK
    case "current-score":
      return true // null OK
    case "weekly-hours":
      return state.weeklyHours >= 1 && state.weeklyHours <= 40
    case "weak-areas":
      return true // empty OK
    case "prep-history":
      return ["first-time", "in-progress", "retake"].includes(state.prepHistory)
    case "review":
      return true
  }
}

// ============================================================
// Step subcomponents
// ============================================================

function TargetScoreStep({
  value,
  onChange,
}: {
  value: number
  onChange: (v: number) => void
}) {
  return (
    <div>
      <div className="flex items-center justify-center mb-6">
        <p
          className="font-display text-7xl font-semibold tracking-[-0.03em] leading-none"
          style={{ color: "#C9A84C" }}
        >
          {value}
        </p>
      </div>
      <input
        type="range"
        min={205}
        max={805}
        step={10}
        value={value}
        onChange={(e) => onChange(parseInt(e.target.value, 10))}
        className="w-full mb-5"
        aria-label="Target score"
      />
      <div className="flex flex-wrap gap-2 justify-center">
        {TARGET_SCORE_PRESETS.map((preset) => (
          <button
            key={preset}
            type="button"
            onClick={() => onChange(preset)}
            className="px-3 py-1.5 rounded-lg text-[12px] font-semibold tracking-tight transition-colors"
            style={{
              backgroundColor:
                value === preset ? "#C9A84C" : "rgba(201,168,76,0.12)",
              color: value === preset ? "#0A0A0A" : "#C9A84C",
            }}
          >
            {preset}
          </button>
        ))}
      </div>
    </div>
  )
}

function ExamDateStep({
  value,
  onChange,
}: {
  value: string | null
  onChange: (v: string | null) => void
}) {
  const today = new Date().toISOString().slice(0, 10)
  return (
    <div>
      <div
        className="flex items-center gap-3 p-4 rounded-xl border border-white/[0.08] bg-[#0D0D0D] mb-3"
        style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.03)" }}
      >
        <Calendar className="w-4 h-4 flex-shrink-0" style={{ color: "#C9A84C" }} />
        <input
          type="date"
          min={today}
          value={value ?? ""}
          onChange={(e) => onChange(e.target.value || null)}
          className="flex-1 bg-transparent text-[14px] text-[#F0F0F0] focus:outline-none"
        />
      </div>
      <button
        type="button"
        onClick={() => onChange(null)}
        className="text-[12px] text-[#888888] hover:text-[#C9A84C] transition-colors"
      >
        I haven&apos;t scheduled yet — skip for now
      </button>
    </div>
  )
}

function CurrentScoreStep({
  value,
  onChange,
}: {
  value: number | null
  onChange: (v: number | null) => void
}) {
  return (
    <div>
      <div className="flex items-center gap-2 mb-3 flex-wrap">
        <button
          type="button"
          onClick={() => onChange(null)}
          className="px-3 py-1.5 rounded-lg text-[12px] font-semibold tracking-tight transition-colors"
          style={{
            backgroundColor: value === null ? "#C9A84C" : "rgba(201,168,76,0.12)",
            color: value === null ? "#0A0A0A" : "#C9A84C",
          }}
        >
          No prior score
        </button>
        <button
          type="button"
          onClick={() => onChange(value ?? 605)}
          className="px-3 py-1.5 rounded-lg text-[12px] font-semibold tracking-tight transition-colors"
          style={{
            backgroundColor: value !== null ? "#C9A84C" : "rgba(201,168,76,0.12)",
            color: value !== null ? "#0A0A0A" : "#C9A84C",
          }}
        >
          I have a score
        </button>
      </div>
      {value !== null && (
        <div>
          <div className="flex items-center justify-center mb-4">
            <p
              className="font-display text-6xl font-semibold tracking-[-0.03em] leading-none"
              style={{ color: "#C9A84C" }}
            >
              {value}
            </p>
          </div>
          <input
            type="range"
            min={205}
            max={805}
            step={10}
            value={value}
            onChange={(e) => onChange(parseInt(e.target.value, 10))}
            className="w-full"
            aria-label="Current or recent score"
          />
        </div>
      )}
    </div>
  )
}

function WeeklyHoursStep({
  value,
  onChange,
}: {
  value: number
  onChange: (v: number) => void
}) {
  return (
    <div>
      <div className="flex items-center justify-center mb-4">
        <p
          className="font-display text-7xl font-semibold tracking-[-0.03em] leading-none"
          style={{ color: "#C9A84C" }}
        >
          {value}
          <span className="text-3xl ml-1 align-top text-[#888888]">hr/wk</span>
        </p>
      </div>
      <input
        type="range"
        min={1}
        max={30}
        step={1}
        value={value}
        onChange={(e) => onChange(parseInt(e.target.value, 10))}
        className="w-full"
        aria-label="Weekly study hours"
      />
      <div className="flex justify-between text-[11px] text-[#555555] mt-2 uppercase tracking-[0.16em] font-medium">
        <span>1 hr</span>
        <span>15 hr</span>
        <span>30 hr</span>
      </div>
    </div>
  )
}

function WeakAreasStep({
  value,
  onChange,
}: {
  value: string[]
  onChange: (v: string[]) => void
}) {
  const toggle = (id: string) => {
    onChange(value.includes(id) ? value.filter((x) => x !== id) : [...value, id])
  }
  const grouped = WEAK_AREA_OPTIONS.reduce<Record<string, typeof WEAK_AREA_OPTIONS[number][]>>(
    (acc, opt) => {
      acc[opt.section] = acc[opt.section] ?? []
      acc[opt.section].push(opt)
      return acc
    },
    {}
  )
  const sectionOrder = ["Quant", "Verbal", "DI", "Cross-cutting"]
  return (
    <div className="space-y-5">
      {sectionOrder.map((sec) => {
        const opts = grouped[sec]
        if (!opts || opts.length === 0) return null
        return (
          <div key={sec}>
            <p className={EYEBROW + " mb-3"} style={{ color: "#C9A84C" }}>
              {sec}
            </p>
            <div className="flex flex-wrap gap-2">
              {opts.map((o) => {
                const active = value.includes(o.id)
                return (
                  <button
                    key={o.id}
                    type="button"
                    onClick={() => toggle(o.id)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[12px] font-semibold tracking-tight transition-colors"
                    style={{
                      backgroundColor: active ? "#C9A84C" : "rgba(201,168,76,0.10)",
                      color: active ? "#0A0A0A" : "#C9A84C",
                    }}
                  >
                    {active && <Check className="w-3 h-3" />}
                    {o.id}
                  </button>
                )
              })}
            </div>
          </div>
        )
      })}
      <p className="text-[11px] text-[#555555] italic">
        Pick anywhere from 0 to 8. Empty is fine — practice data surfaces the real weak spots.
      </p>
    </div>
  )
}

function PrepHistoryStep({
  value,
  onChange,
}: {
  value: string
  onChange: (v: string) => void
}) {
  return (
    <div className="space-y-3">
      {PREP_HISTORY_OPTIONS.map((opt) => {
        const active = value === opt.id
        return (
          <button
            key={opt.id}
            type="button"
            onClick={() => onChange(opt.id)}
            className="w-full text-left p-5 rounded-2xl border transition-all"
            style={{
              borderColor: active ? "#C9A84C" : "rgba(255,255,255,0.08)",
              backgroundColor: active ? "rgba(201,168,76,0.06)" : "#0D0D0D",
              boxShadow: "inset 0 1px 0 rgba(255,255,255,0.03)",
            }}
          >
            <div className="flex items-start gap-3">
              <div
                className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                style={{
                  borderWidth: 2,
                  borderStyle: "solid",
                  borderColor: active ? "#C9A84C" : "rgba(255,255,255,0.2)",
                }}
              >
                {active && (
                  <span
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ backgroundColor: "#C9A84C" }}
                  />
                )}
              </div>
              <div className="flex-1">
                <p
                  className="text-[15px] font-semibold tracking-tight mb-1"
                  style={{ color: active ? "#F0F0F0" : "#C0C0C0" }}
                >
                  {opt.label}
                </p>
                <p className="text-[12px] text-[#888888] leading-relaxed">
                  {opt.description}
                </p>
              </div>
            </div>
          </button>
        )
      })}
    </div>
  )
}

function ReviewStep({ state }: { state: OnboardingState }) {
  const rows: Array<{ icon: typeof Target; label: string; value: string }> = [
    { icon: Target, label: "Target score", value: String(state.targetScore) },
    {
      icon: Calendar,
      label: "Exam date",
      value: state.examDate ?? "Undecided",
    },
    {
      icon: TrendingUp,
      label: "Current score",
      value: state.currentScore !== null ? String(state.currentScore) : "No prior score",
    },
    {
      icon: Clock,
      label: "Weekly hours",
      value: `${state.weeklyHours} hr/wk`,
    },
    {
      icon: Sparkles,
      label: "Weak areas",
      value:
        state.weakAreas.length > 0
          ? state.weakAreas.slice(0, 4).join(", ") +
            (state.weakAreas.length > 4 ? `, +${state.weakAreas.length - 4} more` : "")
          : "Will discover via baseline exam",
    },
    {
      icon: Repeat,
      label: "Prep stage",
      value:
        PREP_HISTORY_OPTIONS.find((o) => o.id === state.prepHistory)?.label ?? state.prepHistory,
    },
  ]
  const next =
    state.prepHistory === "retake"
      ? "Open your adaptive plan."
      : "Take an official mba.com practice exam to set your baseline."
  return (
    <div>
      <div
        className="p-5 rounded-2xl border border-white/[0.08] bg-[#0D0D0D] space-y-3"
        style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.03)" }}
      >
        {rows.map((r) => {
          const Icon = r.icon
          return (
            <div key={r.label} className="flex items-start gap-3">
              <Icon className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: "#C9A84C" }} />
              <div className="flex-1 flex items-baseline justify-between gap-3 min-w-0">
                <p className="text-[12px] uppercase tracking-[0.18em] text-[#888888] font-medium">
                  {r.label}
                </p>
                <p className="text-[14px] text-[#F0F0F0] tracking-tight font-semibold text-right truncate">
                  {r.value}
                </p>
              </div>
            </div>
          )
        })}
      </div>
      <div
        className="mt-4 p-4 rounded-xl border"
        style={{
          borderColor: "rgba(201,168,76,0.22)",
          backgroundColor: "rgba(201,168,76,0.04)",
        }}
      >
        <p className={EYEBROW + " mb-1.5"} style={{ color: "#C9A84C" }}>
          Next up
        </p>
        <p className="text-[14px] text-[#F0F0F0] tracking-tight">{next}</p>
      </div>
    </div>
  )
}
