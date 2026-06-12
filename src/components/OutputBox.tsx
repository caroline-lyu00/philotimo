
import React from 'react'
import Link from 'next/link'

export type OutputMode = 'Stream' | 'Table' | 'Document' | 'External' | 'Log viewer'

interface OutputBoxProps {
  modes: OutputMode[]
  primaryMode: OutputMode
  children: React.ReactNode
  className?: string
  bodyClassName?: string
  noTopMargin?: boolean
}

export function OutputBox({
  modes,
  primaryMode,
  children,
  className = '',
  bodyClassName = '',
  noTopMargin = false,
}: OutputBoxProps) {
  return (
    <div
      className={[
        'border border-[#e0e0e0] rounded-lg bg-white overflow-hidden',
        noTopMargin ? '' : 'mt-4',
        className,
      ].join(' ')}
    >
      <div className="flex justify-between items-center px-3.5 py-2.5 bg-[#f8f9fa] border-b border-[#e0e0e0]">
        <span className="text-xs font-bold uppercase tracking-wide text-gray-700">
          Output
        </span>
        <div className="flex gap-1.5 flex-wrap">
          {modes.map((mode) => (
            <span
              key={mode}
              className={[
                'text-[10px] px-2 py-0.5 rounded-full font-semibold border',
                mode === primaryMode
                  ? 'bg-blue-100 text-blue-800 border-blue-300'
                  : 'bg-gray-100 text-gray-500 border-gray-200',
              ].join(' ')}
            >
              {mode}
            </span>
          ))}
        </div>
      </div>
      <div className={`p-3.5 ${bodyClassName}`}>{children}</div>
    </div>
  )
}

export function DetailPanel({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div
      className={`border border-[#e0e0e0] rounded-lg bg-white overflow-hidden ${className}`}
    >
      <div className="flex justify-between items-center px-3.5 py-2.5 bg-[#f8f9fa] border-b border-[#e0e0e0]">
        <span className="text-xs font-bold uppercase tracking-wide text-gray-700">
          Detail
        </span>
        <span className="text-[10px] px-2 py-0.5 rounded-full font-semibold border bg-blue-100 text-blue-800 border-blue-300">
          Document
        </span>
      </div>
      <div className="p-3.5">{children}</div>
    </div>
  )
}

export function OutputSection({
  label,
  hint,
  compact,
  children,
}: {
  label: string
  hint?: string
  compact?: boolean
  children: React.ReactNode
}) {
  return (
    <div className={`${compact ? '' : 'mb-3.5'} last:mb-0`}>
      <div className="text-[10px] font-semibold uppercase tracking-wide text-gray-400 mb-1.5">
        {label}
        {hint && (
          <span className="font-normal normal-case text-gray-400"> {hint}</span>
        )}
      </div>
      {children}
    </div>
  )
}

export function RunDirBanner({ path }: { path: string }) {
  return (
    <div className="text-[10px] text-gray-400 font-mono mb-2.5 px-2 py-1.5 bg-gray-50 rounded">
      Run dir: {path}
    </div>
  )
}

export function SkillCard({
  icon,
  title,
  description,
  href,
  accent = 'blue',
}: {
  icon: string
  title: string
  description: string
  href: string
  accent?: 'blue' | 'green' | 'amber'
}) {
  const hover: Record<string, string> = {
    blue: 'hover:border-blue-600 hover:bg-[#f8faff]',
    green: 'hover:border-green-500 hover:bg-green-50',
    amber: 'hover:border-amber-500 hover:bg-amber-50',
  }

  return (
    <Link
      href={href}
      className={[
        'border-2 border-[#e0e0e0] rounded-lg p-3 flex items-center gap-2.5 transition-colors h-[96px] overflow-hidden',
        hover[accent],
      ].join(' ')}
    >
      <div className="text-lg shrink-0">{icon}</div>
      <div className="min-w-0">
        <div className="text-xs font-semibold">{title}</div>
        <div className="text-[10px] text-gray-400">{description}</div>
      </div>
    </Link>
  )
}

export function SkillColumn({
  step,
  title,
  accent,
  children,
}: {
  step: number
  title: string
  accent: 'blue' | 'green' | 'amber'
  children: React.ReactNode
}) {
  const stepColor = {
    blue: 'bg-blue-600',
    green: 'bg-green-500',
    amber: 'bg-amber-500',
  }

  return (
    <div>
      <div className="flex items-center gap-2 mb-3.5">
        <div
          className={`w-[22px] h-[22px] rounded-full ${stepColor[accent]} text-white text-[11px] font-bold flex items-center justify-center`}
        >
          {step}
        </div>
        <div className="text-[13px] font-bold">{title}</div>
      </div>
      <div className="flex flex-col gap-2">{children}</div>
    </div>
  )
}
