import {
  Code2,
  Database,
  Globe,
  Wrench,
  Brain,
  Briefcase,
  GraduationCap,
} from "lucide-react";

export const PERSONAL_INFO = {
  name: "Sathvik R K",
  role: "Full Stack Developer",
  tagline: "Building scalable web applications with modern technologies",
  email: "sathvik.rk2002@gmail.com",
  github: "https://github.com/Sathvikrk2002",
  linkedin: "https://www.linkedin.com/in/sathvik-rk/",
  resumeUrl:
    "https://drive.google.com/file/d/1xThk9SDWC6jVGaAwMJZWSxY1qf0m0sj7/view?usp=sharing",
  photoUrl: "/src/assets/Sathvik R K.jpg",
};

export const ABOUT = {
  summary:
    "Full Stack Developer skilled in Java, Spring Boot, and React, with a strong foundation in DSA and OOP. Experienced in building scalable, end-to-end web applications with clean, maintainable code and modern, responsive UIs.",
};

export const SKILLS = [
  {
    category: "Programming",
    icon: Code2,
    items: ["Java", "Python", "JavaScript"],
    color: "from-neon-blue to-neon-cyan",
  },
  {
    category: "Frameworks",
    icon: Globe,
    items: ["Spring Boot", "Hibernate", "React"],
    color: "from-neon-purple to-neon-pink",
  },
  {
    category: "Web Technologies",
    icon: Globe,
    items: ["HTML", "CSS", "JSP", "Servlets"],
    color: "from-neon-cyan to-neon-blue",
  },
  {
    category: "Database",
    icon: Database,
    items: ["MySQL"],
    color: "from-neon-pink to-neon-purple",
  },
  {
    category: "Tools & Version Control",
    icon: Wrench,
    items: ["Git", "GitHub"],
    color: "from-neon-blue to-neon-purple",
  },
  {
    category: "Core Computer Science",
    icon: Code2,
    items: ["Data Structures", "Algorithms", "OOP"],
    color: "from-neon-purple to-neon-cyan",
  },
  {
    category: "AI Tools",
    icon: Brain,
    items: ["Prompt Engineering", "ChatGPT", "Gemini", "Copilot", "Perplexity"],
    color: "from-neon-cyan to-neon-pink",
  },
];

export const PROJECTS = [
  {
    title: "Food Delivery Web Application",
    description:
      "Built a full-stack food ordering system using Java, JSP, Servlets, MySQL with secure authentication and order workflows.",
    tech: ["Java", "JSP", "Servlets", "MySQL", "HTML", "CSS"],
    github:
      "https://github.com/Sathvikrk2002/Food-Delivery-Web-Application-Full-Stack-Project",
    demo: "https://www.linkedin.com/feed/update/urn:li:activity:7396184703546011648?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_projects_details%3BiKtxQh%2FmSe%2Bt%2BZzDQzd2Rg%3D%3D",
    highlights: [
      "User authentication and session management",
      "Dynamic restaurant and menu browsing",
      "Shopping cart with real-time updates",
      "Order history and tracking system",
    ],
  },
  {
    title: "Full-Stack E-Commerce Platform",
    description:
      "Built a production-ready E-Commerce app with secure auth, role-based access, product CRUD, cart, order management using Spring Boot & React.",
    tech: ["Spring Boot", "React", "MySQL", "Tailwind CSS", "REST API"],
    github: "https://github.com/Sathvikrk2002/Full-Stack-E-Commerce-Platform",
    demo: "https://www.linkedin.com/feed/update/urn:li:activity:7405131404197609472?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_projects_details%3BiKtxQh%2FmSe%2Bt%2BZzDQzd2Rg%3D%3D",
    highlights: [
      "RESTful API with Spring Boot",
      "JWT-based authentication",
      "Responsive React frontend with Tailwind",
      "Admin panel for product management",
    ],
  },
  {
    title: "Smart Todo Manager",
    description:
      "Built a responsive Todo application with add, delete, and complete-toggle features using React state management.",
    tech: ["React", "JavaScript", "LocalStorage", "CSS"],
    github: "https://github.com/Sathvikrk2002/Smart-Todo-Manager-React-App",
    demo: "https://www.linkedin.com/feed/update/urn:li:activity:7402241633221844992?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_projects_details%3BiKtxQh%2FmSe%2Bt%2BZzDQzd2Rg%3D%3D",
    highlights: [
      "Clean and intuitive UI",
      "Task filtering and sorting",
      "Persistent storage with LocalStorage",
      "Responsive design for all devices",
    ],
  },
];

export const EXPERIENCE = [
  {
    title: "Full Stack Development Intern",
    company: "Tap Academy",
    period: "2025",
    description:
      "Intensive training program focused on full-stack web development with Java and modern JavaScript frameworks.",
    achievements: [
      "Developed multiple full-stack applications using Spring Boot and React",
      "Mastered RESTful API design and implementation",
      "Gained hands-on experience with MySQL database design",
    ],
  },
];

export const EDUCATION = [
  {
    degree: "Bachelor of Engineering in Information Science",
    institution: "B.M.S Institute of Technology and Management",
    period: "2022 - 2025",
    cgpa: "8.24",
    icon: GraduationCap,
  },
  {
    degree: "Diploma in Computer Science Engineering",
    institution: "East West Institute of Polytechnic College",
    period: "2019 - 2022",
    percentage: "74.51",
    icon: GraduationCap,
  },
];

export const CERTIFICATIONS = [
  "Full Stack Development - Tap Academy",
  "Java - Infosys Foundation",
  "Cloud Computing Funadamentals - Infosys Springboard",
  "Generative AI Mastermind - Outskill",
  "Cloud computing service models - Great Learning Support",
  "Meta AI & AI Tools - SkillNation",
];

export const SOCIAL_LINKS = [
  {
    name: "GitHub",
    icon: "github",
    url: "https://github.com/Sathvikrk2002",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    url: "https://www.linkedin.com/in/sathvik-rk/",
  },
  {
    name: "Instagram",
    icon: "instagram",
    url: "https://www.instagram.com/sathvik_rk/",
  },
];
