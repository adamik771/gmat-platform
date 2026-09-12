"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight, Check, ChevronDown } from "lucide-react"
import type { First48Step } from "./first48"

export default function FirstRunGuide({ steps, dismissed }: { steps: First48Step[]; dismissed: boolean }) {
  const [skipped, setSkipped] = useState(dismissed)
  const [explainerDone, setExplainerDone] = useState(steps.find((step) => step.key === "exam-types")?.done ?? false)
  const [explainerOpen, setExplainerOpen] = useState(false)
  const [saveError, setSaveError] = useState("")
  const effectiveSteps = steps.map((step) => step.key === "exam-types" ? { ...step, done: step.done || explainerDone } : step)
  const completed = effectiveSteps.filter((step) => step.done).length
  const next = effectiveSteps.find((step) => !step.done)

  async function persistScalar(key: string) {
    setSaveError("")
    try {
      const { createSupabaseBrowser } = await import("@/lib/supabase/browser")
      const { error } = await createSupabaseBrowser().auth.updateUser({ data: { [key]: new Date().toISOString() } })
      if (error) throw error
      return true
    } catch {
      setSaveError("Your guide preference could not be saved. Please try again.")
      return false
    }
  }

  async function openExplainer() {
    setExplainerOpen((open) => !open)
    if (!explainerDone && await persistScalar("guide_explainer_opened_at")) setExplainerDone(true)
  }

  return (
    <section aria-label="Getting started" className="border-y border-white/10 py-4 text-sm">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="font-medium text-[#F4F1E8]">Getting started <span className="ml-2 font-normal text-[#B9B7AE]">{completed} of {effectiveSteps.length} complete</span></p>
        {!skipped && next && (
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-[#B9B7AE]">Next: {next.title}</span>
            {next.key === "exam-types" ? (
              <button type="button" onClick={openExplainer} aria-expanded={explainerOpen} className="inline-flex min-h-11 items-center gap-2 font-medium text-[#C8A85A]">{next.cta}<ChevronDown className="size-4" aria-hidden /></button>
            ) : (
              <Link href={next.href} className="inline-flex min-h-11 items-center gap-2 font-medium text-[#C8A85A]">{next.cta}<ArrowRight className="size-4" aria-hidden /></Link>
            )}
          </div>
        )}
      </div>
      {explainerOpen && (
        <div className="max-w-3xl space-y-2 py-3 text-[#B9B7AE]">
          <p><strong className="text-[#F4F1E8]">Official practice exams</strong> on mba.com are the score benchmark. Log their results in Exams; the roadmap helps you choose when to use an unseen exam.</p>
          <p><strong className="text-[#F4F1E8]">Platform mocks</strong> use our practice bank to train pacing and stamina. Their results are training feedback, not official score predictions. Retakes can repeat familiar questions.</p>
        </div>
      )}
      <details className="mt-1">
        <summary className="w-fit cursor-pointer py-2 text-[#B9B7AE]">View setup guide</summary>
        <ol className="divide-y divide-white/10">
          {effectiveSteps.map((step) => (
            <li key={step.key} className="flex flex-wrap items-center gap-3 py-3">
              <span className="flex size-5 shrink-0 items-center justify-center">{step.done ? <Check className="size-4 text-[#74C49A]" aria-label="Complete" /> : <span className="size-2 rounded-full bg-[#C8A85A]" />}</span>
              <div className="min-w-0 flex-1 basis-48"><p className={step.done ? "text-[#B9B7AE]" : "text-[#F4F1E8]"}>{step.title}</p>{!step.done && <p className="mt-1 text-[#B9B7AE]">{step.detail}</p>}</div>
              {step.key === "exam-types" ? <button type="button" onClick={openExplainer} aria-expanded={explainerOpen} className="min-h-11 text-[#C8A85A]">{explainerOpen ? "Close explanation" : step.cta}</button> : !step.done && <Link href={step.href} className="inline-flex min-h-11 items-center gap-2 text-[#C8A85A]">{step.cta}<ArrowRight className="size-4" aria-hidden /></Link>}
            </li>
          ))}
        </ol>
        {!skipped && next && <button type="button" onClick={async () => { if (await persistScalar("guide_dismissed_at")) setSkipped(true) }} className="min-h-11 text-[#B9B7AE] underline underline-offset-4">Dismiss setup reminder</button>}
      </details>
      {saveError && <p role="alert" className="mt-2 text-[#F2A4A4]">{saveError}</p>}
    </section>
  )
}
