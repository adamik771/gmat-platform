import React from 'react'
import { cn } from "@/lib/utils"

interface SectionWrapperProps {
  children: React.ReactNode
  className?: string
  variant?: "dark" | "darker" | "card"
  id?: string
  noPadding?: boolean
}

export default function SectionWrapper({
  children,
  className,
  variant = "dark",
  id,
  noPadding = false,
}: SectionWrapperProps) {
  const bg = {
    dark: "bg-[#0A0A0A]",
    darker: "bg-[#050505]",
    card: "bg-[#111111]",
  }[variant]

  return (
    <section
      id={id}
      className={cn(
        bg,
        !noPadding && "py-20 lg:py-28",
        className
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  )
}
