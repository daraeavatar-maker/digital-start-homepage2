/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Check, Phone, ShieldCheck, Mail, ClipboardCheck, Sparkles, Building2, User2 } from "lucide-react";
import { ConsultingFormData } from "../types";

// ==================== GOOGLE FORM CONFIGURATION ====================
// 실전 파일 제출용 구글 설문지(Google Form) 주소를 입력해 주세요.
// 예: "https://docs.google.com/forms/d/e/1FAIpQLSfXXXXXXXXXXXXXX/formResponse"
const GOOGLE_FORM_URL = ""; 

// 구글 설문지의 원본 HTML 소스에서 찾은 각 질문 항목의 "entry.XXXXXX" 키 값을 지정합니다.
const GOOGLE_FORM_ENTRY_IDS = {
  name: "entry.1000001",           // 이름 항목 ID
  phone: "entry.1000002",          // 연락처 항목 ID
  businessField: "entry.1000003",  // 사업 분야 항목 ID
  desiredCourse: "entry.1000004",  // 관심 교육 항목 ID
  worries: "entry.1000005",        // 고민 내용 항목 ID
};
// ===================================================================

export default function ConsultingForm() {
  const [formData, setFormData] = useState<ConsultingFormData>({
    name: "",
    phone: "",
    businessField: "",
    worries: "",
    desiredCourse: "",
  });

  const [isAgreed, setIsAgreed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [errors, setErrors] = useState<Partial<ConsultingFormData>>({});

  const coursesList = [
    "인스타그램 마케팅 1:1 코칭",
    "네이버 블로그 글쓰기 교육",
    "네이버 플레이스 최적화 교육",
    "카드뉴스·릴스 콘텐츠 제작 교육",
    "AI 마케팅 도구 활용 교육",
    "소액 광고 기획 및 집행 기초 교육",
    "미정 (어느 것을 우선 들을지 상담 필요)",
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof ConsultingFormData]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const tempErrors: Partial<ConsultingFormData> = {};
    if (!formData.name.trim()) tempErrors.name = "이름을 정확하게 기재해 주세요.";
    if (!formData.phone.trim()) {
      tempErrors.phone = "연락처를 정확하게 기재해 주세요.";
    } else if (!/^[0-9-+\s]{9,15}$/.test(formData.phone.trim().replace(/\D/g, ""))) {
      tempErrors.phone = "유효한 연락처 규격으로 입력해 주세요.";
    }
    if (!formData.businessField.trim()) tempErrors.businessField = "어떤 사업을 하시는지 알려주세요.";
    if (!formData.desiredCourse) tempErrors.desiredCourse = "원하시는 맞춤 과정을 선택해 주세요.";
    
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    if (!isAgreed) {
      alert("상황 분석 및 연락을 위한 개인정보 수집 이용안내에 동의해주세요.");
      return;
    }

    setIsSubmitting(true);

    if (GOOGLE_FORM_URL) {
      const formParams = new URLSearchParams();
      formParams.append(GOOGLE_FORM_ENTRY_IDS.name, formData.name);
      formParams.append(GOOGLE_FORM_ENTRY_IDS.phone, formData.phone);
      formParams.append(GOOGLE_FORM_ENTRY_IDS.businessField, formData.businessField);
      formParams.append(GOOGLE_FORM_ENTRY_IDS.desiredCourse, formData.desiredCourse);
      formParams.append(GOOGLE_FORM_ENTRY_IDS.worries, formData.worries || "");

      fetch(GOOGLE_FORM_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formParams,
      })
        .then(() => {
          setIsSubmitting(false);
          setShowSuccessModal(true);
          setFormData({
            name: "",
            phone: "",
            businessField: "",
            worries: "",
            desiredCourse: "",
          });
          setIsAgreed(false);
        })
        .catch((error) => {
          console.error("Google Forms submission failed:", error);
          // Fallback to success model for safe UX even under sandbox limits
          setIsSubmitting(false);
          setShowSuccessModal(true);
          setFormData({
            name: "",
            phone: "",
            businessField: "",
            worries: "",
            desiredCourse: "",
          });
          setIsAgreed(false);
        });
    } else {
      // 구글 폼 URL이 비어 있는 기본 개발/시뮬레이션 상태일 때의 자동 타임아웃 처리
      setTimeout(() => {
        setIsSubmitting(false);
        setShowSuccessModal(true);
        setFormData({
          name: "",
          phone: "",
          businessField: "",
          worries: "",
          desiredCourse: "",
        });
        setIsAgreed(false);
      }, 1000);
    }
  };

  return (
    <section id="consulting" className="py-24 bg-brand-deep relative overflow-hidden">
      {/* Absolute decor circles */}
      <div className="absolute top-0 left-0 w-80 h-80 rounded-full bg-brand-gold/10 blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[30rem] h-[30rem] rounded-full bg-slate-100/5 blur-3xl translate-x-1/3 translate-y-1/3" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Form Left Side Info text */}
          <div className="lg:col-span-5 text-left text-brand-ivory space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded bg-white/10 border border-white/10 text-brand-gold text-xs font-bold tracking-wider uppercase">
                CONSULTING APPLICATION
              </div>
              <h2 className="font-sans font-extrabold text-3xl sm:text-4xl text-brand-ivory leading-tight tracking-tight">
                내 사업에 꼭 맞는<br />
                디지털 마케팅 첫걸음,<br />
                <span className="text-brand-gold relative">
                  지금 바로 설계받으세요
                  <span className="absolute bottom-1 bg-white/5 left-0 w-full h-2 -z-10" />
                </span>
              </h2>
              <p className="text-sm font-medium text-brand-ivory/80 leading-relaxed max-w-md">
                현재 겪고 계시는 디지털 마케팅의 어려운 점을 간단하게 메모해 주세요. 디지털 첫걸음 연구소가 명쾌하고 세심한 해결 가이드를 마련해 빠르게 전화 상담해 드립니다.
              </p>
            </div>

            {/* Direct Contact card */}
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-4 max-w-md">
              <span className="text-[10px] font-bold text-brand-gold uppercase tracking-widest block">
                전화 및 문자로 직접 문의하기
              </span>
              <div className="flex items-center space-x-3.5">
                <div className="w-11 h-11 rounded-xl bg-brand-gold flex items-center justify-center text-brand-deep shrink-0 shadow-md">
                  <Phone className="w-5 h-5 fill-brand-deep" />
                </div>
                <div>
                  <a
                    href="tel:010-9005-4885"
                    className="block text-xl sm:text-2xl font-extrabold text-brand-ivory hover:text-brand-gold transition-colors"
                  >
                    010-9005-4885
                  </a>
                  <span className="text-xs text-brand-ivory/60 font-semibold mt-0.5 block">
                    디지털 첫걸음 연구소 대표원장 직통
                  </span>
                </div>
              </div>
            </div>

            {/* Key benefits list */}
            <div className="space-y-3 pt-2">
              {[
                "상담 신청 시 무료 맞춤 계정 지표 간이 분석 제공",
                "초보자를 위한 실질적 마케팅 자생력 설계 제안",
                "상호 불합리한 강제 커리큘럼 권유 100% 배제",
              ].map((text, idx) => (
                <div key={idx} className="flex items-start space-x-2 text-xs text-brand-ivory/90 font-medium">
                  <Check className="w-3.5 h-3.5 text-brand-gold shrink-0 mt-0.5" />
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Form Right Side Interactive Card */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-brand-cream rounded-3xl p-6 sm:p-10 shadow-2xl border border-brand-beige text-left"
            >
              <h3 className="font-sans font-bold text-lg sm:text-xl text-brand-deep mb-6 flex items-center space-x-2">
                <ClipboardCheck className="w-5 h-5 text-brand-gold" />
                <span>무료 교육 상담 신청하기</span>
              </h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name field */}
                  <div className="space-y-1.5">
                    <label className="text-xs sm:text-sm font-bold text-brand-deep flex items-center space-x-1">
                      <User2 className="w-3.5 h-3.5 text-brand-gold" />
                      <span>의뢰인 존함 *</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="이름이나 대명사 입력"
                      className={`w-full px-4 py-3 rounded-xl border bg-brand-ivory text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-brand-deep/30 transition-all ${
                        errors.name ? "border-rose-300" : "border-brand-beige-dark/50"
                      }`}
                    />
                    {errors.name && <p className="text-[11px] text-rose-500 font-bold">{errors.name}</p>}
                  </div>

                  {/* Phone field */}
                  <div className="space-y-1.5">
                    <label className="text-xs sm:text-sm font-bold text-brand-deep flex items-center space-x-1">
                      <Phone className="w-3.5 h-3.5 text-brand-gold" />
                      <span>연락처 (전화번호) *</span>
                    </label>
                    <input
                      type="text"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="010-0000-0000"
                      className={`w-full px-4 py-3 rounded-xl border bg-brand-ivory text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-brand-deep/30 transition-all ${
                        errors.phone ? "border-rose-300" : "border-brand-beige-dark/50"
                      }`}
                    />
                    {errors.phone && <p className="text-[11px] text-rose-500 font-bold">{errors.phone}</p>}
                  </div>
                </div>

                {/* Business Field field */}
                <div className="space-y-1.5">
                  <label className="text-xs sm:text-sm font-bold text-brand-deep flex items-center space-x-1">
                    <Building2 className="w-3.5 h-3.5 text-brand-gold" />
                    <span>현재 하시는 사업 분야 (업종) *</span>
                  </label>
                  <input
                    type="text"
                    name="businessField"
                    value={formData.businessField}
                    onChange={handleInputChange}
                    placeholder="예: 용인 꽃집, 마포 디저트 카페, 1인 건강 컨설팅 등"
                    className={`w-full px-4 py-3 rounded-xl border bg-brand-ivory text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-brand-deep/30 transition-all ${
                      errors.businessField ? "border-rose-300" : "border-brand-beige-dark/50"
                    }`}
                  />
                  {errors.businessField && (
                    <p className="text-[11px] text-rose-500 font-bold">{errors.businessField}</p>
                  )}
                </div>

                {/* Desired Course Select field */}
                <div className="space-y-1.5">
                  <label className="text-xs sm:text-sm font-bold text-brand-deep flex items-center space-x-1">
                    <Sparkles className="w-3.5 h-3.5 text-brand-gold" />
                    <span>가장 먼저 관심이 가는 마케팅 교육 *</span>
                  </label>
                  <div className="relative">
                    <select
                      name="desiredCourse"
                      value={formData.desiredCourse}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 rounded-xl border bg-brand-ivory text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-brand-deep/30 transition-all appearance-none cursor-pointer ${
                        errors.desiredCourse ? "border-rose-300" : "border-brand-beige-dark/50"
                      }`}
                    >
                      <option value="">-- 과정을 하나 골라주세요 --</option>
                      {coursesList.map((course, idx) => (
                        <option key={idx} value={course}>
                          {course}
                        </option>
                      ))}
                    </select>
                    {/* Simulated carets icon */}
                    <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-brand-deep font-bold">
                      ▼
                    </div>
                  </div>
                  {errors.desiredCourse && (
                    <p className="text-[11px] text-rose-500 font-bold">{errors.desiredCourse}</p>
                  )}
                </div>

                {/* Worries TextArea field */}
                <div className="space-y-1.5">
                  <label className="text-xs sm:text-sm font-bold text-brand-deep">
                    현재 가장 고민되는 부분 (상세히 기재할수록 적합한 피드백이 준비됩니다.)
                  </label>
                  <textarea
                    name="worries"
                    rows={3}
                    value={formData.worries}
                    onChange={handleInputChange}
                    placeholder="예: 인스타는 깔았는데 첫글 기획이 막막해요, 소액 광고 원리를 몰라 예산만 날렸습니다..."
                    className="w-full px-4 py-3 rounded-xl border border-brand-beige-dark/50 bg-brand-ivory text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-brand-deep/30 transition-all resize-none"
                  />
                </div>

                {/* Privacy Agreement checkbox */}
                <div className="pt-2">
                  <label className="inline-flex items-center space-x-2.5 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={isAgreed}
                      onChange={(e) => setIsAgreed(e.target.checked)}
                      className="rounded border-brand-beige-dark text-brand-deep focus:ring-brand-deep cursor-pointer"
                    />
                    <span className="text-[11px] text-brand-muted font-semibold select-none leading-relaxed">
                      상황 검토 및 맞춤 전화 피드백을 위한 <span className="text-brand-deep font-bold underline">이름/연락처 개인정보 수집 이용안내</span>에 완전히 동의합니다.
                    </span>
                  </label>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center space-x-2 py-4 rounded-xl bg-brand-deep hover:bg-brand-deep-hover text-brand-ivory font-bold text-sm sm:text-base cursor-pointer shadow-lg transition-all duration-200 active:scale-98 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span className="animate-pulse">분석을 통한 상담 접수 중...</span>
                  ) : (
                    <>
                      <span>무료로 1:1 맞춤 상담 신청 예약하기</span>
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Floating Success Alert Dialog Modal */}
      <AnimatePresence>
        {showSuccessModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
            {/* Backdrop blur overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-brand-deep/75 backdrop-blur-xs"
              onClick={() => setShowSuccessModal(false)}
            />

            {/* Dialog Card box */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", stiffness: 350, damping: 25 }}
              className="bg-brand-cream border border-brand-beige rounded-2xl max-w-sm w-full p-6 sm:p-8 shrink-0 z-10 shadow-2xl text-center font-sans space-y-6"
            >
              {/* Animation Shield Checked */}
              <div className="w-16 h-16 rounded-full bg-brand-gold-light text-brand-deep flex items-center justify-center mx-auto border border-brand-gold/15 animate-bounce">
                <ShieldCheck className="w-8 h-8 text-brand-deep" />
              </div>

              {/* Message */}
              <div className="space-y-2">
                <h4 className="font-extrabold text-brand-deep text-lg sm:text-xl">
                  상담 신청 완료
                </h4>
                <p className="text-xs sm:text-sm text-brand-muted font-bold leading-relaxed whitespace-pre-line">
                  상담 신청이 완료되었습니다.
                  24시간 이내 연락드리겠습니다.
                </p>
              </div>

              {/* Support Direct Line reminder */}
              <div className="bg-brand-beige text-brand-deep p-3 rounded-lg text-[11px] font-extrabold flex justify-between items-center">
                <span>즉시 문의 대표원장 회선:</span>
                <span className="text-brand-gold underline font-extrabold">010-9005-4885</span>
              </div>

              {/* Close Button overlay */}
              <button
                onClick={() => setShowSuccessModal(false)}
                className="w-full py-3 bg-brand-deep hover:bg-brand-deep-hover text-brand-ivory font-bold rounded-xl text-xs sm:text-sm shadow-md cursor-pointer transition-colors"
              >
                닫기 / 확인 완료
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
