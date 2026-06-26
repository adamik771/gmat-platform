"use client"

import { useState } from "react"
import { ArrowRight, Check, Download, Loader2 } from "lucide-react"
import { trackEvent } from "@/lib/analytics"

type Source =
  | "footer"
  | "homepage"
  | "blog-post"
  | "resources"
  | "score-converter"
  | "study-schedule"
  | "score-by-school"
  | "founding-member"
  | "referral"
  | "other"
type LeadMagnet =
  | "error-log-template"
  | "newsletter"
  | "founding-reservation"

interface LeadCaptureProps {
  source: Source
  leadMagnet: LeadMagnet
  /** Eyebrow / category line above the headline. */
  eyebrow?: string
  /** Headline shown above the form. */
  headline: string
  /** Sub-headline / pitch — keep under two lines. */
  description: string
  /** Button label before submit. */
  ctaLabel?: string
  /** Visible after a successful submit (replaces the form). */
  successHeadline?: string
  /** Visible after a successful submit, beneath the success headline. */
  successDescription?: string
  /** Compact variant for footer placement. */
  variant?: "default" | "compact"
  /** Optional small print under the form. Defaults to the no-spam line. */
  footnote?: string
  /** When set, fires this trackEvent (with source + lead_magnet) on a
   *  successful submit — used for funnel events like `founding_reserve`. */
  trackEventName?: string
}

export default function LeadCapture({
  source,
  leadMagnet,
  eyebrow,
  headline,
  description,
  ctaLabel = "Send it to me",
  successHeadline,
  successDescription,
  variant = "default",
  footnote = "One email. No spam. Unsubscribe with one click.",
  trackEventName,
}: LeadCaptureProps) {
  const [email, setEmail] = useState("")
  const [hp, setHp] = useState("")
  const [state, setState] = useState<"idle" | "submitting" | "done" | "error">(
    "idle",
  )
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null)
  const [error, setError] = useState("")

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email.trim()) return
    setState("submitting")
    setError("")
    try {
      const res = await fetch("/api/lead-capture", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source, leadMagnet, hp }),
      })
      const data = (await res.json().catch(() => ({}))) as {
        ok?: boolean
        downloadUrl?: string | null
        error?: string
      }
      if (!res.ok || !data.ok) {
        setState("error")
        setError(data.error || "Something went wrong. Try again?")
        return
      }
      setDownloadUrl(data.downloadUrl ?? null)
      setState("done")
      // Funnel event (e.g. founding_reserve) — trackEvent swallows its own
      // errors and carries first-touch attribution automatically.
      if (trackEventName) {
        trackEvent(trackEventName, { source, lead_magnet: leadMagnet })
      }
    } catch {
      setState("error")
      setError("Network error — try again in a moment.")
    }
  }

  const isCompact = variant === "compact"

  if (state === "done") {
    const successH =
      successHeadline ??
      (downloadUrl
        ? "Check your download — and thank you."
        : "You're on the list — thank you.")
    const successD =
      successDescription ??
      (downloadUrl
        ? "The template is downloading now. If it doesn't open automatically, click below."
        : "Expect the next post when it ships.")
    return (
      <div
        className={
          isCompact
            ? "p-5 rounded-xl border border-white/[0.08] bg-[#0D0D0D]"
            : "p-6 sm:p-8 rounded-2xl border border-white/[0.08] bg-[#0D0D0D]"
        }
      >
        <div className="flex items-start gap-3">
          <div
            className="flex items-center justify-center w-9 h-9 rounded-full flex-shrink-0"
            style={{ backgroundColor: "rgba(62,207,142,0.12)" }}
          >
            <Check className="w-4 h-4" style={{ color: "#3ECF8E" }} />
          </div>
          <div className="flex-1">
            <p className="text-[14px] font-semibold text-[#F0F0F0] mb-1">
              {successH}
            </p>
            <p className="text-[13px] text-[#888888] leading-relaxed">
              {successD}
            </p>
            {downloadUrl && (
              <a
                href={downloadUrl}
                download
                className="inline-flex items-center gap-1.5 text-[12px] font-semibold mt-3 hover:underline"
                style={{ color: "#C9A84C" }}
              >
                <Download className="w-3.5 h-3.5" />
                Download the template
              </a>
            )}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div
      className={
        isCompact
          ? "p-5 rounded-xl border border-white/[0.08] bg-[#0D0D0D]"
          : "p-6 sm:p-8 rounded-2xl border border-white/[0.08] bg-[#0D0D0D]"
      }
    >
      {eyebrow && (
        <p
          className="text-[10px] font-semibold uppercase tracking-[0.22em] mb-2"
          style={{ color: "#C9A84C" }}
        >
          {eyebrow}
        </p>
      )}
      <p
        className={
          isCompact
            ? "text-[15px] font-semibold text-[#F0F0F0] mb-1.5"
            : "font-display text-xl sm:text-2xl font-semibold text-[#F0F0F0] tracking-tight mb-2"
        }
      >
        {headline}
      </p>
      <p
        className={
          isCompact
            ? "text-[12px] text-[#888888] leading-relaxed mb-4"
            : "text-[14px] text-[#C0C0C0] leading-relaxed mb-5 max-w-md"
        }
      >
        {description}
      </p>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row gap-2"
        noValidate
      >
        {/* Honeypot — hidden from humans, filled by bots. */}
        <label
          aria-hidden="true"
          className="absolute left-[-9999px] top-auto h-px w-px overflow-hidden"
        >
          Do not fill this field
          <input
            type="text"
            tabIndex={-1}
            autoComplete="off"
            value={hp}
            onChange={(e) => setHp(e.target.value)}
          />
        </label>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          aria-label="Your email address"
          disabled={state === "submitting"}
          className="flex-1 px-3.5 py-2.5 rounded-xl text-[14px] text-[#F0F0F0] placeholder-[#555555] border border-white/[0.08] bg-[#0A0A0A] outline-none focus:ring-2 focus:ring-[#C9A84C]/30 focus:border-[#C9A84C]/40 transition-all disabled:opacity-60"
        />
        <button
          type="submit"
          disabled={state === "submitting" || email.trim().length === 0}
          aria-busy={state === "submitting"}
          className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-[13px] font-semibold transition-all duration-200 hover:enabled:opacity-90 hover:enabled:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
          style={{ backgroundColor: "#C9A84C", color: "#0A0A0A" }}
        >
          {state === "submitting" ? (
            <>
              <Loader2 className="w-3.5 h-3.5 animate-spin" />
              Sending
            </>
          ) : (
            <>
              {ctaLabel}
              <ArrowRight className="w-3.5 h-3.5" />
            </>
          )}
        </button>
      </form>
      {state === "error" && (
        <p
          role="alert"
          className="text-[12px] mt-2"
          style={{ color: "#FF4444" }}
        >
          {error}
        </p>
      )}
      <p className="text-[11px] text-[#555555] mt-3">{footnote}</p>
    </div>
  )
}
