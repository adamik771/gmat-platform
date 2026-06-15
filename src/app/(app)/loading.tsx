import PageSkeleton from "@/components/shared/PageSkeleton"

// Shown instantly by the App Router on navigation to ANY route under the (app)
// group while the server component resolves (every (app) page is dynamic — it
// awaits auth + Supabase). One file covers the whole authenticated app, so a
// click swaps the old page for a skeleton immediately instead of freezing.
export default function Loading() {
  return <PageSkeleton />
}
