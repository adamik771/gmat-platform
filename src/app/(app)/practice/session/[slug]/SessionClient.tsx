"use client"

import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import {
  AlertTriangle,
  ArrowLeft,
  BookOpen,
  Check,
  ChevronDown,
  Clock,
  Lightbulb,
  Sparkles,
  Star,
  X,
} from "lucide-react"
import { DI_METHOD_CARDS, hasMethodCard } from "@/lib/di-method-cards"
import { TOPIC_TO_CHAPTER } from "@/lib/topic-chapter-map"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import PacingBadge from "@/components/shared/PacingBadge"
import SaveForReviewButton from "@/components/review/SaveForReviewButton"
import TutorDrawer from "@/components/tutor/TutorDrawer"
import { levelLabel, MIN_ATTEMPTS_FOR_ADAPTIVE } from "@/lib/topic-skill"
import {
  digitKeyToOptionIndex,
  shouldIgnoreKeyboardShortcut,
} from "@/lib/keyboard"

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
  /** Progressive hints in order (nudge → strategy → setup). Empty when
   *  no hints authored — the "Need a hint?" button hides in that case. */
  hints?: { level: "nudge" | "strategy" | "setup"; text: string }[]
  /** Two-Part Analysis: column headers (the two "roles"). */
  twoPartColumns?: string[]
  /** Two-Part Analysis: the correct row index for each column. */
  twoPartCorrectAnswers?: number[]
}

type Confidence = "low" | "medium" | "high"

interface QuestionState {
  selected: number | null
  /** Two-Part Analysis: one selection per column (parallel to twoPartColumns). */
  twoPartSelections?: (number | null)[]
  submitted: boolean
  elapsedMs: number
  /** How many progressive hints the student has revealed so far (0..N). */
  hintsRevealed: number
  /** Pre-submit confidence rating. Optional — students can submit without
   *  picking one. Drives the post-submit calibration hint. */
  confidence: Confidence | null
  /** Ms from question-display to first interaction (option click, hint
   *  reveal, or confidence pick). Captures "time to first action" per
   *  PDF v2 telemetry spec — useful for separating "read fast, commit
   *  fast" attempts from "read for a while, then commit" attempts even
   *  when total elapsed is the same. Null until the student interacts. */
  firstInteractionMs: number | null
}

