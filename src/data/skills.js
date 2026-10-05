/**
 * Skills Data Source
 * Categorized technical skills for the interactive Skills section.
 * Includes category tags for dynamic JavaScript filtering (filter method).
 */

export const skillCategories = [
  { id: "all", label: "All Skills" },
  { id: "programming", label: "Programming" },
  { id: "frontend", label: "Frontend" },
  { id: "backend", label: "Backend" },
  { id: "database", label: "Database" },
  { id: "aiml", label: "AI / ML" },
  { id: "tools", label: "Tools" }
];

export const skillsData = [
  // Programming Languages
  {
    id: "python",
    name: "Python",
    category: "programming",
    level: "Advanced",
    proficiency: 90,
    experience: "3+ years",
    description: "Core language for algorithmic problem solving, scripting, and machine learning pipelines."
  },
  {
    id: "javascript",
    name: "JavaScript (ES6+)",
    category: "programming",
    level: "Proficient",
    proficiency: 85,
    experience: "2+ years",
    description: "Modern asynchronous JS, closures, array manipulation, and DOM manipulation."
  },
  {
    id: "cpp",
    name: "C / C++",
    category: "programming",
    level: "Proficient",
    proficiency: 80,
    experience: "2+ years",
    description: "Object-oriented programming, memory management, and competitive data structures."
  },

  // Frontend
  {
    id: "react",
    name: "ReactJS",
    category: "frontend",
    level: "Proficient",
    proficiency: 88,
    experience: "2 years",
    description: "Functional components, Hooks (useState, useEffect), React Router, and modular design."
  },
  {
    id: "html5",
    name: "HTML5",
    category: "frontend",
    level: "Advanced",
    proficiency: 92,
    experience: "3 years",
    description: "Semantic web architecture, accessible markup (ARIA), forms, and modern audio/canvas."
  },
  {
    id: "css3",
    name: "CSS3 / Modern CSS",
    category: "frontend",
    level: "Proficient",
    proficiency: 88,
    experience: "3 years",
    description: "Flexbox, CSS Grid, media queries, CSS variables, transitions, and glassmorphism styling."
  },

  // Backend
  {
    id: "fastapi",
    name: "FastAPI",
    category: "backend",
    level: "Intermediate",
    proficiency: 75,
    experience: "1+ year",
    description: "High-performance Python asynchronous APIs with Pydantic validation and auto Swagger docs."
  },
  {
    id: "nodejs",
    name: "Node.js",
    category: "backend",
    level: "Intermediate",
    proficiency: 76,
    experience: "1.5 years",
    description: "Server-side JavaScript runtime, REST API creation, and npm dependency management."
  },

  // Database
  {
    id: "mysql",
    name: "MySQL",
    category: "database",
    level: "Proficient",
    proficiency: 82,
    experience: "2 years",
    description: "Relational database schema modeling, complex joins, indexing, and transactional queries."
  },
  {
    id: "mongodb",
    name: "MongoDB",
    category: "database",
    level: "Intermediate",
    proficiency: 74,
    experience: "1+ year",
    description: "NoSQL document collections, aggregation pipelines, and JSON document storage."
  },

  // AI / ML
  {
    id: "ml-core",
    name: "Machine Learning",
    category: "aiml",
    level: "Proficient",
    proficiency: 82,
    experience: "1.5 years",
    description: "Supervised and unsupervised learning, cross-validation, and model evaluation metrics."
  },
  {
    id: "data-prep",
    name: "Data Preprocessing",
    category: "aiml",
    level: "Proficient",
    proficiency: 85,
    experience: "2 years",
    description: "Feature scaling, one-hot encoding, missing value imputation, and Pandas dataframes."
  },
  {
    id: "regression",
    name: "Regression Modeling",
    category: "aiml",
    level: "Proficient",
    proficiency: 84,
    experience: "1.5 years",
    description: "Linear, polynomial, and logistic regression with residual analysis and regularization."
  },
  {
    id: "random-forest",
    name: "Random Forest & Ensembles",
    category: "aiml",
    level: "Proficient",
    proficiency: 80,
    experience: "1+ year",
    description: "Bagging algorithms, decision trees, hyperparameter tuning, and feature importance."
  },
  {
    id: "data-analysis",
    name: "Data Analysis (Pandas / NumPy)",
    category: "aiml",
    level: "Advanced",
    proficiency: 88,
    experience: "2+ years",
    description: "Exploratory data analysis (EDA), Matplotlib/Seaborn visualization, and matrix operations."
  },

  // Tools
  {
    id: "git",
    name: "Git",
    category: "tools",
    level: "Advanced",
    proficiency: 88,
    experience: "3 years",
    description: "Version control workflows, branching strategies, rebasing, and merge resolution."
  },
  {
    id: "github",
    name: "GitHub",
    category: "tools",
    level: "Advanced",
    proficiency: 88,
    experience: "3 years",
    description: "Remote repository hosting, pull requests, issue tracking, and GitHub Pages deployments."
  },
  {
    id: "vscode",
    name: "VS Code",
    category: "tools",
    level: "Advanced",
    proficiency: 92,
    experience: "3 years",
    description: "Debugging, extensions, integrated terminal, Emmet shortcuts, and linting tools."
  },
  {
    id: "streamlit",
    name: "Streamlit",
    category: "tools",
    level: "Proficient",
    proficiency: 82,
    experience: "1.5 years",
    description: "Rapid interactive ML dashboard and proof-of-concept web application prototyping."
  }
];
