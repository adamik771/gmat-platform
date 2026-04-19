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
import { getAllLessons, getAllQuestions } from "@/lib/content"
import { createSupabaseServer } from "@/lib/supabase/server"
import type { ActivityItem, Section } from "@/types"

export default async function DashboardPage() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let user: any = null

  try {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    if (supabaseUrl && supabaseKey && supabaseUrl !== "your_supabase_url") {
      const supabase = await createSupabaseServer()
      const { data } = await supabase.auth.getUser()
      user = data.user
    }
  } catch {
    // Supabase unavailable — render with empty state
  }

  const firstName: string =
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
  let questionsThisWeek = 0
  let studyHours: number | null = null
  let weekAccuracy: number | null = null
  let totalSessionCount: number | null = null
  const sectionStats: Record<Section, { total: number; correct: number }> = {
    Quant: { total: 0, correct: 0 },
    Verbal: { total: 0, correct: 0 },
    DI: { total: 0, correct: 0 },
  }
  let activityItems: ActivityItem[] = []
  let scoreChartData: ScoreDataPoint[] = []
  let recentMistakes: {
    id: string
    section: Section
    topic: string
    preview: string
  }[] = []

  try {
    if (user) {
      const supabase = await createSupabaseServer()
      const userId = user.id

      // Weekly sessions (last 7 days)
      const weekAgo = new Date(Date.now() - 7 * 86400000).toISOString()
      const { data: weekSessions } = await supabase
        .from("practice_sessions")
        .select("total_questions, correct_count, total_time_ms, accuracy")
        .eq("user_id", userId)
        .gte("created_at", weekAgo)

      questionsThisWeek =
        weekSessions?.reduce((s, r) => s + r.total_questions, 0) ?? 0
      const studyMsThisWeek =
        weekSessions?.reduce((s, r) => s + r.total_time_ms, 0) ?? 0
      studyHours =
        studyMsThisWeek > 0
          ? Number((studyMsThisWeek / 3600000).toFixed(1))
          : null
      weekAccuracy =
        weekSessions && weekSessions.length > 0
          ? Math.round(
              weekSessions.reduce((s, r) => s + Number(r.accuracy), 0) /
                weekSessions.length
            )
          : null

      // Total sessions ever
      const { count } = await supabase
        .from("practice_sessions")
        .select("id", { count: "exact", head: true })
        .eq("user_id", userId)
      totalSessionCount = count

      // Per-section accuracy from all attempts
      const { data: sectionAttempts } = await supabase
        .from("practice_attempts")
        .select("section, is_correct")
        .eq("user_id", userId)

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
        .eq("user_id", userId)
        .order("created_at", { ascending: false })
        .limit(10)

      activityItems = (recentSessions ?? []).map((s) => ({
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
        .eq("user_id", userId)
        .gte("created_at", eightWeeksAgo)
        .order("created_at", { ascending: true })

      // Recent mistakes — 3 most recent wrong attempts, enriched with prompt.
      const { data: recentWrong } = await supabase
        .from("practice_attempts")
        .select("id, question_id, section, topic")
        .eq("user_id", userId)
        .eq("is_correct", false)
        .order("session_id", { ascending: false })
        .limit(3)

      if (recentWrong && recentWrong.length > 0) {
        const byId = new Map(getAllQuestions().map((q) => [q.id, q]))
        recentMistakes = recentWrong.map((r) => {
          const q = byId.get(r.question_id as string)
          const previewSource = q?.prompt ?? ""
          // Strip markdown-ish chars for a clean one-liner preview.
          const clean = previewSource
            .replace(/\n+/g, " ")
            .replace(/[#*`_>]/g, "")
            .trim()
          return {
            id: r.id as string,
            section: r.section as Section,
            topic: r.topic as string,
            preview: clean.length > 120 ? `${clean.slice(0, 120)}…` : clean,
          }
        })
      }

      if (trendSessions && trendSessions.length > 0) {
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
        scoreChartData = [...weeks.entries()].map(([, accs], i) => ({
          week: `Wk ${i + 1}`,
          score: Math.round(accs.reduce((a, b) => a + b, 0) / accs.length),
        }))
      }
    }
  } catch {
    // Supabase query failed — render with empty state
  }

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

          {/* Recent Mistakes */}
          <div>
            <h2 className="text-sm font-semibold text-[#888888] uppercase tracking-widest mb-4">
              Recent Mistakes
            </h2>
            {recentMistakes.length === 0 ? (
              <EmptyState
                icon={AlertCircle}
                title="No mistakes logged yet"
                description="Your error log will collect questions you got wrong so you can review patterns over time."
                ctaHref="/error-log"
                ctaLabel="Open error log"
                size="sm"
              />
            ) : (
              <Link
                href="/error-log"
                className="block rounded-xl border border-white/[0.08] bg-[#111111] divide-y divide-white/[0.04] hover:border-white/[0.14] transition-colors"
              >
                {recentMistakes.map((m) => (
                  <div key={m.id} className="p-4">
                    <div className="flex items-center gap-2 mb-1">
                      <span
                        className="px-2 py-0.5 rounded text-[10px] uppercase tracking-wide"
                        style={{
                          backgroundColor: "rgba(255,68,68,0.1)",
                          color: "#FF4444",
                        }}
                      >
                        {m.section}
                      </span>
                      <span className="text-[10px] uppercase tracking-widest text-[#555555]">
                        {m.topic}
                      </span>
                    </div>
                    <p className="text-xs text-[#888888] line-clamp-2">
                      {m.preview || "Question source not found"}
                    </p>
                  </div>
                ))}
                <div className="p-3 text-xs text-[#888888] text-center">
                  View full error log →
                </div>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
