"use client"

import React, { useState } from "react"
import Link from "next/link"
import { ArrowLeft, ArrowRight, Check } from "lucide-react"
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
    const { error: resetError } = await supabase.auth.resetPasswordForEmail(
      email,
      { redirectTo: `${window.location.origin}/auth/callback?next=/reset-password/update` }
    )

    if (resetError) {
      setError(resetError.message)
      setLoading(false)
      return
    }

    setSent(true)
    setLoading(false)
  }

  return (
    <div className="w-full max-w-md">
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold text-[#F0F0F0] mb-2">Reset password</h1>
        <p className="text-sm text-[#888888]">
          {sent
            ? "Check your inbox for the reset link"
            : "Enter your email and we'll send you a reset link"}
        </p>
      </div>

      <div
        className="p-8 rounded-2xl border border-white/[0.08]"
        style={{ backgroundColor: "#111111" }}
      >
        {sent ? (
          <div className="text-center space-y-4">
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center mx-auto"
              style={{ backgroundColor: "rgba(62,207,142,0.12)" }}
            >
              <Check className="w-6 h-6" style={{ color: "#3ECF8E" }} />
            </div>
            <p className="text-sm text-[#888888]">
              If an account exists for <span className="text-[#F0F0F0]">{email}</span>,
              you'll receive a reset link shortly.
            </p>
            <Link
              href="/login"
              className="inline-flex items-center gap-1.5 text-sm font-medium hover:opacity-80 transition-opacity"
              style={{ color: "#C9A84C" }}
            >
              Back to sign in
            </Link>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            {error && (
              <div
                className="px-4 py-3 rounded-lg text-sm"
                style={{
                  backgroundColor: "rgba(255,68,68,0.08)",
                  color: "#FF4444",
                  border: "1px solid rgba(255,68,68,0.2)",
                }}
              >
                {error}
              </div>
            )}

            <div>
              <label className="block text-xs font-medium text-[#888888] mb-1.5">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="you@example.com"
                className="w-full px-3.5 py-2.5 rounded-lg text-sm text-[#F0F0F0] placeholder-[#444444] outline-none transition-colors"
                style={{
                  backgroundColor: "#1A1A1A",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-xl text-sm font-semibold transition-all hover:opacity-90 disabled:opacity-60 flex items-center justify-center gap-2"
              style={{ backgroundColor: "#C9A84C", color: "#0A0A0A" }}
            >
              {loading ? "Sending..." : "Send reset link"}
              {!loading && <ArrowRight className="w-4 h-4" />}
            </button>
          </form>
        )}
      </div>

      <p className="text-center text-sm text-[#888888] mt-6">
        <Link
          href="/login"
          className="inline-flex items-center gap-1 hover:text-[#F0F0F0] transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          Back to sign in
        </Link>
      </p>
    </div>
  )
}
