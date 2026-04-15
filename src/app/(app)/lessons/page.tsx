import { getAllLessons } from "@/lib/content"
import LessonsClient, { type LessonCardData } from "./LessonsClient"

export default function LessonsPage() {
  const lessons = getAllLessons()

  // Until real progress tracking lands, synthesize status: first 2 "done",
  // next one "current", the rest "locked". Keeping this server-side so the
  // LessonsClient stays a pure presentational component.
  const data: LessonCardData[] = lessons.map((lesson, index) => {
    const status: LessonCardData["status"] =
      index < 2 ? "done" : index === 2 ? "current" : "locked"
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
