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
    id: "tatatechnologies",
    position: "Software Development Engineer",
    company: "Tata Technologies",
    location: "Pune, India",
    startDate: new Date("2024-08-07"),
    endDate: "Present",
    client:"Jaguar Land Rover",
    description: [
      "Executed JWT token-based authentication with OAuth 2.0 integration.",
      "Integrated 45+ REST APIs using Axios with optimized payload handling.",
      "Designed 12+ dynamic forms with React Hook Form validation.",
      "Implemented Redux Toolkit with 10+ state slices for performance optimization.",
    ],
    achievements: [
      "Executed JWT token-based authentication with OAuth 2.0 integration, reducing unauthorized access by 30% and improving login success rate to 60.8%.",
      "Integrated 45+ REST APIs using Axios, achieving 85% endpoint coverage and reducing average response time by 300 ms.",
      "Designed 12+ dynamic forms with React Hook Form validation, reducing user input errors by 65% and submission time by 40%.",
      "Implemented Redux Toolkit with 10+ state slices, reducing component re-renders by 35% and improving overall application performance by 25%.",
      "Collaborated closely with product owners and designers for user-centric features, improving usability and trader workflows.",
    ],
    skills: [
      "Typescript",
      "React",
      "Next.js",
      "HTML 5",
      "CSS 3",
      "Javascript",
      "Docker",
      "CI/CD",
    ],
    companyUrl: "https://www.tatatechnologies.com/in/",
    logo: "/logo.png",
  },
  {
    id: "tatatechnologies",
    position: "Software Development Engineer",
    company: "Tata Technologies",
    location: "Pune, India",
    startDate: new Date("2024"),
    endDate: new Date("2024"),
    client:"Jaguar Land Rover",
    description: [
      "Enhanced date-range filtering for vehicle registration records, improving query accuracy by 70% and reducing search time from 2.5 s to 0.8 s.",
      "Resolved 15+ critical React rendering issues, increasing system uptime by 50.9% and reducing crash reports by 60%.",
    ],
    achievements: [
      "Enhanced date-range filtering for vehicle registration records, improving query accuracy by 70% and reducing search time from 2.5 s to 0.8 s.",
      "Resolved 15+ critical React rendering issues, increasing system uptime by 50.9% and reducing crash reports by 60%.",
    ],
    skills: ["React", "Node.js", "Javascript"],
    companyUrl: "https://www.tatatechnologies.com/in/",
    logo: "/logo.png",
  },
  {
   id: "tatatechnologies",
    position: "Software Development Engineer",
    company: "Tata Technologies",
    location: "Pune, India",
    startDate: new Date("2023"),
    endDate: new Date("2023"),
    client:"McLaren,",
    description: [
      "Developed a Neo4J-powered inventory system managing 10,000+ equipment records, improving query efficiency by 40% through index optimization.",
      "Implemented 50+ Cypher test cases achieving 95% coverage, reducing data inconsistencies by 75% and improving schema validation speed by 30%.",
    ],
    achievements: [
      "Developed a Neo4J-powered inventory system managing 10,000+ equipment records, improving query efficiency by 40% through index optimization.",
      "Implemented 50+ Cypher test cases achieving 95% coverage, reducing data inconsistencies by 75% and improving schema validation speed by 30%.",
    ],
    skills: [
      "React",
      "Neo4J",
      "GraphQL",
      "HTML 5",
      "CSS 3",
      "Javascript",
    ],
    companyUrl: "https://www.tatatechnologies.com/in/",
    logo: "/logo.png",
  },
];
