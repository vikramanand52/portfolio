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
      "Created a mobile-first ordering UI in React and Tailwind CSS with lazy-loaded routes and Jest/RTL coverage.",
    websiteLink: "",
    githubLink: "https://github.com/vikramanand52",
    techStack: ["React.js", "Tailwind CSS", "Typescript", "Jest", "React Query"],
    startDate: new Date("2024-01-01"),
    endDate: new Date("2024-06-30"),
    companyLogoImg: "/projects/builtdesign/logo.png",
    descriptionDetails: {
      paragraphs: [
        "I built a mobile-first ordering UI in React and Tailwind CSS with lazy-loaded routes to deliver a highly responsive experience.",
        "I connected live menu and order APIs using React Query, keeping the UI fast and responsive during data fetching while handling loading/error states gracefully.",
        "To ensure code quality and robustness, I wrote comprehensive Jest and React Testing Library tests covering the entire ordering flow from cart checkout to order confirmation."
      ],
      bullets: [
        "Built a mobile-first ordering UI in React and Tailwind CSS with lazy-loaded routes.",
        "Wrote Jest and React Testing Library tests covering the core ordering flow from cart to checkout.",
        "Wired up live menu and order APIs with React Query, keeping the UI responsive during data fetching and handling loading/error states gracefully."
      ]
    }
  },
  {
    id: "Invoice-Management-System",
    companyName: "AI-Enabled B2B Invoice Management System",
    type: "Personal",
    category: ["Web Dev", "Full Stack", "AI/ML"],
    shortDescription:
      "Developed a full-stack invoice system with React, Java, and MySQL, featuring ML-driven payment due date predictions.",
    websiteLink: "",
    githubLink: "https://github.com/vikramanand52",
    techStack: ["React.js", "Java", "MySQL", "SQL"],
    startDate: new Date("2023-01-01"),
    endDate: new Date("2023-12-31"),
    companyLogoImg: "/projects/builtdesign/invoice.png",
    descriptionDetails: {
      paragraphs: [
        "Built a full-stack B2B invoice management system featuring React on the frontend, and Java, JDBC, and MySQL powering the backend database layer.",
        "Integrated a simple machine learning model to predict payment due dates from historical invoice data, helping businesses forecast cashflows.",
        "Added advanced search, filtering, and role-based views for different user types to support key B2B workflows like approvals and payment tracking."
      ],
      bullets: [
        "Built a full-stack invoice system (React, Java, JDBC, MySQL) with a simple ML model to predict payment due dates from historical invoice data.",
        "Added search and filtering for invoices and connected the frontend to REST APIs to support common B2B workflows like approvals and payment tracking.",
        "Implemented role-based views and actions for different user types to secure enterprise data operations."
      ]
    }
  },
  {
    id: "JLR-Rental-Fleethub",
    companyName: "JLR - Rental Fleethub",
    type: "Professional",
    category: ["Web Dev", "Frontend", "UI/UX"],
    shortDescription:
      "A complex, multi-step booking and rental platform for JLR's fleet operations, integrating 15+ REST endpoints.",
    websiteLink: "",
    githubLink: "",
    techStack: ["React.js", "Redux", "Typescript", "Docker", "CI/CD", "Tailwind CSS", "Figma", "Jira", "React Query"],
    startDate: new Date("2025-01-01"),
    endDate: new Date("2026-07-12"),
    companyLogoImg: "/projects/builtdesign/jlr_fleethub.png",
    descriptionDetails: {
      paragraphs: [
        "As part of the JLR team at Tata Technologies, I built complex, multi-step booking forms integrated against 15+ REST endpoints for fleet availability and pricing, leveraging TypeScript throughout for type safety across shared data models.",
        "I implemented Redux-based session handling and JWT authentication with role-based access, collaborating closely with backend engineers on token refresh and permission contracts, reducing session-related bugs by 33%.",
        "To handle data-intensive operations, I built filtering, pagination, and sorting for 15+ responsive micro-frontend modules, bringing page load times down significantly through memoization and virtualized lists."
      ],
      bullets: [
        "Built complex, multi-step booking forms with React Hooks and React Query, integrating them against 15+ REST endpoints for fleet availability and pricing.",
        "Implemented Redux-based session handling and JWT authentication with role-based access, cutting reported session-related bugs by roughly a third.",
        "Built filtering, pagination, and sorting for 15+ responsive micro-frontend modules, optimizing page load times using memoization and virtualized lists.",
        "Added a batch export feature for records and containerized the build with Docker, setting up GitHub Actions CI/CD pipelines.",
        "Collaborated in Figma to translate mockups into pixel-accurate, responsive components."
      ]
    }
  },
  {
    id: "JLR-ToolBox",
    companyName: "JLR - ToolBox",
    type: "Professional",
    category: ["Web Dev", "Frontend"],
    shortDescription:
      "Internal tooling dashboard connecting 45+ REST APIs with centralized error handling and reusable form components.",
    websiteLink: "",
    githubLink: "",
    techStack: ["React.js", "Redux", "Material UI", "MySQL", "GraphQL", "Jest", "React Testing Library", "Axios"],
    startDate: new Date("2024-01-01"),
    endDate: new Date("2025-01-01"),
    companyLogoImg: "/projects/builtdesign/jlr_toolbox.png",
    descriptionDetails: {
      paragraphs: [
        "Developed the JLR ToolBox dashboard, connecting 45+ REST APIs via Axios with centralized error handling and custom request interceptors for consistent retry behaviors.",
        "Designed and shipped a set of 12+ reusable, accessible form components built with React Hook Form and Material UI, following SOLID principles, to standardize input handling across several product teams.",
        "Managed complex application state with Redux Toolkit across 10+ slices, writing automated unit tests using Jest and React Testing Library to secure the codebase against regressions."
      ],
      bullets: [
        "Implemented JWT + OAuth 2.0 authentication and connected 45+ REST APIs via Axios, adding centralized error handling and request interceptors.",
        "Built 12+ reusable, accessible form components with React Hook Form and Material UI, following SOLID principles, to standardize input handling.",
        "Handled state management with Redux Toolkit across 10+ slices and wrote unit tests with Jest and React Testing Library to catch regressions.",
        "Queried and modeled relational data in MySQL and used GraphQL for nested data fetching."
      ]
    }
  },
  {
    id: "JLR-NVRS",
    companyName: "JLR - NVRS: New Vehicle Registration System",
    type: "Professional",
    category: ["Web Dev", "Frontend"],
    shortDescription:
      "Rebuilt NVRS date-range filtering mechanism, cutting query search time from 2.5s to under 1s.",
    websiteLink: "",
    githubLink: "",
    techStack: ["React.js", "Node.js", "Javascript"],
    startDate: new Date("2024-01-01"),
    endDate: new Date("2024-12-31"),
    companyLogoImg: "/projects/builtdesign/jlr_fleethub.png",
    descriptionDetails: {
      paragraphs: [
        "JLR NVRS is a New Vehicle Registration System optimized to handle high volumes of vehicle records and query search parameters.",
        "Rebuilt the date-range filtering mechanism, cutting search time from 2.5s to under 1s by moving filter computation logic off the main thread and implementing debounced user input.",
        "Resolved 15+ complex React rendering cycles and QA-reported rendering bugs, writing automated unit tests around the affected components to guarantee stability."
      ],
      bullets: [
        "Rebuilt date-range filtering to be faster and more accessible, cutting search time from 2.5s to under 1s.",
        "Moved filter logic off the main thread and debounced user inputs to optimize responsiveness.",
        "Fixed a batch of rendering bugs reported by QA and added unit test coverage around affected UI elements."
      ]
    }
  },
  {
    id: "McLaren-Validator-Frontend",
    companyName: "McLaren - Validator Frontend",
    type: "Professional",
    category: ["Web Dev", "Frontend", "UI/UX"],
    shortDescription:
      "A Neo4j-backed inventory tool visualizing relationships between 10,000+ parts and validators.",
    websiteLink: "",
    githubLink: "",
    techStack: ["React.js", "Neo4J", "GraphQL", "HTML 5", "CSS 3", "Javascript"],
    startDate: new Date("2023-08-01"),
    endDate: new Date("2024-01-01"),
    companyLogoImg: "/projects/builtdesign/mclaren_validator.png",
    descriptionDetails: {
      paragraphs: [
        "Built the frontend for a Neo4j-powered equipment inventory system, rendering complex relationships between 10,000+ equipment parts and validators in an accessible, interactive UI.",
        "Designed hierarchical graph navigation views that let validators easily trace equipment lineage and dependency cycles.",
        "Authored 50+ Cypher-based database test cases alongside the QA team to validate schema constraints and catch data inconsistencies before release."
      ],
      bullets: [
        "Built the frontend for a Neo4j-backed inventory tool handling 10,000+ records, rendering graph relationships in an accessible, navigable UI.",
        "Authored 50+ Cypher-based test cases alongside the QA team to validate query correctness and catch data inconsistencies.",
        "Designed robust visual cues and search parameters to manage data-dense graph nodes."
      ]
    }
  },
  {
    id: "Portfolio",
    companyName: "Portfolio",
    type: "Personal",
    category: ["Web Dev", "Frontend", "UI/UX"],
    shortDescription:
      "Developed a responsive portfolio website using Next.js, React, and Tailwind CSS to showcase projects and skills.",
    websiteLink: "",
    githubLink: "https://github.com/vikramanand52",
    techStack: [
      "Next.js",
      "React.js",
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
      ]
    }
  }
];

export const featuredProjects = Projects.slice(0, 3);

