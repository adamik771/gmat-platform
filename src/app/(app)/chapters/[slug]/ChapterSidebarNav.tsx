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
    el.scrollIntoView({ behavior: "smooth", block: "start" })
    // Update history without page reload so the URL reflects the section.
    if (typeof window !== "undefined") {
      window.history.replaceState(null, "", `#${id}`)
    }
    onNavigate?.()
  }

  const completed = sections.filter((s) => s.read).length
  const total = sections.length
  const pct = total > 0 ? Math.round((completed / total) * 100) : 0

  return (
    <nav
      aria-label="Chapter contents"
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
                onClick={(e) => handleClick(e, s.id)}
                className="flex items-center gap-2.5 px-2.5 py-1.5 rounded-md transition-colors"
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
                <span className="flex-1 leading-snug truncate">
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

      {/* Compact progress meter at the bottom of the rail */}
      <div className="mt-6 pt-5 border-t" style={{ borderColor: "var(--read-border)" }}>
        <div
          className="flex items-center justify-between text-[10px] uppercase tracking-[0.2em] font-semibold mb-2"
          style={{ color: "var(--read-text-faint)" }}
        >
          <span>Progress</span>
          <span
            className="font-display tabular-nums normal-case tracking-normal text-[11px]"
            style={{ color: "var(--read-text-body)" }}
          >
            {pct}%
          </span>
        </div>
        <div
          className="h-1 rounded-full overflow-hidden"
          style={{ backgroundColor: "var(--read-bg-inset)" }}
        >
          <div
            className="h-full rounded-full transition-all duration-500"
            style={{
              width: `${pct}%`,
              backgroundColor: "var(--read-gold)",
            }}
          />
        </div>
        <p
          className="text-[11px] mt-2"
          style={{ color: "var(--read-text-faint)" }}
        >
          {completed} of {total} read
        </p>
      </div>
    </nav>
  )
}

function iconFor(type: SidebarSectionItem["type"]) {
  if (type === "pretest") return FlaskConical
  if (type === "summary") return Award
  return BookOpen
}
