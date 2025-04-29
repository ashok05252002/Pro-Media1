import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    headers: {
      'Content-Type': 'text/javascript',
    },
    fs: {
      // Allow serving files from one level up to the project root
      allow: ['..']
    }
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
      },
      output: {
        format: 'es',
        entryFileNames: '[name].[hash].js',
        chunkFileNames: '[name].[hash].js',
        assetFileNames: '[name].[hash].[ext]'
      }
    },
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
    extensions: ['.mjs', '.js', '.jsx', '.json']
  },
});
