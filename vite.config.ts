import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // On GitHub Actions (GitHub Pages deploy), base is '/cresent-industries/'.
  // On Vercel, Netlify, or custom domain, base is '/'.
  base: process.env.VITE_BASE_PATH || (process.env.GITHUB_ACTIONS === 'true' && !process.env.VERCEL ? '/cresent-industries/' : '/'),
  server: {
    port: 3000,
    open: false,
    host: true
  }
})
