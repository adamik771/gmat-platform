import type { Metadata } from "next"
import { CHAPTER_COUNT_CLAIM } from "@/lib/site"
import Link from "next/link"
import { ArrowRight, BookA, Sparkles } from "lucide-react"
import { ENTRIES, groupAlphabetically } from "@/lib/glossary"
import JsonLd from "@/components/seo/JsonLd"
import { definedTermSetLd } from "@/lib/structured-data"
import Breadcrumbs from "@/components/seo/Breadcrumbs"

export const metadata: Metadata = {
  title: "GMAT Glossary",
  description:
    "Plain-English definitions for every term that matters on the GMAT Focus Edition — from AD/BCE process to Two-Part Analysis. Cross-linked to in-depth strategy guides and tools.",
  alternates: { canonical: "/glossary" },
}

/**
 * /glossary — single-page reference for GMAT terminology. Each entry
 * has a one-paragraph definition + optional cross-link to a deeper
 * resource.
 *
 * SEO leverage: each entry is a separate ranking opportunity for
 * "what is GMAT [term]" queries. With 30+ entries, the glossary
 * captures a long tail of low-volume / low-competition searches that
 * aggregate to substantial traffic.
 *
 * Data lives in `@/lib/glossary` — adding a term is a single push to
 * the ENTRIES array.
 */
export default function GlossaryPage() {
  const groups = groupAlphabetically()
  const totalEntries = ENTRIES.length

  return (
    <div style={{ backgroundColor: "#0A0A0A" }}>
      <JsonLd
        data={definedTermSetLd({
          name: "GMAT Glossary",
          description:
            "Plain-English definitions for every term that matters on the GMAT Focus Edition.",
          path: "/glossary",
          terms: ENTRIES.map((e) => ({
            term: e.term,
            definition: e.definition,
            url: e.link?.href,
          })),
        })}
      />
      <div className="max-w-3xl mx-auto pt-24 px-4 sm:px-6">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Glossary", href: "/glossary" },
          ]}
        />
      </div>
      {/* Hero */}
      <section className="relative pt-8 pb-12 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 90% 55% at 50% -5%, rgba(201,168,76,0.16) 0%, transparent 60%)",
          }}
          aria-hidden
        />
        <div
          className="absolute inset-0 pointer-events-none bg-grain opacity-[0.035] mix-blend-overlay"
          aria-hidden
        />
        <div className="relative max-w-3xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 mb-5">
            <BookA className="w-4 h-4" style={{ color: "#C9A84C" }} />
            <p className="text-[10px] uppercase tracking-[0.22em] text-[#C9A84C] font-semibold">
              Reference
            </p>
          </div>
          <h1 className="font-display text-4xl sm:text-6xl font-semibold text-[#F0F0F0] tracking-[-0.02em] leading-[1.02] mb-5">
            GMAT{" "}
            <span className="font-display-italic" style={{ color: "#C9A84C" }}>
              glossary.
            </span>
          </h1>
          <p className="text-[16px] sm:text-[17px] text-[#C0C0C0] leading-relaxed max-w-2xl mx-auto">
            Plain-English definitions for {totalEntries} terms that matter
            on the GMAT Focus Edition. Cross-linked to deeper strategy
            guides and tools where they exist.
          </p>
        </div>
      </section>

      {/* Letter index */}
      <nav
        aria-label="Glossary letter index"
        className="max-w-3xl mx-auto px-4 sm:px-6 mb-10"
      >
        <ul className="flex flex-wrap gap-1.5 justify-center">
          {groups.map((g) => (
            <li key={g.letter}>
              <a
                href={`#${g.letter}`}
                className="inline-flex items-center justify-center w-9 h-9 rounded-lg text-[12px] font-display font-semibold transition-all hover:scale-105"
                style={{
                  backgroundColor: "rgba(201,168,76,0.06)",
                  color: "#C9A84C",
                  border: "1px solid rgba(201,168,76,0.2)",
                }}
              >
                {g.letter}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Entries */}
      <main className="max-w-3xl mx-auto px-4 sm:px-6 pb-20 space-y-12">
        {groups.map((g) => (
          <section
            key={g.letter}
            id={g.letter}
            aria-labelledby={`heading-${g.letter}`}
            className="scroll-mt-24"
          >
            <h2
              id={`heading-${g.letter}`}
              className="font-display text-3xl sm:text-4xl font-semibold tracking-[-0.02em] mb-5"
              style={{ color: "#C9A84C" }}
            >
              {g.letter}
            </h2>
            <div className="space-y-3">
              {g.entries.map((entry) => (
                <article
                  key={entry.term}
                  className="p-5 sm:p-6 rounded-2xl border border-white/[0.06] bg-[#0D0D0D]"
                >
                  <h3 className="font-display text-lg sm:text-xl font-semibold text-[#F0F0F0] tracking-tight mb-2 leading-snug">
                    {entry.term}
                  </h3>
                  {entry.aliases && entry.aliases.length > 0 && (
                    <p className="text-[11px] uppercase tracking-[0.18em] text-[#666666] mb-2">
                      Also: {entry.aliases.join(", ")}
                    </p>
                  )}
                  <p className="text-[14px] text-[#C0C0C0] leading-relaxed">
                    {entry.definition}
                  </p>
                  {entry.link && (
                    <Link
                      href={entry.link.href}
                      className="inline-flex items-center gap-1.5 text-[12px] font-semibold mt-3 hover:underline"
                      style={{ color: "#C9A84C" }}
                    >
                      <Sparkles className="w-3 h-3" />
                      {entry.link.label}
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  )}
                </article>
              ))}
            </div>
          </section>
        ))}
      </main>

      {/* Final CTA */}
      <section
        className="relative py-20 overflow-hidden border-t border-white/[0.06]"
        style={{ backgroundColor: "#050505" }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 70% at 50% 100%, rgba(201,168,76,0.14) 0%, transparent 65%)",
          }}
          aria-hidden
        />
        <div className="relative max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-[#F0F0F0] tracking-[-0.02em] leading-[1.05] mb-4">
            Knowing the terms is the easy part.
          </h2>
          <p className="text-[15px] text-[#C0C0C0] leading-relaxed mb-7 max-w-xl mx-auto">
            Apply them in a structured 12-week plan with the platform.
            {CHAPTER_COUNT_CLAIM} chapters + adaptive plan + error log —
            free 7-day full-access trial. No card required.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/signup"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold transition-all duration-200 hover:opacity-90 hover:scale-[1.02]"
              style={{ backgroundColor: "#C9A84C", color: "#0A0A0A" }}
            >
              Start Free
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/resources"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold border border-white/[0.1] text-[#C0C0C0] hover:border-white/[0.18] hover:text-[#F0F0F0] transition-all duration-200"
            >
              See all free resources
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
