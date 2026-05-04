import { notFound } from "next/navigation"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import { getAllGuides, getGuideBySlug } from "@/lib/content"
import GuideReaderShell from "./GuideReaderShell"

export async function generateStaticParams() {
  return getAllGuides().map((g) => ({ slug: g.slug }))
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .slice(0, 80)
}

/**
 * Pull the string content out of a ReactMarkdown heading `children` prop.
 * Headings are usually a single text node, but remark/gfm can hand in
 * fragments (e.g. for inline emphasis inside a heading), so flatten.
 */
function headingText(children: unknown): string {
  if (typeof children === "string") return children
  if (Array.isArray(children)) return children.map(headingText).join("")
  if (children && typeof children === "object" && "props" in children) {
    const props = (children as { props?: { children?: unknown } }).props
    if (props && "children" in props) return headingText(props.children)
  }
  return ""
}

export default async function GuideDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const guide = getGuideBySlug(slug)
  if (!guide) notFound()

  const allGuides = getAllGuides()
  const currentIdx = allGuides.findIndex((g) => g.slug === slug)
  const prev = currentIdx > 0 ? allGuides[currentIdx - 1] : null
  const next =
    currentIdx >= 0 && currentIdx < allGuides.length - 1
      ? allGuides[currentIdx + 1]
      : null

  const article = (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        h1: ({ children, ...props }) => (
          <h1
            {...props}
            id={slugify(headingText(children))}
            className="font-display text-3xl sm:text-4xl font-semibold tracking-[-0.02em] leading-[1.05] mt-12 mb-6 first:mt-0 scroll-mt-24"
            style={{ color: "var(--read-text)" }}
          >
            {children}
          </h1>
        ),
        h2: ({ children, ...props }) => (
          <h2
            {...props}
            id={slugify(headingText(children))}
            className="font-display text-2xl sm:text-[1.75rem] font-semibold tracking-[-0.01em] leading-[1.1] mt-12 mb-5 first:mt-0 scroll-mt-24"
            style={{ color: "var(--read-text)" }}
          >
            {children}
          </h2>
        ),
        h3: ({ children, ...props }) => (
          <h3
            {...props}
            id={slugify(headingText(children))}
            className="font-display text-lg font-semibold tracking-tight mt-10 mb-3 scroll-mt-24"
            style={{ color: "var(--read-text)" }}
          >
            {children}
          </h3>
        ),
        h4: (props) => (
          <h4
            {...props}
            className="font-display text-base font-semibold tracking-tight mt-8 mb-2"
            style={{ color: "var(--read-text)" }}
          />
        ),
        p: (props) => (
          <p
            {...props}
            className="text-[15px] leading-[1.75] my-5"
            style={{ color: "var(--read-text-body)" }}
          />
        ),
        ul: (props) => (
          <ul
            {...props}
            className="list-disc pl-6 my-5 space-y-1.5 text-[15px] leading-[1.7]"
            style={{ color: "var(--read-text-body)" }}
          />
        ),
        ol: (props) => (
          <ol
            {...props}
            className="list-decimal pl-6 my-5 space-y-1.5 text-[15px] leading-[1.7]"
            style={{ color: "var(--read-text-body)" }}
          />
        ),
        li: (props) => <li {...props} className="pl-1" />,
        strong: (props) => (
          <strong
            {...props}
            className="font-semibold"
            style={{ color: "var(--read-text)" }}
          />
        ),
        em: (props) => (
          <em
            {...props}
            className="font-display-italic"
            style={{ color: "var(--read-gold)" }}
          />
        ),
        code: (props) => (
          <code
            {...props}
            className="px-1.5 py-0.5 rounded text-[13px] font-mono"
            style={{
              backgroundColor: "var(--read-bg-inset)",
              color: "var(--read-text)",
            }}
          />
        ),
        blockquote: (props) => (
          <blockquote
            {...props}
            className="border-l-2 pl-4 my-6 italic"
            style={{
              borderColor: "var(--read-gold-strong)",
              color: "var(--read-text-muted)",
            }}
          />
        ),
        hr: (props) => (
          <hr
            {...props}
            className="my-10 h-px border-0"
            style={{
              background:
                "linear-gradient(to right, transparent, var(--read-gold-strong), transparent)",
            }}
          />
        ),
        a: (props) => (
          <a
            {...props}
            className="underline underline-offset-2 transition-colors"
            style={{ color: "var(--read-gold)" }}
          />
        ),
      }}
    >
      {guide.content}
    </ReactMarkdown>
  )

  return (
    <GuideReaderShell
      section={guide.section}
      title={guide.title}
      description={guide.description}
      article={article}
      prev={prev ? { slug: prev.slug, title: prev.title } : null}
      next={next ? { slug: next.slug, title: next.title } : null}
    />
  )
}
