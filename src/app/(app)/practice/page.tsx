import { getQuestionSets } from "@/lib/content"
import PracticeClient, { type PracticeSetData } from "./PracticeClient"

export default function PracticePage() {
  const sets: PracticeSetData[] = getQuestionSets().map((set) => ({
    slug: set.slug,
    topic: set.topic,
    section: set.section,
    questions: set.count,
  }))

  return <PracticeClient sets={sets} />
}
