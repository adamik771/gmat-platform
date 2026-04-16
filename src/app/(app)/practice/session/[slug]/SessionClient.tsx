"use client"

import { useCallback, useEffect, useMemo, useState } from "react"
import Link from "next/link"
import { ArrowLeft, Check, Clock, X } from "lucide-react"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"

export interface SessionQuestion {
  id: string
  number: number
  section: "Quant" | "Verbal" | "DI"
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
  /** Two-Part Analysis: column headers (the two "roles"). */
  twoPartColumns?: string[]
  /** Two-Part Analysis: the correct row index for each column. */
  twoPartCorrectAnswers?: number[]
}

interface QuestionState {
  selected: number | null
  /** Two-Part Analysis: one selection per column (parallel to twoPartColumns). */
  twoPartSelections?: (number | null)[]
  submitted: boolean
  elapsedMs: number
}

interface SessionClientProps {
  slug: string
  topic: string
  section: "Quant" | "Verbal" | "DI"
  questions: SessionQuestion[]
}

function formatDuration(ms: number): string {
  const totalSeconds = Math.floor(ms / 1000)
  const mm = Math.floor(totalSeconds / 60).toString().padStart(2, "0")
  const ss = (totalSeconds % 60).toString().padStart(2, "0")
  return `${mm}:${ss}`
}

function letterFor(index: number): string {
  return String.fromCharCode(65 + index)
}

/**
 * Renders any prompt / option / passage / explanation text as markdown using
 * react-markdown + remark-gfm. Styled compact enough to sit inside an option
 * button, a question card, an explanation panel, or a scrollable context
 * panel. Key win over the old `<pre>` fallback: pipe tables render as real
 * HTML <table>s for Table Analysis and Multi-Source Reasoning.
 */
function PromptBlock({ text, className = "" }: { text: string; className?: string }) {
  return (
    <div className={`text-sm leading-relaxed text-[#F0F0F0] ${className}`}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          p: (props) => (
            <p {...props} className="my-2 first:mt-0 last:mb-0" />
          ),
          h1: (props) => (
            <h1 {...props} className="text-base font-bold text-[#F0F0F0] mt-4 mb-2 first:mt-0" />
          ),
          h2: (props) => (
            <h2 {...props} className="text-base font-semibold text-[#F0F0F0] mt-4 mb-2 first:mt-0" />
          ),
          h3: (props) => (
            <h3 {...props} className="text-sm font-semibold text-[#F0F0F0] mt-3 mb-1.5 first:mt-0" />
          ),
          h4: (props) => (
            <h4 {...props} className="text-sm font-semibold text-[#F0F0F0] mt-3 mb-1 first:mt-0" />
          ),
          strong: (props) => (
            <strong {...props} className="font-semibold text-[#F0F0F0]" />
          ),
          em: (props) => <em {...props} className="italic text-[#E8C97A]" />,
          ul: (props) => (
            <ul {...props} className="list-disc pl-5 my-2 space-y-1 first:mt-0 last:mb-0" />
          ),
          ol: (props) => (
            <ol {...props} className="list-decimal pl-5 my-2 space-y-1 first:mt-0 last:mb-0" />
          ),
          li: (props) => (
            <li {...props} className="leading-relaxed marker:text-[#555555]" />
          ),
          a: (props) => (
            <a
              {...props}
              className="underline underline-offset-2"
              style={{ color: "#C9A84C" }}
            />
          ),
          hr: () => <hr className="my-4 border-0 border-t border-white/[0.08]" />,
          blockquote: (props) => (
            <blockquote
              {...props}
              className="my-3 pl-3 border-l-2 italic text-[#A8A8A8]"
              style={{ borderColor: "#C9A84C" }}
            />
          ),
          code: ({ className: codeClassName, ...props }) => {
            // Block-level code has a language-* className; inline code does not.
            const isBlock = codeClassName?.startsWith("language-")
            if (isBlock) {
              return (
                <code {...props} className="font-mono text-xs text-[#F0F0F0]" />
              )
            }
            return (
              <code
                {...props}
                className="font-mono text-[12px] bg-white/[0.06] px-1 py-0.5 rounded"
                style={{ color: "#E8C97A" }}
              />
            )
          },
          pre: (props) => (
            <pre
              {...props}
              className="my-3 p-3 rounded-lg bg-[#0A0A0A] border border-white/[0.06] overflow-x-auto text-xs"
            />
          ),
          // Real HTML tables — the whole point of this upgrade.
          table: (props) => (
            <div className="my-3 overflow-x-auto rounded-lg border border-white/[0.08]">
              <table {...props} className="w-full border-collapse text-xs" />
            </div>
          ),
          thead: (props) => <thead {...props} className="bg-[#0D0D0D]" />,
          th: (props) => (
            <th
              {...props}
              className="text-left py-2 px-3 text-[11px] font-semibold uppercase tracking-wide text-[#888888] border-b border-white/[0.08]"
            />
          ),
          td: (props) => (
            <td
              {...props}
              className="py-2 px-3 text-[13px] text-[#E0E0E0] border-b border-white/[0.04]"
            />
          ),
        }}
      >
        {text}
      </ReactMarkdown>
    </div>
  )
}

