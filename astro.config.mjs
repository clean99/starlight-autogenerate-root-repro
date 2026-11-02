import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  integrations: [starlight({
    title: 'Landing page reproduction',
    sidebar: [{ label: 'Guides', items: [{ autogenerate: { directory: 'guides' } }] }],
  })],
});
