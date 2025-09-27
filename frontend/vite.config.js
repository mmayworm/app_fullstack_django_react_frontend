import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  server: {
            allowedHosts: true, // Substitua 'example.com' pelo seu domínio
          },
  plugins: [react(),tailwindcss()],
  
})
