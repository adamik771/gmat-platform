"use client"

import { useState, useTransition } from "react"
import { usePathname } from "next/navigation"
import {
  Bug,
  Check,
  Loader2,
  MessageSquare,
  Star,
  X,
} from "lucide-react"
import {
  TAG_DEFS,
  type FeedbackKind,
  type FeedbackTag,
} from "@/lib/beta-feedback"

/**
 * FeedbackWidget — floating bottom-right launcher with a 3-tab modal.
 *
 * Tabs:
 *   1. General   — free-form note + optional 1-5 star rating
 *   2. Bug       — bug report with categorical tag (UI / data / perf / auth / other)
 *   3. Rate      — quick star rating without a message
 *
 * Designed to be globally embeddable. Knows the current pathname via
 * `usePathname` so feedback rows are pre-tagged with the page that
 * spawned them — Adam can see "5 bug reports from /mock/run" in a
 * triage glance.
 */

type Tab = "general" | "bug" | "rating"

interface WidgetState {
  open: boolean
  tab: Tab
  message: string
  rating: number | null
  tag: FeedbackTag | null
  status: "idle" | "submitting" | "success" | "error"
  errorMsg: string | null
}

const initialState: WidgetState = {
  open: false,
  tab: "general",
  message: "",
  rating: null,
  tag: null,
  status: "idle",
  errorMsg: null,
}

export default function FeedbackWidget() {
  const pathname = usePathname()
  const [state, setState] = useState<WidgetState>(initialState)
  const [, startTransition] = useTransition()

  const reset = () => setState(initialState)
  const close = () => setState((s) => ({ ...s, open: false }))

  const submit = () => {
    setState((s) => ({ ...s, status: "submitting", errorMsg: null }))
    const kind: FeedbackKind =
      state.tab === "bug" ? "bug" : state.tab === "rating" ? "rating" : "general"
    startTransition(async () => {
      try {
        const res = await fetch("/api/feedback", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({
            kind,
            message: state.message.trim(),
            rating: state.rating,
            tag: state.tag,
            sourcePath: pathname,
          }),
        })
        const data = (await res.json()) as { ok?: boolean; error?: string }
        if (!res.ok || !data.ok) {
          setState((s) => ({
            ...s,
            status: "error",
            errorMsg: data.error ?? "Submission failed.",
          }))
          return
        }
        setState((s) => ({ ...s, status: "success" }))
        // Auto-close after a short success state.
        setTimeout(reset, 1500)
      } catch {
        setState((s) => ({
          ...s,
          status: "error",
          errorMsg: "Network error. Please try again.",
        }))
      }
    })
  }

  if (!state.open) {
    return (
      <button
        type="button"
        onClick={() => setState((s) => ({ ...s, open: true }))}
        className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-[12px] font-semibold tracking-tight transition-all hover:scale-[1.04]"
        style={{
          backgroundColor: "#0D0D0D",
          color: "#C9A84C",
          border: "1px solid rgba(201,168,76,0.3)",
          boxShadow: "0 8px 24px rgba(0,0,0,0.4)",
        }}
        aria-label="Send beta feedback"
      >
        <MessageSquare className="w-3.5 h-3.5" />
        Beta feedback
      </button>
    )
  }

  return (
    <div
      className="fixed bottom-5 right-5 z-40 w-[360px] max-w-[calc(100vw-2.5rem)] rounded-2xl border"
      style={{
        backgroundColor: "#0A0A0A",
        borderColor: "rgba(201,168,76,0.25)",
        boxShadow: "0 24px 60px rgba(0,0,0,0.6)",
      }}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-white/[0.06]">
        <p
          className="text-[10px] uppercase tracking-[0.22em] font-semibold"
          style={{ color: "#C9A84C" }}
        >
          Beta feedback
        </p>
        <button
          type="button"
          onClick={close}
          className="text-[#888888] hover:text-[#F0F0F0] transition-colors"
          aria-label="Close feedback widget"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-white/[0.06]">
        <TabButton
          label="General"
          icon={MessageSquare}
          active={state.tab === "general"}
          onClick={() =>
            setState((s) => ({ ...s, tab: "general", tag: null, status: "idle" }))
          }
        />
        <TabButton
          label="Bug"
          icon={Bug}
          active={state.tab === "bug"}
          onClick={() =>
            setState((s) => ({ ...s, tab: "bug", tag: "ui-bug", status: "idle" }))
          }
        />
        <TabButton
          label="Rate"
          icon={Star}
          active={state.tab === "rating"}
          onClick={() =>
            setState((s) => ({ ...s, tab: "rating", tag: null, status: "idle" }))
          }
        />
      </div>

      {/* Body */}
      <div className="p-4 space-y-4">
        {state.status === "success" ? (
          <SuccessState />
        ) : (
          <>
            {state.tab !== "rating" && (
              <textarea
                value={state.message}
                onChange={(e) =>
                  setState((s) => ({ ...s, message: e.target.value }))
                }
                rows={4}
                placeholder={
                  state.tab === "bug"
                    ? "What broke? What were you doing?"
                    : "What would make this better?"
                }
                className="w-full p-3 text-[13px] text-[#F0F0F0] bg-[#111111] border border-white/[0.08] rounded-lg focus:outline-none focus:border-[rgba(201,168,76,0.4)] resize-none"
              />
            )}

            {state.tab === "bug" && (
              <TagPicker
                kind="bug"
                value={state.tag}
                onChange={(t) => setState((s) => ({ ...s, tag: t }))}
              />
            )}

            {(state.tab === "general" || state.tab === "rating") && (
              <RatingPicker
                value={state.rating}
                onChange={(r) => setState((s) => ({ ...s, rating: r }))}
                required={state.tab === "rating"}
              />
            )}

            {state.errorMsg && (
              <p
                className="text-[12px]"
                style={{ color: "#FF8888" }}
              >
                {state.errorMsg}
              </p>
            )}

            <button
              type="button"
              onClick={submit}
              disabled={
                state.status === "submitting" ||
                (state.tab === "rating" && state.rating === null) ||
                (state.tab !== "rating" && state.message.trim().length === 0)
              }
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-[13px] font-semibold tracking-tight transition-all disabled:opacity-40 hover:scale-[1.01]"
              style={{ backgroundColor: "#C9A84C", color: "#0A0A0A" }}
            >
              {state.status === "submitting" ? (
                <>
                  <Loader2 className="w-3.5 h-3.5 animate-spin" />
                  Sending…
                </>
              ) : (
                "Send feedback"
              )}
            </button>
          </>
        )}
      </div>
    </div>
  )
}

