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
  },
});
