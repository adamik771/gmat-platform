import TargetScoreControl from "./TargetScoreControl"

interface ProgressSummaryProps {
  courseCompletionPct: number
  completedChapters: number
  totalChapters: number
  targetScore: number | null
  currentStreak: number
  longestStreak: number
  questionsLastSevenDays: number
  accuracyLastSevenDays: number | null
  accuracyQuestionCount: number
}

export default function ProgressSummary({
  courseCompletionPct, completedChapters, totalChapters, targetScore,
  currentStreak, longestStreak, questionsLastSevenDays, accuracyLastSevenDays,
  accuracyQuestionCount,
}: ProgressSummaryProps) {
  return (
    <section className="border-y border-white/10 py-5" aria-label="Progress summary">
      <div className="grid grid-cols-1 divide-y divide-white/10 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
        <div className="py-4 sm:py-0 sm:pr-6">
          <h2 className="text-sm font-medium text-[#B9B7AE]">Reading progress</h2>
          <p className="mt-2 text-[28px] font-semibold leading-tight tabular-nums text-[#F4F1E8]">{courseCompletionPct}%</p>
          <p className="mt-2 text-sm text-[#B9B7AE]">{completedChapters} of {totalChapters} chapters fully read</p>
          <p className="mt-1 text-xs text-[#95978D]">Reading completion, not mastery</p>
        </div>
        <div className="py-4 sm:px-6 sm:py-0">
          <h2 className="text-sm font-medium text-[#B9B7AE]">Practice in the last 7 days</h2>
          <p className="mt-2 text-[28px] font-semibold leading-tight tabular-nums text-[#F4F1E8]">{questionsLastSevenDays}{" "}<span className="text-sm font-normal">{questionsLastSevenDays === 1 ? "question" : "questions"}</span></p>
          <p className="mt-2 text-sm text-[#B9B7AE]">{accuracyLastSevenDays === null ? "No scored practice in this window" : `${accuracyLastSevenDays}% accuracy on ${accuracyQuestionCount} questions`}</p>
          <p className="mt-1 text-xs text-[#95978D]">Total includes review; accuracy excludes replay sessions</p>
        </div>
        <div className="py-4 sm:py-0 sm:pl-6">
          <h2 className="text-sm font-medium text-[#B9B7AE]">Study consistency</h2>
          <p className="mt-2 text-[28px] font-semibold leading-tight tabular-nums text-[#F4F1E8]">{currentStreak}{" "}<span className="text-sm font-normal">{currentStreak === 1 ? "day" : "days"}</span></p>
          <p className="mt-2 text-sm text-[#B9B7AE]">{longestStreak > 0 ? `Longest streak: ${longestStreak} ${longestStreak === 1 ? "day" : "days"}` : "Your first study day starts the streak"}</p>
        </div>
      </div>
      <div id="score-goal" className="mt-5 border-t border-white/10 pt-4"><TargetScoreControl initialTarget={targetScore} /></div>
    </section>
  )
}
