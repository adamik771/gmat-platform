import GuideLibrary, { type LibraryFilters } from "./GuideLibrary"

export const metadata = { title: "Supporting Readings" }

export default async function LearnPage({ searchParams }: { searchParams: Promise<LibraryFilters> }) {
  return <GuideLibrary kind="reading" filters={await searchParams} />
}
