
import React from 'react'

type Status = 'running' | 'failed' | 'idle' | 'debug' | 'success' | 'cancelled'

const styles: Record<Status, string> = {
  running:   'bg-blue-100 text-blue-800',
  failed:    'bg-red-100 text-red-800',
  idle:      'bg-gray-100 text-gray-600',
  debug:     'bg-yellow-100 text-yellow-800',
  success:   'bg-green-100 text-green-800',
  cancelled: 'bg-gray-100 text-gray-500',
}

export function StatusPill({ status }: { status: Status }) {
  return (
    <span className={`inline-block text-xs px-2 py-0.5 rounded font-medium ${styles[status]}`}>
      {status}
    </span>
  )
}
