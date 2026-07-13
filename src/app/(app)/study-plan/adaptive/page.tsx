import Link from "next/link"
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Calendar,
  Clock,
  ListChecks,
  RotateCcw,
  Sparkles,
  Target,
  Timer,
} from "lucide-react"
import { createSupabaseServer } from "@/lib/supabase/server"
import { daysUntil } from "@/lib/utils"
import {
  collectAdaptiveSignals,
  computeAdaptivePlan,
  type AdaptiveActivity,
  type AdaptiveDay,
  type AdaptivePlan,
  type AdaptiveWeek,
} from "@/lib/adaptive-plan-engine"
import { gatherFlaggedQuestionIds } from "@/lib/mock"
import { getUserState } from "@/lib/user-state"
import EmptyState from "@/components/shared/EmptyState"

export const metadata = {
  title: "Adaptive Study Plan",
}

const EYEBROW = "text-[10px] font-semibold uppercase tracking-[0.22em]"

/**
 * /study-plan/adaptive — adaptive multi-week plan.
 *
 * Pulls every signal source (official exams, latest mock, practice attempts,
 * timing, confidence log, mistake log, spaced-review queue) into a single
 * synthesised view, then renders the resulting weekly schedule.
 *
 * Five activity kinds: read-chapter, micro-drill, question-set, review,
 * mock. Each activity is rendered as a clickable card that takes the
 * student straight to the surface that runs it.
 */
export default async function AdaptivePlanPage() {
  const supabase = await createSupabaseServer()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    return (
      <Frame>
        <Header />
        <EmptyState
          icon={Calendar}
          title="Sign in to see your adaptive plan"
          description="The plan personalises to your official exams, mocks, and practice history. Sign in to generate yours."
          ctaHref="/login"
          ctaLabel="Sign in"
          size="md"
        />
      </Frame>
    )
  }

  const state = await getUserState(supabase, user)
  const flaggedQuestionIds = gatherFlaggedQuestionIds(state)
  const signals = await collectAdaptiveSignals(
    supabase,
    user.id,
    state,
    { flaggedQuestionIds }
  )

  // Derive days-available from exam_date if it's set. Shared local-midnight
  // parse — the old mixed UTC/local math here overshot by a day in
  // positive-offset timezones and disagreed with every other countdown.
  const examDate = (user.user_metadata?.exam_date as string | null | undefined) ?? null
  const targetScore = (user.user_metadata?.target_score as number | null | undefined) ?? null
  const daysAvailable =
    examDate !== null ? Math.max(0, daysUntil(examDate) ?? 0) : null

  const plan = computeAdaptivePlan(signals, {
    targetScore,
    daysAvailable,
  })

  return (
    <Frame>
      <Header />

      <HeadlinePanel plan={plan} daysAvailable={daysAvailable} />

      <SignalsPanel plan={plan} />

      <SectionOrderPanel plan={plan} />

      <div className="space-y-12 pt-2">
        {plan.weeks.map((week) => (
          <WeekPanel key={week.weekNumber} week={week} />
        ))}
      </div>
    </Frame>
  )
}

// ============================================================
// Subcomponents
// ============================================================

function Frame({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative">
      <div
        className="absolute inset-x-0 top-0 h-[480px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 55% at 50% 0%, rgba(201,168,76,0.10) 0%, transparent 60%)",
        }}
        aria-hidden
      />
      <div
        className="absolute inset-0 pointer-events-none bg-grain opacity-[0.03] mix-blend-overlay"
        aria-hidden
      />
      <div className="relative max-w-5xl mx-auto space-y-12">{children}</div>
    </div>
  )
}

