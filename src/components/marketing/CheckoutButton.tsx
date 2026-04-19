"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Loader2 } from "lucide-react"
import { cn } from "@/lib/utils"

interface Props {
  planId: "self_study" | "self_study_plus" | "coaching" | "intensive"
  label: string
  highlighted: boolean
  className?: string
}

/**
 * The "Buy" CTA on each tier in the pricing card grid. On click:
 *   1. POST to /api/checkout with the plan id.
 *   2. If 401, the user isn't logged in — bounce to /signup?redirect=/pricing
 *      so they come back here after completing signup.
 *   3. If 200, navigate the browser to the Stripe-hosted checkout URL.
 *   4. If 503 (Stripe not configured) or 500, surface the error inline.
 */
export default function CheckoutButton({
  planId,
  label,
  highlighted,
  className,
}: Props) {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()

  async function buy() {
    setError(null)
    setLoading(true)
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ planId }),
      })

      if (res.status === 401) {
        router.push(`/signup?redirect=${encodeURIComponent("/pricing")}`)
        return
      }

      const body = (await res.json().catch(() => ({}))) as {
        url?: string
        error?: string
      }

      if (!res.ok || !body.url) {
        throw new Error(body.error || `Checkout failed (${res.status})`)
      }

      // Hard navigation — Stripe's hosted checkout is on a different origin.
      window.location.href = body.url
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong")
      setLoading(false)
    }
  }

  return (
    <div className="mb-6">
      <button
        type="button"
        onClick={buy}
        disabled={loading}
        className={cn(
          "w-full flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 hover:opacity-90 disabled:opacity-60 disabled:cursor-not-allowed",
          highlighted
            ? "text-[#0A0A0A]"
            : "border border-white/[0.12] text-[#F0F0F0] hover:bg-white/5",
          className
        )}
        style={highlighted ? { backgroundColor: "#C9A84C" } : {}}
      >
        {loading && <Loader2 className="w-3.5 h-3.5 animate-spin" />}
        {label}
      </button>
      {error && (
        <p
          className="text-[11px] mt-2 leading-relaxed"
          style={{ color: "#FF4444" }}
        >
          {error}
        </p>
      )}
    </div>
  )
}
