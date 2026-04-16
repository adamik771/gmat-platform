import {
  Clock,
  Target,
  CheckCircle,
  Flame,
  BookOpen,
  AlertCircle,
  TrendingUp,
} from "lucide-react"
import Link from "next/link"
import MetricCard from "@/components/dashboard/MetricCard"
import SectionProgress from "@/components/dashboard/SectionProgress"
import ActivityFeed from "@/components/dashboard/ActivityFeed"
import ScoreChart, { type ScoreDataPoint } from "@/components/dashboard/ScoreChart"
import QuickActions from "@/components/dashboard/QuickActions"
import EmptyState from "@/components/shared/EmptyState"
import { getAllLessons } from "@/lib/content"
import { createSupabaseServer } from "@/lib/supabase/server"
import type { ActivityItem, Section } from "@/types"

export default async function DashboardPage() {
  const supabase = await createSupabaseServer()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  const firstName =
    (user?.user_metadata?.full_name as string)?.split(" ")[0] ??
    user?.email?.split("@")[0] ??
    "there"

  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  })

  // Mirrors the lessons page synthesis: first 2 "done", 3rd "current".
  const lessons = getAllLessons()
  const recommendedLesson = lessons[2] ?? lessons[0]

  // ---------- Query progress data from Supabase ----------
  const userId = user?.id

  // Weekly sessions (last 7 days)
  const weekAgo = new Date(Date.now() - 7 * 86400000).toISOString()
  const { data: weekSessions } = await supabase
    .from("practice_sessions")
    .select("total_questions, correct_count, total_time_ms, accuracy")
    .eq("user_id", userId ?? "")
    .gte("created_at", weekAgo)

  const questionsThisWeek =
    weekSessions?.reduce((s, r) => s + r.total_questions, 0) ?? 0
  const studyMsThisWeek =
    weekSessions?.reduce((s, r) => s + r.total_time_ms, 0) ?? 0
  const studyHours =
    studyMsThisWeek > 0
      ? Number((studyMsThisWeek / 3600000).toFixed(1))
      : null
  const weekAccuracy =
    weekSessions && weekSessions.length > 0
      ? Math.round(
          weekSessions.reduce((s, r) => s + Number(r.accuracy), 0) /
            weekSessions.length
        )
      : null

  // Total sessions ever (for study streak approximation)
  const { count: totalSessionCount } = await supabase
    .from("practice_sessions")
    .select("id", { count: "exact", head: true })
    .eq("user_id", userId ?? "")

  // Per-section accuracy from all attempts
  const { data: sectionAttempts } = await supabase
    .from("practice_attempts")
    .select("section, is_correct")
    .eq("user_id", userId ?? "")

  const sectionStats: Record<Section, { total: number; correct: number }> = {
    Quant: { total: 0, correct: 0 },
    Verbal: { total: 0, correct: 0 },
    DI: { total: 0, correct: 0 },
  }
  for (const a of sectionAttempts ?? []) {
    const sec = a.section as Section
    if (sectionStats[sec]) {
      sectionStats[sec].total++
      if (a.is_correct) sectionStats[sec].correct++
    }
  }

  // Recent sessions for activity feed
  const { data: recentSessions } = await supabase
    .from("practice_sessions")
    .select("id, slug, topic, section, accuracy, total_questions, correct_count, created_at")
    .eq("user_id", userId ?? "")
    .order("created_at", { ascending: false })
    .limit(10)

  const activityItems: ActivityItem[] = (recentSessions ?? []).map((s) => ({
    id: s.id,
    type: "practice_set" as const,
    title: `${s.topic} Practice`,
    description: `${s.correct_count}/${s.total_questions} correct · ${Math.round(Number(s.accuracy))}%`,
    timestamp: s.created_at,
    score: Math.round(Number(s.accuracy)),
  }))

  // Weekly accuracy trend for score chart (last 8 weeks)
  const eightWeeksAgo = new Date(Date.now() - 56 * 86400000).toISOString()
  const { data: trendSessions } = await supabase
    .from("practice_sessions")
    .select("accuracy, created_at")
    .eq("user_id", userId ?? "")
    .gte("created_at", eightWeeksAgo)
    .order("created_at", { ascending: true })

  const scoreChartData: ScoreDataPoint[] = (() => {
    if (!trendSessions || trendSessions.length === 0) return []
    // Group by ISO week
    const weeks = new Map<string, number[]>()
    for (const s of trendSessions) {
      const d = new Date(s.created_at)
      const weekStart = new Date(d)
      weekStart.setDate(d.getDate() - d.getDay())
      const key = weekStart.toISOString().slice(0, 10)
      const arr = weeks.get(key) ?? []
      arr.push(Number(s.accuracy))
      weeks.set(key, arr)
    }
    return [...weeks.entries()].map(([week, accs], i) => ({
      week: `Wk ${i + 1}`,
      score: Math.round(accs.reduce((a, b) => a + b, 0) / accs.length),
    }))
  })()

  const hasData = (totalSessionCount ?? 0) > 0

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      {/* Greeting */}
      <div>
        <h1 className="text-2xl font-bold text-[#F0F0F0]">
          Good morning, {firstName}
        </h1>
        <p className="text-sm text-[#555555] mt-1">{today}</p>
      </div>

      {/* Score Goal Card — blank until diagnostic is taken */}
      <div
        className="p-5 rounded-xl border border-white/[0.08] bg-[#111111]"
        style={{ borderColor: "rgba(201,168,76,0.2)" }}
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
          <div className="flex items-center gap-3">
            <div
              className="w-10 h-10 rounded-lg flex items-center justify-center"
              style={{ backgroundColor: "rgba(201,168,76,0.1)" }}
            >
              <Target className="w-5 h-5" style={{ color: "#C9A84C" }} />
            </div>
            <div>
              <p className="text-xs text-[#555555]">Score Goal</p>
              <div className="flex items-baseline gap-3">
                <span className="text-xl font-bold text-[#555555]">
                  —
                  <span className="text-sm font-normal text-[#555555] ml-1">
                    estimated
                  </span>
                </span>
                <span className="text-sm text-[#555555]">→</span>
                <span className="text-xl font-bold text-[#555555]">
                  —
                  <span className="text-sm font-normal text-[#555555] ml-1">
                    target
                  </span>
                </span>
              </div>
            </div>
          </div>
          <Link
            href="/test-builder"
            className="px-3 py-1.5 rounded-lg text-xs font-semibold transition-all hover:opacity-90"
            style={{ backgroundColor: "#C9A84C", color: "#0A0A0A" }}
          >
            Take diagnostic
          </Link>
        </div>

        {/* Progress bar — empty state */}
        <div className="h-2 rounded-full bg-white/[0.06] overflow-hidden" />
        <p className="text-xs text-[#555555] mt-2">
          Take a diagnostic test to set your starting score and goal.
        </p>
      </div>

      {/* Weekly Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <MetricCard
          label="Study hours this week"
          value={studyHours}
          unit={studyHours !== null ? "hrs" : undefined}
          icon={Clock}
        />
        <MetricCard
          label="Questions this week"
          value={questionsThisWeek > 0 ? questionsThisWeek : null}
          icon={CheckCircle}
        />
        <MetricCard
          label="Weekly accuracy"
          value={weekAccuracy}
          unit={weekAccuracy !== null ? "%" : undefined}
          icon={TrendingUp}
        />
        <MetricCard
          label="Total sessions"
          value={totalSessionCount ?? null}
          icon={Flame}
        />
      </div>

      {/* Section Progress + Chart */}
      <div className="grid lg:grid-cols-5 gap-6">
        <div className="lg:col-span-3 space-y-4">
          <h2 className="text-sm font-semibold text-[#888888] uppercase tracking-widest">
            Section Progress
          </h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {(["Quant", "Verbal", "DI"] as const).map((sec) => {
              const s = sectionStats[sec]
              const hasSecData = s.total > 0
              return (
                <SectionProgress
                  key={sec}
                  section={sec}
                  score={hasSecData ? Math.round((s.correct / s.total) * 90) : null}
                  accuracy={hasSecData ? Math.round((s.correct / s.total) * 100) : null}
                  empty={!hasSecData}
                />
              )
            })}
          </div>
        </div>

        <div className="lg:col-span-2">
          <h2 className="text-sm font-semibold text-[#888888] uppercase tracking-widest mb-4">
            Accuracy Trend
          </h2>
          <div className="p-5 rounded-xl border border-white/[0.08] bg-[#111111]">
            <ScoreChart height={150} data={scoreChartData} />
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div>
        <h2 className="text-sm font-semibold text-[#888888] uppercase tracking-widest mb-4">
          Quick Actions
        </h2>
        <QuickActions />
      </div>

      {/* Activity + Mistakes */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Recent Activity */}
        <div>
          <h2 className="text-sm font-semibold text-[#888888] uppercase tracking-widest mb-4">
            Recent Activity
          </h2>
          <div className="rounded-xl border border-white/[0.08] bg-[#111111] p-2">
            <ActivityFeed items={activityItems} />
          </div>
        </div>

        {/* Recent Mistakes + Next Lesson */}
        <div className="space-y-6">
          {/* Next Lesson — real content from the lesson library */}
          <div>
            <h2 className="text-sm font-semibold text-[#888888] uppercase tracking-widest mb-4">
              Recommended Next
            </h2>
            <Link
              href={`/lessons/${recommendedLesson.slug}`}
              className="p-5 rounded-xl border flex items-start gap-4 transition-colors hover:opacity-95"
              style={{
                borderColor: "rgba(201,168,76,0.2)",
                backgroundColor: "rgba(201,168,76,0.04)",
              }}
            >
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: "rgba(201,168,76,0.12)" }}
              >
                <BookOpen className="w-5 h-5" style={{ color: "#C9A84C" }} />
              </div>
              <div className="flex-1">
                <p className="text-xs text-[#555555] mb-1">
                  Module {String(recommendedLesson.module).padStart(2, "0")}
                </p>
                <p className="text-sm font-semibold text-[#F0F0F0] mb-1">
                  {recommendedLesson.title}
                </p>
                <p className="text-xs text-[#888888]">
                  Est. {recommendedLesson.duration} minutes
                </p>
              </div>
              <span
                className="flex-shrink-0 px-3 py-1.5 rounded-lg text-xs font-semibold"
                style={{ backgroundColor: "#C9A84C", color: "#0A0A0A" }}
              >
                Continue
              </span>
            </Link>
          </div>

          {/* Recent Mistakes — empty until error log tracking lands */}
          <div>
            <h2 className="text-sm font-semibold text-[#888888] uppercase tracking-widest mb-4">
              Recent Mistakes
            </h2>
            <EmptyState
              icon={AlertCircle}
              title="No mistakes logged yet"
              description="Your error log will collect questions you got wrong so you can review patterns over time."
              ctaHref="/error-log"
              ctaLabel="Open error log"
              size="sm"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