function Header() {
  return (
    <section>
      <Link
        href="/study-plan"
        className="inline-flex items-center gap-1.5 text-[12px] tracking-tight text-[#888888] hover:text-[#F0F0F0] transition-colors mb-6"
      >
        <ArrowLeft className="w-3 h-3" />
        Back to Study Plan
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
          Adaptive Plan
        </p>
      </div>
      <h1 className="font-display text-4xl md:text-5xl font-semibold tracking-[-0.02em] text-[#F0F0F0] leading-[1.05] mb-4">
        Your weekly{" "}
        <span className="font-display-italic" style={{ color: "#C9A84C" }}>
          plan.
        </span>
      </h1>
      <p className="text-[15px] text-[#C0C0C0] leading-relaxed max-w-3xl">
        Synthesised from your official exams, latest mock, practice attempts, timing
        patterns, confidence log, and mistake-log patterns. Re-runs every time
        you visit, so the schedule stays current without you regenerating it.
      </p>
    </section>
  )
}

function HeadlinePanel({
  plan,
  daysAvailable,
}: {
  plan: AdaptivePlan
  daysAvailable: number | null
}) {
  return (
    <div
      className="relative p-7 sm:p-8 rounded-2xl border overflow-hidden"
      style={{
        borderColor: "rgba(201,168,76,0.18)",
        backgroundColor: "#0D0D0D",
        boxShadow:
          "0 0 60px rgba(201,168,76,0.06), inset 0 1px 0 rgba(255,255,255,0.04)",
      }}
    >
      <div
        className="absolute top-0 right-0 w-72 h-72 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 100% 0%, rgba(201,168,76,0.10) 0%, transparent 60%)",
        }}
        aria-hidden
      />
      {/* Profile badge — surfaces the inferred student profile so the
          student can see why their plan is shaped the way it is. */}
      <div className="relative flex items-center gap-2 flex-wrap mb-4">
        <span
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold tracking-tight"
          style={{
            backgroundColor: "rgba(201,168,76,0.14)",
            color: "#C9A84C",
            border: "1px solid rgba(201,168,76,0.25)",
          }}
        >
          <span
            className="text-[9px] uppercase tracking-[0.22em] font-semibold opacity-80"
          >
            Profile
          </span>
          {plan.profile.label}
        </span>
        {daysAvailable !== null && (
          <span
            className="text-[11px] uppercase tracking-[0.18em] text-[#888888] font-medium"
          >
            {daysAvailable > 0 ? `${daysAvailable}d to exam` : "Exam date past"}
          </span>
        )}
      </div>
      <p className="relative text-[15px] text-[#F0F0F0] leading-relaxed mb-2">
        {plan.headline}
      </p>
      <p className="relative text-[12px] text-[#888888] leading-relaxed">
        {plan.profile.rationale}
      </p>
    </div>
  )
}

function SignalsPanel({ plan }: { plan: AdaptivePlan }) {
  const s = plan.signals
  return (
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
          Signals feeding the plan
        </p>
      </div>
      <h2 className="font-display text-2xl md:text-3xl font-semibold tracking-[-0.02em] text-[#F0F0F0] leading-[1.1] mb-5">
        Where the{" "}
        <span className="font-display-italic" style={{ color: "#C9A84C" }}>
          evidence comes from.
        </span>
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <SignalCell
          label="Baseline score"
          value={s.diagnosticTotalScore !== null ? `${s.diagnosticTotalScore}` : "—"}
          sub={s.diagnosticPercentile !== null ? `${s.diagnosticPercentile}th pct` : "Not yet entered"}
        />
        <SignalCell
          label="Latest mock"
          value={s.latestMockTotalScore !== null ? `${s.latestMockTotalScore}` : "—"}
          sub={s.latestMockPercentile !== null ? `${s.latestMockPercentile}th pct` : "Not yet taken"}
        />
        <SignalCell
          label="Weak sub-skills"
          value={`${s.topWeakSubskills.length}`}
          sub="across diag + mock + practice"
        />
        <SignalCell
          label="Trap patterns"
          value={`${s.topTrapPatterns.length}`}
          sub={s.topTrapPatterns[0]?.trap.slice(0, 26) ?? "none recurring"}
        />
        <SignalCell
          label="Pacing"
          value={
            s.pacingPatterns.find((p) => p.pattern !== "efficient")?.pattern ?? "efficient"
          }
          sub="latest section read"
        />
        <SignalCell
          label="Low-conf items"
          value={`${s.lowConfidenceItemCount}`}
          sub="self-rated 1-2"
        />
        <SignalCell
          label="Spaced queue"
          value={`${s.pendingReviewTotal}`}
          sub={`Q${s.pendingReviewByKind.question}/C${s.pendingReviewByKind.concept}/D${s.pendingReviewByKind.drill}/R${s.pendingReviewByKind.checkpoint}`}
        />
        <SignalCell
          label="Priority fixes"
          value={`${s.priorityFixes.length}`}
          sub="from mistake log"
        />
      </div>
    </section>
  )
}

