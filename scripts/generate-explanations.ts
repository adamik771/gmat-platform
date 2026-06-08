/**
 * Regenerate question explanations in the GMAT Official Guide ("Rationale") style.
 *
 * Calls the Anthropic API with a cached per-type spec (the system prompt) and
 * structured JSON output, then either prints proposals for review (default) or
 * writes them back into the question markdown files (`--apply`).
 *
 * Run:
 *   node --experimental-strip-types --no-warnings --env-file=.env.local \
 *     scripts/generate-explanations.ts --type DS --limit 3
 *
 * Common flags:
 *   --type <Section|slug>   filter: section ("Quant"|"Verbal"|"DI") or file slug ("data-sufficiency")
 *   --ids a-q1,cr-q3        explicit question ids (comma-separated)
 *   --limit N               cap how many questions to process
 *   --apply                 write results back into the .md files (default: dry-run)
 *   --out <path>            where to write the proposals JSON (default scripts/explanation-proposals.json)
 *   --model <id>            override model (default claude-opus-4-8, or ANTHROPIC_MODEL)
 *   --effort low|medium|high|max   default high
 *   --no-thinking           disable adaptive thinking (cheaper, slightly lower accuracy)
 *   --print-prompt          build + print the prompt for the first selected question; do NOT call the API
 *
 * After --apply, ALWAYS run `npm run validate:content`.
 *
 * Scale-up note: for the full ~900-question run, the Anthropic Batches API is
 * 50% cheaper and async — see scripts comment at the bottom. This script runs
 * live calls sequentially, which is ideal for the small review batches.
 */
import fs from "node:fs"
import path from "node:path"
import Anthropic from "@anthropic-ai/sdk"
import { getAllQuestions, type ParsedQuestion } from "../src/lib/content.ts"

// Defaults to the repo's question tree; override with GEN_CONTENT_ROOT to apply
// against a copy (used for safe testing of the write-back surgery).
const CONTENT_ROOT = process.env.GEN_CONTENT_ROOT || path.join(process.cwd(), "src", "content", "questions")
const DEFAULT_MODEL = "claude-opus-4-8"
const MAX_OUTPUT_TOKENS = 8000

// ---------------------------------------------------------------------------
// CLI args
// ---------------------------------------------------------------------------
interface Args {
  type?: string
  ids?: string[]
  limit?: number
  apply: boolean
  out: string
  model: string
  effort: "low" | "medium" | "high" | "max"
  thinking: boolean
  printPrompt: boolean
  from?: string
}

function parseArgs(argv: string[]): Args {
  const a: Args = {
    apply: false,
    out: path.join("scripts", "explanation-proposals.json"),
    model: process.env.ANTHROPIC_MODEL || DEFAULT_MODEL,
    effort: "high",
    thinking: true,
    printPrompt: false,
  }
  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i]
    if (arg === "--apply") a.apply = true
    else if (arg === "--no-thinking") a.thinking = false
    else if (arg === "--print-prompt") a.printPrompt = true
    else if (arg === "--type") a.type = argv[++i]
    else if (arg === "--ids") a.ids = argv[++i]?.split(",").map((s) => s.trim()).filter(Boolean)
    else if (arg === "--limit") a.limit = parseInt(argv[++i], 10)
    else if (arg === "--out") a.out = argv[++i]
    else if (arg === "--from") a.from = argv[++i]
    else if (arg === "--model") a.model = argv[++i]
    else if (arg === "--effort") a.effort = argv[++i] as Args["effort"]
  }
  return a
}

// ---------------------------------------------------------------------------
// Question selection
// ---------------------------------------------------------------------------
const SECTIONS = new Set(["Quant", "Verbal", "DI"])

// Per-choice analysis (mistake_*) is part of the OG format only for Verbal
// (CR + RC). Quant (PS) and DI (DS/TA/GI/TPA) get a single prose rationale.
function usesPerChoice(q: ParsedQuestion): boolean {
  return q.section === "Verbal"
}

// Grouped formats (RC passages, MSR sets) and Two-Part Analysis aren't handled
// by the write-back surgery yet — they still get proposals in dry-run.
function applySupported(q: ParsedQuestion): boolean {
  return q.setSlug !== "reading-comprehension" &&
    q.setSlug !== "multi-source-reasoning" &&
    q.type !== "Two-Part Analysis"
}

