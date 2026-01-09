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
  
  // ブログ名リスト（表示順序）
  names: ['Orynth']
};

// 新しいブログを追加する関数
export function addBlog(blogData) {
  const { name, title, description, image } = blogData;
  
  blogsData.titles[name] = title;
  blogsData.descriptions[name] = description;
  blogsData.images[name] = image;
  
  if (!blogsData.names.includes(name)) {
    blogsData.names.push(name);
  }
  
  return blogsData;
}
