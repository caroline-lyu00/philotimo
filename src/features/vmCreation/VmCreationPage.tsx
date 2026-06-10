'use client'

import React from 'react'
import { ArtifactCard, ArtifactStrip } from '@/components/ArtifactCard'
import {
  FormCheckbox,
  FormField,
  FormInput,
  FormRadioGroup,
  FormSelect,
} from '@/components/FormField'
import { PanelButton } from '@/components/PanelButton'
import { OutputBox, OutputSection } from '@/components/OutputBox'
import { ContextPanel, SectionHeading, SkillLayout } from '@/components/SkillLayout'
import { SkillPage } from '@/components/SkillPage'
import { TerminalOutput } from '@/components/TerminalOutput'
import { VM_ARTIFACTS, VM_PROFILES, VM_TERMINAL_PLACEHOLDER } from './vmCreation.mock'

export function VmCreationPage() {
  return (
    <SkillPage>
      <SkillLayout variant="threeColumn">
        <ContextPanel>
          <SectionHeading hint="(agent collects per vm-creation + GeneralGuidelines)">
            Inputs
          </SectionHeading>

          <FormField label="Hypervisor">
            <FormRadioGroup
              name="hv-type"
              defaultValue="kvm"
              options={[
                { value: 'kvm', label: 'KVM' },
                { value: 'hyperv', label: 'Hyper-V' },
              ]}
            />
          </FormField>

          <FormField label="Host (SSH target)">
            <FormInput placeholder="conductor node hostname" />
          </FormField>

          <FormField label="SSH Username">
            <FormInput placeholder="username" />
          </FormField>

          <FormField label="Private Key Path" className="mb-1.5">
            <FormInput placeholder="path to private key" className="text-[11px]" />
          </FormField>

          <div className="px-1.5 py-1 bg-yellow-100 border border-yellow-200 rounded mb-3">
            <FormCheckbox
              label={
                <>
                  Use SSH password instead{' '}
                  <span className="text-yellow-700">(run_ssh_command accepts password or key)</span>
                </>
              }
            />
          </div>

          <FormField label="VM Profile">
            <FormSelect defaultValue="2VF Navi32">
              {VM_PROFILES.map((p) => (
                <option key={p}>{p}</option>
              ))}
            </FormSelect>
          </FormField>

          <FormField label="VM Name">
            <FormInput placeholder="vm name" />
          </FormField>

          <PanelButton variant="primary" block className="py-2.5 text-[13px]">
            Create VM
          </PanelButton>

          <p className="mt-2 text-[10px] text-gray-400 leading-snug">
            Agent calls VM MCP tools:{' '}
            <code className="text-[10px]">create_kvm_vm_over_ssh</code> /{' '}
            <code className="text-[10px]">create_hyperv_vm_over_ssh</code>, optionally{' '}
            <code className="text-[10px]">attach_kvm_amd_gpu_over_ssh</code>,{' '}
            <code className="text-[10px]">configure_amd_gim_vf_over_ssh</code>,{' '}
            <code className="text-[10px]">get_kvm_vm_ip_over_ssh</code>.
          </p>
        </ContextPanel>

        <div className="lg:col-span-2 p-4 flex flex-col">
          <OutputBox modes={['Stream', 'Table']} primaryMode="Stream" noTopMargin className="flex-1 flex flex-col">
            <OutputSection label="Progress" hint="(primary)">
              <TerminalOutput placeholder={VM_TERMINAL_PLACEHOLDER} />
            </OutputSection>

            <OutputSection label="MCP results" hint="(structured strip after tool calls)">
              <ArtifactStrip>
                {VM_ARTIFACTS.map((a) => (
                  <ArtifactCard key={a.label} {...a} />
                ))}
              </ArtifactStrip>
              <p className="text-[10px] text-gray-400">
                No run directory — ephemeral MCP responses only unless user saves logs.
              </p>
            </OutputSection>
          </OutputBox>
        </div>
      </SkillLayout>
    </SkillPage>
  )
}
