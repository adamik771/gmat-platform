import Link from "next/link"
import { ArrowRight, Bookmark, Flag } from "lucide-react"
import { createSupabaseServer } from "@/lib/supabase/server"
import { buildSpacedReviewQueue, type SpacedItem, type SpacedItemKind } from "@/lib/spaced-review"
import { gatherFlaggedQuestionIds } from "@/lib/mock"
import { getUserState } from "@/lib/user-state"
import { reviewReason, reviewTiming } from "../review-reasons"

export const metadata = { title: "Full review queue" }

const KIND_LABEL: Record<SpacedItemKind, string> = {
  question: "Questions", concept: "Concepts", drill: "Drills", checkpoint: "Recall checks",
}

export default async function SpacedReviewAllPage() {
  const supabase = await createSupabaseServer()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) {
    return <Frame><Header /><p className="text-sm text-[#B9B7AE]">Sign in to see your scheduled reviews.</p><Link href="/login" className="inline-flex min-h-11 items-center text-sm text-[#C9A84C]">Sign in</Link></Frame>
  }
  const state = await getUserState(supabase, user)
  const queue = await buildSpacedReviewQueue(supabase, user.id, state, {
    flaggedQuestionIds: gatherFlaggedQuestionIds(state), limit: 40,
  })
  return (
    <Frame>
      <Header />
      {queue.total === 0 ? <section className="border-t border-white/10 py-5">
        <h2 className="text-xl font-semibold text-[#F0F0F0]">No items in this queue right now</h2>
        <p className="mt-2 text-sm leading-relaxed text-[#B9B7AE]">Questions answered correctly can return later for retention. There is no need to make a mistake to use review.</p>
        <Link href="/practice" className="mt-3 inline-flex min-h-11 items-center gap-2 text-sm text-[#C9A84C]">Continue practice <ArrowRight className="h-4 w-4" aria-hidden /></Link>
      </section> : <>
        <section className="border-y border-white/10 py-4">
          <h2 className="text-base font-semibold text-[#F0F0F0]">{queue.total} items shown</h2>
          <dl className="mt-3 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {(Object.keys(KIND_LABEL) as SpacedItemKind[]).map((kind) => <div key={kind}><dt className="text-sm text-[#B9B7AE]">{KIND_LABEL[kind]}</dt><dd className="mt-1 text-xl font-semibold tabular-nums text-[#F0F0F0]">{queue.byKind[kind].length}</dd></div>)}
          </dl>
        </section>
        <section>
          <h2 className="text-lg font-semibold text-[#F0F0F0]">Priority order</h2>
          <p className="mt-2 text-sm leading-relaxed text-[#B9B7AE]">Showing up to 40 items across all four types. The Due review view counts question items only, so its total may differ.</p>
          <div className="mt-3 divide-y divide-white/10">
            {queue.items.map((item) => <ItemRow key={item.id} item={item} />)}
          </div>
        </section>
      </>}
    </Frame>
  )
}

function Header() {
  return <header>
    <h1 className="text-3xl font-semibold text-[#F0F0F0]">Full review queue</h1>
    <p className="mt-2 text-sm leading-relaxed text-[#B9B7AE]">Retention reviews, corrective practice, concepts, drills, and recall checks. Saved and flagged questions may appear before their scheduled date.</p>
  </header>
}

function ItemRow({ item }: { item: SpacedItem }) {
  const reason = item.kind === "question" ? reviewReason(item) : null
  const title = item.kind === "question" ? item.subtopic + " question"
    : item.kind === "concept" ? item.subskill
    : item.subchapter + (item.kind === "drill" ? " drill" : " recall check")
  const detail = item.kind === "question"
    ? item.attemptCount + " recorded attempt" + (item.attemptCount === 1 ? "" : "s") + (item.missCount > 0 ? " · " + item.missCount + " incorrect in that history" : "")
    : item.kind === "concept" ? Math.round(item.accuracy * 100) + "% correct on " + item.totalAttempts + " attempts"
    : item.chapterTitle
  return (
    <article className="py-4">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-[#B9B7AE]">
            <span>{item.section}</span>
            <span className="font-medium text-[#C9A84C]">{reason?.label ?? KIND_LABEL[item.kind]}</span>
            <span>{reviewTiming(item.daysUntilDue)}</span>
            {item.kind === "question" && item.savedForReview && <span className="inline-flex items-center gap-1"><Bookmark className="h-3.5 w-3.5" aria-hidden />Saved</span>}
            {item.kind === "question" && item.flagged && <span className="inline-flex items-center gap-1"><Flag className="h-3.5 w-3.5" aria-hidden />Flagged</span>}
          </div>
          <h3 className="mt-2 break-words text-base font-semibold text-[#F0F0F0]">{title}</h3>
          <p className="mt-1 text-sm text-[#B9B7AE]">{detail}</p>
        </div>
        <Link href={item.href} className="inline-flex min-h-11 items-center gap-2 text-sm font-medium text-[#C9A84C]">
          {item.kind === "question" ? item.attemptCount > 0 ? "Start " + item.section + " review" : "Open practice set" : "Open activity"} <ArrowRight className="h-4 w-4" aria-hidden />
        </Link>
      </div>
      <details className="mt-1">
        <summary className="min-h-11 cursor-pointer py-3 text-sm text-[#B9B7AE]">Why this is due</summary>
        <p className="max-w-2xl pb-2 text-sm leading-relaxed text-[#B9B7AE]">{reason?.detail ?? item.reason}</p>
      </details>
    </article>
  )
}

function Frame({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto max-w-4xl space-y-6">{children}</div>
}
