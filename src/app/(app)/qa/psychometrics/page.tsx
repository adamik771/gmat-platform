import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, AlertTriangle, CheckCircle2 } from "lucide-react"
import { createSupabaseServer } from "@/lib/supabase/server"
import { isAdmin } from "@/lib/admin-auth"
import { loadAdminItemStats } from "@/lib/admin-item-data"
import {
  assessDifficultyFit,
  summariseBankHealth,
  type DifficultyFit,
  type ItemStat,
  type ItemStatFlag,
} from "@/lib/psychometrics"
import { getAllQuestions } from "@/lib/content"

export const metadata = {
  title: "Content QA · Psychometrics",
}

export default async function PsychometricsPage() {
  const supabase = await createSupabaseServer()
  const {
    data: { user },
  } = await supabase.auth.getUser().catch(() => ({ data: { user: null } }))
  // Fail closed: the proxy normally redirects anonymous users, but this page
  // must not depend on that — no user OR non-admin both 404, matching the
  // admin fail-closed pattern used everywhere else.
  if (!user || !isAdmin(user)) {
    notFound()
  }

  let items: ItemStat[] = []
  let error: string | null = null
  try {
    items = await loadAdminItemStats(user)
  } catch {
    error = "Item statistics are temporarily unavailable. No partial results are shown. Please retry."
  }

  const difficultyById = new Map(
    getAllQuestions().map((question) => [question.id, question.difficulty])
  )
  const calibrated = items.map((item) => {
    const difficulty = difficultyById.get(item.questionId) ?? null
    return {
      ...item,
      difficulty,
      difficultyFit: assessDifficultyFit(
        difficulty,
        item.pValue,
        item.attempts
      ),
    }
  })

  const flagOrder: Record<ItemStatFlag, number> = {
    review: 0,
    hard: 1,
    easy: 2,
    ok: 3,
    insufficient: 4,
  }
  const fitOrder: Record<DifficultyFit, number> = {
    "too-easy": 0,
    "too-hard": 1,
    "on-target": 2,
    insufficient: 3,
  }
  const sorted = [...calibrated].sort((a, b) => {
    const fd = flagOrder[a.flag] - flagOrder[b.flag]
    if (fd !== 0) return fd
    const fitDelta = fitOrder[a.difficultyFit] - fitOrder[b.difficultyFit]
    if (fitDelta !== 0) return fitDelta
    return b.attempts - a.attempts
  })

  const health = summariseBankHealth(items)
  const visible = sorted.slice(0, 200)
  const advancedTooEasy = calibrated.filter(
    (item) =>
      item.difficulty === "Advanced" && item.difficultyFit === "too-easy"
  ).length

  const healthColor =
    health.healthPct === null ? "#888888" : "#F0F0F0"

  return (
    <div className="relative">
      <div
        className="absolute inset-x-0 top-0 h-[440px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 55% at 50% 0%, rgba(201,168,76,0.09) 0%, transparent 60%)",
        }}
        aria-hidden
      />
      <div
        className="absolute inset-0 pointer-events-none bg-grain opacity-[0.03] mix-blend-overlay"
        aria-hidden
      />

      <div className="relative max-w-6xl mx-auto space-y-12">
        <Link
          href="/dashboard"
          className="inline-flex items-center gap-1.5 text-[12px] tracking-tight text-[#888888] hover:text-[#F0F0F0] transition-colors"
        >
          <ArrowLeft className="w-3 h-3" />
          Back to dashboard
        </Link>

        {/* HERO */}
        <section className="pt-2">
          <div className="flex items-center gap-3 mb-5">
            <span
              className="h-px w-10"
              style={{
                background:
                  "linear-gradient(to right, transparent, rgba(201,168,76,0.6))",
              }}
              aria-hidden
            />
            <p
              className="text-[10px] uppercase tracking-[0.22em] font-semibold"
              style={{ color: "#C9A84C" }}
            >
              Admin · Item QA
            </p>
            <div
              className="h-px flex-1"
              style={{
                background:
                  "linear-gradient(to right, rgba(201,168,76,0.3), transparent)",
              }}
              aria-hidden
            />
          </div>
          <h1 className="font-display text-4xl sm:text-5xl font-semibold text-[#F0F0F0] tracking-[-0.02em] leading-[1.05]">
            Psychometrics.{" "}
            <span className="font-display-italic" style={{ color: "#C9A84C" }}>
              Item-level diagnostics.
            </span>
          </h1>
          <p className="text-[15px] leading-[1.75] text-[#C0C0C0] mt-5 max-w-2xl">
            One first recorded practice attempt per student and question, excluding
            known review sessions and hinted first attempts. Later retries never
            replace an excluded first attempt. Rates include 95% uncertainty intervals;
            flags are editorial review prompts, not proof of a wrong key or an
            official GMAT difficulty rating.
          </p>
          <p className="text-[13px] leading-[1.75] text-[#C0C0C0] mt-3 max-w-2xl">
            Historical study mode, prior chapter exposure, and all forms of assistance
            were not fully recorded. These are first recorded practice results, not
            verified first-ever unassisted encounters. Current labels may differ from
            those used when older attempts were recorded. Interpret small samples cautiously.
          </p>
        </section>

        {error && (
          <div
            className="p-5 rounded-2xl border"
            style={{
              borderColor: "rgba(255,68,68,0.22)",
              backgroundColor: "rgba(255,68,68,0.04)",
            }}
          >
            <p className="text-[13px] leading-[1.7] text-[#F0F0F0]">{error}</p>
          </div>
        )}

        {!error && <>
        {/* BANK HEALTH */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <span
              className="font-display text-[11px] font-semibold tabular-nums"
              style={{ color: "rgba(201,168,76,0.55)" }}
              aria-hidden
            >
              01
            </span>
            <p
              className="text-[10px] uppercase tracking-[0.22em] font-semibold"
              style={{ color: "#C9A84C" }}
            >
              Evidence summary
            </p>
            <div
              className="h-px flex-1"
              style={{
                background:
                  "linear-gradient(to right, rgba(201,168,76,0.3), transparent)",
              }}
              aria-hidden
            />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
            <HealthCell label="20+ students" value={String(health.withEnoughData)} color="#F0F0F0" />
            <HealthCell label="Advanced: high rate" value={String(advancedTooEasy)} color="#C9A84C" />
            <HealthCell label="Review signal" value={String(health.reviewCount)} color="#FF4444" />
            <HealthCell
              label="Out-of-band"
              value={String(health.hardCount + health.easyCount)}
              color="#C9A84C"
            />
            <HealthCell
              label="No flag among sampled"
              value={health.healthPct === null ? "—" : `${health.healthPct}%`}
              color={healthColor}
            />
          </div>

          <div className="mt-5 p-5 rounded-2xl border border-white/[0.06] bg-[#0D0D0D]">
            <p className="text-[10px] uppercase tracking-[0.22em] font-semibold text-[#888888] mb-3">
              Legend
            </p>
            <div className="flex flex-wrap gap-x-5 gap-y-2 text-[12px] leading-[1.7] text-[#C0C0C0]">
              <LegendRow color="#FF4444" label="Review" detail="nonpositive group difference; investigate rather than assume a defect" />
              <LegendRow color="#FF9933" label="Low rate" detail="the full 95% interval is below 0.20" />
              <LegendRow color="#C9A84C" label="High rate" detail="the full 95% interval is above 0.85" />
              <LegendRow color="#3ECF8E" label="No flag" detail="no screening threshold crossed; not a quality certificate" />
              <LegendRow color="#888888" label="Low data" detail="fewer than 20 eligible students" />
              <LegendRow color="#C9A84C" label="Tier screening" detail="heuristic bands, with a flag only when the full interval lies outside" />
            </div>
            <p className="mt-3 text-[12px] leading-[1.7] text-[#C0C0C0]">
              Group difference compares performance on other unique questions in the
              same section. It needs five other eligible items per student and at
              least five students in each correct/incorrect comparison group.
              It is not a point-biserial correlation or a causal measure.
            </p>
          </div>
        </section>

        {/* ITEMS TABLE */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <span
              className="font-display text-[11px] font-semibold tabular-nums"
              style={{ color: "rgba(201,168,76,0.55)" }}
              aria-hidden
            >
              02
            </span>
            <p
              className="text-[10px] uppercase tracking-[0.22em] font-semibold"
              style={{ color: "#C9A84C" }}
            >
              Items · problematic first
            </p>
            <div
              className="h-px flex-1"
              style={{
                background:
                  "linear-gradient(to right, rgba(201,168,76,0.3), transparent)",
              }}
              aria-hidden
            />
            <span className="text-[11px] tabular-nums text-[#888888]">
              {visible.length} of {items.length}
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-[#F0F0F0] tracking-[-0.02em] leading-[1.1] mb-8">
            The{" "}
            <span className="font-display-italic" style={{ color: "#C9A84C" }}>
              item ledger.
            </span>
          </h2>

          <div className="rounded-2xl border border-white/[0.06] bg-[#111111] overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-[12px]">
                <thead className="bg-[#0A0A0A]">
                  <tr className="text-left">
                    <Th>Flag</Th>
                    <Th>Question</Th>
                    <Th>Section</Th>
                    <Th>Authored</Th>
                    <Th>Tier fit</Th>
                    <Th>Topic</Th>
                    <Th align="right">Eligible students</Th>
                    <Th align="right">Correct rate / 95% interval</Th>
                    <Th align="right">Group difference</Th>
                  </tr>
                </thead>
                <tbody>
                  {visible.map((it) => (
                    <tr
                      key={it.questionId}
                      className="border-t border-white/[0.04] transition-colors hover:bg-white/[0.02]"
                    >
                      <td className="py-3 px-4 sm:px-5">
                        <FlagPill flag={it.flag} />
                      </td>
                      <td className="py-3 px-4 sm:px-5 font-mono text-[11px] text-[#F0F0F0] tracking-tight">
                        {it.questionId}
                      </td>
                      <td className="py-3 px-4 sm:px-5">
                        <span
                          className="inline-flex items-center px-2 py-0.5 rounded-full text-[9px] font-semibold uppercase tracking-[0.18em] border"
                          style={{
                            backgroundColor: "rgba(201,168,76,0.06)",
                            borderColor: "rgba(201,168,76,0.18)",
                            color: "#C9A84C",
                          }}
                        >
                          {it.section}
                        </span>
                      </td>
                      <td className="py-3 px-4 sm:px-5 text-[#C0C0C0]">
                        {it.difficulty ?? "—"}
                      </td>
                      <td className="py-3 px-4 sm:px-5">
                        <DifficultyFitPill fit={it.difficultyFit} />
                      </td>
                      <td className="py-3 px-4 sm:px-5 text-[#888888] truncate max-w-[220px]">
                        {it.topic}
                      </td>
                      <td className="py-3 px-4 sm:px-5 text-right tabular-nums text-[#888888]">
                        {it.attempts}
                        <span className="block text-[11px]">{it.recordedAttempts} recorded attempts</span>
                      </td>
                      <td className="py-3 px-4 sm:px-5 text-right">
                        <span className="font-display text-[15px] font-semibold tabular-nums text-[#F0F0F0]">
                          {it.pValue === null ? "—" : `${Math.round(it.pValue * 100)}%`}
                        </span>
                        {it.interval && <span className="block text-[11px] text-[#C0C0C0]">{Math.round(it.interval.low * 100)}–{Math.round(it.interval.high * 100)}%</span>}
                      </td>
                      <td className="py-3 px-4 sm:px-5 text-right">
                        <span className="font-display text-[15px] font-semibold tabular-nums text-[#F0F0F0]">
                          {it.discrimination === null
                            ? "—"
                            : it.discrimination.toFixed(2)}
                        </span>
                        <span className="block text-[11px] text-[#C0C0C0]">n={it.comparisonCorrect}/{it.comparisonWrong}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {items.length === 0 && !error && (
              <p className="text-[13px] text-[#888888] italic text-center py-10">
                No recorded practice attempts are available for this report.
              </p>
            )}
          </div>
        </section>
        </>}
      </div>
    </div>
  )
}

function Th({
  children,
  align,
}: {
  children: React.ReactNode
  align?: "right"
}) {
  return (
    <th
      className={
        "py-3 px-4 sm:px-5 text-[10px] uppercase tracking-[0.22em] text-[#888888] font-semibold " +
        (align === "right" ? "text-right" : "text-left")
      }
    >
      {children}
    </th>
  )
}

function LegendRow({
  color,
  label,
  detail,
}: {
  color: string
  label: string
  detail: string
}) {
  return (
    <span className="inline-flex items-baseline gap-1.5">
      <span
        className="inline-block w-1.5 h-1.5 rounded-full translate-y-[-1px]"
        style={{ backgroundColor: color }}
        aria-hidden
      />
      <strong className="font-semibold" style={{ color }}>
        {label}
      </strong>
      <span className="text-[#888888]">— {detail}.</span>
    </span>
  )
}

function HealthCell({
  label,
  value,
  color,
}: {
  label: string
  value: string
  color: string
}) {
  return (
    <div className="p-4 sm:p-5 rounded-2xl border border-white/[0.06] bg-[#111111] transition-colors hover:bg-[#141414] hover:border-white/[0.14]">
      <p className="text-[10px] uppercase tracking-[0.22em] text-[#888888] font-semibold">
        {label}
      </p>
      <p
        className="font-display text-3xl sm:text-4xl font-semibold mt-2 tabular-nums tracking-[-0.02em] leading-none"
        style={{ color }}
      >
        {value}
      </p>
    </div>
  )
}

function FlagPill({ flag }: { flag: ItemStatFlag }) {
  const { label, color, bg, border, icon } = flagDisplay(flag)
  const Icon = icon
  return (
    <span
      className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[9px] font-semibold uppercase tracking-[0.18em] border"
      style={{ backgroundColor: bg, color, borderColor: border }}
    >
      {Icon && <Icon className="w-3 h-3" />}
      {label}
    </span>
  )
}

function DifficultyFitPill({ fit }: { fit: DifficultyFit }) {
  const display: Record<
    DifficultyFit,
    { label: string; color: string; background: string }
  > = {
    "on-target": {
      label: "No clear flag",
      color: "#3ECF8E",
      background: "rgba(62,207,142,0.08)",
    },
    "too-easy": {
      label: "Above band",
      color: "#C9A84C",
      background: "rgba(201,168,76,0.08)",
    },
    "too-hard": {
      label: "Below band",
      color: "#FF9933",
      background: "rgba(255,153,51,0.08)",
    },
    insufficient: {
      label: "Low data",
      color: "#888888",
      background: "rgba(136,136,136,0.08)",
    },
  }
  const item = display[fit]
  return (
    <span
      className="inline-flex rounded-full border px-2 py-0.5 text-[9px] font-semibold uppercase tracking-[0.18em]"
      style={{
        color: item.color,
        backgroundColor: item.background,
        borderColor: `${item.color}40`,
      }}
    >
      {item.label}
    </span>
  )
}

function flagDisplay(flag: ItemStatFlag) {
  switch (flag) {
    case "review":
      return {
        label: "Review",
        color: "#FF4444",
        bg: "rgba(255,68,68,0.08)",
        border: "rgba(255,68,68,0.25)",
        icon: AlertTriangle,
      }
    case "hard":
      return {
        label: "Low rate",
        color: "#FF9933",
        bg: "rgba(255,153,51,0.08)",
        border: "rgba(255,153,51,0.25)",
        icon: null,
      }
    case "easy":
      return {
        label: "High rate",
        color: "#C9A84C",
        bg: "rgba(201,168,76,0.08)",
        border: "rgba(201,168,76,0.25)",
        icon: null,
      }
    case "ok":
      return {
        label: "No flag",
        color: "#3ECF8E",
        bg: "rgba(62,207,142,0.08)",
        border: "rgba(62,207,142,0.25)",
        icon: CheckCircle2,
      }
    case "insufficient":
    default:
      return {
        label: "Low data",
        color: "#888888",
        bg: "rgba(136,136,136,0.08)",
        border: "rgba(136,136,136,0.2)",
        icon: null,
      }
  }
}
