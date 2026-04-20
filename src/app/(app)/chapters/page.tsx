import Link from "next/link"
import { ArrowRight, BookOpen, Clock } from "lucide-react"
import { getAllChapters } from "@/lib/content"

export default function ChaptersPage() {
  const chapters = getAllChapters()

  // Sort: Quant → Verbal → DI, then alphabetical
  const sectionOrder = { Quant: 0, Verbal: 1, DI: 2 } as const
  const sorted = [...chapters].sort((a, b) => {
    if (a.section !== b.section) {
      return sectionOrder[a.section] - sectionOrder[b.section]
    }
    return a.title.localeCompare(b.title)
  })

  return (
    <div className="max-w-5xl mx-auto space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-[#F0F0F0]">Chapters</h1>
        <p className="text-sm text-[#555555] mt-1">
          Structured topic-by-topic learning. Each chapter walks you through
          the concept, embeds micro-quizzes to lock it in, then drops you
          into graded problem sets with accuracy targets based on your goal.
        </p>
      </div>

      {sorted.length === 0 ? (
        <div className="p-8 rounded-xl border border-white/[0.08] bg-[#111111] text-center">
          <p className="text-sm text-[#888888]">No chapters published yet.</p>
        </div>
      ) : (
        <div className="grid gap-3">
          {sorted.map((chapter) => {
            const sectionCount = chapter.sections.filter(
              (s) => s.type === "reading"
            ).length
            const problemSetCount = chapter.problemSets.length
            return (
              <Link
                key={chapter.slug}
                href={`/chapters/${chapter.slug}`}
                className="flex items-start gap-4 p-5 rounded-xl border border-white/[0.08] bg-[#111111] hover:border-white/[0.14] transition-colors"
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ backgroundColor: "rgba(201,168,76,0.1)" }}
                >
                  <BookOpen className="w-5 h-5" style={{ color: "#C9A84C" }} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span
                      className="px-2 py-0.5 rounded text-[10px] uppercase tracking-wide"
                      style={{
                        backgroundColor: "rgba(201,168,76,0.08)",
                        color: "#C9A84C",
                      }}
                    >
                      {chapter.section}
                    </span>
                    <span className="text-xs text-[#555555]">
                      {sectionCount} reading section{sectionCount === 1 ? "" : "s"}
                      {problemSetCount > 0 &&
                        ` · ${problemSetCount} graded set${problemSetCount === 1 ? "" : "s"}`}
                    </span>
                  </div>
                  <p className="text-base font-semibold text-[#F0F0F0]">
                    {chapter.title}
                  </p>
                  {chapter.summary && (
                    <p className="text-xs text-[#888888] mt-1 line-clamp-2">
                      {chapter.summary}
                    </p>
                  )}
                  <div className="flex items-center gap-3 mt-2">
                    <span className="flex items-center gap-1 text-xs text-[#555555]">
                      <Clock className="w-3 h-3" />
                      {chapter.estimatedMinutes} min
                    </span>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-[#555555] mt-3 flex-shrink-0" />
              </Link>
            )
          })}
        </div>
      )}
    </div>
  )
}
