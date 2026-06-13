"use client"

import { useMemo, useState } from "react"
import Link from "next/link"
import {
  AlertTriangle,
  ArrowRight,
  Calendar,
  Clock,
  Target,
} from "lucide-react"
import {
  buildSchedule,
  totalHours,
  type ScheduleInput,
} from "@/lib/study-schedule"
import LeadCapture from "@/components/marketing/LeadCapture"

function todayIso(): string {
  return new Date().toISOString().slice(0, 10)
}

function defaultExamDate(): string {
  // 12 weeks from today is the standard recommended minimum prep length.
  const d = new Date()
  d.setDate(d.getDate() + 12 * 7)
  return d.toISOString().slice(0, 10)
}

export default function StudyScheduleClient() {
  const [examDate, setExamDate] = useState<string>(defaultExamDate())
  const [weeklyHours, setWeeklyHours] = useState<number>(8)
  const [hasAccuracy, setHasAccuracy] = useState<boolean>(false)
  const [quantPct, setQuantPct] = useState<number>(60)
  const [verbalPct, setVerbalPct] = useState<number>(60)
  const [diPct, setDiPct] = useState<number>(60)

  const schedule = useMemo(() => {
    const input: ScheduleInput = {
      examDateIso: examDate,
      todayIso: todayIso(),
      weeklyHours,
    }
    if (hasAccuracy) {
      input.accuracy = {
        quant: Math.max(0, Math.min(100, quantPct)) / 100,
        verbal: Math.max(0, Math.min(100, verbalPct)) / 100,
        di: Math.max(0, Math.min(100, diPct)) / 100,
      }
    }
    return buildSchedule(input)
  }, [examDate, weeklyHours, hasAccuracy, quantPct, verbalPct, diPct])

  return (
    <div style={{ backgroundColor: "#0A0A0A" }}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 pt-28 pb-20">
        <header className="mb-10">
          <div className="inline-flex items-center gap-2 mb-5">
            <Calendar className="w-4 h-4" style={{ color: "#C9A84C" }} />
            <p className="text-[10px] uppercase tracking-[0.22em] text-[#C9A84C] font-semibold">
              Free tool
            </p>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl font-semibold text-[#F0F0F0] tracking-[-0.02em] leading-[1.05] mb-5">
            Build a GMAT{" "}
            <span className="font-display-italic" style={{ color: "#C9A84C" }}>
              study schedule
            </span>{" "}
            for your exam date.
          </h1>
          <p className="text-[16px] text-[#C0C0C0] leading-relaxed max-w-2xl">
            Enter your exam date + weekly study hours and get a
            week-by-week plan. Optional: paste in rough section
            accuracies (from a mock or an official mba.com practice
            exam) and the schedule re-prioritises around your weakest
            section.
          </p>
        </header>

        {/* Inputs */}
        <div
          className="p-6 sm:p-8 rounded-2xl border mb-10"
          style={{
            borderColor: "rgba(201,168,76,0.28)",
            backgroundColor: "#111111",
          }}
        >
          <div className="grid sm:grid-cols-2 gap-5 mb-6">
            <div>
              <label
                htmlFor="exam-date"
                className="block text-[10px] uppercase tracking-[0.22em] font-semibold text-[#888888] mb-2"
              >
                Exam date
              </label>
              <input
                id="exam-date"
                type="date"
                value={examDate}
                min={todayIso()}
                onChange={(e) => setExamDate(e.target.value)}
                className="w-full px-4 py-3 rounded-xl text-[15px] text-[#F0F0F0] border border-white/[0.08] bg-[#0A0A0A] outline-none focus:ring-2 focus:ring-[#C9A84C]/30 focus:border-[#C9A84C]/40 transition-all"
              />
            </div>
            <div>
              <label
                htmlFor="weekly-hours"
                className="block text-[10px] uppercase tracking-[0.22em] font-semibold text-[#888888] mb-2"
              >
                Weekly study hours
              </label>
              <input
                id="weekly-hours"
                type="number"
                min={3}
                max={25}
                step={0.5}
                value={weeklyHours}
                onChange={(e) => {
                  const v = parseFloat(e.target.value)
                  if (!isNaN(v)) setWeeklyHours(v)
                }}
                className="w-full px-4 py-3 rounded-xl text-[15px] text-[#F0F0F0] border border-white/[0.08] bg-[#0A0A0A] outline-none focus:ring-2 focus:ring-[#C9A84C]/30 focus:border-[#C9A84C]/40 transition-all"
              />
              <p className="text-[11px] text-[#555555] mt-1.5">
                Typical working professional: 7.5 (90 min/day × 5 days/wk).
              </p>
            </div>
          </div>

          {/* Accuracy snapshot */}
          <div className="border-t border-white/[0.06] pt-5">
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={hasAccuracy}
                onChange={(e) => setHasAccuracy(e.target.checked)}
                className="mt-1 w-4 h-4 accent-[#C9A84C]"
              />
              <div>
                <p className="text-[14px] font-semibold text-[#F0F0F0]">
                  I have a rough section accuracy snapshot
                </p>
                <p className="text-[12px] text-[#888888] mt-0.5">
                  From an official mba.com practice exam, a mock, or a
                  gut estimate. Optional &mdash; leave unchecked for the
                  generic plan.
                </p>
              </div>
            </label>

            {hasAccuracy && (
              <div className="grid sm:grid-cols-3 gap-3 mt-4">
                {(
                  [
                    {
                      label: "Quant accuracy %",
                      value: quantPct,
                      setter: setQuantPct,
                    },
                    {
                      label: "Verbal accuracy %",
                      value: verbalPct,
                      setter: setVerbalPct,
                    },
                    {
                      label: "DI accuracy %",
                      value: diPct,
                      setter: setDiPct,
                    },
                  ] as const
                ).map((field) => (
                  <div key={field.label}>
                    <label className="block text-[10px] uppercase tracking-[0.18em] font-semibold text-[#888888] mb-2">
                      {field.label}
                    </label>
                    <input
                      type="number"
                      min={0}
                      max={100}
                      step={5}
                      value={field.value}
                      onChange={(e) => {
                        const v = parseInt(e.target.value, 10)
                        if (!isNaN(v)) field.setter(v)
                      }}
                      className="w-full px-3 py-2 rounded-xl text-[14px] tabular-nums text-[#F0F0F0] border border-white/[0.08] bg-[#0A0A0A] outline-none focus:ring-2 focus:ring-[#C9A84C]/30 focus:border-[#C9A84C]/40 transition-all"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Summary */}
        <div className="grid sm:grid-cols-3 gap-3 mb-8">
          <SummaryStat
            icon={Calendar}
            label="Total weeks"
            value={schedule.totalWeeks}
            sub={schedule.compressed ? "Compressed plan" : "Full plan"}
          />
          <SummaryStat
            icon={Clock}
            label="Total hours"
            value={totalHours(schedule)}
            sub={`@ ${schedule.weeklyHours} hrs/wk`}
          />
          <SummaryStat
            icon={Target}
            label="Weakest section"
            value={
              schedule.weakestSection ?? (schedule.unprimed ? "—" : "Even")
            }
            sub={
              schedule.unprimed
                ? "Take a practice exam"
                : "Schedule is built around it"
            }
          />
        </div>

        {schedule.compressed && (
          <div
            className="p-4 rounded-xl border mb-6 flex items-start gap-3"
            style={{
              borderColor: "rgba(255,193,7,0.28)",
              backgroundColor: "rgba(255,193,7,0.04)",
            }}
          >
            <AlertTriangle
              className="w-4 h-4 flex-shrink-0 mt-0.5"
              style={{ color: "#E5B341" }}
            />
            <div>
              <p className="text-[13px] font-semibold text-[#F0F0F0]">
                This is a compressed plan ({schedule.totalWeeks} weeks).
              </p>
              <p className="text-[12px] text-[#888888] leading-relaxed mt-1">
                Standard prep is 12-16 weeks. Plans under 8 weeks
                deliberately skip the foundation phase and may not produce
                the score lift you&apos;d expect from a full cycle.
                Consider rescheduling the exam if your target is far
                above your current baseline.
              </p>
            </div>
          </div>
        )}

        {schedule.unprimed && (
          <div
            className="p-4 rounded-xl border mb-6 flex items-start gap-3"
            style={{
              borderColor: "rgba(201,168,76,0.28)",
              backgroundColor: "rgba(201,168,76,0.04)",
            }}
          >
            <AlertTriangle
              className="w-4 h-4 flex-shrink-0 mt-0.5"
              style={{ color: "#C9A84C" }}
            />
            <div>
              <p className="text-[13px] font-semibold text-[#F0F0F0]">
                Generic schedule (no accuracy data)
              </p>
              <p className="text-[12px] text-[#888888] leading-relaxed mt-1">
                Take an official practice exam on mba.com as your
                baseline, then re-generate this schedule with the
                section accuracies for a real plan.
              </p>
            </div>
          </div>
        )}

        {/* Schedule */}
        <div className="space-y-3">
          {schedule.weeks.map((week) => (
            <div
              key={week.index}
              className="p-5 rounded-2xl border border-white/[0.06] bg-[#0D0D0D]"
            >
              <div className="flex items-baseline justify-between flex-wrap gap-2 mb-2">
                <div className="flex items-baseline gap-3 flex-wrap">
                  <span
                    className="font-display text-[10px] font-semibold uppercase tracking-[0.22em] tabular-nums"
                    style={{ color: "#C9A84C" }}
                  >
                    Week {week.index}
                  </span>
                  <span className="text-[11px] text-[#666666]">
                    {week.rangeLabel}
                  </span>
                </div>
                <span
                  className="px-2 py-0.5 rounded text-[10px] uppercase tracking-[0.15em] font-semibold"
                  style={{
                    backgroundColor: "rgba(201,168,76,0.1)",
                    color: "#C9A84C",
                  }}
                >
                  {week.focus}
                </span>
              </div>
              <p className="text-[15px] text-[#F0F0F0] leading-snug font-semibold mb-2">
                {week.action}
              </p>
              {week.bullets.length > 0 && (
                <ul className="space-y-1 mt-2">
                  {week.bullets.map((b, i) => (
                    <li
                      key={i}
                      className="text-[13px] text-[#888888] leading-relaxed pl-4 relative before:content-['·'] before:absolute before:left-1 before:text-[#C9A84C]"
                    >
                      {b}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        {/* CTA + lead capture */}
        <div
          className="mt-12 p-7 sm:p-9 rounded-2xl border"
          style={{
            borderColor: "rgba(201,168,76,0.28)",
            backgroundColor: "#111111",
          }}
        >
          <p className="text-[10px] uppercase tracking-[0.22em] text-[#C9A84C] font-semibold mb-2">
            A schedule is only as good as the data behind it
          </p>
          <h2 className="font-display text-2xl font-semibold text-[#F0F0F0] tracking-tight leading-tight mb-4">
            Real plans adjust{" "}
            <span className="font-display-italic" style={{ color: "#C9A84C" }}>
              weekly.
            </span>
          </h2>
          <p className="text-[15px] text-[#C0C0C0] leading-relaxed mb-6 max-w-xl">
            This page gives you a defensible baseline. The platform&apos;s
            adaptive plan re-prioritises every week based on your last
            seven days of misses &mdash; the loop you&apos;d otherwise have
            to run by hand.
          </p>
          <div className="flex flex-wrap gap-3 mb-7">
            <Link
              href="/signup"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-200 hover:opacity-90 hover:scale-[1.02]"
              style={{ backgroundColor: "#C9A84C", color: "#0A0A0A" }}
            >
              Start Free
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/sample-chapter"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold border transition-all duration-200"
              style={{
                borderColor: "rgba(201,168,76,0.32)",
                color: "#C9A84C",
                backgroundColor: "rgba(201,168,76,0.04)",
              }}
            >
              Read a free sample chapter
            </Link>
            <Link
              href="/blog/how-to-build-a-gmat-study-plan-that-works"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold border border-white/[0.1] text-[#C0C0C0] hover:border-white/[0.18] hover:text-[#F0F0F0] transition-all duration-200"
            >
              Read the planning post
            </Link>
          </div>
          <LeadCapture
            source="study-schedule"
            leadMagnet="error-log-template"
            eyebrow="Free template"
            headline="Get the error-log template I used to go from 565 to 735."
            description="The same six-tag taxonomy the Zakarian platform uses, in a spreadsheet you can run yourself."
            ctaLabel="Send me the template"
            variant="compact"
          />
        </div>
      </div>
    </div>
  )
}

function SummaryStat({
  icon: Icon,
  label,
  value,
  sub,
}: {
  icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>
  label: string
  value: string | number
  sub: string
}) {
  return (
    <div
      className="p-4 rounded-xl border"
      style={{
        borderColor: "rgba(255,255,255,0.06)",
        backgroundColor: "#0D0D0D",
      }}
    >
      <div className="flex items-center gap-2 mb-1.5">
        <Icon className="w-3.5 h-3.5" style={{ color: "#C9A84C" }} />
        <span className="text-[10px] uppercase tracking-[0.22em] font-semibold text-[#888888]">
          {label}
        </span>
      </div>
      <p
        className="font-display text-2xl font-semibold tabular-nums"
        style={{ color: "#F0F0F0" }}
      >
        {value}
      </p>
      <p className="text-[11px] text-[#666666] mt-0.5">{sub}</p>
    </div>
  )
}
