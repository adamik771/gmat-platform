import Link from "next/link"
import { ArrowRight, BookMarked } from "lucide-react"
import { getAllGuides } from "@/lib/content"
import type { Section } from "@/types"

export const metadata = {
  title: "Strategy Guides",
}

const SECTION_ORDER: (Section | "General")[] = ["General", "Quant", "Verbal", "DI"]

const SECTION_LABEL: Record<Section | "General", string> = {
  General: "Cross-section",
  Quant: "Quantitative",
  Verbal: "Verbal",
  DI: "Data Insights",
}

export default function GuidesPage() {
  const guides = getAllGuides()

  const grouped = new Map<Section | "General", typeof guides>()
  for (const key of SECTION_ORDER) grouped.set(key, [])
  for (const guide of guides) {
    const bucket = grouped.get(guide.section) ?? []
    bucket.push(guide)
    grouped.set(guide.section, bucket)
  }

  return (
    <div className="max-w-5xl mx-auto space-y-10">
      <section
        className="relative overflow-hidden rounded-2xl border border-white/[0.06] px-6 py-10 sm:px-10 sm:py-12"
        style={{ backgroundColor: "#0D0D0D" }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 50% at 15% -10%, rgba(201,168,76,0.16) 0%, transparent 60%), radial-gradient(ellipse 50% 40% at 110% 110%, rgba(201,168,76,0.08) 0%, transparent 60%)",
          }}
          aria-hidden
        />
        <div
          className="absolute inset-0 pointer-events-none bg-grain opacity-[0.035] mix-blend-overlay"
          aria-hidden
        />
        <div className="relative">
          <div className="flex items-center gap-3 mb-4">
            <p
              className="text-[10px] font-semibold uppercase tracking-[0.22em]"
              style={{ color: "#C9A84C" }}
            >
              Reference library
            </p>
            <div
              className="h-px w-12"
              style={{
                background:
                  "linear-gradient(to right, rgba(201,168,76,0.4), transparent)",
              }}
              aria-hidden
            />
          </div>
          <h1 className="font-display text-4xl sm:text-5xl font-semibold text-[#F0F0F0] tracking-[-0.02em] leading-[1.05]">
            Strategy{" "}
            <span className="font-display-italic" style={{ color: "#C9A84C" }}>
              guides.
            </span>
          </h1>
          <p className="text-[15px] text-[#C0C0C0] leading-[1.75] mt-4 max-w-2xl">
            Reading material, not drills. Section-level playbooks, the full
            strategic master chapter, formula sheets, and test-day checklists —
            the tactical companion to the lessons and chapters.
          </p>
        </div>
      </section>

      {SECTION_ORDER.map((section, i) => {
        const items = grouped.get(section) ?? []
        if (items.length === 0) return null
        return (
          <section key={section} className="space-y-5">
            <div className="flex items-center gap-3">
              <span
                className="font-display text-[11px] font-semibold tabular-nums"
                style={{ color: "rgba(201,168,76,0.55)" }}
                aria-hidden
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <p
                className="text-[10px] font-semibold uppercase tracking-[0.22em]"
                style={{ color: "#C9A84C" }}
              >
                {SECTION_LABEL[section]}
              </p>
              <div
                className="h-px flex-1"
                style={{
                  background:
                    "linear-gradient(to right, rgba(201,168,76,0.3), transparent)",
                }}
                aria-hidden
              />
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {items.map((guide) => (
                <Link
                  key={guide.slug}
                  href={`/guides/${guide.slug}`}
                  className="group rounded-2xl border border-white/[0.06] bg-[#0D0D0D] p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/[0.12] hover:shadow-[0_20px_40px_-24px_rgba(201,168,76,0.25)]"
                >
                  <div className="flex items-start gap-3.5 mb-3">
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: "rgba(201,168,76,0.08)" }}
                    >
                      <BookMarked
                        className="w-4 h-4"
                        style={{ color: "#C9A84C" }}
                      />
                    </div>
                    <h2 className="font-display text-[19px] sm:text-xl font-semibold text-[#F0F0F0] tracking-tight leading-[1.2] flex-1">
                      {guide.title}
                    </h2>
                  </div>
                  <p className="text-[13px] text-[#888888] leading-relaxed mb-4 line-clamp-3">
                    {guide.description}
                  </p>
                  <span
                    className="inline-flex items-center gap-1.5 text-[12px] font-medium transition-all duration-200 group-hover:gap-2"
                    style={{ color: "#C9A84C" }}
                  >
                    Read
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </Link>
              ))}
            </div>
          </section>
        )
      })}
    </div>
  )
}
