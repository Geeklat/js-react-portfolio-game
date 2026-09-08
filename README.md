# Justin Green Portfolio

A professional portfolio built with React and TypeScript using the visual language of classic 16-bit JRPG menu interfaces.

The project combines a distinctive game-inspired presentation with normal accessible web interaction, responsive layouts, browser history support, and deliberately lightweight frontend architecture.

## Live Portfolio

**[View the live portfolio](https://jgreen-portfolio.netlify.app/)**

![Skills screen from the Justin Green portfolio](docs/images/jgreen_portfolio_skills_screen.png)

## Engineering Highlights

- **Proportional architecture** — Uses local React state and URL fragments for deep linking and browser history without introducing routing or global-state infrastructure the application does not need.
- **Accessible interaction design** — Preserves native links and normal Tab navigation while adding Arrow/Home/End keyboard controls and a pixel-hand focus indicator.
- **Responsive CSS engineering** — Uses custom Grid/Flex layouts to preserve the JRPG composition across desktop and mobile, including practical handling of intrinsic Grid sizing and narrow-viewport overflow.
- **Behavior-focused testing** — Vitest and React Testing Library cover fragment navigation, browser history, keyboard focus, active state, cursor behavior, and transition lifecycle rather than optimizing for coverage numbers.

## Design and Interaction

The portfolio has four professional sections:

- Profile
- Work
- Skills
- Contact

The initial screen is styled after a classic JRPG character/status menu, with a persistent command interface leading into the four detail sections.

Navigation is synchronized with URL fragments:

- `#profile`
- `#work`
- `#skills`
- `#contact`

This supports direct links, bookmarks, and browser Back/Forward behavior without requiring React Router.

The command menu preserves normal browser interaction while adding optional JRPG-style keyboard navigation. The currently displayed section and keyboard-focused command are intentionally modeled as separate states.

Motion is kept restrained: the initial detail transition, background movement, and cursor animation reinforce state without being necessary to use the application. `prefers-reduced-motion` disables decorative motion.

## Technology

- React
- TypeScript
- Vite
- CSS Modules
- CSS Grid and Flexbox
- Vitest
- React Testing Library
- Static deployment with Netlify

The architecture is intentionally modest. The application does not use a router, global state library, runtime API, CMS, UI framework, or backend because those systems are not required by the product.

## Accessibility

The JRPG theme is layered on top of normal web behavior rather than replacing it.

The interface includes:

- Native links and normal Tab / Shift+Tab navigation
- Enter activation
- Optional Arrow Up / Down and Home / End command navigation
- Visible keyboard focus
- A pixel-hand cursor as supplemental visual feedback
- Separate active-section and keyboard-focus states
- Semantic document headings
- Reduced-motion support

## Local Development

Install dependencies:

```bash
npm install
```

Start the Vite development server:

```bash
npm run dev
```

Quality checks:

```bash
npm run lint
npm run typecheck
npm test
npm run build
npm run format:check
```

## Project Structure

```text
src/
├── assets/       # Pixel artwork and self-hosted fonts
├── components/   # Layout, menu, and shared UI components
├── data/         # Typed portfolio content and navigation data
├── hooks/        # URL-fragment synchronization
├── sections/     # Profile, Work, Skills, and Contact
├── styles/       # Shared visual tokens and global styles
└── types/        # Lightweight shared TypeScript models

docs/
├── AGENTIC-DEVELOPMENT.md
├── LICENSING.md
└── PROFESSIONAL-CONTENT-SOURCE-OF-TRUTH.md
```

Private working source material used to verify professional content is intentionally excluded from the public repository.

## Development Approach

This project uses a constrained, human-directed agent-assisted development workflow. Consequential product, architecture, accessibility, professional-content, and visual-design decisions remain human-owned, while coding agents assist with bounded implementation, inspection, testing, and verification.

Generated code is held to the same review and maintainability expectations as manually authored code.

For more detail, see [Human-Directed Agentic Development](docs/AGENTIC-DEVELOPMENT.md). Repository-level agent decision boundaries are documented in [`AGENTS.md`](AGENTS.md).

## Content Integrity

Professional claims in the portfolio are governed by the authority and conflict rules in [Professional Content Source of Truth](docs/PROFESSIONAL-CONTENT-SOURCE-OF-TRUTH.md).

Private résumé, LinkedIn, and working-source material is not stored in the public repository.

## Licensing

Application source code is licensed under the [MIT License](LICENSE).

Personal and professional portfolio content and personal artwork are not granted for reuse under the MIT License. Third-party assets and fonts retain their respective licenses.

See [Licensing](docs/LICENSING.md) for details.
