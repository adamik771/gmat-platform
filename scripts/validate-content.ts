/**
 * Content validation — walks the question bank + chapter index and reports
 * data-quality issues. Exits non-zero if any ERROR-level issue is found,
 * so this can be wired into CI.
 *
 * Run: `npm run validate:content`
 *
 * Severity:
 *   ERROR    blocks release — missing required field, broken FK, duplicate id
 *   WARN     should fix soon — short explanation, missing optional taxonomy
 *   INFO     FYI — low-weight observations like uneven section coverage
 */
import { readdirSync, readFileSync } from "node:fs"
import path from "node:path"
import {
  getAllQuestions,
  getAllGuides,
  getAllChapters,
  getPracticeChapterGroups,
  type ParsedQuestion,
} from "../src/lib/content.ts"
import {
  BANK_RULES,
  TEST_CAPS,
  OMITTED_CHAPTERS,
  COMING_SOON_CHAPTERS,
  resolveChapterAssignment,
} from "../src/lib/practice-tests-map.ts"

interface Finding {
  severity: "ERROR" | "WARN" | "INFO"
  questionId?: string
  setSlug?: string
  rule: string
  detail: string
}

const findings: Finding[] = []
const push = (f: Finding) => findings.push(f)

// ============================================================================
// Load
// ============================================================================
const questions = getAllQuestions()
const guides = getAllGuides()
const chapters = getAllChapters()
const guideSlugs = new Set(guides.map((g) => g.slug))
const chapterSlugs = new Set(chapters.map((c) => c.slug))
const knownReadingSlugs = new Set([...guideSlugs, ...chapterSlugs])

console.log(
  `[validate-content] Loaded ${questions.length} questions, ${guides.length} guides, ${chapters.length} chapters.`
)

// ============================================================================
// Per-question checks
// ============================================================================

// Tuned 2026-04-28 after first run — original 80/20 thresholds flagged too
// many legit concise items. Graphics-Interpretation explanations are
// deliberately compact ("C's share = 18%. 18% of 1.5B = 270M."), and Quant
// problems like "Simplify √50." are 13 chars and valid. Floors below catch
// only truly broken / placeholder content.
const MIN_EXPLANATION_CHARS = 40
const MIN_PROMPT_CHARS = 10

