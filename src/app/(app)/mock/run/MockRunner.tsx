"use client"

import { memo, useCallback, useEffect, useRef, useState } from "react"
import { useRouter } from "next/navigation"
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Clock,
  Flag,
  FlaskConical,
  Pause,
  Pencil,
  Play,
} from "lucide-react"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import rehypeCaretSup from "@/lib/rehype-caret-sup"
import PacingBadge from "@/components/shared/PacingBadge"
import QuestionChart from "@/components/shared/QuestionChart"
import type { ChartSpec } from "@/lib/chart-spec"
import {
  digitKeyToOptionIndex,
  shouldIgnoreKeyboardShortcut,
} from "@/lib/keyboard"
import {
  checkpointStatusForQuestion,
  sectionPaceStatus,
  type CheckpointStatus,
} from "@/lib/pacing"
import type { Section } from "@/types"

export interface MockQuestion {
  id: string
  section: Section
  topic: string
  subtopic: string
  difficulty: "Beginner" | "Intermediate" | "Advanced"
  type: string
  prompt: string
  context?: string
  options: string[]
  correctAnswer: number
  correctAnswerLetter: string
  explanation: string
  twoPartColumns?: string[]
  twoPartCorrectAnswers?: number[]
  /** Graphics Interpretation: structured chart rendered by QuestionChart. */
  chartSpec?: ChartSpec
}

export interface MockSectionQuestions {
  section: Section
  minutes: number
  questions: MockQuestion[]
}

interface MockRunnerProps {
  dateIso: string
  sections: MockSectionQuestions[]
  /** Display label for the mode taken — persisted as `topic` on
   *  `practice_sessions` so the report can show which variant was run. */
  modeLabel: string
}

interface QuestionState {
  selected: number | null
  twoPartSelections?: (number | null)[]
  submitted: boolean
  elapsedMs: number
  /** Student flagged this question during the mock — GMAT test-day
   * habit: mark items you want to think about again during post-exam
   * review. Flag count surfaces on the mock report. */
  flagged: boolean
  /** Snapshot of `selected` at the moment of the first review-phase
   * edit. Lets the mock report compute whether each edit helped or
   * hurt (was the pre-edit answer already correct? etc.). Stays null
   * until a review edit actually happens. */
  preEditSelected?: number | null
  /** Set to true once we've captured a preEditSelected snapshot for
   * this question, so subsequent edits don't overwrite the original
   * pre-review value. */
  preEditSnapshotTaken?: boolean
  /** Ms from question display to first interaction (option click, 2PA
   *  cell click, or flag toggle). Same telemetry field SessionClient
   *  writes — lets analytics tell "read fast, commit fast" from "read
   *  slow, commit fast" even when total elapsed is identical. */
  firstInteractionMs?: number | null
}

type Phase = "intro" | "running" | "review" | "break" | "posting" | "done"

const BREAK_SECONDS = 10 * 60
const REVIEW_SECONDS = 3 * 60
const MAX_REVIEW_EDITS = 3

// Memoized markdown. The mock header runs a 1-second countdown that re-renders
// MockRunner every tick; without memoization the question prompt + passage
// re-parse through ReactMarkdown each second. The text prop is a string, so a
// shallow compare keeps parsing tied to the actual question changing.
const MockMarkdown = memo(function MockMarkdown({ text }: { text: string }) {
  return (
    <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeCaretSup]}>
      {text}
    </ReactMarkdown>
  )
})

/** Coarse device-class detection for telemetry — mirrors the helper in
 *  SessionClient. Tailwind-ish breakpoints (<640 / 640-1024 / ≥1024). */
function detectMockDeviceType(): "desktop" | "tablet" | "mobile" {
  if (typeof window === "undefined") return "desktop"
  const w = window.innerWidth
  if (w < 640) return "mobile"
  if (w < 1024) return "tablet"
  return "desktop"
}

function formatClock(totalMs: number): string {
  const safe = Math.max(0, Math.floor(totalMs / 1000))
  const mm = Math.floor(safe / 60)
    .toString()
    .padStart(2, "0")
  const ss = (safe % 60).toString().padStart(2, "0")
  return `${mm}:${ss}`
}

function questionIsCorrect(q: MockQuestion, s: QuestionState): boolean {
  if (q.twoPartColumns && q.twoPartCorrectAnswers) {
    if (!s.twoPartSelections) return false
    return q.twoPartCorrectAnswers.every((ans, i) => s.twoPartSelections?.[i] === ans)
  }
  return s.selected !== null && s.selected === q.correctAnswer
}

function canSubmit(q: MockQuestion, s: QuestionState): boolean {
  if (s.submitted) return false
  if (q.twoPartColumns) {
    if (!s.twoPartSelections) return false
    return s.twoPartSelections.every((v) => v !== null)
  }
  return s.selected !== null
}

