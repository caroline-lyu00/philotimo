'use client'

import React from 'react'
import { FormField, FormInput } from '@/components/FormField'
import { FormPanel } from '@/components/FormPanel'
import { LogViewer } from '@/components/LogViewer'
import { PanelButton } from '@/components/PanelButton'
import { OutputBox } from '@/components/OutputBox'
import { SkillPage, SkillPageBody } from '@/components/SkillPage'

export function LogFetcherPage() {
  return (
    <SkillPage>
      <SkillPageBody>
        <FormPanel className="mb-4">
          <FormField label="Log URL" className="mb-3">
            <FormInput
              type="url"
              placeholder="https://artifactory... or qa-forge temporary log link"
              className="py-2 text-[13px]"
            />
          </FormField>
          <PanelButton variant="primary" block={false} className="px-6 mb-0">
            Fetch
          </PanelButton>
          <p className="mt-2 text-[11px] text-gray-400">
            <code>fetch_log(url)</code> — mcp_server_log_fetcher/server.py L39–77: &lt;1 MB full file;
            ≥1 MB last ~10,000 lines (automatic).
          </p>
        </FormPanel>

        <OutputBox modes={['Log viewer']} primaryMode="Log viewer">
          <LogViewer />
          <p className="mt-2 text-[10px] text-gray-400">
            Ephemeral — returned string from fetch_log; not written to run dir unless user saves.
          </p>
        </OutputBox>
      </SkillPageBody>
    </SkillPage>
  )
}
