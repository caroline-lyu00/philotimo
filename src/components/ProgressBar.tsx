
import React from 'react'

export function ProgressBar({ percent }: { percent: number }) {
  return (
    <div className="h-1 bg-gray-200 rounded overflow-hidden mt-1">
      <div
        className="h-full bg-blue-600 rounded"
        style={{ width: `${Math.min(100, Math.max(0, percent))}%` }}
      />
    </div>
  )
}
