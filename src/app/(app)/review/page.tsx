import Link from "next/link"
import { ArrowRight, RotateCcw } from "lucide-react"
import { createSupabaseServer } from "@/lib/supabase/server"
import { PAYWALL_ENABLED, canAccess, effectiveTierForUser } from "@/lib/entitlements"
import UpgradeGate from "@/components/shared/UpgradeGate"
import { bucketBySection, getReviewQueue, type ReviewCandidate } from "@/lib/review-queue"
import { gatherFlaggedQuestionIds } from "@/lib/mock"
import { getUserState } from "@/lib/user-state"
import { getQuestionsByIds } from "@/lib/content"
import { readSavedForReview } from "@/lib/spaced-review"
import { daysUntil } from "@/lib/utils"
import { getUserTz } from "@/lib/tz"
import MixedReviewCard from "@/components/shared/MixedReviewCard"
import ReviewCachePrimer from "@/components/offline/ReviewCachePrimer"
import type { CachedQuestion } from "@/lib/offline/review-cache"
import { reviewReason } from "./review-reasons"

export const metadata = { title: "Review" }

export default async function ReviewPage() {
  const supabase = await createSupabaseServer()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) {
    return <Frame><Header /><Notice title="Sign in to start reviewing" body="Your review queue comes from your own practice history." href="/login" action="Sign in" /></Frame>
  }

  if (PAYWALL_ENABLED) {
    const tier = await effectiveTierForUser(supabase, user, new Date())
    if (!canAccess(tier, "review-queue")) {
      return <UpgradeGate
        feature="The spaced-review queue"
        blurb="Revisit past questions when they are due, including successful answers returning for retention."
        perks={["Scheduled retention and corrective reviews", "Priority from spacing, past attempts, saved items, and flags", "Section-based review sessions"]}
      />
    }
  }

  const state = await getUserState(supabase, user)
  const tz = await getUserTz()
  const examDate = (user.user_metadata?.exam_date as string | null | undefined) ?? null
  const queue = await getReviewQueue(supabase, user.id, {
    limit: 60,
    flaggedQuestionIds: gatherFlaggedQuestionIds(state),
    savedQuestionIds: readSavedForReview(state),
    daysUntilExam: daysUntil(examDate, tz),
  })
  if (queue === null) {
    return <Frame><Header /><Notice title="Couldn't load your review queue" body="Practice history could not be read. This is not an empty queue." href="/review" action="Try again" /></Frame>
  }

  const buckets = bucketBySection(queue)
  const [{ count: totalWrongCount }, { count: reviewedCount }] = await Promise.all([
    supabase.from("practice_attempts").select("id", { count: "exact", head: true }).eq("user_id", user.id).eq("is_correct", false),
    supabase.from("error_tags").select("attempt_id", { count: "exact", head: true }).eq("user_id", user.id).eq("reviewed", true),
  ])
  const toReviewCount = totalWrongCount === null || reviewedCount === null
    ? null
    : Math.max(0, totalWrongCount - reviewedCount)
  const chapterProgress = (state.chapter_progress ?? {}) as Record<string, { problemSetResults?: Record<string, { total?: number }> }>
  const hasChapterPractice = Object.values(chapterProgress).some((chapter) =>
    ["easy", "medium", "hard"].some((difficulty) => (chapter?.problemSetResults?.[difficulty]?.total ?? 0) > 0)
  )
  // Correct-only due histories and completed sets both supply mixed-review pools.
  const hasMixedReviewHistory = queue.length > 0 || (totalWrongCount ?? 0) > 0 || hasChapterPractice
  const firstSection = queue[0]?.section
  const questionPayloads: CachedQuestion[] = getQuestionsByIds(queue.map((item) => item.questionId))
    .filter((question) => question.options.length > 0)
    .map((question) => ({
      id: question.id,
      section: question.section,
      topic: question.topic,
      subtopic: question.subtopic,
      difficulty: question.difficulty,
      type: question.type,
      prompt: question.prompt,
      context: question.context ?? null,
      options: question.options,
      correctAnswer: question.correctAnswer,
      correctAnswerLetter: question.correctAnswerLetter,
      explanation: question.explanation,
      chartSpec: question.chartSpec,
    }))

  return (
    <Frame>
      {queue.length > 0 && <ReviewCachePrimer userId={user.id} queue={queue} questions={questionPayloads} />}
      <Header />
      {firstSection ? (
        <section className="border-y border-white/10 py-5">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h2 className="text-xl font-semibold text-[#F0F0F0]">{queue.length} questions ready for review</h2>
              <p className="mt-1 text-sm text-[#B9B7AE]">Start with {firstSection}, the section containing your highest-priority question.</p>
            </div>
            <Link href={"/review/" + firstSection.toLowerCase()} className="inline-flex min-h-11 items-center gap-2 rounded-lg bg-[#C9A84C] px-4 py-2 text-sm font-semibold text-[#0A0A0A]">
              Start review <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
          <p className="mt-3 text-sm text-[#B9B7AE]">Up to 10 questions per session. This view shows up to 60 question items from the queue&apos;s last 12 weeks of attempt history; concept, drill, and recall items are separate in Full queue.</p>
        </section>
      ) : <Notice title="No question reviews due right now" body="Correct answers return after their spacing interval. You can continue learning while they are scheduled." href="/practice" action="Choose a practice set" />}

      {firstSection && <section>
        <h2 className="text-lg font-semibold text-[#F0F0F0]">By section</h2>
        <div className="mt-3 divide-y divide-white/10">
          {(["Quant", "Verbal", "DI"] as const).map((section) => {
            const items = buckets[section]
            if (!items.length) return null
            return <div key={section} className="py-4">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div className="min-w-0">
                  <h3 className="text-base font-semibold text-[#F0F0F0]">{section} · {items.length} questions</h3>
                  <p className="mt-1 text-sm text-[#B9B7AE]">{topicsSummary(items)}</p>
                  <p className="mt-1 text-sm text-[#B9B7AE]">{reasonSummary(items)}</p>
                </div>
                <Link href={"/review/" + section.toLowerCase()} className="inline-flex min-h-11 items-center gap-2 text-sm font-medium text-[#C9A84C]">
                  Review {section} <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
              </div>
            </div>
          })}
        </div>
      </section>}

      <details className="border-b border-white/10 pb-3">
        <summary className="min-h-11 cursor-pointer py-3 text-sm font-medium text-[#F0F0F0]">Why questions return</summary>
        <div className="space-y-2 text-sm leading-relaxed text-[#B9B7AE]">
          <p><strong className="text-[#F0F0F0]">Retention review:</strong> your last answer was correct and the spacing interval has elapsed. A due question is not necessarily an error.</p>
          <p><strong className="text-[#F0F0F0]">Previously missed:</strong> your last answer was incorrect. Saved and flagged questions can also return before their scheduled date.</p>
          <p>Correct answers extend the interval; incorrect answers bring a question back for correction. Overdue questions remain available and are prioritized alongside recent work. An approaching exam can shorten longer intervals, but reviews are not guaranteed to fall before exam day.</p>
        </div>
      </details>

      {hasMixedReviewHistory && <MixedReviewCard variant="global" unlocked />}
      {!hasMixedReviewHistory && <p className="text-sm leading-relaxed text-[#B9B7AE]">Mixed review needs questions from a scheduled review, a recent incorrect answer, or a chapter with a completed problem set. A correct answer can supply review material when its interval elapses.</p>}

      {toReviewCount !== null && toReviewCount > 0 && <Link href="/error-log" className="flex min-h-11 flex-wrap items-center justify-between gap-3 border-t border-white/10 py-4 text-sm text-[#B9B7AE]">
        <span>{toReviewCount} incorrect attempts not yet marked reviewed</span><span className="inline-flex items-center gap-2 text-[#C9A84C]">Open error log <ArrowRight className="h-4 w-4" aria-hidden /></span>
      </Link>}

      {queue.length > 0 && <Link href="/offline/drill" className="inline-flex min-h-11 items-center gap-2 text-sm text-[#B9B7AE]"><RotateCcw className="h-4 w-4" aria-hidden /> Offline drill of the cached queue <ArrowRight className="h-4 w-4" aria-hidden /></Link>}
    </Frame>
  )
}

