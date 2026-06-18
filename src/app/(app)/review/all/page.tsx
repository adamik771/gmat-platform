import Link from "next/link"
import {
  AlertTriangle,
  ArrowLeft,
  ArrowRight,
  Bookmark,
  Brain,
  CheckCircle2,
  Clock,
  Flag,
  HelpCircle,
  ListChecks,
  RotateCcw,
  Sparkles,
  Target,
} from "lucide-react"
import { createSupabaseServer } from "@/lib/supabase/server"
import {
  buildSpacedReviewQueue,
  type SpacedItem,
  type SpacedItemKind,
} from "@/lib/spaced-review"
import { gatherFlaggedQuestionIds } from "@/lib/mock"
import { getUserState } from "@/lib/user-state"
import EmptyState from "@/components/shared/EmptyState"

export const metadata = {
  title: "Spaced Review — All Items",
}

const EYEBROW = "text-[10px] font-semibold uppercase tracking-[0.22em]"

const KIND_META: Record<SpacedItemKind, { label: string; icon: typeof Sparkles; color: string; bg: string }> = {
  question: {
    label: "Question",
    icon: Target,
    color: "#C9A84C",
    bg: "rgba(201,168,76,0.10)",
  },
  concept: {
    label: "Concept",
    icon: Brain,
    color: "#5FA8FF",
    bg: "rgba(95,168,255,0.10)",
  },
  drill: {
    label: "Drill",
    icon: ListChecks,
    color: "#3ECF8E",
    bg: "rgba(62,207,142,0.10)",
  },
  checkpoint: {
    label: "Recall check",
    icon: HelpCircle,
    color: "#B088FF",
    bg: "rgba(176,136,255,0.10)",
  },
}

/**
 * /review/all — unified spaced-review queue.
 *
 * Surfaces the four primitive item kinds that the spaced engine
 * schedules: missed questions, weak concepts, micro-drills, and active
 * recall checkpoints. Items are interleaved by composite priority that
 * blends overdue-ness, accuracy, confidence, and mistake type.
 *
 * The legacy `/review` page (per-section question cards) remains the
 * fast path for "do today's question review now"; this page is the
 * deeper surface for students who want to see WHY each item is queued.
 */
