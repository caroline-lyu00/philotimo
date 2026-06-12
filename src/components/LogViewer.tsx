
import React from 'react'

export function LogViewer({
  placeholder = 'Log contents appear here after Fetch.',
  truncated = false,
  lines,
  filename,
}: {
  placeholder?: string
  truncated?: boolean
  lines?: string[]
  filename?: string
}) {
  const hasContent = lines && lines.length > 0

  return (
    <div className="rounded-lg border border-[#d0d0d0] overflow-hidden">
      {/* log chrome bar */}
      <div className="flex items-center justify-between px-3 py-1.5 bg-[#f3f4f6] border-b border-[#d0d0d0]">
        <div className="flex items-center gap-2">
          <span className="text-[10px] font-mono text-black-500">
            {filename ?? 'job-logs.txt'}
          </span>
          {truncated && (
            <span className="text-[9px] px-1.5 py-0.5 rounded bg-yellow-100 text-yellow-800 border border-yellow-300">
              last ~10k lines
            </span>
          )}
        </div>
        {hasContent && (
          <span className="text-[9px] text-black-400">
            {lines!.length.toLocaleString()} lines
          </span>
        )}
      </div>

      {/* log body */}
      <div className="bg-white font-mono text-[11px] text-black-800 min-h-[280px] max-h-[840px] overflow-y-auto leading-relaxed">
        {hasContent ? (
          lines!.map((line, i) => (
            <div key={i} className="flex hover:bg-blue-50 transition-colors">
              <span className="select-none text-black-300 w-12 shrink-0 text-right px-2 py-px border-r border-[#e8e8e8] bg-[#fafafa]">
                {i + 1}
              </span>
              <span className="px-3 py-px break-all">{line}</span>
            </div>
          ))
        ) : (
          <div className="p-3 text-gray-400 font-sans text-xs italic">{placeholder}</div>
        )}
      </div>
    </div>
  )
}
