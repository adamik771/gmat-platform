"use client"

import { useState, useTransition, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Check, Loader2, Pencil, X } from "lucide-react"
import { cn } from "@/lib/utils"

interface Props {
  initialTarget: number | null
  estimate: number | null
}

// GMAT Focus Edition: 205..805 in 10-point increments.
const SCORE_OPTIONS: number[] = []
for (let s = 205; s <= 805; s += 10) SCORE_OPTIONS.push(s)

/**
 * Inline editor for the Score Goal card's target-score value. Renders
 * three states:
 *   - `—` + "Set target" link when no target is stored
 *   - `805 target` + a pencil affordance when a target exists
 *   - an inline `<select>` + Save / Cancel buttons while editing
 *
 * Persists via POST /api/target-score which writes to
 * `user_metadata.target_score` on Supabase Auth. `router.refresh()`
 * after a successful save so the server-rendered estimate-vs-target
 * delta picks up the new value.
 */
export default function TargetScoreControl({
  initialTarget,
  estimate,
}: Props) {
  const [target, setTarget] = useState<number | null>(initialTarget)
  const [editing, setEditing] = useState(false)
  // Default the picker to the user's current target, or a sensible
  // starting point above their current estimate if they have one.
  const [draft, setDraft] = useState<number>(() => {
    if (initialTarget !== null) return initialTarget
    if (estimate !== null) {
      const rounded = Math.ceil((estimate + 50) / 10) * 10
      return Math.min(805, Math.max(205, rounded))
    }
    return 705
  })
  const [error, setError] = useState<string | null>(null)
  const [isPending, startTransition] = useTransition()
  const router = useRouter()

  // If server-side re-render changes initialTarget (e.g. user editing on
  // a second tab), sync the local state.
  useEffect(() => {
    setTarget(initialTarget)
  }, [initialTarget])

  async function save(value: number | null) {
    setError(null)
    try {
      const res = await fetch("/api/target-score", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ targetScore: value }),
      })
      if (!res.ok) {
        const body = (await res.json().catch(() => ({}))) as { error?: string }
        throw new Error(body.error || `Request failed (${res.status})`)
      }
      setTarget(value)
      setEditing(false)
      startTransition(() => router.refresh())
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong")
    }
  }

  if (editing) {
    return (
      <div className="flex items-baseline gap-2">
        <select
          value={draft}
          onChange={(e) => setDraft(Number(e.target.value))}
          disabled={isPending}
          className="bg-[#0A0A0A] border border-white/[0.12] rounded px-2 py-1 text-sm font-bold text-[#F0F0F0] focus:outline-none focus:border-[#C9A84C]/60"
        >
          {SCORE_OPTIONS.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
        <button
          type="button"
          onClick={() => save(draft)}
          disabled={isPending}
          className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-medium text-[#0A0A0A] disabled:opacity-60"
          style={{ backgroundColor: "#C9A84C" }}
          aria-label="Save target score"
        >
          {isPending ? (
            <Loader2 className="w-3 h-3 animate-spin" />
          ) : (
            <Check className="w-3 h-3" />
          )}
          Save
        </button>
        <button
          type="button"
          onClick={() => {
            setEditing(false)
            setError(null)
          }}
          disabled={isPending}
          className="p-1 rounded text-[#555555] hover:text-[#F0F0F0] hover:bg-white/[0.04] transition-colors"
          aria-label="Cancel"
        >
          <X className="w-3.5 h-3.5" />
        </button>
        {target !== null && (
          <button
            type="button"
            onClick={() => save(null)}
            disabled={isPending}
            className="text-xs text-[#555555] hover:text-[#FF4444] transition-colors ml-1"
          >
            Clear
          </button>
        )}
        {error && (
          <span className="text-xs ml-2" style={{ color: "#FF4444" }}>
            {error}
          </span>
        )}
      </div>
    )
  }

  return (
    <div className="inline-flex items-baseline gap-2">
      {target !== null ? (
        <>
          <span className="text-xl font-bold text-[#F0F0F0]">
            {target}
            <span className="text-sm font-normal text-[#555555] ml-1">
              target
            </span>
          </span>
          <button
            type="button"
            onClick={() => setEditing(true)}
            className="p-1 rounded text-[#555555] hover:text-[#F0F0F0] hover:bg-white/[0.04] transition-colors"
            aria-label="Edit target score"
          >
            <Pencil className="w-3 h-3" />
          </button>
        </>
      ) : (
        <>
          <span className="text-xl font-bold text-[#555555]">
            —
            <span className="text-sm font-normal text-[#555555] ml-1">
              target
            </span>
          </span>
          <button
            type="button"
            onClick={() => setEditing(true)}
            className={cn(
              "text-xs underline underline-offset-2 transition-colors",
              "text-[#888888] hover:text-[#C9A84C]"
            )}
          >
            Set target
          </button>
        </>
      )}
    </div>
  )
}
