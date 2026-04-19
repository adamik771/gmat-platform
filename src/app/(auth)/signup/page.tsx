"use client"

import { Suspense, useState } from "react"
import Link from "next/link"
import { useRouter, useSearchParams } from "next/navigation"
import { Eye, EyeOff, ArrowRight, Check } from "lucide-react"
import { cn } from "@/lib/utils"
import { createSupabaseBrowser } from "@/lib/supabase/browser"

/**
 * Valid redirect paths after signup. A bare allow-list is safer than
 * trying to validate arbitrary URLs — we never want a malicious
 * `?redirect=https://evil.example.com` turning signup into an open
 * redirect.
 */
const ALLOWED_REDIRECTS = new Set(["/pricing", "/dashboard"])

const plans = [
  { id: "self_study", name: "Self-Study", price: "$297", note: "one-time" },
  { id: "coaching", name: "Coaching", price: "$2,500", note: "package", popular: true },
  { id: "intensive", name: "Intensive", price: "$4,200", note: "package" },
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
        <h1 className="text-2xl font-bold text-[#F0F0F0] mb-2">Create your account</h1>
        <p className="text-sm text-[#888888]">Start your free trial today</p>
      </div>
    </div>
  )
}

function SignupForm() {
  const [showPassword, setShowPassword] = useState(false)
  const [selectedPlan, setSelectedPlan] = useState("coaching")
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
        data: { full_name: name, plan: selectedPlan },
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
        <h1 className="text-2xl font-bold text-[#F0F0F0] mb-2">Create your account</h1>
        <p className="text-sm text-[#888888]">Start your free trial today</p>
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
              Full Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              placeholder="Your full name"
              className="w-full px-3.5 py-2.5 rounded-lg text-sm text-[#F0F0F0] placeholder-[#444444] outline-none transition-colors"
              style={{
                backgroundColor: "#1A1A1A",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            />
          </div>

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
            <label className="block text-xs font-medium text-[#888888] mb-1.5">
              Password
            </label>
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

          {/* Plan selection */}
          <div>
            <label className="block text-xs font-medium text-[#888888] mb-2">
              Select a plan
            </label>
            <div className="grid grid-cols-3 gap-2">
              {plans.map((plan) => (
                <button
                  key={plan.id}
                  type="button"
                  onClick={() => setSelectedPlan(plan.id)}
                  className={cn(
                    "relative p-3 rounded-lg border text-left transition-all",
                    selectedPlan === plan.id
                      ? "border-[#C9A84C]/50 bg-[#C9A84C]/5"
                      : "border-white/[0.08] hover:border-white/[0.14]"
                  )}
                >
                  {plan.popular && (
                    <span
                      className="absolute -top-2 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded-full text-[10px] font-bold"
                      style={{ backgroundColor: "#C9A84C", color: "#0A0A0A" }}
                    >
                      Popular
                    </span>
                  )}
                  <p className="text-xs font-semibold text-[#F0F0F0] mb-0.5">
                    {plan.name}
                  </p>
                  <p className="text-xs text-[#555555]">{plan.price}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Terms */}
          <div className="flex items-start gap-2.5">
            <button
              type="button"
              onClick={() => setAgreed(!agreed)}
              className={cn(
                "w-4 h-4 rounded border flex-shrink-0 mt-0.5 flex items-center justify-center transition-colors",
                agreed
                  ? "border-[#C9A84C] bg-[#C9A84C]"
                  : "border-white/[0.2]"
              )}
            >
              {agreed && <Check className="w-3 h-3 text-[#0A0A0A]" />}
            </button>
            <p className="text-xs text-[#888888] leading-relaxed">
              I agree to the{" "}
              <Link
                href="#"
                className="hover:underline"
                style={{ color: "#C9A84C" }}
              >
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link
                href="#"
                className="hover:underline"
                style={{ color: "#C9A84C" }}
              >
                Privacy Policy
              </Link>
            </p>
          </div>

          <button
            type="submit"
            disabled={loading || !agreed}
            className="w-full py-3 rounded-xl text-sm font-semibold transition-all hover:opacity-90 disabled:opacity-50 flex items-center justify-center gap-2"
            style={{ backgroundColor: "#C9A84C", color: "#0A0A0A" }}
          >
            {loading ? "Creating account..." : "Create account"}
            {!loading && <ArrowRight className="w-4 h-4" />}
          </button>
        </form>
      </div>

      <p className="text-center text-sm text-[#888888] mt-6">
        Already have an account?{" "}
        <Link
          href="/login"
          className="font-medium hover:underline"
          style={{ color: "#C9A84C" }}
        >
          Sign in
        </Link>
      </p>
    </div>
  )
}
