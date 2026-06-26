"use client"

import Link from "next/link"
import { MessageSquare } from "lucide-react"
import { trackEvent } from "@/lib/analytics"

/**
 * Floating feedback affordance for the public marketing site. The in-app
 * FeedbackWidget posts to an auth-gated route, so public visitors route to
 * /contact instead. Fires `feedback_click` so we can see how many visitors
 * reach for it.
 */
export default function MarketingFeedbackButton() {
  return (
    <Link
      href="/contact?topic=feedback"
      onClick={() => trackEvent("feedback_click", { surface: "marketing" })}
      className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-[12px] font-semibold tracking-tight transition-all hover:scale-[1.04]"
      style={{
        backgroundColor: "#0D0D0D",
        color: "#C9A84C",
        border: "1px solid rgba(201,168,76,0.3)",
        boxShadow: "0 8px 24px rgba(0,0,0,0.4)",
      }}
      aria-label="Send feedback"
    >
      <MessageSquare className="w-3.5 h-3.5" />
      Feedback
    </Link>
  )
}
