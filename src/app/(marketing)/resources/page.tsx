import type { Metadata } from "next"
import { getPublicInventory } from "@/components/marketing/content-inventory"
import Link from "next/link"
import {
  ArrowRight,
  BookA,
  BookOpen,
  Calculator,
  Calendar,
  ClipboardList,
  Clock,
  Download,
  ExternalLink,
  FileText,
  Globe,
  GraduationCap,
  Sparkles,
  Video,
} from "lucide-react"
import LeadCapture from "@/components/marketing/LeadCapture"
import Breadcrumbs from "@/components/seo/Breadcrumbs"
import { POSTS as ALL_POSTS, type BlogPost } from "@/lib/blog-posts"
import { PAYWALL_ENABLED } from "@/lib/entitlements"

export const metadata: Metadata = {
  title: "Free GMAT resources",
  description:
    "Every free GMAT resource on Zakarian GMAT — score converter, sample chapters, error-log template, and long-form strategy guides — plus a curated directory of the best free GMAT resources across the web. No signup required.",
  alternates: { canonical: "/resources" },
}

interface ResourceCard {
  title: string
  description: string
  href: string
  cta: string
  icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>
  meta?: string
}

const TOOLS: ResourceCard[] = [
  {
    title: "GMAT score converter",
    description:
      "Look up the official GMAC score range between the current GMAT (205-805) and the 10th Edition (200-800).",
    href: "/score-converter",
    cta: "Open the converter",
    icon: Calculator,
    meta: "Bidirectional · Official total-score ranges",
  },
  {
    title: "GMAT score by programme",
    description:
      "Published GMAT benchmarks for leading MBA, MiM, and finance master's programmes, with current-scale equivalents and source context.",
    href: "/score-by-school",
    cta: "Pick a school",
    icon: GraduationCap,
    meta: "20+ programs · M7 + T15 + Europe + Asia",
  },
  {
    title: "Study schedule generator",
    description:
      "Enter your exam date + weekly study hours and get a week-by-week plan. Optional: feed in section accuracies for a plan built around your weakest section.",
    href: "/study-schedule",
    cta: "Build a schedule",
    icon: Calendar,
    meta: "Personalised · Adjustable",
  },
  {
    title: "GMAT glossary",
    description:
      "Plain-English definitions for 36 terms that matter on the GMAT Focus Edition. Cross-linked to deeper strategy guides where they exist.",
    href: "/glossary",
    cta: "Open the glossary",
    icon: BookA,
    meta: "36 terms · Reference",
  },
]

const CHECKLISTS: ResourceCard[] = [
  {
    title: "GMAT exam-day checklist",
    description:
      "Everything to do in the seven days before your GMAT, the night before, the morning of, and inside the test center. Printable single-page reference.",
    href: "/exam-day-checklist",
    cta: "Open the checklist",
    icon: ClipboardList,
    meta: "37 items · Printable",
  },
]

const SAMPLES: ResourceCard[] = [
  {
    title: "Verbal sample — Verbal Foundations",
    description:
      "Two full readings: how GMAT Focus Verbal works and the active-reading method. From the Zakarian GMAT Verbal Foundations chapter.",
    href: "/sample-chapter",
    cta: "Read the sample",
    icon: BookOpen,
    meta: "Verbal · 2 readings",
  },
  {
    title: "Quant sample — Algebra",
    description:
      "Two full readings: linear equations in one unknown + systems of equations. From the Zakarian GMAT chapter on Algebra.",
    href: "/sample-chapter/quant",
    cta: "Read the sample",
    icon: BookOpen,
    meta: "Quant · 2 readings",
  },
  {
    title: "Data Insights sample — Data Sufficiency",
    description:
      "Two full readings: the five-answer framework + the rephrasing habit. From the Zakarian GMAT chapter on Data Sufficiency.",
    href: "/sample-chapter/data-insights",
    cta: "Read the sample",
    icon: BookOpen,
    meta: "DI · 2 readings",
  },
]

