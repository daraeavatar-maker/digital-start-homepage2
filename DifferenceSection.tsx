/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Smile, Award, Zap, BookOpenCheck, Target } from "lucide-react";
import { DifferenceCard } from "../types";

export default function DifferenceSection() {
  const customDifferences: DifferenceCard[] = [
    {
      id: 1,
      title: "왕초보 눈높이에 100% 맞춘 설명",
      description: "인스타그램 앱의 메뉴 위치, 글 올리는 기본 규칙부터 하나씩 차분하고 친절히 알려드립니다. 모르는 것은 열 번도 친절히 답변합니다.",
      iconName: "Smile",
    },
    {
      id: 2,
      title: "실제 원장님의 사업장 계정 활용",
      description: "샘플 예문이 아닙니다. 실제 영업하고 계시는 매장 계정, 네이버 지도를 켜놓고 실제 리뷰를 달고 첫 게시글을 작성하는 완전한 실무입니다.",
      iconName: "Target",
    },
    {
      id: 3,
      title: "매출 흐름 중심의 시너지 교육",
      description: "단순히 글을 쓰는 법에서 멈추지 않고, 우리 매장 인근 타겟에게 소액 광고를 띄워 실질적인 문의와 전환율을 향상시키는 매출 유입망을 연결합니다.",
      iconName: "Zap",
    },
    {
      id: 4,
      title: "어려운 업계 신조어도 완벽 번역",
      description: "알고리즘, SEO, 퍼포먼스 마케팅 같은 어렵고 현란한 테크 전문 용어를 소상공인의 일상 언어로 알기 쉽게 세심히 풀어서 강의해 드립니다.",
      iconName: "BookOpenCheck",
    },
    {
      id: 5,
      title: "일회성 수강 탈피! 밀착 안착 코칭",
      description: "한 번 듣고 까먹는 세미나가 아닙니다. 교육 이후 스스로 기획을 이어 나갈 수 있도록 카카오톡 밀착 피드백과 서포트를 책임지고 지원합니다.",
      iconName: "Award",
    },
  ];

  const getIcon = (name: string) => {
    switch (name) {
      case "Smile":
        return <Smile className="w-6 h-6 text-brand-gold" />;
      case "Target":
        return <Target className="w-6 h-6 text-brand-gold" />;
      case "Zap":
        return <Zap className="w-6 h-6 text-brand-gold" />;
      case "BookOpenCheck":
        return <BookOpenCheck className="w-6 h-6 text-brand-gold" />;
      case "Award":
      default:
        return <Award className="w-6 h-6 text-brand-gold" />;
    }
  };

  return (
    <section className="py-24 bg-brand-cream border-b border-brand-beige-dark/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-3">
          <span className="text-xs font-bold text-brand-deep tracking-widest uppercase bg-brand-gold-light px-3 py-1 rounded">
            DIFFERENCE & VALUES
          </span>
          <h2 className="font-sans font-bold text-2xl sm:text-3xl text-brand-deep tracking-tight">
            왜 디지털 첫걸음 연구소여야만 할까요?
          </h2>
          <p className="text-sm font-medium text-brand-muted max-w-xl mx-auto">
            인터넷에 널린 뻔한 영상 강좌와는 시작과 끝이 완전히 다릅니다. 디지털 첫걸음 연구소만의 압도적인 5대 메리트를 직접 느껴보세요.
          </p>
        </div>

        {/* Asymmetrical Grid of cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {customDifferences.map((diff, index) => (
            <motion.div
              key={diff.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className={`p-8 rounded-2xl border transition-all duration-300 text-left flex flex-col justify-between ${
                diff.id === 3
                  ? "bg-brand-deep text-brand-ivory border-brand-deep shadow-lg lg:col-span-1"
                  : "bg-brand-ivory text-brand-text border-brand-beige-dark/20 shadow-xs"
              }`}
            >
              <div className="space-y-6">
                {/* Icon Circle */}
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                  diff.id === 3 ? "bg-white/10" : "bg-brand-deep/5"
                }`}>
                  {getIcon(diff.iconName)}
                </div>

                {/* Card Title & Desc */}
                <div className="space-y-3">
                  <h3 className={`font-sans font-extrabold text-lg ${
                    diff.id === 3 ? "text-brand-gold" : "text-brand-deep"
                  }`}>
                    {diff.title}
                  </h3>
                  <p className={`text-sm leading-relaxed font-medium ${
                    diff.id === 3 ? "text-brand-ivory/80" : "text-brand-muted"
                  }`}>
                    {diff.description}
                  </p>
                </div>
              </div>

              {/* Card Footer Step indicator */}
              <div className={`mt-8 pt-4 border-t text-[10px] uppercase tracking-widest font-bold ${
                diff.id === 3 ? "border-white/10 text-brand-gold" : "border-brand-beige/50 text-brand-muted"
              }`}>
                DSI Core Advantage 0{diff.id}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
