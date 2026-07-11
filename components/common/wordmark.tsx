import { cn } from "@/lib/utils";

interface WordmarkProps {
  className?: string;
}

/**
 * Renders the author's name as a self-closing JSX tag, e.g. <VikramAnand />.
 * A small nod to the medium: this is how his own tools would refer to him.
 */
export function Wordmark({ className }: WordmarkProps) {
  return (
    <div className={cn("flex items-center gap-2.5 font-sans tracking-tight group/wordmark", className)}>
      {/* Sleek VA Monogram Icon */}
      <div className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-md shadow-primary/10 transition-transform duration-300 group-hover/wordmark:scale-105">
        <span className="font-heading text-sm font-black tracking-wider text-primary-foreground">VA</span>
        {/* Subtle hover glow circle behind icon */}
        <div className="absolute -inset-1 -z-10 rounded-xl bg-gradient-to-br from-primary to-accent-2 opacity-30 blur-sm transition-opacity duration-300 group-hover/wordmark:opacity-60" />
      </div>
      
      {/* Brand Name Text */}
      <div className="flex flex-col text-left leading-none">
        <span className="font-heading text-base font-extrabold text-foreground tracking-normal transition-colors group-hover/wordmark:text-primary">
          Vikram <span className="bg-gradient-to-r from-primary to-accent-2 bg-clip-text text-transparent">Anand</span>
        </span>
        <span className="text-[10px] font-medium text-muted-foreground tracking-widest uppercase mt-0.5">
          Frontend Developer
        </span>
      </div>
    </div>
  );
}
