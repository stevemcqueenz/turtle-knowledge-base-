import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Relative base so the same build works from a GitHub Pages project sub-path,
// from any folder on a static server, and from file://.
export default defineConfig({
  base: './',
  plugins: [react()],
  build: {
    outDir: 'dist',
    target: 'es2020',
    chunkSizeWarningLimit: 4096,
  },
});
