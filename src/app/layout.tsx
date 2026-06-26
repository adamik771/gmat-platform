import type { Metadata } from "next"
import { Inter, Fraunces } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import JsonLd from "@/components/seo/JsonLd"
import AdPixels from "@/components/analytics/AdPixels"
import AttributionCapture from "@/components/analytics/AttributionCapture"
import { organizationLd, websiteLd } from "@/lib/structured-data"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["opsz", "SOFT"],
})

// Site URL — used by metadataBase so relative og:image / twitter:image
// paths resolve to absolute URLs in production. Set NEXT_PUBLIC_SITE_URL
// in Vercel envs to your production domain.
const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.zakariangmat.com"
).replace(/\/$/, "")

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Zakarian GMAT — Premium Prep System",
    // Per-page metadata (e.g. /pricing, /about) extends this template
    // by exporting its own `metadata.title`. The %s slot is replaced
    // with that page's title; the parent suffix anchors the brand.
    template: "%s · Zakarian GMAT",
  },
  description:
    "The structured GMAT prep system that took Adam from 565 to 735. Built for ambitious students who don't have time for guesswork.",
  keywords: ["GMAT", "GMAT prep", "MBA", "score improvement", "test prep"],
  authors: [{ name: "Adam Zakarian" }],
  creator: "Adam Zakarian",
  // OpenGraph — controls the rich card every social platform / chat
  // app renders when a Zakarian GMAT link is shared. Without this,
  // shared links rendered as a blank tile.
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Zakarian GMAT",
    title: "Zakarian GMAT — From 565 to 735, On Your Terms",
    description:
      "The structured GMAT prep system that took Adam from 565 to 735. Baseline-driven, mistake-driven, score-anchored — built for ambitious MBA candidates.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Zakarian GMAT — From 565 to 735",
      },
    ],
  },
  // Twitter / X uses its own card schema; modern crawlers fall back to
  // openGraph but explicit `twitter:` keys give better cards on X.
  twitter: {
    card: "summary_large_image",
    title: "Zakarian GMAT — From 565 to 735, On Your Terms",
    description:
      "The structured GMAT prep system that took Adam from 565 to 735.",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  // Google Search Console ownership verification (HTML-tag method). Emits
  // <meta name="google-site-verification" content="..."> into <head>.
  verification: {
    google: "IkL___StkwO8aX58q2m4QSPUbniMlfqHk5s12e3EKnM",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable} dark`}>
      <body
        className="min-h-screen antialiased"
        style={{ backgroundColor: "#0A0A0A", color: "#F0F0F0" }}
      >
        {/* Site-wide structured data: Organization + WebSite. Each
            page can additionally inject its own page-specific JSON-LD
            (Article on blog posts, SoftwareApplication on tools, etc.). */}
        <JsonLd data={[organizationLd(), websiteLd()]} />
        {children}
        {/* Vercel Web Analytics — page views + custom conversion events
            (see lib/analytics.ts). No-op until enabled on Vercel. */}
        <Analytics />
        {/* Meta Pixel + Google tag — dormant until NEXT_PUBLIC_META_PIXEL_ID /
            NEXT_PUBLIC_GOOGLE_TAG_ID are set; trackEvent forwards conversions. */}
        <AdPixels />
        {/* First-touch campaign attribution — stores utm_* / ref from the
            landing URL so every conversion event is traceable to its source. */}
        <AttributionCapture />
      </body>
    </html>
  )
}
