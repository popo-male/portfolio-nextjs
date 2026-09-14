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

export interface AboutData {
  specialty: string;
  difference: string;
}

export type SkillDomain =
  | "backend"
  | "dataEngineering"
  | "AI"
  | "database"
  | "devOps"
  | "frontend";

export interface SkillItem {
  name: string;
  category: SkillDomain;
  categoryLabel: string;
  level: number;
  highlight?: boolean;
  context: string;
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
  responsibilities: string[]; // For backward compatibility
}

export interface EducationItem {
  id: number;
  institution: string;
  degree: string;
  cgpa: string;
  timeline: string;
  coursework: string;
}

export type ProjectCategory =
  | "All"
  | "Data Engineering"
  | "AI & Machine Learning"
  | "Full Stack & Web"
  | "Systems";

export interface ProjectItem {
  id: number;
  title: string;
  category: "Data Engineering" | "AI & Machine Learning" | "Full Stack & Web" | "Systems";
  description: string;
  problem: string;
  goal: string;
  features: string[];
  tech: string[];
  timeline: string;
  github: string;
  demo: string;
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
  about: AboutData;
  skills: {
    frontend: SkillItem[];
    backend: SkillItem[];
    database: SkillItem[];
    dataEngineering: SkillItem[];
    AI: SkillItem[];
    devOps: SkillItem[];
  };
  experience: ExperienceItem[];
  education: EducationItem[];
  projects: ProjectItem[];
  certificates: CertificateItem[];
}

