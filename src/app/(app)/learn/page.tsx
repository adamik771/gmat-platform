import Link from "next/link"
import {
  ArrowRight,
  BookOpen,
  Brain,
  CheckCircle2,
  ChevronRight,
  ClipboardList,
  Compass,
  ExternalLink,
  GraduationCap,
  LineChart,
  ListChecks,
  RotateCcw,
  Sparkles,
  Target,
  Timer,
} from "lucide-react"
import { getAllGuides, type ParsedGuide } from "@/lib/content"
import { createSupabaseServer } from "@/lib/supabase/server"
import type { Section } from "@/types"

/**
 * /course — the master course hub.
 *
 * Provides a single entry point to the structured GMAT course experience,
 * grouping every surface into four flow stages:
 *
 *   1. Learn      — curriculum chapters with sub-chapter TOCs (deep-link
 *                   into specific reading sections)
 *   2. Practice   — question bank, mini-examples, active recall, drills
 *   3. Measure    — official exams, full mock, custom test
 *   4. Track      — mistake log, spaced review, progress analytics
 *
 * The page is read-mostly. It never mutates user state. Progress badges
 * pull from `user_metadata.chapter_progress` (the same source the
 * existing `/chapters` page uses) so the hub stays consistent with
 * downstream surfaces.
 */

export const metadata = {
  title: "Course",
}

const EYEBROW = "text-[10px] font-semibold uppercase tracking-[0.22em]"

interface SubchapterEntry {
  /** Display label, e.g., "Core idea". */
  title: string
  /** Slugified anchor — matches the auto-generated ID in /guides/[slug]. */
  anchor: string
}

interface CurriculumChapter {
  slug: string
  title: string
  description: string
  section: Section | "General"
  subchapters: SubchapterEntry[]
  /** Total number of mini-examples + active-recall blocks discovered. */
  exampleCount: number
  recallCount: number
  drillCount: number
}

function slugifyHeading(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .slice(0, 80)
}

/**
 * Extract the structured outline from a curriculum chapter's markdown body:
 *   - subchapters → H2 headings (## )
 *   - example count → ### Worked example / Mini-example occurrences
 *   - recall count → ### Quick check occurrences
 *   - drill count → ### Micro-drill occurrences
 */
