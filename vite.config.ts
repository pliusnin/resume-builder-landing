import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite';

// Multi-page build: the landing page plus static legal pages served at /privacy/, /terms/ and /refund/.
// Paths are relative to the project root (where `vite build` runs), so no Node typings are needed.
// https://vite.dev/guide/build.html#multi-page-app
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        privacy: 'privacy/index.html',
        terms: 'terms/index.html',
        refund: 'refund/index.html',
      },
    },
  },
})
