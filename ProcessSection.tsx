/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { UserCheck, SearchCode, Milestone, Focus, Keyboard } from "lucide-react";
import { StepItem } from "../types";

export default function ProcessSection() {
  const steps: StepItem[] = [
    {
      id: 1,
      step: "01단계",
      title: "상담 신청 및 상황 접수",
      description: "하단의 온라인 폼 또는 전화를 통해 평소 마케팅이 가장 가려웠던 부분과 대략적인 업종 상황을 편안하게 적어 보냅니다.",
    },
    {
      id: 2,
      step: "02단계",
      title: "현재 계정·사업 정밀 상담 진단",
      description: "인스타그램 피드 지수, 지도 세팅, 블로그 유입 키워드를 미리 체크해보고, 어느 단계를 개선해야 매출로 가는지 명확히 짚어냅니다.",
    },
    {
      id: 3,
      step: "03단계",
      title: "맞춤형 교육 가이드 맵 설계",
      description: "사업 상황과 진도 역량에 맞춰 당장 이번 주에 따라 할 수 있는 필수과목 위주의 완벽한 밀착 가이드형 커리큘럼을 교정해 드립니다.",
    },
    {
      id: 4,
      step: "04단계",
      title: "1:1 집중 실습 교육 진행",
      description: "매 차시마다 화면을 보며 실시간으로 실습하고, 글을 직접 발행해 보며 내 손끝으로 마케팅 원리를 익히도록 꼼꼼히 완수합니다.",
    },
    {
      id: 5,
      step: "05단계",
      title: "매주 과제 피드백 & 무적 서포트",
      description: "수업 후 혼자서 발행해 보며 만나는 에러, 수정 피드 및 기획 카피 문안을 주기적으로 봐주며 독립할 때까지 기둥이 되어 드립니다.",
    },
  ];

  const getStepIcon = (id: number) => {
    switch (id) {
      case 1:
        return <UserCheck className="w-5 h-5 text-brand-gold" />;
      case 2:
        return <SearchCode className="w-5 h-5 text-brand-gold" />;
      case 3:
        return <Milestone className="w-5 h-5 text-brand-gold" />;
      case 4:
        return <Focus className="w-5 h-5 text-brand-gold" />;
      case 5:
      default:
        return <Keyboard className="w-5 h-5 text-brand-gold" />;
    }
  };

  return (
    <section id="process" className="py-24 bg-brand-cream border-y border-brand-beige-dark/25 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-3">
          <span className="text-xs font-bold text-brand-deep tracking-wider uppercase bg-brand-beige px-3 py-1 rounded">
            DSI PROGRESS WORKFLOW
          </span>
          <h2 className="font-sans font-bold text-2xl sm:text-3xl text-brand-deep tracking-tight">
            체계적이고 친워킹한 진행 방식
          </h2>
          <p className="text-sm font-medium text-brand-muted max-w-xl mx-auto">
            무작정 정해진 내용만 읽는 동영상이 아닙니다. 접수부터 피드백 서포트까지 내 비서처럼 친근하게 흘러갑니다.
          </p>
        </div>

        {/* Dynamic Vertical / Desktop horizontal progression timeline */}
        <div className="relative mt-12">
          {/* Central Line for Desktop */}
          <div className="hidden lg:block absolute left-0 right-0 top-1/2 -translate-y-1/2 h-0.5 bg-brand-beige-dark/50 -z-10" />

          {/* Stepper block list */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {steps.map((stepper, index) => (
              <motion.div
                key={stepper.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative bg-brand-ivory p-6 rounded-2xl border border-brand-beige-dark/20 text-left flex flex-col justify-between shadow-2xs group hover:bg-brand-deep hover:-translate-y-1.5 transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    {/* Circle Badge for icons */}
                    <div className="w-10 h-10 rounded-xl bg-brand-deep group-hover:bg-brand-gold flex items-center justify-center shrink-0 transition-colors">
                      {getStepIcon(stepper.id)}
                    </div>
                    {/* Step tag */}
                    <span className="text-[11px] font-bold text-brand-gold bg-brand-gold-light/40 group-hover:bg-brand-gold-light group-hover:text-brand-deep px-2 py-0.5 rounded transition-all">
                      {stepper.step}
                    </span>
                  </div>

                  <h3 className="font-sans font-extrabold text-base text-brand-deep group-hover:text-brand-ivory transition-colors mb-2">
                    {stepper.title}
                  </h3>
                  <p className="text-xs leading-relaxed text-brand-muted group-hover:text-brand-ivory/80 font-medium transition-colors">
                    {stepper.description}
                  </p>
                </div>

                <div className="mt-6 text-[10px] font-bold text-brand-gold/60 group-hover:text-brand-gold tracking-wider">
                  STEP-PROGRESS // {stepper.id * 20}%
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Process footer block */}
        <div className="mt-12 text-center text-xs text-brand-muted">
          * 모든 1:1 세션 일정과 속도는 사전에 원장님의 생업 및 매장 영업 주기를 충분히 우선 고려해 상호 합의 하에 배치합니다.
        </div>

      </div>
    </section>
  );
}
