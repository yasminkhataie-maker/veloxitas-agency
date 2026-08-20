# Veloxitas Agency

Marketing & Operations Agency website — a static, single-page site.

> No industry too niche. No market too far.

## Structure

- `index.html` — page markup and content
- `styles.css` — all styling
- `script.js` — mobile menu, scroll reveal, footer year
- `assets/` — favicon and other static assets

No build step — plain HTML/CSS/JS. Open `index.html` directly in a browser, or serve the folder with any static file server.

## Deploying with GitHub Pages

1. Go to **Settings → Pages** on this repo.
2. Under "Build and deployment", set **Source** to `Deploy from a branch`.
3. Branch: `main`, folder: `/ (root)`. Save.
4. The site will publish at `https://yasminkhataie-maker.github.io/veloxitas-agency/`.

## To customize

- **Contact email**: update the `mailto:yasmin@veloxitas.com` links in `index.html`.
- **Book a Call**: the header, mobile menu, and closing-band buttons link out to Calendly — update the URL in `index.html` if it changes.
- **Client logos**: real logo files live in `assets/logo-*`, listed in the `#logo-track` list in `index.html`.