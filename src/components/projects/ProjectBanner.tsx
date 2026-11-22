import Image from "next/image";
import { Activity } from "lucide-react";
import type { ProjectItem } from "@/types/portfolio";

interface ProjectBannerProps {
  project: ProjectItem;
  sizes: string;
  /** "cover" fills the frame (cards); "contain" shows the whole screenshot. */
  fit?: "cover" | "contain";
  className?: string;
}

/** Project screenshot, or a branded placeholder when the project has none. */
export default function ProjectBanner({
  project,
  sizes,
  fit = "cover",
  className = "",
}: ProjectBannerProps) {
  if (!project.image) {
    return (
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-surface to-background flex flex-col items-center justify-center gap-2 p-6 text-center">
        <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
          <Activity size={24} />
        </div>
        <span className="text-xs font-mono uppercase tracking-wider text-textMuted font-semibold">
          {project.category}
        </span>
      </div>
    );
  }

  return (
    <Image
      src={project.image}
      alt={`${project.title} preview`}
      fill
      sizes={sizes}
      className={`${
        fit === "cover" ? "object-cover object-top" : "object-contain"
      } ${className}`}
    />
  );
}
