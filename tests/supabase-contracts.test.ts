import { describe, expect, it } from "vitest"
import {
  extractSupabaseContractsFromSource,
  validateSupabaseContracts,
} from "../scripts/check-supabase-contracts"

describe("Supabase source/schema contracts", () => {
  it("extracts tables, selected/filter columns, payload keys, and RPCs", () => {
    const contracts = extractSupabaseContractsFromSource(`
      supabase.from("error_tags")
        .select("attempt_id, reviewed, practice_attempts(question_id)")
        .eq("user_id", userId)
        .order("attempt_id")
      supabase.from("purchases").insert({ user_id: userId, plan_id: plan })
      supabase.rpc("get_analytics_aggregates")
    `)

    expect([...contracts.tables.get("error_tags")!].sort()).toEqual([
      "attempt_id",
      "reviewed",
      "user_id",
    ])
    expect([...contracts.tables.get("purchases")!].sort()).toEqual([
      "plan_id",
      "user_id",
    ])
    expect([...contracts.rpcs]).toEqual(["get_analytics_aggregates"])
  })

  it("fails the exact stale-column contract that broke the dashboard", () => {
    const contracts = extractSupabaseContractsFromSource(`
      supabase.from("error_tags").select("id", { count: "exact", head: true })
    `)
    const failures = validateSupabaseContracts(contracts, {
      definitions: {
        error_tags: {
          properties: { attempt_id: {}, user_id: {}, reviewed: {} },
        },
      },
      paths: {},
    })

    expect(failures).toEqual([
      {
        object: "error_tags.id",
        detail: "column is absent from the production schema",
      },
    ])
  })

  it("checks RPC presence without invoking functions", () => {
    const contracts = extractSupabaseContractsFromSource(
      `supabase.rpc("get_analytics_aggregates")`,
    )
    expect(
      validateSupabaseContracts(contracts, {
        definitions: {},
        paths: { "/rpc/get_analytics_aggregates": {} },
      }),
    ).toEqual([])
  })

  it("does not mistake unrelated JavaScript from() calls for database tables", () => {
    const contracts = extractSupabaseContractsFromSource(`
      Buffer.from("not-a-table", "base64")
      supabase.from("practice_sessions").select("id")
    `)

    expect([...contracts.tables]).toEqual([
      ["practice_sessions", new Set(["id"])],
    ])
  })
})
