/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { HelpCircle, AlertCircle, Ban } from "lucide-react";
import { ProblemCard } from "./types";

export default function ProblemSection() {
  const problems: ProblemCard[] = [
    {
      id: 1,
      emoji: "📱",
      text: "인스타그램을 시작했지만 무엇을 올려야 할지 매일 고민이에요.",
    },
    {
      id: 2,
      emoji: "✍️",
      text: "블로그 글을 열심히 써도 검색 결과에 노출이 잘 안 돼요.",
    },
    {
      id: 3,
      emoji: "📍",
      text: "네이버 플레이스를 내 매장에 맞춰 세팅하는 구체적인 요령을 몰라요.",
    },
    {
      id: 4,
      emoji: "🎨",
      text: "카드뉴스와 릴스를 직접 만들고 싶은데 디자인 감각이 없어 버거워요.",
    },
    {
      id: 5,
      emoji: "💸",
      text: "광고를 한번 시도해보고 싶지만 소중한 예산만 낭비될까 걱정스러워요.",
    },
    {
      id: 6,
      emoji: "🤖",
      text: "ChatGPT 등 AI 마케팅 도구를 업무에 써보고 싶은데 어디서부터 배워야 할지요.",
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section className="py-24 bg-brand-cream border-y border-brand-beige/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Intro Tag */}
        <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-red-50 border border-red-100 mb-4 animate-pulse">
          <AlertCircle className="w-3.5 h-3.5 text-red-600" />
          <span className="text-[11px] font-bold text-red-600 tracking-wide uppercase">
            초보 마케팅의 고충 공감
          </span>
        </div>

        {/* Section Heading */}
        <div className="max-w-3xl mx-auto mb-16 space-y-3">
          <h2 className="font-sans font-bold text-2xl sm:text-3xl text-brand-deep tracking-tight">
            내 얘기처럼 공감되는 수많은 고민들,<br />
            <span className="text-brand-gold">혹시 이런 걱정이 있으신가요?</span>
          </h2>
          <p className="text-sm font-medium text-brand-muted max-w-xl mx-auto">
            디지털 세상이 낯선 소상공인과 1인 창업자분들이 매일같이 연구소로 털어놓는 고민입니다. 여러분의 잘못이 아닙니다. 차근차근 첫걸음부터 안내해 드립니다.
          </p>
        </div>

        {/* Problems Bento/Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {problems.map((problem) => (
            <motion.div
              key={problem.id}
              variants={cardVariants}
              whileHover={{ y: -6, boxShadow: "0 12px 24px -10px rgba(13, 62, 38, 0.08)" }}
              className="group relative flex items-start space-x-4 p-6 bg-brand-ivory rounded-2xl border border-brand-beige-dark/20 text-left transition-all duration-300"
            >
              {/* Emoji Icon Container */}
              <div className="w-12 h-12 rounded-xl bg-brand-beige flex items-center justify-center text-xl shrink-0 group-hover:bg-brand-deep group-hover:scale-105 transition-all duration-300">
                <span className="group-hover:filter group-hover:brightness-110">{problem.emoji}</span>
              </div>

              {/* Text content */}
              <div className="flex-grow pt-1">
                <p className="font-sans text-sm sm:text-[15px] font-medium leading-relaxed text-brand-text group-hover:text-brand-deep transition-colors duration-200">
                  "{problem.text}"
                </p>
              </div>

              {/* Minimal decoration */}
              <HelpCircle className="absolute top-4 right-4 w-4 h-4 text-brand-beige group-hover:text-brand-gold opacity-50 group-hover:opacity-100 transition-colors" />
            </motion.div>
          ))}
        </motion.div>

        {/* Mini Quote Section */}
        <div className="mt-12 flex justify-center items-center space-x-2 text-xs sm:text-sm font-semibold text-brand-gold">
          <Ban className="w-4 h-4" />
          <span>단순 암기용 강의가 아니라, 지금 한 걸음 직접 딛는 피드백 실습이 필요할 때입니다.</span>
        </div>
      </div>
    </section>
  );
}
