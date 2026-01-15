# UNBRØL — Radical Subtraction

UNBRØL is a digital infrastructure entity based in Brussels. We focus on removing clutter ("brol") to deliver high-performance, strictly essential web experiences.

## Architecture

This project is built on a **Zero-JS** philosophy (with progressive enhancement) for maximum performance and durability.

### Core Stack

- **Engine**: [Astro](https://astro.build) (Static Site Generation)
- **Styling**: [Tailwind CSS](https://tailwindcss.com) (v4 with `@theme` configuration)
- **deployment**: Cloudflare Pages
- **Serverless**: Cloudflare Pages Functions (Form handling)

### Key Features

- **CSS-Driven State**: The "Human/Machine" toggle and Contact Overlay are controlled entirely via CSS Checkbox Hacks (`:checked` + `peer` selectors), requiring no client-side JavaScript for core navigation.
- **Machine Layer**: A raw JSON view of the site's content, exposed as a secondary interface layer.
- **Progressive Enhancement**: A custom cursor is added via vanilla JavaScript for desktop users, but the site remains fully functional without it.

## Development

```bash
# Install dependencies
npm install

# Start local dev server
npm run dev

# Build for production
npm run build
```
