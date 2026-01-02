// 作品データを外部ファイルで管理
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
  
  // 作品のメタ情報
  types: {
    'Hamori': 'モバイルアプリ',
    'MasiMasi': 'ウェブサービス',
    'Atta!': 'オンラインメディア',
    'CIT portal': '学生ポータル',
    '市民の木': 'コミュニティプラットフォーム',
    'Invidi': '知識管理ツール',
    'Ittow': 'モバイルアプリ',
    'Wink': 'モバイルアプリ'
  },
  
  scopes: {
    'Hamori': 'チーム制作',
    'MasiMasi': 'チーム制作',
    'Atta!': '企業案件',
    'CIT portal': '大学プロジェクト',
    '市民の木': '自治体連携',
    'Invidi': '個人制作',
    'Ittow': '個人制作',
    'Wink': '個人制作'
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
  
  // 画像パス（ポップアップ表示用）
  images: {
    'Hamori': '/assets/images/works/hamori_pop.png',
    'MasiMasi': '/assets/images/works/masimasi_pop.png',
    'Atta!': '/assets/images/works/atta_pop.png',
    'CIT portal': '/assets/images/works/citportal_pop.png',
    '市民の木': '/assets/images/works/市民の木_pop.png',
    'Invidi': '/assets/images/works/invidi_pop.png',
    'Ittow': '/assets/images/works/ittow_pop.png',
    'Wink': '/assets/images/works/wink_pop.png'
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
