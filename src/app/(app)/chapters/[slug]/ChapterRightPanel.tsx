import Link from "next/link"
import { ArrowRight, Lightbulb, Target, RotateCcw, Sparkles } from "lucide-react"

interface Props {
  section: "Quant" | "Verbal" | "DI"
  estimatedPages: number
  totalSections: number
  completedSections: number
  hasProblemSets: boolean
  /** When set, the call-to-action surfaces the next-unread section. */
  nextUnreadTitle: string | null
  nextUnreadAnchorId: string | null
  /** The chapter's anchor concept (Mental model / summary), pinned at the
   *  top of the rail as a reference while reading. */
  bigIdea?: string | null
  /** Session slug of this chapter's first practice test (`ch-<slug>-t1`), or
   *  null when the chapter has no bank yet. The practice CTA falls back to the
   *  /practice hub when null so the link never 404s. */
  firstPracticeTestSlug?: string | null
}

/**
 * Right-side learning panel rendered alongside the chapter on lg+ screens.
 * Server-component — pure read of the props. Surfaces three things:
 *
 *  1. A compact progress dial with reading-time-remaining estimate.
 *  2. A "next" call-to-action linking to the next unread section anchor
 *     (or to the problem-set block once all readings are done).
 *  3. Two utility links — open the practice queue and open the spaced
 *     review queue. These are global app surfaces, but giving the student
 *     one click from the chapter avoids a sidebar trip.
 *
 * Hidden below lg breakpoint to keep the mobile flow uncluttered.
 */
