import type { ReactNode } from "react"

interface LegalPageProps {
  eyebrow: string
  title: string
  intro: string
  lastUpdated: string
  children: ReactNode
}

export default function LegalPage({
  eyebrow,
  title,
  intro,
  lastUpdated,
  children,
}: LegalPageProps) {
  return (
    <div style={{ backgroundColor: "#0A0A0A" }}>
      <section className="relative pt-32 pb-12 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 90% 55% at 50% -5%, rgba(201,168,76,0.14) 0%, transparent 60%)",
          }}
          aria-hidden
        />
        <div
          className="absolute inset-0 pointer-events-none bg-grain opacity-[0.03] mix-blend-overlay"
          aria-hidden
        />
        <div className="relative max-w-3xl mx-auto px-4 text-center">
          <p
            className="text-[10px] font-semibold uppercase tracking-[0.22em] mb-4"
            style={{ color: "#C9A84C" }}
          >
            {eyebrow}
          </p>
          <h1 className="font-display text-4xl sm:text-5xl font-semibold text-[#F0F0F0] tracking-[-0.02em] leading-[1.05] mb-5">
            {title}
          </h1>
          <p className="text-[15px] sm:text-[16px] text-[#C0C0C0] leading-relaxed max-w-2xl mx-auto">
            {intro}
          </p>
          <p className="mt-5 text-[11px] uppercase tracking-[0.18em] text-[#666666]">
            Last updated · {lastUpdated}
          </p>
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 pb-24">
        <div className="legal-prose space-y-6">{children}</div>
      </article>

      <style>{`
        .legal-prose { color: #C0C0C0; font-size: 15px; line-height: 1.75; }
        .legal-prose p { color: #C0C0C0; }
        .legal-prose strong { color: #F0F0F0; font-weight: 600; }
        .legal-prose ol, .legal-prose ul { padding-left: 22px; }
        .legal-prose ol > li, .legal-prose ul > li { margin-bottom: 6px; }
        .legal-prose a { color: #C9A84C; text-decoration: underline; }
      `}</style>
    </div>
  )
}

export function LegalSection({
  id,
  title,
  children,
}: {
  id?: string
  title: string
  children: ReactNode
}) {
  return (
    <section id={id} className="mt-10 first:mt-0">
      <h2 className="font-display text-2xl font-semibold text-[#F0F0F0] tracking-tight leading-tight mb-3">
        {title}
      </h2>
      <div className="space-y-4">{children}</div>
    </section>
  )
}
