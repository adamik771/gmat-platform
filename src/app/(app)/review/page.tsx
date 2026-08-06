import Link from "next/link"
import { AlertCircle, ArrowRight, Bookmark, CheckCircle2, Clock, RotateCcw } from "lucide-react"
import { createSupabaseServer } from "@/lib/supabase/server"
import {
  PAYWALL_ENABLED,
  canAccess,
  effectiveTierForUser,
} from "@/lib/entitlements"
import UpgradeGate from "@/components/shared/UpgradeGate"
import {
  bucketBySection,
  getReviewQueue,
  SPACING_LADDER_DAYS,
  type ReviewCandidate,
} from "@/lib/review-queue"
import { gatherFlaggedQuestionIds } from "@/lib/mock"
import { getUserState } from "@/lib/user-state"
import { getQuestionsByIds } from "@/lib/content"
import { readSavedForReview } from "@/lib/spaced-review"
import { daysUntil } from "@/lib/utils"
import { getUserTz } from "@/lib/tz"
import MixedReviewCard from "@/components/shared/MixedReviewCard"
import ReviewCachePrimer from "@/components/offline/ReviewCachePrimer"
import type { CachedQuestion } from "@/lib/offline/review-cache"

export const metadata = {
  title: "Review",
}

/**
 * /review — daily spaced-retrieval landing page. Shows a per-section card
 * for each GMAT section that has questions due for review, counts the items,
 * and teases the top weak topics so the student knows why these questions
 * were picked.
 *
 * Retrieval practice on prior misses is the single highest-leverage
 * intervention in learning science (Roediger & Karpicke 2006); this view
 * is the daily entry point that makes it a habit rather than a suggestion.
 */
