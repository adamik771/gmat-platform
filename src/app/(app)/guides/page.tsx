import GuideLibrary, { type LibraryFilters } from "../learn/GuideLibrary"

export const metadata = { title: "References" }

export default async function GuidesPage({ searchParams }: { searchParams: Promise<LibraryFilters> }) {
  return <GuideLibrary kind="reference" filters={await searchParams} />
}
