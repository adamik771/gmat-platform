"use client"

import { useEffect, useState } from "react"
import { BookOpen, FlaskConical, Award, Target, CheckCircle2 } from "lucide-react"

export interface SidebarSectionItem {
  id: string
  type: "pretest" | "reading" | "summary"
  title: string
  read: boolean
}

interface Props {
  sections: SidebarSectionItem[]
  hasProblemSets: boolean
  problemSetsAnchorId: string
  label?: string
  /** Optional — invoked after the user taps an entry. Used by the mobile
   *  drawer to close itself once the user has chosen a section to scroll to. */
  onNavigate?: () => void
}

/**
 * Sticky chapter sidebar — lists the chapter's sections and the end-of-
 * chapter problem-set block, with progress markers and active-section
 * tracking. Clicking an entry smooth-scrolls to the section anchor.
 *
 * Active tracking uses IntersectionObserver: whichever section's top
 * crosses a 25% viewport threshold becomes the highlighted entry.
 *
 * Hidden below lg breakpoint — mobile relies on the in-flow progress
 * markers above each section card.
 */
export default function ChapterSidebarNav({
  sections,
  hasProblemSets,
  problemSetsAnchorId,
  label = "Chapter contents",
  onNavigate,
}: Props) {
  const [activeId, setActiveId] = useState<string | null>(
    sections[0]?.id ?? null
  )

  useEffect(() => {
    const ids = [
      ...sections.map((s) => s.id),
      ...(hasProblemSets ? [problemSetsAnchorId] : []),
    ]
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)
    if (elements.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        // Prefer whichever entry is currently most-visible above the fold.
        // We pick the entry whose top is closest to but above the threshold
        // line so the highlight tracks scroll smoothly without flicker.
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => {
            return (
              Math.abs(a.boundingClientRect.top) -
              Math.abs(b.boundingClientRect.top)
            )
          })
        if (visible.length > 0) {
          setActiveId(visible[0].target.id)
        }
      },
      { rootMargin: "-25% 0px -55% 0px", threshold: 0 }
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [sections, hasProblemSets, problemSetsAnchorId])

  function handleClick(e: React.MouseEvent, id: string) {
    e.preventDefault()
    const el = document.getElementById(id)
    if (!el) return
    el.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth", block: "start" })
    // Update history without page reload so the URL reflects the section.
    if (typeof window !== "undefined") {
      window.history.replaceState(window.history.state, "", `#${id}`)
    }
    onNavigate?.()
  }

  return (
    <nav
      aria-label={label}
      className="text-[13px]"
      style={{ color: "var(--read-text-muted)" }}
    >
      <p
        className="text-[10px] font-semibold uppercase tracking-[0.22em] mb-3"
        style={{ color: "var(--read-text-faint)" }}
      >
        Contents
      </p>
      <ul className="space-y-1">
        {sections.map((s) => {
          const isActive = s.id === activeId
          const Icon = iconFor(s.type)
          return (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                aria-current={isActive ? "location" : undefined}
                onClick={(e) => handleClick(e, s.id)}
                className="flex items-center gap-2.5 px-2.5 py-2 min-h-11 rounded-md transition-colors"
                style={{
                  backgroundColor: isActive
                    ? "var(--read-gold-soft)"
                    : "transparent",
                  color: isActive
                    ? "var(--read-text)"
                    : s.read
                    ? "var(--read-text-body)"
                    : "var(--read-text-muted)",
                  fontWeight: isActive ? 600 : 400,
                }}
              >
                <Icon
                  className="w-3.5 h-3.5 flex-shrink-0"
                  style={{
                    color: isActive
                      ? "var(--read-gold)"
                      : s.read
                      ? "var(--read-success)"
                      : "var(--read-text-faint)",
                  }}
                />
                <span className="flex-1 leading-snug break-words min-w-0">
                  {s.title}
                </span>
                {s.read && (
                  <CheckCircle2
                    className="w-3 h-3 flex-shrink-0"
                    style={{ color: "var(--read-success)" }}
                    aria-label="Read"
                  />
                )}
              </a>
            </li>
          )
        })}
        {hasProblemSets && (
          <li>
            <a
              href={`#${problemSetsAnchorId}`}
              aria-current={problemSetsAnchorId === activeId ? "location" : undefined}
              onClick={(e) => handleClick(e, problemSetsAnchorId)}
              className="flex items-center gap-2.5 px-2.5 py-1.5 rounded-md transition-colors mt-2"
              style={{
                backgroundColor:
                  problemSetsAnchorId === activeId
                    ? "var(--read-gold-soft)"
                    : "transparent",
                color:
                  problemSetsAnchorId === activeId
                    ? "var(--read-text)"
                    : "var(--read-text-muted)",
                fontWeight: problemSetsAnchorId === activeId ? 600 : 400,
              }}
            >
              <Target
                className="w-3.5 h-3.5 flex-shrink-0"
                style={{
                  color:
                    problemSetsAnchorId === activeId
                      ? "var(--read-gold)"
                      : "var(--read-text-faint)",
                }}
              />
              <span className="flex-1 leading-snug">Graded problem sets</span>
            </a>
          </li>
        )}
      </ul>

    </nav>
  )
}

function iconFor(type: SidebarSectionItem["type"]) {
  if (type === "pretest") return FlaskConical
  if (type === "summary") return Award
  return BookOpen
}
