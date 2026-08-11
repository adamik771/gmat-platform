"use client"

import { memo, useCallback, useEffect, useMemo, useRef, useState } from "react"
import Link from "next/link"
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
import { summarizeAnsweredAttempts } from "@/lib/practice-save"
import { trackEvent } from "@/lib/analytics"
import { isAnswerCorrect, pickMissed } from "@/lib/practice-retry"
import { activeSessionMs } from "@/lib/practice-timing"
import { TOPIC_TO_CHAPTER, TOPIC_TO_SET } from "@/lib/topic-chapter-map"
import { buildMixedReviewUrl } from "@/components/shared/MixedReviewCard"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import rehypeCaretSup from "@/lib/rehype-caret-sup"
import PacingBadge from "@/components/shared/PacingBadge"
import QuestionChart from "@/components/shared/QuestionChart"
import type { ChartSpec } from "@/lib/chart-spec"
import SaveForReviewButton from "@/components/review/SaveForReviewButton"
import TutorDrawer from "@/components/tutor/TutorDrawer"
import { applySessionAttempts, levelLabel, MIN_ATTEMPTS_FOR_ADAPTIVE } from "@/lib/topic-skill"
import { restoreDeckOrder, serializeDeck } from "@/lib/question-selection"
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
  /** Rich-explanation fields surfaced in the post-submit analysis panel.
   *  Additive + optional — populated by the session-page mappers from the
   *  same fields on ParsedQuestion. */
  fastestPath?: string
  commonTrap?: string
  mistakeAnalysis?: Partial<Record<"A" | "B" | "C" | "D" | "E" | "F", string>>
  takeaway?: string
  /** Two-Part Analysis: column headers (the two "roles"). */
  twoPartColumns?: string[]
  /** Two-Part Analysis: the correct row index for each column. */
  twoPartCorrectAnswers?: number[]
  /** Graphics Interpretation: structured chart rendered by QuestionChart. */
  chartSpec?: ChartSpec
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
  /** Optional context line shown above the session title, e.g.
   *  "Algebra: Linear Equations & Systems · Test 1" for a per-chapter test. */
  setLabel?: string
  /** Question ids the student already saved for review (user_state.
   *  saved_for_review). Without this the save button remounted per question
   *  with a hardcoded unsaved state and looked like it "forgot" the save. */
  initialSavedForReview?: string[]
  /** Surface-imposed feedback mode. Review sessions pass "study" so the
   *  corrective-feedback surface actually delivers immediate feedback
   *  (Rowland 2014); when set it wins over the stored preference, but
   *  the in-session toggle still allows a per-session opt-out. */
  defaultMode?: "exam" | "study"
}

/** Per-question time clamp: nobody legitimately spends 30+ minutes on one
 *  GMAT item — beyond that it's a suspended tab, not solving time. */
const MAX_QUESTION_MS = 30 * 60_000

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
// Memoized: markdown parsing (ReactMarkdown + remark-gfm) is CPU-heavy and a
// question prompt + 5 options + explanation each render through it. Props are
// primitives (text/className), so a shallow compare lets the per-second timer
// tick (and other unrelated state changes) re-render without re-parsing.
const PromptBlock = memo(function PromptBlock({ text, className = "" }: { text: string; className?: string }) {
  return (
    <div className={`text-sm leading-relaxed text-[#F0F0F0] ${className}`}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeCaretSup]}
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
            <li {...props} className="leading-relaxed marker:text-[#888888]" />
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
})

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
  revealOutcome = true,
  onSelect,
}: {
  value: Confidence | null
  submitted: boolean
  wasCorrect: boolean
  /** Exam mode defers correctness to the end — suppress the calibration
   *  copy (it leaks whether the answer was right) until then. */
  revealOutcome?: boolean
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
  if (submitted && value && revealOutcome) {
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
        <p className="text-[10px] uppercase tracking-widest text-[#888888]">
          {submitted ? "Your confidence" : "How confident are you?"}
          <span className="text-[#888888] normal-case tracking-normal ml-2">
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
        // Bound the request so a slow/hung endpoint surfaces a retry instead of
        // leaving the row stuck on "Saving…" indefinitely.
        signal: AbortSignal.timeout(10_000),
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
          <p className="text-[10px] uppercase tracking-widest text-[#888888]">
            How well do you understand this now?
          </p>
          <p className="text-[10px] text-[#888888] mt-0.5">
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
          <p className="text-[10px] uppercase tracking-widest text-[#888888]">
            Hints
          </p>
          <span className="text-[10px] text-[#888888]">
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
      <p className="text-[10px] uppercase tracking-widest text-[#888888] mb-3">Reference</p>
      <PromptBlock text={cleaned} />
    </div>
  )
}

/** Returns true when a submitted question is answered correctly. */
function isQuestionCorrect(q: SessionQuestion, state: QuestionState): boolean {
  return isAnswerCorrect(q, state)
}

