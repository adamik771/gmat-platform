import type { Metadata } from "next"
import Link from "next/link"
import { Check } from "lucide-react"
import { createSupabaseServer } from "@/lib/supabase/server"
import PricingCard from "@/components/marketing/PricingCard"
import { tiers } from "@/lib/plans"
import {
  getAccessForUser,
  trialDaysLeft,
  trialStartFor,
} from "@/lib/entitlements"

export const metadata: Metadata = {
  title: "Choose your plan",
  // The gate screen — never index it.
  robots: { index: false, follow: false },
}

/**
 * Post-trial paywall. The proxy redirects a signed-in user here once their
 * free trial has ended with no active plan. It ONLY gates access — the
 * account and all its data are untouched; buying a plan restores full access
 * on the same account. Trialing users can reach this early to lock in a plan.
 */
export default async function UpgradePage() {
  const supabase = await createSupabaseServer()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  const now = new Date()
  const access = user ? await getAccessForUser(supabase, user, now) : "none"
  const daysLeft = user ? trialDaysLeft(trialStartFor(user), now) : 0
  const stillTrialing = access === "trialing"

  // "none" = no trial ever started (rare — pre-backfill/pre-epoch accounts);
  // don't tell that user a trial "ended" that never began.
  const heading = stillTrialing
    ? `You're on your free trial — ${daysLeft} day${daysLeft === 1 ? "" : "s"} left`
    : access === "none"
      ? "Choose a plan to unlock the full platform"
      : "Your free trial has ended"
  const sub = stillTrialing
    ? "Lock in full access whenever you're ready — or keep going until your trial runs out."
    : "Choose a plan to pick up right where you left off. Everything you've done is saved."

  return (
    <div style={{ backgroundColor: "#0A0A0A" }} className="min-h-screen">
      <section className="relative pt-28 pb-16 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 90% 50% at 50% -5%, rgba(201,168,76,0.15) 0%, transparent 60%)",
          }}
          aria-hidden
        />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p
            className="text-[10px] font-semibold uppercase tracking-[0.22em] mb-4"
            style={{ color: "#C9A84C" }}
          >
            {stillTrialing ? "Free trial" : "Continue your prep"}
          </p>
          <h1 className="font-display text-3xl sm:text-5xl font-semibold text-[#F0F0F0] tracking-[-0.02em] leading-[1.05] mb-5">
            {heading}
          </h1>
          <p className="text-[15px] sm:text-[17px] text-[#888888] leading-relaxed max-w-xl mx-auto">
            {sub}
          </p>
          <p className="inline-flex items-center gap-2 text-[13px] text-[#C0C0C0] mt-6 px-4 py-2 rounded-full border border-white/[0.08] bg-[#0D0D0D]">
            <Check className="w-4 h-4 flex-shrink-0" style={{ color: "#3ECF8E" }} />
            Same account, same progress — your chapters, error log, and mocks are
            all still here.
          </p>
        </div>
      </section>

      <section className="pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6">
            {tiers.map((tier) => (
              <PricingCard key={tier.id} tier={tier} checkoutCancelPath="/upgrade" />
            ))}
          </div>
          <p className="text-center text-[12px] text-[#555555] mt-10">
            Payments are handled securely by Stripe. Questions?{" "}
            <Link href="/contact" className="underline hover:text-[#888888]">
              Get in touch
            </Link>
            .
          </p>
        </div>
      </section>
    </div>
  )
}
