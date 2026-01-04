// プロフィールデータを外部ファイルで管理
// src/assetsから画像をインポート（最適化されたWebP形式）
import profileImage from '../assets/images/profile/profile.webp';

export const profileData = {
  // 基本情報
  name: '相原立弥',
  nameEn: 'Tatsuya Aihara',
  description: 'UI/UXデザイン、フロントエンド開発を専門とするデザイナー兼エンジニア。使いやすさと美しさを追求した体験設計が得意です。',
  bio: '千葉工業大学大学院 デザイン科専攻 修士1年',
  
  // プロフィールポイントの位置（worksタウン内）
  position: { x: 50, y: 80 },
  
  // 画像（最適化された画像オブジェクト）
  image: profileImage,
  
  // メタ情報（ポップアップ表示用）
  meta: ['UI/UXデザイナー', '千葉工業大学大学院']
  
  // SNSリンク（現在未使用のためコメントアウト）
  // sns: [
  //   {
  //     name: 'Twitter',
  //     url: 'https://twitter.com/your_handle',
  //     icon: 'twitter'
  //   },
  //   {
  //     name: 'Instagram',
  //     url: 'https://instagram.com/your_handle',
  //     icon: 'instagram'
  //   },
  //   {
  //     name: 'Website',
  //     url: 'https://yourwebsite.com',
  //     icon: 'website'
  //   }
  // ]
};

