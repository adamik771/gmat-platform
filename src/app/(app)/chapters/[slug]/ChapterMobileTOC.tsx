"use client"

import { useEffect, useRef, useState } from "react"
import { List, X } from "lucide-react"
import ChapterSidebarNav, { type SidebarSectionItem } from "./ChapterSidebarNav"
import styles from "./ContentsDrawer.module.css"

interface Props {
  sections: SidebarSectionItem[]
  hasProblemSets: boolean
  problemSetsAnchorId: string
  label?: string
}

export default function ChapterMobileTOC({
  sections,
  hasProblemSets,
  problemSetsAnchorId,
  label = "Chapter contents",
}: Props) {
  const [open, setOpen] = useState(false)
  const dialogRef = useRef<HTMLDialogElement>(null)
  const triggerRef = useRef<HTMLButtonElement>(null)

  // Native modal semantics provide focus containment, Escape and focus return.
  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog || !open) return
    const trigger = triggerRef.current
    dialog.showModal()
    const previous = document.body.style.overflow
    document.body.style.overflow = "hidden"
    const wide = window.matchMedia("(min-width: 1200px)")
    const closeOnWide = () => { if (wide.matches) setOpen(false) }
    wide.addEventListener("change", closeOnWide)
    return () => {
      dialog.close()
      document.body.style.overflow = previous
      wide.removeEventListener("change", closeOnWide)
      trigger?.focus()
    }
  }, [open])

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen(true)}
        aria-label={`Open ${label.toLowerCase()}`}
        aria-expanded={open}
        aria-controls="reader-contents-drawer"
        className={styles.trigger}
      >
        <List size={18} aria-hidden /><span>Contents</span>
      </button>
      <dialog
        ref={dialogRef}
        id="reader-contents-drawer"
        aria-label={label}
        className={styles.drawer}
        onCancel={() => setOpen(false)}
        onClick={(event) => { if (event.target === event.currentTarget) setOpen(false) }}
      >
        <div className={styles.sheet}>
          <div className={styles.heading}>
            <h2>{label}</h2>
            <button type="button" onClick={() => setOpen(false)} aria-label={`Close ${label.toLowerCase()}`} autoFocus>
              <X size={20} aria-hidden />
            </button>
          </div>
          <ChapterSidebarNav
            label={label}
            sections={sections}
            hasProblemSets={hasProblemSets}
            problemSetsAnchorId={problemSetsAnchorId}
            onNavigate={() => setOpen(false)}
          />
        </div>
      </dialog>
    </>
  )
}
