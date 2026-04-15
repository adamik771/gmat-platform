import {
  Clock,
  Target,
  CheckCircle,
  Flame,
  BookOpen,
  AlertCircle,
  TrendingUp,
} from "lucide-react"
import MetricCard from "@/components/dashboard/MetricCard"
import SectionProgress from "@/components/dashboard/SectionProgress"
import ActivityFeed from "@/components/dashboard/ActivityFeed"
import ScoreChart from "@/components/dashboard/ScoreChart"
import QuickActions from "@/components/dashboard/QuickActions"
import { ActivityItem } from "@/types"
import { getAllLessons } from "@/lib/content"

const recentActivity: ActivityItem[] = [
  {
    id: "1",
    type: "practice_set",
    title: "Quant Practice Set #14",
    description: "18/24 correct · 75% accuracy",
    timestamp: new Date(Date.now() - 1.5 * 3600000).toISOString(),
    score: 75,
  },
  {
    id: "2",
    type: "lesson_completed",
    title: "Data Sufficiency: Uniqueness Rule",
    description: "Module 03 · Lesson 9",
    timestamp: new Date(Date.now() - 3 * 3600000).toISOString(),
  },
  {
    id: "3",
    type: "error_reviewed",
    title: "Reviewed 5 CR mistakes",
    description: "Pattern: Misread argument structure",
    timestamp: new Date(Date.now() - 5 * 3600000).toISOString(),
  },
  {
    id: "4",
    type: "mock_exam",
    title: "Official Practice Test #3",
    description: "Q84 · V80 · DI78",
    timestamp: new Date(Date.now() - 2 * 86400000).toISOString(),
    score: 82,
  },
  {
    id: "5",
    type: "lesson_completed",
    title: "RC: Passage Structure Framework",
    description: "Module 04 · Lesson 5",
    timestamp: new Date(Date.now() - 2 * 86400000 - 3600000).toISOString(),
  },
]

const recentMistakes = [
  {
    id: "m1",
    topic: "Data Sufficiency",
    error: "Uniqueness assumption",
    section: "Quant",
    date: "Today",
  },
  {
    id: "m2",
    topic: "Critical Reasoning",
    error: "Misidentified conclusion",
    section: "Verbal",
    date: "Yesterday",
  },
  {
    id: "m3",
    topic: "RC — Inference",
    error: "Out of scope answer chosen",
    section: "Verbal",
    date: "2 days ago",
  },
]

