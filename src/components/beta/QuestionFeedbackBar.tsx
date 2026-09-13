"use client"

import { useId, useRef, useState, useTransition } from "react"
import { usePathname } from "next/navigation"
import {
  AlertCircle,
  Check,
  HelpCircle,
  Loader2,
  Scissors,
  Snail,
  ThumbsDown,
  ThumbsUp,
  Zap,
} from "lucide-react"
import { TAG_DEFS, type FeedbackTag } from "@/lib/beta-feedback"

/**
 * QuestionFeedbackBar — per-question feedback row for the deep-review
 * surface. Six category buttons open an optional note before submission.
 * The compact explanation variant is for already-revealed solutions.
 *
 * Usage:
 *   <QuestionFeedbackBar questionId={q.id} />
 *
 * Designed for the `/review/question/[id]` page but can be embedded
 * anywhere a single question is rendered (e.g., end-of-session
 * explanation panel).
 */

const QUICK_TAGS: Array<{
  id: FeedbackTag
  label: string
  icon: typeof ThumbsUp
}> = [
  { id: "wrong-answer", label: "Wrong answer", icon: AlertCircle },
  { id: "unclear-prompt", label: "Unclear prompt", icon: HelpCircle },
  { id: "ambiguous-options", label: "Ambiguous options", icon: Scissors },
  { id: "too-easy", label: "Too easy", icon: ThumbsUp },
  { id: "too-hard", label: "Too hard", icon: ThumbsDown },
  { id: "explanation-incomplete", label: "Explanation needs work", icon: Snail },
]

