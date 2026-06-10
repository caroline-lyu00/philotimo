'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const TABS = [
  { label: 'Home',              href: '/' },
  { label: 'VM Creation',       href: '/vm-creation' },
  { label: 'Triage',            href: '/triage' },
  { label: 'Coverage & NE',     href: '/coverage' },
  { label: 'Trigger Test Plan', href: '/trigger-test-plan' },
  { label: 'Docker Match',      href: '/docker-match' },
  { label: 'Ansible',           href: '/ansible' },
  { label: 'Log Fetcher',       href: '/log-fetcher' },
  { label: 'Jira',              href: '/jira' },
]

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  return (
    <div className="min-h-screen flex flex-col">
      {pathname !== '/' && (
        <nav className="bg-white border-b border-gray-200 overflow-x-auto">
          <div className="flex">
            {TABS.map((tab) => {
              const active = pathname === tab.href
              return (
                <Link
                  key={tab.href}
                  href={tab.href}
                  className={[
                    'px-4 py-3 text-xs font-semibold whitespace-nowrap border-b-2 transition-colors',
                    active
                      ? 'text-blue-600 border-blue-600 bg-white'
                      : 'text-gray-500 border-transparent hover:text-blue-600 hover:bg-gray-50',
                  ].join(' ')}
                >
                  {tab.label}
                </Link>
              )
            })}
          </div>
        </nav>
      )}
      <main className={`flex-1 ${pathname === '/' ? '' : 'p-8'}`}>{children}</main>
      <footer className="text-center py-3 text-[10px] text-gray-300 select-none tracking-wide">
        Created by the Markham QA Team
      </footer>
    </div>
  )
}
