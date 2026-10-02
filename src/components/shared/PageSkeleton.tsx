// Instant Suspense fallback for the authenticated app shell. The (app) layout
// keeps the sidebar mounted across navigation, so this only fills the content
// region. The skeleton provides immediate structure; the branded Z is delayed
// in CSS so fast navigations never flash a loader.
export default function PageSkeleton() {
  return (
    <div className="max-w-6xl mx-auto">
      <span className="sr-only" role="status">
        Loading
      </span>
      <div className="app-route-progress" aria-hidden />
      <div className="app-route-brand" aria-hidden>
        <span>Z</span>
      </div>
      <div className="route-skeleton space-y-12" aria-hidden>
        {/* Hero / header block */}
        <div className="rounded-2xl border border-white/[0.06] bg-[#0D0D0D] px-6 py-10 sm:px-10 sm:py-14 space-y-4">
          <div className="h-3 w-24 rounded bg-white/[0.06]" />
          <div className="h-9 w-2/3 max-w-md rounded bg-white/[0.08]" />
          <div className="h-4 w-full max-w-xl rounded bg-white/[0.04]" />
          <div className="h-4 w-3/4 max-w-lg rounded bg-white/[0.04]" />
        </div>
        {/* Stat-card grid (matches the dashboard/analytics/study-plan pattern) */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className="rounded-xl border border-white/[0.06] bg-[#111111] p-5 space-y-3"
            >
              <div className="h-3 w-20 rounded bg-white/[0.06]" />
              <div className="h-7 w-16 rounded bg-white/[0.08]" />
            </div>
          ))}
        </div>
        {/* List rows */}
        <div className="space-y-3">
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              className="h-16 rounded-xl border border-white/[0.06] bg-[#0D0D0D]"
            />
          ))}
        </div>
      </div>
    </div>
  )
}
