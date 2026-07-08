import Link from "next/link"
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Clock,
  Compass,
  Flag,
  Target,
} from "lucide-react"
import { getAllChapters, getAllGuides } from "@/lib/content"
import { createSupabaseServer } from "@/lib/supabase/server"
import { getUserState } from "@/lib/user-state"

// Section visual identity — distinct accent per GMAT section so each
// journey carries its own feel. Re-uses the spaced-review queue's color
// codes for system-wide consistency.
const SECTION_THEME: Record<
  "Quant" | "Verbal" | "DI" | "General",
  {
    label: string
    accent: string
    accentStrong: string
    accentSoft: string
    accentSofter: string
    blurb: string
  }
> = {
  Quant: {
    label: "Quantitative Reasoning",
    accent: "#5FA8FF",
    accentStrong: "rgba(95,168,255,0.45)",
    accentSoft: "rgba(95,168,255,0.12)",
    accentSofter: "rgba(95,168,255,0.04)",
    blurb:
      "Algebraic control, arithmetic fluency, number-property reasoning, and timed method selection.",
  },
  Verbal: {
    label: "Verbal Reasoning",
    accent: "#B088FF",
    accentStrong: "rgba(176,136,255,0.45)",
    accentSoft: "rgba(176,136,255,0.12)",
    accentSofter: "rgba(176,136,255,0.04)",
    blurb:
      "Argument anatomy, trap recognition, and reading dense prose under time pressure.",
  },
  DI: {
    label: "Data Insights",
    accent: "#3ECF8E",
    accentStrong: "rgba(62,207,142,0.45)",
    accentSoft: "rgba(62,207,142,0.12)",
    accentSofter: "rgba(62,207,142,0.04)",
    blurb:
      "Multi-source reasoning, table analysis, graphics interpretation, two-part analysis, data sufficiency.",
  },
  General: {
    label: "Reference Library",
    accent: "#888888",
    accentStrong: "rgba(255,255,255,0.25)",
    accentSoft: "rgba(255,255,255,0.06)",
    accentSofter: "rgba(255,255,255,0.02)",
    blurb:
      "Cross-section deep-dives and strategy guides. Read on demand when you need the deeper picture.",
  },
}

interface StoredChapterProgress {
  sectionsRead?: Record<string, boolean>
  problemSetResults?: Record<string, { correct: number; total: number } | undefined>
  lastSeenAt?: number
}

type SectionKey = "Quant" | "Verbal" | "DI" | "General"

// Unified item shape for chapters + guides (readings, references).
type ListItem = {
  kind: "interactive" | "reading" | "reference"
  slug: string
  title: string
  summary: string
  section: SectionKey
  href: string
  estimatedMinutes: number
  /** Approximate reading length in pages — shown to students instead of a time
   *  estimate so the page doesn't imply a clock to race. */
  estimatedPages: number
  /** First unread section anchor for interactive chapters; null for guides. */
  resumeAnchor: string | null
  totalSections: number
  readSections: number
  problemSetCount: number
  /** How many of the chapter's problem sets have at least one logged attempt
   *  (i.e. {correct, total} where total > 0). Used for the per-card status
   *  line on /chapters. Zero for guides. */
  attemptedSetCount: number
  /** Aggregate accuracy across attempted problem sets (correct / total),
   *  rounded to a percent. Null if nothing has been attempted yet. Used
   *  on the "complete" status line to surface outcome quality. */
  accuracyPct: number | null
  /** Per-chapter sub-skill labels. Extracted from reading-section titles
   *  before the em dash; capped at 3. */
  skillChips: string[]
  progressPct: number | null
  isComplete: boolean
  isStarted: boolean
  lastSeenAt: number
}

const EYEBROW = "text-[10px] font-semibold uppercase tracking-[0.22em] text-[#C9A84C]"

type NodeStatus = "complete" | "current" | "available"

function formatExamCountdown(daysLeft: number | null): string | null {
  if (daysLeft === null) return null
  if (daysLeft < 0) return "Exam passed"
  if (daysLeft === 0) return "Exam today"
  if (daysLeft === 1) return "1 day to exam"
  if (daysLeft < 30) return `${daysLeft} days to exam`
  const weeks = Math.round(daysLeft / 7)
  return `${weeks} weeks to exam`
}

/**
 * Page-level mission control. Replaces the old marketing hero with a
 * direct "what's next" panel: primary CTA on the resume chapter, side
 * tiles for target score / exam countdown / core-path completion.
 */
