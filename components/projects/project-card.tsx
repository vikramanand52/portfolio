import Image from "next/image";
import Link from "next/link";

import { Icons } from "@/components/common/icons";
import { Button } from "@/components/ui/button";
import ChipContainer from "@/components/ui/chip-container";
import { ProjectInterface } from "@/config/projects";

interface ProjectCardProps {
  project: ProjectInterface;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group relative flex max-w-sm flex-col rounded-2xl border border-border/40 bg-gradient-to-b from-card to-card/65 backdrop-blur-md p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-transparent hover:shadow-xl hover:shadow-primary/5 premium-card-border text-left">
      <div className="relative h-[200px] w-full overflow-hidden rounded-xl border border-border/50">
        <Image
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          src={project.companyLogoImg}
          alt={`${project.companyName} preview`}
          fill
        />
        <div className="absolute right-3 top-3 flex items-center gap-1.5 rounded-full border border-primary/20 bg-background/80 px-2.5 py-1 font-sans text-[9px] font-bold uppercase tracking-wider text-primary shadow-sm backdrop-blur transition-all duration-300">
          {project.type === "Personal" ? (
            <Icons.userFill className="h-3 w-3" />
          ) : (
            <Icons.work className="h-3 w-3" />
          )}
          {project.type}
        </div>
      </div>
      <div className="flex flex-1 flex-col pt-5">
        <h5 className="text-lg font-heading font-extrabold tracking-tight text-foreground transition-colors group-hover:text-primary">
          {project.companyName}
        </h5>
        <p className="mt-2 line-clamp-3 text-xs leading-relaxed text-muted-foreground font-medium">
          {project.shortDescription}
        </p>
        <div className="mt-4">
          <ChipContainer textArr={project.techStack.slice(0, 4)} />
        </div>
        <Link href={`/projects/${project.id}`} className="mt-5 mt-auto w-full">
          <Button
            variant="ghost"
            size="sm"
            className="w-full justify-between hover:bg-muted group/btn rounded-xl border border-border/50 transition-all duration-300 group-hover:border-primary/30"
          >
            <span className="font-semibold text-xs tracking-wide">View Details</span>
            <Icons.arrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Button>
        </Link>
      </div>
    </div>
  );
}
