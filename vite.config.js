import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import ViteImagesPlugin from 'vite-plugin-images';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),ViteImagesPlugin()],
})
