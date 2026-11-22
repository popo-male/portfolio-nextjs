import { ArrowRight, Calendar, ExternalLink } from "lucide-react";
import { FaGithub, FaGitlab } from "react-icons/fa";
import type { ProjectItem } from "@/types/portfolio";
import ProjectBanner from "./ProjectBanner";

const VISIBLE_TECH = 4;

interface ProjectCardProps {
  project: ProjectItem;
  onOpen: () => void;
}

/** Compact summary card; the full write-up lives in ProjectDialog. */
export default function ProjectCard({ project, onOpen }: ProjectCardProps) {
  const hiddenTech = project.tech.length - VISIBLE_TECH;

  return (
    <div className="group relative h-full bg-surface border border-gray-800/90 rounded-2xl overflow-hidden hover:border-primary/50 hover:-translate-y-1 transition-all duration-300 flex flex-col shadow-xl shadow-black/20">
      {/* Banner */}
      <div className="h-44 bg-gray-950 relative overflow-hidden">
        <ProjectBanner
          project={project}
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="group-hover:scale-105 transition-transform duration-500"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent"
        />
        <span className="absolute top-3 left-3 text-[11px] font-mono font-semibold px-2.5 py-1 rounded-full bg-black/60 text-white border border-white/10 backdrop-blur-md">
          {project.category}
        </span>
      </div>

      {/* Summary */}
      <div className="p-6 flex-grow flex flex-col">
        <p className="flex items-center gap-1.5 text-xs font-mono text-textMuted mb-2">
          <Calendar size={12} className="text-secondary" />
          {project.timeline}
        </p>

        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-primary transition-colors">
          {/* Stretched button: the whole card opens the details dialog */}
          <button
            type="button"
            onClick={onOpen}
            aria-haspopup="dialog"
            className="text-left cursor-pointer rounded after:absolute after:inset-0 after:content-[''] focus-visible:outline-none focus-visible:after:rounded-2xl focus-visible:after:ring-2 focus-visible:after:ring-secondary"
          >
            {project.title}
          </button>
        </h3>

        <p className="text-sm text-textMuted leading-relaxed line-clamp-3 mb-5">
          {project.description}
        </p>

        <ul className="flex flex-wrap gap-1.5 mb-6" aria-label="Technologies">
          {project.tech.slice(0, VISIBLE_TECH).map((tech) => (
            <li
              key={tech}
              className="text-[11px] font-mono font-semibold px-2.5 py-1 bg-background border border-gray-800 text-textMuted rounded-md"
            >
              {tech}
            </li>
          ))}
          {hiddenTech > 0 && (
            <li className="text-[11px] font-mono font-semibold px-2.5 py-1 text-gray-500">
              +{hiddenTech} more
            </li>
          )}
        </ul>

        {/* Footer */}
        <div className="mt-auto pt-4 border-t border-gray-800/80 flex items-center justify-between gap-3">
          <span className="text-sm font-semibold text-secondary flex items-center gap-1.5">
            View details
            <ArrowRight
              size={15}
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
          </span>

          {/* Quick links sit above the stretched button */}
          <div className="relative z-10 flex items-center gap-2">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.title} on GitHub (opens in new tab)`}
                className="w-9 h-9 flex items-center justify-center rounded-lg bg-background border border-gray-800 text-textMuted hover:text-white hover:border-gray-600 transition-colors"
              >
                <FaGithub size={16} />
              </a>
            )}
            {project.gitlab && (
              <a
                href={project.gitlab}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.title} on GitLab (opens in new tab)`}
                className="w-9 h-9 flex items-center justify-center rounded-lg bg-background border border-gray-800 text-textMuted hover:text-white hover:border-gray-600 transition-colors"
              >
                <FaGitlab size={16} />
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open live demo for ${project.title} (opens in new tab)`}
                className="w-9 h-9 flex items-center justify-center rounded-lg bg-primary/20 border border-primary/40 text-primary hover:text-white hover:bg-primary/30 transition-colors"
              >
                <ExternalLink size={15} />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
