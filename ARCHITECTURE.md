# UNBRØL — System Architecture & Operations

## 1. Core Architecture

- **Engine**: [Astro](https://astro.build) (Static Site Generation).
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com) (Alpha/Beta with `@theme` config in `src/styles/global.css`).
- **Philosophy**: "Zero-JS" for interactions.
  - **Human/Machine Toggle**: Controlled by `#toggle-mode` checkbox + sibling selectors (`peer-checked`).
  - **Contact Overlay**: Controlled by `#toggle-contact` checkbox.
  - **No Frameworks**: No React/Vue/Svelte on the client. Pure HTML/CSS.
- **Data Source**: Single Source of Truth in `src/data/content.ts`.

## 2. Build Pipeline

- **Command**: `npm run build`
- **Output**: `/dist` (Static HTML/CSS/JS assets).
- **Adapter**: Default Static Adapter (compatible with any static host).

## 3. Deployment (Cloudflare Pages)

This project is optimized for [Cloudflare Pages](https://pages.cloudflare.com).

### Configuration

1.  **Connect Git Repo**: Select `loiic-v/unbrol.com`.
2.  **Build Settings**:
    - **Framework Preset**: `Astro`
    - **Build Command**: `npm run build`
    - **Output Directory**: `dist`
3.  **Environment Variables**:
    - None required for basic operation.

### Serverless Functions

- **Location**: `/functions/api/submit-form.ts`
- **Runtime**: Cloudflare Pages Functions.
- **Behavior**: Automatically intercepts `POST` requests to `/api/submit-form`.

## 4. Operational Scripts

| Command           | Description                                                     |
| :---------------- | :-------------------------------------------------------------- |
| `npm run dev`     | Starts local dev server (http://localhost:4321).                |
| `npm run build`   | Generates production assets to `dist/`.                         |
| `npm run preview` | Serves the `dist/` folder locally for testing production build. |

## 5. Development Notes

- **Custom Cursor**: Implemented as a progressive enhancement (`src/components/CustomCursor.astro`). It is the _only_ client-side JS component intended for visual flair.
- **Tailwind v4 Reference**: Configuration is handled via CSS variables and `@theme` blocks in `global.css`, not a JS config file.
