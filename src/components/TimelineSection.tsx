"use client";

import { motion } from "framer-motion";
import {
  portfolioData,
  ExperienceItem,
  EducationItem,
  WorkHighlight,
} from "@/lib/data";
import {
  Briefcase,
  GraduationCap,
  Building2,
  Calendar,
  Award,
  Layers,
} from "lucide-react";

export default function TimelineSection() {
  return (
    <section
      id="experience"
      className="py-24 w-full bg-[#111827]/40 border-t border-gray-800/80 scroll-mt-24"
    >
      <div className="max-w-5xl mx-auto px-6">
        {/* Experience Header */}
        <div className="mb-14">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Work Experience
            </h2>
          </div>
        </div>

        {/* Experience Timeline */}
        <div className="relative border-l-2 border-gray-800/90 ml-3 sm:ml-6 space-y-14 mb-24">
          {portfolioData.experience.map((exp: ExperienceItem, index: number) => {
            const isCurrent = exp.timeline.toLowerCase().includes("present");

            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="relative pl-6 sm:pl-10"
              >
                {/* Timeline Node Dot */}
                <div
                  className={`absolute -left-[18px] top-1 h-8 w-8 bg-[#0b0f19] border-2 ${
                    isCurrent
                      ? "border-emerald-400 shadow-[0_0_18px_rgba(52,211,153,0.45)]"
                      : "border-primary shadow-[0_0_12px_rgba(139,92,246,0.3)]"
                  } rounded-full flex items-center justify-center z-10`}
                >
                  {isCurrent && (
                    <span className="absolute w-full h-full rounded-full border border-emerald-400 animate-ping opacity-40" />
                  )}
                  <Briefcase
                    size={13}
                    className={isCurrent ? "text-emerald-400" : "text-primary"}
                  />
                </div>

                {/* Main Card Container */}
                <div className="bg-[#111827] rounded-3xl border border-gray-800/90 shadow-2xl shadow-black/25 overflow-hidden transition-all duration-300 hover:border-gray-700">
                  {/* Card Header: Role & Period */}
                  <div className="p-6 sm:p-8 bg-gradient-to-r from-surface/80 to-[#111827] border-b border-gray-800/80">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-2.5">
                      <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
                        {exp.role}
                      </h3>

                      <span
                        className={`text-xs font-mono font-semibold px-3.5 py-1.5 rounded-full w-fit flex items-center gap-1.5 shrink-0 ${
                          isCurrent
                            ? "text-emerald-300 bg-emerald-500/15 border border-emerald-500/30 shadow-sm"
                            : "text-secondary bg-secondary/10 border border-secondary/25"
                        }`}
                      >
                        <Calendar size={13} />
                        {exp.timeline}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 text-primary font-semibold text-sm sm:text-base mb-3">
                      <Building2 size={16} />
                      <span>{exp.company}</span>
                      <span className="text-gray-600">&bull;</span>
                      <span className="text-textMuted font-normal text-xs sm:text-sm">
                        {exp.location}
                      </span>
                    </div>

                    {/* Executive Summary */}
                    <p className="text-sm text-gray-300 leading-relaxed font-medium">
                      {exp.summary}
                    </p>
                  </div>

                  {/* Readable Structured Deliverables (Replaces walls of plain bullets) */}
                  <div className="p-6 sm:p-8 space-y-4">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-textMuted font-bold flex items-center gap-1.5 mb-2">
                      <Layers size={13} className="text-secondary" />
                      <span>Key Responsibilities &amp; Impact Areas</span>
                    </h4>

                    <div className="grid grid-cols-1 gap-3.5">
                      {exp.highlights.map((highlight: WorkHighlight, hIndex: number) => (
                        <div
                          key={hIndex}
                          className="bg-[#0b0f19] p-4 sm:p-5 rounded-2xl border border-gray-800/80 hover:border-gray-700 transition-colors flex flex-col gap-2"
                        >
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                            <div className="flex items-center gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                              <span className="text-xs font-mono font-semibold text-secondary uppercase tracking-wider">
                                {highlight.domain}
                              </span>
                              <span className="text-gray-700 hidden sm:inline">&mdash;</span>
                              <h5 className="text-sm sm:text-base font-bold text-white">
                                {highlight.title}
                              </h5>
                            </div>

                            {/* Key Tech for this item */}
                            <div className="flex flex-wrap gap-1">
                              {highlight.keyTech.map((tech) => (
                                <span
                                  key={tech}
                                  className="text-[10px] font-mono font-medium px-2 py-0.5 rounded bg-surface border border-gray-800 text-textMuted"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>

                          <p className="text-xs sm:text-sm text-gray-300 leading-relaxed pl-3.5 border-l border-gray-800">
                            {highlight.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card Footer: Overall Technologies Used */}
                  <div className="px-6 sm:px-8 py-4 bg-[#0b0f19]/80 border-t border-gray-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <span className="text-xs font-mono text-textMuted font-semibold">
                      Tech Stack Utilized:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {exp.technologies.map((t) => (
                        <span
                          key={t}
                          className="text-[11px] font-mono font-semibold px-2.5 py-1 rounded-lg bg-surface border border-gray-800 text-gray-300"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Academic Background Section */}
        <div id="education" className="scroll-mt-24">
          <div className="mb-10">
            <div className="flex items-center gap-4">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Academic Background
              </h2>
              <div className="h-px flex-grow bg-gray-800 hidden sm:block">
                <div className="h-0.5 w-20 bg-gradient-to-r from-secondary to-primary rounded-full" />
              </div>
            </div>
          </div>

          <div className="relative border-l-2 border-gray-800/90 ml-3 sm:ml-6 space-y-12">
            {portfolioData.education.map((edu: EducationItem, index: number) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="relative pl-6 sm:pl-10"
              >
                {/* Academic Node Dot */}
                <div className="absolute -left-[18px] top-1.5 h-8 w-8 bg-[#0b0f19] border-2 border-secondary rounded-full flex items-center justify-center shadow-[0_0_12px_rgba(56,189,248,0.35)] z-10">
                  <GraduationCap size={14} className="text-secondary" />
                </div>

                {/* Academic Card */}
                <div className="bg-[#111827] p-6 sm:p-8 rounded-3xl border border-gray-800/90 shadow-xl shadow-black/20">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                      {edu.degree}
                    </h3>
                    <span className="text-xs font-mono font-semibold px-3 py-1 rounded-full w-fit text-primary bg-primary/10 border border-primary/25">
                      {edu.timeline}
                    </span>
                  </div>

                  <h4 className="text-sm sm:text-base font-semibold text-secondary mb-5">
                    {edu.institution}
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 p-5 rounded-2xl bg-[#0b0f19] border border-gray-800 text-xs sm:text-sm">
                    <div className="sm:col-span-1 border-b sm:border-b-0 sm:border-r border-gray-800 pb-3 sm:pb-0 sm:pr-4">
                      <span className="text-textMuted block text-xs mb-1 font-mono uppercase tracking-wider">
                        Cumulative GPA
                      </span>
                      <span className="font-bold text-emerald-400 text-lg flex items-center gap-1.5">
                        <Award size={18} /> {edu.cgpa}
                      </span>
                    </div>

                    <div className="sm:col-span-3 sm:pl-2">
                      <span className="text-textMuted block text-xs mb-1 font-mono uppercase tracking-wider">
                        Core Specializations
                      </span>
                      <p className="text-gray-300 leading-relaxed text-xs sm:text-sm">
                        {edu.coursework}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}