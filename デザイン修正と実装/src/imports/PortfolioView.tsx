import svgPaths from "./svg-06ts7tw411";
import imgHeroIttowBackgroundImage from "figma:asset/5f5ddc389087f21567dd3525cc32293fdfc58c76.png";
import imgIPhone20 from "figma:asset/47a3e453c6954f112da457a0a4a19e3c94c177c0.png";
import { imgGroup } from "./svg-v8wqi";

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center justify-center leading-[1.4] not-italic relative shrink-0 text-center text-nowrap">
      <p className="font-['Hiragino_Kaku_Gothic_Pro:W6',sans-serif] relative shrink-0 text-[#343434] text-[48px]">Ittow</p>
      <p className="font-['Hiragino_Kaku_Gothic_Pro:W3',sans-serif] relative shrink-0 text-[16px] text-black">アプリを開いた瞬間に一問一答が開始する学習アプリ</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="backdrop-blur-[6px] backdrop-filter bg-[rgba(255,255,255,0.6)] relative rounded-[24px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[24px] shadow-[0px_0px_64px_0px_rgba(25,25,25,0.05)]" />
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center pb-[32px] pt-[24px] px-[526px] relative w-full">
          <Frame1 />
        </div>
      </div>
    </div>
  );
}

function SolarArrowUpLinear() {
  return (
    <div className="relative size-[16px]" data-name="solar:arrow-up-linear">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="solar:arrow-up-linear">
          <path d={svgPaths.p15d75b00} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Frame2() {
  return (
    <div className="bg-white content-stretch flex gap-[8px] items-center justify-center px-[24px] py-[12px] relative rounded-[16px] self-stretch shrink-0">
      <div aria-hidden="true" className="absolute border border-[#c6c6c6] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <p className="font-['Hiragino_Kaku_Gothic_Pro:W3',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[14px] text-black text-nowrap">作品一覧へ</p>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-[180deg]">
          <SolarArrowUpLinear />
        </div>
      </div>
    </div>
  );
}

function SolarArrowUpLinear1() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[16px] shrink-0 size-[40px]">
      <div aria-hidden="true" className="absolute border border-[#e2e2e2] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_0px_32px_0px_rgba(0,0,0,0.15)]" />
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="iconoir:instagram">
        <div className="absolute inset-[12.5%]" data-name="Group">
          <div className="absolute inset-[-5%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.5 16.5">
              <g id="Group">
                <path d={svgPaths.p12b7380} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                <path d={svgPaths.pcd4e590} id="Vector_2" stroke="var(--stroke-0, black)" strokeWidth="1.5" />
                <path d={svgPaths.p2bcbb600} id="Vector_3" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute backdrop-blur-[6px] backdrop-filter bg-[rgba(255,255,255,0.6)] content-stretch flex items-center justify-between left-[2px] pb-[8px] pt-[24px] px-[40px] top-0 w-[1510px]" data-name="header">
      <p className="font-['Hiragino_Kaku_Gothic_Pro:W6',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[20px] text-black text-nowrap">TaT Archive / 2025</p>
      <div className="content-stretch flex gap-[24px] items-center relative shrink-0">
        <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
          <div className="content-stretch flex items-center justify-center relative rounded-[16px] shrink-0 size-[40px]">
            <div aria-hidden="true" className="absolute border border-[#e2e2e2] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_0px_32px_0px_rgba(0,0,0,0.15)]" />
            <div className="overflow-clip relative shrink-0 size-[16px]" data-name="prime:twitter">
              <div className="absolute contents inset-0" data-name="Group">
                <div className="absolute contents inset-0" data-name="Clip path group">
                  <div className="absolute inset-[4.69%_0] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_-0.75px] mask-size-[16px_16px]" data-name="Group" style={{ maskImage: `url('${imgGroup}')` }}>
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 14.5006">
                      <g id="Group">
                        <path d={svgPaths.p2836c100} fill="var(--fill-0, black)" id="Vector" />
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <SolarArrowUpLinear1 />
        </div>
        <div className="bg-white content-stretch flex gap-[2px] items-center p-[8px] relative rounded-[24px] shrink-0">
          <div aria-hidden="true" className="absolute border border-[#cdcdcd] border-solid inset-0 pointer-events-none rounded-[24px]" />
          <div className="bg-white content-stretch flex items-center justify-center relative rounded-[16px] shrink-0 size-[40px]">
            <div aria-hidden="true" className="absolute border border-[#e2e2e2] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_0px_32px_0px_rgba(0,0,0,0.15)]" />
            <div className="relative shrink-0 size-[20px]" data-name="si:grid-on-line">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                <g id="si:grid-on-line">
                  <path d={svgPaths.p1679cf00} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" />
                </g>
              </svg>
            </div>
          </div>
          <div className="content-stretch flex items-center justify-center relative rounded-[16px] shrink-0 size-[40px]">
            <div className="overflow-clip relative shrink-0 size-[20px]" data-name="mage:box-3d">
              <div className="absolute inset-[10.42%_12.77%]" data-name="Group">
                <div className="absolute inset-[-3.16%_-3.36%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.8917 16.8333">
                    <g id="Group">
                      <path d={svgPaths.p3ba97880} id="Vector" stroke="var(--stroke-0, #808080)" />
                      <path d={svgPaths.p2ca72b00} id="Vector_2" stroke="var(--stroke-0, #808080)" />
                    </g>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute content-stretch flex font-['Hiragino_Kaku_Gothic_Pro:W6',sans-serif] gap-[40px] items-center leading-[1.4] left-1/2 not-italic text-[14px] text-black text-nowrap top-[42px] translate-x-[-50%]">
        <p className="relative shrink-0">about</p>
        <p className="relative shrink-0">works</p>
        <p className="relative shrink-0">contact</p>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0">
      <Frame2 />
      <div className="bg-white content-stretch flex gap-[8px] items-center justify-center px-[24px] py-[12px] relative rounded-[16px] shrink-0">
        <div aria-hidden="true" className="absolute border border-[#c6c6c6] border-solid inset-0 pointer-events-none rounded-[16px]" />
        <p className="font-['Hiragino_Kaku_Gothic_Pro:W3',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[16px] text-black text-nowrap">App store</p>
        <div className="flex items-center justify-center relative shrink-0 size-[22.627px]" style={{ "--transform-inner-width": "300", "--transform-inner-height": "150" } as React.CSSProperties}>
          <div className="flex-none rotate-[45deg]">
            <div className="relative size-[16px]" data-name="solar:arrow-up-linear">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                <g id="solar:arrow-up-linear">
                  <path d={svgPaths.p15d75b00} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-center relative shrink-0 w-[1296px]">
      <Frame />
      <Frame5 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="absolute h-[10px] left-1/2 top-[641px] translate-x-[-50%] w-[100px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 100 10">
        <g id="Frame 2891">
          <circle cx="5" cy="5" fill="var(--fill-0, #191919)" id="Ellipse 127" r="5" />
          <circle cx="23" cy="5" fill="var(--fill-0, #BABABA)" id="Ellipse 126" r="5" />
          <circle cx="41" cy="5" fill="var(--fill-0, #BABABA)" id="Ellipse 125" r="5" />
          <circle cx="59" cy="5" fill="var(--fill-0, #BABABA)" id="Ellipse 122" r="5" />
          <circle cx="77" cy="5" fill="var(--fill-0, #BABABA)" id="Ellipse 123" r="5" />
          <circle cx="95" cy="5" fill="var(--fill-0, #BABABA)" id="Ellipse 124" r="5" />
        </g>
      </svg>
    </div>
  );
}

function LsiconRightFilled() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="lsicon:right-filled">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="lsicon:right-filled">
          <path clipRule="evenodd" d={svgPaths.pdb14000} fill="var(--fill-0, black)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame9() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center relative rounded-[1000px] size-[40px]">
      <div aria-hidden="true" className="absolute border border-[#c6c6c6] border-solid inset-0 pointer-events-none rounded-[1000px]" />
      <LsiconRightFilled />
    </div>
  );
}

