import { cn } from "@/lib/utils";
import { getTagColor } from "@/lib/tag-colors";

interface ChipProps {
  content: string;
}

export default function Chip({ content }: ChipProps) {
  return (
    <div
      className={cn(
        "center relative inline-block select-none whitespace-nowrap rounded-md border py-1.5 px-2.5 align-baseline font-mono text-xs font-medium leading-none",
        getTagColor(content)
      )}
    >
      {content}
    </div>
  );
}
