"use client"

import { useEffect, useState } from "react"
import { List, X } from "lucide-react"
import ChapterSidebarNav, {
  type SidebarSectionItem,
} from "./ChapterSidebarNav"

interface Props {
  sections: SidebarSectionItem[]
  hasProblemSets: boolean
  problemSetsAnchorId: string
}

/**
 * Mobile-only sticky "Contents" trigger + bottom-sheet drawer that
 * carries the same chapter sidebar nav used on lg+ screens. Hidden on
 * lg+ since the sticky left rail already handles navigation there.
 *
 * Trigger: a small floating button anchored to the bottom-right of the
 * viewport — close enough to the thumb to feel reachable without
 * crowding the read.
 *
 * Drawer behaviour:
 *  - Opens with a backdrop fade + sheet slide-up
 *  - Backdrop click + close button close the sheet
 *  - Esc key closes the sheet
 *  - Body scroll is locked while the sheet is open
 *  - Tapping a section entry inside the sheet smooth-scrolls then closes
 */
export default function ChapterMobileTOC({
  sections,
  hasProblemSets,
  problemSetsAnchorId,
}: Props) {
  const [open, setOpen] = useState(false)

  // Esc-to-close
  useEffect(() => {
    if (!open) return
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [open])

  // Body scroll lock while the sheet is open. Restores on unmount or close.
  useEffect(() => {
    if (!open) return
    const previous = document.body.style.overflow
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = previous
    }
  }, [open])

  const completed = sections.filter((s) => s.read).length
  const total = sections.length

  return (
    <>
      {/* Sticky trigger — bottom-right floating button */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Open chapter contents"
        aria-expanded={open}
        aria-controls="chapter-mobile-toc"
        className="lg:hidden fixed bottom-5 right-4 z-30 flex items-center gap-2 px-4 py-3 rounded-full transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
        style={{
          backgroundColor: "var(--read-gold)",
          color: "var(--read-bg-inset)",
          boxShadow:
            "0 6px 20px -4px rgba(201,168,76,0.45), 0 0 0 1px rgba(201,168,76,0.3)",
        }}
      >
        <List className="w-4 h-4" aria-hidden="true" />
        <span className="text-[12px] font-semibold uppercase tracking-[0.16em]">
          Contents
        </span>
        {total > 0 && (
          <span
            className="text-[11px] font-medium tabular-nums opacity-70"
            aria-hidden
          >
            {completed}/{total}
          </span>
        )}
      </button>

      {/* Drawer — backdrop + bottom sheet */}
      {open && (
        <div
          id="chapter-mobile-toc"
          role="dialog"
          aria-modal="true"
          aria-label="Chapter contents"
          className="lg:hidden fixed inset-0 z-50 flex items-end"
        >
          <div
            onClick={() => setOpen(false)}
            className="absolute inset-0 transition-opacity"
            style={{ backgroundColor: "rgba(0,0,0,0.55)" }}
            aria-hidden
          />
          <div
            className="reader-themed relative w-full max-h-[80vh] overflow-y-auto rounded-t-2xl border-t border-x p-6 pt-5"
            style={{
              backgroundColor: "var(--read-bg-elevated)",
              borderColor: "var(--read-border-strong)",
              boxShadow: "0 -16px 48px -8px rgba(0,0,0,0.5)",
            }}
            data-reading-theme="dark"
          >
            <div
              className="absolute top-2.5 left-1/2 -translate-x-1/2 w-10 h-1 rounded-full"
              style={{ backgroundColor: "var(--read-border-strong)" }}
              aria-hidden
            />
            <div className="flex items-center justify-between mb-4 mt-1">
              <p
                className="text-[10px] font-semibold uppercase tracking-[0.22em]"
                style={{ color: "var(--read-text-faint)" }}
              >
                Chapter contents
              </p>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close chapter contents"
                className="-mr-1 p-1.5 rounded-md transition-colors"
                style={{ color: "var(--read-text-muted)" }}
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <ChapterSidebarNav
              sections={sections}
              hasProblemSets={hasProblemSets}
              problemSetsAnchorId={problemSetsAnchorId}
              onNavigate={() => setOpen(false)}
            />
          </div>
        </div>
      )}
    </>
  )
}
