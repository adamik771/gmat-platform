"use client"

import { Suspense, useState } from "react"
import { useSearchParams } from "next/navigation"
import Link from "next/link"

function UnsubscribeInner() {
  const token = useSearchParams().get("token")
  const [state, setState] = useState<"idle" | "working" | "done" | "error">(
    "idle"
  )

  async function confirm() {
    if (!token) {
      setState("error")
      return
    }
    setState("working")
    try {
      const res = await fetch(
        `/api/email/unsubscribe?token=${encodeURIComponent(token)}`,
        { method: "POST" }
      )
      setState(res.ok ? "done" : "error")
    } catch {
      setState("error")
    }
  }

  return (
    <div className="max-w-lg mx-auto px-4 py-24 text-center">
      <p className="text-[10px] uppercase tracking-[0.22em] font-semibold mb-4" style={{ color: "#C9A84C" }}>
        Email preferences
      </p>

      {state === "done" ? (
        <>
          <h1 className="font-display text-3xl sm:text-4xl font-semibold text-[#F0F0F0] tracking-[-0.02em] mb-4">
            You&apos;re unsubscribed.
          </h1>
          <p className="text-[15px] text-[#C0C0C0] leading-relaxed mb-8">
            You won&apos;t get marketing or nurture emails from us anymore. You
            may still receive essential account emails, like a password reset you
            request.
          </p>
          <Link href="/" className="text-sm hover:underline" style={{ color: "#C9A84C" }}>
            Back to home
          </Link>
        </>
      ) : !token ? (
        <>
          <h1 className="font-display text-3xl sm:text-4xl font-semibold text-[#F0F0F0] tracking-[-0.02em] mb-4">
            That link looks incomplete.
          </h1>
          <p className="text-[15px] text-[#C0C0C0] leading-relaxed">
            Use the unsubscribe link from the bottom of one of our emails, or
            reply to any email and ask to be removed.
          </p>
        </>
      ) : (
        <>
          <h1 className="font-display text-3xl sm:text-4xl font-semibold text-[#F0F0F0] tracking-[-0.02em] mb-4">
            Unsubscribe?
          </h1>
          <p className="text-[15px] text-[#C0C0C0] leading-relaxed mb-8">
            Confirm and we&apos;ll stop sending you marketing and nurture emails.
            Essential account emails (like a password reset) still work.
          </p>
          <button
            onClick={confirm}
            disabled={state === "working"}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-all disabled:opacity-50"
            style={{ backgroundColor: "#C9A84C", color: "#0A0A0A" }}
          >
            {state === "working" ? "Working…" : "Confirm unsubscribe"}
          </button>
          {state === "error" && (
            <p className="text-[13px] mt-4" style={{ color: "#FF4444" }}>
              Something went wrong. Try again, or reply to any email and ask to
              be removed.
            </p>
          )}
        </>
      )}
    </div>
  )
}

export default function UnsubscribePage() {
  return (
    <Suspense fallback={null}>
      <UnsubscribeInner />
    </Suspense>
  )
}
