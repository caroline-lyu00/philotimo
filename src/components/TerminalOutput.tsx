'use client'

import React from 'react'

type TerminalStatus = 'idle' | 'running'

export function TerminalOutput({ lines, status = 'idle' }: { lines: string[], status?: TerminalStatus }) {
  return (
    <div>
      <div className="flex justify-between items-center mb-2">
        <span className="text-xs font-semibold">Agent stream</span>
        <span className={`text-xs px-2 py-0.5 rounded-full ${status === 'running' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-500'}`}>
          ● {status}
        </span>
      </div>
      <div className="bg-[#1e1e1e] rounded-lg p-3 font-mono text-xs text-[#d4d4d4] min-h-[180px] overflow-y-auto leading-relaxed">
        {lines.length === 0
          ? <span className="text-gray-500 italic">Waiting…</span>
          : lines.map((line, i) => <div key={i}>{line}</div>)
        }
      </div>
    </div>
  )
}
