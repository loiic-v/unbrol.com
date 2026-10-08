# UNBRØL – Radical subtraction

UNBRØL is a digital infrastructure entity based in Brussels. We focus on removing clutter ("brol") to deliver high-performance, strictly essential web experiences.

## Architecture

This project is built on a **zero-JS** philosophy (with progressive enhancement) for maximum performance and durability.

### Core stack

- **Engine**: [Astro](https://astro.build) (static site generation)
- **Styling**: [Tailwind CSS](https://tailwindcss.com) (v4 with `@theme` configuration)
- **Deployment**: Cloudflare Pages
- **Serverless**: Cloudflare Pages Functions (form handling)

### Key features

- **CSS-driven state**: the Brol-Switch (human/machine view) and the contact overlay are 2 checkboxes read with `html:has(:checked)`. No client-side JavaScript is needed for core navigation.
- **Scroll-driven motion**: grid rules draw in, the manifesto lights up, the footer wordmark loses its slash at the end of the page. All CSS, feature-detected, off under reduced motion.
- **Machine layer**: a raw JSON view of the site's content, exposed as a secondary interface layer.
- **Progressive enhancement**: a custom cursor, a terminal easter egg and an inline form submit are added with vanilla JavaScript, but the site remains fully functional without them.

See `ARCHITECTURE.md` for details.

## Development

```bash
# Install dependencies
npm install

# Start local dev server
npm run dev

# Build for production
npm run build
```
