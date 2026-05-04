import { Timer } from "lucide-react"
import {
  SECTION_TARGET_SECONDS,
  formatPacingElapsed,
  pacingStatus,
} from "@/lib/pacing"
import type { Section } from "@/types"

/**
 * Live per-question pacing indicator. Shows elapsed time on the current
 * question plus a "fast / on pace / slow / long" label, coloured against
 * the section's target. Surfaces during practice + mock so the student
 * builds test-day pacing intuition rather than discovering it in the
 * mock report.
 */
export default function PacingBadge({
  elapsedMs,
  section,
  compact = false,
}: {
  elapsedMs: number
  section: Section
  /** Compact mode drops the word label, useful in tight headers. */
  compact?: boolean
}) {
  const status = pacingStatus(elapsedMs, section)
  const elapsed = formatPacingElapsed(elapsedMs)
  const targetSec = SECTION_TARGET_SECONDS[section]
  return (
    <span
      className="inline-flex items-center gap-1.5 px-2 py-1 rounded text-[11px] font-semibold tabular-nums"
      style={{ color: status.color, backgroundColor: status.bg }}
      title={`Target: ~${Math.round(targetSec / 60 * 10) / 10} min · you're ${status.label}`}
      aria-label={`Question time ${elapsed}, ${status.label}`}
    >
      <Timer className="w-3 h-3" />
      {elapsed}
      {!compact && (
        <span className="font-normal opacity-80">· {status.label}</span>
      )}
    </span>
  )
}
