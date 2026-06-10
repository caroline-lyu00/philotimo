export const COVERAGE_HOSTS = ['smci350-rck-04', 'ctr-navi4x-am48-ws06', 'corsair-rock']
export const COVERAGE_BUILDS = ['7.13.0-1347', '7.13.0-1340', '7.12.0-792']

export const FAIL_UNMAPPED_ROW = {
  testname: '(testname)',
  category: 'Func',
  workflowRun: '(matched_workflow_run_on_system)',
  status: 'completed',
  result: 'failure' as const,
}

export const IGNORE_ROW = {
  testname: '(testname)',
  category: 'Func',
  workflowRun: '—',
  status: 'completed',
  result: 'IGNORE' as const,
}
