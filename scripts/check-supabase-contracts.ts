/**
 * Deploy-time Supabase contract check.
 *
 * Reads every fluent `.from("table")` / `.rpc("function")` query in `src/`,
 * extracts statically named columns, and compares them with PostgREST's
 * OpenAPI schema. It never requests table rows and never prints
 * credentials or schema contents.
 *
 * Local and preview builds without Supabase credentials skip the network check.
 * Production builds fail closed when credentials are missing or a source query
 * references a table, function, or column that production does not expose.
 */
import { readdirSync, readFileSync } from "node:fs"
import { fileURLToPath } from "node:url"
import { resolve } from "node:path"
import ts from "typescript"

export interface SupabaseContracts {
  tables: Map<string, Set<string>>
  rpcs: Set<string>
}

export interface ContractFailure {
  object: string
  detail: string
}

const COLUMN_METHODS = new Set([
  "contains",
  "eq",
  "filter",
  "gt",
  "gte",
  "ilike",
  "in",
  "is",
  "like",
  "lt",
  "lte",
  "neq",
  "not",
  "order",
  "overlaps",
])
const SUPABASE_RECEIVERS = new Set(["service", "supabase"])

function literalText(node: ts.Node | undefined): string | null {
  return node &&
    (ts.isStringLiteral(node) || ts.isNoSubstitutionTemplateLiteral(node))
    ? node.text
    : null
}

function tableFromExpression(expression: ts.Expression): string | null {
  if (ts.isParenthesizedExpression(expression)) {
    return tableFromExpression(expression.expression)
  }
  if (ts.isCallExpression(expression)) {
    const callee = expression.expression
    if (!ts.isPropertyAccessExpression(callee)) return null
    if (callee.name.text === "from") {
      const receiver = callee.expression
      return ts.isIdentifier(receiver) && SUPABASE_RECEIVERS.has(receiver.text)
        ? literalText(expression.arguments[0])
        : null
    }
    return tableFromExpression(callee.expression)
  }
  if (ts.isPropertyAccessExpression(expression)) {
    return tableFromExpression(expression.expression)
  }
  return null
}

function splitTopLevel(value: string): string[] {
  const parts: string[] = []
  let depth = 0
  let quote: string | null = null
  let start = 0

  for (let i = 0; i < value.length; i += 1) {
    const char = value[i]
    if (quote) {
      if (char === quote && value[i - 1] !== "\\") quote = null
      continue
    }
    if (char === '"' || char === "'") {
      quote = char
    } else if (char === "(") {
      depth += 1
    } else if (char === ")") {
      depth = Math.max(0, depth - 1)
    } else if (char === "," && depth === 0) {
      parts.push(value.slice(start, i))
      start = i + 1
    }
  }
  parts.push(value.slice(start))
  return parts
}

function normalizeColumn(raw: string): string | null {
  let column = raw.trim()
  if (!column || column === "*") return null
  // A top-level `relationship(columns...)` token is validated through the
  // relationship's own table queries; it is not a physical column here.
  if (column.includes("(")) return null
  if (column.includes(":")) column = column.slice(column.lastIndexOf(":") + 1)
  if (column.includes("->")) column = column.slice(0, column.indexOf("->"))
  if (column.includes("::")) column = column.slice(0, column.indexOf("::"))
  column = column.replace(/^"|"$/g, "").trim()
  return /^[A-Za-z_][A-Za-z0-9_]*$/.test(column) ? column : null
}

function addColumn(
  tables: Map<string, Set<string>>,
  table: string,
  rawColumn: string,
) {
  const column = normalizeColumn(rawColumn)
  if (column) tables.get(table)!.add(column)
}

function addPayloadKeys(
  tables: Map<string, Set<string>>,
  table: string,
  node: ts.Expression | undefined,
) {
  if (!node) return
  if (ts.isArrayLiteralExpression(node)) {
    for (const element of node.elements) {
      if (ts.isExpression(element)) addPayloadKeys(tables, table, element)
    }
    return
  }
  if (!ts.isObjectLiteralExpression(node)) return
  for (const property of node.properties) {
    if (!ts.isPropertyAssignment(property) && !ts.isShorthandPropertyAssignment(property)) {
      continue
    }
    const name = property.name
    if (ts.isIdentifier(name) || ts.isStringLiteral(name)) {
      addColumn(tables, table, name.text)
    }
  }
}

export function extractSupabaseContractsFromSource(
  sourceText: string,
  fileName = "source.ts",
): SupabaseContracts {
  const source = ts.createSourceFile(
    fileName,
    sourceText,
    ts.ScriptTarget.Latest,
    true,
    fileName.endsWith("x") ? ts.ScriptKind.TSX : ts.ScriptKind.TS,
  )
  const tables = new Map<string, Set<string>>()
  const rpcs = new Set<string>()

  const visit = (node: ts.Node) => {
    if (ts.isCallExpression(node) && ts.isPropertyAccessExpression(node.expression)) {
      const method = node.expression.name.text
      if (method === "rpc") {
        const rpc = literalText(node.arguments[0])
        if (rpc) rpcs.add(rpc)
      }

      const table = tableFromExpression(node)
      if (table) {
        if (!tables.has(table)) tables.set(table, new Set())
        if (method === "select") {
          const selection = literalText(node.arguments[0])
          if (selection) {
            for (const token of splitTopLevel(selection)) {
              addColumn(tables, table, token)
            }
          }
        } else if (COLUMN_METHODS.has(method)) {
          const column = literalText(node.arguments[0])
          if (column) addColumn(tables, table, column)
        } else if (method === "insert" || method === "update" || method === "upsert") {
          addPayloadKeys(tables, table, node.arguments[0])
        }
      }
    }
    ts.forEachChild(node, visit)
  }
  visit(source)
  return { tables, rpcs }
}

