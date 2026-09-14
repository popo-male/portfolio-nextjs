"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  portfolioData,
  ProjectItem,
  ProjectCategory,
} from "@/lib/data";
import {
  ExternalLink,
  Calendar,
  Target,
  AlertCircle,
  Activity,
  Layers,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";

const categories: ProjectCategory[] = [
  "All",
  "AI & Machine Learning",
  "Data Engineering",
  "Full Stack & Web",
  "Systems",
];

export default function ProjectSection() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("All");

  const filteredProjects =
    activeCategory === "All"
      ? portfolioData.projects
      : portfolioData.projects.filter((p) => p.category === activeCategory);

  return (
    <section
      id="projects"
      className="py-24 w-full bg-[#0b0f19] border-t border-gray-800/80 scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Featured Projects &amp; Systems
            </h2>
          </div>

          {/* Category Filter Tabs */}
          <div
            role="tablist"
            aria-label="Project Categories"
            className="flex flex-wrap gap-2 bg-[#111827] p-1.5 rounded-2xl border border-gray-800 w-fit"
          >
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveCategory(cat)}
                  className={`min-h-[38px] px-4 py-1.5 rounded-xl text-xs font-semibold transition-all focus-visible:ring-2 focus-visible:ring-primary ${
                    isActive
                      ? "bg-primary text-white shadow-md shadow-primary/20"
                      : "text-textMuted hover:text-white hover:bg-surface"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Project Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project: ProjectItem, index: number) => (
              <motion.article
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 15 }}
                transition={{ duration: 0.3, delay: (index % 4) * 0.05 }}
                className="group bg-[#111827] border border-gray-800/90 rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300 flex flex-col shadow-xl shadow-black/20"
              >
                {/* Image / Header Banner */}
                <div className="h-52 bg-gray-950 relative overflow-hidden">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={`${project.title} Preview`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(min-width: 768px) 50vw, 100vw"
                    />
                  ) : (
                    /* Fallback High-Tech Card Banner */
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-[#111827] to-[#0b0f19] flex flex-col items-center justify-center p-6 text-center border-b border-gray-800">
                      <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-2">
                        <Activity size={24} />
                      </div>
                      <span className="text-xs font-mono uppercase tracking-wider text-textMuted font-semibold">
                        Machine Learning Dataset &amp; Diagnostics
                      </span>
                    </div>
                  )}

                  <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-transparent to-transparent opacity-90" />

                  {/* Metadata Badges on Image */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                    <span className="flex items-center text-xs font-medium text-white bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 shadow-lg">
                      <Calendar size={12} className="mr-1.5 text-secondary" />{" "}
                      {project.timeline}
                    </span>

                    <span className="text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-full bg-primary/20 text-primary border border-primary/30 backdrop-blur-md">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-7 flex-grow flex flex-col">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-textMuted mb-6 text-sm italic leading-relaxed">
                    &ldquo;{project.description}&rdquo;
                  </p>

                  {/* Problem & Goal */}
                  <div className="space-y-3.5 mb-6">
                    <div className="flex gap-3 items-start">
                      <AlertCircle
                        className="text-secondary shrink-0 mt-0.5"
                        size={17}
                      />
                      <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                        <strong className="text-textMain font-medium">
                          Problem:
                        </strong>{" "}
                        {project.problem}
                      </p>
                    </div>

                    <div className="flex gap-3 items-start">
                      <Target
                        className="text-primary shrink-0 mt-0.5"
                        size={17}
                      />
                      <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                        <strong className="text-textMain font-medium">
                          Goal:
                        </strong>{" "}
                        {project.goal}
                      </p>
                    </div>
                  </div>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-8">
                    {project.tech.map((t: string) => (
                      <span
                        key={t}
                        className="text-[11px] font-mono font-semibold px-2.5 py-1 bg-surface border border-gray-800 text-textMuted rounded-md"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Action Links */}
                  <div className="mt-auto pt-5 border-t border-gray-800/80 flex flex-wrap items-center justify-between gap-3">
                    <div className="flex items-center gap-4">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`View ${project.title} on GitHub (opens in new tab)`}
                          className="min-h-[40px] px-3.5 py-1.5 rounded-lg bg-surface border border-gray-800 hover:border-gray-700 text-xs sm:text-sm text-textMain hover:text-white flex items-center transition-colors focus-visible:ring-2 focus-visible:ring-primary"
                        >
                          <FaGithub size={16} className="mr-2 text-textMuted" />{" "}
                          Code
                        </a>
                      )}

                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Open live interactive demo for ${project.title} (opens in new tab)`}
                          className="min-h-[40px] px-3.5 py-1.5 rounded-lg bg-primary/20 border border-primary/40 hover:bg-primary/30 text-xs sm:text-sm text-primary hover:text-white font-medium flex items-center transition-colors focus-visible:ring-2 focus-visible:ring-secondary"
                        >
                          <ExternalLink size={15} className="mr-1.5" /> Live Demo
                        </a>
                      )}

                      {!project.github && !project.demo && (
                        <span className="text-xs text-textMuted italic flex items-center gap-1.5">
                          <Layers size={14} /> Internal / Academic Research
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}