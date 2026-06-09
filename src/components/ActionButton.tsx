'use client'

import React from 'react'

export function ActionButton({ label, onClick }: { label: string; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="px-6 py-2 bg-blue-600 text-white text-sm font-semibold rounded-md hover:bg-blue-700 transition-colors"
    >
      {label}
    </button>
  )
}


// <ActionButton label="Fetch" onClick={handleFetch} />
