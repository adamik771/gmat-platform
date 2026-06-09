import { Check } from "lucide-react"

/**
 * ResolutionMomentum — the positive counterweight to the error log.
 *
 * The rest of this page is, by design, a deficit ledger: "Recent mistakes",
 * "What to fix next", recurring weaknesses, trap patterns. That framing is
 * analytically correct but emotionally one-sided — a student returning to a
 * long, growing list of misses sees only the debt, never the repayment.
 *
 * This band sits directly under the hero and reframes the same data as
 * progress. "Reviewed" is the moment a wrong answer is actually worked
 * through — read the explanation, understood the method, marked it closed.
 * Surfacing that closure rate first makes the effort already invested
 * visible and rewards it, which is what keeps students opening the log
 * instead of avoiding it.
 *
 * Pure presentational + server-rendered. Consumes only counts the page
 * already computes — no extra queries.
 */
export default function ResolutionMomentum({
  total,
  reviewed,
  resolvedThisWeek,
}: {
  total: number
  reviewed: number
  resolvedThisWeek: number
}) {
  if (total === 0) return null

  const closurePct = Math.round((reviewed / total) * 100)
  const remaining = Math.max(0, total - reviewed)
  const allClosed = remaining === 0

  // Calm, serious framing — the wrong answer becomes a method you own.
  const supportLine = allClosed
    ? "Every logged miss has been worked through. Hold the habit as new ones arrive — a reviewed mistake is a method you now own."
    : `Reviewing a miss is where the learning happens — the wrong answer becomes a method you own. ${remaining} still waiting to be worked through.`

  return (
    <section
      className="relative overflow-hidden rounded-2xl border border-white/[0.06] px-6 py-7 sm:px-8 sm:py-8"
      style={{
        backgroundColor: "#0D0D0D",
        boxShadow: "inset 0 1px 0 rgba(255,255,255,0.04)",
      }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 80% at 100% 0%, rgba(62,207,142,0.06) 0%, transparent 60%)",
        }}
        aria-hidden
      />
      <div className="relative">
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <div className="flex items-center gap-3">
            <span
              className="h-px w-10"
              style={{
                background:
                  "linear-gradient(to right, transparent, rgba(201,168,76,0.6))",
              }}
              aria-hidden
            />
            <p
              className="text-[10px] font-semibold uppercase tracking-[0.22em]"
              style={{ color: "#C9A84C" }}
            >
              Closure
            </p>
          </div>
          {resolvedThisWeek > 0 && (
            <span
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-[11px] font-semibold uppercase tracking-[0.16em] tabular-nums"
              style={{
                borderColor: "rgba(62,207,142,0.3)",
                backgroundColor: "rgba(62,207,142,0.08)",
                color: "#3ECF8E",
              }}
            >
              <Check className="w-3 h-3" />
              {resolvedThisWeek} resolved this week
            </span>
          )}
        </div>

        <h2 className="font-display text-2xl md:text-3xl font-semibold tracking-[-0.02em] text-[#F0F0F0] leading-[1.1] mt-4">
          {allClosed ? (
            <>
              Every mistake{" "}
              <span className="font-display-italic" style={{ color: "#C9A84C" }}>
                reviewed.
              </span>
            </>
          ) : (
            <>
              <span className="tabular-nums">{reviewed}</span> of{" "}
              <span className="tabular-nums">{total}</span>{" "}
              <span className="font-display-italic" style={{ color: "#C9A84C" }}>
                reviewed.
              </span>
            </>
          )}
        </h2>

        {/* Closure progress bar — reviewed / total. */}
        <div
          className="h-1.5 rounded-full bg-white/[0.06] overflow-hidden mt-4"
          role="progressbar"
          aria-valuenow={closurePct}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label="Mistakes reviewed"
        >
          <div
            className="h-full rounded-full transition-all duration-500"
            style={{
              width: `${closurePct}%`,
              background: allClosed
                ? "linear-gradient(90deg, #3ECF8E, #7BE0B4)"
                : "linear-gradient(90deg, #C9A84C, #E8C97A)",
            }}
          />
        </div>

        <div className="flex items-center justify-between gap-4 mt-2.5">
          <p className="text-[13px] text-[#C0C0C0] leading-relaxed max-w-2xl">
            {supportLine}
          </p>
          <span
            className="font-display text-[15px] font-semibold tabular-nums flex-shrink-0"
            style={{ color: allClosed ? "#3ECF8E" : "#C9A84C" }}
          >
            {closurePct}%
          </span>
        </div>
      </div>
    </section>
  )
}
