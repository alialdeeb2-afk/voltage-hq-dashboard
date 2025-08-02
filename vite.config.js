import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // Tell Vite to prefix all asset URLs with your repo name
  base: '/voltage-hq-dashboard/',
  plugins: [react()],
  server: {
    // make Vite listen on all network interfaces
    host: true,
    // stick to port 5173
    port: 5173,
    // fail immediately if 5173 is in use
    strictPort: true,
    // allow connections from any host (CSB, GitHub Pages preview, etc.)
    allowedHosts: ['*'],
  },
});
