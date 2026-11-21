import { portfolioData } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="w-full bg-surface/40 border-t border-gray-800/80 py-8 text-center text-xs text-textMuted px-6">
      <p>
        &copy; {new Date().getFullYear()} {portfolioData.intro.name}. Engineered
        with Next.js &amp; Tailwind CSS.
      </p>
      <p className="mt-2 text-gray-500 font-mono text-[11px]">
        &ldquo;Code is like humor. When you have to explain it, it&apos;s
        bad.&rdquo; &mdash; Cory House
      </p>
    </footer>
  );
}
