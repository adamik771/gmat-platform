/**
 * Structured-data (schema.org JSON-LD) helpers.
 *
 * Each helper returns a serialisable object you can stringify into a
 * <script type="application/ld+json">. We render via the standard
 * Next.js pattern (a `<script>` element with `dangerouslySetInnerHTML`
 * inside a server component), which keeps the JSON-LD in the initial
 * HTML response — important because crawlers may not execute client
 * scripts.
 *
 * Schema types used:
 *   - Organization (the platform itself, site-wide)
 *   - WebSite (with sitelinks search box, site-wide)
 *   - Article / BlogPosting (every blog post)
 *   - DefinedTermSet + DefinedTerm (glossary)
 *   - SoftwareApplication (interactive tool pages)
 *   - FAQPage (the FAQ)
 */

const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.zakariangmat.com"
).replace(/\/$/, "")

const ORG_NAME = "Zakarian GMAT"
const FOUNDER_NAME = "Adam Zakarian"
const DEFAULT_LOGO = `${SITE_URL}/opengraph-image`

function abs(path: string): string {
  if (path.startsWith("http")) return path
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`
}

/** Site-wide Organization. Renders once in the root layout. */
export function organizationLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: ORG_NAME,
    url: SITE_URL,
    logo: DEFAULT_LOGO,
    founder: {
      "@type": "Person",
      name: FOUNDER_NAME,
    },
    description:
      "A premium GMAT preparation platform built around the error-log + adaptive-plan loop that took the founder from 565 to 735.",
  }
}

/** Site-wide WebSite (no sitelinks search; we don't have a search box yet). */
export function websiteLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: ORG_NAME,
    url: SITE_URL,
    publisher: {
      "@type": "Organization",
      name: ORG_NAME,
      url: SITE_URL,
    },
  }
}

interface ArticleLdInput {
  /** Page path (e.g. "/blog/why-your-gmat-score-is-stuck"). */
  path: string
  title: string
  description: string
  /** ISO date (yyyy-mm-dd). */
  datePublished: string
  /** Optional ISO date for last update. Defaults to datePublished. */
  dateModified?: string
  authorName?: string
  /** Optional cover image URL — falls back to dynamic OG. */
  imageUrl?: string
}

/** Article / BlogPosting JSON-LD for a single post. */
export function articleLd(input: ArticleLdInput) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: input.title,
    description: input.description,
    datePublished: `${input.datePublished}T00:00:00.000Z`,
    dateModified: `${input.dateModified ?? input.datePublished}T00:00:00.000Z`,
    author: {
      "@type": "Person",
      name: input.authorName ?? FOUNDER_NAME,
    },
    publisher: {
      "@type": "Organization",
      name: ORG_NAME,
      logo: { "@type": "ImageObject", url: DEFAULT_LOGO },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": abs(input.path),
    },
    image: [input.imageUrl ?? DEFAULT_LOGO],
  }
}

interface SoftwareAppLdInput {
  name: string
  description: string
  path: string
  /** Free / freemium / etc. We use "Free" for the public tools. */
  pricing?: "Free" | "Freemium"
}

/** SoftwareApplication for interactive tool pages. */
export function softwareApplicationLd(input: SoftwareAppLdInput) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: input.name,
    description: input.description,
    url: abs(input.path),
    applicationCategory: "EducationalApplication",
    operatingSystem: "Any (web)",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
    },
    publisher: {
      "@type": "Organization",
      name: ORG_NAME,
      url: SITE_URL,
    },
  }
}

interface DefinedTermInput {
  term: string
  definition: string
  url?: string
}

/** DefinedTermSet + nested DefinedTerm for the glossary. */
export function definedTermSetLd(input: {
  name: string
  description: string
  path: string
  terms: DefinedTermInput[]
}) {
  return {
    "@context": "https://schema.org",
    "@type": "DefinedTermSet",
    name: input.name,
    description: input.description,
    url: abs(input.path),
    hasDefinedTerm: input.terms.map((t, idx) => ({
      "@type": "DefinedTerm",
      "@id": `${abs(input.path)}#${encodeURIComponent(t.term.toLowerCase().replace(/\s+/g, "-"))}`,
      name: t.term,
      description: t.definition,
      ...(t.url ? { url: abs(t.url) } : {}),
      // identifier is recommended for stable refs
      identifier: `term-${idx + 1}`,
      inDefinedTermSet: abs(input.path),
    })),
  }
}

interface FaqLdInput {
  questions: Array<{ question: string; answer: string }>
}

/** FAQPage schema. Each Q/A becomes a Question with an acceptedAnswer. */
export function faqPageLd(input: FaqLdInput) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: input.questions.map((q) => ({
      "@type": "Question",
      name: q.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: q.answer,
      },
    })),
  }
}

/**
 * BreadcrumbList helper — useful on deeper pages so crawlers see the
 * navigational hierarchy. Items are ordered root → leaf.
 */
export function breadcrumbLd(
  items: Array<{ name: string; path: string }>,
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: item.name,
      item: abs(item.path),
    })),
  }
}

/**
 * Render-helper: produce the props for a JSON-LD <script> tag. Use
 * inside a server component. Example:
 *
 *   <script
 *     type="application/ld+json"
 *     dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd(...)) }}
 *   />
 */
