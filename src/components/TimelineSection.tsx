"use client";
import { motion } from "framer-motion";
import { portfolioData } from "@/lib/data";
import { Briefcase, GraduationCap } from "lucide-react";

export default function TimelineSection() {
  return (
    <section id="experience" className="py-24 w-full bg-background">
      <div className="max-w-4xl mx-auto px-6">
        {/* Experience Section */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl font-bold text-textMain">
              Work Experience
            </h2>
            <div className="h-1 flex-grow bg-gray-800 rounded-full">
              <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary rounded-full" />
            </div>
          </div>

          <div className="relative border-l border-gray-800 ml-4 md:ml-6 space-y-12">
            {portfolioData.experience.map((exp: any, index: number) => {
              // Check if currently working to apply special styling
              const isCurrent = exp.timeline.toLowerCase().includes("currently working");

              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="relative pl-8 md:pl-12"
                >
                  {/* Timeline Dot - Adds pulse and green color if current job */}
                  <div className={`absolute -left-[17px] top-1 h-8 w-8 bg-surface border ${isCurrent ? 'border-green-500 shadow-[0_0_15px_rgba(34,197,94,0.4)]' : 'border-primary shadow-[0_0_10px_rgba(139,92,246,0.3)]'} rounded-full flex items-center justify-center z-10`}>
                    {isCurrent && (
                      <span className="absolute w-full h-full rounded-full border border-green-500 animate-ping opacity-50"></span>
                    )}
                    <Briefcase size={14} className={isCurrent ? 'text-green-500' : 'text-primary'} />
                  </div>

                  {/* Content */}
                  <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-2">
                    <h3 className="text-xl font-bold text-textMain">
                      {exp.role}
                    </h3>
                    <span className={`text-sm font-medium mt-1 md:mt-0 px-3 py-1 rounded-full w-fit ${isCurrent ? 'text-green-400 bg-green-500/10 border border-green-500/20' : 'text-secondary bg-secondary/10 border border-secondary/20'}`}>
                      {exp.timeline}
                    </span>
                  </div>
                  <h4 className="text-md text-primary mb-4 font-medium">
                    {exp.company}
                  </h4>

                  <ul className="list-disc list-inside text-textMuted space-y-2 text-sm leading-relaxed">
                    {exp.responsibilities.map((task: any, i: number) => (
                      <li key={i} className="pl-2 relative">
                        <span className="absolute left-0 top-[0.6em] w-1.5 h-1.5 rounded-full bg-gray-600"></span>
                        <span className="ml-4 block">{task}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Education Section */}
        <div id="education">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl font-bold text-textMain">
              Academic Background
            </h2>
            <div className="h-1 flex-grow bg-gray-800 rounded-full">
              <div className="h-1 w-20 bg-gradient-to-r from-secondary to-primary rounded-full" />
            </div>
          </div>

          <div className="relative border-l border-gray-800 ml-4 md:ml-6 space-y-12">
            {portfolioData.education.map((edu: any, index: number) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative pl-8 md:pl-12"
              >
                {/* Timeline Dot */}
                <div className="absolute -left-[17px] top-1 h-8 w-8 bg-surface border border-secondary rounded-full flex items-center justify-center shadow-[0_0_10px_rgba(59,130,246,0.3)]">
                  <GraduationCap size={14} className="text-secondary" />
                </div>

                {/* Content */}
                <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-2">
                  <h3 className="text-xl font-bold text-textMain">
                    {edu.degree}
                  </h3>
                  <span className="text-sm font-medium text-primary mt-1 md:mt-0 bg-primary/10 px-3 py-1 rounded-full border border-primary/20 w-fit">
                    {edu.timeline}
                  </span>
                </div>
                <h4 className="text-md text-secondary mb-4 font-medium">
                  {edu.institution}
                </h4>

                <div className="bg-surface p-5 rounded-lg border border-gray-800 space-y-3">
                  <p className="text-sm text-gray-400">
                    <strong className="text-textMain">CGPA:</strong> {edu.cgpa}
                  </p>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    <strong className="text-textMain">
                      Relevant Coursework:
                    </strong>{" "}
                    {edu.coursework}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}