import Link from "next/link"
import {
  AlertTriangle,
  ArrowRight,
  BookOpen,
  Compass,
  Layers,
  Target,
  TrendingDown,
  Zap,
} from "lucide-react"
import type {
  MistakeInsights,
  PriorityFix,
  RecurringWeakness,
  TrapFrequency,
} from "@/lib/mistake-insights"
import { TOPIC_TO_CHAPTER } from "@/lib/topic-chapter-map"

/**
 * InsightsPanel — the auto-classification dashboard for the error log.
 *
 * Renders four sections in priority order:
 *
 *   1. Priority fixes      — top-N most actionable items (frequency × recency × Hard-weight)
 *   2. Recurring weaknesses — sub-skills failing across multiple misses
 *   3. Trap frequency      — named-trap patterns the student keeps hitting
 *   4. Recommended chapters and drills — read + practice CTAs
 *
 * Pure presentational — server-rendered, no client state. The rest of
 * the error-log page lives below this panel; this is the "what to do
 * next" surface that turns the log from a diary into a workflow.
 */

const EYEBROW = "text-[10px] font-semibold uppercase tracking-[0.22em]"

export default function InsightsPanel({
  insights,
}: {
  insights: MistakeInsights
}) {
  const hasAny =
    insights.priorityFixes.length > 0 ||
    insights.recurringWeaknesses.length > 0 ||
    insights.trapFrequency.length > 0 ||
    insights.recommendedChapters.length > 0 ||
    insights.recommendedDrills.length > 0

  if (!hasAny) return null

  return (
    <section className="space-y-10">
      {/* Header */}
      <div>
        <div className="flex items-center gap-3 mb-4">
          <span
            className="h-px w-10"
            style={{
              background:
                "linear-gradient(to right, transparent, rgba(201,168,76,0.6))",
            }}
          />
          <p className={EYEBROW} style={{ color: "#C9A84C" }}>
            Auto-classified
          </p>
        </div>
        <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-[-0.02em] text-[#F0F0F0] leading-[1.05] mb-3">
          What to{" "}
          <span className="font-display-italic" style={{ color: "#C9A84C" }}>
            fix next.
          </span>
        </h2>
        <p className="text-[14px] text-[#C0C0C0] max-w-2xl leading-relaxed">
          Every miss below has been auto-classified by section, sub-skill, trap
          pattern, and pacing bucket — no manual tagging required. The fixes
          and chapters are ranked by recurrence × recency × difficulty.
        </p>
      </div>

      {/* 1. Priority fixes */}
      {insights.priorityFixes.length > 0 && (
        <SubSection
          icon={Zap}
          eyebrow="Priority Fixes"
          title="Top moves"
          accent="this week."
          description={`${insights.priorityFixes.length} actionable item${insights.priorityFixes.length === 1 ? "" : "s"} ranked by impact.`}
        >
          <div className="space-y-3">
            {insights.priorityFixes.map((f, idx) => (
              <PriorityFixRow key={f.id} fix={f} ordinal={idx + 1} />
            ))}
          </div>
        </SubSection>
      )}

      {/* 2. Recurring weaknesses */}
      {insights.recurringWeaknesses.length > 0 && (
        <SubSection
          icon={TrendingDown}
          eyebrow="Recurring Weaknesses"
          title="Sub-skills"
          accent="failing."
          description="Sub-skills with two or more misses, ranked by miss count and Hard-difficulty density."
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {insights.recurringWeaknesses.map((w) => {
              const chapterSlug = TOPIC_TO_CHAPTER[w.topic]
              return (
                <WeaknessCard
                  key={`${w.section}-${w.subskill}`}
                  weakness={w}
                  chapterSlug={chapterSlug}
                />
              )
            })}
          </div>
        </SubSection>
      )}

      {/* 3. Trap frequency */}
      {insights.trapFrequency.length > 0 && (
        <SubSection
          icon={AlertTriangle}
          eyebrow="Trap Patterns"
          title="Where you keep"
          accent="slipping."
          description="Named trap patterns from the curriculum that caught you on multiple questions. Drill the recognition signal until you spot it cold."
        >
          <div className="space-y-2">
            {insights.trapFrequency.map((t, idx) => (
              <TrapRow key={t.trap} trap={t} ordinal={idx + 1} />
            ))}
          </div>
        </SubSection>
      )}

      {/* 4. Recommended chapters + drills */}
      {(insights.recommendedChapters.length > 0 ||
        insights.recommendedDrills.length > 0) && (
        <SubSection
          icon={Compass}
          eyebrow="Next Up"
          title="Read"
          accent="and drill."
          description="Two-step routine: read the chapter to install the recognition signal, then drill the topic to convert it into reflex."
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ColumnCard
              icon={BookOpen}
              title="Recommended chapters"
              empty="No chapter recommendations yet — log a few more misses."
              items={insights.recommendedChapters.map((c) => ({
                key: c.chapterSlug,
                href: c.chapterSlug.startsWith("reading-")
                  ? `/guides/${c.chapterSlug}`
                  : `/chapters/${c.chapterSlug}`,
                title: c.title,
                section: c.section,
                reason: c.reason,
              }))}
            />
            <ColumnCard
              icon={Target}
              title="Recommended drills"
              empty="No drill recommendations yet — log a few more misses."
              items={insights.recommendedDrills.map((d) => ({
                key: d.slug,
                href: `/practice/session/${d.slug}`,
                title: `${d.title} · ${d.targetCount} questions`,
                section: d.section,
                reason: d.reason,
              }))}
            />
          </div>
        </SubSection>
      )}
    </section>
  )
}

// ---------- Subcomponents ----------

function SubSection({
  icon: Icon,
  eyebrow,
  title,
  accent,
  description,
  children,
}: {
  icon: typeof BookOpen
  eyebrow: string
  title: string
  accent: string
  description: string
  children: React.ReactNode
}) {
  return (
    <div>
      <div className="flex items-center gap-3 mb-4">
        <Icon className="w-3.5 h-3.5" style={{ color: "#C9A84C" }} />
        <p className={EYEBROW} style={{ color: "#C9A84C" }}>
          {eyebrow}
        </p>
      </div>
      <h3 className="font-display text-2xl md:text-3xl font-semibold tracking-[-0.02em] text-[#F0F0F0] leading-[1.05] mb-2">
        {title}{" "}
        <span className="font-display-italic" style={{ color: "#C9A84C" }}>
          {accent}
        </span>
      </h3>
      <p className="text-[13px] text-[#888888] mb-5 leading-relaxed">{description}</p>
      {children}
    </div>
  )
}

function PriorityFixRow({ fix, ordinal }: { fix: PriorityFix; ordinal: number }) {
  const sectionColors: Record<string, { bg: string; text: string }> = {
    Quant: { bg: "rgba(201,168,76,0.10)", text: "#C9A84C" },
    Verbal: { bg: "rgba(95,168,255,0.10)", text: "#5FA8FF" },
    DI: { bg: "rgba(232,201,122,0.10)", text: "#E8C97A" },
  }
  const c = sectionColors[fix.section] ?? sectionColors.Quant
  return (
    <div
      className="p-5 rounded-2xl border border-white/[0.08] bg-[#0D0D0D] flex items-start gap-4"
      style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.03)" }}
    >
      <span
        className="font-display font-display-italic text-[1.5rem] leading-none flex-shrink-0 mt-0.5"
        style={{ color: "#C9A84C" }}
      >
        {String(ordinal).padStart(2, "0")}
      </span>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 flex-wrap mb-1">
          <span
            className="px-2 py-0.5 rounded text-[10px] uppercase tracking-[0.18em] font-semibold"
            style={{ backgroundColor: c.bg, color: c.text }}
          >
            {fix.section}
          </span>
          <span
            className="px-2 py-0.5 rounded text-[9px] uppercase tracking-[0.20em] font-semibold"
            style={{
              backgroundColor:
                fix.kind === "trap" ? "rgba(255,68,68,0.10)" : "rgba(176,136,255,0.10)",
              color: fix.kind === "trap" ? "#FF4444" : "#B088FF",
            }}
          >
            {fix.kind === "trap" ? "Trap" : "Sub-skill"}
          </span>
          <span className="text-[11px] text-[#555555] tracking-tight">
            {fix.misses} miss{fix.misses === 1 ? "" : "es"}
          </span>
        </div>
        <p className="text-[15px] font-semibold text-[#F0F0F0] tracking-tight mb-1">
          {fix.title}
        </p>
        <p className="text-[12px] text-[#888888] leading-relaxed mb-3">
          {fix.rationale}
        </p>
        <div className="flex items-center gap-2 flex-wrap">
          {fix.chapterSlug && (
            <Link
              href={
                fix.chapterSlug.startsWith("reading-")
                  ? `/guides/${fix.chapterSlug}`
                  : `/chapters/${fix.chapterSlug}`
              }
              className="inline-flex items-center gap-1.5 text-[12px] px-3 py-1.5 rounded-lg font-semibold tracking-tight transition-colors"
              style={{
                backgroundColor: "rgba(201,168,76,0.12)",
                color: "#C9A84C",
              }}
            >
              <BookOpen className="w-3.5 h-3.5" />
              Read chapter
            </Link>
          )}
          {fix.drillSlug && (
            <Link
              href={`/practice/session/${fix.drillSlug}`}
              className="inline-flex items-center gap-1.5 text-[12px] px-3 py-1.5 rounded-lg font-semibold tracking-tight transition-colors"
              style={{
                backgroundColor: "#C9A84C",
                color: "#0A0A0A",
              }}
            >
              <Target className="w-3.5 h-3.5" />
              Drill now
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}

function WeaknessCard({
  weakness: w,
  chapterSlug,
}: {
  weakness: RecurringWeakness
  chapterSlug?: string
}) {
  const sectionColors: Record<string, { bg: string; text: string }> = {
    Quant: { bg: "rgba(201,168,76,0.10)", text: "#C9A84C" },
    Verbal: { bg: "rgba(95,168,255,0.10)", text: "#5FA8FF" },
    DI: { bg: "rgba(232,201,122,0.10)", text: "#E8C97A" },
  }
  const c = sectionColors[w.section] ?? sectionColors.Quant

  return (
    <div
      className="p-4 rounded-2xl border border-white/[0.08] bg-[#0D0D0D] flex flex-col"
      style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.03)" }}
    >
      <div className="flex items-center justify-between mb-2">
        <span
          className="px-2 py-0.5 rounded text-[10px] uppercase tracking-[0.18em] font-semibold"
          style={{ backgroundColor: c.bg, color: c.text }}
        >
          {w.section}
        </span>
        <span className="text-[11px] text-[#888888] tracking-tight">
          {w.misses} miss{w.misses === 1 ? "" : "es"}
        </span>
      </div>
      <p className="text-[14px] font-semibold text-[#F0F0F0] tracking-tight mb-1">
        {w.subskill}
      </p>
      <p className="text-[11px] text-[#555555] mb-2">{w.topic}</p>
      <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.16em] font-medium mb-3">
        {w.byDifficulty.Beginner > 0 && (
          <span className="text-[#3ECF8E]">
            {w.byDifficulty.Beginner} easy
          </span>
        )}
        {w.byDifficulty.Intermediate > 0 && (
          <span style={{ color: c.text }}>
            {w.byDifficulty.Intermediate} med
          </span>
        )}
        {w.byDifficulty.Advanced > 0 && (
          <span className="text-[#FF4444]">
            {w.byDifficulty.Advanced} hard
          </span>
        )}
      </div>
      {chapterSlug && (
        <div className="flex items-center gap-2 mt-auto pt-2 border-t border-white/[0.05]">
          <Link
            href={`/chapters/${chapterSlug}`}
            className="inline-flex items-center gap-1.5 text-[11px] px-2.5 py-1 rounded-lg font-semibold tracking-tight transition-colors"
            style={{
              backgroundColor: "rgba(201,168,76,0.12)",
              color: "#C9A84C",
            }}
          >
            <BookOpen className="w-3 h-3" />
            Read
          </Link>
          <Link
            href={`/practice/session/${chapterSlug}`}
            className="inline-flex items-center gap-1.5 text-[11px] px-2.5 py-1 rounded-lg font-semibold tracking-tight transition-colors"
            style={{
              backgroundColor: "#C9A84C",
              color: "#0A0A0A",
            }}
          >
            <Target className="w-3 h-3" />
            Drill
          </Link>
        </div>
      )}
    </div>
  )
}

function TrapRow({ trap: t, ordinal }: { trap: TrapFrequency; ordinal: number }) {
  return (
    <div
      className="p-4 rounded-2xl border border-white/[0.08] bg-[#0D0D0D] flex items-start gap-4"
      style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.03)" }}
    >
      <span
        className="font-display font-display-italic text-[1.25rem] leading-none flex-shrink-0 mt-0.5"
        style={{ color: "#C9A84C" }}
      >
        {String(ordinal).padStart(2, "0")}
      </span>
      <Layers className="w-4 h-4 flex-shrink-0 mt-1 text-[#FF4444]" />
      <div className="flex-1 min-w-0">
        <p className="text-[13px] font-semibold text-[#F0F0F0] tracking-tight mb-0.5">
          {t.trap}
        </p>
        <p className="text-[11px] text-[#888888] leading-relaxed">
          Hit {t.occurrences} time{t.occurrences === 1 ? "" : "s"}
          {t.trapType ? ` · taxonomy: ${t.trapType}` : null}
        </p>
      </div>
    </div>
  )
}

