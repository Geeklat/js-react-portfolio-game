# Justin Green Portfolio

A static React and TypeScript portfolio presented as an original, classic-JRPG-inspired interface. The application has four professional sections—Profile, Work, Skills, and Contact—inside one persistent interface.

## Local development

```bash
npm install
npm run dev
```

Quality commands:

```bash
npm run lint
npm run typecheck
npm test
npm run build
npm run format:check
```

## Interaction model

The empty URL fragment displays the initial party/status screen. Selecting a command opens the detail interface and synchronizes local React state with one of these fragments:

- `#profile`
- `#work`
- `#skills`
- `#contact`

This supports direct links, bookmarks, and browser Back/Forward without React Router. The command menu remains present between states so focus stays on the control the visitor activated.

## Project structure

- `src/data/` contains separate profile, experience, skills, contact, navigation, and asset-slot data.
- `src/sections/` contains one component for each professional section.
- `src/components/layout/` contains the party and detail compositions.
- `src/components/menu/` contains the persistent command menu.
- `src/components/ui/` contains focused shared UI primitives.
- `src/hooks/useSectionHash.ts` synchronizes section state with URL fragments.
- `src/types/portfolio.ts` contains lightweight shared content types.

## Professional content sources

Professional facts must be derived from the authority rules in `docs/PROFESSIONAL-CONTENT-SOURCE-OF-TRUTH.md`. Working source documents belong in the ignored `local-source/` directory:

- `local-source/Justin_Green_Master_Resume.md`
- `local-source/COVER_LETTER_SOURCE_OF_TRUTH.md`
- `local-source/LinkedInProfile.pdf`

Never commit these private working references or infer missing professional facts. Work uses a tiered presentation: recent relevant roles can receive fuller treatment while every earlier role remains represented concisely.

## Assets and résumé

The portrait and menu pointer use owner-approved pixel-art PNG assets configured in `src/data/assets.ts`. The portrait currently serves both the party and detail interfaces.

Do not create a sample résumé. When the owner supplies the real PDF, place it in `public/` and set `resumeUrl` in `src/data/contact.ts`. The download action remains absent while that value is `null`.

## Visual and accessibility behavior

The menu and display typography use the self-hosted Press Start 2P font. Body content uses a readable system-font stack. CSS Modules handle component layout and a small global token layer defines the shared JRPG window appearance.

Native links preserve Tab, Shift+Tab, and Enter behavior. Arrow Up/Down and Home/End provide optional command-menu enhancement. Active state, visible focus, and a restrained section announcement do not depend on the decorative cursor.

The initial detail transition moves right-to-left, section changes inside detail mode are immediate, and the background and cursor move gently. `prefers-reduced-motion` disables decorative motion and the entrance transition.

## Hosting

The application builds to static files with Vite. Because navigation uses fragments rather than client-side routes, a static host does not need fallback rewrites for portfolio sections.

## Development approach

This project uses a deliberately constrained, human-directed agentic development workflow. Agents assist with bounded implementation and verification, while consequential product, architecture, accessibility, content, and design decisions remain human-owned. See [Human-Directed Agentic Development](docs/AGENTIC-DEVELOPMENT.md) for the methodology and [`AGENTS.md`](AGENTS.md) for the operational decision boundaries.

## Licensing

Application source code is licensed under the MIT License. Personal and professional portfolio content and personal artwork are not covered by that license. Third-party assets and fonts retain their respective licenses. See [Licensing](docs/LICENSING.md) for details.
