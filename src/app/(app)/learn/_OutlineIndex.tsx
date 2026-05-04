import Link from "next/link"
import { ArrowLeft, ArrowRight, ChevronRight } from "lucide-react"
import {
  getOutlineByKind,
  type OutlineKind,
  type OutlineEntry,
} from "@/lib/curriculum-outline"
import type { Section } from "@/types"

interface OutlineIndexProps {
  kind: OutlineKind
  eyebrow: string
  /** Two-part title — the prefix and the gold italic accent. */
  title: { prefix: string; accent: string }
  description: string
}

const SECTION_RANK: Record<Section | "General", number> = {
  Quant: 0,
  Verbal: 1,
  DI: 2,
  General: 3,
}

const EYEBROW = "text-[10px] font-semibold uppercase tracking-[0.22em]"

/**
 * Shared list-style index for the three outline-driven sub-pages
 * (`/learn/examples`, `/learn/recall`, `/learn/drills`). Each page is
 * a thin wrapper that supplies the kind + page copy.
 *
 * Visual structure:
 *   - back link to /learn
 *   - hero: eyebrow + headline + description + total count
 *   - chapter-grouped list, with each entry deep-linking to /guides/{slug}#{block-anchor}
 *
 * The entries are sorted Q → V → DI → General, then by chapter slug and
 * ordinal (so order matches the chapter's top-down reading flow).
 */
export default function OutlineIndex({
  kind,
  eyebrow,
  title,
  description,
}: OutlineIndexProps) {
  const entries = getOutlineByKind(kind)

  // Group entries by (section, chapter slug) for rendering.
  type GroupKey = string
  const groups = new Map<
    GroupKey,
    {
      section: Section | "General"
      chapterSlug: string
      chapterTitle: string
      entries: OutlineEntry[]
    }
  >()
  for (const e of entries) {
    const key = `${e.section}::${e.chapterSlug}`
    const g =
      groups.get(key) ??
      {
        section: e.section,
        chapterSlug: e.chapterSlug,
        chapterTitle: e.chapterTitle,
        entries: [] as OutlineEntry[],
      }
    g.entries.push(e)
    groups.set(key, g)
  }
  const ordered = [...groups.values()].sort((a, b) => {
    const sa = SECTION_RANK[a.section] - SECTION_RANK[b.section]
    if (sa !== 0) return sa
    return a.chapterSlug.localeCompare(b.chapterSlug)
  })

  return (
    <div className="relative">
      <div
        className="absolute inset-x-0 top-0 h-[400px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 55% at 50% 0%, rgba(201,168,76,0.08) 0%, transparent 60%)",
        }}
        aria-hidden
      />
      <div
        className="absolute inset-0 pointer-events-none bg-grain opacity-[0.03] mix-blend-overlay"
        aria-hidden
      />

      <div className="relative max-w-4xl mx-auto space-y-12">
        <Link
          href="/learn"
          className="inline-flex items-center gap-1.5 text-[12px] tracking-tight text-[#888888] hover:text-[#F0F0F0] transition-colors"
        >
          <ArrowLeft className="w-3 h-3" />
          Back to course
        </Link>

        <section>
          <div className="flex items-center gap-3 mb-5">
            <span
              className="h-px w-10"
              style={{
                background:
                  "linear-gradient(to right, transparent, rgba(201,168,76,0.6))",
              }}
            />
            <p className={EYEBROW} style={{ color: "#C9A84C" }}>
              {eyebrow}
            </p>
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-semibold tracking-[-0.02em] text-[#F0F0F0] leading-[1.05] mb-5">
            {title.prefix}{" "}
            <span className="font-display-italic" style={{ color: "#C9A84C" }}>
              {title.accent}
            </span>
          </h1>
          <p className="text-[15px] text-[#C0C0C0] max-w-2xl leading-relaxed">
            {description}
          </p>
          <p className="mt-4 text-[12px] uppercase tracking-[0.18em] text-[#555555] font-medium">
            {entries.length} total across {groups.size} chapter
            {groups.size === 1 ? "" : "s"}
          </p>
        </section>

        {ordered.length === 0 ? (
          <p className="text-[14px] text-[#888888] italic">
            None authored yet. Curriculum chapters add these as they ship.
          </p>
        ) : (
          <div className="space-y-10">
            {ordered.map((g) => (
              <ChapterGroup key={g.chapterSlug} group={g} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

function ChapterGroup({
  group,
}: {
  group: {
    section: Section | "General"
    chapterSlug: string
    chapterTitle: string
    entries: OutlineEntry[]
  }
}) {
  return (
    <div>
      <div className="flex items-baseline gap-3 mb-3">
        <p
          className="text-[10px] uppercase tracking-[0.22em] font-semibold"
          style={{ color: "#C9A84C" }}
        >
          {group.section}
        </p>
        <Link
          href={`/guides/${group.chapterSlug}`}
          className="text-[15px] font-semibold text-[#F0F0F0] tracking-tight hover:text-[#FFFFFF] transition-colors"
        >
          {group.chapterTitle}
        </Link>
      </div>
      <ul className="space-y-1.5">
        {group.entries.map((e) => (
          <li key={`${e.chapterSlug}-${e.ordinal}`}>
            <Link
              href={`/guides/${e.chapterSlug}#${e.subchapterAnchor}`}
              className="group flex items-center gap-3 px-4 py-3 rounded-xl border border-white/[0.06] bg-[#0D0D0D] hover:border-white/[0.12] transition-all"
              style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.02)" }}
            >
              <ChevronRight className="w-3.5 h-3.5 flex-shrink-0 text-[#555555] group-hover:text-[#C9A84C] transition-colors" />
              <span className="flex-1 min-w-0">
                <span className="block text-[13px] font-semibold text-[#F0F0F0] tracking-tight">
                  {e.label}
                </span>
                <span className="block text-[11px] text-[#888888] mt-0.5 truncate">
                  in {e.subchapter}
                </span>
              </span>
              <ArrowRight
                className="w-3.5 h-3.5 flex-shrink-0 text-[#555555] group-hover:text-[#C9A84C] group-hover:translate-x-0.5 transition-all"
                aria-hidden
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
