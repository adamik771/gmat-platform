"use client"

import { Suspense, useState } from "react"
import Link from "next/link"
import { useRouter, useSearchParams } from "next/navigation"
import { Eye, EyeOff, ArrowRight, Loader2, AlertCircle, ShieldCheck, KeyRound, MailCheck } from "lucide-react"
import { createSupabaseBrowser } from "@/lib/supabase/browser"
import { trackEvent } from "@/lib/analytics"
import { buildMarketingConsent } from "@/lib/outreach/consent-flag"

/**
 * Valid redirect paths after signup. A bare allow-list is safer than
 * trying to validate arbitrary URLs — we never want a malicious
 * `?redirect=https://evil.example.com` turning signup into an open
 * redirect.
 */
const ALLOWED_REDIRECTS = new Set(["/pricing", "/dashboard"])

/**
 * Invite-only gate. When NEXT_PUBLIC_SIGNUP_GATED=true the form requires an
 * access code and routes signup through the server (/api/signup), which
 * validates the code against the server-only SIGNUP_ACCESS_CODE and creates
 * the account via the service role. Off by default — the normal anon
 * `supabase.auth.signUp` path below is unchanged. Build-time inlined, so a
 * deploy/rebuild is needed after flipping it.
 */
const SIGNUP_GATED = process.env.NEXT_PUBLIC_SIGNUP_GATED === "true"

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
          Free Access
        </p>
        <h1 className="font-display text-3xl sm:text-4xl font-semibold text-[#F0F0F0] tracking-[-0.02em] leading-[1.05] mb-3">
          Begin the{" "}
          <span className="font-display-italic" style={{ color: "#C9A84C" }}>
            climb.
          </span>
        </h1>
        <p className="text-[15px] text-[#C0C0C0] leading-relaxed">
          Full access. No credit card needed.
        </p>
      </div>
    </div>
  )
}

