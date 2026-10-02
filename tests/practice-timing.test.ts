import { describe, it, expect } from "vitest"
import { activeSessionMs } from "@/lib/practice-timing"

describe("activeSessionMs", () => {
  const submitted = (elapsedMs: number) => ({ submitted: true, elapsedMs })
  const unanswered = () => ({ submitted: false, elapsedMs: 0 })

  it("sums banked time on submitted questions only", () => {
    expect(
      activeSessionMs([submitted(60_000), unanswered(), submitted(30_000)], null)
    ).toBe(90_000)
  })

  it("counts the running clock while the current question is unanswered", () => {
    expect(
      activeSessionMs([submitted(60_000)], {
        submitted: false,
        startedAt: 1_000,
        now: 11_000,
      })
    ).toBe(70_000)
  })

  it("pauses once the current question is submitted (reading the solution)", () => {
    // The in-flight clock contributes nothing after submit — reading the
    // explanation for any amount of time leaves the total frozen.
    expect(
      activeSessionMs([submitted(60_000)], {
        submitted: true,
        startedAt: 1_000,
        now: 999_000,
      })
    ).toBe(60_000)
  })

  it("stays frozen on the results screen (no in-flight question)", () => {
    expect(activeSessionMs([submitted(45_000), submitted(15_000)], null)).toBe(
      60_000
    )
  })

  it("never goes backwards on a clock skew", () => {
    expect(
      activeSessionMs([], { submitted: false, startedAt: 5_000, now: 1_000 })
    ).toBe(0)
  })
})
