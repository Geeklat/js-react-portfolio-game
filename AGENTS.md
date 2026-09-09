# AGENTS.md

## 1. Purpose and core principles

This repository contains a modern rebuild of a personal portfolio website. It is both a professional portfolio/resume site and a small public frontend project demonstrating engineering judgment, accessibility, maintainability, and thoughtful AI-assisted development.

Use AI as an implementation accelerator within established decisions. Generated work must meet the same correctness, accessibility, privacy, testing, and maintainability standards as human-written work. Consequential product, architecture, UX, and professional-content decisions remain human-owned.

Prefer the simplest maintainable solution that satisfies the requirement. Do not add complexity to make the project appear more sophisticated.

The previous portfolio implementation exists separately as a read-only reference. It is not part of this repository or a source tree for migration. Do not modify it unless explicitly instructed.

## 2. Fixed product and architecture

### Product structure

The portfolio has four ordered first-class sections:

1. Profile
2. Work
3. Skills
4. Contact

Preserve these names, their professional meaning, and their order. Do not replace them with RPG terminology.

`Work` means professional employment and resume-style experience. It is not a repository browser, project gallery, or live development-activity feed. Do not add repository integrations, automatic repository cards, or runtime GitHub fetching.

### Interaction and state

The site is one persistent JRPG-style interface. The four sections are content states within that interface, not routed pages or a long scrolling portfolio.

Use ordinary React state synchronized with these URL fragments:

- `#profile`
- `#work`
- `#skills`
- `#contact`

Preserve deep linking, bookmarking, direct section access, and browser Back/Forward behavior. Do not add React Router solely for these sections.

The initial Party screen contains the Status and Command windows. Selecting a command enters the Detail interface, which retains the Portrait and Command upper composition and a persistent content window below. Do not repeat the detailed Party identity block in Profile, Work, or Skills; Contact may include it where appropriate.

### Technology and organization

The established baseline is:

- Vite
- React
- TypeScript
- semantic HTML
- responsive CSS and CSS Modules
- a small shared CSS-variable/token layer
- Vitest and React Testing Library
- static hosting

Keep professional data separated by domain and retain one component for each first-class section. Shared types should remain lightweight and represent actual content needs. Do not consolidate professional content into a monolithic module.

## 3. Agent autonomy

Within the fixed decisions above, an agent may autonomously:

- implement straightforward components and behavior;
- use ordinary local React state;
- extract focused local components, hooks, helpers, or utilities;
- reorganize or simplify code while responsibilities remain substantially unchanged;
- make small, truthful type corrections required by approved content;
- fix bugs;
- tune layout, spacing, breakpoints, sizing, borders, shadows, colors, and transition timing;
- fix intrinsic sizing and overflow defects;
- fix semantic and accessibility defects that preserve the interaction contract;
- add, update, reorganize, or remove focused tests within the existing test stack; and
- make routine static-build or hosting-configuration corrections.

Do not extract trivial components or introduce indirection merely to increase abstraction.

## 4. Human Decision Gates

This is the single authoritative list of consequential changes requiring human approval.

Human approval required means: **stop before implementation**, explain the decision, present reasonable options and tradeoffs, recommend an option, and wait for human direction.

Stop before making any of these changes:

### Product and information architecture

- Add, remove, merge, rename, or reorder a first-class section.
- Change what a section means or how users conceptually navigate the portfolio.
- Replace the persistent JRPG-interface model with routed pages, a long-form site, or another navigation metaphor.

### Application architecture and stack

- Replace the established technology stack.
- Introduce or substantially change a cross-cutting architecture, including application-wide providers, global state infrastructure, event buses, generic rendering engines, plugin systems, or configuration-driven UI frameworks.
- Substantially redistribute responsibility between application state, data, and presentation.

### State and navigation

- Change the overall state-management approach.
- Change the URL-fragment model.
- Add shared/global state infrastructure or persistent state such as `localStorage`.

### Components and content systems

- Establish or substantially change a reusable component pattern across multiple application areas.
- Introduce a generalized content model, schema-driven system, CMS, universal content-block engine, MDX/content-generation pipeline, or runtime schema validation.