function MissionHero({
  resumeItem,
  resumeSection,
  totalCore,
  completedCore,
  startedCore,
  totalReadings,
  totalReferences,
  targetScore,
  daysUntilExam,
}: {
  resumeItem: ListItem | null
  resumeSection: SectionKey | null
  totalCore: number
  completedCore: number
  startedCore: number
  totalReadings: number
  totalReferences: number
  targetScore: number | null
  daysUntilExam: number | null
}) {
  const corePct =
    totalCore > 0 ? Math.round((completedCore / totalCore) * 100) : 0
  const sectionTheme =
    resumeSection !== null ? SECTION_THEME[resumeSection] : SECTION_THEME.Quant
  const hasResume = resumeItem !== null

  // Verb on the primary CTA. "Continue" only when the user has actually
  // started the chapter; otherwise "Start" — avoids the "continue
  // something I haven't opened" weirdness on first load.
  const primaryVerb = !hasResume
    ? "Start"
    : resumeItem!.isStarted
    ? "Continue"
    : "Start"
  const primaryHref = hasResume
    ? resumeItem!.resumeAnchor
      ? `${resumeItem!.href}#${resumeItem!.resumeAnchor}`
      : resumeItem!.href
    : "#sections"
  const primaryLabel = hasResume
    ? `${primaryVerb} ${resumeItem!.title}`
    : "Browse the curriculum"
  const positionLine = hasResume
    ? resumeItem!.totalSections > 0
      ? `Reading ${Math.min(
          resumeItem!.readSections + 1,
          resumeItem!.totalSections
        )} of ${resumeItem!.totalSections}${
          resumeItem!.estimatedPages
            ? ` · ~${resumeItem!.estimatedPages} pages total`
            : ""
        }`
      : `~${resumeItem!.estimatedPages} pages`
    : `${totalCore} interactive chapters across Quant, Verbal, and Data Insights`

  // Promise sentence: chapter summary first sentence (truncated). Falls
  // back to the section blurb when no summary is authored.
  const why = hasResume
    ? (resumeItem!.summary.split(/[.!?]\s/)[0] ||
        SECTION_THEME[resumeItem!.section].blurb).trim()
    : "Baseline-driven, paced for the GMAT Focus Edition. Start anywhere."

  const examLine = formatExamCountdown(daysUntilExam)

  return (
    <section
      className="relative overflow-hidden rounded-2xl border"
      style={{
        borderColor: "rgba(255,255,255,0.06)",
        backgroundColor: "#0A0A0A",
      }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: hasResume
            ? `radial-gradient(ellipse 70% 55% at 0% 0%, ${sectionTheme.accentSoft} 0%, transparent 60%), radial-gradient(ellipse 50% 40% at 100% 110%, rgba(201,168,76,0.10) 0%, transparent 60%)`
            : "radial-gradient(ellipse 80% 55% at 50% -10%, rgba(201,168,76,0.14) 0%, transparent 60%)",
        }}
        aria-hidden
      />
      <div
        className="absolute inset-0 pointer-events-none bg-grain opacity-[0.03] mix-blend-overlay"
        aria-hidden
      />

      <div className="relative grid lg:grid-cols-[minmax(0,1fr)_320px] gap-8 lg:gap-12 p-6 sm:p-10">
        {/* Left — current mission */}
        <div className="min-w-0">
          <div className="flex items-center gap-2 mb-3">
            <span
              className="inline-flex items-center justify-center w-7 h-7 rounded-lg"
              style={{
                backgroundColor: hasResume
                  ? sectionTheme.accentSoft
                  : "rgba(201,168,76,0.12)",
              }}
            >
              <Compass
                className="w-3.5 h-3.5"
                style={{
                  color: hasResume ? sectionTheme.accent : "#C9A84C",
                }}
              />
            </span>
            <p
              className={EYEBROW}
              style={{
                color: hasResume ? sectionTheme.accent : "#C9A84C",
              }}
            >
              {hasResume
                ? completedCore === 0 && startedCore <= 1
                  ? "Where to start"
                  : "Where you are"
                : "Welcome"}
            </p>
          </div>

          <h1 className="font-display text-3xl sm:text-[42px] font-semibold text-[#F0F0F0] tracking-[-0.02em] leading-[1.05]">
            {hasResume ? (
              <>
                Pick up{" "}
                <span
                  className="font-display-italic"
                  style={{ color: sectionTheme.accent }}
                >
                  {resumeItem!.title}.
                </span>
              </>
            ) : (
              <>
                Your GMAT path,{" "}
                <span
                  className="font-display-italic"
                  style={{ color: "#C9A84C" }}
                >
                  one chapter at a time.
                </span>
              </>
            )}
          </h1>

          <p className="mt-3 text-[13px] uppercase tracking-[0.18em] font-semibold text-[#888888]">
            {hasResume
              ? `${SECTION_THEME[resumeItem!.section].label} · ${positionLine}`
              : positionLine}
          </p>

          <p className="mt-5 text-[15px] text-[#C0C0C0] leading-[1.7] max-w-2xl">
            {why}
            {!why.endsWith(".") ? "." : ""}
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <Link
              href={primaryHref}
              className="group inline-flex items-center gap-2 px-5 py-3 rounded-lg text-[13px] font-semibold transition-transform duration-200 hover:-translate-y-0.5"
              style={{
                backgroundColor: hasResume ? sectionTheme.accent : "#C9A84C",
                color: "#0A0A0A",
              }}
            >
              <span>{primaryLabel}</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="/review"
              className="inline-flex items-center gap-2 px-4 py-3 rounded-lg text-[13px] font-semibold border transition-colors"
              style={{
                borderColor: "rgba(255,255,255,0.10)",
                color: "#C0C0C0",
              }}
            >
              Review weak areas
            </Link>
          </div>
        </div>

        {/* Right — at-a-glance tiles */}
        <div className="flex flex-col gap-3 lg:max-w-[320px]">
          {/* Core path */}
          <div
            className="rounded-xl border p-4"
            style={{
              borderColor: "rgba(255,255,255,0.06)",
              backgroundColor: "rgba(255,255,255,0.015)",
            }}
          >
            <div className="flex items-baseline justify-between gap-3">
              <p className={EYEBROW}>Core path</p>
              <span
                className="text-[11px] tabular-nums"
                style={{ color: "rgba(255,255,255,0.4)" }}
              >
                {corePct}%
              </span>
            </div>
            <p className="mt-2 font-display text-2xl font-semibold tabular-nums leading-none text-[#F0F0F0]">
              {completedCore}
              <span className="text-base font-normal text-[#555555]">
                {" "}
                / {totalCore}
              </span>
              <span className="text-xs font-normal text-[#888888] ml-2">
                interactive chapters
              </span>
            </p>
            <div className="mt-3 h-1 rounded-full bg-white/[0.06] overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-500"
                style={{
                  width: `${corePct}%`,
                  backgroundColor:
                    corePct === 100 ? "#3ECF8E" : sectionTheme.accent,
                }}
              />
            </div>
            <p className="mt-3 text-[11px] text-[#666666]">
              + {totalReadings} reading{totalReadings === 1 ? "" : "s"} ·{" "}
              {totalReferences} reference{totalReferences === 1 ? "" : "s"}
              {" "}available
            </p>
          </div>

          {/* Score target + exam date — only when authored. Hidden
              entirely when neither is set, so we don't waste space with
              "no goal" placeholders. */}
          {(targetScore !== null || examLine !== null) && (
            <div className="grid grid-cols-2 gap-3">
              {targetScore !== null && (
                <div
                  className="rounded-xl border p-3"
                  style={{
                    borderColor: "rgba(255,255,255,0.06)",
                    backgroundColor: "rgba(255,255,255,0.015)",
                  }}
                >
                  <div className="flex items-center gap-1.5 mb-1.5">
                    <Target className="w-3 h-3 text-[#C9A84C]" />
                    <p className={EYEBROW}>Target</p>
                  </div>
                  <p className="font-display text-lg font-semibold tabular-nums text-[#F0F0F0] leading-none">
                    {targetScore}
                  </p>
                </div>
              )}
              {examLine && (
                <div
                  className="rounded-xl border p-3"
                  style={{
                    borderColor: "rgba(255,255,255,0.06)",
                    backgroundColor: "rgba(255,255,255,0.015)",
                  }}
                >
                  <div className="flex items-center gap-1.5 mb-1.5">
                    <Flag className="w-3 h-3 text-[#C9A84C]" />
                    <p className={EYEBROW}>Exam</p>
                  </div>
                  <p className="text-[13px] font-semibold text-[#F0F0F0] leading-tight">
                    {examLine}
                  </p>
                </div>
              )}
            </div>
          )}

        </div>
      </div>
    </section>
  )
}

