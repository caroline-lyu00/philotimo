
import React from 'react'

export function FormPanel({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div
      className={`border border-[#e0e0e0] rounded-lg p-4 md:p-5 bg-[#fafbfc] ${className}`}
    >
      {children}
    </div>
  )
}
