'use client'

import React from 'react'

type OutputMode = 'Stream' | 'Table' | 'Document' | 'External' | 'Log viewer'

interface OutputBoxProps {
  modes: OutputMode[]
  primaryMode: OutputMode
  children: React.ReactNode
}

export function OutputBox({ modes, primaryMode, children }: OutputBoxProps) {
  return (
    <div className="border border-gray-200 rounded-lg bg-white overflow-hidden mt-4">
      <div className="flex justify-between items-center px-3.5 py-2.5 bg-gray-50 border-b border-gray-200">
        <span className="text-xs font-bold uppercase tracking-wide text-gray-700">Output</span>
        <div className="flex gap-1.5 flex-wrap">
          {modes.map((mode) => (
            <span
              key={mode}
              className={`text-xs px-2 py-0.5 rounded-full font-semibold border ${
                mode === primaryMode
                  ? 'bg-blue-100 text-blue-800 border-blue-300'
                  : 'bg-gray-100 text-gray-500 border-gray-200'
              }`}
            >
              {mode}
            </span>
          ))}
        </div>
      </div>
      <div className="p-3.5">{children}</div>
    </div>
  )
}