/**
 * Compact section progress row for the hero's right-side card. Shows
 * section dot + name + filled bar + completion fraction.
 */
function HeroSectionMiniBar({
  section,
  completed,
  total,
}: {
  section: "Quant" | "Verbal" | "DI"
  completed: number
  total: number
}) {
  const theme = SECTION_THEME[section]
  const pct = total === 0 ? 0 : Math.round((completed / total) * 100)
  return (
    <div className="flex items-center gap-2.5">
      <span
        className="w-1.5 h-1.5 rounded-full flex-shrink-0"
        style={{ backgroundColor: theme.accent }}
        aria-hidden
      />
      <span className="text-[12px] text-[#C0C0C0] w-20 flex-shrink-0">
        {section === "DI" ? "Data Insights" : section}
      </span>
      <div className="flex-1 h-1 rounded-full bg-white/[0.05] overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-500"
          style={{
            width: `${pct}%`,
            backgroundColor: pct === 100 ? "#3ECF8E" : theme.accent,
          }}
        />
      </div>
      <span
        className="text-[11px] tabular-nums tabular flex-shrink-0 w-10 text-right"
        style={{ color: "rgba(255,255,255,0.45)" }}
      >
        {completed}/{total}
      </span>
    </div>
  )
}

/**
 * Coarse difficulty bucket derived from estimated reading time.
 * Light: < 40 min, Medium: 40–60 min, Dense: > 60 min. The chapter
 * frontmatter doesn't carry an explicit difficulty field, so we map
 * off the editorial estimatedMinutes which the author has already
 * tuned per chapter.
 */
function difficultyBucket(minutes: number): "Light" | "Medium" | "Dense" {
  if (minutes < 40) return "Light"
  if (minutes <= 60) return "Medium"
  return "Dense"
}

/**
 * One-line status annotation for a chapter card. Returns null for
 * untouched chapters (the card metadata is the signal there). For
 * in-progress chapters it names *what's blocking* completion; for
 * complete chapters it surfaces aggregate accuracy across attempted
 * problem sets.
 */
