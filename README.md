# Portfolio

A simple, clean portfolio built with plain HTML, CSS, and JavaScript. No frameworks, no build step, no `node_modules`.

**Live site:** [raycode22.github.io/portfolio](https://raycode22.github.io/portfolio/)

---

## What's inside

- **Light and dark theme.** Follows your system setting, and remembers your choice if you flip it.
- **Soft loading screen.** Waits for fonts and images so the page appears all at once. Skips the delay if you prefer reduced motion.
- **Project cards.** Each one shows its status, tech stack icons, and demo and source links.
- **CV preview.** Opens right on the page with the native HTML popover. No library needed.
- **Accessible by default.** Semantic markup, a skip link, labelled buttons, and keyboard-friendly controls.

## Built with

- HTML
- CSS (custom properties, grid)
- JavaScript (vanilla)
- [Iconify](https://iconify.design/) for the tech stack icons, loaded from a CDN

## Project structure

```
portfolio/
├── assets/         images, icons, and the CV
├── index.html      the page
├── styles.css      all the styling
└── script.js       loader and theme toggle
```

## Run it locally

It's just static files, so you have two easy options.

**Open it directly:** double-click `index.html`.

**Or serve it** (better for testing paths and the CV preview):

```bash
git clone https://github.com/raycode22/portfolio.git
cd portfolio
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Deploy

The site runs on GitHub Pages straight from the `main` branch. Push a change and it goes live in a minute or so.

## Make it yours

Everything is plain text, so you can edit it in place:

- Content and project cards live in `index.html`
- Colors, spacing, and themes live in `styles.css`
- The loader and theme toggle live in `script.js`

## Say hi

Find the contact details on the [live site](https://raycode22.github.io/portfolio/#contact).

---

&copy; 2026 Ray Enriquez. All rights reserved.