// ============================================================
// SINGLE SOURCE OF TRUTH — All project data lives here.
// Import this in any file that needs project information.
// ============================================================

export const projects = [
  {
    id: 0,
    title: "E-Commerce Platform",
    shortDescription: "Full-stack shopping platform with product catalog, cart, and admin panel.",
    fullDescription:
      "A comprehensive e-commerce platform built to deliver a seamless online shopping experience. Features include a dynamic product catalog, user authentication, shopping cart with session persistence, order management, and an admin dashboard for managing inventory, orders, and customers.",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    liveUrl: null, // Replace with real URL when deployed
    githubUrl: null, // Replace with GitHub repo URL
    images: [
      "images/pic1-1.jpg",
      "images/pic1-2.jpg",
      "images/pic1-3.jpg",
      "images/pic1-4.jpg",
    ],
    icon: "cart",
    featured: true,
  },
  {
    id: 1,
    title: "KB Medical Laboratory",
    shortDescription: "Lab management system for patient records, test reports, and staff scheduling.",
    fullDescription:
      "A complete medical laboratory management system developed to digitize and streamline lab operations. The system manages patient records, automates test report generation, handles staff scheduling, and provides a secure dashboard for administrators. Significantly reduces manual paperwork and improves accuracy in laboratory workflows.",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    liveUrl: "https://kb-medical-lab.netlify.app",
    githubUrl: "https://github.com/arsalanktk/kb-medical-lab",
    images: [
      "images/pic2-1.jpg",
      "images/pic2-2.jpg",
      "images/pic2-3.jpg",
      "images/pic2-4.jpg",
    ],
    icon: "medical",
    featured: true,
  },
  {
    id: 2,
    title: "Rubi — Smart Assistant Chatbot",
    shortDescription: "Intelligent rule-based chatbot with typewriter UI and natural conversation flow.",
    fullDescription:
      "Rubi is a context-aware assistant chatbot built with vanilla JavaScript. It uses multi-strategy keyword matching — exact match, substring search, and word-overlap scoring — to deliver relevant responses. Features include a typewriter animation effect, smooth message transitions, and a clean floating UI. Designed as a foundation for future NLP and AI API integration.",
    technologies: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://ai-chatbot-application.netlify.app",
    githubUrl: "https://github.com/arsalanktk/ai-chatbot",
    images: [
      "images/pic3-1.jpg",
      "images/pic3-2.jpg",
      "images/pic3-3.jpg",
      "images/pic3-4.jpg",
    ],
    icon: "bot",
    featured: true,
  },
  {
    id: 3,
    title: "School Management Portal",
    shortDescription: "Digital platform for students, teachers, and parents with role-based access.",
    fullDescription:
      "A full-featured school management web application with role-based access for students, teachers, and parents. Students can register online, check timetables, view grades, and access study materials. Teachers manage courses, record attendance, and upload grades. Parents can monitor their child's academic progress and receive school announcements in real-time.",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    liveUrl: null,
    githubUrl: null,
    images: [
      "images/pic4-1.jpg",
      "images/pic4-2.jpg",
      "images/pic4-3.jpg",
      "images/pic4-4.jpg",
    ],
    icon: "school",
    featured: false,
  },
  {
    id: 4,
    title: "Car Rental Management System",
    shortDescription: "Desktop application for booking, fleet inventory, and customer management.",
    fullDescription:
      "A desktop application built to automate car rental business operations. Customers can browse available vehicles and make bookings; administrators manage fleet inventory, schedule maintenance, handle payments, and maintain comprehensive customer records. The system eliminates manual processes and provides reliable data storage with real-time availability tracking.",
    technologies: ["JavaScript", "Node.js", "MongoDB"],
    liveUrl: null,
    githubUrl: null,
    images: [
      "images/pic5-2.jpg",
      "images/pic5-3.jpg",
      "images/pic5-4.jpg",
    ],
    icon: "car",
    featured: false,
  },
  {
    id: 5,
    title: "Travel Agency Website",
    shortDescription: "Responsive agency site with destination guides, booking forms, and testimonials.",
    fullDescription:
      "A responsive and visually engaging website for a travel agency. Features curated destination guides, interactive booking forms, package listings, customer testimonials, and a dynamic gallery. Optimized for mobile devices to reach travelers on any screen size.",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    liveUrl: null,
    githubUrl: null,
    images: [
      "images/pic6-1.jpg",
      "images/pic6-2.jpg",
      "images/pic6-3.jpg",
      "images/pic6-4.jpg",
    ],
    icon: "travel",
    featured: false,
  },
];

export const projectIcons = {
  cart: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>`,
  medical: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>`,
  bot: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="10" rx="2"/><circle cx="12" cy="5" r="2"/><path d="M12 7v4"/><line x1="8" y1="16" x2="8" y2="16"/><line x1="16" y1="16" x2="16" y2="16"/></svg>`,
  school: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>`,
  car: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 17H3a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v9a2 2 0 0 1-2 2h-1"/><circle cx="7" cy="17" r="2"/><path d="M9 17h6"/><circle cx="17" cy="17" r="2"/></svg>`,
  travel: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`,
};