"use client"

import React from 'react'
import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Eye, EyeOff, ArrowRight } from "lucide-react"
import { createSupabaseBrowser } from "@/lib/supabase/browser"

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const router = useRouter()

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError("")

    const supabase = createSupabaseBrowser()
    const { error: authError } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (authError) {
      setError(authError.message)
      setLoading(false)
      return
    }

    router.push("/dashboard")
    router.refresh()
  }

  return (
    <div className="w-full max-w-md">
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold text-[#F0F0F0] mb-2">Welcome back</h1>
        <p className="text-sm text-[#888888]">Sign in to continue your prep</p>
      </div>

      <div
        className="p-8 rounded-2xl border border-white/[0.08]"
        style={{ backgroundColor: "#111111" }}
      >
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

          <div>
            <div className="flex justify-between items-center mb-1.5">
              <label className="block text-xs font-medium text-[#888888]">
                Password
              </label>
              <Link
                href="/reset-password"
                className="text-xs hover:text-[#F0F0F0] transition-colors"
                style={{ color: "#C9A84C" }}
              >
                Forgot password?
              </Link>
            </div>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
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
                {showPassword ? (
                  <EyeOff className="w-4 h-4" />
                ) : (
                  <Eye className="w-4 h-4" />
                )}
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-xl text-sm font-semibold transition-all hover:opacity-90 disabled:opacity-60 flex items-center justify-center gap-2"
            style={{ backgroundColor: "#C9A84C", color: "#0A0A0A" }}
          >
            {loading ? "Signing in..." : "Sign in"}
            {!loading && <ArrowRight className="w-4 h-4" />}
          </button>
        </form>
      </div>

      <p className="text-center text-sm text-[#888888] mt-6">
        Don't have an account?{" "}
        <Link
          href="/signup"
          className="font-medium hover:underline"
          style={{ color: "#C9A84C" }}
        >
          Start free trial
        </Link>
      </p>
    </div>
  )
}
