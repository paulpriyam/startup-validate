# India Startup Validator Skill for Kilo

An AI agent skill to validate startup ideas specifically for the Indian market.

## Overview

Building a startup in India involves unique challenges: regulatory complexity (RBI, SEBI, GST), diverse customer segments (Tier 1 vs Tier 2/3), specific distribution channels (WhatsApp, ONDC, Kirana), and unit economics constraints. 

This skill provides a structured, multi-phase validation workflow that helps founders decide whether to **Build, Pivot, or Stop**.

## Installation

### 1. Project-local Install (Recommended)
Copy the `skills/india-startup-validator` directory into your project's `.kilo/skills/` folder.

```bash
mkdir -p .kilo/skills
cp -r path/to/india-startup-validator-skill/skills/india-startup-validator .kilo/skills/
```

### 2. Global/External Install
Clone this repository and add the `skills` path to your `kilo.json`:

```json
{
  "skills": {
    "paths": ["/path/to/india-startup-validator-skill/skills"]
  }
}
```

### 3. Git Submodule Install
Add the repository to the consuming project and expose the skill through its `.kilo/skills/` directory:

```bash
git submodule add https://github.com/YOUR-ORG/india-startup-validator-skill.git .kilo/india-startup-validator-skill
mkdir -p .kilo/skills
ln -s ../india-startup-validator-skill/skills/india-startup-validator .kilo/skills/india-startup-validator
```

Replace `YOUR-ORG` with the published GitHub owner or organization.

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