/** Untouched per-question state for a fresh attempt over `qs`. */
function freshStates(qs: SessionQuestion[]): QuestionState[] {
  return qs.map((q) => ({
    selected: null,
    twoPartSelections: q.twoPartColumns ? q.twoPartColumns.map(() => null) : undefined,
    submitted: false,
    elapsedMs: 0,
    hintsRevealed: 0,
    confidence: null,
    firstInteractionMs: null,
  }))
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
  reveal = true,
  onSelect,
}: {
  question: SessionQuestion
  state: QuestionState
  /** Exam mode defers correctness highlighting to the end-of-session review. */
  reveal?: boolean
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
                const showResult = state.submitted && reveal
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

                // Accessible name carries both axes ("column: row"), plus
                // the outcome once revealed — without it these were
                // nameless stateless buttons and TPA questions were
                // unanswerable with a screen reader.
                const rowText = row.replace(/\*\*/g, "").replace(/\s+/g, " ").trim()
                const outcome = showResult
                  ? isCorrectCell
                    ? " — correct answer"
                    : isSelected
                    ? " — your selection, incorrect"
                    : ""
                  : ""
                return (
                  <td key={ci} className="py-3 px-4 text-center">
                    <button
                      onClick={() => onSelect(ci, ri)}
                      disabled={state.submitted}
                      aria-label={`${cols[ci]}: ${rowText}${outcome}`}
                      aria-pressed={isSelected}
                      className="w-6 h-6 rounded-full border-2 mx-auto flex items-center justify-center transition-colors disabled:cursor-default tpa-radio"
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
            Your sign-in has expired. Sign in in the new tab, then come back
            here and retry — your answers are still on screen.
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
        <span className="flex items-center gap-2">
          {/* New tab on purpose: a same-tab navigation unmounts the runner
              and destroys the very answers this banner promises are safe.
              Auth is cookie-based, so signing in over there re-arms the
              retry here. */}
          <Link
            href="/login"
            target="_blank"
            rel="noopener"
            className="px-3 py-1.5 rounded-md text-xs font-medium transition-colors"
            style={{
              backgroundColor: "rgba(201,168,76,0.12)",
              color: "#C9A84C",
              border: "1px solid rgba(201,168,76,0.3)",
            }}
          >
            Sign in (new tab)
          </Link>
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
        </span>
      )}
    </div>
  )
}

function AnalysisRow({
  label,
  color,
  text,
}: {
  label: string
  color: string
  text: string
}) {
  return (
    <div>
      <p
        className="text-[10px] uppercase tracking-widest mb-1.5"
        style={{ color }}
      >
        {label}
      </p>
      <PromptBlock text={text} />
    </div>
  )
}

/**
 * Post-submit deep-analysis block. Surfaces the question's authored
 * fastest-path, common-trap, the rationale for the student's wrong pick,
 * and the takeaway — content that already exists but was previously only
 * shown on the standalone /review/question page. Always expanded on sm+;
 * collapsed behind a "Show full analysis" toggle on mobile so the result
 * screen stays scannable on small screens.
 */
