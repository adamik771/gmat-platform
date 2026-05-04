"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Eye, EyeOff, ArrowRight, Loader2, ShieldCheck, AlertCircle } from "lucide-react"
import { createSupabaseBrowser } from "@/lib/supabase/browser"

type ReadyState = "verifying" | "ready" | "invalid"

export default function UpdatePasswordPage() {
  const [password, setPassword] = useState("")
  const [confirm, setConfirm] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [status, setStatus] = useState<ReadyState>("verifying")

  const router = useRouter()

  useEffect(() => {
    const supabase = createSupabaseBrowser()
    let resolved = false

    const { data: sub } = supabase.auth.onAuthStateChange((event) => {
      if (event === "PASSWORD_RECOVERY" || event === "SIGNED_IN") {
        resolved = true
        setStatus("ready")
      }
    })

    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) {
        resolved = true
        setStatus("ready")
      }
    })

    const timer = window.setTimeout(() => {
      if (!resolved) setStatus("invalid")
    }, 2000)

    return () => {
      sub.subscription.unsubscribe()
      window.clearTimeout(timer)
    }
  }, [])

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError("")

    if (password.length < 8) {
      setError("Password must be at least 8 characters.")
      return
    }
    if (password !== confirm) {
      setError("Passwords don't match.")
      return
    }

    setLoading(true)
    const supabase = createSupabaseBrowser()
    const { error: authError } = await supabase.auth.updateUser({ password })

    if (authError) {
      setError(authError.message)
      setLoading(false)
      return
    }

    router.push("/dashboard")
    router.refresh()
  }

  if (status === "verifying") {
    return (
      <div className="w-full max-w-md text-center">
        <Loader2
          className="w-5 h-5 animate-spin mx-auto mb-3"
          style={{ color: "#C9A84C" }}
        />
        <p className="text-[13px] text-[#888888]">Verifying link…</p>
      </div>
    )
  }

  if (status === "invalid") {
    return (
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <p
            className="text-[10px] font-semibold uppercase tracking-[0.22em] mb-4"
            style={{ color: "#FF4444" }}
          >
            Link Invalid
          </p>
          <h1 className="font-display text-3xl sm:text-4xl font-semibold text-[#F0F0F0] tracking-[-0.02em] leading-[1.05] mb-3">
            This link has{" "}
            <span className="font-display-italic" style={{ color: "#FF4444" }}>
              expired.
            </span>
          </h1>
          <p className="text-[15px] text-[#C0C0C0] leading-relaxed">
            Reset links expire after an hour. Request a fresh one and try
            again.
          </p>
        </div>

        <div
          className="p-7 sm:p-8 rounded-2xl border border-white/[0.08] bg-[#0D0D0D] text-center"
          style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.04)" }}
        >
          <Link
            href="/reset-password"
            className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-semibold transition-all duration-200 hover:opacity-90 hover:scale-[1.02] active:scale-[0.98]"
            style={{ backgroundColor: "#C9A84C", color: "#0A0A0A" }}
          >
            Request a new link
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
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
          New Password
        </p>
        <h1 className="font-display text-3xl sm:text-4xl font-semibold text-[#F0F0F0] tracking-[-0.02em] leading-[1.05] mb-3">
          Set a new{" "}
          <span className="font-display-italic" style={{ color: "#C9A84C" }}>
            password.
          </span>
        </h1>
        <p className="text-[15px] text-[#C0C0C0] leading-relaxed">
          Choose something you&apos;ll remember. Minimum 8 characters.
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
            <label htmlFor="update-password-new" className="block text-[11px] uppercase tracking-[0.18em] font-semibold text-[#C0C0C0] mb-2">
              New password
            </label>
            <div className="relative">
              <input
                id="update-password-new"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                minLength={8}
                autoFocus
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
            <p className="text-[11px] text-[#555555] mt-1">
              Minimum 8 characters
            </p>
          </div>

          <div>
            <label htmlFor="update-password-confirm" className="block text-[11px] uppercase tracking-[0.18em] font-semibold text-[#C0C0C0] mb-2">
              Confirm password
            </label>
            <input
              id="update-password-confirm"
              type={showPassword ? "text" : "password"}
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
              required
              minLength={8}
              placeholder="••••••••"
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
                Updating
              </>
            ) : (
              <>
                <ShieldCheck className="w-4 h-4" />
                Update password
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  )
}
