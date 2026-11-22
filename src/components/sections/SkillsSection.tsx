import { BrainCircuit, Check, Server, Workflow } from "lucide-react";
import type { ReactNode } from "react";
import CodeWindow from "@/components/ui/CodeWindow";
import SectionHeader from "@/components/ui/SectionHeader";
import { skillsData } from "@/data/skills";
import type { CoreStrength } from "@/types/portfolio";

/** Per-strength icon and accent colours. */
const strengthStyles: Record<
  CoreStrength["id"],
  { icon: ReactNode; iconBox: string; hover: string }
> = {
  backend: {
    icon: <Server size={20} className="text-primary" />,
    iconBox: "bg-primary/10 border-primary/25",
    hover: "hover:border-primary/50",
  },
  data: {
    icon: <Workflow size={20} className="text-secondary" />,
    iconBox: "bg-secondary/10 border-secondary/25",
    hover: "hover:border-secondary/50",
  },
  ai: {
    icon: <BrainCircuit size={20} className="text-emerald-400" />,
    iconBox: "bg-emerald-500/10 border-emerald-500/25",
    hover: "hover:border-emerald-500/50",
  },
};

function CoreStrengthCard({ strength }: { strength: CoreStrength }) {
  const style = strengthStyles[strength.id];

  return (
    // Editor window, matching the hero's profile.py card
    <CodeWindow
      filename={strength.file}
      className={`bg-surface transition-colors duration-300 ${style.hover}`}
    >
      <article className="p-6 sm:p-7 flex flex-col flex-grow">
        <div className="flex items-center gap-3.5 mb-3">
          <div className={`p-2.5 rounded-xl border ${style.iconBox}`}>
            {style.icon}
          </div>
          <h3 className="text-xl font-bold text-white">{strength.title}</h3>
        </div>

        <p className="text-sm text-textMuted leading-relaxed mb-5">
          {strength.summary}
        </p>

        <ul className="space-y-2 mb-6">
          {strength.competencies.map((competency) => (
            <li
              key={competency}
              className="flex items-start gap-2.5 text-sm text-gray-200"
            >
              <Check size={16} className="text-emerald-400 shrink-0 mt-0.5" />
              {competency}
            </li>
          ))}
        </ul>

        {/* Tools, pinned to the bottom so the three cards line up */}
        <div className="mt-auto pt-5 border-t border-gray-800/80 space-y-3.5">
          {strength.toolGroups.map((group) => (
            <div key={group.label}>
              <p className="text-[11px] font-mono font-semibold uppercase tracking-wider text-gray-500 mb-1.5">
                {group.label}
              </p>
              <ul className="flex flex-wrap gap-1.5">
                {group.tools.map((tool) => (
                  <li
                    key={tool}
                    className="text-xs font-mono font-semibold px-2.5 py-1 bg-background border border-gray-800 text-textMain rounded-md"
                  >
                    {tool}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </article>
    </CodeWindow>
  );
}

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 w-full bg-background scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          eyebrow="Skills"
          title="Technologies & Skills"
          description="My strongest work sits where Python backend engineering, data pipelines and AI/ML integration meet. Everything else supports those three."
        />

        {/* Core strengths: the three areas that get the most space */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {skillsData.coreStrengths.map((strength) => (
            <CoreStrengthCard key={strength.id} strength={strength} />
          ))}
        </div>

        {/* Supporting toolkit: compact rows, deliberately low-key */}
        <div className="bg-surface/40 rounded-2xl border border-gray-800/80 p-6 sm:p-8">
          <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-textMuted mb-5">
            Supporting Toolkit
          </h3>
          <dl className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-5">
            {skillsData.supporting.map((group) => (
              <div
                key={group.label}
                className="flex flex-col sm:flex-row sm:items-baseline gap-1.5 sm:gap-4"
              >
                <dt className="sm:w-44 shrink-0 text-sm font-semibold text-white">
                  {group.label}
                </dt>
                <dd className="text-sm text-textMuted leading-relaxed">
                  {group.items.join(" · ")}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
