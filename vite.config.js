import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import ViteComponents from 'vite-plugin-components';
import WindiCSS from 'vite-plugin-windicss';

const { resolve } = require('path');

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), ViteComponents(), WindiCSS()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    }
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        nested: resolve(__dirname, 'nested/index.html')
      },
      output: {
        entryFileNames: `assets/[name].js`,
        chunkFileNames: `assets/[name].js`,
        assetFileNames: `assets/[name].[ext]`
      }
    }
  },
  server: {
    proxy: {
      '/api': {
        target: 'https://data.ntpc.gov.tw/api/',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, '')
      }
    }
  }
});

