import type { PortfolioData } from "@/types/portfolio";

export const portfolioData: PortfolioData = {
  intro: {
    name: "Koh Yu Bin",
    title: "Software & AI System Engineer",
    description: "I specialize in building backend architectures and integrating AI into production. I'm deeply interested in the intersection of software engineering and data science. I'm constantly exploring new ways to optimize performance and build data-driven applications.",
    location: "Kluang, Johor, Malaysia",
    email: "ybkoh5050@gmail.com",
    whatsapp: "https://wa.me/60137993098",
    github: "https://github.com/popo-male",
    // TODO: add the LinkedIn profile URL; the icon stays hidden while this is empty
    linkedin: "",
    focusAreas: ["Backend APIs", "Web Application", "ETL Pipelines", "MLOps"],
    coreStack: ["Python", "FastAPI", "Airflow", "PySpark", "PostgreSQL"],
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
      image: "/book_rental.jpg"
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
