import fs from "node:fs"
import path from "node:path"
import { parse as parseYaml } from "yaml"
import type { Difficulty, QuestionType, Section } from "@/types"

// Base directory for all markdown content
const CONTENT_ROOT = path.join(process.cwd(), "src", "content")

// ---------- Types for parsed content ----------

export interface ParsedFrontmatter {
  [key: string]: string
}

export interface ParsedQuestion {
  id: string
  number: number
  section: Section
  topic: string
  subtopic: string
  difficulty: Difficulty
  type: QuestionType
  prompt: string
  /** Shared passage / set / tab context for grouped questions (RC passages, MSR sets). */
  context?: string
  /** Slug of the source markdown file (e.g. "reading-comprehension"). */
  setSlug: string
  options: string[]
  correctAnswer: number
  correctAnswerLetter: string
  explanation: string
  rawBody: string
  /** Two-Part Analysis: column headers (the two "roles"). Present only for TPA questions. */
  twoPartColumns?: string[]
  /** Two-Part Analysis: the correct row index for each column. Same length as twoPartColumns. */
  twoPartCorrectAnswers?: number[]
}

export interface ParsedLesson {
  slug: string
  module: number
  title: string
  description: string
  section: Section | "General"
  duration: number
  content: string
}

export interface ParsedGuide {
  slug: string
  title: string
  description: string
  section: Section | "General"
  type: string
  content: string
}

// ---------- Frontmatter parser (no dependencies) ----------

