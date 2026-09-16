"use client";

import { motion } from "framer-motion";
import { Code2, BrainCircuit, Rocket, Database, ArrowUpRight } from "lucide-react";

export default function AboutSection() {
  const cards = [
    {
      title: "Clean Code & Architecture",
      description:
        "I write maintainable, efficient, and well-structured code designed for scalability and team collaboration.",
      icon: <Code2 size={20} className="text-cyan-400" />,
      accentBg: "bg-cyan-500/10 border-cyan-500/25",
      borderHover: "hover:border-cyan-500/40",
      glowColor: "from-cyan-500/15",
    },
    {
      title: "Data Pipelines & ETL",
      description:
        "I design automated workflows that extract, transform and load complex data. Ensure clean, structured and reliable data is always available for downstream applications.",
      icon: <Database size={20} className="text-sky-400" />,
      accentBg: "bg-sky-500/10 border-sky-500/25",
      borderHover: "hover:border-sky-500/40",
      glowColor: "from-sky-500/15",
    },
    {
      title: "Applied AI & MLOps",
      description:
        "I bridge the gap between data science and production by deploying AI model into real-world applications.",
      icon: <BrainCircuit size={20} className="text-emerald-400" />,
      accentBg: "bg-emerald-500/10 border-emerald-500/25",
      borderHover: "hover:border-emerald-500/40",
      glowColor: "from-emerald-500/15",
    },
    {
      title: "Scalable Cloud Infrastructure",
      description:
        "I architect containerized environments and automated CI/CD pipelines to ensure applications run smoothly under heavy loads.",
      icon: <Rocket size={20} className="text-purple-400" />,
      accentBg: "bg-purple-500/10 border-purple-500/25",
      borderHover: "hover:border-purple-500/40",
      glowColor: "from-purple-500/15",
    },
  ];

  return (
    <section
      id="about"
      className="py-24 w-full bg-[#111827]/40 border-y border-gray-800/80 scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12 text-left">
          <span className="text-xs font-mono font-bold text-primary tracking-widest uppercase mb-2 block">
            ABOUT ME
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Background &amp; Philosophy
          </h2>
        </div>

        {/* Vertically Centered Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Descriptive Bio */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-6 text-textMuted space-y-6 leading-relaxed text-base sm:text-lg"
          >
            <p>
              I am an{" "}
              <strong className="text-textMain font-semibold">
                Associate Software Engineer
              </strong>{" "}
              specializing in backend development, ETL architectures, and machine
              learning pipelines. My core focus lies at the intersection of
              production software engineering and data science workflows. My core
              toolkit includes Python, Java, Go, Node.js, and modern web frameworks
              like NestJS and Next.js.
            </p>
            <p>
              For me, development is about more than just writing code. It&apos;s
              about designing intelligent, scalable systems that solve
              real-world problems. I enjoy the entire lifecycle of a product.
              I am constantly exploring modern frameworks and cloud infrastructure
              to build resilient applications.
            </p>
            <p>
              Outside of writing code, I&apos;m a big fan of strategy and simulation
              games, exploring new tech hardware, and constantly hunting for the
              perfect cup of coffee or fruit tea.
            </p>

            <div className="pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 text-sm font-semibold text-secondary hover:text-white transition-colors group"
              >
                <span>Explore my featured projects</span>
                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            </div>
          </motion.div>

          {/* Right Column: Fresh Modern 4-Card Bento Grid */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            {cards.map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, scale: 0.96, y: 15 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.08 }}
                className={`group relative bg-gradient-to-b from-[#151c2e] to-[#0f1524] p-5 sm:p-6 rounded-2xl border border-gray-800/90 shadow-xl shadow-black/20 ${card.borderHover} hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col overflow-hidden`}
              >
                {/* Subtle top edge gradient reflection */}
                <div
                  className={`absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r ${card.glowColor} to-transparent opacity-50 group-hover:opacity-100 transition-opacity`}
                />

                {/* Card Header: Luminous Icon */}
                <div className="mb-4">
                  <div
                    className={`inline-flex p-2.5 rounded-xl border ${card.accentBg} items-center justify-center transition-transform duration-300 group-hover:scale-105 shadow-sm`}
                  >
                    {card.icon}
                  </div>
                </div>

                {/* Title & Description */}
                <h3 className="text-base font-bold text-white mb-2 group-hover:text-textMain transition-colors">
                  {card.title}
                </h3>
                <p className="text-xs sm:text-sm text-textMuted leading-relaxed">
                  {card.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}