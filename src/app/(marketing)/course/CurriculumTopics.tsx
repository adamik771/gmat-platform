"use client"

import { useId, useState } from "react"

/**
 * Collapsible topic list for a curriculum module on the marketing course page.
 * Shows the first two topics by default; the rest expand/collapse on click so
 * the curriculum reads as a scannable overview, not a wall of every chapter.
 */
export default function CurriculumTopics({ topics }: { topics: string[] }) {
  const [expanded, setExpanded] = useState(false)
  const topicsId = useId()
  const visible = expanded ? topics : topics.slice(0, 2)
  const hiddenCount = topics.length - 2

  return (
    <>
      <ul id={topicsId} className="flex flex-wrap gap-x-6 gap-y-2">
        {visible.map((topic) => (
          <li
            key={topic}
            className="text-sm text-[#B9B7AE]"
          >
            {topic}
          </li>
        ))}
      </ul>
      {hiddenCount > 0 && (
        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          className="mt-2 min-h-11 text-sm font-semibold transition-opacity hover:opacity-80"
          style={{ color: "#C9A84C" }}
          aria-expanded={expanded}
          aria-controls={topicsId}
        >
          {expanded ? "Show less" : `Show ${hiddenCount} more`}
        </button>
      )}
    </>
  )
}