function SignalCell({
  label,
  value,
  sub,
}: {
  label: string
  value: string | number
  sub: string
}) {
  return (
    <div
      className="p-4 rounded-2xl border border-white/[0.08] bg-[#0D0D0D]"
      style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.03)" }}
    >
      <p className="text-[10px] uppercase tracking-[0.18em] text-[#888888] font-medium mb-2">
        {label}
      </p>
      <p
        className="font-display text-2xl font-semibold tracking-[-0.02em] leading-none mb-1"
        style={{ color: "#F0F0F0" }}
      >
        {value}
      </p>
      <p className="text-[11px] text-[#555555] leading-snug truncate">{sub}</p>
    </div>
  )
}

function SectionOrderPanel({ plan }: { plan: AdaptivePlan }) {
  return (
    <section
      className="p-6 rounded-2xl border border-white/[0.08] bg-[#0D0D0D]"
      style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.03)" }}
    >
      <p className={`${EYEBROW} mb-3`} style={{ color: "#C9A84C" }}>
        Recommended exam-day section order
      </p>
      <div className="flex items-center gap-3 flex-wrap mb-4">
        {plan.sectionOrder.map((sec, i) => (
          <span key={sec} className="inline-flex items-center gap-2">
            {i > 0 && <ArrowRight className="w-3.5 h-3.5 text-[#555555]" />}
            <span
              className="px-3 py-1.5 rounded-lg text-[12px] font-semibold tracking-tight"
              style={{
                backgroundColor: "rgba(201,168,76,0.12)",
                color: "#C9A84C",
              }}
            >
              {i + 1}. {sec}
            </span>
          </span>
        ))}
      </div>
      <p className="text-[13px] text-[#C0C0C0] leading-relaxed">
        {plan.sectionOrderRationale}
      </p>
    </section>
  )
}

function WeekPanel({ week }: { week: AdaptiveWeek }) {
  const totalHours = (week.totalEstimatedMinutes / 60).toFixed(1)
  return (
    <section>
      <div className="flex items-center gap-3 mb-5">
        <span
          className="font-display font-display-italic text-[1.5rem] leading-none"
          style={{ color: "#C9A84C" }}
        >
          {`Week ${String(week.weekNumber).padStart(2, "0")}`}
        </span>
        <span
          className="h-px w-8"
          style={{
            background:
              "linear-gradient(to right, transparent, rgba(201,168,76,0.6))",
          }}
        />
        <p className={EYEBROW} style={{ color: "#C9A84C" }}>
          {week.primarySection} focus
        </p>
        {week.hasMock && (
          <span className="inline-flex items-center gap-1 text-[11px] uppercase tracking-[0.18em] font-semibold px-2 py-0.5 rounded" style={{ color: "#C9A84C", backgroundColor: "rgba(201,168,76,0.12)" }}>
            <Timer className="w-3 h-3" /> mock week
          </span>
        )}
      </div>
      <h2 className="font-display text-2xl md:text-3xl font-semibold tracking-[-0.02em] text-[#F0F0F0] leading-[1.1] mb-3">
        {week.theme}
      </h2>
      <p className="text-[13px] text-[#C0C0C0] leading-relaxed mb-5 max-w-3xl">
        {week.rationale}
      </p>
      <div className="flex items-center gap-4 mb-6 text-[12px] text-[#888888]">
        <span className="inline-flex items-center gap-1.5">
          <Clock className="w-3.5 h-3.5" />
          ~{totalHours} hr / week
        </span>
        <span className="inline-flex items-center gap-1.5">
          <ListChecks className="w-3.5 h-3.5" />
          {week.totalQuestions} question{week.totalQuestions === 1 ? "" : "s"}
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-2">
        {week.days.map((day) => (
          <DayCard key={day.day} day={day} />
        ))}
      </div>
    </section>
  )
}

