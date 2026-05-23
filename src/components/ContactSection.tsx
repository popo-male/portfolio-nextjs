"use client";
import { motion } from "framer-motion";
import { Mail, Send, MapPin } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { portfolioData } from "@/lib/data";

export default function ContactSection() {
  return (
    <footer
      id="contact"
      className="w-full bg-background pt-24 border-t border-gray-800"
    >
      <div className="max-w-6xl mx-auto px-6 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Left Side: Info */}
          <div>
            <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-2">
              Contact
            </h2>
            <h3 className="text-4xl font-bold mb-6">Let's work together!</h3>
            <p className="text-textMuted mb-8 leading-relaxed">
              I'm always open to discussing new opportunities, creative
              projects, or partnerships.
            </p>

            <div className="space-y-4">
              <a
                href={`mailto:${portfolioData.intro.email}`}
                className="flex items-center text-gray-300 hover:text-primary transition"
              >
                <Mail size={20} className="mr-4 text-primary" />{" "}
                {portfolioData.intro.email}
              </a>
              <div className="flex items-center text-gray-300">
                <MapPin size={20} className="mr-4 text-primary" />{" "}
                {portfolioData.intro.location}
              </div>
            </div>

            <div className="flex gap-4 mt-8">
              <a
                href="#"
                className="p-3 bg-surface border border-gray-800 rounded-lg hover:border-primary hover:text-primary transition"
              >
                <FaGithub size={20} />
              </a>
              <a
                href="#"
                className="p-3 bg-surface border border-gray-800 rounded-lg hover:border-secondary hover:text-secondary transition"
              >
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>

          {/* Right Side: Form */}
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
            onSubmit={(e) => e.preventDefault()} // Add your email API logic here
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full bg-surface border border-gray-800 rounded-lg px-4 py-3 text-textMain focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full bg-surface border border-gray-800 rounded-lg px-4 py-3 text-textMain focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition"
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              className="w-full bg-surface border border-gray-800 rounded-lg px-4 py-3 text-textMain focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition"
            />
            <textarea
              placeholder="Your Message"
              rows={5}
              className="w-full bg-surface border border-gray-800 rounded-lg px-4 py-3 text-textMain focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition resize-none"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-primary hover:bg-primary/90 text-white font-medium py-3 rounded-lg transition flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(139,92,246,0.3)]"
            >
              Send Message <Send size={18} />
            </button>
          </motion.form>
        </div>
      </div>

      {/* Deep Footer */}
      <div className="border-t border-gray-800 py-8 text-center text-sm text-gray-500">
        <p>
          © {new Date().getFullYear()} {portfolioData.intro.name}. All rights
          reserved.
        </p>
        <p className="mt-2 italic">
          "Code is like humor. When you have to explain it, it's bad." - Cory
          House
        </p>
      </div>
    </footer>
  );
}