export default function MockRunner({ dateIso, sections, modeLabel }: MockRunnerProps) {
  const router = useRouter()

  // The user picks the section order up front. Default = the order we
  // received (Quant → Verbal → DI) but they can rearrange.
  const [sectionOrder, setSectionOrder] = useState<Section[]>(() =>
    sections.map((s) => s.section)
  )
  const [phase, setPhase] = useState<Phase>("intro")
  const [sectionIdx, setSectionIdx] = useState(0)
  const [questionIdx, setQuestionIdx] = useState(0)

  // Per-section question state — keyed by section name for stable access
  // as the student cycles through.
  const [statesBySection, setStatesBySection] = useState<
    Record<Section, QuestionState[]>
  >(() => {
    const out: Partial<Record<Section, QuestionState[]>> = {}
    for (const s of sections) {
      out[s.section] = s.questions.map((q) => ({
        selected: null,
        twoPartSelections: q.twoPartColumns
          ? q.twoPartColumns.map(() => null)
          : undefined,
        submitted: false,
        elapsedMs: 0,
        flagged: false,
      }))
    }
    return out as Record<Section, QuestionState[]>
  })

  // Timer anchors: when the current section started, plus a ticking `now`
  // that refreshes every second so the countdown feels live.
  const [sectionStartMs, setSectionStartMs] = useState<number | null>(null)
  const [questionStartMs, setQuestionStartMs] = useState<number | null>(null)
  const [now, setNow] = useState(() => Date.now())

  // Break countdown start.
  const [breakStartMs, setBreakStartMs] = useState<number | null>(null)

  // Sections whose save POST failed (network error, server 5xx, or 401).
  // Surfaces the issue on the done screen so the user can retry rather
  // than landing on /mock/report with missing data.
  const [saveErrors, setSaveErrors] = useState<
    { section: Section; reason: "error" | "unauthorized" }[]
  >([])
  const [retrying, setRetrying] = useState<Section | null>(null)

  // Review-phase state: a fixed 3-minute window after each section where
  // the student can revisit questions, toggle flags, and change up to 3
  // answers (GMAT Focus mirrors this). Tracks which question indices have
  // already consumed one of the 3 allowed edits — re-editing the same
  // question doesn't burn additional edits.
  const [reviewStartMs, setReviewStartMs] = useState<number | null>(null)
  const [reviewQuestionIdx, setReviewQuestionIdx] = useState<number | null>(null)
  const [reviewEditsBySection, setReviewEditsBySection] = useState<
    Record<Section, number[]>
  >(() => {
    const out: Partial<Record<Section, number[]>> = {}
    for (const s of sections) out[s.section] = []
    return out as Record<Section, number[]>
  })

  const activeSection: Section | null =
    phase === "running" || phase === "review"
      ? sectionOrder[sectionIdx]
      : null
  const activeSectionConfig = activeSection
    ? sections.find((s) => s.section === activeSection) ?? null
    : null

  useEffect(() => {
    if (phase !== "running" && phase !== "break" && phase !== "review") return
    const id = window.setInterval(() => setNow(Date.now()), 1000)
    return () => window.clearInterval(id)
  }, [phase])

  // Timer hit zero mid-section — send the student to the review screen,
  // which kicks off its own 3-min countdown. Real GMAT gives the review
  // window even if you ran out of time on the section itself.
  const enterReview = useCallback(() => {
    setReviewQuestionIdx(null)
    setReviewStartMs(Date.now())
    setPhase("review")
  }, [])

  useEffect(() => {
    if (phase !== "running" || !sectionStartMs || !activeSectionConfig) return
    const elapsed = now - sectionStartMs
    const limit = activeSectionConfig.minutes * 60_000
    if (elapsed >= limit) enterReview()
  }, [now, phase, sectionStartMs, activeSectionConfig, enterReview])

  // Review timer auto-finalises when the 3-min countdown runs out.
  useEffect(() => {
    if (phase !== "review" || !reviewStartMs) return
    const elapsed = now - reviewStartMs
    if (elapsed >= REVIEW_SECONDS * 1000) {
      finalizeSectionFromReview()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [now, phase, reviewStartMs])

  // Redirect to the report once the last section is done — but only
  // if every section saved cleanly. If any save failed we hold the user
  // here so they can retry; otherwise the report would render against
  // missing data.
  useEffect(() => {
    if (phase === "done" && saveErrors.length === 0) {
      router.push("/mock/report")
    }
  }, [phase, router, saveErrors])

  // Keyboard shortcuts for the running phase only. Review + break use
  // click-based navigation (review grid is too dense for key mapping,
  // break is a single Continue button). 1-5 selects A-E, Space submits
  // or advances, F toggles flag, N advances.
  useEffect(() => {
    if (phase !== "running") return
    function onKey(event: KeyboardEvent) {
      if (shouldIgnoreKeyboardShortcut(event)) return
      if (!activeSection || !activeSectionConfig) return
      const q = activeSectionConfig.questions[questionIdx]
      const s = statesBySection[activeSection][questionIdx]
      if (!q || !s) return
      if (!q.twoPartColumns) {
        const idx = digitKeyToOptionIndex(event.key, q.options.length)
        if (idx !== null) {
          event.preventDefault()
          handleSelect(idx)
          return
        }
      }
      if (event.key === "f" || event.key === "F") {
        event.preventDefault()
        handleToggleFlag()
        return
      }
      if (event.key === " " || event.key === "Enter") {
        if (!s.submitted && canSubmit(q, s)) {
          event.preventDefault()
          handleSubmitAnswer()
          return
        }
        if (s.submitted) {
          event.preventDefault()
          void handleNextQuestion()
          return
        }
      }
      if (
        (event.key === "n" || event.key === "N" || event.key === "ArrowRight") &&
        s.submitted
      ) {
        event.preventDefault()
        void handleNextQuestion()
      }
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase, activeSection, questionIdx, statesBySection])

  // Per-section in-flight guard. A single boolean (the old approach) dropped a
  // concurrent save for a DIFFERENT section at a section boundary — e.g. the
  // 3-min review auto-timeout firing while the prior section's POST is still in
  // flight. Keyed by section: a repeat call for the SAME section dedupes onto
  // the in-flight promise; a different section is never blocked.
  const inFlightRef = useRef<Map<Section, Promise<void>>>(new Map())
  // Per-section measured duration, snapshotted at finalize time so a later
  // retry (on the done screen) records the section's real elapsed time rather
  // than `Date.now() - sectionStartMs`, which by then points at a later
  // section's clock.
  const sectionDurationsRef = useRef<Map<Section, number>>(new Map())

  async function persistSection(section: Section): Promise<void> {
    const existing = inFlightRef.current.get(section)
    if (existing) {
      await existing
      return
    }
    const run = persistSectionInner(section)
    inFlightRef.current.set(section, run)
    try {
      await run
    } finally {
      inFlightRef.current.delete(section)
    }
  }

  async function persistSectionInner(section: Section): Promise<void> {
    const cfg = sections.find((s) => s.section === section)
    if (!cfg) return
    const states = statesBySection[section]
    const deviceType = detectMockDeviceType()
    const attempts = cfg.questions.map((q, i) => ({
      questionId: q.id,
      section: q.section,
      topic: q.topic,
      subtopic: q.subtopic,
      difficulty: q.difficulty,
      questionType: q.type,
      selectedAnswer: states[i].selected,
      isCorrect: questionIsCorrect(q, states[i]),
      timeSpentMs: states[i].elapsedMs,
      firstInteractionMs: states[i].firstInteractionMs ?? null,
      deviceType,
    }))
    // Answered = any question with a selection, even if the student
    // never clicked Submit (e.g., flagged for review then time expired).
    // Accuracy is of ATTEMPTED, not of total, to match how real GMAT scoring
    // weighs the attempted portion.
    const answeredTotal = cfg.questions.reduce(
      (acc, _q, i) =>
        states[i].selected !== null ||
        (states[i].twoPartSelections?.some((v) => v !== null) ?? false)
          ? acc + 1
          : acc,
      0
    )
    const correctTotal = cfg.questions.reduce(
      (acc, q, i) => (questionIsCorrect(q, states[i]) ? acc + 1 : acc),
      0
    )
    const flaggedQuestionIds = cfg.questions
      .map((q, i) => (states[i].flagged ? q.id : null))
      .filter((v): v is string => v !== null)
    // Review-phase edits — one entry per question the student actually
    // changed. Pre-edit is the snapshot we took at the first edit;
    // post-edit is the final `selected`. Skipped if they never edited.
    const reviewEditEntries = cfg.questions
      .map((q, i) => {
        const s = states[i]
        if (!s.preEditSnapshotTaken) return null
        return {
          questionId: q.id,
          preEditAnswer: s.preEditSelected ?? null,
          postEditAnswer: s.selected,
        }
      })
      .filter(
        (v): v is { questionId: string; preEditAnswer: number | null; postEditAnswer: number | null } =>
          v !== null
      )
    try {
      const sessionRes = await fetch("/api/practice-sessions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          slug: `mock-${dateIso.slice(0, 10)}-${section.toLowerCase()}`,
          topic: modeLabel,
          section,
          totalQuestions: cfg.questions.length,
          correctCount: correctTotal,
          accuracy:
            answeredTotal === 0 ? 0 : Math.round((correctTotal / answeredTotal) * 100),
          totalTimeMs:
            sectionDurationsRef.current.get(section) ??
            (sectionStartMs ? Date.now() - sectionStartMs : 0),
          attempts,
        }),
      })
      if (!sessionRes.ok) {
        recordSaveError(section, sessionRes.status === 401 ? "unauthorized" : "error")
        return
      }
      // Flags are saved to user_metadata via a separate endpoint so they
      // survive a retake and can be read by the report + review-queue.
      // Always POST (even if empty) so a re-attempt that clears flags
      // replaces the stored list cleanly.
      await fetch("/api/mock-flags", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          dateIso: dateIso.slice(0, 10),
          section,
          flaggedQuestionIds,
        }),
      })
      // Review-edit outcomes — persist the pre/post snapshot per edited
      // question so the mock report can compute helped/hurt.
      await fetch("/api/mock-review-edits", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          dateIso: dateIso.slice(0, 10),
          section,
          edits: reviewEditEntries,
        }),
      })
      clearSaveError(section)
    } catch {
      recordSaveError(section, "error")
    }
  }

  function recordSaveError(section: Section, reason: "error" | "unauthorized") {
    setSaveErrors((prev) => {
      const filtered = prev.filter((e) => e.section !== section)
      return [...filtered, { section, reason }]
    })
  }

  function clearSaveError(section: Section) {
    setSaveErrors((prev) => prev.filter((e) => e.section !== section))
  }

  async function retrySave(section: Section) {
    setRetrying(section)
    await persistSection(section)
    setRetrying(null)
  }

  // Moves from review → break (or done if last section). Called both by
  // the "Submit section" button and the 3-min auto-timeout. Guards
  // against double-invocation via the per-section in-flight guard in
  // persistSection.
  async function finalizeSectionFromReview() {
    const section = sectionOrder[sectionIdx]
    // Snapshot the section's elapsed time NOW (before advancing) so a later
    // retry on the done screen records the right duration (#8) rather than a
    // subsequent section's clock.
    sectionDurationsRef.current.set(
      section,
      sectionStartMs ? Date.now() - sectionStartMs : 0
    )
    await persistSection(section)
    const nextIdx = sectionIdx + 1
    if (nextIdx >= sectionOrder.length) {
      setPhase("done")
    } else {
      setPhase("break")
      setBreakStartMs(Date.now())
    }
  }

  function startMock() {
    setSectionIdx(0)
    setQuestionIdx(0)
    setPhase("running")
    const t = Date.now()
    setSectionStartMs(t)
    setQuestionStartMs(t)
  }

  function moveSectionUp(section: Section) {
    setSectionOrder((order) => {
      const i = order.indexOf(section)
      if (i <= 0) return order
      const next = order.slice()
      ;[next[i - 1], next[i]] = [next[i], next[i - 1]]
      return next
    })
  }

  // During review, we target `reviewQuestionIdx` instead of `questionIdx`.
  // Flags can always be toggled; answer changes consume one of the 3 allowed
  // edits (same question edited multiple times = still 1 edit).
  const activeQuestionIdx =
    phase === "review" && reviewQuestionIdx !== null
      ? reviewQuestionIdx
      : questionIdx

  function editsUsedForActiveSection(): number {
    if (!activeSection) return 0
    return reviewEditsBySection[activeSection]?.length ?? 0
  }

  function markReviewEdit(idx: number) {
    if (!activeSection) return
    setReviewEditsBySection((prev) => {
      const existing = prev[activeSection] ?? []
      if (existing.includes(idx)) return prev
      return { ...prev, [activeSection]: [...existing, idx] }
    })
  }

  function handleSelect(optionIdx: number) {
    if (!activeSection) return
    const targetIdx = activeQuestionIdx
    if (phase === "review") {
      const used = editsUsedForActiveSection()
      const alreadyEdited =
        reviewEditsBySection[activeSection]?.includes(targetIdx) ?? false
      if (!alreadyEdited && used >= MAX_REVIEW_EDITS) return
      // Only count a review edit when the answer actually changes — re-clicking
      // the already-selected option must not burn the scarce edit budget.
      const changed =
        statesBySection[activeSection]?.[targetIdx]?.selected !== optionIdx
      setStatesBySection((prev) => {
        const states = prev[activeSection].slice()
        const curr = states[targetIdx]
        if (curr.selected === optionIdx) return prev
        // Snapshot pre-edit answer on the first edit to this question
        // so the report can compare pre vs post vs correct.
        const preEditPatch = curr.preEditSnapshotTaken
          ? {}
          : { preEditSelected: curr.selected, preEditSnapshotTaken: true }
        states[targetIdx] = {
          ...curr,
          ...preEditPatch,
          selected: optionIdx,
        }
        return { ...prev, [activeSection]: states }
      })
      if (changed) markReviewEdit(targetIdx)
      return
    }
    setStatesBySection((prev) => {
      const section = activeSection
      const states = prev[section].slice()
      if (states[targetIdx].submitted) return prev
      const curr = states[targetIdx]
      const firstInteractionPatch =
        curr.firstInteractionMs == null && questionStartMs
          ? { firstInteractionMs: Date.now() - questionStartMs }
          : {}
      states[targetIdx] = { ...curr, ...firstInteractionPatch, selected: optionIdx }
      return { ...prev, [section]: states }
    })
  }

  function handleTwoPartSelect(colIdx: number, rowIdx: number) {
    if (!activeSection) return
    const targetIdx = activeQuestionIdx
    if (phase === "review") {
      const used = editsUsedForActiveSection()
      const alreadyEdited =
        reviewEditsBySection[activeSection]?.includes(targetIdx) ?? false
      if (!alreadyEdited && used >= MAX_REVIEW_EDITS) return
      // Only count a review edit when a column's selection actually changes.
      const changed =
        (statesBySection[activeSection]?.[targetIdx]?.twoPartSelections ?? [])[
          colIdx
        ] !== rowIdx
      setStatesBySection((prev) => {
        const states = prev[activeSection].slice()
        const current = states[targetIdx]
        const selections = (current.twoPartSelections ?? []).slice()
        if (selections[colIdx] === rowIdx) return prev
        selections[colIdx] = rowIdx
        // Two-Part review edits are tracked but the pre/post comparison
        // is coarser (we track `selected` which is -1 for TPA anyway, so
        // the snapshot is mostly a no-op). Still record that review
        // touched this question so the helped/hurt summary can
        // optionally note "1 two-part answer changed" alongside MCQ edits.
        const preEditPatch = current.preEditSnapshotTaken
          ? {}
          : { preEditSelected: current.selected, preEditSnapshotTaken: true }
        states[targetIdx] = {
          ...current,
          ...preEditPatch,
          twoPartSelections: selections,
        }
        return { ...prev, [activeSection]: states }
      })
      if (changed) markReviewEdit(targetIdx)
      return
    }
    setStatesBySection((prev) => {
      const section = activeSection
      const states = prev[section].slice()
      const current = states[targetIdx]
      if (current.submitted) return prev
      const selections = (current.twoPartSelections ?? []).slice()
      selections[colIdx] = rowIdx
      const firstInteractionPatch =
        current.firstInteractionMs == null && questionStartMs
          ? { firstInteractionMs: Date.now() - questionStartMs }
          : {}
      states[targetIdx] = { ...current, ...firstInteractionPatch, twoPartSelections: selections }
      return { ...prev, [section]: states }
    })
  }

  function handleSubmitAnswer() {
    if (!activeSection || !activeSectionConfig) return
    const q = activeSectionConfig.questions[questionIdx]
    const state = statesBySection[activeSection][questionIdx]
    if (!canSubmit(q, state)) return
    const elapsed = questionStartMs ? Date.now() - questionStartMs : 0
    setStatesBySection((prev) => {
      const states = prev[activeSection].slice()
      states[questionIdx] = { ...states[questionIdx], submitted: true, elapsedMs: elapsed }
      return { ...prev, [activeSection]: states }
    })
  }

  function handleToggleFlag() {
    if (!activeSection) return
    const targetIdx = activeQuestionIdx
    setStatesBySection((prev) => {
      const states = prev[activeSection].slice()
      states[targetIdx] = {
        ...states[targetIdx],
        flagged: !states[targetIdx].flagged,
      }
      return { ...prev, [activeSection]: states }
    })
  }

  async function handleNextQuestion() {
    if (!activeSection || !activeSectionConfig) return
    const lastIdx = activeSectionConfig.questions.length - 1
    if (questionIdx < lastIdx) {
      setQuestionIdx((q) => q + 1)
      setQuestionStartMs(Date.now())
      return
    }
    // Last question answered — enter the 3-minute review window before
    // persisting and breaking. Review phase gives the student time to
    // reconsider flagged items and change up to 3 answers.
    enterReview()
  }

  function endBreak() {
    setPhase("running")
    setSectionIdx((i) => i + 1)
    setQuestionIdx(0)
    const t = Date.now()
    setSectionStartMs(t)
    setQuestionStartMs(t)
  }

  // ---------- Render ----------

  if (phase === "intro") {
    return <IntroCard sectionOrder={sectionOrder} onUp={moveSectionUp} onStart={startMock} />
  }

  if (phase === "break") {
    const elapsed = breakStartMs ? now - breakStartMs : 0
    const remaining = Math.max(0, BREAK_SECONDS * 1000 - elapsed)
    const completedSection = sectionOrder[sectionIdx]
    const nextSection = sectionOrder[sectionIdx + 1]
    return (
      <BreakCard
        completedSection={completedSection}
        nextSection={nextSection}
        remainingMs={remaining}
        onContinue={endBreak}
      />
    )
  }

  if (phase === "done" || phase === "posting") {
    if (saveErrors.length > 0) {
      const hasUnauthorized = saveErrors.some((e) => e.reason === "unauthorized")
      return (
        <div className="max-w-2xl mx-auto p-6 rounded-xl border space-y-4"
          style={{
            borderColor: "rgba(255,68,68,0.25)",
            backgroundColor: "rgba(255,68,68,0.04)",
          }}
        >
          <h1 className="text-lg font-semibold text-[#F0F0F0]">
            We couldn&apos;t save part of your mock
          </h1>
          <p className="text-sm text-[#C0C0C0] leading-relaxed">
            {hasUnauthorized
              ? "Your sign-in expired during the mock. Sign back in, then retry the failed sections — your answers are still in this tab."
              : "One or more sections failed to save. Retry below before leaving — your answers are still in this tab."}
          </p>
          <ul className="space-y-2">
            {saveErrors.map((err) => (
              <li
                key={err.section}
                className="flex items-center justify-between gap-3 p-3 rounded-md border border-white/[0.08] bg-[#0D0D0D]"
              >
                <div className="text-sm text-[#F0F0F0]">
                  {err.section}
                  <span className="text-xs text-[#888888] ml-2">
                    ({err.reason === "unauthorized" ? "sign-in expired" : "save failed"})
                  </span>
                </div>
                {err.reason === "unauthorized" ? (
                  <a
                    href="/login"
                    className="px-3 py-1.5 rounded-md text-xs font-medium"
                    style={{
                      backgroundColor: "rgba(201,168,76,0.12)",
                      color: "#C9A84C",
                      border: "1px solid rgba(201,168,76,0.3)",
                    }}
                  >
                    Sign in
                  </a>
                ) : (
                  <button
                    type="button"
                    onClick={() => retrySave(err.section)}
                    disabled={retrying === err.section}
                    className="px-3 py-1.5 rounded-md text-xs font-medium disabled:opacity-50"
                    style={{
                      backgroundColor: "rgba(201,168,76,0.12)",
                      color: "#C9A84C",
                      border: "1px solid rgba(201,168,76,0.3)",
                    }}
                  >
                    {retrying === err.section ? "Retrying…" : "Retry save"}
                  </button>
                )}
              </li>
            ))}
          </ul>
        </div>
      )
    }
    return (
      <div className="max-w-2xl mx-auto p-6 rounded-xl border border-white/[0.08] bg-[#111111] text-center">
        <h1 className="text-lg font-semibold text-[#F0F0F0] mb-2">
          Generating your report…
        </h1>
        <p className="text-sm text-[#888888]">Hold on a second.</p>
      </div>
    )
  }

  if (!activeSection || !activeSectionConfig) return null

  // Review-phase grid: every question in the section, with the student's
  // current selection + flag status. Click to open any question in edit
  // mode (same running layout, different CTAs).
  if (phase === "review" && reviewQuestionIdx === null) {
    const reviewRemainingMs = reviewStartMs
      ? Math.max(0, REVIEW_SECONDS * 1000 - (now - reviewStartMs))
      : REVIEW_SECONDS * 1000
    return (
      <SectionReviewGrid
        section={activeSection}
        sectionIdx={sectionIdx}
        totalSections={sectionOrder.length}
        questions={activeSectionConfig.questions}
        states={statesBySection[activeSection]}
        reviewEdits={reviewEditsBySection[activeSection] ?? []}
        remainingMs={reviewRemainingMs}
        onOpenQuestion={(idx) => setReviewQuestionIdx(idx)}
        onSubmit={finalizeSectionFromReview}
      />
    )
  }

  const activeIdx = phase === "review" ? reviewQuestionIdx ?? 0 : questionIdx
  const question = activeSectionConfig.questions[activeIdx]
  const state = statesBySection[activeSection][activeIdx]

  // Timer differs by phase: 45-min for the section, 3-min for review.
  const headerRemainingMs =
    phase === "review"
      ? reviewStartMs
        ? Math.max(0, REVIEW_SECONDS * 1000 - (now - reviewStartMs))
        : REVIEW_SECONDS * 1000
      : sectionStartMs
      ? Math.max(0, activeSectionConfig.minutes * 60_000 - (now - sectionStartMs))
      : activeSectionConfig.minutes * 60_000

  const editsUsed = editsUsedForActiveSection()
  const thisEdited =
    reviewEditsBySection[activeSection]?.includes(activeIdx) ?? false
  const canEditInReview = editsUsed < MAX_REVIEW_EDITS || thisEdited

  // In review, options stay clickable iff within the edit cap (or this
  // question is already one of the 3 edited ones). In running, they lock
  // after submission.
  const optionsDisabled =
    phase === "review" ? !canEditInReview : state.submitted

  // Live elapsed on the current question for pacing feedback. While
  // running + not submitted, we tick against `questionStartMs`. After
  // submit it freezes at `state.elapsedMs` so the student sees the time
  // they actually committed on. Pacing is hidden during review (the
  // 3-min review clock is the signal there).
  const questionElapsedMs =
    phase === "running"
      ? state.submitted
        ? state.elapsedMs
        : questionStartMs
        ? Math.max(0, now - questionStartMs)
        : 0
      : 0

  // Cumulative pace: how far ahead/behind the student is against the
  // linear-budget line for this section. Only meaningful in running
  // phase; questions completed = `questionIdx` (they've advanced past
  // that many) plus one if the current question has already been
  // submitted (they're done with it and about to click Next).
  const sectionElapsedMs =
    sectionStartMs && phase === "running"
      ? Math.max(0, now - sectionStartMs)
      : 0
  const completedInSection =
    phase === "running"
      ? questionIdx + (state.submitted ? 1 : 0)
      : 0
  const paceSummary =
    phase === "running" && sectionElapsedMs > 60_000
      ? sectionPaceStatus(
          sectionElapsedMs,
          completedInSection,
          activeSectionConfig.questions.length,
          activeSectionConfig.minutes
        )
      : null

  // Checkpoint banner: shows on the question immediately after a
  // checkpoint (Q8 in Quant, for instance, shows the Q7 snapshot).
  // Uses elapsed-at-question-arrival so the reading reflects "where you
  // were when Q<checkpoint> was done," not the live-updating section
  // elapsed which would include time spent reading the current question.
  const elapsedAtCheckpointMs =
    sectionStartMs && questionStartMs
      ? Math.max(0, questionStartMs - sectionStartMs)
      : 0
  const checkpoint: CheckpointStatus | null =
    phase === "running"
      ? checkpointStatusForQuestion(
          questionIdx,
          activeSectionConfig.questions.length,
          activeSectionConfig.minutes,
          activeSection,
          elapsedAtCheckpointMs,
        )
      : null

  return (
    <div className="max-w-3xl mx-auto space-y-4">
      <SectionHeader
        section={activeSection}
        sectionIdx={sectionIdx}
        totalSections={sectionOrder.length}
        questionIdx={activeIdx}
        totalQuestions={activeSectionConfig.questions.length}
        remainingMs={headerRemainingMs}
        flaggedCount={statesBySection[activeSection].filter((s) => s.flagged).length}
        phase={phase}
        editsUsed={editsUsed}
        questionElapsedMs={questionElapsedMs}
        paceSummary={paceSummary}
      />

      {checkpoint && <CheckpointBanner status={checkpoint} />}

      <div className="p-5 rounded-xl border border-white/[0.08] bg-[#111111] space-y-4">
        {question.context && (
          <div className="p-4 rounded-lg bg-[#0D0D0D] border border-white/[0.04]">
            <p className="text-[10px] uppercase tracking-widest text-[#555555] mb-2">
              Passage
            </p>
            <div className="text-sm text-[#C0C0C0] leading-relaxed max-h-64 overflow-y-auto">
              <MockMarkdown text={question.context} />
            </div>
          </div>
        )}

        <div className="flex flex-wrap items-center gap-2">
          <span
            className="px-2 py-0.5 rounded text-[10px] uppercase tracking-wide"
            style={{ backgroundColor: "rgba(201,168,76,0.08)", color: "#C9A84C" }}
          >
            {question.topic}
          </span>
          <span className="text-[10px] uppercase tracking-widest text-[#555555]">
            {question.difficulty} · {question.type}
          </span>
        </div>

        {question.chartSpec && <QuestionChart spec={question.chartSpec} />}

        <div className="text-[15px] text-[#F0F0F0] leading-relaxed">
          <MockMarkdown text={question.prompt} />
        </div>

        {question.twoPartColumns ? (
          <TwoPartGrid
            question={question}
            state={state}
            onSelect={handleTwoPartSelect}
            disabled={optionsDisabled}
          />
        ) : (
          <div className="space-y-2">
            {question.options.map((option, i) => {
              const selected = state.selected === i
              return (
                <button
                  key={i}
                  onClick={() => handleSelect(i)}
                  disabled={optionsDisabled}
                  className="w-full text-left p-3 rounded-lg border transition-colors disabled:cursor-not-allowed"
                  style={{
                    borderColor: selected
                      ? "rgba(201,168,76,0.35)"
                      : "rgba(255,255,255,0.08)",
                    backgroundColor: selected
                      ? "rgba(201,168,76,0.08)"
                      : "#0D0D0D",
                  }}
                >
                  <span
                    className="text-xs font-bold mr-3"
                    style={{ color: selected ? "#C9A84C" : "#888888" }}
                  >
                    {String.fromCharCode(65 + i)}
                  </span>
                  <span className="text-sm text-[#F0F0F0]">{option}</span>
                </button>
              )
            })}
          </div>
        )}

        {phase === "review" && (
          <p className="text-xs" style={{ color: canEditInReview ? "#888888" : "#FF4444" }}>
            {canEditInReview
              ? thisEdited
                ? "You've already edited this question — further changes here won't consume another edit."
                : `You can change up to ${MAX_REVIEW_EDITS - editsUsed} more answer${MAX_REVIEW_EDITS - editsUsed === 1 ? "" : "s"} during review. Flagging is unlimited.`
              : "Edit cap reached — flag and notes still work, but answers on this question are locked."}
          </p>
        )}

        <div className="flex items-center justify-between gap-3 pt-2 flex-wrap">
          <p className="text-xs text-[#555555]">
            {phase === "review"
              ? "Results are revealed on the report once the full mock is complete."
              : "Answers are revealed only after the mock is complete."}
          </p>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleToggleFlag}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold transition-colors"
              style={{
                backgroundColor: state.flagged
                  ? "rgba(201,168,76,0.18)"
                  : "rgba(255,255,255,0.04)",
                color: state.flagged ? "#C9A84C" : "#888888",
              }}
              aria-pressed={state.flagged}
              title={
                state.flagged
                  ? "Flagged for post-mock review — click to un-flag"
                  : "Flag this question to revisit after the mock"
              }
            >
              <Flag className="w-3.5 h-3.5" />
              {state.flagged ? "Flagged" : "Flag"}
            </button>
            {phase === "review" ? (
              <button
                onClick={() => setReviewQuestionIdx(null)}
                className="px-4 py-2 rounded-lg text-sm font-semibold inline-flex items-center gap-1.5 transition-colors"
                style={{ backgroundColor: "#C9A84C", color: "#0A0A0A" }}
              >
                <ArrowLeft className="w-4 h-4" />
                Back to review
              </button>
            ) : !state.submitted ? (
              <button
                onClick={handleSubmitAnswer}
                disabled={!canSubmit(question, state)}
                className="px-4 py-2 rounded-lg text-sm font-semibold transition-colors disabled:opacity-40"
                style={{ backgroundColor: "#C9A84C", color: "#0A0A0A" }}
              >
                Submit
              </button>
            ) : (
              <button
                onClick={handleNextQuestion}
                className="px-4 py-2 rounded-lg text-sm font-semibold inline-flex items-center gap-1.5 transition-colors"
                style={{ backgroundColor: "#C9A84C", color: "#0A0A0A" }}
              >
                {questionIdx === activeSectionConfig.questions.length - 1
                  ? "Finish section"
                  : "Next"}
                <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
        {phase === "running" && !question.twoPartColumns && (
          <p className="text-[11px] text-[#555555] text-center">
            Shortcuts: <kbd className="px-1 rounded bg-white/[0.06] font-mono">1</kbd>–<kbd className="px-1 rounded bg-white/[0.06] font-mono">{Math.min(question.options.length, 5)}</kbd> select · <kbd className="px-1 rounded bg-white/[0.06] font-mono">space</kbd> {state.submitted ? "next" : "submit"} · <kbd className="px-1 rounded bg-white/[0.06] font-mono">f</kbd> flag
          </p>
        )}
      </div>
    </div>
  )
}

