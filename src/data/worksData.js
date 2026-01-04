// 作品データを外部ファイルで管理
// src/assetsから画像をインポート（最適化されたWebP形式）
import hamoriImage from '../assets/images/works/Hamori-thumb.webp';
import masimasiImage from '../assets/images/works/masimasi_pop.webp';
import attaImage from '../assets/images/works/atta_pop.webp';
import citportalImage from '../assets/images/works/citportal_pop.webp';
import shiminNoKiImage from '../assets/images/works/市民の木_pop.webp';
import invidiImage from '../assets/images/works/invidi_pop.webp';
import ittowImage from '../assets/images/works/works-ittow-thumb.webp';
import winkImage from '../assets/images/works/wink_pop.webp';

export const worksData = {
  // 作品の詳細情報
  descriptions: {
    'Hamori': '複数人での飲食店決めを楽しくスムーズにするアプリ。みんなの好みを集計して最適な候補を提案します。',
    'MasiMasi': 'オンラインで簡単に募金ができる寄付プラットフォーム。支援したい団体や活動を選んでスピーディに支援できます。',
    'Atta!': '新たな視点を提供する発見系メディア。多様な意見と視点に触れることで、新しい気づきや学びを得られます。',
    'CIT portal': '千葉工業大学の学生向けポータルサイト。授業情報や学内イベントなどをまとめて確認できます。',
    '市民の木': '地域の課題解決を市民が主体となって行うプラットフォーム。住民同士のコミュニケーションと協力を促進します。',
    'Invidi': '個人の思考や興味を整理・共有するための知識管理ツール。アイデアの整理からコラボレーションまでサポートします。',
    'Ittow': 'スキマ時間の学習アプリ',
    'Wink': '積読防止スマートリンク管理アプリ'
  },
  
  // 作品のメタ情報（複数指定可能）
  types: {
    'Hamori': ['アプリデザイン', 'UI/UX'],
    'MasiMasi': ['アプリデザイン', 'UI/UX', 'GMODA 入選'],
    'Atta!': ['アプリデザイン', 'UI/UX'],
    'CIT portal': ['大学ポータルサイト', '卒業研究'],
    '市民の木': ['コミュニティプラットフォーム'],
    'Invidi': ['ノーコードアプリ', 'UI/UX'],
    'Ittow': ['iOSアプリ', 'UI/UX'],
    'Wink': ['iOSアプリ', 'UI/UX']
  },
  
  scopes: {
    'Hamori': ['個人制作'],
    'MasiMasi': ['個人制作'],
    'Atta!': ['個人制作'],
    'CIT portal': ['個人制作'],
    '市民の木': ['授業課題(4人)'],
    'Invidi': ['個人制作'],
    'Ittow': ['個人制作'],
    'Wink': ['個人制作']
  },
  
  durations: {
    'Hamori': '3ヶ月',
    'MasiMasi': '2ヶ月',
    'Atta!': '4ヶ月',
    'CIT portal': '6ヶ月',
    '市民の木': '3ヶ月',
    'Invidi': '1ヶ月',
    'Ittow': '2週間',
    'Wink': '1ヶ月半'
  },
  
  // ポイント位置マップ
  positions: {
    'Hamori': { x: 60, y: 65 },
    'MasiMasi': { x: 75, y: 35 },
    'Atta!': { x: 35, y: 40 },
    'CIT portal': { x: 45, y: 75 },
    '市民の木': { x: 24, y: 64 },
    'Invidi': { x: 58, y: 45 },
    'Ittow': { x: 55, y: 90 },
    'Wink': { x: 40, y: 60 }
  },
  
  // 画像パス（最適化された画像オブジェクト）
  images: {
    'Hamori': hamoriImage,
    'MasiMasi': masimasiImage,
    'Atta!': attaImage,
    'CIT portal': citportalImage,
    '市民の木': shiminNoKiImage,
    'Invidi': invidiImage,
    'Ittow': ittowImage,
    'Wink': winkImage
  },
  
  // リリースバッジの表示設定
  released: {
    'Hamori': false,
    'MasiMasi': false,
    'Atta!': false,
    'CIT portal': false,
    '市民の木': false,
    'Invidi': false,
    'Ittow': true,
    'Wink': true
  },
  
  // リリース先リンク（複数指定可能）
  releaseLinks: {
    'Hamori': [],
    'MasiMasi': [
      { label: '紹介動画', url: 'https://youtube.com/shorts/9nqDZs9zTos?si=2LtgxgFOpb22sQmj' }
    ],
    'Atta!': [],
    'CIT portal': [
      { label: 'デモサイト', url: 'https://cit-portal.netlify.app/' }
    ],
    '市民の木': [],
    'Invidi': [],
    'Ittow': [
      { label: 'App Store', url: 'https://x.gd/ittow_ios' }
    ],
    'Wink': []
  },
  
  // 作品名リスト
  names: ['Hamori', 'MasiMasi', 'Atta!', 'CIT portal', '市民の木', 'Invidi', 'Ittow', 'Wink']
};

// 新しい作品を追加する関数
export function addWork(workData) {
  const { name, description, type, scope, duration, position, image } = workData;
  
  worksData.descriptions[name] = description;
  worksData.types[name] = type;
  worksData.scopes[name] = scope;
  worksData.durations[name] = duration;
  worksData.positions[name] = position;
  worksData.images[name] = image; // 画像パスも追加
  worksData.names.push(name);
  
  return worksData;
}