function LsiconRightFilled1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="lsicon:right-filled">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="lsicon:right-filled">
          <path clipRule="evenodd" d={svgPaths.pdb14000} fill="var(--fill-0, black)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame8() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center relative rounded-[1000px] shrink-0 size-[40px]">
      <div aria-hidden="true" className="absolute border border-[#c6c6c6] border-solid inset-0 pointer-events-none rounded-[1000px]" />
      <LsiconRightFilled1 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="absolute content-stretch flex items-center justify-between left-[52px] top-[236px] w-[1408px]">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-[180deg]">
          <Frame9 />
        </div>
      </div>
      <Frame8 />
    </div>
  );
}

function Hero() {
  return (
    <div className="bg-white content-stretch flex gap-[10px] h-[675px] items-start justify-center overflow-clip pb-0 pt-[180px] px-0 shrink-0 sticky top-0 w-full" data-name="hero">
      <div className="absolute h-[2394px] left-[-273px] opacity-40 top-[-657px] w-[2206px]" data-name="hero-ittow-backgroundImage">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgHeroIttowBackgroundImage} />
      </div>
      <Frame7 />
      <Frame10 />
      <Frame11 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <p className="font-['Hiragino_Kaku_Gothic_Pro:W6',sans-serif] leading-[1.4] min-w-full not-italic relative shrink-0 text-[#343434] text-[14px] w-[min-content]">About</p>
      <div className="bg-[#343434] h-px shrink-0 w-[24px]" />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex gap-[13px] items-center justify-center relative shrink-0">
      <p className="font-['Hiragino_Kaku_Gothic_Pro:W6',sans-serif] relative shrink-0 text-[#343434] text-[24px]">相原 立弥</p>
      <p className="font-['Hiragino_Kaku_Gothic_Pro:W3',sans-serif] relative shrink-0 text-[#808080] text-[16px]">Tatsuya Aihara</p>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-col gap-[13px] items-start leading-[1.4] relative shrink-0 text-nowrap">
      <Frame6 />
      <p className="font-['Hiragino_Kaku_Gothic_Pro:W3',sans-serif] relative shrink-0 text-[#343434] text-[16px]">UI/UX(デジタルプロダクト)デザイナー / 千葉工業大学大学院デザイン科学専攻修士一年</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start not-italic relative shrink-0">
      <Frame14 />
      <div className="font-['Hiragino_Kaku_Gothic_Pro:W3',sans-serif] leading-[2] relative shrink-0 text-[#343434] text-[14px] w-[840px]">
        <p className="mb-0">大学から大学院にかけて、UI/UXを軸に課題解決のための広義のデザインを学んできました。現在は大学院で「AIと人間のインタラクション（HCI）」を研究しています。</p>
        <p className="mb-0">また、個人では、スマホアプリやWebサービス、Webサイトの企画からデザイン、実装まで行っています。</p>
        <p>最近、iPadとモニターとスマホケースが壊れました。</p>
      </div>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-full">
      <Frame13 />
      <Frame4 />
    </div>
  );
}

