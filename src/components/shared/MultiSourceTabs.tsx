"use client"

import {
  memo,
  useId,
  useMemo,
  useRef,
  useState,
  type KeyboardEvent,
} from "react"
import ReactMarkdown, { type Components } from "react-markdown"
import remarkGfm from "remark-gfm"
import { Files } from "lucide-react"
import rehypeCaretSup from "@/lib/rehype-caret-sup"
import { parseMultiSourceContext } from "@/lib/multi-source-context"
import { cn } from "@/lib/utils"

type MultiSourceTabsVariant = "runner" | "reader" | "compact"

interface MultiSourceTabsProps {
  context: string
  variant?: MultiSourceTabsVariant
  className?: string
}

function markdownComponents(variant: MultiSourceTabsVariant): Components {
  const reader = variant === "reader"
  const bodyColor = reader ? "var(--read-text-body)" : "#D8D8D8"
  const strongColor = reader ? "var(--read-text)" : "#F0F0F0"
  const borderColor = reader ? "var(--read-border)" : "rgba(255,255,255,0.08)"
  const insetColor = reader ? "var(--read-bg)" : "#0A0A0A"

  return {
    p: (props) => (
      <p
        {...props}
        className="my-2 first:mt-0 last:mb-0 text-[14px] leading-relaxed"
        style={{ color: bodyColor }}
      />
    ),
    ul: (props) => (
      <ul
        {...props}
        className="my-2 list-disc space-y-1 pl-5 text-[14px]"
        style={{ color: bodyColor }}
      />
    ),
    ol: (props) => (
      <ol
        {...props}
        className="my-2 list-decimal space-y-1 pl-5 text-[14px]"
        style={{ color: bodyColor }}
      />
    ),
    li: (props) => <li {...props} className="leading-relaxed" />,
    strong: (props) => (
      <strong {...props} className="font-semibold" style={{ color: strongColor }} />
    ),
    em: (props) => <em {...props} className="italic" />,
    table: (props) => (
      <div
        className="my-3 overflow-x-auto rounded-lg border"
        style={{ borderColor }}
      >
        <table {...props} className="w-full min-w-[32rem] border-collapse text-[13px]" />
      </div>
    ),
    thead: (props) => <thead {...props} style={{ backgroundColor: insetColor }} />,
    th: (props) => (
      <th
        {...props}
        className="border-b px-3 py-2 text-left text-[10px] font-semibold uppercase"
        style={{ borderColor, color: bodyColor }}
      />
    ),
    td: (props) => (
      <td
        {...props}
        className="border-b px-3 py-2 text-[13px]"
        style={{ borderColor, color: bodyColor }}
      />
    ),
  }
}

