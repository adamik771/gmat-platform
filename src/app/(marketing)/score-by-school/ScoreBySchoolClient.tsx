"use client"

import { useMemo, useState } from "react"
import Link from "next/link"
import {
  ArrowRight,
  GraduationCap,
  Sparkles,
  TrendingUp,
} from "lucide-react"
import { ALL_SCHOOLS, type MbaSchool, type Region } from "@/lib/mba-schools"
import LeadCapture from "@/components/marketing/LeadCapture"

const REGIONS: Array<Region | "All"> = ["All", "USA", "Europe", "Asia"]

export default function ScoreBySchoolClient() {
  const [region, setRegion] = useState<Region | "All">("All")
  const [selectedSlug, setSelectedSlug] = useState<string>(ALL_SCHOOLS[0].slug)

  const filtered = useMemo(
    () =>
      region === "All"
        ? ALL_SCHOOLS
        : ALL_SCHOOLS.filter((s) => s.region === region),
    [region],
  )

  const selected = useMemo(
    () => ALL_SCHOOLS.find((s) => s.slug === selectedSlug) ?? ALL_SCHOOLS[0],
    [selectedSlug],
  )

  return (
    <div style={{ backgroundColor: "#0A0A0A" }}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 pt-28 pb-20">
        <header className="mb-10">
          <div className="inline-flex items-center gap-2 mb-5">
            <GraduationCap
              className="w-4 h-4"
              style={{ color: "#C9A84C" }}
            />
            <p className="text-[10px] uppercase tracking-[0.22em] text-[#C9A84C] font-semibold">
              Free tool
            </p>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl font-semibold text-[#F0F0F0] tracking-[-0.02em] leading-[1.05] mb-5">
            What GMAT score do I need for{" "}
            <span className="font-display-italic" style={{ color: "#C9A84C" }}>
              my dream school?
            </span>
          </h1>
          <p className="text-[16px] text-[#C0C0C0] leading-relaxed max-w-2xl">
            Median GMAT scores for 20+ top MBA programs, on both the
            legacy 200&ndash;800 and the new Focus 205&ndash;805 scales,
            with a competitive band that maps to roughly the 80th
            percentile of admitted applicants.
          </p>
        </header>

        {/* Region filter */}
        <div className="mb-5">
          <p className="text-[10px] uppercase tracking-[0.22em] font-semibold text-[#888888] mb-2">
            Filter by region
          </p>
          <div className="flex flex-wrap gap-2">
            {REGIONS.map((r) => (
              <button
                key={r}
                type="button"
                onClick={() => {
                  setRegion(r)
                  // If the currently selected school isn't in the new
                  // filter, default to the first one that is.
                  const list =
                    r === "All"
                      ? ALL_SCHOOLS
                      : ALL_SCHOOLS.filter((s) => s.region === r)
                  if (!list.find((s) => s.slug === selectedSlug)) {
                    setSelectedSlug(list[0].slug)
                  }
                }}
                className="px-3 py-1.5 rounded-full text-[12px] font-semibold uppercase tracking-[0.15em] border transition-all"
                style={{
                  borderColor:
                    region === r
                      ? "rgba(201,168,76,0.4)"
                      : "rgba(255,255,255,0.08)",
                  backgroundColor:
                    region === r
                      ? "rgba(201,168,76,0.08)"
                      : "#0D0D0D",
                  color: region === r ? "#C9A84C" : "#888888",
                }}
              >
                {r}
              </button>
            ))}
          </div>
        </div>

        {/* School picker */}
        <div className="mb-7">
          <label
            htmlFor="school-select"
            className="block text-[10px] uppercase tracking-[0.22em] font-semibold text-[#888888] mb-2"
          >
            Pick a school
          </label>
          <select
            id="school-select"
            value={selectedSlug}
            onChange={(e) => setSelectedSlug(e.target.value)}
            className="w-full px-4 py-3 rounded-xl text-[15px] text-[#F0F0F0] border border-white/[0.08] bg-[#0A0A0A] outline-none focus:ring-2 focus:ring-[#C9A84C]/30 focus:border-[#C9A84C]/40 transition-all appearance-none"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23888888' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E\")",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "right 1rem center",
              paddingRight: "2.5rem",
            }}
          >
            {filtered.map((s) => (
              <option key={s.slug} value={s.slug} className="bg-[#0A0A0A]">
                {s.name} — {s.location}
              </option>
            ))}
          </select>
        </div>

        {/* Detail card */}
        <SchoolCard school={selected} />

        {/* Comparison table — quick visual scan of all matching schools */}
        <div className="mt-12">
          <h2 className="font-display text-xl font-semibold text-[#F0F0F0] tracking-tight mb-3">
            All {filtered.length} schools{" "}
            {region !== "All" && (
              <span className="text-[#888888] text-base font-normal">
                ({region})
              </span>
            )}
          </h2>
          <p className="text-[14px] text-[#C0C0C0] leading-relaxed mb-5 max-w-xl">
            Click any row to view its detail card above. Sorted by
            approximate Focus median, descending.
          </p>
          <div
            className="overflow-x-auto rounded-xl border border-white/[0.08]"
            style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.03)" }}
          >
            <table className="w-full text-sm">
              <thead>
                <tr style={{ backgroundColor: "#0F0F0F" }}>
                  <th className="py-3 px-4 text-left text-[10px] uppercase tracking-[0.18em] text-[#888888] font-semibold">
                    School
                  </th>
                  <th className="py-3 px-4 text-right text-[10px] uppercase tracking-[0.18em] text-[#888888] font-semibold">
                    Focus median
                  </th>
                  <th className="py-3 px-4 text-right text-[10px] uppercase tracking-[0.18em] text-[#888888] font-semibold">
                    Old median
                  </th>
                  <th className="py-3 px-4 text-right text-[10px] uppercase tracking-[0.18em] text-[#888888] font-semibold hidden sm:table-cell">
                    Class size
                  </th>
                </tr>
              </thead>
              <tbody>
                {[...filtered]
                  .sort(
                    (a, b) => (b.medianFocus ?? 0) - (a.medianFocus ?? 0),
                  )
                  .map((s, i) => {
                    const isSelected = s.slug === selectedSlug
                    return (
                      <tr
                        key={s.slug}
                        onClick={() => setSelectedSlug(s.slug)}
                        className="border-t border-white/[0.05] cursor-pointer transition-colors hover:bg-white/[0.02]"
                        style={{
                          backgroundColor: isSelected
                            ? "rgba(201,168,76,0.06)"
                            : i % 2 === 0
                              ? "#0A0A0A"
                              : "transparent",
                        }}
                      >
                        <td className="py-3 px-4">
                          <span
                            className="font-semibold"
                            style={{
                              color: isSelected ? "#C9A84C" : "#F0F0F0",
                            }}
                          >
                            {s.name}
                          </span>
                          <span className="block text-[11px] text-[#666666] mt-0.5">
                            {s.location}
                          </span>
                        </td>
                        <td className="py-3 px-4 text-right tabular-nums text-[#C0C0C0]">
                          {s.medianFocus ?? "—"}
                        </td>
                        <td className="py-3 px-4 text-right tabular-nums text-[#888888]">
                          {s.medianGMAT ?? "—"}
                        </td>
                        <td className="py-3 px-4 text-right tabular-nums text-[#888888] hidden sm:table-cell">
                          {s.classSize}
                        </td>
                      </tr>
                    )
                  })}
              </tbody>
            </table>
          </div>
        </div>

        {/* CTA + lead capture */}
        <div
          className="mt-12 p-7 sm:p-9 rounded-2xl border"
          style={{
            borderColor: "rgba(201,168,76,0.28)",
            backgroundColor: "#111111",
          }}
        >
          <p className="text-[10px] uppercase tracking-[0.22em] text-[#C9A84C] font-semibold mb-2">
            Knowing your target is the easy part
          </p>
          <h2 className="font-display text-2xl font-semibold text-[#F0F0F0] tracking-tight leading-tight mb-4">
            The hard part is{" "}
            <span className="font-display-italic" style={{ color: "#C9A84C" }}>
              getting there.
            </span>
          </h2>
          <p className="text-[15px] text-[#C0C0C0] leading-relaxed mb-6 max-w-xl">
            The 30-question diagnostic produces a real readiness band on
            the Focus scale, plus a per-topic weakness map you can build a
            study plan around. No card required.
          </p>
          <div className="flex flex-wrap gap-3 mb-7">
            <Link
              href="/free-diagnostic"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-200 hover:opacity-90 hover:scale-[1.02]"
              style={{ backgroundColor: "#C9A84C", color: "#0A0A0A" }}
            >
              Take the Focus diagnostic
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/score-converter"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold border transition-all duration-200"
              style={{
                borderColor: "rgba(201,168,76,0.32)",
                color: "#C9A84C",
                backgroundColor: "rgba(201,168,76,0.04)",
              }}
            >
              Convert any score
            </Link>
          </div>
          <LeadCapture
            source="other"
            leadMagnet="error-log-template"
            eyebrow="Free template"
            headline="Get the error-log template I used to go from 565 to 735."
            description="The same six-tag taxonomy the Zakarian platform uses, in a spreadsheet you can run yourself. Two months of honest logging surfaces the patterns."
            ctaLabel="Send me the template"
            variant="compact"
          />
        </div>
      </div>
    </div>
  )
}