for (const q of questions) {
  const ctx = { questionId: q.id, setSlug: q.setSlug }

  // Required: section
  if (!q.section || !["Quant", "Verbal", "DI"].includes(q.section)) {
    push({ ...ctx, severity: "ERROR", rule: "missing-section", detail: `Got ${JSON.stringify(q.section)}` })
  }

  // Required: subtopic
  if (!q.subtopic || q.subtopic.trim().length === 0) {
    push({ ...ctx, severity: "ERROR", rule: "missing-subtopic", detail: "Empty subtopic" })
  }

  // Required: difficulty
  if (!q.difficulty || !["Beginner", "Intermediate", "Advanced"].includes(q.difficulty)) {
    push({ ...ctx, severity: "ERROR", rule: "missing-difficulty", detail: `Got ${JSON.stringify(q.difficulty)}` })
  }

  // Required: prompt
  if (!q.prompt || q.prompt.trim().length < MIN_PROMPT_CHARS) {
    push({
      ...ctx,
      severity: "ERROR",
      rule: "short-or-missing-prompt",
      detail: `Prompt is ${q.prompt?.trim().length ?? 0} chars (min ${MIN_PROMPT_CHARS})`,
    })
  }

  // Required: answer choices (skip TPA — uses two-part structure instead)
  const isTPA = !!(q.twoPartColumns && q.twoPartCorrectAnswers)
  if (!isTPA) {
    if (!q.options || q.options.length < 2) {
      push({
        ...ctx,
        severity: "ERROR",
        rule: "missing-answer-choices",
        detail: `Got ${q.options?.length ?? 0} options`,
      })
    } else {
      // Required: valid answer-key index
      if (
        typeof q.correctAnswer !== "number" ||
        q.correctAnswer < 0 ||
        q.correctAnswer >= q.options.length
      ) {
        push({
          ...ctx,
          severity: "ERROR",
          rule: "answer-key-out-of-bounds",
          detail: `correctAnswer=${q.correctAnswer}, options.length=${q.options.length}`,
        })
      }
    }
  } else {
    // TPA-specific: two-part correct answers must be in [0, table-rows)
    // We can't know the row count without parsing the original — this
    // validator trusts the parser to reject invalid TPA tables.
    if (!q.twoPartCorrectAnswers || q.twoPartCorrectAnswers.length === 0) {
      push({
        ...ctx,
        severity: "ERROR",
        rule: "tpa-missing-correct-answers",
        detail: "Two-part question without twoPartCorrectAnswers",
      })
    }
  }

  // Required: explanation
  if (!q.explanation || q.explanation.trim().length === 0) {
    push({ ...ctx, severity: "ERROR", rule: "missing-explanation", detail: "Empty explanation" })
  } else if (q.explanation.trim().length < MIN_EXPLANATION_CHARS) {
    push({
      ...ctx,
      severity: "WARN",
      rule: "short-explanation",
      detail: `Explanation is ${q.explanation.trim().length} chars (min ${MIN_EXPLANATION_CHARS})`,
    })
  }

  // Note: the legacy "recommended field missing" warnings for fastestPath /
  // commonTrap / takeaway were removed when explanations moved to the GMAT
  // Official Guide ("OG-pure") format, which intentionally drops those fields.
  // trapType / commonTrap remain valid on curriculum-aligned items but are no
  // longer flagged when absent.

  // Related-reading FK check
  if (q.relatedReading && !knownReadingSlugs.has(q.relatedReading)) {
    push({
      ...ctx,
      severity: "ERROR",
      rule: "broken-related-reading",
      detail: `relatedReading="${q.relatedReading}" — not a known guide or chapter slug`,
    })
  }

  // Prerequisite FK check (curriculum-aligned questions only)
  if (q.prerequisite) {
    for (const slug of q.prerequisite) {
      if (!knownReadingSlugs.has(slug)) {
        push({
          ...ctx,
          severity: "ERROR",
          rule: "broken-prerequisite",
          detail: `prerequisite="${slug}" — not a known guide or chapter slug`,
        })
      }
    }
  }

  // Estimated time — INFO if missing on curriculum-aligned questions
  if (q.skill && !q.estTimeSeconds) {
    push({
      ...ctx,
      severity: "INFO",
      rule: "missing-est-time",
      detail: "Curriculum-aligned question without estTimeSeconds",
    })
  }
}

// ============================================================================
// Cross-question checks (duplicates)
// ============================================================================

// Duplicate IDs
const idMap = new Map<string, ParsedQuestion[]>()
for (const q of questions) {
  const arr = idMap.get(q.id) ?? []
  arr.push(q)
  idMap.set(q.id, arr)
}
for (const [id, arr] of idMap) {
  if (arr.length > 1) {
    push({
      severity: "ERROR",
      rule: "duplicate-id",
      detail: `Question id "${id}" appears ${arr.length} times across [${arr.map((q) => q.setSlug).join(", ")}]`,
    })
  }
}

// Duplicate complete items. Prompt-only comparison produced noisy warnings for
// RC/MSR questions with different passages and GI questions with different
// charts but intentionally generic stems. Include the full solving surface —
// context, chart, prompt, and options — so this catches questions students can
// actually recognise as repeats.
const normalize = (s: string): string =>
  s
    .replace(/[−–—]/g, "-")
    .replace(/[‘’]/g, "'")
    .replace(/[“”]/g, '"')
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase()
const promptMap = new Map<string, ParsedQuestion[]>()
for (const q of questions) {
  if (!q.prompt || q.prompt.trim().length < MIN_PROMPT_CHARS) continue
  const key = normalize(
    `${q.context ?? ""}\n${JSON.stringify(q.chartSpec ?? null)}\n${q.prompt}\n${q.options.join("\n")}`
  )
  const arr = promptMap.get(key) ?? []
  arr.push(q)
  promptMap.set(key, arr)
}
for (const [, arr] of promptMap) {
  if (arr.length > 1) {
    push({
      severity: "WARN",
      rule: "duplicate-prompt",
      detail: `${arr.length} questions share an effectively identical solving surface: ${arr.map((q) => q.id).join(", ")}`,
    })
  }
}

