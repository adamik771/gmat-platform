"use client"

import { useState } from "react"
import { Mail, Clock, MessageSquare, ArrowRight, Loader2 } from "lucide-react"

export default function ContactClient() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    const form = e.currentTarget
    const data = new FormData(form)

    try {
      await fetch("https://formspree.io/f/xvzdgpyg", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      })
      setSubmitted(true)
    } catch {
      // silent
    } finally {
      setLoading(false)
    }
  }

  return (
    <div style={{ backgroundColor: "#0A0A0A" }}>
      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 90% 55% at 50% -5%, rgba(201,168,76,0.16) 0%, transparent 60%)",
          }}
          aria-hidden
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 55% 35% at 80% 20%, rgba(201,168,76,0.06) 0%, transparent 60%)",
          }}
          aria-hidden
        />
        <div
          className="absolute inset-0 pointer-events-none bg-grain opacity-[0.03] mix-blend-overlay"
          aria-hidden
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <p
              className="text-[10px] font-semibold uppercase tracking-[0.22em] mb-5"
              style={{ color: "#C9A84C" }}
            >
              Contact
            </p>
            <h1 className="font-display text-4xl sm:text-6xl font-semibold text-[#F0F0F0] tracking-[-0.02em] leading-[1.02] mb-6">
              Book a free 20-min{" "}
              <span className="font-display-italic" style={{ color: "#C9A84C" }}>
                call.
              </span>
            </h1>
            <p className="text-[15px] sm:text-[17px] text-[#C0C0C0] leading-relaxed">
              Tell me about your situation. We&apos;ll figure out the right plan together.
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-10 lg:gap-12 max-w-5xl mx-auto">
            {/* Form */}
            <div className="lg:col-span-3">
              {submitted ? (
                <div
                  role="status"
                  aria-live="polite"
                  className="p-10 rounded-2xl border text-center"
                  style={{
                    borderColor: "rgba(62,207,142,0.3)",
                    backgroundColor: "rgba(62,207,142,0.05)",
                    boxShadow: "inset 0 1px 0 rgba(255,255,255,0.04)",
                  }}
                >
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-5"
                    style={{ backgroundColor: "rgba(62,207,142,0.12)" }}
                  >
                    <MessageSquare className="w-6 h-6" style={{ color: "#3ECF8E" }} />
                  </div>
                  <h3 className="font-display text-2xl font-semibold text-[#F0F0F0] tracking-[-0.02em] mb-3">
                    Message{" "}
                    <span className="font-display-italic" style={{ color: "#3ECF8E" }}>
                      received.
                    </span>
                  </h3>
                  <p className="text-[15px] text-[#C0C0C0] leading-relaxed">
                    I&apos;ll get back to you within 24 hours to schedule a call.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="space-y-6 p-7 rounded-2xl border border-white/[0.08] bg-[#0D0D0D]"
                  style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.03)" }}
                >
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="contact-name" className="block text-[11px] uppercase tracking-[0.18em] font-semibold text-[#C0C0C0] mb-2.5">
                        Full Name
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        name="name"
                        required
                        placeholder="Your name"
                        className="w-full px-4 py-3 rounded-xl text-[15px] text-[#F0F0F0] placeholder-[#555555] border border-white/[0.08] bg-[#0D0D0D] outline-none focus:ring-2 focus:ring-[#C9A84C]/30 focus:border-[#C9A84C]/40 transition-all"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-email" className="block text-[11px] uppercase tracking-[0.18em] font-semibold text-[#C0C0C0] mb-2.5">
                        Email
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        name="email"
                        required
                        placeholder="you@example.com"
                        className="w-full px-4 py-3 rounded-xl text-[15px] text-[#F0F0F0] placeholder-[#555555] border border-white/[0.08] bg-[#0D0D0D] outline-none focus:ring-2 focus:ring-[#C9A84C]/30 focus:border-[#C9A84C]/40 transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="contact-current-score" className="block text-[11px] uppercase tracking-[0.18em] font-semibold text-[#C0C0C0] mb-2.5">
                        Current Score
                      </label>
                      <input
                        id="contact-current-score"
                        type="text"
                        name="currentScore"
                        placeholder="e.g. 555 or Not yet"
                        className="w-full px-4 py-3 rounded-xl text-[15px] text-[#F0F0F0] placeholder-[#555555] border border-white/[0.08] bg-[#0D0D0D] outline-none focus:ring-2 focus:ring-[#C9A84C]/30 focus:border-[#C9A84C]/40 transition-all"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-target-score" className="block text-[11px] uppercase tracking-[0.18em] font-semibold text-[#C0C0C0] mb-2.5">
                        Target Score
                      </label>
                      <input
                        id="contact-target-score"
                        type="text"
                        name="targetScore"
                        placeholder="e.g. 675"
                        className="w-full px-4 py-3 rounded-xl text-[15px] text-[#F0F0F0] placeholder-[#555555] border border-white/[0.08] bg-[#0D0D0D] outline-none focus:ring-2 focus:ring-[#C9A84C]/30 focus:border-[#C9A84C]/40 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block text-[11px] uppercase tracking-[0.18em] font-semibold text-[#C0C0C0] mb-2.5">
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={5}
                      placeholder="Tell me about where you're at and what you're looking for..."
                      className="w-full px-4 py-3 rounded-xl text-[15px] text-[#F0F0F0] placeholder-[#555555] border border-white/[0.08] bg-[#0D0D0D] outline-none focus:ring-2 focus:ring-[#C9A84C]/30 focus:border-[#C9A84C]/40 transition-all resize-none leading-relaxed"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    aria-busy={loading}
                    className="w-full py-3.5 rounded-xl text-sm font-semibold transition-all duration-200 hover:opacity-90 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-60 disabled:hover:scale-100 flex items-center justify-center gap-2"
                    style={{ backgroundColor: "#C9A84C", color: "#0A0A0A" }}
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Sending
                      </>
                    ) : (
                      <>
                        Send Message
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Side info */}
            <div className="lg:col-span-2 space-y-5">
              <div className="group p-7 rounded-2xl border border-white/[0.08] bg-[#0D0D0D] transition-all duration-300 hover:-translate-y-0.5 hover:border-white/[0.16] hover:bg-[#111111]">
                <div className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: "rgba(201,168,76,0.1)" }}
                  >
                    <Mail className="w-4 h-4" style={{ color: "#C9A84C" }} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[11px] uppercase tracking-[0.18em] font-semibold text-[#C0C0C0] mb-1.5">
                      Email
                    </p>
                    <a
                      href="mailto:adamzakaryan17@gmail.com"
                      className="text-[14px] text-[#F0F0F0] hover:text-[#C9A84C] transition-colors break-all"
                    >
                      adamzakaryan17@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="group p-7 rounded-2xl border border-white/[0.08] bg-[#0D0D0D] transition-all duration-300 hover:-translate-y-0.5 hover:border-white/[0.16] hover:bg-[#111111]">
                <div className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: "rgba(201,168,76,0.1)" }}
                  >
                    <Clock className="w-4 h-4" style={{ color: "#C9A84C" }} />
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.18em] font-semibold text-[#C0C0C0] mb-1.5">
                      Response time
                    </p>
                    <p className="text-[14px] text-[#F0F0F0]">Within 24 hours</p>
                  </div>
                </div>
              </div>

              <div className="p-7 rounded-2xl border border-white/[0.08] bg-[#0D0D0D]">
                <p
                  className="text-[10px] font-semibold uppercase tracking-[0.22em] mb-5"
                  style={{ color: "#C9A84C" }}
                >
                  On the call
                </p>
                <ul className="space-y-3">
                  {[
                    "Review your current score and study history",
                    "Identify your highest-leverage weaknesses",
                    "Recommend the right plan for your timeline",
                    "Answer any questions you have",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span
                        className="w-1 h-1 rounded-full mt-2 flex-shrink-0"
                        style={{ backgroundColor: "#C9A84C" }}
                      />
                      <span className="text-[14px] text-[#C0C0C0] leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
