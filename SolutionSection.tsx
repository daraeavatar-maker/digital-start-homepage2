/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Check, ClipboardList, PenTool, LayoutTemplate, MessageSquareCode } from "lucide-react";

export default function SolutionSection() {
  const points = [
    {
      id: 1,
      title: "정밀 계정 진단",
      description: "인스타그램 프로필 상태, 블로그 등록 현황, 네이버 지도 세팅 상태를 면밀히 체크하여 수정 방향을 짚어냅니다.",
      icon: ClipboardList,
    },
    {
      id: 2,
      title: "콘텐츠 방향 설정",
      description: "누구에게 무엇을 호소할지 명확한 고유 테마를 수립하고, 매장에 딱 맞는 주간 콘텐츠 업로드 기획안을 도출합니다.",
      icon: LayoutTemplate,
    },
    {
      id: 3,
      title: "1:1 실습 중심 교육",
      description: "이론만 구경하는 강의는 끝! 노트북과 앱을 켜두고 본문에 글을 쓰고, 릴스를 편집하는 조작 단계를 함께 돌파합니다.",
      icon: PenTool,
    },
    {
      id: 4,
      title: "맞춤 커리큘럼 제안",
      description: "충분한 상담과 현재 가동할 수 있는 마케팅 리소스를 분석해 최적의 속도로 진행 여부를 맞춰 진행합니다.",
      icon: MessageSquareCode,
    },
  ];

  return (
    <section className="py-24 bg-brand-beige border-b border-brand-beige-dark/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Block */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-brand-deep/5 border border-brand-deep/10">
              <span className="text-xs font-bold text-brand-deep tracking-wider uppercase">
                우리의 교육 원칙
              </span>
            </div>

            <h2 className="font-sans font-bold text-3xl sm:text-4xl text-brand-deep tracking-tight leading-tight">
              초보자의 자존감과<br />
              속도에 100% 보조를<br />
              맞춘 실전형 교육입니다
            </h2>

            <div className="space-y-4 text-brand-text">
              <p className="text-[15px] leading-relaxed font-semibold text-brand-deep">
                단순히 멋들어진 이론만 PPT로 거창하게 늘어놓지 않습니다.
              </p>
              <p className="text-[14px] leading-relaxed text-brand-muted font-medium">
                우리의 진짜 무기는 내 사업장, 내 마케팅 계정, 내 실제 내방 고객을 철저한 분석 타겟 삼아, 수업이 종료되자마자 내 손으로 바로 적용하고 성과를 볼 수 있도록 실행하는 원동력입니다.
              </p>
            </div>

            <div className="pt-4 border-t border-brand-beige-dark/50 space-y-2.5">
              {[
                "수준별 속도 제어로 과부하 제로 보장",
                "수업 이후의 피드백과 소액 광고 자립 코칭",
                "어려운 한자어, 마케팅 전문 은어를 완전히 폐지"
              ].map((benefit, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <div className="w-4 h-4 rounded-full bg-brand-deep flex items-center justify-center">
                    <Check className="w-2.5 h-2.5 text-brand-gold" />
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-brand-text">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Highlights Cards */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {points.map((point) => {
                const IconComponent = point.icon;
                return (
                  <motion.div
                    key={point.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: point.id * 0.1 }}
                    className="p-6 bg-brand-cream rounded-2xl border border-brand-beige-dark/10 shadow-xs hover:shadow-lg transition-all duration-300 text-left"
                  >
                    <div className="w-10 h-10 rounded-xl bg-brand-gold-light text-brand-deep flex items-center justify-center mb-4 border border-brand-gold/10">
                      <IconComponent className="w-5 h-5 text-brand-deep" />
                    </div>
                    <h3 className="font-sans font-bold text-base sm:text-lg text-brand-deep mb-2">
                      {point.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-brand-muted leading-relaxed font-medium">
                      {point.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