function SignupForm() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const rawRedirect = searchParams.get("redirect")
  const redirectTarget =
    rawRedirect && ALLOWED_REDIRECTS.has(rawRedirect) ? rawRedirect : "/dashboard"

  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  // Shareable invite link: /signup?invite=CODE pre-fills the access code so a
  // friend can sign up in one step when signup is gated. Lazy initializer reads
  // it once on mount; harmless when signup is open (the field isn't rendered).
  const [accessCode, setAccessCode] = useState(() => searchParams.get("invite") ?? "")
  // Explicit, unticked-by-default marketing consent (separate from account
  // creation). Transactional emails are unaffected by this.
  const [marketingOptIn, setMarketingOptIn] = useState(false)
  // When Supabase has email confirmation ON, signUp returns no session and the
  // user must click an emailed link first. We surface a "check your email"
  // state (keyed by this) instead of pushing them to a protected route.
  const [pendingEmail, setPendingEmail] = useState<string | null>(null)
  const [resendState, setResendState] = useState<"idle" | "sending" | "sent">("idle")
  const [error, setError] = useState("")

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError("")

    // Enforce the 8-char minimum the helper text promises (the reset-password
    // flow already does; signup was relying on Supabase's weaker 6-char default).
    // Runs before both the gated and normal paths below.
    if (password.length < 8) {
      setError("Password must be at least 8 characters.")
      return
    }

    setLoading(true)
    trackEvent("signup_initiated", { gated: SIGNUP_GATED })

    // Invite-only path: the server validates the access code and creates the
    // account (service role, email auto-confirmed); we then sign in to get a
    // session. Keeps the secret code server-side and stays enforceable even
    // if the /signup URL is shared.
    if (SIGNUP_GATED) {
      let data: { ok?: boolean; error?: string } = {}
      try {
        const res = await fetch("/api/signup", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name,
            email,
            password,
            accessCode,
            marketingConsent: marketingOptIn,
          }),
        })
        data = await res.json().catch(() => ({}))
        if (!res.ok) {
          setError(data.error ?? "Could not create your account.")
          setLoading(false)
          return
        }
      } catch {
        setError("Network error. Please try again.")
        setLoading(false)
        return
      }

      const supabase = createSupabaseBrowser()
      const { error: signInError } = await supabase.auth.signInWithPassword({
        email,
        password,
      })
      if (signInError) {
        setError(signInError.message)
        setLoading(false)
        return
      }

      trackEvent("signup", { gated: true })
      router.push(redirectTarget)
      router.refresh()
      return
    }

    const supabase = createSupabaseBrowser()
    const { data: signUpData, error: authError } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: name,
          marketing_consent: buildMarketingConsent(
            marketingOptIn,
            new Date().toISOString()
          ),
        },
        emailRedirectTo: `${window.location.origin}/auth/callback`,
      },
    })

    if (authError) {
      setError(authError.message)
      setLoading(false)
      return
    }

    trackEvent("signup", { gated: false })

    // No session means email confirmation is required (Supabase "Confirm
    // email" is on). Pushing to a protected route here would bounce the
    // brand-new user to /login with no explanation — a silent dead-end. Show
    // the "check your email" state instead. When confirmation is off, a
    // session is returned and we proceed straight to the app.
    if (!signUpData.session) {
      setPendingEmail(email)
      setLoading(false)
      return
    }

    router.push(redirectTarget)
    router.refresh()
  }

  async function handleResend() {
    if (!pendingEmail || resendState === "sending") return
    setResendState("sending")
    try {
      const supabase = createSupabaseBrowser()
      await supabase.auth.resend({
        type: "signup",
        email: pendingEmail,
        options: { emailRedirectTo: `${window.location.origin}/auth/callback` },
      })
    } catch {
      // Best-effort — the link in the original email still works.
    }
    setResendState("sent")
  }

  // Email-confirmation pending: a session wasn't returned, so the account
  // exists but isn't usable until the emailed link is clicked. This replaces
  // the silent redirect-to-/login dead-end.
  if (pendingEmail) {
    return (
      <div className="w-full max-w-lg">
        <div className="text-center mb-8">
          <p
            className="text-[10px] font-semibold uppercase tracking-[0.22em] mb-4"
            style={{ color: "#C9A84C" }}
          >
            Almost there
          </p>
          <h1 className="font-display text-3xl sm:text-4xl font-semibold text-[#F0F0F0] tracking-[-0.02em] leading-[1.05] mb-3">
            Check your{" "}
            <span className="font-display-italic" style={{ color: "#C9A84C" }}>
              email.
            </span>
          </h1>
        </div>

        <div
          className="p-7 sm:p-8 rounded-2xl border border-white/[0.08] bg-[#0D0D0D] text-center"
          style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.04)" }}
        >
          <div className="flex justify-center mb-5">
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center"
              style={{ backgroundColor: "rgba(201,168,76,0.12)" }}
            >
              <MailCheck className="w-6 h-6" style={{ color: "#C9A84C" }} />
            </div>
          </div>
          <p className="text-[15px] text-[#C0C0C0] leading-relaxed">
            We sent a confirmation link to{" "}
            <span className="text-[#F0F0F0] font-semibold">{pendingEmail}</span>.
            Click it to activate your account, then sign in.
          </p>
          <p className="text-[12px] text-[#555555] leading-relaxed mt-3">
            Didn&apos;t get it? Check your spam folder, or resend below.
          </p>
          <button
            type="button"
            onClick={handleResend}
            disabled={resendState !== "idle"}
            className="mt-5 w-full py-3 rounded-xl text-sm font-semibold border border-white/[0.1] text-[#C0C0C0] hover:border-white/[0.18] hover:text-[#F0F0F0] transition-all disabled:opacity-50 disabled:hover:border-white/[0.1]"
          >
            {resendState === "sending"
              ? "Sending…"
              : resendState === "sent"
                ? "Email resent — check your inbox"
                : "Resend confirmation email"}
          </button>
        </div>

        <p className="text-center text-[13px] text-[#888888] mt-6">
          Already confirmed?{" "}
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

  return (
    <div className="w-full max-w-lg">
      <div className="text-center mb-8">
        <p
          className="text-[10px] font-semibold uppercase tracking-[0.22em] mb-4"
          style={{ color: "#C9A84C" }}
        >
          Free Access
        </p>
        <h1 className="font-display text-3xl sm:text-4xl font-semibold text-[#F0F0F0] tracking-[-0.02em] leading-[1.05] mb-3">
          Begin the{" "}
          <span className="font-display-italic" style={{ color: "#C9A84C" }}>
            climb.
          </span>
        </h1>
        <p className="text-[15px] text-[#C0C0C0] leading-relaxed">
          Full access. No credit card needed.
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

          {SIGNUP_GATED && (
            <div>
              <label htmlFor="signup-access-code" className="block text-[11px] uppercase tracking-[0.18em] font-semibold text-[#C0C0C0] mb-2">
                Access Code
              </label>
              <div className="relative">
                <KeyRound className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#555555]" />
                <input
                  id="signup-access-code"
                  type="text"
                  value={accessCode}
                  onChange={(e) => setAccessCode(e.target.value)}
                  required
                  autoComplete="off"
                  spellCheck={false}
                  placeholder="Your invite code"
                  className="w-full pl-10 pr-4 py-3 rounded-xl text-[15px] text-[#F0F0F0] placeholder-[#555555] border border-white/[0.08] bg-[#0A0A0A] outline-none focus:ring-2 focus:ring-[#C9A84C]/30 focus:border-[#C9A84C]/40 transition-all"
                />
              </div>
              <p className="text-[11px] text-[#555555] mt-1">
                Zakarian GMAT is invite-only. Enter the code from your invite.
              </p>
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
                minLength={8}
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

          <label className="flex items-start gap-2.5 cursor-pointer select-none">
            <input
              type="checkbox"
              checked={marketingOptIn}
              onChange={(e) => setMarketingOptIn(e.target.checked)}
              className="mt-0.5 h-4 w-4 flex-shrink-0 accent-[#C9A84C]"
            />
            <span className="text-[12px] text-[#888888] leading-relaxed">
              Email me the getting-started series from Adam &mdash; how to use
              the platform, founding-user offers, and product updates. Optional;
              unsubscribe in one click. We&apos;ll always send essential account
              emails (like password resets) regardless.
            </span>
          </label>

          <button
            type="submit"
            disabled={loading}
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
                Start Free
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>

          <div className="flex items-center justify-center gap-2 pt-1">
            <ShieldCheck className="w-3.5 h-3.5 flex-shrink-0" style={{ color: "#555555" }} />
            <p className="text-[12px] text-[#555555] text-center leading-relaxed">
              No credit card. By continuing you agree to our{" "}
              <Link href="/terms" className="hover:text-[#888888] transition-colors underline underline-offset-2">
                Terms
              </Link>{" "}
              and{" "}
              <Link href="/privacy" className="hover:text-[#888888] transition-colors underline underline-offset-2">
                Privacy Policy
              </Link>.
            </p>
          </div>
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
