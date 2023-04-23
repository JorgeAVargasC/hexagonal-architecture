import react from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig } from 'vite'
import svgr from 'vite-plugin-svgr'

//* https://vitejs.dev/config/

export default defineConfig({
  resolve: {
    alias: {
      '@/components': path.resolve(__dirname, './src/components/'),
      '@/atoms': path.resolve(__dirname, './src/atoms/'),
      '@/config': path.resolve(__dirname, './src/config/'),
      '@/layouts': path.resolve(__dirname, './src/layouts/'),
      '@/hooks': path.resolve(__dirname, './src/hooks/'),
      '@/routes': path.resolve(__dirname, './src/routes/'),
      '@/services': path.resolve(__dirname, './src/services/'),
      '@/pages': path.resolve(__dirname, './src/pages/'),
      '@/utils': path.resolve(__dirname, './src/utils/'),
      '@/images': path.resolve(__dirname, './src/assets/images/'),
      '@/docs': path.resolve(__dirname, './src/assets/docs/'),
      '@/icons': path.resolve(__dirname, './src/assets/icons/'),
      '@/videos': path.resolve(__dirname, './src/assets/videos/'),
      https: 'agent-base'
    }
  },
  plugins: [react(), svgr()],
  server: {
    host: true
  }
})