export default function ChapterRightPanel({
  section,
  estimatedPages,
  totalSections,
  completedSections,
  hasProblemSets,
  nextUnreadTitle,
  nextUnreadAnchorId,
  bigIdea,
  firstPracticeTestSlug,
}: Props) {
  const pct =
    totalSections > 0
      ? Math.round((completedSections / totalSections) * 100)
      : 0
  // Remaining time scales linearly with unread sections.
  const remainingFraction =
    totalSections > 0 ? (totalSections - completedSections) / totalSections : 1
  const remainingPages = Math.max(0, Math.round(estimatedPages * remainingFraction))

  // Deep-link to this chapter's first practice test; fall back to the Practice
  // hub when the chapter has no bank yet (so the CTA never 404s).
  const practiceHref = firstPracticeTestSlug
    ? `/practice/session/${firstPracticeTestSlug}`
    : "/practice"

  return (
    <div className="space-y-4 text-[13px]">
      {/* The big idea — chapter's anchor concept, pinned for reference */}
      {bigIdea && (
        <div
          className="rounded-xl border p-5"
          style={{
            backgroundColor: "var(--read-gold-soft)",
            borderColor: "var(--read-gold-strong)",
          }}
        >
          <div className="flex items-center gap-2 mb-2.5">
            <Lightbulb
              className="w-3.5 h-3.5 flex-shrink-0"
              style={{ color: "var(--read-gold)" }}
            />
            <p
              className="text-[10px] font-semibold uppercase tracking-[0.22em]"
              style={{ color: "var(--read-gold)" }}
            >
              The big idea
            </p>
          </div>
          <p
            className="text-[13px] leading-[1.6]"
            style={{ color: "var(--read-text)" }}
          >
            {bigIdea}
          </p>
        </div>
      )}

      {/* Progress dial card */}
      <div
        className="rounded-xl border p-5"
        style={{
          backgroundColor: "var(--read-bg-elevated)",
          borderColor: "var(--read-border)",
        }}
      >
        <p
          className="text-[10px] font-semibold uppercase tracking-[0.22em] mb-3"
          style={{ color: "var(--read-text-faint)" }}
        >
          Your progress
        </p>
        <div className="flex items-baseline gap-2 mb-3">
          <span
            className="font-display text-3xl font-semibold tabular-nums"
            style={{ color: "var(--read-text)" }}
          >
            {pct}%
          </span>
          <span
            className="text-[11px] tracking-wide"
            style={{ color: "var(--read-text-faint)" }}
          >
            {completedSections} / {totalSections} read
          </span>
        </div>
        <div
          className="h-1.5 rounded-full overflow-hidden"
          style={{ backgroundColor: "var(--read-bg-inset)" }}
        >
          <div
            className="h-full rounded-full transition-all duration-500"
            style={{
              width: `${pct}%`,
              backgroundColor: "var(--read-gold)",
            }}
          />
        </div>
        <p
          className="text-[11px] mt-3"
          style={{ color: "var(--read-text-faint)" }}
        >
          ~{remainingPages} page{remainingPages === 1 ? "" : "s"} left
        </p>
      </div>

      {/* Next-action card */}
      {nextUnreadTitle && nextUnreadAnchorId ? (
        <a
          href={`#${nextUnreadAnchorId}`}
          className="group block rounded-xl border p-5 transition-colors"
          style={{
            backgroundColor: "var(--read-bg-elevated)",
            borderColor: "var(--read-gold-strong)",
          }}
        >
          <p
            className="text-[10px] font-semibold uppercase tracking-[0.22em] mb-2"
            style={{ color: "var(--read-gold)" }}
          >
            Up next
          </p>
          <p
            className="font-medium leading-snug"
            style={{ color: "var(--read-text)" }}
          >
            {nextUnreadTitle}
          </p>
          <div
            className="flex items-center gap-1.5 mt-3 text-[11px] uppercase tracking-[0.2em] font-semibold"
            style={{ color: "var(--read-gold)" }}
          >
            Continue
            <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
          </div>
        </a>
      ) : hasProblemSets ? (
        <a
          href="#chapter-problem-sets"
          className="group block rounded-xl border p-5 transition-colors"
          style={{
            backgroundColor: "var(--read-bg-elevated)",
            borderColor: "var(--read-gold-strong)",
          }}
        >
          <p
            className="text-[10px] font-semibold uppercase tracking-[0.22em] mb-2"
            style={{ color: "var(--read-gold)" }}
          >
            Ready to apply
          </p>
          <p
            className="font-medium leading-snug"
            style={{ color: "var(--read-text)" }}
          >
            Try the graded problem sets
          </p>
          <div
            className="flex items-center gap-1.5 mt-3 text-[11px] uppercase tracking-[0.2em] font-semibold"
            style={{ color: "var(--read-gold)" }}
          >
            Start
            <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
          </div>
        </a>
      ) : (
        <div
          className="rounded-xl border p-5"
          style={{
            backgroundColor: "var(--read-bg-elevated)",
            borderColor: "var(--read-border)",
          }}
        >
          <Sparkles
            className="w-4 h-4 mb-2"
            style={{ color: "var(--read-gold)" }}
          />
          <p
            className="font-medium leading-snug"
            style={{ color: "var(--read-text)" }}
          >
            Chapter complete
          </p>
          <p
            className="text-[11px] mt-1.5"
            style={{ color: "var(--read-text-faint)" }}
          >
            Move on, or revisit any section above.
          </p>
        </div>
      )}

      {/* Quick actions — practice + review */}
      <div
        className="rounded-xl border overflow-hidden"
        style={{
          backgroundColor: "var(--read-bg-elevated)",
          borderColor: "var(--read-border)",
        }}
      >
        <p
          className="text-[10px] font-semibold uppercase tracking-[0.22em] px-5 pt-4 pb-2"
          style={{ color: "var(--read-text-faint)" }}
        >
          When you&apos;re ready
        </p>
        <Link
          href={practiceHref}
          className="group flex items-center gap-3 px-5 py-3 transition-colors"
          style={{ color: "var(--read-text-body)" }}
        >
          <Target
            className="w-4 h-4 flex-shrink-0"
            style={{ color: "var(--read-text-faint)" }}
          />
          <span className="flex-1">Practice {section}</span>
          <ArrowRight
            className="w-3 h-3 opacity-50 transition-all group-hover:opacity-100 group-hover:translate-x-0.5"
            style={{ color: "var(--read-gold)" }}
          />
        </Link>
        <Link
          href="/review/all"
          className="group flex items-center gap-3 px-5 py-3 border-t transition-colors"
          style={{
            color: "var(--read-text-body)",
            borderColor: "var(--read-border)",
          }}
        >
          <RotateCcw
            className="w-4 h-4 flex-shrink-0"
            style={{ color: "var(--read-text-faint)" }}
          />
          <span className="flex-1">Review queue</span>
          <ArrowRight
            className="w-3 h-3 opacity-50 transition-all group-hover:opacity-100 group-hover:translate-x-0.5"
            style={{ color: "var(--read-gold)" }}
          />
        </Link>
      </div>
    </div>
  )
}