interface SessionClientProps {
  slug: string
  topic: string
  section: "Quant" | "Verbal" | "DI"
  questions: SessionQuestion[]
  /** Adaptive-mode signals from the server. `skillLevel` is the
   *  student's current proficiency in [0, 1]; `skillAttempts` is the
   *  cumulative attempt count on this topic. Both come from
   *  user_metadata.topic_skill_levels — see lib/topic-skill.ts. The
   *  questions array is already adaptively ordered by the server. */
  skillLevel?: number
  skillAttempts?: number
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

/** Coarse device-class detection for telemetry. Uses viewport width
 *  because that's what the student actually experiences — a resized
 *  desktop window reads as "tablet" and that's the right signal for
 *  analysing whether UI density is hurting performance. */
type DeviceType = "desktop" | "tablet" | "mobile"
function detectDeviceType(): DeviceType {
  if (typeof window === "undefined") return "desktop"
  const w = window.innerWidth
  if (w < 640) return "mobile"
  if (w < 1024) return "tablet"
  return "desktop"
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

function DIMethodCardBanner({ questionType }: { questionType: string }) {
  const [open, setOpen] = useState(true)
  const card = DI_METHOD_CARDS[questionType]
  if (!card) return null
  return (
    <div
      className="mb-4 rounded-xl border"
      style={{
        borderColor: "rgba(95,168,255,0.2)",
        backgroundColor: "rgba(95,168,255,0.04)",
      }}
    >
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between gap-3 px-4 py-3 text-left"
      >
        <div className="flex items-center gap-2">
          <BookOpen
            className="w-4 h-4 flex-shrink-0"
            style={{ color: "#5FA8FF" }}
          />
          <div>
            <p
              className="text-[10px] uppercase tracking-widest mb-0.5"
              style={{ color: "#5FA8FF" }}
            >
              Method card
            </p>
            <p className="text-sm font-semibold text-[#F0F0F0]">
              {card.title}
            </p>
          </div>
        </div>
        <ChevronDown
          className={cn(
            "w-4 h-4 text-[#888888] transition-transform",
            !open && "-rotate-90"
          )}
        />
      </button>
      {open && (
        <div className="px-4 pb-4 space-y-3">
          <p className="text-xs text-[#C0C0C0] leading-relaxed italic">
            {card.premise}
          </p>
          <ol className="space-y-1.5">
            {card.steps.map((step, i) => (
              <li key={i} className="flex items-start gap-2 text-[13px] text-[#F0F0F0]">
                <span
                  className="mt-0.5 flex-shrink-0 inline-flex items-center justify-center text-[10px] font-bold w-5 h-5 rounded"
                  style={{
                    backgroundColor: "rgba(95,168,255,0.12)",
                    color: "#5FA8FF",
                  }}
                >
                  {i + 1}
                </span>
                <span className="leading-relaxed">{step}</span>
              </li>
            ))}
          </ol>
          <div className="flex items-start gap-2 pt-1 border-t border-white/[0.04]">
            <AlertTriangle
              className="w-3.5 h-3.5 flex-shrink-0 mt-0.5"
              style={{ color: "#FF9933" }}
            />
            <p className="text-xs text-[#B8B8B8] leading-relaxed">
              <span className="font-semibold text-[#F0F0F0]">Trap:</span>{" "}
              {card.trap}
            </p>
          </div>
        </div>
      )}
    </div>
  )
}

function cn(...classes: (string | false | null | undefined)[]): string {
  return classes.filter(Boolean).join(" ")
}

function ConfidencePanel({
  value,
  submitted,
  wasCorrect,
  onSelect,
}: {
  value: Confidence | null
  submitted: boolean
  wasCorrect: boolean
  onSelect: (level: Confidence) => void
}) {
  const levels: { id: Confidence; label: string; color: string; bg: string }[] = [
    {
      id: "low",
      label: "Low",
      color: "#FF4444",
      bg: "rgba(255,68,68,0.12)",
    },
    {
      id: "medium",
      label: "Medium",
      color: "#E8C97A",
      bg: "rgba(232,201,122,0.14)",
    },
    {
      id: "high",
      label: "High",
      color: "#3ECF8E",
      bg: "rgba(62,207,142,0.12)",
    },
  ]

  // Post-submit calibration copy. The PDF treats confidence as a
  // metacognition trainer — the richest signal is the mismatch between
  // how sure you felt and whether you were right. Highlight those.
  let calibrationHint: { tone: "warn" | "ok" | "good"; text: string } | null =
    null
  if (submitted && value) {
    if (value === "high" && !wasCorrect) {
      calibrationHint = {
        tone: "warn",
        text: "High confidence + wrong — classic trap. Read the explanation looking for what the test wanted you to assume.",
      }
    } else if (value === "low" && wasCorrect) {
      calibrationHint = {
        tone: "good",
        text: "Low confidence + right — you can trust this pattern more next time. Your instinct was better than you thought.",
      }
    } else if (value === "medium" && !wasCorrect) {
      calibrationHint = {
        tone: "warn",
        text: "Medium confidence + wrong — your gut said \"maybe\" for a reason. Trust that signal: it's time to bail, not commit.",
      }
    } else if (value === "high" && wasCorrect) {
      calibrationHint = {
        tone: "ok",
        text: "High confidence + right — solid. Look at your time, too: if it was slow, the signal is \"same method, faster.\"",
      }
    } else {
      calibrationHint = {
        tone: "ok",
        text: "Low confidence + wrong — expected. Focus on the method reveal in the explanation.",
      }
    }
  }

  return (
    <div className="mt-5 p-4 rounded-lg border" style={{ borderColor: "rgba(201,168,76,0.12)", backgroundColor: "rgba(201,168,76,0.02)" }}>
      <div className="flex items-center justify-between gap-3 flex-wrap">
        <p className="text-[10px] uppercase tracking-widest text-[#555555]">
          {submitted ? "Your confidence" : "How confident are you?"}
          <span className="text-[#444444] normal-case tracking-normal ml-2">
            (optional — trains metacognition)
          </span>
        </p>
        <div className="flex gap-1.5">
          {levels.map((l) => {
            const active = value === l.id
            return (
              <button
                key={l.id}
                type="button"
                onClick={() => onSelect(l.id)}
                disabled={submitted}
                className="px-2.5 py-1 rounded text-[11px] font-medium border transition-colors disabled:cursor-not-allowed disabled:opacity-80"
                style={
                  active
                    ? {
                        backgroundColor: l.bg,
                        color: l.color,
                        borderColor: l.color + "66",
                      }
                    : {
                        backgroundColor: "transparent",
                        color: submitted ? "#444444" : "#888888",
                        borderColor: "rgba(255,255,255,0.08)",
                      }
                }
              >
                {l.label}
              </button>
            )
          })}
        </div>
      </div>
      {calibrationHint && (
        <p
          className="text-xs mt-3 leading-relaxed"
          style={{
            color:
              calibrationHint.tone === "warn"
                ? "#FF9966"
                : calibrationHint.tone === "good"
                ? "#3ECF8E"
                : "#C0C0C0",
          }}
        >
          {calibrationHint.text}
        </p>
      )}
    </div>
  )
}

/**
 * PostSubmitUnderstandingRow — 5-star "How well do you understand this
 * now?" row shown after the student submits and reveals the explanation.
 *
 * Distinct from `ConfidencePanel` above: that one is *pre-submit* and
 * trains metacognition (gut-vs-answer calibration). This one is
 * *post-submit* and feeds the spaced-review engine's confidence-based
 * priority modifier in `src/lib/spaced-review.ts`. POSTs to
 * `/api/spaced-review` with `kind: "question"`, `itemId:
 * "question:<questionId>"`, `confidence: 1-5`.
 *
 * No persistence required across mounts — the API is the source of
 * truth. Local state tracks the rating in this session for instant
 * visual feedback. Re-clicking changes the rating (re-POSTs).
 */
function PostSubmitUnderstandingRow({
  questionId,
}: {
  questionId: string
}) {
  const [selected, setSelected] = useState<number | null>(null)
  const [status, setStatus] = useState<
    "idle" | "saving" | "saved" | "error" | "unauthorized"
  >("idle")
  const labels: Record<number, string> = {
    1: "No idea — would guess",
    2: "Shaky",
    3: "OK",
    4: "Solid",
    5: "Certain",
  }

  const handleRate = async (rating: number) => {
    setSelected(rating)
    setStatus("saving")
    try {
      const res = await fetch("/api/spaced-review", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          itemId: `question:${questionId}`,
          kind: "question",
          confidence: rating,
        }),
      })
      if (res.status === 401) {
        setStatus("unauthorized")
        return
      }
      if (!res.ok) {
        setStatus("error")
        return
      }
      const data = (await res.json()) as { ok?: boolean }
      setStatus(data.ok ? "saved" : "error")
    } catch {
      setStatus("error")
    }
  }

  return (
    <div
      className="mt-5 p-4 rounded-lg border"
      style={{
        borderColor: "rgba(201,168,76,0.12)",
        backgroundColor: "rgba(201,168,76,0.02)",
      }}
    >
      <div className="flex items-center justify-between gap-3 flex-wrap">
        <div>
          <p className="text-[10px] uppercase tracking-widest text-[#555555]">
            How well do you understand this now?
          </p>
          <p className="text-[10px] text-[#444444] mt-0.5">
            (feeds your spaced-review schedule)
          </p>
        </div>
        <div className="flex gap-1.5" role="radiogroup" aria-label="Understanding rating">
          {[1, 2, 3, 4, 5].map((n) => {
            const active = selected !== null && n <= selected
            const isExact = selected === n
            return (
              <button
                key={n}
                type="button"
                role="radio"
                aria-checked={isExact}
                aria-label={`${n} — ${labels[n]}`}
                onClick={() => handleRate(n)}
                title={labels[n]}
                className="px-2 py-1 rounded transition-colors"
                style={{
                  backgroundColor: active ? "rgba(201,168,76,0.18)" : "transparent",
                  color: active ? "#C9A84C" : "#666666",
                  border: `1px solid ${
                    isExact ? "rgba(201,168,76,0.5)" : "rgba(255,255,255,0.08)"
                  }`,
                }}
              >
                <Star
                  className="w-3.5 h-3.5"
                  style={{
                    fill: active ? "#C9A84C" : "transparent",
                  }}
                />
              </button>
            )
          })}
        </div>
      </div>
      {selected !== null && (
        <div
          className="mt-3 flex items-center gap-3 flex-wrap"
          style={{
            color:
              status === "error" || status === "unauthorized"
                ? "#FF9966"
                : status === "saved"
                  ? "#3ECF8E"
                  : "#888888",
          }}
        >
          <p className="text-[11px] leading-relaxed">
            {status === "saving" && `Saving "${labels[selected]}"…`}
            {status === "saved" && (
              <>
                Saved.{" "}
                {selected <= 2
                  ? "We'll resurface this question sooner."
                  : selected >= 4
                    ? "We'll space this one further out."
                    : "On the default ladder."}
              </>
            )}
            {status === "error" && <>Couldn&apos;t save the rating.</>}
            {status === "unauthorized" && (
              <>
                Sign-in expired.{" "}
                <Link
                  href="/login"
                  style={{ color: "#C9A84C", textDecoration: "underline" }}
                >
                  Sign in
                </Link>{" "}
                to save this rating.
              </>
            )}
            {status === "idle" && labels[selected]}
          </p>
          {status === "error" && (
            <button
              type="button"
              onClick={() => handleRate(selected)}
              className="px-2.5 py-1 rounded-md text-[10px] font-medium transition-colors"
              style={{
                backgroundColor: "rgba(201,168,76,0.12)",
                color: "#C9A84C",
                border: "1px solid rgba(201,168,76,0.3)",
              }}
            >
              Retry
            </button>
          )}
        </div>
      )}
    </div>
  )
}

