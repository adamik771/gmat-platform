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

// Duplicate prompts (normalize whitespace, lowercase, full text — a prefix
// comparison false-positives on TA/GI set questions that share an inlined
// table/graph block but ask different things after it)
const normalize = (s: string): string =>
  s.replace(/\s+/g, " ").trim().toLowerCase()
const promptMap = new Map<string, ParsedQuestion[]>()
for (const q of questions) {
  if (!q.prompt || q.prompt.trim().length < MIN_PROMPT_CHARS) continue
  const key = normalize(q.prompt)
  const arr = promptMap.get(key) ?? []
  arr.push(q)
  promptMap.set(key, arr)
}
for (const [, arr] of promptMap) {
  if (arr.length > 1) {
    push({
      severity: "WARN",
      rule: "duplicate-prompt",
      detail: `${arr.length} questions share an effectively identical prompt: ${arr.map((q) => q.id).join(", ")}`,
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
    const line = raw.trim()
    const match = line.match(/^\*\*([^*]+?)\*\*/)
    if (!match) continue
    const label = match[1].trim().replace(/[.:]+$/, "").trim().toLowerCase()
    if (/^(example|example\s|worked example|illustrated example|example\s\(.*\)|example\s\d|example\s\d\s—)/.test(label) || label.startsWith("example ") || label === "example") {
      counts.example++
    } else if (/^(trap to watch|common trap|trap pattern|trap)$/.test(label)) {
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

for (const c of chapters) {
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
  if (totals.mentalModel === 0 && c.sections.length >= 4) {
    push({
      severity: "INFO",
      setSlug: c.slug,
      rule: "no-mental-model",
      detail: `Chapter has ${c.sections.length} sections but no **Mental model.** callout — anchor the reader's mental representation early`,
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

// WARN: share of a shared bank's questions that fall to the bank default
// (no subtopic keyword matched) — a spike means uploads use unrecognized tags.
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
  const share = t.total > 0 ? t.viaDefault / t.total : 0
  if (share > 0.25) {
    push({
      severity: "INFO",
      setSlug: bank,
      rule: "practice-default-routed",
      detail: `${t.viaDefault}/${t.total} (${Math.round(share * 100)}%) used no chapter-specific keyword and routed to the bank's default chapter (fine when the default is the dominant chapter; add keywords in practice-tests-map.ts to split further)`,
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
