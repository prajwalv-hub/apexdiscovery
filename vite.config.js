import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages project site: https://<username>.github.io/apexdiscovery/
// If you rename the repo (or use a custom domain), change this base to match ('/' for a custom domain).
export default defineConfig({
  plugins: [react()],
  base: '/apexdiscovery/',
})
