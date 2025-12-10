import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' // if using React
import tailwind from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwind()
  ],
})
