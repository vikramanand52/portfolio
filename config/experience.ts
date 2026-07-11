import { ValidSkills } from "./constants";

export interface ExperienceInterface {
  id: string;
  position: string;
  company: string;
  location: string;
  startDate: Date;
  endDate: Date | "Present";
  description: string[];
  achievements: string[];
  skills: ValidSkills[];
  companyUrl?: string;
  logo?: string;
  client?:string;
}

export const experiences: ExperienceInterface[] = [
  {
    id: "tatatechnologies-jlr-fleethub",
    position: "Software Developer (Frontend Developer)",
    company: "Tata Technologies",
    location: "Pune, Maharashtra",
    startDate: new Date("2025-01-01"),
    endDate: "Present",
    client: "Jaguar Land Rover",
    description: [
      "Built complex, multi-step booking forms with React Hooks and React Query, integrating them against 15+ REST endpoints for fleet availability and pricing.",
      "Implemented Redux-based session handling and JWT authentication with role-based access, cutting reported session-related bugs by roughly a third.",
      "Built filtering, pagination, and sorting for 15+ responsive micro-frontend modules, optimizing page load times using memoization and virtualized lists."
    ],
    achievements: [
      "Built complex, multi-step booking forms with React Hooks and React Query, integrating them against 15+ REST endpoints for fleet availability and pricing, with TypeScript used throughout for type safety across shared data models.",
      "Implemented Redux-based session handling and JWT authentication with role-based access, working closely with the backend team to align on token refresh and permission contracts, cutting reported session-related bugs by roughly a third.",
      "Built filtering, pagination, and sorting for 15+ responsive micro-frontend modules, bringing page load times down noticeably on data-heavy screens through memoization and virtualized lists.",
      "Added a batch export feature for records so users no longer had to download files one at a time; also set up the GitHub Actions CI/CD pipeline and containerized the build with Docker for consistent deployments.",
      "Collaborated with designers in Figma to translate mockups into pixel-accurate, responsive components, and tracked feature work through sprint cycles in Jira."
    ],
    skills: [
      "Typescript",
      "React.js",
      "React Query",
      "Redux",
      "Docker",
      "CI/CD",
      "Tailwind CSS",
      "Figma",
      "Jira"
    ],
    companyUrl: "https://www.tatatechnologies.com/in/",
    logo: "/logo.png"
  },
  {
    id: "tatatechnologies-jlr-toolbox",
    position: "Software Developer (Frontend Developer)",
    company: "Tata Technologies",
    location: "Pune, Maharashtra",
    startDate: new Date("2024-01-01"),
    endDate: new Date("2025-01-01"),
    client: "Jaguar Land Rover",
    description: [
      "Implemented JWT + OAuth 2.0 authentication and connected 45+ REST APIs via Axios for the internal tooling dashboard, adding centralized error handling and request interceptors.",
      "Built a set of 12+ reusable, accessible form components with React Hook Form and Material UI, following SOLID principles, used across several teams to standardize input handling.",
      "Handled state management with Redux Toolkit across 10+ slices and wrote unit tests with Jest and React Testing Library to catch regressions before release."
    ],
    achievements: [
      "Implemented JWT + OAuth 2.0 authentication and connected 45+ REST APIs via Axios for the internal tooling dashboard, adding centralized error handling and request interceptors for consistent retry behavior.",
      "Built a set of 12+ reusable, accessible form components with React Hook Form and Material UI, following SOLID principles, used across several teams to standardize input handling.",
      "Handled state management with Redux Toolkit across 10+ slices and wrote unit tests with Jest and React Testing Library to catch regressions before release.",
      "Queried and modeled relational data in MySQL to support new tooling features, and used GraphQL for a few endpoints where clients needed flexible, nested data fetching."
    ],
    skills: [
      "React.js",
      "Redux",
      "Material UI",
      "MySQL",
      "GraphQL",
      "Jest",
      "React Testing Library",
      "Axios"
    ],
    companyUrl: "https://www.tatatechnologies.com/in/",
    logo: "/logo.png"
  },
  {
    id: "tatatechnologies-jlr-nvrs",
    position: "Software Developer (Frontend Developer)",
    company: "Tata Technologies",
    location: "Pune, Maharashtra",
    startDate: new Date("2024-01-01"),
    endDate: new Date("2024-12-31"),
    client: "Jaguar Land Rover",
    description: [
      "Rebuilt date-range filtering to be faster and more accessible, cutting search time from 2.5s to under 1s by moving filter logic off the main thread and debouncing user input.",
      "Fixed a batch of React rendering bugs reported by QA during regression testing, and added test coverage around the affected components to prevent recurrence."
    ],
    achievements: [
      "Rebuilt date-range filtering to be faster and more accessible, cutting search time from 2.5s to under 1s by moving filter logic off the main thread and debouncing user input.",
      "Fixed a batch of React rendering bugs reported by QA during regression testing, and added test coverage around the affected components to prevent recurrence."
    ],
    skills: [
      "React.js",
      "Node.js",
      "Javascript"
    ],
    companyUrl: "https://www.tatatechnologies.com/in/",
    logo: "/logo.png"
  },
  {
    id: "tatatechnologies-mclaren-validator",
    position: "Software Developer (Frontend Developer)",
    company: "Tata Technologies",
    location: "Pune, Maharashtra",
    startDate: new Date("2023-08-01"),
    endDate: new Date("2024-01-01"),
    client: "McLaren",
    description: [
      "Built the frontend for a Neo4j-backed inventory tool handling 10,000+ records, rendering graph relationships between parts and validators in an accessible, navigable UI.",
      "Authored 50+ Cypher-based test cases alongside the QA team to validate query correctness and catch data inconsistencies before release."
    ],
    achievements: [
      "Built the frontend for a Neo4j-backed inventory tool handling 10,000+ records, rendering graph relationships between parts and validators in an accessible, navigable UI.",
      "Authored 50+ Cypher-based test cases alongside the QA team to validate query correctness and catch data inconsistencies before release."
    ],
    skills: [
      "React.js",
      "Neo4J",
      "GraphQL",
      "HTML 5",
      "CSS 3",
      "Javascript"
    ],
    companyUrl: "https://www.tatatechnologies.com/in/",
    logo: "/logo.png"
  }
];
