import { describe, it, expect } from "vitest"
import type Stripe from "stripe"
import {
  HANDLED_EVENT_TYPES,
  normalizeChargeId,
  normalizePaymentIntentId,
  resolveWebhookEvent,
  type WebhookAction,
} from "@/lib/stripe-webhook"

// Minimal event builders. resolveWebhookEvent only reads `type` and a few
// fields off `data.object`, so we cast partial shapes to the Stripe types it
// expects rather than constructing full SDK objects.
function checkoutEvent(
  session: Partial<Stripe.Checkout.Session>
): Stripe.Event {
  return {
    type: "checkout.session.completed",
    data: { object: { id: "cs_test", ...session } },
  } as unknown as Stripe.Event
}

function chargeRefundedEvent(charge: Partial<Stripe.Charge>): Stripe.Event {
  return {
    type: "charge.refunded",
    data: { object: charge },
  } as unknown as Stripe.Event
}

function disputeEvent(dispute: Partial<Stripe.Dispute>): Stripe.Event {
  return {
    type: "charge.dispute.created",
    data: { object: dispute },
  } as unknown as Stripe.Event
}

describe("HANDLED_EVENT_TYPES", () => {
  it("contains exactly the three money/access-moving events", () => {
    expect([...HANDLED_EVENT_TYPES].sort()).toEqual([
      "charge.dispute.created",
      "charge.refunded",
      "checkout.session.completed",
    ])
  })
})

describe("normalizePaymentIntentId", () => {
  it("returns a string id unchanged", () => {
    expect(normalizePaymentIntentId("pi_123")).toBe("pi_123")
  })
  it("extracts .id from an expanded PaymentIntent object", () => {
    expect(
      normalizePaymentIntentId({ id: "pi_456" } as Stripe.PaymentIntent)
    ).toBe("pi_456")
  })
  it("returns null for null / undefined / empty string", () => {
    expect(normalizePaymentIntentId(null)).toBeNull()
    expect(normalizePaymentIntentId(undefined)).toBeNull()
    expect(normalizePaymentIntentId("")).toBeNull()
  })
})

describe("normalizeChargeId", () => {
  it("returns a string id unchanged", () => {
    expect(normalizeChargeId("ch_123")).toBe("ch_123")
  })
  it("extracts .id from an expanded Charge object", () => {
    expect(normalizeChargeId({ id: "ch_456" } as Stripe.Charge)).toBe("ch_456")
  })
  it("returns null for null / undefined / empty string", () => {
    expect(normalizeChargeId(null)).toBeNull()
    expect(normalizeChargeId(undefined)).toBeNull()
    expect(normalizeChargeId("")).toBeNull()
  })
})

describe("resolveWebhookEvent — unhandled events", () => {
  it("ignores any event type not in the handled set", () => {
    const action = resolveWebhookEvent({
      type: "payment_intent.succeeded",
      data: { object: {} },
    } as unknown as Stripe.Event)
    expect(action).toEqual({
      kind: "ignore",
      eventType: "payment_intent.succeeded",
    })
  })
})

describe("resolveWebhookEvent — checkout.session.completed", () => {
  it("records with user id from client_reference_id", () => {
    const action = resolveWebhookEvent(
      checkoutEvent({
        id: "cs_1",
        client_reference_id: "user_abc",
        metadata: { plan_id: "self_study" },
        payment_intent: "pi_1",
        amount_total: 42900,
        currency: "eur",
      })
    )
    expect(action).toEqual<WebhookAction>({
      kind: "record",
      userId: "user_abc",
      planId: "self_study",
      sessionId: "cs_1",
      paymentIntent: "pi_1",
      amountCents: 42900,
      currency: "eur",
    })
  })

  it("falls back to metadata.user_id when client_reference_id is null", () => {
    const action = resolveWebhookEvent(
      checkoutEvent({
        client_reference_id: null,
        metadata: { user_id: "user_meta", plan_id: "coaching" },
        payment_intent: "pi_2",
      })
    )
    expect(action).toMatchObject({ kind: "record", userId: "user_meta", planId: "coaching" })
  })

  it("prefers client_reference_id over metadata.user_id", () => {
    const action = resolveWebhookEvent(
      checkoutEvent({
        client_reference_id: "from_ref",
        metadata: { user_id: "from_meta", plan_id: "intensive" },
      })
    )
    expect(action).toMatchObject({ kind: "record", userId: "from_ref" })
  })

  it("normalizes an expanded PaymentIntent object on the session", () => {
    const action = resolveWebhookEvent(
      checkoutEvent({
        client_reference_id: "u",
        metadata: { plan_id: "self_study" },
        payment_intent: { id: "pi_obj" } as Stripe.PaymentIntent,
      })
    )
    expect(action).toMatchObject({ kind: "record", paymentIntent: "pi_obj" })
  })

  it("defaults amount to 0 and currency to usd when absent", () => {
    const action = resolveWebhookEvent(
      checkoutEvent({
        client_reference_id: "u",
        metadata: { plan_id: "self_study" },
        amount_total: null,
        currency: null,
      })
    )
    expect(action).toMatchObject({ kind: "record", amountCents: 0, currency: "usd" })
  })

  it("carries a null payment_intent through (e.g. $0 / promo)", () => {
    const action = resolveWebhookEvent(
      checkoutEvent({
        client_reference_id: "u",
        metadata: { plan_id: "self_study" },
        payment_intent: null,
      })
    )
    expect(action).toMatchObject({ kind: "record", paymentIntent: null })
  })

  it("skips (accepts, records nothing) when user id is missing", () => {
    const action = resolveWebhookEvent(
      checkoutEvent({
        id: "cs_no_user",
        client_reference_id: null,
        metadata: { plan_id: "self_study" },
      })
    )
    expect(action).toEqual({ kind: "skip_missing_metadata", sessionId: "cs_no_user" })
  })

  it("skips when plan id is missing", () => {
    const action = resolveWebhookEvent(
      checkoutEvent({
        id: "cs_no_plan",
        client_reference_id: "user_abc",
        metadata: {},
      })
    )
    expect(action).toEqual({ kind: "skip_missing_metadata", sessionId: "cs_no_plan" })
  })

  it("skips when metadata is entirely absent", () => {
    const action = resolveWebhookEvent(
      checkoutEvent({ id: "cs_bare", client_reference_id: null })
    )
    expect(action).toEqual({ kind: "skip_missing_metadata", sessionId: "cs_bare" })
  })
})

