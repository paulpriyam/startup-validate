# India Startup Validator Skill for Kilo

An AI agent skill to validate startup ideas specifically for the Indian market.

## Overview

Building a startup in India involves unique challenges: regulatory complexity (RBI, SEBI, GST), diverse customer segments (Tier 1 vs Tier 2/3), specific distribution channels (WhatsApp, ONDC, Kirana), and unit economics constraints. 

This skill provides a structured, multi-phase validation workflow that helps founders decide whether to **Build, Pivot, or Stop**.

## Installation

### 1. One-command Install With npx

Install directly from GitHub:

```bash
npx github:paulpriyam/startup-validate
```

This installs the skill into the current project's `.kilo/skills/india-startup-validator` directory.

To install globally for your user:

```bash
npx github:paulpriyam/startup-validate --global
```

To overwrite an existing installed copy:

```bash
npx github:paulpriyam/startup-validate --force
```

If the package is later published to npm, the command becomes:

```bash
npx india-startup-validator-skill
```

### 2. One-command Install With uv

If you prefer Python tooling, install directly from GitHub with `uvx`:

```bash
uvx --from git+https://github.com/paulpriyam/startup-validate india-startup-validator-skill
```

This installs the skill into the current project's `.kilo/skills/india-startup-validator` directory.

To install globally for your user:

```bash
uvx --from git+https://github.com/paulpriyam/startup-validate india-startup-validator-skill --global
```

To overwrite an existing installed copy:

```bash
uvx --from git+https://github.com/paulpriyam/startup-validate india-startup-validator-skill --force
```

If the package is later published to PyPI, the command becomes:

```bash
uvx india-startup-validator-skill
```

### 3. Project-local Install
Copy the `skills/india-startup-validator` directory into your project's `.kilo/skills/` folder.

```bash
mkdir -p .kilo/skills
cp -r path/to/startup-validate/skills/india-startup-validator .kilo/skills/
```

### 4. Global/External Install
Clone this repository and add the `skills` path to your `kilo.json`:

```json
{
  "skills": {
    "paths": ["/path/to/startup-validate/skills"]
  }
}
```

### 5. Git Submodule Install
Add the repository to the consuming project and expose the skill through its `.kilo/skills/` directory:

```bash
git submodule add https://github.com/paulpriyam/startup-validate.git .kilo/india-startup-validator-skill
mkdir -p .kilo/skills
ln -s ../india-startup-validator-skill/skills/india-startup-validator .kilo/skills/india-startup-validator
```

### Recommended Install Method

- Use `uvx` if you already use Python tooling.
- Use `npx` if you prefer Node tooling.
- Use a git submodule if you want pinned, reviewable updates in a project repository.
- Use `skills.paths` if you want one shared local clone for multiple projects.

## Usage

Once installed, trigger the skill in Kilo using natural language:

- "I have an idea for a WhatsApp-first CRM for Indian real estate brokers. Validate it."
- "Should I build an ONDC analytics tool for small D2C brands in India?"
- "Evaluate a fintech lending idea for MSMEs in India and flag regulatory risks."
- "I want to build an AI tutor for Tier 2/3 Indian students. Is this worth pursuing?"

## Features

- **Radical Honesty:** Evidence-based scoring, not cheerleading.
- **India-Specific Research:** TAM/SAM/SOM in INR, Tier-wise analysis, local trends.
- **Regulatory Screening:** RBI, SEBI, FSSAI, GST, DPDP Act, and more.
- **Unit Economics Audit:** Indian price bands, CAC, and ARPU benchmarks.
- **Distribution Mapping:** WhatsApp, Kirana, ONDC, and local reseller networks.
- **Actionable Verdict:** 30-day validation plan with concrete experiments.

## Output Structure

The skill generates a structured dossier in your project directory:
- `00-intake/`: Brief and pre-flight.
- `01-research/`: Market, Customer, Competitor, Timing, Confidence.
- `02-india-context/`: Regulatory screen.
- `03-business/`: Economics, Pricing, Funding and execution risks.
- `04-gtm/`: Distribution, First 100 customers.
- `05-validation/`: Interview plan, Templates, Experiments.
- `06-verdict/`: Scorecard, Go/No-Go, 30-day plan.

## Disclaimer

*The regulatory and business analysis provided by this skill is for strategic decision-making only. It does not constitute legal, financial, or tax advice. Always consult with qualified Indian professionals.*

Market, regulatory, funding, and platform information can change. Verify important claims against current official sources before acting.

## License

MIT