function DayCard({ day }: { day: AdaptiveDay }) {
  const isRest = day.isRest
  return (
    <div
      className="p-4 rounded-xl border border-white/[0.06] bg-[#0D0D0D] flex flex-col gap-2 min-h-[120px]"
      style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.02)" }}
    >
      <div className="flex items-baseline justify-between mb-1">
        <p className="text-[10px] uppercase tracking-[0.22em] font-semibold text-[#888888]">
          {day.weekday}
        </p>
        <p className="text-[10px] text-[#555555]">
          {day.estimatedMinutes > 0 ? `${day.estimatedMinutes}m` : "rest"}
        </p>
      </div>
      {isRest ? (
        <p className="text-[12px] text-[#555555] italic">Rest day.</p>
      ) : (
        <div className="space-y-1.5">
          {day.activities.map((a, i) => (
            <ActivityCell key={`${day.day}-${i}`} activity={a} />
          ))}
        </div>
      )}
    </div>
  )
}

function ActivityCell({ activity }: { activity: AdaptiveActivity }) {
  const meta = activityMeta(activity)
  const Icon = meta.icon
  return (
    <Link
      href={meta.href}
      className="group block p-2 -mx-1 rounded-lg transition-colors hover:bg-white/[0.03]"
    >
      <div className="flex items-start gap-2">
        <Icon
          className="w-3.5 h-3.5 mt-0.5 flex-shrink-0"
          style={{ color: meta.color }}
        />
        <div className="flex-1 min-w-0">
          <p
            className="text-[11px] uppercase tracking-[0.18em] font-semibold mb-0.5"
            style={{ color: meta.color }}
          >
            {meta.kindLabel}
          </p>
          <p className="text-[12px] text-[#F0F0F0] tracking-tight leading-snug truncate">
            {meta.title}
          </p>
        </div>
      </div>
    </Link>
  )
}

function activityMeta(a: AdaptiveActivity): {
  icon: typeof BookOpen
  color: string
  kindLabel: string
  title: string
  href: string
} {
  switch (a.kind) {
    case "read-chapter":
      return {
        icon: BookOpen,
        color: "#C9A84C",
        kindLabel: "Read",
        title: a.title,
        href: a.slug.startsWith("reading-")
          ? `/guides/${a.slug}`
          : `/chapters/${a.slug}`,
      }
    case "micro-drill":
      return {
        icon: Sparkles,
        color: "#3ECF8E",
        kindLabel: "Drill",
        title: a.subchapter,
        href: `/guides/${a.chapterSlug}#${a.blockAnchor}`,
      }
    case "question-set":
      return {
        icon: Target,
        color: "#5FA8FF",
        kindLabel: `${a.targetCount} Qs`,
        title: a.topic,
        href: `/practice/session/${a.topicSlug}`,
      }
    case "review":
      return {
        icon: RotateCcw,
        color: "#B088FF",
        kindLabel: "Review",
        title: `${a.targetCount} due`,
        href: a.href,
      }
    case "mock":
      return {
        icon: Timer,
        color: "#FF9933",
        kindLabel: "Mock",
        title: a.section ? `${a.section} mock` : "Full mock",
        href: "/mock",
      }
  }
}