// ============================================================================
// Chapter content depth — counts the elevated callouts the chapter
// renderer recognizes (worked examples, traps, mental models, takeaways,
// pro tips). Surfaces thin chapters as INFO so the author can see at a
// glance which ones still need depth before beta.
// ============================================================================

interface CalloutCounts {
  example: number  // **Example.** OR **Worked example.**
  trap: number
  mentalModel: number
  takeaway: number
  tip: number
}

function countCallouts(body: string): CalloutCounts {
  const counts: CalloutCounts = {
    example: 0,
    trap: 0,
    mentalModel: 0,
    takeaway: 0,
    tip: 0,
  }
  // Match a paragraph-leading bold prefix, e.g. "**Trap to watch.**"
  // anywhere on a line (start-of-line or after a blank line).
  const lines = body.split("\n")
  for (const raw of lines) {
    const line = raw.trim().replace(/^>\s*/, "")
    const match = line.match(/^\*\*([^*]+?)\*\*/)
    if (!match) continue
    const label = match[1].trim().replace(/[.:]+$/, "").trim().toLowerCase()
    if (/^(example|example\s|worked example|illustrated example|example\s\(.*\)|example\s\d|example\s\d\s—)/.test(label) || label.startsWith("example ") || label === "example") {
      counts.example++
    } else if (/^(trap to watch|common trap|trap pattern|trap)(?:\s|$)/.test(label)) {
      counts.trap++
    } else if (/^(mental model|the mental model|core idea)$/.test(label)) {
      counts.mentalModel++
    } else if (/^(key takeaway|takeaway)$/.test(label)) {
      counts.takeaway++
    } else if (/^(pro tip|high.?scorer note|elite tip|speed tip)$/.test(label)) {
      counts.tip++
    }
  }
  return counts
}

const MIN_EXAMPLES_PER_CHAPTER = 5
const MIN_TRAPS_PER_CHAPTER = 1
const CONTENT_HEALTH_EXEMPT = new Set([
  "gmat-welcome",
  "quant-section-intro",
  "verbal-section-intro",
  "di-section-intro",
])

for (const c of chapters) {
  // Orientation pages frame the course rather than teach one tested skill, so
  // applying the skill-chapter example/trap quotas would reward filler.
  if (CONTENT_HEALTH_EXEMPT.has(c.slug)) continue
  let totals: CalloutCounts = {
    example: 0,
    trap: 0,
    mentalModel: 0,
    takeaway: 0,
    tip: 0,
  }
  for (const sec of c.sections) {
    const cc = countCallouts(sec.body)
    totals = {
      example: totals.example + cc.example,
      trap: totals.trap + cc.trap,
      mentalModel: totals.mentalModel + cc.mentalModel,
      takeaway: totals.takeaway + cc.takeaway,
      tip: totals.tip + cc.tip,
    }
  }
  if (totals.example < MIN_EXAMPLES_PER_CHAPTER) {
    push({
      severity: "INFO",
      setSlug: c.slug,
      rule: "thin-examples",
      detail: `${totals.example} example${totals.example === 1 ? "" : "s"} (target ≥ ${MIN_EXAMPLES_PER_CHAPTER})`,
    })
  }
  if (totals.trap < MIN_TRAPS_PER_CHAPTER) {
    push({
      severity: "INFO",
      setSlug: c.slug,
      rule: "no-trap-callouts",
      detail: `0 trap callouts — add at least one **Trap to watch.** block per major method`,
    })
  }
  const readingSectionCount = c.sections.filter((section) => section.type === "reading").length
  if (totals.mentalModel === 0 && readingSectionCount >= 4) {
    push({
      severity: "INFO",
      setSlug: c.slug,
      rule: "no-mental-model",
      detail: `Chapter has ${readingSectionCount} reading sections but no **Mental model.** callout — anchor the reader's mental representation early`,
    })
  }
}