function About() {
  return (
    <div className="relative shrink-0 w-full" data-name="about">
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start px-[108px] py-[120px] relative w-full">
          <Frame12 />
        </div>
      </div>
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[1285.627px]">
      <p className="font-['Hiragino_Kaku_Gothic_Pro:W6',sans-serif] leading-[1.4] min-w-full not-italic relative shrink-0 text-[#343434] text-[14px] w-[min-content]">Works</p>
      <div className="bg-[#343434] h-px shrink-0 w-[24px]" />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-0 top-0">
      <div className="absolute h-[238px] left-0 top-0 w-[422px]" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\\'0 0 422 238\\\' xmlns=\\\'http://www.w3.org/2000/svg\\\' preserveAspectRatio=\\\'none\\\'><rect x=\\\'0\\\' y=\\\'0\\\' height=\\\'100%\\\' width=\\\'100%\\\' fill=\\\'url(%23grad)\\\' opacity=\\\'1\\\'/><defs><radialGradient id=\\\'grad\\\' gradientUnits=\\\'userSpaceOnUse\\\' cx=\\\'0\\\' cy=\\\'0\\\' r=\\\'10\\\' gradientTransform=\\\'matrix(1.292e-15 11.9 -21.1 7.2866e-16 211 119)\\\'><stop stop-color=\\\'rgba(112,81,233,1)\\\' offset=\\\'0.40385\\\'/><stop stop-color=\\\'rgba(116,61,224,1)\\\' offset=\\\'0.76202\\\'/><stop stop-color=\\\'rgba(102,42,215,1)\\\' offset=\\\'0.99038\\\'/></radialGradient></defs></svg>')" }} />
      <div className="absolute h-[199.978px] left-[107px] top-[28px] w-[207.12px]" data-name="iPhone 20">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[125.36%] left-[-30.88%] max-w-none top-[-14.9%] w-[161.76%]" src={imgIPhone20} />
        </div>
      </div>
    </div>
  );
}

