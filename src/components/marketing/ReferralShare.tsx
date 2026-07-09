"use client"

import { useMemo, useState } from "react"
import { Check, Copy, Mail, MessageCircle, Share2 } from "lucide-react"
import { trackEvent } from "@/lib/analytics"

/**
 * ReferralShare — the referrer's toolkit on /refer. There's no per-user
 * referral-code system yet, so the honest, manual mechanism is: share a
 * personal message + a referral-tagged link, and the friend mentions the
 * referrer's name when they reserve founding access. The link carries
 * utm_source=referral (+ a ref slug) so AttributionCapture credits the
 * resulting signup. Copy / email both fire `referral_click`.
 */
export default function ReferralShare() {
  const [name, setName] = useState("")
  const [copied, setCopied] = useState(false)

  const baseUrl = (
    process.env.NEXT_PUBLIC_SITE_URL || "https://www.zakariangmat.com"
  ).replace(/\/$/, "")

  const refSlug = useMemo(
    () =>
      name
        .trim()
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "")
        .slice(0, 40),
    [name],
  )

  const link = useMemo(() => {
    const params = new URLSearchParams({
      utm_source: "referral",
      utm_medium: "personal",
    })
    if (refSlug) params.set("ref", refSlug)
    return `${baseUrl}/?${params.toString()}`
  }, [baseUrl, refSlug])

  const message = useMemo(() => {
    const signoff = name.trim() ? `\n\n— ${name.trim()}` : ""
    return `I've been using Zakarian GMAT to prep — it's a structured system built by someone who went from 565 to 735. Every new account starts with a free 7-day trial.

Take a look: ${link}

If you reserve founding access, mention my name and you'll get the founding discount when paid plans launch.${signoff}`
  }, [link, name])

  async function copyMessage() {
    try {
      await navigator.clipboard.writeText(message)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      // Clipboard blocked — the message is visible in the box to copy by hand.
    }
    trackEvent("referral_click", { channel: "copy", named: Boolean(refSlug) })
  }

  function emailIt() {
    const subject = encodeURIComponent("A GMAT prep system worth a look")
    const body = encodeURIComponent(message)
    trackEvent("referral_click", { channel: "email", named: Boolean(refSlug) })
    window.location.href = `mailto:?subject=${subject}&body=${body}`
  }

  function shareWhatsApp() {
    trackEvent("referral_click", { channel: "whatsapp", named: Boolean(refSlug) })
    window.open(`https://wa.me/?text=${encodeURIComponent(message)}`, "_blank", "noopener")
  }

  function shareX() {
    const text =
      "A structured GMAT prep system built by someone who went from 565 to 735 — free 7-day trial:"
    trackEvent("referral_click", { channel: "x", named: Boolean(refSlug) })
    window.open(
      `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(link)}`,
      "_blank",
      "noopener",
    )
  }

  async function shareNative() {
    trackEvent("referral_click", { channel: "native", named: Boolean(refSlug) })
    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share({ text: message, url: link })
      } catch {
        // user dismissed the share sheet — nothing to do
      }
    } else {
      copyMessage()
    }
  }

  return (
    <div className="p-6 sm:p-8 rounded-2xl border border-white/[0.08] bg-[#0D0D0D]">
      <label
        htmlFor="ref-name"
        className="block text-[12px] font-semibold text-[#C0C0C0] mb-2"
      >
        Your name (so your friend knows who to mention)
      </label>
      <input
        id="ref-name"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="e.g. Adam Z."
        className="w-full mb-5 px-3.5 py-2.5 rounded-xl text-[14px] text-[#F0F0F0] placeholder-[#555555] border border-white/[0.08] bg-[#0A0A0A] outline-none focus:ring-2 focus:ring-[#C9A84C]/30 focus:border-[#C9A84C]/40 transition-all"
      />

      <p className="text-[12px] font-semibold text-[#C0C0C0] mb-2">
        Your share message
      </p>
      <textarea
        readOnly
        value={message}
        rows={7}
        aria-label="Referral message to copy"
        className="w-full mb-4 p-3.5 rounded-xl text-[13px] text-[#C0C0C0] leading-relaxed border border-white/[0.08] bg-[#0A0A0A] resize-none focus:outline-none"
      />

      <div className="flex flex-col sm:flex-row gap-2.5">
        <button
          type="button"
          onClick={copyMessage}
          className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-[13px] font-semibold transition-all hover:opacity-90 hover:scale-[1.01]"
          style={{ backgroundColor: "#C9A84C", color: "#0A0A0A" }}
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5" />
              Copied
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5" />
              Copy message
            </>
          )}
        </button>
        <button
          type="button"
          onClick={emailIt}
          className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-[13px] font-semibold border border-white/[0.12] text-[#F0F0F0] hover:bg-white/5 transition-all"
        >
          <Mail className="w-3.5 h-3.5" />
          Email it
        </button>
      </div>
      <div className="flex flex-col sm:flex-row gap-2.5 mt-2.5">
        <button
          type="button"
          onClick={shareWhatsApp}
          className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-[13px] font-semibold border border-white/[0.12] text-[#F0F0F0] hover:bg-white/5 transition-all"
        >
          <MessageCircle className="w-3.5 h-3.5" />
          WhatsApp
        </button>
        <button
          type="button"
          onClick={shareX}
          className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-[13px] font-semibold border border-white/[0.12] text-[#F0F0F0] hover:bg-white/5 transition-all"
        >
          Share on X
        </button>
        <button
          type="button"
          onClick={shareNative}
          className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-[13px] font-semibold border border-white/[0.12] text-[#F0F0F0] hover:bg-white/5 transition-all"
        >
          <Share2 className="w-3.5 h-3.5" />
          More
        </button>
      </div>
      <p className="text-[11px] text-[#555555] mt-3 leading-relaxed">
        Keep it personal — send it to people you actually know. No spam, no mass
        messages.
      </p>
    </div>
  )
}
