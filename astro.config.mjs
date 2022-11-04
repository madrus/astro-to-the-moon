import { defineConfig } from 'astro/config'

// https://astro.build/config
import solidJs from '@astrojs/solid-js'
import sitemap from '@astrojs/sitemap'
import svelte from '@astrojs/svelte'
// import netlify from '@astrojs/netlify'

/**
 * you can use netlify dev to run serverless functions in netlify/functions
 * and not affect the generation of the Astro site
 *
 * however
 *
 * if you add the netlify adapter - everything becomes a SSR route
 */

export default defineConfig({
  site: 'https://localhost:3000',
  // Important!
  // Only official '@astrojs/*' integrations are currently supported by Astro.
  // Add 'experimental.integrations: true' to make 'astro-sitemap' working
  // with 'astro build' command.
  experimental: {
    integrations: true,
  },
  integrations: [solidJs(), sitemap(), svelte()],
  // adapter: netlify(),
})
