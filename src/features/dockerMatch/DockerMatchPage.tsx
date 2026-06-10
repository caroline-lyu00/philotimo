'use client'

import React, { useState } from 'react'
import { ActionButton } from '@/components/ActionButton'
import { DataTable } from '@/components/DataTable'
import { OutputBox } from '@/components/OutputBox'
import { queryDockerImages } from './dockerMatch.api'
import { DockerImage } from './dockerMatch.types'

const columns = [
  { header: 'Framework family', render: (row: DockerImage) => row.framework },
  { header: 'Docker tag',       render: (row: DockerImage) => (
    <code className="text-xs font-mono">{row.tag}</code>
  )},
]

export default function DockerMatchPage() {
  const [build, setBuild] = useState('7.13.0-1347')
  const [host, setHost] = useState('smci350-rck-04')
  const [framework, setFramework] = useState<'PyTorch' | 'JAX' | 'TensorFlow' | 'VLLM' | 'SGLang' | ''>('')
  const [results, setResults] = useState<DockerImage[]>([])
  const [loading, setLoading] = useState(false)

  async function handleQuery() {
    setLoading(true)
    const data = await queryDockerImages({
      build,
      host,
      framework: framework || undefined,
    })
    setResults(data)
    setLoading(false)
  }

  return (
    <div className="max-w-3xl">
      <h1 className="text-xl font-bold mb-6">Docker Match</h1>

      <div className="border border-gray-200 rounded-lg p-4 bg-gray-50 mb-4">
        <div className="flex gap-4 items-end flex-wrap">

          <div>
            <label className="block text-xs font-semibold text-gray-500 mb-1">Build</label>
            <select value={build} onChange={(e) => setBuild(e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-2 text-sm bg-white">
              <option>7.13.0-1347</option>
              <option>7.12.0-792</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-500 mb-1">Host</label>
            <select value={host} onChange={(e) => setHost(e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-2 text-sm bg-white">
              <option>smci350-rck-04</option>
              <option>ctr-navi4x-am48-ws06</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-500 mb-1">Framework</label>
            <select value={framework} onChange={(e) => setFramework(e.target.value as any)}
              className="border border-gray-300 rounded-md px-3 py-2 text-sm bg-white">
              <option value="">All</option>
              <option>PyTorch</option>
              <option>VLLM</option>
              <option>JAX</option>
              <option>TensorFlow</option>
              <option>SGLang</option>
            </select>
          </div>

          <ActionButton label={loading ? 'Loading…' : 'Query'} onClick={handleQuery} />

        </div>
      </div>

      {results.length > 0 && (
        <OutputBox modes={['Table']} primaryMode="Table">
          <DataTable columns={columns} rows={results} />
        </OutputBox>
      )}
    </div>
  )
}
