# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm start` — dev server at http://localhost:4200 (development config)
- `npm run build` — production build to `dist/portfolio` (production is the default configuration)
- `npm test` — Karma/Jasmine tests via `ng test`
- `npx ng test --watch=false --browsers=ChromeHeadless` — single headless run (what CI uses)
- `ng test --include='**/app.component.spec.ts'` — run a single spec file
- `ng deploy` — publish to GitHub Pages (angular-cli-ghpages)

No lint target is configured. Component schematics set `skipTests: true`, so `ng generate component` creates no spec files; the existing specs are `app.component.spec.ts` and `data.service.spec.ts`. CI (`.github/workflows/ci.yml`) runs `npm run build` and the headless test command on every push to `main` and on pull requests.

## Architecture

Single-page portfolio site: one route (`''` → `HomeComponent`). Angular 17 with standalone components only — no NgModules. Bootstrap providers (router, `provideHttpClient`, `provideAngularSvgIcon`) live in `src/app/app.config.ts`.

### Data-driven content

All portfolio content (profile, education, skills, projects) lives in `src/assets/*.json`, typed by the models in `src/app/features/home/models/`, and fetched once by `DataService` (`features/home/services/data.service.ts`). The service exposes cached content signals — `profile`, `educations`, `skills`, `projects` (built with `toSignal` + `catchError` typed fallbacks) plus a `loadFailed` signal — and components read them directly in templates (no `AsyncPipe`). To change displayed content, edit the JSON — not templates. Content text is in Portuguese.

### Component structure

- `features/home/pages/home/` — the page; composes three panel components (left/center/right)
- `features/home/components/` — panel and section components (`home-header`, `home-projects`, `home-carousel`, …). Panels are pure composition with inline templates; sections have separate `.html`/`.scss`.
- `shared/components/` — UI primitives (`card`, `button`, `round-button`, `round-link`, …). Buttons/links use attribute selectors (`button[app-button], a[app-button]`) so the component attaches to native elements; follow this pattern for new interactive primitives.

The prev/next buttons in `home-projects` drive the Embla carousel (`embla-carousel-angular`) in `home-carousel` through a `#carousel` template reference, calling its `scrollPrev()`/`scrollNext()` methods directly.

### Styling

- SCSS throughout. Shared design tokens in `src/assets/styles/_variables.scss` (oklch color palette, `$padding`, `$border-radius`), imported as `@use '_variables' as *;` — `stylePreprocessorOptions.includePaths` makes it resolvable from any component.
- Viewport-proportional sizing: `body` font-size is `0.9vw` (3vw under 992px, fixed 13px above 1440px) and all component dimensions use `em`, so the whole layout scales with the viewport. Use `em`, not `px`, in component styles.
- Production budget caps component styles at 2kb warning / 4kb error — keep component SCSS minimal and put shared rules in `styles.scss`.
- Icons render via `angular-svg-icon` (`<svg-icon src="assets/icons/…">`) with color modifier classes (`.icon--yellow` etc.) defined in `styles.scss`.