function ColumnCard({
  icon: Icon,
  title,
  empty,
  items,
}: {
  icon: typeof BookOpen
  title: string
  empty: string
  items: Array<{
    key: string
    href: string
    title: string
    section: string
    reason: string
  }>
}) {
  return (
    <div
      className="p-5 rounded-2xl border border-white/[0.08] bg-[#0D0D0D]"
      style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.03)" }}
    >
      <div className="flex items-center gap-2 mb-4">
        <Icon className="w-4 h-4" style={{ color: "#C9A84C" }} />
        <p className={EYEBROW} style={{ color: "#C9A84C" }}>
          {title}
        </p>
      </div>
      {items.length === 0 ? (
        <p className="text-[12px] text-[#555555] italic">{empty}</p>
      ) : (
        <ul className="space-y-2">
          {items.map((it) => (
            <li key={it.key}>
              <Link
                href={it.href}
                className="group flex items-start gap-3 -mx-1 px-1 py-1.5 rounded transition-colors hover:bg-white/[0.02]"
              >
                <ArrowRight
                  className="w-3.5 h-3.5 mt-1 flex-shrink-0 text-[#555555] group-hover:text-[#C9A84C] group-hover:translate-x-0.5 transition-all"
                  aria-hidden
                />
                <div className="flex-1 min-w-0">
                  <p className="text-[13px] font-semibold text-[#F0F0F0] tracking-tight truncate group-hover:text-[#FFFFFF]">
                    {it.title}
                  </p>
                  <p className="text-[11px] text-[#888888] leading-snug line-clamp-2">
                    {it.reason}
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
