/// <reference types="vitest/config" />

import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// Función para cargar variables de entorno
export default defineConfig(({ mode }) => {
  // Carga las variables de entorno basadas en el modo (`development`, `production`, etc.)
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [react()],
    resolve: {
      alias: {
        // Make sure to match this config with vitest.config.ts and tsconfig.json
        '@components': path.resolve(__dirname, 'src/components'),
        '@utils': path.resolve(__dirname, 'src/lib/utils'),
        '@i18n': path.resolve(__dirname, 'src/i18n.js'),
        '@constants': path.resolve(__dirname, 'src/lib/constants'),
        '@contexts': path.resolve(__dirname, 'src/lib/contexts'),
        '@pages': path.resolve(__dirname, 'src/pages'),
      }
    },
    server: {
      port: Number(env.VITE_APP_PORT) || 3000, // Configurar puerto desde .env (opcional)
    },
    define: {
      __APP_TITLE__: JSON.stringify(env.VITE_APP_TITLE), // Define constantes globales
    },
    css: {
      modules: {
        // Personaliza el formato de las clases generadas
        generateScopedName: '[name]__[local]__[hash:base64:5]',
        // Incluye hashes globales para mejorar la estabilidad en dev/prod
        hashPrefix: 'prefix',
      },
      // Habilita source maps en desarrollo
      devSourcemap: true,
    },
    test: {
      globals: true,
      environment: 'jsdom',
    },
  };
});
