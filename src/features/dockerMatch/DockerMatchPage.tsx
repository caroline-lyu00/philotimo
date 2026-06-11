'use client'

import React, { useState } from 'react'
import { FormField, FormSelect } from '@/components/FormField'
import { FormPanel } from '@/components/FormPanel'
import { JobTag } from '@/components/JobTag'
import { PanelButton } from '@/components/PanelButton'
import { OutputBox } from '@/components/OutputBox'
import { SkillPage, SkillPageBody } from '@/components/SkillPage'
import { queryDockerImages } from './dockerMatch.api'
import { DOCKER_BUILDS, DOCKER_HOSTS } from './dockerMatch.mock'
import { DockerImage } from './dockerMatch.types'

type Framework = 'PyTorch' | 'JAX' | 'TensorFlow' | 'VLLM' | 'SGLang' | ''

const FRAMEWORK_OPTIONS: { value: Framework; label: string }[] = [
  { value: '', label: 'All' },
  { value: 'PyTorch', label: 'PyTorch' },
  { value: 'VLLM', label: 'VLLM' },
  { value: 'JAX', label: 'JAX' },
  { value: 'TensorFlow', label: 'TensorFlow' },
  { value: 'SGLang', label: 'SGLang' },
]

function frameworkVariant(framework: string): 'running' | 'idle' {
  return framework === 'PyTorch' || framework === 'VLLM' ? 'running' : 'idle'
}

export default function DockerMatchPage() {
  const [build, setBuild] = useState(DOCKER_BUILDS[0])
  const [host, setHost] = useState(DOCKER_HOSTS[0])
  const [framework, setFramework] = useState<Framework>('')
  const [results, setResults] = useState<DockerImage[]>([])
  const [loading, setLoading] = useState(false)

  async function handleQuery() {
    setLoading(true)
    const data = await queryDockerImages({ build, host, framework: framework || undefined })
    setResults(data)
    setLoading(false)
  }

  return (
    <SkillPage>
      <SkillPageBody>
        <FormPanel className="mb-5">
          <div className="flex gap-4 items-end flex-wrap">
            <FormField label="Build" className="mb-0 min-w-[180px]">
              <FormSelect
                value={build}
                onChange={(e) => setBuild(e.target.value)}
                className="py-2 text-[13px]"
              >
                {DOCKER_BUILDS.map((b) => (
                  <option key={b} value={b}>
                    {b}
                  </option>
                ))}
              </FormSelect>
            </FormField>

            <FormField label="Host (for OS detect)" className="mb-0 min-w-[200px]">
              <FormSelect
                value={host}
                onChange={(e) => setHost(e.target.value)}
                className="py-2 text-[13px]"
              >
                {DOCKER_HOSTS.map((h) => (
                  <option key={h} value={h}>
                    {h}
                  </option>
                ))}
              </FormSelect>
            </FormField>

            <FormField label="Framework" className="mb-0 min-w-[160px]">
              <FormSelect
                value={framework}
                onChange={(e) => setFramework(e.target.value as Framework)}
                className="py-2 text-[13px]"
              >
                {FRAMEWORK_OPTIONS.map((opt) => (
                  <option key={opt.value || 'all'} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </FormSelect>
            </FormField>

            <PanelButton
              variant="primary"
              block={false}
              className="mb-0 px-6"
              onClick={handleQuery}
              disabled={loading}
            >
              {loading ? 'Loading…' : 'Query'}
            </PanelButton>
          </div>

          <p className="mt-2 text-[11px] text-gray-400">
            run_ssh_command for OS → docker_os Ubuntu-24.04 or Ubuntu-22.04 → get_dockers_by_build_string
            (docker-image-match/SKILL.md L7–15).
          </p>
        </FormPanel>

        {results.length > 0 && (
          <OutputBox modes={['Table']} primaryMode="Table" bodyClassName="p-0">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr>
                  {['Framework family', 'Docker tag', 'Notes'].map((h) => (
                    <th
                      key={h}
                      className="text-left text-[11px] uppercase tracking-wide text-gray-400 font-semibold px-3 py-2 border-b-2 border-gray-200"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {results.map((row) => (
                  <tr key={row.tag} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="px-3 py-2.5">
                      <JobTag variant={frameworkVariant(row.framework)}>{row.framework}</JobTag>
                    </td>
                    <td className="px-3 py-2.5 font-mono text-[11px]">{row.tag}</td>
                    <td className="px-3 py-2.5 text-[11px] text-gray-400">—</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </OutputBox>
        )}

        <p className="mt-3 text-[11px] text-gray-400">
          Filtered out: internal_testing, develop-upstream tags
        </p>


      </SkillPageBody>
    </SkillPage>
  )
}
