"use client"

import { useState, useTransition, type ReactNode } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Circle,
  Clock,
  Loader2,
} from "lucide-react"
import { cn } from "@/lib/utils"
import ReaderThemeToggle, { useReadingTheme } from "@/components/shared/ReaderThemeToggle"

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
    <div
      className="rounded-2xl border px-6 py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
      style={{
        backgroundColor: "var(--read-bg-elevated)",
        borderColor: "var(--read-border-strong)",
      }}
    >
      <div className="flex items-start gap-3">
        {completed ? (
          <CheckCircle2
            className="w-5 h-5 flex-shrink-0 mt-0.5"
            style={{ color: "var(--read-success)" }}
          />
        ) : (
          <Circle
            className="w-5 h-5 flex-shrink-0 mt-0.5"
            style={{ color: "var(--read-text-faint)" }}
          />
        )}
        <div>
          <p
            className="font-display text-[15px] font-semibold tracking-tight"
            style={{ color: "var(--read-text)" }}
          >
            {completed ? "Lesson completed" : "Mark this lesson as complete"}
          </p>
          <p
            className="text-[13px] mt-1 leading-relaxed"
            style={{ color: "var(--read-text-body)" }}
          >
            {completed
              ? justCompleted && nextSlug
                ? "Nice — your progress is saved. Ready for the next one?"
                : "Your progress is saved. You can re-open this lesson anytime."
              : "Tracks progress on the Lessons page and your dashboard."}
          </p>
          {error && (
            <p className="text-xs mt-1" style={{ color: "var(--read-error)" }}>
              {error}
            </p>
          )}
        </div>
      </div>

      <div className="flex items-center gap-2 flex-shrink-0">
        {completed && justCompleted && nextSlug && (
          <a
            href={`/lessons/${nextSlug}`}
            className="px-3.5 py-2 rounded-xl text-xs font-semibold tracking-tight border transition-colors"
            style={{
              borderColor: "var(--read-border-strong)",
              color: "var(--read-text-body)",
            }}
          >
            Next lesson
          </a>
        )}
        <button
          type="button"
          onClick={toggle}
          disabled={busy}
          className={cn(
            "inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold tracking-tight transition-all disabled:opacity-60",
            completed ? "border" : "hover:opacity-90 hover:scale-[1.02]"
          )}
          style={
            completed
              ? {
                  borderColor: "var(--read-border-strong)",
                  color: "var(--read-text-body)",
                }
              : {
                  backgroundColor: "var(--read-gold)",
                  color: "var(--read-bg-inset)",
                }
          }
        >
          {busy && <Loader2 className="w-3 h-3 animate-spin" />}
          {completed ? "Mark incomplete" : "Mark complete"}
        </button>
      </div>
    </div>
  )
}

/**
 * Client shell that wraps the lesson reader (hero, article, complete toggle,
 * and prev/next navigation) in the `.reader-themed` class and surfaces the
 * light/dark toggle. The server component for the lesson page renders the
 * ReactMarkdown-authored article body into this shell so the whole reader
 * participates in the user's chosen reading theme.
 */
