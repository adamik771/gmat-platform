import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, TrendingUp } from "lucide-react"
import SectionWrapper from "@/components/shared/SectionWrapper"

export const metadata: Metadata = {
  title: "Student score lifts",
  description:
    "Verified score improvements from Zakarian GMAT beta students.",
}

/**
 * Social-proof page — score lifts from beta students.
 *
 * Adam: replace each entry below with a real student story once they
 * complete the program. Keep the schema (start, after, weeks, focus,
 * note) so the cards render cleanly. The `placeholder: true` flag
 * marks slots that should not be shipped to public traffic — they
 * render in a muted "coming soon" state until you swap them out.
 *
 * Honesty footer below makes the placeholder vs verified state explicit
 * to readers, so launching the page with fewer than five real lifts
 * doesn't look misleading.
 */

interface StudentLift {
  /** Display name or pseudonym. Placeholder rows can leave this blank. */
  name?: string
  /** Background context — non-native English, non-engineer, etc. */
  context?: string
  /** Baseline / first-mock score (e.g. "565"). */
  start?: number
  /** Most recent verified mock or official score. */
  after?: number
  /** Weeks of prep on the platform. */
  weeks?: number
  /** Headline focus or limiter (e.g. "DI pacing", "Verbal accuracy"). */
  focus?: string
  /** One- or two-sentence student note. */
  note?: string
  /** Was this an official GMAT score? Otherwise it's a verified mock. */
  official?: boolean
  /** True for empty slots awaiting a real story. */
  placeholder?: boolean
}

const STUDENTS: StudentLift[] = [
  {
    placeholder: true,
  },
  {
    placeholder: true,
  },
  {
    placeholder: true,
  },
  {
    placeholder: true,
  },
  {
    placeholder: true,
  },
]

