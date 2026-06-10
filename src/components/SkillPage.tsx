import React from 'react'
import { AgentWorkflowOutput } from '@/components/AgentWorkflowOutput'

export function SkillPage({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-white rounded-xl border border-[#e0e0e0] overflow-hidden">
      {children}
      <AgentWorkflowOutput />
    </div>
  )
}

export function SkillPageBody({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) {
  return <div className={`p-5 ${className}`}>{children}</div>
}