export default function QuestionFeedbackBar({
  questionId,
  variant = "full",
}: {
  questionId: string
  variant?: "full" | "explanation"
}) {
  const pathname = usePathname()
  const noteId = useId()
  const inFlight = useRef(false)
  const compact = variant === "explanation"
  const [activeTag, setActiveTag] = useState<FeedbackTag | null>(null)
  const [message, setMessage] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [errorMsg, setErrorMsg] = useState<string | null>(null)
  const [pending, startTransition] = useTransition()

  // Surface state: idle → pick a tag → optionally add note → submit → done
  const submit = (tag: FeedbackTag, note: string) => {
    if (inFlight.current) return
    inFlight.current = true
    setErrorMsg(null)
    startTransition(async () => {
      try {
        const res = await fetch("/api/feedback", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({
            kind: "question",
            message: note.trim() || tagLabelFor(tag),
            questionId,
            tag,
            sourcePath: pathname,
          }),
        })
        const data = (await res.json()) as { ok?: boolean; error?: string }
        if (!res.ok || !data.ok) {
          setErrorMsg(data.error ?? "Submission failed.")
          return
        }
        setSubmitted(true)
        setActiveTag(null)
        setMessage("")
        setTimeout(() => setSubmitted(false), 4000)
      } catch {
        setErrorMsg("Network error. Please try again.")
      } finally {
        inFlight.current = false
      }
    })
  }

  if (submitted) {
    return (
      <div
        role="status"
        className={compact ? "mt-4 flex items-center gap-2" : "p-4 rounded-2xl border flex items-center gap-3"}
        style={{
          borderColor: compact ? undefined : "rgba(62,207,142,0.3)",
          backgroundColor: compact ? undefined : "rgba(62,207,142,0.05)",
        }}
      >
        <Check className="w-4 h-4 flex-shrink-0" style={{ color: "#3ECF8E" }} />
        <p className="text-[13px]" style={{ color: "var(--read-text-body, #F0F0F0)" }}>
          Thanks — feedback recorded against this question.
        </p>
      </div>
    )
  }

  return (
    <div
      className={compact ? "mt-4" : "p-5 rounded-2xl border border-white/[0.08] bg-[#0D0D0D]"}
    >
      {compact ? (
        <button
          type="button"
          disabled={pending}
          aria-expanded={activeTag !== null}
          aria-controls={activeTag ? noteId : undefined}
          onClick={() => { setActiveTag(activeTag ? null : "explanation-incomplete"); setErrorMsg(null) }}
          className="inline-flex items-center gap-2 py-2 text-[12px] underline underline-offset-4 disabled:opacity-50"
          style={{ color: "var(--read-text-body, #C0C0C0)" }}
        >
          <HelpCircle className="h-3.5 w-3.5 shrink-0" />
          This explanation confused me
        </button>
      ) : <>
      <div className="flex items-center gap-2 mb-3">
        <Zap className="w-3.5 h-3.5" style={{ color: "#C9A84C" }} />
        <p
          className="text-[10px] uppercase tracking-[0.22em] font-semibold"
          style={{ color: "#C9A84C" }}
        >
          Flag this question
        </p>
      </div>
      {/* Tag buttons */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-4">
        {QUICK_TAGS.map((t) => {
          const Icon = t.icon
          const active = activeTag === t.id
          return (
            <button
              key={t.id}
              type="button"
              disabled={pending}
              onClick={() => setActiveTag(active ? null : t.id)}
              className="inline-flex items-center gap-2 px-3 py-2 rounded-lg text-[12px] font-semibold tracking-tight transition-colors"
              style={{
                backgroundColor: active ? "#C9A84C" : "rgba(201,168,76,0.10)",
                color: active ? "#0A0A0A" : "#C9A84C",
              }}
            >
              <Icon className="w-3.5 h-3.5" />
              {t.label}
            </button>
          )
        })}
      </div>
      </>}

      {/* Optional note */}
      {activeTag && (
        <>
          <textarea
            id={noteId}
            aria-label="Optional feedback: which step is missing or unclear?"
            maxLength={2000}
            disabled={pending}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={3}
            placeholder={hintFor(activeTag)}
            className="w-full p-3 text-[12px] text-[#F0F0F0] bg-[#111111] border border-white/[0.08] rounded-lg focus:outline-none focus:border-[rgba(201,168,76,0.4)] resize-none mb-3"
            style={compact ? { color: "var(--read-text-body, #F0F0F0)", backgroundColor: "var(--read-bg-inset, #111111)", borderColor: "var(--read-border, rgba(255,255,255,0.08))" } : undefined}
          />
          {errorMsg && (
            <p role="alert" className="text-[12px] mb-3" style={{ color: "var(--read-error, #FF8888)" }}>
              {errorMsg}
            </p>
          )}
          <div className="flex items-center gap-3 justify-end">
            <button
              type="button"
              disabled={pending}
              onClick={() => {
                setActiveTag(null)
                setMessage("")
              }}
              className="text-[12px] text-[#888888] hover:text-[#F0F0F0] transition-colors"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={() => submit(activeTag, message)}
              disabled={pending}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-[12px] font-semibold tracking-tight transition-all disabled:opacity-50 hover:scale-[1.02]"
              style={{ backgroundColor: "#C9A84C", color: "#0A0A0A" }}
            >
              {pending ? (
                <>
                  <Loader2 className="w-3 h-3 animate-spin" />
                  Sending…
                </>
              ) : (
                errorMsg ? "Retry sending" : "Send feedback"
              )}
            </button>
          </div>
        </>
      )}
    </div>
  )
}

function hintFor(tag: FeedbackTag): string {
  switch (tag) {
    case "wrong-answer":
      return "Which answer do you think is correct, and why?"
    case "unclear-prompt":
      return "Which sentence in the prompt was confusing?"
    case "ambiguous-options":
      return "Which two answer choices are too close to distinguish?"
    case "too-easy":
      return "Optional: which sub-skill makes it too easy?"
    case "too-hard":
      return "Optional: which step felt impossibly hard?"
    case "explanation-incomplete":
      return "Which step is missing or unclear?"
    default:
      return "Add any context that helps Adam triage…"
  }
}

function tagLabelFor(tag: FeedbackTag): string {
  return TAG_DEFS.find((t) => t.id === tag)?.label ?? tag
}
