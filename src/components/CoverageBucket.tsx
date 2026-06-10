'use client'

import React from 'react'

type BucketVariant = 'fail' | 'ne' | 'ok' | 'run'

const headerStyles: Record<BucketVariant, string> = {
  fail: 'bg-red-50 text-red-900 border-red-200',
  ne: 'bg-gray-100 text-gray-700 border-gray-200',
  ok: 'bg-green-50 text-green-900 border-green-200',
  run: 'bg-blue-50 text-blue-900 border-blue-200',
}

export function CoverageBucket({
  title,
  count,
  variant,
  children,
}: {
  title: string
  count: string
  variant: BucketVariant
  children: React.ReactNode
}) {
  return (
    <div className="mb-4">
      <div
        className={`text-xs font-bold px-2.5 py-1.5 rounded-t-md flex justify-between items-center border border-b-0 ${headerStyles[variant]}`}
      >
        <span>{title}</span>
        <span className="text-[11px] font-semibold opacity-80">{count}</span>
      </div>
      <div className="border border-[#e0e0e0] rounded-b-md overflow-hidden">
        {children}
      </div>
    </div>
  )
}

export function BucketPlaceholder({ children }: { children: React.ReactNode }) {
  return (
    <div className="px-3 py-2.5 text-xs text-gray-500">{children}</div>
  )
}