// ============================================================================
// Practice tests — per-chapter allocation health
// ============================================================================
const questionIdSet = new Set(questions.map((q) => q.id))

// Pins from chapter problem_sets: question_id -> chapters that list it.
// Hidden chapters (omitted/coming-soon) intentionally reuse type-bank questions
// as samplers and their pins are ignored by the allocator, so they don't count
// toward cross-pin conflicts.
const hiddenChapter = new Set<string>([
  ...OMITTED_CHAPTERS,
  ...COMING_SOON_CHAPTERS,
])
const pinnedIn = new Map<string, string[]>()
for (const c of chapters) {
  for (const ps of c.problemSets) {
    for (const qid of ps.questionIds) {
      if (!questionIdSet.has(qid)) {
        push({
          severity: "ERROR",
          setSlug: c.slug,
          questionId: qid,
          rule: "practice-dangling-pin",
          detail: `Chapter problem_set references a question id that does not exist: ${qid}`,
        })
      }
      if (hiddenChapter.has(c.slug)) continue
      const arr = pinnedIn.get(qid) ?? []
      arr.push(c.slug)
      pinnedIn.set(qid, arr)
    }
  }
}
for (const [qid, chs] of pinnedIn) {
  const uniq = [...new Set(chs)]
  if (uniq.length > 1) {
    push({
      severity: "WARN",
      questionId: qid,
      rule: "practice-cross-pin",
      detail: `Pinned in multiple in-scope chapters (allocator keeps the first): ${uniq.join(", ")}`,
    })
  }
}

// ERROR: the same question pinned in more than one reader slot — pretest,
// recall check, or problem set, within OR across chapters (coming-soon
// chapters included: their readers are fully visible on /chapters). A student
// following the path would hit the identical question twice, which reads as
// broken repetition. Every reader slot must pin a distinct question; pick an
// unused one from the bank (grow the bank if it has none left).
const readerPinSeen = new Map<string, string>()
for (const c of chapters) {
  const visitReaderPins = (ids: readonly string[], where: string) => {
    for (const qid of ids) {
      const prev = readerPinSeen.get(qid)
      if (prev) {
        push({
          severity: "ERROR",
          setSlug: c.slug,
          questionId: qid,
          rule: "reader-duplicate-pin",
          detail: `Also pinned at ${prev} — a reader question may be pinned exactly once across all chapters`,
        })
      } else {
        readerPinSeen.set(qid, `${c.slug}:${where}`)
      }
    }
  }
  for (const s of c.sections) {
    visitReaderPins(s.pretestQuestionIds, `pretest(${s.id})`)
    visitReaderPins(s.checkQuestionIds, `check(${s.id})`)
  }
  for (const ps of c.problemSets) {
    visitReaderPins(ps.questionIds, `problem_set(${ps.difficulty})`)
  }
}

// ERROR: a pretest section that pins no questions — it renders its "try
// these first" framing followed by nothing (the reader now drops such
// sections defensively, but an empty pretest in the source is always an
// authoring mistake).
// ERROR: any section after the summary — the summary must close the
// chapter, or "review what you learned" appears mid-read.
for (const c of chapters) {
  const summaryIdx = c.sections.findIndex((s) => s.type === "summary")
  c.sections.forEach((s, i) => {
    if (s.type === "pretest" && s.pretestQuestionIds.length === 0) {
      push({
        severity: "ERROR",
        setSlug: c.slug,
        rule: "chapter-empty-pretest",
        detail: `Pretest section "${s.id}" pins no questions — add pretest_question_ids or remove the section`,
      })
    }
    if (summaryIdx !== -1 && i > summaryIdx) {
      push({
        severity: "ERROR",
        setSlug: c.slug,
        rule: "chapter-content-after-summary",
        detail: `Section "${s.id}" comes after the summary — reorder so the summary closes the chapter`,
      })
    }
  })
}

