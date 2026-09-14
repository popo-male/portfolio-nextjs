"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { portfolioData } from "@/lib/data";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Certificates", href: "#certificates" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  // Track active section via IntersectionObserver & scroll position
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sectionElements = navItems.map((item) =>
        document.querySelector(item.href)
      );

      const scrollPosition = window.scrollY + 180;

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const el = sectionElements[i] as HTMLElement | null;
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].href.substring(1));
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle ESC key to close mobile menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <nav
      aria-label="Main Navigation"
      className={`w-full fixed top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0b0f19]/80 backdrop-blur-xl border-b border-gray-800/80 shadow-lg shadow-black/20"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-3.5 relative flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          aria-label="Koh Yu Bin Home"
          className="flex-shrink-0 flex items-center gap-2 group cursor-pointer focus-visible:ring-2 focus-visible:ring-primary rounded-lg"
        >
          <span className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary group-hover:scale-105 transition-transform">
            YK.
          </span>
          <span className="hidden sm:inline-block text-xs font-mono px-2 py-0.5 rounded border border-gray-800 bg-surface text-textMuted">
            dev/data
          </span>
        </a>

        {/* Desktop Navigation - Centered Floating Pill */}
        <div className="hidden md:flex items-center gap-1 bg-[#111827]/90 border border-gray-700/60 px-2 py-1.5 rounded-full shadow-[0_4px_24px_rgba(0,0,0,0.3)] backdrop-blur-md">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <a
                key={item.name}
                href={item.href}
                className={`relative px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 focus-visible:ring-2 focus-visible:ring-primary ${
                  isActive
                    ? "text-white bg-primary shadow-[0_0_12px_rgba(139,92,246,0.4)]"
                    : "text-textMuted hover:text-white hover:bg-gray-800/60"
                }`}
              >
                {item.name}
              </a>
            );
          })}
        </div>

        {/* Desktop Action - Quick Status badge */}
        <div className="hidden lg:flex items-center">
          <a
            href="#contact"
            className="text-xs font-medium px-4 py-2 rounded-lg bg-surface border border-gray-800 text-textMuted hover:text-white hover:border-primary/50 transition-all flex items-center gap-1.5 focus-visible:ring-2 focus-visible:ring-primary"
          >
            <span>Let&apos;s Talk</span>
            <ArrowUpRight size={14} className="text-primary" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation-menu"
          className="md:hidden w-11 h-11 flex items-center justify-center rounded-xl bg-surface border border-gray-800 text-textMain hover:border-primary focus-visible:ring-2 focus-visible:ring-primary transition-colors"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-navigation-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden fixed inset-x-0 top-[61px] bg-[#0b0f19]/95 backdrop-blur-2xl border-b border-gray-800 shadow-2xl p-6 flex flex-col gap-3 z-40 max-h-[calc(100vh-61px)] overflow-y-auto"
          >
            <div className="flex flex-col gap-1.5">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.substring(1);
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`min-h-[48px] px-4 py-3 rounded-xl text-base font-semibold flex items-center justify-between transition-colors ${
                      isActive
                        ? "bg-primary/20 text-white border border-primary/40"
                        : "text-textMuted hover:bg-surface hover:text-white"
                    }`}
                  >
                    <span>{item.name}</span>
                    {isActive && (
                      <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    )}
                  </a>
                );
              })}
            </div>

            <div className="pt-4 mt-2 border-t border-gray-800/80 flex flex-col gap-3">
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="w-full min-h-[48px] px-4 py-3 bg-primary text-white font-semibold rounded-xl text-center flex items-center justify-center gap-2 shadow-lg shadow-primary/20"
              >
                <span>Get in Touch</span>
                <ArrowUpRight size={18} />
              </a>
              <div className="text-xs text-center text-textMuted pt-1">
                {portfolioData.intro.email}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
