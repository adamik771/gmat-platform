"use client"

import {
  ResponsiveContainer,
  LineChart,
  Line,
  AreaChart,
  Area,
  BarChart,
  Bar,
  ScatterChart,
  Scatter,
  ZAxis,
  PieChart,
  Pie,
  Cell,
  ComposedChart,
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts"
import {
  CHART_PALETTE,
  type ChartSeries,
  type ChartSpec,
} from "@/lib/chart-spec"

/**
 * Renders a Graphics Interpretation question's chart from its ChartSpec.
 * Client component (Recharts needs the browser). Themed to the app's
 * dark/gold palette so it reads as part of the question card.
 */

const AXIS = "#888888"
const GRID = "rgba(255,255,255,0.08)"
const TICK = { fill: AXIS, fontSize: 11 }
const TOOLTIP_STYLE = {
  background: "#111111",
  border: "1px solid rgba(255,255,255,0.10)",
  borderRadius: 8,
  color: "#F0F0F0",
  fontSize: 12,
}

function colorFor(series: ChartSeries, i: number): string {
  return series.color ?? CHART_PALETTE[i % CHART_PALETTE.length]
}

/** Multi-series charts: use explicit series; otherwise infer numeric keys. */
function resolveSeries(spec: ChartSpec): ChartSeries[] {
  if (spec.series && spec.series.length > 0) return spec.series
  const first = spec.data[0] ?? {}
  const keys = Object.keys(first).filter(
    (k) => k !== "x" && k !== "name" && k !== "z" && typeof first[k] === "number",
  )
  return keys.length > 0 ? keys.map((k) => ({ key: k })) : [{ key: "value" }]
}

function yDomain(spec: ChartSpec): [number | "auto", number | "auto"] {
  return [spec.y?.min ?? "auto", spec.y?.max ?? "auto"]
}

function xAxisLabel(spec: ChartSpec) {
  return spec.x?.label
    ? { value: spec.x.label, position: "insideBottom" as const, offset: -4, fill: AXIS, fontSize: 11 }
    : undefined
}

function yAxisLabel(spec: ChartSpec) {
  return spec.y?.label
    ? { value: spec.y.label, angle: -90, position: "insideLeft" as const, fill: AXIS, fontSize: 11, style: { textAnchor: "middle" as const } }
    : undefined
}

/** Screen-reader data table generated from the chart spec. The chart IS
 *  the question data on Graphics Interpretation items — without a text
 *  alternative those questions were unanswerable with a screen reader.
 *  The spec is fully structured (typed rows, series names, axis labels),
 *  so the table is deterministic. */
function SrDataTable({ spec, series }: { spec: ChartSpec; series: ChartSeries[] }) {
  const unit = spec.y?.unit ? ` ${spec.y.unit}` : ""
  if (spec.type === "pie") {
    return (
      <table className="sr-only">
        <caption>{spec.title ?? "Chart data"}</caption>
        <thead>
          <tr>
            <th scope="col">{spec.x?.label ?? "Category"}</th>
            <th scope="col">Value</th>
          </tr>
        </thead>
        <tbody>
          {spec.data.map((row, i) => (
            <tr key={i}>
              <th scope="row">{String(row.name ?? row.x ?? i + 1)}</th>
              <td>
                {String(row.value ?? "")}
                {unit}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    )
  }
  return (
    <table className="sr-only">
      <caption>{spec.title ?? "Chart data"}</caption>
      <thead>
        <tr>
          <th scope="col">{spec.x?.label ?? "x"}</th>
          {series.map((s) => (
            <th key={s.key} scope="col">
              {s.name ?? s.key}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {spec.data.map((row, i) => (
          <tr key={i}>
            <th scope="row">{String(row.x ?? i + 1)}</th>
            {series.map((s) => (
              <td key={s.key}>
                {String(row[s.key] ?? "")}
                {unit}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default function QuestionChart({ spec }: { spec: ChartSpec }) {
  const series = resolveSeries(spec)
  const showLegend = series.length > 1 || spec.type === "pie"

  return (
    <figure
      className="my-4 rounded-xl border p-4"
      style={{ borderColor: "rgba(255,255,255,0.08)", backgroundColor: "#0D0D0D" }}
    >
      {spec.title && (
        <figcaption className="text-[12px] text-[#C0C0C0] mb-3 text-center">
          {spec.title}
        </figcaption>
      )}
      {/* The visual chart is hidden from AT; the sr-only table below
          carries the data. */}
      <div className="w-full" style={{ height: 300 }} aria-hidden="true">
        <ResponsiveContainer width="100%" height="100%">
          {renderChart(spec, series, showLegend)}
        </ResponsiveContainer>
      </div>
      <SrDataTable spec={spec} series={series} />
    </figure>
  )
}

function renderChart(spec: ChartSpec, series: ChartSeries[], showLegend: boolean) {
  const legend = showLegend ? (
    <Legend wrapperStyle={{ fontSize: 11, color: AXIS }} />
  ) : null
  const grid = <CartesianGrid stroke={GRID} strokeDasharray="3 3" />
  const tooltip = <Tooltip contentStyle={TOOLTIP_STYLE} cursor={{ stroke: GRID }} />
  const xCat = (
    <XAxis dataKey="x" stroke={AXIS} tick={TICK} label={xAxisLabel(spec)} />
  )
  const yNum = (
    <YAxis stroke={AXIS} tick={TICK} domain={yDomain(spec)} label={yAxisLabel(spec)} />
  )

  switch (spec.type) {
    case "line":
      return (
        <LineChart data={spec.data} margin={{ top: 8, right: 16, bottom: 16, left: 8 }}>
          {grid}{xCat}{yNum}{tooltip}{legend}
          {series.map((s, i) => (
            <Line key={s.key} type="monotone" dataKey={s.key} name={s.name ?? s.key} stroke={colorFor(s, i)} strokeWidth={2} dot={{ r: 3 }} />
          ))}
        </LineChart>
      )
    case "area":
      return (
        <AreaChart data={spec.data} margin={{ top: 8, right: 16, bottom: 16, left: 8 }}>
          {grid}{xCat}{yNum}{tooltip}{legend}
          {series.map((s, i) => (
            <Area key={s.key} type="monotone" dataKey={s.key} name={s.name ?? s.key} stroke={colorFor(s, i)} fill={colorFor(s, i)} fillOpacity={0.18} strokeWidth={2} />
          ))}
        </AreaChart>
      )
    case "bar":
    case "stackedBar":
      return (
        <BarChart data={spec.data} margin={{ top: 8, right: 16, bottom: 16, left: 8 }}>
          {grid}{xCat}{yNum}{tooltip}{legend}
          {series.map((s, i) => (
            <Bar key={s.key} dataKey={s.key} name={s.name ?? s.key} fill={colorFor(s, i)} stackId={spec.type === "stackedBar" ? "a" : undefined} radius={[2, 2, 0, 0]} />
          ))}
        </BarChart>
      )
    case "composed":
      return (
        <ComposedChart data={spec.data} margin={{ top: 8, right: 16, bottom: 16, left: 8 }}>
          {grid}{xCat}
          <YAxis yAxisId="left" stroke={AXIS} tick={TICK} domain={yDomain(spec)} label={yAxisLabel(spec)} />
          {spec.y2 && (
            <YAxis yAxisId="right" orientation="right" stroke={AXIS} tick={TICK} domain={[spec.y2.min ?? "auto", spec.y2.max ?? "auto"]} label={spec.y2.label ? { value: spec.y2.label, angle: 90, position: "insideRight", fill: AXIS, fontSize: 11, style: { textAnchor: "middle" } } : undefined} />
          )}
          {tooltip}{legend}
          {(spec.composed?.bars ?? []).map((key, i) => (
            <Bar key={key} yAxisId="left" dataKey={key} fill={CHART_PALETTE[i % CHART_PALETTE.length]} radius={[2, 2, 0, 0]} />
          ))}
          {(spec.composed?.lines ?? []).map((key, i) => (
            <Line key={key} yAxisId={spec.y2 ? "right" : "left"} type="monotone" dataKey={key} stroke={CHART_PALETTE[(i + 2) % CHART_PALETTE.length]} strokeWidth={2} dot={{ r: 3 }} />
          ))}
        </ComposedChart>
      )
    case "scatter":
    case "bubble":
      return (
        <ScatterChart margin={{ top: 8, right: 16, bottom: 16, left: 8 }}>
          {grid}
          <XAxis type="number" dataKey="x" stroke={AXIS} tick={TICK} domain={[spec.x?.min ?? "auto", spec.x?.max ?? "auto"]} label={xAxisLabel(spec)} />
          <YAxis type="number" dataKey="y" stroke={AXIS} tick={TICK} domain={yDomain(spec)} label={yAxisLabel(spec)} />
          {spec.type === "bubble" && <ZAxis type="number" dataKey="z" range={[60, 420]} />}
          {tooltip}
          <Scatter data={spec.data} fill={CHART_PALETTE[0]} />
        </ScatterChart>
      )
    case "pie":
      return (
        <PieChart>
          {tooltip}{legend}
          <Pie data={spec.data} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} label={{ fill: "#C0C0C0", fontSize: 11 }}>
            {spec.data.map((_, i) => (
              <Cell key={i} fill={CHART_PALETTE[i % CHART_PALETTE.length]} />
            ))}
          </Pie>
        </PieChart>
      )
    case "radar":
      return (
        <RadarChart data={spec.data}>
          <PolarGrid stroke={GRID} />
          <PolarAngleAxis dataKey="x" tick={TICK} />
          <PolarRadiusAxis tick={TICK} stroke={AXIS} />
          {tooltip}{legend}
          {series.map((s, i) => (
            <Radar key={s.key} dataKey={s.key} name={s.name ?? s.key} stroke={colorFor(s, i)} fill={colorFor(s, i)} fillOpacity={0.18} />
          ))}
        </RadarChart>
      )
    default:
      return <div />
  }
}
