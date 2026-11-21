"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { FileText, Mail, X } from "lucide-react";
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
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  // Lock page scroll behind the dialog
  useEffect(() => {
    if (!isOpen) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const open = () => {
    setIsOpen(true);
    dialogRef.current?.showModal();
  };

  const close = () => dialogRef.current?.close();

  return (
    <>
      <button type="button" onClick={open} className={className}>
        <FileText size={18} className="text-secondary" />
        <span>View CV</span>
      </button>

      <dialog
        ref={dialogRef}
        aria-labelledby="resume-dialog-title"
        onClose={() => setIsOpen(false)}
        // A click on the backdrop targets the dialog element itself
        onClick={(event) => {
          if (event.target === event.currentTarget) close();
        }}
        className="m-auto w-[calc(100vw-1.5rem)] max-w-4xl h-[calc(100dvh-1.5rem)] sm:h-[calc(100dvh-4rem)] p-0 rounded-2xl border border-gray-800 bg-surface text-textMain shadow-2xl shadow-black/60 overflow-hidden backdrop:bg-black/75 backdrop:backdrop-blur-sm"
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between gap-4 px-5 py-3.5 border-b border-gray-800 bg-background/60 shrink-0">
            <div className="min-w-0">
              <h2
                id="resume-dialog-title"
                className="text-base font-bold text-white truncate"
              >
                {intro.name}{" "}&mdash; CV
              </h2>
              <p className="text-xs text-textMuted">View only</p>
            </div>
            <button
              type="button"
              onClick={close}
              aria-label="Close CV viewer"
              className="w-10 h-10 shrink-0 flex items-center justify-center rounded-xl bg-surface border border-gray-800 text-textMuted hover:text-white hover:border-gray-600 transition-colors"
            >
              <X size={18} />
            </button>
          </div>

          {/* Pages. Rendered only while open so the images are not fetched up front. */}
          <div
            className="flex-1 overflow-y-auto overscroll-contain bg-background p-3 sm:p-6 space-y-4 sm:space-y-6 select-none"
            onContextMenu={(event) => event.preventDefault()}
            onDragStart={(event) => event.preventDefault()}
          >
            {isOpen &&
              resume.pages.map((page, index) => (
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

          {/* Footer */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 px-5 py-3.5 border-t border-gray-800 bg-background/60 shrink-0">
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
        </div>
      </dialog>
    </>
  );
}
