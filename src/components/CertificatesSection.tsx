"use client";

import { motion } from "framer-motion";
import { portfolioData, CertificateItem } from "@/lib/data";
import { Award, ExternalLink, CheckCircle2 } from "lucide-react";

export default function CertificatesSection() {
  return (
    <section
      id="certificates"
      className="py-24 w-full bg-[#0b0f19] border-t border-gray-800/80 relative overflow-hidden scroll-mt-24"
    >
      {/* Background glow */}
      <div
        aria-hidden="true"
        className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none -z-10"
      />

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Certifications
            </h2>
          </div>
        </div>

        {/* Certificate Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioData.certificates.map(
            (cert: CertificateItem, index: number) => (
              <motion.a
                key={cert.id}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Verify credential: ${cert.name} by ${cert.provider} (opens in new tab)`}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.06 }}
                className="group relative bg-[#111827] border border-gray-800/90 rounded-2xl p-6 flex flex-col justify-between hover:border-primary/50 transition-all duration-300 hover:shadow-[0_8px_30px_rgba(139,92,246,0.15)] focus-visible:ring-2 focus-visible:ring-primary"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="p-3 bg-[#0b0f19] group-hover:bg-primary/20 rounded-xl text-primary border border-gray-800 group-hover:border-primary/30 transition-colors duration-300">
                      <Award
                        size={22}
                        className="group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>

                    <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold bg-[#0b0f19] text-secondary rounded-full border border-gray-800">
                      <CheckCircle2 size={12} className="text-emerald-400" />
                      {cert.provider}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white mb-4 group-hover:text-primary transition-colors leading-snug">
                    {cert.name}
                  </h3>
                </div>

                <div className="pt-4 border-t border-gray-800/70 flex justify-between items-center text-xs text-textMuted">
                  <span className="font-mono">{cert.date}</span>
                  <span className="group-hover:text-primary font-medium flex items-center gap-1 transition-colors">
                    <span>Verify Credential</span>
                    <ExternalLink
                      size={14}
                      className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                    />
                  </span>
                </div>
              </motion.a>
            )
          )}
        </div>
      </div>
    </section>
  );
}