function HintPanel({
  hints,
  revealed,
  onReveal,
  submitted,
}: {
  hints: NonNullable<SessionQuestion["hints"]>
  revealed: number
  onReveal: () => void
  submitted: boolean
}) {
  const total = hints.length
  const shown = hints.slice(0, revealed)
  const hasMore = revealed < total
  const levelLabels: Record<string, string> = {
    nudge: "Nudge",
    strategy: "Strategy",
    setup: "Setup",
  }
  const nextLabel = hasMore ? levelLabels[hints[revealed].level] ?? "Hint" : null

  return (
    <div
      className="mt-5 p-4 rounded-lg border"
      style={{
        borderColor: "rgba(201,168,76,0.15)",
        backgroundColor: "rgba(201,168,76,0.03)",
      }}
    >
      <div className="flex items-center justify-between gap-3 flex-wrap">
        <div className="flex items-center gap-2">
          <Lightbulb className="w-3.5 h-3.5" style={{ color: "#C9A84C" }} />
          <p className="text-[10px] uppercase tracking-widest text-[#555555]">
            Hints
          </p>
          <span className="text-[10px] text-[#555555]">
            {revealed} / {total}
          </span>
        </div>
        {hasMore && !submitted && (
          <button
            type="button"
            onClick={onReveal}
            className="text-[11px] font-semibold px-2.5 py-1 rounded-lg transition-opacity hover:opacity-90"
            style={{
              backgroundColor: "rgba(201,168,76,0.14)",
              color: "#C9A84C",
            }}
          >
            Reveal {nextLabel}
          </button>
        )}
        {hasMore && submitted && (
          <button
            type="button"
            onClick={onReveal}
            className="text-[11px] text-[#888888] underline underline-offset-2 hover:text-[#C9A84C]"
          >
            Reveal {nextLabel}
          </button>
        )}
      </div>
      {shown.length > 0 ? (
        <ol className="mt-3 space-y-2">
          {shown.map((h, i) => (
            <li key={i} className="flex items-start gap-2 text-[13px] text-[#F0F0F0]">
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
                  className="text-[10px] uppercase tracking-widest mb-0.5"
                  style={{ color: "#888888" }}
                >
                  {levelLabels[h.level] ?? h.level}
                </p>
                <p className="leading-relaxed">{h.text}</p>
              </div>
            </li>
          ))}
        </ol>
      ) : (
        <p className="mt-2 text-xs text-[#888888] leading-relaxed">
          Stuck? Reveal the first hint for a nudge — then try again before peeking further. Working the problem with a small push is more effective than just reading the full solution.
        </p>
      )}
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

function SaveStatusBanner({
  status,
  onRetry,
}: {
  status: "idle" | "saving" | "saved" | "error" | "unauthorized"
  onRetry: () => void
}) {
  if (status === "idle" || status === "saved") return null

  const palette =
    status === "saving"
      ? { border: "rgba(201,168,76,0.2)", bg: "rgba(201,168,76,0.04)", text: "#C9A84C" }
      : { border: "rgba(255,68,68,0.25)", bg: "rgba(255,68,68,0.06)", text: "#FF9966" }

  return (
    <div
      className="p-4 rounded-lg border flex items-center justify-between gap-3 flex-wrap"
      style={{ borderColor: palette.border, backgroundColor: palette.bg }}
      role="status"
      aria-live="polite"
    >
      <p className="text-xs leading-relaxed" style={{ color: palette.text }}>
        {status === "saving" && "Saving your session…"}
        {status === "error" && "We couldn't save this session. Your answers are still on screen — retry to persist them."}
        {status === "unauthorized" && (
          <>
            Your sign-in has expired. Sign in again to save this session — your answers are still on screen.
          </>
        )}
      </p>
      {status === "error" && (
        <button
          type="button"
          onClick={onRetry}
          className="px-3 py-1.5 rounded-md text-xs font-medium transition-colors"
          style={{
            backgroundColor: "rgba(201,168,76,0.12)",
            color: "#C9A84C",
            border: "1px solid rgba(201,168,76,0.3)",
          }}
        >
          Retry save
        </button>
      )}
      {status === "unauthorized" && (
        <Link
          href="/login"
          className="px-3 py-1.5 rounded-md text-xs font-medium transition-colors"
          style={{
            backgroundColor: "rgba(201,168,76,0.12)",
            color: "#C9A84C",
            border: "1px solid rgba(201,168,76,0.3)",
          }}
        >
          Sign in
        </Link>
      )}
    </div>
  )
}

// --- Results-screen helpers ---

type FocusArea = { subtopic: string; count: number; topic: string }

function computeFocusAreas(
  questions: SessionQuestion[],
  states: QuestionState[],
): FocusArea[] {
  const misses: Record<string, FocusArea> = {}
  questions.forEach((q, i) => {
    const s = states[i]
    if (!s.submitted || isQuestionCorrect(q, s)) return
    const key = q.subtopic || q.topic
    if (!misses[key]) misses[key] = { subtopic: key, count: 0, topic: q.topic }
    misses[key].count++
  })
  return Object.values(misses)
    .sort((a, b) => b.count - a.count)
    .slice(0, 3)
}

function computeCalibrationInsight(
  questions: SessionQuestion[],
  states: QuestionState[],
) {
  let highConfWrong = 0
  let lowConfRight = 0
  states.forEach((s, i) => {
    if (!s.submitted) return
    const correct = isQuestionCorrect(questions[i], s)
    if (s.confidence === "high" && !correct) highConfWrong++
    if (s.confidence === "low" && correct) lowConfRight++
  })
  return { highConfWrong, lowConfRight }
}

function sessionPerformanceMessage(accuracy: number): string {
  if (accuracy === 100) return "Perfect session."
  if (accuracy >= 80) return "Strong work. These concepts are consolidating."
  if (accuracy >= 60) return "Good attempt. Targeted review will sharpen this."
  if (accuracy >= 40) return "There's signal here. Study your misses before retaking."
  return "This topic needs dedicated study time. Start with the chapter."
}

export default function SessionClient({
  slug,
  topic,
  section,
  questions,
  skillLevel,
  skillAttempts,
}: SessionClientProps) {
  const router = useRouter()
  const [currentIdx, setCurrentIdx] = useState(0)
  // AI tutor drawer — per-question Claude explainer. Opens on the
  // current question's ID; closing keeps the conversation, switching
  // questions resets it (handled inside TutorDrawer).
  const [tutorOpen, setTutorOpen] = useState(false)
  const [rebuilding, setRebuilding] = useState(false)
  const [rebuildError, setRebuildError] = useState<string | null>(null)

  const isMixedReview = slug === "custom" && topic.toLowerCase().startsWith("mixed review")

  async function handleRebuildMix() {
    if (rebuilding) return
    setRebuilding(true)
    setRebuildError(null)
    try {
      // No chapterSlug — the student is already in the results screen
      // where we can't recover it from the URL. Global mix still pulls
      // from completed chapters + review queue + misses, which is what
      // "Retake" should deliver anyway: a fresh interleaved sample.
      const res = await fetch("/api/mixed-review", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ count: questions.length || 10 }),
      })
      if (!res.ok) {
        const j = (await res.json().catch(() => ({}))) as { error?: string }
        throw new Error(j.error ?? "Couldn't build a new mix right now.")
      }
      const body = (await res.json()) as {
        ids?: string[]
        label?: string
        section?: string
      }
      if (!body.ids || body.ids.length === 0) {
        throw new Error("Not enough practice history to mix right now.")
      }
      const url =
        `/practice/session/custom?ids=${encodeURIComponent(body.ids.join(","))}` +
        `&topic=${encodeURIComponent(body.label ?? "Mixed Review")}` +
        (body.section ? `&section=${encodeURIComponent(body.section)}` : "")
      router.push(url)
    } catch (e) {
      setRebuildError(e instanceof Error ? e.message : "Something went wrong")
      setRebuilding(false)
    }
  }

  const [states, setStates] = useState<QuestionState[]>(() =>
    questions.map((q) => ({
      selected: null,
      twoPartSelections: q.twoPartColumns ? q.twoPartColumns.map(() => null) : undefined,
      submitted: false,
      elapsedMs: 0,
      hintsRevealed: 0,
      confidence: null,
      firstInteractionMs: null,
    }))
  )
  const [sessionStart] = useState(() => Date.now())
  const [questionStart, setQuestionStart] = useState(() => Date.now())
  const [now, setNow] = useState(() => Date.now())
  const [showResults, setShowResults] = useState(false)
  const [saveStatus, setSaveStatus] = useState<
    "idle" | "saving" | "saved" | "error" | "unauthorized"
  >("idle")

  // Tick the timer once a second for the header readouts.
  useEffect(() => {
    const id = window.setInterval(() => setNow(Date.now()), 1000)
    return () => window.clearInterval(id)
  }, [])

  const saveSession = async () => {
    setSaveStatus("saving")
    const deviceType = detectDeviceType()
    const attempts = questions.map((q, i) => ({
      questionId: q.id,
      section: q.section,
      topic: q.topic,
      subtopic: q.subtopic,
      difficulty: q.difficulty,
      questionType: q.type,
      selectedAnswer: states[i].selected,
      isCorrect: isQuestionCorrect(q, states[i]),
      timeSpentMs: states[i].elapsedMs,
      confidence: states[i].confidence,
      hintsRevealed: states[i].hintsRevealed,
      firstInteractionMs: states[i].firstInteractionMs,
      deviceType,
    }))
    const answeredTotal = states.filter((s) => s.submitted).length
    const correctTotal = states.reduce(
      (acc, s, i) => (isQuestionCorrect(questions[i], s) ? acc + 1 : acc),
      0
    )
    try {
      const res = await fetch("/api/practice-sessions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          slug,
          topic,
          section,
          totalQuestions: questions.length,
          correctCount: correctTotal,
          accuracy:
            answeredTotal === 0 ? 0 : Math.round((correctTotal / answeredTotal) * 100),
          totalTimeMs: Date.now() - sessionStart,
          attempts,
        }),
      })
      if (res.ok) setSaveStatus("saved")
      else if (res.status === 401) setSaveStatus("unauthorized")
      else setSaveStatus("error")
    } catch {
      setSaveStatus("error")
    }
  }

  // Persist the session results to the database when the results screen shows.
  useEffect(() => {
    if (!showResults || saveStatus !== "idle") return
    saveSession()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showResults])

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

  /** Stamp the first-interaction latency on the current question if it
   *  hasn't been set yet. Every handler that represents a deliberate
   *  student action (option click, 2PA cell click, hint reveal,
   *  confidence pick) calls this so the field captures "time to first
   *  engagement with the item," not "time to submit." */
  function markFirstInteraction(curr: QuestionState): QuestionState {
    if (curr.firstInteractionMs !== null) return curr
    return { ...curr, firstInteractionMs: Date.now() - questionStart }
  }

  function handleSelect(index: number) {
    if (currentState.submitted) return
    setStates((prev) => {
      const next = prev.slice()
      next[currentIdx] = markFirstInteraction({
        ...next[currentIdx],
        selected: index,
      })
      return next
    })
  }

  function handleTwoPartSelect(colIdx: number, rowIdx: number) {
    if (currentState.submitted) return
    setStates((prev) => {
      const next = prev.slice()
      const selections = [...(next[currentIdx].twoPartSelections ?? [])]
      selections[colIdx] = rowIdx
      next[currentIdx] = markFirstInteraction({
        ...next[currentIdx],
        twoPartSelections: selections,
      })
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

  function handleConfidence(level: Confidence) {
    if (currentState.submitted) return
    setStates((prev) => {
      const next = prev.slice()
      const curr = next[currentIdx]
      next[currentIdx] = markFirstInteraction({
        ...curr,
        confidence: curr.confidence === level ? null : level,
      })
      return next
    })
  }

  function handleRevealHint() {
    const available = current.hints?.length ?? 0
    if (available === 0) return
    setStates((prev) => {
      const next = prev.slice()
      const curr = next[currentIdx]
      if (curr.hintsRevealed >= available) return prev
      next[currentIdx] = markFirstInteraction({
        ...curr,
        hintsRevealed: curr.hintsRevealed + 1,
      })
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

  // Keyboard shortcuts — tighter flow for power users. 1-5 selects an
  // option (A-E), Space/Enter submits when ready or advances once submitted,
  // N / → moves to next. Ignored while typing, in results view, or during
  // Two-Part questions (the grid is radio-based and 1-5 would be ambiguous).
  //
  // Implementation: handlers + per-key state are stashed in a ref that
  // every render refreshes. The keydown listener reads the ref each
  // event, so it sees the latest closures without needing handleNext /
  // handlePrev / handleSelect / handleSubmit in the effect's dep array.
  // This satisfies react-hooks/exhaustive-deps without forcing every
  // handler to be a useCallback (most of them allocate fresh objects
  // anyway via the state setters).
  const keyHandlersRef = useRef({
    handleNext,
    handlePrev,
    handleSelect,
    handleSubmit,
    current,
    currentState,
    currentIdx,
    isTwoPart,
  })
  keyHandlersRef.current = {
    handleNext,
    handlePrev,
    handleSelect,
    handleSubmit,
    current,
    currentState,
    currentIdx,
    isTwoPart,
  }
  useEffect(() => {
    if (showResults) return
    function onKey(event: KeyboardEvent) {
      if (shouldIgnoreKeyboardShortcut(event)) return
      const h = keyHandlersRef.current
      // Option select (1-5). Skip for Two-Part — its grid needs the mouse.
      if (!h.isTwoPart) {
        const idx = digitKeyToOptionIndex(event.key, h.current.options.length)
        if (idx !== null) {
          event.preventDefault()
          h.handleSelect(idx)
          return
        }
      }
      // Space or Enter: submit if we can, else advance if already submitted.
      if (event.key === " " || event.key === "Enter") {
        if (!h.currentState.submitted && canSubmit(h.current, h.currentState)) {
          event.preventDefault()
          h.handleSubmit()
          return
        }
        if (h.currentState.submitted) {
          event.preventDefault()
          h.handleNext()
          return
        }
      }
      // Explicit next: "n" or ArrowRight (once submitted).
      if (
        (event.key === "n" || event.key === "N" || event.key === "ArrowRight") &&
        h.currentState.submitted
      ) {
        event.preventDefault()
        h.handleNext()
        return
      }
      // Previous: ArrowLeft (only when submitted — avoid accidentally
      // bailing out of an unanswered question).
      if (event.key === "ArrowLeft" && h.currentIdx > 0) {
        event.preventDefault()
        h.handlePrev()
      }
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [showResults])

  if (showResults) {
    const accuracy = answeredCount === 0 ? 0 : Math.round((correctCount / answeredCount) * 100)
    const totalTime = now - sessionStart
    const avgTimeMs = answeredCount === 0 ? 0 : Math.round(totalTime / answeredCount)
    const focusAreas = computeFocusAreas(questions, states)
    const calibration = computeCalibrationInsight(questions, states)
    const chapterSlug = TOPIC_TO_CHAPTER[topic]

    // Smart primary CTA based on performance
    let primaryLabel: string
    let primaryHref: string
    if (accuracy >= 80) {
      primaryLabel = "Back to Practice"
      primaryHref = "/practice"
    } else if (accuracy >= 50) {
      primaryLabel = "Open Error Log"
      primaryHref = "/error-log"
    } else {
      primaryLabel = chapterSlug ? "Review the Chapter" : "Browse Chapters"
      primaryHref = chapterSlug ? `/chapters/${chapterSlug}` : "/chapters"
    }

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

        <SaveStatusBanner status={saveStatus} onRetry={saveSession} />

        {/* Stats */}
        <div
          className="p-6 rounded-xl border"
          style={{
            borderColor: "rgba(201,168,76,0.2)",
            backgroundColor: "rgba(201,168,76,0.04)",
          }}
        >
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
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
            <div>
              <p className="text-[10px] uppercase tracking-widest text-[#555555]">Avg / question</p>
              <p className="text-3xl font-bold mt-2 text-[#F0F0F0]">
                {answeredCount > 0 ? formatDuration(avgTimeMs) : "—"}
              </p>
            </div>
          </div>
        </div>

        {/* Focus areas — derived from misses in this session */}
        {focusAreas.length > 0 && (
          <div
            className="p-5 rounded-xl border"
            style={{
              borderColor: "rgba(255,68,68,0.12)",
              backgroundColor: "rgba(255,68,68,0.03)",
            }}
          >
            <p className="text-[10px] uppercase tracking-widest text-[#555555] mb-3">
              Focus on these next
            </p>
            <div className="flex flex-wrap gap-2">
              {focusAreas.map(({ subtopic, count, topic: t }) => {
                const slug = TOPIC_TO_CHAPTER[t]
                const href = slug ? `/chapters/${slug}` : "/chapters"
                return (
                  <Link
                    key={subtopic}
                    href={href}
                    className="inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-white/[0.08] bg-[#111111] hover:bg-white/[0.04] transition-colors"
                  >
                    <span className="text-sm text-[#F0F0F0]">{subtopic}</span>
                    <span
                      className="text-[11px] font-semibold px-1.5 py-0.5 rounded"
                      style={{
                        backgroundColor: "rgba(255,68,68,0.10)",
                        color: "#FF4444",
                      }}
                    >
                      {count} {count === 1 ? "miss" : "misses"}
                    </span>
                  </Link>
                )
              })}
            </div>
            {calibration.highConfWrong >= 2 && (
              <p className="text-xs text-[#888888] mt-3 leading-relaxed">
                <span style={{ color: "#FF9966" }}>{calibration.highConfWrong} questions</span> where your confidence was high but the answer was wrong — these are the most instructive to review.
              </p>
            )}
          </div>
        )}

        {/* Calibration insight when no misses to show as focus areas */}
        {focusAreas.length === 0 && calibration.lowConfRight >= 2 && (
          <p className="text-xs text-[#888888] leading-relaxed px-1">
            You got <span style={{ color: "#3ECF8E" }}>{calibration.lowConfRight} questions</span> right despite low confidence — keep drilling to solidify that knowledge.
          </p>
        )}

        {/* Question review grid */}
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
                        Q{i + 1} · {q.subtopic} ·{" "}
                        <span style={{ color: "#C9A84C" }}>{q.difficulty}</span>
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

        {/* Smart next action */}
        <div className="space-y-3">
          <p className="text-xs text-center text-[#555555]">
            {sessionPerformanceMessage(accuracy)}
          </p>
          <div className="flex gap-3 flex-wrap">
            <Link
              href={primaryHref}
              className="flex-1 text-center px-4 py-2.5 rounded-xl text-sm font-semibold transition-all hover:opacity-90"
              style={{ backgroundColor: "#C9A84C", color: "#0A0A0A" }}
            >
              {primaryLabel}
            </Link>
            {isMixedReview ? (
              <button
                type="button"
                onClick={handleRebuildMix}
                disabled={rebuilding}
                className="flex-1 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all border border-white/[0.08] text-[#F0F0F0] hover:bg-white/[0.04] disabled:opacity-60"
              >
                {rebuilding ? "Building new mix…" : "Build new mix"}
              </button>
            ) : (
              <Link
                href={`/practice/session/${slug}`}
                className="flex-1 text-center px-4 py-2.5 rounded-xl text-sm font-semibold transition-all border border-white/[0.08] text-[#F0F0F0] hover:bg-white/[0.04]"
              >
                Retake
              </Link>
            )}
          </div>
          {rebuildError && (
            <p className="text-xs text-center" style={{ color: "#FF4444" }}>
              {rebuildError}
            </p>
          )}
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
              Question{" "}
              <span className="font-display tabular-nums text-[#C0C0C0]">
                {currentIdx + 1}
              </span>{" "}
              of{" "}
              <span className="font-display tabular-nums text-[#C0C0C0]">
                {total}
              </span>{" "}
              · <span style={{ color: "#C9A84C" }}>{current.difficulty}</span> ·{" "}
              {current.type}
              {/* Adaptive level pill — visible only when there's enough
                  signal. Shows the topic tier ("Foundation" / "Building"
                  / "Proficient" / "Advanced") so the student knows the
                  session is being ordered for their current level. */}
              {typeof skillLevel === "number" &&
                typeof skillAttempts === "number" &&
                skillAttempts >= MIN_ATTEMPTS_FOR_ADAPTIVE && (
                  <span
                    className="ml-2 inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] uppercase tracking-[0.16em] font-semibold"
                    style={{
                      backgroundColor: "rgba(95,168,255,0.10)",
                      color: "#5FA8FF",
                    }}
                    title={`Adaptive ordering · ${skillAttempts} attempts on this topic`}
                  >
                    {levelLabel(skillLevel)}
                  </span>
                )}
            </p>
          </div>
          <div className="flex items-center gap-2 text-sm text-[#888888]">
            <PacingBadge
              section={section}
              elapsedMs={
                currentState.submitted
                  ? currentState.elapsedMs
                  : now - questionStart
              }
            />
            <div className="inline-flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              <span className="font-mono">{formatDuration(sessionElapsed)}</span>
            </div>
            {/* AI tutor — always visible. The button is small + gold-
                accented; the drawer slides in from the right and
                preserves the question's full context server-side. */}
            <button
              onClick={() => setTutorOpen(true)}
              className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-[11px] font-semibold uppercase tracking-[0.18em] border transition-colors hover:bg-white/[0.04]"
              style={{
                borderColor: "rgba(201,168,76,0.28)",
                color: "#C9A84C",
                backgroundColor: "rgba(201,168,76,0.06)",
              }}
              aria-label="Open AI tutor"
              title="Ask the tutor about this question"
            >
              <Sparkles className="w-3 h-3" aria-hidden />
              Tutor
            </button>
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

      {/* Body: passage (if grouped) + question. Mobile: stack
          (passage above question); desktop: side-by-side. */}
      <div className={hasContext ? "grid grid-cols-1 lg:grid-cols-2 gap-6" : ""}>
        {hasContext && current.context && <ContextPanel text={current.context} />}

        <div className="space-y-6">
          <div className="p-6 rounded-xl border border-white/[0.08] bg-[#111111]">
            {hasMethodCard(current.type) && (
              <DIMethodCardBanner questionType={current.type} />
            )}
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

            <ConfidencePanel
              value={currentState.confidence}
              submitted={currentState.submitted}
              wasCorrect={isQuestionCorrect(current, currentState)}
              onSelect={handleConfidence}
            />

            {current.hints && current.hints.length > 0 && (
              <HintPanel
                hints={current.hints}
                revealed={currentState.hintsRevealed}
                onReveal={handleRevealHint}
                submitted={currentState.submitted}
              />
            )}

            {currentState.submitted && current.explanation && (
              <div
                className="mt-5 p-4 rounded-lg border transition-all duration-150 animate-in fade-in-0 zoom-in-95"
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

            {currentState.submitted && (
              <>
                <PostSubmitUnderstandingRow
                  key={`understanding-${current.id}`}
                  questionId={current.id}
                />
                <div className="mt-3 flex items-center justify-end">
                  <SaveForReviewButton
                    key={`save-${current.id}`}
                    questionId={current.id}
                    initialSaved={false}
                    variant="ghost"
                  />
                </div>
              </>
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
          {!isTwoPart && (
            <p className="text-[11px] text-[#555555] mt-3 text-center">
              Shortcuts: <kbd className="px-1 rounded bg-white/[0.06] font-mono">1</kbd>–<kbd className="px-1 rounded bg-white/[0.06] font-mono">{Math.min(current.options.length, 5)}</kbd> select · <kbd className="px-1 rounded bg-white/[0.06] font-mono">space</kbd> {currentState.submitted ? "next" : "submit"} · <kbd className="px-1 rounded bg-white/[0.06] font-mono">←</kbd>/<kbd className="px-1 rounded bg-white/[0.06] font-mono">→</kbd> nav
            </p>
          )}
        </div>
      </div>
      {/* AI tutor drawer — out-of-flow; rendered last so its overlay
          stacks above the rest of the session UI. */}
      <TutorDrawer
        questionId={current?.id ?? null}
        open={tutorOpen}
        onClose={() => setTutorOpen(false)}
      />
    </div>
  )
}
