"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/lib/data";
import { Code2, BrainCircuit, Rocket, Database } from "lucide-react";

export default function AboutSection() {
  const cards = [
    {
      icon: <Code2 className="text-primary" size={28} />,
      title: "Clean Backend Code",
      description:
        "Writing maintainable, modular, and well-documented Python/FastAPI services designed for maintainability and team collaboration.",
      borderColor: "hover:border-primary/50",
    },
    {
      icon: <Database className="text-secondary" size={28} />,
      title: "Data Pipelines & ETL",
      description:
        "Building robust data pipelines, Airflow automated schedules, and landing zone file validation with Pydantic and Great Expectations.",
      borderColor: "hover:border-secondary/50",
    },
    {
      icon: <BrainCircuit className="text-emerald-400" size={28} />,
      title: "Applied AI & ML",
      description:
        "Integrating machine learning models with MLflow, zero-shot classifiers, XGBoost, and agentic Gemini function-calling with guardrails.",
      borderColor: "hover:border-emerald-500/50",
    },
    {
      icon: <Rocket className="text-purple-400" size={28} />,
      title: "Scalable Infrastructure",
      description:
        "Deploying, monitoring, and operating applications on Linux/Docker with PySpark data processing and reliable system uptime.",
      borderColor: "hover:border-purple-500/50",
    },
  ];

  return (
    <section
      id="about"
      className="py-24 w-full bg-[#111827]/40 border-y border-gray-800/80 scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <span className="text-xs font-mono font-bold text-primary tracking-widest uppercase mb-2 block">
            ABOUT ME
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Background & Philosophy
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
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
              toolkit includes Python, Java, GO, Node.js and modern web frameworks 
              like NestJS nad Next.js.
            </p>
            <p>
              For me, development is about more than just writing code. It's 
              about designing intelligent, scalable systems that solve 
              real-world problems. I enjoy the entire lifecycle of a product. 
              I am constantly exploring modern frameworks and cloud infrastructure 
              to build applications. 
            </p>
            <p>
              Outside of writing code, I'm a big fan of strategy and simulation 
              games, exploring new tech hardware and constantly hunting for the 
              perfect cup of coffee or fruit tea.
            </p>
          </motion.div>

          {/* Right Column: 4-Bento Grid Cards */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {cards.map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, scale: 0.96, y: 15 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.08 }}
                className={`bg-[#111827] p-6 rounded-2xl border border-gray-800/90 shadow-lg shadow-black/20 ${card.borderColor} transition-all duration-300 flex flex-col`}
              >
                <div className="p-3 bg-surface rounded-xl w-fit border border-gray-800 mb-4">
                  {card.icon}
                </div>
                <h3 className="text-base font-bold text-textMain mb-2">
                  {card.title}
                </h3>
                <p className="text-sm text-textMuted leading-relaxed">
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