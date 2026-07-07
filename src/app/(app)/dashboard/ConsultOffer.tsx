"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight, Phone, X } from "lucide-react"
import { createSupabaseBrowser } from "@/lib/supabase/browser"

/**
 * Dismissible dashboard strip offering Adam's free 30-minute consultation
 * call. Lives in-app on purpose: it reaches every logged-in user regardless of
 * email marketing consent — opting out of marketing email is not opting out of
 * a notice inside the product they signed up for, so this is the compliant way
 * to surface the offer to everyone.
 *
 * Dismissal persists as a top-level user_metadata scalar
 * (consult_offer_dismissed_at), mirroring FirstRunGuide's guide_dismissed_at —
 * a nested write via auth.updateUser would replace the whole object and clobber
 * siblings.
 */
export default function ConsultOffer() {
  const [hidden, setHidden] = useState(false)
  const [dismissing, setDismissing] = useState(false)
  if (hidden) return null

  const dismiss = async () => {
    setDismissing(true)
    try {
      const supabase = createSupabaseBrowser()
      await supabase.auth.updateUser({
        data: { consult_offer_dismissed_at: new Date().toISOString() },
      })
    } catch {
      // Non-fatal: it reappears next visit at worst.
    }
    setHidden(true)
  }

  return (
    <section
      className="flex items-center gap-3 sm:gap-4 rounded-2xl border px-4 sm:px-5 py-3.5"
      style={{
        borderColor: "rgba(201,168,76,0.28)",
        backgroundColor: "rgba(201,168,76,0.05)",
      }}
    >
      <span
        className="hidden sm:inline-flex items-center justify-center w-9 h-9 rounded-lg flex-shrink-0"
        style={{ backgroundColor: "rgba(201,168,76,0.12)" }}
      >
        <Phone className="w-4 h-4" style={{ color: "#C9A84C" }} />
      </span>
      <div className="flex-1 min-w-0">
        <p className="text-[14px] font-semibold text-[#F0F0F0] tracking-tight">
          Free 30-minute call with me about your prep
        </p>
        <p className="text-[12px] text-[#888888] leading-relaxed mt-0.5">
          No cost, no pitch — your plan, a plateau, timing, retakes, anything. I
          went 565 to 735, and I&apos;ll give you the most honest read I can.
        </p>
      </div>
      <Link
        href="/contact"
        className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-[12px] font-semibold flex-shrink-0 transition-transform duration-200 hover:-translate-y-0.5"
        style={{ backgroundColor: "#C9A84C", color: "#0A0A0A" }}
      >
        Grab a slot
        <ArrowRight className="w-3.5 h-3.5" />
      </Link>
      <button
        type="button"
        onClick={dismiss}
        disabled={dismissing}
        aria-label="Dismiss"
        className="flex-shrink-0 p-1 rounded-md text-[#888888] hover:text-[#C0C0C0] transition-colors disabled:opacity-50"
      >
        <X className="w-4 h-4" />
      </button>
    </section>
  )
}
