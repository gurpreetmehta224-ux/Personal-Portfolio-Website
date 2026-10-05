/**
 * Central Profile Configuration
 * Edit personal details here to update them across the entire portfolio website.
 */

export const profileData = {
  // Basic Personal Information
  name: "Gurpreet Singh Mehta",
  role: "Full Stack Developer & AI Enthusiast",
  degree: "B.Tech Computer Science and Engineering",
  year: "3rd Year",
  institution: "SRM Institute of Science and Technology",
  location: "Chennai, India",
  email: "gurpreet.mehta@example.com", // Replace with your email
  phone: "+91 98765 43210",
  github: "https://github.com/gurpreet-mehta", // Replace with your GitHub
  linkedin: "https://linkedin.com/in/gurpreet-mehta", // Replace with your LinkedIn
  twitter: "https://twitter.com/gurpreet_dev",

  // Short Introductions
  shortBio:
    "3rd-year Computer Science undergraduate at SRM Institute of Science and Technology with a deep passion for full-stack web development, intelligent systems, and scalable software architectures.",
  
  aboutNarrative: [
    "Hello! I am Gurpreet Singh Mehta, a passionate 3rd-year B.Tech CSE student at SRM Institute of Science and Technology with a keen interest in building impactful software solutions. My journey spans full-stack web development with ReactJS and Node.js to experimenting with machine learning algorithms and intelligent data systems.",
    "I love turning complex engineering problems into clean, accessible, and intuitive digital experiences. Whether collaborating in 36-hour hackathons, building predictive models, or architecting modular web applications, I bring curious problem-solving and rigorous attention to detail.",
    "Currently looking for software engineering internships and collaborative research projects where I can contribute to real-world codebases, learn from industry mentors, and push technical boundaries."
  ],

  // Career Objective
  careerObjective:
    "To obtain a challenging Software Development Engineering internship where I can apply my foundation in Data Structures, ReactJS, Machine Learning, and Cloud engineering to craft efficient, user-centric digital products while expanding my technical horizons in production-grade systems.",

  // Quick Key Statistics for Hero & About sections
  statistics: [
    { label: "Projects Completed", value: "12+", description: "Production & academic builds" },
    { label: "Technologies", value: "16+", description: "Languages, frameworks & tools" },
    { label: "Academic Standing", value: "3rd Year", description: "B.Tech CSE @ SRM IST" },
    { label: "Hackathons & Events", value: "4+", description: "National level participation" }
  ],

  // Academic Timeline & Milestones
  education: [
    {
      degree: "B.Tech in Computer Science and Engineering",
      institution: "SRM Institute of Science and Technology, Kattankulathur",
      period: "2023 — Present (Graduation: 2027)",
      score: "CGPA: 9.12 / 10.0",
      description:
        "Relevant Coursework: Data Structures & Algorithms, Object-Oriented Programming, Database Management Systems, Web Technologies, Computer Networks, Operating Systems, Machine Learning Foundations.",
      current: true
    },
    {
      degree: "Higher Secondary Certificate (Grade XII)",
      institution: "Delhi Public School",
      period: "2021 — 2023",
      score: "Aggregate: 94.6%",
      description:
        "Specialized in Physics, Chemistry, Mathematics, and Computer Science (Python & SQL foundations).",
      current: false
    },
    {
      degree: "Secondary School Examination (Grade X)",
      institution: "Delhi Public School",
      period: "2019 — 2021",
      score: "Aggregate: 95.2%",
      description: "Excelled in Science and Mathematics with school merit recognition.",
      current: false
    }
  ],

  // Areas of Interest
  technicalInterests: [
    "Full-Stack Web Architectures",
    "Applied Machine Learning & NLP",
    "Responsive & Accessible UI/UX Design",
    "RESTful API Design & Microservices",
    "Cloud & Serverless Computing",
    "Open Source Collaboration"
  ],

  // Resume Download Config
  resumeUrl: "#resume-modal" // opens preview modal or downloadable PDF simulation
};
