import { useState, useEffect } from 'react';
import svgPaths from "./imports/svg-06ts7tw411";
import imgHeroIttowBackgroundImage from "figma:asset/5f5ddc389087f21567dd3525cc32293fdfc58c76.png";
import imgIPhone20 from "figma:asset/47a3e453c6954f112da457a0a4a19e3c94c177c0.png";
import { imgGroup } from "./imports/svg-v8wqi";

export default function App() {
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'works', 'expertise', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="bg-white flex flex-col items-start min-h-screen w-full relative">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/60 border-b border-gray-100">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 py-3 md:py-4 flex items-center justify-between">
          <p className="shrink-0 text-black text-lg md:text-xl font-semibold">TaT Archive / 2025</p>
          
          {/* Navigation - Center */}
          <nav className="hidden md:flex items-center justify-center gap-6 md:gap-10 absolute left-1/2 -translate-x-1/2">
            {['about', 'works', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`text-sm md:text-base font-semibold capitalize transition-colors ${
                  activeSection === section ? 'text-black' : 'text-gray-400 hover:text-gray-600'
                }`}
              >
                {section}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-4 md:gap-6">
            {/* Social Icons */}
            <div className="hidden sm:flex items-center gap-2">
              <button className="flex items-center justify-center w-10 h-10 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-4 h-4 relative">
                  <svg className="block w-full h-full" fill="none" viewBox="0 0 16 14.5006">
                    <path d={svgPaths.p2836c100} fill="black" />
                  </svg>
                </div>
              </button>
              <button className="flex items-center justify-center w-10 h-10 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-5 h-5 relative overflow-hidden">
                  <svg className="block w-full h-full" fill="none" viewBox="0 0 16.5 16.5">
                    <path d={svgPaths.p12b7380} stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                    <path d={svgPaths.pcd4e590} stroke="black" strokeWidth="1.5" />
                    <path d={svgPaths.p2bcbb600} stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                  </svg>
                </div>
              </button>
            </div>

            {/* View Toggle */}
            <div className="hidden md:flex items-center gap-0.5 bg-white p-2 rounded-3xl border border-gray-200">
              <button className="flex items-center justify-center w-10 h-10 rounded-2xl bg-white border border-gray-200 shadow-sm">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 20 20">
                  <path d={svgPaths.p1679cf00} stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" />
                </svg>
              </button>
              <button className="flex items-center justify-center w-10 h-10 rounded-2xl">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 15.8917 16.8333">
                  <path d={svgPaths.p3ba97880} stroke="#808080" />
                  <path d={svgPaths.p2ca72b00} stroke="#808080" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="sticky top-0 w-full h-[calc(100vh-120px)] md:h-[675px] flex items-center justify-center overflow-hidden pt-[100px] md:pt-[80px] pb-8">
        <div className="absolute inset-0 -z-10 opacity-40">
          <img 
            alt="" 
            className="absolute inset-0 w-full h-full object-cover scale-150 -translate-y-32 md:scale-100 md:translate-y-0" 
            src={imgHeroIttowBackgroundImage} 
          />
        </div>
        
        <div className="w-full max-w-[1296px] px-4 md:px-6 flex flex-col items-center gap-6 md:gap-8">
          {/* Title Card */}
          <div className="w-full backdrop-blur-md bg-white/60 rounded-3xl border border-white shadow-lg">
            <div className="flex flex-col items-center py-6 md:py-8 px-4">
              <p className="text-4xl md:text-5xl font-semibold text-gray-800 mb-2">Ittow</p>
              <p className="text-sm md:text-base text-black text-center">アプリを開いた瞬間に一問一答が開始する学習アプリ</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex items-center gap-2 mt-2">
            <button 
              onClick={() => scrollToSection('works')}
              className="bg-white px-6 py-3 rounded-2xl border border-gray-300 flex items-center gap-2 hover:shadow-lg transition-all hover:border-gray-400"
            >
              <span className="text-sm">作品一覧へ</span>
              <svg className="w-4 h-4 rotate-180" fill="none" viewBox="0 0 16 16">
                <path d={svgPaths.p15d75b00} stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              </svg>
            </button>
            <button className="bg-white px-6 py-3 rounded-2xl border border-gray-300 flex items-center gap-2 hover:shadow-lg transition-all hover:border-gray-400">
              <span className="text-sm">App store</span>
              <svg className="w-4 h-4 rotate-45" fill="none" viewBox="0 0 16 16">
                <path d={svgPaths.p15d75b00} stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              </svg>
            </button>
          </div>

          {/* Carousel Dots - Positioned at bottom */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4">
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <button 
                key={i} 
                className={`w-2.5 h-2.5 rounded-full transition-colors ${i === 0 ? 'bg-gray-900' : 'bg-gray-300 hover:bg-gray-400'}`}
              />
            ))}
          </div>
        </div>

        {/* Navigation Arrows */}
        <div className="hidden md:flex absolute left-10 right-10 top-1/2 -translate-y-1/2 justify-between pointer-events-none">
          <button className="pointer-events-auto bg-white w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center rotate-180 hover:shadow-md transition-shadow">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 20 20">
              <path clipRule="evenodd" d={svgPaths.pdb14000} fill="black" fillRule="evenodd" />
            </svg>
          </button>
          <button className="pointer-events-auto bg-white w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:shadow-md transition-shadow">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 20 20">
              <path clipRule="evenodd" d={svgPaths.pdb14000} fill="black" fillRule="evenodd" />
            </svg>
          </button>
        </div>
      </section>

      {/* Main Content */}
      <main className="w-full relative z-10 bg-white">
        {/* About Section */}
        <section id="about" className="w-full py-16 md:py-32 px-6 md:px-28">
          <div className="max-w-[1224px] mx-auto">
            <div className="flex flex-col gap-10">
              {/* Section Title */}
              <div className="flex flex-col gap-2">
                <h2 className="text-sm font-semibold text-gray-800">About</h2>
                <div className="h-px w-6 bg-gray-800" />
              </div>

              {/* Content */}
              <div className="flex flex-col gap-10">
                <div className="flex flex-col gap-3">
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="text-2xl font-semibold text-gray-800">相原 立弥</h3>
                    <p className="text-base text-gray-500">Tatsuya Aihara</p>
                  </div>
                  <p className="text-base text-gray-800">UI/UX(デジタルプロダクト)デザイナー / 千葉工業大学大学院デザイン科学専攻修士一年</p>
                </div>

                <div className="text-sm text-gray-800 leading-loose max-w-[840px] space-y-4">
                  <p>大学から大学院にかけて、UI/UXを軸に課題解決のための広義のデザインを学んできました。現在は大学院で「AIと人間のインタラクション（HCI）」を研究しています。</p>
                  <p>また、個人では、スマホアプリやWebサービス、Webサイトの企画からデザイン、実装まで行っています。</p>
                  <p>最近、iPadとモニターとスマホケースが壊れました。</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Works Section */}
        <section id="works" className="w-full py-16 md:py-32 px-6 md:px-28">
          <div className="max-w-[1320px] mx-auto">
            <div className="flex flex-col gap-10">
              {/* Section Title */}
              <div className="flex flex-col gap-2">
                <h2 className="text-sm font-semibold text-gray-800">Works</h2>
                <div className="h-px w-6 bg-gray-800" />
              </div>

              {/* Works Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-10">
                {/* Work Card 1 - Released */}
                <WorkCard 
                  title="Hamori"
                  description="アプリを開いた瞬間に一問一答が開始する学習アプリ"
                  tags={['#iosアプリ', '#アプリデザイン', '#飲食店探し']}
                  released={true}
                />
                
                {/* Work Card 2 - Released */}
                <WorkCard 
                  title="Hamori"
                  description="アプリを開いた瞬間に一問一答が開始する学習アプリ"
                  tags={['#iosアプリ', '#アプリデザイン', '#飲食店探し']}
                  released={true}
                />

                {/* Work Cards 3-6 - Not Released */}
                {[...Array(4)].map((_, i) => (
                  <WorkCard 
                    key={i}
                    title="Hamori"
                    description="アプリを開いた瞬間に一問一答が開始する学習アプリ"
                    tags={['#iosアプリ', '#アプリデザイン', '#飲食店探し']}
                    released={false}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Expertise Section */}
        <section id="expertise" className="w-full py-16 md:py-32 px-6 md:px-28 bg-gray-50">
          <div className="max-w-[1224px] mx-auto">
            <div className="flex flex-col gap-10">
              {/* Section Title */}
              <div className="flex flex-col gap-2">
                <h2 className="text-sm font-semibold text-gray-800">Expertise</h2>
                <div className="h-px w-6 bg-gray-800" />
              </div>

              {/* Content */}
              <div className="flex flex-col gap-8">
                <p className="text-xs text-gray-500">キーワード: #UI/UX #AI駆動開発 #</p>

                {/* Expertise Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-11">
                  <div className="flex flex-col gap-4">
                    <h3 className="text-base font-semibold text-gray-800">Webサイト制作</h3>
                    <p className="text-sm text-black leading-relaxed">
                      ユーザーに何を伝えたいか、何をして欲しいか、何を感じて欲しいか、見た目だけでなく体験を意識した情報設計、コンテンツ制作を行い、「わかりやすさ」と「ブランドの世界観」の表現を心がけています。
                    </p>
                  </div>

                  <div className="flex flex-col gap-4">
                    <h3 className="text-base font-semibold text-gray-800">スマホ・Webアプリ開発</h3>
                    <p className="text-sm text-black leading-relaxed">
                      自分が欲しい・作りたいと思ったアプリアイデアを、AIとの対話を通してMVPのアイデア、戦略、実装方針といった仕様書にまとめ、FigmaでUI設計を行いながら詳細な機能や仕様を検討し、AIエージェントを活用して実装を進めています。
                    </p>
                  </div>

                  <div className="flex flex-col gap-4">
                    <h3 className="text-base font-semibold text-gray-800">アプリデザイン</h3>
                    <p className="text-sm text-black leading-relaxed">
                      自分が欲しい・作りたいと思ったアプリアイデアを、AIとの対話を通してMVPのアイデア、戦略、実装方針といった仕様書にまとめ、FigmaでUI設計を行いながら詳細な機能や仕様を検討し、AIエージェントを活用して実装を進めています。
                    </p>
                  </div>
                </div>

                <div className="h-px w-[234px] bg-gray-300" />

                {/* Tools & Languages */}
                <div className="flex flex-col gap-4">
                  <p className="text-xs text-gray-500">使用ツール・言語</p>
                  <p className="text-sm text-gray-800">
                    Figma, HTML/CSS, Astro, TypeScript, React, ReactNative(Expo), Electron, Firebase, Github, Netlify, microCMS, Illustrator, Photoshop
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="w-full py-16 md:py-32 px-6 md:px-28 bg-white">
          <div className="max-w-[1224px] mx-auto">
            <div className="flex flex-col gap-2">
              <h2 className="text-sm font-semibold text-gray-800">Contact</h2>
              <div className="h-px w-6 bg-gray-800" />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

// Work Card Component
function WorkCard({ 
  title, 
  description, 
  tags, 
  released 
}: { 
  title: string; 
  description: string; 
  tags: string[]; 
  released: boolean;
}) {
  return (
    <div className="flex flex-col gap-2 group cursor-pointer">
      {/* Thumbnail */}
      <div className="relative w-full h-60 rounded-lg overflow-hidden">
        {/* Gradient Background */}
        <div 
          className="absolute inset-0"
          style={{ 
            background: 'radial-gradient(circle at center, rgba(112,81,233,1) 40.385%, rgba(116,61,224,1) 76.202%, rgba(102,42,215,1) 99.038%)'
          }} 
        />
        
        {/* iPhone Mockup */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-52 h-auto">
          <img 
            alt="" 
            className="w-full h-auto drop-shadow-2xl" 
            src={imgIPhone20} 
          />
        </div>

        {/* Release Badge */}
        {released && (
          <div className="absolute top-4 right-4 bg-white px-4 py-2 rounded-xl border border-green-500">
            <p className="text-xs font-semibold text-green-500">リリース</p>
          </div>
        )}
      </div>

      {/* Info */}
      <div className="flex flex-col gap-2 pt-2">
        <div className="flex items-center gap-2 text-xs text-gray-500 flex-wrap">
          {tags.map((tag, i) => (
            <span key={i}>{tag}</span>
          ))}
        </div>
        
        <div className="flex flex-col gap-3">
          <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600 transition-colors">{title}</h3>
          <p className="text-sm text-gray-800">{description}</p>
        </div>
      </div>
    </div>
  );
}