import { getAllGuides, type ParsedGuide } from "./content"
import type { Section } from "@/types"

/**
 * Curriculum outline extractor.
 *
 * Scans the curriculum markdown chapters (`reading-*.md`) for the three
 * embedded structures the course UI surfaces as standalone primitives:
 *
 *   - **Mini-examples / Worked examples** — short, original problems
 *     with a fastest-path solution. Authored as `### Worked example` or
 *     `### Mini-example` (or "### Example") under each sub-chapter.
 *   - **Active recall checkpoints** — 3-5 question free-recall blocks,
 *     authored as `### Quick check` or `### Active recall`. Sit at the
 *     end of each sub-chapter section.
 *   - **Micro-drill sets** — 8-question per-difficulty drill blocks
 *     (3 easy / 3 medium / 2 hard) with inline answer + trap + lesson
 *     notes. Authored as `### Micro-drill`.
 *
 * The outline is purely structural — we read the section headers and
 * the H2 above them so we can link back to the chapter at the right
 * sub-chapter anchor. We do not parse the contents of each block; the
 * full body lives at `/guides/{slug}` and the deep link drops the
 * student into the right scroll position.
 *
 * Anchor convention matches `slugifyHeading` in `/guides/[slug]` —
 * lowercase, ascii-only, hyphens between words.
 */

export type OutlineKind = "example" | "recall" | "drill"

export interface OutlineEntry {
  /** Discriminator — surfaces to the right index page. */
  kind: OutlineKind
  /** Curriculum chapter the block lives in (slug, e.g. `reading-quant-01-mindset`). */
  chapterSlug: string
  /** Curriculum chapter title. */
  chapterTitle: string
  /** Section the chapter belongs to. */
  section: Section | "General"
  /** Sub-chapter the block belongs to (H2 above this header). */
  subchapter: string
  /** Slugified anchor for the sub-chapter — matches `/guides/[slug]` IDs. */
  subchapterAnchor: string
  /** Friendly label for the block (e.g., "Quick check", "Worked example #2"). */
  label: string
  /** Anchor for the block itself (the H3). */
  blockAnchor: string
  /** Order within the chapter (1-indexed). Used for stable display sorting. */
  ordinal: number
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .slice(0, 80)
}

function classifyHeader(headerText: string): OutlineKind | null {
  const t = headerText.trim().toLowerCase()
  if (t.startsWith("worked example") || t.startsWith("mini-example") || t.startsWith("example")) {
    return "example"
  }
  if (t.startsWith("quick check") || t.startsWith("active recall")) {
    return "recall"
  }
  if (t.startsWith("micro-drill") || t.startsWith("micro drill")) {
    return "drill"
  }
  return null
}

/**
 * Walk a curriculum guide's markdown body and emit one OutlineEntry per
 * `### {Quick check|Worked example|Micro-drill|...}` heading, attributed
 * to the most recent `## ` (sub-chapter) heading above it.
 */
function extractEntriesFromGuide(guide: ParsedGuide): OutlineEntry[] {
  const lines = guide.content.split("\n")
  const entries: OutlineEntry[] = []
  let currentSubchapter = "(intro)"
  let currentSubchapterAnchor = ""
  // Track per-kind ordinals within each chapter so labels like
  // "Worked example #2" only count examples, not other kinds.
  const counters: Record<OutlineKind, number> = { example: 0, recall: 0, drill: 0 }
  let blockOrdinal = 0

  for (const line of lines) {
    const h2 = line.match(/^##\s+(?!#)(.+)$/)
    if (h2) {
      currentSubchapter = h2[1].trim()
      currentSubchapterAnchor = slugify(currentSubchapter)
      continue
    }
    const h3 = line.match(/^###\s+(.+)$/)
    if (!h3) continue
    const headerText = h3[1].trim()
    const kind = classifyHeader(headerText)
    if (!kind) continue
    counters[kind] += 1
    blockOrdinal += 1
    entries.push({
      kind,
      chapterSlug: guide.slug,
      chapterTitle: guide.title,
      section: guide.section,
      subchapter: currentSubchapter,
      subchapterAnchor: currentSubchapterAnchor,
      label:
        kind === "example"
          ? `Worked example #${counters.example}`
          : kind === "recall"
            ? `Recall check #${counters.recall}`
            : `Micro-drill #${counters.drill}`,
      blockAnchor: slugify(headerText),
      ordinal: blockOrdinal,
    })
  }

  return entries
}

/**
 * Aggregate every curriculum guide's outline. Returns entries sorted
 * by section (Q → V → DI → General), then chapter slug, then ordinal.
 */
export function getCurriculumOutline(): OutlineEntry[] {
  const guides = getAllGuides().filter((g) => g.slug.startsWith("reading-"))
  const all: OutlineEntry[] = []
  for (const g of guides) all.push(...extractEntriesFromGuide(g))

  const sectionRank: Record<Section | "General", number> = {
    Quant: 0,
    Verbal: 1,
    DI: 2,
    General: 3,
  }
  return all.sort((a, b) => {
    const sa = sectionRank[a.section] - sectionRank[b.section]
    if (sa !== 0) return sa
    if (a.chapterSlug !== b.chapterSlug) return a.chapterSlug.localeCompare(b.chapterSlug)
    return a.ordinal - b.ordinal
  })
}

/** Filter the full outline to a single block kind. */
export function getOutlineByKind(kind: OutlineKind): OutlineEntry[] {
  return getCurriculumOutline().filter((e) => e.kind === kind)
}