function parseFrontmatter(raw: string): { frontmatter: ParsedFrontmatter; body: string } {
  if (!raw.startsWith("---")) {
    return { frontmatter: {}, body: raw }
  }

  const closeIndex = raw.indexOf("\n---", 3)
  if (closeIndex === -1) {
    return { frontmatter: {}, body: raw }
  }

  const headerBlock = raw.slice(3, closeIndex).trim()
  const body = raw.slice(closeIndex + 4).replace(/^\n+/, "")

  const frontmatter: ParsedFrontmatter = {}
  for (const line of headerBlock.split("\n")) {
    const trimmed = line.trim()
    if (!trimmed) continue
    const colonIndex = trimmed.indexOf(":")
    if (colonIndex === -1) continue
    const key = trimmed.slice(0, colonIndex).trim()
    const value = trimmed.slice(colonIndex + 1).trim().replace(/^["']|["']$/g, "")
    frontmatter[key] = value
  }

  return { frontmatter, body }
}

// ---------- Utility ----------

function sectionFromString(value: string | undefined): Section {
  if (value === "Quant" || value === "Verbal" || value === "DI") return value
  return "Quant"
}

function difficultyFromString(value: string | undefined): Difficulty {
  const normalized = (value ?? "").toLowerCase()
  if (normalized === "easy" || normalized === "beginner") return "Beginner"
  if (normalized === "hard" || normalized === "advanced") return "Advanced"
  return "Intermediate"
}

function questionTypeFromString(value: string | undefined): QuestionType {
  const allowed: QuestionType[] = [
    "Problem Solving",
    "Data Sufficiency",
    "Critical Reasoning",
    "Reading Comprehension",
    "Sentence Correction",
    "Data Insights",
    "Multi-Source Reasoning",
    "Table Analysis",
    "Graphics Interpretation",
    "Two-Part Analysis",
  ]
  if (value && (allowed as string[]).includes(value)) return value as QuestionType
  return "Problem Solving"
}

function letterToIndex(letter: string): number {
  const code = letter.trim().toUpperCase().charCodeAt(0)
  return Math.max(0, code - 65) // A=0, B=1, ...
}

// ---------- Question parser ----------

/**
 * Questions inside a file are separated by `---` lines and start with `## Qn`.
 * Each question block contains:
 *   **difficulty:** Medium
 *   **type:** Problem Solving
 *   **topic:** Linear Equations
 *
 *   <prompt text...>
 *
 *   - A) option
 *   - B) option
 *   ...
 *
 *   **answer:** B
 *   **explanation:** <text>
 */
function parseQuestionBlock(
  block: string,
  section: Section,
  topLevelTopic: string,
  fileSlug: string,
  context: string | undefined
): ParsedQuestion | null {
  // Match both "## Q1" and "### Q1" (nested inside passage/set headers).
  // Consume the full header line so any trailing text like "(Set 1 — Tech
  // Company Revenue)" is dropped rather than leaking into the prompt.
  const headerMatch = block.match(/^#{2,3}\s+Q(\d+)[^\n]*/m)
  if (!headerMatch) return null
  const questionNumber = parseInt(headerMatch[1], 10)

  const metaRegex = /\*\*(difficulty|type|topic|answer|explanation):\*\*\s*([^\n]*)/gi
  const meta: Record<string, string> = {}
  for (const match of block.matchAll(metaRegex)) {
    const key = match[1].toLowerCase()
    if (!meta[key]) {
      meta[key] = match[2].trim()
    }
  }

  // Options (lines starting with "- A)" through "- E)")
  const optionRegex = /^-\s+([A-E])\)\s*(.+)$/gm
  const options: string[] = []
  for (const match of block.matchAll(optionRegex)) {
    options.push(match[2].trim())
  }

  // Build prompt: everything between the header + meta and the first option,
  // dropping the meta lines themselves. Works for both "meta-first" blocks
  // (## Qn → meta → prompt → options) and "prompt-first" blocks like
  // table-analysis (## Qn → prose/table → meta → prompt → options).
  const firstOptionIdx = block.search(/^-\s+[A-E]\)/m)
  const promptEndIdx = firstOptionIdx === -1 ? block.length : firstOptionIdx
  const bodyAfterHeader = block.slice(headerMatch.index! + headerMatch[0].length, promptEndIdx)
  const promptLines = bodyAfterHeader
    .split("\n")
    .filter((line) => !/^\*\*(difficulty|type|topic|answer|explanation)/i.test(line.trim()))
  let prompt = promptLines.join("\n").replace(/^\n+/, "").replace(/\n+$/, "").trim()

  // ---------- Two-Part Analysis table detection ----------
  // TPA questions have a pipe table in the prompt instead of - A) through - E)
  // options. When detected, we parse the table into structured data, strip it
  // from the prompt, and set `options` to the row labels so the question passes
  // the "playable" filter in the session page.
  let twoPartColumns: string[] | undefined
  let twoPartCorrectAnswers: number[] | undefined

  if (options.length === 0) {
    const tableLines = prompt.match(/^\s*\|.+\|$/gm)
    if (tableLines && tableLines.length >= 3) {
      const splitRow = (line: string) =>
        line.split("|").map((s) => s.trim()).slice(1, -1)

      const headerCells = splitRow(tableLines[0])
      // tableLines[1] is the separator row (---|---|---)
      const dataRows = tableLines.slice(2).map(splitRow)

      const cols = headerCells.slice(1).filter((c) => c.length > 0)
      const rows = dataRows.map((cells) => cells[0]).filter((r) => r.length > 0)

      if (cols.length >= 2 && rows.length >= 2) {
        twoPartColumns = cols

        // Strip the pipe table from the prompt so the UI renders it as a
        // custom interactive grid instead of inline markdown.
        let strippedPrompt = prompt
        for (const line of tableLines) {
          strippedPrompt = strippedPrompt.replace(line, "")
        }
        prompt = strippedPrompt.replace(/\n{3,}/g, "\n\n").trim()

        // Set options to the row labels so the question is "playable".
        options.push(...rows)

        // Parse the answer string to find the correct row index for each column.
        // Answer format: "Key1 = Value1, Key2 = Value2" or "Key1 = Value1; Key2 = Value2"
        const answerRaw = meta.answer ?? ""
        const answerParts = answerRaw.split(/;\s*|,\s*(?=[A-Za-z].*=)/)
        const correctIndices: number[] = []
        for (const part of answerParts) {
          const eqIdx = part.indexOf("=")
          if (eqIdx === -1) continue
          const value = part.slice(eqIdx + 1).trim().replace(/^["']|["']$/g, "")
          const normalizedValue = value.toLowerCase()
          const rowIdx = rows.findIndex((row) => {
            const normalizedRow = row.toLowerCase()
            return (
              normalizedRow === normalizedValue ||
              normalizedRow.startsWith(normalizedValue) ||
              normalizedValue.startsWith(normalizedRow)
            )
          })
          if (rowIdx !== -1) correctIndices.push(rowIdx)
        }
        twoPartCorrectAnswers =
          correctIndices.length === cols.length ? correctIndices : undefined
      }
    }
  }

  const answerLetter = (meta.answer ?? "A").trim().toUpperCase().charAt(0)

  return {
    id: `${fileSlug}-q${questionNumber}`,
    number: questionNumber,
    section,
    topic: topLevelTopic,
    subtopic: meta.topic ?? topLevelTopic,
    difficulty: difficultyFromString(meta.difficulty),
    type: questionTypeFromString(meta.type),
    prompt,
    context,
    setSlug: fileSlug,
    options,
    correctAnswer: twoPartCorrectAnswers ? -1 : letterToIndex(answerLetter),
    correctAnswerLetter: twoPartCorrectAnswers ? "" : answerLetter,
    explanation: meta.explanation ?? "",
    rawBody: block.trim(),
    twoPartColumns,
    twoPartCorrectAnswers,
  }
}

function parseQuestionFile(filePath: string): ParsedQuestion[] {
  const raw = fs.readFileSync(filePath, "utf8")
  const { frontmatter, body } = parseFrontmatter(raw)
  const section = sectionFromString(frontmatter.section)
  const topic = frontmatter.topic ?? "General"
  const fileSlug = path.basename(filePath, ".md")

  // Split body by horizontal rules that separate questions
  const blocks = body.split(/\n---+\n/)
  const parsed: ParsedQuestion[] = []
  // Running context for grouped questions (RC passages, MSR sets). Reset each
  // time we hit a new `## Passage N:` or `## Set N:` header; carried forward
  // to every `### Qn` block until the next header.
  let currentContext: string | undefined = undefined
  for (const block of blocks) {
    // If this block opens a new group, capture the context prose (everything
    // before the first `### Qn` in the block) and reset the running context.
    const groupHeaderMatch = block.match(/^##\s+(?:Passage|Set)\s+[^\n]+/m)
    if (groupHeaderMatch) {
      const firstQuestionInBlock = block.search(/^###\s+Q\d+/m)
      currentContext = (firstQuestionInBlock === -1 ? block : block.slice(0, firstQuestionInBlock)).trim()
    }

    if (!/^#{2,3}\s+Q\d+/m.test(block)) continue

    // For grouped formats, strip the context prefix so parseQuestionBlock sees
    // only the question. For simple `## Qn` blocks, the block is unchanged.
    const questionOnly = (() => {
      if (!groupHeaderMatch) return block
      const firstQuestionIdx = block.search(/^###\s+Q\d+/m)
      return firstQuestionIdx === -1 ? block : block.slice(firstQuestionIdx)
    })()

    const question = parseQuestionBlock(questionOnly, section, topic, fileSlug, currentContext)
    if (question) parsed.push(question)
  }
  return parsed
}

// ---------- Public loaders ----------

export function getAllQuestions(): ParsedQuestion[] {
  const questionsDir = path.join(CONTENT_ROOT, "questions")
  if (!fs.existsSync(questionsDir)) return []

  const results: ParsedQuestion[] = []
  for (const sectionDir of fs.readdirSync(questionsDir)) {
    const sectionPath = path.join(questionsDir, sectionDir)
    if (!fs.statSync(sectionPath).isDirectory()) continue
    for (const file of fs.readdirSync(sectionPath)) {
      if (!file.endsWith(".md")) continue
      results.push(...parseQuestionFile(path.join(sectionPath, file)))
    }
  }
  return results
}

export function getQuestionsBySection(section: Section): ParsedQuestion[] {
  return getAllQuestions().filter((question) => question.section === section)
}

export function getQuestionsByTopic(topic: string): ParsedQuestion[] {
  return getAllQuestions().filter(
    (question) => question.topic.toLowerCase() === topic.toLowerCase() ||
      question.subtopic.toLowerCase() === topic.toLowerCase()
  )
}

export function getQuestionsByDifficulty(difficulty: Difficulty): ParsedQuestion[] {
  return getAllQuestions().filter((question) => question.difficulty === difficulty)
}

export function getQuestionsBySetSlug(slug: string): ParsedQuestion[] {
  return getAllQuestions().filter((question) => question.setSlug === slug)
}

/**
 * Resolve a list of question ids to full ParsedQuestion records, preserving
 * the input order. Ids that don't resolve are silently skipped — caller is
 * expected to handle the possibly-shorter output (e.g. the /practice/session/custom
 * route falls back to an empty state).
 */
export function getQuestionsByIds(ids: readonly string[]): ParsedQuestion[] {
  if (ids.length === 0) return []
  const byId = new Map<string, ParsedQuestion>()
  for (const q of getAllQuestions()) byId.set(q.id, q)
  const out: ParsedQuestion[] = []
  for (const id of ids) {
    const q = byId.get(id)
    if (q) out.push(q)
  }
  return out
}

export function getAllLessons(): ParsedLesson[] {
  const lessonsDir = path.join(CONTENT_ROOT, "lessons")
  if (!fs.existsSync(lessonsDir)) return []

  const lessons: ParsedLesson[] = []
  for (const file of fs.readdirSync(lessonsDir)) {
    if (!file.endsWith(".md")) continue
    const raw = fs.readFileSync(path.join(lessonsDir, file), "utf8")
    const { frontmatter, body } = parseFrontmatter(raw)
    const sectionRaw = frontmatter.section ?? "General"
    const section: Section | "General" =
      sectionRaw === "Quant" || sectionRaw === "Verbal" || sectionRaw === "DI" ? sectionRaw : "General"
    lessons.push({
      slug: path.basename(file, ".md"),
      module: parseInt(frontmatter.module ?? "0", 10),
      title: frontmatter.title ?? "Untitled",
      description: frontmatter.description ?? "",
      section,
      duration: parseInt(frontmatter.duration ?? "0", 10),
      content: body,
    })
  }
  return lessons.sort((a, b) => a.module - b.module)
}

export function getLessonBySlug(slug: string): ParsedLesson | null {
  return getAllLessons().find((lesson) => lesson.slug === slug) ?? null
}

export function getLessonByModule(moduleNumber: number): ParsedLesson | null {
  return getAllLessons().find((lesson) => lesson.module === moduleNumber) ?? null
}

export function getAllGuides(): ParsedGuide[] {
  const guidesDir = path.join(CONTENT_ROOT, "guides")
  if (!fs.existsSync(guidesDir)) return []

  const guides: ParsedGuide[] = []
  for (const file of fs.readdirSync(guidesDir)) {
    if (!file.endsWith(".md")) continue
    const raw = fs.readFileSync(path.join(guidesDir, file), "utf8")
    const { frontmatter, body } = parseFrontmatter(raw)
    const sectionRaw = frontmatter.section ?? "General"
    const section: Section | "General" =
      sectionRaw === "Quant" || sectionRaw === "Verbal" || sectionRaw === "DI" ? sectionRaw : "General"
    guides.push({
      slug: path.basename(file, ".md"),
      title: frontmatter.title ?? "Untitled",
      description: frontmatter.description ?? "",
      section,
      type: frontmatter.type ?? "reference",
      content: body,
    })
  }
  return guides
}

export function getGuideBySlug(slug: string): ParsedGuide | null {
  return getAllGuides().find((guide) => guide.slug === slug) ?? null
}

// ---------- Stats helpers ----------

export interface QuestionSetSummary {
  slug: string
  section: Section
  topic: string
  count: number
}

/**
 * Groups all parsed questions by their source file, returning one summary per
 * markdown file (slug, section, topic, and question count). Useful for the
 * practice page, which lists one card per available question set.
 */
export function getQuestionSets(): QuestionSetSummary[] {
  const bySlug = new Map<string, QuestionSetSummary>()
  for (const question of getAllQuestions()) {
    const slug = question.id.replace(/-q\d+$/, "")
    const existing = bySlug.get(slug)
    if (existing) {
      existing.count++
    } else {
      bySlug.set(slug, {
        slug,
        section: question.section,
        topic: question.topic,
        count: 1,
      })
    }
  }
  const sectionOrder: Record<Section, number> = { Quant: 0, Verbal: 1, DI: 2 }
  return Array.from(bySlug.values()).sort((a, b) => {
    if (a.section !== b.section) return sectionOrder[a.section] - sectionOrder[b.section]
    return a.topic.localeCompare(b.topic)
  })
}

export interface ContentStats {
  totalQuestions: number
  totalLessons: number
  totalGuides: number
  byQuestionSection: Record<Section, number>
  byQuestionDifficulty: Record<Difficulty, number>
}

// ---------- Chapters (structured content with embedded micro-quizzes) ----------

/**
 * A single section inside a chapter. Sections render sequentially in the
 * chapter reader; micro-quiz breaks ("check_question_ids") interrupt the
 * reading flow to test the concept just taught.
 *
 * Types:
 *   - `pretest`   — questions shown BEFORE any reading (pretesting effect)
 *   - `reading`   — prose with an optional micro-quiz at the end
 *   - `summary`   — end-of-chapter recap, no questions
 */
export interface ChapterSection {
  id: string
  type: "pretest" | "reading" | "summary"
  title: string
  intro?: string
  body: string
  checkQuestionIds: string[]
  pretestQuestionIds: string[]
}

export interface ChapterProblemSet {
  difficulty: "easy" | "medium" | "hard"
  /** Map from target GMAT total → accuracy threshold (%). */
  targetAccuracyByScore: Record<string, number>
  questionIds: string[]
}

export interface ParsedChapter {
  slug: string
  title: string
  section: Section
  estimatedMinutes: number
  prerequisites: string[]
  summary?: string
  sections: ChapterSection[]
  problemSets: ChapterProblemSet[]
}

interface ChapterFrontmatter {
  slug: string
  title: string
  section: Section
  estimated_minutes: number
  prerequisites?: string[]
  summary?: string
  sections: Array<{
    id: string
    type: "pretest" | "reading" | "summary"
    title: string
    intro?: string
    check_question_ids?: string[]
    pretest_question_ids?: string[]
  }>
  problem_sets: {
    easy?: RawProblemSet
    medium?: RawProblemSet
    hard?: RawProblemSet
  }
}

interface RawProblemSet {
  target_accuracy_by_score: Record<string, number>
  question_ids: string[]
}

/**
 * Parse a chapter markdown file. Format:
 *
 *   ---
 *   <YAML frontmatter with nested sections + problem_sets>
 *   ---
 *
 *   ## @section-id
 *   (markdown reading body for that section)
 *
 *   ## @next-section-id
 *   ...
 *
 * Bodies are matched to the frontmatter's `sections` array by `id`. Sections
 * without a matching body block (e.g., pretest sections that are pure
 * question lists) get an empty body.
 */
function parseChapterFile(filepath: string): ParsedChapter | null {
  const raw = fs.readFileSync(filepath, "utf8")
  const fmMatch = raw.match(/^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/)
  if (!fmMatch) return null

  let fm: ChapterFrontmatter
  try {
    fm = parseYaml(fmMatch[1]) as ChapterFrontmatter
  } catch {
    return null
  }

  const bodyRaw = fmMatch[2]

  // Split body on `## @<section-id>` headers.
  const sectionRegex = /^##\s*@([a-z0-9-]+)\s*$/gm
  const bodyByid = new Map<string, string>()
  const matches = [...bodyRaw.matchAll(sectionRegex)]
  for (let i = 0; i < matches.length; i++) {
    const m = matches[i]
    const id = m[1]
    const start = m.index! + m[0].length
    const end = i + 1 < matches.length ? matches[i + 1].index! : bodyRaw.length
    bodyByid.set(id, bodyRaw.slice(start, end).trim())
  }

  const sections: ChapterSection[] = (fm.sections ?? []).map((s) => ({
    id: s.id,
    type: s.type,
    title: s.title,
    intro: s.intro,
    body: bodyByid.get(s.id) ?? "",
    checkQuestionIds: s.check_question_ids ?? [],
    pretestQuestionIds: s.pretest_question_ids ?? [],
  }))

  const problemSets: ChapterProblemSet[] = (
    ["easy", "medium", "hard"] as const
  )
    .filter((d) => fm.problem_sets?.[d])
    .map((d) => ({
      difficulty: d,
      targetAccuracyByScore: fm.problem_sets![d]!.target_accuracy_by_score,
      questionIds: fm.problem_sets![d]!.question_ids,
    }))

  return {
    slug: fm.slug,
    title: fm.title,
    section: fm.section,
    estimatedMinutes: fm.estimated_minutes,
    prerequisites: fm.prerequisites ?? [],
    summary: fm.summary,
    sections,
    problemSets,
  }
}

export function getAllChapters(): ParsedChapter[] {
  const chaptersDir = path.join(CONTENT_ROOT, "chapters")
  if (!fs.existsSync(chaptersDir)) return []
  const out: ParsedChapter[] = []
  for (const file of fs.readdirSync(chaptersDir).sort()) {
    if (!file.endsWith(".md")) continue
    const chapter = parseChapterFile(path.join(chaptersDir, file))
    if (chapter) out.push(chapter)
  }
  return out
}

export function getChapterBySlug(slug: string): ParsedChapter | null {
  return getAllChapters().find((c) => c.slug === slug) ?? null
}

/**
 * Given a user's target GMAT score and a problem set's
 * `targetAccuracyByScore` map, return the right accuracy threshold.
 * The map is keyed by tier boundaries (e.g. "605", "645", "685", "725"):
 * a user with target 675 falls into the 645 tier. When target is null,
 * use the most lenient tier (the lowest key).
 */
export function resolveAccuracyTarget(
  targetAccuracyByScore: Record<string, number>,
  targetScore: number | null
): number {
  const tiers = Object.keys(targetAccuracyByScore)
    .map(Number)
    .sort((a, b) => a - b)
  if (tiers.length === 0) return 70 // generic fallback
  if (targetScore === null) return targetAccuracyByScore[String(tiers[0])]
  // Pick the highest tier the targetScore is ≥.
  let matched = tiers[0]
  for (const t of tiers) {
    if (targetScore >= t) matched = t
  }
  return targetAccuracyByScore[String(matched)]
}

export function getContentStats(): ContentStats {
  const questions = getAllQuestions()
  const lessons = getAllLessons()
  const guides = getAllGuides()

  const bySection: Record<Section, number> = { Quant: 0, Verbal: 0, DI: 0 }
  const byDifficulty: Record<Difficulty, number> = { Beginner: 0, Intermediate: 0, Advanced: 0 }
  for (const question of questions) {
    bySection[question.section] = (bySection[question.section] ?? 0) + 1
    byDifficulty[question.difficulty] = (byDifficulty[question.difficulty] ?? 0) + 1
  }

  return {
    totalQuestions: questions.length,
    totalLessons: lessons.length,
    totalGuides: guides.length,
    byQuestionSection: bySection,
    byQuestionDifficulty: byDifficulty,
  }
}
