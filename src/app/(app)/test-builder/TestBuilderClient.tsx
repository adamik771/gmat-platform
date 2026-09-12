"use client"

import { useMemo, useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { ArrowRight, Clock, Loader2, RotateCcw, TriangleAlert } from "lucide-react"
import { planCustomSet } from "@/lib/question-selection"
import type { Difficulty, Section } from "@/types"
import { filterBuilderPool, topicKey, type DifficultyPick } from "./selection"

export interface QuestionPoolEntry {
  id: string
  section: Section
  topic: string
  difficulty: Difficulty
  type: string
  correctAnswerLetter: string
  lastSeenAt?: number
}

export interface RecentCustomTest {
  id: string
  topic: string
  section: string
  totalQuestions: number
  correctCount: number
  accuracy: number
  createdAt: string
}

const SECTIONS: Section[] = ["Quant", "Verbal", "DI"]
const CONTROL = "min-h-11 rounded-lg border border-white/[0.16] bg-[#141612] px-3 text-sm text-[#F4F1E8] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C8A85A]"

export default function TestBuilderClient({ pool, recent }: { pool: QuestionPoolEntry[]; recent: RecentCustomTest[] }) {
  const [sections, setSections] = useState<Section[]>([])
  const [topics, setTopics] = useState<string[]>([])
  const [difficulty, setDifficulty] = useState<DifficultyPick>("Mixed")
  const [numQuestions, setNumQuestions] = useState(20)
  const [countDraft, setCountDraft] = useState("20")
  const [building, setBuilding] = useState(false)
  const [seed, setSeed] = useState(() => Date.now() % 1_000_000)
  const router = useRouter()

  function setCount(value: number) {
    const next = Number.isFinite(value) ? Math.max(1, Math.min(100, Math.round(value))) : 20
    setNumQuestions(next)
    setCountDraft(String(next))
  }

  function toggleSection(section: Section) {
    const next = sections.includes(section) ? sections.filter((item) => item !== section) : [...sections, section]
    setSections(next)
    setTopics((selected) => selected.filter((key) => next.some((item) => key.startsWith(`${item}:`))))
  }

  const topicOptions = useMemo(() => {
    const options = new Map<string, { key: string; section: Section; label: string; count: number }>()
    for (const question of pool) {
      if (!sections.includes(question.section)) continue
      const key = topicKey(question)
      const option = options.get(key) ?? { key, section: question.section, label: question.topic, count: 0 }
      option.count++
      options.set(key, option)
    }
    return [...options.values()].sort((a, b) => a.section.localeCompare(b.section) || a.label.localeCompare(b.label))
  }, [pool, sections])
  const matchingPool = useMemo(() => filterBuilderPool(pool, sections, topics, difficulty), [pool, sections, topics, difficulty])
  const available = matchingPool.length
  const effectiveCount = Math.min(numQuestions, available)
  const lastSeenById = useMemo(() => new Map(pool.filter((question) => typeof question.lastSeenAt === "number").map((question) => [question.id, question.lastSeenAt as number])), [pool])
  const plan = useMemo(() => sections.length && effectiveCount
    ? planCustomSet(matchingPool, sections, effectiveCount, lastSeenById, { seed })
    : null, [matchingPool, sections, effectiveCount, lastSeenById, seed])
  const actualCount = plan?.picked.length ?? 0
  const unseenAvailable = matchingPool.filter((question) => !lastSeenById.has(question.id)).length

  function build() {
    if (building || !plan || !plan.picked.length) return
    setBuilding(true)
    setSeed(Date.now() % 1_000_000)
    const qs = new URLSearchParams({
      ids: plan.picked.map((question) => question.id).join(","),
      topic: topics.length === 1 ? topicOptions.find((option) => option.key === topics[0])?.label ?? "Custom Test" : sections.length === 1 ? `Custom ${sections[0]}` : "Custom Mixed",
      section: sections.length === 1 ? sections[0] : "Mixed",
    })
    router.push(`/practice/session/custom?${qs}`)
  }

  return <div className="mx-auto max-w-5xl space-y-6">
    <header>
      <h1 className="text-3xl font-semibold text-[#F4F1E8]">Custom practice</h1>
      <p className="mt-2 text-sm text-[#B9B7AE]">{pool.length} total playable practice-bank questions. Questions you have not attempted are selected first.</p>
    </header>

    <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_280px]">
      <div className="min-w-0 space-y-6">
        <fieldset className="border-b border-white/[0.12] pb-5">
          <legend className="mb-2 text-base font-medium text-[#F4F1E8]">Sections</legend>
          <div className="flex flex-wrap gap-x-6 gap-y-2">{SECTIONS.map((section) => <label key={section} className="flex min-h-11 items-center gap-2 text-sm text-[#F4F1E8]"><input type="checkbox" checked={sections.includes(section)} onChange={() => toggleSection(section)} className="h-4 w-4 accent-[#C8A85A]" />{section === "DI" ? "Data Insights" : section}</label>)}</div>
          {sections.length === 0 && <p className="mt-2 text-sm text-[#B9B7AE]">Choose a section to see available questions.</p>}
        </fieldset>

        {sections.length > 0 && <fieldset className="border-b border-white/[0.12] pb-5">
          <legend className="mb-2 text-base font-medium text-[#F4F1E8]">Topics</legend>
          <div className="flex min-h-11 flex-wrap items-center justify-between gap-2 text-sm text-[#B9B7AE]">
            <p>{topics.length ? `${topics.length} topics selected` : "All topics in selected sections"}</p>
            {topics.length > 0 && <button type="button" onClick={() => setTopics([])} className="inline-flex min-h-11 items-center gap-2 text-[#C8A85A] focus-visible:outline-2 focus-visible:outline-[#C8A85A]"><RotateCcw size={16} aria-hidden />Reset topics</button>}
          </div>
          <div className="grid gap-x-5 sm:grid-cols-2">{topicOptions.map((option) => <label key={option.key} className="flex min-h-11 items-center gap-2 py-1 text-sm text-[#B9B7AE]"><input type="checkbox" checked={topics.includes(option.key)} onChange={() => setTopics((selected) => selected.includes(option.key) ? selected.filter((key) => key !== option.key) : [...selected, option.key])} className="h-4 w-4 shrink-0 accent-[#C8A85A]" /><span>{sections.length > 1 ? `${option.section}: ` : ""}{option.label} <span className="text-[#95978D]">({option.count})</span></span></label>)}</div>
        </fieldset>}

        <div className="grid gap-5 sm:grid-cols-2">
          <label className="block text-sm text-[#B9B7AE]">Number of questions<input type="number" inputMode="numeric" min={1} max={100} value={countDraft} onChange={(event) => setCountDraft(event.target.value)} onBlur={(event) => setCount(Number(event.target.value))} onKeyDown={(event) => { if (event.key === "Enter") event.currentTarget.blur() }} className={`${CONTROL} mt-2 block w-full tabular-nums`} /></label>
          <label className="block text-sm text-[#B9B7AE]">Difficulty<select value={difficulty} onChange={(event) => setDifficulty(event.target.value as DifficultyPick)} className={`${CONTROL} mt-2 block w-full`}>{["Mixed", "Easy", "Medium", "Hard"].map((value) => <option key={value}>{value}</option>)}</select></label>
        </div>
        <p className="flex items-start gap-2 text-sm leading-relaxed text-[#B9B7AE]"><Clock size={16} aria-hidden className="mt-0.5 shrink-0" />Count-up timer, no time limit. The timer starts when you open the set. Answers and time are saved when you finish or end the session.</p>
      </div>

      <aside aria-labelledby="set-summary" className="min-w-0 border-t border-white/[0.16] pt-5 lg:sticky lg:top-6">
        <h2 id="set-summary" className="text-lg font-semibold text-[#F4F1E8]">Your set</h2>
        {sections.length === 0 ? <p className="mt-3 text-sm leading-relaxed text-[#B9B7AE]">Choose a section to see available questions.</p> : <dl className="mt-4 space-y-3 text-sm" aria-live="polite">
          {[
            ["Sections", sections.map((section) => section === "DI" ? "Data Insights" : section).join(", ")],
            ["Topics", topics.length ? `${topics.length} selected` : "All selected-section topics"],
            ["Questions", `${actualCount} of ${numQuestions} requested`],
            ["Difficulty", difficulty],
            ["Matching pool", `${available} questions`],
            ["Timing", "No time limit"],
          ].map(([label, value]) => <div key={label} className="flex flex-wrap justify-between gap-2"><dt className="text-[#95978D]">{label}</dt><dd className="text-[#F4F1E8]">{value}</dd></div>)}
        </dl>}
        {sections.length > 0 && actualCount < numQuestions && <p className="mt-4 text-sm text-[#B9B7AE]">{available === 0 ? "No questions match. Change the topics or difficulty." : `This selection can provide ${actualCount} questions, fewer than the ${numQuestions} requested.`}</p>}
        {plan && plan.repeatCount > 0 && <p className="mt-4 flex items-start gap-2 text-sm text-[#C8A85A]"><TriangleAlert size={16} aria-hidden className="mt-0.5 shrink-0" /><span>{unseenAvailable} unseen questions available. This set includes {plan.repeatCount} previously attempted questions, least recent first.</span></p>}
        <button type="button" onClick={build} disabled={building || !actualCount} className="mt-5 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-lg bg-[#C8A85A] px-4 py-3 text-sm font-semibold text-[#171B17] disabled:cursor-not-allowed disabled:opacity-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C8A85A]">{building ? <Loader2 size={16} className="animate-spin" aria-hidden /> : <ArrowRight size={16} aria-hidden />}{building ? "Opening set..." : "Start practice set"}</button>
      </aside>
    </div>

    <section className="border-t border-white/[0.12] pt-6">
      <h2 className="text-lg font-semibold text-[#F4F1E8]">Recent custom results</h2>
      {recent.length === 0 ? <p className="mt-3 text-sm text-[#B9B7AE]">No saved custom sessions yet.</p> : <div className="mt-3 divide-y divide-white/[0.12]">{recent.map((test) => <Link key={test.id} href={`/practice/history/${test.id}`} className="flex flex-wrap items-center justify-between gap-3 py-4 focus-visible:outline-2 focus-visible:outline-[#C8A85A]"><span className="min-w-0 text-sm text-[#F4F1E8]">{test.topic}<span className="mt-1 block text-[#95978D]">{test.section} · {new Date(test.createdAt).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</span></span><span className="text-sm tabular-nums text-[#B9B7AE]">{test.correctCount}/{test.totalQuestions} correct · View results</span></Link>)}</div>}
    </section>
  </div>
}