// Curated subset of blog posts featured on the resources page, in
// display order. Titles / dates / read times come from the canonical
// list in `@/lib/blog-posts` — only the description is overridden
// here so the cards render tighter copy than the /blog index.
const FEATURED: Array<{ slug: string; description: string }> = [
  {
    slug: "first-30-days-of-gmat-prep",
    description:
      "A baseline-first plan for your first month of preparation, with weekly study and review priorities.",
  },
  {
    slug: "gmat-prep-for-non-native-english-speakers",
    description:
      "The founder's preparation experience, with approaches to reading and reasoning as a non-native English speaker.",
  },
  {
    slug: "gmat-focus-vs-old-gmat-whats-changed",
    description:
      "How the current exam differs from the previous edition, section by section.",
  },
  {
    slug: "gmat-reading-comprehension-passage-strategy",
    description:
      "Reading for passage structure, argument, and purpose before evaluating the answer choices.",
  },
  {
    slug: "gmat-critical-reasoning-question-types-explained",
    description:
      "Recognise what a Critical Reasoning question asks and distinguish common answer traps.",
  },
  {
    slug: "gmat-data-sufficiency-strategy-guide",
    description:
      "The five answer choices, statement testing, and common Data Sufficiency mistakes.",
  },
  {
    slug: "gmat-data-insights-complete-guide",
    description:
      "Data Insights question formats, timing considerations, and ways to structure practice.",
  },
  {
    slug: "how-to-build-a-gmat-study-plan-that-works",
    description:
      "A baseline-first study plan and an example 16-week schedule you can adapt.",
  },
  {
    slug: "why-your-gmat-score-is-stuck",
    description:
      "The founder's account of progress plateaus and the role of focused mistake review.",
  },
]

const POSTS: BlogPost[] = FEATURED.map((f) => {
  const post = ALL_POSTS.find((p) => p.slug === f.slug)
  if (!post) {
    throw new Error(`Featured resources slug not in BLOG_POSTS: ${f.slug}`)
  }
  return { ...post, description: f.description }
})

interface ExternalResource {
  title: string
  publisher: string
  description: string
  href: string
  badge: string
  icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>
}

// Curated outbound directory: the best *free* GMAT resources beyond this
// site. Deliberately weighted to official (GMAC) and openly-licensed (OER)
// sources, plus a couple of standout free courses — not an exhaustive dump,
// and not a promotion of paid competitor courses. Every link verified free.
const EXTERNAL: ExternalResource[] = [
  {
    title: "Official GMAT Starter Kit",
    publisher: "GMAC / mba.com",
    badge: "Official",
    icon: GraduationCap,
    href: "https://www.mba.com/exam-prep/gmat-official-starter-kit",
    description:
      "Two real, adaptive full-length practice exams plus retired official questions. The only practice scores worth fully trusting. Free mba.com account.",
  },
  {
    title: "Official sample questions",
    publisher: "GMAC / mba.com",
    badge: "Official",
    icon: FileText,
    href: "https://www.mba.com/exams/gmat-exam/about/sample-questions",
    description:
      "Real retired Quant, Verbal, and Data Insights questions with official explanations.",
  },
  {
    title: "GMAT Official Handbook",
    publisher: "GMAC",
    badge: "Official",
    icon: FileText,
    href: "https://www.mba.com/-/media/files/mba2/assessments/2018/gmat/gmat-handbook-2020-07-10.pdf",
    description:
      "Scoring, rules, and your test-taker rights, straight from the test maker (PDF).",
  },
  {
    title: "Official GMAT on YouTube",
    publisher: "GMAC",
    badge: "Official",
    icon: Video,
    href: "https://www.youtube.com/user/OfficialGMAT",
    description:
      "Format, scoring, and registration walkthroughs from the people who write the exam.",
  },
  {
    title: "Khan Academy",
    publisher: "Khan Academy",
    badge: "Free / OER",
    icon: Video,
    href: "https://www.khanacademy.org/math",
    description:
      "Free video lessons and practice covering every Quant fundamental. Pick topics deliberately.",
  },
  {
    title: "GMAT Ninja free video course",
    publisher: "GMAT Ninja",
    badge: "Free",
    icon: Video,
    href: "https://www.gmatninja.com/videos/gmat/",
    description:
      "Roughly 45 hours of the most-recommended free GMAT video instruction, organized by section.",
  },
  {
    title: "GMAT Club forums",
    publisher: "GMAT Club",
    badge: "Free / Community",
    icon: Globe,
    href: "https://gmatclub.com/forum/",
    description:
      "The largest free archive of GMAT practice questions, with community and expert solutions.",
  },
  {
    title: "forall x: Calgary",
    publisher: "A. Thomas-Bolduc & R. Zach / Open Logic Project",
    badge: "CC BY 4.0",
    icon: BookOpen,
    href: "https://forallx.openlogicproject.org/",
    description:
      "An openly licensed introduction to logic that may be shared and adapted with attribution under CC BY 4.0.",
  },
  {
    title: "Critical Thinking, Logic, and Argument",
    publisher: "Athabasca University Press",
    badge: "CC BY-NC-SA 4.0",
    icon: BookOpen,
    href: "https://www.aupress.ca/app/uploads/OER-202403_Dayton_Rodier_2024-Critical-Thinking-Logic-and-Argument.pdf",
    description:
      "An external logic reference that may be shared noncommercially with attribution and share-alike. It is not incorporated into this paid course (PDF).",
  },
  {
    title: "Purdue OWL — Grammar",
    publisher: "Purdue University",
    badge: "Free",
    icon: BookA,
    href: "https://owl.purdue.edu/owl/general_writing/grammar/index.html",
    description:
      "The authoritative free grammar and mechanics reference for tightening your reading and writing.",
  },
]

