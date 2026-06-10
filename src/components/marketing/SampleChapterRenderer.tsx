import Link from "next/link"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import {
  ArrowRight,
  BookOpen,
  Lock,
  ShieldCheck,
  Sparkles,
} from "lucide-react"
import { getChapterBySlug, type ParsedChapter } from "@/lib/content"
import { notFound } from "next/navigation"

export interface SiblingSample {
  /** Where the sibling sample lives (e.g. "/sample-chapter/quant"). */
  href: string
  /** Display text — typically section name like "Quant" or "Verbal". */
  sectionLabel: string
  /** Chapter title or short descriptor for the link. */
  chapterLabel: string
}

interface SampleChapterRendererProps {
  /** Chapter slug to load via `getChapterBySlug`. */
  chapterSlug: string
  /** Section IDs to render in full. The rest are listed as locked. */
  publicSectionIds: string[]
  /** Section badge label — typically the section name (Verbal / Quant / DI). */
  sectionLabel: string
  /** Other available samples — rendered in the banner + bottom CTA as cross-links. */
  siblings: SiblingSample[]
}

/**
 * Shared renderer for the public sample-chapter pages. Loads a chapter
 * via `getChapterBySlug`, renders `publicSectionIds` in full as
 * markdown, and shows the rest as locked. Cross-links to sibling
 * samples are surfaced in two places: the top banner (compact text
 * link) and the bottom CTA (button alongside the trial signup).
 *
 * Pages using this should be a thin wrapper that supplies the chapter
 * slug + public section IDs + the sibling list. Keeping the renderer
 * server-side preserves static prerender for every sample.
 */
