import { createElement, type ReactNode } from "react"
import { renderToStaticMarkup } from "react-dom/server"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import { describe, expect, it } from "vitest"
import SortableMarkdownTable from "../src/components/shared/SortableMarkdownTable"
import {
  compareTableCellText,
  type TableSortDirection,
} from "../src/lib/table-sort"

function sorted(values: string[], direction: TableSortDirection): string[] {
  return values
    .map((value, sourceIndex) => ({ value, sourceIndex }))
    .sort(
      (a, b) =>
        compareTableCellText(a.value, b.value, direction) ||
        a.sourceIndex - b.sourceIndex
    )
    .map(({ value }) => value)
}

function tableChildren(): ReactNode[] {
  return [
    createElement(
      "thead",
      null,
      createElement(
        "tr",
        null,
        createElement("th", null, "Company"),
        createElement("th", null, "Revenue")
      )
    ),
    createElement(
      "tbody",
      null,
      createElement(
        "tr",
        null,
        createElement("td", null, "Beta"),
        createElement("td", null, "95")
      ),
      createElement(
        "tr",
        null,
        createElement("td", null, "Alpha"),
        createElement("td", null, "120")
      )
    ),
  ]
}

describe("Table Analysis sorting", () => {
  it("sorts numeric, currency, percentage, and magnitude values numerically", () => {
    expect(sorted(["$1,400", "95", "2K", "120"], "ascending")).toEqual([
      "95",
      "120",
      "$1,400",
      "2K",
    ])
    expect(sorted(["8%", "25%", "6%", "15%"], "descending")).toEqual([
      "25%",
      "15%",
      "8%",
      "6%",
    ])
  })

  it("sorts text naturally and case-insensitively", () => {
    expect(sorted(["Region 10", "region 2", "Alpha"], "ascending")).toEqual([
      "Alpha",
      "region 2",
      "Region 10",
    ])
  })

  it("sorts supported date formats chronologically", () => {
    expect(
      sorted(["2026-07-02", "2025-12-31", "2026-01-15"], "ascending")
    ).toEqual(["2025-12-31", "2026-01-15", "2026-07-02"])
  })

  it("keeps missing values last in either direction", () => {
    expect(sorted(["—", "3", "1", "N/A"], "ascending")).toEqual([
      "1",
      "3",
      "—",
      "N/A",
    ])
    expect(sorted(["—", "3", "1", "N/A"], "descending")).toEqual([
      "3",
      "1",
      "—",
      "N/A",
    ])
  })

  it("renders sortable headers only when the question enables sorting", () => {
    const interactive = renderToStaticMarkup(
      createElement(
        SortableMarkdownTable,
        { sortable: true },
        ...tableChildren()
      )
    )
    const staticTable = renderToStaticMarkup(
      createElement(SortableMarkdownTable, null, ...tableChildren())
    )

    expect(interactive).toContain("aria-sort=\"none\"")
    expect(interactive).toContain("aria-label=\"Sort by Revenue\"")
    expect(interactive).toContain("<button")
    expect(staticTable).not.toContain("<button")
  })

  it("upgrades the actual GFM table tree produced by react-markdown", () => {
    const markdown = [
      "| Company | Revenue |",
      "|---|---:|",
      "| Beta | 95 |",
      "| Alpha | 120 |",
    ].join("\n")
    const html = renderToStaticMarkup(
      createElement(
        ReactMarkdown,
        {
          remarkPlugins: [remarkGfm],
          components: {
            table: ({ children }) =>
              createElement(
                SortableMarkdownTable,
                { sortable: true },
                children
              ),
          },
        },
        markdown
      )
    )

    expect(html).toContain("aria-label=\"Sort by Company\"")
    expect(html).toContain("aria-label=\"Sort by Revenue\"")
    expect(html).toContain("<tbody><tr><td")
  })
})