### Responsive behavior and accessibility

- Introduce a distinct mobile interaction model, including hidden navigation, hamburger/disclosure navigation, swipe-only navigation, or equivalent behavior changes.
- Materially change how users navigate, move focus, activate controls, discover updates, or consume content.

### Visual direction and motion

- Change the classic-JRPG identity, Party or Detail composition, major artwork treatment, supplied portrait concept, hand-pointer concept, or established transition hierarchy.
- Introduce a materially different motion concept or runtime animation framework.
- Replace intentionally supplied artwork with generated or CSS approximations.
- Introduce copyrighted game artwork or UI assets as production assets.
- Add runtime font loading or a font CDN.

### Dependencies and external systems

- Add a runtime dependency, UI framework, global state library, external API, hosted service, analytics, authentication, backend, database, CMS, SSR, or other runtime infrastructure.
- Add architectural development tooling rather than a narrowly scoped utility.

### Testing and delivery

- Add another testing layer or toolchain, browser automation, visual regression infrastructure, automated accessibility tooling, external screenshot services, or CI infrastructure.
- Change the static-hosting model or add server-side, serverless, container, or SSR deployment infrastructure.

### Professional content and résumé

- Materially rewrite, reinterpret, condense, expand, prioritize, omit, or reframe professional content in a way that changes the professional narrative.
- Resolve a meaningful conflict between professional sources.
- Generate, synthesize, or substitute a résumé instead of using a real owner-supplied PDF.

## 5. Professional content, privacy, and résumé

Follow [`docs/PROFESSIONAL-CONTENT-SOURCE-OF-TRUTH.md`](docs/PROFESSIONAL-CONTENT-SOURCE-OF-TRUTH.md) for source authority, transformation rules, selection, conflicts, and approved professional direction.

Never invent, infer, extrapolate, or embellish professional facts. This includes employers, titles, dates, technologies, responsibilities, accomplishments, metrics, team sizes, customer names, and business outcomes.

Formatting and presenting already-approved content is allowed when factual meaning and professional emphasis remain unchanged. Surface missing information and meaningful source conflicts for human review rather than silently resolving them.

Private working sources belong in ignored `local-source/` and must not be committed or reproduced in public documentation. Information from another AI context, memory system, or account is not an authoritative source.

The public narrative remains frontend-focused software engineering leadership, modernization of mature applications, accessibility, UX awareness, maintainability, mentorship, and practical AI-assisted engineering. Do not reposition the owner primarily as an AI engineer, backend-only engineer, defense-focused engineer, or generic technology generalist.

The Contact section may offer only a real owner-supplied PDF résumé. Never ship a placeholder, sample, text stand-in, broken download, or invented résumé. The website may contain more detail than the curated downloadable résumé.

## 6. Accessibility, interaction, responsive behavior, and motion

### Accessibility and keyboard contract

Use semantic HTML and native browser behavior. Preserve:

- logical headings and landmarks;
- meaningful accessible names and appropriate link/button semantics;
- valid active-state semantics and content-region identification;
- visible focus and sufficient contrast;
- Tab, Shift+Tab, and Enter behavior;
- optional Arrow Up, Arrow Down, Home, and End menu enhancement; and
- reduced-motion support.

Active section and keyboard-focused command are separate states. The active section identifies displayed content; the hand cursor follows actual focus. There must be only one cursor.

After section activation:

- focus remains on the activated command;
- the active semantic state updates;
- the new content region is meaningfully identified;
- assistive technology can understand that content changed; and
- focus is not automatically moved into the rendered content.

The cursor is decorative reinforcement and must never be the only indication of focus, selection, or active state. Use `:focus-visible` so pointer interaction does not unnecessarily show keyboard-focus styling. Do not implement an ARIA application-style menu or roving-tabindex system where native links provide better behavior.

### Responsive behavior

Preserve the multi-panel composition where space permits. On narrow screens, agents may reflow or stack panels, resize artwork, tune spacing and breakpoints, and correct intrinsic sizing or overflow while preserving full menu labels and the same navigation and interaction model.

