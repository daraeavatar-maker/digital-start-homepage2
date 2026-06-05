/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { PhoneCall, Sparkles } from "lucide-react";

export default function FloatingButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show when page is scrolled down at least 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const handleScrollToForm = () => {
    const target = document.getElementById("consulting");
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Desktop/Tablet Floating Circle Button (Bottom Right) */}
      <div className="fixed bottom-6 right-6 z-40 hidden sm:block">
        <button
          onClick={handleScrollToForm}
          className="group relative flex items-center space-x-2 p-4 bg-brand-deep hover:bg-brand-deep-hover text-brand-ivory rounded-full shadow-2xl border border-brand-gold/20 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
        >
          <div className="absolute -top-3 -right-2 bg-rose-500 text-white text-[9px] font-bold px-1.5 py-0.5 rounded-full animate-bounce shrink-0 flex items-center space-x-0.5 shadow-sm">
            <Sparkles className="w-2.5 h-2.5 fill-white" />
            <span>무료 분석</span>
          </div>
          <PhoneCall className="w-5 h-5 text-brand-gold animate-pulse" />
          <span className="text-xs font-bold leading-none select-none pr-1">1:1 무료 상담 신청</span>
        </button>
      </div>

      {/* Mobile Special Bottom Fixed Bar Trigger */}
      <div className="fixed bottom-0 left-0 right-0 z-40 sm:hidden bg-brand-cream border-t border-brand-beige shadow-2xl p-3.5 flex items-center justify-between gap-4">
        <div className="text-left">
          <span className="block text-[10px] text-brand-gold font-bold tracking-wider">디지털첫걸음연구소</span>
          <span className="block text-xs font-bold text-brand-deep">1:1 맞춤 진단상담 예약</span>
        </div>
        
        <button
          onClick={handleScrollToForm}
          className="flex-grow inline-flex items-center justify-center space-x-2 py-3 px-4 bg-brand-deep text-brand-ivory text-xs font-extrabold rounded-xl shadow-md cursor-pointer hover:bg-brand-deep-hover transition-colors"
        >
          <PhoneCall className="w-4 h-4 text-brand-gold animate-bounce" />
          <span>무료 상담 신청하기</span>
        </button>
      </div>
    </>
  );
}
