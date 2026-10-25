import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  integrations: [
    starlight({
      title: 'Root sidebar reproduction',
      sidebar: [{ label: 'Docs', items: [{ autogenerate: { directory: '' } }] }],
    }),
  ],
});
