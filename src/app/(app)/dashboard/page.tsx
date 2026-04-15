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
import ScoreChart from "@/components/dashboard/ScoreChart"
import QuickActions from "@/components/dashboard/QuickActions"
import EmptyState from "@/components/shared/EmptyState"
import { getAllLessons } from "@/lib/content"

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

      {/* Weekly Stats — all empty until progress tracking lands */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <MetricCard label="Study hours this week" value={null} icon={Clock} />
        <MetricCard label="Questions answered" value={null} icon={CheckCircle} />
        <MetricCard label="Overall accuracy" value={null} icon={TrendingUp} />
        <MetricCard label="Study streak" value={null} icon={Flame} />
      </div>

      {/* Section Progress + Chart */}
      <div className="grid lg:grid-cols-5 gap-6">
        <div className="lg:col-span-3 space-y-4">
          <h2 className="text-sm font-semibold text-[#888888] uppercase tracking-widest">
            Section Progress
          </h2>
          <div className="grid sm:grid-cols-3 gap-4">
            <SectionProgress section="Quant" empty />
            <SectionProgress section="Verbal" empty />
            <SectionProgress section="DI" empty />
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
          <div className="rounded-xl border border-white/[0.08] bg-[#111111] p-2">
            <ActivityFeed items={[]} />
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
