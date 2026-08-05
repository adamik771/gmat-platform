import { beforeEach, describe, expect, it, vi } from "vitest"

/**
 * Founding-reservation route contract: the transactional confirmation email
 * sends exactly once per (email, source) — decided ATOMICALLY by the
 * insert-winner upsert, so two concurrent first requests can never both
 * send. Re-submissions refresh capture metadata without re-mailing, the
 * founding drip stays strictly opt-in, and non-founding sources never
 * trigger the confirmation. All I/O is mocked — no real email, no real DB.
 */

vi.mock("@/lib/supabase/service", () => ({ getSupabaseService: vi.fn() }))
vi.mock("@/lib/email", () => ({
  sendEmail: vi.fn(async () => ({ ok: true as const, id: "test" })),
}))
vi.mock("@/lib/outreach/consent", () => ({
  recordConsent: vi.fn(async () => ({ subscribed: true })),
}))
vi.mock("@/lib/outreach/queue", () => ({
  enqueueDrip: vi.fn(async () => 4),
}))

import { POST } from "@/app/api/lead-capture/route"
import { getSupabaseService } from "@/lib/supabase/service"
import { sendEmail } from "@/lib/email"
import { recordConsent } from "@/lib/outreach/consent"
import { enqueueDrip } from "@/lib/outreach/queue"

/**
 * Fake Supabase: upsert(...).select() resolves winner/loser per the given
 * sequence (a winner returns its row, a loser returns []); update().eq().eq()
 * records the metadata refresh.
 */
function makeSupabase(winnerSequence: boolean[]) {
  let i = 0
  const calls = { upserts: 0, updates: 0 }
  const client = {
    from: () => ({
      upsert: () => ({
        select: async () => {
          const winner =
            winnerSequence[Math.min(i, winnerSequence.length - 1)] ?? false
          i += 1
          calls.upserts += 1
          return { data: winner ? [{ email: "w" }] : [], error: null }
        },
      }),
      update: () => ({
        eq: () => ({
          eq: async () => {
            calls.updates += 1
            return { error: null }
          },
        }),
      }),
    }),
  }
  return { client, calls }
}

let ipCounter = 0
function post(body: Record<string, unknown>): Request {
  // Unique IP per request keeps the route's per-IP throttle out of the way.
  ipCounter += 1
  return new Request("http://localhost/api/lead-capture", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-forwarded-for": `10.0.${Math.floor(ipCounter / 200)}.${ipCounter % 200}`,
    },
    body: JSON.stringify(body),
  })
}

const FOUNDING = {
  email: "prospect@example.com",
  source: "founding-member",
  leadMagnet: "founding-reservation",
  hp: "",
  optIn: false,
}

beforeEach(() => {
  vi.mocked(sendEmail).mockClear()
  vi.mocked(recordConsent).mockClear()
  vi.mocked(enqueueDrip).mockClear()
})

describe("founding confirmation first-send", () => {
  it("sends the confirmation exactly once on the first capture, without opt-in side effects", async () => {
    const { client } = makeSupabase([true])
    vi.mocked(getSupabaseService).mockReturnValue(client as never)
    const res = await POST(post(FOUNDING))
    expect(res.status).toBe(200)
    expect(vi.mocked(sendEmail)).toHaveBeenCalledTimes(1)
    expect(vi.mocked(sendEmail).mock.calls[0][0].to).toBe(FOUNDING.email)
    // No opt-in ticked: consent ledger and drip untouched.
    expect(vi.mocked(recordConsent)).not.toHaveBeenCalled()
    expect(vi.mocked(enqueueDrip)).not.toHaveBeenCalled()
  })

  it("re-submission refreshes metadata but never re-sends", async () => {
    const { client, calls } = makeSupabase([false])
    vi.mocked(getSupabaseService).mockReturnValue(client as never)
    const res = await POST(post(FOUNDING))
    expect(res.status).toBe(200)
    expect(vi.mocked(sendEmail)).not.toHaveBeenCalled()
    expect(calls.updates).toBe(1)
  })

  it("two concurrent first requests produce exactly one send (atomic insert-winner)", async () => {
    // The DB resolves the race: one upsert returns the row, the other [].
    const { client } = makeSupabase([true, false])
    vi.mocked(getSupabaseService).mockReturnValue(client as never)
    const [a, b] = await Promise.all([POST(post(FOUNDING)), POST(post(FOUNDING))])
    expect(a.status).toBe(200)
    expect(b.status).toBe(200)
    expect(vi.mocked(sendEmail)).toHaveBeenCalledTimes(1)
  })

  it("keeps the founding drip strictly opt-in (enqueued only with optIn, even on re-submission)", async () => {
    const { client } = makeSupabase([false])
    vi.mocked(getSupabaseService).mockReturnValue(client as never)
    await POST(post({ ...FOUNDING, optIn: true }))
    expect(vi.mocked(sendEmail)).not.toHaveBeenCalled() // no resend
    expect(vi.mocked(recordConsent)).toHaveBeenCalledTimes(1)
    expect(vi.mocked(enqueueDrip)).toHaveBeenCalledTimes(1)
    expect(vi.mocked(enqueueDrip).mock.calls[0][1].sequence).toBe("founding")
  })

  it("non-founding sources never trigger the confirmation, even on first capture", async () => {
    const { client } = makeSupabase([true])
    vi.mocked(getSupabaseService).mockReturnValue(client as never)
    const res = await POST(
      post({
        email: "reader@example.com",
        source: "footer",
        leadMagnet: "error-log-template",
        hp: "",
        optIn: false,
      }),
    )
    expect(res.status).toBe(200)
    expect(vi.mocked(sendEmail)).not.toHaveBeenCalled()
  })
})
