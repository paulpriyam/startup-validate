---
name: india-startup-validator
description: Validate startup ideas for the Indian market with India-specific market research, customer discovery, regulatory screening, pricing, distribution, unit economics, and go-to-market recommendations. Use when a founder wants to test an idea for India, assess demand, identify risks, size the opportunity, validate willingness to pay, or decide whether to build, pivot, or stop.
---

# India Startup Validator

A structured, multi-phase skill that validates a startup idea for the Indian market. It produces a concise but evidence-heavy validation dossier organized by domain, with built-in progress tracking so work survives session interruptions.

## How It Works

The process has 9 numbered phases executed sequentially, plus a Pre-Flight Kill Check (Phase 2). Each phase produces output files and updates the progress tracker. If a session is interrupted, resume from the last completed checkpoint.

```
RESUME → INTAKE → PRE-FLIGHT → RESEARCH → REGULATORY → BUSINESS → DISTRIBUTION → DISCOVERY PLAN → VERDICT → VERIFICATION
```

### Modes

**Full Mode (default):** Execute all phases in order. Best for thoroughly validating a startup from scratch.

**Fast Track Mode:** When the user says they want a "quick validation," "rapid assessment," or similar, run a compressed version:
1. Phase 1 (Intake) — shortened to 1 round of questions.
2. Phase 2 (Pre-Flight) — always run.
3. Phase 3 (Research) — skip customer voice and distribution deep-dives.
4. Phase 5 (Business) — Revenue model only, Stage A.
5. Phase 8 (Verdict) — Scorecard + top 3 experiments only.

### Language

Default output language is **English**. If the user writes in another language or explicitly requests one, use that language for all outputs instead.

---

> **Reference:** Read `references/honesty-protocol.md` at the start of every session. It defines the rules for radical honesty, data labels, and anti-patterns.

## Phase 0: Resume And Research Setup

Before anything else, check if a `PROGRESS.md` file exists in the working directory (or a project subdirectory). If it does, read it and resume from the last incomplete phase. Tell the user: "I found progress from a previous session. You completed [phases]. Picking up from [next phase]."

If no progress file exists, start from Phase 1.

Detect whether live web research is available. Use live sources when available, date the sources, and cross-check important claims. If live research is unavailable or denied, enter **Knowledge-Based Mode**, label findings `[Knowledge-Based]`, lower confidence, and list the claims the founder must verify independently in the confidence dashboard.

---

## Phase 1: Founder Intake

The quality of everything downstream depends on how much context you extract now. Ask 3-5 questions at a time in a conversational flow.

> **Reference:** Read `references/intake-questions.md` for the full question set.

**Intake areas:**
- Idea and problem.
- Target customer and geography (India-specific).
- Current alternatives and workarounds.
- Founder context, domain expertise, and constraints.
- Business model and expected price point.
- Prior customer conversations or traction.
- Regulated sector exposure (Fintech, Health, Edtech, etc.).
- Distribution hypothesis.

### Output

Save the consolidated intake to `{project-name}/00-intake/brief.md`.
Create `PROGRESS.md` at the project root with the checklist of all phases.

---

## Phase 2: India Pre-Flight Kill Check

Before investing time in the full process, run a fast sanity check. The goal is to surface any immediately disqualifying signals.

**Run these checks:**
1. **Dominant incumbent check** — Does a well-funded, widely-adopted solution already exist in India?
2. **Platform dependency** — Is the idea too dependent on a platform (e.g., WhatsApp, ONDC, UPI) that could change its rules?
3. **Regulatory blocker** — Is there an obvious legal reason this idea cannot exist in India?
4. **Willingness-to-pay risk** — Is the target segment known for not paying for such solutions?
5. **Distribution access risk** — Is it extremely hard to reach the target customer at scale?
6. **Unit economics risk** — Do plausible Indian price points fail to cover acquisition, delivery, support, payment, and refund costs?
7. **Precedent failure check** — Has a similar Indian or comparable-market attempt failed, shut down, or revealed a critical lesson?

**Output:** A short verdict message to the founder with a continue, narrow, or stop-early recommendation. Save to `{project-name}/00-intake/preflight.md`. If a critical issue is found, record a specific kill criterion rather than proceeding automatically.

---

## Phase 3: India Market and Customer Research

This phase evaluates the opportunity size and demand signals.

> **Reference:** Read `references/india-market-research.md` for India-specific research methods and data sources.

**Tracks:**
- **Market sizing:** TAM/SAM/SOM for India using bottom-up assumptions (INR).
- **Customer reality:** pain severity, behavior signals, budget owner, trust barriers, language needs.
- **Competitive landscape:** direct, indirect, manual/offline, and WhatsApp/spreadsheet substitutes.
- **Timing:** UPI, ONDC, AI adoption, policy changes, category maturity.

