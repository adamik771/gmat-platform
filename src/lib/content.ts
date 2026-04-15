import fs from "node:fs"
import path from "node:path"
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
    .filter((line) => !/^\*\*(difficulty|type|topic)/i.test(line.trim()))
  const prompt = promptLines.join("\n").replace(/^\n+/, "").replace(/\n+$/, "").trim()

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
    correctAnswer: letterToIndex(answerLetter),
    correctAnswerLetter: answerLetter,
    explanation: meta.explanation ?? "",
    rawBody: block.trim(),
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