function chapterStatusLine(item: ListItem): string | null {
  if (!item.isStarted) return null

  const hasProblemSets = item.problemSetCount > 0

  if (item.isComplete) {
    // "Complete" here means all reading sections done. Surface set-
    // outcome quality when we have it; otherwise note that the
    // graded loop hasn't been closed yet.
    if (!hasProblemSets) return "All sections read"
    if (item.accuracyPct === null) {
      return `All sections read · ${item.problemSetCount} graded set${
        item.problemSetCount === 1 ? "" : "s"
      } waiting`
    }
    if (item.attemptedSetCount < item.problemSetCount) {
      return `${item.attemptedSetCount} of ${item.problemSetCount} sets attempted · ${item.accuracyPct}% accuracy`
    }
    return `Complete · ${item.accuracyPct}% accuracy`
  }

  // In-progress — sections still unread.
  if (hasProblemSets && item.attemptedSetCount === 0) {
    return `${item.readSections} of ${item.totalSections} sections read · problem sets not started`
  }
  if (hasProblemSets) {
    return `${item.readSections} of ${item.totalSections} sections read · ${item.attemptedSetCount} of ${item.problemSetCount} sets attempted`
  }
  return `${item.readSections} of ${item.totalSections} sections read`
}

interface JourneyNodeProps {
  item: ListItem
  index: number
  status: NodeStatus
  accent: string
  accentSoft: string
  isLast: boolean
}

/**
 * One stop on the section journey — interactive chapter only. Drops
 * the multi-line summary in favor of skill chips + a single outcome
 * line; progress bar appears on the current chapter only so completed
 * cards stay calm and available cards stay clean.
 */
