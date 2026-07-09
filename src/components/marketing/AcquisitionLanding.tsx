import type { ComponentProps } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import JsonLd from "@/components/seo/JsonLd"
import { softwareApplicationLd, faqPageLd } from "@/lib/structured-data"
import LeadCapture from "@/components/marketing/LeadCapture"
import TrackView from "@/components/analytics/TrackView"

/**
 * Reusable SEO + paid-ad landing page. Content is passed as structured data so
 * prose renders through React (auto-escaped — no JSX-entity issues) and stays
 * genuinely useful, not thin. Every page gets: a page-view conversion event
 * (landing_view), an explicit-opt-in email capture (LeadCapture has the
 * unticked consent box), a signup CTA, FAQ schema, and the GMAC
 * non-affiliation disclaimer.
 */

type LeadSource = ComponentProps<typeof LeadCapture>["source"]
type LeadMagnet = ComponentProps<typeof LeadCapture>["leadMagnet"]

export interface AcquisitionLandingProps {
  /** Slug used for the view event + JSON-LD path, e.g. "gmat-study-plan". */
  slug: string
  eyebrow: string
  h1: string
  /** Paragraphs separated by blank lines. */
  intro: string
  sections: { heading: string; body: string }[]
  faq: { q: string; a: string }[]
  lead: {
    source: LeadSource
    leadMagnet: LeadMagnet
    headline: string
    description: string
    ctaLabel?: string
  }
  primaryCta?: { label: string; href: string }
  metaDescription: string
  /** Internal cross-links ("Keep going" grid) — keeps the visitor in the funnel
   *  and builds the on-site link graph search engines crawl. */
  relatedLinks?: { label: string; href: string; description?: string }[]
}

/** Render structured prose: blank-line-separated paragraphs + "- " bullet lists. */
function Prose({ text, pClass }: { text: string; pClass: string }) {
  const blocks = text.split(/\n\s*\n/).map((b) => b.trim()).filter(Boolean)
  return (
    <>
      {blocks.map((block, i) => {
        const lines = block.split(/\n/).map((l) => l.trim()).filter(Boolean)
        const isList = lines.length > 1 && lines.every((l) => /^[-*]\s+/.test(l))
        if (isList) {
          return (
            <ul key={i} className="list-disc pl-5 mb-4 space-y-1.5">
              {lines.map((l, j) => (
                <li key={j} className="text-[15px] text-[#C0C0C0] leading-relaxed">
                  {l.replace(/^[-*]\s+/, "")}
                </li>
              ))}
            </ul>
          )
        }
        return (
          <p key={i} className={pClass}>
            {block.replace(/\n+/g, " ")}
          </p>
        )
      })}
    </>
  )
}

export default function AcquisitionLanding(props: AcquisitionLandingProps) {
  const cta = props.primaryCta ?? { label: "Start free", href: "/signup" }
  return (
    <div style={{ backgroundColor: "#0A0A0A" }}>
      <TrackView event="landing_view" props={{ page: props.slug }} />
      <JsonLd
        data={[
          softwareApplicationLd({
            name: "Zakarian GMAT",
            description: props.metaDescription,
            path: `/${props.slug}`,
          }),
          ...(props.faq.length
            ? [faqPageLd({ questions: props.faq.map((f) => ({ question: f.q, answer: f.a })) })]
            : []),
        ]}
      />

      {/* Hero */}
      <section className="relative max-w-3xl mx-auto px-4 pt-24 pb-10">
        <p className="text-[10px] font-semibold uppercase tracking-[0.22em] mb-4" style={{ color: "#C9A84C" }}>
          {props.eyebrow}
        </p>
        <h1 className="font-display text-4xl sm:text-5xl font-semibold text-[#F0F0F0] tracking-[-0.02em] leading-[1.05] mb-5">
          {props.h1}
        </h1>
        <Prose text={props.intro} pClass="text-[16px] text-[#C0C0C0] leading-relaxed mb-4 max-w-2xl" />
        <div className="flex flex-wrap gap-3 mt-6">
          <Link
            href={cta.href}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-all hover:opacity-90 hover:scale-[1.02]"
            style={{ backgroundColor: "#C9A84C", color: "#0A0A0A" }}
          >
            {cta.label}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Value sections */}
      <section className="max-w-3xl mx-auto px-4 py-8 space-y-12">
        {props.sections.map((s, i) => (
          <div key={i}>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#F0F0F0] tracking-[-0.02em] leading-[1.15] mb-4">
              {s.heading}
            </h2>
            <Prose text={s.body} pClass="text-[15px] text-[#C0C0C0] leading-relaxed mb-4" />
          </div>
        ))}
      </section>

      {/* Email opt-in (explicit consent checkbox lives inside LeadCapture) */}
      <section className="max-w-xl mx-auto px-4 py-10">
        <LeadCapture
          source={props.lead.source}
          leadMagnet={props.lead.leadMagnet}
          eyebrow="Free"
          headline={props.lead.headline}
          description={props.lead.description}
          ctaLabel={props.lead.ctaLabel ?? "Send it to me"}
        />
      </section>

      {/* FAQ */}
      {props.faq.length > 0 && (
        <section className="max-w-3xl mx-auto px-4 py-8">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#F0F0F0] tracking-[-0.02em] mb-6">
            Common questions
          </h2>
          <div className="space-y-6">
            {props.faq.map((f, i) => (
              <div key={i}>
                <p className="text-[15px] font-semibold text-[#F0F0F0] mb-1.5">{f.q}</p>
                <p className="text-[14px] text-[#888888] leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Internal links — keep the visitor in the funnel + build the link graph */}
      {props.relatedLinks && props.relatedLinks.length > 0 && (
        <section className="max-w-3xl mx-auto px-4 py-8">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#F0F0F0] tracking-[-0.02em] mb-6">
            Keep going
          </h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {props.relatedLinks.map((l, i) => (
              <Link
                key={i}
                href={l.href}
                className="group flex items-start gap-3 p-4 rounded-xl border border-white/[0.08] bg-[#0D0D0D] hover:border-white/[0.16] transition-all"
              >
                <ArrowRight
                  className="w-4 h-4 mt-0.5 flex-shrink-0"
                  style={{ color: "#C9A84C" }}
                />
                <span>
                  <span className="block text-[14px] font-semibold text-[#F0F0F0] group-hover:text-white transition-colors">
                    {l.label}
                  </span>
                  {l.description && (
                    <span className="block text-[13px] text-[#888888] leading-relaxed mt-0.5">
                      {l.description}
                    </span>
                  )}
                </span>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Final CTA + disclaimer */}
      <section className="max-w-3xl mx-auto px-4 pt-8 pb-24">
        <div className="rounded-2xl border border-white/[0.08] bg-[#0D0D0D] p-8 text-center">
          <p className="text-[15px] text-[#C0C0C0] mb-5">
            Every new account starts with a free 7-day full-access trial. No credit card.
          </p>
          <Link
            href={cta.href}
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold transition-all hover:opacity-90 hover:scale-[1.02]"
            style={{ backgroundColor: "#C9A84C", color: "#0A0A0A" }}
          >
            {cta.label}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <p className="text-[11px] text-[#555555] leading-relaxed mt-6 text-center max-w-2xl mx-auto">
          Zakarian GMAT is an independent prep platform. It is not affiliated with, endorsed by, or
          sponsored by the Graduate Management Admission Council (GMAC), the GMAT, GMAT Focus Edition,
          or mba.com, which are trademarks of GMAC. We do not guarantee any score.
        </p>
      </section>
    </div>
  )
}
