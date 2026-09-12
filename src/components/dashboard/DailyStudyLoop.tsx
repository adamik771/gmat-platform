import Link from "next/link"
import { ArrowRight, CheckCircle, Clock } from "lucide-react"
import type { DailyStudyStatus } from "@/lib/daily-study-loop"
import type { FocusAction } from "@/lib/study-plan-engine"

export default function DailyStudyLoop({ status, focus, estimatedMinutes }: {
  status: DailyStudyStatus
  focus: FocusAction | null
  estimatedMinutes: number | null
}) {
  if (!focus && !status.complete) return null
  return (
    <section aria-labelledby="next-study-task" className="primary-study-task">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <div className="min-w-0 flex-1">
          <p className="mb-2 font-medium !text-[#C8A85A]">Your next task</p>
          <h2 id="next-study-task">{focus?.title ?? "Daily question target reached"}</h2>
          {focus && <p className="mt-2 max-w-2xl text-[#B9B7AE]">{focus.subtitle}</p>}
          <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-[#B9B7AE]">
            {estimatedMinutes !== null && <span className="inline-flex items-center gap-2"><Clock className="size-4" aria-hidden />About {estimatedMinutes} min</span>}
            {status.complete ? <span className="inline-flex items-center gap-2"><CheckCircle className="size-4 text-[#74C49A]" aria-hidden />Daily target reached: {status.answered} questions answered</span> : <span>{status.remaining} question{status.remaining === 1 ? "" : "s"} to your daily target</span>}
          </div>
        </div>
        {focus && <Link href={focus.href} className="task-action self-start sm:shrink-0">{focus.cta}<ArrowRight className="size-4" aria-hidden /></Link>}
      </div>
    </section>
  )
}
