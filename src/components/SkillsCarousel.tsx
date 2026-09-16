"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useMotionValue, useAnimationFrame } from "framer-motion";
import {
  Server,
  Workflow,
  Cpu,
  Database,
  Terminal,
  Layout,
  Globe,
  CheckCircle2,
  BarChart3,
  BrainCircuit,
  Bot,
  Layers,
  MessageSquareCode,
  GitBranch,
  Play,
  Pause,
} from "lucide-react";
import {
  SiPython,
  SiFastapi,
  SiFlask,
  SiNodedotjs,
  SiJavascript,
  SiPrisma,
  SiJsonwebtokens,
  SiApacheairflow,
  SiApachespark,
  SiPolars,
  SiMlflow,
  SiPostgresql,
  SiMysql,
  SiElasticsearch,
  SiDocker,
  SiUbuntu,
  SiGit,
  SiNginx,
  SiReact,
  SiTailwindcss,
  SiStreamlit,
  SiHtml5,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

interface TechItem {
  name: string;
  icon: React.ReactNode;
}

interface DomainCluster {
  title: string;
  domainIcon: React.ReactNode;
  skills: TechItem[];
}

const clusters: DomainCluster[] = [
  {
    title: "Backend & APIs",
    domainIcon: <Server className="text-primary" size={18} />,
    skills: [
      { name: "Python", icon: <SiPython className="text-[#3776AB]" size={16} /> },
      { name: "FastAPI", icon: <SiFastapi className="text-[#05998B]" size={16} /> },
      { name: "RESTful & SOAP APIs", icon: <Globe className="text-primary" size={16} /> },
      { name: "Flask", icon: <SiFlask className="text-gray-300" size={16} /> },
      { name: "Java", icon: <FaJava className="text-[#ED8B00]" size={16} /> },
      { name: "JavaScript", icon: <SiJavascript className="text-[#F7DF1E]" size={16} /> },
      { name: "Node.js", icon: <SiNodedotjs className="text-[#5FA04E]" size={16} /> },
      { name: "Prisma", icon: <SiPrisma className="text-gray-300" size={16} /> },
      { name: "JWT Authentication", icon: <SiJsonwebtokens className="text-[#D63AFF]" size={16} /> },
      { name: "CLI Development", icon: <Terminal className="text-secondary" size={16} /> },
    ],
  },
  {
    title: "Data Engineering",
    domainIcon: <Workflow className="text-secondary" size={18} />,
    skills: [
      { name: "Apache Airflow", icon: <SiApacheairflow className="text-[#017CEE]" size={16} /> },
      { name: "PySpark", icon: <SiApachespark className="text-[#E25A1C]" size={16} /> },
      { name: "ETL Pipelines", icon: <Workflow className="text-secondary" size={16} /> },
      { name: "Polars", icon: <SiPolars className="text-[#CD792C]" size={16} /> },
      { name: "Great Expectations", icon: <CheckCircle2 className="text-emerald-400" size={16} /> },
      { name: "Data Visualization", icon: <BarChart3 className="text-amber-400" size={16} /> },
    ],
  },
  {
    title: "AI & Machine Learning",
    domainIcon: <Cpu className="text-emerald-400" size={18} />,
    skills: [
      { name: "MLflow", icon: <SiMlflow className="text-[#0194E2]" size={16} /> },
      { name: "Machine Learning", icon: <BrainCircuit className="text-emerald-400" size={16} /> },
      { name: "LLM & Agentic AI", icon: <Bot className="text-purple-400" size={16} /> },
      { name: "Deep Learning (CNN)", icon: <Layers className="text-cyan-400" size={16} /> },
      { name: "NLP & Sentiment", icon: <MessageSquareCode className="text-pink-400" size={16} /> },
    ],
  },
  {
    title: "Databases & Storage",
    domainIcon: <Database className="text-amber-400" size={18} />,
    skills: [
      { name: "PostgreSQL", icon: <SiPostgresql className="text-[#4169E1]" size={16} /> },
      { name: "SQL", icon: <Database className="text-amber-400" size={16} /> },
      { name: "MySQL", icon: <SiMysql className="text-[#4479A1]" size={16} /> },
      { name: "Elasticsearch", icon: <SiElasticsearch className="text-[#005571]" size={16} /> },
    ],
  },
  {
    title: "DevOps & Infrastructure",
    domainIcon: <Terminal className="text-purple-400" size={18} />,
    skills: [
      { name: "Docker", icon: <SiDocker className="text-[#2496ED]" size={16} /> },
      { name: "Linux / Ubuntu", icon: <SiUbuntu className="text-[#E95420]" size={16} /> },
      { name: "Git", icon: <SiGit className="text-[#F05032]" size={16} /> },
      { name: "Nginx", icon: <SiNginx className="text-[#009639]" size={16} /> },
      { name: "CI/CD Automation", icon: <GitBranch className="text-purple-400" size={16} /> },
    ],
  },
  {
    title: "Frontend & Interfaces",
    domainIcon: <Layout className="text-cyan-400" size={18} />,
    skills: [
      { name: "React", icon: <SiReact className="text-[#61DAFB]" size={16} /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#06B6D4]" size={16} /> },
      { name: "Streamlit", icon: <SiStreamlit className="text-[#FF4B4B]" size={16} /> },
      { name: "HTML & CSS", icon: <SiHtml5 className="text-[#E34F26]" size={16} /> },
    ],
  },
];

export default function SkillsCarousel() {
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const halfWidthRef = useRef(0);
  const x = useMotionValue(0);

  // Measure half width on mount and on window resize
  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        halfWidthRef.current = containerRef.current.scrollWidth / 2;
      }
    };
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  // Continuous animation loop using Framer Motion's hardware-accelerated RAF ticker
  useAnimationFrame((_, delta) => {
    if (isPaused) return;

    // Cap delta to 64ms so returning from background tab does not cause a huge jump
    const safeDelta = Math.min(delta, 64);
    const speed = 45; // 45px per second (smooth, comfortable reading speed)
    const moveBy = (speed * safeDelta) / 1000;

    let current = x.get() - moveBy;
    const halfWidth =
      halfWidthRef.current ||
      (containerRef.current ? containerRef.current.scrollWidth / 2 : 0);

    if (halfWidth > 0 && current <= -halfWidth) {
      current += halfWidth;
    }

    x.set(current);
  });

  // Flat list for top ticker
  const tickerSkills = clusters.flatMap((c) => c.skills);

  return (
    <section
      id="skills"
      className="py-24 w-full overflow-hidden bg-[#0b0f19] scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
            Technologies &amp; Skills
          </h2>
          <p className="text-textMuted text-sm sm:text-base leading-relaxed">
            Core technologies across backend systems, automated data pipelines,
            and machine learning workflows.
          </p>
        </div>

        {/* 1. Movement Bar (Top Ticker) */}
        <div className="relative w-full mb-14">
          <div
            className="relative w-full overflow-x-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_96px,_black_calc(100%-96px),transparent_100%)]"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onFocus={() => setIsPaused(true)}
            onBlur={() => setIsPaused(false)}
          >
            <motion.div
              ref={containerRef}
              style={{ x }}
              className="flex space-x-3 whitespace-nowrap py-2 w-max will-change-transform"
            >
              {[...tickerSkills, ...tickerSkills].map((skill, index) => (
                <div
                  key={`${skill.name}-${index}`}
                  className="inline-flex items-center gap-2.5 bg-[#111827] px-4 py-2 rounded-xl border border-gray-800 text-sm font-medium text-textMain hover:border-gray-700 hover:text-white transition-colors cursor-default shrink-0"
                >
                  <span className="shrink-0">{skill.icon}</span>
                  <span>{skill.name}</span>
                </div>
              ))}
            </motion.div>
          </div>

          <div className="flex justify-end mt-2">
            <button
              type="button"
              onClick={() => setIsPaused((prev) => !prev)}
              aria-label={isPaused ? "Resume skill ticker" : "Pause skill ticker"}
              className="text-xs text-textMuted hover:text-white flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface border border-gray-800 transition-colors focus-visible:ring-2 focus-visible:ring-secondary cursor-pointer"
            >
              {isPaused ? <Play size={12} /> : <Pause size={12} />}
              <span>{isPaused ? "Resume Ticker" : "Pause Ticker"}</span>
            </button>
          </div>
        </div>

        {/* 2. Clean Linear Row Matrix (No nested boxes, No empty space, Zero clutter) */}
        <div className="bg-[#111827]/40 rounded-3xl border border-gray-800/80 p-6 sm:p-10 divide-y divide-gray-800/70 shadow-2xl shadow-black/20">
          {clusters.map((cluster, index) => (
            <div
              key={cluster.title}
              className={`py-6 sm:py-7 flex flex-col lg:flex-row lg:items-center justify-between gap-5 ${
                index === 0 ? "pt-0" : ""
              } ${index === clusters.length - 1 ? "pb-0" : ""}`}
            >
              {/* Domain Label & Count */}
              <div className="lg:w-64 shrink-0 flex items-center gap-3">
                <div className="p-2 rounded-xl bg-[#0b0f19] border border-gray-800/90 text-textMuted shrink-0">
                  {cluster.domainIcon}
                </div>
                <div>
                  <h3 className="font-bold text-base sm:text-lg text-white leading-tight">
                    {cluster.title}
                  </h3>
                  <span className="text-xs font-mono text-gray-500 block mt-0.5">
                    {cluster.skills.length} technologies
                  </span>
                </div>
              </div>

              {/* Clean, Breathing Tech Badges */}
              <div className="flex-grow flex flex-wrap gap-2.5 lg:justify-start">
                {cluster.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="min-h-[40px] px-3.5 py-2 rounded-xl bg-[#0b0f19] border border-gray-800/80 hover:border-gray-700 hover:bg-surface/80 text-xs sm:text-sm font-medium text-textMain hover:text-white transition-all duration-150 flex items-center gap-2.5 shadow-sm"
                  >
                    <span className="shrink-0 opacity-90">{skill.icon}</span>
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