function SchoolCard({ school }: { school: MbaSchool }) {
  return (
    <div
      className="p-7 sm:p-8 rounded-2xl border overflow-hidden relative"
      style={{
        borderColor: "rgba(201,168,76,0.28)",
        backgroundColor: "#111111",
        boxShadow:
          "0 0 80px rgba(201,168,76,0.08), inset 0 1px 0 rgba(255,255,255,0.04)",
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
        <div className="flex items-baseline gap-3 flex-wrap mb-3">
          <span
            className="px-2 py-0.5 rounded text-[10px] uppercase tracking-[0.18em] font-semibold"
            style={{
              backgroundColor: "rgba(201,168,76,0.12)",
              color: "#C9A84C",
            }}
          >
            {school.region}
          </span>
          <span className="text-[11px] text-[#888888]">
            {school.location}
          </span>
          <span className="text-[11px] text-[#666666]">
            · Class size {school.classSize}
          </span>
        </div>
        <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#F0F0F0] tracking-[-0.02em] leading-[1.1] mb-3">
          {school.name}
        </h2>
        <p className="text-[14px] text-[#C0C0C0] leading-relaxed mb-7 max-w-xl">
          {school.shortNote}
        </p>

        {/* Score grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <ScoreCell
            label="Focus median"
            sub="Approximate, 205-805 scale"
            value={school.medianFocus}
            accent="#C9A84C"
          />
          <ScoreCell
            label="Old GMAT median"
            sub="Approximate, 200-800 scale"
            value={school.medianGMAT}
            accent="#888888"
          />
          <ScoreCell
            label="Competitive Focus"
            sub="~80th percentile of admits"
            value={school.competitiveFocus}
            accent="#3ECF8E"
            icon={TrendingUp}
          />
          <ScoreCell
            label="Competitive old GMAT"
            sub="~80th percentile of admits"
            value={school.competitiveGMAT}
            accent="#3ECF8E"
            icon={TrendingUp}
          />
        </div>

        <p className="text-[12px] text-[#666666] mt-5 leading-relaxed">
          <Sparkles
            className="inline w-3 h-3 mr-1"
            style={{ color: "#C9A84C" }}
          />
          Numbers are from school-published class profiles. Medians shift
          year to year; treat the competitive band as the score you can
          submit without having to over-explain the rest of your
          application.
        </p>
      </div>
    </div>
  )
}

function ScoreCell({
  label,
  sub,
  value,
  accent,
  icon: Icon,
}: {
  label: string
  sub: string
  value: number | null
  accent: string
  icon?: React.ComponentType<{ className?: string; style?: React.CSSProperties }>
}) {
  return (
    <div
      className="px-4 py-3 rounded-xl border"
      style={{
        borderColor: "rgba(255,255,255,0.06)",
        backgroundColor: "#0D0D0D",
      }}
    >
      <p className="text-[10px] uppercase tracking-[0.22em] font-semibold text-[#888888] mb-1.5">
        {label}
      </p>
      <div className="flex items-center gap-2">
        {Icon && <Icon className="w-3.5 h-3.5" style={{ color: accent }} />}
        <span
          className="font-display text-2xl font-semibold tabular-nums"
          style={{ color: accent }}
        >
          {value ?? "—"}
        </span>
      </div>
      <p className="text-[11px] text-[#555555] mt-1">{sub}</p>
    </div>
  )
}
