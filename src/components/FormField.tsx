'use client'

import React from 'react'

interface FormFieldProps {
  label: React.ReactNode
  hint?: string
  className?: string
  children: React.ReactNode
}

export function FormField({ label, hint, className = '', children }: FormFieldProps) {
  return (
    <div className={`mb-3.5 ${className}`}>
      <label className="block text-[11px] font-semibold text-[#555] mb-1">
        {label}
        {hint && <span className="font-normal text-gray-400"> {hint}</span>}
      </label>
      {children}
    </div>
  )
}

const inputClass =
  'w-full px-2.5 py-1.5 border border-[#d0d0d0] rounded-[5px] text-xs bg-white focus:outline-none focus:border-blue-500'

export function FormInput(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return <input {...props} className={`${inputClass} ${props.className ?? ''}`} />
}

export function FormSelect(props: React.SelectHTMLAttributes<HTMLSelectElement>) {
  return <select {...props} className={`${inputClass} ${props.className ?? ''}`} />
}

export function FormCheckbox({
  label,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & { label: React.ReactNode }) {
  return (
    <label className="flex items-center gap-1.5 text-xs py-0.5 cursor-pointer">
      <input type="checkbox" {...props} className="m-0" />
      {label}
    </label>
  )
}

export function FormRadioGroup({
  name,
  options,
  defaultValue,
}: {
  name: string
  options: { value: string; label: string }[]
  defaultValue?: string
}) {
  return (
    <div className="flex gap-2.5">
      {options.map((opt) => (
        <label key={opt.value} className="text-[11px] flex items-center gap-1 cursor-pointer">
          <input
            type="radio"
            name={name}
            value={opt.value}
            defaultChecked={opt.value === defaultValue}
            className="m-0"
          />
          {opt.label}
        </label>
      ))}
    </div>
  )
}