describe("resolveWebhookEvent — charge.refunded", () => {
  it("revokes on a full refund (refunded=true), carrying PI and charge id", () => {
    const action = resolveWebhookEvent(
      chargeRefundedEvent({ id: "ch_full", refunded: true, payment_intent: "pi_full" })
    )
    expect(action).toEqual({
      kind: "revoke",
      paymentIntent: "pi_full",
      charge: "ch_full",
      cause: "refund",
    })
  })

  it("revokes with a normalized expanded PaymentIntent object", () => {
    const action = resolveWebhookEvent(
      chargeRefundedEvent({
        refunded: true,
        payment_intent: { id: "pi_exp" } as Stripe.PaymentIntent,
      })
    )
    expect(action).toMatchObject({ kind: "revoke", paymentIntent: "pi_exp", cause: "refund" })
  })

  it("does NOT revoke on a partial refund (refunded=false)", () => {
    const action = resolveWebhookEvent(
      chargeRefundedEvent({ refunded: false, payment_intent: "pi_partial" })
    )
    expect(action).toEqual({ kind: "partial_refund_noop" })
  })

  it("carries the charge id as a fallback when the PI is null (the unrevokable-by-PI case)", () => {
    const action = resolveWebhookEvent(
      chargeRefundedEvent({ id: "ch_nopi", refunded: true, payment_intent: null })
    )
    expect(action).toEqual({
      kind: "revoke",
      paymentIntent: null,
      charge: "ch_nopi",
      cause: "refund",
    })
  })

  it("falls back to a null charge id when neither PI nor charge id is present", () => {
    const action = resolveWebhookEvent(
      chargeRefundedEvent({ refunded: true, payment_intent: null })
    )
    expect(action).toEqual({
      kind: "revoke",
      paymentIntent: null,
      charge: null,
      cause: "refund",
    })
  })
})

describe("resolveWebhookEvent — charge.dispute.created", () => {
  it("revokes with cause=dispute, carrying PI and charge id", () => {
    const action = resolveWebhookEvent(
      disputeEvent({ payment_intent: "pi_disputed", charge: "ch_disputed" })
    )
    expect(action).toEqual({
      kind: "revoke",
      paymentIntent: "pi_disputed",
      charge: "ch_disputed",
      cause: "dispute",
    })
  })

  it("normalizes an expanded PaymentIntent on the dispute", () => {
    const action = resolveWebhookEvent(
      disputeEvent({ payment_intent: { id: "pi_d_obj" } as Stripe.PaymentIntent })
    )
    expect(action).toMatchObject({ kind: "revoke", paymentIntent: "pi_d_obj", cause: "dispute" })
  })

  it("normalizes an expanded Charge object on the dispute", () => {
    const action = resolveWebhookEvent(
      disputeEvent({
        payment_intent: null,
        charge: { id: "ch_d_obj" } as Stripe.Charge,
      })
    )
    expect(action).toMatchObject({ kind: "revoke", charge: "ch_d_obj", cause: "dispute" })
  })

  it("carries the charge id as a fallback when the PI is null", () => {
    const action = resolveWebhookEvent(
      disputeEvent({ payment_intent: null, charge: "ch_nopi" })
    )
    expect(action).toEqual({
      kind: "revoke",
      paymentIntent: null,
      charge: "ch_nopi",
      cause: "dispute",
    })
  })
})
