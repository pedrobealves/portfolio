# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm start` — dev server at http://localhost:4200 (development config)
- `npm run build` — production build to `dist/portfolio` (production is the default configuration)
- `npm test` — Vitest tests via `ng test` (`@angular/build:unit-test` builder, jsdom; watches in a TTY, single run otherwise — CI uses plain `npx ng test`)
- `ng test --include='**/app.spec.ts'` — run a single spec file
- `ng deploy` — publish to GitHub Pages (angular-cli-ghpages)

Linting: `npm run lint` (angular-eslint; flat config in `eslint.config.js` — component selectors may be `element` or `attribute` with the `app` prefix, matching the shared button primitives). Component schematics set `skipTests: true`, so `ng generate component` creates no spec files; the existing specs are `app.spec.ts` and `portfolio-content.spec.ts`. CI (`.github/workflows/ci.yml`) runs lint, `npm run build`, and `npx ng test` on every push to `main` and on pull requests.

## Architecture

Single-page portfolio site: one route (`''` → `Home`). Angular 22 with standalone components only — no NgModules — and zoneless change detection (`provideZonelessChangeDetection()`, no zone.js dependency; all components are OnPush + signals). Bootstrap providers (router, `provideHttpClient(withFetch())`, `provideAngularSvgIcon`) live in `src/app/app.config.ts`.

Files and classes follow the v20+ style guide: no `Component`/`Service` type suffixes (`home.ts` exports `Home`, `button.ts` exports `Button`).

### Data-driven content

All portfolio content (profile, education, skills, projects) lives in `src/assets/*.json`, typed by the models in `src/app/home/models/`, and fetched by `PortfolioContent` (`src/app/home/portfolio-content.ts`). It wraps one `httpResource` per JSON file and exposes `profile`, `educations`, `skills`, `projects` — each with `value()` (typed fallback while loading or on error), `error()` and `reload()` — plus a `loadFailed` computed and `retry()`, which reloads only the failed resources. Components read `x.value()` directly in templates (no `AsyncPipe`); on failure the home page shows a "Tentar novamente" retry button. To change displayed content, edit the JSON — not templates. Content text is in Portuguese.

### Internationalization

The site ships two locales via `@angular/localize`: source `pt-BR` at `/` and `en` at `/en/` (see the `i18n` block in `angular.json`; the production build sets `localize: true`). Per-locale content lives in `src/assets/i18n/<locale>/*.json` (folders named exactly `pt-BR` and `en`, matching `LOCALE_ID`); `PortfolioContent` builds fetch URLs from the injected `LOCALE_ID`. Fixed UI chrome uses `i18n` template markers extracted with `npx ng extract-i18n --output-path src/locale --format xlf` and translated in `src/locale/messages.en.xlf` (add a `<target>` per unit). Page `<title>`/meta and the language switch are runtime, keyed by `LOCALE_ID` (see `app.ts`, `home-header.ts`). `npm run build` emits both locales under `dist/portfolio/browser/` (root = pt-BR, `en/` = English). Do not set `baseHref` on the deploy target — `subPath` handles per-locale base hrefs.

### Component structure

- `home/` — the page (`home.ts`/`.html`/`.scss`), `portfolio-content.ts`, `models/`
- `home/components/` — panel and section components (`home-header`, `home-projects`, `home-carousel`, …). Panels are pure composition with inline templates; sections have separate `.html`/`.scss`.
- `shared/` — UI primitives, one folder each (`button`, `card`, `card-button`, `card-header`, `round-button`). Buttons/links use attribute selectors (`button[app-button], a[app-button]`) so the component attaches to native elements; follow this pattern for new interactive primitives.

The prev/next buttons in `home-projects` drive the Embla carousel (`embla-carousel-angular`) in `home-carousel` through a `#carousel` template reference, calling its `scrollPrev()`/`scrollNext()` methods, which reach the Embla API via a `viewChild` signal query. Project screenshots render with `NgOptimizedImage`.

### Styling

- SCSS throughout. Shared design tokens in `src/assets/styles/_variables.scss` (oklch color palette, `$padding`, `$border-radius`), imported as `@use '_variables' as *;` — `stylePreprocessorOptions.includePaths` makes it resolvable from any component.
- Viewport-proportional sizing: `body` font-size is `0.9vw` (3vw under 992px, fixed 13px above 1440px) and all component dimensions use `em`, so the whole layout scales with the viewport. Use `em`, not `px`, in component styles.
- Production budget caps component styles at 2kb warning / 4kb error — keep component SCSS minimal and put shared rules in `styles.scss`.
- Icons render via `angular-svg-icon` (`<svg-icon src="assets/icons/…">`) with color modifier classes (`.icon--yellow` etc.) defined in `styles.scss`.
