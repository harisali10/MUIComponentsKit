import { UserConfig, defineConfig } from 'vite';
import viteTsconfigPaths from 'vite-tsconfig-paths';
import { VitePWA } from 'vite-plugin-pwa';
import react from "@vitejs/plugin-react"
import manifest from './manifest.json';

export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        silenceDeprecations:['import','legacy-js-api'],
        additionalData: `@import "./src/assets/scss/_et.defaultTheme.module.scss";`
      }
    }
  },
  base: '/',
  server: {
    open: true,
  },
  plugins: [
    react({
      jsxImportSource: '@emotion/react',
      babel: {
        plugins: ['@emotion/babel-plugin'],
      },
    }),
    viteTsconfigPaths(),
    VitePWA({
      includeManifestIcons: true,
      registerType: 'autoUpdate',
      manifest: manifest as Partial<import('vite-plugin-pwa').ManifestOptions>,
      injectRegister: 'auto',
      strategies: 'generateSW',
      srcDir: 'public',
      includeAssets: [
        'favicon.svg',
        'favicon.ico',
        'robots.txt',
        'apple-touch-icon.png',
        'hbsLogo.svg',
      ],
      devOptions: {
        // enabled: true,
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html}', '**/*.{svg,png,jpg}'],
      },
    }),
  ] as UserConfig['plugins'],
  build: {
    assetsInlineLimit: 100,
    rollupOptions: {
      output: {
        // eslint-disable-next-line consistent-return
        manualChunks(id: string) {
          if (id.indexOf('node_modules') !== -1) {
            return id
              .toString()
              .split('node_modules/')[1]
              .split('/')[0]
              .toString();
          }
        },
      },
    },
  },
})
