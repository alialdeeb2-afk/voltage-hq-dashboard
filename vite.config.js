import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
+  // ← tell Vite to prefix all asset URLs with your repo name
+  base: '/voltage-hq-dashboard/',
  plugins: [react()],
  server: {
    host: true,
    port: 5173,
    strictPort: true,
    allowedHosts: ['*'],
  },
});
