/// <reference types="astro/client" />

// Google Analytics (gtag.js) の型定義
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

export {};
