/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navigation from "./Navigation";
import HeroSection from "./HeroSection";
import InteractiveShowcase from "./InteractiveShowcase";
import ProblemSection from "./ProblemSection";
import BeforeAfterSection from "./BeforeAfterSection";
import SolutionSection from "./SolutionSection";
import DifferenceSection from "./DifferenceSection";
import CoursesSection from "./CoursesSection";
import ProcessSection from "./ProcessSection";
import ReviewsSection from "./ReviewsSection";
import ConsultingForm from "./ConsultingForm";
import FloatingButton from "./FloatingButton";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="relative min-h-screen bg-brand-ivory text-brand-text antialiased selection:bg-brand-deep/10 selection:text-brand-deep">
      {/* 1. Header Navigation */}
      <Navigation />

      {/* Main Sections */}
      <main>
        {/* 2. Hero Section */}
        <HeroSection />

        {/* 2.5 Dynamic Interactive Dashboard Showcase (Pinterest Style) */}
        <InteractiveShowcase />

        {/* 3. Problem Sympathy Section */}
        <ProblemSection />

        {/* 4. Before/After Transformation Section */}
        <BeforeAfterSection />

        {/* 5. Real Solution Section */}
        <SolutionSection />

        {/* 6. Distinct Differentiation Section */}
        <DifferenceSection />

        {/* 7. Courses and Deep Curriculum */}
        <CoursesSection />

        {/* 8. Timeline Stepper Process */}
        <ProcessSection />

        {/* 9. Success Reviews Section */}
        <ReviewsSection />

        {/* 10. Direct Registration Forms */}
        <ConsultingForm />
      </main>

      {/* 11. Float Action and Fixed Bar Trigger */}
      <FloatingButton />

      {/* 12. Corporate Footnotes */}
      <Footer />
    </div>
  );
}
