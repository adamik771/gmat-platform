import { describe, it, expect } from "vitest"
import {
  evaluateSignupGate,
  isSignupGateArmed,
  type SignupGateReason,
} from "@/lib/signup-gate"

const CODE = "climb-2026"

function reason(provided: string | undefined | null, configured: string | undefined | null): SignupGateReason {
  return evaluateSignupGate(provided, configured).reason
}

describe("isSignupGateArmed", () => {
  it("is disarmed when unset, empty, or whitespace", () => {
    expect(isSignupGateArmed(undefined)).toBe(false)
    expect(isSignupGateArmed(null)).toBe(false)
    expect(isSignupGateArmed("")).toBe(false)
    expect(isSignupGateArmed("   ")).toBe(false)
  })

  it("is armed when a non-blank code is configured", () => {
    expect(isSignupGateArmed(CODE)).toBe(true)
    expect(isSignupGateArmed("  x  ")).toBe(true)
  })
})

describe("evaluateSignupGate", () => {
  it("fails open (allows, 'open') when the gate is disarmed", () => {
    // Even an empty provided code is allowed — the gate simply isn't on.
    expect(evaluateSignupGate("", undefined)).toEqual({ allowed: true, reason: "open" })
    expect(evaluateSignupGate("anything", "")).toEqual({ allowed: true, reason: "open" })
    expect(evaluateSignupGate(undefined, "   ")).toEqual({ allowed: true, reason: "open" })
  })

  it("allows ('ok') with the correct code when armed", () => {
    expect(evaluateSignupGate(CODE, CODE)).toEqual({ allowed: true, reason: "ok" })
  })

  it("trims surrounding whitespace on both sides before comparing", () => {
    expect(reason(`  ${CODE} `, CODE)).toBe("ok")
    expect(reason(CODE, `\t${CODE}\n`)).toBe("ok")
  })

  it("blocks ('missing') when armed but no code is provided", () => {
    expect(evaluateSignupGate("", CODE)).toEqual({ allowed: false, reason: "missing" })
    expect(evaluateSignupGate("   ", CODE)).toEqual({ allowed: false, reason: "missing" })
    expect(evaluateSignupGate(undefined, CODE)).toEqual({ allowed: false, reason: "missing" })
    expect(evaluateSignupGate(null, CODE)).toEqual({ allowed: false, reason: "missing" })
  })

  it("blocks ('mismatch') on a wrong code of equal length", () => {
    const wrong = "x".repeat(CODE.length)
    expect(evaluateSignupGate(wrong, CODE)).toEqual({ allowed: false, reason: "mismatch" })
  })

  it("blocks ('mismatch') on a wrong code of different length", () => {
    // Exercises the length-guard branch (timingSafeEqual would otherwise throw).
    expect(reason("short", CODE)).toBe("mismatch")
    expect(reason(`${CODE}-extra`, CODE)).toBe("mismatch")
  })

  it("is case-sensitive", () => {
    expect(reason(CODE.toUpperCase(), CODE)).toBe("mismatch")
  })
})
