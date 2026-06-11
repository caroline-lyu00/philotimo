import Link from 'next/link'

const COLUMNS = [
  {
    number: '1',
    color: '#2563eb',
    hoverBorder: 'hover:border-blue-500',
    hoverBg: 'hover:bg-blue-50',
    label: 'Setup',
    skills: [
      { icon: '🖥', title: 'VM Creation',  desc: 'Create or tune VMs over SSH (KVM / Hyper-V).', href: '/vm-creation' },
      { icon: '📦', title: 'Docker Match', desc: 'Find Docker tags for your specific build + host OS.', href: '/docker-match' },
      { icon: '⚙',  title: 'Ansible',      desc: 'Run playbooks',         href: '/ansible', comingSoon: true },
    ],
  },
  {
    number: '2',
    color: '#22c55e',
    hoverBorder: 'hover:border-green-500',
    hoverBg: 'hover:bg-green-50',
    label: 'Deploy & Execute',
    skills: [
      { icon: '🚀', title: 'Trigger Test Plan', desc: 'Find and re-dispatch tests that did not run.', href: '/trigger-test-plan' },
      { icon: '📋', title: 'Coverage & NE',     desc: 'Test coverage lookup',    href: '/coverage' },
    ],
  },
  {
    number: '3',
    color: '#f59e0b',
    hoverBorder: 'hover:border-amber-500',
    hoverBg: 'hover:bg-amber-50',
    label: 'Monitor & Triage',
    skills: [
      { icon: '🔍', title: 'Triage',      desc: 'Compare failure logs to previous tickets / auto-triage.', href: '/triage' },
      { icon: '📄', title: 'Log Fetcher', desc: 'Fetch a log from a URL.', href: '/log-fetcher' },
      { icon: '🎫', title: 'Jira',        desc: 'Search issues / preexisting tickets; open details.', href: '/jira' },
    ],
  },
]

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-2.5rem)] bg-white">
      <div className="bg-white p-10 w-full max-w-5xl text-center">
        <h1 className="text-2xl font-bold mb-1">Philotimo</h1>
        <p className="text-sm text-gray-400 mb-8">AISQA Servers and Skills</p>

        <div className="grid grid-cols-3 gap-6 text-left">
          {COLUMNS.map((col) => (
            <div key={col.number}>
              <div className="flex items-center gap-2 mb-3">
                <div
                  className="w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0"
                  style={{ background: col.color }}
                >
                  {col.number}
                </div>
                <span className="text-sm font-bold">{col.label}</span>
              </div>
              <div className="flex flex-col gap-3">
                {col.skills.map((skill) =>
                  skill.comingSoon ? (
                    <div
                      key={skill.href}
                      className="flex items-start gap-4 border-2 border-gray-100 rounded-xl p-5 bg-gray-50 opacity-40 cursor-not-allowed"
                    >
                      <span className="text-2xl leading-none pt-0.5 grayscale">{skill.icon}</span>
                      <div>
                        <div className="text-sm font-semibold text-gray-400">{skill.title}</div>
                        <div className="text-xs text-gray-400 italic mt-1">Coming soon</div>
                      </div>
                    </div>
                  ) : (
                    <Link
                      key={skill.href}
                      href={skill.href}
                      className={`flex items-start gap-4 border-2 border-gray-200 rounded-xl p-5 transition-colors ${col.hoverBorder} ${col.hoverBg}`}
                    >
                      <span className="text-2xl leading-none pt-0.5">{skill.icon}</span>
                      <div>
                        <div className="text-sm font-semibold">{skill.title}</div>
                        <div className="text-xs text-gray-400 mt-1.5 leading-relaxed">{skill.desc}</div>
                      </div>
                    </Link>
                  )
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
