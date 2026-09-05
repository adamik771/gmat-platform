"use client"

import {
  Children,
  isValidElement,
  useMemo,
  useState,
  type ReactElement,
  type ReactNode,
} from "react"
import { ArrowDown, ArrowUp, ArrowUpDown } from "lucide-react"
import {
  compareTableCellText,
  type TableSortDirection,
} from "@/lib/table-sort"

type TableVariant = "runner" | "reader"
type ChildElement = ReactElement<{ children?: ReactNode }>

interface SortableMarkdownTableProps {
  children?: ReactNode
  sortable?: boolean
  variant?: TableVariant
}

interface ParsedRow {
  cells: ReactNode[]
  cellText: string[]
  sourceIndex: number
}

interface ParsedTable {
  headers: ReactNode[]
  headerText: string[]
  rows: ParsedRow[]
  signature: string
}

interface SortState {
  signature: string
  columnIndex: number
  direction: TableSortDirection
}

function elements(node: ReactNode): ChildElement[] {
  return Children.toArray(node).filter(
    (child): child is ChildElement => isValidElement<{ children?: ReactNode }>(child)
  )
}

function textFromNode(node: ReactNode): string {
  return Children.toArray(node)
    .map((child) => {
      if (typeof child === "string" || typeof child === "number") {
        return String(child)
      }
      if (isValidElement<{ children?: ReactNode }>(child)) {
        return textFromNode(child.props.children)
      }
      return ""
    })
    .join("")
    .replace(/\s+/g, " ")
    .trim()
}

function parseTable(children: ReactNode): ParsedTable | null {
  const sections = elements(children)
  if (sections.length < 2) return null

  const headerRows = elements(sections[0].props.children)
  const bodyRows = elements(sections[1].props.children)
  if (headerRows.length === 0) return null

  const headers = elements(headerRows[0].props.children).map(
    (cell) => cell.props.children
  )
  if (headers.length === 0) return null

  const rows = bodyRows.map((row, sourceIndex) => {
    const cells = elements(row.props.children).map((cell) => cell.props.children)
    return {
      cells,
      cellText: cells.map(textFromNode),
      sourceIndex,
    }
  })
  const headerText = headers.map(textFromNode)
  const signature = JSON.stringify([
    headerText,
    rows.map((row) => row.cellText),
  ])

  return { headers, headerText, rows, signature }
}

/**
 * Rebuilds a GFM Markdown table as an accessible interactive table. Sorting is
 * enabled only for Table Analysis question exhibits; all other Markdown tables
 * keep their authored row order.
 */
export default function SortableMarkdownTable({
  children,
  sortable = false,
  variant = "runner",
}: SortableMarkdownTableProps) {
  const parsed = useMemo(() => parseTable(children), [children])
  const [sortState, setSortState] = useState<SortState | null>(null)

  if (!parsed) {
    return <table className="w-full border-collapse text-xs">{children}</table>
  }
  const table = parsed

  // React may reuse this component position when the next question appears.
  // Binding state to the table signature prevents the previous question's sort
  // from carrying into a new exhibit without a setState-in-effect reset.
  const activeSort =
    sortState?.signature === table.signature ? sortState : null
  const rows = activeSort
    ? [...table.rows].sort((left, right) => {
        const compared = compareTableCellText(
          left.cellText[activeSort.columnIndex] ?? "",
          right.cellText[activeSort.columnIndex] ?? "",
          activeSort.direction
        )
        return compared || left.sourceIndex - right.sourceIndex
      })
    : table.rows

  const isReader = variant === "reader"
  const wrapperClassName = isReader
    ? "my-5 overflow-x-auto rounded-lg border"
    : "my-3 overflow-x-auto rounded-lg border border-white/[0.08]"
  const wrapperStyle = isReader
    ? { borderColor: "var(--read-border-strong)" }
    : undefined
  const headStyle = isReader
    ? { backgroundColor: "var(--read-bg-inset)" }
    : undefined

  function changeSort(columnIndex: number) {
    setSortState((current) => {
      const sameColumn =
        current?.signature === table.signature &&
        current.columnIndex === columnIndex
      return {
        signature: table.signature,
        columnIndex,
        direction:
          sameColumn && current.direction === "ascending"
            ? "descending"
            : "ascending",
      }
    })
  }

  return (
    <div className={wrapperClassName} style={wrapperStyle}>
      <table className="w-full border-collapse text-xs">
        <thead className={isReader ? undefined : "bg-[#0D0D0D]"} style={headStyle}>
          <tr>
            {table.headers.map((header, columnIndex) => {
              const direction =
                activeSort?.columnIndex === columnIndex
                  ? activeSort.direction
                  : null
              const headerLabel =
                table.headerText[columnIndex] || `column ${columnIndex + 1}`
              const HeaderIcon =
                direction === "ascending"
                  ? ArrowUp
                  : direction === "descending"
                    ? ArrowDown
                    : ArrowUpDown
              return (
                <th
                  key={`${headerLabel}-${columnIndex}`}
                  scope="col"
                  aria-sort={sortable ? direction ?? "none" : undefined}
                  className={
                    isReader
                      ? "text-left text-xs font-semibold uppercase tracking-wide border-b"
                      : "text-left text-[11px] font-semibold uppercase tracking-wide text-[#888888] border-b border-white/[0.08]"
                  }
                  style={
                    isReader
                      ? {
                          color: "var(--read-text-muted)",
                          borderColor: "var(--read-border-strong)",
                        }
                      : undefined
                  }
                >
                  {sortable ? (
                    <button
                      type="button"
                      onClick={() => changeSort(columnIndex)}
                      className="group flex min-h-9 w-full items-center justify-between gap-2 px-3 py-2 text-left hover:bg-white/[0.04] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#C9A84C]"
                      title={`Sort by ${headerLabel}`}
                      aria-label={`Sort by ${headerLabel}${
                        direction ? `, currently ${direction}` : ""
                      }`}
                    >
                      <span>{header}</span>
                      <HeaderIcon
                        className="h-3.5 w-3.5 flex-none opacity-70 group-hover:opacity-100"
                        aria-hidden
                      />
                    </button>
                  ) : (
                    <div className="px-3 py-2">{header}</div>
                  )}
                </th>
              )
            })}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.sourceIndex}>
              {row.cells.map((cell, columnIndex) => (
                <td
                  key={columnIndex}
                  className={
                    isReader
                      ? "px-3 py-2 text-[14px] border-b"
                      : "px-3 py-2 text-[13px] text-[#E0E0E0] border-b border-white/[0.04]"
                  }
                  style={
                    isReader
                      ? {
                          color: "var(--read-text-body)",
                          borderColor: "var(--read-border)",
                        }
                      : undefined
                  }
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
