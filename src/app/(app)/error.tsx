"use client"

/**
 * Error boundary for the authenticated app. Renders INSIDE the (app)
 * layout, so the sidebar and navigation survive a page failure — the
 * root fallback used to replace the whole shell, stranding the student.
 * Server pages that detect a failed read can simply `throw` to land here
 * instead of rendering empty-but-valid-looking data.
 */
export default function AppError({
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="max-w-2xl mx-auto mt-16 p-8 rounded-2xl border border-white/[0.06] bg-[#0F0F0F] text-center">
      <p
        className="text-[10px] font-semibold uppercase tracking-[0.22em] mb-4"
        style={{ color: "#C9A84C" }}
      >
        Something went wrong
      </p>
      <h1 className="font-display text-2xl font-semibold text-[#F0F0F0] tracking-[-0.02em] leading-[1.15] mb-3">
        Couldn&apos;t load this page.
      </h1>
      <p className="text-[14px] text-[#C0C0C0] leading-[1.75] mb-6">
        Your data is safe — this is a loading problem, not a data problem.
        Retry, or come back in a moment.
      </p>
      <button
        type="button"
        onClick={reset}
        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 hover:opacity-90"
        style={{ backgroundColor: "#C9A84C", color: "#0A0A0A" }}
      >
        Try again
      </button>
    </div>
  )
}
