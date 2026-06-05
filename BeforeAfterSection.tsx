/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { ArrowRight, HelpCircle, Compass, PenTool, Sparkles, Trophy, Lightbulb } from "lucide-react";

export default function BeforeAfterSection() {
  const phases = [
    {
      id: 1,
      title: "1단계: 디지털 막막함 (Before)",
      description: "무엇부터 올려야 할지 방향을 못 잡고 남들의 계정만 부러워하며 시간만 흘려보내던 상태",
      status: "기적처럼 혼자서 알아서 되겠지라는 불안감",
      icon: HelpCircle,
      iconBg: "bg-red-50 text-red-600 border border-red-100",
      isBefore: true,
    },
    {
      id: 2,
      title: "2단계: 계정 방향성 설정",
      description: "내 매장의 핵심 경쟁력을 파악하고, 주고객이 매력을 느끼는 나만의 특별한 채널 콘셉트 확립",
      status: "타겟이 명확해져 글감이 저절로 도출됨",
      icon: Compass,
      iconBg: "bg-amber-50 text-amber-600 border border-amber-100",
    },
    {
      id: 3,
      title: "3단계: 직접 콘텐츠 기획/제작",
      description: "디자인 감각이 없어도 걱정 없음! AI 기능과 획기적인 도구를 활용해 카드뉴스와 릴스를 직접 기획 생산",
      status: "콘텐츠 만드는 속도가 3배 이상 단축",
      icon: PenTool,
      iconBg: "bg-emerald-50 text-emerald-600 border border-emerald-100",
    },
    {
      id: 4,
      title: "4단계: 문의/매출 흐름 구축 (After)",
      description: "인스타그램 프로필 링크, 블로그 지도 연동 등을 통해 조회수가 실제 네이버 플레이스 예약 및 전화로 성사되는 전환 흐름 완성",
      status: "유입이 끊이지 않는 상시 마케팅 구조 안착",
      icon: Trophy,
      iconBg: "bg-brand-deep text-brand-gold border border-brand-gold/20",
      isAfter: true,
    },
  ];

  return (
    <section className="py-24 bg-brand-ivory relative overflow-hidden">
      {/* Visual background lines */}
      <div className="absolute inset-0 bg-[radial-gradient(#0D3E26_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.03]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-3">
          <div className="inline-flex items-center space-x-1 px-3 py-1 rounded-full bg-brand-deep/5 border border-brand-deep/10">
            <Lightbulb className="w-3.5 h-3.5 text-brand-deep" />
            <span className="text-[11px] font-bold text-brand-deep tracking-wider">성장 로드맵</span>
          </div>
          <h2 className="font-sans font-bold text-2xl sm:text-3xl text-brand-deep tracking-tight">
            매 순간 고전하던 과거에서 벗어나<br />
            <span className="text-brand-gold">매출로 연결되는 실질적 변화를 만듭니다</span>
          </h2>
          <p className="text-sm font-medium text-brand-muted max-w-xl mx-auto">
            디지털 마케팅은 배운다고 해서 하루아침에 대기업처럼 되는 것이 아닙니다. 소상공인에게 맞춘 이 4단계 흐름을 온전히 내 것으로 만듦으로써 비로소 자생력이 키워집니다.
          </p>
        </div>

        {/* Transforming Roadmap Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 relative">
          
          {/* Connector Line for Desktop */}
          <div className="hidden lg:block absolute top-[44px] left-8 right-8 h-0.5 bg-gradient-to-r from-red-200 via-amber-200 to-brand-deep -z-10" />

          {phases.map((phase, idx) => {
            const IconComponent = phase.icon;
            return (
              <motion.div
                key={phase.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                whileHover={{ y: -8 }}
                className={`relative flex flex-col justify-between p-6 rounded-2xl border bg-brand-cream shadow-xs transition-all duration-300 ${
                  phase.isAfter
                    ? "border-brand-deep shadow-md ring-2 ring-brand-deep/5"
                    : "border-brand-beige-dark/45"
                }`}
              >
                {/* Header with Step Count & Icon */}
                <div className="flex justify-between items-center mb-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${phase.iconBg}`}>
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <span className={`text-[11px] font-bold px-2 py-1 rounded ${
                    phase.isBefore 
                      ? "bg-red-50 text-red-600"
                      : phase.isAfter 
                      ? "bg-brand-deep text-brand-gold"
                      : "bg-brand-beige text-brand-deep"
                  }`}>
                    {phase.isBefore ? "BEFORE" : phase.isAfter ? "AFTER" : `STEP 0${idx}`}
                  </span>
                </div>

                {/* Body Content */}
                <div className="space-y-3 flex-grow my-2">
                  <h3 className={`font-sans font-bold text-base sm:text-lg ${
                    phase.isAfter ? "text-brand-deep" : "text-brand-text"
                  }`}>
                    {phase.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-brand-muted leading-relaxed font-medium">
                    {phase.description}
                  </p>
                </div>

                {/* Footer Transition Indicator */}
                <div className="border-t border-brand-beige/50 pt-3 mt-4">
                  <span className={`block text-[11px] font-bold ${
                    phase.isBefore ? "text-red-500" : phase.isAfter ? "text-brand-deep" : "text-brand-gold"
                  }`}>
                    핵심 현상: {phase.status}
                  </span>
                </div>

                {/* Arrow indicator between steps for desktop/vertical for mobile */}
                {idx < phases.length - 1 && (
                  <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 lg:hidden bg-brand-cream border border-brand-beige p-1 rounded-full z-10 shadow-xs">
                    <ArrowRight className="w-4 h-4 text-brand-gold rotate-90" />
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Summarized callout block */}
        <div className="mt-16 bg-brand-beige/40 rounded-2xl border border-brand-beige p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-1">
            <h4 className="font-sans font-bold text-brand-deep text-base sm:text-lg">
              "듣기만 해도 기분이 좋아지는 이론은 이제 그만해 주세요"
            </h4>
            <p className="text-xs sm:text-sm text-brand-muted font-medium">
              내 아이디, 내 지도 주소, 내 포스터 하나부터 한 땀 한 땀 제대로 손에 익히는 1:1 맞춤형 세션으로 인생을 바꿉니다.
            </p>
          </div>
          <button
            onClick={() => {
              const target = document.getElementById("consulting");
              if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
            className="self-start md:self-auto inline-flex items-center space-x-1 text-xs sm:text-sm font-bold text-brand-deep hover:text-brand-gold group transition-colors shrink-0"
          >
            <span>나도 이 변화의 단계를 밟아보기</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>
    </section>
  );
}