function Frame15() {
  return (
    <div className="absolute bg-white content-stretch flex items-center justify-center left-[327px] px-[16px] py-[8px] rounded-[12px] top-[16px]">
      <div aria-hidden="true" className="absolute border border-[#20b946] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="font-['Hiragino_Kaku_Gothic_Pro:W6',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#20b946] text-[12px] text-nowrap">リリース</p>
    </div>
  );
}

function HamoriThum() {
  return (
    <div className="h-[238px] relative shrink-0 w-full" data-name="Hamori-thum">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[10px] items-center justify-center px-[17px] py-[15px] relative size-full">
          <Group />
          <Frame15 />
        </div>
      </div>
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex font-['Hiragino_Kaku_Gothic_Pro:W3',sans-serif] gap-[8px] items-center leading-[1.4] not-italic relative shrink-0 text-[#707070] text-[12px] text-nowrap">
      <p className="relative shrink-0">#iosアプリ</p>
      <p className="relative shrink-0">#アプリデザイン</p>
      <p className="relative shrink-0">#飲食店探し</p>
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start leading-[1.4] not-italic relative shrink-0 text-[#343434] w-full">
      <p className="font-['Hiragino_Kaku_Gothic_Pro:W6',sans-serif] relative shrink-0 text-[20px] w-full">Hamori</p>
      <p className="font-['Hiragino_Kaku_Gothic_Pro:W3',sans-serif] relative shrink-0 text-[14px] w-full">アプリを開いた瞬間に一問一答が開始する学習アプリ</p>
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[336px]">
      <Frame17 />
      <Frame19 />
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[422px]">
      <HamoriThum />
      <Frame18 />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents left-0 top-0">
      <div className="absolute h-[238px] left-0 top-0 w-[422px]" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\\'0 0 422 238\\\' xmlns=\\\'http://www.w3.org/2000/svg\\\' preserveAspectRatio=\\\'none\\\'><rect x=\\\'0\\\' y=\\\'0\\\' height=\\\'100%\\\' width=\\\'100%\\\' fill=\\\'url(%23grad)\\\' opacity=\\\'1\\\'/><defs><radialGradient id=\\\'grad\\\' gradientUnits=\\\'userSpaceOnUse\\\' cx=\\\'0\\\' cy=\\\'0\\\' r=\\\'10\\\' gradientTransform=\\\'matrix(1.292e-15 11.9 -21.1 7.2866e-16 211 119)\\\'><stop stop-color=\\\'rgba(112,81,233,1)\\\' offset=\\\'0.40385\\\'/><stop stop-color=\\\'rgba(116,61,224,1)\\\' offset=\\\'0.76202\\\'/><stop stop-color=\\\'rgba(102,42,215,1)\\\' offset=\\\'0.99038\\\'/></radialGradient></defs></svg>')" }} />
      <div className="absolute h-[199.978px] left-[107px] top-[28px] w-[207.12px]" data-name="iPhone 20">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[125.36%] left-[-30.88%] max-w-none top-[-14.9%] w-[161.76%]" src={imgIPhone20} />
        </div>
      </div>
    </div>
  );
}

function Frame20() {
  return (
    <div className="absolute bg-white content-stretch flex items-center justify-center left-[327px] px-[16px] py-[8px] rounded-[12px] top-[16px]">
      <div aria-hidden="true" className="absolute border border-[#20b946] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="font-['Hiragino_Kaku_Gothic_Pro:W6',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#20b946] text-[12px] text-nowrap">リリース</p>
    </div>
  );
}

function Frame24() {
  return (
    <div className="h-[238px] relative shrink-0 w-full">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[10px] items-center justify-center px-[17px] py-[15px] relative size-full">
          <Group1 />
          <Frame20 />
        </div>
      </div>
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex font-['Hiragino_Kaku_Gothic_Pro:W3',sans-serif] gap-[8px] items-center leading-[1.4] not-italic relative shrink-0 text-[#707070] text-[12px] text-nowrap">
      <p className="relative shrink-0">#iosアプリ</p>
      <p className="relative shrink-0">#アプリデザイン</p>
      <p className="relative shrink-0">#飲食店探し</p>
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start leading-[1.4] not-italic relative shrink-0 text-[#343434] w-full">
      <p className="font-['Hiragino_Kaku_Gothic_Pro:W6',sans-serif] relative shrink-0 text-[20px] w-full">Hamori</p>
      <p className="font-['Hiragino_Kaku_Gothic_Pro:W3',sans-serif] relative shrink-0 text-[14px] w-full">アプリを開いた瞬間に一問一答が開始する学習アプリ</p>
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[336px]">
      <Frame21 />
      <Frame22 />
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[422px]">
      <Frame24 />
      <Frame23 />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents left-0 top-0">
      <div className="absolute h-[238px] left-0 top-0 w-[422px]" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\\'0 0 422 238\\\' xmlns=\\\'http://www.w3.org/2000/svg\\\' preserveAspectRatio=\\\'none\\\'><rect x=\\\'0\\\' y=\\\'0\\\' height=\\\'100%\\\' width=\\\'100%\\\' fill=\\\'url(%23grad)\\\' opacity=\\\'1\\\'/><defs><radialGradient id=\\\'grad\\\' gradientUnits=\\\'userSpaceOnUse\\\' cx=\\\'0\\\' cy=\\\'0\\\' r=\\\'10\\\' gradientTransform=\\\'matrix(1.292e-15 11.9 -21.1 7.2866e-16 211 119)\\\'><stop stop-color=\\\'rgba(112,81,233,1)\\\' offset=\\\'0.40385\\\'/><stop stop-color=\\\'rgba(116,61,224,1)\\\' offset=\\\'0.76202\\\'/><stop stop-color=\\\'rgba(102,42,215,1)\\\' offset=\\\'0.99038\\\'/></radialGradient></defs></svg>')" }} />
      <div className="absolute h-[199.978px] left-[107px] top-[28px] w-[207.12px]" data-name="iPhone 20">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[125.36%] left-[-30.88%] max-w-none top-[-14.9%] w-[161.76%]" src={imgIPhone20} />
        </div>
      </div>
    </div>
  );
}

function Frame28() {
  return (
    <div className="h-[238px] relative shrink-0 w-full">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[17px] py-[15px] relative size-full">
          <Group2 />
        </div>
      </div>
    </div>
  );
}

function Frame35() {
  return (
    <div className="content-stretch flex font-['Hiragino_Kaku_Gothic_Pro:W3',sans-serif] gap-[8px] items-center leading-[1.4] not-italic relative shrink-0 text-[#707070] text-[12px] text-nowrap">
      <p className="relative shrink-0">#iosアプリ</p>
      <p className="relative shrink-0">#アプリデザイン</p>
      <p className="relative shrink-0">#飲食店探し</p>
    </div>
  );
}

function Frame37() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start leading-[1.4] not-italic relative shrink-0 text-[#343434] w-full">
      <p className="font-['Hiragino_Kaku_Gothic_Pro:W6',sans-serif] relative shrink-0 text-[20px] w-full">Hamori</p>
      <p className="font-['Hiragino_Kaku_Gothic_Pro:W3',sans-serif] relative shrink-0 text-[14px] w-full">アプリを開いた瞬間に一問一答が開始する学習アプリ</p>
    </div>
  );
}

function Frame38() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[336px]">
      <Frame35 />
      <Frame37 />
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[422px]">
      <Frame28 />
      <Frame38 />
    </div>
  );
}

function Frame40() {
  return (
    <div className="content-center flex flex-wrap gap-[40px_15px] items-center relative shrink-0 w-full">
      <Frame25 />
      <Frame26 />
      {[...Array(4).keys()].map((_, i) => (
        <Frame27 key={i} />
      ))}
    </div>
  );
}

function Frame39() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-full">
      <Frame16 />
      <Frame40 />
    </div>
  );
}