function JourneyNode({
  item,
  index,
  status,
  accent,
  accentSoft,
  isLast,
}: JourneyNodeProps) {
  const num = String(index + 1).padStart(2, "0")

  // Reading is done but problem sets haven't been attempted yet. This is a
  // common dropout point — the student feels "done" because reading is complete
  // and misses that the graded sets are the actual learning consolidation step.
  const readingDoneProblemsPending =
    status === "complete" &&
    item.problemSetCount > 0 &&
    item.accuracyPct === null

  const cta = readingDoneProblemsPending
    ? "Start problems"
    : status === "complete"
    ? "Review"
    : status === "current"
    ? "Continue"
    : "Start"

  const cardBorder = readingDoneProblemsPending
    ? "rgba(201,168,76,0.35)"
    : status === "current"
    ? accent
    : status === "complete"
    ? "rgba(255,255,255,0.06)"
    : "rgba(255,255,255,0.05)"

  const cardBg = readingDoneProblemsPending
    ? "rgba(201,168,76,0.04)"
    : status === "current"
    ? accentSoft
    : status === "complete"
    ? "rgba(255,255,255,0.012)"
    : "#0D0D0D"

  const href =
    status === "current" && item.resumeAnchor
      ? `${item.href}#${item.resumeAnchor}`
      : item.href

  return (
    <li className="relative flex gap-5 sm:gap-6">
      {/* Path column */}
      <div className="relative w-9 flex-shrink-0 flex justify-center pt-5">
        <span
          className="relative z-10 flex items-center justify-center w-9 h-9 rounded-full transition-transform"
          style={{
            backgroundColor: readingDoneProblemsPending
              ? "rgba(201,168,76,0.15)"
              : status === "complete"
              ? accent
              : "var(--read-bg-elevated, #0F0F0F)",
            border: `1.5px solid ${
              readingDoneProblemsPending
                ? "#C9A84C"
                : status === "complete"
                ? accent
                : status === "current"
                ? accent
                : "rgba(255,255,255,0.12)"
            }`,
            boxShadow:
              status === "current"
                ? `0 0 0 4px ${accentSoft}, 0 0 24px ${accentSoft}`
                : "none",
          }}
        >
          {readingDoneProblemsPending ? (
            <Target
              className="w-4 h-4"
              style={{ color: "#C9A84C" }}
              aria-label="Problem sets ready"
            />
          ) : status === "complete" ? (
            <CheckCircle2
              className="w-4 h-4"
              style={{ color: "#0A0A0A" }}
              aria-label="Completed"
            />
          ) : (
            <span
              className="font-display text-[12px] font-semibold tabular-nums leading-none"
              style={{
                color: status === "current" ? accent : "rgba(255,255,255,0.45)",
              }}
            >
              {num}
            </span>
          )}
        </span>
        {!isLast && (
          <span
            className="absolute top-14 bottom-[-1.25rem] left-1/2 -translate-x-px w-px"
            style={{
              background: `linear-gradient(to bottom, ${
                readingDoneProblemsPending
                  ? "#C9A84C"
                  : status === "complete"
                  ? accent
                  : "rgba(255,255,255,0.08)"
              } 0%, rgba(255,255,255,0.06) 70%, transparent 100%)`,
            }}
            aria-hidden
          />
        )}
      </div>

      {/* Card */}
      <Link
        href={href}
        className="group flex-1 min-w-0 relative rounded-xl border overflow-hidden p-5 transition-all duration-300 hover:-translate-y-0.5"
        style={{
          borderColor: cardBorder,
          backgroundColor: cardBg,
          boxShadow:
            status === "current"
              ? `0 16px 40px -20px ${accentSoft}`
              : "inset 0 1px 0 rgba(255,255,255,0.02)",
        }}
      >
        {(status === "current" || readingDoneProblemsPending) && (
          <div
            className="absolute inset-x-0 top-0 h-px"
            style={{
              backgroundColor: readingDoneProblemsPending ? "#C9A84C" : accent,
              opacity: 0.7,
            }}
            aria-hidden
          />
        )}
        <div className="flex items-start gap-4">
          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-center gap-2 mb-1.5">
              <span
                className="text-[10px] uppercase tracking-[0.22em] font-semibold tabular-nums"
                style={{ color: "rgba(255,255,255,0.4)" }}
              >
                Chapter {num}
              </span>
              <span
                className="px-2 py-0.5 rounded-full text-[10px] uppercase tracking-[0.18em] font-semibold"
                style={{ backgroundColor: accentSoft, color: accent }}
              >
                {item.section === "DI" ? "Data Insights" : item.section}
              </span>
              {status === "current" && (
                <span
                  className="px-2 py-0.5 rounded-full text-[10px] uppercase tracking-[0.18em] font-semibold"
                  style={{ backgroundColor: accentSoft, color: accent }}
                >
                  Current
                </span>
              )}
              {readingDoneProblemsPending && (
                <span
                  className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] uppercase tracking-[0.18em] font-semibold"
                  style={{
                    backgroundColor: "rgba(201,168,76,0.12)",
                    color: "#C9A84C",
                  }}
                >
                  <Target className="w-3 h-3" />
                  Test yourself
                </span>
              )}
              {status === "complete" && !readingDoneProblemsPending && (
                <span
                  className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] uppercase tracking-[0.18em] font-semibold"
                  style={{
                    backgroundColor: "rgba(62,207,142,0.10)",
                    color: "#3ECF8E",
                  }}
                >
                  <CheckCircle2 className="w-3 h-3" />
                  Complete
                </span>
              )}
            </div>
            <h3
              className="font-display text-lg sm:text-xl font-semibold tracking-tight leading-[1.2]"
              style={{
                color:
                  status === "complete" && !readingDoneProblemsPending
                    ? "rgba(240,240,240,0.7)"
                    : "#F0F0F0",
              }}
            >
              {item.title}
            </h3>
            {item.skillChips.length > 0 && (
              <div className="mt-2.5 flex flex-wrap gap-1.5">
                {item.skillChips.map((chip) => (
                  <span
                    key={chip}
                    className="px-2 py-0.5 rounded-md text-[11px] font-medium"
                    style={{
                      backgroundColor:
                        status === "current"
                          ? "rgba(255,255,255,0.06)"
                          : "rgba(255,255,255,0.04)",
                      color: "rgba(192,192,192,0.75)",
                    }}
                  >
                    {chip}
                  </span>
                ))}
              </div>
            )}
            <div
              className="mt-3 flex items-center gap-x-4 gap-y-1 text-[11px] flex-wrap"
              style={{ color: "rgba(255,255,255,0.42)" }}
            >
              <span className="inline-flex items-center gap-1.5">
                <Clock className="w-3 h-3" />
                {item.estimatedPages} pages · {difficultyBucket(
                  item.estimatedMinutes,
                )}
              </span>
              <span className="tabular-nums">
                {item.totalSections} reading
                {item.totalSections === 1 ? "" : "s"}
                {item.problemSetCount > 0 &&
                  ` · ${item.problemSetCount} graded set${
                    item.problemSetCount === 1 ? "" : "s"
                  }`}
              </span>
            </div>
            {(() => {
              const statusText = chapterStatusLine(item)
              if (!statusText) return null
              const tone = readingDoneProblemsPending
                ? "rgba(201,168,76,0.80)"
                : item.isComplete
                ? "rgba(62,207,142,0.85)"
                : accent
              return (
                <p
                  className="mt-2 text-[11px] tabular-nums leading-tight"
                  style={{ color: tone }}
                >
                  {statusText}
                </p>
              )
            })()}
            {/* Nudge strip when all reading is done but no problem-set attempt
                exists yet. Gives the student a clear, specific next action
                instead of letting them think "Complete" means they're done. */}
            {readingDoneProblemsPending && (
              <p
                className="mt-3 text-[11px] leading-snug"
                style={{ color: "rgba(201,168,76,0.65)" }}
              >
                Reading complete. Now test your understanding — problem sets turn passive knowledge into active recall.
              </p>
            )}
            {/* Progress bar lives on the current card only — once you've
                moved on it just becomes visual noise. Completed cards
                speak for themselves; available cards have nothing to
                show yet. */}
            {status === "current" &&
              item.progressPct !== null &&
              item.progressPct > 0 && (
                <div className="mt-3 flex items-center gap-3 max-w-xs">
                  <div className="h-0.5 flex-1 rounded-full bg-white/[0.05] overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-500"
                      style={{
                        width: `${item.progressPct}%`,
                        backgroundColor: accent,
                      }}
                    />
                  </div>
                  <span
                    className="text-[10px] tabular-nums"
                    style={{ color: "rgba(255,255,255,0.4)" }}
                  >
                    {Math.round(item.progressPct)}%
                  </span>
                </div>
              )}
          </div>
          <div
            className="flex items-center gap-1.5 text-[11px] uppercase tracking-[0.18em] font-semibold flex-shrink-0 mt-1 transition-transform group-hover:translate-x-0.5"
            style={{
              color: readingDoneProblemsPending
                ? "#C9A84C"
                : status === "current"
                ? accent
                : status === "complete"
                ? "#888888"
                : "rgba(255,255,255,0.6)",
            }}
          >
            {cta}
            <ArrowRight className="w-3.5 h-3.5" aria-hidden />
          </div>
        </div>
      </Link>
    </li>
  )
}