export default async function SpacedReviewAllPage() {
  const supabase = await createSupabaseServer()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    return (
      <FrameWrapper>
        <Header />
        <EmptyState
          icon={RotateCcw}
          title="Sign in to see your spaced queue"
          description="Your queue is personalised. Sign in to see what's due across questions, concepts, drills, and recall checkpoints."
          ctaHref="/login"
          ctaLabel="Sign in"
          size="md"
        />
      </FrameWrapper>
    )
  }

  const state = await getUserState(supabase, user)
  const flaggedQuestionIds = gatherFlaggedQuestionIds(state)
  const queue = await buildSpacedReviewQueue(
    supabase,
    user.id,
    state,
    { flaggedQuestionIds, limit: 40 }
  )

  if (queue.total === 0) {
    return (
      <FrameWrapper>
        <Header />
        <CaughtUpState />
      </FrameWrapper>
    )
  }

  const counts = {
    question: queue.byKind.question.length,
    concept: queue.byKind.concept.length,
    drill: queue.byKind.drill.length,
    checkpoint: queue.byKind.checkpoint.length,
  }

  return (
    <FrameWrapper>
      <Header />

      {/* Counts strip */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10">
        {(Object.keys(counts) as SpacedItemKind[]).map((kind) => (
          <KindCountCard key={kind} kind={kind} count={counts[kind]} />
        ))}
      </div>

      {/* Interleaved priority list */}
      <section>
        <div className="flex items-center gap-3 mb-5">
          <span
            className="h-px w-8"
            style={{
              background:
                "linear-gradient(to right, transparent, rgba(201,168,76,0.6))",
            }}
          />
          <p className={EYEBROW} style={{ color: "#C9A84C" }}>
            Top of the queue
          </p>
        </div>
        <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-[-0.02em] text-[#F0F0F0] leading-[1.05] mb-3">
          Highest-priority{" "}
          <span className="font-display-italic" style={{ color: "#C9A84C" }}>
            first.
          </span>
        </h2>
        <p className="text-[14px] text-[#888888] mb-6 leading-relaxed max-w-2xl">
          Composite ranking blends overdue-ness, recent accuracy, your last reported confidence, and the dominant mistake type. Lower-confidence and concept-gap misses surface earlier.
        </p>

        <div className="space-y-3">
          {queue.items.map((item) => (
            <ItemRow key={item.id} item={item} />
          ))}
        </div>
      </section>

      {/* Per-kind sections (collapsed view of the same items, grouped) */}
      {(["concept", "drill", "checkpoint"] as SpacedItemKind[]).map((kind) =>
        queue.byKind[kind].length > 0 ? (
          <KindSection key={kind} kind={kind} items={queue.byKind[kind]} />
        ) : null
      )}
    </FrameWrapper>
  )
}

// ---------- Subcomponents ----------

function Header() {
  return (
    <section className="mb-10">
      <Link
        href="/review"
        className="inline-flex items-center gap-1.5 text-[12px] tracking-tight text-[#888888] hover:text-[#F0F0F0] transition-colors mb-6"
      >
        <ArrowLeft className="w-3 h-3" />
        Back to Review
      </Link>
      <div className="flex items-center gap-3 mb-4">
        <span
          className="h-px w-10"
          style={{
            background:
              "linear-gradient(to right, transparent, rgba(201,168,76,0.6))",
          }}
        />
        <p className={EYEBROW} style={{ color: "#C9A84C" }}>
          Spaced Review · Full Queue
        </p>
      </div>
      <h1 className="font-display text-4xl md:text-5xl font-semibold tracking-[-0.02em] text-[#F0F0F0] leading-[1.05] mb-4">
        Everything{" "}
        <span className="font-display-italic" style={{ color: "#C9A84C" }}>
          due.
        </span>
      </h1>
      <p className="text-[15px] text-[#C0C0C0] leading-relaxed max-w-3xl">
        Four item types schedule independently — questions on a 0/2/7/21/42 ladder, concepts slower (3/10/28/56), drills on the question ladder, recall checkpoints fastest (1/4/14/30). Confidence and mistake-type modifiers shift each item up or down.
      </p>
    </section>
  )
}

function CaughtUpState() {
  return (
    <div
      className="text-center py-16 px-8 rounded-2xl border border-white/[0.06] bg-[#0D0D0D]"
      style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.03)" }}
    >
      <CheckCircle2
        className="w-10 h-10 mx-auto mb-5"
        style={{ color: "#3ECF8E" }}
      />
      <p className="text-[18px] font-semibold text-[#F0F0F0] tracking-tight mb-2">
        Caught up.
      </p>
      <p className="text-[14px] text-[#888888] max-w-md mx-auto leading-relaxed">
        Nothing due across questions, concepts, drills, or recall. Take a fresh practice set or run a mock — anything you miss will resurface here on its ladder.
      </p>
      <div className="flex items-center gap-3 justify-center mt-6">
        <Link
          href="/practice"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-[12px] font-semibold tracking-tight"
          style={{ backgroundColor: "#C9A84C", color: "#0A0A0A" }}
        >
          Start a practice set
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
        <Link
          href="/mock"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-[12px] font-semibold tracking-tight"
          style={{
            backgroundColor: "rgba(201,168,76,0.12)",
            color: "#C9A84C",
          }}
        >
          Run a mock
        </Link>
      </div>
    </div>
  )
}

function KindCountCard({ kind, count }: { kind: SpacedItemKind; count: number }) {
  const meta = KIND_META[kind]
  const Icon = meta.icon
  return (
    <div
      className="p-4 rounded-2xl border border-white/[0.08] bg-[#0D0D0D]"
      style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.03)" }}
    >
      <div className="flex items-center justify-between mb-2">
        <Icon className="w-4 h-4" style={{ color: meta.color }} />
        <span
          className="text-[10px] uppercase tracking-[0.18em] font-semibold"
          style={{ color: meta.color }}
        >
          {meta.label}
        </span>
      </div>
      <p className="font-display text-3xl font-semibold tracking-[-0.02em] text-[#F0F0F0] leading-none">
        {count}
      </p>
      <p className="text-[11px] text-[#888888] mt-1">
        due now
      </p>
    </div>
  )
}