export default async function ReviewPage() {
  const supabase = await createSupabaseServer()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    return (
      <div className="max-w-3xl mx-auto">
        <Header />
        <EmptyState
          title="Sign in to start reviewing"
          body="Your review queue is personalised to your past practice. Sign in to see it."
        />
      </div>
    )
  }

  // Paywall gate (no-op while PAYWALL_ENABLED is off).
  if (PAYWALL_ENABLED) {
    const tier = await effectiveTierForUser(supabase, user, new Date())
    if (!canAccess(tier, "review-queue")) {
      return (
        <UpgradeGate
          feature="The spaced-review queue"
          blurb="A daily, spacing-aware queue that resurfaces your past misses at the right interval so the corrections actually stick — the retrieval engine behind durable score gains."
          perks={[
            "Daily spaced-retrieval queue built from your real misses",
            "Priority by recency, repeat misses, and optimal spacing",
            "Section-bucketed review sessions",
          ]}
        />
      )
    }
  }

  const state = await getUserState(supabase, user)
  const tz = await getUserTz()
  const flaggedQuestionIds = gatherFlaggedQuestionIds(state)
  const savedQuestionIds = readSavedForReview(state)
  const examDate =
    (user.user_metadata?.exam_date as string | null | undefined) ?? null
  const queue = await getReviewQueue(supabase, user.id, {
    limit: 60,
    flaggedQuestionIds,
    savedQuestionIds,
    daysUntilExam: daysUntil(examDate, tz),
  })

  // A failed read is NOT an empty queue — saying "all caught up" here
  // would tell the student to skip their daily review on a DB hiccup.
  if (queue === null) {
    return (
      <div className="max-w-3xl mx-auto">
        <Header />
        <EmptyState
          title="Couldn't load your review queue"
          body="Something went wrong reading your practice history. Your data is safe — reload the page to try again."
        />
      </div>
    )
  }

  const buckets = bucketBySection(queue)

  const totalDue = queue.length

  // Wrong attempts not yet marked reviewed — the same definition the
  // dashboard and study plan use. (The old "untagged" arithmetic broke
  // when the error log started auto-classifying every miss on render.)
  const [{ count: totalWrongCount }, { count: reviewedCount }] = await Promise.all([
    supabase
      .from("practice_attempts")
      .select("id", { count: "exact", head: true })
      .eq("user_id", user.id)
      .eq("is_correct", false),
    supabase
      .from("error_tags")
      .select("id", { count: "exact", head: true })
      .eq("user_id", user.id)
      .eq("reviewed", true),
  ])
  const toReviewCount = Math.max(0, (totalWrongCount ?? 0) - (reviewedCount ?? 0))
  const hasAttemptHistory = (totalWrongCount ?? 0) > 0

  if (totalDue === 0) {
    return (
      <div className="max-w-3xl mx-auto space-y-8">
        <Header />
        <CaughtUpState />
        {/* Mixed review is the evidence-backed next activity precisely
            when the queue is clear — interleaved retrieval on material
            the student has already practiced. Don't hide it here. */}
        {hasAttemptHistory && <MixedReviewCard variant="global" unlocked />}
        <div className="grid sm:grid-cols-2 gap-3">
          <QuietLinkCard
            href="/review/saved"
            icon={<Bookmark className="w-4 h-4" style={{ color: "#C9A84C" }} />}
            title="Saved questions"
            body="Everything you bookmarked, in one place."
          />
          <QuietLinkCard
            href="/review/all"
            icon={<RotateCcw className="w-4 h-4" style={{ color: "#C9A84C" }} />}
            title="Full spaced queue"
            body="Questions and weak concepts by priority."
          />
        </div>
      </div>
    )
  }

  const orderedSections: ReviewCandidate["section"][] = ["Quant", "Verbal", "DI"]

  // Fetch the question payloads for the current queue so we can cache
  // them alongside the queue index. /offline/drill replays them
  // without network. Bounded by the queue limit (≤60 items), so the
  // synchronous filesystem read is cheap.
  const questionPayloads: CachedQuestion[] = getQuestionsByIds(
    queue.map((c) => c.questionId)
  )
    .filter((q) => q.options.length > 0)
    .map((q) => ({
      id: q.id,
      section: q.section,
      topic: q.topic,
      subtopic: q.subtopic,
      difficulty: q.difficulty,
      type: q.type,
      prompt: q.prompt,
      context: q.context ?? null,
      options: q.options,
      correctAnswer: q.correctAnswer,
      correctAnswerLetter: q.correctAnswerLetter,
      explanation: q.explanation,
      chartSpec: q.chartSpec,
    }))

  return (
    <div className="max-w-3xl mx-auto space-y-8">
      {/* Side-effect: write the current queue + question payloads to
          IndexedDB so /offline/drill can run drills without network.
          Renders null. */}
      <ReviewCachePrimer
        userId={user.id}
        queue={queue}
        questions={questionPayloads}
      />
      <Header totalDue={totalDue} />

      <section>
        <div className="flex items-center gap-3 mb-5">
          <span
            className="font-display text-[11px] font-semibold tabular-nums"
            style={{ color: "rgba(201,168,76,0.55)" }}
            aria-hidden
          >
            01
          </span>
          <p
            className="text-[10px] font-semibold uppercase tracking-[0.22em]"
            style={{ color: "#C9A84C" }}
          >
            By section
          </p>
          <div
            className="h-px flex-1"
            style={{
              background:
                "linear-gradient(to right, rgba(201,168,76,0.3), transparent)",
            }}
            aria-hidden
          />
        </div>
        <h2 className="font-display text-3xl md:text-4xl font-semibold text-[#F0F0F0] tracking-[-0.02em] leading-[1.1] mb-5">
          What&apos;s{" "}
          <span className="font-display-italic" style={{ color: "#C9A84C" }}>
            due.
          </span>
        </h2>
        <div className="space-y-3">
          {orderedSections.map((section) => {
            const items = buckets[section]
            if (items.length === 0) return null
            const topTopics = topicsSummary(items)
            const overdueCount = items.filter((i) => i.daysUntilDue < 0).length
            const rungCounts = countRungs(items)
            return (
              <Link
                key={section}
                href={`/review/${section.toLowerCase()}`}
                className="group block p-6 rounded-2xl border border-white/[0.06] bg-[#0F0F0F] hover:border-white/[0.14] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_36px_-20px_rgba(201,168,76,0.2)]"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-2 flex-wrap">
                      <span
                        className="px-2 py-0.5 rounded-full text-[10px] uppercase tracking-[0.22em] font-semibold"
                        style={{
                          backgroundColor: "rgba(201,168,76,0.08)",
                          color: "#C9A84C",
                        }}
                      >
                        {section}
                      </span>
                      <span className="text-[11px] text-[#888888] tabular-nums">
                        {items.length} question{items.length === 1 ? "" : "s"} due
                      </span>
                      {overdueCount > 0 && (
                        <span
                          className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-[0.18em] tabular-nums"
                          style={{
                            backgroundColor: "rgba(255,68,68,0.12)",
                            color: "#FF4444",
                          }}
                        >
                          <Clock className="w-3 h-3" />
                          {overdueCount} overdue
                        </span>
                      )}
                    </div>
                    <h3 className="font-display text-2xl font-semibold text-[#F0F0F0] tracking-[-0.02em] leading-[1.1] mb-1.5">
                      Review{" "}
                      <span
                        className="font-display-italic"
                        style={{ color: "#C9A84C" }}
                      >
                        {section}.
                      </span>
                    </h3>
                    {topTopics && (
                      <p className="text-[13px] text-[#C0C0C0] leading-relaxed mb-2">
                        Focus areas: {topTopics}
                      </p>
                    )}
                    <RungDistribution counts={rungCounts} />
                  </div>
                  <ArrowRight className="w-4 h-4 text-[#888888] group-hover:text-[#C9A84C] group-hover:translate-x-0.5 transition-all flex-shrink-0 mt-1" />
                </div>
              </Link>
            )
          })}
        </div>
      </section>

      {/* Secondary surfaces — deliberately below the queue so the page
          has exactly one primary action (start today's review). */}
      <MixedReviewCard variant="global" unlocked={hasAttemptHistory} />

      <div className="grid sm:grid-cols-2 gap-3">
        <QuietLinkCard
          href="/review/saved"
          icon={<Bookmark className="w-4 h-4" style={{ color: "#C9A84C" }} />}
          title="Saved questions"
          body="Everything you bookmarked, in one place."
        />
        <QuietLinkCard
          href="/review/all"
          icon={<RotateCcw className="w-4 h-4" style={{ color: "#C9A84C" }} />}
          title="Full spaced queue"
          body="Questions and weak concepts by priority."
        />
      </div>

      {/* Offline-drill discoverability — the queue + question payloads
          on this page just got cached to IndexedDB by ReviewCachePrimer
          (above). */}
      <Link
        href="/offline/drill"
        className="flex items-center justify-between gap-3 p-4 rounded-xl border text-[12px] transition-colors hover:bg-white/[0.02]"
        style={{
          borderColor: "rgba(255,255,255,0.05)",
          backgroundColor: "rgba(255,255,255,0.012)",
          color: "rgba(192,192,192,0.7)",
        }}
      >
        <span className="flex items-center gap-2">
          <RotateCcw
            className="w-3.5 h-3.5"
            style={{ color: "#C9A84C" }}
          />
          <span>
            Drill this queue{" "}
            <span style={{ color: "#888888" }}>
              · works offline once cached
            </span>
          </span>
        </span>
        <ArrowRight
          className="w-3.5 h-3.5"
          style={{ color: "rgba(255,255,255,0.4)" }}
        />
      </Link>

      {/* Mistakes-to-review nudge — same definition as the dashboard chip
          (wrong attempts without reviewed=true). Below the queue: today's
          review is the primary job; clearing the error-log backlog is the
          follow-on. */}
      {toReviewCount >= 5 && (
        <Link
          href="/error-log"
          className="group flex items-center justify-between gap-3 p-5 rounded-2xl border transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_36px_-20px_rgba(255,68,68,0.25)]"
          style={{
            borderColor: "rgba(255,68,68,0.22)",
            backgroundColor: "rgba(255,68,68,0.04)",
          }}
        >
          <div className="flex items-start gap-3">
            <AlertCircle
              className="w-4 h-4 mt-0.5 flex-shrink-0"
              style={{ color: "#FF4444" }}
            />
            <div>
              <p className="text-[15px] font-semibold tracking-tight text-[#F0F0F0]">
                <span className="tabular-nums">{toReviewCount}</span> mistakes
                to review
              </p>
              <p className="text-[13px] text-[#C0C0C0] leading-[1.65] mt-1">
                Working through each miss in the error log (what happened, and
                why) is what turns a wrong answer into a fixed skill.
              </p>
            </div>
          </div>
          <span
            className="flex-shrink-0 px-3.5 py-1.5 rounded-xl text-xs font-semibold tracking-tight transition-all duration-200 group-hover:scale-[1.02]"
            style={{
              backgroundColor: "rgba(255,68,68,0.12)",
              color: "#FF4444",
            }}
          >
            Open error log
          </span>
        </Link>
      )}

      <p className="text-[13px] text-[#888888] leading-[1.75] italic">
        Spacing ladder: same day → 2 days → 7 days → 21 days → 42 days.
        Each correct answer moves a question up the ladder and hides it
        until the next gap elapses; a miss brings it back same-day, then it
        re-enters one rung below where it slipped. Near your exam the gaps
        shorten so nothing schedules past test day. Flagged and saved
        questions override the ladder and surface immediately.
      </p>
    </div>
  )
}