function FullAnalysis({
  fastestPath,
  commonTrap,
  wrongLetter,
  wrongMistake,
  takeaway,
}: {
  fastestPath?: string
  commonTrap?: string
  wrongLetter: string | null
  wrongMistake: string | null
  takeaway?: string
}) {
  const [showAll, setShowAll] = useState(false)
  return (
    <div className="mt-4 pt-4 border-t border-white/[0.06]">
      <button
        type="button"
        onClick={() => setShowAll((v) => !v)}
        className="sm:hidden inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.18em]"
        style={{ color: "#C9A84C" }}
        aria-expanded={showAll}
      >
        {showAll ? "Hide analysis" : "Show full analysis"}
        <ChevronDown
          className={`w-3.5 h-3.5 transition-transform ${
            showAll ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`${
          showAll ? "block" : "hidden sm:block"
        } space-y-4 mt-3 sm:mt-0`}
      >
        {fastestPath && (
          <AnalysisRow label="Fastest path" color="#C9A84C" text={fastestPath} />
        )}
        {commonTrap && (
          <AnalysisRow label="Common trap" color="#FF6B6B" text={commonTrap} />
        )}
        {wrongLetter && wrongMistake && (
          <AnalysisRow
            label={`Why you picked ${wrongLetter}`}
            color="#FF6B6B"
            text={wrongMistake}
          />
        )}
        {takeaway && (
          <AnalysisRow label="Takeaway" color="#3ECF8E" text={takeaway} />
        )}
      </div>
    </div>
  )
}

export default function SessionClient({
  slug,
  topic,
  section,
  questions: questionsProp,
  skillLevel,
  skillAttempts,
  weakestTopic,
  setLabel,
  initialSavedForReview,
  defaultMode,
}: SessionClientProps) {
  // Freeze the question list this mount was born with. The server page
  // re-shuffles topic drills on every render (Date.now()-seeded adaptive
  // order), so any router.refresh() fired mid-session — the save-for-review
  // button does one after each toggle — would hand the mounted session a
  // REORDERED questions prop while the per-index answer states stayed put:
  // answers, results, and revealed explanations all landed on the wrong
  // questions (unanswered ones could render pre-submitted with the answer
  // showing). A fresh session (remount) still gets a fresh order. The list
  // only ever changes through restartSession below (retry flows) — never
  // from the prop.
  const [questions, setQuestions] = useState(questionsProp)
  /** Mirror of `questions` for callbacks declared before `total`. */
  const questionsRef = useRef(questions)
  useEffect(() => {
    questionsRef.current = questions
  }, [questions])
  const [currentIdx, setCurrentIdx] = useState(0)
  // Active-attempt deck stability. The freeze above protects a MOUNTED
  // session from RSC refreshes, but a hard browser refresh remounts with a
  // fresh Date.now()-seeded order from the server — a different deck
  // mid-attempt. The deck is persisted to sessionStorage once the student
  // submits an answer, and restored on remount when it passes the guards in
  // restoreDeckOrder (same id-set, within ACTIVE_DECK_TTL_MS). Per-tab and
  // order-only by design: repetition control itself stays server-side, and
  // cross-device mid-attempt resume is out of scope. Cleared on finish and
  // on restartSession so a deliberate new attempt gets fresh alternatives.
  const deckKey = `practice-deck:${slug}`
  // Which questions are saved for review — seeded from the server, updated
  // as the student toggles, so the per-question button survives navigation
  // between questions (it remounts per question by key).
  const [savedIds, setSavedIds] = useState<Set<string>>(
    () => new Set(initialSavedForReview ?? [])
  )
  // AI tutor drawer — per-question Claude explainer. Opens on the
  // current question's ID; closing keeps the conversation, switching
  // questions resets it (handled inside TutorDrawer).
  const [tutorOpen, setTutorOpen] = useState(false)
  const isMixedReview = slug === "custom" && topic.toLowerCase().startsWith("mixed review")

  const [states, setStates] = useState<QuestionState[]>(() =>
    freshStates(questions)
  )
  // Restore a persisted active-attempt deck on remount (hard refresh /
  // same-tab resume). Mount-only, before any interaction — states are still
  // blank, so rebuilding them for the restored order is safe.
  useEffect(() => {
    try {
      const restored = restoreDeckOrder(
        window.sessionStorage.getItem(deckKey),
        questionsProp,
        Date.now()
      )
      if (restored) {
        setQuestions(restored)
        setStates(freshStates(restored))
        setCurrentIdx(0)
      }
    } catch {
      // Storage unavailable (private browsing) — fresh deck is fine.
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  const [questionStart, setQuestionStart] = useState(() => Date.now())
  const [now, setNow] = useState(() => Date.now())
  const [showResults, setShowResults] = useState(false)
  // Exam vs study feedback mode. Exam defers correctness, explanations,
  // and hints to the end-of-session review; study reveals the explanation
  // after each submit — the evidence-preferred default for learning
  // sessions (immediate corrective feedback, Rowland 2014). Precedence:
  // surface prop > stored preference > study for plain topic drills /
  // exam for assessment-shaped sets (chapter tests, custom builds).
  // The initializer must NOT read localStorage — that produced a
  // server/client hydration mismatch whenever the stored value differed
  // from the SSR fallback. The stored preference applies in the mount
  // effect below instead.
  const [mode, setMode] = useState<"exam" | "study">(defaultMode ?? "exam")
  useEffect(() => {
    if (defaultMode) return // surface-imposed mode wins; toggle still works
    try {
      const stored = window.localStorage.getItem("session-feedback-mode")
      if (stored === "study" || stored === "exam") {
        setMode(stored)
        return
      }
    } catch {
      // Private browsing — fall through to the shape-based default.
    }
    const isTopicDrill = !setLabel && slug !== "custom"
    if (isTopicDrill) setMode("study")
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  // Once the results screen has been reached, per-question feedback is
  // visible regardless of mode so the review list can jump back into
  // fully-explained questions.
  const [finished, setFinished] = useState(false)
  const reveal = mode === "study" || finished

  function switchMode(next: "exam" | "study") {
    setMode(next)
    // Don't persist when the surface imposed the mode (review sessions):
    // flipping one review session to exam mode is a per-session opt-out,
    // not a decision to change the global default for every drill.
    if (defaultMode) return
    try {
      window.localStorage.setItem("session-feedback-mode", next)
    } catch {
      // Private browsing — preference just won't persist.
    }
  }
  const [saveStatus, setSaveStatus] = useState<
    "idle" | "saving" | "saved" | "error" | "unauthorized"
  >("idle")
  const [savedSessionId, setSavedSessionId] = useState<string | null>(null)
  /** True while running a redo-missed replay — the save marks the slug. */
  const [isReplay, setIsReplay] = useState(false)
  /** Single polite live region for the runner: question transitions and
   *  submit outcomes announced nothing, so a screen-reader user had no
   *  idea the view had changed or whether they were right. */
  const [announcement, setAnnouncement] = useState("")
  const [mixedReviewPending, setMixedReviewPending] = useState(false)
  const [mixedReviewError, setMixedReviewError] = useState<string | null>(null)
  const [showAllReview, setShowAllReview] = useState(false)

  // Tick the timer once a second for the header readouts. Stops on the
  // results screen — every clock there reads the banked answering time, and
  // without the gate the whole (heavy) results tree re-rendered every second.
  useEffect(() => {
    if (showResults) return
    const id = window.setInterval(() => setNow(Date.now()), 1000)
    return () => window.clearInterval(id)
  }, [showResults])

  const saveSession = async () => {
    // In-flight guard: a double-click on "Retry save" fired two identical
    // POSTs (duplicate sessions). The server's recent-duplicate check is
    // the backstop; this kills the common path.
    if (saveStatus === "saving") return
    // Persist SUBMITTED questions only — see summarizeAnsweredAttempts for the
    // why (blanks used to be recorded as wrong answers and the stored totals
    // were inconsistent).
    const deviceType = detectDeviceType()
    const summary = summarizeAnsweredAttempts(
      questions.map((q, i) => ({
        submitted: states[i].submitted,
        correct: isQuestionCorrect(q, states[i]),
        attempt: {
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
        },
      }))
    )
    // Nothing answered — there is no session worth recording.
    if (!summary) return
    setSaveStatus("saving")
    try {
      const res = await fetch("/api/practice-sessions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          slug: isReplay ? `redo-${slug}` : slug,
          topic,
          section,
          totalQuestions: summary.totalQuestions,
          correctCount: summary.correctCount,
          accuracy: summary.accuracy,
          // Active answering time only — reading solutions, idling on the
          // results screen, or a late "Retry save" never inflate the total.
          totalTimeMs: activeSessionMs(states, null),
          attempts: summary.attempts,
        }),
      })
      if (res.ok) {
        setSaveStatus("saved")
        let sessionId: string | null = null
        try {
          const json = (await res.json()) as { sessionId?: string }
          if (json.sessionId) {
            sessionId = json.sessionId
            setSavedSessionId(json.sessionId)
          }
        } catch {
          // Body parse failed — save still succeeded; the session-id-
          // dependent CTA will simply not render.
        }
        // Activation signal: fires once per successful persist (the effect
        // below only calls saveSession while saveStatus is "idle", so a
        // rerender or a results-screen refresh cannot re-fire it). This is
        // the signup-to-first-study measurement the funnel was missing.
        trackEvent("practice_completed", {
          section,
          topic,
          questions: summary.totalQuestions,
          ...(sessionId ? { session_id: sessionId } : {}),
        })
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

  // Answers live only in React state until the finish-time save above — warn
  // before a mid-session unload (tab close, hard refresh, external nav) so a
  // chapter test or custom set isn't silently lost. Off once finished: the
  // results screen has already persisted.
  const hasUnsavedAnswers = !finished && states.some((s) => s.submitted)
  useEffect(() => {
    if (!hasUnsavedAnswers) return
    const onBeforeUnload = (e: BeforeUnloadEvent) => {
      e.preventDefault()
    }
    window.addEventListener("beforeunload", onBeforeUnload)
    return () => window.removeEventListener("beforeunload", onBeforeUnload)
  }, [hasUnsavedAnswers])

  // Persist the active-attempt deck once the first answer lands (that's when
  // the attempt becomes worth stabilising); clear it on finish so the next
  // visit starts a fresh attempt with fresh alternatives.
  useEffect(() => {
    try {
      if (finished) {
        window.sessionStorage.removeItem(deckKey)
        return
      }
      if (!states.some((s) => s.submitted)) return
      window.sessionStorage.setItem(
        deckKey,
        serializeDeck(
          questions.map((q) => q.id),
          Date.now()
        )
      )
    } catch {
      // Storage unavailable — attempt stability degrades gracefully.
    }
  }, [states, finished, questions, deckKey])

  const goTo = useCallback(
    (idx: number) => {
      setCurrentIdx(idx)
      setQuestionStart(Date.now())
      // questionsRef avoids a declaration-order dependency on `total`.
      setAnnouncement(`Question ${idx + 1} of ${questionsRef.current.length}`)
    },
    []
  )

  /**
   * Start a clean attempt over `qs` — the full set ("Practice again") or
   * just the missed subset ("Redo missed"). This is a client-side reset,
   * NOT a link: the old "Practice again" linked to the URL this component
   * was already mounted on, and same-URL App Router navigation never
   * remounts — the student stayed parked on the old results screen (and,
   * before the questions-freeze fix, the server's reshuffled list was
   * re-scored against stale answers as a fake ~0% result). The finished
   * attempt is already saved; the fresh one saves as its own session when
   * it finishes.
   */
  function restartSession(qs: SessionQuestion[], opts: { replay?: boolean } = {}) {
    if (qs.length === 0) return
    // The finished attempt is normally already saved — but when the save
    // failed, this reset would silently destroy the only copy of it while
    // the error banner is still promising the answers are recoverable.
    if (
      (saveStatus === "error" || saveStatus === "unauthorized") &&
      !window.confirm(
        "This session hasn't been saved yet. Starting a new attempt discards it — continue?"
      )
    ) {
      return
    }
    // Redo-missed runs replay questions the student just saw — real for
    // reinforcement, but not fresh evidence. Marking the saved slug
    // (`redo-…`) lets accuracy metrics and adaptivity exclude them.
    setIsReplay(opts.replay ?? false)
    // A deliberate new attempt: drop the persisted deck so it can't be
    // restored over this one (the first submit re-persists the new deck).
    try {
      window.sessionStorage.removeItem(deckKey)
    } catch {
      // Storage unavailable — nothing to drop.
    }
    setQuestions(qs)
    setStates(freshStates(qs))
    setCurrentIdx(0)
    setQuestionStart(Date.now())
    setNow(Date.now())
    setShowResults(false)
    setFinished(false)
    setSaveStatus("idle")
    setSavedSessionId(null)
    setShowAllReview(false)
  }

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
    if (currentState.submitted || finished) return
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
    if (currentState.submitted || finished) return
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
    // Post-finish answering is blocked, not re-saved: the session row is
    // already persisted and there is no update endpoint, so a submit here
    // would silently diverge the screen from the DB. Skipped questions
    // stay skipped once the session is finished.
    if (finished) return
    if (!canSubmit(current, currentState)) return
    // Clamp: a laptop that slept overnight on an open question would
    // otherwise bank hours into this attempt (and the hours metrics);
    // a system-clock step backwards would bank a negative value that
    // makes the save fail permanently.
    const elapsed = Math.min(
      Math.max(Date.now() - questionStart, 0),
      MAX_QUESTION_MS
    )
    setStates((prev) => {
      const next = prev.slice()
      next[currentIdx] = { ...next[currentIdx], submitted: true, elapsedMs: elapsed }
      return next
    })
    if (mode === "study") {
      const right = isAnswerCorrect(current, {
        ...currentState,
        submitted: true,
      })
      setAnnouncement(
        right
          ? "Correct."
          : `Incorrect. The correct answer is ${current.correctAnswerLetter || "shown below"}.`
      )
    } else {
      setAnnouncement(
        `Answer recorded. Question ${Math.min(currentIdx + 2, total)} of ${total}`
      )
    }
    // Exam mode has no per-question reveal, so move straight on. The last
    // question still requires an explicit "Finish Session" click — finishing
    // is irreversible feedback-wise, so it shouldn't happen by surprise.
    if (mode === "exam" && !finished && currentIdx < total - 1) {
      goTo(currentIdx + 1)
    }
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
      setFinished(true)
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
      // Previous: ArrowLeft, only when the current question is submitted
      // — the guard the comment always claimed: without it a stray arrow
      // press mid-question navigated away and reset the question timer.
      if (
        event.key === "ArrowLeft" &&
        h.currentIdx > 0 &&
        h.currentState.submitted
      ) {
        event.preventDefault()
        h.handlePrev()
      }
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [showResults])

  if (showResults) {
    const accuracy = answeredCount === 0 ? 0 : Math.round((correctCount / answeredCount) * 100)
    // Banked answering time — frozen by construction, not a running clock.
    const totalTime = activeSessionMs(states, null)

    // Shared next-step accuracy bands. Below LOW signals a concept gap
    // (revisit the chapter); at/above SOLID the topic is strong enough to
    // move off. Both the recommendation text and the action buttons read
    // from these so the prose and the CTA can never disagree about which
    // band a session falls into.
    const LOW_ACCURACY = 60
    const SOLID_ACCURACY = 80

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
    // In the mid-accuracy band (LOW–SOLID), also surface the cross-topic
    // weak area when it differs from the current topic: students building on
    // one topic deserve to know which gap is costing them the most overall.
    const nextStepNote =
      accuracy < LOW_ACCURACY
        ? "Accuracy below 60% signals a concept gap. Revisiting the chapter before more practice compounds better."
        : accuracy < SOLID_ACCURACY
        ? weakestTopic && weakestTopic.topic !== topic
          ? `Accuracy is building — one more focused session here will sharpen this topic. Across your full history, ${weakestTopic.topic} sits at ${Math.round(weakestTopic.accuracy * 100)}% accuracy. That's the highest-leverage target once this topic is solid.`
          : "Accuracy is building. One more focused session on this topic before moving on."
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
          <p className="text-sm text-[#888888] mt-1">
            {topic} · {section}
          </p>
        </div>

        <SaveStatusBanner status={saveStatus} onRetry={saveSession} />

        {savedSessionId && (
          <p className="text-[11px] text-[#888888]">
            Session saved — revisit these results anytime at{" "}
            <Link
              href={`/practice/history/${savedSessionId}`}
              className="underline underline-offset-2"
              style={{ color: "#C9A84C" }}
            >
              session results
            </Link>
            .
          </p>
        )}

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
              <p className="text-[10px] uppercase tracking-widest text-[#888888]">Accuracy</p>
              <p className="text-3xl font-bold mt-2" style={{ color: "#C9A84C" }}>
                {accuracy}%
              </p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-widest text-[#888888]">Correct</p>
              <p className="text-3xl font-bold mt-2 text-[#F0F0F0]">
                {correctCount}
                <span className="text-base font-normal text-[#888888]"> / {total}</span>
              </p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-widest text-[#888888]">Total time</p>
              <p className="text-3xl font-bold mt-2 text-[#F0F0F0]">{formatDuration(totalTime)}</p>
            </div>
          </div>

          {/* Difficulty breakdown — only when questions span 2+ levels */}
          {difficultyBreakdown.length >= 2 && (
            <div className="mt-6 pt-5 border-t border-white/[0.06]">
              <p className="text-[10px] uppercase tracking-widest text-[#888888] mb-3">
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
                    <p className="text-[10px] uppercase tracking-widest text-[#888888]">
                      {topic} level
                    </p>
                    {!hasEnoughData && (
                      <p className="text-[10px] text-[#888888]">
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

        {/* What to do next — placed immediately after metrics so the primary
            action is always visible without scrolling past analysis sections. */}
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

        {(() => {
          const insight = computeInsight(questions, states, section)
          if (!insight) return null
          return (
            <div className="p-5 rounded-xl border border-white/[0.08] bg-[#111111]">
              <p className="text-[10px] uppercase tracking-widest text-[#888888] mb-3">
                {insight.label}
              </p>
              <p className="text-sm text-[#C0C0C0] leading-relaxed">{insight.observation}</p>
              <div className="mt-3 pt-3 border-t border-white/[0.05] flex items-start gap-2">
                <ArrowRight className="w-3.5 h-3.5 flex-shrink-0 mt-0.5 text-[#888888]" />
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

        {(() => {
          // Subtopic-level breakdown of wrong answers — surfaces the
          // specific skill clusters that broke down in this session, not
          // just the difficulty buckets covered above. Hidden when no
          // wrong answer carries a usable subtopic label.
          const wrong = questions.filter(
            (q, i) =>
              states[i].submitted && !isQuestionCorrect(q, states[i])
          )
          const counts = new Map<string, number>()
          for (const q of wrong) {
            const sub = (q.subtopic ?? "").trim()
            if (!sub) continue
            counts.set(sub, (counts.get(sub) ?? 0) + 1)
          }
          const top = [...counts.entries()]
            .sort((a, b) => b[1] - a[1])
            .slice(0, 3)
          if (top.length === 0) return null
          return (
            <div className="p-5 rounded-xl border border-white/[0.06] bg-[#0D0D0D]">
              <p className="text-[10px] uppercase tracking-widest text-[#888888] mb-3">
                Where the mistakes fell
              </p>
              <div className="space-y-2.5">
                {top.map(([sub, n]) => (
                  <div
                    key={sub}
                    className="flex items-center justify-between gap-3"
                  >
                    <p className="text-sm text-[#C0C0C0] truncate">{sub}</p>
                    <div className="flex items-center gap-2 flex-shrink-0">
                      <div className="flex gap-1">
                        {Array.from({ length: Math.min(n, 5) }).map((_, i) => (
                          <div
                            key={i}
                            className="w-2 h-2 rounded-full"
                            style={{ backgroundColor: "rgba(255,68,68,0.5)" }}
                          />
                        ))}
                      </div>
                      <span className="text-xs text-[#888888] w-4 text-right tabular-nums">
                        {n}
                      </span>
                    </div>
                  </div>
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
                    style={{ color: "#888888" }}
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
                  <p className="text-xs text-[#888888] mt-1">Nothing to review here.</p>
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
                              <span className="text-[10px] text-[#888888]">—</span>
                            )}
                          </div>
                          <div className="min-w-0">
                            <p
                              className="text-xs"
                              style={{ color: isWrong ? "rgba(255,107,107,0.75)" : "#555555" }}
                            >
                              Q{i + 1} · {q.subtopic} · {q.difficulty}
                              {isWrong && state.confidence && state.confidence !== "low" && (
                                <span
                                  className="ml-1.5 inline-flex items-center px-1 py-px rounded text-[9px] font-semibold uppercase tracking-wide"
                                  style={
                                    state.confidence === "high"
                                      ? { backgroundColor: "rgba(255,153,102,0.15)", color: "#FF9966" }
                                      : { backgroundColor: "rgba(255,255,255,0.05)", color: "#888888" }
                                  }
                                >
                                  {state.confidence === "high" ? "Confident" : "Unsure"}
                                </span>
                              )}
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

          type NextAction = {
            label: string
            variant: "primary" | "secondary"
            href?: string
            onClick?: () => void
            disabled?: boolean
          }
          const actions: NextAction[] = []

          // Redo only the questions answered wrong — a clean client-side
          // restart over the missed subset (see restartSession). Offered on
          // every runner flow (topic drills, custom sets, review sessions).
          const missed = pickMissed(questions, states)
          // Full-set restart: reuse the freshest server-provided order so a
          // repeat feels like a new visit, not a replay.
          const practiceAgain: NextAction = {
            label: "Practice again",
            onClick: () => restartSession(questionsProp),
            variant: "secondary",
          }

          if (missed.length > 0) {
            actions.push({
              label: `Redo ${missed.length} missed`,
              onClick: () => restartSession(missed, { replay: true }),
              // Below the concept-gap line the chapter is the better first
              // move; otherwise redoing the misses is.
              variant: accuracy < LOW_ACCURACY ? "secondary" : "primary",
            })
          }

          const isReviewSession = slug.startsWith("review-")

          if (isReviewSession) {
            // Close the loop: a finished review session routes back to the
            // remaining queue, not off to unrelated surfaces. When the
            // session went well, add ONE near-transfer CTA — fresh
            // same-topic questions are where the practiced retrieval pays
            // off on novel items (Pan & Rickard 2018).
            actions.push({
              label: "Back to your queue",
              href: "/review",
              variant: "primary",
            })
            if (accuracy >= SOLID_ACCURACY) {
              const correctTopicCounts = new Map<string, number>()
              questions.forEach((q, i) => {
                if (states[i]?.submitted && isAnswerCorrect(q, states[i])) {
                  correctTopicCounts.set(
                    q.topic,
                    (correctTopicCounts.get(q.topic) ?? 0) + 1
                  )
                }
              })
              const topCorrect = [...correctTopicCounts.entries()].sort(
                (a, b) => b[1] - a[1]
              )[0]?.[0]
              const transferSet = topCorrect ? TOPIC_TO_SET[topCorrect] : undefined
              if (topCorrect && transferSet) {
                actions.push({
                  label: `Prove it on fresh ${topCorrect}`,
                  href: `/practice/session/${transferSet}`,
                  variant: "secondary",
                })
              }
            }
          } else if (isMixedReview) {
            actions.push({ label: "Go to chapters", href: "/chapters", variant: "primary" })
            actions.push({ label: "Review queue", href: "/review", variant: "secondary" })
          } else if (accuracy < LOW_ACCURACY) {
            actions.push({
              label: chapterSlug ? "Review the chapter" : "Go to chapters",
              href: chapterSlug ? `/chapters/${chapterSlug}` : "/chapters",
              variant: "primary",
            })
            if (isPractice) {
              actions.push(practiceAgain)
            }
          } else if (accuracy < SOLID_ACCURACY) {
            if (isPractice) {
              actions.push({
                ...practiceAgain,
                variant: missed.length > 0 ? "secondary" : "primary",
              })
            }
            actions.push({
              label: chapterSlug ? "Review the chapter" : "Browse chapters",
              href: chapterSlug ? `/chapters/${chapterSlug}` : "/chapters",
              variant: "secondary",
            })
            // When a weaker topic is known and distinct from the current one,
            // surface it as a direct escape hatch — students who plateau here
            // can jump straight to the gap without navigating back to practice.
            if (weakestTopic && weakestTopic.topic !== topic) {
              actions.push({
                label: `Practice ${weakestTopic.topic}`,
                href: `/practice/session/${weakestTopic.practiceSlug}`,
                variant: "secondary",
              })
            }
          } else {
            // Strong blocked session: the evidence-backed next step is
            // interleaved practice, not another blocked drill — once a
            // topic holds up in isolation, mixed sets are where method
            // selection (the exam skill) gets trained (Rohrer & Taylor
            // 2007; Brunmair & Richter 2019).
            if (isPractice) {
              actions.push({
                label: mixedReviewPending
                  ? "Building your mix…"
                  : "Start mixed review",
                disabled: mixedReviewPending,
                onClick: () => {
                  if (mixedReviewPending) return
                  setMixedReviewPending(true)
                  setMixedReviewError(null)
                  void buildMixedReviewUrl(chapterSlug ?? null).then(
                    (url) => {
                      window.location.href = url
                    },
                    (e: unknown) => {
                      // Say what happened instead of silently landing the
                      // student somewhere they didn't ask for.
                      setMixedReviewPending(false)
                      setMixedReviewError(
                        e instanceof Error
                          ? e.message
                          : "Couldn't build a mixed set right now."
                      )
                    }
                  )
                },
                variant: "primary",
              })
            }
            if (weakestTopic) {
              actions.push({
                label: `Practice ${weakestTopic.topic}`,
                href: `/practice/session/${weakestTopic.practiceSlug}`,
                variant: isPractice ? "secondary" : "primary",
              })
            } else {
              actions.push({
                label: "View your study plan",
                href: "/study-plan",
                variant: isPractice ? "secondary" : "primary",
              })
            }
            actions.push({ label: "Go to chapters", href: "/chapters", variant: "secondary" })
          }

          return (
            <div
              className="p-5 rounded-xl border"
              style={{
                borderColor: "rgba(255,255,255,0.06)",
                backgroundColor: "#0D0D0D",
              }}
            >
              <p className="text-[10px] uppercase tracking-widest text-[#888888] mb-2">
                What to do next
              </p>
              <p className="text-sm text-[#C0C0C0] leading-relaxed mb-5">
                {nextStepNote}
              </p>
              {isMixedReview && accuracy < SOLID_ACCURACY && (
                <p className="text-[13px] text-[#888888] leading-relaxed -mt-3 mb-5">
                  Mixed sets score lower than single-topic drills for everyone
                  — picking the method is the skill, and this is where it gets
                  trained.
                </p>
              )}
              <div className="flex flex-wrap gap-3">
                {actions.map((action) => {
                  const primary = action.variant === "primary"
                  const className = primary
                    ? "inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold transition-all hover:opacity-90"
                    : "inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium border transition-colors hover:border-white/[0.16] hover:text-[#F0F0F0]"
                  const style = primary
                    ? { backgroundColor: "#C9A84C", color: "#0A0A0A" }
                    : {
                        borderColor: "rgba(255,255,255,0.08)",
                        color: "#888888",
                      }
                  const key = action.href ?? action.label
                  if (action.onClick) {
                    return (
                      <button
                        key={key}
                        type="button"
                        onClick={action.onClick}
                        disabled={action.disabled}
                        className={className + " disabled:opacity-60"}
                        style={style}
                      >
                        {action.label}
                        {primary && !action.disabled && (
                          <ArrowRight className="w-3.5 h-3.5" />
                        )}
                      </button>
                    )
                  }
                  return (
                    <Link
                      key={key}
                      href={action.href!}
                      className={className}
                      style={style}
                    >
                      {action.label}
                      {primary && <ArrowRight className="w-3.5 h-3.5" />}
                    </Link>
                  )
                })}
              </div>
              {mixedReviewError && (
                <p className="text-[12px] mt-3" style={{ color: "#FF8888" }} role="alert">
                  {mixedReviewError}
                </p>
              )}
            </div>
          )
        })()}
      </div>
    )
  }

  // Answering time only: banked time on submitted questions, plus the
  // running clock on the current question ONLY while it's unanswered. The
  // header timer visibly pauses while the student reads a solution and
  // resumes when they open the next unanswered question.
  const sessionElapsed = activeSessionMs(states, {
    submitted: currentState.submitted,
    startedAt: questionStart,
    now,
  })
  const progressPct = Math.round(((currentIdx + (currentState.submitted ? 1 : 0)) / total) * 100)
  const hasContext = !!current.context && current.context.length > 0

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      {/* One persistently-mounted polite live region for the whole runner
          (question moves, submit outcomes). Mounted always — a region
          inserted on demand is announced unreliably. */}
      <div className="sr-only" role="status" aria-live="polite">
        {announcement}
      </div>
      {/* Header */}
      <div>
        <Link
          href="/practice"
          onClick={(e) => {
            // In-app navigation skips beforeunload — confirm here instead.
            if (
              hasUnsavedAnswers &&
              !window.confirm(
                "Leave this session? Your answers so far won't be saved."
              )
            ) {
              e.preventDefault()
            }
          }}
          className="inline-flex items-center gap-1.5 text-xs text-[#888888] hover:text-[#F0F0F0] transition-colors"
        >
          <ArrowLeft className="w-3 h-3" />
          Exit Session
        </Link>
        {/* flex-wrap: the mode toggle + pacing badge + clock + tutor cluster
            has ~395px min-content — without wrapping it panned the whole
            page horizontally at 375/390px. */}
        <div className="flex items-center justify-between mt-3 flex-wrap gap-y-2">
          <div>
            {setLabel ? (
              <p className="text-[10px] uppercase tracking-widest text-[#C9A84C] mb-1">
                {setLabel}
              </p>
            ) : null}
            <h1 className="text-xl font-bold text-[#F0F0F0]">{topic}</h1>
            <p className="text-xs text-[#888888] mt-0.5">
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
          <div className="flex items-center gap-2 text-sm text-[#888888] flex-wrap justify-end">
            {/* Exam/Study feedback-mode toggle. Study reveals each
                explanation (the default for learning drills); exam defers
                feedback to the end for assessment-shaped sets. */}
            <div
              className="inline-flex rounded-lg border overflow-hidden"
              style={{ borderColor: "rgba(255,255,255,0.10)" }}
              role="group"
              aria-label="Feedback mode"
            >
              {(["exam", "study"] as const).map((m) => (
                <button
                  key={m}
                  onClick={() => switchMode(m)}
                  className="px-2.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] transition-colors"
                  style={
                    mode === m
                      ? {
                          backgroundColor: "rgba(201,168,76,0.14)",
                          color: "#C9A84C",
                        }
                      : { color: "#666666" }
                  }
                  title={
                    m === "exam"
                      ? "Explanations at the end — answers lock as you go"
                      : "Explanation after each question"
                  }
                  aria-pressed={mode === m}
                >
                  {m === "exam" ? "Exam" : "Study"}
                </button>
              ))}
            </div>
            {/* compact: drops the "· on pace" label (~50px) — the header
                cluster is the tightest row on the 375px runner. */}
            <PacingBadge
              compact
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
            {/* AI tutor — hidden in exam mode until the session is finished
                (a tutor mid-exam would reveal the answer); always visible in
                study mode. The drawer slides in from the right and preserves
                the question's full context server-side. */}
            {reveal && (
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
            )}
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
        {!finished && (
          <p className="text-[11px] mt-2" style={{ color: "#666666" }}>
            {mode === "exam"
              ? "Exam mode: explanations come at the end — answers lock as you go."
              : "Study mode: explanation after every question — immediate feedback is how corrections stick. Use exam mode to rehearse timed conditions."}
          </p>
        )}
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
            {current.chartSpec && <QuestionChart spec={current.chartSpec} />}
            <PromptBlock text={current.prompt} className="mb-5" />

            {isTwoPart ? (
              <TwoPartGrid
                question={current}
                state={currentState}
                reveal={reveal}
                onSelect={handleTwoPartSelect}
              />
            ) : (
              <div className="space-y-2">
                {current.options.map((option, i) => {
                  const isSelected = currentState.selected === i
                  const isCorrect = i === current.correctAnswer
                  const showResult = currentState.submitted && reveal
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
                      data-kb-space="submit"
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
                      <PromptBlock text={option} className="flex-1 min-w-0" />
                      {/* sr-only outcome text: the Check/X icons are
                          aria-hidden and the colors carry the only signal
                          — screen readers heard nothing. */}
                      {showCorrect && (
                        <>
                          <span className="sr-only">
                            {isSelected
                              ? " — your answer, correct"
                              : " — correct answer"}
                          </span>
                          <Check className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: "#3ECF8E" }} />
                        </>
                      )}
                      {showIncorrect && (
                        <>
                          <span className="sr-only"> — your answer, incorrect</span>
                          <X className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: "#FF4444" }} />
                        </>
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
              revealOutcome={reveal}
              onSelect={handleConfidence}
            />

            {mode === "study" && current.hints && current.hints.length > 0 && (
              <HintPanel
                hints={current.hints}
                revealed={currentState.hintsRevealed}
                onReveal={handleRevealHint}
                submitted={currentState.submitted}
              />
            )}

            {currentState.submitted && reveal && current.explanation && (
              <div
                className="mt-5 p-4 rounded-lg border transition-all duration-150 animate-in fade-in-0 zoom-in-95"
                style={{
                  borderColor: "rgba(201,168,76,0.15)",
                  backgroundColor: "rgba(201,168,76,0.03)",
                }}
              >
                <div className="flex items-center gap-2.5 mb-3">
                  <p className="text-[10px] uppercase tracking-widest text-[#888888]">
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
                {(() => {
                  const wrongLetter =
                    !isQuestionCorrect(current, currentState) &&
                    currentState.selected !== null &&
                    !isTwoPart
                      ? (String.fromCharCode(65 + currentState.selected) as
                          | "A"
                          | "B"
                          | "C"
                          | "D"
                          | "E"
                          | "F")
                      : null
                  const wrongMistake = wrongLetter
                    ? current.mistakeAnalysis?.[wrongLetter] ?? null
                    : null
                  if (
                    !current.fastestPath &&
                    !current.commonTrap &&
                    !current.takeaway &&
                    !wrongMistake
                  )
                    return null
                  return (
                    <FullAnalysis
                      fastestPath={current.fastestPath}
                      commonTrap={current.commonTrap}
                      wrongLetter={wrongLetter}
                      wrongMistake={wrongMistake}
                      takeaway={current.takeaway}
                    />
                  )
                })()}
              </div>
            )}

            {currentState.submitted && reveal && (
              <PostSubmitUnderstandingRow
                key={`understanding-${current.id}`}
                questionId={current.id}
              />
            )}
            {currentState.submitted && (
              <div className="mt-3 flex items-center justify-end">
                <SaveForReviewButton
                  key={`save-${current.id}`}
                  questionId={current.id}
                  initialSaved={savedIds.has(current.id)}
                  onToggle={(saved) =>
                    setSavedIds((prev) => {
                      const next = new Set(prev)
                      if (saved) next.add(current.id)
                      else next.delete(current.id)
                      return next
                    })
                  }
                  variant="ghost"
                />
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
            ) : finished ? (
              /* Post-finish, unsubmitted question (reached via the results
                 review list): the session is saved and closed — answering
                 now would never persist, so offer the way back instead of
                 a Submit that silently diverges screen from DB. */
              <button
                onClick={() => setShowResults(true)}
                className="flex-1 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all hover:opacity-90"
                style={{ backgroundColor: "#C9A84C", color: "#0A0A0A" }}
              >
                Back to results
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

            {!finished && (
              <button
                onClick={() => {
                  if (
                    answeredCount < total &&
                    !window.confirm(
                      `End the session now? ${total - answeredCount} unanswered question${
                        total - answeredCount === 1 ? "" : "s"
                      } will be recorded as skipped.`
                    )
                  ) {
                    return
                  }
                  setFinished(true)
                  setShowResults(true)
                }}
                className="px-4 py-2 rounded-lg text-sm font-medium border border-white/[0.08] text-[#888888] hover:text-[#F0F0F0] hover:border-white/[0.16] transition-colors"
              >
                End
              </button>
            )}
          </div>
          {!isTwoPart && (
            <p className="text-[11px] text-[#888888] mt-3 text-center">
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
