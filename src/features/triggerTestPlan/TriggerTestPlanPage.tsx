'use client'

import React, { useState } from 'react'
import { FormCheckbox, FormField, FormInput, FormSelect } from '@/components/FormField'
import { PanelButton } from '@/components/PanelButton'
import { OutputBox, OutputSection } from '@/components/OutputBox'
import { ContextPanel, MainPanel, SectionHeading, SkillLayout } from '@/components/SkillLayout'
import { SkillPage } from '@/components/SkillPage'
import { TerminalOutput } from '@/components/TerminalOutput'
import {
  DISPATCH_PREVIEW,
  DOCKER_IMAGE_FIELDS,
  TRIGGER_BUILDS,
  TRIGGER_HOSTS,
} from './triggerTestPlan.mock'

export function TriggerTestPlanPage() {
  const [confirmed, setConfirmed] = useState(false)

  return (
    <SkillPage>
      <SkillLayout variant="twoColumn">
        <ContextPanel>
          <FormField label="Host">
            <FormSelect defaultValue={TRIGGER_HOSTS[0]}>
              {TRIGGER_HOSTS.map((h) => (
                <option key={h}>{h}</option>
              ))}
            </FormSelect>
          </FormField>

          <FormField label="Build">
            <FormSelect defaultValue={TRIGGER_BUILDS[0]}>
              {TRIGGER_BUILDS.map((b) => (
                <option key={b}>{b}</option>
              ))}
            </FormSelect>
          </FormField>

          <FormField label="NE / Ignored Tests" hint="(from coverage)">
            <div className="border border-[#d0d0d0] rounded-[5px] max-h-[110px] overflow-y-auto p-1.5 bg-white text-[11px] text-gray-600">
              NE_and_Ignored testnames from get_coverage_ne_and_unmapped (SKILL.md L57)
            </div>
          </FormField>

          <SectionHeading hint="(by framework shape)">Docker Images</SectionHeading>
          {DOCKER_IMAGE_FIELDS.map((field) => (
            <FormField key={field} label={field}>
              <FormSelect>
                <option>(user-selected {field.toLowerCase()})</option>
              </FormSelect>
            </FormField>
          ))}

          <FormField label="triggered_by">
            <FormInput defaultValue="bsarwari" placeholder="optional" />
          </FormField>

          <FormField label="execution_label">
            <FormInput defaultValue="sqa-core-nightly" />
          </FormField>

          <div className="mt-2">
            <FormCheckbox
              label="I've reviewed the dispatch preview"
              checked={confirmed}
              onChange={(e) => setConfirmed(e.target.checked)}
            />
          </div>

          <PanelButton
            variant="primary"
            disabled={!confirmed}
            className={!confirmed ? 'opacity-50 cursor-not-allowed mt-2' : 'mt-2'}
          >
            Launch Dispatch{' '}
            {!confirmed && (
              <span className="text-[10px] text-gray-300 font-normal">
                (check confirm to enable)
              </span>
            )}
          </PanelButton>
        </ContextPanel>

        <MainPanel>
          <OutputBox modes={['Table', 'External', 'Stream']} primaryMode="External" noTopMargin>
            <OutputSection label="Dispatch preview" hint="(Table — before confirm)">
              <table className="w-full border-collapse text-sm mt-1">
                <thead>
                  <tr>
                    {['#', 'testname(s)', 'workflow', 'shape', 'docker family', 'inputs preview'].map(
                      (h) => (
                        <th
                          key={h}
                          className="text-left text-[11px] uppercase tracking-wide text-gray-400 font-semibold px-3 py-2 border-b-2 border-gray-200"
                        >
                          {h}
                        </th>
                      ),
                    )}
                  </tr>
                </thead>
                <tbody>
                  {DISPATCH_PREVIEW.map((row) => (
                    <tr key={row.num} className="border-b border-gray-100">
                      <td className="px-3 py-2.5">{row.num}</td>
                      <td className="px-3 py-2.5">{row.testname}</td>
                      <td className="px-3 py-2.5 text-[11px]">{row.workflow}</td>
                      <td className="px-3 py-2.5">{row.shape}</td>
                      <td className="px-3 py-2.5">{row.dockerFamily}</td>
                      <td className="px-3 py-2.5 text-[11px]">{row.inputsPreview}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </OutputSection>

            <OutputSection
              label="GHA status"
              hint="(External — primary after dispatch; poll GitHub Actions)"
            >
              <table className="w-full border-collapse text-sm mt-1">
                <thead>
                  <tr>
                    {['Workflow', 'server_request_id', 'Run URL', 'Status', 'Un-triggerable'].map(
                      (h) => (
                        <th
                          key={h}
                          className="text-left text-[11px] uppercase tracking-wide text-gray-400 font-semibold px-3 py-2 border-b-2 border-gray-200"
                        >
                          {h}
                        </th>
                      ),
                    )}
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td colSpan={5} className="px-3 py-2.5 text-xs text-gray-400">
                      After dispatch: poll via get_recent_runs_qa_forge + get_workflow_run_status_qa_forge
                      (SKILL.md L167). Progress lives on GitHub, not local disk.
                    </td>
                  </tr>
                </tbody>
              </table>
            </OutputSection>

            <OutputSection
              label="MCP trace"
              hint="(Stream — secondary; trigger_workflow_qa_forge calls)"
              compact
            >
              <TerminalOutput
                title="Dispatch log"
                placeholder="Agent logs trigger_workflow_qa_forge calls here after Launch."
                compact
              />
            </OutputSection>
          </OutputBox>
        </MainPanel>
      </SkillLayout>
    </SkillPage>
  )
}
