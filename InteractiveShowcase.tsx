/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Megaphone, 
  FileText, 
  MapPin, 
  Palette, 
  Sparkles, 
  HeartHandshake, 
  Plus, 
  ArrowLeft, 
  ArrowRight, 
  Video, 
  Eye, 
  CheckCircle2, 
  TrendingUp, 
  Users, 
  MousePointerClick,
  Award
} from "lucide-react";

export default function InteractiveShowcase() {
  // Switcher Pill State
  const [activeTab, setActiveTab] = useState<"driving" | "walking">("walking");

  // Multi-Step Recommendation Calligraphy State (01, 02, 03)
  const [calligraphyPage, setCalligraphyPage] = useState(1);

  // Travel Helper Icon Bar State (6 columns)
  const [selectedHelper, setSelectedHelper] = useState<number>(0);

  // Gallery Portfolio Card State (5 columns)
  const [selectedGallery, setSelectedGallery] = useState<number>(0);

  // Helper Bar Data
  const helperItems = [
    { id: 0, label: "인스타 피드", desc: "고객 감성을 저격하는 피드 기획 및 레이아웃 설계 국면", icon: Megaphone },
    { id: 1, label: "블로그 최적화", desc: "검색자의 구매 심리를 자극하는 고밀도 블로그 글쓰기 비결", icon: FileText },
    { id: 2, label: "지도 플레이스", desc: "우리 동네 1등 매장으로 자리 잡는 플레이스 핵심 순위 전략", icon: MapPin },
    { id: 3, label: "트렌드 디자인", desc: "템플릿 기반으로 3초 만에 완성하는 실용 마케팅 시각화", icon: Palette },
    { id: 4, label: "AI 콘텐츠 생산", desc: "ChatGPT & Claude 로 숏폼 대본과 피드를 자동 전사하는 기술", icon: Sparkles },
    { id: 5, label: "1:1 매칭 상담", desc: "수준별 핀셋 점검으로 맞춤형 유입 흐름을 구축하는 밀착 밀어주기", icon: HeartHandshake }
  ];

  // Calligraphy Messages corresponding to pages
  const calligraphyMessages = [
    {
      text: "쉽게 배우고 바로 내 매출로 연결해야 진짜 마케팅이다! 🌱",
      accent: "실전 적용도 100%"
    },
    {
      text: "어려운 마케팅 신조어 없이, 자영업자의 언어로 이해하는 비밀! 💡",
      accent: "완벽 해독 & 번역"
    },
    {
      text: "백 명의 예비 고객보다, 당장 결제할 한 명의 단골 확보 전략! 🎯",
      accent: "매출 극대화 중심"
    }
  ];

  // Gallery Destinations (5 items matching analyzed template)
  const galleryItems = [
    {
      id: 0,
      title: "#강남 네일샵 인포",
      tag: "#인스타그램 최적화",
      img: "https://i.pinimg.com/1200x/e4/72/52/e4725274a4ee62c01573cb9d4bf9cacb.jpg",
      stats: { title: "문의 유입량", value: "340% 증가", label: "인스타 단독 예약 수강 2주차" },
      bgColor: "bg-pink-50"
    },
    {
      id: 1,
      title: "#성수동 디저트카페",
      tag: "#네이버 블로그",
      img: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=600",
      stats: { title: "포스팅 방문자수", value: "평균 1,800명", label: "매출 고공 갱신 사례" },
      bgColor: "bg-amber-50"
    },
    {
      id: 2,
      title: "#미용실 플레이스상위",
      tag: "#네이버 지도",
      img: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=600",
      stats: { title: "네이버 스마트콜", value: "월 450건 돌파", label: "지역 내 상호 노출 1위" },
      bgColor: "bg-blue-50"
    },
    {
      id: 3,
      title: "#강북 레스토랑예약",
      tag: "#실시간 예약체계",
      img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80&w=600",
      stats: { title: "노쇼(No-Show) 발생률", value: "-92% 예방", label: "예약금 최저 연동 완비" },
      bgColor: "bg-teal-50"
    },
    {
      id: 4,
      title: "#분당 필라테스샵",
      tag: "#지역 타겟 마케팅",
      img: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80&w=600",
      stats: { title: "신규 수강 등록", value: "매달 28명 안착", label: "인근 아파트 소액 특화광고" },
      bgColor: "bg-purple-50"
    }
  ];

  // Helper navigation logic
  const handleNextPage = () => {
    setCalligraphyPage((prev) => (prev === 3 ? 1 : prev + 1));
  };
  const handlePrevPage = () => {
    setCalligraphyPage((prev) => (prev === 1 ? 3 : prev - 1));
  };

  return (
    <section id="interactive-dashboard" className="py-20 bg-brand-cream border-y border-brand-beige-dark/20 text-center relative font-sans">
      {/* Decorative side graphics */}
      <div className="absolute left-0 top-1/4 w-32 h-64 bg-brand-gold-light/20 rounded-r-3xl -z-10 blur-xl" />
      <div className="absolute right-0 bottom-1/4 w-32 h-64 bg-brand-beige/30 rounded-l-3xl -z-10 blur-xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto mb-10 space-y-4">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-brand-gold-light border border-brand-gold/10">
            <span className="text-xs font-bold text-brand-gold uppercase tracking-wider">
              REAL-TIME INTERACTIVE THEME
            </span>
          </div>
          <h2 className="font-sans font-black text-2xl sm:text-3.5xl text-brand-deep tracking-tight">
            홈페이지 통합 마케팅 대시보드
          </h2>
          <p className="text-sm font-medium text-brand-muted max-w-xl mx-auto">
            실시간 성공 분석과 타겟 맞춤 흐름을 한눈에 체감해보세요. 스타일 지침을 완벽 구현한 고정식 스펙트럼입니다.
          </p>
        </div>

        {/* Component A. Top Level Switcher Pill */}
        <div className="mb-12">
          <div className="inline-flex bg-brand-deep/5 p-1.5 rounded-full border border-brand-beige-dark/20 shadow-inner">
            <button 
              onClick={() => setActiveTab("driving")}
              className={`px-8 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 ${
                activeTab === "driving" 
                  ? "bg-brand-deep text-brand-cream shadow-md" 
                  : "text-brand-muted hover:text-brand-deep"
              }`}
            >
              드라이빙 마케팅 코스
            </button>
            <button 
              onClick={() => setActiveTab("walking")}
              className={`px-8 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 ${
                activeTab === "walking" 
                  ? "bg-brand-deep text-brand-cream shadow-md" 
                  : "text-brand-muted hover:text-brand-deep"
              }`}
            >
              워킹 퍼스트스텝 코스 🌟
            </button>
          </div>
          
          <div className="mt-3 text-xs font-semibold text-brand-gold animate-pulse">
            {activeTab === "walking" 
              ? "초보 소상공인 맞춤: 골목 상권에서 온오프라인 첫걸음을 떼는 직관적 밀착 코칭" 
              : "심화 기획 과정: 소액 광고와 전문 툴을 사용해 대량 리드와 자동 문의망을 연동하는 엔진"}
          </div>
        </div>

        {/* Component B. 6-Column "여행도우미 / 디지털도우미" Icon Bar */}
        <div className="bg-brand-ivory border border-brand-beige-dark/20 rounded-2xl p-6 sm:p-8 mb-12 shadow-2xs">
          <div className="text-left mb-6 flex justify-between items-center">
            <div>
              <h3 className="text-base font-bold text-brand-deep">디지털 마케팅 비서</h3>
              <p className="text-xs text-brand-muted mt-0.5">원하는 과정 아이콘을 눌러 세부 학습 설계 내용을 파악해보세요.</p>
            </div>
            <span className="text-[10px] bg-brand-gold-light text-brand-gold border border-brand-gold/20 font-bold px-2 py-0.5 rounded-md">
              6 CORE SPEC
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {helperItems.map((item) => {
              const IconComp = item.icon;
              const isSelected = selectedHelper === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setSelectedHelper(item.id)}
                  className={`flex flex-col items-center justify-center p-4 rounded-xl border text-center transition-all duration-300 relative group cursor-pointer ${
                    isSelected 
                      ? "bg-brand-cream border-brand-gold shadow-md" 
                      : "bg-brand-cream/60 hover:bg-brand-cream border-brand-beige-dark/25 hover:border-brand-beige-dark/50"
                  }`}
                >
                  {/* Selected Indicating Background Ring */}
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                    isSelected 
                      ? "bg-brand-gold-light text-brand-gold" 
                      : "bg-brand-ivory text-brand-muted group-hover:text-brand-deep group-hover:bg-brand-beige/50"
                  }`}>
                    <IconComp className="w-5 h-5" />
                  </div>
                  
                  <span className={`text-xs font-bold mt-3 transition-colors ${
                    isSelected ? "text-brand-gold" : "text-brand-deep"
                  }`}>
                    {item.label}
                  </span>

                  {/* Active Indicator Bar on Botom */}
                  {isSelected && (
                    <span className="absolute bottom-0 inset-x-8 h-0.5 bg-brand-gold rounded-t-full" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Helper details display block */}
          <div className="mt-6 border-t border-brand-beige-dark/20 pt-5 text-left flex items-start space-x-3 bg-brand-cream/50 p-4 rounded-xl">
            <div className="p-1.5 rounded-lg bg-brand-gold-light text-brand-gold mt-0.5">
              <CheckCircle2 className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-bold text-brand-deep uppercase tracking-wide">
                {helperItems[selectedHelper].label} 집중 가이드
              </div>
              <p className="text-xs sm:text-sm text-brand-muted font-medium mt-1 leading-relaxed">
                {helperItems[selectedHelper].desc} — 초보를 위한 로드맵을 켜고, 1:1 세션에서 해당 주제를 막힘없이 점검합니다.
              </p>
            </div>
          </div>
        </div>

        {/* Component C. The 3-Column Symmetrical Dashboard Row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          
          {/* Card 1: Notice Card (Left) */}
          <div className="bg-brand-deep text-brand-cream rounded-2xl p-6 sm:p-8 flex flex-col justify-between text-left shadow-lg relative min-h-[300px] overflow-hidden group">
            {/* Background decoration lines */}
            <div className="absolute right-0 top-0 w-32 h-32 bg-white/5 rounded-full blur-2xl group-hover:bg-white/10 transition-colors" />

            <div>
              <div className="flex justify-between items-center mb-6">
                <span className="text-[10px] text-brand-gold-light uppercase font-black bg-white/10 px-2.5 py-1 rounded">
                  Notice 공지사항
                </span>
                <button className="w-8 h-8 rounded-full bg-brand-cream/10 flex items-center justify-center hover:bg-brand-cream/20 hover:scale-115 transition-all text-brand-cream">
                  <Plus className="w-4 h-4 text-brand-gold" />
                </button>
              </div>

              <div className="space-y-4">
                <div className="pb-3 border-b border-white/10">
                  <h4 className="text-sm font-bold text-brand-cream line-clamp-1 hover:text-brand-gold transition-colors cursor-pointer">
                    [성공] 강남 네일샵 수강 2주차 만에 릴스 누적 노출 12,000 돌파!
                  </h4>
                  <span className="text-[10px] text-brand-gold-light/60 mt-1 block">골목상권 개척사례</span>
                </div>
                <div className="pb-3 border-b border-white/10">
                  <h4 className="text-sm font-bold text-brand-cream line-clamp-1 hover:text-brand-gold transition-colors cursor-pointer">
                    [알림] 소상공인 정부 지원 맞춤 마케팅 교육 6월 모집
                  </h4>
                  <span className="text-[10px] text-brand-gold-light/60 mt-1 block">선착순 마감 예정</span>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-brand-cream line-clamp-1 hover:text-brand-gold transition-colors cursor-pointer">
                    [공개] 돈 한푼 안 쓰는 네이버 지도 노출 점검 체크시트
                  </h4>
                  <span className="text-[10px] text-brand-gold-light/60 mt-1 block">무료 배포 가이드</span>
                </div>
              </div>
            </div>

            <div className="flex justify-between items-center mt-6 pt-4 border-t border-white/5">
              <span className="text-[9px] text-brand-gold-light/50 font-bold uppercase tracking-widest">
                DIGITAL GREETINGS
              </span>
              <span className="text-[10px] text-brand-gold font-bold">2026.06.05</span>
            </div>
          </div>

          {/* Card 2: Calligraphy Recommendation Banner (Center) */}
          <div className="bg-brand-cream border border-brand-beige-dark/30 rounded-2xl p-6 sm:p-8 flex flex-col justify-between text-center shadow-xs min-h-[300px] relative overflow-hidden">
            {/* Sprout visual line decor mimicking handwritten card */}
            <div className="absolute top-4 left-6 text-emerald-500 flex items-center space-x-1 font-semibold text-[10px]">
              <span className="animate-bounce">🌱</span>
              <span className="font-serif italic text-emerald-600">추천하다!</span>
            </div>
            
            <div className="my-auto py-4 space-y-4">
              <div className="text-xs font-bold text-brand-gold tracking-widest uppercase">
                {calligraphyMessages[calligraphyPage - 1].accent}
              </div>
              
              <p className="font-serif italic text-[18px] sm:text-[20px] font-bold text-brand-deep leading-relaxed px-2">
                "{calligraphyMessages[calligraphyPage - 1].text}"
              </p>
            </div>

            {/* Pagination block */}
            <div className="flex justify-center items-center space-x-4 mt-4">
              <button 
                onClick={handlePrevPage}
                className="p-1.5 rounded-full border border-brand-beige text-brand-muted hover:text-brand-deep hover:bg-brand-ivory transition-colors cursor-pointer"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
              </button>
              
              <div className="flex items-center space-x-1 text-xs">
                <span className="font-bold text-brand-gold">0{calligraphyPage}</span>
                <span className="text-brand-beige-dark">/</span>
                <span className="text-brand-muted">03</span>
              </div>

              <button 
                onClick={handleNextPage}
                className="p-1.5 rounded-full border border-brand-beige text-brand-muted hover:text-brand-deep hover:bg-brand-ivory transition-colors cursor-pointer"
              >
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Card 3: VR Card (Right) */}
          <div className="bg-brand-beige-dark text-brand-cream rounded-2xl p-6 sm:p-8 flex flex-col justify-between text-left shadow-lg relative min-h-[300px] overflow-hidden group">
            {/* Background pattern */}
            <div className="absolute -bottom-6 -right-6 w-36 h-36 bg-white/20 rounded-full blur-xl group-hover:scale-110 transition-transform duration-500" />
            
            <div>
              <div className="flex justify-between items-start mb-6">
                <div className="bg-white/15 px-3 py-1 rounded-full text-[9px] font-extrabold uppercase tracking-widest text-white">
                  Virtual Live Classroom
                </div>
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center animate-pulse">
                  <Video className="w-5 h-5 text-white" />
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-extrabold text-brand-cream tracking-tight">
                  1:1 실시간 밀착 피드백<br />AI/VR 화상 스튜디오
                </h3>
                <p className="text-xs text-white/80 leading-relaxed font-semibold">
                  원격 화면 전송을 통해 피드 기획부터 지도 상위 세팅까지 실시간으로 막히는 곳을 짚어내고 즉각 수리합니다.
                </p>
              </div>
            </div>

            <div className="flex items-center justify-between mt-6">
              <span className="text-xs font-black text-white bg-brand-deep/20 px-3 py-1 rounded-full border border-white/10">
                360° VR 가상 스페이스
              </span>
              <button 
                onClick={() => {
                  const target = document.getElementById("consulting");
                  if (target) target.scrollIntoView({ behavior: "smooth" });
                }}
                className="text-xs font-bold bg-white text-brand-beige-dark hover:bg-brand-ivory px-4 py-2 rounded-xl shadow-md group-hover:translate-x-1 transition-all flex items-center space-x-1"
              >
                <span>입장하기</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

        {/* Component D. "Destinations" Image Gallery Row (5 columns) */}
        <div>
          <div className="text-left mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-2">
            <div>
              <span className="text-xs font-bold text-[#CBB393] tracking-[0.18em] uppercase">SUCCESS STORIES</span>
              <h3 className="text-lg sm:text-xl font-bold text-[#3D352E] mt-1">업종별 밀착 성공 기록 수첩</h3>
            </div>
            <span className="text-xs text-brand-muted font-semibold">카드를 선택해 세부 성과 통계를 확인하세요.</span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {galleryItems.map((item) => {
              const isSelected = selectedGallery === item.id;
              return (
                <div
                  key={item.id}
                  onClick={() => setSelectedGallery(item.id)}
                  className={`group relative flex flex-col justify-between overflow-hidden rounded-[24px] border bg-[#FAF8F5] transition-all duration-500 ease-out cursor-pointer select-none ${
                    isSelected 
                      ? "border-[#D2B591] shadow-[0_15px_35px_-8px_rgba(61,53,46,0.12)] ring-2 ring-[#D2B591]/40 scale-100" 
                      : "border-[#EAE3DB]/40 hover:border-[#D2B591]/40 shadow-[0_10px_30px_-5px_rgba(61,53,46,0.04)] hover:-translate-y-1.5 hover:shadow-[0_20px_40px_-10px_rgba(61,53,46,0.08)]"
                  }`}
                >
                  {/* Image Container */}
                  <div className="relative aspect-square overflow-hidden rounded-t-[23px] bg-white">
                    <img 
                      src={item.img} 
                      alt={item.title} 
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    
                    {/* "Sheer Curtain" Hover Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center bg-[#FAF8F5]/65 backdrop-blur-[3px] transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                      <span className="rounded-full border border-[#3D352E]/30 bg-[#FAF8F5]/85 px-4 py-1.5 text-[9px] sm:text-[10px] font-bold tracking-[0.12em] text-[#3D352E] uppercase transition-all duration-300 hover:bg-[#3D352E] hover:text-[#FAF8F5] flex items-center space-x-1">
                        <Eye className="w-3.5 h-3.5" />
                        <span>확인하기</span>
                      </span>
                    </div>

                    {/* Highly-designed delicate badge matching Japandi nail-polish shelf tones */}
                    <span className="absolute top-3 left-3 rounded-full bg-[#E2EAE4] px-2.5 py-0.5 text-[8px] sm:text-[9px] font-bold tracking-wider text-[#4E6254] uppercase shadow-[0_2px_4px_rgba(0,0,0,0.02)]">
                      {item.tag.replace("#", "")}
                    </span>
                  </div>

                  {/* Elegant Salon style card footer */}
                  <div className="p-4 bg-white text-left border-t border-[#EAE3DB]/40">
                    <span className="text-[9px] font-bold tracking-[0.15em] text-[#CBB393] uppercase block mb-1">
                      {item.tag}
                    </span>
                    <h4 className="font-serif italic text-xs sm:text-sm font-bold text-[#3D352E] line-clamp-1">
                      {item.title}
                    </h4>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Interactive display of the active destination metrics in Warm Minimal style */}
          <motion.div 
            key={selectedGallery}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 p-6 rounded-3xl border border-[#D2B591]/20 flex flex-col md:flex-row justify-between items-center text-left gap-4 bg-[#FAF8F5] shadow-[0_8px_25px_rgba(61,53,46,0.03)]"
          >
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-full bg-[#CBB393] flex items-center justify-center text-brand-cream shrink-0 shadow-inner">
                <Award className="w-5 h-5 text-brand-cream" />
              </div>
              <div>
                <span className="text-[10px] font-bold text-[#CBB393] tracking-widest uppercase">{galleryItems[selectedGallery].tag} SUCCESS REPORT</span>
                <h4 className="text-base font-bold text-[#3D352E]">{galleryItems[selectedGallery].title} 실제 마케팅 결과</h4>
                <p className="text-xs text-brand-muted mt-0.5 font-medium">{galleryItems[selectedGallery].stats.label}</p>
              </div>
            </div>

            <div className="flex space-x-8 text-right bg-white px-6 py-3 rounded-2xl shadow-[0_2px_6px_rgba(61,53,46,0.02)] border border-[#EAE3DB]/80 w-full md:w-auto justify-between md:justify-end">
              <div>
                <span className="text-[9px] text-[#CBB393] block font-bold tracking-wider uppercase">METRIC INDEX</span>
                <span className="text-xs font-bold text-[#3D352E]">{galleryItems[selectedGallery].stats.title}</span>
              </div>
              <div className="border-l border-[#EAE3DB] pl-8 text-left">
                <span className="text-[9px] text-brand-gold block font-black">자체 갱신율</span>
                <span className="text-base font-black text-[#0DA1B9] select-all flex items-center space-x-1">
                  <TrendingUp className="w-4 h-4 shrink-0" />
                  <span>{galleryItems[selectedGallery].stats.value}</span>
                </span>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