// ============================================================================
// Content-audit rules (2026-07-13 academic audit) — raw-field canon, DS
// placement, tier alignment, chapter shape, reading-time sanity, GI visuals.
// ============================================================================

// ERROR: raw difficulty label outside the canonical Easy/Medium/Hard
// vocabulary. The loader silently maps aliases ("Challenge", "Medium-Hard")
// and typos fall through to Intermediate — so a misspelled label mis-tiers a
// question with no visible failure. Keep the source canonical.
{
  const QUESTIONS_DIR = path.join(process.cwd(), "src", "content", "questions")
  const walk = (dir: string): string[] =>
    readdirSync(dir, { withFileTypes: true }).flatMap((e) =>
      e.isDirectory() ? walk(path.join(dir, e.name)) : e.name.endsWith(".md") ? [path.join(dir, e.name)] : []
    )
  for (const file of walk(QUESTIONS_DIR)) {
    const rel = path.relative(QUESTIONS_DIR, file)
    const lines = readFileSync(file, "utf8").split("\n")
    lines.forEach((line, i) => {
      const m = line.match(/^\*\*difficulty:\*\*\s*(.+?)\s*$/)
      if (m && !["Easy", "Medium", "Hard"].includes(m[1])) {
        push({
          severity: "ERROR",
          setSlug: rel,
          rule: "question-difficulty-noncanonical",
          detail: `${rel}:${i + 1} difficulty "${m[1]}" — use Easy/Medium/Hard`,
        })
      }
    })
  }
}

// ERROR: a Verbal bank question whose topic label is outside the canonical
// skill vocabulary. Chapter-test routing keyword-matches the topic label
// (practice-tests-map BANK_RULES), and an off-vocabulary label silently falls
// through to the bank's catch-all chapter — the question then surfaces in the
// wrong skill chapter with no visible failure (the 2026-07 student complaint).
// Variant suffixes after an em dash ("Strengthen — Rule Out Confounder") are
// allowed; the base label must be canonical.
{
  const VERBAL_CANONICAL_TOPICS: Record<string, Set<string>> = {
    "critical-reasoning": new Set([
      "Strengthen", "Weaken", "Assumption", "Inference", "Evaluate",
      "Evaluate the Argument", "Flaw", "Flaw in Reasoning", "Flaw / Logical Error",
      "Paradox", "Paradox / Resolve the Discrepancy", "Boldface",
      "Complete the Argument", "Answer-Choice Traps", "Answer Traps",
      "Main Conclusion", "Method of Reasoning", "Role in Argument",
    ]),
    "reading-comprehension": new Set([
      "Main Idea", "Specific Detail", "Inference", "Application", "Function",
      "Author's Attitude", "Passage Structure", "Answer Traps",
    ]),
    "verbal-foundations": new Set([
      "Conclusion", "Premise", "Assumption", "Argument Structure", "Active Reading",
    ]),
  }
  for (const q of questions) {
    const canon = VERBAL_CANONICAL_TOPICS[q.setSlug]
    if (!canon) continue
    const base = q.subtopic.split(" — ")[0].trim()
    if (!canon.has(base)) {
      push({
        severity: "ERROR",
        questionId: q.id,
        setSlug: q.setSlug,
        rule: "verbal-topic-noncanonical",
        detail: `topic "${q.subtopic}" is not in the canonical ${q.setSlug} skill vocabulary — it would route via the bank catch-all into the wrong chapter`,
      })
    }
  }
}