**Output:**
- `{project-name}/01-research/market-analysis.md`
- `{project-name}/01-research/customer-reality.md`
- `{project-name}/01-research/competitor-landscape.md`
- `{project-name}/01-research/timing-and-trends.md`
- `{project-name}/01-research/confidence-dashboard.md`

---

## Phase 4: India Regulatory and Compliance Screen

Screen only at a founder-decision level, not as legal advice.

> **Reference:** Read `references/india-regulatory-screen.md` for sector-specific compliance checks.

**Checks:**
- **Fintech:** RBI, NPCI/UPI, lending, KYC, Account Aggregator.
- **Health:** telemedicine, health data, medical devices.
- **Edtech:** child data, advertising claims.
- **Food/commerce:** FSSAI, consumer protection, marketplace rules.
- **Insurance/investments:** IRDAI, SEBI.
- **Data/privacy:** DPDP Act, data storage.
- **General business:** GST, state licenses.

**Output:** `{project-name}/02-india-context/regulatory-screen.md`.

---

## Phase 5: Business Model and Unit Economics

Evaluate India-specific economics.

> **Reference:** Read `references/india-unit-economics.md` for India-specific ARPU, CAC, and pricing benchmarks.
> **Reference:** Read `references/india-funding-and-execution.md` for bootstrapping, grants, Startup India, accelerators, angels, and revenue-first execution realities.

**Evaluation:**
- INR price bands and willingness to pay.
- CAC by channel (India-specific).
- ARPU, gross margin, payment costs, refunds/defaults/churn.
- Payback period and break-even assumptions.
- B2C vs SMB vs enterprise sales motion.

**Output:**
- `{project-name}/03-business/unit-economics.md`
- `{project-name}/03-business/pricing-and-revenue.md`
- `{project-name}/03-business/business-model-risks.md`

---

## Phase 6: Distribution and GTM for India

Evaluate channels by reach, cost, trust, and founder access.

> **Reference:** Read `references/india-distribution-channels.md` for WhatsApp, ONDC, Kirana, and creator-led channels.

**Channels:**
- WhatsApp/community-led distribution.
- SEO/content in English and local languages.
- Instagram/YouTube/creator channels.
- Kirana/MSME/reseller/field-sales channels.
- Marketplaces and ONDC.
- Partnerships (SaaS, banks, NBFCs, etc.).

**Output:**
- `{project-name}/04-gtm/distribution-map.md`
- `{project-name}/04-gtm/first-100-customers.md`
- `{project-name}/04-gtm/channel-tests.md`

---

## Phase 7: Customer Discovery Plan

Create scripts and experiments founders can actually run in India.

> **Reference:** Read `references/india-customer-discovery.md` for interview protocols and templates.

**Included:**
- Problem interview script.
- WhatsApp/LinkedIn/cold-call outreach templates.
- Local-language interview notes section.
- Willingness-to-pay tests.
- Concierge/manual MVP test.
- Landing page or waitlist test.
- Pilot, pre-order, or letter-of-intent test for B2B.

**Output:**
- `{project-name}/05-validation/customer-interview-plan.md`
- `{project-name}/05-validation/outreach-templates.md`
- `{project-name}/05-validation/experiment-designs.md`

---

## Phase 8: Scorecard and Verdict

Score the idea across 10 dimensions.

> **Reference:** Read `references/scoring-rubric.md` for the scoring matrix.

**Verdict Bands:**
- **80-100:** Proceed with focused validation.
- **65-79:** Conditional proceed; fix named risks first.
- **45-64:** Pivot or narrow before building.
- **Below 45:** Stop or restart with a different problem.

**Output:**
- `{project-name}/06-verdict/scorecard.md`
- `{project-name}/06-verdict/go-no-go.md`
- `{project-name}/06-verdict/30-day-validation-plan.md`
- `{project-name}/06-verdict/kill-criteria.md`
- `{project-name}/README.md` (Executive Summary)

---

## Phase 9: Verification

Run a final consistency check.

> **Reference:** Read `references/verification-checklist.md` for the audit protocol.

**Checks:**
- No unlabeled claims.
- No stale or unsourced data.
- Regulatory claims are caveated.
- Scorecard matches research evidence.
- India-specific factors are present.
- Three to five measurable kill or pivot criteria are included and tied to experiments.

**Output:** `{project-name}/verification-report.md`.

---

## Reference Files

The `references/` directory contains supporting documentation. Read only what you need for the current phase.
