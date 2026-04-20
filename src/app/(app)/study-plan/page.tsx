import Link from "next/link"
import {
  BookOpen,
  CalendarDays,
  CheckCircle,
  Clock,
  Target,
  Flame,
} from "lucide-react"
import { getAllLessons } from "@/lib/content"
import { createSupabaseServer } from "@/lib/supabase/server"
import EmptyState from "@/components/shared/EmptyState"
import type { Section } from "@/types"

const WEEKDAY_LABELS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
const SECTION_MIN_SAMPLE = 10

/**
 * Scale 0-100 accuracy to a GMAT Focus total (205..805 in 10-point
 * increments). Mirrors the dashboard + analytics helpers so the three
 * surfaces agree on what "estimated score" means.
 */
function accuracyToFocusTotal(accuracy: number): number {
  const clamped = Math.max(0, Math.min(100, accuracy))
  const raw = 205 + clamped * 6.0
  return 205 + Math.round((raw - 205) / 10) * 10
}

/** Same section → 60-90 scaling used by the dashboard Score Goal card. */
function scaledSectionScore(correct: number, total: number): number {
  return Math.round(60 + (correct / total) * 30)
}

export default async function StudyPlanPage() {
  const lessons = getAllLessons()

  // ---------- Data we'll display ----------
  // Default to zero / null so an unauth or Supabase-down render shows empty.
  let completedSlugs = new Set<string>()
  let examDate: string | null = null
  let targetScore: number | null = null
  let activityDays = new Set<string>() // YYYY-MM-DD for past 7 days with activity
  let studyHoursWeek = 0
  let studyDays30Count = 0
  let estimatedTotal: number | null = null

  try {
    const supabase = await createSupabaseServer()
    const {
      data: { user },
    } = await supabase.auth.getUser()

    if (user) {
      examDate = (user.user_metadata?.exam_date as string | null) ?? null
      const rawTarget = user.user_metadata?.target_score
      targetScore =
        typeof rawTarget === "number" && Number.isInteger(rawTarget)
          ? rawTarget
          : null

      // Lesson completions (all-time)
      const { data: completions } = await supabase
        .from("lesson_completions")
        .select("lesson_slug")
        .eq("user_id", user.id)
      if (completions) {
        completedSlugs = new Set(completions.map((c) => c.lesson_slug as string))
      }

      // Past-7-day session activity — calendar dots + study hours
      const sevenAgo = new Date(Date.now() - 7 * 86400000).toISOString()
      const { data: weekSessions } = await supabase
        .from("practice_sessions")
        .select("created_at, total_time_ms")
        .eq("user_id", user.id)
        .gte("created_at", sevenAgo)

      for (const s of weekSessions ?? []) {
        const d = new Date(s.created_at as string)
        activityDays.add(d.toISOString().slice(0, 10))
        studyHoursWeek += ((s.total_time_ms as number) ?? 0) / 3600000
      }

      // Past-30-day activity days for "days practiced" — streak proxy.
      const thirtyAgo = new Date(Date.now() - 30 * 86400000).toISOString()
      const { data: monthSessions } = await supabase
        .from("practice_sessions")
        .select("created_at")
        .eq("user_id", user.id)
        .gte("created_at", thirtyAgo)
      const monthDays = new Set<string>()
      for (const s of monthSessions ?? []) {
        monthDays.add(
          new Date(s.created_at as string).toISOString().slice(0, 10)
        )
      }
      studyDays30Count = monthDays.size

      // Estimated GMAT total — only if all 3 sections have ≥10 attempts,
      // matching the dashboard's gating exactly.
      const { data: sectionAttempts } = await supabase
        .from("practice_attempts")
        .select("section, is_correct")
        .eq("user_id", user.id)

      const secStats: Record<Section, { total: number; correct: number }> = {
        Quant: { total: 0, correct: 0 },
        Verbal: { total: 0, correct: 0 },
        DI: { total: 0, correct: 0 },
      }
      for (const a of sectionAttempts ?? []) {
        const sec = a.section as Section
        if (!secStats[sec]) continue
        secStats[sec].total++
        if (a.is_correct) secStats[sec].correct++
      }
      const allSectionsReady = (["Quant", "Verbal", "DI"] as const).every(
        (s) => secStats[s].total >= SECTION_MIN_SAMPLE
      )
      if (allSectionsReady) {
        const sectionScore = (s: { total: number; correct: number }) =>
          scaledSectionScore(s.correct, s.total)
        const avgAccuracy =
          (["Quant", "Verbal", "DI"] as const)
            .map((sec) => secStats[sec].correct / secStats[sec].total)
            .reduce((a, b) => a + b, 0) / 3
        // Two viable derivations — accuracy→total or sum-of-sections. Use
        // accuracy→total here (same as analytics/dashboard).
        estimatedTotal = accuracyToFocusTotal(avgAccuracy * 100)
        // Keep the per-section math around as a sanity check (unused but
        // documents the relationship) — suppress the unused warning.
        void sectionScore
      }
    }
  } catch {
    // Supabase unavailable — render with empty defaults.
  }

  // ---------- Derived: calendar for the current week (Sun → Sat) ----------
  const today = new Date()
  const sunday = new Date(today)
  sunday.setHours(0, 0, 0, 0)
  sunday.setDate(today.getDate() - today.getDay())
  const weekDays = Array.from({ length: 7 }, (_, i) => {
    const d = new Date(sunday)
    d.setDate(sunday.getDate() + i)
    const key = d.toISOString().slice(0, 10)
    const isToday =
      d.getFullYear() === today.getFullYear() &&
      d.getMonth() === today.getMonth() &&
      d.getDate() === today.getDate()
    const isPast = d.getTime() < today.setHours(0, 0, 0, 0)
    return {
      weekdayLabel: WEEKDAY_LABELS[i],
      date: d,
      key,
      isToday,
      isPast,
      hasActivity: activityDays.has(key),
    }
  })

  // ---------- Derived: next 3 incomplete lessons, for "Upcoming" panel ----------
  const incompleteLessons = lessons.filter((l) => !completedSlugs.has(l.slug))
  const upcomingLessons = incompleteLessons.slice(0, 3)
  const nextLesson = incompleteLessons[0] ?? null

  // ---------- Derived: exam readiness ----------
  const daysUntilExam = examDate
    ? Math.ceil(
        (new Date(examDate).getTime() -
          new Date(new Date().toDateString()).getTime()) /
          86400000
      )
    : null

  // Readiness as percent toward target. If no target, fall back to pure
  // estimate / 805. If no estimate either, null → empty state.
  let readinessPct: number | null = null
  if (estimatedTotal !== null) {
    if (targetScore !== null) {
      const floor = 205
      readinessPct = Math.max(
        0,
        Math.min(
          100,
          Math.round(
            ((estimatedTotal - floor) / (targetScore - floor)) * 100
          )
        )
      )
    } else {
      readinessPct = Math.round((estimatedTotal / 805) * 100)
    }
  }

  const lessonsDoneCount = completedSlugs.size
  const totalLessons = lessons.length

  return (
    <div className="max-w-5xl mx-auto space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-[#F0F0F0]">Study Plan</h1>
        <p className="text-sm text-[#555555] mt-1">
          {daysUntilExam !== null && daysUntilExam > 0
            ? `${daysUntilExam} day${daysUntilExam === 1 ? "" : "s"} until your exam`
            : daysUntilExam !== null && daysUntilExam <= 0
            ? "Exam day has passed or is here — update your date in settings."
            : "Set an exam date in Settings to count down to your test."}
        </p>
      </div>

      {/* Weekly Calendar — real activity dots for the current week */}
      <div>
        <h2 className="text-sm font-semibold uppercase tracking-widest text-[#888888] mb-4">
          This Week
        </h2>
        <div className="grid grid-cols-7 gap-2">
          {weekDays.map((day) => {
            const { weekdayLabel, date, isToday, isPast, hasActivity } = day
            const borderColor = isToday
              ? "rgba(201,168,76,0.3)"
              : hasActivity
              ? "rgba(62,207,142,0.15)"
              : "rgba(255,255,255,0.06)"
            const bg = isToday
              ? "rgba(201,168,76,0.05)"
              : hasActivity
              ? "rgba(62,207,142,0.03)"
              : "#0D0D0D"
            return (
              <div key={day.key} className="flex flex-col gap-2">
                <p
                  className={`text-xs text-center font-medium ${
                    isToday ? "text-[#C9A84C]" : "text-[#555555]"
                  }`}
                >
                  {weekdayLabel}{" "}
                  <span className="text-[10px] text-[#444444]">
                    {date.getDate()}
                  </span>
                </p>
                <div
                  className="rounded-xl p-3 border min-h-[96px] flex flex-col gap-2"
                  style={{ borderColor, backgroundColor: bg }}
                >
                  {hasActivity ? (
                    <>
                      <CheckCircle
                        className="w-3.5 h-3.5"
                        style={{ color: "#3ECF8E" }}
                      />
                      <p className="text-xs text-[#C0C0C0] leading-snug">
                        Practiced
                      </p>
                    </>
                  ) : isToday ? (
                    <>
                      <div
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: "#C9A84C" }}
                      />
                      <p className="text-xs text-[#C0C0C0] leading-snug">
                        {nextLesson
                          ? `Next: ${nextLesson.title}`
                          : "Run a practice set"}
                      </p>
                    </>
                  ) : isPast ? (
                    <p className="text-xs text-[#444444]">No activity</p>
                  ) : (
                    <p className="text-xs text-[#444444]">Open</p>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Progress cards — real counts */}
      <div className="grid sm:grid-cols-3 gap-4">
        <StatCard
          icon={BookOpen}
          color="#C9A84C"
          label="Lessons completed"
          value={`${lessonsDoneCount} / ${totalLessons}`}
        />
        <StatCard
          icon={Clock}
          color="#C9A84C"
          label="Practice hours (7d)"
          value={(() => {
            // Show "—" when the total rounds to 0.0 hrs (nothing meaningful
            // tracked yet), otherwise the rounded hours. Avoids a misleading
            // "0.0 hrs" reading when only a few seconds have been logged.
            const rounded = Math.round(studyHoursWeek * 10) / 10
            return rounded >= 0.1 ? `${rounded.toFixed(1)} hrs` : "—"
          })()}
        />
        <StatCard
          icon={Flame}
          color="#C9A84C"
          label="Active days (30d)"
          value={studyDays30Count > 0 ? `${studyDays30Count}` : "—"}
        />
      </div>

      {/* Upcoming lessons — real curriculum */}
      <div>
        <h2 className="text-sm font-semibold uppercase tracking-widest text-[#888888] mb-4">
          Upcoming Lessons
        </h2>
        {upcomingLessons.length === 0 ? (
          <div className="p-5 rounded-xl border border-white/[0.08] bg-[#111111]">
            <div className="flex items-start gap-3">
              <CheckCircle
                className="w-5 h-5 flex-shrink-0 mt-0.5"
                style={{ color: "#3ECF8E" }}
              />
              <div>
                <p className="text-sm font-semibold text-[#F0F0F0]">
                  Curriculum complete
                </p>
                <p className="text-xs text-[#888888] mt-0.5">
                  All {totalLessons} lessons done. Keep drilling practice
                  sets and mock exams until test day.
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-3">
            {upcomingLessons.map((lesson, i) => {
              const moduleLabel = `Module ${String(lesson.module).padStart(2, "0")}`
              return (
                <Link
                  key={lesson.slug}
                  href={`/lessons/${lesson.slug}`}
                  className="flex items-start gap-4 p-4 rounded-xl border border-white/[0.08] bg-[#111111] hover:border-white/[0.14] transition-colors"
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{
                      backgroundColor:
                        i === 0
                          ? "rgba(201,168,76,0.1)"
                          : "rgba(255,255,255,0.04)",
                    }}
                  >
                    <BookOpen
                      className="w-5 h-5"
                      style={{ color: i === 0 ? "#C9A84C" : "#888888" }}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <span className="text-xs font-semibold uppercase tracking-widest text-[#555555]">
                        {moduleLabel}
                      </span>
                      <span
                        className="px-2 py-0.5 rounded text-[10px] uppercase tracking-wide"
                        style={{
                          backgroundColor: "rgba(201,168,76,0.08)",
                          color: "#C9A84C",
                        }}
                      >
                        {lesson.section}
                      </span>
                      {i === 0 && (
                        <span
                          className="px-2 py-0.5 rounded text-[10px] font-semibold uppercase tracking-widest"
                          style={{
                            backgroundColor: "rgba(201,168,76,0.12)",
                            color: "#C9A84C",
                          }}
                        >
                          Up Next
                        </span>
                      )}
                    </div>
                    <p className="text-sm font-semibold text-[#F0F0F0]">
                      {lesson.title}
                    </p>
                    <p className="text-xs text-[#888888] mt-1 line-clamp-1">
                      {lesson.description}
                    </p>
                    <div className="flex items-center gap-1.5 mt-2">
                      <Clock className="w-3 h-3 text-[#444444]" />
                      <span className="text-xs text-[#555555]">
                        {lesson.duration} min
                      </span>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        )}
      </div>

      {/* Exam readiness — real derivation */}
      {readinessPct !== null ? (
        <div
          className="p-5 rounded-xl border"
          style={{
            borderColor: "rgba(201,168,76,0.2)",
            backgroundColor: "rgba(201,168,76,0.04)",
          }}
        >
          <div className="flex items-center justify-between gap-3 flex-wrap">
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: "rgba(201,168,76,0.1)" }}
              >
                <Target className="w-5 h-5" style={{ color: "#C9A84C" }} />
              </div>
              <div>
                <p className="text-sm font-semibold text-[#F0F0F0]">
                  Exam readiness
                </p>
                <p className="text-xs text-[#888888] mt-0.5">
                  {targetScore !== null
                    ? `Toward your target of ${targetScore}`
                    : "Based on current estimate"}
                </p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-2xl font-bold" style={{ color: "#C9A84C" }}>
                {readinessPct}%
              </p>
              <p className="text-xs text-[#555555]">ready</p>
            </div>
          </div>
          <div className="mt-4 h-2 rounded-full bg-white/[0.06] overflow-hidden">
            <div
              className="h-full rounded-full transition-all duration-700"
              style={{
                width: `${readinessPct}%`,
                backgroundColor: "#C9A84C",
              }}
            />
          </div>
          <p className="text-xs text-[#555555] mt-2">
            Current estimate: {estimatedTotal}
            {targetScore !== null && ` · Target: ${targetScore}`}
            {daysUntilExam !== null && daysUntilExam > 0 && (
              <> · {daysUntilExam} day{daysUntilExam === 1 ? "" : "s"} until exam</>
            )}
          </p>
        </div>
      ) : (
        <EmptyState
          icon={CalendarDays}
          title="Exam readiness needs more data"
          description="Complete at least 10 attempts in each of Quant, Verbal, and DI to unlock a readiness estimate. Set a target score on the dashboard and an exam date in settings to refine it further."
          ctaHref="/test-builder"
          ctaLabel="Build a test"
          size="md"
        />
      )}
    </div>
  )
}

function StatCard({
  icon: Icon,
  color,
  label,
  value,
}: {
  icon: typeof BookOpen
  color: string
  label: string
  value: string
}) {
  return (
    <div className="p-5 rounded-xl border border-white/[0.08] bg-[#111111] flex items-center gap-4">
      <div
        className="w-9 h-9 rounded-lg flex items-center justify-center"
        style={{ backgroundColor: `${color}15` }}
      >
        <Icon className="w-4 h-4" style={{ color }} />
      </div>
      <div>
        <p className="text-lg font-bold text-[#F0F0F0]">{value}</p>
        <p className="text-xs text-[#555555]">{label}</p>
      </div>
    </div>
  )
}
