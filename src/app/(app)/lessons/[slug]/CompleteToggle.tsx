"use client"

import { useState, useTransition } from "react"
import { useRouter } from "next/navigation"
import { CheckCircle2, Circle, Loader2 } from "lucide-react"
import { cn } from "@/lib/utils"

interface Props {
  slug: string
  initialCompleted: boolean
  nextSlug: string | null
}

/**
 * Pill button rendered at the bottom of a lesson body. Toggles the user's
 * lesson_completions row via /api/lesson-completions. On completion it also
 * offers a "Continue to next lesson" secondary link when the user just marked
 * a lesson done for the first time.
 */
export default function CompleteToggle({ slug, initialCompleted, nextSlug }: Props) {
  const [completed, setCompleted] = useState(initialCompleted)
  const [justCompleted, setJustCompleted] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [isPending, startTransition] = useTransition()
  const router = useRouter()

  async function toggle() {
    setError(null)
    const nextValue = !completed
    const method = nextValue ? "POST" : "DELETE"

    try {
      const res = await fetch("/api/lesson-completions", {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ slug }),
      })
      if (!res.ok) {
        const body = (await res.json().catch(() => ({}))) as { error?: string }
        throw new Error(body.error || `Request failed (${res.status})`)
      }
      setCompleted(nextValue)
      setJustCompleted(nextValue && !initialCompleted)
      // Revalidate server data so the /lessons list reflects the new status
      // the next time it's viewed.
      startTransition(() => router.refresh())
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong")
    }
  }

  const busy = isPending

  return (
    <div className="rounded-xl border border-white/[0.08] bg-[#111111] px-6 py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
      <div className="flex items-start gap-3">
        {completed ? (
          <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: "#3ECF8E" }} />
        ) : (
          <Circle className="w-5 h-5 flex-shrink-0 mt-0.5 text-[#555555]" />
        )}
        <div>
          <p className="text-sm font-semibold text-[#F0F0F0]">
            {completed ? "Lesson completed" : "Mark this lesson as complete"}
          </p>
          <p className="text-xs text-[#888888] mt-0.5">
            {completed
              ? justCompleted && nextSlug
                ? "Nice — your progress is saved. Ready for the next one?"
                : "Your progress is saved. You can re-open this lesson anytime."
              : "Tracks progress on the Lessons page and your dashboard."}
          </p>
          {error && (
            <p className="text-xs mt-1" style={{ color: "#FF4444" }}>
              {error}
            </p>
          )}
        </div>
      </div>

      <div className="flex items-center gap-2 flex-shrink-0">
        {completed && justCompleted && nextSlug && (
          <a
            href={`/lessons/${nextSlug}`}
            className="px-3 py-1.5 rounded-lg text-xs font-medium border border-white/[0.1] text-[#888888] hover:text-[#F0F0F0] hover:border-white/[0.2] transition-colors"
          >
            Next lesson
          </a>
        )}
        <button
          type="button"
          onClick={toggle}
          disabled={busy}
          className={cn(
            "inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-medium transition-colors disabled:opacity-60",
            completed
              ? "border border-white/[0.1] text-[#888888] hover:text-[#F0F0F0] hover:border-white/[0.2]"
              : "text-[#0A0A0A]"
          )}
          style={completed ? {} : { backgroundColor: "#C9A84C" }}
        >
          {busy && <Loader2 className="w-3 h-3 animate-spin" />}
          {completed ? "Mark incomplete" : "Mark complete"}
        </button>
      </div>
    </div>
  )
}
