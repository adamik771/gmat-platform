import Link from "next/link"
import { ArrowRight, Search } from "lucide-react"
import { getAllChapters, getAllGuides } from "@/lib/content"
import { createSupabaseServer } from "@/lib/supabase/server"
import { getUserState } from "@/lib/user-state"
import styles from "./LearningLibrary.module.css"

interface StoredChapterProgress {
  sectionsRead?: Record<string, boolean>
  problemSetResults?: Record<string, { correct: number; total: number } | undefined>
  lastSeenAt?: number
}

export const metadata = { title: "Learn" }

export default async function ChaptersPage({ searchParams }: {
  searchParams: Promise<{ q?: string; section?: string; state?: string }>
}) {
  const filters = await searchParams
  const query = typeof filters.q === "string" ? filters.q.trim() : ""
  const chapters = getAllChapters()
  const guides = getAllGuides()
  let chapterProgress: Record<string, StoredChapterProgress> = {}
  let progressUnavailable = false
  try {
    const supabase = await createSupabaseServer()
    const { data: { user } } = await supabase.auth.getUser()
    if (user) {
      const state = await getUserState(supabase, user)
      if (state.chapter_progress && typeof state.chapter_progress === "object") {
        chapterProgress = state.chapter_progress as Record<string, StoredChapterProgress>
      }
    }
  } catch {
    progressUnavailable = true
  }

  // Keep the authored interleaved path and the existing readings-only completion rule.
  const items = chapters.map((chapter, index) => {
    const progress = chapterProgress[chapter.slug]
    const read = progress?.sectionsRead ?? {}
    const readings = chapter.sections.filter((s) => s.type === "reading")
    const completed = readings.filter((s) => read[s.id]).length
    const readingDone = readings.length > 0 && completed === readings.length
    const started = chapter.sections.some((s) => read[s.id])
    const next = chapter.sections.find((s) => !read[s.id])
    const results = chapter.problemSets.map((set) => progress?.problemSetResults?.[set.difficulty])
      .filter((r): r is { correct: number; total: number } => !!r && r.total > 0)
    const total = results.reduce((sum, r) => sum + r.total, 0)
    const accuracy = total ? Math.round(results.reduce((sum, r) => sum + r.correct, 0) / total * 100) : null
    return { chapter, index, readings, completed, readingDone, started, results, accuracy,
      lastSeenAt: progress?.lastSeenAt ?? 0,
      href: `/chapters/${chapter.slug}${started && next ? `#${next.id}` : ""}`,
    }
  })
  const inProgress = items.filter((i) => i.started && !i.readingDone).sort((a, b) => b.lastSeenAt - a.lastSeenAt)
  const resume = inProgress[0] ?? items.find((i) => !i.readingDone)
  const completed = items.filter((i) => i.readingDone).length
  const visible = items.filter(({ chapter, started, readingDone }) =>
    (!query || `${chapter.title} ${chapter.summary ?? ""}`.toLowerCase().includes(query.toLowerCase())) &&
    (!filters.section || chapter.section === filters.section) &&
    (!filters.state || (filters.state === "unread" && !started) || (filters.state === "started" && started && !readingDone) || (filters.state === "read" && readingDone))
  )

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <h1>Learn</h1>
        <p>{chapters.length} interactive chapters form the guided path, with recall checks and graded problem sets. {guides.filter((g) => g.type === "reading").length} supporting readings and {guides.filter((g) => g.type !== "reading").length} references are available alongside it.</p>
      </header>
      {progressUnavailable ? <p role="status" className={styles.muted}>Saved progress is temporarily unavailable. Your chapters remain available.</p> : (
        <section className={styles.continue} aria-label="Continue learning">
          <div>
            <p className={styles.muted}>{resume ? (resume.started ? "Last opened, unfinished chapter" : "Next unread in path order") : "All chapter readings complete"}</p>
            <h2>{resume?.chapter.title ?? "Keep practising and reviewing"}</h2>
            <p className={styles.muted}>{completed} of {chapters.length} chapters fully read. Reading completion is separate from practice accuracy.</p>
          </div>
          <Link href={resume?.href ?? "/review"} className={styles.action}>
            {resume ? (resume.started ? "Continue chapter" : "Start chapter") : "Open review"}<ArrowRight size={16} aria-hidden />
          </Link>
        </section>
      )}
      <form action="/chapters" className={styles.filters}>
        <label className={styles.search}>Search chapters<input name="q" type="search" defaultValue={query} /></label>
        <label>Section<select name="section" defaultValue={filters.section ?? ""}><option value="">All sections</option><option value="Quant">Quantitative</option><option value="Verbal">Verbal</option><option value="DI">Data Insights</option></select></label>
        <label>Reading state<select name="state" defaultValue={filters.state ?? ""}><option value="">All states</option><option value="unread">Not started</option><option value="started">In progress</option><option value="read">Readings complete</option></select></label>
        <button type="submit"><Search size={16} aria-hidden />Search</button>
        {(query || filters.section || filters.state) && <Link href="/chapters" className={styles.rowLink}>Clear</Link>}
      </form>
      <p className={styles.muted}>{visible.length} chapters in suggested path order. Every chapter is available to open.</p>
      <ol className={styles.list}>
        {visible.map(({ chapter, index, readings, completed, readingDone, started, results, accuracy, href }) => (
          <li key={chapter.slug} className={styles.row}>
            <div className={styles.rowTop}>
              <span className={styles.number}>{String(index + 1).padStart(2, "0")}</span>
              <div className={styles.body}>
                <h2><Link href={href}>{chapter.title}</Link></h2>
                <div className={styles.meta}>
                  <span>{chapter.section === "DI" ? "Data Insights" : chapter.section}</span>
                  <span>About {chapter.estimatedPages} pages</span>
                  <span>{progressUnavailable ? `${readings.length} readings` : `${completed} of ${readings.length} readings complete`}</span>
                  <span>{results.length} of {chapter.problemSets.length} graded sets attempted</span>
                  {accuracy !== null && <span>{accuracy}% accuracy on attempted sets</span>}
                </div>
              </div>
              <Link href={href} className={styles.rowLink}>{readingDone ? "Revisit" : started ? "Continue" : "Start"}<ArrowRight size={16} aria-hidden /></Link>
            </div>
            <details>
              <summary>Readings, checks and practice</summary>
              {chapter.summary && <p className={styles.muted}>{chapter.summary}</p>}
              <ul className={styles.outline}>
                {chapter.sections.map((s) => <li key={s.id}><Link href={`/chapters/${chapter.slug}#${s.id}`}>{s.type === "pretest" ? "Pretest" : s.type === "summary" ? "Summary" : "Reading"}: {s.title}</Link></li>)}
                {chapter.problemSets.length > 0 && <li><Link href={`/chapters/${chapter.slug}#chapter-problem-sets`}>Graded problem sets</Link></li>}
                <li><Link href={`/learn?section=${chapter.section}`}>Supporting {chapter.section === "DI" ? "Data Insights" : chapter.section} readings</Link></li>
              </ul>
            </details>
          </li>
        ))}
      </ol>
      {visible.length === 0 && <div className={styles.empty}><h2>No chapters match these filters</h2><Link href="/chapters" className={styles.rowLink}>Show all chapters<ArrowRight size={16} aria-hidden /></Link></div>}
    </div>
  )
}
