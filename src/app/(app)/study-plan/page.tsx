import { CheckCircle, Clock, BookOpen, Target } from "lucide-react"

const weekDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]

const studyBlocks = [
  { day: 0, title: "Quant · DS Strategy", duration: "90 min", done: true },
  { day: 1, title: "Verbal · CR Argumentation", duration: "90 min", done: true },
  { day: 2, title: "DI · Table Analysis", duration: "60 min", done: true },
  { day: 3, title: "Quant · Practice Set", duration: "90 min", done: false, today: true },
  { day: 4, title: "Verbal · RC Passage Work", duration: "90 min", done: false },
  { day: 5, title: "Error Log Review", duration: "60 min", done: false },
  { day: 6, title: "Rest / Optional Review", duration: "—", done: false, optional: true },
]

const upcomingTopics = [
  { week: "This week", topics: ["DS: Uniqueness conditions", "CR: Assumption questions", "DI: Multi-Source Reasoning"] },
  { week: "Next week", topics: ["Quant: Combinatorics", "Verbal: SC parallelism", "Mock exam #4"] },
  { week: "Week after", topics: ["Geometry deep dive", "RC: Dense scientific passages", "Debrief + error review"] },
]

export default function StudyPlanPage() {
  return (
    <div className="max-w-5xl mx-auto space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-[#F0F0F0]">Study Plan</h1>
        <p className="text-sm text-[#555555] mt-1">Week 8 of 16 · On track</p>
      </div>

      {/* Weekly Calendar */}
      <div>
        <h2 className="text-sm font-semibold uppercase tracking-widest text-[#888888] mb-4">
          This Week
        </h2>
        <div className="grid grid-cols-7 gap-2">
          {weekDays.map((day, i) => {
            const block = studyBlocks.find((b) => b.day === i)
            return (
              <div key={day} className="flex flex-col gap-2">
                <p
                  className={`text-xs text-center font-medium ${
                    block?.today ? "text-[#C9A84C]" : "text-[#555555]"
                  }`}
                >
                  {day}
                </p>
                <div
                  className="rounded-xl p-3 border min-h-[100px] flex flex-col gap-2"
                  style={{
                    borderColor: block?.today
                      ? "rgba(201,168,76,0.3)"
                      : block?.done
                      ? "rgba(62,207,142,0.15)"
                      : "rgba(255,255,255,0.06)",
                    backgroundColor: block?.today
                      ? "rgba(201,168,76,0.05)"
                      : block?.done
                      ? "rgba(62,207,142,0.03)"
                      : "#0D0D0D",
                  }}
                >
                  {block ? (
                    <>
                      <div className="flex justify-between items-start">
                        {block.done ? (
                          <CheckCircle className="w-3.5 h-3.5" style={{ color: "#3ECF8E" }} />
                        ) : block.today ? (
                          <div
                            className="w-2 h-2 rounded-full mt-0.5"
                            style={{ backgroundColor: "#C9A84C" }}
                          />
                        ) : (
                          <div className="w-2 h-2 rounded-full mt-0.5 bg-[#333333]" />
                        )}
                      </div>
                      <p className="text-xs text-[#C0C0C0] leading-snug">{block.title}</p>
                      <p className="text-xs text-[#555555] mt-auto">{block.duration}</p>
                    </>
                  ) : (
                    <p className="text-xs text-[#333333]">No session</p>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Progress by week */}
      <div className="grid sm:grid-cols-3 gap-4">
        {[
          { label: "Weeks completed", value: "7 / 16", icon: CheckCircle, color: "#3ECF8E" },
          { label: "Study hours logged", value: "94 hrs", icon: Clock, color: "#C9A84C" },
          { label: "Lessons completed", value: "38 / 74", icon: BookOpen, color: "#C9A84C" },
        ].map((stat) => {
          const Icon = stat.icon
          return (
            <div
              key={stat.label}
              className="p-5 rounded-xl border border-white/[0.08] bg-[#111111] flex items-center gap-4"
            >
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: `${stat.color}15` }}
              >
                <Icon className="w-4 h-4" style={{ color: stat.color }} />
              </div>
              <div>
                <p className="text-lg font-bold text-[#F0F0F0]">{stat.value}</p>
                <p className="text-xs text-[#555555]">{stat.label}</p>
              </div>
            </div>
          )
        })}
      </div>

      {/* Upcoming topics */}
      <div>
        <h2 className="text-sm font-semibold uppercase tracking-widest text-[#888888] mb-4">
          Upcoming Topics
        </h2>
        <div className="space-y-4">
          {upcomingTopics.map((week) => (
            <div
              key={week.week}
              className="p-5 rounded-xl border border-white/[0.08] bg-[#111111]"
            >
              <p
                className="text-xs font-semibold uppercase tracking-widest mb-3"
                style={{ color: "#C9A84C" }}
              >
                {week.week}
              </p>
              <div className="flex flex-wrap gap-2">
                {week.topics.map((topic) => (
                  <span
                    key={topic}
                    className="px-3 py-1.5 rounded-lg text-xs border border-white/[0.06] text-[#888888]"
                    style={{ backgroundColor: "#0F0F0F" }}
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Exam readiness */}
      <div
        className="p-5 rounded-xl border"
        style={{
          borderColor: "rgba(201,168,76,0.2)",
          backgroundColor: "rgba(201,168,76,0.04)",
        }}
      >
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-semibold text-[#F0F0F0]">Exam readiness</p>
            <p className="text-xs text-[#888888] mt-0.5">Based on current trajectory</p>
          </div>
          <div className="text-right">
            <p className="text-2xl font-bold" style={{ color: "#C9A84C" }}>72%</p>
            <p className="text-xs text-[#555555]">ready</p>
          </div>
        </div>
        <div className="mt-4 h-2 rounded-full bg-white/[0.06] overflow-hidden">
          <div
            className="h-full rounded-full"
            style={{ width: "72%", backgroundColor: "#C9A84C" }}
          />
        </div>
        <p className="text-xs text-[#555555] mt-2">
          Projected exam date: 8 weeks from now · Target: 735
        </p>
      </div>
    </div>
  )
}
