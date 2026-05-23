"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { portfolioData } from "@/lib/data";
import { ExternalLink, Calendar, Target, AlertCircle, ChevronDown, ChevronUp } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";

export default function ProjectSection() {
  // State to handle showing all projects or just the featured ones
  const [showAll, setShowAll] = useState(false);

  // Determine which projects to display (first 4, or all)
  const displayedProjects = showAll 
    ? portfolioData.projects 
    : portfolioData.projects.slice(0, 4);

  return (
    <section id="projects" className="py-24 w-full bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary rounded-full" />
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence>
            {displayedProjects.map((project: any, index: number) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.4, delay: (index % 4) * 0.1 }}
                className="group bg-surface border border-gray-800 rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300 flex flex-col"
              >
                {/* Image & Timeline Header */}
                <div className="h-48 bg-gray-900 relative overflow-hidden">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                      sizes="(min-width: 768px) 50vw, 100vw"
                      priority={index === 0}
                    />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-950 to-black" />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/30 to-transparent opacity-80" />
                  <div className="absolute bottom-4 left-4">
                    <span className="flex items-center text-xs font-medium text-slate-900 bg-white/80 backdrop-blur-md px-3 py-1 rounded-full border border-white/60 shadow-lg shadow-black/20">
                      <Calendar size={12} className="mr-1" /> {project.timeline}
                    </span>
                  </div>
                </div>

                <div className="p-8 flex-grow flex flex-col">
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-textMuted mb-6 text-sm italic">
                    "{project.description}"
                  </p>

                  {/* Problem & Goal */}
                  <div className="space-y-4 mb-6">
                    <div className="flex gap-3">
                      <AlertCircle className="text-secondary shrink-0" size={18} />
                      <p className="text-sm text-gray-400">
                        <span className="text-textMain font-medium">Problem:</span>{" "}
                        {project.problem}
                      </p>
                    </div>
                    <div className="flex gap-3">
                      <Target className="text-primary shrink-0" size={18} />
                      <p className="text-sm text-gray-400">
                        <span className="text-textMain font-medium">Goal:</span>{" "}
                        {project.goal}
                      </p>
                    </div>
                  </div>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tech.map((t: any) => (
                      <span
                        key={t}
                        className="text-[10px] uppercase tracking-wider font-bold px-2 py-1 bg-primary/10 text-primary border border-primary/20 rounded"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Conditional Links / Badges */}
                  <div className="mt-auto pt-6 border-t border-gray-800 flex gap-6">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-sm text-textMuted hover:text-white transition"
                      >
                        <FaGithub size={18} className="mr-2" /> GitHub
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-sm text-textMuted hover:text-white transition"
                      >
                        <ExternalLink size={18} className="mr-2" /> Live Demo
                      </a>
                    )}
                    {!project.github && !project.demo && (
                      <span className="text-xs text-gray-500 italic bg-gray-800/50 px-3 py-1 rounded-md border border-gray-700/50">
                        Academic / Internal Build
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View More / View Less Button */}
        {portfolioData.projects.length > 4 && (
          <div className="mt-16 flex justify-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="flex items-center gap-2 px-6 py-3 bg-surface border border-gray-700 text-textMain rounded-full hover:border-primary hover:text-primary transition-all duration-300 shadow-lg"
            >
              {showAll ? (
                <>Show Less <ChevronUp size={20} /></>
              ) : (
                <>View All {portfolioData.projects.length} Projects <ChevronDown size={20} /></>
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}