/** GMAT-style source switcher for Multi-Source Reasoning question sets. */
const MultiSourceTabs = memo(function MultiSourceTabs({
  context,
  variant = "runner",
  className,
}: MultiSourceTabsProps) {
  const parsed = useMemo(() => parseMultiSourceContext(context), [context])
  const components = useMemo(() => markdownComponents(variant), [variant])
  const rawId = useId()
  const idPrefix = `msr-${rawId.replace(/[^a-zA-Z0-9_-]/g, "")}`
  const buttonRefs = useRef<Array<HTMLButtonElement | null>>([])
  const [selection, setSelection] = useState({ context, index: 0 })
  const reader = variant === "reader"
  const compact = variant === "compact"
  const borderColor = reader ? "var(--read-border)" : "rgba(255,255,255,0.08)"
  const panelBg = reader ? "var(--read-bg-inset)" : "#111111"
  const tabBg = reader ? "var(--read-bg)" : "#0A0A0A"
  const mutedColor = reader ? "var(--read-text-faint)" : "#888888"
  const activeColor = reader ? "var(--read-gold)" : "#C9A84C"

  if (!parsed) {
    return (
      <section
        className={cn("overflow-hidden rounded-lg border", className)}
        style={{ borderColor, backgroundColor: panelBg }}
        aria-label="Reference material"
      >
        <p
          className="border-b px-4 py-3 text-[10px] font-semibold uppercase"
          style={{ borderColor, color: mutedColor }}
        >
          Reference
        </p>
        <div
          className={cn("overflow-y-auto px-4 py-4", compact ? "max-h-72" : "max-h-[70vh]")}
        >
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeCaretSup]}
            components={components}
          >
            {context}
          </ReactMarkdown>
        </div>
      </section>
    )
  }

  const tabs = parsed.tabs
  const activeIndex =
    selection.context === context && selection.index < tabs.length
      ? selection.index
      : 0

  function selectTab(index: number, focus = false) {
    const nextIndex = (index + tabs.length) % tabs.length
    setSelection({ context, index: nextIndex })
    const button = buttonRefs.current[nextIndex]
    if (focus) button?.focus()
    button?.scrollIntoView({ block: "nearest", inline: "nearest" })
  }

  function handleKeyDown(event: KeyboardEvent<HTMLButtonElement>) {
    let nextIndex: number | null = null
    if (event.key === "ArrowRight") nextIndex = activeIndex + 1
    if (event.key === "ArrowLeft") nextIndex = activeIndex - 1
    if (event.key === "Home") nextIndex = 0
    if (event.key === "End") nextIndex = tabs.length - 1
    if (nextIndex === null) return
    event.preventDefault()
    selectTab(nextIndex, true)
  }

  return (
    <section
      className={cn("overflow-hidden rounded-lg border", className)}
      style={{ borderColor, backgroundColor: panelBg }}
      aria-label="Multi-Source Reasoning reference material"
    >
      <div className="flex items-center gap-2.5 border-b px-4 py-3" style={{ borderColor }}>
        <Files className="h-4 w-4 shrink-0" style={{ color: activeColor }} />
        <div className="min-w-0">
          <p
            className="text-[10px] font-semibold uppercase"
            style={{ color: activeColor }}
          >
            Multi-source reference
          </p>
          <p className="truncate text-[12px]" style={{ color: mutedColor }}>
            {parsed.title}
          </p>
        </div>
      </div>

      <div
        role="tablist"
        aria-label="Information sources"
        className="flex overflow-x-auto border-b"
        style={{ borderColor, backgroundColor: tabBg }}
      >
        {tabs.map((tab, index) => {
          const selected = index === activeIndex
          const tabId = `${idPrefix}-tab-${index}`
          const panelId = `${idPrefix}-panel-${index}`
          return (
            <button
              key={`${tab.number}-${tab.title}`}
              ref={(node) => {
                buttonRefs.current[index] = node
              }}
              id={tabId}
              type="button"
              role="tab"
              aria-selected={selected}
              aria-controls={panelId}
              tabIndex={selected ? 0 : -1}
              onClick={() => selectTab(index)}
              onKeyDown={handleKeyDown}
              className={cn(
                "relative min-w-[9.5rem] flex-1 px-4 py-3 text-left transition-colors",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset",
              )}
              style={{
                color: selected ? activeColor : mutedColor,
                backgroundColor: selected
                  ? reader
                    ? "color-mix(in srgb, var(--read-gold) 9%, transparent)"
                    : "rgba(201,168,76,0.08)"
                  : "transparent",
                boxShadow: selected ? `inset 0 -2px 0 ${activeColor}` : undefined,
              }}
            >
              <span className="block text-[9px] font-semibold uppercase">
                Source {tab.number}
              </span>
              <span className="mt-0.5 block text-[12px] font-semibold leading-snug">
                {tab.title}
              </span>
            </button>
          )
        })}
      </div>

      {tabs.map((tab, index) => (
        <div
          key={`${tab.number}-${tab.title}-panel`}
          id={`${idPrefix}-panel-${index}`}
          role="tabpanel"
          aria-labelledby={`${idPrefix}-tab-${index}`}
          tabIndex={index === activeIndex ? 0 : -1}
          hidden={index !== activeIndex}
          className={cn(
            "overflow-y-auto px-4 py-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset",
            compact ? "max-h-72" : "max-h-[70vh]",
          )}
        >
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeCaretSup]}
            components={components}
          >
            {tab.content}
          </ReactMarkdown>
        </div>
      ))}
    </section>
  )
})

export default MultiSourceTabs
