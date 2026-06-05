/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Instagram, Mail, Chrome, Phone } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-brand-deep-hover text-brand-ivory/80 pt-16 pb-24 sm:pb-16 border-t border-brand-deep font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main upper Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 border-b border-white/10 pb-12 text-left">
          
          {/* Logo Brand information */}
          <div className="md:col-span-5 space-y-4">
            <button
              onClick={handleScrollToTop}
              className="flex items-center space-x-2 text-left focus:outline-none cursor-pointer group"
            >
              <div className="w-8 h-8 rounded-lg bg-brand-gold flex items-center justify-center text-brand-deep font-bold text-base transition-transform group-hover:scale-105">
                디
              </div>
              <div>
                <span className="block font-bold text-base tracking-tight text-brand-ivory">
                  디지털 첫걸음 연구소
                </span>
                <span className="block text-[8px] text-brand-gold tracking-widest font-bold">
                  DIGITAL START INSTITUTE
                </span>
              </div>
            </button>
            
            <p className="text-xs leading-relaxed text-brand-ivory/60 font-medium max-w-sm">
              디지털 첫걸음 연구소는 인스타그램 피드, 네이버 블로그 글쓰기, 오프라인 상점용 네이버 플레이스 정밀 맵 랭킹 세팅, 초보 수준에 기민하게 발 맞춘 AI 프롬프트 교육을 전문으로 진행하는 소상공인 최적화 밀착 코칭 브랜드입니다.
            </p>

            {/* Support Line */}
            <div className="flex items-center space-x-2 text-xs font-semibold text-brand-gold pt-1">
              <Phone className="w-3.5 h-3.5" />
              <span>교육 의뢰 및 신청 직통 예약: 010-9005-4885</span>
            </div>
          </div>

          {/* Links 1: Service */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-brand-gold font-bold">
              제공 교육 서비스
            </h4>
            <ul className="space-y-1.5 text-xs font-semibold text-brand-ivory/70">
              <li>인스타그램 마케팅 1:1 코칭</li>
              <li>네이버 블로그 글쓰기 최적화</li>
              <li>네이버 지도 플레이스 최적 관리</li>
              <li>카드뉴스 및 숏폼 릴스 제작</li>
              <li>ChatGPT/Claude 프롬프트 교육</li>
              <li>광고 기획집행 및 성과 체크 기초</li>
            </ul>
          </div>

          {/* Links 2: Social media connections placeholder */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs uppercase tracking-widest text-brand-gold font-bold">
              소셜 채널 및 연락망
            </h4>
            
            <div className="flex flex-col space-y-2 text-xs font-medium text-brand-ivory/70">
              <div className="flex items-center space-x-2.5">
                <Mail className="w-3.5 h-3.5 text-brand-gold" />
                <span>daraeavatar@naver.com</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <Instagram className="w-3.5 h-3.5 text-brand-gold" />
                <span>@digital_first_step (준비중)</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <Chrome className="w-3.5 h-3.5 text-brand-gold" />
                <span>네이버 공식 블로그 (개설 예정)</span>
              </div>
            </div>

            {/* Social Icons circle buttons */}
            <div className="flex space-x-3.5 pt-1">
              {[
                { icon: Instagram, href: "https://instagram.com" },
                { icon: Chrome, href: "https://blog.naver.com" },
                { icon: Mail, href: "mailto:daraeavatar@naver.com" }
              ].map((social, idx) => {
                const Icon = social.icon;
                return (
                  <a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 hover:border-brand-gold hover:bg-brand-deep flex items-center justify-center text-brand-ivory text-xs transition-colors"
                  >
                    <Icon className="w-4 h-4 text-brand-gold hover:text-brand-ivory" />
                  </a>
                );
              })}
            </div>
          </div>

        </div>

        {/* Lower copyright bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-semibold text-brand-ivory/40">
          <div className="text-center sm:text-left space-y-1">
            <span>© {currentYear} 디지털 첫걸음 연구소. All Rights Reserved.</span>
            <span className="block text-[10px] text-brand-ivory/30">
              사업자 등록증 대기 중 // 대표 원장 연락 회선: 010-9005-4885
            </span>
          </div>
          
          <div className="flex space-x-4 text-[10px]">
            <button onClick={handleScrollToTop} className="hover:text-brand-gold transition-colors">
              개인정보처리방침
            </button>
            <button onClick={handleScrollToTop} className="hover:text-brand-gold transition-colors">
              서비스이용약관
            </button>
            <button onClick={handleScrollToTop} className="hover:text-brand-gold transition-colors">
              맨 위로 가기 ▲
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
