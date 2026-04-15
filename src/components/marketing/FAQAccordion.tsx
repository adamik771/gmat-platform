"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

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
  isOpen,
  onToggle,
}: {
  item: FAQItem
  isOpen: boolean
  onToggle: () => void
}) {
  return (
    <div className="border-b border-white/[0.06] last:border-0">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-4 text-left gap-4 group"
      >
        <span
          className={cn(
            "text-sm font-medium transition-colors",
            isOpen ? "text-[#F0F0F0]" : "text-[#C0C0C0] group-hover:text-[#F0F0F0]"
          )}
        >
          {item.question}
        </span>
        <ChevronDown
          className={cn(
            "w-4 h-4 flex-shrink-0 transition-transform duration-200",
            isOpen ? "rotate-180" : ""
          )}
          style={{ color: "#C9A84C" }}
        />
      </button>
      <div
        className={cn(
          "overflow-hidden transition-all duration-300",
          isOpen ? "max-h-96 pb-4" : "max-h-0"
        )}
      >
        <p className="text-sm text-[#888888] leading-relaxed">{item.answer}</p>
      </div>
    </div>
  )
}

export default function FAQAccordion({ items, className }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <div
      className={cn(
        "rounded-xl border border-white/[0.08] bg-[#111111] px-6",
        className
      )}
    >
      {items.map((item, index) => (
        <FAQItemComponent
          key={index}
          item={item}
          isOpen={openIndex === index}
          onToggle={() => setOpenIndex(openIndex === index ? null : index)}
        />
      ))}
    </div>
  )
}
