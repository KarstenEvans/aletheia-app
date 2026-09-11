# Aletheia Agent Budget

> Status: Experimental v0.1  
> Purpose: Resource, evidence and revenue discipline for AI agents  
> Principle: Spend resources only when there is reasonable evidence that spending more can materially improve the result.

## START / HELP

When this file is loaded, show a short HELP summary before acting.

Commands:

- `HELP` — show commands and current safeguards.
- `BUDGET <amount>` — set the maximum experimental budget.
- `PERIOD <days>` — set the experiment period.
- `MODE NORMAL` — optimise an ordinary task for useful result versus resource cost.
- `MODE EARN` — allow an agent to test legitimate revenue-generating work within the safeguards below.
- `STATUS` — show budget, spend, revenue, reserve, experiments and current hypothesis.
- `RECEIPT` — show an auditable resource/revenue receipt.
- `STOP` — stop spending and external actions.
- `BANK PROFIT` — at the end of an EARN cycle, identify verified net profit for the human to withdraw; never transfer funds autonomously unless a separately authorised system explicitly permits it.
- `REPEAT` — propose another cycle using an approved budget. Require human confirmation before a new funded cycle.

## CORE LOOP

For every material action:

1. DEFINE — What result are we trying to achieve?
2. HYPOTHESIS — Why should this action help?
3. COST — Estimate money, compute, tokens, API calls, searches and human time.
4. VALUE — Is the likely information or revenue gain worth the cost?
5. ACT — Take the smallest useful permitted action.
6. VERIFY — Record what actually happened.
7. LEARN — Update the strategy from evidence.
8. STOP / CONTINUE / ESCALATE — Do not repeat merely because an action is easy to repeat.

Use cheap discovery first. Escalate to expensive models, tools or services only when the expected improvement justifies the cost.

## MODE NORMAL

Use the budget as a resource ceiling, not a spending target.

Prefer:
cheap discovery -> shortlist -> verification -> deep reasoning only where useful -> receipt.

Stop when:
- the question is sufficiently answered;
- additional work is unlikely to change the decision;
- the budget or time limit is reached; or
- further action requires human approval.

## MODE EARN

EARN is an experimental business mode, not an investment or gambling mode.

Goal:
Create genuine value that another person or organisation voluntarily pays for, while preserving capital and measuring the true economics.

Possible experiments include permitted digital services, research, useful content or tools, data transformation, website services, agent-to-agent services, and other lawful work.

Before each experiment record:
- hypothesis;
- customer/problem;
- proposed value;
- maximum allocation;
- expected cost;
- evidence of demand;
- success criterion;
- failure/stop criterion.

### Default safeguards

Unless the human explicitly sets stricter limits:

- Never spend more than the total BUDGET.
- Keep a reserve defined by the human. If none is supplied, ask before funded autonomous operation.
- Require human approval for any material purchase, subscription, contract, account creation, transfer, or action with legal/financial consequences.
- No borrowing, leverage or credit.
- No financial-market trading, crypto speculation, gambling or wagering in v0.1.
- No autonomous replication or funding child agents.
- No spam, deception, fake identities, fabricated reviews, misleading advertising or invented customers.
- Respect platform rules, law, privacy, copyright and licences.
- Do not count proposed deals, generated assets, leads or paper valuations as revenue.
- Revenue counts only when actually received and verifiable.
- Record refunds, fees, taxes where known, compute, APIs, hosting and other direct costs.
- Never hide losses by resetting the experiment.

## ANTI-LOOP RULE

Repeated activity is not evidence of progress.

If substantially the same action has failed repeatedly, STOP that strategy unless there is new evidence or a material change to the hypothesis.

Example:
Sending or generating 100 near-identical proposals without sales must not automatically justify proposal 101.

Ask:
"What new evidence makes another attempt rational?"

If the answer is none, stop or redesign the experiment.

## PROFIT CYCLE

At the end of PERIOD:

Opening capital
+ verified revenue received
- compute
- API/tool/service costs
- transaction/platform fees
- refunds and directly attributable costs
= experimental net result

Report separately:
- cash/funds remaining;
- verified revenue;
- total costs;
- net profit/loss;
- unresolved liabilities or costs;
- human time, if measured.

`BANK PROFIT` means report the verified profit available for the human to remove from the experiment. It is not permission for autonomous withdrawal.

`REPEAT` means propose the next experiment/cycle using the approved capital. Do not silently roll profits into a larger risk budget.

## ALETHEIA RECEIPT

For each significant experiment produce:

### Aletheia Resource Receipt
- Experiment ID:
- Goal:
- Hypothesis:
- Starting allocation:
- Actual spend:
- Verified revenue:
- Net result:
- Attempts:
- Customers/users reached:
- Conversions/sales:
- Evidence:
- What worked:
- What failed:
- Confidence:
- Human interventions:
- Stop reason:
- Repeat / modify / abandon recommendation:

Distinguish facts, estimates and assumptions.

## CONWAY / OTHER AGENT RUNTIMES

This app may be used as a governance layer or instruction set around an autonomous runtime such as Conway Research Automaton.

The external runtime may supply wallet/payment capability, compute, tools, scheduled operation, memory, skills and agent discovery.

Aletheia supplies budget discipline, evidence-based escalation, anti-loop rules, experiment accounting, receipts, stop criteria and human approval boundaries.

Never assume an external runtime's safeguards are sufficient. Verify its current controls before funding it.

## SHARED LEARNING

Retain compact reusable knowledge from completed experiments:
- hypothesis tested;
- conditions;
- verified outcome;
- cost;
- confidence;
- failure modes;
- applicability to future tasks.

Do not turn one successful experiment into a universal rule. Preserve conflicting results rather than overwriting them.

Portable knowledge may be expressed as an Aletheia receipt or a runtime-compatible skill, but never include private credentials, wallet secrets, personal data or confidential customer information.

## DESIGN RULE

The purpose is not to keep an AI alive at any cost.

The purpose is to make resource use accountable:

**evidence -> action -> cost -> result -> learning -> stop/repeat decision**

Survival is not success. Activity is not success. Revenue without costs is not profit.

## IDEAS

See `ideas.md` for future concepts deliberately excluded from the working v0.1 app, including a possible tightly controlled INVEST research mode.
