export const LANDING_GROUPS = [
  {
    step: 1,
    title: 'Setup',
    accent: 'blue' as const,
    skills: [
      {
        icon: '🖥',
        title: 'VM Creation',
        description: 'Create & manage VMs',
        href: '/vm-creation',
        purpose:
          'Provision ROCm test hosts on KVM or Hyper-V without hand-running every SSH and GPU attach step.',
        capabilities: [
          'Collect hypervisor, SSH, VM profile, and name; validate before touching infrastructure.',
          'Invoke MCP tools to create the VM, attach AMD GPU / GIM VF where applicable, and read back the VM IP.',
          'Stream agent + tool output so you can audit what ran on the conductor.',
        ],
      },
      {
        icon: '📦',
        title: 'Docker Match',
        description: 'Find images for build',
        href: '/docker-match',
        purpose:
          'Pick the correct ROCm Docker image tag for a given build string and host OS family.',
        capabilities: [
          'Detect host OS over SSH and map to docker_os (e.g. Ubuntu 22.04 vs 24.04).',
          'Filter published images for the build; exclude internal_testing / develop-upstream style tags.',
          'Return framework rows (PyTorch, VLLM, JAX, etc.) the agent can feed into test-plan dispatch.',
        ],
      },
      {
        icon: '⚙',
        title: 'Ansible',
        description: 'Run playbooks',
        href: '/ansible',
        purpose:
          'Apply standardized playbooks to lab machines (packages, drivers, users) with reviewable output.',
        capabilities: [
          'Point the agent at inventory, playbook path, limits, and extra-vars.',
          'Run check mode first when requested, then apply; capture recap and failures.',
          'Surface stdout/stderr in the agent stream and structured “changed / failed” summary.',
        ],
      },
    ],
  },
  {
    step: 2,
    title: 'Deploy & Execute',
    accent: 'green' as const,
    skills: [
      {
        icon: '🚀',
        title: 'Trigger Test Plan',
        description: 'Dispatch NE workflows',
        href: '/trigger-test-plan',
        purpose:
          'Turn a host + ROCm build into the right set of qa-forge GitHub Actions for NE / ignored coverage.',
        capabilities: [
          'Resolve NE test names to workflow files via Github-ROCmSQA MCP.',
          'Ask for PyTorch / JAX / VLLM / SGLang docker selections when workflow inputs require them.',
          'Dispatch workflows and return run URLs so you can monitor in GitHub or downstream dashboards.',
        ],
      },
      {
        icon: '📋',
        title: 'Coverage & NE',
        description: 'Test coverage lookup',
        href: '/coverage',
        purpose:
          'See which tests are Not Executed or lack coverage mapping for a build, and tie that back to ownership.',
        capabilities: [
          'Query coverage / NE tables for a build (and optional host / bucket filters).',
          'Highlight gaps and suggest follow-up (Jira, dispatch, or config fixes).',
          'Export or summarize results for status reports.',
        ],
      },
    ],
  },
  {
    step: 3,
    title: 'Monitor & Triage',
    accent: 'amber' as const,
    skills: [
      {
        icon: '🔍',
        title: 'Triage',
        description: 'Failure & regression',
        href: '/triage',
        purpose:
          'Run failure-analysis or performance-regression workflows and collect artifacts under a single run directory.',
        capabilities: [
          'Drive rastra / DB queries and map failures to known Jira issues.',
          'Write markdown / CSV artifacts (e.g. pre-filled tickets) under SQA_Workspace_Cursor.',
          'Stream long-running scripts so you can abort or retry safely.',
        ],
      },
      {
        icon: '📄',
        title: 'Log Fetcher',
        description: 'Fetch & view logs',
        href: '/log-fetcher',
        purpose:
          'Pull CI job logs by job id or URL and inspect them without leaving Philotimo.',
        capabilities: [
          'Resolve job coordinates, download logs, and tail large files in chunks.',
          'Filter for stack traces or known error signatures the agent recognizes.',
          'Link out to the upstream CI system when a browser view is still needed.',
        ],
      },
      {
        icon: '🎫',
        title: 'Jira',
        description: 'Search tickets (jira_search)',
        href: '/jira',
        purpose:
          'Search and read Jira within approved ROCm QA projects so agents stay inside policy.',
        capabilities: [
          'Run JQL via jira_search with project allow-list (ROCM, AISQA, AITESTAUTO, PLAT).',
          'Open an issue with jira_get_issue including comments for triage context.',
          'Keep table + detail panes in sync as the agent refines queries.',
        ],
      },
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
