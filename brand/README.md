# Brand assets

The site picks these up automatically at build time. Until a file exists, a
typeset stand-in (logo) or a plain colour field (pattern) is shown instead.

| File | What it is |
| --- | --- |
| `public/brand/logo-stacked-aubergine.png` | Stacked logo, aubergine, transparent background (head of the table) |
| `public/brand/logo-horizontal-cream.png` | Horizontal logo, cream (header) |
| `public/brand/logo-stacked-cream.png` | Stacked logo, cream (footer) |
| `public/brand/logo-horizontal-aubergine.png` | Horizontal logo, aubergine (spare) |
| `public/brand/pattern.png` | The line pattern, any colour on a transparent background; only its shape is used, and the site recolours it per section. About 1200px square is plenty. |
| `public/brand/og.jpg` | Optional 1200×630 image for link previews |
| `public/photos/*.jpg` | Event photos; set the file names in `src/config.ts` → `photos` |

Keep the full-resolution originals (and the brand board) in this `brand/`
folder; they aren't published.

Fonts: Romans Story and P22 Underground are licensed fonts, so the site uses
Bodoni Moda and Jost as permanent stand-ins.