// WARN: a Data Sufficiency question pinned inside a Quant chapter. On the
// GMAT Focus Edition DS lives only in Data Insights (the parser already
// forces q.section to DI), so a DS item in a Quant chapter's pretest/check/
// problem set contradicts the course's own teaching. Re-pin to a Problem
// Solving item, or consciously keep it and accept the warning.
{
  const qById = new Map(questions.map((q) => [q.id, q]))
  for (const c of chapters) {
    if (c.section !== "Quant") continue
    const visit = (ids: readonly string[], where: string) => {
      for (const qid of ids) {
        const q = qById.get(qid)
        if (q && q.type === "Data Sufficiency") {
          push({
            severity: "WARN",
            setSlug: c.slug,
            questionId: qid,
            rule: "ds-pinned-in-quant-chapter",
            detail: `${where} pins a Data Sufficiency item inside a Quant chapter`,
          })
        }
      }
    }
    for (const s of c.sections) {
      visit(s.pretestQuestionIds, `pretest(${s.id})`)
      visit(s.checkQuestionIds, `check(${s.id})`)
    }
    for (const ps of c.problemSets) visit(ps.questionIds, `problem_set(${ps.difficulty})`)
  }
}

// Problem-set labels are relative to the skill being taught, while question
// labels are calibrated globally across the bank. An Intermediate Boldface
// set can therefore legitimately contain globally Advanced questions. Adjacent
// tiers are permitted scaffolding; a two-tier jump is still never acceptable
// (an Easy set must not contain an Advanced item, or vice versa).
{
  const qById = new Map(questions.map((q) => [q.id, q]))
  const tierToDifficulty = { easy: "Beginner", medium: "Intermediate", hard: "Advanced" } as const
  const rank = { Beginner: 0, Intermediate: 1, Advanced: 2 } as const
  for (const c of chapters) {
    for (const ps of c.problemSets) {
      for (const qid of ps.questionIds) {
        const q = qById.get(qid)
        if (q && q.difficulty !== tierToDifficulty[ps.difficulty]) {
          const gap = Math.abs(rank[q.difficulty] - rank[tierToDifficulty[ps.difficulty]])
          if (gap >= 2) {
            push({
              severity: "ERROR",
              setSlug: c.slug,
              questionId: qid,
              rule: "problem-set-two-tier-mismatch",
              detail: `${ps.difficulty} set pins a ${q.difficulty}-tier question`,
            })
          }
        }
      }
    }
  }
}

// Chapter shape: INFO when a skill chapter lacks a pretest ("try before you
// learn") or a closing summary. Orientation chapters are exempt by design.
{
  const ORIENTATION = new Set(["gmat-welcome", "quant-section-intro", "verbal-section-intro", "di-section-intro"])
  for (const c of chapters) {
    if (ORIENTATION.has(c.slug)) continue
    const types = c.sections.map((s) => s.type)
    if (!types.includes("pretest")) {
      push({ severity: "INFO", setSlug: c.slug, rule: "chapter-no-pretest", detail: "Skill chapter without a try-before-you-learn pretest" })
    }
    if (!types.includes("summary")) {
      push({ severity: "INFO", setSlug: c.slug, rule: "chapter-no-summary", detail: "Chapter has no closing summary section" })
    }
  }
}

// WARN: estimated_minutes implies an impossible reading speed. The author's
// calibrated chapters read at ~90-240 wpm; above 300 wpm the estimate is
// stale (body grew, estimate didn't) and it corrupts study-plan pacing.
for (const c of chapters) {
  const words = c.sections.reduce((n, s) => n + s.body.split(/\s+/).length, 0)
  if (c.estimatedMinutes > 0 && words > 0) {
    const wpm = Math.round(words / c.estimatedMinutes)
    if (wpm > 300) {
      push({
        severity: "WARN",
        setSlug: c.slug,
        rule: "chapter-minutes-implausible",
        detail: `${c.estimatedMinutes} min for ${words} words = ${wpm} wpm — re-estimate`,
      })
    }
  }
}

