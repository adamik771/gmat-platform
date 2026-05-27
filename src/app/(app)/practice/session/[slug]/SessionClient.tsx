"use client"

import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import {
  AlertTriangle,
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Check,
  ChevronDown,
  Clock,
  Lightbulb,
  Sparkles,
  Star,
  Tags,
  X,
} from "lucide-react"
import { DI_METHOD_CARDS, hasMethodCard } from "@/lib/di-method-cards"
import { TOPIC_TO_CHAPTER } from "@/lib/topic-chapter-map"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import PacingBadge from "@/components/shared/PacingBadge"
import SaveForReviewButton from "@/components/review/SaveForReviewButton"
import TutorDrawer from "@/components/tutor/TutorDrawer"
import { applySessionAttempts, levelLabel, MIN_ATTEMPTS_FOR_ADAPTIVE } from "@/lib/topic-skill"
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

export interface WeakTopicHint {
  topic: string
  practiceSlug: string
  accuracy: number
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
  /** Server-computed weakest topic from practice history. Shown on the
   *  completion screen when accuracy is strong — directs students to
   *  their highest-leverage next session instead of a generic CTA. */
  weakestTopic?: WeakTopicHint
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

interface SessionInsight {
  label: string
  observation: string
  nextStep: string
}

function computeInsight(
  questions: SessionQuestion[],
  states: QuestionState[],
  section: SessionQuestion["section"]
): SessionInsight | null {
  const answered = states
    .map((s, i) => ({ s, q: questions[i] }))
    .filter(({ s }) => s.submitted)

  if (answered.length < 3) return null

  const targetMs = section === "Verbal" ? 90_000 : 120_000
  const avgMs = answered.reduce((sum, { s }) => sum + s.elapsedMs, 0) / answered.length
  const accuracy = answered.filter(({ s, q }) => isQuestionCorrect(q, s)).length / answered.length

  const advanced = answered.filter(({ q }) => q.difficulty === "Advanced")
  const advAcc =
    advanced.length >= 2
      ? advanced.filter(({ s, q }) => isQuestionCorrect(q, s)).length / advanced.length
      : null

  const beginner = answered.filter(({ q }) => q.difficulty === "Beginner")
  const begAcc =
    beginner.length >= 2
      ? beginner.filter(({ s, q }) => isQuestionCorrect(q, s)).length / beginner.length
      : null

  const slowCount = answered.filter(({ s }) => s.elapsedMs > targetMs * 1.5).length
  const skipped = states.filter((s) => !s.submitted).length
  const accPct = Math.round(accuracy * 100)

  if (avgMs > targetMs * 1.25 && accuracy >= 0.7) {
    return {
      label: "Pacing",
      observation: `Accuracy is strong at ${accPct}%, but your average of ${formatDuration(avgMs)} per question is above the GMAT pace. You're trading time for correctness — a pattern that compounds under full-test conditions.`,
      nextStep: "Practice the same topic with a strict 2-minute cap to build faster pattern recognition.",
    }
  }

  if (avgMs < targetMs * 0.65 && accuracy < 0.6) {
    return {
      label: "Pacing",
      observation: `You moved through questions at ${formatDuration(avgMs)} average — faster than GMAT pace — but accuracy at ${accPct}% reflects the cost. Speed without a process produces noise.`,
      nextStep: "Slow to 2 minutes per question and narrate your approach before selecting.",
    }
  }

  if (accuracy >= 0.8 && avgMs <= targetMs * 1.1) {
    if (advAcc !== null && advAcc < 0.5) {
      return {
        label: "Skill ceiling",
        observation: `Efficient on medium difficulty, but Advanced questions dropped to ${Math.round(advAcc * 100)}%. That gap is your ceiling — the GMAT rewards students who hold accuracy when the premises get harder.`,
        nextStep: "Filter to Advanced-only questions on this topic for your next session.",
      }
    }
    return {
      label: "Solid session",
      observation: `${accPct}% accuracy at ${formatDuration(avgMs)} average — within GMAT range. The question is whether this holds under timed test conditions with compounding fatigue.`,
      nextStep: "Take a mixed-difficulty session or a timed mock section to pressure-test the skill.",
    }
  }

  if (slowCount >= 2 && accuracy < 0.65) {
    const thresholdLabel = section === "Verbal" ? "2:15" : "3:00"
    return {
      label: "Recognition gaps",
      observation: `${slowCount} questions took over ${thresholdLabel} — a sign of unfamiliar problem structures, not just pacing. Recognition comes from volume; you haven't seen enough of this setup yet.`,
      nextStep: "Study the worked explanations on the questions you labored over, then retry similar ones.",
    }
  }

  if (begAcc !== null && begAcc >= 0.8 && advAcc !== null && advAcc < 0.45) {
    return {
      label: "Foundation solid, ceiling low",
      observation: `Beginner questions at ${Math.round(begAcc * 100)}% — foundation is there. Advanced questions at ${Math.round(advAcc * 100)}% — the harder premises aren't landing yet.`,
      nextStep: "Review the chapter's harder worked examples before attempting Advanced questions again.",
    }
  }

  if (skipped >= Math.ceil(questions.length * 0.3)) {
    return {
      label: "Coverage",
      observation: `${skipped} of ${questions.length} questions left unanswered. Skipping is fine as a test tactic, but every skipped question is a missed data point for your weak-area map.`,
      nextStep: "Go through the skipped questions in review mode — read the explanation without timing pressure.",
    }
  }

  return null
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

export default function SessionClient({
  slug,
  topic,
  section,
  questions,
  skillLevel,
  skillAttempts,
  weakestTopic,
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
  const [savedSessionId, setSavedSessionId] = useState<string | null>(null)
  const [showAllReview, setShowAllReview] = useState(false)

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
      if (res.ok) {
        setSaveStatus("saved")
        try {
          const json = (await res.json()) as { sessionId?: string }
          if (json.sessionId) setSavedSessionId(json.sessionId)
        } catch {
          // Body parse failed — save still succeeded; the session-id-
          // dependent CTA will simply not render.
        }
      } else if (res.status === 401) setSaveStatus("unauthorized")
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

    // Per-question pairs for insight panels (submitted only)
    const answeredPairs = questions
      .map((q, i) => ({ q, state: states[i], correct: isQuestionCorrect(q, states[i]) }))
      .filter((p) => p.state.submitted)

    // Accuracy broken down by difficulty level
    const diffLevels = ["Beginner", "Intermediate", "Advanced"] as const
    const difficultyBreakdown = diffLevels
      .map((diff) => {
        const qs = answeredPairs.filter((p) => p.q.difficulty === diff)
        return { diff, total: qs.length, correct: qs.filter((p) => p.correct).length }
      })
      .filter((d) => d.total > 0)

    // Average time on correct vs incorrect — reveals overthinking / rushing patterns
    const correctPairs = answeredPairs.filter((p) => p.correct)
    const incorrectPairs = answeredPairs.filter((p) => !p.correct)
    const avgCorrectMs =
      correctPairs.length >= 2
        ? Math.round(correctPairs.reduce((s, p) => s + p.state.elapsedMs, 0) / correctPairs.length)
        : null
    const avgIncorrectMs =
      incorrectPairs.length >= 2
        ? Math.round(incorrectPairs.reduce((s, p) => s + p.state.elapsedMs, 0) / incorrectPairs.length)
        : null

    // One-sentence performance read — specific when the data supports it
    let headline = "Session complete"
    if (answeredCount > 0) {
      if (accuracy >= 85) {
        headline = correctCount === total ? "Clean sweep." : "Strong session."
      } else if (accuracy >= 70) {
        const weakDiff = difficultyBreakdown.find((d) => d.total >= 2 && d.correct / d.total < 0.6)
        headline = weakDiff
          ? `Solid overall — ${weakDiff.diff.toLowerCase()} questions are the gap.`
          : "Solid session."
      } else if (accuracy >= 50) {
        const strongDiff = difficultyBreakdown.find(
          (d) => d.total >= 2 && d.correct / d.total >= 0.85
        )
        headline = strongDiff
          ? `${strongDiff.diff} questions are solid — push into the harder ones.`
          : "Work in progress."
      } else {
        headline = "The foundation needs more work."
      }
    }

    // Pacing note — only surfaces when the ratio is meaningfully off
    let pacingNote: string | null = null
    if (avgCorrectMs && avgIncorrectMs) {
      const ratio = avgIncorrectMs / avgCorrectMs
      if (ratio > 1.4) {
        pacingNote = `You spent ${formatDuration(avgIncorrectMs)} on average on wrong answers vs ${formatDuration(avgCorrectMs)} on correct ones. Staying too long on an uncertain question is a pattern worth breaking — consider cutting earlier.`
      } else if (ratio < 0.72) {
        pacingNote = `Wrong answers averaged ${formatDuration(avgIncorrectMs)} — faster than correct ones at ${formatDuration(avgCorrectMs)}. Slowing down on uncertain questions may improve accuracy.`
      }
    }

    // Next-step recommendation keyed to accuracy band. When the student
    // performed well and the server identified a weak topic, name it
    // directly — eliminates the "which area?" follow-up navigation.
    const nextStepNote =
      accuracy < 60
        ? "Accuracy below 60% signals a concept gap. Revisiting the chapter before more practice compounds better."
        : accuracy < 78
        ? "Accuracy is building. One more focused session on this topic before moving on."
        : weakestTopic
        ? `This topic is solid. Based on your practice history, ${weakestTopic.topic} is your weakest area right now — ${Math.round(weakestTopic.accuracy * 100)}% accuracy. That's where the points are.`
        : "This topic is solid. Investing time in a weaker area is the highest-leverage move now."

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
          <h1 className="text-2xl font-bold text-[#F0F0F0] mt-3">{headline}</h1>
          <p className="text-sm text-[#555555] mt-1">
            {topic} · {section}
          </p>
        </div>

        <SaveStatusBanner status={saveStatus} onRetry={saveSession} />

        {/* Core metrics + insight breakdown */}
        <div
          className="p-6 rounded-xl border"
          style={{
            borderColor: "rgba(201,168,76,0.2)",
            backgroundColor: "rgba(201,168,76,0.04)",
          }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
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

          {/* Difficulty breakdown — only when questions span 2+ levels */}
          {difficultyBreakdown.length >= 2 && (
            <div className="mt-6 pt-5 border-t border-white/[0.06]">
              <p className="text-[10px] uppercase tracking-widest text-[#555555] mb-3">
                By difficulty
              </p>
              <div className="space-y-2.5">
                {difficultyBreakdown.map(({ diff, total: t, correct: c }) => {
                  const pct = t === 0 ? 0 : Math.round((c / t) * 100)
                  const isWeak = t >= 2 && pct < 60
                  const barColor = isWeak ? "#FF6B6B" : pct >= 80 ? "#3ECF8E" : "#C9A84C"
                  return (
                    <div key={diff} className="flex items-center gap-3">
                      <span
                        className="text-xs w-24 flex-shrink-0"
                        style={{ color: isWeak ? "#FF6B6B" : "#888888" }}
                      >
                        {diff}
                      </span>
                      <div className="flex-1 h-1.5 rounded-full bg-white/[0.06] overflow-hidden">
                        <div
                          className="h-full rounded-full transition-all duration-500"
                          style={{ width: `${pct}%`, backgroundColor: barColor }}
                        />
                      </div>
                      <span
                        className="text-[11px] tabular-nums w-16 text-right flex-shrink-0"
                        style={{ color: "#888888" }}
                      >
                        {c}/{t} · {pct}%
                      </span>
                    </div>
                  )
                })}
              </div>
            </div>
          )}

          {/* Pacing note — only surfaces when ratio is meaningfully off */}
          {pacingNote && (
            <div className="mt-5 pt-4 border-t border-white/[0.06] flex items-start gap-2.5">
              <Clock
                className="w-3.5 h-3.5 flex-shrink-0 mt-0.5"
                style={{ color: "#888888" }}
              />
              <p className="text-[12px] text-[#888888] leading-relaxed">{pacingNote}</p>
            </div>
          )}

          {/* Topic skill level track — shows 4-tier progress on this topic
              and whether this session projected a tier advance. Requires at
              least one prior session so new students don't see a half-
              calibrated label before there is enough signal. */}
          {typeof skillLevel === "number" &&
            typeof skillAttempts === "number" &&
            skillAttempts > 0 &&
            (() => {
              const TIERS = [
                { id: "Foundation", lo: 0, hi: 0.35 },
                { id: "Building",   lo: 0.35, hi: 0.65 },
                { id: "Proficient", lo: 0.65, hi: 0.85 },
                { id: "Advanced",   lo: 0.85, hi: 1.001 },
              ]

              // Project the level this session will produce — uses the same
              // formula the server applies on save, so the label is accurate.
              const updatedMap = applySessionAttempts(
                { [slug]: { level: skillLevel, attempts: skillAttempts, updatedAt: 0 } },
                answeredPairs.map(({ q, correct, state }) => ({
                  slug,
                  section,
                  difficulty: q.difficulty,
                  isCorrect: correct,
                  timeSpentMs: state.elapsedMs,
                }))
              )
              const projectedLevel = updatedMap[slug]?.level ?? skillLevel

              const tierIdx = (lvl: number) =>
                Math.max(0, TIERS.findIndex((t) => lvl < t.hi))
              const beforeIdx = tierIdx(skillLevel)
              const afterIdx  = tierIdx(projectedLevel)
              const movedUp   = afterIdx > beforeIdx

              const hasEnoughData = skillAttempts >= MIN_ATTEMPTS_FOR_ADAPTIVE

              // Fine-grained position within the current tier (0–100)
              const bt = TIERS[beforeIdx]
              const tierPct = Math.round(
                Math.min(100, Math.max(0, ((skillLevel - bt.lo) / (bt.hi - bt.lo)) * 100))
              )

              return (
                <div className="mt-6 pt-5 border-t border-white/[0.06]">
                  <div className="flex items-center justify-between mb-3">
                    <p className="text-[10px] uppercase tracking-widest text-[#555555]">
                      {topic} level
                    </p>
                    {!hasEnoughData && (
                      <p className="text-[10px] text-[#555555]">
                        calibrating &middot; {skillAttempts} attempt{skillAttempts === 1 ? "" : "s"}
                      </p>
                    )}
                    {hasEnoughData && movedUp && (
                      <p className="text-[10px] font-semibold" style={{ color: "#3ECF8E" }}>
                        {TIERS[beforeIdx].id} &rarr; {TIERS[afterIdx].id}
                      </p>
                    )}
                  </div>

                  <div className="flex items-center">
                    {TIERS.map((tier, i) => {
                      const isCurrent    = i === beforeIdx
                      const isPast       = i < beforeIdx
                      const isProjected  = movedUp && i === afterIdx
                      return (
                        <div key={tier.id} className="flex items-center flex-1 min-w-0">
                          {i > 0 && (
                            <div
                              className="flex-none h-px w-2"
                              style={{
                                backgroundColor: isPast
                                  ? "rgba(201,168,76,0.3)"
                                  : "rgba(255,255,255,0.06)",
                              }}
                            />
                          )}
                          <div
                            className="flex-1 text-center py-1 rounded text-[9px] font-semibold uppercase tracking-wide truncate"
                            style={{
                              color: isProjected
                                ? "#3ECF8E"
                                : isCurrent
                                ? "#0A0A0A"
                                : isPast
                                ? "rgba(201,168,76,0.45)"
                                : "#383838",
                              backgroundColor: isProjected
                                ? "rgba(62,207,142,0.12)"
                                : isCurrent
                                ? "#C9A84C"
                                : isPast
                                ? "rgba(201,168,76,0.06)"
                                : "transparent",
                              border: isProjected
                                ? "1px solid rgba(62,207,142,0.25)"
                                : "1px solid transparent",
                            }}
                          >
                            {tier.id}
                          </div>
                        </div>
                      )
                    })}
                  </div>

                  {/* Fine-grained bar: position within the current tier.
                      Hidden when the tier just advanced (the "→ NewTier"
                      label is the signal; the bar would be misleading). */}
                  {hasEnoughData && !movedUp && (
                    <div className="mt-2 h-0.5 rounded-full bg-white/[0.05] overflow-hidden">
                      <div
                        className="h-full rounded-full"
                        style={{
                          width: `${Math.max(3, tierPct)}%`,
                          backgroundColor: "rgba(201,168,76,0.35)",
                        }}
                      />
                    </div>
                  )}
                </div>
              )
            })()}
        </div>

        {(() => {
          const insight = computeInsight(questions, states, section)
          if (!insight) return null
          return (
            <div className="p-5 rounded-xl border border-white/[0.08] bg-[#111111]">
              <p className="text-[10px] uppercase tracking-widest text-[#555555] mb-3">
                {insight.label}
              </p>
              <p className="text-sm text-[#C0C0C0] leading-relaxed">{insight.observation}</p>
              <div className="mt-3 pt-3 border-t border-white/[0.05] flex items-start gap-2">
                <ArrowRight className="w-3.5 h-3.5 flex-shrink-0 mt-0.5 text-[#555555]" />
                <p className="text-xs text-[#888888] leading-relaxed">{insight.nextStep}</p>
              </div>
            </div>
          )
        })()}

        {/* High-confidence misses — surfaces only when the student rated a question
            "high" and got it wrong. These are the most important mistakes in the
            session: the gap between felt certainty and actual error reveals a
            misconception, not just a knowledge gap. Reviewing them first is the
            highest-leverage post-session action. */}
        {(() => {
          const hcMisses = questions
            .map((q, i) => ({ q, state: states[i], idx: i }))
            .filter(
              ({ q, state }) =>
                state.submitted &&
                state.confidence === "high" &&
                !isQuestionCorrect(q, state)
            )
          if (hcMisses.length === 0) return null
          return (
            <div
              className="p-5 rounded-xl border"
              style={{
                borderColor: "rgba(255,153,102,0.22)",
                backgroundColor: "rgba(255,100,50,0.03)",
              }}
            >
              <p
                className="text-[10px] uppercase tracking-widest mb-1"
                style={{ color: "#FF9966" }}
              >
                High-confidence misses &middot; {hcMisses.length}
              </p>
              <p className="text-xs leading-relaxed mb-4" style={{ color: "#888888" }}>
                {hcMisses.length === 1
                  ? "You rated this question as high-confidence, then got it wrong."
                  : `You rated these ${hcMisses.length} questions as high-confidence, then got them wrong.`}{" "}
                That gap between certainty and error is the highest-signal data in a session — it points to a specific misconception, not a knowledge gap. Review {hcMisses.length === 1 ? "it" : "them"} before anything else.
              </p>
              <div className="space-y-2">
                {hcMisses.map(({ q, state, idx }) => (
                  <button
                    key={q.id}
                    onClick={() => {
                      goTo(idx)
                      setShowResults(false)
                    }}
                    className="w-full flex items-start gap-3 p-3 rounded-lg border text-left transition-colors hover:bg-white/[0.02] group"
                    style={{
                      borderColor: "rgba(255,153,102,0.12)",
                      backgroundColor: "rgba(255,68,68,0.025)",
                    }}
                  >
                    <div
                      className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: "rgba(255,68,68,0.1)" }}
                    >
                      <X className="w-3.5 h-3.5" style={{ color: "#FF4444" }} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs" style={{ color: "#888888" }}>
                        Q{idx + 1} &middot; {q.subtopic} &middot; {q.difficulty}
                      </p>
                      <p className="text-sm text-[#F0F0F0] truncate mt-0.5">
                        {q.prompt.replace(/\s+/g, " ").slice(0, 90)}
                      </p>
                      {state.selected !== null && (
                        <p
                          className="text-xs mt-1 truncate"
                          style={{ color: "rgba(255,153,102,0.75)" }}
                        >
                          You chose {letterFor(state.selected)}
                          {q.options[state.selected]
                            ? ` — ${q.options[state.selected].replace(/\s+/g, " ").slice(0, 55)}`
                            : ""}
                        </p>
                      )}
                    </div>
                    <ArrowRight
                      className="w-4 h-4 flex-shrink-0 mt-0.5 opacity-0 group-hover:opacity-100 transition-opacity"
                      style={{ color: "#FF9966" }}
                    />
                  </button>
                ))}
              </div>
            </div>
          )
        })()}

        {savedSessionId && answeredCount - correctCount > 0 && (
          <Link
            href={`/error-log?session_id=${savedSessionId}`}
            className="group flex items-center justify-between gap-4 p-5 rounded-xl border transition-colors hover:border-[rgba(201,168,76,0.35)]"
            style={{
              borderColor: "rgba(201,168,76,0.18)",
              backgroundColor: "#0D0D0D",
            }}
          >
            <div className="flex items-start gap-3 min-w-0">
              <div
                className="flex items-center justify-center w-9 h-9 rounded-lg flex-shrink-0"
                style={{ backgroundColor: "rgba(201,168,76,0.1)" }}
              >
                <Tags className="w-4 h-4" style={{ color: "#C9A84C" }} />
              </div>
              <div className="min-w-0">
                <p className="text-sm font-semibold text-[#F0F0F0]">
                  Tag {answeredCount - correctCount} mistake
                  {answeredCount - correctCount === 1 ? "" : "s"} from this session
                </p>
                <p className="text-xs text-[#888888] mt-0.5">
                  Classify the failure mode now while the question is fresh — that&apos;s
                  the input the adaptive plan needs.
                </p>
              </div>
            </div>
            <ArrowRight
              className="w-4 h-4 flex-shrink-0 transition-transform group-hover:translate-x-0.5"
              style={{ color: "#C9A84C" }}
            />
          </Link>
        )}

        {/* What to do next — renders the nextStepNote guidance as direct CTA
            buttons. The text was computed above but never surfaced in the UI;
            without a button, students read the advice and then navigate away
            manually with no clear path. Primary action depends on accuracy
            band: review the chapter (low), practice again (mid), study plan
            (high). Chapter link is only shown when the topic maps to one. */}
        {(() => {
          const chapterSlug = TOPIC_TO_CHAPTER[topic]
          const low = accuracy < 60
          const mid = accuracy >= 60 && accuracy < 78

          const primaryAction = low && chapterSlug
            ? { label: `Review ${topic} chapter`, href: `/chapters/${chapterSlug}` }
            : mid
            ? { label: `Practice ${topic} again`, href: `/practice/session/${slug}` }
            : { label: "View your study plan", href: "/study-plan" }

          const secondaryAction =
            low
              ? { label: "Practice again", href: `/practice/session/${slug}` }
              : mid && chapterSlug
              ? { label: "Review the chapter", href: `/chapters/${chapterSlug}` }
              : { label: `Practice ${topic} again`, href: `/practice/session/${slug}` }

          return (
            <div
              className="p-5 rounded-xl border border-white/[0.08]"
              style={{ backgroundColor: "#0D0D0D" }}
            >
              <p className="text-[10px] uppercase tracking-widest text-[#555555] mb-2">
                What to do next
              </p>
              <p className="text-sm text-[#C0C0C0] leading-relaxed mb-4">
                {nextStepNote}
              </p>
              <div className="flex flex-wrap gap-2">
                <Link
                  href={primaryAction.href}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold transition-opacity hover:opacity-90"
                  style={{ backgroundColor: "#C9A84C", color: "#0A0A0A" }}
                >
                  {primaryAction.label}
                  <ArrowRight className="w-3 h-3" />
                </Link>
                <Link
                  href={secondaryAction.href}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold border border-white/[0.1] text-[#888888] transition-colors hover:text-[#F0F0F0] hover:border-white/[0.2]"
                >
                  {secondaryAction.label}
                </Link>
              </div>
            </div>
          )
        })()}

        {/* Review list — wrong answers only by default, toggle to show all */}
        {(() => {
          const wrongIndices = questions
            .map((q, i) => ({ q, i, state: states[i] }))
            .filter(({ q, state }) => state.submitted && !isQuestionCorrect(q, state))
          const displayItems = showAllReview
            ? questions.map((q, i) => ({ q, i, state: states[i] }))
            : wrongIndices
          const hasWrong = wrongIndices.length > 0

          return (
            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-sm font-semibold uppercase tracking-widest text-[#888888]">
                  {showAllReview
                    ? `All questions · ${questions.length}`
                    : hasWrong
                    ? `Incorrect · ${wrongIndices.length}`
                    : "All correct"}
                </h2>
                {hasWrong && (
                  <button
                    onClick={() => setShowAllReview((v) => !v)}
                    className="text-[11px] transition-colors"
                    style={{ color: "#555555" }}
                  >
                    {showAllReview ? "Wrong only" : `Show all ${questions.length}`}
                  </button>
                )}
              </div>

              {!hasWrong ? (
                <div
                  className="p-5 rounded-xl border border-white/[0.06] text-center"
                  style={{ backgroundColor: "rgba(62,207,142,0.03)" }}
                >
                  <p className="text-sm text-[#3ECF8E] font-semibold">All correct</p>
                  <p className="text-xs text-[#555555] mt-1">Nothing to review here.</p>
                </div>
              ) : (
                <div className="rounded-xl border border-white/[0.08] bg-[#111111] overflow-hidden">
                  {displayItems.map(({ q, i, state }, listIdx) => {
                    const isCorrect = isQuestionCorrect(q, state)
                    const isWrong = state.submitted && !isCorrect
                    const isLast = listIdx === displayItems.length - 1
                    return (
                      <button
                        key={q.id}
                        onClick={() => {
                          goTo(i)
                          setShowResults(false)
                        }}
                        className={`w-full flex items-center justify-between p-4 hover:bg-white/[0.02] transition-colors text-left ${
                          !isLast ? "border-b border-white/[0.05]" : ""
                        }`}
                        style={isWrong ? { backgroundColor: "rgba(255,68,68,0.025)" } : undefined}
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
                            <p
                              className="text-xs"
                              style={{ color: isWrong ? "rgba(255,107,107,0.75)" : "#555555" }}
                            >
                              Q{i + 1} · {q.subtopic} · {q.difficulty}
                            </p>
                            <p className="text-sm text-[#F0F0F0] truncate">
                              {q.prompt.replace(/\s+/g, " ").slice(0, 90)}
                            </p>
                          </div>
                        </div>
                        <span
                          className="text-xs flex-shrink-0 ml-3"
                          style={{ color: isWrong ? "rgba(255,107,107,0.6)" : "#888888" }}
                        >
                          {state.submitted ? formatDuration(state.elapsedMs) : "skipped"}
                        </span>
                      </button>
                    )
                  })}
                </div>
              )}
            </div>
          )
        })()}

        {/* What to do next — surfaces the pre-computed guidance and closes
            the "session finished, now what?" dead end with 1-2 decisive CTAs
            keyed to the accuracy band. */}
        {answeredCount > 0 && (() => {
          const isPractice =
            !slug.startsWith("diagnostic") &&
            !slug.startsWith("mock") &&
            !slug.startsWith("review") &&
            slug !== "custom"
          const chapterSlug = TOPIC_TO_CHAPTER[topic]

          type NextAction = { label: string; href: string; variant: "primary" | "secondary" }
          const actions: NextAction[] = []

          if (isMixedReview) {
            actions.push({ label: "Go to chapters", href: "/chapters", variant: "primary" })
            actions.push({ label: "Review queue", href: "/review", variant: "secondary" })
          } else if (accuracy < 60) {
            actions.push({
              label: chapterSlug ? "Review the chapter" : "Go to chapters",
              href: chapterSlug ? `/chapters/${chapterSlug}` : "/chapters",
              variant: "primary",
            })
            if (isPractice) {
              actions.push({ label: "Practice again", href: `/practice/session/${slug}`, variant: "secondary" })
            }
          } else if (accuracy < 80) {
            if (isPractice) {
              actions.push({ label: "Practice again", href: `/practice/session/${slug}`, variant: "primary" })
            }
            actions.push({
              label: chapterSlug ? "Review the chapter" : "Browse chapters",
              href: chapterSlug ? `/chapters/${chapterSlug}` : "/chapters",
              variant: "secondary",
            })
          } else if (weakestTopic) {
            // Strong session + known weak topic: point directly to the gap
            actions.push({
              label: `Practice ${weakestTopic.topic}`,
              href: `/practice/session/${weakestTopic.practiceSlug}`,
              variant: "primary",
            })
            const wtChapter = TOPIC_TO_CHAPTER[weakestTopic.topic]
            actions.push({
              label: wtChapter ? "Review the chapter" : "Go to chapters",
              href: wtChapter ? `/chapters/${wtChapter}` : "/chapters",
              variant: "secondary",
            })
          } else {
            actions.push({ label: "Go to chapters", href: "/chapters", variant: "primary" })
            if (isPractice) {
              actions.push({ label: "Practice again", href: `/practice/session/${slug}`, variant: "secondary" })
            }
          }

          return (
            <div
              className="p-5 rounded-xl border"
              style={{
                borderColor: "rgba(255,255,255,0.06)",
                backgroundColor: "#0D0D0D",
              }}
            >
              <p className="text-[10px] uppercase tracking-widest text-[#555555] mb-2">
                What to do next
              </p>
              <p className="text-sm text-[#C0C0C0] leading-relaxed mb-5">
                {nextStepNote}
              </p>
              <div className="flex flex-wrap gap-3">
                {actions.map((action) =>
                  action.variant === "primary" ? (
                    <Link
                      key={action.href}
                      href={action.href}
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold transition-all hover:opacity-90"
                      style={{ backgroundColor: "#C9A84C", color: "#0A0A0A" }}
                    >
                      {action.label}
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  ) : (
                    <Link
                      key={action.href}
                      href={action.href}
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium border transition-colors hover:border-white/[0.16] hover:text-[#F0F0F0]"
                      style={{
                        borderColor: "rgba(255,255,255,0.08)",
                        color: "#888888",
                      }}
                    >
                      {action.label}
                    </Link>
                  )
                )}
              </div>
            </div>
          )
        })()}

        {rebuildError && (
          <p className="text-xs text-center" style={{ color: "#FF4444" }}>
            {rebuildError}
          </p>
        )}
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
                <div className="flex items-center gap-2.5 mb-3">
                  <p className="text-[10px] uppercase tracking-widest text-[#555555]">
                    Explanation
                  </p>
                  {!isQuestionCorrect(current, currentState) &&
                    currentState.selected !== null &&
                    !isTwoPart && (
                      <>
                        <span className="text-[10px] text-[#333333]">&middot;</span>
                        <span
                          className="text-[10px]"
                          style={{ color: "rgba(255,107,107,0.75)" }}
                        >
                          You chose {letterFor(currentState.selected)}
                        </span>
                        <span className="text-[10px] text-[#333333]">&middot;</span>
                        <span
                          className="text-[10px]"
                          style={{ color: "rgba(62,207,142,0.75)" }}
                        >
                          Correct: {current.correctAnswerLetter}
                        </span>
                      </>
                    )}
                </div>
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
