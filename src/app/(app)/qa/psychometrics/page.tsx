import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, AlertTriangle, CheckCircle2 } from "lucide-react"
import { createSupabaseServer } from "@/lib/supabase/server"
import { isAdmin } from "@/lib/admin-auth"
import {
  computeItemStats,
  summariseBankHealth,
  type ItemStat,
  type ItemStatFlag,
} from "@/lib/psychometrics"
import type { Section } from "@/types"

export const metadata = {
  title: "Content QA · Psychometrics",
}

export default async function PsychometricsPage() {
  const supabase = await createSupabaseServer()
  const {
    data: { user },
  } = await supabase.auth.getUser().catch(() => ({ data: { user: null } }))
  if (user) {
    if (!isAdmin(user)) {
      notFound()
    }
  }

  let items: ItemStat[] = []
  let error: string | null = null
  if (!user) {
    error = "Sign in to view content QA"
  } else {
    try {
      const { data } = await supabase
        .from("practice_attempts")
        .select("user_id, question_id, section, topic, is_correct")
        .limit(50_000)
      const rows = (data ?? [])
        .filter((a) => {
          const sec = a.section as Section
          return sec === "Quant" || sec === "Verbal" || sec === "DI"
        })
        .map((a) => ({
          user_id: a.user_id as string,
          question_id: a.question_id as string,
          section: a.section as Section,
          topic: (a.topic as string) || "Unknown",
          is_correct: !!a.is_correct,
        }))
      items = computeItemStats(rows)
    } catch {
      error = "Couldn't load attempts — Supabase may be unreachable."
    }
  }

  const flagOrder: Record<ItemStatFlag, number> = {
    broken: 0,
    hard: 1,
    easy: 2,
    ok: 3,
    insufficient: 4,
  }
  const sorted = [...items].sort((a, b) => {
    const fd = flagOrder[a.flag] - flagOrder[b.flag]
    if (fd !== 0) return fd
    return b.attempts - a.attempts
  })

  const health = summariseBankHealth(items)
  const visible = sorted.slice(0, 200)

  const healthColor =
    health.healthPct >= 70 ? "#3ECF8E" : health.healthPct >= 50 ? "#C9A84C" : "#FF4444"

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
            Classical item analysis across every attempt in the bank. Surfaces the
            items that need author review — broken keys, out-of-band difficulty, or
            too few attempts to read with confidence.
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
              Bank health
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
            <HealthCell label="Total items" value={String(health.totalItems)} color="#F0F0F0" />
            <HealthCell label="OK" value={String(health.okCount)} color="#3ECF8E" />
            <HealthCell label="Broken" value={String(health.brokenCount)} color="#FF4444" />
            <HealthCell
              label="Out-of-band"
              value={String(health.hardCount + health.easyCount)}
              color="#C9A84C"
            />
            <HealthCell
              label="Bank health"
              value={`${health.healthPct}%`}
              color={healthColor}
            />
          </div>

          <div className="mt-5 p-5 rounded-2xl border border-white/[0.06] bg-[#0D0D0D]">
            <p className="text-[10px] uppercase tracking-[0.22em] font-semibold text-[#888888] mb-3">
              Legend
            </p>
            <div className="flex flex-wrap gap-x-5 gap-y-2 text-[12px] leading-[1.7] text-[#C0C0C0]">
              <LegendRow color="#FF4444" label="Broken" detail="discrimination at or below 0 with 20+ attempts (key may be wrong)" />
              <LegendRow color="#FF9933" label="Hard" detail="p-value under 0.20 (guessing floor)" />
              <LegendRow color="#C9A84C" label="Easy" detail="p-value over 0.85 (85%+ correct)" />
              <LegendRow color="#3ECF8E" label="OK" detail="inside the measurement window" />
              <LegendRow color="#888888" label="Low data" detail="under 20 attempts, cannot read" />
            </div>
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
            <span className="text-[11px] tabular-nums text-[#555555]">
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
                    <Th>Topic</Th>
                    <Th align="right">Attempts</Th>
                    <Th align="right">p-value</Th>
                    <Th align="right">Disc.</Th>
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
                      <td className="py-3 px-4 sm:px-5 text-[#888888] truncate max-w-[220px]">
                        {it.topic}
                      </td>
                      <td className="py-3 px-4 sm:px-5 text-right tabular-nums text-[#888888]">
                        {it.attempts}
                      </td>
                      <td className="py-3 px-4 sm:px-5 text-right">
                        <span className="font-display text-[15px] font-semibold tabular-nums text-[#F0F0F0]">
                          {it.pValue.toFixed(2)}
                        </span>
                      </td>
                      <td className="py-3 px-4 sm:px-5 text-right">
                        <span className="font-display text-[15px] font-semibold tabular-nums text-[#F0F0F0]">
                          {it.discrimination === null
                            ? "—"
                            : it.discrimination.toFixed(2)}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {items.length === 0 && !error && (
              <p className="text-[13px] text-[#555555] italic text-center py-10">
                No attempts in the database yet.
              </p>
            )}
          </div>
        </section>
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

function flagDisplay(flag: ItemStatFlag) {
  switch (flag) {
    case "broken":
      return {
        label: "Broken",
        color: "#FF4444",
        bg: "rgba(255,68,68,0.08)",
        border: "rgba(255,68,68,0.25)",
        icon: AlertTriangle,
      }
    case "hard":
      return {
        label: "Hard",
        color: "#FF9933",
        bg: "rgba(255,153,51,0.08)",
        border: "rgba(255,153,51,0.25)",
        icon: null,
      }
    case "easy":
      return {
        label: "Easy",
        color: "#C9A84C",
        bg: "rgba(201,168,76,0.08)",
        border: "rgba(201,168,76,0.25)",
        icon: null,
      }
    case "ok":
      return {
        label: "OK",
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