function ReadingRow({ item, accent }: { item: ListItem; accent: string }) {
  return (
    <Link
      href={item.href}
      className="group flex items-center gap-3 px-4 py-3 rounded-lg border transition-colors hover:bg-white/[0.02]"
      style={{
        borderColor: "rgba(255,255,255,0.05)",
        backgroundColor: "rgba(255,255,255,0.012)",
      }}
    >
      <span
        className="flex-shrink-0 inline-flex items-center justify-center w-7 h-7 rounded-md"
        style={{
          backgroundColor: "rgba(255,255,255,0.04)",
          color: accent,
        }}
        aria-hidden
      >
        <BookOpen className="w-3.5 h-3.5" />
      </span>
      <div className="flex-1 min-w-0">
        <p className="text-[13px] font-medium text-[#C0C0C0] truncate">
          {item.title}
        </p>
        {item.summary && (
          <p
            className="text-[11px] leading-snug mt-0.5 line-clamp-1"
            style={{ color: "rgba(255,255,255,0.42)" }}
          >
            {item.summary}
          </p>
        )}
      </div>
      <span
        className="text-[11px] tabular-nums flex-shrink-0"
        style={{ color: "rgba(255,255,255,0.4)" }}
      >
        {item.estimatedPages} pages
      </span>
      <ArrowRight
        className="w-3.5 h-3.5 flex-shrink-0 transition-transform group-hover:translate-x-0.5"
        style={{ color: "rgba(255,255,255,0.4)" }}
        aria-hidden
      />
    </Link>
  )
}

/**
 * Reference library — strictly bottom-of-page, library-style tiles.
 * Visually dimmer than chapter cards. Intentionally not on the section
 * journeys; it's a side resource, not the path.
 */
function ReferenceTile({ item }: { item: ListItem }) {
  return (
    <Link
      href={item.href}
      className="group flex flex-col rounded-lg border p-4 transition-colors hover:bg-white/[0.02]"
      style={{
        borderColor: "rgba(255,255,255,0.05)",
        backgroundColor: "rgba(255,255,255,0.012)",
      }}
    >
      <div className="flex items-start justify-between gap-2 mb-2">
        <span
          className="text-[10px] uppercase tracking-[0.16em] font-semibold"
          style={{ color: "#888888" }}
        >
          Reference
        </span>
        <ArrowRight
          className="w-3.5 h-3.5 flex-shrink-0 transition-transform group-hover:translate-x-0.5"
          style={{ color: "rgba(255,255,255,0.4)" }}
          aria-hidden
        />
      </div>
      <p className="text-[14px] font-semibold text-[#F0F0F0] leading-snug">
        {item.title}
      </p>
      {item.summary && (
        <p
          className="text-[11px] leading-snug mt-2 line-clamp-2"
          style={{ color: "rgba(255,255,255,0.45)" }}
        >
          {item.summary}
        </p>
      )}
      <span
        className="mt-3 text-[11px] tabular-nums"
        style={{ color: "rgba(255,255,255,0.4)" }}
      >
        {item.estimatedPages} pages
      </span>
    </Link>
  )
}

const WORDS_PER_MINUTE = 200
function estimateGuideMinutes(content: string): number {
  const words = content.trim().split(/\s+/).filter(Boolean).length
  return Math.max(3, Math.ceil(words / WORDS_PER_MINUTE))
}
const WORDS_PER_PAGE = 400
function estimateGuidePages(content: string): number {
  const words = content.trim().split(/\s+/).filter(Boolean).length
  return Math.max(1, Math.round(words / WORDS_PER_PAGE))
}

/**
 * Pluck up to 3 short skill labels from a chapter's reading-section
 * titles. Section titles follow the pattern "{skill} — {commentary}";
 * we keep the part before the em dash, capped to 24 chars so chips
 * stay compact.
 */
function extractSkillChips(
  sections: Array<{ type: string; title: string }>
): string[] {
  const chips: string[] = []
  for (const s of sections) {
    if (s.type !== "reading") continue
    const head = s.title.split(/\s+—\s+|\s+-\s+/)[0].trim()
    if (head.length === 0) continue
    if (head.length > 36) continue
    chips.push(head)
    if (chips.length === 3) break
  }
  return chips
}

