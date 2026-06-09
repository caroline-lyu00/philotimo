# philotimo

Web interface for the ROCm QA group.

## Features

- **VM Creation** — guided VM provisioning workflow
- **Triage** — failure analysis and Jira ticket mapping for test results
- **Trigger Test Plan** — dispatch qa-forge workflows for a host and build
- **Coverage NE** — surface NE / unmapped failures for a given build
- **Docker Match** — find the right Docker image for a build
- **Log Fetcher** — fetch and inspect CI job logs
- **Jira** — search and update Jira tickets
- **Ansible** — run Ansible playbooks against remote hosts

## Project structure

```
src/
  app/          # Entry point, providers, router
  components/   # Shared UI components
  features/     # One folder per page/feature
  lib/          # HTTP client, streaming client, config
```
