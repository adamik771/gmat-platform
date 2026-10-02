"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { ArrowRight, Shuffle } from "lucide-react"

/**
 * CTA that POSTs to /api/mixed-review, then redirects into the existing
 * custom-session runner with the interleaved question ids in the query
 * string. Used on the chapter reader (after problem sets) and on /review.
 *
 * Two variants:
 *   - chapter: `chapterSlug` provided → mixes current chapter + other
 *     completed chapters + misses + review queue. Label is the chapter title.
 *   - global: no `chapterSlug` → mixes misses + review queue + any completed
 *     chapter pool. Label reads "Mixed Review."
 */
/**
 * Build a runnable mixed-review session URL via the API. Shared by this
 * card and the session results screen's "Start mixed review" action.
 * Throws with a user-readable message when no set can be built.
 */
export async function buildMixedReviewUrl(
  chapterSlug?: string | null,
  count = 10
): Promise<string> {
  const res = await fetch("/api/mixed-review", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ chapterSlug: chapterSlug ?? undefined, count }),
  })
  if (!res.ok) {
    const j = (await res.json().catch(() => ({}))) as { error?: string }
    throw new Error(j.error ?? "Couldn't build a mixed review right now.")
  }
  const body = (await res.json()) as {
    ids?: string[]
    label?: string
    section?: string
  }
  if (!body.ids || body.ids.length === 0) {
    throw new Error(
      "Not enough practice history yet — run a few more sets and try again."
    )
  }
  return (
    `/practice/session/custom?ids=${encodeURIComponent(body.ids.join(","))}` +
    `&topic=${encodeURIComponent(body.label ?? "Mixed Review")}` +
    (body.section ? `&section=${encodeURIComponent(body.section)}` : "")
  )
}

export default function MixedReviewCard({
  chapterSlug,
  unlocked,
  count = 10,
  variant = "chapter",
}: {
  chapterSlug?: string
  /** False renders the locked / empty-state card. Used by the chapter
   *  reader before the student has completed any problem set. */
  unlocked?: boolean
  count?: number
  variant?: "chapter" | "global"
}) {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const isLocked = unlocked === false
  const title = variant === "chapter" ? "Interleaved mixed review" : "Mixed review"
  const lockedHint =
    variant === "chapter"
      ? "Complete at least one problem set to unlock — your mixed review pulls from the set you just ran plus your recent misses and review queue."
      : "Answer some practice questions first — mixed review pulls from your actual attempt history."

  async function start() {
    if (isLocked || loading) return
    setLoading(true)
    setError(null)
    try {
      router.push(await buildMixedReviewUrl(chapterSlug, count))
    } catch (e) {
      setError(e instanceof Error ? e.message : "Something went wrong")
      setLoading(false)
    }
  }

  // The card renders on /review (dark app chrome) AND inside the chapter
  // reader, whose light/sepia reading themes define var(--read-*). Every
  // color resolves the reader variable with the dark value as fallback —
  // hardcoded dark-palette text was near-invisible on the cream theme
  // (beta: "the white thing is not readable").
  const cText = "var(--read-text, #F0F0F0)"
  const cMuted = "var(--read-text-muted, #888888)"
  const cFaint = "var(--read-text-faint, #555555)"

  if (isLocked) {
    return (
      <div
        className="p-5 rounded-xl border"
        style={{
          borderColor: "rgba(255,255,255,0.06)",
          backgroundColor: "var(--read-bg-elevated, #0D0D0D)",
        }}
      >
        <div className="flex items-start gap-3">
          <div
            className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
            style={{ backgroundColor: "rgba(255,255,255,0.04)" }}
          >
            <Shuffle className="w-5 h-5" style={{ color: cFaint }} />
          </div>
          <div className="flex-1">
            <p
              className="text-[10px] uppercase tracking-widest mb-1"
              style={{ color: cFaint }}
            >
              Locked
            </p>
            <h3 className="text-sm font-semibold mb-1" style={{ color: cMuted }}>
              {title}
            </h3>
            <p className="text-xs leading-relaxed" style={{ color: cFaint }}>
              {lockedHint}
            </p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div>
      <button
        type="button"
        onClick={start}
        disabled={loading}
        className="w-full p-5 rounded-xl border text-left transition-opacity hover:opacity-95 disabled:opacity-60"
        style={{
          borderColor: "rgba(201,168,76,0.2)",
          backgroundColor: "rgba(201,168,76,0.04)",
        }}
      >
        <div className="flex items-start gap-3">
          <div
            className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
            style={{ backgroundColor: "rgba(201,168,76,0.12)" }}
          >
            <Shuffle className="w-5 h-5" style={{ color: "#C9A84C" }} />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1 flex-wrap">
              <p
                className="text-[10px] uppercase tracking-widest"
                style={{ color: cFaint }}
              >
                Research-backed interleaving
              </p>
              <span
                className="text-[10px] px-1.5 py-0.5 rounded font-semibold"
                style={{ backgroundColor: "rgba(201,168,76,0.14)", color: "#C9A84C" }}
              >
                {count}Q
              </span>
            </div>
            <h3 className="text-sm font-semibold mb-1" style={{ color: cText }}>
              {title}
            </h3>
            <p className="text-xs leading-relaxed" style={{ color: cMuted }}>
              {variant === "chapter"
                ? "Mixes this chapter with your recent misses and other completed chapters — you have to pick the method before executing it."
                : "One section, mixed topics — recent misses, queue items, and completed-chapter questions in one interleaved set."}
            </p>
            {error && (
              <p
                className="text-xs mt-2"
                style={{ color: "#FF4444" }}
                role="alert"
              >
                {error}
              </p>
            )}
          </div>
          <ArrowRight
            className="w-5 h-5 flex-shrink-0 mt-1"
            style={{ color: "#C9A84C" }}
          />
        </div>
      </button>
      <p className="text-[11px] mt-2 leading-relaxed" style={{ color: cFaint }}>
        {loading
          ? "Building your mix…"
          : "Set is built fresh each run — same pools, different sample."}
      </p>
    </div>
  )
}
