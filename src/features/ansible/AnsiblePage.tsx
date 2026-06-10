'use client'

import React from 'react'
import { SkillPage, SkillPageBody } from '@/components/SkillPage'

export function AnsiblePage() {
  return (
    <SkillPage>
      <SkillPageBody>
        <div className="text-center py-12 px-6 text-gray-500">
          <span className="inline-block text-[11px] px-3 py-1 rounded-full bg-gray-100 text-gray-500 mb-4">
            Coming soon
          </span>
          <h2 className="text-lg text-gray-700 font-semibold mb-2">Ansible</h2>
          <p className="text-sm max-w-md mx-auto leading-relaxed">
            Ansible is available as an agent skill only — a dedicated page layout is not defined in
            the wireframe yet. Use VM Creation or other skills while this page is being designed.
          </p>
        </div>
      </SkillPageBody>
    </SkillPage>
  )
}
