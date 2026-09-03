# AGENTS.md

## Purpose

This repository contains a modern rebuild of an older personal portfolio website.

It serves two purposes:

- a professional portfolio/resume site, and
- a small public frontend project that demonstrates sound engineering judgment, accessibility awareness, and thoughtful AI-assisted development.

The application intentionally uses a classic JRPG-inspired interface to reflect the owner's personality.

The goal is not to maximize architectural complexity.

Prefer clear, maintainable solutions that fit the actual needs of the project.

AI-assisted development is an implementation accelerator, not a substitute for engineering judgment. Consequential architecture, product, UX, and professional-content decisions remain accountable to the human owner.

---

# Legacy Application

The previous portfolio implementation exists separately and is not part of this repository.

It may be consulted as a read-only reference and must not be modified unless explicitly instructed.

The legacy application may be inspected for:

- visual intent,
- existing art assets,
- and verified professional source material.

Its code and CSS are reference material only.

Do not:

- modify it,
- upgrade it,
- migrate its implementation,
- copy its CSS or layout code,
- or treat its technical architecture as implementation guidance for this rebuild.

This is a clean rebuild, not a code migration.

---

# Engineering Philosophy

Keep the implementation intentionally straightforward.

Technical skill should be demonstrated through:

- appropriate architectural choices,
- clear React component boundaries,
- useful TypeScript models,
- accessible interaction design,
- responsive behavior,
- maintainable CSS,
- thoughtful state management,
- meaningful automated tests,
- and documented engineering judgment.

Do not introduce complexity solely to make the repository appear more technically sophisticated.

Prefer the simplest solution that appropriately satisfies the current requirements.

---

# Core Technology

The current project baseline is:

- Vite
- React
- TypeScript
- semantic HTML
- responsive CSS
- CSS Modules
- a small shared CSS-variable/token layer
- Vitest
- React Testing Library
- static hosting

These technologies are the project default, not immutable rules.

Codex must not autonomously replace the established stack.

If a future requirement clearly justifies a different tool or architectural approach, surface that as a human decision with alternatives and tradeoffs rather than assuming either:

- that the existing stack can never evolve, or
- that introducing a new technology is automatically appropriate.

Do not add without human approval:

- a global state-management library,
- a UI/component framework,
- CSS-in-JS,
- a backend,
- a CMS,
- authentication,
- server-side rendering,
- a database,
- runtime GitHub API integration,
- a runtime animation framework,
- or other major application infrastructure.

---

# Information Architecture

The portfolio has four first-class professional sections:

1. Profile
2. Work
3. Skills
4. Contact

This four-section structure is a firm product decision.

Do not autonomously:

- add another first-class section,
- remove a section,
- merge sections,
- rename sections,
- reorder sections,
- or substantially change how users conceptually navigate between them.

The professional labels should remain clear.

Do not replace names such as `Work` or `Skills` with RPG terminology such as:

- Quests,
- Abilities,
- Craft,
- Equipment,
- or similar thematic substitutions.

The interface supplies the JRPG metaphor.

The professional information should remain understandable without interpreting the metaphor.

---

# Work Section

`Work` means professional employment and resume-style experience.

It may contain:

- employers,
- positions,
- role summaries,
- responsibilities,
- accomplishments,
- and relevant technologies.

It is not currently:

- a GitHub repository browser,
- a live development-activity feed,
- or a personal-project gallery.

Do not add:

- Repository Log,
- GitHub API fetching,
- automatic repository cards,
- or repository integrations.

GitHub or curated software projects may be reconsidered later when substantive public repositories exist.

---

# Interaction Model

The site is one persistent JRPG-style interface.

Profile, Work, Skills, and Contact are different content states within that interface, not independent routed pages.

Do not reinterpret the site as:

- traditional routed pages,
- a long scrolling portfolio,
- a conventional tabbed website that abandons the JRPG presentation,
- or another navigation metaphor.

