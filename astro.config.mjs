import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from "astro-sitemap";

import robotsTxt from "astro-robots-txt";

// https://astro.build/config
export default defineConfig({
  site: 'https://rospirski.com/',
  integrations: [tailwind(), sitemap(), robotsTxt()]
});