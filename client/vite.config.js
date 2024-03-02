import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'https://armarch22.vercel.app/', // Replace this with your backend server URL
        secure: true, // Change to true if your backend server uses HTTPS
        changeOrigin: true, // Enable this option if you're proxying to a different origin
        rewrite: (path) => path.replace(/^\/api/, '') // Optional: Modify this if your backend expects a different path
      },
    },
  },
  
  plugins: [react()],
})
