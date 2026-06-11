import Link from "next/link"
import { Lock, ArrowRight, Check } from "lucide-react"

/**
 * Shown in place of a paid surface when the paywall is on and the account is
 * free. Server-renderable (no client state). Use it as the early return of a
 * gated page:
 *
 *   if (PAYWALL_ENABLED && !canAccess(tier, "analytics")) {
 *     return <UpgradeGate feature="Analytics" blurb="..." perks={[...]} />
 *   }
 */
export default function UpgradeGate({
  feature,
  blurb,
  perks = [],
}: {
  feature: string
  blurb?: string
  perks?: string[]
}) {
  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-16">
      <div
        className="relative overflow-hidden rounded-2xl border p-8 sm:p-10 text-center"
        style={{
          borderColor: "rgba(201,168,76,0.25)",
          backgroundColor: "#0D0D0D",
        }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 55% at 50% -10%, rgba(201,168,76,0.12) 0%, transparent 60%)",
          }}
          aria-hidden
        />
        <div className="relative">
          <span
            className="inline-flex items-center justify-center w-12 h-12 rounded-xl mb-5"
            style={{ backgroundColor: "rgba(201,168,76,0.12)" }}
          >
            <Lock className="w-5 h-5" style={{ color: "#C9A84C" }} />
          </span>
          <p className="text-[10px] font-semibold uppercase tracking-[0.22em] mb-3" style={{ color: "#C9A84C" }}>
            Premium feature
          </p>
          <h1 className="font-display text-3xl sm:text-4xl font-semibold text-[#F0F0F0] tracking-[-0.02em] leading-[1.08]">
            {feature} is part of a{" "}
            <span className="font-display-italic" style={{ color: "#C9A84C" }}>
              paid plan.
            </span>
          </h1>
          {blurb && (
            <p className="mt-4 text-[15px] text-[#C0C0C0] leading-[1.65] max-w-xl mx-auto">
              {blurb}
            </p>
          )}

          {perks.length > 0 && (
            <ul className="mt-6 inline-flex flex-col gap-2 text-left">
              {perks.map((p) => (
                <li key={p} className="flex items-start gap-2.5 text-[14px] text-[#C0C0C0]">
                  <Check className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: "#3ECF8E" }} />
                  {p}
                </li>
              ))}
            </ul>
          )}

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/pricing"
              className="group inline-flex items-center gap-2 px-5 py-3 rounded-lg text-[13px] font-semibold transition-transform duration-200 hover:-translate-y-0.5"
              style={{ backgroundColor: "#C9A84C", color: "#0A0A0A" }}
            >
              See plans
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="/dashboard"
              className="inline-flex items-center gap-2 px-4 py-3 rounded-lg text-[13px] font-semibold border transition-colors"
              style={{ borderColor: "rgba(255,255,255,0.10)", color: "#C0C0C0" }}
            >
              Back to dashboard
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
