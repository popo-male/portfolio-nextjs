import type { ReactNode } from "react";

interface CodeWindowProps {
  /** File name shown in the title bar, e.g. "profile.py". */
  filename: string;
  children: ReactNode;
  className?: string;
}

/** Card framed as a code editor window: traffic-light dots and a file name. */
export default function CodeWindow({
  filename,
  children,
  className = "bg-surface",
}: CodeWindowProps) {
  return (
    <div
      className={`rounded-2xl border border-gray-800/90 shadow-xl shadow-black/20 overflow-hidden flex flex-col ${className}`}
    >
      <div
        aria-hidden="true"
        className="flex items-center gap-2 px-4 py-3 border-b border-gray-800/90 bg-background/60"
      >
        <span className="w-3 h-3 rounded-full bg-red-400/80" />
        <span className="w-3 h-3 rounded-full bg-amber-400/80" />
        <span className="w-3 h-3 rounded-full bg-emerald-400/80" />
        <span className="ml-3 text-xs font-mono text-textMuted">
          {filename}
        </span>
      </div>
      {children}
    </div>
  );
}
