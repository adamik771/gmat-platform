import Link from "next/link"
import { ArrowRight, BookOpen, CheckCircle2, Clock } from "lucide-react"
import { getAllChapters } from "@/lib/content"
import { createSupabaseServer } from "@/lib/supabase/server"

/** Shape of user_metadata.chapter_progress[slug] written by ChapterReader. */
interface StoredChapterProgress {
  sectionsRead?: Record<string, boolean>
  problemSetResults?: Record<string, { correct: number; total: number } | undefined>
}

export default async function ChaptersPage() {
  const chapters = getAllChapters()

  // Pull chapter progress from user_metadata if the user is signed in so
  // each card can show its completion status. Unauth gets the neutral view.
  let chapterProgress: Record<string, StoredChapterProgress> = {}
  try {
    const supabase = await createSupabaseServer()
    const {
      data: { user },
    } = await supabase.auth.getUser()
    if (user) {
      const raw = user.user_metadata?.chapter_progress
      if (raw && typeof raw === "object") {
        chapterProgress = raw as Record<string, StoredChapterProgress>
      }
    }
  } catch {
    // Supabase unavailable — render with empty progress state.
  }

  // Sort: Quant → Verbal → DI, then alphabetical
  const sectionOrder = { Quant: 0, Verbal: 1, DI: 2 } as const
  const sorted = [...chapters].sort((a, b) => {
    if (a.section !== b.section) {
      return sectionOrder[a.section] - sectionOrder[b.section]
    }
    return a.title.localeCompare(b.title)
  })

  // Totals for the header tally — nice to see overall progress at a glance.
  const totalChapters = sorted.length
  const chaptersStarted = sorted.filter((c) => {
    const p = chapterProgress[c.slug]
    return p && Object.values(p.sectionsRead ?? {}).some(Boolean)
  }).length
  const chaptersComplete = sorted.filter((c) => {
    const p = chapterProgress[c.slug]
    if (!p || !p.sectionsRead) return false
    return c.sections.every((s) => p.sectionsRead![s.id])
  }).length

  return (
    <div className="max-w-5xl mx-auto space-y-8">
      <div className="flex items-start justify-between gap-4 flex-wrap">
        <div className="flex-1 min-w-0">
          <h1 className="text-2xl font-bold text-[#F0F0F0]">Chapters</h1>
          <p className="text-sm text-[#555555] mt-1">
            Structured topic-by-topic learning. Each chapter walks you through
            the concept, embeds micro-quizzes to lock it in, then drops you
            into graded problem sets with accuracy targets based on your goal.
          </p>
        </div>
        {totalChapters > 0 && (
          <div className="text-right flex-shrink-0">
            <p className="text-xs uppercase tracking-widest text-[#555555]">
              Progress
            </p>
            <p className="text-2xl font-bold text-[#F0F0F0]">
              {chaptersComplete}
              <span className="text-sm font-normal text-[#555555]">
                {" "}
                / {totalChapters}
              </span>
            </p>
            <p className="text-xs text-[#888888]">
              {chaptersStarted - chaptersComplete > 0
                ? `${chaptersStarted - chaptersComplete} in progress`
                : "complete"}
            </p>
          </div>
        )}
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

            const progress = chapterProgress[chapter.slug]
            const readIds = progress?.sectionsRead ?? {}
            const totalSections = chapter.sections.length
            const readCount = chapter.sections.filter((s) => readIds[s.id]).length
            const readPct = totalSections === 0 ? 0 : (readCount / totalSections) * 100
            const isComplete = readCount === totalSections && totalSections > 0
            const isStarted = readCount > 0

            return (
              <Link
                key={chapter.slug}
                href={`/chapters/${chapter.slug}`}
                className="flex items-start gap-4 p-5 rounded-xl border bg-[#111111] hover:border-white/[0.14] transition-colors"
                style={{
                  borderColor: isComplete
                    ? "rgba(62,207,142,0.18)"
                    : "rgba(255,255,255,0.08)",
                }}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{
                    backgroundColor: isComplete
                      ? "rgba(62,207,142,0.12)"
                      : "rgba(201,168,76,0.1)",
                  }}
                >
                  {isComplete ? (
                    <CheckCircle2
                      className="w-5 h-5"
                      style={{ color: "#3ECF8E" }}
                    />
                  ) : (
                    <BookOpen className="w-5 h-5" style={{ color: "#C9A84C" }} />
                  )}
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
                    {isStarted && !isComplete && (
                      <span
                        className="px-2 py-0.5 rounded text-[10px] uppercase tracking-wide font-semibold"
                        style={{
                          backgroundColor: "rgba(201,168,76,0.12)",
                          color: "#C9A84C",
                        }}
                      >
                        In progress
                      </span>
                    )}
                    {isComplete && (
                      <span
                        className="px-2 py-0.5 rounded text-[10px] uppercase tracking-wide font-semibold"
                        style={{
                          backgroundColor: "rgba(62,207,142,0.12)",
                          color: "#3ECF8E",
                        }}
                      >
                        Complete
                      </span>
                    )}
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
                    {isStarted && (
                      <span className="text-xs text-[#555555]">
                        {readCount} of {totalSections} sections
                      </span>
                    )}
                  </div>
                  {isStarted && !isComplete && (
                    <div className="mt-2 h-1 rounded-full bg-white/[0.06] overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all"
                        style={{
                          width: `${readPct}%`,
                          backgroundColor: "#C9A84C",
                        }}
                      />
                    </div>
                  )}
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
