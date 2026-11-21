import { ImageResponse } from "next/og";
import { portfolioData } from "@/data/portfolio";

// Link-preview image (LinkedIn, WhatsApp, Slack, ...), generated at build time.
export const alt = `${portfolioData.intro.name} | ${portfolioData.intro.title}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  const { intro } = portfolioData;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          backgroundColor: "#0b0f19",
          backgroundImage:
            "radial-gradient(circle at 85% 15%, rgba(139,92,246,0.35), transparent 45%), radial-gradient(circle at 10% 100%, rgba(56,189,248,0.25), transparent 45%)",
          color: "#f8fafc",
        }}
      >
        <div style={{ display: "flex", fontSize: 30, color: "#94a3b8" }}>
          Portfolio
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 96, fontWeight: 700 }}>
            {intro.name}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 40,
              color: "#38bdf8",
              marginTop: 12,
            }}
          >
            {intro.title}
          </div>
        </div>

        <div style={{ display: "flex", fontSize: 28, color: "#94a3b8" }}>
          {[...intro.focusAreas, ...intro.coreStack.slice(0, 3)].join("  ·  ")}
        </div>
      </div>
    ),
    size
  );
}
