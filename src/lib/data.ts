export const portfolioData = {
  intro: {
    name: "Koh Yu Bin",
    title: "Software Developer | Data Science Enthusiast",
    description: "Software Engineer with experience in backend development, ETL systems, and machine learning solutions. Worked on building data processing pipelines, APIs development, and automation systems using Python, PostgreSQL, Docker, and PySpark. Passionate about developing scalable systems and continuously improving technical skills.",
    location: "Kluang, Johor, Malaysia",
    email: "ybkoh5050@gmail.com",
    phone: "013-7993098",
  },
  about: {
    specialty: "Software Engineer | Software Developer | Data Science Enthusiast",
    difference: "I combine robust backend engineering with data science workflows to build intelligent, data-driven applications."
  },
  skills: {
    frontend: [
      { name: "React", level: 50 },
      { name: "HTML", level: 70 },
      { name: "CSS", level: 70 },
      { name: "Streamlit", level: 80 },
    ],
    backend: [
      { name: "Node.js", level: 50 },
      { name: "FastAPI", level: 90 },
      { name: "Flask", level: 85 },
      { name: "Python", level: 95 },
      { name: "Java", level: 80 },
      { name: "JavaScript", level: 70 },
      { name: "Prisma", level: 75 },
      { name: "JWT Authentication", level: 80 },
      { name: "CLI Development", level: 80 },
      { name: "Cron Jobs", level: 90 },
    ],
    database: [
      { name: "PostgreSQL", level: 80 },
      { name: "MySQL", level: 80 },
      { name: "SQL", level: 90 },
      { name: "Elasticsearch", level: 80 },
    ],
     dataEngineering: [
      { name: "ETL Pipeline", level: 90 },
      { name: "Polars", level: 80 },
      { name: "Data Analysis", level: 85 },
      { name: "Data Visualization", level: 75 },
    ],
    AI: [
      { name: "Machine Learning", level: 80 },
      { name: "Deep Learning", level: 65 },
      { name: "NLP", level: 75 },
      { name: "MLflow", level: 75 },
    ],
    devOps: [
      { name: "Docker", level: 80 },
      { name: "Nginx", level: 75 },
      { name: "Git", level: 95 },
      { name: "Linux", level: 85 },
      { name: "Ubuntu", level: 85 },
    ],
  },
  experience: [
    {
      id: 1,
      role: "Developer / Engineer",
      company: "GlobeOSS Sdn. Bhd.",
      timeline: "Jun 2024 - Oct 2025",
      responsibilities: [
        "Developed and evaluated machine learning models, including zero-shot classification for high-tech product identification and XGBoost for company name matching ",
        "Integrated MLflow for experiment tracking and model versioning ",
        "Build backend modules for ETL pipelines, including “Front Door” system to monitor landing zones, validate file formats and standardize data",
        "Implemented data validation and quality checks using Pydantic and Great Expectations",
        "Gained hands-on experience with Docker, PySpark, Watchdog, PostgreSQL, MySQL and backend automation"
      ]
    },
    {
      id: 2,
      role: "Associate Engineer - Software",
      company: "GlobeOSS Sdn. Bhd.",
      timeline: "Nov 2025 - Currently Working",
      responsibilities: [
        "Developed and maintained ETL pipelines for data ingestion, transformation and processing workflows",
        "Implemented and scheduled automated workflows using Apache Airflow to support recurring business operations",
        "Integrated MLflow for model serving, experiment tracking and custom model wrapper implementation",
        "Designed and developed backend application logic to support internal business solutions and operational systems",
        "Developed SOAP and RESTful APIs for system integration and data communication between internal applications",
        "Performed deployment, monitoring and maintenance tasks on Linux servers to support application reliability and system operations",
        "Collaborated in the development of internal enterprise applications tailored for business process automation and management"
      ]
    }
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
      description: "Machine learning models trained to accurately predict an individual’s cardiovascular risk.",
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
      image: "" // Add your generated image path here later
    },
    {
      id: 5,
      title: "Books Rental Services Website",
      description: "A responsive web application that allows users to browse and rent books online.",
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
      description: "A structured software architecture and Graphical User Interface (GUI) for managing hospital records.",
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
      description: "A highly accurate Convolutional Neural Network (CNN) deep learning model for classifying traffic signs.",
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
    }
  ]
};