function selectQuestions(all: ParsedQuestion[], args: Args): ParsedQuestion[] {
  let qs = all
  if (args.ids && args.ids.length) {
    const want = new Set(args.ids)
    qs = qs.filter((q) => want.has(q.id))
  } else if (args.type) {
    if (SECTIONS.has(args.type)) qs = qs.filter((q) => q.section === args.type)
    else qs = qs.filter((q) => q.setSlug === args.type)
  }
  if (typeof args.limit === "number" && args.limit > 0) qs = qs.slice(0, args.limit)
  return qs
}

// ---------------------------------------------------------------------------
// Prompts
// ---------------------------------------------------------------------------
const SYSTEM_SPEC = `You rewrite explanations for GMAT Focus practice questions in the exact voice and structure of the official GMAT Official Guide "Rationale". You are given one question; you return a JSON object with the new explanation (and, for Verbal questions only, a per-choice breakdown).

VOICE (all question types):
- Formal, third-person expository voice ("we find...", "Let x be..."). Never second-person ("you"). No coaching tone, no emojis, no shorthand or arrows (write "therefore", not "→").
- State the governing principle or definition first, then apply it. Define variables explicitly and translate the words into math.
- Show every step of the arithmetic/algebra. Use plain readable math (x^2, sqrt, fractions written inline like 26/2). Use multi-line markdown freely: paragraphs, "-" bullet lists, and GFM tables where they aid clarity.
- End the explanation with a sentence of the exact form: "The correct answer is X." (the credited letter).
- Be thorough but not padded. Match the length to the difficulty.

DO NOT (parser safety):
- Do not begin any line with a bold label that looks like a metadata field followed by a colon (for example, never start a line with "**answer:**", "**type:**", "**topic:**", "**explanation:**", "**takeaway:**"). Write "The correct answer is C." as an ordinary sentence. (The bold labels "**Situation.**" and "**Reasoning.**" used in Critical Reasoning are fine — they are not metadata fields.)

PER-TYPE STRUCTURE:
- Problem Solving (Quant): concept/principle, then variable setup, then worked steps, then the answer line. No choice-by-choice analysis.
- Data Sufficiency (DI): rephrase what the question actually asks (the target quantity/relationship). Evaluate "Statement (1)" then "Statement (2)" separately — prove insufficiency by exhibiting two outcomes, prove sufficiency by deriving the value. Combine if needed. Then the answer line. No choice-by-choice analysis (the A-E sufficiency choices are fixed boilerplate). Flag any given data that is a distractor.
- Critical Reasoning (Verbal): begin with "**Situation.**" (a 1-2 sentence paraphrase of the stimulus), then "**Reasoning.**" (restate the task, then the logic that leads to the credited answer; for Assumption questions run the negation test explicitly). End with the answer line. ALSO return per-choice "mistakes" for every wrong choice in OG voice ("Choice B ... ").
- Reading Comprehension (Verbal): a prose rationale anchored to the passage, ruling options in and out. End with the answer line. ALSO return per-choice "mistakes" for the wrong choices.

OUTPUT (JSON):
- "explanation": the full rewritten rationale (markdown string, ending in "The correct answer is X.").
- "mistakes": an array. For Verbal questions, include one entry { "letter": "B", "text": "..." } for EACH wrong choice (omit the correct letter). For Quant and DI questions, return an empty array [].

Two worked examples of the target format follow.

EXAMPLE (Data Sufficiency):
explanation: "The question asks how many attendees drink *only* coffee. Since every attendee drinks coffee, tea, or both, the coffee drinkers split into those who drink only coffee and those who drink both, so only coffee = (coffee drinkers) - (both coffee and tea). Finding this value requires knowing both the number of coffee drinkers and the number who drink both.\\n\\nStatement (1) gives the number of coffee drinkers, 50, but not how many of them also drink tea. The only-coffee count could be 50 (if none also drink tea) or 35 (if 15 do), so statement (1) alone is not sufficient.\\n\\nStatement (2) gives the number who drink both, 15, but not the total number of coffee drinkers, so there is nothing to subtract it from. Statement (2) alone is not sufficient.\\n\\nTaken together, the statements give only coffee = 50 - 15 = 35, a single value, so the two statements together are sufficient. (The total of 80 attendees is never used.)\\n\\nThe correct answer is C."
mistakes: []

EXAMPLE (Critical Reasoning, Necessary Assumption):
explanation: "**Situation.** Supporters want to raise the minimum driving age from 16 to 18 to reduce accidents involving young drivers, arguing that 18-year-old new drivers are safer than 16-year-old new drivers.\\n\\n**Reasoning.** What must the supporters assume for raising the age to reduce the total number of accidents involving young drivers? The evidence compares licensed new drivers at each age, but the conclusion is about all young drivers on the road after the change. For the conclusion to hold, raising the age must not simply convert relatively safe licensed 16-year-olds into unlicensed, untrained drivers. Testing this by negation: if raising the age did significantly increase unlicensed, untrained driving, total accidents could rise and the conclusion would collapse — which is what choice B states.\\n\\nThe correct answer is B."
mistakes: [{"letter":"A","text":"Choice A compares experienced and new 18-year-old drivers, a comparison the argument never relies on. The argument does not depend on it."}]`

