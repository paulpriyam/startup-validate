# AGENTS.md

Guidelines for AI agents working in this repository.

## Repository Overview

This repository contains the `india-startup-validator` skill for Kilo. 

- **Name**: India Startup Validator
- **Category**: Validation / Design
- **Target Market**: India

## Repository Structure

```
india-startup-validator-skill/
├── README.md
├── LICENSE
├── CONTRIBUTING.md
├── AGENTS.md
├── kilo.json
├── package.json                       # Optional npx installer metadata
├── pyproject.toml                     # Optional uvx installer metadata
├── bin/
│   └── install.js                     # Copies the skill into a Kilo skills directory
├── src/
│   └── india_startup_validator_skill/
│       ├── __init__.py
│       └── install.py                 # uvx installer entry point
├── skills/
│   └── india-startup-validator/
│       ├── SKILL.md                       # Main skill file (9 phases)
│       └── references/                    # Supporting documents loaded on demand
│           ├── honesty-protocol.md
│           ├── intake-questions.md
│           ├── india-market-research.md
│           ├── india-regulatory-screen.md
│           ├── india-customer-discovery.md
│           ├── india-distribution-channels.md
│           ├── india-unit-economics.md
│           ├── india-funding-and-execution.md
│           ├── validation-experiments.md
│           ├── scoring-rubric.md
│           ├── verification-checklist.md
│           └── output-templates.md
└── evals/
    ├── evals.json
    └── eval-metadata.json
```

## Key Conventions

### Skill Format
- `SKILL.md` uses YAML frontmatter with `name` and `description` fields.
- `name` must match the directory name exactly (`india-startup-validator`).
- Keep `SKILL.md` under 500 lines; move details to `references/`.
- References are loaded progressively (only when needed for the current phase).

### Honesty Protocol
- AI agents must adhere to the `honesty-protocol.md`.
- Label all claims: **[Data]**, **[Estimate]**, **[Assumption]**, **[Opinion]**, **[Founder-reported]**, **[Knowledge-Based]**.
- Do not provide legal advice; always include regulatory caveats.

### India Specificity
- Every phase of the validation must explicitly address how the Indian context (city tiers, language, payments, regulations) affects the startup idea.

### Git Workflow
- Follow conventional commits: `feat:`, `fix:`, `docs:`, `test:`.
- Branch naming: `feature/description`, `fix/description`, `docs/description`.
