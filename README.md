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

- **Yasmin's photo**: replace the placeholder monogram in the "About" section (`.about-photo` in `index.html` / `styles.css`) with a real photo, e.g. `assets/yasmin.jpg`.
- **Contact email**: update the `mailto:hello@veloxitas.agency` links in `index.html`.
- **Client logos**: currently shown as text wordmarks in the trust bar; swap for real logo image files in `assets/` if preferred.