function IntroCard({
  sectionOrder,
  onUp,
  onStart,
}: {
  sectionOrder: Section[]
  onUp: (s: Section) => void
  onStart: () => void
}) {
  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div>
        <div className="flex items-center gap-2 mb-2">
          <FlaskConical className="w-4 h-4" style={{ color: "#C9A84C" }} />
          <h1 className="text-2xl font-bold text-[#F0F0F0]">Full-Length Mock</h1>
        </div>
        <p className="text-sm text-[#888888] leading-relaxed">
          Three sections, 45 minutes each, back-to-back. Between sections you can take up to a 10-minute break. Answers are revealed only after the full mock is complete, so you won&apos;t know a question&apos;s outcome until the report.
        </p>
      </div>

      <div className="p-5 rounded-xl border border-white/[0.08] bg-[#111111] space-y-4">
        <div>
          <h2 className="text-sm font-semibold text-[#F0F0F0] mb-2">
            Section order
          </h2>
          <p className="text-xs text-[#888888] mb-4">
            Rearrange to match the order you prefer. The GMAT lets you pick this on test day.
          </p>
          <div className="space-y-2">
            {sectionOrder.map((section, i) => (
              <div
                key={section}
                className="flex items-center justify-between p-3 rounded-lg border border-white/[0.08] bg-[#0D0D0D]"
              >
                <div className="flex items-center gap-3">
                  <span
                    className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold"
                    style={{
                      backgroundColor: "rgba(201,168,76,0.12)",
                      color: "#C9A84C",
                    }}
                  >
                    {i + 1}
                  </span>
                  <span className="text-sm font-semibold text-[#F0F0F0]">
                    {section}
                  </span>
                </div>
                <button
                  onClick={() => onUp(section)}
                  disabled={i === 0}
                  className="text-xs px-2 py-1 rounded text-[#888888] hover:text-[#F0F0F0] disabled:opacity-30"
                >
                  Move up
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="p-5 rounded-xl border border-white/[0.08] bg-[#111111]">
        <h2 className="text-sm font-semibold text-[#F0F0F0] mb-3">
          Four decision rules for today
        </h2>
        <ol className="space-y-2.5">
          {[
            {
              title: "Structure",
              body: "If you can't state what the question is asking after ~30 seconds, reframe the task — don't guess the answer, guess the question type.",
            },
            {
              title: "Path",
              body: "If you don't have an executable path by ~90 seconds, start triage — eliminate what you can, make an educated pick, and move.",
            },
            {
              title: "Stop-loss",
              body: "If you're far over the average time and still not confident, cut the loss now. One 4-minute question costs you two 1-minute ones later.",
            },
            {
              title: "Review/edit",
              body: "Bookmark only when you have a specific plausible fix in mind — not just because the question felt hard. You only get 3 edits in review.",
            },
          ].map((rule, i) => (
            <li key={rule.title} className="flex items-start gap-3 text-xs">
              <span
                className="mt-0.5 flex-shrink-0 inline-flex items-center justify-center text-[10px] font-bold w-5 h-5 rounded"
                style={{
                  backgroundColor: "rgba(201,168,76,0.12)",
                  color: "#C9A84C",
                }}
              >
                {i + 1}
              </span>
              <div className="flex-1">
                <p
                  className="text-[11px] uppercase tracking-widest mb-0.5"
                  style={{ color: "#C9A84C" }}
                >
                  {rule.title} rule
                </p>
                <p className="text-[#C0C0C0] leading-relaxed">{rule.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>

      <button
        onClick={onStart}
        className="w-full py-3 rounded-xl text-sm font-semibold inline-flex items-center justify-center gap-2 transition-opacity hover:opacity-90"
        style={{ backgroundColor: "#C9A84C", color: "#0A0A0A" }}
      >
        <Play className="w-4 h-4" />
        Start mock
      </button>

      <p className="text-xs text-[#555555] text-center">
        Once you start, the 45-minute timer runs even if you navigate away. Plan to sit the full mock in one go.
      </p>
    </div>
  )
}

function SectionHeader({
  section,
  sectionIdx,
  totalSections,
  questionIdx,
  totalQuestions,
  remainingMs,
  flaggedCount,
  phase,
  editsUsed,
  questionElapsedMs,
  paceSummary,
}: {
  section: Section
  sectionIdx: number
  totalSections: number
  questionIdx: number
  totalQuestions: number
  remainingMs: number
  flaggedCount: number
  phase?: Phase
  editsUsed?: number
  questionElapsedMs?: number
  paceSummary?: ReturnType<typeof sectionPaceStatus> | null
}) {
  // During review, the 3-minute clock turns red earlier since the
  // absolute window is shorter. During running, match the prior 5-min
  // threshold.
  const dangerThresholdMs = phase === "review" ? 30_000 : 5 * 60_000
  const danger = remainingMs < dangerThresholdMs
  const isReview = phase === "review"
  return (
    <div className="flex items-center justify-between p-4 rounded-xl border border-white/[0.08] bg-[#0D0D0D]">
      <div>
        <p className="text-[10px] uppercase tracking-widest text-[#555555]">
          {isReview
            ? `Review — Section ${sectionIdx + 1} of ${totalSections}`
            : `Section ${sectionIdx + 1} of ${totalSections}`}
        </p>
        <p className="text-base font-semibold text-[#F0F0F0]">
          {section} — Question {questionIdx + 1} of {totalQuestions}
        </p>
      </div>
      <div className="flex items-center gap-3">
        {phase === "running" && typeof questionElapsedMs === "number" && (
          <PacingBadge section={section} elapsedMs={questionElapsedMs} />
        )}
        {paceSummary && (
          <span
            className="inline-flex items-center gap-1.5 text-[11px] font-semibold px-2 py-1 rounded tabular-nums"
            style={{ color: paceSummary.color, backgroundColor: paceSummary.bg }}
            title={
              paceSummary.state === "on-pace"
                ? "Within a minute of the constant-pace budget"
                : paceSummary.deltaMin > 0
                ? "Behind the constant-pace budget — speed up or start skipping"
                : "Ahead of the budget — don't race, double-check"
            }
          >
            {paceSummary.label}
          </span>
        )}
        {isReview && typeof editsUsed === "number" && (
          <span
            className="inline-flex items-center gap-1 text-[11px] font-semibold px-2 py-0.5 rounded"
            style={{
              backgroundColor:
                editsUsed >= MAX_REVIEW_EDITS
                  ? "rgba(255,68,68,0.12)"
                  : "rgba(201,168,76,0.12)",
              color: editsUsed >= MAX_REVIEW_EDITS ? "#FF4444" : "#C9A84C",
            }}
            aria-label={`${editsUsed} of ${MAX_REVIEW_EDITS} edits used`}
          >
            <Pencil className="w-3 h-3" />
            {editsUsed}/{MAX_REVIEW_EDITS}
          </span>
        )}
        {flaggedCount > 0 && (
          <span
            className="inline-flex items-center gap-1 text-[11px] font-semibold px-2 py-0.5 rounded"
            style={{
              backgroundColor: "rgba(201,168,76,0.12)",
              color: "#C9A84C",
            }}
            aria-label={`${flaggedCount} question${flaggedCount === 1 ? "" : "s"} flagged`}
          >
            <Flag className="w-3 h-3" />
            {flaggedCount}
          </span>
        )}
        <Clock
          className="w-4 h-4"
          style={{ color: danger ? "#FF4444" : "#C9A84C" }}
        />
        <span
          className="text-lg font-bold tabular-nums"
          style={{ color: danger ? "#FF4444" : "#F0F0F0" }}
        >
          {formatClock(remainingMs)}
        </span>
      </div>
    </div>
  )
}

/**
 * Non-dismissible banner shown on the question immediately after each
 * mid-section checkpoint (Q7/Q14 in Quant+DI, Q8/Q15 in Verbal). The
 * card disappears automatically when the student advances to the next
 * question — running-phase navigation is forward-only, so no dismissal
 * state is needed. Colour + copy come from the CheckpointStatus the
 * pacing module computed.
 */
function CheckpointBanner({ status }: { status: CheckpointStatus }) {
  return (
    <div
      className="p-4 rounded-xl border flex items-start gap-3"
      style={{
        borderColor: status.color,
        backgroundColor: status.bg,
      }}
      role="status"
      aria-live="polite"
    >
      <Clock className="w-4 h-4 mt-0.5 shrink-0" style={{ color: status.color }} />
      <div className="flex-1 space-y-1">
        <div className="flex items-baseline gap-2 flex-wrap">
          <span
            className="text-[10px] uppercase tracking-widest font-semibold"
            style={{ color: status.color }}
          >
            Checkpoint Q{status.checkpoint}
          </span>
          <span
            className="text-[13px] font-semibold"
            style={{ color: status.color }}
          >
            {status.label}
          </span>
        </div>
        <p className="text-[13px] leading-snug text-[#F0F0F0]">
          {status.prescription}
        </p>
      </div>
    </div>
  )
}

function SectionReviewGrid({
  section,
  sectionIdx,
  totalSections,
  questions,
  states,
  reviewEdits,
  remainingMs,
  onOpenQuestion,
  onSubmit,
}: {
  section: Section
  sectionIdx: number
  totalSections: number
  questions: MockQuestion[]
  states: QuestionState[]
  reviewEdits: number[]
  remainingMs: number
  onOpenQuestion: (idx: number) => void
  onSubmit: () => void
}) {
  const danger = remainingMs < 30_000
  const editsUsed = reviewEdits.length
  const flaggedCount = states.filter((s) => s.flagged).length
  const unansweredCount = states.filter(
    (s) =>
      s.selected === null &&
      !(s.twoPartSelections?.some((v) => v !== null) ?? false)
  ).length

  return (
    <div className="max-w-3xl mx-auto space-y-4">
      <div className="flex items-center justify-between p-4 rounded-xl border border-white/[0.08] bg-[#0D0D0D]">
        <div>
          <p className="text-[10px] uppercase tracking-widest text-[#555555]">
            Review — Section {sectionIdx + 1} of {totalSections}
          </p>
          <p className="text-base font-semibold text-[#F0F0F0]">
            {section} · {questions.length} questions
          </p>
        </div>
        <div className="flex items-center gap-3">
          <span
            className="inline-flex items-center gap-1 text-[11px] font-semibold px-2 py-0.5 rounded"
            style={{
              backgroundColor:
                editsUsed >= MAX_REVIEW_EDITS
                  ? "rgba(255,68,68,0.12)"
                  : "rgba(201,168,76,0.12)",
              color: editsUsed >= MAX_REVIEW_EDITS ? "#FF4444" : "#C9A84C",
            }}
          >
            <Pencil className="w-3 h-3" />
            {editsUsed}/{MAX_REVIEW_EDITS} edits
          </span>
          <Clock
            className="w-4 h-4"
            style={{ color: danger ? "#FF4444" : "#C9A84C" }}
          />
          <span
            className="text-lg font-bold tabular-nums"
            style={{ color: danger ? "#FF4444" : "#F0F0F0" }}
          >
            {formatClock(remainingMs)}
          </span>
        </div>
      </div>

      <div className="p-5 rounded-xl border border-white/[0.08] bg-[#111111] space-y-3">
        <h2 className="text-sm font-semibold text-[#F0F0F0]">
          You have 3 minutes to revisit this section
        </h2>
        <p className="text-xs text-[#888888] leading-relaxed">
          Click any question to change your answer — up to {MAX_REVIEW_EDITS}{" "}
          answers total. Flags stay unlimited. When the timer runs out the
          section locks and you&apos;ll move to the break.
        </p>
        {(flaggedCount > 0 || unansweredCount > 0) && (
          <p className="text-xs text-[#888888]">
            {flaggedCount > 0 && (
              <span>
                <span style={{ color: "#C9A84C" }}>{flaggedCount} flagged</span>
                {unansweredCount > 0 ? " · " : ""}
              </span>
            )}
            {unansweredCount > 0 && (
              <span style={{ color: "#FF4444" }}>
                {unansweredCount} unanswered
              </span>
            )}
          </p>
        )}
      </div>

      <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-7 gap-2">
        {questions.map((q, i) => {
          const s = states[i]
          const answered =
            s.selected !== null ||
            (s.twoPartSelections?.some((v) => v !== null) ?? false)
          const letter =
            q.twoPartColumns
              ? answered
                ? "·"
                : "—"
              : s.selected !== null
              ? String.fromCharCode(65 + s.selected)
              : "—"
          const edited = reviewEdits.includes(i)
          return (
            <button
              key={q.id}
              onClick={() => onOpenQuestion(i)}
              className="relative p-2 rounded-lg border text-center transition-colors hover:opacity-90"
              style={{
                borderColor: s.flagged
                  ? "rgba(201,168,76,0.4)"
                  : answered
                  ? "rgba(255,255,255,0.12)"
                  : "rgba(255,68,68,0.3)",
                backgroundColor: s.flagged
                  ? "rgba(201,168,76,0.08)"
                  : answered
                  ? "#0D0D0D"
                  : "rgba(255,68,68,0.04)",
              }}
              title={
                s.flagged
                  ? `Flagged · ${answered ? "answered" : "unanswered"}${edited ? " · edited" : ""}`
                  : answered
                  ? `Answered${edited ? " · edited" : ""}`
                  : "Unanswered"
              }
              aria-label={`Question ${i + 1}, ${answered ? `answered ${letter}` : "unanswered"}${s.flagged ? ", flagged" : ""}${edited ? ", edited" : ""}`}
            >
              <div className="flex items-center justify-center gap-1">
                <span className="text-[10px] uppercase tracking-wider text-[#555555]">
                  Q{i + 1}
                </span>
                {s.flagged && (
                  <Flag className="w-2.5 h-2.5" style={{ color: "#C9A84C" }} />
                )}
              </div>
              <p
                className="text-sm font-bold tabular-nums mt-0.5"
                style={{
                  color: answered ? "#F0F0F0" : "#555555",
                }}
              >
                {letter}
              </p>
              {edited && (
                <span
                  className="absolute top-1 right-1 inline-flex items-center justify-center w-3 h-3 rounded-full"
                  style={{
                    backgroundColor: "rgba(62,207,142,0.9)",
                    color: "#0A0A0A",
                  }}
                  title="Changed during review"
                >
                  <Check className="w-2 h-2" />
                </span>
              )}
            </button>
          )
        })}
      </div>

      <div className="flex justify-end">
        <button
          onClick={onSubmit}
          className="px-5 py-2.5 rounded-lg text-sm font-semibold inline-flex items-center gap-2 transition-opacity hover:opacity-90"
          style={{ backgroundColor: "#C9A84C", color: "#0A0A0A" }}
        >
          Submit section
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  )
}

function BreakCard({
  completedSection,
  nextSection,
  remainingMs,
  onContinue,
}: {
  completedSection: Section
  nextSection: Section
  remainingMs: number
  onContinue: () => void
}) {
  return (
    <div className="max-w-2xl mx-auto space-y-5">
      <div>
        <div className="flex items-center gap-2 mb-2">
          <Pause className="w-4 h-4" style={{ color: "#C9A84C" }} />
          <h1 className="text-2xl font-bold text-[#F0F0F0]">Break</h1>
        </div>
        <p className="text-sm text-[#888888]">
          {completedSection} complete. Up next: {nextSection}.
        </p>
      </div>

      <div className="p-6 rounded-xl border border-white/[0.08] bg-[#111111] text-center">
        <p className="text-[10px] uppercase tracking-widest text-[#555555] mb-2">
          Break time remaining
        </p>
        <p className="text-4xl font-bold text-[#F0F0F0] tabular-nums mb-4">
          {formatClock(remainingMs)}
        </p>
        <button
          onClick={onContinue}
          className="px-5 py-2 rounded-lg text-sm font-semibold inline-flex items-center gap-2 hover:opacity-90 transition-opacity"
          style={{ backgroundColor: "#C9A84C", color: "#0A0A0A" }}
        >
          <Play className="w-4 h-4" />
          Start {nextSection} now
        </button>
        <p className="text-xs text-[#555555] mt-3">
          You can start the next section whenever you&apos;re ready — no need to wait out the clock.
        </p>
      </div>
    </div>
  )
}

function TwoPartGrid({
  question,
  state,
  onSelect,
  disabled,
}: {
  question: MockQuestion
  state: QuestionState
  onSelect: (colIdx: number, rowIdx: number) => void
  disabled?: boolean
}) {
  if (!question.twoPartColumns) return null
  const selections = state.twoPartSelections ?? question.twoPartColumns.map(() => null)
  const locked = disabled ?? state.submitted
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr>
            <th className="p-2 text-left text-[#888888] font-medium"></th>
            {question.twoPartColumns.map((col) => (
              <th
                key={col}
                className="p-2 text-center text-[#888888] font-medium"
              >
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {question.options.map((option, rowIdx) => (
            <tr key={rowIdx} className="border-t border-white/[0.04]">
              <td className="p-2 text-[#F0F0F0]">{option}</td>
              {question.twoPartColumns?.map((_col, colIdx) => (
                <td key={colIdx} className="p-2 text-center">
                  <input
                    type="radio"
                    name={`tpa-${colIdx}`}
                    checked={selections[colIdx] === rowIdx}
                    onChange={() => onSelect(colIdx, rowIdx)}
                    disabled={locked}
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
