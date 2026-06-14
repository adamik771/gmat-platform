import Link from "next/link"
import {
  ArrowRight,
  BookOpen,
  Calendar,
  Clock,
  Coffee,
  Compass,
  Layers,
  RotateCcw,
  Sparkles,
  Target,
  Timer,
  TrendingUp,
  Zap,
} from "lucide-react"
import {
  type ActionKind,
  type NextBestActionResult,
  type NextBestAction,
} from "@/lib/next-best-action"

const EYEBROW = "text-[10px] font-semibold uppercase tracking-[0.22em]"

const KIND_META: Record<ActionKind, { icon: typeof Sparkles; color: string; bg: string; label: string }> = {
  "take-diagnostic": {
    icon: Compass,
    color: "#C9A84C",
    bg: "rgba(201,168,76,0.12)",
    label: "Baseline",
  },
  "review-backlog": {
    icon: RotateCcw,
    color: "#B088FF",
    bg: "rgba(176,136,255,0.12)",
    label: "Spaced review",
  },
  "read-chapter": {
    icon: BookOpen,
    color: "#5FA8FF",
    bg: "rgba(95,168,255,0.12)",
    label: "Read chapter",
  },
  "drill-trap": {
    icon: Layers,
    color: "#FF4444",
    bg: "rgba(255,68,68,0.12)",
    label: "Trap drill",
  },
  "drill-subskill": {
    icon: Target,
    color: "#3ECF8E",
    bg: "rgba(62,207,142,0.12)",
    label: "Sub-skill drill",
  },
  "timed-practice": {
    icon: Timer,
    color: "#FF9933",
    bg: "rgba(255,153,51,0.12)",
    label: "Timed practice",
  },
  "mock-prep": {
    icon: TrendingUp,
    color: "#FF9933",
    bg: "rgba(255,153,51,0.12)",
    label: "Mock prep",
  },
  "take-mock": {
    icon: Timer,
    color: "#FF9933",
    bg: "rgba(255,153,51,0.12)",
    label: "Full mock",
  },
  "continue-plan": {
    icon: Calendar,
    color: "#C9A84C",
    bg: "rgba(201,168,76,0.10)",
    label: "Continue plan",
  },
  rest: {
    icon: Coffee,
    color: "#888888",
    bg: "rgba(136,136,136,0.10)",
    label: "Rest",
  },
}

/**
 * Top-of-page panel rendering the single highest-priority next move
 * plus a compact alternates row. Server component — no client state.
 *
 * Layout:
 *   - Hero card: primary action with rationale + "Start now" button +
 *     evidence chips + estimated minutes
 *   - Alternates row: 3 small cards in case the primary doesn't fit
 *     the student's current time/energy budget
 */
export default function NextBestActionPanel({
  result,
  /** Override the outer section className. Defaults to the analytics-page
   *  wrapper; dashboards or other surfaces can pass their own to drop the
   *  max-width / margin and inherit the parent's container. */
  className = "max-w-6xl mx-auto mb-12",
}: {
  result: NextBestActionResult
  className?: string
}) {
  const { primary, alternates } = result

  return (
    <section className={className}>
      <div className="flex items-center gap-3 mb-4">
        <Zap className="w-3.5 h-3.5" style={{ color: "#C9A84C" }} />
        <p className={EYEBROW} style={{ color: "#C9A84C" }}>
          Next best action
        </p>
      </div>

      <PrimaryCard action={primary} />

      {alternates.length > 0 && (
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
          {alternates.map((a, i) => (
            <AlternateCard key={`${a.kind}-${i}`} action={a} />
          ))}
        </div>
      )}
    </section>
  )
}

