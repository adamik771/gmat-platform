"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { trackEvent } from "@/lib/analytics"

/**
 * Interim buy CTA while no live payment processor exists (PAYWALL_ENABLED
 * off). Looks exactly like the real checkout button — the pricing page keeps
 * its purchase framing — and only ON CLICK reveals the interim story: checkout
 * isn't open yet, the platform is free meanwhile, reserve the founding rate.
 *
 * The reveal is deliberately click-gated (owner decision): announcing "it's
 * free" on every card undercuts purchase intent for browsers who never meant
 * to buy; the person who clicked has already shown intent worth capturing.
 * Fires checkout_initiated with placement "pre-checkout" so real purchase
 * intent during the processor gap is measurable per plan.
 */
export default function ReserveInterceptButton({
  planId,
  label,
  highlighted,
}: {
  planId: string
  label: string
  highlighted: boolean
}) {
  const [open, setOpen] = useState(false)

  const reveal = () => {
    if (!open) {
      trackEvent("checkout_initiated", { plan: planId, placement: "pre-checkout" })
      setOpen(true)
    }
  }

  return (
    <div className="mb-6">
      <button
        type="button"
        onClick={reveal}
        className={cn(
          "w-full flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 hover:opacity-90",
          highlighted
            ? "text-[#0A0A0A]"
            : "border border-white/[0.12] text-[#F0F0F0] hover:bg-white/5"
        )}
        style={highlighted ? { backgroundColor: "#C9A84C" } : {}}
      >
        {label}
      </button>
      {open && (
        <div
          className="mt-3 p-3.5 rounded-xl border text-left"
          style={{
            borderColor: "rgba(201,168,76,0.25)",
            backgroundColor: "rgba(201,168,76,0.05)",
          }}
        >
          <p className="text-[12px] text-[#C0C0C0] leading-relaxed">
            Paid checkout hasn&apos;t opened yet. Until then the full platform
            is free to use, and you can lock a founding-member discount on
            this exact plan — we&apos;ll email you your code when checkout
            opens.
          </p>
          <Link
            href="#founding"
            className="inline-flex items-center gap-1.5 text-[12px] font-semibold mt-2.5 hover:underline"
            style={{ color: "#C9A84C" }}
          >
            Reserve my founding rate
            <ArrowRight className="w-3 h-3" />
          </Link>
        </div>
      )}
    </div>
  )
}
