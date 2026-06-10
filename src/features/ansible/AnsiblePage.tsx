'use client'

import React from 'react'
import { SkillPage, SkillPageBody } from '@/components/SkillPage'

export function AnsiblePage() {
  return (
    <SkillPage>
      <SkillPageBody>
        <div className="flex flex-col items-center justify-center py-24 px-6 text-center">
          <div className="text-5xl mb-6 opacity-30">⚙</div>
          <span className="inline-block text-[11px] px-3 py-1 rounded-full bg-amber-100 text-amber-700 font-semibold mb-4 tracking-wide uppercase">
            Coming Soon
          </span>
          <h2 className="text-xl font-bold text-gray-700 mb-2">Ansible</h2>
          <p className="text-sm text-gray-400 max-w-sm leading-relaxed">
            This page is under construction. Ansible playbook support is on the roadmap for the Markham QA Team.
          </p>
        </div>
      </SkillPageBody>
    </SkillPage>
  )
}
