---
name: Installing imported Next.js projects
description: Resolving package-firewall and root-workspace friction when setting up imported Next.js projects.
---

When a locked Next.js tarball is denied by the package registry, check whether a newer compatible release is available and install through the configured package manager. In a root-only pnpm workspace, a package-name filter may not match any project; use an explicit workspace-root install instead. Do not bypass the registry. Newer Next.js dev servers may generate `AGENTS.md` automatically and recreate it if removed.

**Why:** In this environment, an older locked Next.js archive returned 403 while the current compatible release installed successfully; the workspace had no filterable package entries, and Next dev generated its agent-rules file.

**How to apply:** Use this when an imported Next.js project cannot install from its lockfile. Make the smallest necessary dependency update, install using pnpm's supported root/workspace syntax, and verify the dev server and generated files afterward.
