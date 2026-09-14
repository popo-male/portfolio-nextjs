import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Koh Yu Bin | Software Engineer & Data Science Enthusiast",
  description:
    "Portfolio of Koh Yu Bin, Associate Software Engineer specializing in backend systems, ETL pipelines, automated workflows, and machine learning solutions using Python, PostgreSQL, PySpark, and Docker.",
  keywords: [
    "Koh Yu Bin",
    "Software Engineer",
    "Backend Developer",
    "Data Science Enthusiast",
    "ETL Pipeline",
    "Apache Airflow",
    "PySpark",
    "FastAPI",
    "Python",
    "PostgreSQL",
    "Docker",
    "Machine Learning",
    "Next.js"
  ],
  authors: [{ name: "Koh Yu Bin" }],
  openGraph: {
    title: "Koh Yu Bin | Software Engineer & Data Science Enthusiast",
    description:
      "Explore engineering projects in backend systems, ETL pipelines, and machine learning solutions.",
    type: "website",
    locale: "en_US",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {/* WCAG 2.2 Skip-to-content Link */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2.5 focus:bg-primary focus:text-white focus:rounded-lg focus:shadow-2xl focus:outline-none focus:ring-2 focus:ring-secondary text-sm font-medium transition-transform"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
