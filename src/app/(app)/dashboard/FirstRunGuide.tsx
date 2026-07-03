"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight, BookOpen, Check, ClipboardCheck, Repeat, Target } from "lucide-react"
import { createSupabaseBrowser } from "@/lib/supabase/browser"

/**
 * First-run orientation for a brand-new account: the four moves that put a
 * student inside the product loop, each with a live done-state and a direct
 * CTA. Beta users reported getting lost right after signup — the intake
 * wizard collects their goals, but nothing said what to actually DO first.
 *
 * Deliberately transient: the dashboard renders it only while the account is
 * genuinely at the start (no baseline, fewer than 3 sessions) and it can be
 * skipped forever with one click (user_metadata.guide_dismissed_at — a
 * top-level scalar on purpose: writing a nested object via auth.updateUser
 * would replace the whole `onboarding` object and clobber completedAt).
 */
export default function FirstRunGuide({
  chapterStarted,
  practiced,
  reviewDue,
}: {
  chapterStarted: boolean
  practiced: boolean
  reviewDue: number
}) {
  const [hidden, setHidden] = useState(false)
  const [skipping, setSkipping] = useState(false)
  if (hidden) return null

  const handleSkip = async () => {
    setSkipping(true)
    try {
      const supabase = createSupabaseBrowser()
      await supabase.auth.updateUser({
        data: { guide_dismissed_at: new Date().toISOString() },
      })
    } catch {
      // Non-fatal: it reappears next visit at worst.
    }
    setHidden(true)
  }

  const steps: Array<{
    icon: typeof BookOpen
    title: string
    detail: string
    href: string
    cta: string
    done: boolean
  }> = [
    {
      icon: BookOpen,
      title: "Skim your first chapter",
      detail:
        "Ten minutes. See how the teaching works: short reading, a recall check, then a graded problem set.",
      href: "/chapters",
      cta: "Open chapters",
      done: chapterStarted,
    },
    {
      icon: ClipboardCheck,
      title: "Run a short practice set",
      detail:
        "Answer a handful of questions and end whenever you like — only what you answer counts. Misses feed your review queue automatically.",
      href: "/practice",
      cta: "Start practicing",
      done: practiced,
    },
    {
      icon: Target,
      title: "Set your baseline when you're ready",
      detail:
        "Take a free official practice exam on mba.com (2h 15m, treat it like test day), then enter the scores here. That one number unlocks your study plan and analytics.",
      href: "/mock",
      cta: "About the baseline",
      done: false,
    },
    {
      icon: Repeat,
      title: "Come back tomorrow for review",
      detail:
        reviewDue > 0
          ? `Your daily queue re-tests what you missed at the right spacing — ${reviewDue} item${reviewDue === 1 ? "" : "s"} waiting already.`
          : "Your daily queue re-tests what you missed at the right spacing. It fills up as you practice.",
      href: "/review",
      cta: "See the queue",
      done: false,
    },
  ]

  const firstOpenIdx = steps.findIndex((s) => !s.done)

  return (
    <section
      className="rounded-2xl border overflow-hidden"
      style={{
        borderColor: "rgba(201,168,76,0.28)",
        backgroundColor: "rgba(201,168,76,0.05)",
      }}
    >
      <div className="flex items-start justify-between gap-4 px-5 sm:px-6 pt-5">
        <div>
          <p
            className="text-[10px] font-semibold uppercase tracking-[0.22em] mb-1.5"
            style={{ color: "#C9A84C" }}
          >
            First steps
          </p>
          <h2 className="font-display text-xl sm:text-2xl font-semibold text-[#F0F0F0] tracking-tight">
            Your first hour, mapped out
          </h2>
          <p className="text-[13px] text-[#888888] mt-1 leading-relaxed">
            Four moves and you&apos;re inside the loop. This guide retires on
            its own once you&apos;re rolling.
          </p>
        </div>
        <button
          type="button"
          onClick={handleSkip}
          disabled={skipping}
          className="text-[12px] text-[#888888] hover:text-[#C0C0C0] transition-colors flex-shrink-0 disabled:opacity-50"
        >
          {skipping ? "Hiding…" : "Skip the guide"}
        </button>
      </div>

      <ol className="px-3 sm:px-4 py-4 space-y-1.5">
        {steps.map((step, i) => {
          const Icon = step.icon
          const isNext = i === firstOpenIdx
          return (
            <li
              key={step.title}
              className="flex items-start gap-3.5 rounded-xl px-2.5 sm:px-3 py-3"
              style={
                isNext
                  ? {
                      backgroundColor: "rgba(201,168,76,0.07)",
                      border: "1px solid rgba(201,168,76,0.2)",
                    }
                  : undefined
              }
            >
              <div
                className="flex items-center justify-center w-7 h-7 rounded-full flex-shrink-0 mt-0.5"
                style={{
                  backgroundColor: step.done
                    ? "rgba(62,207,142,0.14)"
                    : "rgba(201,168,76,0.12)",
                }}
              >
                {step.done ? (
                  <Check className="w-3.5 h-3.5" style={{ color: "#3ECF8E" }} />
                ) : (
                  <Icon className="w-3.5 h-3.5" style={{ color: "#C9A84C" }} />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <p
                  className="text-[14px] font-semibold tracking-tight"
                  style={{
                    color: step.done ? "#888888" : "#F0F0F0",
                    textDecoration: step.done ? "line-through" : undefined,
                  }}
                >
                  {step.title}
                </p>
                {!step.done && (
                  <p className="text-[12px] text-[#888888] leading-relaxed mt-0.5">
                    {step.detail}
                  </p>
                )}
              </div>
              {!step.done && (
                <Link
                  href={step.href}
                  className="inline-flex items-center gap-1.5 text-[12px] font-semibold flex-shrink-0 mt-1 hover:underline"
                  style={{ color: "#C9A84C" }}
                >
                  {step.cta}
                  <ArrowRight className="w-3 h-3" />
                </Link>
              )}
            </li>
          )
        })}
      </ol>
    </section>
  )
}
