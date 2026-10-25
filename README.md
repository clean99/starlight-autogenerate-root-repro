# Root sidebar reproduction

Run `npm install` and `npm run dev`, then open the preview. The **Docs** sidebar group has no links, although `src/content/docs/` contains three root pages and one nested page.

In `astro.config.mjs`, remove the `sidebar` option: all four pages appear in the sidebar. Setting `directory: '/'` instead of `directory: ''` also produces an empty group.

Use `npm run build` and `npm run preview` to see the same behavior in a production build. Requires Node.js 22.23.4 or newer.
