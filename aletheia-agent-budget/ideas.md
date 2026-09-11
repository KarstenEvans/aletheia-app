# Aletheia Agent Budget — Ideas

> Future concepts and research backlog.  
> These are deliberately **not active capabilities** in `aletheia-agent-budget.md`.

## 1. INVEST mode — research idea

Explore whether a future Aletheia-governed agent could run a small, explicitly authorised investment experiment such as:

- Human supplies a fixed experimental amount, for example £100.
- A hard loss/risk ceiling is set outside the AI.
- The experiment runs for a fixed period, for example one month.
- All fees, realised gains/losses and other costs are recorded.
- At period end the experiment stops automatically.
- Original capital and realised profit/loss are reconciled.
- The human decides whether to withdraw profit, stop, or authorise another identical-sized cycle.
- Profits do not automatically increase the next risk budget.

### Questions that must be solved first

1. **Regulation and permissions** — what activity is legally permissible for a self-directed individual, and what changes if an app gives recommendations or executes trades?
2. **Broker/API rules** — which regulated providers, if any, permit this kind of automated agent access?
3. **Custody** — keep assets with an appropriate regulated provider rather than giving an experimental agent unrestricted custody.
4. **Hard controls** — loss limits, transaction limits and allowed instruments should be enforced externally, not just written into a prompt.
5. **No leverage** — initial experiments should prohibit borrowing, margin, derivatives and other mechanisms that can magnify loss.
6. **Benchmarking** — compare results with a simple appropriate benchmark and include all fees.
7. **Sample size** — one profitable month proves very little. Measure repeated cycles and risk-adjusted performance.
8. **Auditability** — every decision should have timestamped inputs, action, rationale, execution result and receipt.
9. **Emergency stop** — human-accessible kill switch outside the agent.
10. **Security** — compromise of the AI must not equal compromise of the entire investment account.

### Possible experimental progression

**Stage 0 — PAPER**  
No real money. AI creates timestamped decisions and a simulated ledger using real market data.

**Stage 1 — SHADOW**  
AI proposes actions against a real portfolio but cannot execute them.

**Stage 2 — MICRO**  
Only after legal/provider/security review, consider a very small real-money experiment with external hard limits and human approval.

**Stage 3 — CONTROLLED**  
Only if earlier stages produce meaningful evidence across enough time. Keep capital fixed; bank realised profit rather than automatically compounding experimental risk.

### Aletheia requirement

The important research question is not:

> "Can an AI make money this month?"

It is:

> "Does the strategy demonstrate repeatable value after costs, compared with an appropriate benchmark, at an explicitly measured level of risk?"

Until that can be answered credibly, INVEST remains an idea, not an Aletheia Agent Budget operating mode.

## 2. £100 AI Earn Challenge

Run identical fixed-budget EARN experiments and compare:
verified revenue - all attributable costs = net result.

Publish receipts, including failures.

## 3. Conway Automaton integration

Package `aletheia-agent-budget/SKILL.md` for the Conway skill format and test it in a sandbox with no meaningful funds first.

Research:
- how Automaton exposes creator-set treasury limits;
- whether Aletheia receipts can be written to persistent memory;
- whether failed-strategy knowledge can become reusable procedural knowledge;
- whether the anti-loop rule reduces wasted compute;
- how creator approval can sit outside the autonomous loop.

## 4. Shared evidence knowledge

Investigate a portable experiment-receipt format so agents can share **evidence about strategies** without blindly copying conclusions.

## 5. Agent marketplace

Future agents might discover paid machine services, inspect price and evidence, purchase a narrowly scoped service within budget, verify the result, and record the transaction as an Aletheia receipt.

## 6. Human-readable dashboard

A simple `.htm` companion could show pot, reserve, spend, revenue, realised profit/loss, current experiment, experiments won/lost, cost per successful outcome, STOP and receipts.

Keep it local-first and simple before adding wallets or live financial integrations.
