import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/',
  plugins: [react()],
  build: {
    sourcemap: false
  },
  server: {
    proxy: {
      '/login': {
        target: 'http://localhost:3001',
        changeOrigin: true,
      },
      '/languages': {
        target: 'http://localhost:3001',
        changeOrigin: true,
      },
      '/categories': {
        target: 'http://localhost:3001',
        changeOrigin: true,
      },
      '/exercises': {
        target: 'http://localhost:3001',
        changeOrigin: true,
      },
      '/content': {
        target: 'http://localhost:3001',
        changeOrigin: true,
      },
      '/words': {
        target: 'http://localhost:3001',
        changeOrigin: true,
      },
      '/sentences': {
        target: 'http://localhost:3001',
        changeOrigin: true,
      },
      '/texts': {
        target: 'http://localhost:3001',
        changeOrigin: true,
      }
    }
  }
});