function Frame({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto max-w-4xl space-y-6">{children}</div>
}

function Header() {
  return <header>
    <h1 className="text-3xl font-semibold text-[#F0F0F0]">Review</h1>
    <p className="mt-2 text-sm leading-relaxed text-[#B9B7AE]">Scheduled retention, corrective practice, and questions you chose to revisit.</p>
  </header>
}

function Notice({ title, body, href, action }: { title: string; body: string; href: string; action: string }) {
  return <section className="border-t border-white/10 py-5">
    <h2 className="text-lg font-semibold text-[#F0F0F0]">{title}</h2>
    <p className="mt-2 text-sm leading-relaxed text-[#B9B7AE]">{body}</p>
    <a href={href} className="mt-3 inline-flex min-h-11 items-center gap-2 text-sm font-medium text-[#C9A84C]">{action}<ArrowRight className="h-4 w-4" aria-hidden /></a>
  </section>
}

function topicsSummary(items: ReviewCandidate[]): string {
  const counts = new Map<string, number>()
  for (const item of items) counts.set(item.topic, (counts.get(item.topic) ?? 0) + 1)
  return [...counts.entries()].sort((a, b) => b[1] - a[1]).slice(0, 2).map(([topic]) => topic).join(", ")
}

function reasonSummary(items: ReviewCandidate[]): string {
  const counts = new Map<string, number>()
  for (const item of items) {
    const { label } = reviewReason(item)
    counts.set(label, (counts.get(label) ?? 0) + 1)
  }
  return [...counts.entries()].map(([label, count]) => count + " " + label.toLowerCase()).join(" · ")
}