export default async function ChaptersPage() {
  const chapters = getAllChapters()
  const guides = getAllGuides()

  let chapterProgress: Record<string, StoredChapterProgress> = {}
  let targetScore: number | null = null
  let examDate: string | null = null
  try {
    const supabase = await createSupabaseServer()
    const {
      data: { user },
    } = await supabase.auth.getUser()
    if (user) {
      const state = await getUserState(supabase, user)
      const raw = state.chapter_progress
      if (raw && typeof raw === "object") {
        chapterProgress = raw as Record<string, StoredChapterProgress>
      }
      const ts = user.user_metadata?.target_score
      if (typeof ts === "number") targetScore = ts
      const ed = user.user_metadata?.exam_date
      if (typeof ed === "string" && ed.length > 0) examDate = ed
    }
  } catch {
    // Supabase unavailable — render with empty progress state.
  }

  const daysUntilExam =
    examDate !== null
      ? Math.max(
          0,
          Math.ceil(
            (Date.parse(examDate) - new Date(new Date().toDateString()).getTime()) /
              86_400_000
          )
        )
      : null

  const sectionOrder: Record<SectionKey, number> = {
    Quant: 0,
    Verbal: 1,
    DI: 2,
    General: 3,
  }

  const items: ListItem[] = []

  for (const c of chapters) {
    const progress = chapterProgress[c.slug]
    const readIds = progress?.sectionsRead ?? {}
    const readingSections = c.sections.filter((s) => s.type === "reading")
    const totalSections = readingSections.length
    const readCount = readingSections.filter((s) => readIds[s.id]).length
    const readPct = totalSections === 0 ? 0 : (readCount / totalSections) * 100
    const isComplete = readCount === totalSections && totalSections > 0
    // Started = ANY section touched, pretest included, so pretest-only
    // progress still resumes rather than restarting at the top.
    const isStarted = c.sections.some((s) => readIds[s.id])
    // Resume over ALL sections (not just readings) so the anchor can never
    // jump past an untouched pretest — clicking a fresh chapter used to land
    // mid-page below "try before you learn" (beta report on chapter 5).
    const firstUnread = c.sections.find((s) => !readIds[s.id])
    // Aggregate problem-set attempts: count sets touched + overall accuracy.
    // Iterating Object.values is safe because the stored map only has
    // difficulty-keyed entries; the optional chain handles cold-start users.
    let attemptedSetCount = 0
    let setCorrect = 0
    let setTotal = 0
    for (const r of Object.values(progress?.problemSetResults ?? {})) {
      if (!r || r.total <= 0) continue
      attemptedSetCount += 1
      setCorrect += r.correct
      setTotal += r.total
    }
    const accuracyPct =
      setTotal > 0 ? Math.round((setCorrect / setTotal) * 100) : null
    items.push({
      kind: "interactive",
      slug: c.slug,
      title: c.title,
      summary: c.summary ?? "",
      section: c.section,
      href: `/chapters/${c.slug}`,
      estimatedMinutes: c.estimatedMinutes,
      estimatedPages: c.estimatedPages,
      // Anchor only once the user actually started the chapter — a fresh
      // chapter opens at the top (hero, summary, then the pretest in order).
      resumeAnchor: isStarted && firstUnread ? firstUnread.id : null,
      totalSections,
      readSections: readCount,
      problemSetCount: c.problemSets.length,
      attemptedSetCount,
      accuracyPct,
      skillChips: extractSkillChips(c.sections),
      progressPct: readPct,
      isComplete,
      isStarted,
      lastSeenAt: progress?.lastSeenAt ?? 0,
    })
  }

  for (const g of guides) {
    items.push({
      kind: g.type === "reading" ? "reading" : "reference",
      slug: g.slug,
      title: g.title,
      summary: g.description,
      section: g.section,
      href: `/guides/${g.slug}`,
      estimatedMinutes: estimateGuideMinutes(g.content),
      estimatedPages: estimateGuidePages(g.content),
      resumeAnchor: null,
      totalSections: 0,
      readSections: 0,
      problemSetCount: 0,
      attemptedSetCount: 0,
      accuracyPct: null,
      skillChips: [],
      progressPct: null,
      isComplete: false,
      isStarted: false,
      lastSeenAt: 0,
    })
  }

  // Interactive chapters keep their insertion order — getAllChapters()
  // already returns the guided-path sequence (CHAPTER_PATH_ORDER), and
  // re-sorting by section here would regroup Quant -> Verbal -> DI and
  // destroy the interleaving. Only the guide lists get a section/title sort.
  const bySectionThenTitle = (a: ListItem, b: ListItem) => {
    if (a.section !== b.section) {
      return sectionOrder[a.section] - sectionOrder[b.section]
    }
    return a.title.localeCompare(b.title)
  }
  const interactiveAll = items.filter((i) => i.kind === "interactive")
  const readingsAll = items
    .filter((i) => i.kind === "reading")
    .sort(bySectionThenTitle)
  const referencesAll = items
    .filter((i) => i.kind === "reference")
    .sort(bySectionThenTitle)
  const totalCore = interactiveAll.length
  const completedCore = interactiveAll.filter((i) => i.isComplete).length
  const startedCore = interactiveAll.filter((i) => i.isStarted).length

  // Resume target — most-recently-touched in-progress chapter, falling
  // back to the earliest non-complete chapter so first-time users still
  // see a "Start algebra" CTA on the hero.
  let resumeItem: ListItem | null = null
  const inProgressCore = interactiveAll
    .filter((i) => i.isStarted && !i.isComplete)
    .sort((a, b) => b.lastSeenAt - a.lastSeenAt)
  if (inProgressCore.length > 0) {
    resumeItem = inProgressCore[0]
  } else {
    resumeItem = interactiveAll.find((i) => !i.isComplete) ?? null
  }

  const sectionStats = (sec: SectionKey) => {
    const items = interactiveAll.filter((i) => i.section === sec)
    const completed = items.filter((i) => i.isComplete).length
    return { total: items.length, completed }
  }

  // The "current" stop on the guided path — first chapter not yet complete.
  const currentPathSlug =
    interactiveAll.find((i) => !i.isComplete)?.slug ?? null

  return (
    <div className="max-w-6xl mx-auto space-y-12">
      {/* === Mission control hero === */}
      <MissionHero
        resumeItem={resumeItem}
        resumeSection={resumeItem?.section ?? null}
        totalCore={totalCore}
        completedCore={completedCore}
        startedCore={startedCore}
        totalReadings={readingsAll.length}
        totalReferences={referencesAll.length}
        targetScore={targetScore}
        daysUntilExam={daysUntilExam}
      />

      {/* The MissionHero "By section" tile is rendered as a stub there;
          we render the actual section bars here as a small floating
          insert into the hero's right column via DOM order. Simpler:
          stack a section-progress strip just under the hero. */}
      <section
        id="sections"
        className="rounded-xl border p-5 grid gap-3 sm:grid-cols-3"
        style={{
          borderColor: "rgba(255,255,255,0.06)",
          backgroundColor: "#0D0D0D",
        }}
        aria-label="Section progress"
      >
        {(["Quant", "Verbal", "DI"] as const).map((sec) => {
          const { total, completed } = sectionStats(sec)
          return (
            <HeroSectionMiniBar
              key={sec}
              section={sec}
              completed={completed}
              total={total}
            />
          )
        })}
      </section>

      {items.length === 0 ? (
        <div className="p-6 sm:p-10 rounded-2xl border border-white/[0.06] bg-[#0D0D0D] text-center">
          <p className="text-[15px] text-[#888888]">No chapters published yet.</p>
        </div>
      ) : (
        <>
          {/* === Guided path — one interleaved, easier-first sequence across
              Quant, Verbal, and Data Insights (order from CHAPTER_PATH_ORDER). === */}
          <section id="path" className="space-y-6 scroll-mt-6">
            <div className="px-1">
              <p className={EYEBROW + " mb-2"}>Your guided path</p>
              <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#F0F0F0] tracking-tight">
                {completedCore} of {totalCore} chapters complete
              </h2>
              <p className="text-[13px] text-[#888888] mt-2 max-w-2xl">
                One recommended order — eased in from the simplest foundations,
                then rotating across Quant, Verbal, and Data Insights so you
                build every section in parallel. Follow it top to bottom, or
                jump to any chapter.
              </p>
            </div>

            <ol className="space-y-4">
              {interactiveAll.map((item, i) => {
                const theme = SECTION_THEME[item.section]
                const status: NodeStatus = item.isComplete
                  ? "complete"
                  : currentPathSlug && item.slug === currentPathSlug
                  ? "current"
                  : "available"
                return (
                  <JourneyNode
                    key={`${item.kind}-${item.slug}`}
                    item={item}
                    index={i}
                    status={status}
                    accent={theme.accent}
                    accentSoft={theme.accentSoft}
                    isLast={i === interactiveAll.length - 1}
                  />
                )
              })}
            </ol>

            {/* In-depth reading — companion curriculum across every section,
                research-report aligned. Read on demand or in sequence. */}
            {readingsAll.length > 0 && (
              <div className="pt-2">
                <div className="flex items-center gap-2.5 mb-3 px-1">
                  <BookOpen
                    className="w-3.5 h-3.5"
                    style={{ color: "#C9A84C" }}
                    aria-hidden
                  />
                  <p
                    className="text-[10px] font-semibold uppercase tracking-[0.22em]"
                    style={{ color: "#C9A84C" }}
                  >
                    In-depth reading
                  </p>
                  <span
                    className="text-[11px] tabular-nums"
                    style={{ color: "rgba(255,255,255,0.4)" }}
                  >
                    {readingsAll.length} chapter
                    {readingsAll.length === 1 ? "" : "s"}
                  </span>
                  <div
                    className="h-px flex-1"
                    style={{
                      background:
                        "linear-gradient(to right, rgba(201,168,76,0.18), transparent)",
                    }}
                    aria-hidden
                  />
                </div>
                <p
                  className="text-[12px] mb-3 px-1 leading-relaxed"
                  style={{ color: "rgba(192,192,192,0.6)" }}
                >
                  Companion curriculum — research-report aligned, deeper
                  coverage than the interactive chapters. Read on demand or in
                  sequence.
                </p>
                <div className="space-y-2">
                  {readingsAll.map((r) => (
                    <ReadingRow
                      key={r.slug}
                      item={r}
                      accent={SECTION_THEME[r.section].accent}
                    />
                  ))}
                </div>
              </div>
            )}
          </section>

          {/* === Reference library === */}
          {referencesAll.length > 0 && (
            <section
              id="references"
              className="space-y-5 pt-4 border-t"
              style={{ borderColor: "rgba(255,255,255,0.04)" }}
            >
              <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
                <div>
                  <p className={EYEBROW + " mb-2"}>Reference library</p>
                  <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#F0F0F0] tracking-tight">
                    Strategy guides &amp; deep-dives
                  </h2>
                  <p className="text-[13px] text-[#888888] mt-2 max-w-2xl">
                    Off-path resources you can pull up during review or
                    drilling. Not part of the core path — open them when a
                    specific topic needs a deeper look.
                  </p>
                </div>
                <p className="text-[12px] tabular-nums text-[#666666]">
                  {referencesAll.length} guides
                </p>
              </div>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {referencesAll.map((r) => (
                  <ReferenceTile key={r.slug} item={r} />
                ))}
              </div>
            </section>
          )}
        </>
      )}
    </div>
  )
}
