# UNBRØL – System architecture and operations

## 1. Core architecture

- **Engine**: [Astro](https://astro.build) (static site generation).
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com) with the `@theme` config in `src/styles/global.css`.
- **Philosophy**: zero JS for the core experience, progressive enhancement on top.
  - **Global state**: 2 checkboxes drive the page. `#toggle-contact` (in the nav) opens the contact overlay, `#toggle-mode` (in the Brol-Switch) flips human/machine view. `global.css` reads them with `html:has(#id:checked)`, so the inputs can live inside their visible labels and stay keyboard reachable.
  - **Motion**: scroll effects are CSS scroll-driven animations (`animation-timeline: view()` / `scroll(root)`), gated by `@supports` and `prefers-reduced-motion`. Browsers without support (Firefox) and reduced-motion users get the final, static state. No JS fallback, by design.
  - **No frameworks**: no React/Vue/Svelte on the client. Pure HTML/CSS.
- **Data source**: single source of truth in `src/data/content.ts`. The machine view dumps it as tokenised JSON at build time.

## 2. Build pipeline

- **Command**: `npm run build`
- **Output**: `/dist` (static HTML/CSS/JS assets, stylesheets inlined).
- **Adapter**: default static adapter (compatible with any static host).

## 3. Deployment (Cloudflare Pages)

This project is optimised for [Cloudflare Pages](https://pages.cloudflare.com).

### Configuration

1.  **Connect Git repo**: select `loiic-v/unbrol.com`.
2.  **Build settings**:
    - **Framework preset**: `Astro`
    - **Build command**: `npm run build`
    - **Output directory**: `dist`
3.  **Environment variables**: none required for basic operation.

### Serverless functions

- **Location**: `/functions/api/submit-form.ts`
- **Runtime**: Cloudflare Pages Functions.
- **Behaviour**: intercepts `POST` requests to `/api/submit-form` and answers JSON.

## 4. Operational scripts

| Command           | Description                                                     |
| :---------------- | :-------------------------------------------------------------- |
| `npm run dev`     | Starts local dev server (http://localhost:4321).                |
| `npm run build`   | Generates production assets to `dist/`.                         |
| `npm run preview` | Serves the `dist/` folder locally for testing production build. |

## 5. Client-side JavaScript (all optional)

| Component                | Enhancement                                                                                  |
| :----------------------- | :------------------------------------------------------------------------------------------- |
| `CustomCursor.astro`     | Volt cursor on fine pointers.                                                                |
| `Hero.astro`             | Hold the Ø for 1 second to open the terminal.                                                |
| `TerminalOverlay.astro`  | The terminal itself (`help`, `whoami`, `rm -rf brol`, `exit`).                               |
| `ContactOverlay.astro`   | Escape closes, focus moves into the form, page behind is inert, submit via fetch with inline status. Without JS the form still posts to the function. |

## 6. Development notes

- **Rules**: section separators are `.rule` / `.rule-y` elements, not borders, so they can draw themselves on scroll. Use them for the major grid lines, borders for the rest.
- **The Ø**: `<span class="oslash">O<i class="slash"></i></span>`. Hovering the span (or an ancestor with `.extract`) slides the slash out. The footer `.wordmark` does the same on scroll.
- **Tailwind v4 reference**: configuration is handled via CSS variables and `@theme` blocks in `global.css`, not a JS config file.
