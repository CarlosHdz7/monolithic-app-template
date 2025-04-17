import { defineConfig } from 'vitest/config';
import path from 'path';

export default defineConfig({
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components'),
      '@utils': path.resolve(__dirname, 'src/lib/utils'),
      '@i18n': path.resolve(__dirname, 'src/i18n.js'),
      '@constants': path.resolve(__dirname, 'src/lib/constants'),
      '@contexts': path.resolve(__dirname, 'src/lib/contexts'),
      '@pages': path.resolve(__dirname, 'src/pages'),
    }
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts',
  },
});