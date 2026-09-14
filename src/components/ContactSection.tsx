"use client";

import type { FormEvent } from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Send,
  MapPin,
  Loader2,
  Copy,
  Check,
  Phone,
  ArrowUpRight,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { portfolioData } from "@/lib/data";

export default function ContactSection() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(portfolioData.intro.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
    }
  };

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const body = new URLSearchParams();

    formData.forEach((value, key) => {
      body.append(key, value.toString());
    });

    try {
      const response = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: body.toString(),
      });

      if (!response.ok) {
        throw new Error("Form submission endpoint responded with error");
      }

      form.reset();
      setStatus("sent");
    } catch {
      // If deployed in environments without Netlify form handlers, show friendly fallback
      setStatus("error");
    }
  }

  const inputClasses =
    "w-full bg-[#0b0f19] border border-gray-800 rounded-xl px-4 py-3 text-textMain text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-gray-600";

  return (
    <footer
      id="contact"
      className="w-full bg-[#111827]/40 pt-24 border-t border-gray-800/80 scroll-mt-24"
    >
      <div className="max-w-6xl mx-auto px-6 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left Column: Direct Info & Socials */}
          <div className="lg:col-span-5 flex flex-col">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 tracking-tight">
              Let&apos;s Build Together
            </h2>
            <p className="text-textMuted mb-8 leading-relaxed text-sm sm:text-base">
              I&apos;m always open to discussing new opportunities, creative projects, or partnerships.
            </p>

            {/* Direct Contact Cards */}
            <div className="space-y-3.5 mb-8">
              {/* Email with 1-click copy */}
              <div className="p-3.5 rounded-xl bg-[#111827] border border-gray-800 flex items-center justify-between gap-3">
                <a
                  href={`mailto:${portfolioData.intro.email}`}
                  className="flex items-center text-sm font-medium text-textMain hover:text-primary transition-colors truncate"
                  aria-label={`Send email to ${portfolioData.intro.email}`}
                >
                  <Mail size={18} className="mr-3 text-primary shrink-0" />
                  <span className="truncate">{portfolioData.intro.email}</span>
                </a>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  aria-label={copied ? "Email copied" : "Copy email address to clipboard"}
                  className="px-3 py-1.5 rounded-lg bg-surface border border-gray-700/80 text-xs text-textMuted hover:text-white hover:border-gray-500 transition-colors flex items-center gap-1.5 shrink-0 focus-visible:ring-2 focus-visible:ring-primary"
                >
                  {copied ? (
                    <>
                      <Check size={13} className="text-emerald-400" />
                      <span className="text-emerald-400 font-semibold">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy size={13} />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Location */}
              <div className="p-3.5 rounded-xl bg-[#111827] border border-gray-800 flex items-center text-sm text-textMuted">
                <MapPin size={18} className="mr-3 text-secondary shrink-0" />
                <span>{portfolioData.intro.location}</span>
              </div>

              {/* Phone */}
              <div className="p-3.5 rounded-xl bg-[#111827] border border-gray-800 flex items-center text-sm text-textMuted">
                <Phone size={18} className="mr-3 text-emerald-400 shrink-0" />
                <span>{portfolioData.intro.phone}</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              <a
                href={portfolioData.intro.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Koh Yu Bin's GitHub profile (opens in new tab)"
                className="min-h-[44px] min-w-[44px] p-3 bg-[#111827] border border-gray-800 rounded-xl hover:border-primary hover:text-primary text-textMuted transition-all flex items-center justify-center focus-visible:ring-2 focus-visible:ring-primary"
              >
                <FaGithub size={20} />
              </a>

              <a
                href={portfolioData.intro.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Koh Yu Bin's LinkedIn profile (opens in new tab)"
                className="min-h-[44px] min-w-[44px] p-3 bg-[#111827] border border-gray-800 rounded-xl hover:border-secondary hover:text-secondary text-textMuted transition-all flex items-center justify-center focus-visible:ring-2 focus-visible:ring-secondary"
              >
                <FaLinkedin size={20} />
              </a>

              <a
                href={`mailto:${portfolioData.intro.email}?subject=Direct%20Inquiry%20from%20Portfolio`}
                className="min-h-[44px] px-4 py-2 bg-[#111827] border border-gray-800 rounded-xl text-xs font-semibold text-textMuted hover:text-white hover:border-gray-700 transition-all flex items-center gap-1.5 focus-visible:ring-2 focus-visible:ring-primary"
              >
                <span>Direct Mail</span>
                <ArrowUpRight size={14} className="text-secondary" />
              </a>
            </div>
          </div>

          {/* Right Column: Accessible Form */}
          <div className="lg:col-span-7">
            <motion.form
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#111827] p-7 sm:p-9 rounded-2xl border border-gray-800/90 shadow-2xl shadow-black/20 space-y-5"
              name="contact"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
            >
              <input type="hidden" name="form-name" value="contact" />
              <p className="hidden">
                <label>
                  Don&apos;t fill this out: <input name="bot-field" />
                </label>
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Name field with accessible label */}
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-xs font-medium text-textMuted mb-1.5"
                  >
                    Your Name <span className="text-primary">*</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    required
                    autoComplete="name"
                    placeholder="e.g. Alex Tan"
                    className={inputClasses}
                  />
                </div>

                {/* Email field with accessible label */}
                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-xs font-medium text-textMuted mb-1.5"
                  >
                    Your Email <span className="text-primary">*</span>
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    required
                    autoComplete="email"
                    placeholder="alex@example.com"
                    className={inputClasses}
                  />
                </div>
              </div>

              {/* Subject field with accessible label */}
              <div>
                <label
                  htmlFor="contact-subject"
                  className="block text-xs font-medium text-textMuted mb-1.5"
                >
                  Subject <span className="text-primary">*</span>
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  name="subject"
                  required
                  placeholder="e.g. Backend Engineer Opportunity"
                  className={inputClasses}
                />
              </div>

              {/* Message field with accessible label */}
              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-xs font-medium text-textMuted mb-1.5"
                >
                  Message <span className="text-primary">*</span>
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  placeholder="Share a few details about your project or role..."
                  rows={4}
                  className={`${inputClasses} resize-none`}
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status === "sending" || status === "sent"}
                className="w-full min-h-[48px] bg-primary hover:bg-primary-hover text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 shadow-lg shadow-primary/25 disabled:opacity-60 disabled:cursor-not-allowed focus-visible:ring-2 focus-visible:ring-secondary"
              >
                {status === "sending" ? (
                  <>
                    <span>Sending message...</span>
                    <Loader2 size={18} className="animate-spin" />
                  </>
                ) : status === "sent" ? (
                  <span>Message Sent Successfully!</span>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send size={16} />
                  </>
                )}
              </button>

              {/* Accessible Live Status Feedback */}
              <div role="status" aria-live="polite" className="pt-1">
                {status === "sent" && (
                  <motion.p
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-xs sm:text-sm text-emerald-400 text-center font-medium bg-emerald-500/10 border border-emerald-500/20 py-2.5 px-4 rounded-xl"
                  >
                    Thank you! Your message has been dispatched. I will reply
                    shortly.
                  </motion.p>
                )}

                {status === "error" && (
                  <motion.p
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-xs sm:text-sm text-amber-300 text-center font-medium bg-amber-500/10 border border-amber-500/20 py-2.5 px-4 rounded-xl"
                  >
                    Could not transmit via web form. Please email directly to{" "}
                    <a
                      href={`mailto:${portfolioData.intro.email}`}
                      className="underline font-bold text-white"
                    >
                      {portfolioData.intro.email}
                    </a>
                    .
                  </motion.p>
                )}
              </div>
            </motion.form>
          </div>
        </div>
      </div>

      {/* Footer Baseline */}
      <div className="border-t border-gray-800/80 py-8 text-center text-xs text-textMuted px-6">
        <p>
          &copy; {new Date().getFullYear()} {portfolioData.intro.name}. Engineered
          with Next.js &amp; Tailwind CSS.
        </p>
        <p className="mt-2 text-gray-500 font-mono text-[11px]">
          &ldquo;Code is like humor. When you have to explain it, it&apos;s
          bad.&rdquo; &mdash; Cory House
        </p>
      </div>
    </footer>
  );
}