/** Compact secondary link card — quiet by design so the review queue
 *  stays the page's single primary action. */
function QuietLinkCard({
  href,
  icon,
  title,
  body,
}: {
  href: string
  icon: React.ReactNode
  title: string
  body: string
}) {
  return (
    <Link
      href={href}
      className="group flex items-center justify-between gap-3 p-4 rounded-xl border border-white/[0.06] bg-[#0D0D0D] transition-colors hover:border-white/[0.14]"
    >
      <div className="flex items-start gap-3 min-w-0">
        <span className="mt-0.5 flex-shrink-0">{icon}</span>
        <div className="min-w-0">
          <p className="text-[14px] font-semibold tracking-tight text-[#F0F0F0]">
            {title}
          </p>
          <p className="text-[12px] text-[#888888] leading-[1.6] mt-0.5">
            {body}
          </p>
        </div>
      </div>
      <ArrowRight
        className="w-4 h-4 flex-shrink-0 text-[#C9A84C] group-hover:translate-x-0.5 transition-transform"
        aria-hidden
      />
    </Link>
  )
}

function countRungs(items: ReviewCandidate[]): number[] {
  const counts = SPACING_LADDER_DAYS.map(() => 0)
  for (const i of items) counts[i.rung] = (counts[i.rung] ?? 0) + 1
  return counts
}

