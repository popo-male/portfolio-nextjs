import { ExternalLink, Layers } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import type { ProjectItem } from "@/types/portfolio";

/** Code / Live Demo buttons, or a note when the project has no public links. */
export default function ProjectLinks({ project }: { project: ProjectItem }) {
  if (!project.github && !project.demo) {
    return (
      <span className="text-xs text-textMuted italic flex items-center gap-1.5">
        <Layers size={14} /> Academic project &middot; not public
      </span>
    );
  }

  return (
    <div className="flex flex-wrap items-center gap-2.5">
      {project.github && (
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View ${project.title} on GitHub (opens in new tab)`}
          className="min-h-[40px] px-3.5 py-1.5 rounded-lg bg-surface border border-gray-800 hover:border-gray-600 text-sm text-textMain hover:text-white flex items-center gap-2 transition-colors"
        >
          <FaGithub size={16} className="text-textMuted" />
          Code
        </a>
      )}
      {project.demo && (
        <a
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Open live demo for ${project.title} (opens in new tab)`}
          className="min-h-[40px] px-3.5 py-1.5 rounded-lg bg-primary/20 border border-primary/40 hover:bg-primary/30 text-sm text-primary hover:text-white font-medium flex items-center gap-1.5 transition-colors"
        >
          <ExternalLink size={15} />
          Live Demo
        </a>
      )}
    </div>
  );
}
