'use client'

import React, { useState } from 'react'
import { ActionButton } from '@/components/ActionButton'
import { OutputBox } from '@/components/OutputBox'
import { createVm } from './vmCreation.api'
import { Hypervisor, VmCreationResult, VmProfile } from './vmCreation.types'

const VM_PROFILES: VmProfile[] = ['1VF Navi32', '2VF Navi32', 'BigVM (2 GPU passthrough)']

export default function VmCreationPage() {
  const [hypervisor, setHypervisor] = useState<Hypervisor>('KVM')
  const [host, setHost] = useState('')
  const [sshUsername, setSshUsername] = useState('')
  const [privateKeyPath, setPrivateKeyPath] = useState('')
  const [usePassword, setUsePassword] = useState(false)
  const [sshPassword, setSshPassword] = useState('')
  const [vmProfile, setVmProfile] = useState<VmProfile>('2VF Navi32')
  const [vmName, setVmName] = useState('')
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<VmCreationResult | null>(null)
  const [streamLines, setStreamLines] = useState<string[]>([])

  async function handleCreate() {
    setLoading(true)
    setResult(null)
    setStreamLines(['$ Connecting to host...', '$ Running VM creation tool...'])
    const data = await createVm({ hypervisor, host, sshUsername, privateKeyPath, usePassword, sshPassword, vmProfile, vmName })
    setStreamLines((l) => [...l, `$ VM created successfully — IP: ${data.vmIp}`])
    setResult(data)
    setLoading(false)
  }

  return (
    <div className="max-w-5xl">
      <h1 className="text-xl font-bold mb-6">VM Creation</h1>

      <div className="flex gap-6 items-start">

        {/* Left: form */}
        <div className="w-72 shrink-0 border border-gray-200 rounded-lg p-4 bg-gray-50 flex flex-col gap-4">

          <div>
            <label className="block text-xs font-semibold text-gray-500 mb-2">Hypervisor</label>
            <div className="flex gap-4">
              {(['KVM', 'Hyper-V'] as Hypervisor[]).map((h) => (
                <label key={h} className="flex items-center gap-1.5 text-sm cursor-pointer">
                  <input
                    type="radio"
                    name="hypervisor"
                    checked={hypervisor === h}
                    onChange={() => setHypervisor(h)}
                  />
                  {h}
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-500 mb-1">Host (SSH target)</label>
            <input
              value={host}
              onChange={(e) => setHost(e.target.value)}
              placeholder="conductor node hostname"
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm bg-white"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-500 mb-1">SSH Username</label>
            <input
              value={sshUsername}
              onChange={(e) => setSshUsername(e.target.value)}
              placeholder="username"
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm bg-white"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-500 mb-1">Private Key Path</label>
            <input
              value={privateKeyPath}
              onChange={(e) => setPrivateKeyPath(e.target.value)}
              placeholder="path to private key"
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm bg-white"
            />
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-md px-3 py-2">
            <label className="flex items-center gap-2 text-xs text-yellow-800 cursor-pointer">
              <input
                type="checkbox"
                checked={usePassword}
                onChange={(e) => setUsePassword(e.target.checked)}
              />
              Use SSH password instead
            </label>
            {usePassword && (
              <input
                type="password"
                value={sshPassword}
                onChange={(e) => setSshPassword(e.target.value)}
                placeholder="SSH password"
                className="mt-2 w-full border border-yellow-300 rounded-md px-3 py-1.5 text-sm bg-white"
              />
            )}
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-500 mb-1">VM Profile</label>
            <select
              value={vmProfile}
              onChange={(e) => setVmProfile(e.target.value as VmProfile)}
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm bg-white"
            >
              {VM_PROFILES.map((p) => <option key={p}>{p}</option>)}
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-500 mb-1">VM Name</label>
            <input
              value={vmName}
              onChange={(e) => setVmName(e.target.value)}
              placeholder="vm name"
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm bg-white"
            />
          </div>

          <ActionButton label={loading ? 'Creating…' : 'Create VM'} onClick={handleCreate} />

          <p className="text-[10px] text-gray-400 leading-relaxed">
            Calls: <code>create_kvm_vm_over_ssh</code> / <code>create_hyperv_vm_over_ssh</code>,
            optionally <code>attach_kvm_amd_gpu_over_ssh</code>, <code>configure_amd_gim_vf_over_ssh</code>,{' '}
            <code>get_kvm_vm_ip_over_ssh</code>.
          </p>
        </div>

        {/* Right: output */}
        <div className="flex-1">
          <OutputBox modes={['Stream', 'Table']} primaryMode="Stream">
            <div className="flex flex-col gap-4">

              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold text-gray-600">Agent stream</span>
                  <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${loading ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-500'}`}>
                    {loading ? '● running' : '● idle'}
                  </span>
                </div>
                <div className="bg-[#1e1e1e] rounded-lg p-3 font-mono text-xs text-[#d4d4d4] min-h-[140px] leading-relaxed">
                  {streamLines.length === 0
                    ? <span className="text-gray-500 italic">Fill the form and click Create VM.</span>
                    : streamLines.map((line, i) => <div key={i}>{line}</div>)
                  }
                  {loading && <span className="inline-block w-2 h-3 bg-gray-400 animate-pulse ml-1 align-middle" />}
                </div>
              </div>

              {result && (
                <div>
                  <div className="text-xs font-semibold text-gray-600 mb-2">MCP results</div>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { label: 'Tool', value: result.tool },
                      { label: 'VM IP', value: result.vmIp },
                      { label: 'GPU attach', value: result.gpuAttach },
                    ].map(({ label, value }) => (
                      <div key={label} className="border border-gray-200 rounded-md p-2 bg-gray-50 text-xs">
                        <div className="text-gray-400 text-[10px] mb-1">{label}</div>
                        <div className="font-mono text-gray-700 break-all">{value}</div>
                      </div>
                    ))}
                  </div>
                  <p className="text-[10px] text-gray-400 mt-2">No run directory — ephemeral MCP responses only.</p>
                </div>
              )}

            </div>
          </OutputBox>
        </div>

      </div>
    </div>
  )
}
