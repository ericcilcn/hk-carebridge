import { defineConfig } from 'astro/config';

export default defineConfig({
  site: process.env.SITE_URL ?? 'https://hkcarebridge.com',
  output: 'static',
  devToolbar: { enabled: false },
  server: {
    host: true,
    allowedHosts: ['terminal.local'],
  },
});
