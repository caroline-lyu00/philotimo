export const TRIAGE_COMMAND =
  'python run.py cursor failure --build 7.12.0-792 --hostname HOST --repository TheRock --type functional --username USER --private-key-path KEY ...'

export const TRIAGE_ARTIFACTS = [
  { label: 'Report (md)', value: 'report_<host>_<build>_<type>_<ts>.md', href: '#' },
  { label: 'Report (html)', value: 'report_<host>_<build>_<type>_<ts>.html', href: '#' },
  { label: 'Prefilled tickets', value: 'tickets/<test>_PREFILLED.md' },
]

export const TRIAGE_RUN_DIR =
  '$HOME/SQA_Workspace_Cursor/<run_basename>/ (failure_analysis_and_jira_mapping_langgraph.py L353)'
