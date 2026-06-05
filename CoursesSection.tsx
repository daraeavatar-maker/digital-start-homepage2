/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Instagram, FileText, MapPin, Sparkles, X, Check, Eye, HelpCircle } from "lucide-react";
import { CourseCard } from "../types";

export default function CoursesSection() {
  const [selectedCourse, setSelectedCourse] = useState<CourseCard | null>(null);

  // Six core offering tags (as requested)
  const allServices = [
    "인스타그램 마케팅 1:1 코칭",
    "네이버 블로그 글쓰기 교육",
    "네이버 플레이스 최적화 교육",
    "카드뉴스·릴스 콘텐츠 제작 교육",
    "AI 도구 활용 교육",
    "광고 소재 기획 및 집행 기초 교육",
  ];

  const courses: CourseCard[] = [
    {
      id: 1,
      title: "인스타그램 마케팅 1:1 코칭",
      description: "프로필 세팅부터 고객 전용 브랜딩 테마 선정, 대세 릴스·카드뉴스 기획과 실크로드 문의 유입망 설계까지 전 과정을 밀착 지도합니다.",
      tags: ["최단기 세팅", "릴스 동행 제작", "1인 최적화"],
      iconName: "Instagram",
      details: [
        "1단계: 나만의 브랜드 콘셉트 및 페르소나 설정",
        "2단계: 터지는 프로필 소개글 및 하이라이트 아이콘 세팅",
        "3단계: 캔바/미리캔버스로 카드뉴스 템플릿 3초 안에 완성하기",
        "4단계: 스마트폰으로 촬영한 고화질 릴스 영상 편집 및 사운드 매칭",
        "5단계: 고정 고객을 끌어당기는 핵심 해시태그 및 피드 배치 노하우",
      ],
    },
    {
      id: 2,
      title: "네이버 블로그 글쓰기 교육",
      description: "단순히 지식을 나열하지 않습니다. 주 고객층이 네이버 정보 검색 시 가장 먼저 보일 수 있도록 제목 짓기와 본문 배치, 매입 구조를 구축합니다.",
      tags: ["검색 노출 최적화", "본문 구조 템플릿", "영업용 글쓰기"],
      iconName: "FileText",
      details: [
        "1단계: 글감을 자동으로 쏟아내는 마인드맵 기획 기법",
        "2단계: 스마트블록 가동 원리 및 키워드 마이닝 비밀 기술",
        "3단계: 체류시간을 3배 높여주는 가독성 높은 글의 레이아웃 구성",
        "4단계: 한 번 검색한 잠재 바이어가 즉시 구매를 누르는 유도 링크 작성법",
        "5단계: 블로그 저품질을 사전에 회피하는 안정적 운영 규칙",
      ],
    },
    {
      id: 3,
      title: "네이버 플레이스 최적화 교육",
      description: "오프라인 지역 내 매장의 성패는 플레이스가 가릅니다. 사업장 정보 배치, 예약 연동, 리뷰 빌딩 등 매출과 직결되는 포인트를 올케어 합니다.",
      tags: ["오프라인 필수", "예약률 증대", "지도 상위 랭크"],
      iconName: "MapPin",
      details: [
        "1단계: 지도 카테고리 설정과 정확한 핵심 타겟 키워드 검색 매칭",
        "2단계: 클릭을 부르는 따뜻한 대표 사진 세팅 및 썸네일 노하우",
        "3단계: 네이버 예약을 통한 결제 흐름 연동 및 쿠폰 마케팅",
        "4단계: 트래픽을 올려주는 네이버 톡톡 & 스마트콜 자동 응대 가이드",
        "5단계: 네이버 영수증 리뷰와 블로그 리뷰가 자발적으로 쌓이는 운영 꿀팁",
      ],
    },
    {
      id: 4,
      title: "AI 콘텐츠 제작 교육",
      description: "ChatGPT와 Claude 등 강력한 생성형 인공지능을 실무 비서로 채용합니다. 마케팅 기획서 작성 및 릴스 원고, 자막 영감을 0.1초 만에 뽑아냅니다.",
      tags: ["기획 시간 절약", "Claude 훈련", "자동 디자인 연출"],
      iconName: "Sparkles",
      details: [
        "1단계: 챗gpt와 클로드 기초 사용 요령 및 나에게 맞춘 역할 주입법",
        "2단계: 마케팅 브랜딩 페르소나 설정용 비공개 고급 프롬프트 세트 전수",
        "3단계: 블로그 글감을 대신 써주는 똑똑한 콘텐츠 초안 자동화 기술",
        "4단계: 캡션, 숏폼 원고, 인스타 캡션 한 번에 출력하는 워크플로우",
        "5단계: 이미지 및 쇼츠 자동 제작 도구와의 최적 시너지 접목",
      ],
    },
  ];

  const getIcon = (name: string) => {
    switch (name) {
      case "Instagram":
        return <Instagram className="w-6 h-6 text-brand-deep group-hover:text-pink-600 transition-colors" />;
      case "FileText":
        return <FileText className="w-6 h-6 text-brand-deep group-hover:text-green-600 transition-colors" />;
      case "MapPin":
        return <MapPin className="w-6 h-6 text-brand-deep group-hover:text-blue-600 transition-colors" />;
      case "Sparkles":
        default:
          return <Sparkles className="w-6 h-6 text-brand-deep group-hover:text-amber-500 transition-colors" />;
    }
  };

  return (
    <section id="courses" className="py-24 bg-brand-ivory relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Course Intro */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-brand-gold-light border border-brand-gold/10">
            <span className="text-xs font-bold text-brand-gold uppercase tracking-wider">
              제공 교육 스펙트럼
            </span>
          </div>
          <h2 className="font-sans font-bold text-2xl sm:text-3xl text-brand-deep tracking-tight">
            내 매장을 지키는 강력한 무기,<br />
            <span className="text-brand-gold">핵심 마케팅 실전 과정</span>
          </h2>
          <p className="text-sm font-medium text-brand-muted max-w-xl mx-auto">
            1회 강의로 끝내지 않고 내 사업의 현상태를 진단한 후 맞춤 설계로 세션을 개설해 드립니다.
          </p>

          {/* All offerings tags list */}
          <div className="flex flex-wrap justify-center gap-2.5 pt-4 max-w-2xl mx-auto">
            {allServices.map((service, idx) => (
              <span
                key={idx}
                className="inline-flex items-center space-x-1 px-3 py-1.5 rounded-full bg-brand-cream border border-brand-beige-dark/30 text-[11px] sm:text-xs font-semibold text-brand-deep shadow-2xs"
              >
                <div className="w-1.5 h-1.5 bg-brand-gold rounded-full shrink-0" />
                <span>{service}</span>
              </span>
            ))}
          </div>
        </div>

        {/* Courses cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {courses.map((course) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -4, shadow: "lg" }}
              className="bg-brand-cream rounded-2xl border border-brand-beige p-6 sm:p-8 flex flex-col justify-between group transition-all duration-300 relative overflow-hidden text-left"
            >
              <div>
                {/* Upper line: Icon + tags */}
                <div className="flex justify-between items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-brand-beige flex items-center justify-center group-hover:scale-105 transition-transform">
                    {getIcon(course.iconName)}
                  </div>
                  <div className="flex flex-wrap gap-1.5 justify-end">
                    {course.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-brand-gold-light/40 text-brand-deep"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Course identity */}
                <div className="space-y-3 mb-6">
                  <h3 className="font-sans font-bold text-lg sm:text-xl text-brand-deep group-hover:text-brand-gold transition-colors">
                    {course.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-brand-muted leading-relaxed font-medium">
                    {course.description}
                  </p>
                </div>
              </div>

              {/* Bottom detail action */}
              <div className="pt-4 border-t border-brand-beige/50 flex items-center justify-between mt-auto">
                <span className="text-[11px] font-bold text-brand-deep">
                  정원: 기수별 1:1 밀착형 개별 예약제
                </span>
                <button
                  onClick={() => setSelectedCourse(course)}
                  className="inline-flex items-center space-x-1 px-4 py-2 rounded-lg bg-brand-deep/5 hover:bg-brand-deep hover:text-brand-ivory text-brand-deep text-xs font-bold transition-all cursor-pointer"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>세부 커리큘럼 보기</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pricing notice info */}
        <div className="mt-12 text-center text-xs sm:text-sm font-semibold text-brand-muted flex items-center justify-center space-x-1">
          <HelpCircle className="w-4 h-4 text-brand-gold" />
          <span>각 교육비는 원장님의 채널 운영 수준에 맞춘 교정 범위 상담 후 가장 투명하게 맞춤 상세 안내해 드립니다.</span>
        </div>

        {/* Modal / details popup */}
        <AnimatePresence>
          {selectedCourse && (
            <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-brand-deep/60 backdrop-blur-xs"
                onClick={() => setSelectedCourse(null)}
              />
              
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className="bg-brand-cream rounded-2xl max-w-lg w-full p-6 sm:p-8 z-10 shadow-2xl relative border border-brand-beige-dark text-left"
              >
                {/* Header of modal */}
                <div className="flex justify-between items-start mb-6">
                  <div className="space-y-1">
                    <span className="text-[10px] font-bold text-brand-gold uppercase tracking-widest block">
                      CURRICULUM CHAPTERS
                    </span>
                    <h3 className="font-sans font-bold text-xl text-brand-deep">
                      {selectedCourse.title} 상세 과정
                    </h3>
                  </div>
                  <button
                    onClick={() => setSelectedCourse(null)}
                    className="p-1.5 rounded-full hover:bg-brand-beige text-brand-deep cursor-pointer focus:outline-none"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Sub Description */}
                <p className="text-xs sm:text-sm text-brand-muted mb-6 font-medium leading-relaxed bg-brand-gold-light/20 p-3 rounded-lg border border-brand-gold/15">
                  "{selectedCourse.description}"
                </p>

                {/* Detailed Steps */}
                <div className="space-y-4">
                  <span className="text-xs font-extrabold text-brand-deep block mb-2">총 5강 집중 트레이닝 단계</span>
                  {selectedCourse.details.map((detail, dIdx) => (
                    <div key={dIdx} className="flex items-start space-x-3 text-brand-text">
                      <div className="w-5 h-5 rounded-full bg-brand-deep flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-brand-gold" />
                      </div>
                      <span className="text-xs sm:text-sm font-semibold">{detail}</span>
                    </div>
                  ))}
                </div>

                {/* Modal CTA */}
                <div className="mt-8 pt-4 border-t border-brand-beige flex gap-3">
                  <button
                    onClick={() => {
                      setSelectedCourse(null);
                      const target = document.getElementById("consulting");
                      if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
                    }}
                    className="flex-grow inline-flex justify-center items-center py-3 rounded-xl bg-brand-deep hover:bg-brand-deep-hover text-brand-ivory font-bold text-xs sm:text-sm shadow-md transition-colors cursor-pointer"
                  >
                    이 과정 무료 맞춤상담 및 신청하기
                  </button>
                  <button
                    onClick={() => setSelectedCourse(null)}
                    className="px-5 py-3 rounded-xl bg-brand-beige hover:bg-brand-beige-hover text-brand-deep font-bold text-xs sm:text-sm transition-colors cursor-pointer"
                  >
                    닫기
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
