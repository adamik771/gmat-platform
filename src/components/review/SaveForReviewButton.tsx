"use client"

import { useState, useTransition } from "react"
import { Bookmark, BookmarkCheck, Loader2 } from "lucide-react"

/**
 * SaveForReviewButton — a one-click toggle that flags a question for
 * the spaced-review queue with a +50 priority boost.
 *
 * Reads its starting state from the `initialSaved` prop (so the button
 * matches what's already in `user_metadata.saved_for_review`); thereafter
 * the state is local + optimistic. Failed POSTs roll back the state.
 *
 * Three visual variants:
 *   - "default" — full button with label, ~28px tall
 *   - "compact" — icon-only, ~24px square (for inline rows)
 *   - "ghost"   — outlined, no fill (for cards that have other CTAs)
 */
export default function SaveForReviewButton({
  questionId,
  initialSaved,
  variant = "default",
  onToggle,
}: {
  questionId: string
  initialSaved: boolean
  variant?: "default" | "compact" | "ghost"
  /** Fired after a successful add/remove, with the new saved state. Lets a
   *  parent react (e.g. the Saved tab refreshes so an unsaved row drops out). */
  onToggle?: (saved: boolean) => void
}) {
  const [saved, setSaved] = useState(initialSaved)
  const [error, setError] = useState<string | null>(null)
  const [pending, startTransition] = useTransition()

  const toggle = () => {
    const nextSaved = !saved
    setSaved(nextSaved) // optimistic
    setError(null)
    startTransition(async () => {
      try {
        const res = await fetch("/api/saved-for-review", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({
            questionId,
            action: nextSaved ? "add" : "remove",
          }),
        })
        const data = (await res.json()) as { ok?: boolean; error?: string }
        if (!res.ok || !data.ok) {
          setSaved(!nextSaved) // roll back
          setError(data.error ?? "Failed to save")
        } else {
          onToggle?.(nextSaved)
        }
      } catch {
        setSaved(!nextSaved)
        setError("Network error")
      }
    })
  }

  if (variant === "compact") {
    return (
      <button
        type="button"
        onClick={toggle}
        disabled={pending}
        aria-label={saved ? "Remove from review queue" : "Save for review"}
        title={saved ? "Saved — click to remove" : "Save for review"}
        className="inline-flex items-center justify-center w-7 h-7 rounded-md transition-colors disabled:opacity-50"
        style={{
          backgroundColor: saved ? "rgba(201,168,76,0.18)" : "rgba(201,168,76,0.06)",
          color: saved ? "#C9A84C" : "#888888",
          border: `1px solid ${saved ? "rgba(201,168,76,0.4)" : "rgba(255,255,255,0.08)"}`,
        }}
      >
        {pending ? (
          <Loader2 className="w-3.5 h-3.5 animate-spin" />
        ) : saved ? (
          <BookmarkCheck className="w-3.5 h-3.5" />
        ) : (
          <Bookmark className="w-3.5 h-3.5" />
        )}
      </button>
    )
  }

  const isGhost = variant === "ghost"
  return (
    <div className="inline-flex flex-col items-stretch gap-1">
      <button
        type="button"
        onClick={toggle}
        disabled={pending}
        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-[12px] font-semibold tracking-tight transition-colors disabled:opacity-50"
        style={
          saved
            ? {
                backgroundColor: isGhost ? "transparent" : "rgba(201,168,76,0.18)",
                color: "#C9A84C",
                border: `1px solid ${isGhost ? "rgba(201,168,76,0.4)" : "rgba(201,168,76,0.5)"}`,
              }
            : {
                backgroundColor: isGhost ? "transparent" : "rgba(201,168,76,0.06)",
                color: "#C9A84C",
                border: `1px solid rgba(201,168,76,0.25)`,
              }
        }
      >
        {pending ? (
          <Loader2 className="w-3.5 h-3.5 animate-spin" />
        ) : saved ? (
          <BookmarkCheck className="w-3.5 h-3.5" />
        ) : (
          <Bookmark className="w-3.5 h-3.5" />
        )}
        {saved ? "Saved for review" : "Save for review"}
      </button>
      {error && (
        <p className="text-[11px]" style={{ color: "#FF8888" }}>
          {error}
        </p>
      )}
    </div>
  )
}
