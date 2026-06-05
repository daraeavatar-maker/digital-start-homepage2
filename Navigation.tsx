/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setIsOpen(false);
    const targetElement = document.getElementById(id);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const navItems = [
    { name: "소개", id: "introduction" },
    { name: "교육과정", id: "courses" },
    { name: "진행방식", id: "process" },
    { name: "후기", id: "reviews" },
    { name: "상담신청", id: "consulting" },
  ];

  return (
    <header
      id="nav"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-brand-ivory/95 backdrop-blur-md shadow-sm border-b border-brand-beige-dark/20 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center space-x-2 text-left focus:outline-none cursor-pointer group"
          >
            <div className="w-9 h-9 rounded-lg bg-brand-deep flex items-center justify-center text-brand-ivory font-bold text-lg group-hover:bg-brand-gold transition-colors duration-300">
              디
            </div>
            <div>
              <span className="block font-sans font-bold text-[17px] tracking-tight text-brand-deep leading-tight">
                디지털 첫걸음 연구소
              </span>
              <span className="block text-[10px] text-brand-gold font-medium leading-none tracking-wider">
                DIGITAL START INSTITUTE
              </span>
            </div>
          </button>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex space-x-8 items-center">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="text-sm font-medium text-brand-text/80 hover:text-brand-deep cursor-pointer transition-colors duration-200 relative group py-2"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-brand-gold transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </nav>

          {/* Desktop Right CTA Button */}
          <div className="hidden md:block">
            <button
              onClick={() => handleNavClick("consulting")}
              className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full bg-brand-deep hover:bg-brand-deep-hover text-brand-ivory font-semibold text-sm shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>무료 상담 신청하기</span>
              <ArrowRight className="w-4 h-4 text-brand-gold" />
            </button>
          </div>

          {/* Mobile menu toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-brand-deep hover:bg-brand-beige/50 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-brand-ivory border-b border-brand-beige-dark/50"
          >
            <div className="px-4 pt-3 pb-6 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className="block w-full text-left px-4 py-3 rounded-xl text-[15px] font-semibold text-brand-text hover:bg-brand-beige/50 transition-colors"
                >
                  {item.name}
                </button>
              ))}
              <div className="pt-4 px-4">
                <button
                  onClick={() => handleNavClick("consulting")}
                  className="flex w-full items-center justify-center space-x-2 py-3 rounded-xl bg-brand-deep text-brand-ivory font-bold text-sm shadow-md"
                >
                  <span>무료 상담 신청하기</span>
                  <ArrowRight className="w-4 h-4 text-brand-gold" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
