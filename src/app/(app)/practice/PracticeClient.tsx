"use client"

import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { ArrowRight, ChevronDown, Lock, RotateCcw, Search } from "lucide-react"
import type { PracticeChapterGroup, PracticeTest } from "@/lib/content"
import {
  filterPracticeGroups, isPracticeTestLocked, practiceTestLinks,
  readPracticeFilters, recommendPracticeTest,
  type PracticeAttemptSummary, type PracticeRecommendation,
} from "./catalogue"

export type { PracticeRecommendation } from "./catalogue"

const CONTROL = "min-h-11 w-full rounded-lg border border-white/[0.16] bg-[#141612] px-3 text-sm text-[#F4F1E8] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C8A85A]"
const ACTION = "inline-flex min-h-11 items-center justify-center gap-2 rounded-lg px-3 py-2 text-sm font-medium focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C8A85A]"

export default function PracticeClient({
  chapterGroups, recommendations = [], targetScore = null,
  lockTestsBeyond = null, attemptsBySlug = {}, activeSlug = null,
}: {
  chapterGroups: PracticeChapterGroup[]
  recommendations?: PracticeRecommendation[]
  targetScore?: number | null
  lockTestsBeyond?: number | null
  attemptsBySlug?: Record<string, PracticeAttemptSummary>
  activeSlug?: string | null
}) {
  const params = useSearchParams()
  const filters = readPracticeFilters(params)
  const visible = filterPracticeGroups(chapterGroups, filters, attemptsBySlug, activeSlug, lockTestsBeyond)
  const recommended = recommendPracticeTest(chapterGroups, recommendations, attemptsBySlug, lockTestsBeyond)
  const published = chapterGroups.filter((group) => !group.comingSoon)
  const tests = published.flatMap((group) => group.tests)
  const uniqueQuestions = new Set(tests.flatMap((test) => test.questionIds)).size
  const shownTests = visible.reduce((total, group) => total + group.tests.length, 0)
  const topicOptions = chapterGroups.filter((group) => !filters.section || group.section === filters.section)
  const hasFilters = filters.q || filters.section || filters.topic || filters.difficulty || filters.status || filters.unavailable

  function updateFilter(name: string, value: string) {
    const next = new URLSearchParams(params.toString())
    if (value) next.set(name, value)
    else next.delete(name)
    if (name === "section") next.delete("topic")
    window.history.replaceState(null, "", `/practice${next.size ? `?${next}` : ""}`)
  }

  return (
    <div className="mx-auto max-w-6xl space-y-6">
      <header>
        <h1 className="text-3xl font-semibold text-[#F4F1E8]">Practice</h1>
        <p className="mt-2 text-sm text-[#B9B7AE]">Chapter tests, focused practice, and your saved results.</p>
      </header>

      {recommended && (
        <section aria-labelledby="recommended-practice" className="flex flex-wrap items-center justify-between gap-4 border-y border-white/[0.12] py-5">
          <div className="min-w-0 flex-1 basis-64">
            <p className="text-sm font-medium text-[#C8A85A]">For you</p>
            <h2 id="recommended-practice" className="mt-1 text-lg font-semibold text-[#F4F1E8]">{recommended.group.chapterTitle}: {recommended.test.label}</h2>
            <p className="mt-1 text-sm text-[#B9B7AE]">{recommended.reason}</p>
            <p className="mt-2 text-sm text-[#95978D]">{recommended.test.count} questions · {difficultyLabel(recommended.test)} · No time limit</p>
          </div>
          <Link href={practiceTestLinks(recommended.test.id).start} className={`${ACTION} bg-[#C8A85A] text-[#171B17]`}>
            {activeSlug === recommended.test.id ? "Resume set" : attemptsBySlug[recommended.test.id] ? "Retake set" : "Start set"}<ArrowRight size={16} aria-hidden />
          </Link>
        </section>
      )}

      {activeSlug && activeSlug !== recommended?.test.id && (
        <Link href={practiceTestLinks(activeSlug).start} className={`${ACTION} border border-white/[0.16] text-[#F4F1E8]`}>Resume unfinished set<ArrowRight size={16} aria-hidden /></Link>
      )}

      <section aria-label="Practice filters" className="space-y-3">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5">
          <label className="block text-sm text-[#B9B7AE]">Search
            <span className="relative mt-1 block"><Search size={16} aria-hidden className="absolute left-3 top-3.5" /><input type="search" value={filters.q} onChange={(event) => updateFilter("q", event.target.value)} className={`${CONTROL} pl-9`} placeholder="Search chapters" /></span>
          </label>
          <label className="block text-sm text-[#B9B7AE]">Section<select value={filters.section} onChange={(event) => updateFilter("section", event.target.value)} className={`${CONTROL} mt-1`}><option value="">All sections</option><option>Quant</option><option>Verbal</option><option value="DI">Data Insights</option></select></label>
          <label className="block min-w-0 text-sm text-[#B9B7AE]">Topic<select value={filters.topic} onChange={(event) => updateFilter("topic", event.target.value)} className={`${CONTROL} mt-1`}><option value="">All topics</option>{topicOptions.map((group) => <option key={group.chapterSlug} value={group.chapterSlug}>{group.chapterTitle}</option>)}</select></label>
          <label className="block text-sm text-[#B9B7AE]">Difficulty<select value={filters.difficulty} onChange={(event) => updateFilter("difficulty", event.target.value)} className={`${CONTROL} mt-1`}><option value="">Any difficulty</option><option value="easy">Contains easy</option><option value="medium">Contains medium</option><option value="hard">Contains hard</option></select></label>
          <label className="block text-sm text-[#B9B7AE]">Status<select value={filters.status} onChange={(event) => updateFilter("status", event.target.value)} className={`${CONTROL} mt-1`}><option value="">All statuses</option><option value="new">Not attempted</option><option value="in-progress">In progress</option><option value="completed">Saved results</option></select></label>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-3">
          <label className="flex min-h-11 items-center gap-2 text-sm text-[#B9B7AE]"><input type="checkbox" checked={filters.unavailable} onChange={(event) => updateFilter("unavailable", event.target.checked ? "1" : "")} className="h-4 w-4 accent-[#C8A85A]" />Include unavailable tests</label>
          {hasFilters && <button type="button" className={`${ACTION} text-[#B9B7AE]`} onClick={() => window.history.replaceState(null, "", "/practice")}><RotateCcw size={16} aria-hidden />Reset filters</button>}
        </div>
        <p role="status" className="text-sm text-[#B9B7AE]">{visible.length} chapter{visible.length === 1 ? "" : "s"} shown · {shownTests} test{shownTests === 1 ? "" : "s"}</p>
        <p className="text-sm text-[#95978D]">Published chapter catalogue: {published.length} chapter{published.length === 1 ? "" : "s"} · {tests.length} test{tests.length === 1 ? "" : "s"} · {uniqueQuestions} unique chapter-test question{uniqueQuestions === 1 ? "" : "s"}. Access varies by plan.</p>
      </section>

      <section aria-label="Chapter tests" className="divide-y divide-white/[0.12] border-y border-white/[0.12]">
        {visible.map((group) => {
          const original = chapterGroups.find((item) => item.chapterSlug === group.chapterSlug)!
          return <details key={group.chapterSlug} className="group py-1" open={filters.topic === group.chapterSlug || !!filters.status || !!filters.q || !!filters.difficulty || undefined}>
            <summary className="flex min-h-16 cursor-pointer list-none items-center gap-3 py-3 text-[#F4F1E8] focus-visible:outline-2 focus-visible:outline-[#C8A85A] [&::-webkit-details-marker]:hidden">
              <div className="min-w-0 flex-1"><span className="text-xs text-[#95978D]">{group.section === "DI" ? "Data Insights" : group.section}</span><h2 className="text-base font-medium">{group.chapterTitle}</h2></div>
              <span className="text-sm text-[#B9B7AE]">{group.comingSoon ? "Unavailable" : `${group.tests.length} test${group.tests.length === 1 ? "" : "s"}`}</span><ChevronDown size={18} aria-hidden className="shrink-0 transition-transform group-open:rotate-180" />
            </summary>
            {group.comingSoon ? <p className="pb-4 text-sm text-[#B9B7AE]">Practice is not yet available. <Link href={`/chapters/${group.chapterSlug}`} className="inline-flex min-h-11 items-center text-[#C8A85A] underline underline-offset-4">Read lesson</Link></p> : <div className="divide-y divide-white/[0.08] pb-3">{group.tests.map((test) => <TestRow key={test.id} test={test} attempt={attemptsBySlug[test.id]} active={activeSlug === test.id} locked={isPracticeTestLocked(original, test, lockTestsBeyond)} />)}</div>}
          </details>
        })}
        {visible.length === 0 && <div className="py-8"><h2 className="font-medium text-[#F4F1E8]">No tests match these filters</h2><button onClick={() => window.history.replaceState(null, "", "/practice")} className={`${ACTION} mt-2 text-[#C8A85A]`}><RotateCcw size={16} aria-hidden />Reset filters</button></div>}
      </section>

      <p className="text-sm leading-relaxed text-[#95978D]">{targetScore ? `Your score goal is ${targetScore}. ` : ""}Practice benchmark: aim for consistent accuracy across comparable sets, then revisit mistakes. Chapter-test percentages are not a validated GMAT score conversion; compare question counts and difficulty as well as accuracy.</p>
    </div>
  )
}

