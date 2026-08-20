"use client"

import { useEffect, useReducer, useRef, useState } from "react"
import {
  Calculator,
  Delete,
  Divide,
  Minus,
  Plus,
  Radical,
  X,
} from "lucide-react"
import {
  INITIAL_CALCULATOR_STATE,
  reduceCalculator,
  type CalculatorAction,
  type CalculatorOperator,
} from "@/lib/di-calculator"
import { cn } from "@/lib/utils"

const operations: Array<{
  value: CalculatorOperator
  label: string
  icon: typeof Plus
}> = [
  { value: "/", label: "Divide", icon: Divide },
  { value: "*", label: "Multiply", icon: X },
  { value: "-", label: "Subtract", icon: Minus },
  { value: "+", label: "Add", icon: Plus },
]

function keyAction(key: string): CalculatorAction | null {
  if (/^\d$/.test(key)) return { type: "digit", value: key }
  if (key === ".") return { type: "decimal" }
  if (key === "Enter" || key === "=") return { type: "equals" }
  if (key === "Backspace") return { type: "backspace" }
  if (key === "Delete") return { type: "clear" }
  if (["+", "-", "*", "/"].includes(key)) {
    return { type: "operator", value: key as CalculatorOperator }
  }
  return null
}

export default function DataInsightsCalculator({
  compact = false,
  tone = "app",
}: {
  compact?: boolean
  tone?: "app" | "reader"
}) {
  const [open, setOpen] = useState(false)
  const [state, dispatch] = useReducer(
    reduceCalculator,
    INITIAL_CALCULATOR_STATE
  )
  const triggerRef = useRef<HTMLButtonElement | null>(null)
  const closeRef = useRef<HTMLButtonElement | null>(null)
  const panelRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!open) return
    closeRef.current?.focus()
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.stopImmediatePropagation()
        setOpen(false)
        triggerRef.current?.focus()
        return
      }
      if (event.key === "Tab") {
        const controls = panelRef.current?.querySelectorAll<HTMLButtonElement>(
          "button:not([disabled])"
        )
        if (!controls || controls.length === 0) return
        const first = controls[0]
        const last = controls[controls.length - 1]
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault()
          last.focus()
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault()
          first.focus()
        }
        return
      }
      const action = keyAction(event.key)
      if (!action) return
      event.preventDefault()
      event.stopImmediatePropagation()
      dispatch(action)
    }
    window.addEventListener("keydown", onKeyDown)
    return () => {
      window.removeEventListener("keydown", onKeyDown)
      document.body.style.overflow = previousOverflow
    }
  }, [open])

  function close() {
    setOpen(false)
    requestAnimationFrame(() => triggerRef.current?.focus())
  }

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen(true)}
        className={cn(
          "inline-flex items-center justify-center gap-1.5 rounded-lg border border-white/[0.14] bg-white/[0.04] font-semibold text-[#D8D8D8] transition-colors hover:border-[#C9A84C]/50 hover:bg-[#C9A84C]/[0.08] hover:text-[#C9A84C]",
          compact ? "h-8 w-8" : "px-2.5 py-1.5 text-[11px]"
        )}
        style={
          tone === "reader"
            ? {
                borderColor: "var(--read-border-strong)",
                backgroundColor: "var(--read-bg-elevated)",
                color: "var(--read-text-muted)",
              }
            : undefined
        }
        aria-label="Open Data Insights calculator"
        title="Data Insights calculator"
      >
        <Calculator className="h-3.5 w-3.5" aria-hidden />
        {!compact && <span>Calculator</span>}
      </button>

      {open && (
        <div className="fixed inset-0 z-[90]" aria-hidden={false}>
          <button
            type="button"
            className="absolute inset-0 h-full w-full bg-black/55"
            onClick={close}
            aria-label="Close calculator"
          />
          <div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="di-calculator-title"
            className="absolute bottom-3 left-3 right-3 overflow-hidden rounded-lg border border-white/[0.14] bg-[#111111] shadow-2xl sm:bottom-auto sm:left-auto sm:right-6 sm:top-20 sm:w-[320px]"
          >
            <div className="flex items-center justify-between border-b border-white/[0.08] px-4 py-3">
              <div className="flex items-center gap-2">
                <Calculator className="h-4 w-4 text-[#C9A84C]" aria-hidden />
                <h2
                  id="di-calculator-title"
                  className="text-xs font-semibold uppercase tracking-[0.16em] text-[#D8D8D8]"
                >
                  DI calculator
                </h2>
              </div>
              <button
                ref={closeRef}
                type="button"
                onClick={close}
                className="inline-flex h-8 w-8 items-center justify-center rounded-md text-[#888888] transition-colors hover:bg-white/[0.06] hover:text-white"
                aria-label="Close calculator"
                title="Close calculator"
              >
                <X className="h-4 w-4" aria-hidden />
              </button>
            </div>

            <div className="p-3">
              <output
                className="mb-3 block min-h-16 overflow-hidden rounded-md border border-white/[0.08] bg-[#080808] px-4 py-3 text-right font-mono text-3xl font-semibold tabular-nums text-[#F0F0F0]"
                aria-live="polite"
                aria-label={`Calculator display: ${state.display}`}
              >
                {state.display}
              </output>

              <div className="grid grid-cols-4 gap-2">
                <CalcButton label="Clear" onClick={() => dispatch({ type: "clear" })}>
                  C
                </CalcButton>
                <CalcButton
                  label="Toggle positive or negative"
                  onClick={() => dispatch({ type: "toggle-sign" })}
                >
                  +/-
                </CalcButton>
                <CalcButton label="Percent" onClick={() => dispatch({ type: "percent" })}>
                  %
                </CalcButton>
                <OperationButton operation={operations[0]} dispatch={dispatch} />

                {["7", "8", "9"].map((digit) => (
                  <DigitButton key={digit} digit={digit} dispatch={dispatch} />
                ))}
                <OperationButton operation={operations[1]} dispatch={dispatch} />

                {["4", "5", "6"].map((digit) => (
                  <DigitButton key={digit} digit={digit} dispatch={dispatch} />
                ))}
                <OperationButton operation={operations[2]} dispatch={dispatch} />

                {["1", "2", "3"].map((digit) => (
                  <DigitButton key={digit} digit={digit} dispatch={dispatch} />
                ))}
                <OperationButton operation={operations[3]} dispatch={dispatch} />

                <CalcButton
                  label="Square root"
                  onClick={() => dispatch({ type: "square-root" })}
                >
                  <Radical className="h-4 w-4" aria-hidden />
                </CalcButton>
                <DigitButton digit="0" dispatch={dispatch} />
                <CalcButton label="Decimal point" onClick={() => dispatch({ type: "decimal" })}>
                  .
                </CalcButton>
                <CalcButton
                  label="Equals"
                  accent
                  onClick={() => dispatch({ type: "equals" })}
                >
                  =
                </CalcButton>

                <CalcButton
                  label="Backspace"
                  className="col-span-4"
                  onClick={() => dispatch({ type: "backspace" })}
                >
                  <Delete className="h-4 w-4" aria-hidden />
                </CalcButton>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

function CalcButton({
  label,
  onClick,
  children,
  accent = false,
  className,
}: {
  label: string
  onClick: () => void
  children: React.ReactNode
  accent?: boolean
  className?: string
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "flex h-11 items-center justify-center rounded-md border text-sm font-semibold transition-colors active:translate-y-px",
        accent
          ? "border-[#C9A84C] bg-[#C9A84C] text-[#090909] hover:bg-[#D8B85A]"
          : "border-white/[0.08] bg-white/[0.04] text-[#D8D8D8] hover:bg-white/[0.08]",
        className
      )}
      aria-label={label}
      title={label}
    >
      {children}
    </button>
  )
}

function DigitButton({
  digit,
  dispatch,
}: {
  digit: string
  dispatch: React.Dispatch<CalculatorAction>
}) {
  return (
    <CalcButton label={digit} onClick={() => dispatch({ type: "digit", value: digit })}>
      {digit}
    </CalcButton>
  )
}

function OperationButton({
  operation,
  dispatch,
}: {
  operation: (typeof operations)[number]
  dispatch: React.Dispatch<CalculatorAction>
}) {
  const Icon = operation.icon
  return (
    <CalcButton
      label={operation.label}
      onClick={() => dispatch({ type: "operator", value: operation.value })}
    >
      <Icon className="h-4 w-4" aria-hidden />
    </CalcButton>
  )
}
