import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Clock } from "lucide-react"
import SectionWrapper from "@/components/shared/SectionWrapper"
import { POSTS } from "@/lib/blog-posts"

export const metadata: Metadata = {
  title: "Blog",
  alternates: { canonical: "/blog" },
  description:
    "GMAT prep strategy, mistake patterns, and score-improvement frameworks from the founder of Zakarian GMAT.",
}

export default function BlogIndexPage() {
  return (
    <div style={{ backgroundColor: "#0A0A0A" }}>
      <section className="relative pt-32 pb-12 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 90% 55% at 50% -5%, rgba(201,168,76,0.16) 0%, transparent 60%)",
          }}
          aria-hidden
        />
        <div className="relative max-w-3xl mx-auto px-4 text-center">
          <p
            className="text-[10px] font-semibold uppercase tracking-[0.22em] mb-4"
            style={{ color: "#C9A84C" }}
          >
            Writing
          </p>
          <h1 className="font-display text-4xl sm:text-6xl font-semibold text-[#F0F0F0] tracking-[-0.02em] leading-[1.02] mb-5">
            Notes on{" "}
            <span className="font-display-italic" style={{ color: "#C9A84C" }}>
              the climb.
            </span>
          </h1>
          <p className="text-[16px] text-[#C0C0C0] leading-relaxed max-w-xl mx-auto">
            Strategy, mistake patterns, and score-improvement frameworks. From
            the founder of Zakarian GMAT.
          </p>
        </div>
      </section>

      <SectionWrapper>
        <ul className="space-y-3 max-w-3xl mx-auto">
          {POSTS.map((p) => (
            <li key={p.slug}>
              <Link
                href={`/blog/${p.slug}`}
                className="group block p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-0.5"
                style={{
                  borderColor: "rgba(255,255,255,0.06)",
                  backgroundColor: "#0D0D0D",
                }}
              >
                <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.18em] text-[#888888] mb-3">
                  <span className="tabular-nums">{p.date}</span>
                  <span className="text-[#444444]">·</span>
                  <span className="inline-flex items-center gap-1.5">
                    <Clock className="w-3 h-3" />
                    {p.readMinutes} min read
                  </span>
                </div>
                <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#F0F0F0] tracking-[-0.02em] leading-tight mb-2">
                  {p.title}
                </h2>
                <p className="text-[14px] text-[#C0C0C0] leading-relaxed mb-4 max-w-xl">
                  {p.description}
                </p>
                <span
                  className="inline-flex items-center gap-1.5 text-[12px] uppercase tracking-[0.18em] font-semibold transition-transform group-hover:translate-x-0.5"
                  style={{ color: "#C9A84C" }}
                >
                  Read post
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </SectionWrapper>
    </div>
  )
}
