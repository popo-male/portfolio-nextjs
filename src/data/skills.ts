import type { SkillsData } from "@/types/portfolio";

/**
 * Skills section content.
 *
 * `coreStrengths` are the three headline areas and get the large cards.
 * `supporting` is everything else, shown as compact rows underneath.
 */
export const skillsData: SkillsData = {
  coreStrengths: [
    {
      id: "backend",
      file: "backend.py",
      title: "Backend Engineering",
      summary:
        "Designing and building the services, APIs and application logic that business systems run on.",
      competencies: [
        "Backend development",
        "API development & integration",
        "Web application development",
      ],
      toolGroups: [
        { label: "Core", tools: ["Python", "FastAPI", "Flask"] },
        { label: "Also", tools: ["Node.js", "Java", "Go"] },
      ],
    },
    {
      id: "data",
      file: "pipelines.py",
      title: "Data Engineering",
      summary:
        "Building automated pipelines that ingest, validate and transform data so it is reliable downstream.",
      competencies: ["ETL development", "Data pipeline automation"],
      toolGroups: [
        { label: "Orchestration", tools: ["Apache Airflow"] },
        { label: "Processing", tools: ["PySpark", "Polars", "Pandas", "SQL"] },
      ],
    },
    {
      id: "ai",
      file: "models.py",
      title: "AI & Machine Learning",
      summary:
        "Training models and integrating them into production systems, from classic ML to LLM agents.",
      competencies: [
        "Machine learning & deep learning",
        "NLP, LLMs & agentic AI",
        "MLOps",
      ],
      toolGroups: [
        {
          label: "ML & deep learning",
          tools: ["scikit-learn", "PyTorch", "TensorFlow"],
        },
        {
          label: "LLM & NLP",
          tools: ["Hugging Face", "LangChain", "LangGraph", "Ollama", "spaCy"],
        },
        { label: "MLOps", tools: ["MLflow"] },
      ],
    },
  ],
  supporting: [
    {
      label: "Languages",
      items: ["Python", "SQL", "Java", "JavaScript", "Go", "Bash"],
    },
    {
      label: "Databases & Search",
      items: ["PostgreSQL", "MySQL", "Elasticsearch"],
    },
    {
      label: "DevOps & CI/CD",
      items: [
        "Docker",
        "Git",
        "GitHub Actions",
        "GitLab CI/CD",
        "Azure DevOps",
      ],
    },
    {
      label: "Linux Administration",
      items: ["Ubuntu", "Bash scripting", "Nginx", "Cron jobs", "systemd"],
    },
    {
      label: "Data Analytics",
      items: [
        "Exploratory data analysis",
        "Feature engineering",
        "Data visualization",
      ],
    },
    {
      label: "Frontend",
      items: ["React", "Tailwind CSS", "HTML5", "CSS3", "Bootstrap"],
    },
  ],
};