function sourceFiles(directory: string): string[] {
  const files: string[] = []
  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    const absolute = resolve(directory, entry.name)
    if (entry.isDirectory()) files.push(...sourceFiles(absolute))
    else if (/\.(?:ts|tsx)$/.test(entry.name) && !entry.name.endsWith(".d.ts")) {
      files.push(absolute)
    }
  }
  return files
}

export function collectSupabaseContracts(srcDirectory: string): SupabaseContracts {
  const merged: SupabaseContracts = { tables: new Map(), rpcs: new Set() }
  for (const file of sourceFiles(srcDirectory)) {
    const current = extractSupabaseContractsFromSource(readFileSync(file, "utf8"), file)
    for (const [table, columns] of current.tables) {
      const target = merged.tables.get(table) ?? new Set<string>()
      for (const column of columns) target.add(column)
      merged.tables.set(table, target)
    }
    for (const rpc of current.rpcs) merged.rpcs.add(rpc)
  }
  return merged
}

type OpenApiDocument = {
  definitions?: Record<string, { properties?: Record<string, unknown> }>
  components?: { schemas?: Record<string, { properties?: Record<string, unknown> }> }
  paths?: Record<string, unknown>
}

export function validateSupabaseContracts(
  contracts: SupabaseContracts,
  document: OpenApiDocument,
): ContractFailure[] {
  const schemas = document.definitions ?? document.components?.schemas ?? {}
  const failures: ContractFailure[] = []

  for (const [table, columns] of [...contracts.tables].sort(([a], [b]) => a.localeCompare(b))) {
    const schema = schemas[table]
    if (!schema) {
      failures.push({ object: table, detail: "table is absent from the production schema" })
      continue
    }
    const properties = schema.properties ?? {}
    for (const column of [...columns].sort()) {
      if (!(column in properties)) {
        failures.push({ object: `${table}.${column}`, detail: "column is absent from the production schema" })
      }
    }
  }

  const paths = document.paths ?? {}
  for (const rpc of [...contracts.rpcs].sort()) {
    if (!(`/rpc/${rpc}` in paths)) {
      failures.push({ object: `rpc.${rpc}`, detail: "function is absent from the production API schema" })
    }
  }
  return failures
}

async function main() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL?.replace(/\/$/, "")
  const schemaKey =
    process.env.SUPABASE_SERVICE_ROLE_KEY ??
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  const strict =
    process.env.VERCEL_ENV === "production" ||
    process.env.SUPABASE_SCHEMA_CHECK_REQUIRED === "true"

  if (!url || !schemaKey) {
    const message = "Supabase schema check skipped: URL/schema API key unavailable."
    if (strict) throw new Error(`${message} Production schema checks require both.`)
    console.log(`[supabase-contracts] ${message}`)
    return
  }

  const contracts = collectSupabaseContracts(resolve("src"))
  const headers: Record<string, string> = {
    apikey: schemaKey,
    Accept: "application/openapi+json",
  }
  // Legacy Supabase keys are JWTs and may be used as Bearer credentials. New
  // publishable/secret keys are opaque and must only be sent through `apikey`.
  if (schemaKey.split(".").length === 3) {
    headers.Authorization = `Bearer ${schemaKey}`
  }
  const response = await fetch(`${url}/rest/v1/`, {
    headers,
    cache: "no-store",
  })
  if (!response.ok) {
    throw new Error(
      `[supabase-contracts] Schema request failed (${response.status}); no credentials were logged.`,
    )
  }
  const document = (await response.json()) as OpenApiDocument
  const failures = validateSupabaseContracts(contracts, document)
  if (failures.length > 0) {
    for (const failure of failures) {
      console.error(`[supabase-contracts] FAIL ${failure.object}: ${failure.detail}`)
    }
    throw new Error(
      `[supabase-contracts] ${failures.length} source/database contract mismatch${failures.length === 1 ? "" : "es"}.`,
    )
  }
  const columnCount = [...contracts.tables.values()].reduce(
    (sum, columns) => sum + columns.size,
    0,
  )
  console.log(
    `[supabase-contracts] OK ${contracts.tables.size} tables, ${columnCount} columns, ${contracts.rpcs.size} RPCs.`,
  )
}

const invokedPath = process.argv[1] ? resolve(process.argv[1]) : ""
if (invokedPath === fileURLToPath(import.meta.url)) {
  await main()
}
