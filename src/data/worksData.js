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
import copipeImage from '../assets/images/works/works-copipe-thumb.webp';
import emiuchiImage from '../assets/images/works/works-m1-thumb.webp';

// Hero背景画像をインポート（最適化されたWebP形式）
import heroIttowBackgroundImage from '../assets/hero-ittow-backgroundImage.webp';
import heroHamoriBackgroundImage from '../assets/hero-hamori-backgroundImage.webp';
import heroCitBackgroundImage from '../assets/hero-cit-backgroundImage.webp';

export const worksData = {
  // 作品の詳細情報
  descriptions: {
    'Hamori': '複数人での飲食店決めを楽しくスムーズにするアプリ。「意思決定」心理的負担をなくします。',
    'MasiMasi': '今日の発言が明日の目覚ましになるアプリ。GMO DESIGN AWARD 2024で入選しました。',
    'Atta!': '自分の好みを予め設定しておくことで、その近くを通ったら「Atta!」と通知が来るアプリ。',
    'CIT portal': '千葉工業大学の学生向けポータルサイトのダミーサイト。卒業研究で作成しました。',
    '市民の木': '未来の街開発における、市民の隠れた声を拾い上げるプラットフォーム。授業課題で作成しました。',
    'Invidi': 'ノーコードで個人のwebページが作成できるプラットフォーム。',
    'Ittow': 'アプリアイコン1タップで一問一答が始まる学習アプリ。',
    'Wink': '積読防止スマートリンク管理アプリ',
    'Copipe': '普段のコピペフローの中にAIを組み込み、その場でメール文章のリライトや多言語翻訳などを可能にすることで作業の効率を高めるMacアプリ',
    'えむいち、': '大学院の友達と大学祭に出展しました。その際のサイトです。'
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
    'Wink': ['iOSアプリ', 'UI/UX'],
    'Copipe': ['Macアプリ', 'UI/UX'],
    'えむいち、': ['大学祭', 'Webサイト', 'ブランディング']
  },
  
  scopes: {
    'Hamori': ['個人制作'],
    'MasiMasi': ['個人制作'],
    'Atta!': ['個人制作'],
    'CIT portal': ['個人制作'],
    '市民の木': ['授業課題(4人)'],
    'Invidi': ['個人制作'],
    'Ittow': ['個人制作'],
    'Wink': ['個人制作'],
    'Copipe': ['個人制作'],
    'えむいち、': ['デザ科M1(15人)'],
  },
  
  durations: {
    'Hamori': '1週間',
    'MasiMasi': '2ヶ月',
    'Atta!': '4ヶ月',
    'CIT portal': '6ヶ月',
    '市民の木': '3ヶ月',
    'Invidi': '1ヶ月',
    'Ittow': '2週間',
    'Wink': '1ヶ月半',
    'Copipe': '1ヶ月',
    'えむいち、': '6ヶ月(プロジェクト全体)'
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
    'Wink': { x: 40, y: 60 },
    'Copipe': { x: 45, y: 85 },
    'えむいち、': { x: 35, y: 70 }
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
    'Wink': winkImage,
    'Copipe': copipeImage,
    'えむいち、': emiuchiImage
  },
  
  // Hero背景画像（PortfolioViewのheroセクション用）
  heroBackgroundImages: {
    'Ittow': heroIttowBackgroundImage,
    'Hamori': heroHamoriBackgroundImage,
    'CIT portal': heroCitBackgroundImage

    // その他の作品は未定義の場合、デフォルト（Ittow）が使用される
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
    'Wink': false,
    'Copipe': true,
    'えむいち、': true
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
    'Wink': [],
    'Copipe': [
      { label: 'サービスサイト', url: 'https://co-pipe.com/' }
    ],
    'えむいち、': [
      { label: 'LP', url: 'https://m1-ten.netlify.app/' }
    ]
  },
  
  // 作品名リスト
  names: ['Hamori','Copipe', 'Ittow', 'えむいち、', 'Wink', 'MasiMasi', 'Atta!', 'CIT portal', '市民の木', 'Invidi',]
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
