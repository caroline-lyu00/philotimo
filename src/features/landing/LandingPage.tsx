
import React from 'react'
import { SkillCard, SkillColumn } from '@/components/OutputBox'
import { LANDING_GROUPS, OUTPUT_TAXONOMY } from './landing.mock'

export function LandingPage() {
  return (
    <div>
      <div className="bg-white rounded-xl border border-[#e0e0e0] p-10 text-center">
        <div className="text-[22px] font-bold mb-1.5">Philtimo</div>
        <div className="text-[13px] text-gray-400 mb-8">Select a skill to get started</div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[800px] mx-auto text-left">
          {LANDING_GROUPS.map((group) => (
            <SkillColumn
              key={group.title}
              step={group.step}
              title={group.title}
              accent={group.accent}
            >
              {group.skills.map((skill) => (
                <SkillCard key={skill.href} {...skill} accent={group.accent} />
              ))}
            </SkillColumn>
          ))}
        </div>
      </div>

      <div className="flex gap-2 flex-wrap justify-center mt-4 text-[10px] text-gray-500">
        {OUTPUT_TAXONOMY.map((item) => (
          <span key={item.label} className="px-2 py-1 rounded bg-gray-100">
            <strong>{item.label}</strong> — {item.text}
          </span>
        ))}
      </div>
    </div>
  )
}
