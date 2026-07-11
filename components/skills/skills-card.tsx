import Rating from "@/components/skills/rating";
import { skillsInterface } from "@/config/skills";

interface SkillsCardProps {
  skills: skillsInterface[];
}

export default function SkillsCard({ skills }: SkillsCardProps) {
  // Group the skills dynamically into disciplines
  const categories = {
    "Frontend & Frameworks": ["Next.js", "React.js", "Typescript", "Javascript", "HTML 5", "CSS 3", "Angular"],
    "State & Data Management": ["Redux", "GraphQL", "MySQL"],
    "Design & UI Systems": ["Material UI", "Tailwind CSS", "Bootstrap"],
    "Backend & Tooling": ["Node.js", "Spring Boot", "PostMan"],
  };

  return (
    <div className="space-y-10 w-full text-left">
      {Object.entries(categories).map(([categoryName, skillNames]) => {
        const categorySkills = skills.filter((s) => skillNames.includes(s.name));
        if (categorySkills.length === 0) return null;

        return (
          <div key={categoryName} className="space-y-4">
            <h3 className="font-heading text-lg font-bold border-b border-border pb-2 text-foreground/80">
              {categoryName}
            </h3>
            
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {categorySkills.map((skill) => (
                <div
                  key={skill.name}
                  className="group relative overflow-hidden rounded-2xl border border-border bg-card/45 backdrop-blur-md p-5 transition-all duration-300 hover:-translate-y-1 hover:border-transparent hover:shadow-lg hover:shadow-primary/5 premium-card-border"
                >
                  {/* Subtle background card highlight */}
                  <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/5 to-accent-2/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-105">
                      <skill.icon size={24} className="transition-transform duration-300 group-hover:scale-110" />
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <h4 className="font-bold text-foreground text-sm tracking-tight truncate group-hover:text-primary transition-colors">
                          {skill.name}
                        </h4>
                        <span className="text-[10px] font-semibold text-muted-foreground font-mono">
                          {skill.rating * 20}%
                        </span>
                      </div>
                      
                      {/* Premium Animated Progress Bar */}
                      <div className="h-1.5 w-full bg-muted rounded-full overflow-hidden mt-1">
                        <div 
                          className="h-full bg-gradient-to-r from-primary to-accent-2 rounded-full transition-all duration-1000 origin-left"
                          style={{ width: `${skill.rating * 20}%` }}
                        />
                      </div>
                    </div>
                  </div>
                  
                  <p className="mt-3 text-xs leading-normal text-muted-foreground line-clamp-2">
                    {skill.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
