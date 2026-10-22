# Mid-Level to Senior Software Engineer Roadmap

An educational, hands-on roadmap for software engineers who want to deepen their engineering judgment and grow from mid-level toward senior-level work.

This repository is organized around practical topics—not a claim of seniority or a checklist of technologies to memorize. Each subject should help explain not only **how** to build something, but also **why** one approach is appropriate, what it costs, and how to validate it.

> **Status:** Learning roadmap in progress. The repository currently has a starting point in `Backend/API Design`; the structure below describes the intended curriculum.

## What this repository is for

- Study backend engineering in depth, including API design, concurrency, async work, routing, and financial-domain concepts.
- Build a broader engineering foundation in system design, networking, testing, CI/CD, and programming practice.
- Turn concepts into small implementations, experiments, design notes, and tested examples.
- Make trade-offs and lessons learned visible to teammates, interviewers, and future you.

This is an educational resource, not production-ready software, financial advice, or a substitute for security and operational review.

## Learning path

The path is intended to build on existing professional experience:

1. **Strengthen foundations** — revisit language behavior, data structures, testing, and debugging through practical exercises.
2. **Design dependable backend services** — work through APIs, routing, persistence, concurrency, and failure handling.
3. **Think across the system** — study networking, system design, delivery pipelines, and operational concerns.
4. **Practice senior-level judgment** — document alternatives, constraints, risks, rollout plans, and the reasoning behind decisions.

Move between topics as needed. The goal is demonstrated understanding and sound engineering decisions, not completing every folder in a fixed order.

## Curriculum

```text
.
├── Backend/
│   ├── API Design/
│   ├── Concurrency & Async/
│   ├── Finance/
│   ├── Routing/
│   ├── Data & Persistence/
│   ├── Reliability & Observability/
│   └── Security/
├── System Design/
├── Networking/
├── CI-CD/
├── Testing/
└── Programming Practice/
```

The folders represent the intended organization; topics can be added as the curriculum grows.

### Backend

| Area | Topics to explore |
| --- | --- |
| **API Design** | Resource and contract design, HTTP semantics, validation, pagination, versioning, backward compatibility, error models, idempotency |
| **Concurrency & Async** | Threads and tasks, async I/O, synchronization, race conditions, queues, backpressure, cancellation, timeouts |
| **Finance** | Exact monetary representation, currencies, ledger modeling, double-entry bookkeeping, idempotent transactions, reconciliation, auditability |
| **Routing** | Route matching, middleware, request lifecycle, parameter handling, API gateways, routing policy |
| **Data & Persistence** | Data modeling, transactions, indexes, consistency, migrations, caching, read/write patterns |
| **Reliability & Observability** | Retries, circuit breakers, graceful degradation, logs, metrics, traces, health checks |
| **Security** | Authentication, authorization, input handling, secrets, dependency risk, threat modeling |

### Engineering beyond the backend

| Area | Topics to explore |
| --- | --- |
| **System Design** | Requirements, capacity estimates, component boundaries, data flow, consistency, bottlenecks, failure modes, trade-offs |
| **Networking** | DNS, TCP, TLS, HTTP, proxies, load balancing, latency, connection management |
| **CI/CD** | Build and deployment pipelines, automation, release strategies, environment configuration, rollback |
| **Testing** | Unit, integration, contract, and end-to-end tests; test doubles; reliability; coverage as a signal rather than a goal |
| **Programming Practice** | Data structures, algorithms, language fundamentals, code quality, debugging, refactoring |

## How to study a topic

For each topic, aim to leave behind evidence of understanding:

1. **Explain the concept** in your own words and identify the problem it solves.
2. **Build a small example** that makes the behavior observable.
3. **Test important cases**, including invalid input, boundaries, and failures where relevant.
4. **Compare alternatives** and record the constraints that would change your choice.
5. **Reflect on production concerns** such as security, scale, reliability, operability, and maintainability.

Useful artifacts include concise notes, runnable examples, diagrams, tests, benchmarks, and short decision records. Keep examples focused and make it clear when they are illustrative rather than production-ready.

### Suggested topic notes

```text
Topic name
├── README.md       # Problem, key ideas, trade-offs, and references
├── examples/       # Small runnable demonstrations
└── tests/          # Checks for the behavior being demonstrated
```

Not every topic needs all of these files. Prefer a small, understandable example over scaffolding that does not teach anything.

## What good progress looks like

- You can describe the constraints behind a design, not just name a pattern.
- You can identify failure cases and explain how the design responds to them.
- You can support claims with a test, experiment, measurement, or source.
- You can discuss trade-offs clearly and adapt a design when its assumptions change.
- You can communicate what you learned and what you would investigate next.

## Getting started

1. Choose a topic that connects to a real engineering question.
2. Read the topic notes and verify important claims with trustworthy documentation or experiments.
3. Add a focused example and tests where useful.
4. Write down the reasoning, limitations, and next questions.

No particular language or framework is required unless a topic says otherwise. Examples should state their runtime or tooling requirements.

## Contributing to the learning material

When adding material, keep it accurate, approachable, and useful to another engineer:

- Explain assumptions and define specialized terms.
- Cite documentation or other sources for non-obvious claims.
- Separate measured results from estimates and opinions.
- Include limitations and avoid presenting toy examples as production solutions.
- Keep examples minimal, reproducible, and tested where practical.
- Never include credentials, private data, or sensitive production details.

## About

This repository is a personal educational project for structured learning and practical engineering practice. Its contents are intended to show the work and reasoning behind that learning—not to make unsupported claims about experience or expertise.
