# BoardPlanner site

Marketing site for BoardPlanner — board meeting software for K-12 school districts.
Static-first Astro build. The homepage renders fully without JavaScript.

## Source of truth

`mockup/boardplanner-homepage.html` is the approved v4 homepage design. The production
build ports it faithfully. Read `CLAUDE.md` and `docs/decisions.md` before changing
layout, copy, or palette — the copy and design rules there are blocking.

| Path | What it is |
|---|---|
| `CLAUDE.md` | Build rules: audience, copy gates, design system, engineering prefs, open items |
| `mockup/` | Approved v4 mockup + reference render (visual regression baseline) |
| `design/tokens.css` | Palette, type scale, spacing, shadows, motion values |
| `copy/homepage-copy.md` | Every approved string, by section — edit copy here first |
| `docs/decisions.md` | Why the page is shaped this way |
| `docs/quality-checklist.md` | Pre-ship gate — run before calling any page done |

## Stack

- **Astro** (`output: 'static'`), no client framework.
- **Fonts self-hosted** via Fontsource variable packages (Fraunces + Newsreader),
  latin subset woff2, `font-display: swap`. No Google Fonts CDN in production.
- Two tiny progressive-enhancement scripts: the marquee pause control and a
  reveal-on-scroll observer. Content is visible without either.

## Develop

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # -> dist/
npm run preview  # serve the production build
```

## Structure

```
src/
  layouts/Base.astro        # <head>, font imports, SEO, no-JS reveal fallback
  components/               # Nav, Hero, Marquee, Boxes, Stakes, FinalCta, Footer
  pages/index.astro         # composes the homepage
  styles/global.css         # ported verbatim from the mockup stylesheet
public/favicon.svg
```

## Open items (do not silently resolve — see `CLAUDE.md`)

1. Hero media is a placeholder — needs a real photograph or ~15s ambient film.
2. Whether copy names BoardDocs in the migration promise is an open call.
3. Statutory numbers in the stakes strip need live-URL verification before launch.
4. Testimonial/proof section deferred until real customers exist.
5. "How it works" is the next page to design.
