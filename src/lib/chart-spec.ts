/**
 * Chart spec — the structured data behind a Graphics Interpretation (GI)
 * question. Authored as a fenced ```chart JSON block in the question
 * markdown; parsed by `content.ts` into `ParsedQuestion.chartSpec` and
 * rendered by `components/shared/QuestionChart.tsx`.
 *
 * This replaces the old prose "Description: ..." GI format, which wasn't a
 * real graphics question (no graphic) and often gave away the answer.
 */

export type ChartType =
  | "line"
  | "area"
  | "bar"
  | "stackedBar"
  | "scatter"
  | "bubble"
  | "pie"
  | "composed"
  | "radar"

export interface ChartAxis {
  label?: string
  min?: number
  max?: number
  /** Unit suffix shown on ticks/tooltip, e.g. "K", "%", "M". */
  unit?: string
}

export interface ChartSeries {
  /** Data-row key this series reads. */
  key: string
  /** Legend label. Defaults to `key`. */
  name?: string
  /** Override the palette color for this series. */
  color?: string
}

export interface ChartSpec {
  type: ChartType
  /** Optional caption rendered above the chart. */
  title?: string
  x?: ChartAxis
  y?: ChartAxis
  /** Right-hand Y axis for dual-axis composed charts (e.g. units + price). */
  y2?: ChartAxis
  /**
   * Series definitions for multi-series charts (grouped/stacked bar,
   * multi-line, composed). Single-series charts may omit this — the
   * renderer falls back to a single `value` key.
   */
  series?: ChartSeries[]
  /** For `composed`: which series render as bars vs. lines. */
  composed?: { bars?: string[]; lines?: string[] }
  /**
   * Data rows. Conventions by type:
   *   line/area/bar/composed/radar → { x: <category>, <seriesKey>: number, … }
   *   scatter                      → { x: number, y: number }
   *   bubble                       → { x: number, y: number, z: number }
   *   pie                          → { name: string, value: number }
   */
  data: Array<Record<string, string | number>>
}

/** Shared dark/gold palette so charts match the app theme. */
export const CHART_PALETTE = [
  "#C9A84C",
  "#5FA8FF",
  "#3ECF8E",
  "#FF6B6B",
  "#B98AE0",
  "#E8C97A",
  "#7FD1C7",
]

/**
 * Narrow an unknown (parsed JSON) into a ChartSpec, returning null when it
 * doesn't look like one. Keeps the parser tolerant of malformed blocks.
 */
export function asChartSpec(value: unknown): ChartSpec | null {
  if (!value || typeof value !== "object") return null
  const v = value as Record<string, unknown>
  const types: ChartType[] = [
    "line",
    "area",
    "bar",
    "stackedBar",
    "scatter",
    "bubble",
    "pie",
    "composed",
    "radar",
  ]
  if (typeof v.type !== "string" || !types.includes(v.type as ChartType)) return null
  if (!Array.isArray(v.data) || v.data.length === 0) return null
  return value as ChartSpec
}