export const portfolioData: PortfolioData = {
  intro: {
    name: "Koh Yu Bin",
    title: "Software Developer | Data Science Enthusiast",
    description: "I specialize in building backend architectures and integrating AI into production. I'm deeply interested in the intersection of software engineering and data science. I'm constantly exporing new ways to optimize performance and build data-driven applications.",
    location: "Kluang, Johor, Malaysia",
    email: "ybkoh5050@gmail.com",
    phone: "+6013-7993098",
    github: "https://github.com/popo-male",
    linkedin: "https://linkedin.com",
  },
  about: {
    specialty: "Software Engineer | Software Developer | Data Science Enthusiast",
    difference: "I combine robust backend engineering with data science workflows to build intelligent, data-driven applications."
  },
  skills: {
    backend: [
      { name: "Python", category: "backend", categoryLabel: "Backend & APIs", level: 95, highlight: true, context: "Core Language & Systems" },
      { name: "FastAPI", category: "backend", categoryLabel: "Backend & APIs", level: 90, highlight: true, context: "Asynchronous REST Microservices" },
      { name: "RESTful & SOAP APIs", category: "backend", categoryLabel: "Backend & APIs", level: 85, highlight: true, context: "Enterprise API Integration" },
      { name: "Flask", category: "backend", categoryLabel: "Backend & APIs", level: 85, context: "Lightweight Web Services" },
      { name: "Java", category: "backend", categoryLabel: "Backend & APIs", level: 80, context: "Object-Oriented Architectures" },
      { name: "JavaScript", category: "backend", categoryLabel: "Backend & APIs", level: 75, context: "Full-Stack Scripting" },
      { name: "Node.js", category: "backend", categoryLabel: "Backend & APIs", level: 60, context: "Runtime & CLI Scripts" },
      { name: "Prisma", category: "backend", categoryLabel: "Backend & APIs", level: 75, context: "Type-Safe ORM Querying" },
      { name: "JWT Authentication", category: "backend", categoryLabel: "Backend & APIs", level: 80, context: "Token Security & Authorization" },
      { name: "CLI Development", category: "backend", categoryLabel: "Backend & APIs", level: 80, context: "Developer Automation Tools" },
    ],
    dataEngineering: [
      { name: "ETL Pipelines", category: "dataEngineering", categoryLabel: "Data Engineering", level: 90, highlight: true, context: "Automated Data Ingestion & Transformation" },
      { name: "Apache Airflow", category: "dataEngineering", categoryLabel: "Data Engineering", level: 85, highlight: true, context: "DAG Workflow Scheduling & Orchestration" },
      { name: "PySpark", category: "dataEngineering", categoryLabel: "Data Engineering", level: 80, highlight: true, context: "Large-Scale Batch Data Processing" },
      { name: "Polars", category: "dataEngineering", categoryLabel: "Data Engineering", level: 80, context: "High-Performance DataFrames" },
      { name: "Data Validation (Great Expectations)", category: "dataEngineering", categoryLabel: "Data Engineering", level: 85, highlight: true, context: "Automated Data Contract Checks" },
      { name: "Data Visualization", category: "dataEngineering", categoryLabel: "Data Engineering", level: 80, context: "Reporting & Metric Dashboards" },
    ],
    AI: [
      { name: "Machine Learning", category: "AI", categoryLabel: "AI & Machine Learning", level: 85, highlight: true, context: "Supervised Modeling & Evaluation" },
      { name: "MLflow", category: "AI", categoryLabel: "AI & Machine Learning", level: 80, highlight: true, context: "Model Serving, Versioning & Tracking" },
      { name: "LLM & Agentic AI", category: "AI", categoryLabel: "AI & Machine Learning", level: 85, highlight: true, context: "Function Calling, Guardrails & Agents" },
      { name: "Deep Learning (CNN)", category: "AI", categoryLabel: "AI & Machine Learning", level: 75, context: "Computer Vision & 99.6% Accuracy" },
      { name: "NLP (VADER / Sentiment)", category: "AI", categoryLabel: "AI & Machine Learning", level: 80, context: "Lexical & Financial Sentiment Scoring" },
    ],
    database: [
      { name: "PostgreSQL", category: "database", categoryLabel: "Databases", level: 85, highlight: true, context: "Relational Modeling, Indexing & Schemas" },
      { name: "SQL", category: "database", categoryLabel: "Databases", level: 90, highlight: true, context: "Complex Joins, Aggregations & Query Plans" },
      { name: "MySQL", category: "database", categoryLabel: "Databases", level: 80, context: "Relational Storage & Transactions" },
      { name: "Elasticsearch", category: "database", categoryLabel: "Databases", level: 80, context: "Full-Text Search & Log Analytics" },
    ],
    devOps: [
      { name: "Docker", category: "devOps", categoryLabel: "DevOps & Infrastructure", level: 85, highlight: true, context: "Multi-Stage Builds & Containerization" },
      { name: "Linux / Ubuntu", category: "devOps", categoryLabel: "DevOps & Infrastructure", level: 90, highlight: true, context: "Server Administration & Shell Automation" },
      { name: "Git", category: "devOps", categoryLabel: "DevOps & Infrastructure", level: 95, highlight: true, context: "Branching Strategies & Version Control" },
      { name: "Nginx", category: "devOps", categoryLabel: "DevOps & Infrastructure", level: 75, context: "Reverse Proxy & Web Server Config" },
      { name: "CI/CD Automation", category: "devOps", categoryLabel: "DevOps & Infrastructure", level: 80, context: "Automated Deployment & Testing" },
    ],
    frontend: [
      { name: "React", category: "frontend", categoryLabel: "Frontend & Interfaces", level: 65, highlight: true, context: "Modern Component State & Hooks" },
      { name: "Tailwind CSS", category: "frontend", categoryLabel: "Frontend & Interfaces", level: 80, highlight: true, context: "Responsive & Modern Design Systems" },
      { name: "Streamlit", category: "frontend", categoryLabel: "Frontend & Interfaces", level: 85, highlight: true, context: "Interactive Data & AI Web Dashboards" },
      { name: "HTML & CSS", category: "frontend", categoryLabel: "Frontend & Interfaces", level: 75, context: "Semantic Markup & Accessibility" },
    ],
  },
  experience: [
    {
      id: 2,
      role: "Associate Engineer - Software",
      company: "GlobeOSS Sdn. Bhd.",
      location: "Malaysia",
      timeline: "Nov 2025 - Present",
      summary: "Leading core ETL data pipelines, Apache Airflow workflow scheduling, MLOps model serving with MLflow, and enterprise API architectures.",
      highlights: [
        {
          domain: "ETL & Data Engineering",
          title: "Production Ingestion & Batch Pipelines",
          description: "Engineered scalable data ingestion, transformation, and validation pipelines processing multi-source enterprise data streams.",
          keyTech: ["Python", "PySpark", "Polars", "ETL"],
        },
        {
          domain: "Workflow Automation",
          title: "Apache Airflow DAG Scheduling",
          description: "Designed, deployed, and scheduled automated DAG workflows with monitoring and alerting to support critical daily operations.",
          keyTech: ["Apache Airflow", "Cron Jobs"],
        },
        {
          domain: "MLOps & Model Serving",
          title: "MLflow Model Registry & Custom Wrappers",
          description: "Integrated MLflow for production model serving, experiment tracking, and authored custom model wrappers to standardize inference pipelines.",
          keyTech: ["MLflow", "Machine Learning", "Python"],
        },
        {
          domain: "Backend Systems",
          title: "RESTful & SOAP Enterprise APIs",
          description: "Architected robust RESTful and SOAP API layers facilitating high-reliability inter-system communication between enterprise applications.",
          keyTech: ["FastAPI", "SOAP APIs", "RESTful APIs", "PostgreSQL"],
        },
        {
          domain: "Server Infrastructure",
          title: "Linux Server Operations & Deployment",
          description: "Administered deployment, proactive monitoring, and troubleshooting on production Linux servers, maintaining optimal operational availability.",
          keyTech: ["Linux / Ubuntu", "Docker", "Server Monitoring"],
        },
      ],
      technologies: [
        "Apache Airflow",
        "MLflow",
        "Python",
        "PySpark",
        "FastAPI",
        "PostgreSQL",
        "Docker",
        "Linux",
      ],
      responsibilities: [
        "Developed and maintained ETL pipelines for data ingestion, transformation, and processing workflows.",
        "Implemented and scheduled automated workflows using Apache Airflow to support recurring business operations.",
        "Integrated MLflow for model serving, experiment tracking, and custom model wrapper implementation.",
        "Designed and developed backend application logic to support internal business solutions and operational systems.",
        "Developed SOAP and RESTful APIs for system integration and data communication between internal applications.",
        "Performed deployment, monitoring, and maintenance tasks on Linux servers to support application reliability and system operations.",
        "Collaborated in the development of internal enterprise applications tailored for business process automation and management."
      ],
    },
    {
      id: 1,
      role: "Developer / Engineer (Intern)",
      company: "GlobeOSS Sdn. Bhd.",
      location: "Malaysia",
      timeline: "Jun 2024 - Oct 2025",
      summary: "Engineered machine learning classification models, developed landing-zone monitoring automation, and enforced automated data quality gates.",
      highlights: [
        {
          domain: "Machine Learning",
          title: "Zero-Shot & XGBoost Classification Models",
          description: "Developed and evaluated zero-shot classification models for high-tech product identification and trained XGBoost models for company name matching.",
          keyTech: ["Zero-Shot Learning", "XGBoost", "Hugging Face"],
        },
        {
          domain: "Automated Ingestion",
          title: "\"Front Door\" Landing Zone Monitoring",
          description: "Engineered the \"Front Door\" ETL module utilizing Watchdog to continuously monitor landing zones, inspect incoming files, and standardize raw inputs.",
          keyTech: ["Watchdog", "Python", "ETL"],
        },
        {
          domain: "Data Quality Assurance",
          title: "Automated Schema & Contract Validation",
          description: "Implemented automated data quality checks and validation rules using Pydantic and Great Expectations to prevent pipeline anomalies.",
          keyTech: ["Great Expectations", "Pydantic", "Data Validation"],
        },
        {
          domain: "Experiment Versioning",
          title: "MLflow Tracking & Backend Automation",
          description: "Integrated MLflow for model experiment logging, metric tracking, and versioning across Dockerized environments with PostgreSQL.",
          keyTech: ["MLflow", "Docker", "PostgreSQL"],
        },
      ],
      technologies: [
        "Python",
        "PySpark",
        "XGBoost",
        "MLflow",
        "Great Expectations",
        "Pydantic",
        "Watchdog",
        "Docker",
      ],
      responsibilities: [
        "Developed and evaluated machine learning models, including zero-shot classification for high-tech product identification and XGBoost for company name matching.",
        "Integrated MLflow for experiment tracking and model versioning.",
        "Built backend modules for ETL pipelines, including \"Front Door\" system to monitor landing zones, validate file formats, and standardize data.",
        "Implemented data validation and quality checks using Pydantic and Great Expectations.",
        "Gained hands-on experience with Docker, PySpark, Watchdog, PostgreSQL, MySQL, and backend automation."
      ],
    },
  ],
  education: [
    {
      id: 1,
      institution: "Universiti Tunku Abdul Rahman, Kampar",
      degree: "Bachelor of Computer Science",
      cgpa: "3.2640",
      timeline: "Graduated",
      coursework: "Data Science, Artificial Intelligence, Software Development, Database Development, Programming & Systems, Web & Application Development"
    }
  ],
  projects: [
    {
      id: 1,
      title: "Stock Intelligence Platform",
      category: "AI & Machine Learning",
      description: "A premium, real-time market intelligence dashboard correlating financial news volume and sentiment trends with live stock market data.",
      problem: "Investors struggle to digest hundreds of daily headlines and identify emotional market shifts before they affect stock prices.",
      goal: "Provide a unified, highly interactive terminal to visualize news volume, historical sentiment trends, and live prices side-by-side.",
      features: [
        "Interactive 7-day sentiment trajectory line charts and news volume bar charts powered by Recharts.",
        "Custom hotness ranking algorithm weighting daily mention counts with absolute sentiment magnitudes.",
        "On-the-fly stock price, daily percent change, and trading volume synchronization using yfinance.",
        "Chronological article timelines featuring dynamic brand logo resolution and structured keyword tags."
      ],
      tech: ["React 19", "Vite", "Tailwind CSS 4", "Recharts", "FastAPI", "Python 3.13", "PostgreSQL", "yfinance", "Lucide React"],
      timeline: "Aug 2025 - Nov 2025",
      github: "https://github.com/popo-male/stock-intelligence-backend", 
      demo: "https://stock-intelligence-frontend-phi.vercel.app/", 
      image: "/stock_platform_light.png"
    },
    {
      id: 2,
      title: "Article Ingestion Pipeline",
      category: "Data Engineering",
      description: "An automated batch ingestion and NLP data processing pipeline that scrapes financial news feeds, scores sentiment, and extracts summaries.",
      problem: "Raw financial news feeds are noisy, repetitive, and lack structured metadata, sentiment indicators, or concise summaries.",
      goal: "Scrape, deduplicate, and enrich raw headlines into structured database records using lexical analyzer and LLM APIs.",
      features: [
        "RSS feed scraping loop with URL deduplication and automated PostgreSQL schema initialization.",
        "VADER sentiment analysis scoring engine generating bullish, bearish, and neutral confidence tags.",
        "OpenAI-compatible LLM processor extracting key 3-bullet insight summaries and relevant keywords.",
        "Production-ready batch execution flow with robust environment validation and strict error boundaries."
      ],
      tech: ["Python 3.13", "UV Package Manager", "VADER Sentiment Analysis", "OpenAI SDK", "PostgreSQL", "psycopg2", "Pydantic Settings", "feedparser"],
      timeline: "Jun 2025 - Sep 2025",
      github: "https://github.com/popo-male/article-ingestion-pipeline",
      demo: "",
      image: "/article_ingest.png"
    },
    {
      id: 3,
      title: "API Spec Document Agent",
      category: "AI & Machine Learning",
      description: "An intelligent, multi-agent AI system that parses raw OpenAPI/Swagger (JSON/YAML) and SOAP WSDL (XML) files to automatically generate comprehensive, premium-grade Markdown API documentation.",
      problem: "API documentation is notoriously tedious to write, maintain, and format consistently. Traditional generators struggle with circular reference schemas, and using vanilla LLMs often results in parameter hallucinations and fictitious payloads, making the generated documentation unreliable.",
      goal: "Automate high-quality, developer-focused API documentation generation by orchestrating a dedicated team of specialist agents, supported by a strict validation layer that auto-corrects parameter hallucinations in real-time.",
      features: [
        "Planner-Worker-Reviewer Agentic Architecture running distinct prompts and temperature configurations.",
        "Gemini Native Function Calling (Tool Use) for dynamic format detection and parsing dispatch.",
        "Custom Self-Correction Guardrail comparing generated markdown tables directly against the raw schema properties to automatically catch and retry hallucinated parameters.",
        "Recursive Circular Reference ($ref) resolver for deep or complex OpenAPI schemas.",
        "SOAP WSDL parser converting XML service definitions into clean HTTP POST operations with XML envelope signatures.",
        "Interactive Streamlit web dashboard with custom CSS, progress status logs, and Markdown download helpers."
      ],
      tech: [
        "Python 3.13",
        "Google GenAI SDK (Gemini 2.5 Flash / 3.1 Flash Lite)",
        "Streamlit",
        "Pydantic & Pydantic Settings",
        "Jinja2 (Markdown templating)",
        "Zeep (XML SOAP parser)",
        "PyYAML"
      ],
      timeline: "Jan 2026 - Mar 2026",
      github: "https://github.com/popo-male/api-doc-agent",
      demo: "https://api-doc-agent-mkl6ooaehxxce6znbc2qn9.streamlit.app/",
      image: "/api_doc_agent.png"
    },
    {
      id: 4,
      title: "Cardiovascular Risk Prediction",
      category: "AI & Machine Learning",
      description: "Machine learning models trained to accurately predict an individual’s cardiovascular risk based on multi-variate diagnostic records.",
      problem: "Identifying individuals at high risk for cardiovascular events early requires analyzing complex health data patterns.",
      goal: "Train and evaluate multiple machine learning algorithms to find the most accurate predictive model for cardiovascular health.",
      features: [
        "Preprocessed and cleaned health dataset for predictive modeling.",
        "Trained models using Decision Tree, Random Forest, Support Vector Classifier (SVC), and K-Nearest Neighbors (KNN).",
        "Compared and evaluated model performance metrics to determine the optimal prediction algorithm."
      ],
      tech: ["Python", "Machine Learning", "Scikit-Learn", "Random Forest", "SVC", "KNN"],
      timeline: "University Project",
      github: "", 
      demo: "", 
      image: "" 
    },
    {
      id: 5,
      title: "Books Rental Services Website",
      category: "Full Stack & Web",
      description: "A responsive web application that allows users to browse and rent books online with client-side session management.",
      problem: "Physical book rental systems lack digital convenience and struggle with tracking user sessions effectively without complex backends.",
      goal: "Develop a lightweight frontend application with robust client-side storage for seamless user data management.",
      features: [
        "Developed dynamic UI components using HTML, CSS, JavaScript, jQuery, and Bootstrap.",
        "Implemented robust client-side storage solutions utilizing cookies, local storage, and session storage.",
        "Managed user sessions and cart state entirely on the frontend without requiring a database."
      ],
      tech: ["HTML", "CSS", "JavaScript", "jQuery", "Bootstrap"],
      timeline: "University Project",
      github: "",
      demo: "",
      image: "/book_rental.png"
    },
    {
      id: 6,
      title: "Hospital Management System",
      category: "Systems",
      description: "A structured software architecture and Graphical User Interface (GUI) for managing hospital patient and clinical records.",
      problem: "Managing hospital operations requires a highly structured data model and an intuitive interface to prevent record mismanagement.",
      goal: "Design a comprehensive entity-relationship architecture and build a user-friendly application for record modification.",
      features: [
        "Designed comprehensive UML class diagrams to represent entities and relationships within the hospital structure.",
        "Developed a robust Graphical User Interface (GUI) using JavaFX.",
        "Enabled end-users to securely modify, add, and manage patient/staff records in the database."
      ],
      tech: ["Java", "JavaFX", "UML", "Database Management"],
      timeline: "University Project",
      github: "",
      demo: "",
      image: "/hospital_management.jpg"
    },
    {
      id: 7,
      title: "Traffic Sign Classification",
      category: "AI & Machine Learning",
      description: "A highly accurate Convolutional Neural Network (CNN) deep learning model for classifying traffic signs with 99.6% validation accuracy.",
      problem: "Autonomous vehicle systems require near-perfect accuracy in recognizing road signs to ensure passenger safety.",
      goal: "Design and implement a deep learning architecture capable of extracting visual features to classify traffic signs with extreme precision.",
      features: [
        "Processed and augmented image datasets for deep learning ingestion.",
        "Designed and implemented a custom Convolutional Neural Network (CNN) architecture.",
        "Achieved an exceptional classification accuracy of 0.996 on the validation dataset."
      ],
      tech: ["Deep Learning", "CNN", "Python", "Computer Vision"],
      timeline: "University Project",
      github: "",
      demo: "",
      image: "/traffic_sign_classification.jpg"
    }
  ],
  certificates: [
    {
      id: 1,
      name: "Data Visualization and Building Dashboards with Excel and Cognos",
      provider: "IBM",
      date: "May 2022",
      link: "https://courses.edx.org/certificates/ade0aa5ab8eb49abb0fa2d5c9eb0a428"
    },
    {
      id: 2,
      name: "Analyzing Data with Excel",
      provider: "IBM",
      date: "May 2022",
      link: "https://courses.edx.org/certificates/43e916e53a8b4fdbb84c8de1875fe300"
    },
    {
      id: 3,
      name: "Analyzing Data with Python",
      provider: "IBM",
      date: "March 2022",
      link: "https://courses.edx.org/certificates/6246835238e84d11a5eaf3493ba9333a"
    },
    {
      id: 4,
      name: "Data Analytics Basics for Everyone",
      provider: "IBM",
      date: "March 2022",
      link: "https://courses.edx.org/certificates/d72855540e144fda81ca0e1540abc665"
    },
    {
      id: 5,
      name: "Python Basics for Data Science",
      provider: "IBM",
      date: "January 2022",
      link: "https://courses.edx.org/certificates/f1fe2b905b8743369da8aafce0fa04ec"
    },
    {
      id: 6,
      name: "Azure Data Scientist Associate",
      provider: "Microsoft",
      date: "May 2026",
      link: "https://learn.microsoft.com/api/credentials/share/en-us/POPO-9279/EBA2D2FF39FC174D?sharingId=4D9E2E48FCEA5099"
    }
  ]
};