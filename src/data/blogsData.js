// ブログデータを外部ファイルで管理
// 表示用の画像はsrc/assetsから、OG画像用はpublicフォルダから
import orynthThumbImage from '../assets/images/blogs/thumb/blog-orynth-thumb.webp';
import copipeUsageThumbImage from '../assets/images/blogs/thumb/copipe-main.webp';

export const blogsData = {
  // ブログの詳細情報（説明文）
  descriptions: {
    'Orynth': '個人開発者や小規模チームがプロダクトを公開して「持続的な開発支援」を得られる、Solana上で動くWeb3版Product Hunt、「Orynth」について、日本人ユーザーの事例も紹介しながら解説していきます',
    'copipe-usage': 'Mac専用作業効率AIツール「Copipe」の使い方を徹底解説',
    // 'ui': 'AI時代におけるいいUIとは'
  },
  
  // ブログのタイトル（Markdownのfrontmatterのtitleと一致させる）
  titles: {
    'Orynth': '【Orynthとは？】Solana上の「Web3版Product Hunt」',
    'copipe-usage': 'Mac専用作業効率AIツール「Copipe」の使い方を徹底解説！デザイナーやライターなど社会人から学生までおすすめ！',
    // 'ui': 'AI時代におけるいいUIとは'
  },
  
  // 表示用画像（AstroのImageコンポーネント用）
  images: {
    'Orynth': orynthThumbImage,
    'copipe-usage': copipeUsageThumbImage
  },
  
  // OG画像用パス（publicフォルダからの直接パス）
  ogImages: {
    'Orynth': '/assets/images/blogs/blog-orynth-thumb.webp',
    'copipe-usage': '/assets/images/blogs/copipe-usage/copipe-main.webp'
  },
  
  // 公開日（YYYY-MM-DD形式の文字列）
  publishedDates: {
    'Orynth': '2026-01-09',
    'copipe-usage': '2026-01-20'
  },
  
  // 最終更新日（YYYY-MM-DD形式の文字列、公開日と同じ場合は省略可能）
  updatedDates: {
    'Orynth': '2026-01-11',
    'copipe-usage': '2026-01-20'
  },
  
  // カテゴリー/タイプ（複数指定可能）
  types: {
    'Orynth': ['Orynth', 'Web3', 'プロダクト紹介'],
    'copipe-usage': ['Copipe', 'AI', '作業効率化']
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
      { label: 'Copipe - X投稿', url: 'https://x.com/tatsu_aihara/status/2009062673812738352' },
      { label: '@IHayato - X投稿', url: 'https://x.com/IHayato/status/2009417039568642343' },
      { label: '@Sikino_Sito - X投稿', url: 'https://x.com/Sikino_Sito/status/2009477128002392082' },
      { label: '@lucianlampdefi - X投稿', url: 'https://x.com/lucianlampdefi/status/2009601250049118304' }
    ]
  },
  
  // ブログ名リスト（表示順序）
  // names: ['Orynth']
  names: ['Orynth', 'copipe-usage']
  // names: ['Orynth', 'ui']
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