function Works() {
  return (
    <div className="relative shrink-0 w-full" data-name="works">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[108px] py-[120px] relative w-full">
          <Frame39 />
        </div>
      </div>
    </div>
  );
}

function Frame41() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <p className="font-['Hiragino_Kaku_Gothic_Pro:W6',sans-serif] leading-[1.4] min-w-full not-italic relative shrink-0 text-[#343434] text-[14px] w-[min-content]">Expertise</p>
      <div className="bg-[#343434] h-px shrink-0 w-[24px]" />
    </div>
  );
}

function Frame29() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[16px] grow items-start leading-[1.4] min-h-px min-w-px not-italic relative shrink-0">
      <p className="font-['Hiragino_Kaku_Gothic_Pro:W6',sans-serif] relative shrink-0 text-[#343434] text-[16px] w-full">Webサイト制作</p>
      <p className="font-['Hiragino_Kaku_Gothic_Pro:W3',sans-serif] relative shrink-0 text-[14px] text-black w-full">ユーザーに何を伝えたいか、何をして欲しいか、何を感じて欲しいか、見た目だけでなく体験を意識した情報設計、コンテンツ制作を行い、「わかりやすさ」と「ブランドの世界観」の表現を心がけています。</p>
    </div>
  );
}

function Frame30() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[16px] grow items-start leading-[1.4] min-h-px min-w-px not-italic relative shrink-0">
      <p className="font-['Hiragino_Kaku_Gothic_Pro:W6',sans-serif] relative shrink-0 text-[#343434] text-[16px] w-full">スマホ・Webアプリ開発</p>
      <p className="font-['Hiragino_Kaku_Gothic_Pro:W3',sans-serif] relative shrink-0 text-[14px] text-black w-full">自分が欲しい・作りたいと思ったアプリアイデアを、AIとの対話を通してMVPのアイデア、戦略、実装方針といった仕様書にまとめ、FigmaでUI設計を行いながら詳細な機能や仕様を検討し、AIエージェントを活用して実装を進めています。</p>
    </div>
  );
}

