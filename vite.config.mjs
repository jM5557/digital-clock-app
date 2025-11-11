import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/digital-clock-app/',  // ← update this to your actual repo name
})
