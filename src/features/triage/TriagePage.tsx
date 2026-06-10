'use client'

import { useState } from 'react'
import { SkillPage, SkillPageBody } from '@/components/SkillPage'
import { PanelButton } from '@/components/PanelButton'

const TASKS = ['Failure Analysis & Mapping', 'Performance Drop / Regression Analysis']
const BUILDS = ['7.14.0-20260604', '7.14.0-20260601', '7.13.0-1347', '7.12.0-792']
const HOSTS = ['v710-2vf-vm1', 'smci350-rck-04', 'ctr-navi4x-am48-ws06']

export function TriagePage() {
  const [task, setTask] = useState(TASKS[0])
  const [build, setBuild] = useState(BUILDS[0])
  const [host, setHost] = useState(HOSTS[0])
  const [lines, setLines] = useState<string[]>([])
  const [running, setRunning] = useState(false)

  const command = `$ script_name.sh --build_number ${build} --host_name ${host}`

  async function handleRun() {
    setRunning(true)
    setLines([
      'Select a task, build, and host below, then click Run to execute the script.',
      '',
      `Output from script_name.sh will stream here in real time...`,
    ])
    await new Promise((r) => setTimeout(r, 1800))
    setLines((l) => [...l, '', '✓ Script completed successfully.'])
    setRunning(false)
  }

  return (
    <SkillPage>
      <SkillPageBody>

        {/* Terminal output — top */}
        <div className="mb-4">
          <div className="flex items-center justify-between mb-1">
            <span className="text-xs font-bold text-gray-600 uppercase tracking-wide">Script Output</span>
            <span className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${running ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-400'}`}>
              {running ? '● running' : '● idle'}
            </span>
          </div>
          <div className="bg-[#1a1a2e] rounded-lg p-4 font-mono text-xs text-[#c8c8d4] min-h-[220px] leading-relaxed">
            {lines.length === 0 ? (
              <>
                <div className="text-gray-500 italic">Select a task, build, and host below, then click Run to execute the script.</div>
                <div className="mt-2 text-gray-600 italic">Output from script_name.sh will stream here in real time...</div>
              </>
            ) : (
              lines.map((line, i) => <div key={i}>{line || <br />}</div>)
            )}
            {running && <span className="inline-block w-2 h-3 bg-gray-400 animate-pulse ml-0.5 align-middle" />}
          </div>
        </div>

        {/* Form panel — below terminal */}
        <div className="border border-gray-200 rounded-lg p-4 bg-gray-50 mb-3">
          <div className="flex gap-4 items-end flex-wrap">
            <div>
              <label className="block text-xs font-semibold text-gray-500 mb-1">Task</label>
              <select
                value={task}
                onChange={(e) => setTask(e.target.value)}
                className="border border-gray-300 rounded-md px-3 py-2 text-sm bg-white min-w-[220px]"
              >
                {TASKS.map((t) => <option key={t}>{t}</option>)}
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-500 mb-1">Build Select</label>
              <select
                value={build}
                onChange={(e) => setBuild(e.target.value)}
                className="border border-gray-300 rounded-md px-3 py-2 text-sm bg-white min-w-[160px]"
              >
                {BUILDS.map((b) => <option key={b}>{b}</option>)}
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-500 mb-1">Host Select</label>
              <select
                value={host}
                onChange={(e) => setHost(e.target.value)}
                className="border border-gray-300 rounded-md px-3 py-2 text-sm bg-white min-w-[160px]"
              >
                {HOSTS.map((h) => <option key={h}>{h}</option>)}
              </select>
            </div>

            <PanelButton variant="primary" block={false} className="px-8" onClick={handleRun} disabled={running}>
              {running ? 'Running…' : 'Run'}
            </PanelButton>
          </div>
        </div>

        {/* Command preview bar */}
        <div className="bg-[#1a1a2e] rounded-md px-4 py-2.5 font-mono text-xs text-[#c8c8d4]">
          {command}
        </div>

      </SkillPageBody>
    </SkillPage>
  )
}