function Frame31() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[16px] grow items-start leading-[1.4] min-h-px min-w-px not-italic relative shrink-0">
      <p className="font-['Hiragino_Kaku_Gothic_Pro:W6',sans-serif] relative shrink-0 text-[#343434] text-[16px] w-full">アプリデザイン</p>
      <p className="font-['Hiragino_Kaku_Gothic_Pro:W3',sans-serif] relative shrink-0 text-[14px] text-black w-full">自分が欲しい・作りたいと思ったアプリアイデアを、AIとの対話を通してMVPのアイデア、戦略、実装方針といった仕様書にまとめ、FigmaでUI設計を行いながら詳細な機能や仕様を検討し、AIエージェントを活用して実装を進めています。</p>
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex gap-[43px] items-center relative shrink-0 w-full">
      <Frame29 />
      <Frame30 />
      <Frame31 />
    </div>
  );
}

function Frame36() {
  return (
    <div className="content-stretch flex flex-col font-['Hiragino_Kaku_Gothic_Pro:W3',sans-serif] gap-[16px] items-start leading-[1.4] not-italic relative shrink-0 w-full">
      <p className="relative shrink-0 text-[#707070] text-[12px] w-full">使用ツール・言語</p>
      <p className="relative shrink-0 text-[#343434] text-[14px] w-full">Figma, HTML/CSS, Astro, TypeScript, React, ReactNative(Expo), Electron, Firebase, Github, Netlify, microCMS, Illustrator, Photoshop</p>
    </div>
  );
}

function Frame33() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full">
      <p className="font-['Hiragino_Kaku_Gothic_Pro:W3',sans-serif] leading-[1.4] min-w-full not-italic relative shrink-0 text-[#707070] text-[12px] w-[min-content]">キーワード: #UI/UX #AI駆動開発 #</p>
      <Frame32 />
      <div className="bg-[#d9d9d9] h-px shrink-0 w-[234px]" />
      <Frame36 />
    </div>
  );
}

function Frame34() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-full">
      <Frame41 />
      <Frame33 />
    </div>
  );
}

function Expertise() {
  return (
    <div className="bg-[#fafafa] relative shrink-0 w-full" data-name="expertise">
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start px-[108px] py-[120px] relative w-full">
          <Frame34 />
        </div>
      </div>
    </div>
  );
}

function Frame42() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <p className="font-['Hiragino_Kaku_Gothic_Pro:W6',sans-serif] leading-[1.4] min-w-full not-italic relative shrink-0 text-[#343434] text-[14px] w-[min-content]">Contact</p>
      <div className="bg-[#343434] h-px shrink-0 w-[24px]" />
    </div>
  );
}

function Contact() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="contact">
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start px-[108px] py-[120px] relative w-full">
          <Frame42 />
        </div>
      </div>
    </div>
  );
}

function Main() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="main">
      <About />
      <Works />
      <Expertise />
      <Contact />
    </div>
  );
}

export default function PortfolioView() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-name="Portfolio-view">
      <Frame3 />
      <Hero />
      <Main />
    </div>
  );
}