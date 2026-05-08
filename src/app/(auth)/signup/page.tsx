"use client"

import { Suspense, useState } from "react"
import Link from "next/link"
import { useRouter, useSearchParams } from "next/navigation"
import { Eye, EyeOff, ArrowRight, Check, Loader2, AlertCircle, BookOpen, BarChart3, Brain } from "lucide-react"
import { cn } from "@/lib/utils"
import { createSupabaseBrowser } from "@/lib/supabase/browser"

/**
 * Valid redirect paths after signup. A bare allow-list is safer than
 * trying to validate arbitrary URLs — we never want a malicious
 * `?redirect=https://evil.example.com` turning signup into an open
 * redirect.
 */
const ALLOWED_REDIRECTS = new Set(["/pricing", "/dashboard"])

const trialIncludes = [
  { icon: BookOpen, text: "All 17 chapters + full question bank" },
  { icon: BarChart3, text: "Score analytics, error log & mock exams" },
  { icon: Brain, text: "Diagnostic, review queue & study plan" },
]

export default function SignupPage() {
  // useSearchParams triggers a client-side bailout, so static prerender
  // needs a Suspense boundary around the form.
  return (
    <Suspense fallback={<SignupFallback />}>
      <SignupForm />
    </Suspense>
  )
}

function SignupFallback() {
  return (
    <div className="w-full max-w-lg">
      <div className="text-center mb-8">
        <p
          className="text-[10px] font-semibold uppercase tracking-[0.22em] mb-4"
          style={{ color: "#C9A84C" }}
        >
          7-Day Free Trial
        </p>
        <h1 className="font-display text-3xl sm:text-4xl font-semibold text-[#F0F0F0] tracking-[-0.02em] leading-[1.05] mb-3">
          Begin the{" "}
          <span className="font-display-italic" style={{ color: "#C9A84C" }}>
            climb.
          </span>
        </h1>
        <p className="text-[15px] text-[#C0C0C0] leading-relaxed">
          Full access for 7 days. No credit card required.
        </p>
      </div>
    </div>
  )
}

function SignupForm() {
  const [showPassword, setShowPassword] = useState(false)
  const [agreed, setAgreed] = useState(false)
  const [loading, setLoading] = useState(false)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const router = useRouter()
  const searchParams = useSearchParams()
  const rawRedirect = searchParams.get("redirect")
  const redirectTarget =
    rawRedirect && ALLOWED_REDIRECTS.has(rawRedirect) ? rawRedirect : "/dashboard"
  const [error, setError] = useState("")

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError("")

    const supabase = createSupabaseBrowser()
    const { error: authError } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { full_name: name },
        emailRedirectTo: `${window.location.origin}/auth/callback`,
      },
    })

    if (authError) {
      setError(authError.message)
      setLoading(false)
      return
    }

    router.push(redirectTarget)
    router.refresh()
  }

  return (
    <div className="w-full max-w-lg">
      <div className="text-center mb-8">
        <p
          className="text-[10px] font-semibold uppercase tracking-[0.22em] mb-4"
          style={{ color: "#C9A84C" }}
        >
          7-Day Free Trial
        </p>
        <h1 className="font-display text-3xl sm:text-4xl font-semibold text-[#F0F0F0] tracking-[-0.02em] leading-[1.05] mb-3">
          Begin the{" "}
          <span className="font-display-italic" style={{ color: "#C9A84C" }}>
            climb.
          </span>
        </h1>
        <p className="text-[15px] text-[#C0C0C0] leading-relaxed">
          Full access for 7 days. No credit card required.
        </p>
      </div>

      {/* Trial value reminder */}
      <div
        className="flex flex-col gap-2.5 px-5 py-4 rounded-xl border mb-5"
        style={{
          borderColor: "rgba(201,168,76,0.18)",
          backgroundColor: "rgba(201,168,76,0.04)",
        }}
      >
        {trialIncludes.map(({ icon: Icon, text }) => (
          <div key={text} className="flex items-center gap-3">
            <Icon className="w-3.5 h-3.5 flex-shrink-0" style={{ color: "#C9A84C" }} />
            <span className="text-[13px] text-[#C0C0C0]">{text}</span>
          </div>
        ))}
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
            <label htmlFor="signup-name" className="block text-[11px] uppercase tracking-[0.18em] font-semibold text-[#C0C0C0] mb-2">
              Full Name
            </label>
            <input
              id="signup-name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              placeholder="Your full name"
              className="w-full px-4 py-3 rounded-xl text-[15px] text-[#F0F0F0] placeholder-[#555555] border border-white/[0.08] bg-[#0A0A0A] outline-none focus:ring-2 focus:ring-[#C9A84C]/30 focus:border-[#C9A84C]/40 transition-all"
            />
          </div>

          <div>
            <label htmlFor="signup-email" className="block text-[11px] uppercase tracking-[0.18em] font-semibold text-[#C0C0C0] mb-2">
              Email
            </label>
            <input
              id="signup-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="you@example.com"
              className="w-full px-4 py-3 rounded-xl text-[15px] text-[#F0F0F0] placeholder-[#555555] border border-white/[0.08] bg-[#0A0A0A] outline-none focus:ring-2 focus:ring-[#C9A84C]/30 focus:border-[#C9A84C]/40 transition-all"
            />
          </div>

          <div>
            <label htmlFor="signup-password" className="block text-[11px] uppercase tracking-[0.18em] font-semibold text-[#C0C0C0] mb-2">
              Password
            </label>
            <div className="relative">
              <input
                id="signup-password"
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
            <p className="text-[11px] text-[#555555] mt-1">
              Minimum 8 characters
            </p>
          </div>

          {/* Terms */}
          <div className="flex items-start gap-3">
            <button
              type="button"
              onClick={() => setAgreed(!agreed)}
              className={cn(
                "w-[18px] h-[18px] rounded-[5px] border flex-shrink-0 mt-0.5 flex items-center justify-center transition-colors",
                agreed
                  ? "border-[#C9A84C] bg-[#C9A84C]"
                  : "border-white/[0.2] hover:border-white/[0.32]"
              )}
              aria-label="Agree to terms"
            >
              {agreed && <Check className="w-3 h-3 text-[#0A0A0A]" strokeWidth={3} />}
            </button>
            <p className="text-[13px] text-[#888888] leading-relaxed">
              I agree to the{" "}
              <Link
                href="/terms"
                className="font-medium hover:opacity-80 transition-opacity"
                style={{ color: "#C9A84C" }}
              >
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link
                href="/privacy"
                className="font-medium hover:opacity-80 transition-opacity"
                style={{ color: "#C9A84C" }}
              >
                Privacy Policy
              </Link>
            </p>
          </div>

          <button
            type="submit"
            disabled={loading || !agreed}
            aria-busy={loading}
            className="w-full py-3 rounded-xl text-sm font-semibold transition-all duration-200 hover:opacity-90 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:hover:scale-100 flex items-center justify-center gap-2"
            style={{ backgroundColor: "#C9A84C", color: "#0A0A0A" }}
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Creating account
              </>
            ) : (
              <>
                Start free trial
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </form>
      </div>

      <p className="text-center text-[13px] text-[#888888] mt-6">
        Already have an account?{" "}
        <Link
          href="/login"
          className="font-medium hover:opacity-80 transition-opacity"
          style={{ color: "#C9A84C" }}
        >
          Sign in
        </Link>
      </p>
    </div>
  )
}
