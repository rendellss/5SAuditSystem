import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    strictPort: true, // Fail if port 5173 is busy instead of switching
    watch: {
      ignored: ['**/src-tauri/target/**']
    }
  }
})