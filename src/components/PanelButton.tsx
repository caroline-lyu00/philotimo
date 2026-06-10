'use client'

import React from 'react'

type Variant = 'default' | 'primary' | 'danger'

const styles: Record<Variant, string> = {
  default:
    'border border-[#e0e0e0] bg-white text-gray-800 hover:bg-[#eff6ff] hover:border-blue-600',
  primary: 'border border-blue-600 bg-blue-600 text-white hover:bg-blue-700',
  danger:
    'border border-red-200 text-red-600 hover:bg-red-50 hover:border-red-200',
}

interface PanelButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant
  block?: boolean
}

export function PanelButton({
  variant = 'default',
  block = true,
  className = '',
  children,
  ...props
}: PanelButtonProps) {
  return (
    <button
      {...props}
      className={[
        'text-xs font-medium rounded-md cursor-pointer transition-colors',
        block ? 'block w-full text-left px-3 py-2 mb-1.5' : 'inline-block px-5 py-2 text-[13px] font-semibold mb-0',
        styles[variant],
        className,
      ].join(' ')}
    >
      {children}
    </button>
  )
}
