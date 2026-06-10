'use client'

import React from 'react'

export function LogViewer({
  placeholder = 'Log contents appear here after Fetch.',
  truncated = false,
  lines,
}: {
  placeholder?: string
  truncated?: boolean
  lines?: string[]
}) {
  return (
    <>
      {truncated && (
        <div className="bg-yellow-100 border border-yellow-300 rounded-md px-3 py-2 text-[11px] text-yellow-900 mb-2">
          Large file — showing last ~10,000 lines only.
        </div>
      )}
      <div className="bg-[#1e1e1e] rounded-lg p-3 font-mono text-[11px] text-[#d4d4d4] min-h-[280px] max-h-[480px] overflow-y-auto leading-relaxed">
        {lines && lines.length > 0 ? (
          lines.map((line, i) => <div key={i}>{line}</div>)
        ) : (
          <div className="text-gray-400 font-sans text-xs">{placeholder}</div>
        )}
      </div>
    </>
  )
}