The interaction model may only be substantially changed after human review.

---

## Application State

Section selection should use ordinary React application state.

Do not introduce React Router solely to represent Profile, Work, Skills, and Contact.

The selected section should synchronize with URL fragments such as:

- `#profile`
- `#work`
- `#skills`
- `#contact`

This should allow:

- deep linking,
- bookmarking,
- browser Back/Forward behavior,
- and direct access to a selected portfolio section.

Codex may use ordinary local component state when needed.

Codex must stop for human review before:

- changing the overall state-management approach,
- introducing shared/global state infrastructure,
- changing the URL-fragment model,
- or introducing persistence such as localStorage for application state.

---

# Primary Party Menu

The initial interface should resemble a classic Final Fantasy IV-era party/status menu.

The exact visual design should be original rather than a reproduction of copyrighted game assets.

The primary screen broadly contains two areas.

## Character Panel

The character panel contains:

- a pixel-art portrait,
- name,
- professional role,
- professional level,
- email,
- and LinkedIn.

The intended conceptual presentation is similar to:

```text
Name        Justin Green
Class       Software Engineer
Level       Lead

Email       ...
LinkedIn    ...
```

Professional content should remain readable and clear even though it is presented through a game-inspired interface.

## Command Panel

The command panel contains:

```text
Profile
Work
Skills
Contact
```

The menu should visually resemble a classic JRPG command menu.

---

# Detail Interface

Selecting Profile, Work, Skills, or Contact from the initial party screen enters a secondary detail interface.

The detail interface broadly contains:

- the current section title,
- alternate character artwork,
- the persistent Profile / Work / Skills / Contact command menu,
- and a larger lower content window containing the selected section.

The currently selected command should be reinforced with a classic JRPG-style hand/glove cursor.

The detailed identity/contact block from the initial party menu should not be repeated in:

- Profile,
- Work,
- or Skills.

It should appear again within Contact where appropriate.

---

# Content Organization

Professional content should be separated by domain.

Prefer a structure similar to:

```text
src/
├── data/
│   ├── profile.ts
│   ├── experience.ts
│   ├── skills.ts
│   ├── contact.ts
│   └── navigation.ts
└── types/
    └── portfolio.ts
```

Do not consolidate these content areas back into one monolithic `portfolio.ts` content module.

Shared TypeScript types may live separately from content records.

---

## TypeScript Modeling

Keep content models lightweight.

Use enough structure to:

- make content clear,
- prevent obvious mistakes,
- and make components straightforward to consume.

Codex may make small type changes needed to represent already-approved content.

Examples include:

- adding an optional field required by actual content,
- adding a contact URL,
- representing employment information that exists in the source material,
- or correcting an inaccurate optional/required field.

Codex must stop for human review before introducing:

- a generalized content model,
- a schema-driven content system,
- a CMS-like abstraction,
- a universal content-block engine,
- MDX/content generation infrastructure,
- runtime schema validation,
- or another abstraction that changes how multiple content areas are authored or rendered.

Do not introduce complex domain modeling simply to make the TypeScript appear more sophisticated.

---

# Section Components

Each major professional section should have its own component/file.

Prefer:

```text
src/
└── sections/
    ├── ProfileSection.tsx
    ├── WorkSection.tsx
    ├── SkillsSection.tsx
    └── ContactSection.tsx
```

Do not combine all four section implementations into one large page module.

Codex may independently:

- extract small local components,
- reorganize a section internally,
- or create helpers that improve readability.

Do not extract trivial components solely to increase abstraction.

Codex must stop for human review when a component-structure decision would establish or substantially change a reusable architectural pattern across multiple parts of the application.

---

# Broader Architectural Changes

Codex may refactor within the established architecture when behavior and architectural responsibilities remain substantially the same.

Examples of acceptable autonomous refactoring include:

- extracting a focused hook,
- reorganizing files,
- simplifying duplicate logic,
- extracting a utility,
- or clarifying existing state synchronization.

Codex must stop for human review before introducing or substantially changing a cross-cutting architectural pattern that affects multiple areas of the application.

Examples include:

- an application-wide provider architecture,
- an event bus,
- a generic screen-rendering engine,
- a plugin system,
- a configuration-driven rendering framework,
- or a substantial redistribution of responsibility between data, application state, and presentation.

Refactoring should not quietly redesign the application.

---

# Visual Direction

The classic JRPG identity is a central product requirement.

The visual direction is inspired by Final Fantasy IV-era menu and status interfaces while remaining an original implementation.

Codex may polish execution within this concept.

Codex must not replace or substantially reinterpret:

- the JRPG menu concept,
- the primary party/status screen,
- the detail-screen composition,
- the character-art treatment,
- the glove cursor concept,
- or the established transition hierarchy

without human review.

---

# Visual Implementation

Use a hybrid CSS + image-asset approach.

## CSS should primarily handle

- menu/window frames,
- borders,
- layout,
- spacing,
- responsive behavior,
- backgrounds,
- interaction states,
- focus states,
- and ordinary visual effects.

## Image assets should primarily handle

- character portraits,
- alternate character artwork,
- the hand/glove cursor,
- and distinctive artwork or scenery where a real asset provides stronger identity.

Do not replace intentionally supplied artwork with CSS-generated approximations without approval.

Do not use copyrighted Final Fantasy art or UI assets as production application assets.

---

# Styling Architecture

Use CSS Modules for component-local styles.

Use a small shared CSS-variable/token layer for important visual values such as:

- menu/window colors,
- borders,
- text colors,
- selected states,
- focus states,
- spacing,
- common typography,
- and other values that meaningfully define the visual system.

The token layer should improve consistency without becoming an enterprise-scale design system.

Codex may independently tune:

- spacing,
- border thickness,
- shadows,
- minor color values,
- transition timing,
- and responsive measurements

within the approved visual direction.

Core visual values should not be scattered unnecessarily as unrelated hard-coded values when a shared variable would improve clarity.

---

# Typography

The project's pixel/JRPG display font is self-hosted from the repository's font assets.

Do not restore runtime Google Fonts loading for the display font.

The pixel font is an accent/display font rather than the default body font.

Use it selectively for:

- command menus,
- headings,
- window labels,
- and small thematic interface elements.

Longer professional content should prioritize readability using an appropriate system-font stack.

This typography direction is a current design choice and may be revisited later by the human owner.

Do not introduce a runtime font CDN without approval.

---

# Responsive Behavior

Use a hybrid responsive layout.

Preserve the intended JRPG multi-panel composition when available screen space allows it.

At narrow widths, Codex may independently:

- reflow panels,
- stack panels,
- resize artwork,
- adjust spacing,
- adjust breakpoints,
- or otherwise modify layout

to maintain readability and usability.

Codex should not simply shrink the desktop composition until it becomes difficult to read or interact with.

Professional navigation labels should remain:

- Profile,
- Work,
- Skills,
- Contact.

Do not abbreviate or replace them with thematic alternatives merely to fit a narrow screen.

Codex must stop for human review when a responsive change alters the interaction model rather than only the layout.

Examples requiring human review include:

- replacing the menu with a hamburger menu,
- hiding destinations behind a disclosure control,
- changing to swipe-only navigation,
- or otherwise creating a different mobile navigation system.

---

# Keyboard Interaction

Normal web keyboard behavior is the accessibility baseline.

Required native behavior includes:

- Tab navigation,
- Shift+Tab navigation,
- Enter activation,
- Space activation where semantically appropriate,
- and clearly visible focus indicators.

The menu may additionally provide RPG-enhanced keyboard interaction.

Arrow Up and Arrow Down may move between:

- Profile,
- Work,
- Skills,
- Contact.