// ERROR: a chapter's declared prerequisite comes AFTER it in the guided path
// (or doesn't exist). getAllChapters() returns guided-path order.
{
  const rank = new Map(chapters.map((c, i) => [c.slug, i]))
  for (const c of chapters) {
    for (const p of c.prerequisites) {
      if (!rank.has(p)) {
        push({ severity: "ERROR", setSlug: c.slug, rule: "broken-chapter-prerequisite", detail: `prerequisite "${p}" is not a known chapter slug` })
      } else if ((rank.get(p) as number) > (rank.get(c.slug) as number)) {
        push({
          severity: "ERROR",
          setSlug: c.slug,
          rule: "prerequisite-after-chapter",
          detail: `prerequisite "${p}" comes after this chapter in the guided path`,
        })
      }
    }
  }
}

// ERROR: a Graphics Interpretation question with no visual at all — no
// parsed chart spec and no markdown table in its prompt/context. GI that
// renders as a wall of prose is broken for students.
for (const q of questions) {
  if (q.setSlug !== "graphics-interpretation") continue
  const hasTable = /\|.*\|/.test(`${q.prompt}\n${q.context ?? ""}`)
  if (!q.chartSpec && !hasTable) {
    push({
      severity: "ERROR",
      questionId: q.id,
      rule: "gi-question-missing-visual",
      detail: "GI question has neither a chart spec nor a table",
    })
  }
}

// INFO: old-scale GMAT score anchors ("700+ scorer", "600-level") in teaching
// content. Focus totals end in 5 (gmat-welcome: "705 exists, 700 does not"),
// and old-scale numbers don't map 1:1 onto Focus difficulty — rewrite to
// Focus anchors or scale-free language ("top scorers", "the hardest items").
{
  const CONTENT_DIR = path.join(process.cwd(), "src", "content")
  for (const sub of ["chapters", "guides", "lessons"]) {
    const dir = path.join(CONTENT_DIR, sub)
    for (const name of readdirSync(dir)) {
      if (!name.endsWith(".md")) continue
      const lines = readFileSync(path.join(dir, name), "utf8").split("\n")
      lines.forEach((line, i) => {
        if (/\b[4567][05]0(\+(?!\d)|[- ]?(level|scorers?|test-?takers?))/i.test(line)) {
          push({
            severity: "INFO",
            setSlug: `${sub}/${name}`,
            rule: "old-scale-score-anchor",
            detail: `${sub}/${name}:${i + 1} "${line.trim().slice(0, 80)}"`,
          })
        }
      })
    }
  }
}

// WARN: any shared-bank question that falls to the bank default. Every current
// subtopic is intentionally mapped; the default exists only as a runtime safety
// net so a future upload cannot make the practice page fail completely.
const bankTotals = new Map<string, { total: number; viaDefault: number }>()
for (const q of questions) {
  if (!(q.setSlug in BANK_RULES)) continue
  const { viaDefault } = resolveChapterAssignment(q.setSlug, q.subtopic)
  const t = bankTotals.get(q.setSlug) ?? { total: 0, viaDefault: 0 }
  t.total++
  if (viaDefault) t.viaDefault++
  bankTotals.set(q.setSlug, t)
}
for (const [bank, t] of bankTotals) {
  if (t.viaDefault > 0) {
    push({
      severity: "WARN",
      setSlug: bank,
      rule: "practice-default-routed",
      detail: `${t.viaDefault}/${t.total} used an unrecognized subtopic and fell through to the bank's safety-net chapter — add an explicit rule in practice-tests-map.ts`,
    })
  }
}

// WARN: thin chapter (a single sub-cap test) so authors know where to add questions.
const practiceGroups = getPracticeChapterGroups()
for (const g of practiceGroups) {
  if (g.comingSoon) continue
  const total = g.tests.reduce((s, t) => s + t.count, 0)
  const cap = TEST_CAPS[g.section]
  if (total < cap) {
    push({
      severity: "WARN",
      setSlug: g.chapterSlug,
      rule: "practice-thin-chapter",
      detail: `${total} question${total === 1 ? "" : "s"} (< cap ${cap}) — only one short test; add more to fill it out`,
    })
  }
}

