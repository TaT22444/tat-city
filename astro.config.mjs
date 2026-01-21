// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  site: 'https://tat-archive.com',
  integrations: [sitemap(), mdx()],
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