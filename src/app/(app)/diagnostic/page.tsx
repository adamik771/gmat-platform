import Link from "next/link"
import { ArrowRight, FlaskConical, CheckCircle2, Circle } from "lucide-react"
import { createSupabaseServer } from "@/lib/supabase/server"
import {
  DIAGNOSTIC_PER_SECTION,
  DIAGNOSTIC_SECTIONS,
} from "@/lib/diagnostic"
import type { Section } from "@/types"

export const metadata = {
  title: "Diagnostic — Zakarian GMAT",
}

/**
 * /diagnostic — placement-test landing. Shows section-by-section progress.
 * Each section is a 10-question deterministic-stratified set ("3 easy, 4
 * medium, 3 hard, ≤2 per topic"). Sections can be taken in any order; the
 * report unlocks as sections complete.
 */
export default async function DiagnosticPage() {
  const supabase = await createSupabaseServer()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  // Which sections has the user already completed? Keyed by our fixed
  // diagnostic slugs: "diagnostic-quant", "diagnostic-verbal", "diagnostic-di".
  const completed: Record<Section, boolean> = {
    Quant: false,
    Verbal: false,
    DI: false,
  }

  if (user) {
    const { data: rows } = await supabase
      .from("practice_sessions")
      .select("slug, section")
      .eq("user_id", user.id)
      .in("slug", [
        "diagnostic-quant",
        "diagnostic-verbal",
        "diagnostic-di",
      ])
    for (const row of rows ?? []) {
      const s = row.section as Section | undefined
      if (s && s in completed) completed[s] = true
    }
  }

  const completedCount = Object.values(completed).filter(Boolean).length
  const allDone = completedCount === DIAGNOSTIC_SECTIONS.length

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div>
        <div className="flex items-center gap-2 mb-2">
          <FlaskConical className="w-4 h-4" style={{ color: "#C9A84C" }} />
          <h1 className="text-2xl sm:text-3xl font-bold text-[#F0F0F0]">
            Diagnostic Placement
          </h1>
        </div>
        <p className="text-sm text-[#888888] leading-relaxed">
          Before you commit to a study plan, find out where you actually stand.
          30 questions total, 10 per section, mixed difficulty — no time
          pressure. Takes roughly 45-60 minutes. You can do one section at a
          time; your results unlock as each section completes.
        </p>
      </div>

      {!user && (
        <div className="p-6 rounded-xl border border-white/[0.08] bg-[#111111]">
          <h2 className="text-base font-semibold text-[#F0F0F0] mb-2">
            Sign in to save your diagnostic
          </h2>
          <p className="text-sm text-[#888888] leading-relaxed">
            Without an account, your responses won&apos;t persist. Sign in first
            so the results seed your review queue, flag weak topics, and set a
            baseline score to track progress against.
          </p>
        </div>
      )}

      <div className="space-y-3">
        {DIAGNOSTIC_SECTIONS.map((section) => {
          const isDone = completed[section]
          return (
            <Link
              key={section}
              href={`/diagnostic/${section.toLowerCase()}`}
              className="block p-5 rounded-xl border border-white/[0.08] bg-[#111111] hover:bg-[#131313] transition-colors group"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-3">
                  {isDone ? (
                    <CheckCircle2
                      className="w-5 h-5 mt-0.5 flex-shrink-0"
                      style={{ color: "#C9A84C" }}
                    />
                  ) : (
                    <Circle className="w-5 h-5 mt-0.5 flex-shrink-0 text-[#555555]" />
                  )}
                  <div>
                    <div className="flex items-center gap-2 mb-1.5">
                      <span
                        className="px-2 py-0.5 rounded text-[10px] uppercase tracking-wide"
                        style={{
                          backgroundColor: "rgba(201,168,76,0.08)",
                          color: "#C9A84C",
                        }}
                      >
                        {section}
                      </span>
                      <span className="text-xs text-[#555555]">
                        {DIAGNOSTIC_PER_SECTION} questions
                      </span>
                    </div>
                    <h2 className="text-lg font-semibold text-[#F0F0F0] mb-1">
                      {isDone ? `Re-take ${section} diagnostic` : `Start ${section}`}
                    </h2>
                    <p className="text-xs text-[#888888]">
                      {isDone
                        ? "Re-taking overwrites your previous result for this section."
                        : "3 easy + 4 medium + 3 hard. No timer."}
                    </p>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-[#555555] group-hover:text-[#C9A84C] transition-colors flex-shrink-0 mt-1" />
              </div>
            </Link>
          )
        })}
      </div>

      <div className="p-5 rounded-xl border bg-[#111111]"
        style={{
          borderColor: allDone ? "rgba(201,168,76,0.3)" : "rgba(255,255,255,0.08)",
        }}
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-widest text-[#555555] mb-1">
              Your report
            </p>
            <h2 className="text-lg font-semibold text-[#F0F0F0] mb-1">
              {allDone
                ? "View your full report"
                : `${completedCount} of ${DIAGNOSTIC_SECTIONS.length} sections complete`}
            </h2>
            <p className="text-xs text-[#888888] leading-relaxed">
              {allDone
                ? "Per-section score estimate, weak topics, and recommended next chapters."
                : "Finish all three sections to unlock the full report. Partial results show up after each section you complete."}
            </p>
          </div>
          <Link
            href="/diagnostic/report"
            className="flex-shrink-0 px-3 py-1.5 rounded-lg text-xs font-semibold transition-opacity hover:opacity-90"
            style={{
              backgroundColor: completedCount > 0 ? "#C9A84C" : "rgba(255,255,255,0.08)",
              color: completedCount > 0 ? "#0A0A0A" : "#555555",
              pointerEvents: completedCount > 0 ? "auto" : "none",
            }}
          >
            {allDone ? "View report" : "Partial report"}
          </Link>
        </div>
      </div>
    </div>
  )
}