function TabButton({
  label,
  icon: Icon,
  active,
  onClick,
}: {
  label: string
  icon: typeof MessageSquare
  active: boolean
  onClick: () => void
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex-1 flex items-center justify-center gap-1.5 py-2.5 text-[11px] uppercase tracking-[0.18em] font-semibold transition-colors border-b-2"
      style={{
        borderColor: active ? "#C9A84C" : "transparent",
        color: active ? "#C9A84C" : "#888888",
      }}
    >
      <Icon className="w-3 h-3" />
      {label}
    </button>
  )
}

function TagPicker({
  kind,
  value,
  onChange,
}: {
  kind: "bug" | "question"
  value: FeedbackTag | null
  onChange: (t: FeedbackTag) => void
}) {
  const tags = TAG_DEFS.filter((t) => t.kinds.includes(kind))
  return (
    <div>
      <p className="text-[10px] uppercase tracking-[0.18em] font-semibold mb-2 text-[#888888]">
        Category
      </p>
      <div className="flex flex-wrap gap-1.5">
        {tags.map((t) => {
          const active = value === t.id
          return (
            <button
              key={t.id}
              type="button"
              onClick={() => onChange(t.id)}
              className="inline-flex items-center text-[11px] font-semibold tracking-tight px-2.5 py-1 rounded-md transition-colors"
              style={{
                backgroundColor: active ? "#C9A84C" : "rgba(201,168,76,0.10)",
                color: active ? "#0A0A0A" : "#C9A84C",
              }}
            >
              {t.label}
            </button>
          )
        })}
      </div>
    </div>
  )
}

function RatingPicker({
  value,
  onChange,
  required,
}: {
  value: number | null
  onChange: (n: number) => void
  required: boolean
}) {
  return (
    <div>
      <p className="text-[10px] uppercase tracking-[0.18em] font-semibold mb-2 text-[#888888]">
        {required ? "Your rating" : "Optional rating"}
      </p>
      <div className="flex gap-1.5">
        {[1, 2, 3, 4, 5].map((n) => {
          const active = value !== null && value >= n
          return (
            <button
              key={n}
              type="button"
              onClick={() => onChange(n)}
              aria-label={`Rate ${n} stars`}
              className="p-1 rounded transition-transform hover:scale-110"
            >
              <Star
                className="w-5 h-5"
                style={{
                  color: active ? "#C9A84C" : "#444444",
                  fill: active ? "#C9A84C" : "transparent",
                }}
              />
            </button>
          )
        })}
      </div>
    </div>
  )
}

function SuccessState() {
  return (
    <div className="flex items-start gap-3 py-4">
      <div
        className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
        style={{
          backgroundColor: "rgba(62,207,142,0.12)",
          border: "1px solid rgba(62,207,142,0.3)",
        }}
      >
        <Check className="w-4 h-4" style={{ color: "#3ECF8E" }} />
      </div>
      <div>
        <p className="text-[13px] font-semibold text-[#F0F0F0] tracking-tight">
          Got it — thank you.
        </p>
        <p className="text-[11px] text-[#888888] mt-1 leading-relaxed">
          Your feedback is in the triage queue. We read every entry.
        </p>
      </div>
    </div>
  )
}
