
import React from 'react'

type LayoutVariant = 'threeColumn' | 'twoColumn' | 'splitWide'

const gridClass: Record<LayoutVariant, string> = {
  threeColumn: 'grid grid-cols-1 lg:grid-cols-[260px_1fr_220px] min-h-[420px]',
  twoColumn: 'grid grid-cols-1 lg:grid-cols-[300px_1fr] min-h-[380px]',
  splitWide: 'grid grid-cols-1 lg:grid-cols-[1fr_340px] min-h-[480px]',
}

export function SkillLayout({
  variant,
  children,
}: {
  variant: LayoutVariant
  children: React.ReactNode
}) {
  return <div className={gridClass[variant]}>{children}</div>
}

export function ContextPanel({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div
      className={`border-r border-[#e0e0e0] p-4 bg-[#fafbfc] flex flex-col ${className}`}
    >
      {children}
    </div>
  )
}

export function MainPanel({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) {
  return <div className={`p-4 ${className}`}>{children}</div>
}

export function SidePanel({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div className={`border-l border-[#e0e0e0] p-4 bg-[#fafbfc] ${className}`}>
      {children}
    </div>
  )
}

export function SectionHeading({
  children,
  hint,
}: {
  children: React.ReactNode
  hint?: React.ReactNode
}) {
  return (
    <div className="text-[11px] uppercase tracking-wide text-gray-400 mb-2 font-semibold">
      {children}
      {hint && (
        <span className="font-normal normal-case text-gray-400"> {hint}</span>
      )}
    </div>
  )
}
