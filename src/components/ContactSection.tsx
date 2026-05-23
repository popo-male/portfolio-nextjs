"use client";
import type { FormEvent } from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send, MapPin, Loader2 } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { portfolioData } from "@/lib/data";

export default function ContactSection() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );

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
        throw new Error("Form submission failed");
      }

      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  // Shared classes for inputs to keep the code clean
  const inputClasses = "w-full bg-surface border border-gray-800 rounded-lg px-4 py-3 text-textMain focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-gray-600";

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
            <h3 className="text-4xl font-bold mb-6">
              Let&apos;s work together!
            </h3>
            <p className="text-textMuted mb-8 leading-relaxed">
              I&apos;m always open to discussing new opportunities, creative
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
                href="#" // Update with your actual GitHub link
                className="p-3 bg-surface border border-gray-800 rounded-lg hover:border-primary hover:text-primary transition shadow-sm hover:shadow-[0_0_15px_rgba(139,92,246,0.3)]"
              >
                <FaGithub size={20} />
              </a>
              <a
                href="#" // Update with your actual LinkedIn link
                className="p-3 bg-surface border border-gray-800 rounded-lg hover:border-secondary hover:text-secondary transition shadow-sm hover:shadow-[0_0_15px_rgba(59,130,246,0.3)]"
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
              <input
                type="text"
                name="name"
                required
                placeholder="Your Name"
                className={inputClasses}
              />
              <input
                type="email"
                name="email"
                required
                placeholder="Your Email"
                className={inputClasses}
              />
            </div>
            
            <input
              type="text"
              name="subject"
              required
              placeholder="Subject"
              className={inputClasses}
            />
            
            <textarea
              name="message"
              required
              placeholder="Your Message"
              rows={5}
              className={`${inputClasses} resize-none`}
            ></textarea>

            <button 
              type="submit" 
              disabled={status === "sending" || status === "sent"}
              className="w-full bg-primary hover:bg-primary/90 text-white font-medium py-3 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(139,92,246,0.3)] disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:bg-primary"
            >
              {status === "sending" ? (
                <>Sending... <Loader2 size={18} className="animate-spin" /></>
              ) : status === "sent" ? (
                "Message Sent!"
              ) : (
                <>Send Message <Send size={18} /></>
              )}
            </button>

            {/* Status Messages */}
            {status === "sent" && (
              <motion.p 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-sm text-green-400 text-center font-medium mt-2"
              >
                Thanks! Your message has been sent successfully.
              </motion.p>
            )}
            {status === "error" && (
              <motion.p 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-sm text-red-400 text-center font-medium mt-2"
              >
                Something went wrong. Please try again or email me directly.
              </motion.p>
            )}
          </motion.form>
        </div>
      </div>

      {/* Deep Footer */}
      <div className="border-t border-gray-800 py-8 text-center text-sm text-gray-500">
        <p>
          © {new Date().getFullYear()} {portfolioData.intro.name}. All rights reserved.
        </p>
        <p className="mt-2 italic">
          &quot;Code is like humor. When you have to explain it, it&apos;s bad.&quot; - Cory House
        </p>
      </div>
    </footer>
  );
}