// ============================================================================
// Coverage rollups (informational)
// ============================================================================

const counts = { Quant: 0, Verbal: 0, DI: 0 }
for (const q of questions) {
  if (q.section in counts) counts[q.section as keyof typeof counts]++
}
const chapterCounts = { Quant: 0, Verbal: 0, DI: 0, General: 0 }
for (const c of chapters) {
  // Chapters carry a section-style frontmatter we can't access without
  // reading the file again. Use the slug prefix as a heuristic.
  if (c.slug.startsWith("quant")) chapterCounts.Quant++
  else if (c.slug.startsWith("verbal")) chapterCounts.Verbal++
  else if (c.slug.startsWith("di") || c.slug.startsWith("data-")) chapterCounts.DI++
  else chapterCounts.General++
}

// ============================================================================
// Output
// ============================================================================

const errors = findings.filter((f) => f.severity === "ERROR")
const warns = findings.filter((f) => f.severity === "WARN")
const infos = findings.filter((f) => f.severity === "INFO")

function printGroup(label: string, group: Finding[]) {
  if (group.length === 0) return
  console.log(`\n${label} (${group.length})`)
  console.log("─".repeat(60))
  // Group by rule
  const byRule = new Map<string, Finding[]>()
  for (const f of group) {
    const arr = byRule.get(f.rule) ?? []
    arr.push(f)
    byRule.set(f.rule, arr)
  }
  for (const [rule, arr] of byRule) {
    console.log(`\n  ${rule} × ${arr.length}`)
    // Show up to 5 examples per rule
    for (const f of arr.slice(0, 5)) {
      const loc = f.questionId ? `[${f.questionId}]` : f.setSlug ? `[${f.setSlug}]` : ""
      console.log(`    ${loc} ${f.detail}`)
    }
    if (arr.length > 5) {
      console.log(`    … ${arr.length - 5} more`)
    }
  }
}

printGroup("ERRORS", errors)
printGroup("WARNINGS", warns)
printGroup("INFO", infos)

console.log("\n" + "═".repeat(60))
console.log(`Coverage:`)
console.log(`  Quant   : ${counts.Quant.toString().padStart(3)} questions   ${chapterCounts.Quant.toString().padStart(2)} chapters`)
console.log(`  Verbal  : ${counts.Verbal.toString().padStart(3)} questions   ${chapterCounts.Verbal.toString().padStart(2)} chapters`)
console.log(`  DI      : ${counts.DI.toString().padStart(3)} questions   ${chapterCounts.DI.toString().padStart(2)} chapters`)
console.log(`  General : ${"".padStart(3)}   ${chapterCounts.General.toString().padStart(2)} chapters`)

const ptRoll = {
  Quant: { ch: 0, t: 0, q: 0 },
  Verbal: { ch: 0, t: 0, q: 0 },
  DI: { ch: 0, t: 0, q: 0 },
}
let ptComingSoon = 0
for (const g of practiceGroups) {
  if (g.comingSoon) {
    ptComingSoon++
    continue
  }
  const s = ptRoll[g.section as keyof typeof ptRoll]
  s.ch++
  s.t += g.tests.length
  s.q += g.tests.reduce((a, t) => a + t.count, 0)
}
console.log(`\nPractice tests:`)
for (const sec of ["Quant", "Verbal", "DI"] as const) {
  console.log(
    `  ${sec.padEnd(7)}: ${ptRoll[sec].ch.toString().padStart(2)} chapters   ${ptRoll[sec].t.toString().padStart(3)} tests   ${ptRoll[sec].q.toString().padStart(3)} questions`
  )
}
console.log(`  Coming soon: ${ptComingSoon} chapters`)

console.log(`\nTotals:`)
console.log(`  ${errors.length} errors, ${warns.length} warnings, ${infos.length} info`)

if (errors.length > 0) {
  console.log(`\nERRORS block release. Fix them and re-run.`)
  process.exit(1)
}
console.log(`\nNo blocking errors.`)
process.exit(0)