function ExternalResourceItem({ card }: { card: ExternalResource }) {
  const Icon = card.icon
  return (
    <a
      href={card.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group block p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-0.5 hover:border-white/[0.18]"
      style={{
        borderColor: "rgba(255,255,255,0.06)",
        backgroundColor: "#0D0D0D",
      }}
    >
      <div className="flex items-center justify-between mb-4">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center"
          style={{ backgroundColor: "rgba(201,168,76,0.1)" }}
        >
          <Icon className="w-4 h-4" style={{ color: "#C9A84C" }} />
        </div>
        <span
          className="text-[10px] uppercase tracking-[0.16em] font-semibold px-2 py-1 rounded"
          style={{ color: "#C9A84C", backgroundColor: "rgba(201,168,76,0.1)" }}
        >
          {card.badge}
        </span>
      </div>
      <h3 className="font-display text-lg font-semibold text-[#F0F0F0] tracking-tight mb-1 leading-tight">
        {card.title}
      </h3>
      <p className="text-[11px] uppercase tracking-[0.16em] text-[#666666] font-semibold mb-2">
        {card.publisher}
      </p>
      <p className="text-[14px] text-[#888888] leading-relaxed mb-5">
        {card.description}
      </p>
      <span
        className="inline-flex items-center gap-1.5 text-[12px] uppercase tracking-[0.18em] font-semibold transition-transform group-hover:translate-x-0.5"
        style={{ color: "#C9A84C" }}
      >
        Visit
        <ExternalLink className="w-3.5 h-3.5" />
      </span>
    </a>
  )
}

function ResourceCardItem({ card }: { card: ResourceCard }) {
  const Icon = card.icon
  return (
    <Link
      href={card.href}
      className="group block p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-0.5 hover:border-white/[0.18]"
      style={{
        borderColor: "rgba(255,255,255,0.06)",
        backgroundColor: "#0D0D0D",
      }}
    >
      <div
        className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
        style={{ backgroundColor: "rgba(201,168,76,0.1)" }}
      >
        <Icon className="w-4 h-4" style={{ color: "#C9A84C" }} />
      </div>
      {card.meta && (
        <p className="text-[10px] uppercase tracking-[0.18em] text-[#666666] font-semibold mb-2">
          {card.meta}
        </p>
      )}
      <h3 className="font-display text-lg sm:text-xl font-semibold text-[#F0F0F0] tracking-tight mb-2 leading-tight">
        {card.title}
      </h3>
      <p className="text-[14px] text-[#888888] leading-relaxed mb-5">
        {card.description}
      </p>
      <span
        className="inline-flex items-center gap-1.5 text-[12px] uppercase tracking-[0.18em] font-semibold transition-transform group-hover:translate-x-0.5"
        style={{ color: "#C9A84C" }}
      >
        {card.cta}
        <ArrowRight className="w-3.5 h-3.5" />
      </span>
    </Link>
  )
}

function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string
  title: string
  description: string
}) {
  return (
    <div className="mb-7 max-w-2xl">
      <p
        className="text-[10px] uppercase tracking-[0.22em] font-semibold mb-2"
        style={{ color: "#C9A84C" }}
      >
        {eyebrow}
      </p>
      <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#F0F0F0] tracking-[-0.02em] leading-[1.1] mb-3">
        {title}
      </h2>
      <p className="text-[15px] text-[#C0C0C0] leading-relaxed">
        {description}
      </p>
    </div>
  )
}

