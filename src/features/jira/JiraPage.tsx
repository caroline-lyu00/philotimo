'use client'

import React, { useState } from 'react'
import { FormField, FormInput } from '@/components/FormField'
import { FormPanel } from '@/components/FormPanel'
import { DetailPanel, OutputBox } from '@/components/OutputBox'
import { MainPanel, SectionHeading, SkillLayout } from '@/components/SkillLayout'
import { PanelButton } from '@/components/PanelButton'
import { SkillPage } from '@/components/SkillPage'
import { JIRA_DEFAULT_JQL, JIRA_RESULTS } from './jira.mock'

export function JiraPage() {
  const [selectedKey, setSelectedKey] = useState(JIRA_RESULTS[0].key)

  return (
    <SkillPage>
      <SkillLayout variant="splitWide">
        <MainPanel className="border-r border-[#e0e0e0]">
          <FormPanel className="mb-4">
            <FormField label="JQL Query" className="mb-2.5">
              <FormInput
                type="text"
                defaultValue={JIRA_DEFAULT_JQL}
                placeholder="JQL for jira_search"
                className="py-2"
              />
            </FormField>
            <PanelButton variant="primary" block={false} className="px-5 mb-0">
              Search
            </PanelButton>
            <p className="mt-2.5 text-[11px] text-gray-400">
              Projects limited to ROCM, AISQA, AITESTAUTO, PLAT (GeneralGuidelines.md L15).
            </p>
          </FormPanel>

          <OutputBox modes={['Table', 'Document']} primaryMode="Table" bodyClassName="p-0">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr>
                  {['Key', 'Summary', 'Status'].map((h) => (
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
                {JIRA_RESULTS.map((row) => (
                  <tr
                    key={row.key}
                    onClick={() => setSelectedKey(row.key)}
                    className={`border-b border-gray-100 cursor-pointer hover:bg-gray-50 ${
                      selectedKey === row.key ? 'bg-blue-50' : ''
                    }`}
                  >
                    <td className="px-3 py-2.5 font-semibold text-blue-600">{row.key}</td>
                    <td className="px-3 py-2.5 text-xs">{row.summary}</td>
                    <td className="px-3 py-2.5 text-xs">{row.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </OutputBox>
        </MainPanel>

        <div className="p-5 bg-[#fafbfc]">
          <DetailPanel>
            <p className="text-[11px] text-gray-600 mb-3 leading-relaxed">
              Select a row → <code>jira_get_issue(issue_key, include_comments=true)</code>{' '}
              (server.py L454). Rendered issue fields + comments.
            </p>
            {selectedKey && (
              <div className="mb-3 p-3 border border-[#e0e0e0] rounded-md bg-white text-xs">
                <div className="font-semibold text-blue-600 mb-1">{selectedKey}</div>
                <div className="text-gray-600">
                  {JIRA_RESULTS.find((r) => r.key === selectedKey)?.summary}
                </div>
              </div>
            )}
            <SectionHeading>Related: triage artifacts</SectionHeading>
            <p className="text-[11px] text-gray-600 leading-relaxed">
              Failure script writes <code>tickets/&lt;test&gt;_PREFILLED.md</code> under triage run dir
              — surfaced on Triage page, not here.
            </p>
          </DetailPanel>
        </div>
      </SkillLayout>
    </SkillPage>
  )
}
