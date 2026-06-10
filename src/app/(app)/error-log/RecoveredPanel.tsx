import { Check, TrendingUp } from "lucide-react"
import type { Section } from "@/types"

/**
 * RecoveredPanel — the "you've already fixed these" surface for the error log.
 *
 * The rest of the page is deficit-framed: it ranks what's still broken and
 * tells the student what to fix next. That framing is correct for action,
 * but it makes the log feel like a ledger of failures. This panel reframes
 * the same data toward progress: questions the student once missed and now
 * answers correctly on a later attempt.
 *
 * A "recovered" question is one whose most recent attempt is correct despite
 * an earlier logged miss — i.e. the retrieval loop closed. Surfacing the count
 * (and the topics it spans) makes mistakes feel like raw material for mastery
 * rather than a running tally of what's wrong. Calm, green-accented, and
 * shown above "What to fix next" so the student reads the win first.
 *
 * Pure presentational — renders null when nothing has been recovered yet.
 */

export interface RecoveredTopic {
  topic: string
  section: Section
  count: number
}

export default function RecoveredPanel({
  count,
  topics,
}: {
  count: number
  topics: RecoveredTopic[]
}) {
  if (count <= 0) return null
  const top = topics.slice(0, 8)

  return (
    <section
      className="relative overflow-hidden rounded-2xl border px-6 py-8 sm:px-8 sm:py-9"
      style={{
        borderColor: "rgba(62,207,142,0.18)",
        backgroundColor: "rgba(62,207,142,0.03)",
      }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 100% -20%, rgba(62,207,142,0.10) 0%, transparent 60%)",
        }}
        aria-hidden
      />
      <div className="relative">
        <div className="flex items-center gap-3 mb-4">
          <TrendingUp className="w-4 h-4" style={{ color: "#3ECF8E" }} />
          <p
            className="text-[10px] font-semibold uppercase tracking-[0.22em]"
            style={{ color: "#3ECF8E" }}
          >
            Turned around
          </p>
          <div
            className="h-px w-12"
            style={{
              background:
                "linear-gradient(to right, rgba(62,207,142,0.4), transparent)",
            }}
            aria-hidden
          />
        </div>

        <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-[-0.02em] text-[#F0F0F0] leading-[1.05] mb-3">
          <span className="tabular-nums">{count}</span> mistake
          {count === 1 ? "" : "s"},{" "}
          <span className="font-display-italic" style={{ color: "#3ECF8E" }}>
            now mastered.
          </span>
        </h2>

        <p className="text-[14px] text-[#C0C0C0] max-w-2xl leading-relaxed">
          Questions you once missed and now answer correctly on a later attempt.
          This is the loop closing — a logged mistake converted into a clean
          re-solve is exactly where durable learning happens.
        </p>

        {top.length > 0 && (
          <div className="mt-5 flex flex-wrap gap-2">
            {top.map((t) => (
              <span
                key={`${t.section}-${t.topic}`}
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[12px]"
                style={{ backgroundColor: "rgba(62,207,142,0.08)" }}
              >
                <Check className="w-3 h-3" style={{ color: "#3ECF8E" }} />
                <span className="text-[#F0F0F0] tracking-tight">{t.topic}</span>
                <span className="tabular-nums" style={{ color: "#3ECF8E" }}>
                  {t.count}
                </span>
              </span>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
