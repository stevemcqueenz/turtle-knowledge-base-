import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { twowData } from './scripts/data-plugin.mjs';
import { gameIcons } from './scripts/icons-plugin.mjs';

// Relative base so the same build works from a GitHub Pages project sub-path,
// from any folder on a static server, and from file://.
// The site data is split by the twow-data plugin: a small core module for the
// first paint and one lazily loaded chunk per class (see scripts/data-plugin.mjs).
export default defineConfig({
  base: './',
  plugins: [react(), twowData(), gameIcons()],
  build: {
    outDir: 'dist',
    target: 'es2020',
    chunkSizeWarningLimit: 2048,
  },
});
