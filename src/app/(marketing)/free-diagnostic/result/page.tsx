import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, FlaskConical, RotateCcw } from "lucide-react"
import LeadCapture from "@/components/marketing/LeadCapture"
import {
  decodeDiagnosticResult,
  encodeDiagnosticResult,
  summarizeDiagnostic,
  type SectionBand,
} from "@/lib/free-diagnostic-share"
import type { Section } from "@/types"

const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.zakariangmat.com"
).replace(/\/$/, "")

const SECTION_PALETTE: Record<Section, { color: string; bg: string }> = {
  Quant: { color: "#C9A84C", bg: "rgba(201,168,76,0.12)" },
  Verbal: { color: "#3ECF8E", bg: "rgba(62,207,142,0.12)" },
  DI: { color: "#6FB5F6", bg: "rgba(111,181,246,0.12)" },
}

/**
 * Public result page for shared diagnostic samplers. The URL carries
 * the entire payload (?q=101&v=0111&d=110) so this route is fully
 * static / cacheable and works without any DB lookup.
 *
 * If the params are missing or malformed (someone hand-types the URL
 * or shares it broken), we degrade gracefully into a "take the sampler
 * yourself" prompt rather than rendering a confused half-result.
 */

interface PageProps {
  searchParams: Promise<Record<string, string | string[] | undefined>>
}