function difficultyLabel(test: PracticeTest) {
  return (["easy", "medium", "hard"] as const).filter((key) => test.difficultyMix[key] > 0).map((key) => `${test.difficultyMix[key]} ${key}`).join(", ")
}

function TestRow({ test, attempt, active, locked }: { test: PracticeTest; attempt?: PracticeAttemptSummary; active: boolean; locked: boolean }) {
  const links = practiceTestLinks(test.id, attempt)
  return <div className="flex flex-wrap items-center justify-between gap-3 py-3 sm:pl-3">
    <div className="min-w-0 flex-1 basis-48">
      <h3 className="text-sm font-medium text-[#F4F1E8]">{test.label}{active ? " · In progress" : attempt ? " · Saved results" : " · Not attempted"}</h3>
      <p className="mt-1 text-sm text-[#B9B7AE]">{test.count} questions · {difficultyLabel(test)}</p>
      {attempt && <p className="mt-1 text-sm tabular-nums text-[#95978D]">Last saved: {attempt.lastCorrect}/{attempt.lastTotal} answered correctly{attempt.lastTotal !== test.count ? " (past attempt size differs from this set)" : ""}</p>}
    </div>
    <div className="flex flex-wrap items-center gap-1">
      {links.results && <Link href={links.results} className={`${ACTION} text-[#C8A85A]`} aria-label={`View results for ${test.label}`}>View results</Link>}
      {links.answers && <Link href={links.answers} className={`${ACTION} text-[#B9B7AE]`} aria-label={`Review answers for ${test.label}`}>Review answers</Link>}
      <Link href={locked ? "/pricing" : links.start} className={`${ACTION} border border-white/[0.16] text-[#F4F1E8]`} aria-label={`${locked ? "Unlock" : active ? "Resume" : attempt ? "Retake" : "Start"} ${test.label}`}>
        {locked ? <Lock size={16} aria-hidden /> : attempt && !active ? <RotateCcw size={16} aria-hidden /> : <ArrowRight size={16} aria-hidden />}{locked ? "See access" : active ? "Resume" : attempt ? "Retake" : "Start"}
      </Link>
    </div>
  </div>
}
