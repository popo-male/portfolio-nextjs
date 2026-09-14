import Image from "next/image";
import { portfolioData } from "@/lib/data";
import Navbar from "@/components/Navbar";
import BackToTop from "@/components/BackToTop";
import SkillsCarousel from "@/components/SkillsCarousel";
import ProjectSection from "@/components/ProjectSection";
import TimelineSection from "@/components/TimelineSection";
import AboutSection from "@/components/AboutSection";
import CertificatesSection from "@/components/CertificatesSection";
import ContactSection from "@/components/ContactSection";
import { Download, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <main
      id="main-content"
      className="flex min-h-screen flex-col items-center overflow-x-hidden bg-[#0b0f19] text-[#f8fafc]"
    >
      {/* HEADER / NAVBAR */}
      <Navbar />

      {/* HERO SECTION */}
      <section
        id="home"
        className="min-h-screen w-full flex flex-col justify-center items-center px-6 pt-28 pb-16 relative overflow-hidden scroll-mt-24"
      >
        {/* Ambient background glow */}
        <div
          aria-hidden="true"
          className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-hero-glow rounded-full blur-[120px] opacity-35 pointer-events-none"
        />

        <div className="max-w-7xl w-full z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Text & Credibility */}
          <div className="text-left order-2 lg:order-1 lg:col-span-7 flex flex-col">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold mb-6 hover:bg-emerald-500/20 transition-colors w-fit">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Available for New Opportunities
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold mb-5 text-textMain tracking-tight leading-[1.1]">
              Hi, I&apos;m <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-300 to-secondary font-black drop-shadow-[0_0_30px_rgba(139,92,246,0.5)]">
                {portfolioData.intro.name}
              </span>
            </h1>

            <h2 className="text-lg sm:text-2xl text-secondary mb-5 font-mono font-medium tracking-wide">
              {portfolioData.intro.title}
            </h2>

            <p className="text-base sm:text-lg text-textMuted max-w-2xl mb-8 leading-relaxed">
              {portfolioData.intro.description}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="min-h-[44px] px-7 py-3 bg-primary text-white font-semibold rounded-xl hover:bg-primary-hover transition-all shadow-[0_0_25px_rgba(139,92,246,0.35)] flex items-center justify-center gap-2 active:scale-95 duration-150 focus-visible:ring-2 focus-visible:ring-secondary"
              >
                <span>Get in Touch</span>
                <ArrowRight size={18} />
              </a>

              <a
                href={`mailto:${portfolioData.intro.email}?subject=Resume%20Request%20-%20${encodeURIComponent(portfolioData.intro.name)}`}
                className="min-h-[44px] px-7 py-3 border border-gray-700/80 bg-surface/70 text-textMain rounded-xl hover:border-gray-500 hover:bg-surface transition-all flex items-center justify-center gap-2 active:scale-95 duration-150 focus-visible:ring-2 focus-visible:ring-primary"
              >
                <Download size={18} className="text-secondary" />
                <span>Request CV</span>
              </a>
            </div>
          </div>

          {/* Right Column: Profile Visual */}
          <div className="relative w-full aspect-square max-w-md mx-auto lg:col-span-5 order-1 lg:order-2 flex justify-center items-center">
            {/* Glowing aura */}
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-secondary/30 rounded-full blur-[70px] animate-pulse pointer-events-none"
            />

            {/* Optimized Next.js Image */}
            <div className="relative z-10 w-[85%] h-[85%] rounded-3xl overflow-hidden border border-gray-800/80 bg-gradient-to-b from-surface/80 to-[#0b0f19] p-6 shadow-2xl flex items-center justify-center">
              <Image
                src="/head_01.png"
                alt="Koh Yu Bin - Software Developer Profile Visual"
                width={380}
                height={380}
                priority
                className="w-full h-full object-contain drop-shadow-[0_0_35px_rgba(139,92,246,0.3)] hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTIONS */}
      <AboutSection />
      <SkillsCarousel />
      <ProjectSection />
      <TimelineSection />
      <CertificatesSection />
      <ContactSection />

      {/* FLOATING ACTION: BACK TO TOP */}
      <BackToTop />
    </main>
  );
}