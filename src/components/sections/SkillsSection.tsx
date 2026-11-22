import { BrainCircuit, Check, Server, Workflow } from "lucide-react";
import type { ReactNode } from "react";
import SectionHeader from "@/components/ui/SectionHeader";
import { skillsData } from "@/data/skills";
import type { CoreStrength } from "@/types/portfolio";

/** Per-strength icon and accent colours. */
const strengthStyles: Record<
  CoreStrength["id"],
  { icon: ReactNode; iconBox: string; topEdge: string; hover: string }
> = {
  backend: {
    icon: <Server size={22} className="text-primary" />,
    iconBox: "bg-primary/10 border-primary/25",
    topEdge: "from-primary",
    hover: "hover:border-primary/50",
  },
  data: {
    icon: <Workflow size={22} className="text-secondary" />,
    iconBox: "bg-secondary/10 border-secondary/25",
    topEdge: "from-secondary",
    hover: "hover:border-secondary/50",
  },
  ai: {
    icon: <BrainCircuit size={22} className="text-emerald-400" />,
    iconBox: "bg-emerald-500/10 border-emerald-500/25",
    topEdge: "from-emerald-400",
    hover: "hover:border-emerald-500/50",
  },
};

function CoreStrengthCard({
  strength,
  index,
}: {
  strength: CoreStrength;
  index: number;
}) {
  const style = strengthStyles[strength.id];

  return (
    <article
      className={`relative bg-surface rounded-2xl border border-gray-800/90 p-6 sm:p-7 shadow-xl shadow-black/20 overflow-hidden flex flex-col transition-colors duration-300 ${style.hover}`}
    >
      <div
        aria-hidden="true"
        className={`absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r ${style.topEdge} to-transparent`}
      />

      <div className="flex items-center justify-between mb-5">
        <div className={`p-3 rounded-xl border ${style.iconBox}`}>
          {style.icon}
        </div>
        <span
          aria-hidden="true"
          className="font-mono text-sm font-bold text-gray-600"
        >
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <h3 className="text-xl font-bold text-white mb-2">{strength.title}</h3>
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
  );
}

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="py-24 w-full bg-background scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          eyebrow="Skills"
          title="Technologies & Skills"
          description="My strongest work sits where Python backend engineering, data pipelines and AI/ML integration meet. Everything else supports those three."
        />

        {/* Core strengths: the three areas that get the most space */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {skillsData.coreStrengths.map((strength, index) => (
            <CoreStrengthCard
              key={strength.id}
              strength={strength}
              index={index}
            />
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
