import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  server: {
            allowedHosts: 'app-fullstack-django-react-frontend-12.onrender.com', // Substitua 'example.com' pelo seu domínio
          },
  plugins: [react(),tailwindcss()],
  
})