function letterFor(i: number): string {
  return String.fromCharCode(65 + i)
}

function buildUserPrompt(q: ParsedQuestion): string {
  const choiceLines = q.options
    .map((opt, i) => {
      const correct = i === q.correctAnswer ? " (correct)" : ""
      return `${letterFor(i)}.${correct} ${opt}`
    })
    .join("\n")
  const verbal = usesPerChoice(q)
  return [
    `Rewrite this question's explanation in the Official Guide style from the system prompt.`,
    ``,
    `Section: ${q.section}`,
    `Type: ${q.type}`,
    `Topic: ${q.subtopic}`,
    `Difficulty: ${q.difficulty}`,
    q.context ? `\nShared passage / exhibit:\n${q.context}\n` : ``,
    `Question:`,
    q.prompt,
    ``,
    `Answer choices:`,
    choiceLines,
    ``,
    `Correct answer: ${q.correctAnswerLetter || letterFor(q.correctAnswer)}`,
    ``,
    `Current explanation (for reference only; replace it entirely):`,
    q.explanation || "(none)",
    ``,
    verbal
      ? `This is a Verbal question: also return a "mistakes" entry for each wrong choice.`
      : `This is not a Verbal question: return an empty "mistakes" array.`,
  ].join("\n")
}

const OUTPUT_SCHEMA = {
  type: "object",
  properties: {
    explanation: { type: "string" },
    mistakes: {
      type: "array",
      items: {
        type: "object",
        properties: {
          letter: { type: "string" },
          text: { type: "string" },
        },
        required: ["letter", "text"],
        additionalProperties: false,
      },
    },
  },
  required: ["explanation", "mistakes"],
  additionalProperties: false,
} as const

interface GenResult {
  explanation: string
  mistakes: { letter: string; text: string }[]
}

interface Proposal {
  id: string
  setSlug: string
  section: string
  type: string
  before: string
  after: GenResult
}

// ---------------------------------------------------------------------------
// Generation
// ---------------------------------------------------------------------------
async function generate(
  client: Anthropic,
  q: ParsedQuestion,
  args: Args
): Promise<{ result: GenResult; usage: Anthropic.Usage }> {
  const response = await client.messages.create({
    model: args.model,
    max_tokens: MAX_OUTPUT_TOKENS,
    ...(args.thinking ? { thinking: { type: "adaptive" } } : {}),
    system: [
      { type: "text", text: SYSTEM_SPEC, cache_control: { type: "ephemeral" } },
    ],
    output_config: {
      effort: args.effort,
      format: { type: "json_schema", schema: OUTPUT_SCHEMA },
    },
    messages: [{ role: "user", content: buildUserPrompt(q) }],
  } as Anthropic.MessageCreateParamsNonStreaming)

  const text = response.content
    .filter((b): b is Anthropic.TextBlock => b.type === "text")
    .map((b) => b.text)
    .join("")
  let result: GenResult
  try {
    result = JSON.parse(text) as GenResult
  } catch {
    throw new Error(`[${q.id}] model did not return valid JSON: ${text.slice(0, 200)}`)
  }
  return { result, usage: response.usage }
}

