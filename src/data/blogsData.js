// ブログデータを外部ファイルで管理
// src/assetsから画像をインポート（最適化されたWebP形式）
import orynthThumbImage from '../assets/images/blogs/thumb/blog-orynth-thumb.webp';

export const blogsData = {
  // ブログの詳細情報（説明文）
  descriptions: {
    'Orynth': '【Orynthとは？】個人開発者がプロダクトを公開して資金調達できる、Solana発「Web3版Product Hunt」について、日本人ユーザーの事例も紹介しながら解説していきます'
  },
  
  // ブログのタイトル（Markdownのfrontmatterのtitleと一致させる）
  titles: {
    'Orynth': '【Orynthとは？】Solana発の「Web3版Product Hunt」'
  },
  
  // 画像パス（最適化された画像オブジェクト）
  images: {
    'Orynth': orynthThumbImage
  },
  
  // 引用先・参考リンク（各ブログごとに配列で管理）
  // label: 表示されるラベル（サイト名・記事名など）
  // url: リンクURL
  references: {
    'Orynth': [
      { label: 'Orynth公式サイト', url: 'https://www.orynth.dev/' },
      { label: 'Orynth公式ドキュメント', url: 'https://www.orynth.dev/docs' },
      { label: 'Orynth公式Xアカウント', url: 'https://x.com/orynthai' },
      { label: 'AVATAR UI - X投稿', url: 'https://x.com/Sikino_Sito/status/2009065718533521826' },
      { label: 'Onigiri Anki - X投稿', url: 'https://x.com/statistics1012/status/2009409883582746960' },
      { label: 'Tinies Merge - X投稿', url: 'https://x.com/tty215_dev/status/2009321679395409973' },
      { label: 'Copipe - X投稿', url: 'https://x.com/tatsu_aihara/status/2009062673812738352' }
    ]
  },
  
  // ブログ名リスト（表示順序）
  names: ['Orynth']
};

// 新しいブログを追加する関数
export function addBlog(blogData) {
  const { name, title, description, image, references } = blogData;
  
  blogsData.titles[name] = title;
  blogsData.descriptions[name] = description;
  blogsData.images[name] = image;
  
  // referencesが指定されている場合は追加
  if (references && Array.isArray(references)) {
    blogsData.references[name] = references;
  }
  
  if (!blogsData.names.includes(name)) {
    blogsData.names.push(name);
  }
  
  return blogsData;
}
