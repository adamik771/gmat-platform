"use client"

import { useState } from "react"
import Link from "next/link"
import { Check, Copy, Gift } from "lucide-react"
import { trackEvent } from "@/lib/analytics"

/**
 * InviteFriend — the in-app, product-led referral prompt. Shown to logged-in
 * users at natural moments (dashboard, mock report) so the loop runs with no
 * manual work from Adam: one click copies a ready, referral-tagged message the
 * user can send to a friend. Firing `referral_click` (channel=in_app) means the
 * resulting friend visit carries utm_source=referral via first-touch
 * attribution, so referral signups are measurable. /refer is the fuller,
 * personalizable version.
 */
export default function InviteFriend({
  surface = "dashboard",
}: {
  surface?: string
}) {
  const [copied, setCopied] = useState(false)

  const baseUrl = (
    process.env.NEXT_PUBLIC_SITE_URL || "https://www.zakariangmat.com"
  ).replace(/\/$/, "")
  const link = `${baseUrl}/?utm_source=referral&utm_medium=in_app`
  const message = `I've been using Zakarian GMAT to prep for the GMAT — it's a structured system built by someone who went from 565 to 735, and every new account starts with a free 7-day trial. Take a look: ${link}`

  async function copy() {
    try {
      await navigator.clipboard.writeText(message)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      // Clipboard blocked — the /refer page is the fallback path.
    }
    trackEvent("referral_click", { channel: "in_app", surface })
  }

  return (
    <div className="p-5 sm:p-6 rounded-2xl border border-white/[0.08] bg-[#0D0D0D]">
      <div className="flex items-start gap-3">
        <div
          className="flex items-center justify-center w-9 h-9 rounded-full flex-shrink-0"
          style={{ backgroundColor: "rgba(201,168,76,0.1)" }}
        >
          <Gift className="w-4 h-4" style={{ color: "#C9A84C" }} />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-[15px] font-semibold text-[#F0F0F0] mb-1">
            Know someone else prepping for the GMAT?
          </p>
          <p className="text-[13px] text-[#888888] leading-relaxed mb-4">
            Send them the platform — free 7-day trial, no card. They get the
            founding discount when paid plans launch, and you get a $50 reward
            when they join as a founding member.
          </p>
          <div className="flex flex-col sm:flex-row gap-2.5">
            <button
              type="button"
              onClick={copy}
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-[13px] font-semibold transition-all hover:opacity-90 hover:scale-[1.01]"
              style={{ backgroundColor: "#C9A84C", color: "#0A0A0A" }}
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5" />
                  Copied — now paste it to a friend
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  Copy invite message
                </>
              )}
            </button>
            <Link
              href="/refer"
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-[13px] font-semibold border border-white/[0.12] text-[#F0F0F0] hover:bg-white/5 transition-all"
            >
              More ways to share
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