The glove cursor may visually reinforce selection.

Enhanced RPG behavior must not replace or interfere with normal browser keyboard behavior.

The glove cursor must never be the only indication of:

- keyboard focus,
- selected state,
- or active section.

Do not implement an ARIA application-style menu or complex roving-tabindex system merely to simulate a videogame when ordinary semantic navigation provides better browser behavior.

---

# Section-Change Accessibility

When a user activates Profile, Work, Skills, or Contact:

- keyboard focus should remain on the menu control that was activated,
- the active semantic state should update,
- the new content region should be meaningfully identified,
- and assistive technology should be able to understand that the displayed content changed.

Do not automatically move focus into the newly rendered section under the current interaction model.

Codex may independently fix obvious semantic and accessibility defects when the fix preserves the established interaction model.

Codex must stop for human review when an accessibility change would materially alter how users:

- navigate,
- move focus,
- activate controls,
- discover content,
- or otherwise consume the interface.

---

# General Accessibility

Accessibility is part of implementation, not a later cleanup task.

Prefer semantic HTML and native browser behavior.

Maintain:

- logical document structure,
- appropriate landmarks,
- valid heading hierarchy,
- visible focus,
- keyboard usability,
- sufficient text contrast,
- meaningful accessible names,
- appropriate link/button semantics,
- clear active-state semantics,
- correct handling of decorative imagery,
- and reduced-motion support.

ARIA should only be introduced when native HTML does not already provide the appropriate semantics.

Accessibility improvements that preserve existing interaction behavior may be made autonomously.

Accessibility changes that alter the interaction model require human review.

---

# Motion

Motion should reinforce hierarchy and state changes.

Motion must never be necessary to understand or operate the interface.

## Background

Visible gaps should exist between JRPG-style menu windows so the application background remains visible.

The background may use a faint, slow-moving blue-on-blue gradient with only slight contrast.

It should feel atmospheric rather than attention-grabbing.

## Hand Cursor

The glove/hand cursor may gently bob by a small distance.

It should not blink.

## Initial Detail Transition

Selecting a command from the initial party menu may enter the detail interface using a right-to-left overlay/swipe effect.

The intended feeling is that the detail screen is being pulled over the initial party/status screen.

This larger transition represents entering the detail interface.

## Section Switching

Once inside the detail interface, switching between:

- Profile,
- Work,
- Skills,
- and Contact

should use little or no large-scale transition animation.

The primary content window may simply update.

## Reduced Motion

Respect `prefers-reduced-motion`.

When reduced motion is requested:

- stop background movement,
- keep the hand cursor stationary,
- disable the large right-to-left screen transition,
- and replace unnecessary animated transitions with static or immediate state changes.

Codex may tune animation timing and movement distance within this concept.

Codex must stop for human review before introducing a materially different animation concept or animation system.

---

# Professional Content Integrity

Professional facts must come from reviewed source material.

Codex must never invent, extrapolate, or embellish professional information.

This includes:

- employers,
- job titles,
- dates,
- technologies,
- responsibilities,
- accomplishments,
- project ownership,
- metrics,
- performance improvements,
- team sizes,
- customer names,
- and business outcomes.

Codex may rewrite already-approved facts for clarity or presentation only when the factual meaning remains unchanged.

If required information is missing:

- do not insert plausible sample content,
- do not make assumptions,
- do not infer a likely metric or responsibility.

Leave the item unresolved and surface the missing information for human review.

Sample professional identities such as placeholder names, employers, jobs, resumes, or achievements must not ship in the application.

---

# Professional Narrative

The portfolio should reinforce the owner's established professional direction.

Codex may format and present already-approved professional material.

Codex must stop for human review before materially:

- rewriting,
- reinterpreting,
- condensing,
- expanding,
- prioritizing,
- omitting,
- or reframing

professional experience in a way that changes the professional story being told.

The intended overall professional direction is frontend-focused software engineering leadership, including strengths such as:

- modernization of mature applications,
- frontend engineering,
- React,
- TypeScript,
- JavaScript,
- Vue,
- Angular,
- accessibility,
- user experience,
- clarification of ambiguous requirements,
- incremental technical planning,
- developer workflow improvement,
- mentorship,
- thoughtful AI-assisted engineering,
- and the ability to work across frontend and appropriate full-stack concerns.

Do not reposition the owner as primarily:

- an AI engineer,
- a backend-only engineer,
- a defense-focused engineer,
- or a generic developer defined by an exhaustive list of technologies.

---

# Resume

The Contact section should provide a downloadable real PDF resume supplied by the human owner.

Do not generate, synthesize, or substitute a resume from portfolio data unless explicitly requested in the future.

Do not ship:

- a placeholder resume,
- a sample resume,
- a `.txt` stand-in,
- or invented resume content.

The website may contain more professional detail than the downloadable PDF resume.

The PDF remains a curated recruiter-oriented artifact rather than a complete duplicate of everything available through the site.

---

# Testing

Automated testing should remain lightweight and behavior-focused.

The existing testing approach should use:

- Vitest,
- React Testing Library,
- and related lightweight helpers where appropriate.

Priority should go to meaningful behaviors such as:

- menu selection,
- keyboard navigation,
- active-section state,
- URL-fragment synchronization,
- browser-history behavior where appropriate,
- and representative section rendering.

Do not add tests merely to maximize coverage numbers.

Codex may independently:

- add tests,
- remove obsolete tests,
- update tests,
- reorganize tests,
- or add narrowly scoped dev-only test helpers

within the existing testing approach.

Codex must stop for human review before introducing a new testing layer or testing toolchain, including:

- Playwright,
- Cypress,
- browser automation,
- visual regression infrastructure,
- automated accessibility frameworks such as a new axe testing layer,
- external screenshot services,
- or CI/testing infrastructure.

---

# Dependencies

Keep the dependency surface small.

Use explicit compatible package-version ranges rather than `"latest"`.

Commit the package lockfile.

Build and development tools such as Vite and its React plugin should live under `devDependencies` when appropriate.

Add dependencies only when they solve a concrete problem.

Codex may add a small dev-only utility autonomously when it is:

- routine,
- narrowly scoped,
- clearly appropriate,
- and does not affect runtime architecture.

Any new:

- runtime dependency,
- external API,
- hosted service,
- analytics integration,
- runtime third-party service,
- or major development infrastructure

requires human approval before implementation.

---

# Static Hosting and Deployment

The application is intended for static hosting.

Codex may independently make routine static-build or hosting-configuration changes within that model.

Examples include:

- correcting asset paths,
- adjusting Vite configuration,
- or configuring an expected static base path.

Codex must stop for human review before:

- changing the hosting model,
- adding server-side infrastructure,
- introducing serverless application logic,
- introducing Docker-based deployment architecture,
- adopting SSR,
- or otherwise adding deployment infrastructure beyond ordinary static hosting.

---

# Metadata

Keep metadata handling lightweight.

Professional identity information such as the owner's name should have a clear centralized source where practical rather than being duplicated throughout the application.

The browser document title should reflect the active section.

For example:

```text
Justin Green — Software Engineer
Justin Green — Profile
Justin Green — Work
Justin Green — Skills
Justin Green — Contact
```

Do not introduce a large SEO or metadata framework solely to support this behavior.

Global social/description metadata may remain simple unless a future requirement justifies a more sophisticated approach.

---

# Human Decision Gates

Codex should independently perform routine engineering work inside already-established product and architecture decisions.

Do not interrupt the human owner for trivial implementation choices.

The purpose of a decision gate is to surface consequential alternatives, not to create bureaucracy.

---

## Decisions Codex May Make Autonomously

Examples include:

- straightforward component implementation,
- ordinary local component extraction,
- CSS implementation within the approved visual direction,
- layout adjustments,
- breakpoint tuning,
- small type corrections,
- bug fixes,
- routine refactoring,
- test implementation within the existing testing stack,
- obvious semantic HTML corrections,
- accessibility fixes that preserve established interaction behavior,
- minor animation timing adjustments,
- and ordinary local React state.

---

## Decisions Requiring Human Review

Stop before implementing a change that would materially affect any of the following.

### Information Architecture

Stop before:

- adding, removing, merging, renaming, or reordering first-class sections,
- or changing how users conceptually move between them.

### Application Architecture

Codex may refactor while architectural responsibilities remain substantially the same.

Stop before introducing or substantially changing a cross-cutting architectural pattern affecting multiple areas of the application.

### State Management

Codex may use ordinary local state.

Stop before:

- changing the overall state-management approach,
- introducing global/shared application state infrastructure,
- changing the URL-fragment model,
- or adding persistent application state.

### Component Architecture

Codex may make ordinary local component extractions.

Stop when a component-structure decision would establish or substantially change a reusable architectural pattern across multiple parts of the application.

### Content Models

Codex may make small type changes needed by approved content.

Stop before introducing a generalized content model, schema system, or abstraction that changes how multiple content areas are authored or rendered.

### Responsive Design

Codex may freely adjust:

- breakpoints,
- stacking,
- sizing,
- spacing,
- and layout.

Stop when a responsive change alters the interaction model.

### Accessibility

Codex may independently fix obvious semantic/accessibility issues when the established interaction model remains intact.

Stop when the accessibility change would materially alter how users:

- navigate,
- focus,
- activate controls,
- or consume content.

### Visual Direction and Motion

Codex may tune the established design.

Stop when a change alters:

- the overall visual identity,
- screen composition,
- major artwork treatment,
- cursor concept,
- or animation concept.

### Dependencies and External Services

Codex may add narrowly scoped dev-only utilities when appropriate.

Stop before adding:

- runtime dependencies,
- external APIs,
- hosted services,
- or third-party runtime integrations.

### Testing

Codex may add or adjust individual tests within Vitest/React Testing Library.

Stop before introducing:

- another testing layer,
- browser automation,
- visual regression,
- automated accessibility tooling,
- or CI/testing infrastructure.

### Deployment

Codex may make routine static-build configuration changes.

Stop before changing the hosting model or introducing deployment infrastructure.

### Professional Content

Codex may format and present already-approved content.

Stop before materially rewriting, reinterpreting, condensing, expanding, prioritizing, omitting, or reframing experience in a way that changes the professional narrative.

Codex must never invent professional facts.

---

# Decision-Gate Response Format

When a human decision is required, do not implement the consequential change first.

Present:

## Decision needed

A concise description of the problem.

## Why it matters

Explain why the decision affects the product, architecture, usability, accessibility, maintainability, or professional presentation.

## Options

Present the reasonable alternatives.

Do not invent alternatives merely to create the appearance of choice.

## Tradeoffs

Explain the meaningful advantages and disadvantages.

## Recommendation

Provide a recommendation and explain the reasoning.

## Implementation impact

Briefly identify the likely files, components, behaviors, or systems affected.

Then stop and wait for the human decision.

---

# AI-Assisted Development Principle

AI-assisted development is an implementation accelerator, not a substitute for engineering judgment.

Codex may generate, refactor, test, and document code within established decisions.

Consequential architecture, product, UX, and professional-content decisions remain accountable to the human owner.

Generated code is held to the same standards as manually written code for:

- correctness,
- readability,
- maintainability,
- accessibility,
- testing,
- and architectural fit.

The repository does not need to disguise the use of AI-assisted development.

Instead, it should demonstrate deliberate human direction, appropriate technical restraint, and the ability to critically review and guide generated implementation.

Do not introduce unnecessary complexity merely to make the repository appear more technically sophisticated.