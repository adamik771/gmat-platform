import { getAllChapters, getAllGuides, getAllQuestions } from "@/lib/content"

/** Public counts describe distinct content types, not interchangeable totals. */
export function getPublicInventory() {
  const guides = getAllGuides()
  return {
    chapters: getAllChapters().length,
    readings: guides.filter((guide) => guide.type === "reading").length,
    references: guides.filter((guide) => guide.type !== "reading").length,
    questions: getAllQuestions().length,
  }
}
