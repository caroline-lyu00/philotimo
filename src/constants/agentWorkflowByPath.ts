/** Copy for the shared “AI agent workflow” panel, keyed by Next.js route pathname. */
export type AgentWorkflowCopy = {
  /** One line: what the agent is doing in this skill context */
  headline: string
  /** Optional extra context under the headline */
  subline?: string
  /** Sample / placeholder lines shown until a live agent stream is wired */
  idleLines: string[]
}

export const AGENT_WORKFLOW_BY_PATH: Record<string, AgentWorkflowCopy> = {
  '/vm-creation': {
    headline:
      'The agent runs the vm-creation skill: collects hypervisor, SSH, and profile inputs, then calls MCP tools to create and verify the VM.',
    subline: 'Live transcript will stream here from the Cursor agent (tool calls, stdout, errors).',
    idleLines: [
      '[agent] idle — submit the form to simulate a run, or connect an agent session to stream real output.',
      '[planned] create_kvm_vm_over_ssh / create_hyperv_vm_over_ssh → attach GPU → report VM IP.',
    ],
  },
  '/docker-match': {
    headline:
      'The agent resolves the correct ROCm Docker image for your build and host OS (docker-image-match workflow).',
    subline: 'Stream will show MCP queries (host OS detection, image list) and the final tag recommendation.',
    idleLines: [
      '[agent] idle — click Query to refresh table data; agent transcript appears here when integrated.',
      '[planned] run_ssh_command → get_dockers_by_build_string → filter by framework family.',
    ],
  },
  '/ansible': {
    headline:
      'The agent prepares inventory and extra-vars, runs Ansible over SSH, and surfaces play recap in this panel.',
    subline: 'ansible-playbook output and agent narration will stream below.',
    idleLines: [
      '[agent] idle — wire Cursor agent / subprocess to stream playbook -vv here.',
      '[planned] confirm playbook path, limits, and check mode before apply.',
    ],
  },
  '/trigger-test-plan': {
    headline:
      'The agent maps NE test names to qa-forge workflows, collects docker choices, and dispatches GitHub Actions.',
    subline: 'You will see dispatch payloads, workflow URLs, and run IDs as the agent works.',
    idleLines: [
      '[agent] idle — after “Confirm dispatch”, agent steps (resolve workflows → trigger_workflow_qa_forge) stream here.',
      '[planned] poll run status and link back to this workspace.',
    ],
  },
  '/coverage': {
    headline:
      'The agent queries coverage / NE data for the selected build and summarizes gaps vs Jira.',
    subline: 'Table results stay in Output; long queries and SQL/MCP traces appear here.',
    idleLines: [
      '[agent] idle — connect rastra / DB MCP to stream query + interpretation.',
      '[planned] highlight unmapped failures and suggest owners.',
    ],
  },
  '/triage': {
    headline:
      'The agent runs failure-analysis or perf-regression scripts, writes artifacts under the run directory, and narrates progress.',
    subline: 'This panel is the primary place to watch a long triage job.',
    idleLines: [
      '[agent] idle — triage subprocess stdout/stderr and agent tool calls will stream here.',
      '[planned] link to tickets/<test>_PREFILLED.md as files appear.',
    ],
  },
  '/log-fetcher': {
    headline:
      'The agent resolves job IDs, pulls logs from CI, and optionally filters stack traces for you.',
    subline: 'Download progress and log tail will show in this stream.',
    idleLines: [
      '[agent] idle — connect log-fetcher MCP / APIs to stream retrieval steps.',
      '[planned] open large logs in Log viewer mode without blocking the UI.',
    ],
  },
  '/jira': {
    headline:
      'The agent runs jira_search / jira_get_issue with approved project scope and formats results.',
    subline: 'JQL construction, pagination, and comment threads appear here as the agent works.',
    idleLines: [
      '[agent] idle — select a row to simulate detail fetch; live agent uses Atlassian MCP.',
      '[planned] respect ROCM, AISQA, AITESTAUTO, PLAT project limits from guidelines.',
    ],
  },
}

export const DEFAULT_AGENT_WORKFLOW: AgentWorkflowCopy = {
  headline: 'When this skill is driven by a Cursor agent, its tool calls, reasoning, and subprocess output stream here.',
  subline: 'UI-only mode: wire the agent client to replace these placeholder lines.',
  idleLines: ['[agent] idle — no active workflow.', '[system] Connect an agent session to populate this panel.'],
}
