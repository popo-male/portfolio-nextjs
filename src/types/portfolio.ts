export interface IntroData {
  name: string;
  title: string;
  description: string;
  location: string;
  email: string;
  phone: string;
  github: string;
  linkedin: string;
}

export interface WorkHighlight {
  domain: string;
  title: string;
  description: string;
  keyTech: string[];
}

export interface ExperienceItem {
  id: number;
  role: string;
  company: string;
  location: string;
  timeline: string;
  summary: string;
  highlights: WorkHighlight[];
  technologies: string[];
}

export interface EducationItem {
  id: number;
  institution: string;
  degree: string;
  cgpa: string;
  timeline: string;
  coursework: string;
}

export const PROJECT_CATEGORIES = [
  "AI & Machine Learning",
  "Data Engineering",
  "Full Stack & Web",
  "Systems",
] as const;

export type ProjectCategory = (typeof PROJECT_CATEGORIES)[number];

export interface ProjectItem {
  id: number;
  title: string;
  category: ProjectCategory;
  description: string;
  problem: string;
  goal: string;
  features: string[];
  tech: string[];
  timeline: string;
  /** Empty string when there is no public repository. */
  github: string;
  /** Empty string when there is no live demo. */
  demo: string;
  /** Path under /public; empty string renders the fallback banner. */
  image: string;
}

export interface CertificateItem {
  id: number;
  name: string;
  provider: string;
  date: string;
  link: string;
}

export interface PortfolioData {
  intro: IntroData;
  experience: ExperienceItem[];
  education: EducationItem[];
  projects: ProjectItem[];
  certificates: CertificateItem[];
}
