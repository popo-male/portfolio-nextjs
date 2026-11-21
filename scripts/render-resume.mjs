// Renders private/Resume.pdf into page images for the view-only CV modal.
// The PDF itself is never published: only the images in public/resume/ are.
//
//   npm run resume:build
//
import { mkdir, readFile, readdir, rm, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { createCanvas } from "@napi-rs/canvas";
import { getDocument } from "pdfjs-dist/legacy/build/pdf.mjs";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const SOURCE = join(root, "private", "Resume.pdf");
const OUT_DIR = join(root, "public", "resume");
const MANIFEST = join(root, "src", "data", "resume.json");
const TARGET_WIDTH = 1600; // px; sharp enough to read on a high-density screen

const data = new Uint8Array(await readFile(SOURCE));
const pdf = await getDocument({
  data,
  standardFontDataUrl: join(root, "node_modules/pdfjs-dist/standard_fonts/"),
  cMapUrl: join(root, "node_modules/pdfjs-dist/cmaps/"),
  cMapPacked: true,
}).promise;

// Start clean so a shorter CV does not leave stale pages behind
await rm(OUT_DIR, { recursive: true, force: true });
await mkdir(OUT_DIR, { recursive: true });

const pages = [];
for (let pageNumber = 1; pageNumber <= pdf.numPages; pageNumber++) {
  const page = await pdf.getPage(pageNumber);
  const scale = TARGET_WIDTH / page.getViewport({ scale: 1 }).width;
  const viewport = page.getViewport({ scale });
  const width = Math.round(viewport.width);
  const height = Math.round(viewport.height);

  const canvas = createCanvas(width, height);
  const context = canvas.getContext("2d");
  context.fillStyle = "#ffffff";
  context.fillRect(0, 0, width, height);
  await page.render({ canvasContext: context, viewport, canvas }).promise;

  const file = `page-${pageNumber}.webp`;
  await writeFile(join(OUT_DIR, file), await canvas.encode("webp", 88));
  pages.push({ src: `/resume/${file}`, width, height });
}

await writeFile(MANIFEST, JSON.stringify({ pages }, null, 2) + "\n");
console.log(
  `Rendered ${pages.length} page(s) to public/resume/:`,
  (await readdir(OUT_DIR)).join(", ")
);
