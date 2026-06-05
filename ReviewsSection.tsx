/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Star, MessageSquareQuote, ChevronRight } from "lucide-react";
import { ReviewCard } from "../types";

export default function ReviewsSection() {
  const reviews: ReviewCard[] = [
    {
      id: 1,
      quote: "막연하게 어렵게만 느껴졌던 인스타그램 운영 방향이 잡혔어요. 내 꽃집에 어울리는 구체적인 색감과 릴스 편집 방법을 마스터하니까 단골 문의가 확실히 매장으로 늘어나는 게 하루하루 체감됩니다.",
      author: "김지안 원장님",
      business: "플라워 아틀리에 운영 (소상공인)",
      badge: "인스타 코칭 수료",
      rating: 5,
    },
    {
      id: 2,
      quote: "블로그 글을 어떻게 써야 하고 네이버 지도로 어떻게 연결하는지 구조가 보이기 시작했어요. 알려주신 공식 템플릿대로 글을 쓰니까 일주일에 두세 개 쓰던 정성글이 스마트블록 네이버 상위 노출에 안전하게 가더라고요.",
      author: "이동혁 대표님",
      business: "기구 필라테스 기획 (1인 비즈니스)",
      badge: "블로그 글쓰기 수료",
      rating: 5,
    },
    {
      id: 3,
      quote: "AI 도구를 마케팅에 접목하니 콘텐츠 카드뉴스 제작 기획 시간이 훨씬 줄었어요! 예전엔 카피 짜느라 반나절 걸렸는데 지금은 클로드와 캔바로 30분 만에 릴스 자막까지 뽑아내는 스마트 사업자가 되었습니다.",
      author: "최예린 대표님",
      business: "수제 밀키트 숍 창업자",
      badge: "AI 콘텐츠 제작 수료",
      rating: 5,
    },
  ];

  return (
    <section id="reviews" className="py-24 bg-brand-ivory relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-3">
          <div className="inline-flex items-center space-x-1 px-3 py-1 rounded-full bg-brand-deep/5 border border-brand-deep/10">
            <Star className="w-3.5 h-3.5 text-brand-gold fill-brand-gold" />
            <span className="text-[11px] font-bold text-brand-deep">수강생의 실제 자필 한마디</span>
          </div>
          <h2 className="font-sans font-bold text-2xl sm:text-3xl text-brand-deep tracking-tight">
            먼저 앞서 나간 소상공인 선배들의 변화
          </h2>
          <p className="text-sm font-medium text-brand-muted max-w-xl mx-auto">
            100% 직접 배우고 자기가 운영하는 사업 계정에 즉석 실습을 진행하며 작성해주신 소중한 증언들입니다.
          </p>
        </div>

        {/* Reviews Horizontal / bento layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {reviews.map((review, rIdx) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: rIdx * 0.15 }}
              whileHover={{ y: -5 }}
              className="bg-brand-cream border border-brand-beige p-8 rounded-2xl flex flex-col justify-between shadow-xs hover:shadow-lg transition-all duration-300 relative text-left"
            >
              {/* Star elements */}
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <div className="flex space-x-0.5">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-brand-gold fill-brand-gold" />
                    ))}
                  </div>
                  <span className="text-[10px] font-bold bg-brand-gold-light text-brand-deep px-2 py-0.5 rounded-full">
                    {review.badge}
                  </span>
                </div>

                {/* Testimonial Quote */}
                <div className="relative">
                  <MessageSquareQuote className="w-10 h-10 text-brand-beige opacity-40 absolute -top-5 -left-4 -z-10" />
                  <p className="text-sm font-semibold text-brand-text leading-relaxed mt-2 pl-2">
                    "{review.quote}"
                  </p>
                </div>
              </div>

              {/* Author profiles */}
              <div className="mt-8 pt-4 border-t border-brand-beige/50 flex items-center justify-between">
                <div>
                  <h4 className="font-sans font-bold text-sm text-brand-deep">
                    {review.author}
                  </h4>
                  <span className="text-xs text-brand-muted font-medium block mt-0.5">
                    {review.business}
                  </span>
                </div>
                <div className="w-8 h-8 rounded-full bg-brand-beige flex items-center justify-center text-[10px] font-bold text-brand-deep">
                  DSI
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Real review footer highlight */}
        <div className="mt-16 bg-brand-beige-dark/20 p-6 rounded-2xl max-w-2xl mx-auto border border-brand-beige flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="text-xs font-semibold text-brand-deep leading-relaxed">
            나도 인스타그램, 블로그, 플레이스 진단받고, <br />
            내가 직접 쓰는 디지털의 변화를 이뤄보세요!
          </div>
          <button
            onClick={() => {
              const target = document.getElementById("consulting");
              if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
            className="inline-flex items-center space-x-1.5 px-4 py-2 bg-brand-deep text-brand-ivory text-xs font-bold rounded-lg cursor-pointer hover:bg-brand-deep-hover transition-colors shadow-xs shrink-0"
          >
            <span>무료 첫 상담 신청 단추</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
}
