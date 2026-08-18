import * as React from "react";
import { cn } from "@/lib/utils";

function Badge({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-border-strong bg-inset px-2.5 py-1 font-mono text-[11px] text-muted-foreground",
        className,
      )}
      {...props}
    />
  );
}

export { Badge };
