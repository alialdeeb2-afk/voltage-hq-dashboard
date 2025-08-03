import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // Use relative paths for all assets
  base: './',
  plugins: [react()],
});
