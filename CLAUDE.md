# BoardPlanner website — build rules

BoardPlanner is board meeting software for K-12 school districts: agendas, board packets, minutes, member portals, and a public records portal. This repo builds its marketing site. `mockup/boardplanner-homepage.html` is the approved homepage design — treat it as the source of truth for layout, type, spacing, and copy. `mockup/reference-desktop.png` shows the approved render.

## Who the site speaks to

The buyer, daily user, and person feeling the pain are the same person: the board secretary / executive assistant to the superintendent (often the superintendent too). Write to her. Board members are an audience for exactly one section, framed as findability, never as people who need to be fixed. IT's only concern is having nothing to run.

## Copy rules (blocking — do not merge violations)

- Headlines: 2–4 words, imperative, zero adjectives. Current H1: "Keep the record."
- One CTA verb sitewide: **"See a demo"** — identical in nav, hero, and final section. Never rephrase one without the others.
- Numbers, never superlatives. No "powerful," "seamless," "comprehensive," "best."
- Buyer vocabulary: packet, backup, consent agenda, minute book, roll call, properly noticed. Never "governance solution" or "platform" language.
- Never imply board members are unprepared. Never use world-changing language (no "transform," "revolutionize," "reimagine how districts work").
- Stop-slop gate on all new copy: no em dashes, no filler adverbs, no passives without an actor, no "no X, no Y" listings, no "not X but Y" contrasts, no rhetorical triplets (factual enumerations like "motions, votes, roll calls" are fine).
- Any AI feature mention must state provenance: summaries cite the exact source page.
- Never claim to be "more secure." The security promise is the disclosure commitment: problems reported to the district first, in writing. Never cite a district count for the 2025 BoardDocs incident.
- No fabricated testimonials, customer counts, or logos. Until real customers exist, proof = statutory-deadline numbers.
- Compliance numbers must trace to a live URL before ship. The Texas posting rule (3 business days) cites the AG's Open Meetings Act handbook — the statutes portal shows stale pre-Sept-2025 text.

## Design system (blocking)

- Palette: achromatic black / silver / white only. Every grey must be a true neutral (R=G=B hex). No blue, no pink, no warm/tan drift. Tokens in `design/tokens.css`.
- Type: Fraunces (display; weight ~520, italic accent words) + Newsreader (text). Keep Newsreader at 13px minimum. No sans-serif except as system fallback.
- Light backgrounds with dark text everywhere. Never dark mode for reading surfaces.
- Homepage stays ≤2 scrolls below the hero. Word budget ~350; if a section needs a paragraph, it needs its own page instead.
- Sections are full-bleed. Small-caps labels ≥4.5:1 contrast (#757575 or darker on white).
- Motion: only skimmable content animates (the marquee), always with a pause control. Reveals respect `prefers-reduced-motion`. Animation budget: 3–8 elements per page.
- One wink per page, at the exit. The homepage's is "Meeting adjourned." in the footer. Do not add more personality moments.
- The footer gets hero-level care.

## Engineering preferences

- Static-first. No client framework unless a page genuinely needs one; the homepage doesn't.
- Self-host the two font families for production (subset woff2); the mockup uses Google Fonts CDN for convenience.
- Performance: <2MB page weight, hero visible with no JS, lazy-load below the fold only.
- Semantic HTML, WCAG 2.1 AA.
- No localStorage/analytics decisions without asking Tyler.

## Open items (do not silently resolve)

1. Hero media slot needs a real photograph or ~15s ambient film (direction: the board room at 5:45, packets laid out, doors still closed). The arch frame stays.
2. The hero metadata line promises full history migration. Whether marketing names BoardDocs explicitly is an open positioning/legal call — currently the copy says "your full history" and does not name the competitor.
3. "How it works" is the next page to design; per the decision log, that page (not the homepage) carries the product story, led by search with AI summaries riding on top, citations visible.
4. Testimonial/proof slot deliberately absent until real customers exist.
5. Verify all three statutory numbers against live sources before launch (see copy rules).

## Reference docs

- `copy/homepage-copy.md` — every approved string, by section
- `design/tokens.css` — palette, type scale, spacing
- `docs/decisions.md` — why the page is shaped this way (read before proposing structural changes)
- `docs/quality-checklist.md` — the pre-ship gate; run it on every page before calling work done
