'use client'

import React from 'react'
import { BucketPlaceholder, CoverageBucket } from '@/components/CoverageBucket'
import { FormField, FormSelect } from '@/components/FormField'
import { FormPanel } from '@/components/FormPanel'
import { JobTag } from '@/components/JobTag'
import { PanelButton } from '@/components/PanelButton'
import { OutputBox } from '@/components/OutputBox'
import { SkillPage, SkillPageBody } from '@/components/SkillPage'
import {
  COVERAGE_BUILDS,
  COVERAGE_HOSTS,
  FAIL_UNMAPPED_ROW,
  IGNORE_ROW,
} from './coverageNe.mock'

function BucketTable({
  rows,
  showLogSnippet = false,
}: {
  rows: Array<{
    testname: string
    category: string
    workflowRun: string
    status: string
    result: 'failure' | 'IGNORE'
  }>
  showLogSnippet?: boolean
}) {
  return (
    <table className="w-full border-collapse text-sm">
      <thead>
        <tr>
          {['Testname', 'Category', 'Workflow run', 'Status', 'Result', ''].map((h) => (
            <th
              key={h || 'action'}
              className="text-left text-[11px] uppercase tracking-wide text-gray-400 font-semibold px-3 py-2 border-b-2 border-gray-200"
            >
              {h}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => (
          <tr key={row.testname} className="border-b border-gray-100 hover:bg-gray-50">
            <td className="px-3 py-2.5 font-semibold">{row.testname}</td>
            <td className="px-3 py-2.5">{row.category}</td>
            <td className="px-3 py-2.5 text-[11px]">{row.workflowRun}</td>
            <td className="px-3 py-2.5">{row.status}</td>
            <td className="px-3 py-2.5">
              <JobTag variant={row.result === 'failure' ? 'failed' : 'debug'}>
                {row.result === 'failure' ? 'failure' : 'IGNORE'}
              </JobTag>
            </td>
            <td className="px-3 py-2.5">
              {showLogSnippet && (
                <PanelButton block={false} className="px-2 py-0.5 text-[10px] mb-0">
                  Log snippet
                </PanelButton>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export function CoverageNePage() {
  return (
    <SkillPage>
      <SkillPageBody>
        <FormPanel className="mb-5">
          <div className="flex gap-4 items-end flex-wrap">
            <FormField label="Host" className="mb-0 min-w-[200px]">
              <FormSelect defaultValue={COVERAGE_HOSTS[0]} className="py-2 text-[13px]">
                <option value="">-- Select host --</option>
                {COVERAGE_HOSTS.map((h) => (
                  <option key={h}>{h}</option>
                ))}
              </FormSelect>
            </FormField>
            <FormField label="Build" className="mb-0 min-w-[180px]">
              <FormSelect defaultValue={COVERAGE_BUILDS[0]} className="py-2 text-[13px]">
                <option value="">-- Select build --</option>
                {COVERAGE_BUILDS.map((b) => (
                  <option key={b}>{b}</option>
                ))}
              </FormSelect>
            </FormField>
            <PanelButton variant="primary" block={false} className="mb-0 px-6">
              Query
            </PanelButton>
          </div>
          <p className="mt-2 text-[11px] text-gray-400">
            Tool: get_coverage_summary (mcp.json L95). Buckets per CoverageAnalysis.md L25–35.
          </p>
        </FormPanel>

        <OutputBox modes={['Table']} primaryMode="Table" bodyClassName="p-0">
          <div className="max-h-[520px] overflow-y-auto p-3.5">
            <CoverageBucket title="Fail, Unmapped" count="3 items" variant="fail">
              <BucketTable rows={[FAIL_UNMAPPED_ROW]} showLogSnippet />
            </CoverageBucket>

            <CoverageBucket title="IGNORE, Unmapped" count="1 item" variant="fail">
              <BucketTable rows={[IGNORE_ROW]} />
            </CoverageBucket>

            <CoverageBucket title="Not Run / NE" count="12 items" variant="ne">
              <BucketPlaceholder>(testname list from Not Run / NE bucket)</BucketPlaceholder>
            </CoverageBucket>

            <CoverageBucket title="in_progress / in_progress" count="2 items" variant="run">
              <BucketPlaceholder>(testname + run_url per CoverageAnalysis.md L44)</BucketPlaceholder>
            </CoverageBucket>

            <CoverageBucket title="queued / queued" count="(n) items" variant="run">
              <BucketPlaceholder>(testname list — CoverageAnalysis.md L34)</BucketPlaceholder>
            </CoverageBucket>

            <CoverageBucket title="completed / failure" count="(n) items" variant="fail">
              <BucketPlaceholder>Mapped failures — click to expand</BucketPlaceholder>
            </CoverageBucket>

            <CoverageBucket title="completed / cancelled" count="(n) items" variant="ne">
              <BucketPlaceholder>Cancelled runs — click to expand</BucketPlaceholder>
            </CoverageBucket>

            <CoverageBucket title="Workflow Not Found" count="(n) items" variant="ne">
              <BucketPlaceholder>
                (testnames with no matching workflow — CoverageAnalysis.md L35)
              </BucketPlaceholder>
            </CoverageBucket>

            <CoverageBucket title="completed / success" count="28 items" variant="ok">
              <BucketPlaceholder>Collapsed — click to expand</BucketPlaceholder>
            </CoverageBucket>
          </div>
        </OutputBox>
      </SkillPageBody>
    </SkillPage>
  )
}
