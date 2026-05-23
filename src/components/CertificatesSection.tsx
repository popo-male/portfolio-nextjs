"use client";
import { motion } from "framer-motion";
import { portfolioData } from "@/lib/data";
import { Award, ExternalLink } from "lucide-react";

export default function CertificatesSection() {
  return (
    <section id="certificates" className="py-24 w-full bg-background relative overflow-hidden">
      
      {/* Optional: Subtle background decoration to make the section less empty */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-b from-primary/5 to-transparent blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-2">Achievements</h2>
            <h3 className="text-3xl font-bold text-textMain">
              Certifications
            </h3>
          </div>
        </div>

        {/* Changed to lg:grid-cols-3 for better desktop spacing */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioData.certificates.map((cert: any, index: number) => (
            <motion.a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              // Group class enables the hover effects on child elements
              className="group relative bg-surface border border-gray-800 rounded-2xl p-6 flex flex-col h-full overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-[0_8px_30px_rgb(139,92,246,0.12)]"
            >
              {/* Internal Hover Gradient Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="flex items-start justify-between mb-6 relative z-10">
                <div className="p-3 bg-gray-800/50 group-hover:bg-primary/20 rounded-xl text-primary border border-gray-700 group-hover:border-primary/30 transition-colors duration-300">
                  <Award size={24} className="group-hover:scale-110 transition-transform duration-300" />
                </div>
                
                {/* Styled Provider Badge */}
                <span className="px-3 py-1 text-xs font-semibold bg-gray-800/80 text-gray-300 rounded-full border border-gray-700">
                  {cert.provider}
                </span>
              </div>

              <div className="relative z-10 flex-grow flex flex-col">
                <h3 className="text-lg font-bold text-textMain mb-4 group-hover:text-primary transition-colors duration-300 leading-snug">
                  {cert.name}
                </h3>
                
                <div className="mt-auto pt-4 border-t border-gray-800/50 flex justify-between items-center text-sm">
                  <span className="text-gray-500 font-medium tracking-wide">
                    {cert.date}
                  </span>
                  <span className="text-gray-500 group-hover:text-primary flex items-center transition-colors duration-300">
                    View 
                    <ExternalLink 
                      size={16} 
                      className="ml-1 opacity-50 group-hover:opacity-100 group-hover:-translate-y-1 group-hover:translate-x-1 transition-all duration-300" 
                    />
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}