function parseCurriculumChapter(guide: ParsedGuide): CurriculumChapter {
  const lines = guide.content.split("\n")
  const subchapters: SubchapterEntry[] = []
  let exampleCount = 0
  let recallCount = 0
  let drillCount = 0

  for (const line of lines) {
    const h2 = line.match(/^##\s+(?!#)(.+)$/)
    if (h2) {
      const title = h2[1].trim()
      // Skip the chapter-title H1 echo (occasional). Take H2s only.
      subchapters.push({ title, anchor: slugifyHeading(title) })
      continue
    }
    const h3 = line.match(/^###\s+(.+)$/)
    if (h3) {
      const head = h3[1].trim().toLowerCase()
      if (head.startsWith("worked example") || head.startsWith("mini-example") || head.startsWith("example")) {
        exampleCount += 1
      } else if (head.startsWith("quick check") || head.startsWith("active recall")) {
        recallCount += 1
      } else if (head.startsWith("micro-drill") || head.startsWith("micro drill")) {
        drillCount += 1
      }
    }
  }

  return {
    slug: guide.slug,
    title: guide.title,
    description: guide.description,
    section: guide.section,
    subchapters,
    exampleCount,
    recallCount,
    drillCount,
  }
}

interface ProgressShape {
  sectionsRead?: Record<string, boolean>
}

export default async function CoursePage() {
  const guides = getAllGuides()
  // The curriculum lives under reading-{section}-{nn}-{slug}.md files; the
  // "introduction" and "integration" siblings are course-wide bookends.
  const curriculumGuides = guides
    .filter((g) => g.slug.startsWith("reading-"))
    .filter((g) => g.section === "Quant" || g.section === "Verbal" || g.section === "DI" || g.section === "General")

  // Progress overlay (best-effort — anonymous viewers see no badges).
  let progress: Record<string, ProgressShape> = {}
  let baselineEntered = false
  let officialExamCount = 0
  let firstName: string | null = null
  let targetScore: number | null = null
  let examDate: string | null = null
  try {
    const supabase = await createSupabaseServer()
    const {
      data: { user },
    } = await supabase.auth.getUser()
    if (user) {
      // Only use a real authored full_name. The email-username fallback
      // (e.g. "adamzakaryan15") makes the page look like a dev build —
      // better to drop the comma than to greet someone with their handle.
      const fullName = (user.user_metadata?.full_name as string | undefined) ?? null
      firstName =
        fullName && fullName.trim().length > 0
          ? fullName.trim().split(/\s+/)[0]
          : null
      const raw = user.user_metadata?.chapter_progress
      if (raw && typeof raw === "object") {
        progress = raw as Record<string, ProgressShape>
      }
      targetScore =
        typeof user.user_metadata?.target_score === "number"
          ? (user.user_metadata.target_score as number)
          : null
      const examMeta = user.user_metadata?.exam_date
      examDate =
        typeof examMeta === "string" && examMeta.length > 0 ? examMeta : null
      const metaOfficialScores = user.user_metadata?.official_exam_scores
      officialExamCount = Array.isArray(metaOfficialScores)
        ? metaOfficialScores.length
        : 0
      baselineEntered = officialExamCount > 0
    }
  } catch {
    // No-op — render in unauthenticated mode.
  }

  const parsed = curriculumGuides.map(parseCurriculumChapter)
  const bySection: Record<"Quant" | "Verbal" | "DI" | "General", CurriculumChapter[]> = {
    Quant: [],
    Verbal: [],
    DI: [],
    General: [],
  }
  for (const ch of parsed) {
    if (ch.section === "Quant" || ch.section === "Verbal" || ch.section === "DI") {
      bySection[ch.section].push(ch)
    } else {
      bySection.General.push(ch)
    }
  }
  // Stable ordering inside each section (slug already encodes chapter number).
  for (const k of ["Quant", "Verbal", "DI", "General"] as const) {
    bySection[k].sort((a, b) => a.slug.localeCompare(b.slug))
  }

  // Aggregate counts for the hero stats strip.
  const totalSubchapters = parsed.reduce((acc, ch) => acc + ch.subchapters.length, 0)
  const totalExamples = parsed.reduce((acc, ch) => acc + ch.exampleCount, 0)
  const totalRecall = parsed.reduce((acc, ch) => acc + ch.recallCount, 0)
  const totalDrills = parsed.reduce((acc, ch) => acc + ch.drillCount, 0)

  const sectionTotal = (sec: "Quant" | "Verbal" | "DI") => bySection[sec].length

  return (
    <div className="relative">
      <div
        className="absolute inset-x-0 top-0 h-[600px] pointer-events-none"
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

      <div className="relative max-w-6xl mx-auto space-y-14">
        {/* HERO — mission control: action-driven, not abstract.
            When the baseline isn't entered, the page is brutally focused
            on baselining. Otherwise it points at the Study Plan, which
            already orchestrates today's work. */}
        <section className="pt-2">
          <div className="flex items-center gap-3 mb-5">
            <span
              className="h-px w-10"
              style={{
                background:
                  "linear-gradient(to right, transparent, rgba(201,168,76,0.6))",
              }}
            />
            <p className={`${EYEBROW}`} style={{ color: "#C9A84C" }}>
              {firstName
                ? `Welcome back, ${firstName}`
                : "Your GMAT learning system"}
            </p>
          </div>
          <div className="grid lg:grid-cols-[minmax(0,1fr)_320px] gap-8 lg:gap-12">
            <div className="min-w-0">
              <h1 className="font-display text-4xl md:text-[54px] font-semibold tracking-[-0.02em] text-[#F0F0F0] leading-[1.04] mb-5">
                {baselineEntered ? (
                  <>
                    Your course is{" "}
                    <span
                      className="font-display-italic"
                      style={{ color: "#C9A84C" }}
                    >
                      live.
                    </span>
                  </>
                ) : (
                  <>
                    Start with your{" "}
                    <span
                      className="font-display-italic"
                      style={{ color: "#C9A84C" }}
                    >
                      baseline exam.
                    </span>
                  </>
                )}
              </h1>
              <p className="text-[16px] leading-[1.7] text-[#C0C0C0] max-w-2xl">
                {baselineEntered
                  ? "Baseline entered. The rest of the loop runs from your study plan — today's focus, weak areas, weekly cadence."
                  : "Take Official Practice Exam 1 on mba.com under full exam conditions and enter the score here. A real exam is the only baseline worth planning around — it seeds the study plan."}
              </p>
              <div className="mt-7 flex flex-wrap items-center gap-3">
                {baselineEntered ? (
                  <>
                    <Link
                      href="/study-plan"
                      className="group inline-flex items-center gap-2 px-5 py-3 rounded-lg text-[13px] font-semibold transition-transform duration-200 hover:-translate-y-0.5"
                      style={{ backgroundColor: "#C9A84C", color: "#0A0A0A" }}
                    >
                      Open Study Plan
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                    </Link>
                    <Link
                      href="/chapters"
                      className="inline-flex items-center gap-2 px-4 py-3 rounded-lg text-[13px] font-semibold border transition-colors"
                      style={{
                        borderColor: "rgba(255,255,255,0.10)",
                        color: "#C0C0C0",
                      }}
                    >
                      Browse the curriculum
                    </Link>
                  </>
                ) : (
                  <>
                    <Link
                      href="/mock"
                      className="group inline-flex items-center gap-2 px-5 py-3 rounded-lg text-[13px] font-semibold transition-transform duration-200 hover:-translate-y-0.5"
                      style={{ backgroundColor: "#C9A84C", color: "#0A0A0A" }}
                    >
                      Open the official exam plan
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                    </Link>
                    <a
                      href="https://www.mba.com/exam-prep/gmat-official-practice-exams"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-3 rounded-lg text-[13px] font-semibold border transition-colors hover:border-white/20"
                      style={{
                        borderColor: "rgba(255,255,255,0.10)",
                        color: "#C0C0C0",
                      }}
                    >
                      Get the exam on mba.com
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                    <Link
                      href="/study-plan"
                      className="inline-flex items-center gap-2 px-4 py-3 rounded-lg text-[13px] font-semibold border transition-colors"
                      style={{
                        borderColor: "rgba(255,255,255,0.10)",
                        color: "#C0C0C0",
                      }}
                    >
                      View course map
                    </Link>
                  </>
                )}
              </div>
            </div>

            {/* Right column — setup status. Quiet visual; the baseline
                CTA stays dominant. Each row toggles between Set / Missing
                so the user can see at a glance what's still off. */}
            <div className="flex flex-col gap-2.5 lg:max-w-[320px]">
              <p
                className="text-[10px] font-semibold uppercase tracking-[0.22em] mb-1"
                style={{ color: "#C9A84C" }}
              >
                Your setup
              </p>
              {[
                { label: "Baseline exam", done: baselineEntered, href: "/mock" },
                { label: "Target score", done: targetScore !== null, href: "/dashboard#score-goal" },
                { label: "Exam date", done: examDate !== null, href: "/settings" },
              ].map((row) => (
                <Link
                  key={row.label}
                  href={row.href}
                  className="group flex items-center gap-3 px-3.5 py-2.5 rounded-lg border transition-colors hover:bg-white/[0.02]"
                  style={{
                    borderColor: row.done
                      ? "rgba(62,207,142,0.22)"
                      : "rgba(255,255,255,0.06)",
                    backgroundColor: row.done
                      ? "rgba(62,207,142,0.04)"
                      : "rgba(255,255,255,0.012)",
                  }}
                >
                  {row.done ? (
                    <CheckCircle2
                      className="w-3.5 h-3.5 flex-shrink-0"
                      style={{ color: "#3ECF8E" }}
                    />
                  ) : (
                    <span
                      className="w-3.5 h-3.5 rounded-full border flex-shrink-0"
                      style={{ borderColor: "rgba(255,255,255,0.2)" }}
                      aria-hidden
                    />
                  )}
                  <span
                    className="text-[13px] flex-1"
                    style={{ color: row.done ? "#888888" : "#C0C0C0" }}
                  >
                    {row.label}
                  </span>
                  <span
                    className="text-[11px] uppercase tracking-[0.18em] font-semibold"
                    style={{
                      color: row.done ? "#3ECF8E" : "rgba(255,255,255,0.4)",
                    }}
                  >
                    {row.done ? "Set" : "Missing"}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* COURSE LOOP — visualizes the "one spine" claim. Five steps,
            connected. The first node mirrors the baseline state; the
            others stay neutral (per-chapter signal isn't available
            without backend changes). The Study Plan is the 5th node so
            it stops being a footer afterthought. */}
        <CourseLoop
          baselineEntered={baselineEntered}
        />

        {/* BY THE NUMBERS — moved out of the hero. Stats now carry an
            outcome line so they don't read as quantity-padding. */}
        <section
          className="rounded-2xl border p-5 sm:p-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
          style={{
            borderColor: "rgba(255,255,255,0.06)",
            backgroundColor: "#0D0D0D",
          }}
        >
          <StatCell
            value={parsed.length}
            label="Core chapters"
            outcome="Full Q / V / DI Focus coverage"
          />
          <StatCell
            value={totalSubchapters}
            label="Sub-skills"
            outcome="Broken into testable micro-skills"
          />
          <StatCell
            value={totalRecall}
            label="Recall checks"
            outcome="Built for spaced retention"
          />
          <StatCell
            value={totalExamples + totalDrills}
            label="Examples + drills"
            outcome="Original worked walkthroughs"
          />
        </section>

        {/* STAGE 1: LEARN — curriculum */}
        <Stage
          stage="01"
          eyebrow="Learn"
          title="Read the"
          titleAccent="curriculum."
          description="Each chapter teaches one operating principle plus its sub-skills. Sub-chapter links jump straight into the section you need."
        >
          {(["Quant", "Verbal", "DI"] as const).map((section) => {
            const chapters = bySection[section]
            if (chapters.length === 0) return null
            return (
              <SectionGroup
                key={section}
                section={section}
                count={sectionTotal(section)}
              >
                {chapters.map((ch) => (
                  <CurriculumChapterCard
                    key={ch.slug}
                    chapter={ch}
                    progress={progress[ch.slug]}
                  />
                ))}
              </SectionGroup>
            )
          })}
        </Stage>

        {/* STAGE 2: PRACTICE — question bank, mini-examples, recall, drills */}
        <Stage
          stage="02"
          eyebrow="Practice"
          title="Drill the"
          titleAccent="reps."
          description="Pull questions from the bank, work through mini-examples, run active-recall checkpoints, hit a micro-drill set tied to the chapter you just read."
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <PracticeCard
              icon={GraduationCap}
              title="Question Bank"
              count={`across ${parsed.length} chapters`}
              description="Topic-filtered drill sets. Pick a topic, run 10-15 questions, and every miss seeds tomorrow's review queue."
              href="/practice"
              cta="Open bank"
            />
            <PracticeCard
              icon={Sparkles}
              title="Mini-examples"
              count={`${totalExamples} worked walkthroughs`}
              description="Embedded inside each chapter — short, original problems with a fastest-path solution. Learn one move at a time."
              href="/learn/examples"
              cta="Browse"
            />
            <PracticeCard
              icon={Brain}
              title="Active recall"
              count={`${totalRecall} checkpoint sets`}
              description="3-5 question free-recall checks per sub-chapter section. The single highest-leverage retention tool the curriculum uses."
              href="/learn/recall"
              cta="Browse"
            />
            <PracticeCard
              icon={ListChecks}
              title="Micro-drills"
              count={`${totalDrills} drill blocks`}
              description="Per-subchapter 8-question sets (3 easy / 3 medium / 2 hard) with inline answer + trap + lesson notes."
              href="/learn/drills"
              cta="Browse"
            />
          </div>
        </Stage>

        {/* STAGE 3: MEASURE — official exams + mock */}
        <Stage
          stage="03"
          eyebrow="Measure"
          title="Test against"
          titleAccent="reality."
          description="An official mba.com exam to baseline. A full-length site mock for extra reps. A custom test when you want to drill a specific topic under timed pressure."
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <MeasureCard
              icon={Compass}
              title="Official Exam Plan"
              status={baselineEntered ? "Baseline entered" : "Start here"}
              description="The 6 official mba.com practice exams on a weekly cadence, scores tracked here. The calibrated signal."
              href="/mock"
              variant={baselineEntered ? "muted" : "primary"}
            />
            <MeasureCard
              icon={Timer}
              title="Full Mock"
              status="3 sections × 45 min"
              description="Realistic test-day simulation. Auto-submits on timeout. Mock-to-mock score trend on the report."
              href="/mock"
            />
            <MeasureCard
              icon={ClipboardList}
              title="Test Builder"
              status="Custom mix"
              description="Pick topics + difficulty + count. Useful for short timed reps on a specific weak area."
              href="/test-builder"
            />
          </div>
        </Stage>

        {/* STAGE 4: TRACK — mistake log + review + analytics */}
        <Stage
          stage="04"
          eyebrow="Track"
          title="Close the"
          titleAccent="loop."
          description="Tag every mistake. Review on a spaced schedule. Watch your trajectory in the analytics dashboard."
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <MeasureCard
              icon={Target}
              title="Mistake Log"
              status="6-tag taxonomy"
              description="Every miss tagged Conceptual / Careless / Time / Misread / Strategy / Other. The fastest way to see your dominant error pattern."
              href="/error-log"
            />
            <MeasureCard
              icon={RotateCcw}
              title="Spaced Review"
              status="Daily queue"
              description="Retrieval practice on items you've missed before. Priority = recent miss + repeat miss + spacing."
              href="/review"
            />
            <MeasureCard
              icon={LineChart}
              title="Progress Analytics"
              status="Score trajectory"
              description="Per-topic accuracy + timing. Behaviour patterns: efficient / labored / rushed / stuck. Weekly trend."
              href="/analytics"
            />
          </div>
        </Stage>

      </div>
    </div>
  )
}

// ---------- Subcomponents ----------

function StatCell({
  label,
  value,
  outcome,
}: {
  label: string
  value: number
  outcome?: string
}) {
  return (
    <div className="flex flex-col">
      <p
        className="font-display text-[2rem] font-semibold tracking-[-0.02em] leading-none"
        style={{ color: "#C9A84C" }}
      >
        {value}
      </p>
      <p className="text-[11px] uppercase tracking-[0.18em] text-[#F0F0F0] mt-2 font-semibold">
        {label}
      </p>
      {outcome && (
        <p className="text-[11px] text-[#888888] mt-1 leading-snug">
          {outcome}
        </p>
      )}
    </div>
  )
}

/**
 * Course loop — five nodes connected by a soft accent line. Visualizes
 * the "one spine" claim. State on the first node mirrors the baseline
 * status; the others stay neutral because we have no per-chapter signal
 * to color them with on this page (the curriculum-guide slugs don't map
 * to interactive `chapter_progress` keys).
 */
function CourseLoop({
  baselineEntered,
}: {
  baselineEntered: boolean
}) {
  type LoopNode = {
    n: string
    title: string
    body: string
    href: string
    Icon: typeof Compass
    state: "current" | "next" | "neutral" | "done"
  }
  const nodes: LoopNode[] = [
    {
      n: "01",
      title: "Baseline",
      body: "Official exam, real conditions.",
      href: "/mock",
      Icon: Compass,
      state: baselineEntered ? "done" : "current",
    },
    {
      n: "02",
      title: "Learn",
      body: "Read the highest-impact chapter.",
      href: "/chapters",
      Icon: BookOpen,
      state: baselineEntered ? "current" : "neutral",
    },
    {
      n: "03",
      title: "Drill",
      body: "Practice the sub-skills.",
      href: "/practice",
      Icon: ListChecks,
      state: "neutral",
    },
    {
      n: "04",
      title: "Review",
      body: "Fix mistakes on a spaced schedule.",
      href: "/review",
      Icon: RotateCcw,
      state: "neutral",
    },
    {
      n: "05",
      title: "Plan",
      body: "Today's focus + weekly cadence.",
      href: "/study-plan",
      Icon: Target,
      state: baselineEntered ? "current" : "neutral",
    },
  ]
  return (
    <section>
      <div className="flex items-center gap-3 mb-5">
        <p className={EYEBROW} style={{ color: "#C9A84C" }}>
          The loop · one spine
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
      <ol className="grid grid-cols-1 md:grid-cols-5 gap-3">
        {nodes.map((node, i) => {
          const accent =
            node.state === "done"
              ? "#3ECF8E"
              : node.state === "current"
              ? "#C9A84C"
              : "rgba(255,255,255,0.25)"
          const titleColor =
            node.state === "neutral" ? "rgba(240,240,240,0.7)" : "#F0F0F0"
          const cardBg =
            node.state === "current"
              ? "rgba(201,168,76,0.05)"
              : node.state === "done"
              ? "rgba(62,207,142,0.04)"
              : "#0D0D0D"
          const cardBorder =
            node.state === "current"
              ? "rgba(201,168,76,0.28)"
              : node.state === "done"
              ? "rgba(62,207,142,0.22)"
              : "rgba(255,255,255,0.06)"
          const Icon = node.Icon
          return (
            <li key={node.n} className="relative">
              <Link
                href={node.href}
                className="group block h-full p-4 rounded-xl border transition-all duration-300 hover:-translate-y-0.5"
                style={{
                  borderColor: cardBorder,
                  backgroundColor: cardBg,
                }}
              >
                <div className="flex items-center justify-between mb-3">
                  <span
                    className="inline-flex items-center justify-center w-8 h-8 rounded-lg"
                    style={{
                      backgroundColor:
                        node.state === "neutral"
                          ? "rgba(255,255,255,0.04)"
                          : `${accent}1A`,
                    }}
                  >
                    <Icon className="w-3.5 h-3.5" style={{ color: accent }} />
                  </span>
                  <span
                    className="font-display text-[11px] font-semibold tabular-nums"
                    style={{
                      color:
                        node.state === "neutral"
                          ? "rgba(255,255,255,0.35)"
                          : accent,
                    }}
                  >
                    {node.n}
                  </span>
                </div>
                <p
                  className="text-[14px] font-semibold tracking-tight leading-snug"
                  style={{ color: titleColor }}
                >
                  {node.title}
                </p>
                <p
                  className="text-[12px] mt-1 leading-snug"
                  style={{
                    color:
                      node.state === "neutral"
                        ? "rgba(255,255,255,0.4)"
                        : "rgba(192,192,192,0.7)",
                  }}
                >
                  {node.body}
                </p>
                {node.state === "done" && (
                  <span
                    className="mt-2 inline-flex items-center gap-1 text-[10px] uppercase tracking-[0.18em] font-semibold"
                    style={{ color: "#3ECF8E" }}
                  >
                    <CheckCircle2 className="w-3 h-3" />
                    Done
                  </span>
                )}
                {node.state === "current" && (
                  <span
                    className="mt-2 inline-block text-[10px] uppercase tracking-[0.18em] font-semibold"
                    style={{ color: "#C9A84C" }}
                  >
                    {i === 0 ? "Start here" : "Active"}
                  </span>
                )}
              </Link>
              {/* Connector — desktop only, between cards */}
              {i < nodes.length - 1 && (
                <span
                  className="hidden md:block absolute top-1/2 -right-1.5 -translate-y-1/2 w-3 h-px"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.10)",
                  }}
                  aria-hidden
                />
              )}
            </li>
          )
        })}
      </ol>
    </section>
  )
}

function Stage({
  stage,
  eyebrow,
  title,
  titleAccent,
  description,
  children,
}: {
  stage: string
  eyebrow: string
  title: string
  titleAccent: string
  description: string
  children: React.ReactNode
}) {
  return (
    <section className="space-y-7">
      <div>
        <div className="flex items-center gap-3 mb-4">
          <span
            className="font-display font-display-italic text-[1.5rem] leading-none"
            style={{ color: "#C9A84C" }}
          >
            {stage}
          </span>
          <span
            className="h-px w-8"
            style={{
              background:
                "linear-gradient(to right, transparent, rgba(201,168,76,0.6))",
            }}
          />
          <p className={EYEBROW} style={{ color: "#C9A84C" }}>
            {eyebrow}
          </p>
        </div>
        <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-[-0.02em] text-[#F0F0F0] leading-[1.05] mb-3">
          {title}{" "}
          <span className="font-display-italic" style={{ color: "#C9A84C" }}>
            {titleAccent}
          </span>
        </h2>
        <p className="text-[14px] text-[#C0C0C0] max-w-2xl leading-relaxed">
          {description}
        </p>
      </div>
      {children}
    </section>
  )
}

function SectionGroup({
  section,
  count,
  children,
}: {
  section: "Quant" | "Verbal" | "DI"
  count: number
  children: React.ReactNode
}) {
  return (
    <div className="space-y-3">
      <div className="flex items-baseline gap-3">
        <p
          className="text-[12px] uppercase tracking-[0.22em] font-semibold"
          style={{ color: "#C9A84C" }}
        >
          {section}
        </p>
        <span className="text-[12px] text-[#555555] tracking-tight">
          {count} chapter{count === 1 ? "" : "s"}
        </span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">{children}</div>
    </div>
  )
}

/**
 * Compact chapter card. Sub-chapter list moves into a `<details>`
 * disclosure — exposing every sub-link by default was the page's
 * worst density issue; readers couldn't scan the curriculum because
 * each card carried a 6-row mini-TOC.
 */
function CurriculumChapterCard({
  chapter,
  progress,
}: {
  chapter: CurriculumChapter
  progress?: ProgressShape
}) {
  const sectionsRead = progress?.sectionsRead ?? {}
  const sectionsReadCount = Object.values(sectionsRead).filter(Boolean).length
  const isStarted = sectionsReadCount > 0
  const cta = isStarted ? "Continue" : "Open chapter"
  const counts: string[] = []
  if (chapter.exampleCount > 0)
    counts.push(
      `${chapter.exampleCount} example${chapter.exampleCount === 1 ? "" : "s"}`
    )
  if (chapter.recallCount > 0)
    counts.push(
      `${chapter.recallCount} recall check${chapter.recallCount === 1 ? "" : "s"}`
    )
  if (chapter.drillCount > 0)
    counts.push(
      `${chapter.drillCount} drill set${chapter.drillCount === 1 ? "" : "s"}`
    )

  return (
    <div
      className="group rounded-xl border border-white/[0.06] bg-[#0D0D0D] transition-all duration-300 hover:border-white/[0.12] overflow-hidden"
      style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.03)" }}
    >
      <Link
        href={`/guides/${chapter.slug}`}
        className="flex items-start justify-between gap-4 p-4"
      >
        <div className="min-w-0">
          <p className="text-[15px] font-semibold text-[#F0F0F0] tracking-tight mb-1 group-hover:text-[#FFFFFF]">
            {chapter.title}
          </p>
          <p className="text-[12px] text-[#888888] leading-snug line-clamp-2">
            {chapter.description}
          </p>
          {counts.length > 0 && (
            <p
              className="text-[11px] mt-2 tabular-nums"
              style={{ color: "rgba(255,255,255,0.4)" }}
            >
              {counts.join(" · ")}
            </p>
          )}
        </div>
        <div
          className="flex items-center gap-1 text-[11px] uppercase tracking-[0.18em] font-semibold flex-shrink-0 mt-1 transition-transform group-hover:translate-x-0.5"
          style={{ color: isStarted ? "#3ECF8E" : "rgba(255,255,255,0.6)" }}
        >
          {isStarted && (
            <CheckCircle2
              className="w-3.5 h-3.5 mr-1"
              aria-label="In progress"
            />
          )}
          {cta}
          <ArrowRight className="w-3 h-3" aria-hidden />
        </div>
      </Link>

      {chapter.subchapters.length > 0 && (
        <details className="group/details border-t border-white/[0.04]">
          <summary className="flex items-center justify-between gap-2 px-4 py-2.5 cursor-pointer list-none text-[11px] uppercase tracking-[0.18em] font-semibold text-[#888888] hover:text-[#C0C0C0] transition-colors">
            <span className="flex items-center gap-1.5">
              <ChevronRight className="w-3 h-3 transition-transform group-open/details:rotate-90" />
              Sub-chapters
              <span
                className="tabular-nums"
                style={{ color: "rgba(255,255,255,0.4)" }}
              >
                {chapter.subchapters.length}
              </span>
            </span>
          </summary>
          <ul className="px-4 pb-3 space-y-0.5">
            {chapter.subchapters.map((sub) => (
              <li key={sub.anchor}>
                <Link
                  href={`/guides/${chapter.slug}#${sub.anchor}`}
                  className="flex items-center gap-2 text-[12px] text-[#888888] hover:text-[#F0F0F0] transition-colors py-1 -mx-1 px-1 rounded"
                >
                  <ChevronRight
                    className="w-3 h-3 flex-shrink-0"
                    style={{ color: "rgba(255,255,255,0.3)" }}
                  />
                  <span className="truncate">{sub.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </details>
      )}
    </div>
  )
}

function PracticeCard({
  icon: Icon,
  title,
  count,
  description,
  href,
  cta,
}: {
  icon: typeof BookOpen
  title: string
  count: string
  description: string
  href: string
  cta: string
}) {
  return (
    <Link
      href={href}
      className="group flex items-start gap-4 p-5 rounded-2xl border border-white/[0.08] bg-[#0D0D0D] transition-all duration-300 hover:border-white/[0.14]"
      style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.03)" }}
    >
      <div
        className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
        style={{
          backgroundColor: "rgba(201,168,76,0.10)",
          border: "1px solid rgba(201,168,76,0.20)",
        }}
      >
        <Icon className="w-4 h-4" style={{ color: "#C9A84C" }} />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-baseline justify-between gap-3 mb-1">
          <p className="text-[15px] font-semibold text-[#F0F0F0] tracking-tight">
            {title}
          </p>
          <span className="text-[10px] uppercase tracking-[0.18em] text-[#888888] font-medium whitespace-nowrap">
            {count}
          </span>
        </div>
        <p className="text-[13px] text-[#C0C0C0] leading-relaxed mb-2">
          {description}
        </p>
        <span
          className="inline-flex items-center gap-1.5 text-[12px] font-semibold tracking-tight transition-colors"
          style={{ color: "#C9A84C" }}
        >
          {cta}
          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
        </span>
      </div>
    </Link>
  )
}

function MeasureCard({
  icon: Icon,
  title,
  status,
  description,
  href,
  variant,
}: {
  icon: typeof BookOpen
  title: string
  status: string
  description: string
  href: string
  variant?: "primary" | "muted"
}) {
  const isPrimary = variant === "primary"
  return (
    <Link
      href={href}
      className="group block p-5 rounded-2xl border bg-[#0D0D0D] transition-all duration-300 hover:-translate-y-0.5"
      style={{
        borderColor: isPrimary ? "rgba(201,168,76,0.22)" : "rgba(255,255,255,0.08)",
        boxShadow: isPrimary
          ? "0 0 40px rgba(201,168,76,0.06), inset 0 1px 0 rgba(255,255,255,0.04)"
          : "inset 0 1px 0 rgba(255,255,255,0.03)",
      }}
    >
      <div className="flex items-center gap-3 mb-3">
        <div
          className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
          style={{
            backgroundColor: "rgba(201,168,76,0.10)",
            border: "1px solid rgba(201,168,76,0.20)",
          }}
        >
          <Icon className="w-4 h-4" style={{ color: "#C9A84C" }} />
        </div>
        <p className="text-[15px] font-semibold text-[#F0F0F0] tracking-tight">
          {title}
        </p>
      </div>
      <p className="text-[10px] uppercase tracking-[0.18em] font-semibold mb-2" style={{ color: "#C9A84C" }}>
        {status}
      </p>
      <p className="text-[13px] text-[#C0C0C0] leading-relaxed">{description}</p>
    </Link>
  )
}
