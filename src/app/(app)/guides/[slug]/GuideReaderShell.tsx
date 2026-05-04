"use client"

import Link from "next/link"
import { ArrowLeft, ArrowRight } from "lucide-react"
import type { ReactNode } from "react"
import ReaderThemeToggle, {
  useReadingTheme,
} from "@/components/shared/ReaderThemeToggle"
import ReadingProgressBar from "@/components/shared/ReadingProgressBar"
import TableOfContents from "@/components/shared/TableOfContents"

const SECTION_LABEL: Record<string, string> = {
  General: "Cross-section",
  Quant: "Quantitative",
  Verbal: "Verbal",
  DI: "Data Insights",
}

/**
 * Reading shell for a single guide. Owns:
 * - the `.reader-themed` wrapper + theme toggle
 * - the scroll progress bar pinned at the top of the viewport
 * - the sticky table of contents on desktop (auto-hides for short guides)
 * - the hero header (section eyebrow + title + description)
 * - a prev/next guide navigation footer
 *
 * The outer server component renders the markdown article and passes it in
 * as a ReactNode prop, so markdown rendering stays on the server.
 */
export default function GuideReaderShell({
  section,
  title,
  description,
  article,
  prev,
  next,
}: {
  section: string
  title: string
  description: string
  article: ReactNode
  prev: { slug: string; title: string } | null
  next: { slug: string; title: string } | null
}) {
  const [theme, setTheme] = useReadingTheme()

  return (
    <>
      <ReadingProgressBar targetSelector="article" />

      <div
        className="reader-themed max-w-6xl mx-auto rounded-2xl p-4 sm:p-6 -m-4 sm:-m-6"
        data-reading-theme={theme}
        style={{
          backgroundColor: "var(--read-bg)",
          color: "var(--read-text)",
        }}
      >
        <div className="flex items-center justify-between gap-3 mb-8">
          <Link
            href="/guides"
            className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.22em] font-semibold transition-colors"
            style={{ color: "var(--read-text-muted)" }}
          >
            <ArrowLeft className="w-3 h-3" />
            All guides
          </Link>
          <ReaderThemeToggle theme={theme} onChange={setTheme} />
        </div>

        <header className="max-w-3xl space-y-4 mb-10">
          <div className="flex items-center gap-3">
            <p
              className="text-[10px] font-semibold uppercase tracking-[0.22em]"
              style={{ color: "var(--read-gold)" }}
            >
              {SECTION_LABEL[section] ?? section}
            </p>
            <div
              className="h-px w-12"
              style={{
                background:
                  "linear-gradient(to right, var(--read-gold-strong), transparent)",
              }}
              aria-hidden
            />
          </div>
          <h1
            className="font-display text-3xl sm:text-4xl font-semibold tracking-[-0.02em] leading-[1.05]"
            style={{ color: "var(--read-text)" }}
          >
            {title}
          </h1>
          <p
            className="text-[15px] leading-[1.75]"
            style={{ color: "var(--read-text-body)" }}
          >
            {description}
          </p>
        </header>

        <div
          className="h-px mb-8"
          style={{ backgroundColor: "var(--read-border-strong)" }}
          aria-hidden
        />

        <div className="flex gap-10">
          <article className="prose-chapter-dropcap max-w-3xl flex-1 min-w-0">
            {article}

            {(prev || next) && (
              <div
                className="mt-16 pt-8 border-t grid sm:grid-cols-2 gap-4"
                style={{ borderColor: "var(--read-border-strong)" }}
              >
                {prev ? (
                  <Link
                    href={`/guides/${prev.slug}`}
                    className="group rounded-xl border p-5 transition-all duration-200 hover:-translate-y-0.5"
                    style={{
                      borderColor: "var(--read-border-strong)",
                      backgroundColor: "var(--read-bg-elevated)",
                    }}
                  >
                    <p
                      className="text-[10px] uppercase tracking-[0.22em] font-semibold mb-1.5 inline-flex items-center gap-1.5"
                      style={{ color: "var(--read-text-muted)" }}
                    >
                      <ArrowLeft className="w-3 h-3" />
                      Previous guide
                    </p>
                    <p
                      className="font-display text-[17px] font-semibold leading-tight"
                      style={{ color: "var(--read-text)" }}
                    >
                      {prev.title}
                    </p>
                  </Link>
                ) : (
                  <div />
                )}

                {next ? (
                  <Link
                    href={`/guides/${next.slug}`}
                    className="group rounded-xl border p-5 transition-all duration-200 hover:-translate-y-0.5 sm:text-right"
                    style={{
                      borderColor: "var(--read-border-strong)",
                      backgroundColor: "var(--read-bg-elevated)",
                    }}
                  >
                    <p
                      className="text-[10px] uppercase tracking-[0.22em] font-semibold mb-1.5 inline-flex items-center gap-1.5"
                      style={{ color: "var(--read-text-muted)" }}
                    >
                      Next guide
                      <ArrowRight className="w-3 h-3" />
                    </p>
                    <p
                      className="font-display text-[17px] font-semibold leading-tight"
                      style={{ color: "var(--read-text)" }}
                    >
                      {next.title}
                    </p>
                  </Link>
                ) : (
                  <div />
                )}
              </div>
            )}
          </article>

          <TableOfContents targetSelector="article" minHeadings={3} />
        </div>
      </div>
    </>
  )
}