/** Compact row of rung labels with counts — e.g. "same-day 4 · 2d 6 · 7d 2".
 *  Only non-zero rungs render. Helps the student see at a glance whether
 *  their queue is lopsided (lots of same-day misses → recent struggle)
 *  or wide (many rungs active → sustained engagement). */
function RungDistribution({ counts }: { counts: number[] }) {
  const labels = ["same-day", "2d", "7d", "21d", "42d"]
  const entries = counts
    .map((count, rung) => ({ count, label: labels[rung] }))
    .filter((e) => e.count > 0)
  if (entries.length === 0) return null
  return (
    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[10px] text-[#888888] mt-2">
      {entries.map((e, i) => (
        <span key={e.label} className="inline-flex items-center gap-1.5">
          <span className="font-display text-[13px] font-semibold text-[#F0F0F0] tabular-nums leading-none">
            {e.count}
          </span>
          <span className="uppercase tracking-[0.18em] font-semibold">
            {e.label}
          </span>
          {i < entries.length - 1 && (
            <span className="text-[#333333] ml-2" aria-hidden="true">·</span>
          )}
        </span>
      ))}
    </div>
  )
}

function Header({ totalDue }: { totalDue?: number }) {
  return (
    <section
      className="relative overflow-hidden rounded-2xl border border-white/[0.06] px-6 py-10 sm:px-10 sm:py-14"
      style={{ backgroundColor: "#0D0D0D" }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 20% -10%, rgba(201,168,76,0.14) 0%, transparent 60%), radial-gradient(ellipse 70% 60% at 110% 110%, rgba(201,168,76,0.08) 0%, transparent 60%)",
        }}
        aria-hidden
      />
      <div
        className="absolute inset-0 pointer-events-none bg-grain opacity-[0.035] mix-blend-overlay"
        aria-hidden
      />
      <div className="relative">
        <div className="flex items-center gap-3 mb-4">
          <RotateCcw className="w-4 h-4" style={{ color: "#C9A84C" }} />
          <p
            className="text-[10px] font-semibold uppercase tracking-[0.22em]"
            style={{ color: "#C9A84C" }}
          >
            Daily review
          </p>
          <div
            className="h-px w-12"
            style={{
              background:
                "linear-gradient(to right, rgba(201,168,76,0.4), transparent)",
            }}
            aria-hidden
          />
        </div>
        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-[#F0F0F0] tracking-[-0.02em] leading-[1.05]">
          Spaced{" "}
          <span className="font-display-italic" style={{ color: "#C9A84C" }}>
            retrieval.
          </span>
        </h1>
        <p className="text-[15px] leading-[1.75] text-[#C0C0C0] mt-4 max-w-2xl">
          {typeof totalDue === "number" ? (
            <>
              <span className="tabular-nums">{totalDue}</span> question
              {totalDue === 1 ? "" : "s"} ready for retrieval practice — ranked
              by the ones your memory is most likely leaking.
            </>
          ) : (
            "A daily spaced-retrieval queue drawn from your past practice."
          )}
        </p>
      </div>
    </section>
  )
}