function ContextPanel({ text }: { text: string }) {
  // Strip leading passage/set/tab markdown headings so we present the text as
  // the student would see it on the real test.
  const cleaned = text
    .replace(/^##\s+(?:Passage|Set)\s+[^\n]+\n+/m, "")
    .replace(/^###\s+Tab\s+\d+:\s*/gm, "")
  return (
    <div className="p-5 rounded-xl border border-white/[0.08] bg-[#111111] max-h-[70vh] overflow-y-auto">
      <p className="text-[10px] uppercase tracking-widest text-[#555555] mb-3">Reference</p>
      <PromptBlock text={cleaned} />
    </div>
  )
}

/** Returns true when a submitted question is answered correctly. */
function isQuestionCorrect(q: SessionQuestion, state: QuestionState): boolean {
  if (!state.submitted) return false
  if (q.twoPartCorrectAnswers && state.twoPartSelections) {
    return q.twoPartCorrectAnswers.every((ans, i) => state.twoPartSelections![i] === ans)
  }
  return state.selected === q.correctAnswer
}

/** Returns true when the user has made enough selections to submit. */
function canSubmit(q: SessionQuestion, state: QuestionState): boolean {
  if (state.submitted) return false
  if (q.twoPartColumns && state.twoPartSelections) {
    return state.twoPartSelections.every((s) => s !== null)
  }
  return state.selected !== null
}

/** Two-Part Analysis answer grid — one selection per column. */
function TwoPartGrid({
  question,
  state,
  onSelect,
}: {
  question: SessionQuestion
  state: QuestionState
  onSelect: (colIdx: number, rowIdx: number) => void
}) {
  const cols = question.twoPartColumns!
  const rows = question.options
  const selections = state.twoPartSelections ?? []
  const correctAnswers = question.twoPartCorrectAnswers

  return (
    <div className="overflow-x-auto rounded-lg border border-white/[0.08]">
      <table className="w-full border-collapse text-sm">
        <thead className="bg-[#0D0D0D]">
          <tr>
            <th className="text-left py-3 px-4 text-[11px] font-semibold uppercase tracking-wide text-[#888888] border-b border-white/[0.08] w-1/2" />
            {cols.map((col) => (
              <th
                key={col}
                className="py-3 px-4 text-center text-[11px] font-semibold uppercase tracking-wide border-b border-white/[0.08]"
                style={{ color: "#C9A84C" }}
              >
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, ri) => (
            <tr
              key={ri}
              className="border-b border-white/[0.04] hover:bg-white/[0.02] transition-colors"
            >
              <td className="py-3 px-4 text-[13px] text-[#E0E0E0]">
                <PromptBlock text={row} />
              </td>
              {cols.map((_, ci) => {
                const isSelected = selections[ci] === ri
                const showResult = state.submitted
                const isCorrectCell = correctAnswers?.[ci] === ri

                let circleStyle: React.CSSProperties = {
                  borderColor: "rgba(255,255,255,0.15)",
                  backgroundColor: "transparent",
                }
                if (showResult && isSelected && isCorrectCell) {
                  circleStyle = {
                    borderColor: "#3ECF8E",
                    backgroundColor: "rgba(62,207,142,0.15)",
                  }
                } else if (showResult && isSelected && !isCorrectCell) {
                  circleStyle = {
                    borderColor: "#FF4444",
                    backgroundColor: "rgba(255,68,68,0.15)",
                  }
                } else if (showResult && isCorrectCell) {
                  circleStyle = {
                    borderColor: "#3ECF8E",
                    backgroundColor: "rgba(62,207,142,0.08)",
                  }
                } else if (isSelected) {
                  circleStyle = {
                    borderColor: "#C9A84C",
                    backgroundColor: "rgba(201,168,76,0.15)",
                  }
                }

                return (
                  <td key={ci} className="py-3 px-4 text-center">
                    <button
                      onClick={() => onSelect(ci, ri)}
                      disabled={state.submitted}
                      className="w-6 h-6 rounded-full border-2 mx-auto flex items-center justify-center transition-colors disabled:cursor-default"
                      style={circleStyle}
                    >
                      {isSelected && (
                        <div
                          className="w-2.5 h-2.5 rounded-full"
                          style={{
                            backgroundColor:
                              showResult && isCorrectCell
                                ? "#3ECF8E"
                                : showResult && !isCorrectCell
                                ? "#FF4444"
                                : "#C9A84C",
                          }}
                        />
                      )}
                      {showResult && isCorrectCell && !isSelected && (
                        <Check className="w-3 h-3" style={{ color: "#3ECF8E" }} />
                      )}
                    </button>
                  </td>
                )
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default function SessionClient({ slug, topic, section, questions }: SessionClientProps) {
  const [currentIdx, setCurrentIdx] = useState(0)
  const [states, setStates] = useState<QuestionState[]>(() =>
    questions.map((q) => ({
      selected: null,
      twoPartSelections: q.twoPartColumns ? q.twoPartColumns.map(() => null) : undefined,
      submitted: false,
      elapsedMs: 0,
    }))
  )
  const [sessionStart] = useState(() => Date.now())
  const [questionStart, setQuestionStart] = useState(() => Date.now())
  const [now, setNow] = useState(() => Date.now())
  const [showResults, setShowResults] = useState(false)

  // Tick the timer once a second for the header readouts.
  useEffect(() => {
    const id = window.setInterval(() => setNow(Date.now()), 1000)
    return () => window.clearInterval(id)
  }, [])

  const goTo = useCallback((idx: number) => {
    setCurrentIdx(idx)
    setQuestionStart(Date.now())
  }, [])

  const current = questions[currentIdx]
  const currentState = states[currentIdx]
  const total = questions.length
  const answeredCount = states.filter((s) => s.submitted).length
  const correctCount = useMemo(
    () =>
      states.reduce((acc, state, i) => {
        return isQuestionCorrect(questions[i], state) ? acc + 1 : acc
      }, 0),
    [states, questions]
  )

  const isTwoPart = !!current.twoPartColumns

  function handleSelect(index: number) {
    if (currentState.submitted) return
    setStates((prev) => {
      const next = prev.slice()
      next[currentIdx] = { ...next[currentIdx], selected: index }
      return next
    })
  }

  function handleTwoPartSelect(colIdx: number, rowIdx: number) {
    if (currentState.submitted) return
    setStates((prev) => {
      const next = prev.slice()
      const selections = [...(next[currentIdx].twoPartSelections ?? [])]
      selections[colIdx] = rowIdx
      next[currentIdx] = { ...next[currentIdx], twoPartSelections: selections }
      return next
    })
  }

  function handleSubmit() {
    if (!canSubmit(current, currentState)) return
    const elapsed = Date.now() - questionStart
    setStates((prev) => {
      const next = prev.slice()
      next[currentIdx] = { ...next[currentIdx], submitted: true, elapsedMs: elapsed }
      return next
    })
  }

  function handleNext() {
    if (currentIdx < total - 1) {
      goTo(currentIdx + 1)
    } else {
      setShowResults(true)
    }
  }

  function handlePrev() {
    if (currentIdx > 0) goTo(currentIdx - 1)
  }

  if (showResults) {
    const accuracy = answeredCount === 0 ? 0 : Math.round((correctCount / answeredCount) * 100)
    const totalTime = now - sessionStart
    return (
      <div className="max-w-3xl mx-auto space-y-6">
        <div>
          <Link
            href="/practice"
            className="inline-flex items-center gap-1.5 text-xs text-[#888888] hover:text-[#F0F0F0] transition-colors"
          >
            <ArrowLeft className="w-3 h-3" />
            Back to Practice
          </Link>
          <h1 className="text-2xl font-bold text-[#F0F0F0] mt-3">Session complete</h1>
          <p className="text-sm text-[#555555] mt-1">
            {topic} · {section}
          </p>
        </div>

        <div
          className="p-6 rounded-xl border"
          style={{
            borderColor: "rgba(201,168,76,0.2)",
            backgroundColor: "rgba(201,168,76,0.04)",
          }}
        >
          <div className="grid grid-cols-3 gap-6">
            <div>
              <p className="text-[10px] uppercase tracking-widest text-[#555555]">Accuracy</p>
              <p className="text-3xl font-bold mt-2" style={{ color: "#C9A84C" }}>
                {accuracy}%
              </p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-widest text-[#555555]">Correct</p>
              <p className="text-3xl font-bold mt-2 text-[#F0F0F0]">
                {correctCount}
                <span className="text-base font-normal text-[#555555]"> / {total}</span>
              </p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-widest text-[#555555]">Total time</p>
              <p className="text-3xl font-bold mt-2 text-[#F0F0F0]">{formatDuration(totalTime)}</p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-widest text-[#888888] mb-4">
            Review
          </h2>
          <div className="rounded-xl border border-white/[0.08] bg-[#111111] overflow-hidden">
            {questions.map((q, i) => {
              const state = states[i]
              const isCorrect = isQuestionCorrect(q, state)
              return (
                <button
                  key={q.id}
                  onClick={() => {
                    goTo(i)
                    setShowResults(false)
                  }}
                  className={`w-full flex items-center justify-between p-4 hover:bg-white/[0.02] transition-colors text-left ${
                    i < questions.length - 1 ? "border-b border-white/[0.05]" : ""
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div
                      className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{
                        backgroundColor: state.submitted
                          ? isCorrect
                            ? "rgba(62,207,142,0.1)"
                            : "rgba(255,68,68,0.1)"
                          : "rgba(255,255,255,0.04)",
                      }}
                    >
                      {state.submitted ? (
                        isCorrect ? (
                          <Check className="w-3.5 h-3.5" style={{ color: "#3ECF8E" }} />
                        ) : (
                          <X className="w-3.5 h-3.5" style={{ color: "#FF4444" }} />
                        )
                      ) : (
                        <span className="text-[10px] text-[#555555]">—</span>
                      )}
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs text-[#555555]">
                        Question {i + 1} · {q.subtopic}
                      </p>
                      <p className="text-sm text-[#F0F0F0] truncate">
                        {q.prompt.replace(/\s+/g, " ").slice(0, 90)}
                      </p>
                    </div>
                  </div>
                  <span className="text-xs text-[#888888] flex-shrink-0 ml-3">
                    {state.submitted ? formatDuration(state.elapsedMs) : "skipped"}
                  </span>
                </button>
              )
            })}
          </div>
        </div>

        <div className="flex gap-3">
          <Link
            href="/practice"
            className="flex-1 text-center px-4 py-2.5 rounded-xl text-sm font-semibold transition-all hover:opacity-90"
            style={{ backgroundColor: "#C9A84C", color: "#0A0A0A" }}
          >
            Back to Practice
          </Link>
          <Link
            href={`/practice/session/${slug}`}
            className="flex-1 text-center px-4 py-2.5 rounded-xl text-sm font-semibold transition-all border border-white/[0.08] text-[#F0F0F0] hover:bg-white/[0.04]"
          >
            Retake
          </Link>
        </div>
      </div>
    )
  }

  const sessionElapsed = now - sessionStart
  const progressPct = Math.round(((currentIdx + (currentState.submitted ? 1 : 0)) / total) * 100)
  const hasContext = !!current.context && current.context.length > 0

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      {/* Header */}
      <div>
        <Link
          href="/practice"
          className="inline-flex items-center gap-1.5 text-xs text-[#888888] hover:text-[#F0F0F0] transition-colors"
        >
          <ArrowLeft className="w-3 h-3" />
          Exit Session
        </Link>
        <div className="flex items-center justify-between mt-3">
          <div>
            <h1 className="text-xl font-bold text-[#F0F0F0]">{topic}</h1>
            <p className="text-xs text-[#555555] mt-0.5">
              Question {currentIdx + 1} of {total} ·{" "}
              <span style={{ color: "#C9A84C" }}>{current.difficulty}</span> · {current.type}
            </p>
          </div>
          <div className="flex items-center gap-2 text-sm text-[#888888]">
            <Clock className="w-4 h-4" />
            <span className="font-mono">{formatDuration(sessionElapsed)}</span>
          </div>
        </div>

        {/* Progress bar */}
        <div className="h-1 rounded-full bg-white/[0.06] overflow-hidden mt-4">
          <div
            className="h-full rounded-full transition-all duration-300"
            style={{
              width: `${progressPct}%`,
              background: "linear-gradient(90deg, #C9A84C, #E8C97A)",
            }}
          />
        </div>
      </div>

      {/* Body: passage (if grouped) + question */}
      <div className={hasContext ? "grid lg:grid-cols-2 gap-6" : ""}>
        {hasContext && current.context && <ContextPanel text={current.context} />}

        <div className="space-y-6">
          <div className="p-6 rounded-xl border border-white/[0.08] bg-[#111111]">
            <PromptBlock text={current.prompt} className="mb-5" />

            {isTwoPart ? (
              <TwoPartGrid
                question={current}
                state={currentState}
                onSelect={handleTwoPartSelect}
              />
            ) : (
              <div className="space-y-2">
                {current.options.map((option, i) => {
                  const isSelected = currentState.selected === i
                  const isCorrect = i === current.correctAnswer
                  const showResult = currentState.submitted
                  const showCorrect = showResult && isCorrect
                  const showIncorrect = showResult && isSelected && !isCorrect

                  let borderColor = "rgba(255,255,255,0.08)"
                  let bgColor = "transparent"
                  if (showCorrect) {
                    borderColor = "rgba(62,207,142,0.4)"
                    bgColor = "rgba(62,207,142,0.06)"
                  } else if (showIncorrect) {
                    borderColor = "rgba(255,68,68,0.4)"
                    bgColor = "rgba(255,68,68,0.06)"
                  } else if (isSelected) {
                    borderColor = "rgba(201,168,76,0.4)"
                    bgColor = "rgba(201,168,76,0.06)"
                  }

                  return (
                    <button
                      key={i}
                      onClick={() => handleSelect(i)}
                      disabled={currentState.submitted}
                      className="w-full flex items-start gap-3 p-3 rounded-lg border text-left transition-colors hover:bg-white/[0.02] disabled:cursor-default"
                      style={{ borderColor, backgroundColor: bgColor }}
                    >
                      <div
                        className="w-6 h-6 rounded-md flex items-center justify-center flex-shrink-0 text-xs font-semibold"
                        style={{
                          backgroundColor: showCorrect
                            ? "#3ECF8E"
                            : showIncorrect
                            ? "#FF4444"
                            : isSelected
                            ? "#C9A84C"
                            : "rgba(255,255,255,0.06)",
                          color: showCorrect || showIncorrect || isSelected ? "#0A0A0A" : "#888888",
                        }}
                      >
                        {letterFor(i)}
                      </div>
                      <PromptBlock text={option} className="flex-1" />
                      {showCorrect && (
                        <Check className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: "#3ECF8E" }} />
                      )}
                      {showIncorrect && (
                        <X className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: "#FF4444" }} />
                      )}
                    </button>
                  )
                })}
              </div>
            )}

            {currentState.submitted && current.explanation && (
              <div
                className="mt-5 p-4 rounded-lg border"
                style={{
                  borderColor: "rgba(201,168,76,0.15)",
                  backgroundColor: "rgba(201,168,76,0.03)",
                }}
              >
                <p className="text-[10px] uppercase tracking-widest text-[#555555] mb-2">
                  Explanation
                </p>
                <PromptBlock text={current.explanation} />
              </div>
            )}
          </div>

          {/* Action bar */}
          <div className="flex items-center justify-between gap-3">
            <button
              onClick={handlePrev}
              disabled={currentIdx === 0}
              className="px-4 py-2 rounded-lg text-sm font-medium border border-white/[0.08] text-[#888888] hover:text-[#F0F0F0] hover:border-white/[0.16] transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
            >
              Previous
            </button>

            {currentState.submitted ? (
              <button
                onClick={handleNext}
                className="flex-1 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all hover:opacity-90"
                style={{ backgroundColor: "#C9A84C", color: "#0A0A0A" }}
              >
                {currentIdx < total - 1 ? "Next Question" : "Finish Session"}
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                disabled={!canSubmit(current, currentState)}
                className="flex-1 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all hover:opacity-90 disabled:opacity-40 disabled:cursor-not-allowed"
                style={{ backgroundColor: "#C9A84C", color: "#0A0A0A" }}
              >
                Submit Answer
              </button>
            )}

            <button
              onClick={() => setShowResults(true)}
              className="px-4 py-2 rounded-lg text-sm font-medium border border-white/[0.08] text-[#888888] hover:text-[#F0F0F0] hover:border-white/[0.16] transition-colors"
            >
              End
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
