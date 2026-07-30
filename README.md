# Christian Dorsey — Portfolio

A single-page portfolio site for a NYC-based photographer and music producer. Built as
plain HTML/CSS/JS with no build step, no framework, and no dependencies — open
`index.html` in a browser (via a local server, see below) and it just runs.

Live at [cdorsey.studio](https://cdorsey.studio).

## Structure

```
index.html          All markup — hero, contact sheet, sound, about, footer, lightbox
css/style.css        All styles
js/main.js            All behavior: the FRAMES data, hero randomization, nav scroll
                       behavior, contact-sheet grid + lightbox, Bandcamp embeds
images/               Full-size photos used by the contact sheet grid
images/hero/           Pre-graded (grayscale/contrast/brightness baked in) copies
                       used only for the randomized hero background
images/watermarked/    Pre-watermarked copies used only in the lightbox
CNAME                  Custom domain for GitHub Pages (cdorsey.studio)
```

There's no bundler, package.json, or CDN dependency besides two Google Fonts
(Fraunces, Space Grotesk) loaded via `<link>` in `index.html`.

## Running locally

From the repo root:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000/index.html`. Any static server works — this is just
the simplest option with no install beyond Python itself. Opening `index.html`
directly via `file://` mostly works but some browsers restrict things like `fetch`
from local files, so prefer a local server.

## Deployment

Hosted on GitHub Pages, deployed from the `main` branch (Settings → Pages → Deploy
from a branch → `main` / root). The `CNAME` file points the custom domain
(`cdorsey.studio`) at Pages — if you ever need to detach the custom domain, delete
`CNAME` and update the DNS records at the registrar accordingly, or Pages will keep
trying to serve the old domain.

Pushing to `main` is the entire deploy process — GitHub Pages picks up changes
automatically within a minute or two.

## Adding a new photo

See the **"HOW TO ADD A NEW PHOTO"** comment block at the top of `js/main.js` — it's
the source of truth and includes ready-to-run Python/Pillow commands. Short version:

1. Resize/compress the photo to 1800px wide, JPEG quality ~80 (matches the rest of
   the set, lands around 250–700KB).
2. Add an entry to the `FRAMES` array with its filename, a `frame` number (numbered
   scans) or `caption` (named shots), and an `instagram` post URL if you have one.
3. Generate a graded copy in `images/hero/` (same filename) — this photo can be
   randomly picked for the hero background, and the color grade is baked into pixels
   rather than a live CSS filter (see "Notable implementation details" below).
4. Generate a watermarked copy in `images/watermarked/` (same filename) — used only
   by the lightbox.

Skipping steps 3–4 doesn't break anything; the site falls back to the plain original
in both cases, just inconsistent with the rest of the set.

## Notable implementation details

- **Hero image** — chosen at random from `FRAMES` on every load, using the pre-graded
  copy in `images/hero/`.
- **Nav** — hides on scroll past 80px, reappears on hover near the top edge or when
  scrolled back near the top. The current section's link highlights based on scroll
  position (see `updateOnScroll` in `main.js`).
- **Contact sheet lightbox** — click any photo to open it large with prev/next
  carousel navigation (arrow keys, on-screen arrows, or swipe on touch devices),
  `Esc`/click-outside/× to close. Frame numbers count every entry's position in the
  array (including named/captioned ones), so numbering doesn't restart after a named
  shot.
- **Anti-saving deterrent** — right-click and drag are disabled on photos, and the
  lightbox images carry a "@chino.byl — #NN" watermark baked into the actual pixels
  (not a CSS overlay), so it survives screenshots and "Save Image As" alike. This is
  a deterrent, not real protection — view-source and dev tools still work regardless.
- **Contact email** — built at runtime in `main.js` instead of sitting in the HTML as
  plain text, so scrapers crawling the static markup don't harvest it.
- **Firefox performance workaround** — the hero background used to apply
  grayscale/contrast/brightness via a live CSS `filter`, which was fine on
  Chrome/Safari but made scrolling past the header noticeably slow on Firefox. The
  same look is now pre-baked into `images/hero/*` as actual pixels instead, and no
  filter runs at runtime. If you ever reintroduce a live filter on a large
  scroll-linked element, test on Firefox specifically — it's the outlier here.
- **Bandcamp embeds** — the "Recent sound" section embeds Bandcamp's `EmbeddedPlayer`
  iframes directly. There's no official API to control playback across iframes, so
  multiple tracks can currently play simultaneously if a user starts more than one.

## Credits

- Photography & music: Christian Dorsey ([@chino.byl](https://www.instagram.com/chino.byl/))
- Fonts: [Fraunces](https://fonts.google.com/specimen/Fraunces) and
  [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk) via Google Fonts
