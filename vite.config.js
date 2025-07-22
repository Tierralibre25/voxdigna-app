// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  // Build settings
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      // Punto di ingresso: il tuo index in root
      input: path.resolve(__dirname, 'index.html'),
    }
  },
  // Assicuriamoci che public/ sia solo asset
  publicDir: 'public',
})
