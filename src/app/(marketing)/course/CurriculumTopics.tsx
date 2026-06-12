"use client"

import { useState } from "react"

/**
 * Collapsible topic list for a curriculum module on the marketing course page.
 * Shows the first two topics by default; the rest expand/collapse on click so
 * the curriculum reads as a scannable overview, not a wall of every chapter.
 */
export default function CurriculumTopics({ topics }: { topics: string[] }) {
  const [expanded, setExpanded] = useState(false)
  const visible = expanded ? topics : topics.slice(0, 2)
  const hiddenCount = topics.length - 2

  return (
    <>
      <ul className="flex flex-wrap gap-2">
        {visible.map((topic) => (
          <li
            key={topic}
            className="text-[11px] px-2.5 py-1 rounded-md border border-white/[0.06] text-[#888888] tracking-wide"
          >
            {topic}
          </li>
        ))}
      </ul>
      {hiddenCount > 0 && (
        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          className="mt-3 text-[11px] font-semibold tracking-wide transition-opacity hover:opacity-80"
          style={{ color: "#C9A84C" }}
          aria-expanded={expanded}
        >
          {expanded ? "Show less" : `Show ${hiddenCount} more`}
        </button>
      )}
    </>
  )
}
