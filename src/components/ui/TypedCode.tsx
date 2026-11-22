"use client";

import { useEffect, useMemo, useState } from "react";

export interface CodeToken {
  text: string;
  /** Tailwind colour class for this token. */
  className?: string;
}

export interface TypedCodeLine {
  /** Indentation in characters. */
  indent?: number;
  tokens: CodeToken[];
}

const MS_PER_CHARACTER = 16;

/** Start offset of every token (counted across all lines) and the total length. */
function measure(lines: TypedCodeLine[]) {
  const lengths = lines.map((line) => line.tokens.map((t) => t.text.length));
  const flat = lengths.flat();
  const starts = flat.map((_, i) =>
    flat.slice(0, i).reduce((sum, n) => sum + n, 0),
  );
  let cursor = 0;
  const offsets = lengths.map((line) => {
    const lineStarts = starts.slice(cursor, cursor + line.length);
    cursor += line.length;
    return lineStarts;
  });
  return { offsets, total: flat.reduce((sum, n) => sum + n, 0) };
}

/**
 * Renders code lines with a typewriter effect and a blinking cursor.
 *
 * All text is in the DOM from the start (untyped characters are transparent),
 * so the card keeps its final size and nothing shifts while typing.
 */
export default function TypedCode({ lines }: { lines: TypedCodeLine[] }) {
  const { offsets, total } = useMemo(() => measure(lines), [lines]);
  const [typed, setTyped] = useState(0);
  const done = typed >= total;

  useEffect(() => {
    // People who prefer reduced motion get the finished text straight away
    const step = window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ? total
      : 1;
    const timer = setInterval(() => {
      setTyped((count) => {
        if (count >= total) {
          clearInterval(timer);
          return count;
        }
        return count + step;
      });
    }, MS_PER_CHARACTER);
    return () => clearInterval(timer);
  }, [total]);

  return (
    <>
      {lines.map((line, lineIndex) => (
        <div key={lineIndex} style={{ paddingLeft: `${line.indent ?? 0}ch` }}>
          {line.tokens.map((token, tokenIndex) => {
            const start = offsets[lineIndex][tokenIndex];
            const end = start + token.text.length;
            const visible = Math.max(
              0,
              Math.min(token.text.length, typed - start),
            );
            const cursorHere = typed >= start && typed < end && !done;

            return (
              <span key={tokenIndex} className={token.className}>
                {token.text.slice(0, visible)}
                {cursorHere && <Cursor />}
                <span className="opacity-0">{token.text.slice(visible)}</span>
              </span>
            );
          })}
          {done && lineIndex === lines.length - 1 && <Cursor />}
        </div>
      ))}
    </>
  );
}

/** Zero-width anchor so the cursor never pushes the text around. */
function Cursor() {
  return (
    <span
      aria-hidden="true"
      className="relative inline-block w-0 align-baseline"
    >
      <span className="absolute left-0 -top-[0.95em] w-[0.55em] h-[1.2em] bg-secondary/80 animate-pulse" />
    </span>
  );
}
