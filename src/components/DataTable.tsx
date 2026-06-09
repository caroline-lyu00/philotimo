'use client'

import React from 'react'

interface Column<T> {
  header: string
  render: (row: T) => React.ReactNode
}

interface DataTableProps<T> {
  columns: Column<T>[]
  rows: T[]
  onRowClick?: (row: T) => void
}

export function DataTable<T>({ columns, rows, onRowClick }: DataTableProps<T>) {
  return (
    <table className="w-full border-collapse text-sm">
      <thead>
        <tr>
          {columns.map((col) => (
            <th key={col.header} className="text-left text-xs uppercase tracking-wide text-gray-400 font-semibold px-3 py-2 border-b-2 border-gray-200">
              {col.header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, i) => (
          <tr
            key={i}
            onClick={() => onRowClick?.(row)}
            className={`border-b border-gray-100 hover:bg-gray-50 ${onRowClick ? 'cursor-pointer' : ''}`}
          >
            {columns.map((col) => (
              <td key={col.header} className="px-3 py-2.5">
                {col.render(row)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}
