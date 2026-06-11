import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface BlogInlineCTAProps {
  /** Optional override for the headline. Defaults to the sample-chapter pitch. */
  headline?: string
  /** Optional override for the CTA label. */
  ctaLabel?: string
  /** Optional override for the CTA destination. Defaults to /sample-chapter. */
  href?: string
}

/**
 * Mid-post CTA inserted into long-form blog articles. Sits in the
 * reading flow between H2 sections and points engaged readers at the
 * platform's strongest top-of-funnel asset (the free sample chapter) so
 * dropoff before the end-of-article CTA still has a path to convert.
 */
export default function BlogInlineCTA({
  headline = "Want to see how this course actually teaches?",
  ctaLabel = "Read the free sample chapter",
  href = "/sample-chapter",
}: BlogInlineCTAProps) {
  return (
    <aside
      className="not-prose my-10 p-6 sm:p-7 rounded-2xl border bg-[#0D0D0D]"
      style={{ borderColor: "rgba(201,168,76,0.22)" }}
    >
      <p
        className="text-[10px] font-semibold uppercase tracking-[0.22em] mb-2"
        style={{ color: "#C9A84C" }}
      >
        Free, no signup
      </p>
      <p className="font-display text-[18px] sm:text-[20px] font-semibold text-[#F0F0F0] tracking-tight leading-snug mb-4 max-w-md">
        {headline}
      </p>
      <p className="text-[13px] text-[#888888] leading-relaxed mb-5 max-w-md">
        Two full readings from the Verbal Foundations chapter — the same
        material paying students get, with Quant and Data Insights samples
        one click away.
      </p>
      <Link
        href={href}
        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-[13px] font-semibold transition-all duration-200 hover:opacity-90 hover:scale-[1.02]"
        style={{ backgroundColor: "#C9A84C", color: "#0A0A0A" }}
      >
        {ctaLabel}
        <ArrowRight className="w-3.5 h-3.5" />
      </Link>
    </aside>
  )
}
