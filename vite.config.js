import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  base: '/RubimathV1.8/', // Updated to match your repository name
  plugins: [react()],
  server: {
    port: 3000,
    strictPort: false,
  },
  build: {
    chunkSizeWarningLimit: 1000, // Increase warning limit to 1000kb
    rollupOptions: {
      output: {
        manualChunks(id) {
          // Vendor chunk for node_modules
          if (id.includes('node_modules')) {
            return 'vendor'
          }
          
          // Games chunk
          if (id.includes('/src/pages/game/')) {
            return 'games'
          }
          
          // Materi chunk
          if (id.includes('/src/pages/materi/')) {
            return 'materi'
          }

          // Admin chunk
          if (id.includes('/src/pages/admin/')) {
            return 'admin'
          }

          // Components chunk
          if (id.includes('/src/components/')) {
            return 'components'
          }
        }
      }
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
})
