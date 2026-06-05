/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { ArrowRight, Sparkles, Instagram, Search, MessageSquare, GraduationCap } from "lucide-react";

export default function HeroSection() {
  const scrollToSection = (id: string) => {
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      id="introduction"
      className="relative min-h-screen pt-28 pb-20 md:pt-36 md:pb-28 flex items-center bg-radial from-brand-ivory via-brand-ivory to-brand-beige/30 overflow-hidden"
    >
      {/* Background elegant circles */}
      <div className="absolute top-0 right-0 w-[40rem] h-[40rem] rounded-full bg-brand-gold-light/40 blur-3xl -z-10 translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-[30rem] h-[30rem] rounded-full bg-brand-beige/50 blur-3xl -z-10 -translate-x-1/3 translate-y-1/3" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Hero Left Content */}
          <div className="lg:col-span-7 flex flex-col space-y-8 text-left">
            {/* Tag/Badge */}
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex self-start items-center space-x-2 px-4 py-1.5 rounded-full bg-brand-gold-light border border-brand-gold/20"
            >
              <Sparkles className="w-4 h-4 text-brand-gold fill-brand-gold" />
              <span className="text-xs font-semibold text-brand-gold tracking-wider uppercase">
                1:1 밀착 코칭 전문 연구소
              </span>
            </motion.div>

            {/* Main Title */}
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-sans font-extrabold text-[32px] sm:text-[42px] lg:text-[46px] leading-[1.25] text-brand-deep tracking-tight"
              >
                디지털 마케팅, <br />
                <span className="relative inline-block italic font-serif text-brand-gold mr-1">
                  혼자 막막했다면
                  <span className="absolute bottom-1 bg-brand-gold-light left-0 w-full h-3 -z-10 opacity-70" />
                </span><br className="sm:hidden" />
                이제 첫걸음부터 함께 시작하세요
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-base sm:text-lg text-brand-muted font-medium max-w-xl leading-relaxed"
              >
                인스타그램, 블로그, 네이버 플레이스, AI 콘텐츠 제작까지 <br />
                철저히 초보 사업자의 눈높이와 현재 마케팅 수준에 맞춰 1:1로 세심히 알려드립니다.
              </motion.p>
            </div>

            {/* Target Client Tags */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-2 pt-2"
            >
              {["소상공인", "자영업자", "1인 사업자", "SNS/블로그 스타터"].map((target, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-lg bg-brand-cream border border-brand-beige text-xs text-brand-deep font-semibold shadow-2xs"
                >
                  #{target}
                </span>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <button
                onClick={() => scrollToSection("consulting")}
                className="inline-flex items-center justify-center space-x-2 px-8 py-4 rounded-xl bg-brand-deep hover:bg-brand-deep-hover text-brand-ivory font-bold text-base shadow-lg hover:shadow-brand-deep/20 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 cursor-pointer"
              >
                <span>무료 상담 신청하기</span>
                <ArrowRight className="w-5 h-5 text-brand-gold" />
              </button>
              
              <button
                onClick={() => scrollToSection("courses")}
                className="inline-flex items-center justify-center space-x-2 px-8 py-4 rounded-xl bg-brand-cream hover:bg-brand-beige-hover text-brand-deep border-2 border-brand-deep/15 font-bold text-base transition-all duration-300 cursor-pointer"
              >
                <span>교육 과정 둘러보기</span>
              </button>
            </motion.div>
          </div>

          {/* Hero Right Interactive Illustration Mockups */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0 flex items-center justify-center h-[350px] sm:h-[450px]">
            {/* Phone Mockup Frame */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -3 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.3, type: "spring", stiffness: 100 }}
              className="absolute left-6 top-1/2 -translate-y-1/2 w-[180px] sm:w-[220px] aspect-[9/18] bg-slate-900 rounded-[36px] p-2.5 shadow-2xl border-4 border-slate-800 z-20"
            >
              {/* Phone screen internal mock */}
              <div className="w-full h-full bg-slate-50 rounded-[28px] overflow-hidden flex flex-col font-sans">
                {/* Header bar mimic */}
                <div className="h-6 bg-brand-deep text-brand-ivory flex items-center px-4 justify-between text-[8px] font-bold">
                  <span>09:41</span>
                  <span>DIGITAL FLIGHT</span>
                </div>
                {/* Simulated Social Header */}
                <div className="p-2 border-b border-slate-100 flex items-center space-x-1 bg-brand-ivory justify-between">
                  <div className="flex items-center space-x-1.5">
                    <div className="w-5 h-5 rounded-full bg-brand-deep flex items-center justify-center text-[7px] text-brand-ivory font-bold">
                      첫
                    </div>
                    <span className="text-[8px] font-bold text-brand-deep">디지털첫걸음</span>
                  </div>
                  <Instagram className="w-3.5 h-3.5 text-pink-600 fill-pink-600/10" />
                </div>
                {/* Simulated feeds content */}
                <div className="p-2 flex-grow overflow-hidden space-y-2 bg-brand-gold-light/20">
                  <div className="bg-brand-cream rounded-md p-1.5 shadow-2xs border border-slate-100">
                    <div className="flex items-center space-x-1 mb-1">
                      <div className="w-3 h-3 rounded-full bg-brand-gold shrink-0" />
                      <div className="h-1.5 w-14 bg-slate-200 rounded" />
                    </div>
                    <div className="h-16 w-full bg-brand-deep/5 rounded-md flex items-center justify-center p-1.5">
                      <div className="space-y-1 text-center">
                        <div className="text-[8px] font-bold text-brand-deep leading-tight">초보자의 1:1 비밀과외</div>
                        <div className="text-[6px] text-brand-gold font-medium">인스타 피드 기획법 8강</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-brand-cream rounded-md p-1.5 shadow-2xs border border-slate-100 space-y-1.5">
                    <div className="flex items-center space-x-1">
                      <Instagram className="w-2.5 h-2.5 text-rose-500" />
                      <span className="text-[6px] text-slate-400">릴스 콘텐츠 조회수 달성!</span>
                    </div>
                    <div className="flex justify-between items-center bg-rose-50/50 p-1 rounded">
                      <span className="text-[7px] font-bold text-red-600">누적 노출 1.2만 돌파</span>
                      <span className="text-[5px] text-slate-400">미션 완료</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Desktop Laptop Web Board Mockup */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, x: 50, y: -40 }}
              animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, type: "spring" }}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-[240px] sm:w-[320px] aspect-[4/3] bg-brand-cream rounded-2xl shadow-xl border border-brand-beige-dark/40 z-10 p-3"
            >
              {/* Mock Web Dashboard */}
              <div className="w-full h-full flex flex-col font-sans">
                {/* Search Bar mimic */}
                <div className="flex items-center space-x-2 bg-brand-beige/50 py-1.5 px-3 rounded-lg mb-3 border border-brand-beige">
                  <Search className="w-3.5 h-3.5 text-brand-deep" />
                  <span className="text-[9px] text-brand-deep font-semibold">"네이버 플레이스 상위 노출 팁"</span>
                  <div className="ml-auto bg-green-600 text-white text-[7px] px-1 rounded">N검색</div>
                </div>

                {/* Dashboard body graph mock */}
                <div className="flex-grow space-y-2.5 overflow-hidden">
                  <div className="bg-gradient-to-r from-brand-deep to-teal-800 text-brand-ivory p-2.5 rounded-lg">
                    <div className="text-[9px] font-semibold opacity-85">블로그 유입 및 조회 통계</div>
                    <div className="flex items-baseline space-x-1 mt-1">
                      <span className="text-sm font-bold">1,480명</span>
                      <span className="text-[7px] text-emerald-300 font-medium">+312% 급상승</span>
                    </div>
                    <div className="h-5 flex items-end space-x-1 bg-brand-ivory/10 px-1 py-0.5 rounded-md mt-1.5">
                      <div className="h-[25%] flex-grow bg-brand-gold/70 rounded-xs" />
                      <div className="h-[45%] flex-grow bg-brand-gold/70 rounded-xs" />
                      <div className="h-[30%] flex-grow bg-brand-gold/70 rounded-xs" />
                      <div className="h-[75%] flex-grow bg-brand-gold/75 rounded-xs" />
                      <div className="h-[95%] flex-grow bg-brand-gold rounded-xs" />
                    </div>
                  </div>

                  {/* Tiny checkboard items */}
                  <div className="space-y-1.5">
                    <div className="flex items-center space-x-1.5 text-[8px] text-slate-600">
                      <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                      <span className="font-semibold">네이버 지도 플레이스 점검 완료</span>
                    </div>
                    <div className="flex items-center space-x-1.5 text-[8px] text-slate-600">
                      <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                      <span className="font-semibold">네이버 플레이스 사진 교체 후 문의 +25%</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* AI Generator floating mockup bullet */}
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -top-4 right-16 bg-white shadow-lg border border-brand-gold/20 p-2.5 rounded-xl flex items-center space-x-2 z-30 font-sans"
            >
              <div className="w-7 h-7 bg-brand-gold-light rounded-lg flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-brand-gold" />
              </div>
              <div className="text-left">
                <div className="text-[9px] font-bold text-brand-deep">AI 블로그 자동화</div>
                <div className="text-[7px] text-slate-400">초안 작성시간 -80% 단축</div>
              </div>
            </motion.div>

            {/* Coach interactive text card */}
            <motion.div
              animate={{
                y: [0, 8, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
              className="absolute bottom-2 right-8 sm:right-24 bg-brand-deep text-brand-ivory shadow-lg p-2.5 rounded-xl flex items-center space-x-2 z-30 font-sans"
            >
              <GraduationCap className="w-4 h-4 text-brand-gold" />
              <span className="text-[8px] sm:text-[9px] font-bold text-brand-ivory">
                1:1 맞춤 피드백 및 실기 진행
              </span>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
