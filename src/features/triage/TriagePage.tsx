'use client'

import React from 'react'
import { ArtifactCard, ArtifactStrip } from '@/components/ArtifactCard'
import { FormField, FormInput, FormSelect } from '@/components/FormField'
import { FormPanel } from '@/components/FormPanel'
import { PanelButton } from '@/components/PanelButton'
import { OutputBox, OutputSection, RunDirBanner } from '@/components/OutputBox'
import { SkillPage, SkillPageBody } from '@/components/SkillPage'
import { CommandPreview, TerminalOutput } from '@/components/TerminalOutput'
import {
  TRIAGE_ARTIFACTS,
  TRIAGE_COMMAND,
  TRIAGE_RUN_DIR,
} from './triage.mock'

export function TriagePage() {
  return (
    <SkillPage>
      <SkillPageBody>
        <FormPanel className="mb-4">
          <div className="flex gap-4 items-end flex-wrap">
            <FormField label="Task" className="mb-0 min-w-[240px]">
              <FormSelect className="py-2 text-[13px]">
                <option value="failure">Failure Analysis & Mapping</option>
                <option value="perf">Performance Drop / Regression Analysis</option>
              </FormSelect>
            </FormField>
            <FormField label="Build" className="mb-0 min-w-[160px]">
              <FormInput placeholder="7.12.0-792" className="py-2 text-[13px]" />
            </FormField>
            <FormField label="Build B" hint="(perf only)" className="mb-0 min-w-[160px]">
              <FormInput placeholder="newer build" className="py-2 text-[13px]" />
            </FormField>
            <FormField label="Hostname" className="mb-0 min-w-[160px]">
              <FormInput placeholder="host" className="py-2 text-[13px]" />
            </FormField>
            <FormField label="Repository" className="mb-0 min-w-[140px]">
              <FormSelect className="py-2 text-[13px]">
                <option>TheRock</option>
                <option>rockrel</option>
              </FormSelect>
            </FormField>
            <FormField label="Type" hint="(failure only)" className="mb-0 min-w-[140px]">
              <FormSelect className="py-2 text-[13px]">
                <option>functional</option>
                <option>performance</option>
                <option>both</option>
              </FormSelect>
            </FormField>
            <PanelButton variant="primary" block={false} className="mb-0 px-7">
              Run
            </PanelButton>
          </div>

          <div className="mt-3.5 grid grid-cols-1 md:grid-cols-2 gap-3">
            <FormField label="SSH Username" className="mb-0">
              <FormInput placeholder="username" className="py-2" />
            </FormField>
            <FormField label="Private Key Path" hint="or password below" className="mb-0">
              <FormInput placeholder="private key path" className="py-2" />
            </FormField>
          </div>

          <FormField label="SSH Password" hint="(failure only, if not using key)" className="mt-2.5 mb-0">
            <FormInput type="password" placeholder="optional" className="py-2" />
          </FormField>

          <CommandPreview command={TRIAGE_COMMAND} />
        </FormPanel>

        <OutputBox modes={['Document', 'Stream']} primaryMode="Document">
          <RunDirBanner path={TRIAGE_RUN_DIR} />

          <OutputSection
            label="Deliverables"
            hint="(primary — open / preview after run completes)"
          >
            <ArtifactStrip>
              {TRIAGE_ARTIFACTS.map((a) => (
                <ArtifactCard key={a.label} {...a} />
              ))}
            </ArtifactStrip>
            <div className="border border-[#e0e0e0] rounded-md p-3 bg-[#fafbfc] text-[11px] text-gray-500 min-h-[80px]">
              Report preview pane — rendered markdown/html from run dir
              (failure_jira_mapping_overview.md L450–454).
            </div>
          </OutputSection>

          <OutputSection
            label="Progress"
            hint="(secondary — run.py / langgraph subprocess)"
            compact
          >
            <TerminalOutput
              title="run.py stream"
              placeholder="Fill the form and click Run. Cursor presents the command; Claude may execute directly (per skill guidance)."
              compact
            />
          </OutputSection>
        </OutputBox>
      </SkillPageBody>
    </SkillPage>
  )
}
