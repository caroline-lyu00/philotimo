export const JIRA_DEFAULT_JQL =
  'text ~ "hipStreamTest.StreamSync" AND project IN (ROCM, AISQA, AITESTAUTO, PLAT)'

export const JIRA_RESULTS = [
  { key: 'ROCM-XXXX', summary: '(from jira_search results)', status: '—' },
  { key: 'ROCM-YYYY', summary: 'Sample regression ticket for hipStream', status: 'Open' },
  { key: 'AISQA-1234', summary: 'Nightly failure on smci350-rck-04', status: 'In Progress' },
]