// ---------------------------------------------------------------------------
// Write-back (markdown surgery)
// ---------------------------------------------------------------------------
const RESERVED_KEY_RE =
  /\n\*\*(difficulty|type|topic|answer|explanation|hint_nudge|hint_strategy|hint_setup|fastest_path|common_trap|takeaway|related_reading|mistake_[a-z]|subchapter|skill|trap_type|est_time_seconds|prerequisite):\*\*/i

/** Rewrite a single `## Qn` block: replace the rich field region (fastest_path
 *  through takeaway) with an OG-pure explanation (+ per-choice mistakes for
 *  Verbal). Keeps answer/related_reading/prompt/options. Returns null if the
 *  block doesn't have the expected shape. */
function rewriteBlock(block: string, q: ParsedQuestion, res: GenResult): string | null {
  const start = block.indexOf("**fastest_path:**") >= 0
    ? block.indexOf("**fastest_path:**")
    : block.indexOf("**explanation:**")
  if (start < 0) return null

  // Region ends just before related_reading (which we keep), else at block end.
  const rrIdx = block.indexOf("**related_reading:**")
  const end = rrIdx >= 0 ? rrIdx : block.length

  // Sanity: a generated value must not contain a line that looks like a field.
  const guard = (s: string) => {
    if (RESERVED_KEY_RE.test("\n" + s)) {
      throw new Error(`[${q.id}] generated text contains a field-like line; refusing to apply`)
    }
  }
  guard(res.explanation)

  const lines: string[] = [`**explanation:** ${res.explanation.trim()}`]
  if (usesPerChoice(q)) {
    const correct = (q.correctAnswerLetter || letterFor(q.correctAnswer)).toUpperCase()
    for (const m of res.mistakes) {
      const L = (m.letter || "").trim().toUpperCase()
      if (!L || L === correct) continue
      guard(m.text)
      lines.push(`**mistake_${L.toLowerCase()}:** ${m.text.trim()}`)
    }
  }
  const replacement = lines.join("\n") + "\n"
  return block.slice(0, start) + replacement + block.slice(end)
}

