"use client";
import { motion } from "framer-motion";
import { portfolioData } from "@/lib/data";
import { Code2, BrainCircuit, Rocket, Database } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 w-full bg-surface/50 border-y border-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-2">About Me</h2>
        <h3 className="text-3xl md:text-4xl font-bold mb-12">Crafting intelligent systems<br/>with robust engineering</h3>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Side: Expanded Text Description */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gray-400 space-y-6 leading-relaxed text-lg"
          >
            <p>
              I am an <strong className="text-textMain">Associate Software Engineer</strong> with a strong focus on backend development, ETL systems, and machine learning solutions. 
              My technical foundation revolves around combining robust software engineering with data science workflows.
            </p>
            <p>
              Currently, my work involves building complex data processing pipelines, developing scalable APIs, and engineering automation systems using technologies like <strong className="text-textMain">Python, PostgreSQL, Docker, and PySpark</strong>. 
            </p>
            <p>
              My passion lies in developing scalable architectures and continuously pushing my technical boundaries. {portfolioData.about.difference}
            </p>
          </motion.div>

          {/* Right Side: 4-Grid Strengths/Interests */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Original Card 1 */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-background p-6 rounded-xl border border-gray-800 shadow-lg hover:border-primary/50 transition-colors"
            >
              <Code2 className="text-primary mb-4" size={32} />
              <h4 className="text-lg font-bold text-textMain mb-2">Clean Code</h4>
              <p className="text-sm text-gray-500">I write maintainable, efficient, and well-documented code for seamless collaboration.</p>
            </motion.div>

            {/* Original Card 2 */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-background p-6 rounded-xl border border-gray-800 shadow-lg hover:border-secondary/50 transition-colors"
            >
              <BrainCircuit className="text-secondary mb-4" size={32} />
              <h4 className="text-lg font-bold text-textMain mb-2">Problem Solver</h4>
              <p className="text-sm text-gray-500">I thrive on turning complex business requirements into simple, elegant technical solutions.</p>
            </motion.div>

            {/* New Card 3 */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-background p-6 rounded-xl border border-gray-800 shadow-lg hover:border-emerald-500/50 transition-colors"
            >
              <Database className="text-emerald-500 mb-4" size={32} />
              <h4 className="text-lg font-bold text-textMain mb-2">Data-Driven</h4>
              <p className="text-sm text-gray-500">Specialized in ETL pipelines, data validation, and integrating machine learning models into production.</p>
            </motion.div>

            {/* New Card 4 */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-background p-6 rounded-xl border border-gray-800 shadow-lg hover:border-blue-500/50 transition-colors"
            >
              <Rocket className="text-blue-500 mb-4" size={32} />
              <h4 className="text-lg font-bold text-textMain mb-2">Scalable Systems</h4>
              <p className="text-sm text-gray-500">Experienced in deploying, monitoring, and maintaining robust backend applications and APIs.</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}