Do not shrink the desktop layout until it becomes unreadable. The portrait may scale down responsively while preserving aspect ratio, contained rendering, transparency, and pixel-art edges.

### Motion

Motion must be decorative and restrained:

- the background may drift subtly;
- the hand cursor may bob gently without blinking;
- entering Detail from Party may use the right-to-left transition; and
- switching sections within Detail uses little or no large-scale motion.

With `prefers-reduced-motion`, stop background movement and cursor bobbing, disable the Detail entrance transition, and make other unnecessary transitions immediate. The cursor remains visible and functional.

## 7. Visual and styling constraints

Preserve the original classic-JRPG menu identity, substantial rounded window borders, visible gaps, blue atmospheric background, Party composition, stable Detail composition, supplied pixel portrait, and hand-pointer treatment.

Use the hybrid CSS and image-asset approach:

- CSS handles frames, borders, layout, spacing, responsiveness, backgrounds, interaction states, focus, and ordinary effects.
- Image assets handle portraits, character artwork, the hand pointer, and other distinctive supplied artwork.

Use CSS Modules for component-local styles and a small shared token layer for meaningful common values. Do not build an enterprise-scale design system.

The self-hosted pixel/JRPG font is an accent font for menus, headings, labels, and small thematic elements. Use a readable system-font stack for long professional content. Preserve existing font licenses and artwork provenance.

Supplied raster artwork must preserve transparency, aspect ratio, containment, and pixelated rendering where appropriate. Do not use copyrighted Final Fantasy artwork or reproduce its protected assets.

## 8. Dependencies, testing, metadata, and deployment

### Dependencies

Keep the dependency surface small and use explicit compatible version ranges. Build and development tools belong in `devDependencies` where appropriate; commit the lockfile.

Routine work within existing dependencies is allowed. A small dev-only utility may be added autonomously only when it is concrete, narrowly scoped, non-architectural, and does not create a new testing or delivery layer. This is not general permission to add development packages.

### Testing

Use Vitest, React Testing Library, and existing lightweight helpers. Prioritize behavior such as menu selection, keyboard navigation, focus versus active state, fragment synchronization, browser history, transition lifecycle, and representative rendering. Do not add tests merely to maximize coverage.

### Metadata

Keep metadata lightweight. Centralize professional identity values where practical, and keep the document title synchronized with the active section. Do not introduce a large SEO or metadata framework for this behavior.

### Deployment

Preserve static hosting. Routine asset-path, Vite base-path, and expected static-host configuration changes are allowed. Fragment navigation does not require pathname fallback routing.

Do not expose credentials, commit provider-local state, or introduce private machine paths.

## 9. Verification expectations

Verify work in proportion to its risk and scope.

For application changes, normally run:

- formatting checks;
- lint;
- typecheck;
- focused or full tests as appropriate;
- production build; and
- `git diff --check`.

For documentation-only changes, run relevant Markdown formatting, link checks where applicable, and `git diff --check`; application tests and builds are unnecessary unless documentation changes affect tooling or runtime behavior.

Before finishing:

- inspect the final diff and working-tree status;
- confirm only intended files changed;
- preserve unrelated user changes;
- confirm no private working sources, credentials, provider state, or machine-specific paths were introduced; and
- report verification results and any unresolved risks.

Do not commit, push, deploy, delete material data, rewrite Git history, or perform other consequential external actions unless the user explicitly requests them.

## 10. Decision-gate response format

When a Human Decision Gate applies, do not implement the consequential change first. Present:

### Decision needed

A concise description of the problem.

### Why it matters

Why the choice affects product behavior, architecture, usability, accessibility, maintainability, privacy, or professional presentation.

### Options

The reasonable alternatives. Do not invent choices merely to create the appearance of options.

### Tradeoffs

The meaningful advantages and disadvantages of each option.

### Recommendation

A recommendation with reasoning.

### Implementation impact

The likely files, components, behaviors, or systems affected.

Then stop and wait for human direction.
