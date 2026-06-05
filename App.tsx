/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navigation from "./components/Navigation";
import HeroSection from "./components/HeroSection";
import InteractiveShowcase from "./components/InteractiveShowcase";
import ProblemSection from "./components/ProblemSection";
import BeforeAfterSection from "./components/BeforeAfterSection";
import SolutionSection from "./components/SolutionSection";
import DifferenceSection from "./components/DifferenceSection";
import CoursesSection from "./components/CoursesSection";
import ProcessSection from "./components/ProcessSection";
import ReviewsSection from "./components/ReviewsSection";
import ConsultingForm from "./components/ConsultingForm";
import FloatingButton from "./components/FloatingButton";
import Footer from "./components/Footer";

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
