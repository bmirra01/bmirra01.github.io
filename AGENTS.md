# AGENTS.md

This is the single source of truth for AI agent context and guidelines in this repository.

## Project Overview

Personal portfolio site built with React, TypeScript, and Vite. Deployed via GitHub Actions to GitHub Pages.

## Tech Stack

- **Framework:** React 18 + TypeScript
- **Bundler:** Vite
- **Styling:** CSS (index.css)
- **Deployment:** GitHub Actions → GitHub Pages

## Project Structure

```
src/
  pages/        # Route-level page components (Home, Now, NotFound)
  components/   # Reusable UI components
  sections/     # Layout/page section components
  hooks/        # Custom React hooks
  assets/       # Static assets
.github/
  workflows/    # CI/CD pipelines
  agents/       # Agent definition files
  instructions/ # Shared instruction files for agents
```

## Conventions

- Use functional components with TypeScript
- Keep pages in `src/pages/`, reusable UI in `src/components/`
- Line endings: LF (enforced via `.gitattributes`)

## Agents

Agent definitions live in `.github/agents/`. Add entries below as agents are created.

> Add agent entries here as they are created.

<!--
Example entry:

### agent-name
**File:** `.github/agents/agent-name.md`
**Purpose:** Short description of what this agent does.
-->
