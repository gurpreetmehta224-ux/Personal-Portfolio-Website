/**
 * Projects Data Source
 * Array of project objects rendered dynamically using map() in React.
 * Includes categories and tags for filtering and searching.
 */

export const projectCategories = [
  { id: "all", label: "All Projects" },
  { id: "Web Development", label: "Web Development" },
  { id: "Machine Learning", label: "Machine Learning" },
  { id: "Hackathon", label: "Hackathon / AI" },
  { id: "Other", label: "Other" }
];

export const projectsData = [
  {
    id: "bus-scheduling-system",
    title: "Automated Bus Scheduling and Route Management System",
    category: "Machine Learning",
    badge: "ML & Analytics",
    status: "Completed",
    featured: true,
    description:
      "A data-driven system for travel-time prediction, route congestion analysis, and automated bus fleet scheduling. Utilizes regression and historical transit records to optimize inter-city route timings and reduce passenger waiting bottlenecks.",
    technologies: ["Python", "Machine Learning", "Data Analysis", "React/Frontend", "Pandas"],
    githubUrl: "https://github.com/gurpreet-mehta/automated-bus-scheduling",
    liveDemoUrl: "https://bus-scheduling-demo.example.com",
    metrics: "Reduced simulated transit delays by 18% with dynamic route allocation."
  },
  {
    id: "speech-therapy-ai",
    title: "AI-Powered Regional Language Speech Therapy",
    category: "Hackathon",
    badge: "Hackathon Winner",
    status: "Award Winning",
    featured: true,
    description:
      "An assistive speech assessment application providing real-time phonetic feedback and pronunciation scoring for regional Indian languages. Designed to assist children with speech articulation delays through interactive gamified audio exercises.",
    technologies: ["AI", "Machine Learning", "Speech Processing", "Python", "ReactJS", "FastAPI"],
    githubUrl: "https://github.com/gurpreet-mehta/regional-speech-therapy-ai",
    liveDemoUrl: "https://speech-therapy-ai.example.com",
    metrics: "Recognized as Best Healthcare Innovation at National Hackathon 2025."
  },
  {
    id: "oil-spill-detection",
    title: "Satellite-Based Oil Spill Detection & Vessel Identification",
    category: "Hackathon",
    badge: "Computer Vision",
    status: "Completed",
    featured: true,
    description:
      "A deep learning computer vision model leveraging Synthetic Aperture Radar (SAR) satellite imagery to pinpoint offshore oil slicks and correlate vessel transponder telemetry to identify potentially non-compliant maritime tankers.",
    technologies: ["Machine Learning", "Satellite Data", "Computer Vision", "Python", "OpenCV"],
    githubUrl: "https://github.com/gurpreet-mehta/satellite-oil-spill-detection",
    liveDemoUrl: "https://oil-spill-detect.example.com",
    metrics: "Achieved 91.4% segmentation IoU across multispectral marine test sets."
  },
  {
    id: "clinical-trial-matcher",
    title: "AI-Driven Clinical Trial Matching Engine",
    category: "Hackathon",
    badge: "Bioinformatics",
    status: "Completed",
    featured: true,
    description:
      "An automated patient-to-clinical-trial eligibility matching engine. Uses natural language processing to parse unstructured EHR physician notes against ClinicalTrials.gov eligibility criteria, drastically cutting trial screening delays.",
    technologies: ["AI", "Machine Learning", "FastAPI", "Streamlit", "NLP", "Python"],
    githubUrl: "https://github.com/gurpreet-mehta/clinical-trial-matching-engine",
    liveDemoUrl: "https://clinical-matcher.example.com",
    metrics: "Accelerated criteria cross-referencing from 45 mins to under 15 seconds."
  },
  {
    id: "campus-connect-portal",
    title: "Campus Connect - Peer Learning & Resource Portal",
    category: "Web Development",
    badge: "Web Platform",
    status: "Completed",
    featured: false,
    description:
      "A responsive student resource sharing and study-group platform developed for college departments. Features course notes sharing, peer tutoring schedules, event broadcasts, and offline browser bookmarking.",
    technologies: ["ReactJS", "JavaScript ES6+", "HTML5", "CSS3", "LocalStorage"],
    githubUrl: "https://github.com/gurpreet-mehta/campus-connect-platform",
    liveDemoUrl: "https://campus-connect.example.com",
    metrics: "Adopted by 300+ department peers for semester exam preparation."
  },
  {
    id: "eco-aqi-monitor",
    title: "Smart Urban Environmental & Air Quality Monitor",
    category: "Other",
    badge: "Geospatial Dashboard",
    status: "Completed",
    featured: false,
    description:
      "Interactive environmental monitoring dashboard visualising real-time Air Quality Index (AQI), PM2.5 particulates, and micro-climate parameters across municipal wards with predictive smog alerts.",
    technologies: ["JavaScript ES6+", "Chart.js", "CSS Grid", "REST API", "HTML5"],
    githubUrl: "https://github.com/gurpreet-mehta/urban-aqi-monitor",
    liveDemoUrl: "https://air-quality-monitor.example.com",
    metrics: "Real-time updates across 20+ sensor stations with sub-second UI rendering."
  }
];
