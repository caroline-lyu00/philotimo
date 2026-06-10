
import React from 'react'

type JobTagVariant = 'running' | 'debug' | 'idle' | 'failed'

const styles: Record<JobTagVariant, string> = {
  running: 'bg-blue-100 text-blue-900',
  debug: 'bg-yellow-100 text-yellow-900',
  idle: 'bg-gray-100 text-gray-500',
  failed: 'bg-red-100 text-red-900',
}

export function JobTag({
  variant,
  children,
}: {
  variant: JobTagVariant
  children: React.ReactNode
}) {
  return (
    <span
      className={`inline-block text-[10px] px-1.5 py-0.5 rounded-sm font-medium ${styles[variant]}`}
    >
      {children}
    </span>
  )
}
