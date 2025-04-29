import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/Pro-Media1/', // <-- CHANGE this to your GitHub repository name
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