export function LessonReaderShell({
  moduleLabel,
  section,
  durationMinutes,
  title,
  description,
  initialCompleted,
  article,
  completeToggle,
  prev,
  next,
}: {
  moduleLabel: string
  section: string
  durationMinutes: number
  title: string
  description: string
  initialCompleted: boolean
  article: ReactNode
  completeToggle: ReactNode
  prev: { slug: string; title: string } | null
  next: { slug: string; title: string } | null
}) {
  const [theme, setTheme] = useReadingTheme()

  return (
    <div
      className="reader-themed max-w-3xl mx-auto space-y-8 rounded-2xl p-4 sm:p-6 -m-4 sm:-m-6"
      data-reading-theme={theme}
      style={{ backgroundColor: "var(--read-bg)", color: "var(--read-text)" }}
    >
      <div className="flex items-center justify-between gap-3">
        <Link
          href="/lessons"
          className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.22em] font-semibold transition-colors"
          style={{ color: "var(--read-text-muted)" }}
        >
          <ArrowLeft className="w-3 h-3" />
          All lessons
        </Link>
        <ReaderThemeToggle theme={theme} onChange={setTheme} />
      </div>

      <div
        className="relative overflow-hidden rounded-2xl border px-6 py-10 sm:px-10 sm:py-12"
        style={{
          backgroundColor: "var(--read-bg-inset)",
          borderColor: "var(--read-border)",
        }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% -10%, var(--read-gold-soft) 0%, transparent 60%)",
          }}
          aria-hidden
        />
        <div
          className="absolute inset-0 pointer-events-none bg-grain opacity-[0.025] mix-blend-overlay"
          aria-hidden
        />
        <div className="relative">
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span
              className="text-[10px] font-semibold uppercase tracking-[0.22em]"
              style={{ color: "var(--read-gold)" }}
            >
              {moduleLabel}
            </span>
            <span
              className="h-px w-8"
              style={{
                background:
                  "linear-gradient(to right, var(--read-gold-strong), transparent)",
              }}
              aria-hidden
            />
            <span
              className="px-2 py-0.5 rounded text-[11px] font-semibold tracking-wide"
              style={{
                backgroundColor: "var(--read-gold-soft)",
                color: "var(--read-gold)",
              }}
            >
              {section}
            </span>
            <span
              className="flex items-center gap-1.5 text-[11px] tracking-wide"
              style={{ color: "var(--read-text-faint)" }}
            >
              <Clock className="w-3 h-3" />
              {durationMinutes} min
            </span>
            {initialCompleted && (
              <span
                className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] uppercase tracking-[0.18em] font-semibold"
                style={{
                  backgroundColor: "var(--read-success-soft)",
                  color: "var(--read-success)",
                }}
              >
                <CheckCircle2 className="w-3 h-3" />
                Completed
              </span>
            )}
          </div>

          <h1
            className="font-display text-3xl sm:text-5xl font-semibold tracking-[-0.02em] leading-[1.05]"
            style={{ color: "var(--read-text)" }}
          >
            {title}
          </h1>
          <p
            className="text-[15px] sm:text-[16px] mt-5 leading-[1.75] max-w-2xl"
            style={{ color: "var(--read-text-body)" }}
          >
            {description}
          </p>
        </div>
      </div>

      <article
        className="rounded-2xl border px-6 py-10 sm:px-12 sm:py-14 prose-chapter-dropcap"
        style={{
          backgroundColor: "var(--read-bg-elevated)",
          borderColor: "var(--read-border)",
        }}
      >
        {article}
      </article>

      {completeToggle}

      <div className="grid sm:grid-cols-2 gap-3">
        {prev ? (
          <Link
            href={`/lessons/${prev.slug}`}
            className="group p-5 rounded-2xl border transition-all duration-300 hover:-translate-y-0.5"
            style={{
              backgroundColor: "var(--read-bg-elevated)",
              borderColor: "var(--read-border-strong)",
            }}
          >
            <p
              className="text-[10px] uppercase tracking-[0.22em] font-semibold flex items-center gap-1.5"
              style={{ color: "var(--read-gold)" }}
            >
              <ArrowLeft className="w-3 h-3" />
              Previous
            </p>
            <p
              className="font-display text-[15px] font-semibold mt-2 truncate tracking-tight transition-colors"
              style={{ color: "var(--read-text)" }}
            >
              {prev.title}
            </p>
          </Link>
        ) : (
          <div />
        )}
        {next ? (
          <Link
            href={`/lessons/${next.slug}`}
            className="group p-5 rounded-2xl border transition-all duration-300 hover:-translate-y-0.5 text-right"
            style={{
              backgroundColor: "var(--read-bg-elevated)",
              borderColor: "var(--read-border-strong)",
            }}
          >
            <p
              className="text-[10px] uppercase tracking-[0.22em] font-semibold flex items-center gap-1.5 justify-end"
              style={{ color: "var(--read-gold)" }}
            >
              Next
              <ArrowRight className="w-3 h-3" />
            </p>
            <p
              className="font-display text-[15px] font-semibold mt-2 truncate tracking-tight transition-colors"
              style={{ color: "var(--read-text)" }}
            >
              {next.title}
            </p>
          </Link>
        ) : (
          <div />
        )}
      </div>
    </div>
  )
}
