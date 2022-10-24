import { defineConfig } from 'astro/config'

// https://astro.build/config
import solidJs from '@astrojs/solid-js'

// https://astro.build/config
import turbolinks from '@astrojs/turbolinks'

// https://astro.build/config
import sitemap from '@astrojs/sitemap'

// https://astro.build/config
export default defineConfig({
  site: 'https://localhost:3000',
  // Important!
  // Only official '@astrojs/*' integrations are currently supported by Astro.
  // Add 'experimental.integrations: true' to make 'astro-sitemap' working
  // with 'astro build' command.
  experimental: {
    integrations: true,
  },
  integrations: [solidJs(), turbolinks(), sitemap()],
})
