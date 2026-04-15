import Link from "next/link"
import type { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface EmptyStateProps {
  icon?: LucideIcon
  title: string
  description?: string
  /** Optional primary CTA. Rendered as a Next.js <Link>. */
  ctaHref?: string
  ctaLabel?: string
  /** Tweaks the outer container. */
  className?: string
  /** Tweaks vertical padding — useful for fitting inside charts (tight) vs full cards (default). */
  size?: "sm" | "md"
}

/**
 * Neutral "no data yet" card used across the dashboard and practice page to
 * stand in for widgets whose data is not yet tracked. Matches the dark+gold
 * design system and keeps the surrounding layout intact.
 */
export default function EmptyState({
  icon: Icon,
  title,
  description,
  ctaHref,
  ctaLabel,
  className,
  size = "md",
}: EmptyStateProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center text-center rounded-xl border border-dashed border-white/[0.08] bg-[#0D0D0D]",
        size === "sm" ? "px-4 py-6" : "px-6 py-10",
        className
      )}
    >
      {Icon && (
        <div
          className="w-10 h-10 rounded-lg flex items-center justify-center mb-3"
          style={{ backgroundColor: "rgba(201,168,76,0.08)" }}
        >
          <Icon className="w-5 h-5" style={{ color: "#C9A84C" }} />
        </div>
      )}
      <p className="text-sm font-semibold text-[#D8D8D8]">{title}</p>
      {description && (
        <p className="text-xs text-[#555555] mt-1.5 max-w-xs leading-relaxed">
          {description}
        </p>
      )}
      {ctaHref && ctaLabel && (
        <Link
          href={ctaHref}
          className="mt-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all hover:opacity-90"
          style={{ backgroundColor: "#C9A84C", color: "#0A0A0A" }}
        >
          {ctaLabel}
        </Link>
      )}
    </div>
  )
}
