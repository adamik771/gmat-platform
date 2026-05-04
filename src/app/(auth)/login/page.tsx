"use client"

import { Suspense, useState } from "react"
import Link from "next/link"
import { useRouter, useSearchParams } from "next/navigation"
import { Eye, EyeOff, ArrowRight, Loader2, AlertCircle } from "lucide-react"
import { createSupabaseBrowser } from "@/lib/supabase/browser"

// Only allow same-origin redirect targets — never honor an absolute URL
// from the `next` param (open-redirect risk).
function safeNext(raw: string | null): string {
  if (!raw) return "/dashboard"
  if (!raw.startsWith("/") || raw.startsWith("//")) return "/dashboard"
  return raw
}

export default function LoginPage() {
  return (
    <Suspense fallback={<LoginFormSkeleton />}>
      <LoginForm />
    </Suspense>
  )
}

function LoginFormSkeleton() {
  return (
    <div className="w-full max-w-md">
      <div className="p-7 sm:p-8 rounded-2xl border border-white/[0.08] bg-[#0D0D0D] h-[420px]" />
    </div>
  )
}

function LoginForm() {
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const router = useRouter()
  const searchParams = useSearchParams()
  const next = safeNext(searchParams.get("next"))

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

    router.push(next)
    router.refresh()
  }

  return (
    <div className="w-full max-w-md">
      <div className="text-center mb-8">
        <p
          className="text-[10px] font-semibold uppercase tracking-[0.22em] mb-4"
          style={{ color: "#C9A84C" }}
        >
          Sign In
        </p>
        <h1 className="font-display text-3xl sm:text-4xl font-semibold text-[#F0F0F0] tracking-[-0.02em] leading-[1.05] mb-3">
          Welcome{" "}
          <span className="font-display-italic" style={{ color: "#C9A84C" }}>
            back.
          </span>
        </h1>
        <p className="text-[15px] text-[#C0C0C0] leading-relaxed">
          Pick up where you left off.
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
            <label htmlFor="login-email" className="block text-[11px] uppercase tracking-[0.18em] font-semibold text-[#C0C0C0] mb-2">
              Email
            </label>
            <input
              id="login-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="you@example.com"
              className="w-full px-4 py-3 rounded-xl text-[15px] text-[#F0F0F0] placeholder-[#555555] border border-white/[0.08] bg-[#0A0A0A] outline-none focus:ring-2 focus:ring-[#C9A84C]/30 focus:border-[#C9A84C]/40 transition-all"
            />
          </div>

          <div>
            <div className="flex justify-between items-center mb-2">
              <label htmlFor="login-password" className="block text-[11px] uppercase tracking-[0.18em] font-semibold text-[#C0C0C0]">
                Password
              </label>
              <Link
                href="/reset-password"
                className="text-[12px] font-medium hover:opacity-80 transition-opacity"
                style={{ color: "#C9A84C" }}
              >
                Forgot?
              </Link>
            </div>
            <div className="relative">
              <input
                id="login-password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="••••••••"
                className="w-full px-4 py-3 pr-11 rounded-xl text-[15px] text-[#F0F0F0] placeholder-[#555555] border border-white/[0.08] bg-[#0A0A0A] outline-none focus:ring-2 focus:ring-[#C9A84C]/30 focus:border-[#C9A84C]/40 transition-all"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#555555] hover:text-[#C0C0C0] transition-colors"
                aria-label={showPassword ? "Hide password" : "Show password"}
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
            aria-busy={loading}
            className="w-full py-3 rounded-xl text-sm font-semibold transition-all duration-200 hover:opacity-90 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-60 disabled:hover:scale-100 flex items-center justify-center gap-2"
            style={{ backgroundColor: "#C9A84C", color: "#0A0A0A" }}
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Signing in
              </>
            ) : (
              <>
                Sign in
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </form>
      </div>

      <p className="text-center text-[13px] text-[#888888] mt-6">
        New here?{" "}
        <Link
          href="/signup"
          className="font-medium hover:opacity-80 transition-opacity"
          style={{ color: "#C9A84C" }}
        >
          Start your climb
        </Link>
      </p>
    </div>
  )
}