function ItemRow({ item }: { item: SpacedItem }) {
  const meta = KIND_META[item.kind]
  const Icon = meta.icon
  const isOverdue = item.daysUntilDue < 0

  let title = ""
  let detail = ""
  if (item.kind === "question") {
    title = `${item.subtopic} question — ${item.section}`
    detail = `Missed ${item.missCount} time${item.missCount === 1 ? "" : "s"} · ${item.attemptCount} attempt${item.attemptCount === 1 ? "" : "s"} total`
  } else if (item.kind === "concept") {
    title = item.subskill
    detail = `${Math.round(item.accuracy * 100)}% on ${item.totalAttempts} attempts · ${item.section}`
  } else if (item.kind === "drill") {
    title = `${item.subchapter} drill`
    detail = `${item.chapterTitle} · ${item.section}`
  } else {
    title = `${item.subchapter} recall check`
    detail = `${item.chapterTitle} · ${item.section}`
  }

  return (
    <Link
      href={item.href}
      className="group flex items-start gap-4 p-5 rounded-2xl border border-white/[0.08] bg-[#0D0D0D] transition-all duration-300 hover:border-white/[0.14]"
      style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.03)" }}
    >
      <div
        className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
        style={{ backgroundColor: meta.bg, border: `1px solid ${meta.color}30` }}
      >
        <Icon className="w-4 h-4" style={{ color: meta.color }} />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1 flex-wrap">
          <span
            className="px-2 py-0.5 rounded text-[10px] uppercase tracking-[0.18em] font-semibold"
            style={{ backgroundColor: meta.bg, color: meta.color }}
          >
            {meta.label}
          </span>
          {item.kind === "question" && item.flagged && (
            <span className="inline-flex items-center gap-1 text-[11px] text-[#FF9933]">
              <Flag className="w-3 h-3" />
              flagged
            </span>
          )}
          {item.kind === "question" && item.savedForReview && (
            <span
              className="inline-flex items-center gap-1 text-[11px] font-semibold"
              style={{ color: "#C9A84C" }}
            >
              <Bookmark className="w-3 h-3" />
              saved
            </span>
          )}
          {isOverdue && (
            <span
              className="inline-flex items-center gap-1 text-[11px] font-semibold"
              style={{ color: "#FF4444" }}
            >
              <AlertTriangle className="w-3 h-3" />
              {Math.round(-item.daysUntilDue)}d overdue
            </span>
          )}
          <span className="inline-flex items-center gap-1 text-[11px] text-[#555555]">
            <Clock className="w-3 h-3" />
            rung {item.rung}
          </span>
        </div>
        <p className="text-[14px] font-semibold text-[#F0F0F0] tracking-tight">
          {title}
        </p>
        <p className="text-[12px] text-[#888888] mt-0.5">{detail}</p>
        <p className="text-[12px] text-[#888888] mt-2 italic leading-relaxed">
          {item.reason}
        </p>
      </div>
      <ArrowRight
        className="w-4 h-4 flex-shrink-0 mt-1 text-[#555555] group-hover:text-[#C9A84C] group-hover:translate-x-0.5 transition-all"
        aria-hidden
      />
    </Link>
  )
}

function KindSection({ kind, items }: { kind: SpacedItemKind; items: SpacedItem[] }) {
  const meta = KIND_META[kind]
  return (
    <section className="mt-12">
      <div className="flex items-center gap-3 mb-4">
        <span
          className="h-px w-8"
          style={{
            background:
              "linear-gradient(to right, transparent, rgba(201,168,76,0.6))",
          }}
        />
        <p className={EYEBROW} style={{ color: "#C9A84C" }}>
          {meta.label}s due
        </p>
        <span className="text-[12px] text-[#555555] tracking-tight">
          {items.length}
        </span>
      </div>
      <div className="space-y-2">
        {items.map((item) => (
          <ItemRow key={item.id} item={item} />
        ))}
      </div>
    </section>
  )
}

function FrameWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative">
      <div
        className="absolute inset-x-0 top-0 h-[400px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 55% at 50% 0%, rgba(201,168,76,0.08) 0%, transparent 60%)",
        }}
        aria-hidden
      />
      <div
        className="absolute inset-0 pointer-events-none bg-grain opacity-[0.03] mix-blend-overlay"
        aria-hidden
      />
      <div className="relative max-w-4xl mx-auto">{children}</div>
    </div>
  )
}
