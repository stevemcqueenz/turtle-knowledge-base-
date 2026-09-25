import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { viteSingleFile } from 'vite-plugin-singlefile';
import { twowData } from './scripts/data-plugin.mjs';

// Self-contained single HTML file: all JS/CSS/JSON inlined, no external requests.
// The instance maps (public/maps/, separate image files) are left out: no public
// dir is copied and the pages show a note instead (VITE_SINGLE_FILE).
export default defineConfig({
  base: './',
  publicDir: false,
  define: { 'import.meta.env.VITE_SINGLE_FILE': JSON.stringify('1') },
  plugins: [react(), twowData(), viteSingleFile({ removeViteModuleLoader: true })],
  build: {
    outDir: 'dist-single',
    target: 'es2020',
    assetsInlineLimit: 100000000,
    cssCodeSplit: false,
    chunkSizeWarningLimit: 40960,
    reportCompressedSize: false,
    rollupOptions: { output: { inlineDynamicImports: true } },
  },
});