function PrimaryCard({ action }: { action: NextBestAction }) {
  const meta = KIND_META[action.kind]
  const Icon = meta.icon
  // "Rest" is the one action with no task to start — the CTA reflects that.
  const ctaLabel = action.kind === "rest" ? "Review your progress" : "Start now"

  return (
    <Link
      href={action.href}
      className="group block relative p-7 sm:p-8 rounded-2xl border overflow-hidden transition-all duration-300 hover:-translate-y-0.5"
      style={{
        borderColor: `${meta.color}30`,
        backgroundColor: "#0D0D0D",
        boxShadow:
          "0 0 50px rgba(201,168,76,0.06), inset 0 1px 0 rgba(255,255,255,0.04)",
      }}
    >
      <div
        className="absolute top-0 right-0 w-72 h-72 pointer-events-none"
        style={{
          background: `radial-gradient(circle at 100% 0%, ${meta.color}1A 0%, transparent 60%)`,
        }}
        aria-hidden
      />
      <div className="relative flex items-start gap-5">
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
          style={{
            backgroundColor: meta.bg,
            border: `1px solid ${meta.color}40`,
          }}
        >
          <Icon className="w-5 h-5" style={{ color: meta.color }} />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-2 flex-wrap">
            <span
              className="px-2 py-0.5 rounded text-[10px] uppercase tracking-[0.20em] font-semibold"
              style={{ backgroundColor: meta.bg, color: meta.color }}
            >
              {meta.label}
            </span>
            {action.estimatedMinutes > 0 && (
              <span className="inline-flex items-center gap-1 text-[11px] text-[#888888]">
                <Clock className="w-3 h-3" />
                ~{action.estimatedMinutes} min
              </span>
            )}
          </div>
          <h2 className="font-display text-2xl md:text-3xl font-semibold tracking-[-0.02em] text-[#F0F0F0] leading-[1.1] mb-3">
            {action.title}
          </h2>
          <p className="text-[14px] text-[#C0C0C0] leading-relaxed mb-5 max-w-2xl">
            {action.rationale}
          </p>
          <div className="flex items-center gap-3 flex-wrap">
            <span
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-[13px] font-semibold tracking-tight transition-all group-hover:scale-[1.03]"
              style={{ backgroundColor: meta.color, color: "#0A0A0A" }}
            >
              {ctaLabel}
              <ArrowRight className="w-3.5 h-3.5" />
            </span>
            {action.evidence.length > 0 && (
              <div className="flex items-center gap-1.5 flex-wrap">
                {action.evidence.slice(0, 4).map((ev) => (
                  <span
                    key={ev}
                    className="inline-flex items-center text-[10px] uppercase tracking-[0.16em] font-medium px-2 py-0.5 rounded"
                    style={{ color: "#888888", backgroundColor: "rgba(255,255,255,0.04)" }}
                  >
                    {ev}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </Link>
  )
}

function AlternateCard({ action }: { action: NextBestAction }) {
  const meta = KIND_META[action.kind]
  const Icon = meta.icon
  return (
    <Link
      href={action.href}
      className="group flex items-start gap-3 p-4 rounded-xl border border-white/[0.06] bg-[#0D0D0D] transition-all duration-300 hover:border-white/[0.12]"
      style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.03)" }}
    >
      <div
        className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
        style={{
          backgroundColor: meta.bg,
          border: `1px solid ${meta.color}30`,
        }}
      >
        <Icon className="w-4 h-4" style={{ color: meta.color }} />
      </div>
      <div className="flex-1 min-w-0">
        <p
          className="text-[10px] uppercase tracking-[0.18em] font-semibold mb-1"
          style={{ color: meta.color }}
        >
          {meta.label}
        </p>
        <p className="text-[13px] font-semibold text-[#F0F0F0] tracking-tight truncate">
          {action.title}
        </p>
        <p className="text-[11px] text-[#888888] mt-1 truncate">
          {action.estimatedMinutes > 0
            ? `~${action.estimatedMinutes} min`
            : "No time needed"}
        </p>
      </div>
      <ArrowRight
        className="w-3.5 h-3.5 flex-shrink-0 mt-1 text-[#555555] group-hover:text-[#C9A84C] group-hover:translate-x-0.5 transition-all"
        aria-hidden
      />
    </Link>
  )
}
