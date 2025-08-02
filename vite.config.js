import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // base URL for GitHub Pages to serve under /voltage-hq-dashboard/
  base: '/voltage-hq-dashboard/',
  plugins: [react()],
  server: {
    host: true,
    port: 5173,
    strictPort: true,
    allowedHosts: ['*'],
    // vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/voltage-hq-dashboard/',    // ← add this line
  plugins: [react()],
})

  },
});
