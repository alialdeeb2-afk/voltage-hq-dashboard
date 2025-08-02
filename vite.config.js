import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // This tells Vite (and GitHub Pages) that all assets live under /voltage-hq-dashboard/
  base: '/voltage-hq-dashboard/',
  plugins: [react()],
});