export default function StudentsPage() {
  const verified = STUDENTS.filter((s) => !s.placeholder)
  const placeholders = STUDENTS.filter((s) => s.placeholder)

  return (
    <div style={{ backgroundColor: "#0A0A0A" }}>
      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 90% 55% at 50% -5%, rgba(201,168,76,0.16) 0%, transparent 60%)",
          }}
          aria-hidden
        />
        <div
          className="absolute inset-0 pointer-events-none bg-grain opacity-[0.035] mix-blend-overlay"
          aria-hidden
        />
        <div className="relative max-w-3xl mx-auto text-center px-4">
          <p
            className="text-[10px] font-semibold uppercase tracking-[0.22em] mb-5"
            style={{ color: "#C9A84C" }}
          >
            Student outcomes
          </p>
          <h1 className="font-display text-4xl sm:text-6xl font-semibold text-[#F0F0F0] tracking-[-0.02em] leading-[1.02] mb-6">
            Score lifts from{" "}
            <span className="font-display-italic" style={{ color: "#C9A84C" }}>
              real students.
            </span>
          </h1>
          <p className="text-[17px] sm:text-[18px] text-[#C0C0C0] leading-relaxed max-w-2xl mx-auto">
            Verified before-and-after results from beta students. Every
            lift below is a real baseline-to-mock or
            baseline-to-official delta — no synthetic numbers.
          </p>
        </div>
      </section>

      {/* Verified lifts */}
      {verified.length > 0 && (
        <SectionWrapper variant="darker">
          <div className="text-center mb-12">
            <p
              className="text-[10px] font-semibold uppercase tracking-[0.22em] mb-3"
              style={{ color: "#C9A84C" }}
            >
              Verified
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-[#F0F0F0] tracking-[-0.02em] leading-[1.05]">
              {verified.length} student{verified.length === 1 ? "" : "s"}{" "}
              completed
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {verified.map((s, i) => (
              <StudentCard key={`v-${i}`} student={s} />
            ))}
          </div>
        </SectionWrapper>
      )}

      {/* Placeholder slots — render as "in progress" so the page is
          launchable before all 5 stories are in. Adam swaps these
          rows out as students complete. */}
      {placeholders.length > 0 && (
        <SectionWrapper variant={verified.length > 0 ? undefined : "darker"}>
          <div className="text-center mb-12">
            <p
              className="text-[10px] font-semibold uppercase tracking-[0.22em] mb-3 text-[#888888]"
            >
              Coming soon
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-[#F0F0F0] tracking-[-0.02em] leading-[1.05] mb-3">
              {placeholders.length} beta student
              {placeholders.length === 1 ? "" : "s"} in progress.
            </h2>
            <p className="text-[14px] text-[#888888] max-w-xl mx-auto leading-relaxed">
              We&apos;re holding space for verified score lifts as the
              first beta cohort completes. We&apos;ll only publish numbers
              we&apos;ve seen on a real baseline-to-mock or official
              delta.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {placeholders.map((s, i) => (
              <StudentCard key={`p-${i}`} student={s} />
            ))}
          </div>
        </SectionWrapper>
      )}

      {/* Honesty + methodology note */}
      <SectionWrapper variant="darker">
        <div className="max-w-2xl mx-auto">
          <p
            className="text-[10px] font-semibold uppercase tracking-[0.22em] mb-4 text-center"
            style={{ color: "#C9A84C" }}
          >
            How we report these
          </p>
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#F0F0F0] tracking-[-0.02em] leading-[1.1] mb-6 text-center">
            What you&apos;re looking at.
          </h2>
          <div className="space-y-4 text-[14px] text-[#C0C0C0] leading-[1.75]">
            <p>
              Each &quot;start&quot; score is the student&apos;s baseline when
              they joined — for the beta cohort, a 30-question stratified
              set across Quant, Verbal, and Data Insights with a
              section-scaled estimate (60–90) and a Focus-scale total
              (205–805) from the same formula shown on the dashboard.
              New students baseline with an official mba.com practice
              exam instead.
            </p>
            <p>
              Each &quot;after&quot; score is either a verified full-length
              mock taken on the platform, or — when shown — a self-reported
              official GMAT score. Official scores are tagged.
            </p>
            <p>
              Score improvement is not guaranteed. Results vary by hours
              committed, baseline, and consistency. We publish only what
              we&apos;ve verified.
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* CTA */}
      <section
        className="relative py-28 overflow-hidden"
        style={{ backgroundColor: "#0A0A0A" }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 70% at 50% 100%, rgba(201,168,76,0.14) 0%, transparent 65%)",
          }}
          aria-hidden
        />
        <div className="relative max-w-3xl mx-auto text-center px-4">
          <h2 className="font-display text-3xl sm:text-5xl font-semibold text-[#F0F0F0] tracking-[-0.02em] leading-[1.05] mb-5">
            Take the{" "}
            <span className="font-display-italic" style={{ color: "#C9A84C" }}>
              first step.
            </span>
          </h2>
          <p className="text-[15px] sm:text-[17px] text-[#888888] leading-relaxed mb-10">
            Start with a free account. No credit card required.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/signup"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold transition-all duration-200 hover:opacity-90 hover:scale-[1.02]"
              style={{ backgroundColor: "#C9A84C", color: "#0A0A0A" }}
            >
              Start the free trial
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold border border-white/[0.12] text-[#C0C0C0] hover:border-white/[0.2] hover:text-[#F0F0F0] transition-all duration-200"
            >
              Read the founder&apos;s story
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

function StudentCard({ student }: { student: StudentLift }) {
  if (student.placeholder) {
    return (
      <div
        className="rounded-2xl border p-6 flex flex-col gap-4"
        style={{
          borderColor: "rgba(255,255,255,0.05)",
          backgroundColor: "rgba(255,255,255,0.012)",
        }}
      >
        <div className="flex items-center justify-between">
          <span
            className="text-[10px] uppercase tracking-[0.22em] font-semibold"
            style={{ color: "rgba(255,255,255,0.4)" }}
          >
            Coming soon
          </span>
          <TrendingUp
            className="w-3.5 h-3.5"
            style={{ color: "rgba(255,255,255,0.3)" }}
            aria-hidden
          />
        </div>
        <p
          className="font-display text-2xl font-semibold tracking-[-0.02em] leading-tight"
          style={{ color: "rgba(240,240,240,0.5)" }}
        >
          Beta student in progress
        </p>
        <p
          className="text-[12px] leading-snug"
          style={{ color: "rgba(255,255,255,0.4)" }}
        >
          We&apos;ll publish this lift as soon as the student completes
          their final mock and verifies the score.
        </p>
      </div>
    )
  }

  const delta =
    typeof student.start === "number" && typeof student.after === "number"
      ? student.after - student.start
      : null

  return (
    <div
      className="rounded-2xl border p-6 flex flex-col gap-4"
      style={{
        borderColor: "rgba(201,168,76,0.20)",
        backgroundColor: "rgba(201,168,76,0.04)",
      }}
    >
      <div className="flex items-center justify-between">
        <span
          className="text-[10px] uppercase tracking-[0.22em] font-semibold"
          style={{ color: "#C9A84C" }}
        >
          {student.official ? "Official score" : "Verified mock"}
        </span>
        {delta !== null && (
          <span
            className="inline-flex items-center gap-1 text-[11px] font-semibold tabular-nums"
            style={{ color: "#3ECF8E" }}
          >
            <TrendingUp className="w-3 h-3" aria-hidden />
            {delta > 0 ? `+${delta}` : delta}
          </span>
        )}
      </div>
      <div className="flex items-baseline gap-3 tabular-nums">
        <p
          className="font-display text-3xl font-semibold leading-none"
          style={{ color: "rgba(240,240,240,0.6)" }}
        >
          {student.start ?? "—"}
        </p>
        <span
          className="text-lg"
          style={{ color: "rgba(255,255,255,0.4)" }}
        >
          →
        </span>
        <p className="font-display text-4xl font-semibold leading-none text-[#F0F0F0]">
          {student.after ?? "—"}
        </p>
      </div>
      {(student.name || student.context) && (
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[12px]">
          {student.name && (
            <span className="font-semibold text-[#F0F0F0]">{student.name}</span>
          )}
          {student.context && (
            <span style={{ color: "rgba(255,255,255,0.55)" }}>
              {student.context}
            </span>
          )}
        </div>
      )}
      <div
        className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px]"
        style={{ color: "rgba(255,255,255,0.5)" }}
      >
        {student.weeks !== undefined && (
          <span className="tabular-nums">
            {student.weeks} week{student.weeks === 1 ? "" : "s"}
          </span>
        )}
        {student.focus && (
          <>
            <span className="text-[#444444]">·</span>
            <span>Focus: {student.focus}</span>
          </>
        )}
      </div>
      {student.note && (
        <p
          className="text-[13px] leading-relaxed italic"
          style={{ color: "rgba(192,192,192,0.85)" }}
        >
          &ldquo;{student.note}&rdquo;
        </p>
      )}
    </div>
  )
}