function applyToFile(
  absPath: string,
  byNum: Map<number, { q: ParsedQuestion; res: GenResult }>
): { applied: number[]; skipped: number[] } {
  const text = fs.readFileSync(absPath, "utf8")
  const parts = text.split(/(\n---+\n)/)
  const applied: number[] = []
  const skipped: number[] = []
  for (let i = 0; i < parts.length; i++) {
    const seg = parts[i]
    const m = seg.match(/^##\s+Q(\d+)\b/m)
    if (!m) continue
    if (/^###\s+Q\d+/m.test(seg)) continue // grouped block — unsupported
    const qnum = parseInt(m[1], 10)
    const hit = byNum.get(qnum)
    if (!hit) continue
    const rewritten = rewriteBlock(seg, hit.q, hit.res)
    if (rewritten == null) { skipped.push(qnum); continue }
    parts[i] = rewritten
    applied.push(qnum)
  }
  if (applied.length) fs.writeFileSync(absPath, parts.join(""))
  return { applied, skipped }
}

function fileForSlug(slug: string, section: string): string {
  const dir = section === "Quant" ? "quant" : section === "Verbal" ? "verbal" : "di"
  return path.join(CONTENT_ROOT, dir, `${slug}.md`)
}

function applyAll(proposals: Proposal[], byId: Map<string, ParsedQuestion>) {
  const byFile = new Map<string, Map<number, { q: ParsedQuestion; res: GenResult }>>()
  const unsupported: string[] = []
  const unknown: string[] = []
  for (const p of proposals) {
    const q = byId.get(p.id)
    if (!q) { unknown.push(p.id); continue }
    if (!applySupported(q)) { unsupported.push(p.id); continue }
    const key = fileForSlug(q.setSlug, q.section)
    if (!byFile.has(key)) byFile.set(key, new Map())
    byFile.get(key)!.set(q.number, { q, res: p.after })
  }
  let totalApplied = 0
  for (const [absPath, byNum] of byFile) {
    const { applied, skipped } = applyToFile(absPath, byNum)
    totalApplied += applied.length
    console.log(`  ${path.relative(process.cwd(), absPath)}: applied ${applied.length}` + (skipped.length ? `, skipped ${skipped.length} (${skipped.join(",")})` : ""))
  }
  if (unsupported.length) console.log(`  NOT applied (grouped RC/MSR or TPA — write-back unsupported): ${unsupported.length} -> ${unsupported.join(", ")}`)
  if (unknown.length) console.log(`  NOT applied (unknown id): ${unknown.length} -> ${unknown.join(", ")}`)
  console.log(`\nApplied ${totalApplied} question(s). Now run: npm run validate:content`)
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------
async function main() {
  const args = parseArgs(process.argv.slice(2))
  const all = getAllQuestions()
  const byId = new Map(all.map((q) => [q.id, q]))

  let proposals: Proposal[]

  if (args.from) {
    // Load previously-generated (optionally hand-edited) proposals; skip the API.
    proposals = JSON.parse(fs.readFileSync(args.from, "utf8")) as Proposal[]
    console.log(`Loaded ${proposals.length} proposal(s) from ${args.from}. apply=${args.apply}`)
  } else {
    const selected = selectQuestions(all, args)
    if (selected.length === 0) {
      console.log("No questions matched the filter. Use --type / --ids / --limit / --from.")
      return
    }
    console.log(`Selected ${selected.length} question(s). model=${args.model} effort=${args.effort} thinking=${args.thinking} apply=${args.apply}`)

    if (args.printPrompt) {
      const q = selected[0]
      console.log(`\n===== SYSTEM (cached, ${SYSTEM_SPEC.length} chars) =====\n${SYSTEM_SPEC.slice(0, 600)}\n... [truncated]`)
      console.log(`\n===== USER PROMPT for ${q.id} =====\n${buildUserPrompt(q)}`)
      console.log(`\n(--print-prompt: no API call made. ${selected.length} question(s) would be processed.)`)
      return
    }

    const apiKey = process.env.ANTHROPIC_API_KEY
    if (!apiKey) {
      console.error("ANTHROPIC_API_KEY is not set. Run with --env-file=.env.local, or `ANTHROPIC_API_KEY=sk-... node ...`.")
      process.exit(1)
    }
    const client = new Anthropic({ apiKey, maxRetries: 4 })

    proposals = []
    let inTok = 0, outTok = 0, cacheRead = 0, cacheWrite = 0, failures = 0
    for (let i = 0; i < selected.length; i++) {
      const q = selected[i]
      process.stdout.write(`[${i + 1}/${selected.length}] ${q.id} (${q.section}/${q.type}) ... `)
      try {
        const { result, usage } = await generate(client, q, args)
        inTok += usage.input_tokens
        outTok += usage.output_tokens
        cacheRead += usage.cache_read_input_tokens ?? 0
        cacheWrite += usage.cache_creation_input_tokens ?? 0
        proposals.push({ id: q.id, setSlug: q.setSlug, section: q.section, type: q.type, before: q.explanation, after: result })
        console.log(`ok (${result.explanation.length}c, ${result.mistakes.length} mistakes)`)
      } catch (err) {
        failures++
        console.log(`FAILED: ${(err as Error).message}`)
      }
    }
    fs.mkdirSync(path.dirname(args.out), { recursive: true })
    fs.writeFileSync(args.out, JSON.stringify(proposals, null, 2))
    console.log(`\nProposals written to ${args.out} (${proposals.length} ok, ${failures} failed).`)
    console.log(`Tokens: input=${inTok} output=${outTok} cache_read=${cacheRead} cache_write=${cacheWrite}`)
  }

  if (!args.apply) {
    console.log(`\nDry run. Review the proposals, then re-run with --apply (e.g. --from ${args.out} --apply) to write into the .md files.`)
    return
  }

  applyAll(proposals, byId)
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})

// Scale-up: for the full ~900-question run, switch to the Anthropic Batches API
// (client.messages.batches.create) — 50% cheaper and async. Reuse SYSTEM_SPEC +
// buildUserPrompt + OUTPUT_SCHEMA per request; poll, then feed results into
// applyToFile. Live sequential mode (this script) is best for small review batches.
