export type CalculatorOperator = "+" | "-" | "*" | "/"

export interface CalculatorState {
  display: string
  accumulator: number | null
  pendingOperator: CalculatorOperator | null
  replaceDisplay: boolean
}

export type CalculatorAction =
  | { type: "digit"; value: string }
  | { type: "decimal" }
  | { type: "operator"; value: CalculatorOperator }
  | { type: "equals" }
  | { type: "clear" }
  | { type: "backspace" }
  | { type: "toggle-sign" }
  | { type: "percent" }
  | { type: "square-root" }

export const INITIAL_CALCULATOR_STATE: CalculatorState = {
  display: "0",
  accumulator: null,
  pendingOperator: null,
  replaceDisplay: false,
}

const MAX_INPUT_DIGITS = 12

function parseDisplay(display: string): number | null {
  if (display === "Error") return null
  const value = Number(display)
  return Number.isFinite(value) ? value : null
}

function formatValue(value: number): string {
  if (!Number.isFinite(value)) return "Error"
  const normalized = Math.abs(value) < 1e-12 ? 0 : value
  const plain = Number.parseFloat(normalized.toPrecision(12)).toString()
  return plain.length <= 14 ? plain : normalized.toExponential(7)
}

function calculate(
  left: number,
  operator: CalculatorOperator,
  right: number
): number | null {
  if (operator === "+") return left + right
  if (operator === "-") return left - right
  if (operator === "*") return left * right
  if (right === 0) return null
  return left / right
}

function errorState(): CalculatorState {
  return { ...INITIAL_CALCULATOR_STATE, display: "Error", replaceDisplay: true }
}

export function reduceCalculator(
  state: CalculatorState,
  action: CalculatorAction
): CalculatorState {
  if (action.type === "clear") return INITIAL_CALCULATOR_STATE

  if (action.type === "digit") {
    if (!/^\d$/.test(action.value)) return state
    if (state.display === "Error" || state.replaceDisplay) {
      return { ...state, display: action.value, replaceDisplay: false }
    }
    const digitCount = state.display.replace(/[^0-9]/g, "").length
    if (digitCount >= MAX_INPUT_DIGITS) return state
    return {
      ...state,
      display: state.display === "0" ? action.value : state.display + action.value,
    }
  }

  if (action.type === "decimal") {
    if (state.display === "Error" || state.replaceDisplay) {
      return { ...state, display: "0.", replaceDisplay: false }
    }
    if (state.display.includes(".")) return state
    return { ...state, display: `${state.display}.` }
  }

  if (action.type === "backspace") {
    if (state.display === "Error" || state.replaceDisplay) return state
    const next = state.display.slice(0, -1)
    return { ...state, display: next === "" || next === "-" ? "0" : next }
  }

  if (action.type === "toggle-sign") {
    const current = parseDisplay(state.display)
    if (current === null || current === 0) return state
    return { ...state, display: formatValue(-current) }
  }

  if (action.type === "percent" || action.type === "square-root") {
    const current = parseDisplay(state.display)
    if (current === null) return errorState()
    if (action.type === "square-root" && current < 0) return errorState()
    const value = action.type === "percent" ? current / 100 : Math.sqrt(current)
    return { ...state, display: formatValue(value), replaceDisplay: true }
  }

  if (action.type === "operator") {
    const current = parseDisplay(state.display)
    if (current === null) return errorState()
    let nextAccumulator = current
    let nextDisplay = state.display
    if (
      state.accumulator !== null &&
      state.pendingOperator !== null &&
      !state.replaceDisplay
    ) {
      const result = calculate(state.accumulator, state.pendingOperator, current)
      if (result === null) return errorState()
      nextAccumulator = result
      nextDisplay = formatValue(result)
    } else if (state.accumulator !== null && state.replaceDisplay) {
      nextAccumulator = state.accumulator
    }
    return {
      display: nextDisplay,
      accumulator: nextAccumulator,
      pendingOperator: action.value,
      replaceDisplay: true,
    }
  }

  const current = parseDisplay(state.display)
  if (
    current === null ||
    state.accumulator === null ||
    state.pendingOperator === null
  ) {
    return state.display === "Error" ? errorState() : state
  }
  const result = calculate(state.accumulator, state.pendingOperator, current)
  if (result === null) return errorState()
  return {
    display: formatValue(result),
    accumulator: null,
    pendingOperator: null,
    replaceDisplay: true,
  }
}
