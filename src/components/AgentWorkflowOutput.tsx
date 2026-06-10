'use client'

import React from 'react'
import { usePathname } from 'next/navigation'
import { AGENT_WORKFLOW_BY_PATH, DEFAULT_AGENT_WORKFLOW } from '@/constants/agentWorkflowByPath'
import { TerminalOutput } from '@/components/TerminalOutput'

/** Shown on every skill page: where the executing AI agent’s workflow output will stream. */
export function AgentWorkflowOutput({ showTopBorder = true }: { showTopBorder?: boolean }) {
  const pathname = usePathname() ?? ''
  if (pathname === '/' || pathname === '') return null

  const copy = AGENT_WORKFLOW_BY_PATH[pathname] ?? DEFAULT_AGENT_WORKFLOW

  return (
    <div
      className={[
        'bg-[#fafbfc] px-5 py-4',
        showTopBorder ? 'border-t border-[#e0e0e0]' : '',
      ].join(' ')}
    >
      <div className="text-[11px] font-bold uppercase tracking-wide text-gray-500 mb-1">
        AI agent workflow
      </div>
      <p className="text-[12px] text-gray-700 leading-snug mb-1">{copy.headline}</p>
      {copy.subline && (
        <p className="text-[11px] text-gray-500 leading-snug mb-3">{copy.subline}</p>
      )}
      <TerminalOutput
        title="Agent output stream"
        status="idle"
        lines={copy.idleLines}
        compact={false}
        placeholder="Waiting for agent session…"
      />
    </div>
  )
}
