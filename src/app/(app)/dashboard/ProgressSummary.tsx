import TargetScoreControl from "./TargetScoreControl"

interface ProgressSummaryProps {
  courseCompletionPct: number
  completedChapters: number
  targetScore: number | null
  currentStreak: number
  longestStreak: number
  questionsLastSevenDays: number
  accuracyLastSevenDays: number | null
}

/**
 * Three decision-driving progress signals. Volume and accuracy belong
 * together: either number alone can reward grinding or cautious cherry-
 * picking, while the pair answers whether recent practice was both
 * substantial and productive.
 */
export default function ProgressSummary({
  courseCompletionPct,
  completedChapters,
  targetScore,
  currentStreak,
  longestStreak,
  questionsLastSevenDays,
  accuracyLastSevenDays,
}: ProgressSummaryProps) {
  const hasPractice = questionsLastSevenDays > 0

  return (
    <section
      className="rounded-2xl border bg-[#0F0F0F] p-4 sm:p-5"
      style={{ borderColor: "rgba(255,255,255,0.06)" }}
      aria-label="Progress summary"
    >
      <div className="grid grid-cols-1 divide-y divide-white/[0.05] sm:grid-cols-3 sm:divide-x sm:divide-y-0">
        <div id="score-goal" className="px-1 py-4 sm:px-5 sm:py-1 scroll-mt-24">
          <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#888888]">
            Course
          </p>
          <p
            className="mt-2 font-display text-[1.75rem] font-semibold leading-none tabular-nums"
            style={{ color: completedChapters > 0 ? "#F0F0F0" : "#666666" }}
          >
            {courseCompletionPct}% complete
          </p>
          <div className="mt-2 flex flex-wrap items-baseline gap-x-2 gap-y-1">
            <TargetScoreControl initialTarget={targetScore} />
          </div>
        </div>

        <div className="px-1 py-4 sm:px-5 sm:py-1">
          <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#888888]">
            Recent practice
          </p>
          <p
            className="mt-2 font-display text-[1.75rem] font-semibold leading-none tabular-nums"
            style={{ color: hasPractice ? "#F0F0F0" : "#666666" }}
          >
            {hasPractice ? questionsLastSevenDays : "No sets yet"}
            {hasPractice && (
              <span className="ml-1.5 text-[12px] font-medium text-[#888888]">
                questions
              </span>
            )}
          </p>
          <p className="mt-2 text-[11px] text-[#888888]">
            {accuracyLastSevenDays === null
              ? "Last 7 days"
              : `${accuracyLastSevenDays}% accuracy · last 7 days`}
          </p>
        </div>

        <div className="px-1 py-4 sm:px-5 sm:py-1">
          <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#888888]">
            Consistency
          </p>
          {currentStreak === 0 && longestStreak > 0 ? (
            <>
              <p className="mt-2 font-display text-[1.35rem] font-semibold leading-none text-[#F0F0F0]">
                Fresh start
              </p>
              <p className="mt-2 text-[11px] text-[#888888]">
                Best run {longestStreak}d · one session restarts it
              </p>
            </>
          ) : (
            <>
              <p
                className="mt-2 font-display text-[1.75rem] font-semibold leading-none tabular-nums"
                style={{ color: currentStreak > 0 ? "#F0F0F0" : "#666666" }}
              >
                {currentStreak > 0 ? currentStreak : "Start today"}
                {currentStreak > 0 && (
                  <span className="ml-1.5 text-[12px] font-medium text-[#888888]">
                    {currentStreak === 1 ? "day" : "days"}
                  </span>
                )}
              </p>
              <p className="mt-2 text-[11px] text-[#888888]">
                {longestStreak > currentStreak
                  ? `Best run ${longestStreak}d`
                  : "Keep the chain alive with today's mission"}
              </p>
            </>
          )}
        </div>
      </div>
    </section>
  )
}
