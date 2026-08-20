import { describe, expect, it } from "vitest"
import {
  INITIAL_CALCULATOR_STATE,
  reduceCalculator,
  type CalculatorAction,
} from "@/lib/di-calculator"

function run(actions: CalculatorAction[]) {
  return actions.reduce(reduceCalculator, INITIAL_CALCULATOR_STATE)
}

describe("Data Insights calculator", () => {
  it("evaluates chained arithmetic in entry order", () => {
    const state = run([
      { type: "digit", value: "1" },
      { type: "digit", value: "2" },
      { type: "operator", value: "+" },
      { type: "digit", value: "8" },
      { type: "operator", value: "/" },
      { type: "digit", value: "4" },
      { type: "equals" },
    ])
    expect(state.display).toBe("5")
  })

  it("supports decimals, sign changes, percentages, and square roots", () => {
    expect(
      run([
        { type: "digit", value: "2" },
        { type: "digit", value: "5" },
        { type: "percent" },
      ]).display
    ).toBe("0.25")
    expect(
      run([
        { type: "digit", value: "8" },
        { type: "digit", value: "1" },
        { type: "square-root" },
        { type: "toggle-sign" },
      ]).display
    ).toBe("-9")
  })

  it("shows an error for invalid operations and recovers on the next digit", () => {
    const invalid = run([
      { type: "digit", value: "9" },
      { type: "operator", value: "/" },
      { type: "digit", value: "0" },
      { type: "equals" },
    ])
    expect(invalid.display).toBe("Error")
    expect(
      reduceCalculator(invalid, { type: "digit", value: "7" }).display
    ).toBe("7")
  })

  it("clears all pending operation state", () => {
    const cleared = run([
      { type: "digit", value: "9" },
      { type: "operator", value: "*" },
      { type: "clear" },
    ])
    expect(cleared).toEqual(INITIAL_CALCULATOR_STATE)
  })
})