export default function ResourcesPage() {
  const inventory = getPublicInventory()
  return (
    <div style={{ backgroundColor: "#0A0A0A" }}>
      <div className="max-w-3xl mx-auto pt-24 px-4 sm:px-6">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Resources", href: "/resources" },
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
            <Sparkles className="w-4 h-4" style={{ color: "#C9A84C" }} />
            <p className="text-[10px] uppercase tracking-[0.22em] text-[#C9A84C] font-semibold">
              Free resources
            </p>
          </div>
          <h1 className="font-display text-4xl sm:text-6xl font-semibold text-[#F0F0F0] tracking-[-0.02em] leading-[1.02] mb-5">
            Free GMAT resources
          </h1>
          <p className="text-[16px] sm:text-[17px] text-[#C0C0C0] leading-relaxed max-w-2xl mx-auto">
            Tools, sample lessons, templates, and guides for your preparation.
            Browse without an account; the template download asks for your email,
            with study emails kept optional.
          </p>
          <nav aria-label="Resource categories" className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2">
            {[["Tools", "tools"], ["Sample lessons", "samples"], ["Templates", "templates"], ["Guides", "guides"]].map(([label, id]) => (
              <Link key={id} href={`#${id}`} className="inline-flex min-h-11 items-center text-sm text-[#C9A84C] underline underline-offset-4">{label}</Link>
            ))}
          </nav>
        </div>
      </section>

      {/* Tools */}
      <section id="tools" className="max-w-5xl mx-auto scroll-mt-24 px-4 sm:px-6 mt-10 mb-16">
        <SectionHeader
          eyebrow="Tools + reference"
          title={`${TOOLS.length} free tools and references`}
          description="The score converter, school picker, study-schedule generator, and a GMAT glossary. All usable without an account."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {TOOLS.map((card) => (
            <ResourceCardItem key={card.href} card={card} />
          ))}
        </div>
      </section>

      {/* Checklists */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 mb-16">
        <SectionHeader
          eyebrow="Checklists"
          title="Take this into exam week."
          description="A single printable reference covering the full T-7 to post-exam window. Read the rationale online; print the checkbox version for the wall."
        />
        <div className="grid sm:grid-cols-2 gap-4">
          {CHECKLISTS.map((card) => (
            <ResourceCardItem key={card.href} card={card} />
          ))}
        </div>
      </section>

      {/* Samples */}
      <section id="samples" className="max-w-5xl mx-auto scroll-mt-24 px-4 sm:px-6 mb-16">
        <SectionHeader
          eyebrow="Sample chapters"
          title="Read real curriculum, no signup."
          description="One sample per GMAT Focus section — Verbal, Quant, Data Insights. Each shows two full reading sections from the platform's curriculum, with the rest of the chapter visible but locked."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {SAMPLES.map((card) => (
            <ResourceCardItem key={card.href} card={card} />
          ))}
        </div>
      </section>

      {/* Template / lead magnet */}
      <section id="templates" className="max-w-5xl mx-auto scroll-mt-24 px-4 sm:px-6 mb-16">
        <SectionHeader
          eyebrow="Template"
          title="The error-log spreadsheet."
          description="A six-tag mistake log in CSV format for Google Sheets, Excel, or Numbers. Record the reason for each miss and revisit recurring patterns."
        />
        <div
          className="max-w-2xl"
        >
          <div className="flex items-start gap-4 mb-5">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ backgroundColor: "rgba(201,168,76,0.1)" }}
            >
              <Download className="w-4 h-4" style={{ color: "#C9A84C" }} />
            </div>
            <div className="flex-1">
              <h3 className="font-display text-lg font-semibold text-[#F0F0F0] mb-1">
                GMAT error-log template
              </h3>
              <p className="text-[13px] text-[#888888] leading-relaxed">
                CSV with example rows and space for your own entries.
                Enter your email to get the download link.
              </p>
            </div>
          </div>
          <LeadCapture
            source="resources"
            leadMagnet="error-log-template"
            eyebrow=""
            headline="Get the template"
            description="The download link appears after submission. Study emails are optional."
            ctaLabel="Get the template"
            footnote="Download access does not require marketing consent."
            variant="compact"
          />
        </div>
      </section>

      {/* Blog posts */}
      <section id="guides" className="max-w-5xl mx-auto scroll-mt-24 px-4 sm:px-6 mb-20">
        <SectionHeader
          eyebrow="Strategy guides"
          title={`${POSTS.length} selected strategy guides`}
          description="Each one is 1,500–2,500 words on a specific GMAT skill — section deep-dives, the founder story, planning advice, the Focus-vs-old explainer. Written from inside the prep, not above it."
        />
        <div className="grid sm:grid-cols-2 gap-4">
          {POSTS.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block p-5 rounded-2xl border transition-all duration-300 hover:-translate-y-0.5 hover:border-white/[0.18]"
              style={{
                borderColor: "rgba(255,255,255,0.06)",
                backgroundColor: "#0D0D0D",
              }}
            >
              <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.18em] text-[#888888] mb-3">
                <Clock className="w-3 h-3" />
                {post.readMinutes} min read
              </div>
              <h3 className="font-display text-base sm:text-lg font-semibold text-[#F0F0F0] tracking-tight mb-2 leading-tight">
                {post.title}
              </h3>
              <p className="text-[13px] text-[#888888] leading-relaxed mb-4">
                {post.description}
              </p>
              <span
                className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.18em] font-semibold transition-transform group-hover:translate-x-0.5"
                style={{ color: "#C9A84C" }}
              >
                Read post
                <ArrowRight className="w-3 h-3" />
              </span>
            </Link>
          ))}
        </div>
        <div className="text-center mt-7">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-[13px] hover:underline"
            style={{ color: "#C9A84C" }}
          >
            See the full blog
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>

      {/* External / curated off-site directory */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 mb-20">
        <SectionHeader
          eyebrow="Beyond this site"
          title="The best free GMAT resources on the web."
          description="An honest, curated shortlist — weighted to official GMAC material and openly licensed textbooks, plus a few standout free courses. Start with the official practice exams; every link here is genuinely free."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {EXTERNAL.map((card) => (
            <ExternalResourceItem key={card.href} card={card} />
          ))}
        </div>
      </section>

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
            Ready for the{" "}
            <span className="font-display-italic" style={{ color: "#C9A84C" }}>
              full thing?
            </span>
          </h2>
          <p className="text-[15px] text-[#C0C0C0] leading-relaxed mb-7 max-w-xl mx-auto">
            {inventory.chapters} interactive chapters. The adaptive study plan. The error log built into
            the platform with the spaced-review queue.
            Mock exams with debrief tools.{" "}
            {PAYWALL_ENABLED ? (
              <>
                Free to start; full access on every paid plan, with a 14-day
                money-back guarantee on the self-study plans.
              </>
            ) : (
              <>
                Full access free for 7 days &mdash; no card required.
              </>
            )}
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
              href="/pricing"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold border border-white/[0.1] text-[#C0C0C0] hover:border-white/[0.18] hover:text-[#F0F0F0] transition-all duration-200"
            >
              See pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