export default function SampleChapterRenderer({
  chapterSlug,
  publicSectionIds,
  sectionLabel,
  siblings,
}: SampleChapterRendererProps) {
  const chapter: ParsedChapter | null = getChapterBySlug(chapterSlug)
  if (!chapter) notFound()

  const publicSections = chapter.sections.filter((s) =>
    publicSectionIds.includes(s.id),
  )
  const lockedSections = chapter.sections.filter(
    (s) =>
      !publicSectionIds.includes(s.id) &&
      s.type !== "pretest" &&
      s.id !== "summary",
  )
  const totalProblems = chapter.problemSets.reduce(
    (acc, set) => acc + set.questionIds.length,
    0,
  )

  return (
    <div style={{ backgroundColor: "#0A0A0A" }}>
      {/* Sample banner */}
      <div
        className="border-b border-white/[0.06]"
        style={{ backgroundColor: "#0D0D0D" }}
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-3 flex items-center gap-3 flex-wrap">
          <div
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-semibold uppercase tracking-[0.18em]"
            style={{
              backgroundColor: "rgba(201,168,76,0.1)",
              color: "#C9A84C",
            }}
          >
            <BookOpen className="w-3 h-3" />
            Sample chapter · {sectionLabel}
          </div>
          <p className="text-[12px] text-[#888888] leading-snug">
            Two full readings from the {chapter.title} chapter. No signup
            required.
            {siblings.length > 0 && (
              <>
                {" "}
                {siblings.map((s, i) => (
                  <span key={s.href}>
                    {i === 0 ? "Try the " : i === siblings.length - 1 ? " or " : ", "}
                    <Link
                      href={s.href}
                      className="hover:underline"
                      style={{ color: "#C9A84C" }}
                    >
                      {s.sectionLabel} sample ({s.chapterLabel})
                    </Link>
                  </span>
                ))}{" "}
                instead.
              </>
            )}
          </p>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 pt-12 pb-20">
        <header className="mb-10">
          <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.18em] text-[#888888] mb-4">
            <span
              className="px-1.5 py-0.5 rounded text-[10px] font-semibold tracking-[0.15em]"
              style={{
                backgroundColor:
                  chapter.section === "Quant"
                    ? "rgba(201,168,76,0.12)"
                    : chapter.section === "Verbal"
                      ? "rgba(62,207,142,0.12)"
                      : "rgba(111,181,246,0.12)",
                color:
                  chapter.section === "Quant"
                    ? "#C9A84C"
                    : chapter.section === "Verbal"
                      ? "#3ECF8E"
                      : "#6FB5F6",
              }}
            >
              {chapter.section}
            </span>
            <span className="text-[#444444]">·</span>
            <span>Chapter</span>
            <span className="text-[#444444]">·</span>
            <span>{chapter.estimatedPages} pages</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl font-semibold text-[#F0F0F0] tracking-[-0.02em] leading-[1.05] mb-5">
            {chapter.title}
          </h1>
          {chapter.summary && (
            <p className="text-[18px] text-[#C0C0C0] leading-[1.55]">
              {chapter.summary}
            </p>
          )}
        </header>

        <div className="prose-zk space-y-12">
          {publicSections.map((section, idx) => {
            // Honest section number: where this reading falls in the
            // chapter's full section list, not just among the public ones.
            const fullIdx = chapter.sections.findIndex(
              (s) => s.id === section.id,
            )
            return (
              <section key={section.id}>
                <div className="flex items-baseline gap-3 mb-3 flex-wrap">
                  <span
                    className="font-display text-[10px] font-semibold uppercase tracking-[0.22em]"
                    style={{ color: "#C9A84C" }}
                  >
                    Section {fullIdx + 1} of {chapter.sections.length}
                  </span>
                  <span className="text-[11px] text-[#555555]">Reading</span>
                  {idx === 0 && publicSections.length > 1 && (
                    <span className="text-[11px] text-[#666666] ml-auto">
                      Two readings shown
                    </span>
                  )}
                </div>
                <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#F0F0F0] tracking-tight leading-tight mb-5">
                  {section.title}
                </h2>
                {section.intro && (
                  <div className="text-[#888888] italic mb-5">
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>
                      {section.intro}
                    </ReactMarkdown>
                  </div>
                )}
                <div>
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {section.body}
                  </ReactMarkdown>
                </div>
              </section>
            )
          })}
        </div>

        {/* Locked sections */}
        <div className="mt-16">
          <div className="flex items-baseline gap-3 mb-5">
            <span
              className="font-display text-[10px] font-semibold uppercase tracking-[0.22em]"
              style={{ color: "#C9A84C" }}
            >
              The rest of this chapter
            </span>
          </div>
          <p className="text-[14px] text-[#C0C0C0] leading-relaxed mb-6 max-w-xl">
            {lockedSections.length} more reading sections, two pre-test
            questions, and {totalProblems} graded practice questions across
            three difficulty tiers — all included with the platform.
          </p>
          <div className="space-y-2.5">
            {lockedSections.map((section) => (
              <div
                key={section.id}
                className="flex items-center gap-3 p-3.5 rounded-xl border border-white/[0.06] bg-[#0D0D0D]"
              >
                <Lock
                  className="w-4 h-4 flex-shrink-0"
                  style={{ color: "#555555" }}
                />
                <span className="text-[14px] text-[#C0C0C0] flex-1">
                  {section.title}
                </span>
                <span className="text-[10px] uppercase tracking-[0.15em] text-[#555555]">
                  Reading
                </span>
              </div>
            ))}
            <div
              className="flex items-center gap-3 p-3.5 rounded-xl border"
              style={{
                borderColor: "rgba(201,168,76,0.2)",
                backgroundColor: "rgba(201,168,76,0.04)",
              }}
            >
              <Sparkles
                className="w-4 h-4 flex-shrink-0"
                style={{ color: "#C9A84C" }}
              />
              <span className="text-[14px] text-[#F0F0F0] flex-1 font-semibold">
                {totalProblems} graded practice questions across easy /
                medium / hard tiers
              </span>
              <span
                className="text-[10px] uppercase tracking-[0.15em]"
                style={{ color: "#C9A84C" }}
              >
                Question bank
              </span>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div
          className="mt-16 p-7 sm:p-9 rounded-2xl border overflow-hidden relative"
          style={{
            borderColor: "rgba(201,168,76,0.28)",
            backgroundColor: "#111111",
            boxShadow:
              "0 0 80px rgba(201,168,76,0.1), inset 0 1px 0 rgba(255,255,255,0.04)",
          }}
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 70% 80% at 100% 0%, rgba(201,168,76,0.08) 0%, transparent 60%)",
            }}
            aria-hidden
          />
          <div className="relative">
            <p className="text-[10px] uppercase tracking-[0.22em] text-[#C9A84C] font-semibold mb-2">
              What you just read is one chapter of seventeen
            </p>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#F0F0F0] tracking-[-0.02em] leading-[1.1] mb-4">
              The full curriculum is{" "}
              <span
                className="font-display-italic"
                style={{ color: "#C9A84C" }}
              >
                17 chapters
              </span>{" "}
              like this one.
            </h2>
            <p className="text-[15px] text-[#C0C0C0] leading-relaxed max-w-xl mb-6">
              Plus the adaptive study plan, the error log with six-tag
              taxonomy, the spaced review queue, and the full question bank
              tagged by topic and difficulty. Seven days of full access on
              the trial &mdash; no card required.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/signup"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-200 hover:opacity-90 hover:scale-[1.02]"
                style={{ backgroundColor: "#C9A84C", color: "#0A0A0A" }}
              >
                Start free trial
                <ArrowRight className="w-4 h-4" />
              </Link>
              {siblings.map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold border transition-all duration-200"
                  style={{
                    borderColor: "rgba(201,168,76,0.32)",
                    color: "#C9A84C",
                    backgroundColor: "rgba(201,168,76,0.04)",
                  }}
                >
                  Try the {s.sectionLabel} sample
                </Link>
              ))}
              <Link
                href="/signup"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold border border-white/[0.1] text-[#C0C0C0] hover:border-white/[0.18] hover:text-[#F0F0F0] transition-all duration-200"
              >
                Create a free account
              </Link>
            </div>
            <div className="flex items-center gap-2 mt-5 text-[12px] text-[#888888]">
              <ShieldCheck
                className="w-3.5 h-3.5"
                style={{ color: "#3ECF8E" }}
              />
              No card. 14-day money-back on Self-Study tiers. Score
              guarantee on Intensive.
            </div>
          </div>
        </div>
      </article>

      <style>{`
        .prose-zk { color: #C0C0C0; font-size: 17px; line-height: 1.75; }
        .prose-zk p { color: #C0C0C0; margin-bottom: 1em; }
        .prose-zk strong { color: #F0F0F0; font-weight: 600; }
        .prose-zk em { color: #E8E8E8; font-style: italic; }
        .prose-zk h3 {
          font-family: var(--font-display, serif);
          color: #F0F0F0;
          font-size: 22px;
          font-weight: 600;
          margin-top: 2.4em;
          margin-bottom: 0.6em;
          letter-spacing: -0.01em;
          line-height: 1.3;
        }
        .prose-zk h4 {
          color: #F0F0F0;
          font-size: 16px;
          font-weight: 600;
          margin-top: 1.6em;
          margin-bottom: 0.4em;
        }
        .prose-zk ol, .prose-zk ul { padding-left: 22px; margin-bottom: 1em; }
        .prose-zk ol > li, .prose-zk ul > li { margin-bottom: 8px; }
        .prose-zk a { color: #C9A84C; text-decoration: underline; }
        .prose-zk blockquote {
          margin: 1.5em 0;
          padding: 1em 1.25em;
          border-left: 2px solid rgba(201,168,76,0.5);
          background-color: rgba(201,168,76,0.04);
          border-radius: 0 8px 8px 0;
          color: #D8D8D8;
        }
        .prose-zk blockquote p { margin-bottom: 0; }
        .prose-zk blockquote strong { color: #C9A84C; }
        .prose-zk table {
          width: 100%;
          border-collapse: collapse;
          margin: 1.5em 0;
          font-size: 14px;
        }
        .prose-zk th, .prose-zk td {
          padding: 8px 12px;
          border: 1px solid rgba(255,255,255,0.06);
          text-align: left;
        }
        .prose-zk th {
          background-color: #0F0F0F;
          color: #C9A84C;
          font-weight: 600;
          text-transform: uppercase;
          font-size: 11px;
          letter-spacing: 0.1em;
        }
        .prose-zk td { color: #C0C0C0; }
        .prose-zk code {
          background-color: rgba(255,255,255,0.05);
          padding: 2px 6px;
          border-radius: 4px;
          font-size: 0.9em;
          color: #E8C97A;
        }
      `}</style>
    </div>
  )
}
