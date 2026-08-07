// @ts-check
import { defineConfig } from 'astro/config';

// Static-first marketing site. No client framework — the homepage renders
// fully without JS; the only scripts are the marquee pause control and the
// reveal-on-scroll observer, both progressive enhancements.
export default defineConfig({
  site: 'https://boardplanner.com',
  output: 'static',
  compressHTML: true,
});
