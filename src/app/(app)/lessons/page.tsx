import { getAllLessons } from "@/lib/content"
import { createSupabaseServer } from "@/lib/supabase/server"
import LessonsClient, { type LessonCardData } from "./LessonsClient"

export default async function LessonsPage() {
  const lessons = getAllLessons()

  // Fetch the current user's completed lesson slugs. Wrapped in try/catch so
  // the page still renders (with no lessons marked done) if Supabase is
  // unreachable — mirrors the dashboard's resilient pattern.
  let completedSlugs = new Set<string>()
  try {
    const supabase = await createSupabaseServer()
    const {
      data: { user },
    } = await supabase.auth.getUser()

    if (user) {
      const { data } = await supabase
        .from("lesson_completions")
        .select("lesson_slug")
        .eq("user_id", user.id)

      if (data) {
        completedSlugs = new Set(data.map((r) => r.lesson_slug as string))
      }
    }
  } catch {
    // Swallow — show everything as upcoming.
  }

  // Status derivation (no gating — every lesson is clickable):
  //   done      → in completedSlugs
  //   current   → lowest-module lesson NOT in completedSlugs
  //   upcoming  → everything else
  const firstIncompleteIdx = lessons.findIndex((l) => !completedSlugs.has(l.slug))

  const data: LessonCardData[] = lessons.map((lesson, index) => {
    let status: LessonCardData["status"]
    if (completedSlugs.has(lesson.slug)) {
      status = "done"
    } else if (index === firstIncompleteIdx) {
      status = "current"
    } else {
      status = "upcoming"
    }
    return {
      slug: lesson.slug,
      module: lesson.module,
      title: lesson.title,
      description: lesson.description,
      section: lesson.section,
      duration: lesson.duration,
      status,
    }
  })

  return <LessonsClient lessons={data} />
}
