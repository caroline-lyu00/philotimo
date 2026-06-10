'use client'

import React from 'react'

interface ArtifactCardProps {
  label: string
  value: string
  href?: string
}

export function ArtifactCard({ label, value, href }: ArtifactCardProps) {
  return (
    <div className="border border-gray-200 rounded-md px-2.5 py-2 text-xs bg-gray-50">
      <div className="text-gray-400 text-[10px] mb-0.5">{label}</div>
      {href
        ? <a href={href} className="text-blue-600 font-semibold break-all">{value}</a>
        : <div className="font-mono text-[10px] break-all text-gray-700">{value}</div>
      }
    </div>
  )
}

export function ArtifactStrip({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid gap-2 mb-2.5" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))' }}>
      {children}
    </div>
  )
}
