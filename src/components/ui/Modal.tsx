"use client";

import { useEffect, useId, useRef, type ReactNode } from "react";
import { X } from "lucide-react";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  subtitle?: string;
  /** Pinned below the scrollable body. */
  footer?: ReactNode;
  children: ReactNode;
  /** Width / height utilities for the dialog box. */
  sizeClassName?: string;
  /** Utilities for the scrollable body. */
  bodyClassName?: string;
}

/**
 * Modal built on the native <dialog>, which provides the focus trap,
 * Escape-to-close and the backdrop for free.
 */
export default function Modal({
  open,
  onClose,
  title,
  subtitle,
  footer,
  children,
  sizeClassName = "max-w-3xl max-h-[calc(100dvh-1.5rem)] sm:max-h-[calc(100dvh-4rem)]",
  bodyClassName = "p-5 sm:p-7",
}: ModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const titleId = useId();

  // Keep the native dialog in sync with the `open` prop and lock page scroll
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog || !open) return;

    dialog.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      dialog.close();
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby={titleId}
      // Fires for Escape as well as dialog.close()
      onClose={onClose}
      // A click on the backdrop targets the dialog element itself
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
      className={`m-auto w-[calc(100vw-1.5rem)] p-0 rounded-2xl border border-gray-800 bg-surface text-textMain shadow-2xl shadow-black/60 overflow-hidden backdrop:bg-black/75 backdrop:backdrop-blur-sm ${sizeClassName}`}
    >
      {/* Content is mounted only while open so heavy children load on demand */}
      {open && (
        <div className="flex flex-col h-full max-h-[inherit]">
          <div className="flex items-center justify-between gap-4 px-5 py-3.5 border-b border-gray-800 bg-background/60 shrink-0">
            <div className="min-w-0">
              <h2
                id={titleId}
                className="text-base sm:text-lg font-bold text-white truncate"
              >
                {title}
              </h2>
              {subtitle && (
                <p className="text-xs text-textMuted truncate">{subtitle}</p>
              )}
            </div>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close dialog"
              className="w-10 h-10 shrink-0 flex items-center justify-center rounded-xl bg-surface border border-gray-800 text-textMuted hover:text-white hover:border-gray-600 transition-colors cursor-pointer"
            >
              <X size={18} />
            </button>
          </div>

          <div
            className={`flex-1 min-h-0 overflow-y-auto overscroll-contain ${bodyClassName}`}
          >
            {children}
          </div>

          {footer && (
            <div className="px-5 py-3.5 border-t border-gray-800 bg-background/60 shrink-0">
              {footer}
            </div>
          )}
        </div>
      )}
    </dialog>
  );
}
