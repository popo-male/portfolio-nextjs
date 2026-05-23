import { portfolioData } from "@/lib/data";
import SkillsCarousel from "@/components/SkillsCarousel";
import ProjectSection from "@/components/ProjectSection";
import TimelineSection from "@/components/TimelineSection";
import AboutSection from "@/components/AboutSection";
import CertificatesSection from "@/components/CertificatesSection";
import ContactSection from "@/components/ContactSection";
// Import Image component if you plan to use next/image
// import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center overflow-x-hidden">
      
      {/* HEADER / NAVBAR */}
      {/* Updated to have a slightly more transparent background for the glassmorphism effect */}
      <nav className="w-full fixed top-0 z-50 bg-background/60 backdrop-blur-lg border-b border-gray-800/50">
        {/* relative and md:justify-center ensure the nav links are perfectly centered */}
        <div className="max-w-7xl mx-auto px-6 py-4 relative flex items-center justify-between md:justify-center">
          
          {/* Logo - Pinned to the left on desktop so it doesn't push the centered links off-balance */}
          <div className="md:absolute md:left-6 flex-shrink-0 cursor-pointer hover:scale-105 transition-transform duration-300">
            <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              YK.
            </span>
          </div>

          {/* Navigation - Centered Floating Pill */}
          <div className="hidden md:flex items-center gap-1 bg-surface/80 border border-gray-700/60 p-1.5 rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.2)] backdrop-blur-md">
            {[
              { name: "Home", href: "#home" },
              { name: "About", href: "#about" },
              { name: "Skills", href: "#skills" },
              { name: "Projects", href: "#projects" },
              { name: "Experience", href: "#experience" },
              { name: "Certificates", href: "#certificates" },
              { name: "Contact", href: "#contact" },
            ].map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="px-5 py-2 rounded-full text-sm font-medium text-textMuted hover:text-white hover:bg-gray-700/50 transition-all duration-300 active:scale-95"
              >
                {item.name}
              </a>
            ))}
          </div>

        </div>
      </nav>

      {/* HERO SECTION - Left Aligned with Image Placeholder on Right */}
      <section
        id="home"
        className="min-h-screen w-full flex justify-center items-center px-6 pt-20 relative overflow-hidden"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-hero-glow rounded-full blur-[100px] opacity-30 pointer-events-none" />

        <div className="max-w-7xl w-full z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left Column: Text Content */}
          <div className="text-left order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 text-green-400 border border-green-500/20 text-xs font-medium mb-8 hover:bg-green-500/20 transition-colors cursor-default">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              Available for work
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-textMain tracking-tight">
              Hi, I'm <br />
              <span className="text-white drop-shadow-[0_0_20px_rgba(139,92,246,0.8)] font-extrabold">
                {portfolioData.intro.name}
              </span>
            </h1>

            <h2 className="text-xl md:text-2xl text-textMuted mb-6 font-light">
              {portfolioData.intro.title}
            </h2>

            <p className="text-base md:text-lg text-gray-400 max-w-xl mb-10 leading-relaxed">
              {portfolioData.intro.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-start">
              <a
                href="/resume.pdf"
                download
                className="px-8 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition shadow-[0_0_20px_rgba(139,92,246,0.3)] flex items-center justify-center gap-2 w-fit active:scale-95 duration-200"
              >
                Download CV
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
              </a>
              <a
                href="#contact"
                className="px-8 py-3 border border-gray-700 bg-surface/50 text-textMain rounded-lg hover:border-gray-500 transition flex items-center justify-center gap-2 w-fit active:scale-95 duration-200"
              >
                Contact Me
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
            </div>
          </div>

          {/* Right Column: Sculpture Head Image Placeholder */}
          <div className="relative w-full aspect-square max-w-md mx-auto lg:ml-auto order-1 lg:order-2 flex justify-center items-center">
            {/* A subtle glowing aura behind the image to fit the dark neon theme */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-secondary/30 rounded-full blur-[80px] animate-pulse pointer-events-none"></div>

            <img
              src="/head_01.png"
              alt="Sculpture Head"
              className="relative z-10 w-[80%] h-[80%] object-contain drop-shadow-[0_0_30px_rgba(139,92,246,0.2)] hover:scale-105 transition-transform duration-500"
            />

            {/* Fallback box */}
            <div className="absolute inset-0 border border-dashed border-gray-700 rounded-3xl -z-10 flex items-center justify-center text-gray-700 text-sm italic">
              (Replace src="/head_01.png" with your image)
            </div>
          </div>
        </div>
      </section>

      {/* COMPONENTS */}
      <AboutSection />
      <SkillsCarousel />
      <ProjectSection />
      <TimelineSection />
      <CertificatesSection />
      <ContactSection />
    </main>
  );
}