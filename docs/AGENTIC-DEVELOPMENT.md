# Human-Directed Agentic Development

## 1. Purpose

This project uses coding agents to accelerate bounded implementation work and support iterative inspection, validation, and refinement. Engineering judgment remains human-owned. The goal is neither autonomous software development nor maximizing how much code an agent can generate.

Agent-assisted code is held to the same correctness, accessibility, maintainability, and testing expectations as manually written code. The usefulness of the workflow depends on reviewing the result, not merely producing it quickly.

## 2. Responsibility Model

### Human-owned decisions

The repository owner retains responsibility for decisions that materially affect:

- product direction and information architecture;
- consequential application architecture;
- interaction design and accessibility behavior;
- professional-content accuracy and privacy boundaries;
- visual identity and major motion concepts;
- runtime dependencies, APIs, and external services; and
- how the project represents the author's engineering work.

### Agent-assisted work

Within an approved direction, an agent may assist with:

- repository inspection and code review;
- bounded component and styling implementation;
- routine refactoring and defect correction;
- behavior-focused tests;
- lint, type, test, and build verification; and
- identifying possible improvements for human review.

Agent recommendations are not accepted automatically. The owner may approve, revise, defer, or reject them.

## 3. Steering and Context

Agent work is constrained by several sources of repository context:

- [`AGENTS.md`](../AGENTS.md) contains operational engineering constraints, approved product decisions, and Human Decision Gates.
- [`docs/PROFESSIONAL-CONTENT-SOURCE-OF-TRUTH.md`](PROFESSIONAL-CONTENT-SOURCE-OF-TRUTH.md) defines authority precedence and integrity rules for public professional claims.
- `local-source/` holds private factual source material used during local content review. It is deliberately ignored by Git and is not part of the public repository.
- The current implementation and tests define existing behavior that future work must preserve unless the owner approves a change.

Private source documents are inputs to factual review, not public application assets. Their contents should not be reproduced in repository documentation.

## 4. Working Loop

The normal workflow is iterative:

1. Inspect the repository and relevant source material.
2. Understand existing constraints and approved behavior.
3. Identify whether the task contains consequential decisions.
4. Surface those decisions to the owner before implementation.
5. Implement routine or explicitly approved work.
6. Verify the result in proportion to its risk.
7. Report changes, validation results, and remaining concerns.
8. Have the human owner review the result.

The loop repeats when review reveals a defect, a better constraint, or a decision that needs refinement.

## 5. Human Decision Gates

A Human Decision Gate separates routine implementation from changes that would redefine the product or engineering approach. Work inside an established direction can proceed without interrupting the owner for minor choices. Consequential changes must be presented with their alternatives and tradeoffs before they are made.

Representative gates include:

- changing the four first-class navigation sections;
- introducing global state infrastructure;
- adding runtime dependencies, services, or APIs;
- materially changing keyboard, focus, or accessibility behavior; and
- changing the public professional narrative or resolving conflicting source claims.

The complete operational rules are maintained in [`AGENTS.md`](../AGENTS.md).

## 6. Architectural Restraint

Agentic development is not a reason to add architecture. Complexity must solve a demonstrated product need.

The current application therefore uses:

- ordinary local React state;
- URL fragments rather than a routing library;
- four explicit professional section components;
- lightweight TypeScript types and local data files;
- static deployment; and
- only React and React DOM as runtime dependencies.

It intentionally has no global state system, CMS, runtime GitHub integration, UI framework, or backend. These are deliberate boundaries in the current design, not missing signs of sophistication.

## 7. Content Integrity and Privacy

Professional content is source-governed. An agent may not invent or infer employers, titles, dates, technologies, responsibilities, metrics, outcomes, or other résumé facts. The master résumé is the factual authority, approved motivation language has a separate authority, and public-profile material is secondary.

Meaningful source conflicts are surfaced for human review rather than silently reconciled. Public presentation data lives in the repository's typed data modules, while the private working sources remain in the ignored `local-source/` directory.

## 8. Accessibility and Interaction

The command menu illustrates how the visual concept is constrained by web accessibility. The JRPG metaphor enhances native behavior instead of replacing it:

- commands remain native links;
- ordinary Tab and Shift+Tab navigation continue to work;
- Arrow Up, Arrow Down, Home, and End are optional enhancements;
- the active section and keyboard-focused command are intentionally distinct;
- the pixel hand reinforces focus but is not its only visual indication; and
- reduced-motion preferences disable decorative animation without removing the cursor or functionality.

The theme serves the interaction. It does not justify replacing familiar browser semantics with a simulated game application.

## 9. Review Before Refactor

The repository's cleanup process provides a concrete example of this methodology. An agent first performed a read-only engineering audit and identified possible simplifications. The owner reviewed that report, approved a bounded subset, explicitly deferred other suggestions, and then requested implementation of only the selected work.

Approved cleanup included:

- removing obsolete artwork fallbacks;
- simplifying speculative Work and Skills models;
- removing temporary source-review states after content was populated;
- correcting the Party-to-Detail transition lifecycle; and
- adding a semantic Party-screen heading.

Deferred suggestions included broader CSS and component restructuring and deletion of owner-supplied unused assets. This sequence reflects an important rule: an agent finding something it _could_ refactor does not mean that the refactor is automatically valuable.

## 10. Accountability

The human owner is responsible for shipped behavior and public claims. Agent output is a proposal or implementation artifact, not an independent authority. Regardless of who or what produced the first draft, the result must meet the same engineering standards before it belongs in the project.
