"use client"

import { useEffect, useState } from "react"

interface Heading {
  id: string
  text: string
}

/**
 * Sticky table of contents for a long reading article. Auto-discovers h2
 * headings inside the target article on mount, builds anchor links, and
 * highlights the heading nearest the viewport top as the user scrolls.
 *
 * Only renders when the article has at least `minHeadings` (default 3) h2s —
 * shorter guides don't benefit from a TOC and the UI is cleaner without one.
 */
export default function TableOfContents({
  targetSelector = "article",
  minHeadings = 3,
}: {
  targetSelector?: string
  minHeadings?: number
}) {
  const [headings, setHeadings] = useState<Heading[]>([])
  const [activeId, setActiveId] = useState<string | null>(null)

  // Collect h2s from the article after it mounts. Reads DOM, so it must
  // run in an effect — the synchronous setState here is required.
  useEffect(() => {
    const article = document.querySelector<HTMLElement>(targetSelector)
    if (!article) return
    const nodes = Array.from(article.querySelectorAll<HTMLHeadingElement>("h2"))
    const collected: Heading[] = nodes
      .filter((h) => !!h.id && !!h.textContent)
      .map((h) => ({ id: h.id, text: h.textContent as string }))
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setHeadings(collected)
    if (collected.length > 0) setActiveId(collected[0].id)
  }, [targetSelector])

  // Highlight the heading closest to (but above) the viewport top.
  useEffect(() => {
    if (headings.length === 0) return
    const compute = () => {
      const thresholds = 100 // how many px below viewport-top we consider "reached"
      let current: string | null = null
      for (const { id } of headings) {
        const el = document.getElementById(id)
        if (!el) continue
        const rect = el.getBoundingClientRect()
        if (rect.top - thresholds <= 0) {
          current = id
        } else {
          break
        }
      }
      if (current) setActiveId(current)
    }

    compute()
    window.addEventListener("scroll", compute, { passive: true })
    window.addEventListener("resize", compute)
    return () => {
      window.removeEventListener("scroll", compute)
      window.removeEventListener("resize", compute)
    }
  }, [headings])

  if (headings.length < minHeadings) return null

  return (
    <nav
      aria-label="On this page"
      className="hidden lg:block sticky top-6 w-56 flex-shrink-0 self-start"
    >
      <p
        className="text-[10px] font-semibold uppercase tracking-[0.22em] mb-3"
        style={{ color: "var(--read-text-muted)" }}
      >
        On this page
      </p>
      <ul className="space-y-1.5 border-l" style={{ borderColor: "var(--read-border-strong)" }}>
        {headings.map((h) => {
          const active = h.id === activeId
          return (
            <li key={h.id}>
              <a
                href={`#${h.id}`}
                className="block pl-3 -ml-px border-l text-[12px] leading-[1.4] py-1 transition-colors"
                style={{
                  borderColor: active ? "var(--read-gold)" : "transparent",
                  color: active ? "var(--read-text)" : "var(--read-text-muted)",
                  fontWeight: active ? 600 : 400,
                }}
              >
                {h.text}
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
