"use client"

import { useState } from "react"
import { Wrench, Clock, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

const recentTests = [
  { id: 1, name: "Quant Hard Set", sections: ["Quant"], questions: 20, difficulty: "Hard", date: "2 days ago", score: 74 },
  { id: 2, name: "Full Mixed Practice", sections: ["Quant", "Verbal", "DI"], questions: 45, difficulty: "Mixed", date: "4 days ago", score: 71 },
  { id: 3, name: "CR Sprint", sections: ["Verbal"], questions: 15, difficulty: "Medium", date: "5 days ago", score: 67 },
]

export default function TestBuilderPage() {
  const [sections, setSections] = useState<string[]>(["Quant"])
  const [difficulty, setDifficulty] = useState("Mixed")
  const [numQuestions, setNumQuestions] = useState(20)
  const [timed, setTimed] = useState(true)

  const toggleSection = (s: string) => {
    setSections((prev) =>
      prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]
    )
  }

  const timeLimit = timed ? Math.round(numQuestions * 1.75) : null

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-[#F0F0F0]">Test Builder</h1>
        <p className="text-sm text-[#555555] mt-1">Build a custom practice set</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Builder form */}
        <div className="lg:col-span-2">
          <div
            className="p-6 rounded-xl border border-white/[0.08] bg-[#111111] space-y-6"
          >
            {/* Sections */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-widest text-[#888888] mb-3">
                Sections
              </label>
              <div className="flex gap-2 flex-wrap">
                {["Quant", "Verbal", "DI"].map((s) => (
                  <button
                    key={s}
                    onClick={() => toggleSection(s)}
                    className={cn(
                      "px-4 py-2 rounded-lg text-sm font-medium border transition-colors",
                      sections.includes(s)
                        ? "border-[#C9A84C]/50 text-[#C9A84C]"
                        : "border-white/[0.08] text-[#888888] hover:border-white/[0.16]"
                    )}
                    style={
                      sections.includes(s)
                        ? { backgroundColor: "rgba(201,168,76,0.08)" }
                        : {}
                    }
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* Number of questions */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-widest text-[#888888] mb-3">
                Number of Questions
              </label>
              <div className="flex gap-2 flex-wrap">
                {[10, 15, 20, 30, 45].map((n) => (
                  <button
                    key={n}
                    onClick={() => setNumQuestions(n)}
                    className={cn(
                      "px-4 py-2 rounded-lg text-sm font-medium border transition-colors",
                      numQuestions === n
                        ? "border-[#C9A84C]/50 text-[#C9A84C]"
                        : "border-white/[0.08] text-[#888888] hover:border-white/[0.16]"
                    )}
                    style={
                      numQuestions === n
                        ? { backgroundColor: "rgba(201,168,76,0.08)" }
                        : {}
                    }
                  >
                    {n}
                  </button>
                ))}
              </div>
            </div>

            {/* Difficulty */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-widest text-[#888888] mb-3">
                Difficulty
              </label>
              <div className="flex gap-2 flex-wrap">
                {["Easy", "Medium", "Hard", "Mixed"].map((d) => (
                  <button
                    key={d}
                    onClick={() => setDifficulty(d)}
                    className={cn(
                      "px-4 py-2 rounded-lg text-sm font-medium border transition-colors",
                      difficulty === d
                        ? "border-[#C9A84C]/50 text-[#C9A84C]"
                        : "border-white/[0.08] text-[#888888] hover:border-white/[0.16]"
                    )}
                    style={
                      difficulty === d
                        ? { backgroundColor: "rgba(201,168,76,0.08)" }
                        : {}
                    }
                  >
                    {d}
                  </button>
                ))}
              </div>
            </div>

            {/* Timed */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-widest text-[#888888] mb-3">
                Time Limit
              </label>
              <div className="flex gap-2">
                <button
                  onClick={() => setTimed(true)}
                  className={cn(
                    "px-4 py-2 rounded-lg text-sm font-medium border transition-colors",
                    timed
                      ? "border-[#C9A84C]/50 text-[#C9A84C]"
                      : "border-white/[0.08] text-[#888888]"
                  )}
                  style={timed ? { backgroundColor: "rgba(201,168,76,0.08)" } : {}}
                >
                  Timed ({timeLimit} min)
                </button>
                <button
                  onClick={() => setTimed(false)}
                  className={cn(
                    "px-4 py-2 rounded-lg text-sm font-medium border transition-colors",
                    !timed
                      ? "border-[#C9A84C]/50 text-[#C9A84C]"
                      : "border-white/[0.08] text-[#888888]"
                  )}
                  style={!timed ? { backgroundColor: "rgba(201,168,76,0.08)" } : {}}
                >
                  Untimed
                </button>
              </div>
            </div>

            {/* Build button */}
            <button
              className="w-full py-3.5 rounded-xl text-sm font-semibold transition-all hover:opacity-90 flex items-center justify-center gap-2"
              style={{ backgroundColor: "#C9A84C", color: "#0A0A0A" }}
            >
              <Wrench className="w-4 h-4" />
              Build Practice Set
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Summary */}
        <div className="space-y-4">
          <div className="p-5 rounded-xl border border-white/[0.08] bg-[#111111]">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#888888] mb-4">
              Set Summary
            </p>
            <div className="space-y-3">
              {[
                { label: "Sections", value: sections.join(", ") || "None selected" },
                { label: "Questions", value: numQuestions.toString() },
                { label: "Difficulty", value: difficulty },
                { label: "Time limit", value: timeLimit ? `${timeLimit} min` : "Untimed" },
              ].map((row) => (
                <div key={row.label} className="flex justify-between">
                  <span className="text-xs text-[#555555]">{row.label}</span>
                  <span className="text-xs font-medium text-[#F0F0F0]">{row.value}</span>
                </div>
              ))}
            </div>
          </div>

          {timed && (
            <div
              className="flex items-start gap-2.5 p-4 rounded-xl"
              style={{
                backgroundColor: "rgba(201,168,76,0.05)",
                border: "1px solid rgba(201,168,76,0.15)",
              }}
            >
              <Clock className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: "#C9A84C" }} />
              <p className="text-xs text-[#888888]">
                Timed mode mirrors real exam conditions. Approximately 1:45 per question.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Recent tests */}
      <div>
        <h2 className="text-sm font-semibold uppercase tracking-widest text-[#888888] mb-4">
          Recent Custom Tests
        </h2>
        <div className="space-y-3">
          {recentTests.map((test) => (
            <div
              key={test.id}
              className="flex items-center justify-between p-4 rounded-xl border border-white/[0.08] bg-[#111111] hover:border-white/[0.14] transition-colors"
            >
              <div>
                <p className="text-sm font-medium text-[#F0F0F0]">{test.name}</p>
                <p className="text-xs text-[#555555] mt-0.5">
                  {test.sections.join(" + ")} · {test.questions}Q · {test.difficulty} · {test.date}
                </p>
              </div>
              <div className="flex items-center gap-4">
                <span
                  className="text-sm font-semibold"
                  style={{ color: test.score >= 70 ? "#3ECF8E" : "#FF4444" }}
                >
                  {test.score}%
                </span>
                <button className="text-xs px-3 py-1.5 rounded-lg border border-white/[0.08] text-[#888888] hover:text-[#F0F0F0] transition-colors">
                  Retry
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
