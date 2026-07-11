/**
 * Maps a skill or category name to a Tailwind color pairing, so tags read
 * a little like syntax highlighting — each technology keeps its own
 * identity instead of every chip looking the same.
 *
 * Falls back to a neutral border/foreground pairing for anything unlisted.
 */
export const tagColorMap: Record<string, string> = {
  // Languages
  Typescript: "bg-blue-500/10 text-blue-700 border-blue-500/20 dark:text-blue-300",
  Javascript:
    "bg-amber-500/10 text-amber-700 border-amber-500/20 dark:text-amber-300",
  Java: "bg-orange-500/10 text-orange-700 border-orange-500/20 dark:text-orange-300",
  Python:
    "bg-yellow-500/10 text-yellow-700 border-yellow-500/20 dark:text-yellow-300",
  "HTML 5": "bg-orange-500/10 text-orange-700 border-orange-500/20 dark:text-orange-300",
  "CSS 3": "bg-sky-500/10 text-sky-700 border-sky-500/20 dark:text-sky-300",
  Dart: "bg-teal-500/10 text-teal-700 border-teal-500/20 dark:text-teal-300",
  SQL: "bg-blue-500/10 text-blue-700 border-blue-500/20 dark:text-blue-300",
  NoSQL: "bg-green-500/10 text-green-700 border-green-500/20 dark:text-green-300",

  // Frameworks / libraries
  "React.js": "bg-cyan-500/10 text-cyan-700 border-cyan-500/20 dark:text-cyan-300",
  "Next.js": "bg-foreground/10 text-foreground border-foreground/20",
  "Node.js":
    "bg-green-500/10 text-green-700 border-green-500/20 dark:text-green-300",
  "Nest.js": "bg-rose-500/10 text-rose-700 border-rose-500/20 dark:text-rose-300",
  "express.js":
    "bg-foreground/10 text-foreground border-foreground/20",
  Redux: "bg-purple-500/10 text-purple-700 border-purple-500/20 dark:text-purple-300",
  Angular: "bg-red-500/10 text-red-700 border-red-500/20 dark:text-red-300",
  "Vue.js": "bg-emerald-500/10 text-emerald-700 border-emerald-500/20 dark:text-emerald-300",
  "Material UI": "bg-blue-500/10 text-blue-700 border-blue-500/20 dark:text-blue-300",
  "Tailwind CSS": "bg-teal-500/10 text-teal-700 border-teal-500/20 dark:text-teal-300",
  Bootstrap: "bg-violet-500/10 text-violet-700 border-violet-500/20 dark:text-violet-300",
  "React Native": "bg-cyan-500/10 text-cyan-700 border-cyan-500/20 dark:text-cyan-300",
  "Spring Boot": "bg-green-500/10 text-green-700 border-green-500/20 dark:text-green-300",
  Laravel: "bg-red-500/10 text-red-700 border-red-500/20 dark:text-red-300",
  Flask: "bg-foreground/10 text-foreground border-foreground/20",
  Django: "bg-green-500/10 text-green-700 border-green-500/20 dark:text-green-300",
  FastAPI: "bg-teal-500/10 text-teal-700 border-teal-500/20 dark:text-teal-300",
  "Framer Motion": "bg-fuchsia-500/10 text-fuchsia-700 border-fuchsia-500/20 dark:text-fuchsia-300",
  "Three.js": "bg-foreground/10 text-foreground border-foreground/20",
  WebGL: "bg-red-500/10 text-red-700 border-red-500/20 dark:text-red-300",
  TensorFlow: "bg-orange-500/10 text-orange-700 border-orange-500/20 dark:text-orange-300",
  PyTorch: "bg-red-500/10 text-red-700 border-red-500/20 dark:text-red-300",
  Flutter: "bg-sky-500/10 text-sky-700 border-sky-500/20 dark:text-sky-300",

  // Data / infra
  MongoDB: "bg-green-500/10 text-green-700 border-green-500/20 dark:text-green-300",
  MySQL: "bg-blue-500/10 text-blue-700 border-blue-500/20 dark:text-blue-300",
  PostgreSQL: "bg-indigo-500/10 text-indigo-700 border-indigo-500/20 dark:text-indigo-300",
  Redis: "bg-red-500/10 text-red-700 border-red-500/20 dark:text-red-300",
  Neo4J: "bg-blue-500/10 text-blue-700 border-blue-500/20 dark:text-blue-300",
  GraphQL: "bg-pink-500/10 text-pink-700 border-pink-500/20 dark:text-pink-300",
  Docker: "bg-sky-500/10 text-sky-700 border-sky-500/20 dark:text-sky-300",
  Kubernetes: "bg-blue-500/10 text-blue-700 border-blue-500/20 dark:text-blue-300",
  AWS: "bg-amber-500/10 text-amber-700 border-amber-500/20 dark:text-amber-300",
  Azure: "bg-sky-500/10 text-sky-700 border-sky-500/20 dark:text-sky-300",
  "Google Cloud": "bg-blue-500/10 text-blue-700 border-blue-500/20 dark:text-blue-300",
  Firebase: "bg-amber-500/10 text-amber-700 border-amber-500/20 dark:text-amber-300",
  Supabase: "bg-emerald-500/10 text-emerald-700 border-emerald-500/20 dark:text-emerald-300",
  Vercel: "bg-foreground/10 text-foreground border-foreground/20",
  Netlify: "bg-teal-500/10 text-teal-700 border-teal-500/20 dark:text-teal-300",
  Prisma: "bg-foreground/10 text-foreground border-foreground/20",
  "CI/CD": "bg-violet-500/10 text-violet-700 border-violet-500/20 dark:text-violet-300",
  Jenkins: "bg-red-500/10 text-red-700 border-red-500/20 dark:text-red-300",

  // Tooling
  Git: "bg-orange-500/10 text-orange-700 border-orange-500/20 dark:text-orange-300",
  Figma: "bg-purple-500/10 text-purple-700 border-purple-500/20 dark:text-purple-300",
  Webpack: "bg-sky-500/10 text-sky-700 border-sky-500/20 dark:text-sky-300",
  Jest: "bg-rose-500/10 text-rose-700 border-rose-500/20 dark:text-rose-300",
  Cypress: "bg-emerald-500/10 text-emerald-700 border-emerald-500/20 dark:text-emerald-300",
  Storybook: "bg-pink-500/10 text-pink-700 border-pink-500/20 dark:text-pink-300",
  PostMan: "bg-orange-500/10 text-orange-700 border-orange-500/20 dark:text-orange-300",
  "Google Auth": "bg-blue-500/10 text-blue-700 border-blue-500/20 dark:text-blue-300",
  "Socket.io": "bg-foreground/10 text-foreground border-foreground/20",
  Sass: "bg-pink-500/10 text-pink-700 border-pink-500/20 dark:text-pink-300",
  PHP: "bg-indigo-500/10 text-indigo-700 border-indigo-500/20 dark:text-indigo-300",
  Databricks: "bg-orange-500/10 text-orange-700 border-orange-500/20 dark:text-orange-300",

  // Categories
  "Full Stack": "bg-indigo-500/10 text-indigo-700 border-indigo-500/20 dark:text-indigo-300",
  Frontend: "bg-cyan-500/10 text-cyan-700 border-cyan-500/20 dark:text-cyan-300",
  Backend: "bg-green-500/10 text-green-700 border-green-500/20 dark:text-green-300",
  "UI/UX": "bg-pink-500/10 text-pink-700 border-pink-500/20 dark:text-pink-300",
  "Web Dev": "bg-blue-500/10 text-blue-700 border-blue-500/20 dark:text-blue-300",
  "Mobile Dev": "bg-orange-500/10 text-orange-700 border-orange-500/20 dark:text-orange-300",
  "3D Modeling": "bg-purple-500/10 text-purple-700 border-purple-500/20 dark:text-purple-300",
  "AI/ML": "bg-violet-500/10 text-violet-700 border-violet-500/20 dark:text-violet-300",
};

export const defaultTagColor =
  "bg-background text-foreground border-border";

export function getTagColor(content: string): string {
  return tagColorMap[content] ?? defaultTagColor;
}
