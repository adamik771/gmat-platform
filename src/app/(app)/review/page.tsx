import Link from "next/link"
import { AlertCircle, ArrowRight, RotateCcw } from "lucide-react"
import { createSupabaseServer } from "@/lib/supabase/server"
import { bucketBySection, getReviewQueue, type ReviewCandidate } from "@/lib/review-queue"

export const metadata = {
  title: "Review — Zakarian GMAT",
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
      <div className="max-w-2xl mx-auto">
        <Header />
        <EmptyState
          title="Sign in to start reviewing"
          body="Your review queue is personalised to your past practice. Sign in to see it."
        />
      </div>
    )
  }

  const queue = await getReviewQueue(supabase, user.id, { limit: 60 })
  const buckets = bucketBySection(queue)

  const totalDue = queue.length

  // Count untagged wrong attempts so we can nudge the student to
  // classify them — classification drives sharper error analysis and
  // in a future iteration can influence review priority directly.
  const [{ count: totalWrongCount }, { count: taggedCount }] = await Promise.all([
    supabase
      .from("practice_attempts")
      .select("id", { count: "exact", head: true })
      .eq("user_id", user.id)
      .eq("is_correct", false),
    supabase
      .from("error_tags")
      .select("id", { count: "exact", head: true })
      .eq("user_id", user.id),
  ])
  const untaggedCount = Math.max(0, (totalWrongCount ?? 0) - (taggedCount ?? 0))

  if (totalDue === 0) {
    return (
      <div className="max-w-2xl mx-auto">
        <Header />
        <EmptyState
          title="No questions due for review yet"
          body={
            <>
              Answer some questions in{" "}
              <Link
                href="/practice"
                className="underline underline-offset-2"
                style={{ color: "#C9A84C" }}
              >
                Practice
              </Link>{" "}
              first — once you&apos;ve attempted a question, it becomes eligible for spaced-retrieval review here.
            </>
          }
        />
      </div>
    )
  }

  const orderedSections: ReviewCandidate["section"][] = ["Quant", "Verbal", "DI"]

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <Header totalDue={totalDue} />

      {/* Untagged-mistakes nudge — classifying misses sharpens the
          error-type analysis on the dashboard + analytics. Only shown
          when the backlog is non-trivial so it doesn't nag users with
          one stray untagged item. */}
      {untaggedCount >= 5 && (
        <Link
          href="/error-log"
          className="flex items-center justify-between gap-3 p-4 rounded-xl border transition-colors hover:opacity-95"
          style={{
            borderColor: "rgba(255,68,68,0.18)",
            backgroundColor: "rgba(255,68,68,0.04)",
          }}
        >
          <div className="flex items-start gap-3">
            <AlertCircle
              className="w-4 h-4 mt-0.5 flex-shrink-0"
              style={{ color: "#FF4444" }}
            />
            <div>
              <p className="text-sm font-semibold text-[#F0F0F0]">
                {untaggedCount} untagged mistakes
              </p>
              <p className="text-xs text-[#888888] leading-relaxed">
                Classifying each miss (conceptual gap? trap-baited? careless?) takes ~5 seconds and makes your behaviour-pattern analytics much sharper. Worth doing before today&apos;s review.
              </p>
            </div>
          </div>
          <span
            className="flex-shrink-0 px-3 py-1.5 rounded-lg text-xs font-semibold"
            style={{
              backgroundColor: "rgba(255,68,68,0.12)",
              color: "#FF4444",
            }}
          >
            Tag them
          </span>
        </Link>
      )}

      <div className="space-y-3">
        {orderedSections.map((section) => {
          const items = buckets[section]
          if (items.length === 0) return null
          const topTopics = topicsSummary(items)
          return (
            <Link
              key={section}
              href={`/review/${section.toLowerCase()}`}
              className="block p-5 rounded-xl border border-white/[0.08] bg-[#111111] hover:bg-[#131313] transition-colors group"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <span
                      className="px-2 py-0.5 rounded text-[10px] uppercase tracking-wide"
                      style={{
                        backgroundColor: "rgba(201,168,76,0.08)",
                        color: "#C9A84C",
                      }}
                    >
                      {section}
                    </span>
                    <span className="text-xs text-[#555555]">
                      {items.length} question{items.length === 1 ? "" : "s"} due
                    </span>
                  </div>
                  <h2 className="text-lg font-semibold text-[#F0F0F0] mb-1">
                    Review {section}
                  </h2>
                  {topTopics && (
                    <p className="text-xs text-[#888888]">
                      Focus areas: {topTopics}
                    </p>
                  )}
                </div>
                <ArrowRight className="w-4 h-4 text-[#555555] group-hover:text-[#C9A84C] transition-colors flex-shrink-0 mt-1" />
              </div>
            </Link>
          )
        })}
      </div>

      <p className="text-xs text-[#555555] leading-relaxed">
        Questions are ranked by a priority score that combines how recently you missed them, how many times you&apos;ve missed them, and how long it&apos;s been since you last saw them. Items you got right at first attempt that are still fresh aren&apos;t surfaced — you&apos;ll see those again if they age out or a related topic drops in accuracy.
      </p>
    </div>
  )
}

function Header({ totalDue }: { totalDue?: number }) {
  return (
    <div>
      <div className="flex items-center gap-2 mb-2">
        <RotateCcw className="w-4 h-4" style={{ color: "#C9A84C" }} />
        <h1 className="text-2xl sm:text-3xl font-bold text-[#F0F0F0]">Daily Review</h1>
      </div>
      <p className="text-sm text-[#888888] leading-relaxed">
        {typeof totalDue === "number"
          ? `${totalDue} question${totalDue === 1 ? "" : "s"} ready for retrieval practice — ranked by the ones your memory is most likely leaking.`
          : "A daily spaced-retrieval queue drawn from your past practice."}
      </p>
    </div>
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
    <div className="mt-6 p-6 rounded-xl border border-white/[0.08] bg-[#111111]">
      <h2 className="text-base font-semibold text-[#F0F0F0] mb-2">{title}</h2>
      <p className="text-sm text-[#888888] leading-relaxed">{body}</p>
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
