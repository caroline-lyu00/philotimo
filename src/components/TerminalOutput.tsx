'use client'

import React from 'react'

type TerminalStatus = 'idle' | 'running'

export function TerminalOutput({
  lines,
  status = 'idle',
  title = 'Agent stream',
  placeholder,
  compact = false,
}: {
  lines?: string[]
  status?: TerminalStatus
  title?: string
  placeholder?: string
  compact?: boolean
}) {
  return (
    <div>
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-xs font-semibold">{title}</span>
        <span
          className={`text-[11px] px-2 py-0.5 rounded-full ${
            status === 'running'
              ? 'bg-green-100 text-green-800'
              : 'bg-gray-100 text-gray-500'
          }`}
        >
          ● {status}
        </span>
      </div>
      <div
        className={`bg-[#1e1e1e] rounded-lg p-3 font-mono text-xs text-[#d4d4d4] overflow-y-auto leading-relaxed ${
          compact ? 'min-h-[80px] max-h-[120px] text-[11px]' : 'min-h-[180px]'
        }`}
      >
        {lines && lines.length > 0 ? (
          lines.map((line, i) => <div key={i}>{line}</div>)
        ) : (
          <div className="text-gray-500 italic text-[11px]">{placeholder ?? 'Waiting…'}</div>
        )}
      </div>
    </div>
  )
}

export function CommandPreview({ command }: { command: string }) {
  return (
    <div className="mt-3 px-3 py-2 bg-[#1e1e1e] rounded-md font-mono text-[10px] text-gray-400 break-all">
      <span className="text-gray-500">$</span>{' '}
      <span className="text-[#d4d4d4]">{command}</span>
    </div>
  )
}