function EmptyState({
  title,
  body,
}: {
  title: string
  body: React.ReactNode
}) {
  return (
    <div className="mt-8 p-6 sm:p-7 rounded-2xl border border-white/[0.06] bg-[#0F0F0F]">
      <h2 className="font-display text-xl font-semibold text-[#F0F0F0] tracking-tight mb-2">
        {title}
      </h2>
      <p className="text-[14px] text-[#C0C0C0] leading-[1.75]">{body}</p>
    </div>
  )
}

/**
 * Full "caught-up" empty state for /review when nothing is due today.
 * Follows the friendly message + gold CTA pattern — eyebrow, Fraunces
 * italic accent, CheckCircle2 in brand gold, and two primary CTAs
 * (practice for fresh attempts, chapters for structured learning).
 */
function CaughtUpState() {
  return (
    <div
      className="mt-8 p-8 sm:p-10 rounded-2xl border border-white/[0.06] bg-[#0F0F0F] text-center"
      style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.04)" }}
    >
      <div
        className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-5"
        style={{
          backgroundColor: "rgba(201,168,76,0.12)",
          border: "1px solid rgba(201,168,76,0.28)",
        }}
      >
        <CheckCircle2 className="w-6 h-6" style={{ color: "#C9A84C" }} />
      </div>
      <p
        className="text-[10px] font-semibold uppercase tracking-[0.22em] mb-4"
        style={{ color: "#C9A84C" }}
      >
        All clear
      </p>
      <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#F0F0F0] tracking-[-0.02em] leading-[1.1] mb-3">
        You&apos;re all{" "}
        <span className="font-display-italic" style={{ color: "#C9A84C" }}>
          caught up.
        </span>
      </h2>
      <p className="text-[14px] text-[#C0C0C0] leading-[1.75] max-w-md mx-auto mb-6">
        No reviews due today. Fresh attempts in Practice or a new Chapter will
        seed tomorrow&apos;s queue.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-3">
        <Link
          href="/practice"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 hover:opacity-90 hover:scale-[1.02]"
          style={{ backgroundColor: "#C9A84C", color: "#0A0A0A" }}
        >
          Go to practice
          <ArrowRight className="w-4 h-4" />
        </Link>
        <Link
          href="/chapters"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold border transition-colors hover:border-white/[0.22]"
          style={{
            borderColor: "rgba(255,255,255,0.12)",
            color: "#F0F0F0",
          }}
        >
          Browse chapters
        </Link>
      </div>
    </div>
  )
}

/** Returns a short comma-separated list of the top 2 topics by count. */
function topicsSummary(items: ReviewCandidate[]): string | null {
  const counts = new Map<string, number>()
  for (const i of items) counts.set(i.topic, (counts.get(i.topic) ?? 0) + 1)
  const top = Array.from(counts.entries())
    .sort((a, b) => b[1] - a[1])
    .slice(0, 2)
    .map(([topic]) => topic)
  return top.length > 0 ? top.join(", ") : null
}
