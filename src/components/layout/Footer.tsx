import { GitBranch, Check } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="w-full bg-surface/40 border-t border-gray-800/80 text-xs text-textMuted">
      <div className="py-8 px-6 text-center">
        <p>
          &copy; {new Date().getFullYear()} {portfolioData.intro.name}.
          Engineered with Next.js &amp; Tailwind CSS.
        </p>
        <p className="mt-2 text-gray-500 font-mono text-[11px]">
          &ldquo;Code is like humor. When you have to explain it, it&apos;s
          bad.&rdquo; &mdash; Cory House
        </p>
      </div>

      {/* Editor-style status bar, decorative */}
      <div
        aria-hidden="true"
        className="bg-primary/90 text-white font-mono text-[11px] px-4 py-1 flex items-center justify-between gap-4"
      >
        <span className="flex items-center gap-3">
          <span className="flex items-center gap-1">
            <GitBranch size={12} /> main
          </span>
          <span className="flex items-center gap-1">
            <Check size={12} /> 0 errors
          </span>
        </span>
        <span className="hidden sm:flex items-center gap-4">
          <span>UTF-8</span>
          <span>TypeScript</span>
          <span>Next.js</span>
        </span>
      </div>
    </footer>
  );
}