export default function DashboardPage() {
  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  })

  // Mirrors the lessons page synthesis: first 2 "done", 3rd "current".
  // Fall back to the first lesson if fewer than 3 are loaded.
  const lessons = getAllLessons()
  const recommendedLesson = lessons[2] ?? lessons[0]

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      {/* Greeting */}
      <div>
        <h1 className="text-2xl font-bold text-[#F0F0F0]">Good morning, Adam</h1>
        <p className="text-sm text-[#555555] mt-1">{today}</p>
      </div>

      {/* Score Goal Card */}
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
                <span className="text-xl font-bold text-[#F0F0F0]">
                  680
                  <span className="text-sm font-normal text-[#555555] ml-1">
                    estimated
                  </span>
                </span>
                <span className="text-sm text-[#555555]">→</span>
                <span className="text-xl font-bold" style={{ color: "#C9A84C" }}>
                  735
                  <span className="text-sm font-normal text-[#555555] ml-1">
                    target
                  </span>
                </span>
              </div>
            </div>
          </div>
          <div
            className="px-3 py-1.5 rounded-lg text-sm font-medium"
            style={{ backgroundColor: "rgba(62,207,142,0.1)", color: "#3ECF8E" }}
          >
            +55 to go
          </div>
        </div>

        {/* Progress bar */}
        <div className="h-2 rounded-full bg-white/[0.06] overflow-hidden">
          <div
            className="h-full rounded-full transition-all duration-700"
            style={{
              width: "65%",
              background: "linear-gradient(90deg, #C9A84C, #E8C97A)",
            }}
          />
        </div>
        <div className="flex justify-between mt-1.5">
          <span className="text-xs text-[#555555]">565 start</span>
          <span className="text-xs text-[#555555]">735 goal</span>
        </div>
      </div>

      {/* Weekly Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <MetricCard
          label="Study hours this week"
          value="18.5"
          unit="hrs"
          icon={Clock}
          trend="up"
          trendValue="+2.5 vs last week"
        />
        <MetricCard
          label="Questions answered"
          value={142}
          icon={CheckCircle}
          trend="up"
          trendValue="+18 vs last week"
        />
        <MetricCard
          label="Overall accuracy"
          value="73"
          unit="%"
          icon={TrendingUp}
          trend="up"
          trendValue="+3% vs last week"
        />
        <MetricCard
          label="Study streak"
          value={14}
          unit="days"
          icon={Flame}
          trend="up"
          trendValue="Keep it going!"
        />
      </div>

      {/* Section Progress + Chart */}
      <div className="grid lg:grid-cols-5 gap-6">
        <div className="lg:col-span-3 space-y-4">
          <h2 className="text-sm font-semibold text-[#888888] uppercase tracking-widest">
            Section Progress
          </h2>
          <div className="grid sm:grid-cols-3 gap-4">
            <SectionProgress
              section="Quant"
              score={86}
              maxScore={90}
              accuracy={76}
              trend="up"
              trendLabel="+4 pts"
            />
            <SectionProgress
              section="Verbal"
              score={82}
              maxScore={90}
              accuracy={70}
              trend="up"
              trendLabel="+2 pts"
            />
            <SectionProgress
              section="DI"
              score={80}
              maxScore={90}
              accuracy={72}
              trend="stable"
              trendLabel="Stable"
            />
          </div>
        </div>

        <div className="lg:col-span-2">
          <h2 className="text-sm font-semibold text-[#888888] uppercase tracking-widest mb-4">
            Score Trend
          </h2>
          <div className="p-5 rounded-xl border border-white/[0.08] bg-[#111111]">
            <ScoreChart height={150} />
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
          <div
            className="rounded-xl border border-white/[0.08] bg-[#111111] p-2"
          >
            <ActivityFeed items={recentActivity} />
          </div>
        </div>

        {/* Recent Mistakes + Next Lesson */}
        <div className="space-y-6">
          {/* Next Lesson */}
          <div>
            <h2 className="text-sm font-semibold text-[#888888] uppercase tracking-widest mb-4">
              Recommended Next
            </h2>
            <div
              className="p-5 rounded-xl border flex items-start gap-4"
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
              <button
                className="flex-shrink-0 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all hover:opacity-90"
                style={{ backgroundColor: "#C9A84C", color: "#0A0A0A" }}
              >
                Continue
              </button>
            </div>
          </div>

          {/* Recent Mistakes */}
          <div>
            <h2 className="text-sm font-semibold text-[#888888] uppercase tracking-widest mb-4">
              Recent Mistakes
            </h2>
            <div className="rounded-xl border border-white/[0.08] bg-[#111111] overflow-hidden">
              {recentMistakes.map((m, i) => (
                <div
                  key={m.id}
                  className={`flex items-center justify-between p-4 ${
                    i < recentMistakes.length - 1 ? "border-b border-white/[0.05]" : ""
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="w-7 h-7 rounded-lg flex items-center justify-center"
                      style={{ backgroundColor: "rgba(255,68,68,0.1)" }}
                    >
                      <AlertCircle className="w-3.5 h-3.5" style={{ color: "#FF4444" }} />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-[#F0F0F0]">{m.topic}</p>
                      <p className="text-xs text-[#555555]">{m.error}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-[#555555]">{m.date}</span>
                    <button
                      className="text-xs px-2 py-1 rounded border border-white/[0.08] text-[#888888] hover:text-[#F0F0F0] hover:border-white/[0.16] transition-colors"
                    >
                      Review
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
