// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://tat-archive.com',
  integrations: [sitemap()],
  image: {
    // 画像最適化の設定
    service: {
      entrypoint: 'astro/assets/services/sharp'
    },
    // デフォルトの画像フォーマットと品質
    domains: [],
    remotePatterns: []
  },
  vite: {
    build: {
      // CSSコード分割を有効化
      cssCodeSplit: true,
    }
  }
});