export async function generateMetadata({
  searchParams,
}: PageProps): Promise<Metadata> {
  const params = await searchParams
  const result = decodeDiagnosticResult(params)
  if (!result) {
    return {
      title: "Free diagnostic — take the sampler",
      description:
        "Try ten sample GMAT Focus questions in under 12 minutes — three Quant, four Verbal, three Data Insights — and get a per-section signal you can share.",
    }
  }
  const summary = summarizeDiagnostic(result)
  const headline = `${summary.totalCorrect}/${summary.totalQuestions} on the GMAT sampler`
  const sub = `Quant ${summary.perSection[0].correct}/${summary.perSection[0].total} · Verbal ${summary.perSection[1].correct}/${summary.perSection[1].total} · DI ${summary.perSection[2].correct}/${summary.perSection[2].total}`
  const params2 = new URLSearchParams(encodeDiagnosticResult(result))
  return {
    title: headline,
    description: sub,
    alternates: {
      canonical: `/free-diagnostic/result?${params2.toString()}`,
    },
    openGraph: {
      type: "website",
      title: `${headline} · Zakarian GMAT`,
      description: sub,
      url: `${SITE_URL}/free-diagnostic/result?${params2.toString()}`,
      images: [
        {
          url: `/api/og/diagnostic-result?${params2.toString()}`,
          width: 1200,
          height: 630,
          alt: `${headline}: ${sub}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${headline} · Zakarian GMAT`,
      description: sub,
      images: [`/api/og/diagnostic-result?${params2.toString()}`],
    },
  }
}

function bandColour(band: SectionBand) {
  return band === "Strong"
    ? "#3ECF8E"
    : band === "Mixed"
      ? "#C9A84C"
      : "#FF4444"
}
function bandBg(band: SectionBand) {
  return band === "Strong"
    ? "rgba(62,207,142,0.04)"
    : band === "Mixed"
      ? "rgba(201,168,76,0.04)"
      : "rgba(255,68,68,0.04)"
}
function bandBorder(band: SectionBand) {
  return band === "Strong"
    ? "rgba(62,207,142,0.28)"
    : band === "Mixed"
      ? "rgba(201,168,76,0.28)"
      : "rgba(255,68,68,0.28)"
}

export default async function FreeDiagnosticResultPage({
  searchParams,
}: PageProps) {
  const params = await searchParams
  const result = decodeDiagnosticResult(params)

  // Invalid / missing params — render the "take it yourself" prompt
  // instead of breaking. We deliberately don't 404 because the URL is a
  // share-link convention, not a "page not found" surface.
  if (!result) {
    return (
      <div className="relative max-w-3xl mx-auto px-4 py-20 sm:py-28">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 mb-3">
            <FlaskConical className="w-4 h-4" style={{ color: "#C9A84C" }} />
            <p className="text-[10px] uppercase tracking-[0.2em] text-[#C9A84C] font-semibold">
              Free sampler
            </p>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl font-semibold text-[#F0F0F0] tracking-[-0.02em] leading-[1.05] mb-5">
            That share link looks{" "}
            <span
              className="font-display-italic"
              style={{ color: "#C9A84C" }}
            >
              malformed.
            </span>
          </h1>
          <p className="text-[15px] text-[#C0C0C0] leading-relaxed max-w-xl mx-auto mb-8">
            Take the 10-question sampler yourself — three Quant, four
            Verbal, three Data Insights — and you&apos;ll get a clean
            shareable result.
          </p>
          <Link
            href="/free-diagnostic"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-200 hover:opacity-90 hover:scale-[1.02]"
            style={{ backgroundColor: "#C9A84C", color: "#0A0A0A" }}
          >
            Take the sampler
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    )
  }

  const summary = summarizeDiagnostic(result)

  return (
    <div className="relative max-w-3xl mx-auto px-4 py-16 sm:py-20 space-y-10">
      <div
        className="absolute inset-x-0 top-0 h-[32rem] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(201,168,76,0.12) 0%, transparent 65%)",
        }}
        aria-hidden
      />

      <div className="relative">
        <div className="flex items-center gap-2 mb-3">
          <FlaskConical className="w-4 h-4" style={{ color: "#C9A84C" }} />
          <p className="text-[10px] uppercase tracking-[0.2em] text-[#C9A84C] font-semibold">
            Shared sampler result
          </p>
          <div
            className="flex-1 h-px ml-2"
            style={{
              background:
                "linear-gradient(to right, rgba(201,168,76,0.3), transparent)",
            }}
          />
        </div>
        <h1 className="font-display text-4xl sm:text-5xl font-semibold text-[#F0F0F0] tracking-[-0.02em] leading-[1.05]">
          A friend scored{" "}
          <span
            className="font-display-italic"
            style={{ color: "#C9A84C" }}
          >
            {summary.totalCorrect} / {summary.totalQuestions}
          </span>{" "}
          on the GMAT sampler.
        </h1>
        <p className="text-[15px] text-[#888888] leading-relaxed mt-4 max-w-2xl">
          The sampler is 10 questions across the three GMAT Focus sections
          — three Quant, four Verbal, three Data Insights. Below is the
          per-section breakdown they shared. The full diagnostic on signup
          is 30 questions and produces a real readiness band; this is the
          honest preview.
        </p>
      </div>

      <div
        className="relative p-8 sm:p-10 rounded-2xl border overflow-hidden"
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

        <div className="relative flex items-start justify-between gap-6 flex-wrap mb-7">
          <div>
            <p className="text-[10px] uppercase tracking-[0.22em] text-[#C9A84C] font-semibold mb-2">
              Per-section signals
            </p>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#F0F0F0] tracking-[-0.02em] leading-[1.1]">
              Strong, Mixed, or Needs work — per section.
            </h2>
          </div>
          <div className="flex items-baseline gap-1.5 flex-shrink-0">
            <span
              className="font-display text-5xl sm:text-6xl font-semibold tabular-nums tracking-[-0.03em] leading-none"
              style={{ color: "#C9A84C" }}
            >
              {summary.totalCorrect}
            </span>
            <span className="font-display text-2xl font-semibold text-[#555555] tracking-tight">
              / {summary.totalQuestions}
            </span>
          </div>
        </div>

        <div className="relative mb-6 grid grid-cols-1 sm:grid-cols-3 gap-2.5">
          {summary.perSection.map((row) => {
            const palette = SECTION_PALETTE[row.section]
            return (
              <div
                key={row.section}
                className="p-3.5 rounded-xl border"
                style={{
                  borderColor: bandBorder(row.band),
                  backgroundColor: bandBg(row.band),
                }}
              >
                <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                  <span
                    className="px-1.5 py-0.5 rounded text-[10px] uppercase tracking-[0.15em] font-medium"
                    style={{
                      backgroundColor: palette.bg,
                      color: palette.color,
                    }}
                  >
                    {row.section}
                  </span>
                  <span className="text-[11px] text-[#888888] tabular-nums">
                    {row.correct} / {row.total}
                  </span>
                  <span
                    className="text-[11px] font-semibold ml-auto"
                    style={{ color: bandColour(row.band) }}
                  >
                    {row.band}
                  </span>
                </div>
              </div>
            )
          })}
        </div>

        {summary.weakestSection && (
          <p className="relative text-[13px] text-[#888888] mb-6">
            <span className="text-[#F0F0F0] font-semibold">
              Weakest section in the sampler:{" "}
            </span>
            {summary.weakestSection}.
          </p>
        )}

        <p className="relative text-[15px] text-[#C0C0C0] leading-relaxed mb-7 max-w-xl">
          Want a real readiness band of your own? The full 30-question
          diagnostic produces a readiness band, weak-topic list, recommended
          chapters, and a section-order hypothesis. No card required.
        </p>

        <div className="relative flex flex-wrap gap-3 mb-2">
          <Link
            href="/free-diagnostic"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-200 hover:opacity-90 hover:scale-[1.02]"
            style={{ backgroundColor: "#C9A84C", color: "#0A0A0A" }}
          >
            <RotateCcw className="w-4 h-4" />
            Take the sampler myself
          </Link>
          <Link
            href="/signup"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold border transition-all duration-200"
            style={{
              borderColor: "rgba(201,168,76,0.32)",
              color: "#C9A84C",
              backgroundColor: "rgba(201,168,76,0.04)",
            }}
          >
            Sign up for the full diagnostic
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Email capture for prospects who arrive via share links and
            aren't ready to take the sampler yet. Same delivery path as
            the footer + the free-diagnostic result screen. */}
        <div className="relative mt-8">
          <LeadCapture
            source="free-diagnostic"
            leadMagnet="error-log-template"
            eyebrow="Not ready for the sampler?"
            headline="Get the error-log template instead."
            description="The same six-tag taxonomy the full diagnostic uses, in a spreadsheet you can run yourself. Two months of honest logging surfaces the patterns."
            ctaLabel="Send me the template"
            variant="compact"
          />
        </div>
      </div>
    </div>
  )
}
