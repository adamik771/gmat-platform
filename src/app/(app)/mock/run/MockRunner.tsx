"use client"

import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import { useRouter } from "next/navigation"
import {
  ArrowRight,
  Clock,
  Flag,
  FlaskConical,
  Pause,
  Play,
} from "lucide-react"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
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
}

export interface MockSectionQuestions {
  section: Section
  minutes: number
  questions: MockQuestion[]
}

interface MockRunnerProps {
  dateIso: string
  sections: MockSectionQuestions[]
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
}

type Phase = "intro" | "running" | "break" | "posting" | "done"

const BREAK_SECONDS = 10 * 60

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

export default function MockRunner({ dateIso, sections }: MockRunnerProps) {
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

  const activeSection: Section | null =
    phase === "running" ? sectionOrder[sectionIdx] : null
  const activeSectionConfig = activeSection
    ? sections.find((s) => s.section === activeSection) ?? null
    : null

  useEffect(() => {
    if (phase !== "running" && phase !== "break") return
    const id = window.setInterval(() => setNow(Date.now()), 1000)
    return () => window.clearInterval(id)
  }, [phase])

  // Auto-submit the section when the 45-min timer hits zero.
  const autoCompleteSection = useCallback(() => {
    const currentSection = sectionOrder[sectionIdx]
    persistSection(currentSection).finally(() => {
      const nextIdx = sectionIdx + 1
      if (nextIdx >= sectionOrder.length) {
        setPhase("done")
      } else {
        setPhase("break")
        setBreakStartMs(Date.now())
      }
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sectionIdx, sectionOrder])

  useEffect(() => {
    if (phase !== "running" || !sectionStartMs || !activeSectionConfig) return
    const elapsed = now - sectionStartMs
    const limit = activeSectionConfig.minutes * 60_000
    if (elapsed >= limit) autoCompleteSection()
  }, [now, phase, sectionStartMs, activeSectionConfig, autoCompleteSection])

  // Redirect to the report once the last section is done.
  useEffect(() => {
    if (phase === "done") {
      router.push("/mock/report")
    }
  }, [phase, router])

  const postingRef = useRef(false)

  async function persistSection(section: Section) {
    if (postingRef.current) return
    postingRef.current = true
    const cfg = sections.find((s) => s.section === section)
    if (!cfg) {
      postingRef.current = false
      return
    }
    const states = statesBySection[section]
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
    }))
    const answeredTotal = states.filter((s) => s.submitted).length
    const correctTotal = cfg.questions.reduce(
      (acc, q, i) => (questionIsCorrect(q, states[i]) ? acc + 1 : acc),
      0
    )
    try {
      await fetch("/api/practice-sessions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          slug: `mock-${dateIso.slice(0, 10)}-${section.toLowerCase()}`,
          topic: "Full-Length Mock",
          section,
          totalQuestions: cfg.questions.length,
          correctCount: correctTotal,
          accuracy:
            answeredTotal === 0 ? 0 : Math.round((correctTotal / answeredTotal) * 100),
          totalTimeMs: sectionStartMs ? Date.now() - sectionStartMs : 0,
          attempts,
        }),
      })
    } catch {
      // Silent — the user still sees their score on the report.
    }
    postingRef.current = false
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

  function handleSelect(optionIdx: number) {
    if (!activeSection) return
    setStatesBySection((prev) => {
      const section = activeSection
      const states = prev[section].slice()
      if (states[questionIdx].submitted) return prev
      states[questionIdx] = { ...states[questionIdx], selected: optionIdx }
      return { ...prev, [section]: states }
    })
  }

  function handleTwoPartSelect(colIdx: number, rowIdx: number) {
    if (!activeSection) return
    setStatesBySection((prev) => {
      const section = activeSection
      const states = prev[section].slice()
      const current = states[questionIdx]
      if (current.submitted) return prev
      const selections = (current.twoPartSelections ?? []).slice()
      selections[colIdx] = rowIdx
      states[questionIdx] = { ...current, twoPartSelections: selections }
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
    setStatesBySection((prev) => {
      const states = prev[activeSection].slice()
      states[questionIdx] = {
        ...states[questionIdx],
        flagged: !states[questionIdx].flagged,
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
    // Section complete — persist and move on.
    await persistSection(activeSection)
    const nextIdx = sectionIdx + 1
    if (nextIdx >= sectionOrder.length) {
      setPhase("done")
    } else {
      setPhase("break")
      setBreakStartMs(Date.now())
    }
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
    return (
      <div className="max-w-2xl mx-auto p-6 rounded-xl border border-white/[0.08] bg-[#111111] text-center">
        <h1 className="text-lg font-semibold text-[#F0F0F0] mb-2">
          Generating your report…
        </h1>
        <p className="text-sm text-[#888888]">Hold on a second.</p>
      </div>
    )
  }

  // phase === "running"
  if (!activeSection || !activeSectionConfig) return null
  const question = activeSectionConfig.questions[questionIdx]
  const state = statesBySection[activeSection][questionIdx]
  const limitMs = activeSectionConfig.minutes * 60_000
  const remainingMs = sectionStartMs ? Math.max(0, limitMs - (now - sectionStartMs)) : limitMs

  return (
    <div className="max-w-3xl mx-auto space-y-4">
      <SectionHeader
        section={activeSection}
        sectionIdx={sectionIdx}
        totalSections={sectionOrder.length}
        questionIdx={questionIdx}
        totalQuestions={activeSectionConfig.questions.length}
        remainingMs={remainingMs}
        flaggedCount={statesBySection[activeSection].filter((s) => s.flagged).length}
      />

      <div className="p-5 rounded-xl border border-white/[0.08] bg-[#111111] space-y-4">
        {question.context && (
          <div className="p-4 rounded-lg bg-[#0D0D0D] border border-white/[0.04]">
            <p className="text-[10px] uppercase tracking-widest text-[#555555] mb-2">
              Passage
            </p>
            <div className="text-sm text-[#C0C0C0] leading-relaxed max-h-64 overflow-y-auto">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {question.context}
              </ReactMarkdown>
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

        <div className="text-[15px] text-[#F0F0F0] leading-relaxed">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{question.prompt}</ReactMarkdown>
        </div>

        {question.twoPartColumns ? (
          <TwoPartGrid
            question={question}
            state={state}
            onSelect={handleTwoPartSelect}
          />
        ) : (
          <div className="space-y-2">
            {question.options.map((option, i) => {
              const selected = state.selected === i
              return (
                <button
                  key={i}
                  onClick={() => handleSelect(i)}
                  disabled={state.submitted}
                  className="w-full text-left p-3 rounded-lg border transition-colors"
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

        <div className="flex items-center justify-between gap-3 pt-2 flex-wrap">
          <p className="text-xs text-[#555555]">
            Answers are revealed only after the mock is complete.
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
            {!state.submitted ? (
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
}: {
  section: Section
  sectionIdx: number
  totalSections: number
  questionIdx: number
  totalQuestions: number
  remainingMs: number
  flaggedCount: number
}) {
  const danger = remainingMs < 5 * 60_000
  return (
    <div className="flex items-center justify-between p-4 rounded-xl border border-white/[0.08] bg-[#0D0D0D]">
      <div>
        <p className="text-[10px] uppercase tracking-widest text-[#555555]">
          Section {sectionIdx + 1} of {totalSections}
        </p>
        <p className="text-base font-semibold text-[#F0F0F0]">
          {section} — Question {questionIdx + 1} of {totalQuestions}
        </p>
      </div>
      <div className="flex items-center gap-3">
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
}: {
  question: MockQuestion
  state: QuestionState
  onSelect: (colIdx: number, rowIdx: number) => void
}) {
  if (!question.twoPartColumns) return null
  const selections = state.twoPartSelections ?? question.twoPartColumns.map(() => null)
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
                    disabled={state.submitted}
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
