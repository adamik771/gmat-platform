"use client"

import { useState } from "react"
import { Mail, Clock, MessageSquare, ArrowRight } from "lucide-react"

export default function ContactPage() {
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28">
        <div className="max-w-xl mx-auto text-center mb-14">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-4"
            style={{ color: "#C9A84C" }}
          >
            Contact
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-[#F0F0F0] mb-4">
            Book a free 20-min call.
          </h1>
          <p className="text-[#888888]">
            Tell me about your situation. We'll figure out the right plan together.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 max-w-4xl mx-auto">
          {/* Form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div
                className="p-8 rounded-xl border text-center"
                style={{
                  borderColor: "rgba(62,207,142,0.3)",
                  backgroundColor: "rgba(62,207,142,0.05)",
                }}
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: "rgba(62,207,142,0.12)" }}
                >
                  <MessageSquare className="w-6 h-6" style={{ color: "#3ECF8E" }} />
                </div>
                <h3 className="text-lg font-semibold text-[#F0F0F0] mb-2">
                  Message received!
                </h3>
                <p className="text-sm text-[#888888]">
                  I'll get back to you within 24 hours to schedule a call.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-5 p-6 rounded-xl border border-white/[0.08] bg-[#111111]"
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-medium text-[#888888] mb-1.5">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Your name"
                      className="w-full px-3.5 py-2.5 rounded-lg text-sm text-[#F0F0F0] placeholder-[#444444] outline-none focus:border-[#C9A84C]/50 transition-colors"
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
                      name="email"
                      required
                      placeholder="you@example.com"
                      className="w-full px-3.5 py-2.5 rounded-lg text-sm text-[#F0F0F0] placeholder-[#444444] outline-none transition-colors"
                      style={{
                        backgroundColor: "#1A1A1A",
                        border: "1px solid rgba(255,255,255,0.08)",
                      }}
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-medium text-[#888888] mb-1.5">
                      Current Score (or &quot;Not taken yet&quot;)
                    </label>
                    <input
                      type="text"
                      name="currentScore"
                      placeholder="e.g. 590"
                      className="w-full px-3.5 py-2.5 rounded-lg text-sm text-[#F0F0F0] placeholder-[#444444] outline-none transition-colors"
                      style={{
                        backgroundColor: "#1A1A1A",
                        border: "1px solid rgba(255,255,255,0.08)",
                      }}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-[#888888] mb-1.5">
                      Target Score
                    </label>
                    <input
                      type="text"
                      name="targetScore"
                      placeholder="e.g. 720"
                      className="w-full px-3.5 py-2.5 rounded-lg text-sm text-[#F0F0F0] placeholder-[#444444] outline-none transition-colors"
                      style={{
                        backgroundColor: "#1A1A1A",
                        border: "1px solid rgba(255,255,255,0.08)",
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#888888] mb-1.5">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Tell me about where you're at and what you're looking for..."
                    className="w-full px-3.5 py-2.5 rounded-lg text-sm text-[#F0F0F0] placeholder-[#444444] outline-none transition-colors resize-none"
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
                  {loading ? "Sending..." : "Send Message"}
                  {!loading && <ArrowRight className="w-4 h-4" />}
                </button>
              </form>
            )}
          </div>

          {/* Side info */}
          <div className="lg:col-span-2 space-y-6">
            <div
              className="p-5 rounded-xl border border-white/[0.08] bg-[#111111]"
            >
              <div className="flex items-start gap-3">
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: "rgba(201,168,76,0.1)" }}
                >
                  <Mail className="w-4 h-4" style={{ color: "#C9A84C" }} />
                </div>
                <div>
                  <p className="text-sm font-medium text-[#F0F0F0] mb-1">Email</p>
                  <a
                    href="mailto:adamzakaryan17@gmail.com"
                    className="text-xs text-[#888888] hover:text-[#C9A84C] transition-colors"
                  >
                    adamzakaryan17@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl border border-white/[0.08] bg-[#111111]">
              <div className="flex items-start gap-3">
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: "rgba(201,168,76,0.1)" }}
                >
                  <Clock className="w-4 h-4" style={{ color: "#C9A84C" }} />
                </div>
                <div>
                  <p className="text-sm font-medium text-[#F0F0F0] mb-1">Response time</p>
                  <p className="text-xs text-[#888888]">Within 24 hours</p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl border border-white/[0.08] bg-[#111111]">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#555555] mb-3">
                What to expect on the call
              </p>
              <ul className="space-y-2">
                {[
                  "Review your current score and study history",
                  "Identify your highest-leverage weaknesses",
                  "Recommend the right plan for your timeline",
                  "Answer any questions you have",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span
                      className="w-1 h-1 rounded-full mt-2 flex-shrink-0"
                      style={{ backgroundColor: "#C9A84C" }}
                    />
                    <span className="text-xs text-[#888888]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
