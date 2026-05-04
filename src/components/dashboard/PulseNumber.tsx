"use client"

import { motion, useReducedMotion } from "framer-motion"

interface PulseNumberProps {
  value: string | number
}

export default function PulseNumber({ value }: PulseNumberProps) {
  const prefersReducedMotion = useReducedMotion()

  if (prefersReducedMotion) {
    return (
      <span className="font-display text-3xl sm:text-[2rem] font-semibold text-[#F0F0F0] tracking-[-0.02em] leading-none tabular-nums">
        {value}
      </span>
    )
  }

  return (
    <motion.span
      className="font-display text-3xl sm:text-[2rem] font-semibold text-[#F0F0F0] tracking-[-0.02em] leading-none tabular-nums inline-block"
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: [0.9, 1.08, 1], opacity: 1 }}
      transition={{
        duration: 0.45,
        times: [0, 0.55, 1],
        ease: "easeOut",
      }}
    >
      {value}
    </motion.span>
  )
}
