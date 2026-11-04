"use client"

import { Accordion } from "@base-ui/react/accordion"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import styles from "./FAQAccordion.module.css"

export interface FAQItem {
  question: string
  answer: string
}

interface FAQAccordionProps {
  items: FAQItem[]
  className?: string
}

function FAQItemComponent({
  item,
  value,
}: {
  item: FAQItem
  value: number
}) {
  return (
    <Accordion.Item value={value} className="border-b border-[var(--public-line,rgba(255,255,255,0.06))] last:border-0">
      <Accordion.Header className={styles.heading}>
        <Accordion.Trigger className={`w-full flex items-center justify-between py-4 text-left gap-4 group ${styles.trigger}`}>
          <span className="text-sm font-medium">
            {item.question}
          </span>
          <ChevronDown
            aria-hidden="true"
            className={`w-4 h-4 flex-shrink-0 ${styles.chevron}`}
            style={{ color: "var(--public-accent,#C9A84C)" }}
          />
        </Accordion.Trigger>
      </Accordion.Header>
      <Accordion.Panel className={styles.panel}>
        <div className="pb-4"><p className="text-sm text-[color:var(--public-muted,#B9B7AE)] leading-relaxed">{item.answer}</p></div>
      </Accordion.Panel>
    </Accordion.Item>
  )
}

export default function FAQAccordion({ items, className }: FAQAccordionProps) {
  return (
    <Accordion.Root
      defaultValue={[0]}
      keepMounted
      className={cn(
        "rounded-xl border border-[var(--public-line,rgba(255,255,255,0.08))] bg-[var(--public-surface,#111111)] px-6",
        className
      )}
    >
      {items.map((item, index) => (
        <FAQItemComponent
          key={index}
          item={item}
          value={index}
        />
      ))}
    </Accordion.Root>
  )
}
