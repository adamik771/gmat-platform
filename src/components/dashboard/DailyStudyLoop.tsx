import Link from "next/link"
import { ArrowRight, CheckCircle, Clock, Target } from "lucide-react"
import type { DailyStudyStatus } from "@/lib/daily-study-loop"
import type { FocusAction } from "@/lib/study-plan-engine"

export default function DailyStudyLoop({
  status,
  focus,
  estimatedMinutes,
}: {
  status: DailyStudyStatus
  focus: FocusAction | null
  estimatedMinutes: number | null
}) {
  if (status.complete) {
    return (
      <section
        className="relative overflow-hidden rounded-2xl border px-6 py-7 sm:px-8 sm:py-8"
        style={{
          borderColor: "rgba(62,207,142,0.26)",
          backgroundColor: "rgba(62,207,142,0.055)",
        }}
      >
        <div className="flex flex-col sm:flex-row sm:items-center gap-5">
          <span
            className="inline-flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl"
            style={{ backgroundColor: "rgba(62,207,142,0.13)" }}
          >
            <CheckCircle className="h-6 w-6" style={{ color: "#3ECF8E" }} aria-hidden />
          </span>
          <div className="flex-1 min-w-0">
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em]" style={{ color: "#3ECF8E" }}>
              Done for today
            </p>
            <h2 className="mt-2 font-display text-2xl sm:text-3xl font-semibold text-[#F0F0F0] tracking-tight">
              Today&apos;s target is complete.
            </h2>
            <p className="mt-2 max-w-2xl text-[13px] sm:text-[14px] leading-relaxed text-[#B8C9C1]">
              You answered {status.answered} questions. Stop with a clean win, or continue only if you still have focused energy.
            </p>
          </div>
          {focus && (
            <Link
              href={focus.href}
              className="inline-flex items-center gap-2 self-start sm:self-center text-[12px] font-semibold text-[#A8B8B0] hover:text-[#F0F0F0] transition-colors"
            >
              Optional: {focus.cta}
              <ArrowRight className="h-3.5 w-3.5" aria-hidden />
            </Link>
          )}
        </div>
      </section>
    )
  }

  if (!focus) return null
  return (
    <section
      className="relative overflow-hidden rounded-2xl border"
      style={{
        backgroundColor: "#111111",
        borderColor: "rgba(255,255,255,0.06)",
      }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 55% at 100% 0%, rgba(201,168,76,0.12) 0%, transparent 60%)",
        }}
        aria-hidden
      />
      <div className="absolute inset-0 pointer-events-none bg-grain opacity-[0.03] mix-blend-overlay" aria-hidden />
      <div className="relative flex flex-col items-stretch gap-6 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-3">
            <Target className="w-3.5 h-3.5" style={{ color: "#C9A84C" }} aria-hidden />
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em]" style={{ color: "#C9A84C" }}>
              Today&apos;s mission
            </p>
            <div
              className="h-px w-12"
              style={{ background: "linear-gradient(to right, rgba(201,168,76,0.4), transparent)" }}
              aria-hidden
            />
          </div>
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#F0F0F0] tracking-tight leading-[1.15]">
            {focus.title}
          </h2>
          <p className="text-[13px] sm:text-[14px] text-[#C0C0C0] mt-2 leading-relaxed max-w-2xl">
            {focus.subtitle}
          </p>
          {estimatedMinutes !== null && (
            <div className="mt-4 inline-flex items-center gap-1.5 text-[11px] text-[#888888]">
              <Clock className="w-3 h-3" aria-hidden />
              ~{estimatedMinutes} min
            </div>
          )}
          <p className="mt-2 text-[11px] text-[#888888]">
            {status.remaining} question{status.remaining === 1 ? "" : "s"}{" "}
            to today&apos;s target
          </p>
        </div>
        <Link
          href={focus.href}
          className="inline-flex w-full items-center justify-center gap-2 rounded-lg px-5 py-3 text-[13px] font-semibold transition-transform duration-200 hover:-translate-y-0.5 hover:scale-[1.02] active:scale-[0.98] sm:w-auto sm:flex-shrink-0"
          style={{ backgroundColor: "#C9A84C", color: "#0A0A0A" }}
        >
          {focus.cta}
          <ArrowRight className="w-4 h-4" aria-hidden />
        </Link>
      </div>
    </section>
  )
}
