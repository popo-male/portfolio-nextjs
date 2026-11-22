import { AlertCircle, CheckCircle2, Target } from "lucide-react";
import Modal from "@/components/ui/Modal";
import type { ProjectItem } from "@/types/portfolio";
import ProjectBanner from "./ProjectBanner";
import ProjectLinks from "./ProjectLinks";

interface ProjectDialogProps {
  /** The project to show, or null when the dialog is closed. */
  project: ProjectItem | null;
  onClose: () => void;
}

function Label({ children }: { children: string }) {
  return (
    <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-textMuted mb-3">
      {children}
    </h3>
  );
}

/** Full project write-up: problem, goal, key features, stack and links. */
export default function ProjectDialog({ project, onClose }: ProjectDialogProps) {
  return (
    <Modal
      open={project !== null}
      onClose={onClose}
      title={project?.title ?? ""}
      subtitle={project ? `${project.category} · ${project.timeline}` : undefined}
      footer={project && <ProjectLinks project={project} />}
    >
      {project && (
        <div className="space-y-7">
          <div className="relative aspect-[16/9] rounded-xl overflow-hidden border border-gray-800 bg-gray-950">
            <ProjectBanner
              project={project}
              sizes="(min-width: 768px) 720px, 100vw"
              fit="contain"
            />
          </div>

          <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
            {project.description}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-background border border-gray-800">
              <p className="flex items-center gap-2 text-sm font-semibold text-white mb-2">
                <AlertCircle size={16} className="text-secondary" />
                Problem
              </p>
              <p className="text-sm text-textMuted leading-relaxed">
                {project.problem}
              </p>
            </div>
            <div className="p-4 rounded-xl bg-background border border-gray-800">
              <p className="flex items-center gap-2 text-sm font-semibold text-white mb-2">
                <Target size={16} className="text-primary" />
                Goal
              </p>
              <p className="text-sm text-textMuted leading-relaxed">
                {project.goal}
              </p>
            </div>
          </div>

          <div>
            <Label>Key Features</Label>
            <ul className="space-y-2.5">
              {project.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-2.5 text-sm text-gray-300 leading-relaxed"
                >
                  <CheckCircle2
                    size={16}
                    className="text-emerald-400 shrink-0 mt-0.5"
                  />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <Label>Tech Stack</Label>
            <ul className="flex flex-wrap gap-1.5">
              {project.tech.map((tech) => (
                <li
                  key={tech}
                  className="text-xs font-mono font-semibold px-2.5 py-1 bg-background border border-gray-800 text-textMuted rounded-md"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </Modal>
  );
}
