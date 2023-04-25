import react from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig } from 'vite'
import svgr from 'vite-plugin-svgr'

//* https://vitejs.dev/config/

export default defineConfig({
  resolve: {
    alias: {
      // assets
      '@/assets': path.resolve(__dirname, './src/assets/'),
      '@/docs': path.resolve(__dirname, './src/assets/shared/docs/'),
      '@/fonts': path.resolve(__dirname, './src/assets/shared/fonts/'),
      '@/icons': path.resolve(__dirname, './src/assets/shared/icons/'),
      '@/images': path.resolve(__dirname, './src/assets/shared/images/'),
      '@/logos': path.resolve(__dirname, './src/assets/shared/logos/'),
      '@/videos': path.resolve(__dirname, './src/assets/shared/videos/'),

      // modules
      '@/modules': path.resolve(__dirname, './src/modules/'),
      '@/domain': path.resolve(__dirname, './src/modules/shared/domain/'),
      '@/infrastructure': path.resolve(__dirname, './src/modules/shared/infrastructure/'),

      // views
      '@/views': path.resolve(__dirname, './src/views/'),
      '@/components': path.resolve(__dirname, './src/views/shared/components/'),
      '@/config': path.resolve(__dirname, './src/views/shared/config/'),
      '@/hooks': path.resolve(__dirname, './src/views/shared/hooks/'),
      '@/layouts': path.resolve(__dirname, './src/views/shared/layouts/'),
      '@/routes': path.resolve(__dirname, './src/views/shared/routes/'),
      '@/styles': path.resolve(__dirname, './src/views/shared/styles/'),
      '@/utils': path.resolve(__dirname, './src/views/shared/utils/'),
    },
    https: 'agent-base',
  },
  plugins: [react(), svgr()],
  server: {
    host: true,
  },
})
