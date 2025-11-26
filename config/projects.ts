import { ValidCategory, ValidExpType, ValidSkills } from "./constants";

interface PagesInfoInterface {
  title: string;
  imgArr: string[];
  description?: string;
}

interface DescriptionDetailsInterface {
  paragraphs: string[];
  bullets: string[];
}

export interface ProjectInterface {
  id: string;
  type: ValidExpType;
  companyName: string;
  category: ValidCategory[];
  shortDescription: string;
  websiteLink?: string;
  githubLink?: string;
  techStack: ValidSkills[];
  startDate: Date;
  endDate: Date;
  companyLogoImg: any;
  descriptionDetails: DescriptionDetailsInterface;
}

export const Projects: ProjectInterface[] = [
  {
    id: "Food-Ordering-App",
    companyName: "Food Ordering App",
    type: "Personal",
    category: ["Web Dev", "Full Stack", "UI/UX"],
    shortDescription:
      "Created a food ordering application demo with responsive UI, optimized performance, and comprehensive testing.",
    websiteLink: "",
    techStack: ["React", "Tailwind CSS", "Typescript", "Jest"],
    startDate: new Date("2024-01-01"),
    endDate: new Date("2024"),
    companyLogoImg: "/projects/builtdesign/logo.png",
    descriptionDetails: {
      paragraphs: [
        "I developed a Food Ordering App demo focused on responsive design and performance optimization. The project was built using React and Tailwind CSS to deliver a modern, user-friendly interface.",
        "I utilized React Hooks and custom hooks to enhance functionality, implementing lazy loading to improve performance and reduce initial load times. This ensured a smooth and efficient user experience across devices.",
        "To maintain reliability, I conducted comprehensive unit and integration testing using Jest, ensuring robust functionality and minimizing bugs. This project allowed me to strengthen my skills in frontend development, performance optimization, and testing best practices.",
      ],
      bullets: [
        "Created a food ordering application using React and Tailwind CSS for responsive UI design.",
        "Utilized React Hooks and custom hooks to enhance functionality.",
        "Implemented lazy loading for performance optimization.",
        "Conducted comprehensive unit and integration testing using Jest.",
        "Managed application flow and ensured smooth user experience across devices.",
      ],
    },
  },
  {
  id: "Invoice-Management-System",
  companyName: "AI-Enabled B2B Invoice Management System",
  type: "Personal",
  category: ["Web Dev", "Full Stack", "AI/ML"],
  shortDescription:
    "Developed a comprehensive invoice management system to streamline B2B workflows with AI-driven features.",
  websiteLink: "",
  techStack: [
    "React",
    "Java",
    "MySQL",
  ],
  startDate: new Date("2023-01-01"),
  endDate: new Date("2023-12-31"),
  companyLogoImg: "/projects/builtdesign/invoice.png",
  descriptionDetails: {
    paragraphs: [
      "As part of Code 2023, I built an AI-enabled B2B Invoice Management System designed to streamline transaction workflows and improve efficiency for enterprises.",
      "The system was developed using ReactJS for the frontend, with JDBC and Java powering backend services, and MySQL as the database layer. I implemented advanced data visualization to provide clear insights into invoice statuses and transaction histories.",
      "Additionally, I integrated robust search functionalities, enabling users to quickly locate invoices and records. This project enhanced my skills in full-stack development, database management, and building enterprise-grade applications."
    ],
    bullets: [
      "Built a comprehensive Invoice Management System using ReactJS, JDBC, Java, and MySQL to streamline B2B transaction workflows.",
      "Implemented advanced data visualization for invoice tracking and transaction insights.",
      "Developed powerful search functionalities to improve accessibility and efficiency.",
      "Designed an admin panel for managing clients, invoices, and system configurations.",
      "Enhanced enterprise workflows with AI-driven features and automation."
    ],
  },
},
{
  id: "Portfolio",
  companyName: "Portfolio",
  type: "Personal",
  category: ["Web Dev", "Frontend", "UI/UX"],
  shortDescription:
    "Developed a responsive portfolio website using Next.js, React, and Tailwind CSS to showcase projects and skills.",
  websiteLink: "",
  techStack: [
    "Next.js",
    "React",
    "Tailwind CSS",
    "Javascript",
    "Typescript"
  ],
  startDate: new Date("2025-11-01"),
  endDate: new Date("2025-12-01"),
  companyLogoImg: "/projects/builtdesign/portfolio.png",
  descriptionDetails: {
    paragraphs: [
      "I designed and built a modern portfolio website using Next.js and React to highlight my personal projects and technical expertise.",
      "The frontend leverages Tailwind CSS for responsive design and clean UI components, ensuring a seamless experience across devices.",
      "This project allowed me to strengthen my skills in frontend development, component-driven architecture, and deploying production-ready applications."
    ],
    bullets: [
      "Created a responsive portfolio website using Next.js, React, and Tailwind CSS.",
      "Implemented reusable UI components for consistency and scalability.",
      "Designed a clean, modern interface optimized for desktop and mobile devices.",
      "Showcased personal projects with detailed descriptions and tech stacks.",
      "Enhanced frontend development skills with component-driven design and responsive layouts."
    ],
  },
}

];

export const featuredProjects = Projects.slice(0, 3);
