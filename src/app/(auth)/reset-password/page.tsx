"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight, ArrowLeft, Loader2, Mail, AlertCircle, CheckCircle2 } from "lucide-react"
import { createSupabaseBrowser } from "@/lib/supabase/browser"

export default function ResetPasswordPage() {
  const [email, setEmail] = useState("")
  const [loading, setLoading] = useState(false)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState("")

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError("")

    const supabase = createSupabaseBrowser()
    const { error: authError } = await supabase.auth.resetPasswordForEmail(
      email,
      { redirectTo: `${window.location.origin}/reset-password/update` }
    )

    if (authError) {
      setError(authError.message)
      setLoading(false)
      return
    }

    setSent(true)
    setLoading(false)
  }

  if (sent) {
    return (
      <div className="w-full max-w-md" role="status" aria-live="polite">
        <div className="text-center mb-8">
          <p
            className="inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] mb-4"
            style={{ color: "#C9A84C" }}
          >
            <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0" />
            Check your inbox
          </p>
          <h1 className="font-display text-3xl sm:text-4xl font-semibold text-[#F0F0F0] tracking-[-0.02em] leading-[1.05] mb-3">
            Link{" "}
            <span className="font-display-italic" style={{ color: "#3ECF8E" }}>
              sent.
            </span>
          </h1>
          <p className="text-[15px] text-[#C0C0C0] leading-relaxed">
            We emailed a reset link to{" "}
            <span className="text-[#F0F0F0] font-medium">{email}</span>. Click
            through to set a new password.
          </p>
        </div>

        <div
          className="p-7 sm:p-8 rounded-2xl border border-white/[0.08] bg-[#0D0D0D]"
          style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.04)" }}
        >
          <div className="flex items-start gap-3.5">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
              style={{
                backgroundColor: "rgba(62,207,142,0.08)",
                border: "1px solid rgba(62,207,142,0.2)",
              }}
            >
              <Mail className="w-4 h-4" style={{ color: "#3ECF8E" }} />
            </div>
            <div className="flex-1">
              <p className="text-[13px] text-[#C0C0C0] leading-relaxed mb-2">
                Didn&apos;t see the email? Check spam, or wait a minute and try
                again. The link expires in an hour.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSent(false)
                  setEmail("")
                }}
                className="text-[13px] font-medium hover:opacity-80 transition-opacity"
                style={{ color: "#C9A84C" }}
              >
                Use a different email
              </button>
            </div>
          </div>
        </div>

        <p className="text-center text-[13px] text-[#888888] mt-6">
          <Link
            href="/login"
            className="inline-flex items-center gap-1.5 font-medium hover:opacity-80 transition-opacity"
            style={{ color: "#C9A84C" }}
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Back to sign in
          </Link>
        </p>
      </div>
    )
  }

  return (
    <div className="w-full max-w-md">
      <div className="text-center mb-8">
        <p
          className="text-[10px] font-semibold uppercase tracking-[0.22em] mb-4"
          style={{ color: "#C9A84C" }}
        >
          Reset Password
        </p>
        <h1 className="font-display text-3xl sm:text-4xl font-semibold text-[#F0F0F0] tracking-[-0.02em] leading-[1.05] mb-3">
          Forgot your{" "}
          <span className="font-display-italic" style={{ color: "#C9A84C" }}>
            password?
          </span>
        </h1>
        <p className="text-[15px] text-[#C0C0C0] leading-relaxed">
          Enter your email and we&apos;ll send you a link to set a new one.
        </p>
      </div>

      <div
        className="p-7 sm:p-8 rounded-2xl border border-white/[0.08] bg-[#0D0D0D]"
        style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.04)" }}
      >
        <form onSubmit={handleSubmit} className="space-y-5">
          {error && (
            <div
              role="alert"
              aria-live="polite"
              className="flex items-start gap-2.5 px-4 py-3 rounded-xl text-[13px]"
              style={{
                backgroundColor: "rgba(255,68,68,0.08)",
                color: "#FF4444",
                border: "1px solid rgba(255,68,68,0.2)",
              }}
            >
              <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
              <span className="flex-1 leading-relaxed">{error}</span>
            </div>
          )}

          <div>
            <label htmlFor="reset-email" className="block text-[11px] uppercase tracking-[0.18em] font-semibold text-[#C0C0C0] mb-2">
              Email
            </label>
            <input
              id="reset-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoFocus
              placeholder="you@example.com"
              className="w-full px-4 py-3 rounded-xl text-[15px] text-[#F0F0F0] placeholder-[#555555] border border-white/[0.08] bg-[#0A0A0A] outline-none focus:ring-2 focus:ring-[#C9A84C]/30 focus:border-[#C9A84C]/40 transition-all"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            aria-busy={loading}
            className="w-full py-3 rounded-xl text-sm font-semibold transition-all duration-200 hover:opacity-90 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-60 disabled:hover:scale-100 flex items-center justify-center gap-2"
            style={{ backgroundColor: "#C9A84C", color: "#0A0A0A" }}
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Sending link
              </>
            ) : (
              <>
                Send reset link
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </form>
      </div>

      <p className="text-center text-[13px] text-[#888888] mt-6">
        Remembered it?{" "}
        <Link
          href="/login"
          className="font-medium hover:opacity-80 transition-opacity"
          style={{ color: "#C9A84C" }}
        >
          Back to sign in
        </Link>
      </p>
    </div>
  )
}
