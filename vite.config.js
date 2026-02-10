import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Esto es crucial para que funcione en GitHub Pages
  // Si tu repositorio se llama "regalo-san-valentin", esto debe coincidir:
  base: '/ticket-candlelight-bridgerton/', 
})