import Image from "next/image";
import { ArrowRight, Mail, MapPin } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { portfolioData } from "@/data/portfolio";

const { intro, experience } = portfolioData;

const currentRole =
  experience.find((exp) => exp.timeline.toLowerCase().includes("present")) ??
  experience[0];

/** One `key = value` line of the profile card, coloured like Python source. */
function CodeLine({ name, value }: { name: string; value: string | string[] }) {
  return (
    <div className="pl-6 sm:pl-8">
      <span className="text-sky-300">{name}</span>
      <span className="text-gray-500"> = </span>
      {Array.isArray(value) ? (
        <>
          <span className="text-gray-400">[</span>
          {value.map((item, index) => (
            <span key={item}>
              <span className="text-emerald-300">&quot;{item}&quot;</span>
              {index < value.length - 1 && (
                <span className="text-gray-500">, </span>
              )}
            </span>
          ))}
          <span className="text-gray-400">]</span>
        </>
      ) : (
        <span className="text-emerald-300">&quot;{value}&quot;</span>
      )}
    </div>
  );
}

export default function HeroSection() {
  return (
    <section
      id="home"
      className="min-h-screen w-full flex flex-col justify-center items-center px-6 pt-28 pb-16 relative overflow-hidden scroll-mt-24"
    >
      {/* Ambient background glow */}
      <div
        aria-hidden="true"
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-hero-glow rounded-full blur-[120px] opacity-35 pointer-events-none"
      />

      <div className="max-w-7xl w-full z-10 grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-10 items-center">
        {/* Left column: introduction */}
        <div className="lg:col-span-7 flex flex-col">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 text-sky-300 border border-sky-500/25 text-xs font-semibold mb-6 w-fit">
            <span
              aria-hidden="true"
              className="w-2 h-2 rounded-full bg-sky-400"
            />
            Currently Employed
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold mb-5 text-textMain tracking-tight leading-[1.1]">
            Hi, I&apos;m <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-300 to-secondary font-black drop-shadow-[0_0_30px_rgba(139,92,246,0.5)]">
              {intro.name}
            </span>
          </h1>

          <p className="text-lg sm:text-2xl text-secondary mb-5 font-mono font-medium tracking-wide">
            {intro.title}
          </p>

          <p className="text-base sm:text-lg text-textMuted max-w-2xl mb-8 leading-relaxed">
            {intro.description}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 mb-8">
            <a
              href="#contact"
              className="min-h-[44px] px-7 py-3 bg-primary text-white font-semibold rounded-xl hover:bg-primary-hover transition-all shadow-[0_0_25px_rgba(139,92,246,0.35)] flex items-center justify-center gap-2 active:scale-95 duration-150 focus-visible:ring-2 focus-visible:ring-secondary"
            >
              <span>Get in Touch</span>
              <ArrowRight size={18} />
            </a>

            <a
              href={`mailto:${intro.email}?subject=Resume%20Request%20-%20${encodeURIComponent(intro.name)}`}
              className="min-h-[44px] px-7 py-3 border border-gray-700/80 bg-surface/70 text-textMain rounded-xl hover:border-gray-500 hover:bg-surface transition-all flex items-center justify-center gap-2 active:scale-95 duration-150 focus-visible:ring-2 focus-visible:ring-primary"
            >
              <Mail size={18} className="text-secondary" />
              <span>Request CV</span>
            </a>
          </div>

          {/* Quick facts */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-textMuted">
            <span className="flex items-center gap-2">
              <MapPin size={15} className="text-secondary" />
              {intro.location}
            </span>
            <a
              href={intro.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile (opens in new tab)"
              className="flex items-center gap-2 hover:text-white transition-colors rounded focus-visible:ring-2 focus-visible:ring-primary"
            >
              <FaGithub size={15} />
              {intro.github.replace("https://", "")}
            </a>
          </div>
        </div>

        {/* Right column: profile card styled as a code editor */}
        <div className="lg:col-span-5 w-full max-w-lg mx-auto lg:mx-0 lg:ml-auto relative pb-10 sm:pb-12">
          {/* Glowing aura */}
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-tr from-primary/25 to-secondary/25 rounded-full blur-[80px] pointer-events-none"
          />

          <div className="relative rounded-2xl border border-gray-800/90 bg-surface/90 backdrop-blur shadow-2xl shadow-black/40 overflow-hidden">
            {/* Window chrome */}
            <div
              aria-hidden="true"
              className="flex items-center gap-2 px-4 py-3 border-b border-gray-800/90 bg-background/60"
            >
              <span className="w-3 h-3 rounded-full bg-red-400/80" />
              <span className="w-3 h-3 rounded-full bg-amber-400/80" />
              <span className="w-3 h-3 rounded-full bg-emerald-400/80" />
              <span className="ml-3 text-xs font-mono text-textMuted">
                profile.py
              </span>
            </div>

            <div className="p-5 sm:p-6 pb-12 sm:pb-14 font-mono text-xs sm:text-[13px] leading-7 text-gray-300 break-words">
              <div>
                <span className="text-purple-400">class</span>{" "}
                <span className="text-amber-300">Engineer</span>
                <span className="text-gray-500">:</span>
              </div>
              <CodeLine name="name" value={intro.name} />
              <CodeLine name="role" value={currentRole.role} />
              <CodeLine name="company" value={currentRole.company} />
              <CodeLine name="focus" value={intro.focusAreas} />
              <CodeLine name="stack" value={intro.coreStack} />
              <CodeLine name="fuel" value="coffee" />
            </div>
          </div>

          {/* Mascot sticker, shown near its native size so it stays sharp */}
          <div className="absolute bottom-0 right-3 sm:-right-3 w-32 sm:w-40 rotate-3 rounded-xl overflow-hidden border border-gray-700/80 shadow-xl shadow-black/50 hover:rotate-0 transition-transform duration-300">
            <Image
              src="/head_01.png"
              alt="Cartoon squirrel drinking coffee, captioned: need more coffee"
              width={330}
              height={239}
              priority
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
