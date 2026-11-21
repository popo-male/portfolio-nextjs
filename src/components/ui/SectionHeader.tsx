import type { ReactNode } from "react";

interface SectionHeaderProps {
  /** Small uppercase label shown above the title. */
  eyebrow: string;
  title: string;
  description?: string;
  /** Use "h3" for a sub-header inside a section that already has an h2. */
  as?: "h2" | "h3";
  /** Optional content aligned to the right of the title (e.g. filters). */
  children?: ReactNode;
  className?: string;
}

export default function SectionHeader({
  eyebrow,
  title,
  description,
  as: Heading = "h2",
  children,
  className = "mb-12",
}: SectionHeaderProps) {
  return (
    <div
      className={`flex flex-col md:flex-row md:items-end justify-between gap-6 ${className}`}
    >
      <div className="max-w-2xl">
        <span className="text-xs font-mono font-bold text-primary tracking-widest uppercase mb-2 block">
          {eyebrow}
        </span>
        <Heading
          className={`font-extrabold text-white tracking-tight ${
            Heading === "h2" ? "text-3xl sm:text-4xl" : "text-2xl sm:text-3xl"
          }`}
        >
          {title}
        </Heading>
        {description && (
          <p className="text-textMuted text-sm sm:text-base leading-relaxed mt-3">
            {description}
          </p>
        )}
      </div>
      {children}
    </div>
  );
}
