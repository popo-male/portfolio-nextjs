"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import {
  PROJECT_CATEGORIES,
  type ProjectItem,
  type ProjectCategory,
} from "@/types/portfolio";
import ProjectCard from "@/components/projects/ProjectCard";
import ProjectDialog from "@/components/projects/ProjectDialog";
import SectionHeader from "@/components/ui/SectionHeader";

type ProjectFilter = "All" | ProjectCategory;

const filters: ProjectFilter[] = ["All", ...PROJECT_CATEGORIES];

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState<ProjectFilter>("All");
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(
    null
  );

  const filteredProjects =
    activeCategory === "All"
      ? portfolioData.projects
      : portfolioData.projects.filter((p) => p.category === activeCategory);

  return (
    <section
      id="projects"
      className="py-24 w-full bg-background border-t border-gray-800/80 scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          eyebrow="Projects"
          title="Featured Projects & Systems"
          className="mb-8"
        />

        {/* Category filter */}
        <div
          role="group"
          aria-label="Filter projects by category"
          className="flex flex-wrap gap-2 bg-surface p-1.5 rounded-2xl border border-gray-800 w-fit mb-10"
        >
          {filters.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                aria-pressed={isActive}
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

        {/* Project Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.article
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 15 }}
                transition={{ duration: 0.3, delay: (index % 3) * 0.05 }}
              >
                <ProjectCard
                  project={project}
                  onOpen={() => setSelectedProject(project)}
                />
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <ProjectDialog
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}