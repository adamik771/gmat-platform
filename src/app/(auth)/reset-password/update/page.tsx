"use client"

import React, { useState } from "react"
import { useRouter } from "next/navigation"
import { Eye, EyeOff, ArrowRight, Check } from "lucide-react"
import { createSupabaseBrowser } from "@/lib/supabase/browser"

export default function UpdatePasswordPage() {
  const [password, setPassword] = useState("")
  const [confirm, setConfirm] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [done, setDone] = useState(false)
  const [error, setError] = useState("")

  const router = useRouter()

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (password !== confirm) {
      setError("Passwords do not match.")
      return
    }
    if (password.length < 8) {
      setError("Password must be at least 8 characters.")
      return
    }
    setLoading(true)
    setError("")

    const supabase = createSupabaseBrowser()
    const { error: updateError } = await supabase.auth.updateUser({ password })

    if (updateError) {
      setError(updateError.message)
      setLoading(false)
      return
    }

    setDone(true)
    setTimeout(() => router.push("/dashboard"), 2000)
  }

  return (
    <div className="w-full max-w-md">
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold text-[#F0F0F0] mb-2">Set new password</h1>
        <p className="text-sm text-[#888888]">
          {done ? "Password updated — redirecting…" : "Choose a strong password for your account"}
        </p>
      </div>

      <div
        className="p-8 rounded-2xl border border-white/[0.08]"
        style={{ backgroundColor: "#111111" }}
      >
        {done ? (
          <div className="text-center space-y-4">
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center mx-auto"
              style={{ backgroundColor: "rgba(62,207,142,0.12)" }}
            >
              <Check className="w-6 h-6" style={{ color: "#3ECF8E" }} />
            </div>
            <p className="text-sm text-[#888888]">Password updated successfully.</p>
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
                New password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  minLength={8}
                  placeholder="••••••••"
                  className="w-full px-3.5 py-2.5 pr-10 rounded-lg text-sm text-[#F0F0F0] placeholder-[#444444] outline-none transition-colors"
                  style={{
                    backgroundColor: "#1A1A1A",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#555555] hover:text-[#888888] transition-colors"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-[#888888] mb-1.5">
                Confirm password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                value={confirm}
                onChange={(e) => setConfirm(e.target.value)}
                required
                placeholder="••••••••"
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
              {loading ? "Updating…" : "Update password"}
              {!loading && <ArrowRight className="w-4 h-4" />}
            </button>
          </form>
        )}
      </div>
    </div>
  )
}
