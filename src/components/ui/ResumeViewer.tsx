"use client";

import { useState } from "react";
import Image from "next/image";
import { FileText, Mail } from "lucide-react";
import Modal from "@/components/ui/Modal";
import { portfolioData } from "@/data/portfolio";
import resume from "@/data/resume.json";

const { intro } = portfolioData;

const requestHref = `mailto:${intro.email}?subject=${encodeURIComponent(
  `Resume Request - ${intro.name}`
)}`;

/**
 * "View CV" button that opens the CV in a view-only dialog.
 *
 * The CV is shipped as page images (see scripts/render-resume.mjs), never as
 * the PDF, so there is no file to download and no text to copy or edit.
 */
export default function ResumeViewer({ className }: { className?: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className={className}
      >
        <FileText size={18} className="text-secondary" />
        <span>View CV</span>
      </button>

      <Modal
        open={isOpen}
        onClose={() => setIsOpen(false)}
        title={`${intro.name} — CV`}
        subtitle="View only"
        sizeClassName="max-w-4xl h-[calc(100dvh-1.5rem)] sm:h-[calc(100dvh-4rem)]"
        bodyClassName="bg-background p-3 sm:p-6"
        footer={
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-xs sm:text-sm text-textMuted text-center sm:text-left">
              Need a copy? Send me a request by email.
            </p>
            <a
              href={requestHref}
              className="min-h-[40px] px-5 py-2 bg-primary text-white text-sm font-semibold rounded-xl hover:bg-primary-hover transition-colors flex items-center gap-2 shrink-0"
            >
              <Mail size={16} />
              <span>Request CV</span>
            </a>
          </div>
        }
      >
        <div
          className="space-y-4 sm:space-y-6 select-none"
          onContextMenu={(event) => event.preventDefault()}
          onDragStart={(event) => event.preventDefault()}
        >
          {resume.pages.map((page, index) => (
            <div
              key={page.src}
              className="relative mx-auto max-w-3xl rounded-lg overflow-hidden shadow-xl shadow-black/40 bg-white"
            >
              <Image
                src={page.src}
                alt={`CV page ${index + 1} of ${resume.pages.length}`}
                width={page.width}
                height={page.height}
                sizes="(min-width: 768px) 768px, 100vw"
                draggable={false}
                priority={index === 0}
                className="w-full h-auto pointer-events-none"
              />
              {/* Shield: long-press / right-click lands here, not on the image */}
              <div aria-hidden="true" className="absolute inset-0" />
            </div>
          ))}
        </div>
      </Modal>
    </>
  );
}
