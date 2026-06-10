export const LANDING_GROUPS = [
  {
    step: 1,
    title: 'Setup',
    accent: 'blue' as const,
    skills: [
      { icon: '🖥', title: 'VM Creation', description: 'Create & manage VMs', href: '/vm-creation' },
      { icon: '📦', title: 'Docker Match', description: 'Find images for build', href: '/docker-match' },
      { icon: '⚙', title: 'Ansible', description: 'Run playbooks', href: '/ansible' },
    ],
  },
  {
    step: 2,
    title: 'Deploy & Execute',
    accent: 'green' as const,
    skills: [
      { icon: '🚀', title: 'Trigger Test Plan', description: 'Dispatch NE workflows', href: '/trigger-test-plan' },
      { icon: '📋', title: 'Coverage & NE', description: 'Test coverage lookup', href: '/coverage' },
    ],
  },
  {
    step: 3,
    title: 'Monitor & Triage',
    accent: 'amber' as const,
    skills: [
      { icon: '🔍', title: 'Triage', description: 'Failure & regression', href: '/triage' },
      { icon: '📄', title: 'Log Fetcher', description: 'Fetch & view logs', href: '/log-fetcher' },
      { icon: '🎫', title: 'Jira', description: 'Search tickets (jira_search)', href: '/jira' },
    ],
  },
]

export const OUTPUT_TAXONOMY = [
  { label: 'Output shell', text: 'same labeled panel on every skill page' },
  { label: 'Stream', text: 'long-running agent / subprocess' },
  { label: 'Table', text: 'instant MCP query results' },
  { label: 'Document', text: 'files under SQA_Workspace_Cursor run dir' },
  { label: 'External', text: 'GitHub Actions / Jira web' },
]
