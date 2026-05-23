"use client";
import { motion } from "framer-motion";
import { portfolioData } from "@/lib/data";

export default function SkillsCarousel() {
  // 1. Map to your new data structure
  const skillCategories = [
    { title: "Frontend", data: portfolioData.skills.frontend },
    { title: "Backend", data: portfolioData.skills.backend },
    { title: "Database", data: portfolioData.skills.database },
    { title: "Data Engineering", data: portfolioData.skills.dataEngineering },
    { title: "AI & Machine Learning", data: portfolioData.skills.AI },
    { title: "DevOps", data: portfolioData.skills.devOps },
  ];

  // Flatten all skills dynamically for the infinite top carousel
  const allSkills = skillCategories.flatMap((category) => category.data);

  return (
    <section id="skills" className="py-20 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <h2 className="text-3xl font-bold mb-2 text-center">
          Technologies I work with
        </h2>
        <p className="text-textMuted text-center mb-10">Skills & Proficiency</p>

        {/* Infinite Carousel */}
        <div className="relative w-full flex overflow-x-hidden mb-16 [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
          <motion.div
            className="flex space-x-8 whitespace-nowrap py-4"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ ease: "linear", duration: 30, repeat: Infinity }}
          >
            {/* Render array twice to create seamless loop */}
            {[...allSkills, ...allSkills].map((skill, index) => (
              <div
                key={`${skill.name}-${index}`}
                className="flex items-center space-x-2 bg-surface px-6 py-3 rounded-full border border-gray-800 hover:border-primary hover:shadow-[0_0_15px_rgba(139,92,246,0.5)] transition-all cursor-default"
              >
                <span className="font-semibold">{skill.name}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Categorized Proficiency Bars - Updated to lg:grid-cols-3 to fit 6 categories nicely */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="bg-surface p-6 rounded-xl border border-gray-800 flex flex-col h-[320px]"
            >
              <h3 className="text-xl font-semibold mb-6 text-primary shrink-0">
                {category.title}
              </h3>

              {/* Added a fixed height, overflow-y-auto, and custom scrollbar styling */}
              <div className="space-y-5 overflow-y-auto pr-3 h-full [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-gray-700 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-primary/50 transition-all">
                {category.data.map((skill: any) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2 text-sm">
                      <span className="font-medium">{skill.name}</span>
                      {/* Percentage text has been removed from here */}
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="bg-gradient-to-r from-cyan-400 to-emerald-400 h-2 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
