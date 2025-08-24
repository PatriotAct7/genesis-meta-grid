import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/genesis-meta-grid/',
  plugins: [react()],
})
